"use client";
import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
// import HeroSection from "./components/HeroSection";

import HeroSection, { HeroSlide } from "./components/HeroSection";
import ProductsSection, { Product } from "./components/ProductsSection";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */


const PRODUCTS = [
  {
    id: "solar",
    color: "#095b66",
    light: "#e8f7f9",
    name: "Sistemas de Energia Solar",
    specs: ["+50 MW instalados","Residencial · Industrial · Utility","Autoconsumo · Carports · Centrais"],
    brands: ["Huawei FusionSolar","SMA","Siemens","Nextracker"],
    desc: "Dimensionamos e instalamos sistemas fotovoltaicos completos. Do painel ao inversor, da ligação à rede ao armazenamento em bateria.",
  },
  {
    id: "ecoflow",
    color: "#0a7a89",
    light: "#e6f5f7",
    name: "EcoFlow PowerOcean",
    specs: ["5 kW a 29 kW","Até 45 kWh expansível","15 anos garantia · LFP"],
    brands: ["EcoFlow"],
    desc: "Inversor híbrido trifásico com armazenamento de energia expansível. Backup potente, instalação plug & play e monitorização remota.",
  },
  {
    id: "quadros",
    color: "#064e58",
    light: "#e5f4f6",
    name: "Quadros Elétricos BT",
    specs: ["Até 6300 A · Forma 1–4","Fabricação própria em Luanda","Parceiro Legrand · IEC 61439"],
    brands: ["Legrand"],
    desc: "Fabricamos quadros elétricos de baixa tensão com unidades industriais próprias em Luanda e Lisboa. Soluções padrão e à medida.",
  },
  {
    id: "ups",
    color: "#095b66",
    light: "#e8f7f9",
    name: "UPS & Estabilizadores",
    specs: ["Salicru até 800 KVA","Socomec MODULYS 200–4800 KVA","Online dupla conversão"],
    brands: ["Salicru","Socomec"],
    desc: "Energia crítica ininterrupta para data centers, hospitais, indústrias e telecomunicações. Proteção contra cortes, surtos e variações.",
  },
  {
    id: "mt",
    color: "#0a7a89",
    light: "#e6f5f7",
    name: "Postos de Transformação",
    specs: ["Toshiba TCSU 10–30 kV","500 a 2000 KVA","Plug & play · IP66 · Pré-montado"],
    brands: ["Toshiba T&D"],
    desc: "Postos compactos pré-montados para ligação de média tensão. Instalação rápida, segurança máxima (Class AB) e resistência climática.",
  },
  {
    id: "ve",
    color: "#064e58",
    light: "#e5f4f6",
    name: "Mobilidade Elétrica",
    specs: ["11 kW · 22 kW · 50 kW","Doméstico e via pública","Avaliação técnica incluída"],
    brands: ["Huawei","Tesla","Circutor"],
    desc: "Soluções completas para carregamento de veículos elétricos. Aconselhamento, instalação certificada e manutenção contínua.",
  },
];

const SERVICES = [
  { title: "Quadros Elétricos",          short: "Fabrico e certificação de quadros BT/MT: distribuição, comando e automação — norma EN 61439." },
  { title: "Solar + Armazenamento",      short: "Sistemas fotovoltaicos on-grid, off-grid e híbridos com baterias de lítio. Huawei & EcoFlow." },
  { title: "Energia Crítica",            short: "UPS, grupos geradores e redundância N+1 para data centers, hospitais e operações 24/7." },
  { title: "SPDA",                       short: "Proteção contra descargas atmosféricas Franklin France. Conformidade IEC 62305 / NA 33:2014." },
  { title: "Mobilidade Elétrica",        short: "Postos de carregamento AC/DC para veículos elétricos, com gestão de energia e integração solar." },
  { title: "Armários de Passeio",        short: "Armários técnicos para espaço público: telecomunicações, contagem e distribuição, anti-vandalismo." },
  { title: "Auditoria Energética",       short: "Termografia, qualidade de energia e monitorização de consumos com plano de eficiência." },
  { title: "Postos de Transformação",    short: "Montagem e ensaio de PT MT/BT cabine e aéreos, em conformidade com ENDE Angola." },
  { title: "Telecom",                    short: "Cabling estruturado, fibra ótica, LAN/WAN, CCTV e controlo de acesso para edifícios." },
  { title: "SATCOM",                     short: "Sistemas VSAT e comunicação por satélite para locais remotos, offshore e redundância de link." },
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
  children: React.ReactNode; delay?: number; style?: React.CSSProperties;
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
   WORLD MAP
   ViewBox 1000 × 500. All paths computed from
   real lon/lat via Web-Mercator:
     x = (lon+180)/360 * 1000
     y = 250 - 250/π * ln(tan(π/4 + lat*π/360))
───────────────────────────────────────────── */
type PresencePoint = { name: string; lon: number; lat: number; main: boolean; detail: string };

function merc(lon: number, lat: number): [number, number] {
  const x = (lon + 180) / 360 * 1000;
  const y = 250 - (250 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
  return [+x.toFixed(1), +y.toFixed(1)];
}

/*
  All paths below are mathematically generated from real lon/lat coordinates.
  Projection: Web Mercator, viewBox 1000×500.
  x = (lon+180)/360*1000
  y = 250 − (250/π)·ln(tan(π/4 + lat·π/360))

  Key y-values: lat80=56, lat60=145, lat40=189, lat20=222,
                lat0=250, lat-20=278, lat-40=311, lat-55=344
*/
const LAND: Record<string, string> = {

  /* ── North America ────────────────────────────────────────────── */
  NORTH_AMERICA: `
    M 111.1,145.2 L 138.9,119.7 L 155.6,111.9 L 166.7,93.8
    L 183.3,88.6 L 200,88.6   L 222.2,93.8  L 244.4,88.6
    L 261.1,88.6 L 277.8,88.6 L 291.7,93.8  L 305.6,98.7
    L 316.7,88.6 L 319.4,107.7 L 316.7,119.7 L 322.2,145.2
    L 316.7,162.9 L 311.1,158.1 L 305.6,186.5 L 300,192.9
    L 291.7,198  L 286.1,210   L 277.8,214.1 L 263.9,218.7
    L 250,221.6  L 230.6,214.1 L 208.3,214.1 L 194.4,217.2
    L 175,202.2  L 161.1,194.6 L 155.6,189.3
    L 158.3,177.9 L 155.6,171.7 L 138.9,160.5
    L 125,150.6  L 108.3,145.2 Z`,

  /* ── Alaska ───────────────────────────────────────────────────── */
  ALASKA: `
    M 0,148   L 16.7,139.5 L 27.8,130.1 L 33.3,119.7
    L 50,119.7 L 66.7,130.1 L 77.8,139.5 L 88.9,139.5
    L 100,139.5 L 108.3,145.2 L 100,150.6 L 88.9,150.6
    L 77.8,155.7 L 61.1,158.1 L 44.4,158.1 L 27.8,155.7
    L 11.1,152 Z`,

  /* ── Greenland ────────────────────────────────────────────────── */
  GREENLAND: `
    M 355.6,83.1 L 375,56.1   L 400,27.6  L 427.8,22.8
    L 452.8,27.6 L 466.7,56.1 L 461.1,83.1 L 450,111.9
    L 433.3,130.1 L 416.7,145.2 L 400,139.5
    L 383.3,130.1 L 372.2,111.9 Z`,

  /* ── Central America + Caribbean ─────────────────────────────── */
  C_AMERICA: `
    M 230.6,214.1 L 244.4,210 L 255.6,214.1
    L 263.9,224.6 L 272.2,236 L 277.8,250
    L 263.9,247.2 L 255.6,241.7 L 247.2,233.2
    L 238.9,224.6 Z`,

  /* ── South America ────────────────────────────────────────────── */
  SOUTH_AMERICA: `
    M 277.8,250   L 288.9,247.2 L 300,247.2  L 316.7,243
    L 333.3,241.7 L 347.2,241.7 L 361.1,247.2
    L 375,252.8  L 388.9,257   L 402.8,257
    L 405.6,262.6 L 397.2,271.1 L 388.9,279.8
    L 377.8,285.9 L 366.7,290.5 L 355.6,300.3
    L 344.4,307.1 L 330.6,316.3 L 319.4,330.4
    L 316.7,344.3 L 311.1,344.3 L 305.6,336.5
    L 297.2,323.7 L 291.7,310.7 L 291.7,297
    L 288.9,284.4 L 280.6,271.1 L 275,257 Z`,

  /* ── Europe (main body) ───────────────────────────────────────── */
  EUROPE: `
    M 472.2,196.3 L 477.8,181.8 L 486.1,173.8
    L 494.4,174.8 L 495.8,182.8 L 508.3,183
    L 516.7,182.4 L 525,180.8   L 536.1,179.9
    L 541.7,181.8 L 550,181.8   L 558.3,179.9
    L 566.7,179.9 L 575,181.8   L 583.3,181.8
    L 591.7,169.6 L 588.9,165.2 L 575,159.4
    L 561.1,158.1 L 547.2,158.1 L 536.1,159.4
    L 527.8,151.9 L 513.9,150.6 L 508.3,158.1
    L 502.8,165.2 L 497.2,168.5 L 491.7,173.8
    L 486.1,173.8 L 477.8,181.8 Z
    M 583.3,181.8 L 591.7,181.8 L 600,185.6
    L 602.8,192.9 L 597.2,198   L 586.1,196.3
    L 577.8,196.3 L 575,190.5 Z`,

  /* ── Iberian Peninsula ────────────────────────────────────────── */
  IBERIA: `
    M 472.2,196.3 L 477.8,181.8 L 486.1,173.8
    L 491.7,173.8 L 495.8,182.8 L 508.3,183
    L 509.4,186   L 502.8,188.1 L 500.6,192.9
    L 497.2,195   L 486.1,197   L 481.9,195.2
    L 475.6,195   L 473.9,192.5 Z`,

  /* ── UK & Ireland ─────────────────────────────────────────────── */
  UK: `M 477.8,162.9 L 486.1,158.1 L 497.2,158.1
       L 502.8,162.9 L 497.2,167.4 L 488.9,169.6
       L 480.6,167.4 Z
       M 469.4,158.1 L 477.8,152 L 483.3,155.7
       L 480.6,165.2 L 472.2,165.2 Z`,

  /* ── Iceland ──────────────────────────────────────────────────── */
  ICELAND: `M 427.8,126.8 L 438.9,120.6 L 455.6,119.7
             L 461.1,124.1 L 452.8,130.1 L 438.9,133.3 Z`,

  /* ── Scandinavia ──────────────────────────────────────────────── */
  SCANDINAVIA: `
    M 513.9,150.6 L 527.8,151.9 L 536.1,158.1
    L 543.1,155.7 L 547.2,152   L 552.8,149.3
    L 558.3,147.9 L 566.7,146.6 L 572.2,142.4
    L 577.8,128.5 L 580.6,117.8 L 575,109.8
    L 566.7,107.7 L 555.6,107.7 L 550,115.9
    L 544.4,117.8 L 538.9,128.5 L 525,133.3
    L 519.4,133.3 L 513.9,139.5 Z`,

  /* ── Russia (European + Siberian) ────────────────────────────── */
  RUSSIA: `
    M 544.4,117.8 L 558.3,107.7 L 583.3,98.7
    L 611.1,93.8  L 638.9,93.8  L 666.7,93.8
    L 694.4,86.1  L 722.2,83.1  L 750,83.1
    L 777.8,86.1  L 805.6,93.8  L 833.3,98.7
    L 861.1,98.7  L 888.9,111.9 L 916.7,119.7
    L 944.4,119.7 L 966.7,107.7 L 980.6,98.7
    L 1000,98.7   L 1000,145.2
    L 972.2,158.1 L 944.4,158.1 L 916.7,145.2
    L 900,165.2   L 888.9,169.6 L 875,177.9
    L 861.1,185.6 L 847.2,185.6 L 833.3,185.6
    L 819.4,177.9 L 805.6,175.9 L 791.7,175.9
    L 777.8,175.9 L 763.9,171.7 L 750,169.6
    L 736.1,165.2 L 722.2,165.2 L 708.3,158.1
    L 694.4,158.1 L 680.6,165.2 L 666.7,158.1
    L 652.8,152   L 638.9,145.2 L 625,145.2
    L 611.1,139.5 L 597.2,139.5 L 588.9,133.3
    L 577.8,119.7 L 566.7,117.8 Z`,

  /* ── Central Asia / Turkey / Caucasus ───────────────────────── */
  C_ASIA: `
    M 538.9,181.8 L 555.6,179.9 L 566.7,179.9
    L 575,181.8   L 586.1,177.9 L 600,185.6
    L 616.7,185.6 L 630.6,181.8 L 644.4,181.8
    L 658.3,185.6 L 666.7,185.6 L 680.6,181.8
    L 694.4,175.9 L 708.3,172.2 L 716.7,175.9
    L 722.2,185.6 L 722.2,196.3 L 713.9,203
    L 700,206.3   L 686.1,206.3 L 672.2,203
    L 655.6,206.3 L 638.9,206.3 L 622.2,206.3
    L 611.1,200   L 600,192.9   L 591.7,181.8
    L 577.8,181.8 L 566.7,185.6 L 552.8,185.6
    L 541.7,185.6 Z`,

  /* ── Middle East / Arabian Peninsula ────────────────────────── */
  MIDDLE_EAST: `
    M 563.9,192.9 L 577.8,181.8 L 586.1,181.8
    L 600,185.6   L 611.1,185.6 L 622.2,185.6
    L 636.1,192.9 L 650,203     L 658.3,212.6
    L 663.9,218.7 L 655.6,228.9 L 644.4,234.6
    L 627.8,238.9 L 616.7,238.9 L 608.3,232.2
    L 597.2,224.6 L 591.7,215.6 L 577.8,212.6
    L 566.7,206.3 L 558.3,196.3 Z`,

  /* ── Africa ───────────────────────────────────────────────────── */
  AFRICA: `
    M 447.2,194.6 L 461.1,190.6 L 475,190.6
    L 488.9,192.9 L 502.8,194.6 L 516.7,194.6
    L 530.6,194.6 L 544.4,194.6 L 558.3,196.3
    L 572.2,203   L 583.3,209.5 L 594.4,209.5
    L 608.3,215.6 L 616.7,224.6 L 622.2,234.6
    L 625,241.7   L 619.4,250   L 613.9,258.3
    L 611.1,265.4 L 605.6,274   L 600,285.9
    L 594.4,296.3 L 588.9,302   L 575,305.4
    L 558.3,302   L 547.2,298.6 L 541.7,285.9
    L 536.1,271.1 L 530.6,258.3 L 522.2,247.2
    L 513.9,244.4 L 505.6,244.4 L 494.4,244.4
    L 483.3,244.4 L 472.2,244.4 L 461.1,241.7
    L 450,234.6   L 444.4,227.5 L 444.4,218.7
    L 447.2,207   Z
    M 444.4,227.5 L 436.1,230.4 L 425,238.9
    L 422.2,250   L 427.8,259.3 L 438.9,258.3
    L 447.2,250   L 447.2,238.9 Z`,

  /* ── Madagascar ───────────────────────────────────────────────── */
  MADAGASCAR: `
    M 616.7,262.6 L 622.2,262.6 L 633.3,265.4
    L 641.7,268.2 L 641.7,282.8 L 633.3,291.7
    L 622.2,291.7 L 613.9,282.8 L 611.1,271.1 Z`,

  /* ── India ────────────────────────────────────────────────────── */
  INDIA: `
    M 663.9,196.3 L 677.8,189.3 L 688.9,189.3
    L 700,192.9   L 711.1,200   L 719.4,199.7
    L 730.6,209.5 L 736.1,218.7 L 747.2,221.6
    L 750,228.9   L 744.4,236   L 733.3,241.7
    L 722.2,244.4 L 713.9,241.7 L 705.6,230.4
    L 694.4,221.6 L 688.9,224.6 L 683.3,221.6
    L 672.2,218.7 L 663.9,209.5 Z`,

  /* ── China / East Asia ────────────────────────────────────────── */
  CHINA: `
    M 694.4,175.9 L 708.3,172.2 L 716.7,175.9
    L 722.2,185.6 L 736.1,181.8 L 750,175.9
    L 763.9,171.7 L 777.8,168.5 L 791.7,165.2
    L 805.6,162.9 L 819.4,162.9 L 833.3,162.9
    L 850,169.6   L 861.1,181.8 L 858.3,192.9
    L 852.8,196.3 L 847.2,192.9 L 833.3,192.9
    L 819.4,196.3 L 808.3,209.5 L 800,221.6
    L 791.7,221.6 L 780.6,218.7 L 769.4,215.6
    L 755.6,221.6 L 747.2,221.6 L 736.1,218.7
    L 730.6,209.5 L 719.4,199.7 L 711.1,200
    L 700,192.9   Z`,

  /* ── SE Asia (Indochina + Malaysia) ──────────────────────────── */
  SE_ASIA: `
    M 777.8,218.7 L 791.7,221.6 L 800,218.7
    L 808.3,209.5 L 819.4,209.5 L 833.3,209.5
    L 844.4,218.7 L 838.9,228.9 L 827.8,234.6
    L 816.7,234.6 L 808.3,241.7 L 800,250
    L 808.3,258.3 L 816.7,258.3 L 822.2,252.8
    L 833.3,252.8 L 833.3,263.9 L 816.7,263.9
    L 808.3,258.3 L 797.2,255.6 L 786.1,250
    L 780.6,244.4 L 772.2,238.9 L 769.4,228.9
    L 769.4,221.6 Z`,

  /* ── Japan ────────────────────────────────────────────────────── */
  JAPAN: `
    M 855.6,192.9 L 861.1,185.6 L 872.2,181.8
    L 883.3,181.8 L 886.1,185.6 L 880.6,192.9
    L 872.2,196.3 L 861.1,199.7 Z
    M 877.8,199.7 L 883.3,192.9 L 894.4,189.3
    L 900,192.9   L 897.2,203   L 886.1,206.3
    L 877.8,203 Z`,

  /* ── Korea ────────────────────────────────────────────────────── */
  KOREA: `M 836.1,192.9 L 847.2,189.3 L 855.6,192.9
           L 855.6,203   L 847.2,206.3 L 836.1,203 Z`,

  /* ── Australia ────────────────────────────────────────────────── */
  AUSTRALIA: `
    M 808.3,278.4 L 819.4,272.5 L 833.3,268.2
    L 850,265.4   L 866.7,263.9 L 880.6,265.4
    L 894.4,269.6 L 908.3,272.5 L 916.7,281.3
    L 925,290.5   L 925,303.7   L 916.7,311.1
    L 905.6,311.1 L 894.4,311.1 L 883.3,307.7
    L 869.4,303.7 L 855.6,307.7 L 841.7,311.1
    L 827.8,307.7 L 816.7,300.3 L 808.3,290.5 Z
    M 916.7,281.3 L 930.6,275.4 L 941.7,281.3
    L 938.9,293.7 L 925,296.3 Z`,

  /* ── New Zealand ─────────────────────────────────────────────── */
  NEW_ZEALAND: `
    M 966.7,318.2 L 977.8,311.1 L 988.9,315.4
    L 988.9,326   L 977.8,329   L 966.7,322.1 Z
    M 972.2,329   L 983.3,318.2 L 994.4,322.1
    L 994.4,337   L 983.3,341   L 972.2,334 Z`,

  /* ── Cabo Verde (island cluster, accent) ─────────────────────── */
  CAPE_VERDE: `M 424,236 L 432,229 L 442,232 L 439,241 L 428,244 Z`,

  /* ── São Tomé (island, accent) ───────────────────────────────── */
  SAO_TOME: `M 516,252 L 523,245 L 530,248 L 528,257 L 519,260 Z`,
};

const ACCENT = new Set(["AFRICA", "IBERIA", "CAPE_VERDE", "SAO_TOME"]);

function WorldMap({ points, activePoint, onHover }: {
  points: PresencePoint[];
  activePoint: number | null;
  onHover: (i: number) => void;
}) {
  const dots = points.map(p => {
    const [cx, cy] = merc(p.lon, p.lat);
    return { ...p, cx, cy };
  });

  /* reference latitudes */
  const yEq   = merc(0,   0)[1];
  const yCanc = merc(0,  23.5)[1];
  const yCap  = merc(0, -23.5)[1];

  return (
    <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
      <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "auto", display: "block" }}>

        <rect width="1000" height="500" fill="#dff0f3" rx="8"/>

        {/* Latitude reference lines */}
        <line x1="0" y1={yEq}   x2="1000" y2={yEq}   stroke="#b8dfe8" strokeWidth="0.8" strokeDasharray="6 8"/>
        <line x1="0" y1={yCanc} x2="1000" y2={yCanc} stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10"/>
        <line x1="0" y1={yCap}  x2="1000" y2={yCap}  stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10"/>

        {/* Continents */}
        {Object.entries(LAND).map(([k, d]) => (
          <path key={k} d={d}
            fill={ACCENT.has(k) ? "#8ecdd6" : "#b2d8e0"}
            stroke="#7ab8c0" strokeWidth="0.7"
            strokeLinejoin="round" strokeLinecap="round"
          />
        ))}

        {/* Connection line between the 2 main offices */}
        {(() => { const m = dots.filter(p => p.main); return m.length >= 2 ? <line x1={m[0].cx} y1={m[0].cy} x2={m[1].cx} y2={m[1].cy} stroke="#095b66" strokeWidth="1.3" strokeDasharray="5 5" opacity="0.55"/> : null; })()}

        {/* Dots */}
        {dots.map((p, i) => (
          <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
            {p.main && <>
              <circle cx={p.cx} cy={p.cy} r="6" fill="#095b66" opacity="0.15">
                <animate attributeName="r" values="6;20;6" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx={p.cx} cy={p.cy} r="10" fill="#095b66" opacity="0.1"/>
            </>}
            <circle cx={p.cx} cy={p.cy}
              r={activePoint === i ? 9 : 6}
              fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#5cb8c0")}
              stroke="#fff" strokeWidth="2.5"
              style={{ transition: "r .2s, fill .2s" }}
            />
          </g>
        ))}
      </svg>

      {activePoint !== null && (() => {
        const d = dots[activePoint];
        const px = (d.cx / 1000) * 100;
        const py = (d.cy / 500) * 100;
        return (
          <div style={{
            position: "absolute", left: `${px}%`, top: `${py}%`,
            transform: `translate(${px > 62 ? "-108%" : "14px"}, ${py > 58 ? "-118%" : "14px"})`,
            background: "#fff", border: "1.5px solid #b8dde2", borderRadius: 10,
            padding: "12px 16px", minWidth: 222,
            boxShadow: "0 10px 36px rgba(9,91,102,.2)", zIndex: 10, pointerEvents: "none",
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
   SIMULADOR — tipos e motor de cálculo
───────────────────────────────────────────── */
type TipoProjeto = "residencial" | "empresa" | "industrial" | "agricola" | "outro";
type SimStep = 1 | 2 | 3;

interface SimForm {
  tipo: TipoProjeto | "";
  area: string;
  consumo: string;
  autonomia: string;
  trifasico: boolean;
  gerador: boolean;
  spda: boolean;
  ve: boolean;
  solar: boolean;
  ups: boolean;
  localizacao: string;
}

interface MatItem {
  ref: string;
  nome: string;
  marca: string;
  qtd: number;
  unidade: string;
  cat: string;
  obs?: string;
}

const TIPOS_PROJETO = [
  { id: "residencial" as TipoProjeto, label: "Residencial", sub: "Moradia / Apartamento",
    icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M4 14L16 4l12 10v14H20v-9h-8v9H4V14z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg> },
  { id: "empresa" as TipoProjeto, label: "Empresa / Escritório", sub: "Comercial · Serviços",
    icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><rect x="4" y="6" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M10 28V20h5v8M17 28V20h5v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><rect x="9" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="19" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="14" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/></svg> },
  { id: "industrial" as TipoProjeto, label: "Industrial", sub: "Fábrica · Armazém",
    icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M2 28V14l8-6v6l8-6v6l8-6v20H2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><rect x="6" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="14" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="22" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><path d="M10 6V2M18 4V2M26 6V2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
  { id: "agricola" as TipoProjeto, label: "Agrícola / Rural", sub: "Bombeamento · Campo",
    icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="14" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M16 7V3M16 21v-4M9 14H5M27 14h-4M11 9L8 6M24 6l-3 3M11 19l-3 3M24 22l-3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="16" cy="14" r="2.5" fill="currentColor" opacity=".4"/><path d="M8 28h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
  { id: "outro" as TipoProjeto, label: "Outro / Misto", sub: "Projecto personalizado",
    icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8"/><path d="M16 10v2M16 20v2M10 16h2M20 16h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="3" fill="currentColor" opacity=".45"/></svg> },
];

const CAT_CONFIG: Record<string, { cor: string; fundo: string }> = {
  "Quadros BT":       { cor: "#064e58", fundo: "#e5f4f6" },
  "Protecção":        { cor: "#095b66", fundo: "#e8f7f9" },
  "Cablagem":         { cor: "#0a7a89", fundo: "#e6f5f7" },
  "Infraestrutura":   { cor: "#095b66", fundo: "#f0f9fa" },
  "Iluminação":       { cor: "#064e58", fundo: "#e5f4f6" },
  "Tomadas/Acabam.":  { cor: "#095b66", fundo: "#e8f7f9" },
  "Solar":            { cor: "#7a5200", fundo: "#fff7e0" },
  "Armazenamento":    { cor: "#7a5200", fundo: "#fff3cc" },
  "UPS":              { cor: "#095b66", fundo: "#e8f7f9" },
  "Média Tensão":     { cor: "#7a0000", fundo: "#fce8e8" },
  "SPDA":             { cor: "#8a4200", fundo: "#fff0e0" },
  "Mobilidade VE":    { cor: "#1a3a8f", fundo: "#e6eeff" },
  "Backup Gerador":   { cor: "#3a2a10", fundo: "#f0ebe0" },
};

function calcSimulacao(f: SimForm): MatItem[] {
  if (!f.tipo || !f.consumo || !f.area) return [];
  const kwh  = Math.max(1, parseFloat(f.consumo) || 10);
  const m2   = Math.max(10, parseFloat(f.area)   || 100);
  const aut  = parseInt(f.autonomia) || 1;
  const ind  = f.tipo === "industrial";
  const res  = f.tipo === "residencial";
  const agr  = f.tipo === "agricola";
  const mats: MatItem[] = [];

  /* ── QUADRO GERAL ── */
  const ampQG = kwh > 300 ? 630 : kwh > 80 ? 250 : kwh > 30 ? 125 : kwh > 15 ? 100 : 63;
  mats.push({ cat: "Quadros BT", ref: "QGD-BT",     nome: `Quadro Geral Distribuição BT ${ampQG}A`,         marca: "Legrand / Fabricação Própria", qtd: 1,  unidade: "un", obs: f.trifasico ? "Trifásico 3×400V" : "Monofásico 230V · IEC 61439" });
  if (!res && kwh > 20) mats.push({ cat: "Quadros BT", ref: "QS-ZONA",  nome: "Quadro Secundário de Zona",                      marca: "Legrand",                     qtd: Math.ceil(m2 / 400), unidade: "un", obs: "Distribuição por zonas / pisos" });

  /* ── PROTECÇÃO ── */
  const nZonas = res ? Math.ceil(m2 / 20) : ind ? Math.ceil(m2 / 40) : Math.ceil(m2 / 25);
  mats.push({ cat: "Protecção", ref: "DIS-16A",  nome: "Disjuntor Magnetotérmico 16A unipolar",          marca: "Legrand",  qtd: Math.max(2, Math.ceil(nZonas * .55)), unidade: "un" });
  mats.push({ cat: "Protecção", ref: "DIS-32A",  nome: "Disjuntor Magnetotérmico 32A unipolar",          marca: "Legrand",  qtd: Math.max(1, Math.ceil(nZonas * .35)), unidade: "un" });
  if (ind || f.trifasico) mats.push({ cat: "Protecção", ref: "DIS-TRI-63A", nome: "Disjuntor Trifásico 63A",               marca: "Legrand",  qtd: Math.max(1, Math.ceil(nZonas * .15)), unidade: "un", obs: "Circuitos de força / motores" });
  mats.push({ cat: "Protecção", ref: "DDI-30mA", nome: "Interruptor Diferencial 30mA 2P",                marca: "Legrand",  qtd: Math.ceil(nZonas / 4), unidade: "un" });
  if (!res) mats.push({ cat: "Protecção", ref: "DDI-300mA", nome: "Interruptor Diferencial 300mA 4P",            marca: "Legrand",  qtd: Math.ceil(nZonas / 8), unidade: "un", obs: "Protecção geral circuitos força" });
  mats.push({ cat: "Protecção", ref: "SURTO-T2", nome: "Descarregador Sobretensões Tipo 2",              marca: "Legrand",  qtd: 1, unidade: "un", obs: "Protecção QGD principal" });

  /* ── CABLAGEM ── */
  const fCab = ind ? 1.1 : res ? 0.85 : 1.0;
  mats.push({ cat: "Cablagem", ref: "CAB-2.5",  nome: "Cabo H07V-K 2,5mm² (anel/tomadas)",             marca: "Nexans",   qtd: Math.round(m2 * 1.6 * fCab), unidade: "m",  obs: "Circuitos iluminação e tomadas" });
  mats.push({ cat: "Cablagem", ref: "CAB-4",    nome: "Cabo H07V-K 4mm² (circuitos potência)",         marca: "Nexans",   qtd: Math.round(m2 * 0.7 * fCab), unidade: "m" });
  mats.push({ cat: "Cablagem", ref: "CAB-16",   nome: "Cabo H07V-K 16mm² (alimentação principal)",     marca: "Nexans",   qtd: Math.round(m2 * 0.4 * fCab), unidade: "m" });
  if (ind) mats.push({ cat: "Cablagem", ref: "CAB-35",  nome: "Cabo H07V-K 35mm² (acometimento BT)",    marca: "Nexans",   qtd: Math.round(m2 * 0.15), unidade: "m", obs: "Ligação QGBT / transformador" });

  /* ── INFRAESTRUTURA ── */
  mats.push({ cat: "Infraestrutura", ref: "CALHA-40",   nome: "Calha Técnica PVC 40×40mm",              marca: "Legrand",  qtd: Math.ceil(m2 * 0.45), unidade: "m" });
  if (!res) mats.push({ cat: "Infraestrutura", ref: "CALHA-100",  nome: "Calha Técnica PVC 100×60mm (corredor técnico)", marca: "Legrand", qtd: Math.ceil(m2 * 0.12), unidade: "m" });
  mats.push({ cat: "Infraestrutura", ref: "CORR-20",    nome: "Tubo Corrugado Flexível Ø20mm",          marca: "Legrand",  qtd: Math.round(m2 * 0.9), unidade: "m" });
  if (ind) mats.push({ cat: "Infraestrutura", ref: "BANDEJA-100", nome: "Bandeja Portacabos Aço 100mm",  marca: "Legrand",  qtd: Math.ceil(m2 * 0.08), unidade: "m", obs: "Distribuição aérea industrial" });
  mats.push({ cat: "Infraestrutura", ref: "CAIXA-ENT",  nome: "Caixa de Encastrar 2-módulos",           marca: "Legrand",  qtd: Math.ceil(m2 / (res ? 6 : 8)), unidade: "un" });

  /* ── ILUMINAÇÃO ── */
  const lux   = ind ? 200 : res ? 100 : 150;
  const wLum  = ind ? 150 : res ? 18 : 36;
  const nLum  = Math.ceil((m2 * lux) / (wLum * 100));
  const tipo  = ind ? "Armadura LED Industrial" : res ? "Painel LED Encastrado" : "Armadura LED Slim";
  const ip    = ind ? "IP65" : "IP44";
  mats.push({ cat: "Iluminação", ref: `LED-${wLum}W`, nome: `${tipo} ${wLum}W ≥130lm/W`,  marca: "Legrand / Philips", qtd: nLum, unidade: "un", obs: `${ip} · Eficiência classe A+` });
  mats.push({ cat: "Iluminação", ref: "BLQ-EMG-8W",   nome: "Bloco Autónomo Emergência 8W 3h", marca: "Legrand", qtd: Math.max(2, Math.ceil(nLum / 6)), unidade: "un", obs: "Sinalização saídas emergência" });

  /* ── TOMADAS / ACABAMENTOS ── */
  const nTom = Math.ceil(m2 / (res ? 7 : 10));
  mats.push({ cat: "Tomadas/Acabam.", ref: "TOM-16A", nome: res ? "Tomada Dupla Schuko 16A com terra" : "Tomada Industrial IP44 16A", marca: "Legrand", qtd: nTom, unidade: "un" });
  if (!res) mats.push({ cat: "Tomadas/Acabam.", ref: "TOM-32A-IND", nome: "Tomada Industrial IP44 32A 3P+N+T", marca: "Legrand", qtd: Math.ceil(m2 / 60), unidade: "un", obs: "Força motriz / equipamentos" });

  /* ── SOLAR ── */
  if (f.solar) {
    const hpico  = agr ? 5.5 : 5.0;               // horas pico solar Angola/Portugal
    const kwp    = Math.ceil(kwh / hpico * 1.15);  // 15% oversizing
    const nPain  = Math.ceil((kwp * 1000) / 580);
    const pInv   = kwp <= 5 ? 5 : kwp <= 15 ? 15 : kwp <= 30 ? 30 : kwp <= 60 ? 60 : 100;
    mats.push({ cat: "Solar", ref: "PV-580W",     nome: "Painel Solar Mono Half-Cut 580Wp",                  marca: "Huawei FusionSolar", qtd: nPain,             unidade: "un", obs: `Total: ${(nPain * 0.58).toFixed(1)} kWp · Eficiência ≥21,5%` });
    mats.push({ cat: "Solar", ref: `INV-${pInv}K`, nome: `Inversor Híbrido SUN2000-${pInv}KTL`,             marca: "Huawei",            qtd: 1,                 unidade: "un", obs: "MPPT duplo · monitorização remota · WiFi" });
    mats.push({ cat: "Solar", ref: "CAB-SOL-4",   nome: "Cabo Solar PV H1Z2Z2-K 4mm²",                     marca: "Prysmian",          qtd: nPain * 14,        unidade: "m" });
    mats.push({ cat: "Solar", ref: "ESTR-COBERT", nome: "Estrutura Fixação Alumínio em Cobertura",          marca: "K2 Systems",        qtd: Math.ceil(nPain / 2), unidade: "kit", obs: "Inclinação ajustável 10–35°" });
    mats.push({ cat: "Solar", ref: "CON-MC4",     nome: "Conector MC4 (par macho+fêmea)",                  marca: "Stäubli",           qtd: nPain * 2,         unidade: "par" });
    mats.push({ cat: "Solar", ref: "SURTO-PV",    nome: "Protecção Sobretensão DC Tipo 2",                 marca: "Legrand",           qtd: 1,                 unidade: "un", obs: "Protecção string box" });
    /* Armazenamento */
    if (aut > 0) {
      const kwhBat = Math.ceil(kwh * aut * 1.25);
      const nMod   = Math.ceil(kwhBat / 5);
      mats.push({ cat: "Armazenamento", ref: "BAT-LFP-5K", nome: "Módulo Bateria LFP 5kWh PowerOcean",       marca: "EcoFlow",           qtd: nMod,              unidade: "un", obs: `${kwhBat} kWh total · ${aut}d autonomia · 15 anos garantia` });
    }
  }

  /* ── UPS ── */
  if (f.ups) {
    const kva = res ? 3 : ind ? (kwh > 200 ? 200 : 80) : 20;
    const fab = kva > 40 ? "Socomec MODULYS" : "Salicru SLC TWIN RT";
    mats.push({ cat: "UPS", ref: `UPS-${kva}KVA`, nome: `UPS Online Dupla Conversão ${kva} KVA`, marca: fab, qtd: 1, unidade: "un", obs: "10 min autonomia interna · extensível via ext. battery" });
  }

  /* ── MÉDIA TENSÃO ── */
  if (ind && kwh > 100) {
    const kvaT = kwh > 500 ? 2000 : kwh > 200 ? 1000 : 500;
    mats.push({ cat: "Média Tensão", ref: `PT-${kvaT}K`, nome: `Posto Transformação Compacto ${kvaT} KVA`, marca: "Toshiba T&D TCSU", qtd: 1, unidade: "un", obs: "10–30 kV · Pré-montado · IP66 · Class AB" });
  }

  /* ── SPDA ── */
  if (f.spda) {
    const raio = ind ? 107 : 60;
    mats.push({ cat: "SPDA", ref: "PARARR-ESE",  nome: `Para-Raios ESE Franklin France R${raio}m`,      marca: "Franklin France", qtd: 1,                       unidade: "un", obs: `Raio de protecção: ${raio}m · IEC 62305` });
    mats.push({ cat: "SPDA", ref: "COND-DES-50", nome: "Condutor de Descida Cobre 50mm²",               marca: "Franklin France", qtd: Math.ceil(Math.sqrt(m2)*4), unidade: "m" });
    mats.push({ cat: "SPDA", ref: "ELEC-TERRA",  nome: "Eléctrodo Terra Aço Inox Ø14mm × 1,5m",         marca: "Franklin France", qtd: Math.ceil(m2 / 200) + 1, unidade: "un" });
    mats.push({ cat: "SPDA", ref: "SURTO-T1T2",  nome: "Descarregador Sobretensão Tipo 1+2",            marca: "Legrand",         qtd: 1,                       unidade: "un", obs: "Protecção combinada QGD principal" });
  }

  /* ── MOBILIDADE VE ── */
  if (f.ve) {
    const pvE = res ? 7.4 : ind ? 50 : 22;
    const nVE = res ? 1 : Math.max(2, Math.ceil(m2 / 400));
    const fab = pvE >= 50 ? "Circutor" : "Huawei";
    mats.push({ cat: "Mobilidade VE", ref: `VE-${pvE}KW`,  nome: `Posto Carregamento VE ${pvE}kW`,                  marca: fab,   qtd: nVE, unidade: "un", obs: pvE >= 50 ? "DC Rápido · CCS + CHAdeMO · OCPP" : pvE >= 22 ? "AC Trifásico · Type 2 · RFID" : "Modo 3 · Type 2 · App" });
    mats.push({ cat: "Mobilidade VE", ref: "CAB-VE-6",      nome: "Cabo Flexível H05VV-F 3×6mm² para VE",           marca: "Prysmian", qtd: nVE * (pvE >= 22 ? 30 : 15), unidade: "m" });
  }

  /* ── BACKUP / GERADOR ── */
  if (f.gerador) {
    const kvaG = kwh > 200 ? 200 : kwh > 80 ? 80 : kwh > 30 ? 30 : 15;
    mats.push({ cat: "Backup Gerador", ref: `GEN-${kvaG}K`,  nome: `Grupo Gerador Diesel ${kvaG} KVA Insonorizado`, marca: "Perkins / Stamford", qtd: 1, unidade: "un", obs: "Arranque automático · nível sonoro ≤70 dB(A)" });
    mats.push({ cat: "Backup Gerador", ref: "ATS-AUTO",       nome: "Comutador Automático ATS 4P",                   marca: "Legrand",           qtd: 1, unidade: "un", obs: "Comutação automática rede ↔ gerador <3s" });
    mats.push({ cat: "Backup Gerador", ref: "CAB-GEN-16",     nome: "Cabo Alimentação Gerador NYY 4×16mm²",          marca: "Nexans",            qtd: 30, unidade: "m" });
  }

  return mats;
}

/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */
export default function Home() {
  // const [slide, setSlide] = useState(0);
  // const [animKey, setAnimKey] = useState(0);

  const [activeProduct, setActiveProduct] = useState(0);
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [loaderVis, setLoaderVis] = useState(true);
  const [loaderFade, setLoaderFade] = useState(false);
  // const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  /* ── Simulador state ── */
  const [simStep, setSimStep]     = useState<SimStep>(1);
  const [simForm, setSimForm]     = useState<SimForm>({
    tipo: "", area: "", consumo: "", autonomia: "1",
    trifasico: false, gerador: false, spda: false,
    ve: false, solar: false, ups: false, localizacao: "Luanda",
  });
  const [simResult, setSimResult] = useState<MatItem[]>([]);
  const [simCatFil, setSimCatFil] = useState("Todos");
  const setSim = (k: keyof SimForm, v: string | boolean) =>
    setSimForm(prev => ({ ...prev, [k]: v }));
  const simCats = ["Todos", ...Array.from(new Set(simResult.map(m => m.cat)))];
  const simVisible = simCatFil === "Todos" ? simResult : simResult.filter(m => m.cat === simCatFil);
  const runSim = () => {
    setSimResult(calcSimulacao(simForm));
    setSimCatFil("Todos");
    setSimStep(3);
  };

  const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  fetch("/api/cms/products")
    .then(r => r.json())
    .then(setProducts);
}, []);


  // const advance = () => { setSlide(s => (s + 1) % HERO_SLIDES.length); setAnimKey(k => k + 1); };

  // useEffect(() => {
  //   timerRef.current = setInterval(advance, 6000);
  //   return () => clearInterval(timerRef.current);
  // }, []);

  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);

useEffect(() => {
  fetch("/api/cms/hero-slides")
    .then(r => r.json())
    .then(setHeroSlides);
}, []);

  useEffect(() => {
    const hide = () => { setLoaderFade(true); setTimeout(() => setLoaderVis(false), 480); };
    const t = setTimeout(hide, 900);
    const onLoad = () => { clearTimeout(t); setTimeout(hide, 200); };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => { clearTimeout(t); window.removeEventListener("load", onLoad); };
  }, []);

  // const cur = HERO_SLIDES[slide];
  const curProd = PRODUCTS[activeProduct];

  const NAV = [
    { label: "Produtos", href: "#produtos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Simulador", href: "#simulador" },
    { label: "Presença", href: "#presenca" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", overflowX: "hidden" }}>
      {/* ── PAGE LOADER ── */}
      {loaderVis && (
        <div style={{ position:"fixed", inset:0, zIndex:9999, background:"#095b66", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:28, transition:"opacity .48s ease, transform .48s ease", opacity:loaderFade?0:1, transform:loaderFade?"scale(1.02)":"none", pointerEvents:loaderFade?"none":"auto" }}>
          <style>{`
            @keyframes _lp{0%,100%{opacity:1}50%{opacity:.4}}
            @keyframes _lb{0%{transform:scaleX(0)}60%{transform:scaleX(.75)}100%{transform:scaleX(1)}}
            @keyframes _ls{0%{background-position:-400px 0}100%{background-position:400px 0}}
          `}</style>
          <div style={{ display:"flex", alignItems:"center", gap:10, animation:"_lp 1.6s ease infinite" }}>
            <div style={{ width:44, height:44, borderRadius:10, background:"rgba(255,255,255,.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg viewBox="0 0 24 24" fill="none" width="26" height="26"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" stroke="#fff" strokeWidth=".5" strokeLinejoin="round"/></svg>
            </div>
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:900, fontSize:22, color:"#fff", letterSpacing:"-.01em" }}>
              Multi<span style={{ color:"rgba(255,255,255,.5)" }}>energia</span>
            </span>
          </div>
          <div style={{ width:160, height:2, background:"rgba(255,255,255,.15)", borderRadius:99, overflow:"hidden" }}>
            <div style={{ height:"100%", width:"100%", background:"linear-gradient(90deg,rgba(255,255,255,.6) 0%,#fff 50%,rgba(255,255,255,.6) 100%)", backgroundSize:"200% 100%", borderRadius:99, transformOrigin:"left", animation:"_lb 900ms cubic-bezier(.4,0,.2,1) forwards, _ls 1.2s linear infinite" }}/>
          </div>
          <div style={{ display:"flex", gap:6 }}>
            {[0,.15,.3].map((d,i) => <div key={i} style={{ width:5, height:5, borderRadius:"50%", background:"rgba(255,255,255,.6)", animation:`_lp 1.2s ${d}s ease infinite` }}/>)}
          </div>
        </div>
      )}
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
        .prod-tab { padding: 14px 18px; border-radius: 8px; cursor: pointer; transition: all .2s; border: 1.5px solid transparent; display: flex; align-items: center; gap: 12px; }
        .prod-tab:hover { background: #f0f9fa; }
        .prod-tab.on { background: #095b66; border-color: #095b66; }
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
        /* ── Simulador ── */
        @keyframes simUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }
        .sim-up { animation: simUp .4s ease both; }
        .sim-tipo-btn { border: 1.5px solid #dde8ea; border-radius: 14px; background: #fff; cursor: pointer; transition: all .22s; padding: 22px 16px; display: flex; flex-direction: column; align-items: center; gap: 10px; font-family: 'Montserrat',sans-serif; }
        .sim-tipo-btn:hover { border-color: #095b66; transform: translateY(-2px); box-shadow: 0 6px 22px rgba(9,91,102,.1); }
        .sim-tipo-btn.on { border-color: #095b66; background: #095b66; box-shadow: 0 8px 28px rgba(9,91,102,.22); transform: translateY(-3px); }
        .sim-field { display: flex; flex-direction: column; gap: 6px; }
        .sim-field label { font-size: 10px; font-weight: 700; color: #095b66; letter-spacing: .14em; text-transform: uppercase; }
        .sim-field small { font-size: 10.5px; color: #9bbbbe; margin-top: 2px; }
        .sim-inp { width: 100%; background: #fff; border: 1.5px solid #dde8ea; border-radius: 9px; color: #1a2c2e; padding: 11px 14px; font-family: 'Montserrat',sans-serif; font-size: 13px; font-weight: 600; outline: none; transition: border-color .2s, box-shadow .2s; }
        .sim-inp:focus { border-color: #095b66; box-shadow: 0 0 0 3px rgba(9,91,102,.08); }
        .sim-inp::placeholder { color: #b0c8ca; font-weight: 500; }
        .sim-sel { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%23095b66' stroke-width='2.2' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 13px center; padding-right:36px; }
        .sim-toggle { position:relative; display:inline-flex; width:40px; height:22px; flex-shrink:0; }
        .sim-toggle input { opacity:0; width:0; height:0; }
        .sim-slider { position:absolute; inset:0; border-radius:99px; background:#dde8ea; cursor:pointer; transition:background .2s; }
        .sim-slider::before { content:''; position:absolute; width:16px; height:16px; left:3px; bottom:3px; background:#fff; border-radius:50%; transition:transform .22s; box-shadow:0 1px 3px rgba(0,0,0,.15); }
        .sim-toggle input:checked + .sim-slider { background: #095b66; }
        .sim-toggle input:checked + .sim-slider::before { transform: translateX(18px); }
        .sim-cat-pill { padding: 6px 14px; border-radius: 99px; border: 1.5px solid #dde8ea; background: #fff; font-size: 11px; font-weight: 700; color: #4a7275; cursor: pointer; transition: all .18s; white-space: nowrap; font-family:'Montserrat',sans-serif; }
        .sim-cat-pill:hover { border-color: #095b66; color: #095b66; }
        .sim-cat-pill.on { background: #095b66; border-color: #095b66; color: #fff; }
        .sim-row:hover { background: #f8fcfc; }
        .sim-prog-line { height: 2px; flex:1; margin: 0 6px 20px; transition: background .3s; }
        @media (max-width: 900px) {
          .hide-mob { display: none !important; }
          .two { grid-template-columns: 1fr !important; }
          .three { grid-template-columns: 1fr 1fr !important; }
          .svc-grid { grid-template-columns: repeat(2,1fr) !important; }
          .sp { padding-left: 22px !important; padding-right: 22px !important; }
          .hero-sp { padding: 86px 22px 0 !important; }
        }
        @media (max-width: 540px) { .three { grid-template-columns: 1fr !important; } .svc-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1100px) { .svc-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>



      {/* ── HERO ── */}

{/* <HeroSection slides={heroSlides} /> */}

<HeroSection slides={heroSlides.map((s, i) => ({ ...s, id: i, order: i, active: true }))} />


      {/* ── PRODUCTS ── */}
      <section id="produtos" style={{ padding: "96px 0 80px" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 52, flexWrap: "wrap" }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Catálogo</p>
                <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05 }}>Os Nossos Produtos</h2>
              </div>
              <Link href="/produtos" style={{ fontSize: 12, fontWeight: 700, color: "#095b66", letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "2px solid #095b66", paddingBottom: 2 }}>
                Ver todos →
              </Link>
            </div>
          </Reveal>

          
                <Reveal>
                  <ProductsSection products={products} />
                </Reveal>
              
            </div>
            </section>

            {/* <Reveal key={activeProduct}>
              <div style={{ background: "linear-gradient(135deg, #095b66 0%, #0a7a89 100%)", borderRadius: 20, padding: "44px 48px", minHeight: 360, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: -30, top: -30, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,.05)", pointerEvents: "none" }}/>
                <div style={{ position: "absolute", right: 30, bottom: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }}/>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                    <svg viewBox="0 0 64 64" fill="none" width="44" height="44">
                      {activeProduct === 0 && <><circle cx="32" cy="32" r="10" fill="rgba(255,255,255,.9)"/><path d="M32 10v5M32 49v5M10 32h5M49 32h5M16.5 16.5l3.5 3.5M44 44l3.5 3.5M16.5 47.5l3.5-3.5M44 20l3.5-3.5" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/></>}
                      {activeProduct === 1 && <><rect x="18" y="6" width="28" height="52" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="22" y="12" width="20" height="8" rx="2" fill="rgba(255,255,255,.9)"/><rect x="22" y="24" width="20" height="8" rx="2" fill="rgba(255,255,255,.5)"/><rect x="22" y="36" width="20" height="8" rx="2" fill="rgba(255,255,255,.3)"/><path d="M28 60h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
                      {activeProduct === 2 && <><rect x="8" y="8" width="48" height="48" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="14" y="14" width="36" height="8" rx="2" fill="rgba(255,255,255,.9)" opacity=".8"/><circle cx="20" cy="34" r="5" fill="rgba(255,255,255,.9)"/><circle cx="32" cy="34" r="5" fill="rgba(255,255,255,.6)"/><circle cx="44" cy="34" r="5" fill="rgba(255,255,255,.3)"/></>}
                      {activeProduct === 3 && <><rect x="10" y="16" width="44" height="32" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 24l-8 10h10l-6 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>}
                      {activeProduct === 4 && <><rect x="12" y="20" width="40" height="30" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 8v12" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 8h24M20 14h24" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><rect x="20" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/><rect x="34" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/></>}
                      {activeProduct === 5 && <><rect x="8" y="22" width="48" height="26" rx="6" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><circle cx="20" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="20" cy="52" r="3" fill="rgba(255,255,255,.9)"/><circle cx="44" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="44" cy="52" r="3" fill="rgba(255,255,255,.9)"/><path d="M14 30h14l4 8h18" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M42 18v8M38 22h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
                    </svg>
                  </div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 8 }}>{curProd.id.toUpperCase()}</p>
                  <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>{curProd.name}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}>{curProd.desc}</p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
                    {curProd.specs.map(s => (
                      <span key={s} style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, fontSize: 11, fontWeight: 600, color: "#fff", padding: "4px 12px" }}>{s}</span>
                    ))}
                  </div>
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
     
      </section> */}

      {/* ── SERVICES ── */}
      <section id="servicos" style={{ background: "#095b66", padding: "64px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 8 }}>— Serviços</p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 36, flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#fff", lineHeight: 1.05 }}>O que fazemos</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 380, lineHeight: 1.7 }}>Da concepção ao comissionamento. Suporte especializado em todas as fases do seu projeto energético.</p>
            </div>
          </Reveal>
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12, alignItems: "stretch" }}>
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * .07} style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", background: i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)", border: "1.5px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "24px 20px", transition: "all .3s", cursor: "default" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background="rgba(255,255,255,.12)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,.25)"; (e.currentTarget as HTMLDivElement).style.transform="translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background=i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,.1)"; (e.currentTarget as HTMLDivElement).style.transform="none"; }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, flexShrink: 0 }}>
                    <svg viewBox="0 0 48 48" fill="none" width="26" height="26">
                      {/* 0 Quadros Elétricos */}
                      {i === 0 && <><rect x="8" y="4" width="32" height="40" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="13" y="10" width="10" height="6" rx="1.5" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.7)" strokeWidth="1.5"/><rect x="25" y="10" width="10" height="6" rx="1.5" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.7)" strokeWidth="1.5"/><path d="M13 24h22M13 30h16M13 36h10" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round"/><circle cx="35" cy="33" r="4" stroke="rgba(255,255,255,.8)" strokeWidth="1.5"/><path d="M35 31v2l1.5 1.5" stroke="rgba(255,255,255,.8)" strokeWidth="1.5" strokeLinecap="round"/></>}
                      {/* 1 Solar + Armazenamento */}
                      {i === 1 && <><path d="M8 18h32" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M8 18L14 8h20l6 10" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinejoin="round"/><path d="M16 8l-2 10M32 8l2 10M24 8v10" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" strokeLinecap="round"/><rect x="10" y="28" width="28" height="12" rx="3" stroke="rgba(255,255,255,.8)" strokeWidth="2"/><path d="M16 34h4M28 34h4" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M24 22l-3 5h6l-3 5" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
                      {/* 2 Energia Crítica / UPS */}
                      {i === 2 && <><rect x="6" y="10" width="36" height="28" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M14 38v4M34 38v4M10 42h28" stroke="rgba(255,255,255,.6)" strokeWidth="1.5" strokeLinecap="round"/><path d="M24 16v6l4 4-4 4-4-4 4-4" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="36" cy="18" r="3" fill="rgba(255,255,255,.3)" stroke="rgba(255,255,255,.8)" strokeWidth="1.5"/><circle cx="36" cy="18" r="1" fill="rgba(255,255,255,.9)"/></>}
                      {/* 3 SPDA */}
                      {i === 3 && <><path d="M24 4l3 8 8.5 1.2-6.2 6 1.5 8.5L24 23.5l-6.8 4.2 1.5-8.5-6.2-6L21 12z" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinejoin="round"/><path d="M15 32l-5 12M33 32l5 12" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/><path d="M10 44h28" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/></>}
                      {/* 4 Mobilidade Elétrica */}
                      {i === 4 && <><rect x="10" y="8" width="28" height="22" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M18 30v8M30 30v8" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/><path d="M14 38h20" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round"/><path d="M24 13v5l3 3" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 19h4M34 19h4" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" strokeLinecap="round"/></>}
                      {/* 5 Armários de Passeio */}
                      {i === 5 && <><rect x="10" y="6" width="28" height="38" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M10 16h28" stroke="rgba(255,255,255,.5)" strokeWidth="1.5"/><path d="M10 36h28" stroke="rgba(255,255,255,.5)" strokeWidth="1.5"/><path d="M24 6v4M24 36v8" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" strokeLinecap="round"/><circle cx="30" cy="26" r="2.5" stroke="rgba(255,255,255,.8)" strokeWidth="1.5"/><path d="M16 22h8M16 28h6" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round"/></>}
                      {/* 6 Auditoria Energética */}
                      {i === 6 && <><rect x="6" y="6" width="36" height="28" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 42h16M24 34v8" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round"/><path d="M12 26l7-7 5 5 8-10 6 6" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>}
                      {/* 7 Postos de Transformação */}
                      {i === 7 && <><path d="M8 38V16l16-10 16 10v22" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinejoin="round"/><path d="M8 38h32" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><rect x="18" y="26" width="12" height="12" rx="1.5" stroke="rgba(255,255,255,.7)" strokeWidth="1.5"/><path d="M24 8v8" stroke="rgba(255,255,255,.5)"/><circle cx="24" cy="22" r="3" stroke="rgba(255,255,255,.8)" strokeWidth="1.5"/></>}
                      {/* 8 Telecom */}
                      {i === 8 && <><rect x="6" y="6" width="36" height="28" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M6 18h36" stroke="rgba(255,255,255,.4)" strokeWidth="1.5"/><circle cx="14" cy="12" r="2" fill="rgba(255,255,255,.5)"/><circle cx="20" cy="12" r="2" fill="rgba(255,255,255,.3)"/><path d="M12 24h24M12 28h16" stroke="rgba(255,255,255,.6)" strokeWidth="1.5" strokeLinecap="round"/><path d="M18 34v8M30 34v8" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 42h20" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round"/></>}
                      {/* 9 SATCOM */}
                      {i === 9 && <><path d="M6 36c0-10 8-18 18-18s18 8 18 18" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" strokeLinecap="round"/><path d="M10 36c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="rgba(255,255,255,.6)" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 36a8 8 0 018-8 8 8 0 018 8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><circle cx="24" cy="36" r="3" fill="rgba(255,255,255,.9)"/><path d="M24 36v6" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/></>}
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 13.5, fontWeight: 800, color: "#fff", marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,.58)", lineHeight: 1.6, margin: 0 }}>{s.short}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: 32, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 48, height: 48, background: "rgba(255,255,255,.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</div>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,.45)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>Angola · Suporte</div>
                <a href="tel:+244933153362" style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>+244 933 153 362</a>
              </div>
            </div>
            
          </Reveal>
        </div>
      </section>

            {/* ── GEOGRAPHIC PRESENCE — FIXED MAP ── */}
      <section id="presenca" style={{ background: "#fff", padding: "96px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Presença Internacional</p>
            <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 12 }}>Onde estamos</h2>
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
                  <button key={i} onClick={() => setActivePoint(activePoint === i ? null : i)}
                    style={{ background: activePoint===i?"#095b66":"#fff", border: `1.5px solid ${activePoint===i?"#095b66":"#dde8ea"}`, borderRadius: 12, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start", cursor: "pointer", transition: "all .25s", textAlign: "left" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: activePoint===i?"rgba(255,255,255,.15)":"#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                      {i===0?"🇦🇴":i===1?"🇵🇹":i===2?"🇨🇻":"🇸🇹"}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: activePoint===i?"#fff":"#0a1c1e", marginBottom: 3 }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: activePoint===i?"rgba(255,255,255,.65)":"#6a9598", lineHeight: 1.5, whiteSpace: "pre-line" }}>{p.detail}</div>
                    </div>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CLIENTS + BRANDS ── */}
      <section style={{ background: "#f0f9fa", padding: "80px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Clientes</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Confiam em Nós</h2>
          </Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 72 }}>
            {CLIENTS.map((c, i) => (
              <Reveal key={i} delay={i * .015}><div className="client-chip">{c}</div></Reveal>
            ))}
          </div>
          <div style={{ borderTop: "1.5px solid #c8e8eb", paddingTop: 64 }}>
            <Reveal>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Parceiros</p>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Marcas que Representamos</h2>
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

      {/* ── CTA BAND ── */}
      <section style={{ background: "#095b66" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 80px" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 36, flexWrap: "wrap" }}>
              <div>
                </div>
            
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contacto" style={{ background: "#fff", padding: "96px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Contacto</p>
            <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 56 }}>Fale Connosco</h2>
          </Reveal>
          <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 72 }}>
            <Reveal>
              <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.8, marginBottom: 44 }}>Entre em contacto com o escritório mais próximo ou envie-nos uma mensagem e entraremos em contacto consigo brevemente.</p>
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

      
    </div>
  );
}