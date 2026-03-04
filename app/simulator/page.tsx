"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════
   TIPOS
═══════════════════════════════════════════════════════════════ */
type TipoProjeto = "residencial" | "empresa" | "industrial" | "agricola" | "outro";
type SimStep = 1 | 2 | 3;

interface SimForm {
  tipo:       TipoProjeto | "";
  area:       string;   // m²
  piso:       string;   // nº pisos
  fp:         string;   // factor de potência estimado
  consumo:    string;   // kWh/dia
  autonomia:  string;   // dias bateria
  trifasico:  boolean;
  gerador:    boolean;
  spda:       boolean;
  ve:         boolean;
  solar:      boolean;
  ups:        boolean;
  localizacao: string;
  /* Cargas explícitas (residencial) */
  nAr:        string;   // nº ar condicionado
  nChuveiro:  string;   // nº chuveiros eléctricos
  nFogao:     string;   // fogão / placa indução
}

interface MatItem {
  ref:      string;
  nome:     string;
  marca:    string;
  qtd:      number;
  unidade:  string;
  cat:      string;
  obs?:     string;
  norma?:   string;  // ex: "IEC 60364-5-52"
}

interface CalcDebug {
  potInst_kW:   number;
  corrNom_A:    number;
  corrCorr_A:   number;
  quedaTensao:  number;  // %
  secaoAlim_mm2: number;
  nCircIlum:    number;
  nCircTomadas: number;
  nCircForca:   number;
  ampQGD:       number;
  kwhDia:       number;
  kwpSolar:     number;
  hPicoSolar:   number;
  nPaineis:     number;
}

/* ═══════════════════════════════════════════════════════════════
   CONSTANTES TÉCNICAS (IEC 60364 / EN 60228)
═══════════════════════════════════════════════════════════════ */

// Resistividade cobre a 70°C: 0.0225 Ω·mm²/m
const RHO_CU = 0.0225;

// Capacidade de corrente (A) de cabos Cu isolados PVC em calha/conduta
// [secção mm²]: corrente admissível em circuito monofásico (método B, 30°C)
const CAP_CORRENTE: Record<number, number> = {
  1.5: 15.5, 2.5: 21, 4: 27, 6: 34, 10: 46, 16: 61,
  25: 80, 35: 99, 50: 119, 70: 151, 95: 182, 120: 210,
};

// Secções normalizadas (mm²)
const SECCOES = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120];

// Lux mínimo por norma EN 12464-1
const LUX_NORMA: Record<TipoProjeto | "outro", number> = {
  residencial: 100,
  empresa:     500,   // escritório open-space
  industrial:  300,   // área de trabalho geral
  agricola:    200,
  outro:       300,
};

// Horas pico solar por localização (HSP médio anual, kWh/m²/dia)
const HSP: Record<string, number> = {
  "Luanda": 5.4, "Benguela": 5.6, "Huambo": 5.2, "Lobito": 5.5,
  "Namibe": 5.8, "Cabinda": 4.9, "Malanje": 5.0, "Soyo": 4.9,
  "Lisboa": 4.7, "Porto": 4.3,
  "Praia":  5.9, "São Tomé": 4.8,
  "Outro":  5.0,
};

// Factor de simultaneidade por tipo (IEC 60364-4-43 / tabelas práticas)
const FS: Record<TipoProjeto | "outro", number> = {
  residencial: 0.55, empresa: 0.65, industrial: 0.80,
  agricola: 0.70, outro: 0.70,
};

// Potência típica por m² (W/m²) para dimensionamento de potência instalada
const W_M2: Record<TipoProjeto | "outro", number> = {
  residencial: 40,   // ilum(10) + tomadas(15) + AVAC(15)
  empresa:     80,   // ilum(20) + IT(20) + AVAC(25) + misc(15)
  industrial: 150,   // força motriz dominante
  agricola:    60,
  outro:       90,
};

/* ═══════════════════════════════════════════════════════════════
   MOTOR DE CÁLCULO — base IEC 60364
═══════════════════════════════════════════════════════════════ */
function calcular(f: SimForm): { mats: MatItem[]; debug: CalcDebug } {
  const mats: MatItem[] = [];
  const tipo = (f.tipo || "outro") as TipoProjeto;
  const m2    = Math.max(10, parseFloat(f.area)   || 100);
  const pisos = Math.max(1,  parseInt(f.piso)      || 1);
  const fp    = Math.min(1, Math.max(0.6, parseFloat(f.fp) || 0.85));
  const kwhDia = Math.max(1, parseFloat(f.consumo) || (m2 * W_M2[tipo] * 10 / 1000));
  const aut   = Math.max(0, parseInt(f.autonomia)  || 1);
  const tri   = f.trifasico || tipo === "industrial";
  const Vn    = tri ? 400 : 230;   // V
  const res   = tipo === "residencial";
  const ind   = tipo === "industrial";
  const agr   = tipo === "agricola";

  /* ── 1. POTÊNCIA INSTALADA ESTIMADA ── */
  // Cargas explícitas (residencial)
  const nAr       = Math.max(0, parseInt(f.nAr)       || 0);
  const nChuveiro = Math.max(0, parseInt(f.nChuveiro) || 0);
  const nFogao    = Math.max(0, parseInt(f.nFogao)    || 0);
  const pCargas   = nAr * 2500 + nChuveiro * 5500 + nFogao * 7000; // W

  // Densidade de carga base
  const pBase     = m2 * W_M2[tipo]; // W
  const pTotal    = pBase + pCargas;  // W instalados total

  // Potência de cálculo (com fs e fp)
  const pCalc_kW  = (pTotal * FS[tipo]) / (fp * 1000); // kW

  /* ── 2. CORRENTE NOMINAL DO QGD ── */
  // I = P / (√3 · V · cosφ) para trifásico | P / (V · cosφ) para monofásico
  const corrNom_A = tri
    ? (pCalc_kW * 1000) / (1.732 * Vn * fp)
    : (pCalc_kW * 1000) / (Vn * fp);

  // Corrente corrigida (+20% margem)
  const corrCorr_A = corrNom_A * 1.2;

  /* ── 3. CALIBRE DO QGD ── */
  const calQGD_std = [16,20,25,32,40,50,63,80,100,125,160,200,250,315,400,500,630,800,1000];
  const ampQGD = calQGD_std.find(c => c >= corrCorr_A) ?? 1000;

  /* ── 4. SECÇÃO DO CABO DE ALIMENTAÇÃO PRINCIPAL ── */
  // Queda de tensão máxima: 3% (IEC 60364-5-52)
  // ΔU = (ρ · L · I) / S  →  S = (ρ · L · I) / ΔU
  // L estimada: 15m para monofásico, 30m para trifásico (quadro→origem)
  const L_alim  = tri ? 30 : 15;
  const dU_max  = Vn * 0.03;   // 3% de queda
  const S_alim_calc = (RHO_CU * L_alim * corrCorr_A) / dU_max;
  const S_alim  = SECCOES.find(s => s >= S_alim_calc && CAP_CORRENTE[s] >= corrCorr_A) ?? 120;

  // Queda de tensão real com secção escolhida
  const quedaTensao = ((RHO_CU * L_alim * corrCorr_A) / S_alim / Vn) * 100;

  /* ── 5. CIRCUITOS INTERNOS ── */
  // Iluminação: 1 circuito por 8 pontos de luz (norma prática)
  const luxNorma    = LUX_NORMA[tipo];
  const eficLum     = 130;           // lm/W (LED eficiente)
  const ku          = 0.65;          // factor utilização (ambiente médio)
  const km          = 0.80;          // factor manutenção
  const nLuminarias = Math.ceil((m2 * luxNorma) / (eficLum * (res ? 18 : ind ? 150 : 36) * ku * km));
  const nCircIlum   = Math.max(1, Math.ceil(nLuminarias / 8));

  // Tomadas: 1 tomada por 5–8m² (IEC 60364-7 residential / NP EN 60670)
  const nTomadas    = Math.ceil(m2 / (res ? 6 : ind ? 12 : 8));
  const nCircTomadas= Math.max(1, Math.ceil(nTomadas / 8));

  // Força / ar condicionado / equipamentos
  const nCircForca  = res
    ? nAr + nChuveiro + (nFogao > 0 ? 1 : 0) + 1 // cada carga pesada = 1 circuito dedicado
    : ind
      ? Math.ceil(m2 / 80)
      : Math.ceil(m2 / 50);

  const nCircTotal  = nCircIlum + nCircTomadas + nCircForca;

  /* ── 6. SECÇÃO CABOS INTERNOS (queda tensão por circuito) ── */
  // Circuito iluminação: 16A max, 20m médio
  const I_ilum  = 16, L_ilum = 20;
  const S_ilum_calc = (RHO_CU * L_ilum * I_ilum) / (230 * 0.03);
  const S_ilum  = SECCOES.find(s => s >= S_ilum_calc) ?? 2.5;  // ≥1.5 por norma → 2.5 prático

  // Circuito tomadas: 20A max, 20m médio
  const I_tom   = 20, L_tom = 20;
  const S_tom_calc = (RHO_CU * L_tom * I_tom) / (230 * 0.03);
  const S_tom   = SECCOES.find(s => s >= S_tom_calc) ?? 2.5;

  /* ── 7. SOLAR ── */
  const hPicoSolar  = HSP[f.localizacao] ?? 5.0;
  const kwpSolar    = f.solar ? Math.ceil((kwhDia / hPicoSolar) * 1.20) : 0;   // 20% sobredimensionamento
  const nPaineis    = f.solar ? Math.ceil((kwpSolar * 1000) / 580) : 0;
  const kwhBat      = f.solar && aut > 0 ? Math.ceil(kwhDia * aut * 1.25 / 0.90) : 0; // 25% reserva + 90% DoD LFP

  /* ═══ MATERIAIS ═══ */

  /* QUADROS */
  mats.push({
    cat: "Quadros BT", ref: "QGD-BT",
    nome: `Quadro Geral de Distribuição BT — Calibre ${ampQGD}A`,
    marca: "Legrand / Fabricação Própria Multienergia",
    qtd: 1, unidade: "un",
    obs: `${tri ? "Trifásico 3×400V" : "Monofásico 230V"} · I_cálculo=${corrCorr_A.toFixed(0)}A · ${pisos} piso(s)`,
    norma: "IEC 61439-1/2",
  });
  if (!res && pisos > 1) mats.push({
    cat: "Quadros BT", ref: "QS-PISO",
    nome: "Quadro Secundário de Piso/Zona",
    marca: "Legrand",
    qtd: pisos - 1 + (ind ? Math.floor(m2 / 500) : 0), unidade: "un",
    obs: "Distribuição por pisos e zonas funcionais",
    norma: "IEC 61439",
  });

  /* PROTECÇÃO */
  // Disjuntores de iluminação (16A)
  mats.push({
    cat: "Protecção", ref: "DIS-C16",
    nome: "Disjuntor Magnetotérmico C16A 1P+N",
    marca: "Legrand TX3",
    qtd: nCircIlum, unidade: "un",
    obs: `${nCircIlum} circuitos iluminação · ${nLuminarias} pontos de luz`,
    norma: "IEC 60898-1",
  });
  // Disjuntores tomadas (20A)
  mats.push({
    cat: "Protecção", ref: "DIS-C20",
    nome: "Disjuntor Magnetotérmico C20A 1P+N",
    marca: "Legrand TX3",
    qtd: nCircTomadas, unidade: "un",
    obs: `${nCircTomadas} circuitos tomadas · ${nTomadas} tomadas estimadas`,
    norma: "IEC 60898-1",
  });
  // Disjuntores força
  if (nCircForca > 0) mats.push({
    cat: "Protecção", ref: "DIS-C32",
    nome: tri ? "Disjuntor Magnetotérmico C32A 3P" : "Disjuntor Magnetotérmico C32A 2P",
    marca: "Legrand TX3",
    qtd: nCircForca, unidade: "un",
    obs: res
      ? `AC(${nAr}) + Chuveiros(${nChuveiro}) + Fogão(${nFogao}) + spare`
      : `${nCircForca} circuitos de força / AVAC`,
    norma: "IEC 60898-1",
  });
  // Interruptores diferenciais 30mA (protecção pessoas)
  const nDDR_30 = Math.ceil(nCircTotal / 4);
  mats.push({
    cat: "Protecção", ref: "DDR-30mA",
    nome: "Interruptor Diferencial 30mA 2P — Tipo A",
    marca: "Legrand TX3",
    qtd: nDDR_30, unidade: "un",
    obs: "Protecção contra contactos indirectos · sensibilidade 30mA",
    norma: "IEC 61008-1",
  });
  if (!res) {
    const nDDR_300 = Math.ceil(nCircForca / 4);
    mats.push({
      cat: "Protecção", ref: "DDR-300mA",
      nome: "Interruptor Diferencial 300mA 4P — Tipo B",
      marca: "Legrand TX3",
      qtd: Math.max(1, nDDR_300), unidade: "un",
      obs: "Protecção circuitos força / equipamentos trifásicos",
      norma: "IEC 61008-1",
    });
  }
  // Descarregador de sobretensões QGD
  mats.push({
    cat: "Protecção", ref: "SPD-T2",
    nome: "Descarregador Sobretensões Tipo 2 (SPD)",
    marca: "Legrand",
    qtd: 1, unidade: "un",
    obs: `Uc ≥ ${tri ? 440 : 275}V · In ≥ 20kA · instalação no QGD principal`,
    norma: "IEC 61643-11",
  });

  /* CABLAGEM — secções calculadas por IEC 60364-5-52 */
  mats.push({
    cat: "Cablagem", ref: `CAB-${S_ilum}`,
    nome: `Cabo H07V-K ${S_ilum}mm² (circuitos iluminação)`,
    marca: "Nexans / Prysmian",
    qtd: Math.round(nCircIlum * L_ilum * 3),  // 3 condutores (F+N+T) × comprimento médio × nº circuitos
    unidade: "m",
    obs: `ΔU ≤ 3% · I_adm=${CAP_CORRENTE[S_ilum]}A · método pose B`,
    norma: "IEC 60364-5-52",
  });
  mats.push({
    cat: "Cablagem", ref: `CAB-${S_tom}`,
    nome: `Cabo H07V-K ${S_tom}mm² (circuitos tomadas)`,
    marca: "Nexans / Prysmian",
    qtd: Math.round(nCircTomadas * L_tom * 3),
    unidade: "m",
    obs: `ΔU ≤ 3% · I_adm=${CAP_CORRENTE[S_tom]}A · inclui condutor de protecção`,
    norma: "IEC 60364-5-52",
  });
  if (nCircForca > 0) {
    const S_forca = res ? (nChuveiro > 0 ? 6 : 4) : ind ? 10 : 6;
    mats.push({
      cat: "Cablagem", ref: `CAB-${S_forca}F`,
      nome: `Cabo H07V-K ${S_forca}mm² (circuitos força/cargas)`,
      marca: "Nexans / Prysmian",
      qtd: Math.round(nCircForca * 18 * (tri ? 4 : 3)),
      unidade: "m",
      obs: `I_adm=${CAP_CORRENTE[S_forca]}A · circuitos dedicados`,
      norma: "IEC 60364-5-52",
    });
  }
  // Cabo de alimentação principal
  mats.push({
    cat: "Cablagem", ref: `CAB-${S_alim}A`,
    nome: `Cabo NYY ${S_alim}mm² (acometimento / alimentação QGD)`,
    marca: "Nexans",
    qtd: Math.round(L_alim * (tri ? 4 : 2) * 1.1),  // nº condutores × comprimento × 10% folga
    unidade: "m",
    obs: `ΔU calculada=${quedaTensao.toFixed(2)}% (máx. 3%) · I_nom=${corrNom_A.toFixed(0)}A`,
    norma: "IEC 60364-5-52",
  });

  /* INFRAESTRUTURA */
  // Calha técnica: ~0,4m por m² de área (estimativa prática)
  const mCalha = Math.ceil(m2 * 0.4);
  mats.push({
    cat: "Infraestrutura", ref: "CALHA-40x40",
    nome: "Calha Técnica PVC 40×40mm c/ tampa",
    marca: "Legrand DLP",
    qtd: mCalha, unidade: "m",
    obs: "Distribuição horizontal / corridores",
  });
  if (!res) mats.push({
    cat: "Infraestrutura", ref: "CALHA-100x60",
    nome: "Calha Técnica PVC 100×60mm c/ tampa",
    marca: "Legrand DLP",
    qtd: Math.ceil(m2 * 0.10), unidade: "m",
    obs: "Coluna principal / percurso de força",
  });
  mats.push({
    cat: "Infraestrutura", ref: "CORRUG-20",
    nome: "Tubo Corrugado Flexível Ø20mm (VD)",
    marca: "Legrand",
    qtd: Math.round(m2 * 0.85), unidade: "m",
    obs: "Ligação da calha às caixas de encastrar",
  });
  if (ind) mats.push({
    cat: "Infraestrutura", ref: "BANDEJA-100",
    nome: "Bandeja Portacabos em Aço 100mm",
    marca: "Legrand",
    qtd: Math.ceil(m2 * 0.07), unidade: "m",
    obs: "Percurso principal industrial (aéreo)",
  });
  mats.push({
    cat: "Infraestrutura", ref: "CAIXA-60x60",
    nome: "Caixa de Encastrar 60×60mm 3 módulos",
    marca: "Legrand",
    qtd: Math.ceil(m2 / (res ? 5 : 7)), unidade: "un",
  });

  /* ILUMINAÇÃO — cálculo por luximetria EN 12464-1 */
  const wLum = ind ? 150 : res ? 18 : 36;
  const ipLum = ind ? "IP65" : "IP44";
  mats.push({
    cat: "Iluminação", ref: `LED-${wLum}W`,
    nome: `${ind ? "Armadura LED Industrial" : res ? "Painel LED Encastrado" : "Armadura LED Slim"} ${wLum}W`,
    marca: "Philips / Legrand",
    qtd: nLuminarias, unidade: "un",
    obs: `E_m=${luxNorma} lux · ku=${ku} · km=${km} · ${ipLum} · ≥130lm/W`,
    norma: "EN 12464-1",
  });
  mats.push({
    cat: "Iluminação", ref: "EMG-8W-3H",
    nome: "Bloco Autónomo Emergência 8W 3h",
    marca: "Legrand",
    qtd: Math.max(2, Math.ceil(nLuminarias / 6)), unidade: "un",
    obs: "1 bloco por cada 6 luminárias · saídas e vias de evacuação",
    norma: "EN 1838",
  });

  /* TOMADAS */
  mats.push({
    cat: "Tomadas", ref: "TOM-16A",
    nome: res ? "Tomada Dupla Schuko 16A 2P+T" : "Tomada Industrial 16A IP44 2P+T",
    marca: "Legrand",
    qtd: nTomadas, unidade: "un",
    obs: `1 tomada / ${res ? "6" : "8"}m² · ${nCircTomadas} circuitos protegidos por DDR 30mA`,
    norma: "IEC 60884-1",
  });
  if (!res) mats.push({
    cat: "Tomadas", ref: "TOM-32A-IND",
    nome: tri ? "Tomada Industrial 32A 3P+N+T IP44" : "Tomada Industrial 32A 2P+T IP44",
    marca: "Legrand",
    qtd: Math.max(1, Math.ceil(m2 / 50)), unidade: "un",
    obs: "Força motriz / equipamentos de potência",
    norma: "IEC 60309-2",
  });

  /* SOLAR */
  if (f.solar) {
    const pInv = kwpSolar <= 5 ? 5 : kwpSolar <= 10 ? 10 : kwpSolar <= 20 ? 20 : kwpSolar <= 30 ? 30 : kwpSolar <= 60 ? 60 : 100;
    mats.push({
      cat: "Solar FV", ref: "PV-580W",
      nome: "Painel Solar Monocristalino Half-Cut 580Wp",
      marca: "Huawei FusionSolar",
      qtd: nPaineis, unidade: "un",
      obs: `P_sistema=${kwpSolar} kWp · HSP ${f.localizacao}=${hPicoSolar}h/dia · Produção≈${Math.round(kwpSolar * hPicoSolar * 365 / 1000)} MWh/ano`,
      norma: "IEC 61215",
    });
    mats.push({
      cat: "Solar FV", ref: `INV-${pInv}K`,
      nome: `Inversor Híbrido SUN2000-${pInv}KTL`,
      marca: "Huawei",
      qtd: 1, unidade: "un",
      obs: `P_FV/P_inv = ${(kwpSolar / pInv * 100).toFixed(0)}% (recomendado 90–120%) · MPPT duplo · WiFi`,
      norma: "IEC 62109-1/2",
    });
    mats.push({
      cat: "Solar FV", ref: "CAB-PV-4",
      nome: "Cabo Solar PV H1Z2Z2-K 4mm²",
      marca: "Prysmian",
      qtd: nPaineis * 14, unidade: "m",
      obs: "UV-resistente · duplo isolamento · T -40/+90°C",
      norma: "EN 50618",
    });
    mats.push({
      cat: "Solar FV", ref: "STRUCT-FV",
      nome: "Estrutura Alumínio Fixação Cobertura (kit 2 painéis)",
      marca: "K2 Systems",
      qtd: Math.ceil(nPaineis / 2), unidade: "kit",
      obs: "Inclinação 15–35° · carga vento ≥1,5 kN/m²",
    });
    mats.push({
      cat: "Solar FV", ref: "MC4-PAR",
      nome: "Conector MC4 (par macho + fêmea)",
      marca: "Stäubli / Amphenol",
      qtd: nPaineis * 2, unidade: "par",
      obs: "IP68 · 1500V DC · 30A",
      norma: "IEC 62852",
    });
    mats.push({
      cat: "Solar FV", ref: "SPD-DC-T2",
      nome: "Descarregador Sobretensões DC Tipo 2 (string box)",
      marca: "Legrand",
      qtd: Math.ceil(nPaineis / 12), unidade: "un",
      obs: "Protecção strings FV · Uc ≥ 1000V DC",
      norma: "IEC 61643-31",
    });
    if (aut > 0 && kwhBat > 0) {
      const nMod = Math.ceil(kwhBat / 5);
      mats.push({
        cat: "Armazenamento", ref: "BAT-LFP-5K",
        nome: "Módulo Bateria LFP 5 kWh — PowerOcean",
        marca: "EcoFlow",
        qtd: nMod, unidade: "un",
        obs: `${(nMod * 5).toFixed(0)} kWh úteis · DoD=90% · SoH garantido · ${aut}d autonomia @ ${kwhDia.toFixed(0)}kWh/dia`,
        norma: "IEC 62619",
      });
    }
  }

  /* UPS */
  if (f.ups) {
    const kvaUPS = res ? 3 : ind ? Math.ceil(pCalc_kW / fp * 1.3) : Math.ceil(pCalc_kW * 0.25 / fp * 1.3);
    const kvaStd = [3,6,10,20,40,80,120,160,200,240,300,400,600,800].find(k => k >= kvaUPS) ?? 800;
    const fabUPS = kvaStd > 40 ? "Socomec MODULYS GP" : "Salicru SLC TWIN RT";
    mats.push({
      cat: "UPS", ref: `UPS-${kvaStd}KVA`,
      nome: `UPS Online Dupla Conversão ${kvaStd} KVA`,
      marca: fabUPS,
      qtd: 1, unidade: "un",
      obs: `VRLA interna 10min · FP carga=0,9 · P_útil=${(kvaStd * 0.9).toFixed(0)}kW · extensível por módulos`,
      norma: "IEC 62040-1/3",
    });
  }

  /* POSTO DE TRANSFORMAÇÃO (industrial de grande porte) */
  if (ind && pCalc_kW > 200) {
    const kvaT = pCalc_kW > 800 ? 2000 : pCalc_kW > 400 ? 1000 : 630;
    mats.push({
      cat: "Média Tensão", ref: `PT-${kvaT}K`,
      nome: `Posto de Transformação Compacto ${kvaT} KVA`,
      marca: "Toshiba T&D TCSU",
      qtd: 1, unidade: "un",
      obs: `10–30 kV · P_cálculo=${pCalc_kW.toFixed(0)}kW · IP66 · Class AB · pré-montado`,
      norma: "IEC 62271-202",
    });
  }

  /* SPDA */
  if (f.spda) {
    // Nível de protecção: industrial = I, outros = III (IEC 62305-3)
    const nivel = ind ? "I" : "III";
    const raio  = ind ? 20 : 45;  // raio de curvatura (m) correspondente ao raio de esfera rolante
    const Rp    = ind ? 107 : 60; // raio de protecção ESE (m)
    mats.push({
      cat: "SPDA", ref: "PARARR-ESE",
      nome: `Para-Raios ESE Franklin France — Nível ${nivel}`,
      marca: "Franklin France",
      qtd: 1, unidade: "un",
      obs: `Raio protecção=${Rp}m · IEC 62305 Nível ${nivel} · mastro ≥ 3m acima da cobertura`,
      norma: "IEC 62305-3",
    });
    const mCond = Math.ceil(Math.sqrt(m2) * 4.5);
    mats.push({
      cat: "SPDA", ref: "COND-DESC-50",
      nome: "Condutor de Descida Cobre nu 50mm²",
      marca: "Franklin France",
      qtd: mCond, unidade: "m",
      obs: "Percurso mais directo do mastro ao eléctrodo de terra",
      norma: "IEC 62305-3",
    });
    const nElec = Math.max(2, Math.ceil(m2 / 150));
    mats.push({
      cat: "SPDA", ref: "ELEC-TERRA-14",
      nome: "Eléctrodo de Terra Aço Inox Ø14mm × 1,5m",
      marca: "Franklin France",
      qtd: nElec, unidade: "un",
      obs: `R_terra alvo ≤ 10Ω · ${nElec} eléctrodos interligados em malha`,
      norma: "IEC 62305-3",
    });
    mats.push({
      cat: "SPDA", ref: "SPD-T1T2",
      nome: "Descarregador Combinado Tipo 1+2 (para-raios no QGD)",
      marca: "Legrand",
      qtd: 1, unidade: "un",
      obs: "Protecção entrada energias induzidas · Iimp ≥ 12,5 kA",
      norma: "IEC 61643-11",
    });
    mats.push({
      cat: "SPDA", ref: "LIGAT-EQUIP",
      nome: "Barramento de Ligação de Equipotencialidade",
      marca: "Legrand",
      qtd: Math.ceil(m2 / 200) + 1, unidade: "un",
      obs: "BLP principal + BLS por piso / zona",
      norma: "IEC 60364-4-41",
    });
  }

  /* MOBILIDADE VE */
  if (f.ve) {
    const pvE = res ? 7.4 : ind ? 50 : 22;
    const nVE = res ? 1 : Math.max(2, Math.ceil(m2 / 500));
    mats.push({
      cat: "Mobilidade VE", ref: `EVSE-${pvE}KW`,
      nome: `Posto de Carregamento VE ${pvE} kW`,
      marca: pvE >= 50 ? "Circutor Raption" : "Huawei FusionCharge",
      qtd: nVE, unidade: "un",
      obs: pvE >= 50 ? "DC · CCS2 + CHAdeMO · OCPP 1.6 · telemetria" :
           pvE >= 22 ? "AC trifásico · Mode 3 · Type 2 · RFID · 32A" :
                       "AC monofásico · Mode 3 · Type 2 · 7,4kW · App",
      norma: "IEC 61851-1",
    });
    // Cabo dedicado para EVSE
    const S_VE  = pvE >= 22 ? 10 : 6;
    const I_VE  = pvE >= 50 ? 80 : pvE >= 22 ? 32 : 32;
    mats.push({
      cat: "Mobilidade VE", ref: `CAB-VE-${S_VE}`,
      nome: `Cabo NYY ${S_VE}mm² dedicado posto VE`,
      marca: "Nexans",
      qtd: nVE * 25, unidade: "m",
      obs: `I_adm=${CAP_CORRENTE[S_VE]}A ≥ I_carga=${I_VE}A · circuito dedicado com DDR 30mA Tipo A`,
    });
    mats.push({
      cat: "Mobilidade VE", ref: "DIS-VE",
      nome: `Disjuntor Dedicado ${pvE >= 22 ? "32A 3P" : "32A 1P+N"} para EVSE`,
      marca: "Legrand",
      qtd: nVE, unidade: "un",
      obs: "Circuito dedicado exclusivo por IEC 61851",
      norma: "IEC 60898-1",
    });
  }

  /* GRUPO GERADOR */
  if (f.gerador) {
    const kvaG_calc = (pCalc_kW / fp) * 1.25;
    const kvaG_std  = [10,15,20,30,40,60,80,100,150,200,250,300,400,500].find(k => k >= kvaG_calc) ?? 500;
    mats.push({
      cat: "Backup Gerador", ref: `GEN-${kvaG_std}K`,
      nome: `Grupo Gerador Diesel ${kvaG_std} KVA Insonorizado`,
      marca: "Perkins / Stamford",
      qtd: 1, unidade: "un",
      obs: `P_standby=${(kvaG_std * 0.9).toFixed(0)}kW · ≤70dB(A) a 7m · reservatório 8h · arranque automático`,
      norma: "ISO 8528-1",
    });
    mats.push({
      cat: "Backup Gerador", ref: "ATS-AUTO",
      nome: "Comutador Automático de Rede ATS 4P",
      marca: "Legrand",
      qtd: 1, unidade: "un",
      obs: "Tempo comutação ≤3s · monitorização tensão e frequência",
      norma: "IEC 60947-6-1",
    });
    mats.push({
      cat: "Backup Gerador", ref: `CAB-GEN-${S_alim}`,
      nome: `Cabo NYY ${S_alim}mm² ligação gerador → QGD`,
      marca: "Nexans",
      qtd: 40, unidade: "m",
      obs: "Secção igual ao acometimento principal",
    });
  }

  return {
    mats,
    debug: {
      potInst_kW: pCalc_kW,
      corrNom_A,
      corrCorr_A,
      quedaTensao,
      secaoAlim_mm2: S_alim,
      nCircIlum,
      nCircTomadas,
      nCircForca,
      ampQGD,
      kwhDia,
      kwpSolar,
      hPicoSolar,
      nPaineis,
    },
  };
}

/* ═══════════════════════════════════════════════════════════════
   CONFIG VISUAL
═══════════════════════════════════════════════════════════════ */
const TIPOS_PROJETO = [
  { id: "residencial" as TipoProjeto, label: "Residencial",       sub: "Moradia · Apartamento",
    icon: <svg viewBox="0 0 32 32" fill="none" width="28" height="28"><path d="M4 14L16 4l12 10v14H20v-9h-8v9H4V14z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg> },
  { id: "empresa" as TipoProjeto,     label: "Empresa / Escritório", sub: "Comercial · Serviços",
    icon: <svg viewBox="0 0 32 32" fill="none" width="28" height="28"><rect x="4" y="6" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M10 28V20h5v8M17 28V20h5v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><rect x="9" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="19" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="14" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/></svg> },
  { id: "industrial" as TipoProjeto,  label: "Industrial",         sub: "Fábrica · Armazém",
    icon: <svg viewBox="0 0 32 32" fill="none" width="28" height="28"><path d="M2 28V14l8-6v6l8-6v6l8-6v20H2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><rect x="6" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="14" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="22" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><path d="M10 6V2M18 4V2M26 6V2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
  { id: "agricola" as TipoProjeto,    label: "Agrícola / Rural",   sub: "Bombeamento · Campo",
    icon: <svg viewBox="0 0 32 32" fill="none" width="28" height="28"><circle cx="16" cy="14" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M16 7V3M16 21v-4M9 14H5M27 14h-4M11 9L8 6M24 6l-3 3M11 19l-3 3M24 22l-3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="16" cy="14" r="2.5" fill="currentColor" opacity=".4"/><path d="M8 28h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
  { id: "outro" as TipoProjeto,       label: "Outro / Misto",      sub: "Projecto personalizado",
    icon: <svg viewBox="0 0 32 32" fill="none" width="28" height="28"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8"/><path d="M16 10v2M16 20v2M10 16h2M20 16h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="3" fill="currentColor" opacity=".45"/></svg> },
];

const CAT_CFG: Record<string, { cor: string; bg: string; abrev: string }> = {
  "Quadros BT":       { cor: "#064e58", bg: "#e5f4f6", abrev: "QBT" },
  "Protecção":        { cor: "#095b66", bg: "#e8f7f9", abrev: "PRO" },
  "Cablagem":         { cor: "#0a7a89", bg: "#e6f5f7", abrev: "CAB" },
  "Infraestrutura":   { cor: "#095b66", bg: "#f0f9fa", abrev: "INF" },
  "Iluminação":       { cor: "#064e58", bg: "#e5f4f6", abrev: "ILU" },
  "Tomadas":          { cor: "#095b66", bg: "#e8f7f9", abrev: "TOM" },
  "Solar FV":         { cor: "#7a5200", bg: "#fff7e0", abrev: "SOL" },
  "Armazenamento":    { cor: "#7a5200", bg: "#fff3cc", abrev: "BAT" },
  "UPS":              { cor: "#095b66", bg: "#e8f7f9", abrev: "UPS" },
  "Média Tensão":     { cor: "#7a0000", bg: "#fce8e8", abrev: "MT"  },
  "SPDA":             { cor: "#8a4200", bg: "#fff0e0", abrev: "SPD" },
  "Mobilidade VE":    { cor: "#1a3a8f", bg: "#e6eeff", abrev: "VE"  },
  "Backup Gerador":   { cor: "#3a2a10", bg: "#f0ebe0", abrev: "GEN" },
};

/* ═══════════════════════════════════════════════════════════════
   COMPONENTE REVEAL (scroll animation)
═══════════════════════════════════════════════════════════════ */
function Reveal({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: `opacity .55s ${delay}s ease, transform .55s ${delay}s ease`, ...style }}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
═══════════════════════════════════════════════════════════════ */
export default function SimuladorPage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* ── Simulador state ── */
  const [step, setStep]     = useState<SimStep>(1);
  const [form, setForm]     = useState<SimForm>({
    tipo: "", area: "", piso: "1", fp: "0.85", consumo: "", autonomia: "1",
    trifasico: false, gerador: false, spda: false,
    ve: false, solar: false, ups: false, localizacao: "Luanda",
    nAr: "0", nChuveiro: "0", nFogao: "0",
  });
  const [result, setResult] = useState<{ mats: MatItem[]; debug: CalcDebug } | null>(null);
  const [catFil, setCatFil] = useState("Todos");
  const [showDebug, setShowDebug] = useState(false);

  const set = (k: keyof SimForm, v: string | boolean) => setForm(p => ({ ...p, [k]: v }));
  const canNext2 = form.area !== "" && form.consumo !== "";

  const runSim = () => {
    const r = calcular(form);
    setResult(r);
    setCatFil("Todos");
    setStep(3);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  const cats = useMemo(() => result
    ? ["Todos", ...Array.from(new Set(result.mats.map(m => m.cat)))]
    : ["Todos"], [result]);

  const visible = useMemo(() =>
    result ? (catFil === "Todos" ? result.mats : result.mats.filter(m => m.cat === catFil))
           : [], [result, catFil]);

  const NAV = [
    { label: "Início",    href: "/"          },
    { label: "Produtos",  href: "/#produtos"  },
    { label: "Serviços",  href: "/#servicos"  },
    { label: "Presença",  href: "/#presenca"  },
    { label: "Contacto",  href: "/#contacto"  },
  ];

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; color: inherit; }
        button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
        ::selection { background: #095b66; color: #fff; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #095b66; border-radius: 4px; }

        .nav-a { font-size: 11.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; transition: opacity .2s; }
        .nav-a:hover { opacity: .6; }

        .btn-teal { background:#095b66; color:#fff; border:none; border-radius:7px; padding:12px 26px; font-family:'Montserrat',sans-serif; font-size:12px; font-weight:700; letter-spacing:.07em; text-transform:uppercase; cursor:pointer; transition:all .25s; display:inline-flex; align-items:center; gap:8px; }
        .btn-teal:hover { background:#0a7a89; transform:translateY(-2px); box-shadow:0 8px 24px rgba(9,91,102,.25); }
        .btn-teal:disabled { background:#dde8ea; color:#9bbbbe; cursor:not-allowed; transform:none; box-shadow:none; }
        .btn-ghost { background:none; border:1.5px solid #dde8ea; border-radius:7px; padding:11px 22px; font-family:'Montserrat',sans-serif; font-size:12px; font-weight:700; color:#4a7275; cursor:pointer; transition:all .22s; display:inline-flex; align-items:center; gap:7px; }
        .btn-ghost:hover { border-color:#095b66; color:#095b66; }
        .btn-white { background:#fff; color:#095b66; border:none; border-radius:7px; padding:11px 22px; font-family:'Montserrat',sans-serif; font-size:12px; font-weight:700; letter-spacing:.07em; text-transform:uppercase; cursor:pointer; transition:all .25s; display:inline-flex; align-items:center; gap:7px; }
        .btn-white:hover { background:#e8f5f7; }

        .s-inp { width:100%; background:#fff; border:1.5px solid #dde8ea; border-radius:9px; color:#1a2c2e; padding:11px 14px; font-family:'Montserrat',sans-serif; font-size:13px; font-weight:600; outline:none; transition:border-color .2s, box-shadow .2s; }
        .s-inp:focus { border-color:#095b66; box-shadow:0 0 0 3px rgba(9,91,102,.08); }
        .s-inp::placeholder { color:#b0c8ca; font-weight:500; }
        .s-sel { appearance:none; cursor:pointer; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%23095b66' stroke-width='2.2' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 12px center; padding-right:34px; }
        .s-lbl { display:flex; flex-direction:column; gap:6px; }
        .s-lbl > span { font-size:10px; font-weight:700; color:#095b66; letter-spacing:.14em; text-transform:uppercase; }
        .s-lbl > small { font-size:10.5px; color:#9bbbbe; }

        .s-toggle { position:relative; display:inline-flex; width:40px; height:22px; flex-shrink:0; }
        .s-toggle input { opacity:0; width:0; height:0; }
        .s-sldr { position:absolute; inset:0; border-radius:99px; background:#dde8ea; cursor:pointer; transition:background .2s; }
        .s-sldr::before { content:''; position:absolute; width:16px; height:16px; left:3px; bottom:3px; background:#fff; border-radius:50%; transition:transform .22s; box-shadow:0 1px 3px rgba(0,0,0,.15); }
        .s-toggle input:checked + .s-sldr { background:#095b66; }
        .s-toggle input:checked + .s-sldr::before { transform:translateX(18px); }

        .tipo-btn { border:1.5px solid #dde8ea; border-radius:14px; background:#fff; cursor:pointer; transition:all .22s; padding:20px 14px; display:flex; flex-direction:column; align-items:center; gap:10px; font-family:'Montserrat',sans-serif; text-align:center; }
        .tipo-btn:hover { border-color:#095b66; transform:translateY(-2px); box-shadow:0 6px 22px rgba(9,91,102,.1); }
        .tipo-btn.on { border-color:#095b66; background:#095b66; transform:translateY(-3px); box-shadow:0 8px 28px rgba(9,91,102,.22); }

        .cat-pill { padding:6px 14px; border-radius:99px; border:1.5px solid #dde8ea; background:#fff; font-size:11px; font-weight:700; color:#4a7275; cursor:pointer; transition:all .18s; white-space:nowrap; font-family:'Montserrat',sans-serif; }
        .cat-pill:hover { border-color:#095b66; color:#095b66; }
        .cat-pill.on { background:#095b66; border-color:#095b66; color:#fff; }

        .mat-row { display:grid; grid-template-columns:52px 1fr 110px; align-items:center; border-bottom:1px solid #f0f5f6; transition:background .12s; }
        .mat-row:last-child { border-bottom:none; }
        .mat-row:hover { background:#f8fcfd; }

        .prog-bar { height:2px; flex:1; margin:0 6px 20px; transition:background .3s; border-radius:2px; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:none;} }
        .fade-up { animation: fadeUp .4s ease both; }

        /* Debug box */
        .debug-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }

        .footer-btn { background:none; border:none; padding:0; font-family:'Montserrat',sans-serif; font-size:13px; color:#4a7a7e; cursor:pointer; transition:color .2s; text-align:left; width:100%; }
        .footer-btn:hover { color:#fff; }

        @media(max-width:900px){
          .hide-mob{ display:none !important; }
          .col2{ grid-template-columns:1fr !important; }
          .col5{ grid-template-columns:1fr 1fr !important; }
          .debug-grid{ grid-template-columns:1fr 1fr !important; }
          .sp{ padding-left:22px !important; padding-right:22px !important; }
        }
        @media(max-width:540px){
          .col5{ grid-template-columns:1fr !important; }
          .mat-row{ grid-template-columns:44px 1fr !important; }
          .mat-row>div:last-child{ display:none !important; }
        }
      `}</style>

      {/* ══ NAVBAR ══════════════════════════════════════════════ */}
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, height:64,
        background: scrolled ? "rgba(255,255,255,.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(9,91,102,.08)" : "none",
        transition:"all .3s", display:"flex", alignItems:"center", padding:"0 48px" }}>
        <Link href="/" style={{ display:"flex", alignItems:"center", gap:9, flex:"0 0 auto" }}>
          <div style={{ width:34, height:34, borderRadius:7, background:"#095b66", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" stroke="#fff" strokeWidth=".5" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontWeight:900, fontSize:16, color: scrolled ? "#095b66":"#fff", transition:"color .3s" }}>
            Multi<span style={{ color: scrolled ? "#0a7a89":"rgba(255,255,255,.6)" }}>energia</span>
          </span>
        </Link>
        <nav className="hide-mob" style={{ display:"flex", gap:36, marginLeft:"auto", marginRight:32 }}>
          {NAV.map(l => (
            <Link key={l.label} href={l.href} className="nav-a"
              style={{ color: scrolled ? "#1a2c2e":"rgba(255,255,255,.85)" }}>{l.label}</Link>
          ))}
        </nav>
        <Link href="/#contacto" className="btn-teal hide-mob" style={{ fontSize:11, padding:"9px 20px" }}>Orçamento</Link>
      </header>

      {/* ══ HERO — faixa teal compacta ═══════════════════════════ */}
      <section style={{ background:"#095b66", paddingTop:64, position:"relative", overflow:"hidden" }}>
        {/* Grid pattern */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize:"56px 56px", pointerEvents:"none" }}/>
        {/* Geometric accent */}
        <div style={{ position:"absolute", top:0, right:0, width:"38%", height:"100%", background:"rgba(255,255,255,.04)", clipPath:"polygon(18% 0,100% 0,100% 100%,0 100%)", pointerEvents:"none" }}/>
        {/* Lightning bg */}
        <div style={{ position:"absolute", right:"5%", top:"50%", transform:"translateY(-50%)", opacity:.05, pointerEvents:"none" }}>
          <svg viewBox="0 0 200 300" fill="#fff" width="180" height="270"><path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/></svg>
        </div>

        <div className="sp" style={{ maxWidth:1280, margin:"0 auto", padding:"56px 80px 56px", position:"relative", zIndex:2 }}>
          {/* Breadcrumb */}
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:20 }}>
            <Link href="/" style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,.5)", letterSpacing:".08em", textTransform:"uppercase" }}>Início</Link>
            <span style={{ color:"rgba(255,255,255,.3)", fontSize:12 }}>›</span>
            <span style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,.8)", letterSpacing:".08em", textTransform:"uppercase" }}>Simulador</span>
          </div>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", gap:24, flexWrap:"wrap" }}>
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.2)", borderRadius:99, padding:"5px 14px", fontSize:11, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.85)", marginBottom:16 }}>
                Cálculo Base IEC 60364 · EN 12464
              </div>
              <h1 style={{ fontSize:"clamp(32px,4vw,58px)", fontWeight:900, color:"#fff", lineHeight:1.02, marginBottom:12 }}>
                Simulador de<br/>
                <span style={{ color:"rgba(255,255,255,.4)" }}>Projecto Eléctrico</span>
              </h1>
              <p style={{ fontSize:15, color:"rgba(255,255,255,.65)", maxWidth:480, lineHeight:1.75 }}>
                Estime a lista de materiais para o seu projecto em segundos. Cálculos baseados em normas internacionais — dimensionamento real de cabos, circuitos e protecções.
              </p>
            </div>
            {/* Badges normas */}
            <div className="hide-mob" style={{ display:"flex", flexDirection:"column", gap:9 }}>
              {["IEC 60364-5-52 — Secção de cabos","IEC 60898-1 — Disjuntores","EN 12464-1 — Iluminação","IEC 62305 — SPDA","IEC 61215 — Módulos FV"].map(n => (
                <div key={n} style={{ background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)", borderRadius:7, padding:"7px 14px", fontSize:10.5, fontWeight:700, color:"rgba(255,255,255,.7)", letterSpacing:".04em", display:"flex", alignItems:"center", gap:7 }}>
                  <div style={{ width:5, height:5, borderRadius:"50%", background:"#3ec8d4", flexShrink:0 }}/>
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Wave */}
        <div style={{ height:52, background:"#f0f9fa", clipPath:"ellipse(55% 100% at 50% 100%)" }}/>
      </section>

      {/* ══ STEPPER + CONTEÚDO ═══════════════════════════════════ */}
      <section style={{ background:"linear-gradient(180deg,#f0f9fa 0%,#fff 100%)", padding:"48px 0 80px" }}>
        <div className="sp" style={{ maxWidth:1180, margin:"0 auto", padding:"0 80px" }}>

          {/* Stepper */}
          <div style={{ display:"flex", alignItems:"center", maxWidth:560, marginBottom:48 }}>
            {([ [1,"Tipo de Projecto"], [2,"Pressupostos Técnicos"], [3,"Resultado"] ] as [number,string][]).map(([n,lbl],i) => (
              <React.Fragment key={n}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
                  <div style={{ width:38, height:38, borderRadius:"50%",
                    background: step>n ? "#095b66" : step===n ? "#095b66" : "#e8eef0",
                    border:`2px solid ${step>=n ? "#095b66" : "#dde8ea"}`,
                    display:"flex", alignItems:"center", justifyContent:"center", transition:"all .3s" }}>
                    {step > n
                      ? <svg viewBox="0 0 14 14" fill="none" width="12" height="12"><path d="M2 7l4 4 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      : <span style={{ fontSize:13, fontWeight:800, color: step>=n ? "#fff":"#9bbbbe" }}>{n}</span>
                    }
                  </div>
                  <span style={{ fontSize:9.5, fontWeight:700, color:step>=n?"#095b66":"#9bbbbe", textTransform:"uppercase", letterSpacing:".08em", whiteSpace:"nowrap" }}>{lbl}</span>
                </div>
                {i<2 && <div className="prog-bar" style={{ background: step>n ? "#095b66":"#dde8ea" }}/>}
              </React.Fragment>
            ))}
          </div>

          {/* ─ PASSO 1: Tipo ─────────────────────────────────── */}
          {step === 1 && (
            <div className="fade-up">
              <p style={{ fontSize:12, fontWeight:700, color:"#4a7275", marginBottom:22, textTransform:"uppercase", letterSpacing:".1em" }}>Seleccione o tipo de projecto:</p>
              <div className="col5" style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:14, marginBottom:44 }}>
                {TIPOS_PROJETO.map(t => (
                  <button key={t.id} className={`tipo-btn ${form.tipo===t.id?"on":""}`}
                    onClick={()=>set("tipo",t.id)}>
                    <div style={{ color:form.tipo===t.id?"#fff":"#095b66" }}>{t.icon}</div>
                    <div>
                      <div style={{ fontSize:12.5, fontWeight:800, color:form.tipo===t.id?"#fff":"#0a1c1e", marginBottom:2 }}>{t.label}</div>
                      <div style={{ fontSize:10, fontWeight:600, color:form.tipo===t.id?"rgba(255,255,255,.55)":"#9bbbbe" }}>{t.sub}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Info da norma */}
              {form.tipo && (
                <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:12, padding:"18px 22px", marginBottom:36, display:"flex", gap:14, alignItems:"flex-start" }}>
                  <svg viewBox="0 0 20 20" fill="none" width="18" height="18" style={{ flexShrink:0, marginTop:1 }}><circle cx="10" cy="10" r="8" stroke="#095b66" strokeWidth="1.5"/><path d="M10 6.5V10M10 13v.5" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/></svg>
                  <div>
                    <div style={{ fontSize:12, fontWeight:800, color:"#095b66", marginBottom:4 }}>Parâmetros técnicos aplicados para: {TIPOS_PROJETO.find(t=>t.id===form.tipo)?.label}</div>
                    <div style={{ fontSize:11.5, color:"#4a7275", lineHeight:1.65 }}>
                      Factor de simultaneidade: <strong>{FS[form.tipo as TipoProjeto]}</strong> ·
                      Densidade carga base: <strong>{W_M2[form.tipo as TipoProjeto]} W/m²</strong> ·
                      Iluminância mínima: <strong>{LUX_NORMA[form.tipo as TipoProjeto]} lux</strong>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ display:"flex", justifyContent:"flex-end" }}>
                <button className="btn-teal" disabled={!form.tipo} onClick={()=>setStep(2)}>
                  Continuar
                  <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M4 8h8M9 5l3 3-3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          )}

          {/* ─ PASSO 2: Pressupostos ─────────────────────────── */}
          {step === 2 && (
            <div className="fade-up">
              <div className="col2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, marginBottom:36 }}>

                {/* Coluna esquerda: parâmetros gerais */}
                <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                  <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:14, padding:"24px", display:"flex", flexDirection:"column", gap:18 }}>
                    <p style={{ fontSize:10, fontWeight:700, color:"#095b66", letterSpacing:".14em", textTransform:"uppercase", marginBottom:2 }}>Dados da instalação</p>

                    <label className="s-lbl">
                      <span>Área Total (m²) *</span>
                      <input className="s-inp" type="number" min="10" placeholder={form.tipo==="residencial"?"Ex: 120":form.tipo==="industrial"?"Ex: 2000":"Ex: 400"} value={form.area} onChange={e=>set("area",e.target.value)}/>
                      <small>Área total a electrificar em m²</small>
                    </label>

                    <label className="s-lbl">
                      <span>Número de Pisos</span>
                      <input className="s-inp" type="number" min="1" max="30" placeholder="1" value={form.piso} onChange={e=>set("piso",e.target.value)}/>
                      <small>Influencia nº de quadros secundários</small>
                    </label>

                    <label className="s-lbl">
                      <span>Consumo Estimado (kWh/dia) *</span>
                      <input className="s-inp" type="number" min="1"
                        placeholder={form.tipo==="residencial"?"Ex: 15":form.tipo==="industrial"?"Ex: 300":"Ex: 60"}
                        value={form.consumo} onChange={e=>set("consumo",e.target.value)}/>
                      <small>{form.tipo==="residencial"?"Tipicamente 8–25 kWh/dia para moradia":form.tipo==="industrial"?"Tipicamente 100–800 kWh/dia":"Consultar factura ou medidor"}</small>
                    </label>

                    <label className="s-lbl">
                      <span>Factor de Potência (cos φ)</span>
                      <select className="s-inp s-sel" value={form.fp} onChange={e=>set("fp",e.target.value)}>
                        <option value="0.95">0,95 — Cargas resistivas (aquecimento)</option>
                        <option value="0.90">0,90 — Misto (escritório)</option>
                        <option value="0.85">0,85 — Motores/AVAC (padrão)</option>
                        <option value="0.80">0,80 — Motores antigos / industrial</option>
                        <option value="0.70">0,70 — Cargas reactivas elevadas</option>
                      </select>
                      <small>Afecta directamente o calibre do QGD</small>
                    </label>

                    <label className="s-lbl">
                      <span>Localização</span>
                      <select className="s-inp s-sel" value={form.localizacao} onChange={e=>set("localizacao",e.target.value)}>
                        {Object.keys(HSP).map(l=><option key={l}>{l}</option>)}
                      </select>
                      <small>Afecta horas pico solar (HSP) no cálculo FV</small>
                    </label>
                  </div>

                  {/* Cargas explícitas — apenas residencial */}
                  {form.tipo === "residencial" && (
                    <div style={{ background:"#fff8e0", border:"1.5px solid #f0d47a", borderRadius:14, padding:"22px" }}>
                      <p style={{ fontSize:10, fontWeight:700, color:"#a07000", letterSpacing:".14em", textTransform:"uppercase", marginBottom:16 }}>Cargas eléctricas pesadas (circuitos dedicados)</p>
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12 }}>
                        {([
                          ["nAr","Ar Condicionado","un"],
                          ["nChuveiro","Chuveiros Eléctricos","un"],
                          ["nFogao","Fogão / Placa Indução","un"],
                        ] as [keyof SimForm,string,string][]).map(([k,lbl]) => (
                          <label key={k} className="s-lbl">
                            <span style={{ color:"#a07000" }}>{lbl}</span>
                            <input className="s-inp" type="number" min="0" max="20" placeholder="0" value={form[k] as string} onChange={e=>set(k,e.target.value)}/>
                          </label>
                        ))}
                      </div>
                      <p style={{ fontSize:10.5, color:"#8a6000", marginTop:10, lineHeight:1.5 }}>Cada carga pesada gera um <strong>circuito dedicado</strong> de maior secção — obrigatório por IEC 60364.</p>
                    </div>
                  )}
                </div>

                {/* Coluna direita: equipamentos adicionais */}
                <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                  {/* Opção trifásico */}
                  <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:14, padding:"20px 22px" }}>
                    <p style={{ fontSize:10, fontWeight:700, color:"#095b66", letterSpacing:".14em", textTransform:"uppercase", marginBottom:16 }}>Tipo de ligação</p>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12 }}>
                      <div>
                        <div style={{ fontSize:13, fontWeight:700, color:"#0a1c1e" }}>Instalação Trifásica 400V</div>
                        <div style={{ fontSize:10.5, color:"#9bbbbe", marginTop:2 }}>Força motriz · motores · equipamentos pesados</div>
                      </div>
                      <label className="s-toggle">
                        <input type="checkbox" checked={form.trifasico} onChange={e=>set("trifasico",e.target.checked)}/>
                        <span className="s-sldr"/>
                      </label>
                    </div>
                  </div>

                  {/* Equipamentos adicionais */}
                  <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:14, padding:"20px 22px", flex:1 }}>
                    <p style={{ fontSize:10, fontWeight:700, color:"#095b66", letterSpacing:".14em", textTransform:"uppercase", marginBottom:16 }}>Equipamentos / sistemas adicionais</p>
                    {([
                      ["solar",   "Sistema Solar Fotovoltaico",     "Painéis + inversor + baterias LFP"],
                      ["ups",     "UPS / Estabilizador",             "Protecção de cargas críticas"],
                      ["spda",    "Protecção Atmosférica SPDA",     "Para-raios ESE · Franklin France"],
                      ["ve",      "Postos de Carregamento VE",       "Veículos eléctricos · Mode 3 / DC"],
                      ["gerador", "Grupo Gerador de Backup",         "Diesel · ATS automático"],
                    ] as [keyof SimForm, string, string][]).map(([k,lbl,sub],i,arr) => (
                      <div key={k} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, padding:"12px 0", borderBottom: i<arr.length-1 ? "1px solid #f0f5f6":"none" }}>
                        <div>
                          <div style={{ fontSize:13, fontWeight:700, color:"#0a1c1e" }}>{lbl}</div>
                          <div style={{ fontSize:10.5, color:"#9bbbbe", marginTop:2 }}>{sub}</div>
                        </div>
                        <label className="s-toggle">
                          <input type="checkbox" checked={!!form[k]} onChange={e=>set(k,e.target.checked)}/>
                          <span className="s-sldr"/>
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Autonomia solar */}
                  {form.solar && (
                    <div style={{ background:"#fff8e0", border:"1.5px solid #f0d47a", borderRadius:12, padding:"18px 20px" }}>
                      <label className="s-lbl">
                        <span style={{ color:"#a07000" }}>Autonomia em Bateria</span>
                        <select className="s-inp s-sel" value={form.autonomia} onChange={e=>set("autonomia",e.target.value)}>
                          <option value="0">Sem armazenamento (injecção na rede)</option>
                          <option value="1">1 dia (25% reserva + DoD 90%)</option>
                          <option value="2">2 dias</option>
                          <option value="3">3 dias (máx. resiliência)</option>
                        </select>
                        <small style={{ color:"#8a6000" }}>kWh baterias = kWh/dia × dias × 1,25 ÷ 0,90</small>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <button className="btn-ghost" onClick={()=>setStep(1)}>
                  <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M12 8H4M7 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Voltar
                </button>
                <button className="btn-teal" disabled={!canNext2} onClick={runSim}>
                  <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0z" stroke="#fff" strokeWidth="1.5"/><path d="M10 8H6M8 6v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  Calcular Lista de Materiais
                </button>
              </div>
            </div>
          )}

          {/* ─ PASSO 3: Resultado ─────────────────────────────── */}
          {step === 3 && result && (
            <div className="fade-up">

              {/* Banner sumário */}
              <div style={{ background:"linear-gradient(135deg,#095b66,#0a7a89)", borderRadius:18, padding:"28px 36px", marginBottom:28, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:20 }}>
                <div style={{ display:"flex", gap:32, flexWrap:"wrap" }}>
                  {[
                    ["Projecto",     TIPOS_PROJETO.find(t=>t.id===form.tipo)?.label ?? "–"],
                    ["Área",         `${form.area} m²`],
                    ["Potência calc.",`${result.debug.potInst_kW.toFixed(1)} kW`],
                    ["Corrente QGD", `${result.debug.corrCorr_A.toFixed(0)} A`],
                    ["Referências",  `${result.mats.length} itens`],
                  ].map(([k,v]) => (
                    <div key={k}>
                      <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,.5)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:3 }}>{k}</div>
                      <div style={{ fontSize:15, fontWeight:900, color:"#fff" }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                  <button onClick={()=>{setStep(2);setResult(null);}} className="btn-white" style={{ fontSize:11 }}>
                    ← Editar
                  </button>
                  <Link href="/#contacto" className="btn-white" style={{ fontSize:11 }}>
                    Pedir Orçamento →
                  </Link>
                </div>
              </div>

              {/* Aviso técnico */}
              <div style={{ background:"#fff8e0", border:"1.5px solid #f0d47a", borderRadius:12, padding:"13px 20px", marginBottom:24, display:"flex", alignItems:"flex-start", gap:10 }}>
                <svg viewBox="0 0 18 18" fill="none" width="16" height="16" style={{ flexShrink:0, marginTop:1 }}>
                  <path d="M9 1L1 16h16L9 1z" stroke="#a07000" strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M9 7v4M9 13v.5" stroke="#a07000" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <p style={{ fontSize:11.5, color:"#7a5000", lineHeight:1.65, margin:0 }}>
                  <strong>Lista de materiais indicativa</strong> — calculada com base nos pressupostos inseridos e parâmetros normativos (IEC 60364, EN 12464). Serve de base para consulta a fornecedores e pedido de proposta. O projecto final deve ser elaborado e assinado por engenheiro habilitado.
                </p>
              </div>

              {/* Debug técnico (toggle) */}
              <div style={{ marginBottom:20 }}>
                <button onClick={()=>setShowDebug(d=>!d)}
                  style={{ background:"none", border:"1.5px solid #dde8ea", borderRadius:8, padding:"8px 16px", fontSize:11, fontWeight:700, color:"#4a7275", cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"flex", alignItems:"center", gap:6 }}>
                  <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M5 6h6M5 10h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  {showDebug ? "Ocultar" : "Ver"} Memória de Cálculo
                </button>
                {showDebug && (
                  <div className="debug-grid fade-up" style={{ marginTop:12 }}>
                    {[
                      ["Potência de cálculo",       `${result.debug.potInst_kW.toFixed(2)} kW`,              "P = (W/m² × m² + cargas) × fs / cosφ"],
                      ["Corrente nominal QGD",      `${result.debug.corrNom_A.toFixed(1)} A`,                 form.trifasico ? "I = P/(√3·V·cosφ)":"I = P/(V·cosφ)"],
                      ["Corrente corrigida (+20%)", `${result.debug.corrCorr_A.toFixed(1)} A`,                "Margem futura + tolerância"],
                      ["Calibre QGD escolhido",     `${result.debug.ampQGD} A`,                               "1º valor normalizado ≥ I_corr"],
                      ["Secção cabo alimentação",   `${result.debug.secaoAlim_mm2} mm²`,                      "ΔU ≤ 3% (IEC 60364-5-52)"],
                      ["Queda tensão real",         `${result.debug.quedaTensao.toFixed(2)}%`,                "Verificação: máx. 3%"],
                      ["Circuitos iluminação",      `${result.debug.nCircIlum}`,                               "1 circ. por 8 pontos de luz"],
                      ["Circuitos tomadas",         `${result.debug.nCircTomadas}`,                            "1 circ. por 8 tomadas (NP EN)"],
                      ["Circuitos de força",        `${result.debug.nCircForca}`,                              "Cargas dedicadas + AVAC"],
                      ...(form.solar ? [
                        ["Horas Pico Solar (HSP)",  `${result.debug.hPicoSolar} h/dia`,                       `Localização: ${form.localizacao}`],
                        ["Potência FV calculada",   `${result.debug.kwpSolar} kWp`,                           "kWh/dia ÷ HSP × 1,20 oversizing"],
                        ["Nº painéis (580Wp)",      `${result.debug.nPaineis}`,                               `${result.debug.nPaineis} × 580W = ${(result.debug.nPaineis*0.58).toFixed(1)} kWp`],
                      ] : []),
                    ].map(([k,v,f2]) => (
                      <div key={k} style={{ background:"#f8fbfc", border:"1.5px solid #e8eef0", borderRadius:10, padding:"14px 16px" }}>
                        <div style={{ fontSize:9.5, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase", marginBottom:5 }}>{k}</div>
                        <div style={{ fontSize:17, fontWeight:900, color:"#095b66", marginBottom:3 }}>{v}</div>
                        <div style={{ fontSize:10, color:"#9bbbbe", fontFamily:"monospace" }}>{f2}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Filtros categorias */}
              <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:18 }}>
                {cats.map(cat => (
                  <button key={cat} className={`cat-pill ${catFil===cat?"on":""}`}
                    onClick={()=>setCatFil(cat)}>
                    {cat} {cat!=="Todos" && <span style={{ fontWeight:600, opacity:.7 }}>({result.mats.filter(m=>m.cat===cat).length})</span>}
                  </button>
                ))}
              </div>

              {/* Tabela */}
              <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:16, overflow:"hidden", marginBottom:36 }}>
                {/* Header */}
                <div style={{ display:"grid", gridTemplateColumns:"52px 1fr 110px", background:"#f8fbfc", borderBottom:"1.5px solid #dde8ea" }}>
                  <div style={{ padding:"12px 0 12px 14px" }}/>
                  <div style={{ padding:"12px 16px", fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase" }}>Material / Referência / Norma</div>
                  <div style={{ padding:"12px 16px 12px 0", fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase", textAlign:"right" }}>Qtd.</div>
                </div>

                {visible.map((m, i) => {
                  const c = CAT_CFG[m.cat] ?? { cor:"#095b66", bg:"#e8f7f9", abrev:"MAT" };
                  return (
                    <div key={i} className="mat-row"
                      style={{ animation:`fadeUp .3s ${Math.min(i*.02,.4)}s both ease-out` }}>
                      {/* Cat badge */}
                      <div style={{ padding:"14px 0 14px 14px" }}>
                        <div style={{ width:30, height:30, borderRadius:7, background:c.bg, display:"flex", alignItems:"center", justifyContent:"center" }}>
                          <span style={{ fontSize:8.5, fontWeight:900, color:c.cor, letterSpacing:".04em" }}>{c.abrev}</span>
                        </div>
                      </div>
                      {/* Info */}
                      <div style={{ padding:"14px 16px" }}>
                        <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:3, alignItems:"center" }}>
                          <span style={{ fontSize:9.5, fontWeight:800, color:c.cor, background:c.bg, borderRadius:4, padding:"2px 7px", textTransform:"uppercase", letterSpacing:".05em" }}>{m.cat}</span>
                          <span style={{ fontSize:9, fontWeight:700, color:"#b0c4c6", fontFamily:"monospace" }}>{m.ref}</span>
                          {m.norma && <span style={{ fontSize:9, fontWeight:700, color:"#0a7a89", background:"#e6f5f7", borderRadius:3, padding:"1px 6px", letterSpacing:".04em" }}>{m.norma}</span>}
                        </div>
                        <div style={{ fontSize:13.5, fontWeight:700, color:"#0a1c1e", lineHeight:1.3, marginBottom: m.obs ? 4 : 0 }}>{m.nome}</div>
                        {m.obs && <div style={{ fontSize:11, color:"#7a9ea0", lineHeight:1.55 }}>{m.obs}</div>}
                        <div style={{ fontSize:10.5, color:"#b8ccce", marginTop:3, fontWeight:600 }}>{m.marca}</div>
                      </div>
                      {/* Qty */}
                      <div style={{ padding:"14px 16px 14px 0", textAlign:"right" }}>
                        <span style={{ fontSize:20, fontWeight:900, color:"#095b66", lineHeight:1, display:"block" }}>{m.qtd}</span>
                        <span style={{ fontSize:10.5, color:"#9bbbbe", fontWeight:600 }}>{m.unidade}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Notas finais + CTA */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:32 }} className="col2">
                {/* Limitações */}
                <div style={{ background:"#f8fbfc", border:"1.5px solid #dde8ea", borderRadius:14, padding:"24px" }}>
                  <div style={{ fontSize:12, fontWeight:800, color:"#095b66", marginBottom:12, display:"flex", alignItems:"center", gap:8 }}>
                    <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><circle cx="8" cy="8" r="6" stroke="#095b66" strokeWidth="1.5"/><path d="M8 5v3.5M8 11v.5" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round"/></svg>
                    Limitações desta estimativa
                  </div>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:7 }}>
                    {[
                      "Comprimentos de cabo assumidos (média empírica)",
                      "Sem verificação de queda de tensão por circuito",
                      "Sem cálculo de corrente de curto-circuito (Icc)",
                      "Selectividade de protecções não verificada",
                      "Tipo de pose do cabo não detalhado",
                      "Quantidade final sujeita a levantamento in loco",
                    ].map(l => (
                      <li key={l} style={{ display:"flex", gap:8, alignItems:"flex-start", fontSize:11.5, color:"#4a7275", lineHeight:1.5 }}>
                        <span style={{ color:"#c8dde0", marginTop:3, flexShrink:0 }}>—</span>{l}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* O que está correcto */}
                <div style={{ background:"#f0f9fa", border:"1.5px solid #c8e8eb", borderRadius:14, padding:"24px" }}>
                  <div style={{ fontSize:12, fontWeight:800, color:"#095b66", marginBottom:12, display:"flex", alignItems:"center", gap:8 }}>
                    <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M2 8l4 4 8-8" stroke="#095b66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    O que é calculado correctamente
                  </div>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:7 }}>
                    {[
                      "Calibre QGD via corrente de cálculo (I=P/V·cosφ)",
                      "Secção cabo por queda de tensão ≤3% (IEC 60364)",
                      "Nº luminárias por luximetria (EN 12464-1)",
                      "kWp solar = kWh/dia ÷ HSP × 1,20 (oversizing)",
                      "kWh baterias com DoD 90% e reserva 25%",
                      "Factor de simultaneidade por tipo de uso",
                    ].map(l => (
                      <li key={l} style={{ display:"flex", gap:8, alignItems:"flex-start", fontSize:11.5, color:"#095b66", lineHeight:1.5 }}>
                        <span style={{ color:"#3ec8d4", marginTop:3, flexShrink:0 }}>✓</span>{l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Final */}
              <div style={{ background:"linear-gradient(135deg,#095b66,#0a7a89)", borderRadius:16, padding:"32px 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:24, flexWrap:"wrap" }}>
                <div>
                  <div style={{ fontSize:18, fontWeight:900, color:"#fff", marginBottom:6 }}>Quer um projecto completo com cálculos assinados?</div>
                  <div style={{ fontSize:13.5, color:"rgba(255,255,255,.65)", maxWidth:440, lineHeight:1.7 }}>A nossa equipa de engenharia elabora o projecto eléctrico completo — esquemas unifilares, memoriais descritivos e proposta de fornecimento de materiais.</div>
                </div>
                <div style={{ display:"flex", gap:12, flexWrap:"wrap", flexShrink:0 }}>
                  <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer"
                    style={{ background:"#25D366", color:"#fff", border:"none", borderRadius:8, padding:"13px 22px", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:8, textDecoration:"none" }}>
                    💬 WhatsApp Angola
                  </a>
                  <Link href="/#contacto"
                    style={{ background:"#fff", color:"#095b66", border:"none", borderRadius:8, padding:"13px 24px", fontSize:12, fontWeight:800, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:8, textDecoration:"none", textTransform:"uppercase", letterSpacing:".06em" }}>
                    Solicitar Proposta
                    <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M4 8h8M9 5l3 3-3 3" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════════ */}
      <footer style={{ background:"#06161a", padding:"52px 80px 28px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1.8fr 1fr 1fr 1fr", gap:44, marginBottom:44 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:16 }}>
                <div style={{ width:32, height:32, borderRadius:7, background:"#095b66", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/></svg>
                </div>
                <span style={{ fontWeight:900, fontSize:15, color:"#fff" }}>Multi<span style={{ color:"#3ec8d4" }}>energia</span></span>
              </div>
              <p style={{ fontSize:12.5, color:"#3a6a6e", lineHeight:1.8, maxWidth:240, marginBottom:16 }}>Inovação tecnológica ao serviço da energia. Angola · Portugal · Cabo Verde · São Tomé.</p>
              <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer" style={{ fontSize:11.5, fontWeight:600, color:"#3ec8d4" }}>www.multienergia.com.pt</a>
            </div>
            {[
              { title:"Produtos", links:["Sistemas Solares","EcoFlow PowerOcean","Quadros BT","Postos MT","UPS & Estabilizadores","Mobilidade Elétrica"] },
              { title:"Serviços", links:["Projeto & Engenharia","Instalação & Montagem","Auditoria Energética","Proteção Atmosférica","Manutenção","Energy Academy"] },
              { title:"Empresa",  links:["Sobre Nós","Certificações","Clientes","Parceiros","Contacto"] },
            ].map(col => (
              <nav key={col.title}>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"#0a7a89", marginBottom:16 }}>{col.title}</div>
                <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
                  {col.links.map(l => <li key={l}><button className="footer-btn">{l}</button></li>)}
                </ul>
              </nav>
            ))}
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,.06)", paddingTop:20, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
            <p style={{ fontSize:11.5, color:"#1e4a4e" }}>© 2025 Multienergia. Todos os direitos reservados.</p>
            <p style={{ fontSize:11.5, color:"#1e4a4e" }}>Alvará IRCOP nº 982/CCOP/IRCOP/SC/2025 · 5ª Classe</p>
          </div>
        </div>
      </footer>
    </div>
  );
}