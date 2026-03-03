


"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const HERO_SLIDES = [
  {
    tag: "Eficiência · Transição · Inovação",
    line1: "Energia que",
    line2: "transforma",
    line3: "Angola",
    sub: "25 anos a fornecer soluções energéticas completas. Da geração ao consumo, do projeto à manutenção.",
  },
  {
    tag: "Representante Oficial EcoFlow · Angola",
    line1: "Independência",
    line2: "energética",
    line3: "total",
    sub: "Sistemas solares residenciais e industriais, armazenamento e inversores híbridos.",
  },
  {
    tag: "Fabricante Certificado · Legrand Partner",
    line1: "Fabricamos",
    line2: "o que outros",
    line3: "apenas vendem",
    sub: "Quadros elétricos BT fabricados em Luanda e Lisboa. Qualidade IEC 61439 garantida.",
  },
];

const PRODUCTS = [
  {
    id: "solar",
    color: "#095b66",
    light: "#e8f7f9",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <circle cx="32" cy="32" r="12" fill="#095b66"/>
        <path d="M32 8v6M32 50v6M8 32h6M50 32h6M15.5 15.5l4.2 4.2M44.3 44.3l4.2 4.2M15.5 48.5l4.2-4.2M44.3 19.7l4.2-4.2" stroke="#095b66" strokeWidth="3" strokeLinecap="round"/>
        <rect x="10" y="42" width="18" height="12" rx="2" fill="#0a7a89" opacity=".3"/>
        <rect x="14" y="44" width="10" height="3" rx="1" fill="#095b66"/>
        <rect x="14" y="49" width="10" height="3" rx="1" fill="#095b66"/>
      </svg>
    ),
    name: "Sistemas de Energia Solar",
    specs: ["+50 MW instalados","Residencial · Industrial · Utility","Autoconsumo · Carports · Centrais"],
    brands: ["Huawei FusionSolar","SMA","Siemens","Nextracker"],
    desc: "Dimensionamos e instalamos sistemas fotovoltaicos completos. Do painel ao inversor, da ligação à rede ao armazenamento em bateria.",
  },
  {
    id: "ecoflow",
    color: "#0a7a89",
    light: "#e6f5f7",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect x="16" y="8" width="32" height="48" rx="4" fill="#0a7a89" opacity=".15"/>
        <rect x="16" y="8" width="32" height="48" rx="4" stroke="#0a7a89" strokeWidth="2"/>
        <rect x="22" y="14" width="20" height="6" rx="2" fill="#0a7a89"/>
        <rect x="22" y="24" width="20" height="6" rx="2" fill="#0a7a89" opacity=".6"/>
        <rect x="22" y="34" width="20" height="6" rx="2" fill="#0a7a89" opacity=".3"/>
        <path d="M28 56h8" stroke="#0a7a89" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M35 4h-6l-2 4h10l-2-4z" fill="#0a7a89"/>
      </svg>
    ),
    name: "EcoFlow PowerOcean",
    specs: ["5 kW a 29 kW","Até 45 kWh expansível","15 anos garantia · LFP"],
    brands: ["EcoFlow"],
    desc: "Inversor híbrido trifásico com armazenamento de energia expansível. Backup potente, instalação plug & play e monitorização remota.",
  },
  {
    id: "quadros",
    color: "#064e58",
    light: "#e5f4f6",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect x="8" y="8" width="48" height="48" rx="3" fill="#064e58" opacity=".12"/>
        <rect x="8" y="8" width="48" height="48" rx="3" stroke="#064e58" strokeWidth="2"/>
        <rect x="14" y="14" width="36" height="8" rx="2" fill="#064e58" opacity=".7"/>
        <circle cx="20" cy="30" r="4" fill="#064e58"/>
        <circle cx="32" cy="30" r="4" fill="#064e58" opacity=".6"/>
        <circle cx="44" cy="30" r="4" fill="#064e58" opacity=".3"/>
        <rect x="14" y="40" width="36" height="3" rx="1.5" fill="#064e58" opacity=".4"/>
        <rect x="14" y="46" width="24" height="3" rx="1.5" fill="#064e58" opacity=".4"/>
      </svg>
    ),
    name: "Quadros Elétricos BT",
    specs: ["Até 6300 A · Forma 1–4","Fabricação própria em Luanda","Parceiro Legrand · IEC 61439"],
    brands: ["Legrand"],
    desc: "Fabricamos quadros elétricos de baixa tensão com unidades industriais próprias em Luanda e Lisboa. Soluções padrão e à medida.",
  },
  {
    id: "ups",
    color: "#095b66",
    light: "#e8f7f9",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect x="10" y="16" width="44" height="32" rx="3" fill="#095b66" opacity=".12"/>
        <rect x="10" y="16" width="44" height="32" rx="3" stroke="#095b66" strokeWidth="2"/>
        <path d="M34 24l-8 10h10l-6 8" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="32" r="3" fill="#095b66" opacity=".4"/>
        <circle cx="46" cy="32" r="3" fill="#095b66" opacity=".4"/>
        <rect x="24" y="50" width="16" height="4" rx="2" fill="#095b66" opacity=".3"/>
      </svg>
    ),
    name: "UPS & Estabilizadores",
    specs: ["Salicru até 800 KVA","Socomec MODULYS 200–4800 KVA","Online dupla conversão"],
    brands: ["Salicru","Socomec"],
    desc: "Energia crítica ininterrupta para data centers, hospitais, indústrias e telecomunicações. Proteção contra cortes, surtos e variações.",
  },
  {
    id: "mt",
    color: "#0a7a89",
    light: "#e6f5f7",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect x="12" y="20" width="40" height="30" rx="3" fill="#0a7a89" opacity=".12"/>
        <rect x="12" y="20" width="40" height="30" rx="3" stroke="#0a7a89" strokeWidth="2"/>
        <path d="M32 8v12" stroke="#0a7a89" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 8h24" stroke="#0a7a89" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 14h24" stroke="#0a7a89" strokeWidth="2" strokeLinecap="round"/>
        <rect x="20" y="28" width="10" height="14" rx="2" fill="#0a7a89" opacity=".5"/>
        <rect x="34" y="28" width="10" height="14" rx="2" fill="#0a7a89" opacity=".5"/>
        <path d="M24 54h16" stroke="#0a7a89" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    name: "Postos de Transformação",
    specs: ["Toshiba TCSU 10–30 kV","500 a 2000 KVA","Plug & play · IP66 · Pré-montado"],
    brands: ["Toshiba T&D"],
    desc: "Postos compactos pré-montados para ligação de média tensão. Instalação rápida, segurança máxima (Class AB) e resistência climática.",
  },
  {
    id: "ve",
    color: "#064e58",
    light: "#e5f4f6",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect x="8" y="22" width="48" height="26" rx="6" fill="#064e58" opacity=".1"/>
        <rect x="8" y="22" width="48" height="26" rx="6" stroke="#064e58" strokeWidth="2"/>
        <circle cx="20" cy="52" r="6" fill="#064e58" opacity=".3"/>
        <circle cx="20" cy="52" r="3" fill="#064e58"/>
        <circle cx="44" cy="52" r="6" fill="#064e58" opacity=".3"/>
        <circle cx="44" cy="52" r="3" fill="#064e58"/>
        <path d="M14 30h14l4 8h18" stroke="#064e58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42 18v8" stroke="#064e58" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M38 22h8" stroke="#064e58" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    name: "Mobilidade Elétrica",
    specs: ["11 kW · 22 kW · 50 kW","Doméstico e via pública","Avaliação técnica incluída"],
    brands: ["Huawei","Tesla","Circutor"],
    desc: "Soluções completas para carregamento de veículos elétricos. Aconselhamento, instalação certificada e manutenção contínua.",
  },
];

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="6" y="6" width="36" height="36" rx="4" stroke="#095b66" strokeWidth="2"/>
        <path d="M14 24h20M24 14v20" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="3" fill="#095b66" opacity=".4"/>
        <circle cx="34" cy="34" r="3" fill="#095b66" opacity=".4"/>
      </svg>
    ),
    title: "Projeto & Engenharia",
    short: "Dimensionamento técnico completo com esquemas unifilares e memoriais descritivos.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <circle cx="24" cy="24" r="18" stroke="#095b66" strokeWidth="2"/>
        <path d="M24 14v10l6 6" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 24h4M34 24h4M24 10v4M24 34v4" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Instalação & Montagem",
    short: "Equipa certificada para quadros, sistemas solares, SPDA e postos de transformação.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <path d="M8 36l8-8 6 6 10-12 8 8" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="6" y="6" width="36" height="28" rx="3" stroke="#095b66" strokeWidth="2"/>
        <path d="M16 42h16" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 34v8" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Auditoria Energética",
    short: "Inspeção termográfica, análise de qualidade de energia e monitorização contínua.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <path d="M24 6l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L24 23.4l-6.9 3.8 1.3-7.7-5.6-5.4 7.7-1.1z" stroke="#095b66" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 30l-6 12M34 30l6 12M20 42h8" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Proteção Atmosférica",
    short: "Sistemas SPDA completos Franklin France. Conformidade NA 33:2014 e normas internacionais.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 8l8 0 0 8" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 8L28 20" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 24l4-6 4 6" stroke="#095b66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Manutenção Preventiva",
    short: "Planos periódicos para garantir continuidade operacional e longevidade dos equipamentos.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
        <rect x="6" y="14" width="36" height="26" rx="3" stroke="#095b66" strokeWidth="2"/>
        <path d="M16 14V10a8 8 0 0116 0v4" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 26v4" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="3" fill="#095b66"/>
      </svg>
    ),
    title: "Energy Academy",
    short: "Formação especializada em energia solar, UPS, SPDA e eletrotecnia. Certificação reconhecida.",
  },
];

const CLIENTS = [
  "Sonangol","ETU Energias","Unitel","BFA","Fidelidade","MCA",
  "TVCabo","Omatapalo","SIC Notícias","Multitel","Refriango","Arreiou",
  "BancoBNI","Caixa Angola","Telepizza","InfraSat","Prodel","Azueira",
  "Governo de Angola","Standard Bank","IBM","TotalEnergies","Jumbo",
  "BancoBIC","CASAIS","ENDE","Axians","Sonangalp","Elecnor","Marlin",
];

const BRANDS = [
  { name: "Huawei FusionSolar", role: "Parceiro Solar" },
  { name: "EcoFlow", role: "Rep. Oficial AO" },
  { name: "Toshiba T&D", role: "Rep. Oficial" },
  { name: "Franklin France", role: "Rep. Oficial SPDA" },
  { name: "Legrand", role: "Parceiro Quadros" },
  { name: "Salicru", role: "Rep. Oficial UPS" },
  { name: "Socomec", role: "Rep. Oficial UPS" },
  { name: "Siemens", role: "Parceiro" },
  { name: "Schneider Electric", role: "Parceiro" },
  { name: "SMA", role: "Parceiro Solar" },
  { name: "Circutor", role: "Parceiro VE" },
  { name: "Nextracker", role: "Parceiro Solar" },
];

/* Presence points — lon/lat coordinates */
const PRESENCE = [
  { name: "Angola · Luanda",     lon: 13.23,  lat: -8.84, main: true,  detail: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362" },
  { name: "Portugal · Lisboa",   lon: -9.14,  lat: 38.72, main: true,  detail: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
  { name: "Cabo Verde · Praia",  lon: -23.51, lat: 14.93, main: false, detail: "Presença comercial activa" },
  { name: "São Tomé e Príncipe", lon:  6.61,  lat:  0.33, main: false, detail: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
];

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */
function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function Reveal({ children, delay = 0, style = {} }: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : "translateY(22px)",
      transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
      ...style,
    }}>
      {children}
    </div>
  );
}


/* ─────────────────────────────────────────────
   WORLD MAP — Real Natural Earth paths, Mercator
───────────────────────────────────────────── */
type PresencePoint = { name: string; lon: number; lat: number; main: boolean; detail: string };

function toMercator(lon: number, lat: number): [number, number] {
  const W = 1000, H = 500;
  const x = (lon + 180) * (W / 360);
  const latR = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latR / 2));
  const y = H / 2 - (H * mercN) / (2 * Math.PI);
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

/* Real simplified Natural Earth paths (Mercator, 1000×500 viewBox) */
const LAND = {
  AFRICA: "M485,196.5 L500,194.3 L519.4,194.6 L529.2,194.8 L533.3,194.1 L538.9,194.4 L541.7,195 L555.6,195 L569.4,199.7 L583.3,203.9 L588.9,204.7 L594.4,206.3 L595.8,210.2 L600,215.6 L605.6,218.7 L611.1,221.6 L616.7,227.5 L619.4,230.4 L622.2,234.6 L627.8,238.9 L638.9,233.2 L641.7,233.9 L638.9,236 L633.3,238.9 L622.2,244.4 L616.7,247.2 L613.9,251.4 L611.1,254.2 L611.1,261.1 L611.1,265.4 L600,274 L597.2,278.4 L597.2,282.8 L588.9,287.4 L580.6,293.7 L575,298.6 L555.6,302 L551.1,300.9 L547.2,297.8 L544.4,292.1 L541.7,285.9 L538.9,281.3 L536.1,275.4 L536.1,268.2 L533.3,258.3 L527.8,251.4 L522.2,245.8 L513.9,243 L505.6,243 L500,243 L491.7,244.4 L486.1,243 L477.8,243.7 L469.4,241.7 L458.3,236 L451.4,229.4 L452.8,220.2 L452.8,211 L461.1,203 L472.2,199.7 L480.6,197.2 L485,196.5 Z",
  EUROPE: "M474.2,183 L509.2,183 L520.8,182.4 L525,180.8 L522.2,174.8 L527.8,173.8 L533.3,173.8 L538.9,173.8 L541.7,171.7 L547.2,173.8 L550,173.8 L552.8,173.8 L555.6,172.8 L561.1,173.8 L566.7,174.8 L569.4,177.9 L575,177.9 L580.6,177.9 L583.3,176.9 L586.1,173.8 L591.7,169.6 L588.9,165.2 L584.7,160.5 L569.4,159.4 L558.3,158.1 L551.4,158.1 L538.9,159.4 L529.2,158.6 L526.4,156.9 L527.8,151.9 L513.9,150.6 L512.5,153.2 L508.3,166.3 L505.6,168.5 L495.8,170.6 L494.4,174.8 L486.1,172.8 L486.7,174.8 L493.1,175.9 L495.8,182.8 L474.2,183 Z",
  IBERIA: "M474.2,183 L495,183 L509.2,183 L508.9,186.2 L501.9,188.1 L500.6,192.9 L499.4,193.6 L497.2,195 L484.7,197 L483.1,195.2 L475.6,195 L473.6,192.5 L473.9,189.5 L476.7,185.8 L474.2,183 Z",
  SCANDINAVIA: "M513.9,150.6 L515.3,149.8 L513.9,139.5 L518.1,138 L519.4,133.3 L538.9,128.5 L544.4,117.8 L550,115.9 L555.6,111.9 L566.7,108.2 L575,109.8 L579.2,112.7 L580.6,117.8 L577.8,128.5 L572.2,133.3 L572.2,142.4 L577.8,145.2 L586.1,142.4 L583.3,146.6 L570.8,147.9 L566.7,146.6 L561.1,146.6 L555.6,147.9 L550,149.3 L544.4,153.2 L543.1,155.7 L534.7,155.7 L529.2,151.9 L513.9,150.6 Z",
  NAMERICA: "M108.3,145.2 L125,150.6 L138.9,160.5 L155.6,171.7 L158.3,177.9 L155.6,189.3 L161.1,194.6 L175,202.2 L230.6,214.1 L250,221.6 L263.9,218.7 L272.2,215.6 L277.8,214.1 L277.8,212.6 L275,206.3 L291.7,203 L291.7,198 L300,187.5 L305.6,186.5 L316.7,181.8 L330.6,177.9 L330.6,173.8 L322.2,169.6 L316.7,162.9 L322.2,145.2 L311.1,139.5 L300,130.1 L277.8,130.1 L261.1,119.7 L233.3,103.4 L200,98.7 L175,93.8 L166.7,103.4 L138.9,119.7 L116.7,142.4 L108.3,145.2 Z",
  SAMERICA: "M297.2,234.6 L311.1,233.2 L322.2,236 L330.6,238.9 L333.3,241.7 L358.3,244.4 L361.1,247.2 L366.7,250 L377.8,254.2 L400,254.2 L402.8,257 L402.8,262.6 L397.2,268.2 L391.7,275.4 L388.9,279.8 L380.6,282.8 L366.7,287.4 L361.1,293.7 L355.6,298.6 L350,302 L341.7,307.1 L325,314.4 L319.4,320.1 L316.7,330.4 L311.1,339.5 L311.1,344.3 L319.4,341.9 L322.2,337.1 L313.9,324.1 L316.7,316.3 L325,310.7 L333.3,305.4 L341.7,302 L341.7,293.7 L341.7,285.9 L341.7,278.4 L336.1,272.5 L333.3,266.8 L327.8,261.1 L322.2,255.6 L311.1,252.8 L300,251.4 L286.1,252.8 L277.8,254.2 L275,248.6 L277.8,244.4 L286.1,238.9 L291.7,236 L297.2,234.6 Z",
  RUSSIA: "M577.8,119.7 L597.2,103.4 L625,88.6 L652.8,88.6 L680.6,98.7 L708.3,98.7 L750,88.6 L791.7,83.1 L819.4,93.8 L833.3,103.4 L875,111.9 L888.9,111.9 L902.8,119.7 L916.7,139.5 L902.8,158.1 L888.9,169.6 L875,173.8 L861.1,185.6 L855.6,192.9 L833.3,189.3 L819.4,192.9 L791.7,189.3 L777.8,181.8 L750,169.6 L722.2,165.2 L708.3,158.1 L694.4,158.1 L680.6,165.2 L666.7,158.1 L652.8,153.2 L638.9,145.2 L625,145.2 L611.1,139.5 L597.2,139.5 L588.9,133.3 L577.8,119.7 Z",
  ASIA: "M597.2,139.5 L611.1,139.5 L625,145.2 L638.9,145.2 L652.8,153.2 L666.7,158.1 L680.6,165.2 L694.4,158.1 L708.3,158.1 L722.2,165.2 L750,169.6 L777.8,181.8 L791.7,189.3 L819.4,192.9 L833.3,189.3 L855.6,192.9 L861.1,185.6 L875,173.8 L888.9,169.6 L902.8,158.1 L916.7,139.5 L902.8,119.7 L888.9,111.9 L875,111.9 L833.3,103.4 L819.4,93.8 L791.7,83.1 L750,88.6 L708.3,98.7 L680.6,98.7 L652.8,88.6 L625,88.6 L597.2,103.4 L577.8,119.7 L588.9,133.3 L597.2,139.5 Z",
  INDIA: "M688.9,196.3 L700,199.7 L708.3,203 L716.7,199.7 L727.8,209.5 L733.3,218.7 L744.4,218.7 L750,212.6 L755.6,218.7 L750,224.6 L744.4,230.4 L733.3,236 L722.2,238.9 L716.7,238.9 L713.9,236 L711.1,230.4 L705.6,224.6 L700,218.7 L694.4,218.7 L688.9,221.6 L683.3,218.7 L672.2,215.6 L666.7,209.5 L666.7,196.3 L672.2,192.9 L680.6,189.3 L688.9,189.3 L688.9,196.3 Z",
  SEASIA: "M777.8,218.7 L791.7,221.6 L805.6,224.6 L805.6,218.7 L819.4,209.5 L833.3,209.5 L838.9,215.6 L844.4,218.7 L838.9,224.6 L827.8,227.5 L822.2,233.2 L805.6,236 L788.9,238.9 L783.3,244.4 L788.9,247.2 L794.4,250 L800,255.6 L805.6,261.1 L811.1,261.1 L816.7,255.6 L822.2,252.8 L827.8,250 L833.3,247.2 L833.3,255.6 L822.2,261.1 L816.7,261.1 L811.1,258.3 L800,258.3 L794.4,255.6 L788.9,252.8 L783.3,247.2 L777.8,244.4 L772.2,238.9 L766.7,227.5 L772.2,221.6 L777.8,218.7 Z",
  AUS: "M816.7,281.3 L822.2,278.4 L827.8,275.4 L833.3,275.4 L838.9,275.4 L844.4,275.4 L850,272.5 L855.6,269.6 L861.1,266.8 L866.7,266.8 L872.2,266.8 L877.8,269.6 L883.3,272.5 L888.9,275.4 L894.4,275.4 L900,275.4 L905.6,275.4 L911.1,278.4 L916.7,281.3 L922.2,284.4 L922.2,287.4 L922.2,290.5 L916.7,293.7 L911.1,297 L905.6,300.3 L900,303.7 L894.4,307.1 L888.9,307.1 L883.3,303.7 L877.8,300.3 L872.2,300.3 L866.7,300.3 L861.1,300.3 L855.6,300.3 L850,300.3 L844.4,297 L838.9,293.7 L833.3,290.5 L827.8,287.4 L822.2,284.4 L816.7,281.3 Z",
  MIDDLEEAST: "M600,203 L605.6,199.7 L611.1,196.3 L622.2,196.3 L627.8,192.9 L638.9,196.3 L650,203 L655.6,206.3 L661.1,212.6 L661.1,218.7 L655.6,221.6 L650,224.6 L644.4,227.5 L638.9,230.4 L627.8,230.4 L622.2,230.4 L616.7,230.4 L611.1,227.5 L605.6,224.6 L600,218.7 L594.4,209.5 L600,203 Z",
  GREENLAND: "M361.1,83.1 L383.3,70.7 L411.1,38.3 L438.9,15.3 L450,70.7 L455.6,103.4 L444.4,126.8 L433.3,139.5 L416.7,145.2 L400,139.5 L383.3,133.3 L372.2,119.7 L361.1,103.4 L355.6,83.1 L361.1,83.1 Z",
  ALASKA: "M27.8,145.2 L33.3,126.8 L38.9,119.7 L50,119.7 L66.7,145.2 L77.8,150.6 L88.9,145.2 L100,145.2 L108.3,145.2 L108.3,150.6 L88.9,155.7 L69.4,158.1 L55.6,158.1 L38.9,160.5 L33.3,155.7 L27.8,150.6 L27.8,145.2 Z",
  JAPAN: "M861.1,203 L866.7,199.7 L872.2,196.3 L877.8,192.9 L883.3,189.3 L888.9,185.6 L894.4,181.8 L900,181.8 L900,185.6 L894.4,189.3 L888.9,192.9 L883.3,196.3 L877.8,199.7 L872.2,203 L861.1,203 Z",
};

function WorldMap({ points, activePoint, onHover }: {
  points: PresencePoint[];
  activePoint: number | null;
  onHover: (i: number) => void;
}) {
  const dots = points.map(p => {
    const [cx, cy] = toMercator(p.lon, p.lat);
    return { ...p, cx, cy };
  });

  return (
    <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
      <svg
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "auto", display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ocean */}
        <rect width="1000" height="500" fill="#dff0f3" rx="6"/>

        {/* Land masses */}
        {Object.entries(LAND).map(([k, d]) => (
          <path key={k} d={d}
            fill={k === "AFRICA" || k === "IBERIA" ? "#9fd0d8" : "#b6d9de"}
            stroke="#85bec6" strokeWidth="0.7" strokeLinejoin="round"
          />
        ))}

        {/* Highlight: Cape Verde dot (tiny island, no landmass shape needed) */}
        <circle cx="434.7" cy="229" r="5" fill="#9fd0d8" stroke="#85bec6" strokeWidth="0.7"/>
        {/* São Tomé dot */}
        <circle cx="518.4" cy="249.5" r="4" fill="#9fd0d8" stroke="#85bec6" strokeWidth="0.7"/>

        {/* Connection lines between main offices */}
        {dots.filter(p => p.main).flatMap((p, i) =>
          dots.filter((q, j) => q.main && j > i).map((q, j) => (
            <line key={`ln-${i}-${j}`}
              x1={p.cx} y1={p.cy} x2={q.cx} y2={q.cy}
              stroke="#095b66" strokeWidth="1.2" strokeDasharray="5 4" opacity="0.55"
            />
          ))
        )}

        {/* Presence dots */}
        {dots.map((p, i) => (
          <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
            {p.main && (
              <>
                <circle cx={p.cx} cy={p.cy} r="6" fill="#095b66" opacity="0.15">
                  <animate attributeName="r" values="6;20;6" dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.15;0;0.15" dur="2.8s" repeatCount="indefinite"/>
                </circle>
                <circle cx={p.cx} cy={p.cy} r="9" fill="#095b66" opacity="0.12"/>
              </>
            )}
            <circle
              cx={p.cx} cy={p.cy}
              r={activePoint === i ? 9 : 6}
              fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#5cb8c0")}
              stroke="#fff" strokeWidth="2.5"
              style={{ transition: "r .2s, fill .2s" }}
            />
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      {activePoint !== null && (() => {
        const d = dots[activePoint];
        const pctX = (d.cx / 1000) * 100;
        const pctY = (d.cy / 500) * 100;
        return (
          <div style={{
            position: "absolute",
            left: `${pctX}%`,
            top: `${pctY}%`,
            transform: `translate(${pctX > 65 ? "-105%" : "14px"}, ${pctY > 55 ? "-115%" : "14px"})`,
            background: "#fff",
            border: "1.5px solid #b8dde2",
            borderRadius: 10,
            padding: "12px 16px",
            minWidth: 220,
            boxShadow: "0 10px 36px rgba(9,91,102,.2)",
            zIndex: 10,
            pointerEvents: "none",
          }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 5 }}>{d.name}</div>
            <div style={{ fontSize: 11.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{d.detail}</div>
          </div>
        );
      })()}
    </div>
  );
}

/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */
export default function Home() {
  const [slide, setSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const advance = () => {
    setSlide(s => (s + 1) % HERO_SLIDES.length);
    setAnimKey(k => k + 1);
  };

  useEffect(() => {
    timerRef.current = setInterval(advance, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const cur = HERO_SLIDES[slide];
  const curProd = PRODUCTS[activeProduct];

  const NAV = [
    { label: "Produtos", href: "#produtos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Presença", href: "#presenca" },
    { label: "Contacto", href: "#contacto" },
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

        @keyframes heroIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: none; } }
        .hero-in { animation: heroIn .5s cubic-bezier(.22,1,.36,1) both; }

        .dot { width: 7px; height: 7px; border-radius: 99px; cursor: pointer; border: none; transition: all .3s; background: rgba(255,255,255,.35); }
        .dot.on { width: 24px; background: #fff; }

        @keyframes pulse { 0%,100%{transform:scale(1);opacity:.6;} 50%{transform:scale(1.4);opacity:0;} }

        .prod-tab { padding: 14px 18px; border-radius: 8px; cursor: pointer; transition: all .2s; border: 1.5px solid transparent; display: flex; align-items: center; gap: 12px; }
        .prod-tab:hover { background: #f0f9fa; }
        .prod-tab.on { background: #095b66; border-color: #095b66; }

        .svc-card { background: #fff; border: 1.5px solid #dde8ea; border-radius: 14px; padding: 28px 24px; transition: all .3s; }
        .svc-card:hover { border-color: #095b66; box-shadow: 0 8px 32px rgba(9,91,102,.1); transform: translateY(-3px); }

        .brand-card { background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; padding: 14px 18px; text-align: center; transition: all .25s; }
        .brand-card:hover { border-color: #095b66; background: #fff; box-shadow: 0 4px 18px rgba(9,91,102,.08); }

        .client-chip { background: #f0f9fa; border: 1.5px solid #c8e8eb; border-radius: 99px; padding: 7px 16px; font-size: 12px; font-weight: 700; color: #1a4a4f; white-space: nowrap; transition: all .2s; }
        .client-chip:hover { background: #095b66; color: #fff; border-color: #095b66; }

        .input { width: 100%; background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 7px; color: #1a2c2e; padding: 12px 15px; font-family: 'Montserrat',sans-serif; font-size: 13px; outline: none; transition: border-color .2s; }
        .input:focus { border-color: #095b66; background: #fff; }
        .input::placeholder { color: #9bbbbe; }
        textarea.input { resize: vertical; min-height: 100px; }

        .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(9,91,102,.25); }
        .btn-outline-w { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.55); border-radius: 6px; padding: 11px 26px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; }
        .btn-outline-w:hover { background: rgba(255,255,255,.12); border-color: #fff; }
        .btn-white { background: #fff; color: #095b66; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-white:hover { background: #e8f5f7; transform: translateY(-2px); }

        .footer-btn { background: none; border: none; padding: 0; font-family: 'Montserrat',sans-serif; font-size: 13px; color: #4a7a7e; cursor: pointer; transition: color .2s; text-align: left; width: 100%; }
        .footer-btn:hover { color: #fff; }

        @media (max-width: 900px) {
          .hide-mob { display: none !important; }
          .two { grid-template-columns: 1fr !important; }
          .three { grid-template-columns: 1fr 1fr !important; }
          .sp { padding-left: 22px !important; padding-right: 22px !important; }
          .hero-sp { padding: 86px 22px 0 !important; }
        }
        @media (max-width: 540px) {
          .three { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── NAVBAR ─────────────────────────────── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: 64,
        background: scrolled ? "rgba(255,255,255,.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(9,91,102,.08)" : "none",
        transition: "all .3s",
        display: "flex", alignItems: "center", padding: "0 48px",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, flex: "0 0 auto" }}>
          <div style={{ width: 34, height: 34, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" stroke="#fff" strokeWidth=".5" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontWeight: 900, fontSize: 16, color: scrolled ? "#095b66" : "#fff", transition: "color .3s" }}>
            Multi<span style={{ color: scrolled ? "#0a7a89" : "rgba(255,255,255,.6)" }}>energia</span>
          </span>
        </Link>

        <nav className="hide-mob" style={{ display: "flex", gap: 36, marginLeft: "auto", marginRight: 32 }}>
          {NAV.map(l => (
            <a key={l.label} href={l.href} className="nav-a"
              style={{ color: scrolled ? "#1a2c2e" : "rgba(255,255,255,.85)" }}>
              {l.label}
            </a>
          ))}
          <Link href="/sobre" className="nav-a" style={{ color: scrolled ? "#1a2c2e" : "rgba(255,255,255,.85)" }}>Sobre</Link>
        </nav>

        <a href="#contacto" className="btn-teal hide-mob" style={{ fontSize: 11, padding: "9px 20px" }}>
          Orçamento
        </a>

        <button className="hide-mob" style={{ display: "none" }} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span style={{ display: "block", width: 22, height: 2, background: scrolled ? "#095b66" : "#fff", marginBottom: 5, borderRadius: 2 }}/>
          <span style={{ display: "block", width: 22, height: 2, background: scrolled ? "#095b66" : "#fff", marginBottom: 5, borderRadius: 2 }}/>
          <span style={{ display: "block", width: 22, height: 2, background: scrolled ? "#095b66" : "#fff", borderRadius: 2 }}/>
        </button>
      </header>

      {/* ── HERO ───────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", background: "#095b66", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {/* Geometric accent */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", background: "rgba(255,255,255,.04)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}/>
        <div style={{ position: "absolute", top: 0, right: 0, width: "30%", height: "100%", background: "rgba(255,255,255,.03)", clipPath: "polygon(25% 0, 100% 0, 100% 100%, 10% 100%)" }}/>

        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }}/>

        {/* Lightning bolt large bg */}
        <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", opacity: .06, pointerEvents: "none" }}>
          <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330">
            <path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/>
          </svg>
        </div>

        <div className="hero-sp sp" style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", alignItems: "center", padding: "100px 80px 0", maxWidth: 1280, margin: "0 auto", width: "100%" }}>
          <div style={{ maxWidth: 660 }}>
            <div key={`tag-${animKey}`} className="hero-in" style={{ animationDelay: "0s" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, padding: "5px 14px", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.85)", marginBottom: 32 }}>
                {cur.tag}
              </div>
            </div>

            <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s" }}>
              <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28 }}>
                <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line1}</span>
                <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)", color: "rgba(255,255,255,.4)" }}>{cur.line2}</span>
                <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line3}</span>
              </h1>
            </div>

            <div key={`s-${animKey}`} className="hero-in" style={{ animationDelay: ".16s" }}>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.7)", maxWidth: 480, marginBottom: 44 }}>
                {cur.sub}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#produtos" className="btn-white">Ver Soluções</a>
                <a href="#contacto" className="btn-outline-w">Pedir Orçamento</a>
              </div>
            </div>
          </div>
        </div>

        {/* Dots + bottom strip */}
        <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
          {HERO_SLIDES.map((_, i) => (
            <button key={i} className={`dot ${i === slide ? "on" : ""}`}
              onClick={() => { clearInterval(timerRef.current); setSlide(i); setAnimKey(k => k + 1); }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* White wave */}
        <div style={{ height: 64, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)", marginTop: 40 }}/>
      </section>

      {/* ── PRODUCTS ───────────────────────────── */}
      <section id="produtos" style={{ padding: "96px 0 80px" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 52, flexWrap: "wrap" }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Catálogo</p>
                <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05 }}>
                  Os Nossos Produtos
                </h2>
              </div>
              <Link href="/products" style={{ fontSize: 12, fontWeight: 700, color: "#095b66", letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "2px solid #095b66", paddingBottom: 2 }}>
                Ver todos →
              </Link>
            </div>
          </Reveal>

          {/* Split layout: tabs left + detail right */}
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32, alignItems: "start" }}>
            {/* Tabs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {PRODUCTS.map((p, i) => (
                <Reveal key={i} delay={i * .05}>
                  <button
                    className={`prod-tab ${activeProduct === i ? "on" : ""}`}
                    onClick={() => setActiveProduct(i)}
                    aria-label={p.name}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                      background: activeProduct === i ? "rgba(255,255,255,.15)" : p.light,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {/* Mini icon */}
                      <svg viewBox="0 0 48 48" fill="none" width="22" height="22">
                        {i === 0 && <><circle cx="24" cy="24" r="8" fill={activeProduct===i?"#fff":"#095b66"}/><path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.5 11.5l3.5 3.5M33 33l3.5 3.5M11.5 36.5l3.5-3.5M33 15l3.5-3.5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/></>}
                        {i === 1 && <><rect x="14" y="6" width="20" height="36" rx="3" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="18" y="10" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"}/><rect x="18" y="18" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><rect x="18" y="26" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
                        {i === 2 && <><rect x="6" y="6" width="36" height="36" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="10" y="10" width="28" height="6" rx="1" fill={activeProduct===i?"#fff":"#095b66"} opacity=".7"/><circle cx="15" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"}/><circle cx="24" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><circle cx="33" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
                        {i === 3 && <><rect x="8" y="14" width="32" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 24l-5 6h6l-4 6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
                        {i === 4 && <><rect x="10" y="16" width="28" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 8v8" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/><path d="M16 8h16" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
                        {i === 5 && <><rect x="6" y="16" width="36" height="22" rx="5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><circle cx="14" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><circle cx="34" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><path d="M12 27h8l3 5h14" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M34 13v5M31 16h6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
                      </svg>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: activeProduct === i ? "#fff" : "#1a2c2e", textAlign: "left", lineHeight: 1.3 }}>
                      {p.name}
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>

            {/* Detail panel */}
            <Reveal key={activeProduct}>
              <div style={{
                background: "linear-gradient(135deg, #095b66 0%, #0a7a89 100%)",
                borderRadius: 20, padding: "44px 48px",
                minHeight: 360, position: "relative", overflow: "hidden",
              }}>
                {/* bg decoration */}
                <div style={{ position: "absolute", right: -30, top: -30, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,.05)", pointerEvents: "none" }}/>
                <div style={{ position: "absolute", right: 30, bottom: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }}/>

                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* SVG icon */}
                  <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                    {/* Recolor the SVG for white context */}
                    <svg viewBox="0 0 64 64" fill="none" width="44" height="44">
                      {activeProduct === 0 && <><circle cx="32" cy="32" r="10" fill="rgba(255,255,255,.9)"/><path d="M32 10v5M32 49v5M10 32h5M49 32h5M16.5 16.5l3.5 3.5M44 44l3.5 3.5M16.5 47.5l3.5-3.5M44 20l3.5-3.5" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/></>}
                      {activeProduct === 1 && <><rect x="18" y="6" width="28" height="52" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="22" y="12" width="20" height="8" rx="2" fill="rgba(255,255,255,.9)"/><rect x="22" y="24" width="20" height="8" rx="2" fill="rgba(255,255,255,.5)"/><rect x="22" y="36" width="20" height="8" rx="2" fill="rgba(255,255,255,.3)"/><path d="M28 60h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
                      {activeProduct === 2 && <><rect x="8" y="8" width="48" height="48" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="14" y="14" width="36" height="8" rx="2" fill="rgba(255,255,255,.9)" opacity=".8"/><circle cx="20" cy="34" r="5" fill="rgba(255,255,255,.9)"/><circle cx="32" cy="34" r="5" fill="rgba(255,255,255,.6)"/><circle cx="44" cy="34" r="5" fill="rgba(255,255,255,.3)"/></>}
                      {activeProduct === 3 && <><rect x="10" y="16" width="44" height="32" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 24l-8 10h10l-6 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>}
                      {activeProduct === 4 && <><rect x="12" y="20" width="40" height="30" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 8v12" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 8h24M20 14h24" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><rect x="20" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/><rect x="34" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/></>}
                      {activeProduct === 5 && <><rect x="8" y="22" width="48" height="26" rx="6" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><circle cx="20" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="20" cy="52" r="3" fill="rgba(255,255,255,.9)"/><circle cx="44" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="44" cy="52" r="3" fill="rgba(255,255,255,.9)"/><path d="M14 30h14l4 8h18" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M42 18v8M38 22h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
                    </svg>
                  </div>

                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 8 }}>
                    {curProd.id.toUpperCase()}
                  </p>
                  <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>{curProd.name}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}>{curProd.desc}</p>

                  {/* Specs */}
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
                    {curProd.specs.map(s => (
                      <span key={s} style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, fontSize: 11, fontWeight: 600, color: "#fff", padding: "4px 12px" }}>{s}</span>
                    ))}
                  </div>

                  {/* Brands */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: ".1em", textTransform: "uppercase" }}>Marcas:</span>
                    {curProd.brands.map(b => (
                      <span key={b} style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,.8)", background: "rgba(255,255,255,.1)", borderRadius: 5, padding: "3px 10px" }}>{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────── */}
      <section id="servicos" style={{ background: "#095b66", padding: "96px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 8 }}>— Serviços</p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 56, flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#fff", lineHeight: 1.05 }}>
                O que fazemos
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 380, lineHeight: 1.7 }}>
                Da concepção ao comissionamento. Suporte especializado em todas as fases do seu projeto energético.
              </p>
            </div>
          </Reveal>

          <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * .07}>
                <div style={{
                  background: i % 2 === 0 ? "rgba(255,255,255,.06)" : "rgba(255,255,255,.04)",
                  border: "1.5px solid rgba(255,255,255,.1)",
                  borderRadius: 16, padding: "32px 28px",
                  transition: "all .3s", cursor: "default",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; e.currentTarget.style.transform = "none"; }}
                >
                  {/* Icon wrapper */}
                  <div style={{ width: 58, height: 58, borderRadius: 14, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    {/* Re-render icon in white */}
                    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
                      {i === 0 && <><rect x="6" y="6" width="36" height="36" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M14 24h20M24 14v20" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="14" cy="14" r="3" fill="rgba(255,255,255,.4)"/><circle cx="34" cy="34" r="3" fill="rgba(255,255,255,.4)"/></>}
                      {i === 1 && <><circle cx="24" cy="24" r="18" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M24 14v10l6 6" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 24h4M34 24h4M24 10v4M24 34v4" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/></>}
                      {i === 2 && <><path d="M8 36l8-8 6 6 10-12 8 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="6" width="36" height="28" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 42h16M24 34v8" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round"/></>}
                      {i === 3 && <><path d="M24 6l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L24 23.4l-6.9 3.8 1.3-7.7-5.6-5.4 7.7-1.1z" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinejoin="round"/><path d="M14 30l-6 12M34 30l6 12" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/></>}
                      {i === 4 && <><path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M32 8l8 0 0 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 8L28 20" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 24l4-6 4 6" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
                      {i === 5 && <><rect x="6" y="14" width="36" height="26" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 14V10a8 8 0 0116 0v4" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M24 26v4" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="24" cy="24" r="3" fill="rgba(255,255,255,.9)"/></>}
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.62)", lineHeight: 1.7 }}>{s.short}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA row */}
          <Reveal style={{ marginTop: 52, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 48, height: 48, background: "rgba(255,255,255,.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</div>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.45)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>Angola · Suporte</div>
                  <a href="tel:+244933153362" style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>+244 933 153 362</a>
                </div>
              </div>
            </div>
            <a href="#contacto" className="btn-white">Solicitar Visita Técnica</a>
          </Reveal>
        </div>
      </section>

      {/* ── GEOGRAPHIC PRESENCE ────────────────── */}
      <section id="presenca" style={{ background: "#fff", padding: "96px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Presença Internacional</p>
            <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 12 }}>
              Onde estamos
            </h2>
            <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 480, lineHeight: 1.75, marginBottom: 56 }}>
              Operamos em Angola, Portugal, Cabo Verde e São Tomé e Príncipe. Clique nos pontos do mapa para mais detalhes.
            </p>
          </Reveal>

          <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
            <Reveal>
              <div style={{ background: "#f0f9fa", borderRadius: 20, padding: "8px", border: "1.5px solid #c8e8eb" }}>
                <WorldMap points={PRESENCE} activePoint={activePoint} onHover={i => setActivePoint(activePoint === i ? null : i)} />
              </div>
            </Reveal>

            <Reveal delay={.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {PRESENCE.map((p, i) => (
                  <button key={i}
                    onClick={() => setActivePoint(activePoint === i ? null : i)}
                    style={{
                      background: activePoint === i ? "#095b66" : "#fff",
                      border: `1.5px solid ${activePoint === i ? "#095b66" : "#dde8ea"}`,
                      borderRadius: 12, padding: "16px 20px",
                      display: "flex", gap: 14, alignItems: "flex-start", cursor: "pointer",
                      transition: "all .25s", textAlign: "left",
                    }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: activePoint === i ? "rgba(255,255,255,.15)" : "#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                      {i === 0 ? "🇦🇴" : i === 1 ? "🇵🇹" : i === 2 ? "🇨🇻" : "🇸🇹"}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: activePoint === i ? "#fff" : "#0a1c1e", marginBottom: 3 }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: activePoint === i ? "rgba(255,255,255,.65)" : "#6a9598", lineHeight: 1.5, whiteSpace: "pre-line" }}>{p.detail}</div>
                    </div>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CLIENTS + BRANDS ───────────────────── */}
      <section style={{ background: "#f0f9fa", padding: "80px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Clientes</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>
              Confiam em Nós
            </h2>
          </Reveal>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 72 }}>
            {CLIENTS.map((c, i) => (
              <Reveal key={i} delay={i * .015}>
                <div className="client-chip">{c}</div>
              </Reveal>
            ))}
          </div>

          {/* Brands divider */}
          <div style={{ borderTop: "1.5px solid #c8e8eb", paddingTop: 64 }}>
            <Reveal>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Parceiros</p>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>
                Marcas que Representamos
              </h2>
            </Reveal>
            <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
              {BRANDS.map((b, i) => (
                <Reveal key={i} delay={i * .04}>
                  <div className="brand-card">
                    <div style={{ fontSize: 13, fontWeight: 900, color: "#0a1c1e", marginBottom: 4 }}>{b.name}</div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".08em", textTransform: "uppercase" }}>{b.role}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────── */}
      <section style={{ background: "#095b66", padding: "0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 80px" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 36, flexWrap: "wrap" }}>
              <div>
                <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 10 }}>
                  Pronto para começar?
                </h2>
                <p style={{ color: "rgba(255,255,255,.65)", maxWidth: 440, lineHeight: 1.75, fontSize: 15 }}>
                  Peça um orçamento sem compromisso. A nossa equipa técnica responde em 24 horas.
                </p>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#contacto" className="btn-white">Solicitar Orçamento</a>
                <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer" className="btn-outline-w" style={{ gap: 8 }}>
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────── */}
      <section id="contacto" style={{ background: "#fff", padding: "96px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Contacto</p>
            <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 56 }}>
              Fale Connosco
            </h2>
          </Reveal>

          <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 72 }}>
            <Reveal>
              <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.8, marginBottom: 44 }}>
                Entre em contacto com o escritório mais próximo ou envie-nos uma mensagem e entraremos em contacto consigo brevemente.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { flag: "🇦🇴", country: "Angola", info: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362 · (+244) 938 306 698\ngeral@multienergia.com.pt" },
                  { flag: "🇵🇹", country: "Portugal", info: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909 · geral@multienergia.com.pt" },
                  { flag: "🇸🇹", country: "São Tomé e Príncipe", info: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443 · geral@multienergia.com.pt" },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: "#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.flag}</div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 3, textTransform: "uppercase", letterSpacing: ".06em" }}>{c.country}</div>
                      <div style={{ fontSize: 12.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{c.info}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 28, fontSize: 13, fontWeight: 700, color: "#095b66" }}>
                🌐 www.multienergia.com.pt
              </a>
            </Reveal>

            <Reveal delay={.1}>
              <form onSubmit={e => e.preventDefault()}
                style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 16, padding: "36px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Nome</span>
                    <input className="input" placeholder="Nome completo" autoComplete="name"/>
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Empresa</span>
                    <input className="input" placeholder="Empresa" autoComplete="organization"/>
                  </label>
                </div>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>E-mail</span>
                  <input className="input" type="email" placeholder="email@empresa.com" autoComplete="email"/>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Assunto</span>
                  <select className="input" defaultValue="" style={{ appearance: "none", cursor: "pointer" }}>
                    <option value="" disabled>Selecione o assunto</option>
                    <option>Sistemas de Energia Solar</option>
                    <option>EcoFlow / Armazenamento</option>
                    <option>Quadros Elétricos BT</option>
                    <option>Postos de Transformação MT</option>
                    <option>UPS & Estabilizadores</option>
                    <option>Mobilidade Elétrica</option>
                    <option>Proteção Atmosférica (SPDA)</option>
                    <option>Auditoria Energética</option>
                    <option>Formação – Energy Academy</option>
                    <option>Outro</option>
                  </select>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Mensagem</span>
                  <textarea className="input" placeholder="Descreva o seu projeto…"/>
                </label>
                <button type="submit" className="btn-teal" style={{ alignSelf: "flex-start", marginTop: 4 }}>
                  Enviar Mensagem
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <footer style={{ background: "#06161a", padding: "52px 80px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 44, marginBottom: 44 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/></svg>
                </div>
                <span style={{ fontWeight: 900, fontSize: 15, color: "#fff" }}>Multi<span style={{ color: "#3ec8d4" }}>energia</span></span>
              </div>
              <p style={{ fontSize: 12.5, color: "#3a6a6e", lineHeight: 1.8, maxWidth: 240, marginBottom: 16 }}>
                Inovação tecnológica ao serviço da energia. Angola · Portugal · Cabo Verde · São Tomé.
              </p>
              <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11.5, fontWeight: 600, color: "#3ec8d4" }}>
                www.multienergia.com.pt
              </a>
            </div>
            {[
              { title: "Produtos", links: ["Sistemas Solares","EcoFlow PowerOcean","Quadros BT","Postos MT","UPS & Estabilizadores","Mobilidade Elétrica"] },
              { title: "Serviços", links: ["Projeto & Engenharia","Instalação & Montagem","Auditoria Energética","Proteção Atmosférica","Manutenção","Energy Academy"] },
              { title: "Empresa", links: ["Sobre Nós","Certificações","Clientes","Parceiros","Contacto"] },
            ].map(col => (
              <nav key={col.title}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#0a7a89", marginBottom: 16 }}>{col.title}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map(l => <li key={l}><button className="footer-btn">{l}</button></li>)}
                </ul>
              </nav>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
            <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>© 2025 Multienergia. Todos os direitos reservados.</p>
            <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>Alvará IRCOP nº 982/CCOP/IRCOP/SC/2025 · 5ª Classe</p>
          </div>
        </div>
      </footer>
    </div>
  );
}