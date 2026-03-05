


// // // // // // "use client";
// // // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // // import Link from "next/link";

// // // // // // /* ─────────────────────────────────────────────
// // // // // //    DATA
// // // // // // ───────────────────────────────────────────── */
// // // // // // const HERO_SLIDES = [
// // // // // //   {
// // // // // //     tag: "Eficiência · Transição · Inovação",
// // // // // //     line1: "Energia que",
// // // // // //     line2: "transforma",
// // // // // //     line3: "Angola",
// // // // // //     sub: "25 anos a fornecer soluções energéticas completas. Da geração ao consumo, do projeto à manutenção.",
// // // // // //   },
// // // // // //   {
// // // // // //     tag: "Representante Oficial EcoFlow · Angola",
// // // // // //     line1: "Independência",
// // // // // //     line2: "energética",
// // // // // //     line3: "total",
// // // // // //     sub: "Sistemas solares residenciais e industriais, armazenamento e inversores híbridos.",
// // // // // //   },
// // // // // //   {
// // // // // //     tag: "Fabricante Certificado · Legrand Partner",
// // // // // //     line1: "Fabricamos",
// // // // // //     line2: "o que outros",
// // // // // //     line3: "apenas vendem",
// // // // // //     sub: "Quadros elétricos BT fabricados em Luanda e Lisboa. Qualidade IEC 61439 garantida.",
// // // // // //   },
// // // // // // ];

// // // // // // const PRODUCTS = [
// // // // // //   {
// // // // // //     id: "solar",
// // // // // //     color: "#095b66",
// // // // // //     light: "#e8f7f9",
// // // // // //     svg: (
// // // // // //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
// // // // // //         <circle cx="32" cy="32" r="12" fill="#095b66"/>
// // // // // //         <path d="M32 8v6M32 50v6M8 32h6M50 32h6M15.5 15.5l4.2 4.2M44.3 44.3l4.2 4.2M15.5 48.5l4.2-4.2M44.3 19.7l4.2-4.2" stroke="#095b66" strokeWidth="3" strokeLinecap="round"/>
// // // // // //         <rect x="10" y="42" width="18" height="12" rx="2" fill="#0a7a89" opacity=".3"/>
// // // // // //         <rect x="14" y="44" width="10" height="3" rx="1" fill="#095b66"/>
// // // // // //         <rect x="14" y="49" width="10" height="3" rx="1" fill="#095b66"/>
// // // // // //       </svg>
// // // // // //     ),
// // // // // //     name: "Sistemas de Energia Solar",
// // // // // //     specs: ["+50 MW instalados","Residencial · Industrial · Utility","Autoconsumo · Carports · Centrais"],
// // // // // //     brands: ["Huawei FusionSolar","SMA","Siemens","Nextracker"],
// // // // // //     desc: "Dimensionamos e instalamos sistemas fotovoltaicos completos. Do painel ao inversor, da ligação à rede ao armazenamento em bateria.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: "ecoflow",
// // // // // //     color: "#0a7a89",
// // // // // //     light: "#e6f5f7",
// // // // // //     svg: (
// // // // // //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
// // // // // //         <rect x="16" y="8" width="32" height="48" rx="4" fill="#0a7a89" opacity=".15"/>
// // // // // //         <rect x="16" y="8" width="32" height="48" rx="4" stroke="#0a7a89" strokeWidth="2"/>
// // // // // //         <rect x="22" y="14" width="20" height="6" rx="2" fill="#0a7a89"/>
// // // // // //         <rect x="22" y="24" width="20" height="6" rx="2" fill="#0a7a89" opacity=".6"/>
// // // // // //         <rect x="22" y="34" width="20" height="6" rx="2" fill="#0a7a89" opacity=".3"/>
// // // // // //         <path d="M28 56h8" stroke="#0a7a89" strokeWidth="2.5" strokeLinecap="round"/>
// // // // // //         <path d="M35 4h-6l-2 4h10l-2-4z" fill="#0a7a89"/>
// // // // // //       </svg>
// // // // // //     ),
// // // // // //     name: "EcoFlow PowerOcean",
// // // // // //     specs: ["5 kW a 29 kW","Até 45 kWh expansível","15 anos garantia · LFP"],
// // // // // //     brands: ["EcoFlow"],
// // // // // //     desc: "Inversor híbrido trifásico com armazenamento de energia expansível. Backup potente, instalação plug & play e monitorização remota.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: "quadros",
// // // // // //     color: "#064e58",
// // // // // //     light: "#e5f4f6",
// // // // // //     svg: (
// // // // // //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
// // // // // //         <rect x="8" y="8" width="48" height="48" rx="3" fill="#064e58" opacity=".12"/>
// // // // // //         <rect x="8" y="8" width="48" height="48" rx="3" stroke="#064e58" strokeWidth="2"/>
// // // // // //         <rect x="14" y="14" width="36" height="8" rx="2" fill="#064e58" opacity=".7"/>
// // // // // //         <circle cx="20" cy="30" r="4" fill="#064e58"/>
// // // // // //         <circle cx="32" cy="30" r="4" fill="#064e58" opacity=".6"/>
// // // // // //         <circle cx="44" cy="30" r="4" fill="#064e58" opacity=".3"/>
// // // // // //         <rect x="14" y="40" width="36" height="3" rx="1.5" fill="#064e58" opacity=".4"/>
// // // // // //         <rect x="14" y="46" width="24" height="3" rx="1.5" fill="#064e58" opacity=".4"/>
// // // // // //       </svg>
// // // // // //     ),
// // // // // //     name: "Quadros Elétricos BT",
// // // // // //     specs: ["Até 6300 A · Forma 1–4","Fabricação própria em Luanda","Parceiro Legrand · IEC 61439"],
// // // // // //     brands: ["Legrand"],
// // // // // //     desc: "Fabricamos quadros elétricos de baixa tensão com unidades industriais próprias em Luanda e Lisboa. Soluções padrão e à medida.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: "ups",
// // // // // //     color: "#095b66",
// // // // // //     light: "#e8f7f9",
// // // // // //     svg: (
// // // // // //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
// // // // // //         <rect x="10" y="16" width="44" height="32" rx="3" fill="#095b66" opacity=".12"/>
// // // // // //         <rect x="10" y="16" width="44" height="32" rx="3" stroke="#095b66" strokeWidth="2"/>
// // // // // //         <path d="M34 24l-8 10h10l-6 8" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // // // //         <circle cx="18" cy="32" r="3" fill="#095b66" opacity=".4"/>
// // // // // //         <circle cx="46" cy="32" r="3" fill="#095b66" opacity=".4"/>
// // // // // //         <rect x="24" y="50" width="16" height="4" rx="2" fill="#095b66" opacity=".3"/>
// // // // // //       </svg>
// // // // // //     ),
// // // // // //     name: "UPS & Estabilizadores",
// // // // // //     specs: ["Salicru até 800 KVA","Socomec MODULYS 200–4800 KVA","Online dupla conversão"],
// // // // // //     brands: ["Salicru","Socomec"],
// // // // // //     desc: "Energia crítica ininterrupta para data centers, hospitais, indústrias e telecomunicações. Proteção contra cortes, surtos e variações.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: "mt",
// // // // // //     color: "#0a7a89",
// // // // // //     light: "#e6f5f7",
// // // // // //     svg: (
// // // // // //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
// // // // // //         <rect x="12" y="20" width="40" height="30" rx="3" fill="#0a7a89" opacity=".12"/>
// // // // // //         <rect x="12" y="20" width="40" height="30" rx="3" stroke="#0a7a89" strokeWidth="2"/>
// // // // // //         <path d="M32 8v12" stroke="#0a7a89" strokeWidth="2.5" strokeLinecap="round"/>
// // // // // //         <path d="M20 8h24" stroke="#0a7a89" strokeWidth="2" strokeLinecap="round"/>
// // // // // //         <path d="M20 14h24" stroke="#0a7a89" strokeWidth="2" strokeLinecap="round"/>
// // // // // //         <rect x="20" y="28" width="10" height="14" rx="2" fill="#0a7a89" opacity=".5"/>
// // // // // //         <rect x="34" y="28" width="10" height="14" rx="2" fill="#0a7a89" opacity=".5"/>
// // // // // //         <path d="M24 54h16" stroke="#0a7a89" strokeWidth="2.5" strokeLinecap="round"/>
// // // // // //       </svg>
// // // // // //     ),
// // // // // //     name: "Postos de Transformação",
// // // // // //     specs: ["Toshiba TCSU 10–30 kV","500 a 2000 KVA","Plug & play · IP66 · Pré-montado"],
// // // // // //     brands: ["Toshiba T&D"],
// // // // // //     desc: "Postos compactos pré-montados para ligação de média tensão. Instalação rápida, segurança máxima (Class AB) e resistência climática.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: "ve",
// // // // // //     color: "#064e58",
// // // // // //     light: "#e5f4f6",
// // // // // //     svg: (
// // // // // //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
// // // // // //         <rect x="8" y="22" width="48" height="26" rx="6" fill="#064e58" opacity=".1"/>
// // // // // //         <rect x="8" y="22" width="48" height="26" rx="6" stroke="#064e58" strokeWidth="2"/>
// // // // // //         <circle cx="20" cy="52" r="6" fill="#064e58" opacity=".3"/>
// // // // // //         <circle cx="20" cy="52" r="3" fill="#064e58"/>
// // // // // //         <circle cx="44" cy="52" r="6" fill="#064e58" opacity=".3"/>
// // // // // //         <circle cx="44" cy="52" r="3" fill="#064e58"/>
// // // // // //         <path d="M14 30h14l4 8h18" stroke="#064e58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // // // // //         <path d="M42 18v8" stroke="#064e58" strokeWidth="2.5" strokeLinecap="round"/>
// // // // // //         <path d="M38 22h8" stroke="#064e58" strokeWidth="2" strokeLinecap="round"/>
// // // // // //       </svg>
// // // // // //     ),
// // // // // //     name: "Mobilidade Elétrica",
// // // // // //     specs: ["11 kW · 22 kW · 50 kW","Doméstico e via pública","Avaliação técnica incluída"],
// // // // // //     brands: ["Huawei","Tesla","Circutor"],
// // // // // //     desc: "Soluções completas para carregamento de veículos elétricos. Aconselhamento, instalação certificada e manutenção contínua.",
// // // // // //   },
// // // // // // ];

// // // // // // const SERVICES = [
// // // // // //   {
// // // // // //     icon: (
// // // // // //       <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
// // // // // //         <rect x="6" y="6" width="36" height="36" rx="4" stroke="#095b66" strokeWidth="2"/>
// // // // // //         <path d="M14 24h20M24 14v20" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round"/>
// // // // // //         <circle cx="14" cy="14" r="3" fill="#095b66" opacity=".4"/>
// // // // // //         <circle cx="34" cy="34" r="3" fill="#095b66" opacity=".4"/>
// // // // // //       </svg>
// // // // // //     ),
// // // // // //     title: "Projeto & Engenharia",
// // // // // //     short: "Dimensionamento técnico completo com esquemas unifilares e memoriais descritivos.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: (
// // // // // //       <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
// // // // // //         <circle cx="24" cy="24" r="18" stroke="#095b66" strokeWidth="2"/>
// // // // // //         <path d="M24 14v10l6 6" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // // // //         <path d="M10 24h4M34 24h4M24 10v4M24 34v4" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/>
// // // // // //       </svg>
// // // // // //     ),
// // // // // //     title: "Instalação & Montagem",
// // // // // //     short: "Equipa certificada para quadros, sistemas solares, SPDA e postos de transformação.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: (
// // // // // //       <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
// // // // // //         <path d="M8 36l8-8 6 6 10-12 8 8" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // // // //         <rect x="6" y="6" width="36" height="28" rx="3" stroke="#095b66" strokeWidth="2"/>
// // // // // //         <path d="M16 42h16" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/>
// // // // // //         <path d="M24 34v8" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/>
// // // // // //       </svg>
// // // // // //     ),
// // // // // //     title: "Auditoria Energética",
// // // // // //     short: "Inspeção termográfica, análise de qualidade de energia e monitorização contínua.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: (
// // // // // //       <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
// // // // // //         <path d="M24 6l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L24 23.4l-6.9 3.8 1.3-7.7-5.6-5.4 7.7-1.1z" stroke="#095b66" strokeWidth="2" strokeLinejoin="round"/>
// // // // // //         <path d="M14 30l-6 12M34 30l6 12M20 42h8" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/>
// // // // // //       </svg>
// // // // // //     ),
// // // // // //     title: "Proteção Atmosférica",
// // // // // //     short: "Sistemas SPDA completos Franklin France. Conformidade NA 33:2014 e normas internacionais.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: (
// // // // // //       <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
// // // // // //         <path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/>
// // // // // //         <path d="M32 8l8 0 0 8" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // // // //         <path d="M40 8L28 20" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round"/>
// // // // // //         <path d="M20 24l4-6 4 6" stroke="#095b66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // // // // //       </svg>
// // // // // //     ),
// // // // // //     title: "Manutenção Preventiva",
// // // // // //     short: "Planos periódicos para garantir continuidade operacional e longevidade dos equipamentos.",
// // // // // //   },
// // // // // //   {
// // // // // //     icon: (
// // // // // //       <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
// // // // // //         <rect x="6" y="14" width="36" height="26" rx="3" stroke="#095b66" strokeWidth="2"/>
// // // // // //         <path d="M16 14V10a8 8 0 0116 0v4" stroke="#095b66" strokeWidth="2" strokeLinecap="round"/>
// // // // // //         <path d="M24 26v4" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round"/>
// // // // // //         <circle cx="24" cy="24" r="3" fill="#095b66"/>
// // // // // //       </svg>
// // // // // //     ),
// // // // // //     title: "Energy Academy",
// // // // // //     short: "Formação especializada em energia solar, UPS, SPDA e eletrotecnia. Certificação reconhecida.",
// // // // // //   },
// // // // // // ];

// // // // // // const CLIENTS = [
// // // // // //   "Sonangol","ETU Energias","Unitel","BFA","Fidelidade","MCA",
// // // // // //   "TVCabo","Omatapalo","SIC Notícias","Multitel","Refriango","Arreiou",
// // // // // //   "BancoBNI","Caixa Angola","Telepizza","InfraSat","Prodel","Azueira",
// // // // // //   "Governo de Angola","Standard Bank","IBM","TotalEnergies","Jumbo",
// // // // // //   "BancoBIC","CASAIS","ENDE","Axians","Sonangalp","Elecnor","Marlin",
// // // // // // ];

// // // // // // const BRANDS = [
// // // // // //   { name: "Huawei FusionSolar", role: "Parceiro Solar" },
// // // // // //   { name: "EcoFlow", role: "Rep. Oficial AO" },
// // // // // //   { name: "Toshiba T&D", role: "Rep. Oficial" },
// // // // // //   { name: "Franklin France", role: "Rep. Oficial SPDA" },
// // // // // //   { name: "Legrand", role: "Parceiro Quadros" },
// // // // // //   { name: "Salicru", role: "Rep. Oficial UPS" },
// // // // // //   { name: "Socomec", role: "Rep. Oficial UPS" },
// // // // // //   { name: "Siemens", role: "Parceiro" },
// // // // // //   { name: "Schneider Electric", role: "Parceiro" },
// // // // // //   { name: "SMA", role: "Parceiro Solar" },
// // // // // //   { name: "Circutor", role: "Parceiro VE" },
// // // // // //   { name: "Nextracker", role: "Parceiro Solar" },
// // // // // // ];

// // // // // // /* Presence points — lon/lat coordinates */
// // // // // // const PRESENCE = [
// // // // // //   { name: "Angola · Luanda",     lon: 13.23,  lat: -8.84, main: true,  detail: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362" },
// // // // // //   { name: "Portugal · Lisboa",   lon: -9.14,  lat: 38.72, main: true,  detail: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
// // // // // //   { name: "Cabo Verde · Praia",  lon: -23.51, lat: 14.93, main: false, detail: "Presença comercial activa" },
// // // // // //   { name: "São Tomé e Príncipe", lon:  6.61,  lat:  0.33, main: false, detail: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
// // // // // // ];

// // // // // // /* ─────────────────────────────────────────────
// // // // // //    HOOKS
// // // // // // ───────────────────────────────────────────── */
// // // // // // function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
// // // // // //   const ref = useRef<HTMLDivElement | null>(null);
// // // // // //   const [vis, setVis] = useState(false);
// // // // // //   useEffect(() => {
// // // // // //     const el = ref.current;
// // // // // //     if (!el) return;
// // // // // //     const obs = new IntersectionObserver(([e]) => {
// // // // // //       if (e.isIntersecting) { setVis(true); obs.disconnect(); }
// // // // // //     }, { threshold });
// // // // // //     obs.observe(el);
// // // // // //     return () => obs.disconnect();
// // // // // //   }, [threshold]);
// // // // // //   return [ref, vis];
// // // // // // }

// // // // // // function Reveal({ children, delay = 0, style = {} }: {
// // // // // //   children: React.ReactNode;
// // // // // //   delay?: number;
// // // // // //   style?: React.CSSProperties;
// // // // // // }) {
// // // // // //   const [ref, vis] = useInView();
// // // // // //   return (
// // // // // //     <div ref={ref as React.RefObject<HTMLDivElement>} style={{
// // // // // //       opacity: vis ? 1 : 0,
// // // // // //       transform: vis ? "none" : "translateY(22px)",
// // // // // //       transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
// // // // // //       ...style,
// // // // // //     }}>
// // // // // //       {children}
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // /* ─────────────────────────────────────────────
// // // // // //    WORLD MAP — Real Natural Earth paths, Mercator
// // // // // // ───────────────────────────────────────────── */
// // // // // // type PresencePoint = { name: string; lon: number; lat: number; main: boolean; detail: string };

// // // // // // function toMercator(lon: number, lat: number): [number, number] {
// // // // // //   const W = 1000, H = 500;
// // // // // //   const x = (lon + 180) * (W / 360);
// // // // // //   const latR = (lat * Math.PI) / 180;
// // // // // //   const mercN = Math.log(Math.tan(Math.PI / 4 + latR / 2));
// // // // // //   const y = H / 2 - (H * mercN) / (2 * Math.PI);
// // // // // //   return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
// // // // // // }

// // // // // // /* Real simplified Natural Earth paths (Mercator, 1000×500 viewBox) */
// // // // // // const LAND = {
// // // // // //   AFRICA: "M485,196.5 L500,194.3 L519.4,194.6 L529.2,194.8 L533.3,194.1 L538.9,194.4 L541.7,195 L555.6,195 L569.4,199.7 L583.3,203.9 L588.9,204.7 L594.4,206.3 L595.8,210.2 L600,215.6 L605.6,218.7 L611.1,221.6 L616.7,227.5 L619.4,230.4 L622.2,234.6 L627.8,238.9 L638.9,233.2 L641.7,233.9 L638.9,236 L633.3,238.9 L622.2,244.4 L616.7,247.2 L613.9,251.4 L611.1,254.2 L611.1,261.1 L611.1,265.4 L600,274 L597.2,278.4 L597.2,282.8 L588.9,287.4 L580.6,293.7 L575,298.6 L555.6,302 L551.1,300.9 L547.2,297.8 L544.4,292.1 L541.7,285.9 L538.9,281.3 L536.1,275.4 L536.1,268.2 L533.3,258.3 L527.8,251.4 L522.2,245.8 L513.9,243 L505.6,243 L500,243 L491.7,244.4 L486.1,243 L477.8,243.7 L469.4,241.7 L458.3,236 L451.4,229.4 L452.8,220.2 L452.8,211 L461.1,203 L472.2,199.7 L480.6,197.2 L485,196.5 Z",
// // // // // //   EUROPE: "M474.2,183 L509.2,183 L520.8,182.4 L525,180.8 L522.2,174.8 L527.8,173.8 L533.3,173.8 L538.9,173.8 L541.7,171.7 L547.2,173.8 L550,173.8 L552.8,173.8 L555.6,172.8 L561.1,173.8 L566.7,174.8 L569.4,177.9 L575,177.9 L580.6,177.9 L583.3,176.9 L586.1,173.8 L591.7,169.6 L588.9,165.2 L584.7,160.5 L569.4,159.4 L558.3,158.1 L551.4,158.1 L538.9,159.4 L529.2,158.6 L526.4,156.9 L527.8,151.9 L513.9,150.6 L512.5,153.2 L508.3,166.3 L505.6,168.5 L495.8,170.6 L494.4,174.8 L486.1,172.8 L486.7,174.8 L493.1,175.9 L495.8,182.8 L474.2,183 Z",
// // // // // //   IBERIA: "M474.2,183 L495,183 L509.2,183 L508.9,186.2 L501.9,188.1 L500.6,192.9 L499.4,193.6 L497.2,195 L484.7,197 L483.1,195.2 L475.6,195 L473.6,192.5 L473.9,189.5 L476.7,185.8 L474.2,183 Z",
// // // // // //   SCANDINAVIA: "M513.9,150.6 L515.3,149.8 L513.9,139.5 L518.1,138 L519.4,133.3 L538.9,128.5 L544.4,117.8 L550,115.9 L555.6,111.9 L566.7,108.2 L575,109.8 L579.2,112.7 L580.6,117.8 L577.8,128.5 L572.2,133.3 L572.2,142.4 L577.8,145.2 L586.1,142.4 L583.3,146.6 L570.8,147.9 L566.7,146.6 L561.1,146.6 L555.6,147.9 L550,149.3 L544.4,153.2 L543.1,155.7 L534.7,155.7 L529.2,151.9 L513.9,150.6 Z",
// // // // // //   NAMERICA: "M108.3,145.2 L125,150.6 L138.9,160.5 L155.6,171.7 L158.3,177.9 L155.6,189.3 L161.1,194.6 L175,202.2 L230.6,214.1 L250,221.6 L263.9,218.7 L272.2,215.6 L277.8,214.1 L277.8,212.6 L275,206.3 L291.7,203 L291.7,198 L300,187.5 L305.6,186.5 L316.7,181.8 L330.6,177.9 L330.6,173.8 L322.2,169.6 L316.7,162.9 L322.2,145.2 L311.1,139.5 L300,130.1 L277.8,130.1 L261.1,119.7 L233.3,103.4 L200,98.7 L175,93.8 L166.7,103.4 L138.9,119.7 L116.7,142.4 L108.3,145.2 Z",
// // // // // //   SAMERICA: "M297.2,234.6 L311.1,233.2 L322.2,236 L330.6,238.9 L333.3,241.7 L358.3,244.4 L361.1,247.2 L366.7,250 L377.8,254.2 L400,254.2 L402.8,257 L402.8,262.6 L397.2,268.2 L391.7,275.4 L388.9,279.8 L380.6,282.8 L366.7,287.4 L361.1,293.7 L355.6,298.6 L350,302 L341.7,307.1 L325,314.4 L319.4,320.1 L316.7,330.4 L311.1,339.5 L311.1,344.3 L319.4,341.9 L322.2,337.1 L313.9,324.1 L316.7,316.3 L325,310.7 L333.3,305.4 L341.7,302 L341.7,293.7 L341.7,285.9 L341.7,278.4 L336.1,272.5 L333.3,266.8 L327.8,261.1 L322.2,255.6 L311.1,252.8 L300,251.4 L286.1,252.8 L277.8,254.2 L275,248.6 L277.8,244.4 L286.1,238.9 L291.7,236 L297.2,234.6 Z",
// // // // // //   RUSSIA: "M577.8,119.7 L597.2,103.4 L625,88.6 L652.8,88.6 L680.6,98.7 L708.3,98.7 L750,88.6 L791.7,83.1 L819.4,93.8 L833.3,103.4 L875,111.9 L888.9,111.9 L902.8,119.7 L916.7,139.5 L902.8,158.1 L888.9,169.6 L875,173.8 L861.1,185.6 L855.6,192.9 L833.3,189.3 L819.4,192.9 L791.7,189.3 L777.8,181.8 L750,169.6 L722.2,165.2 L708.3,158.1 L694.4,158.1 L680.6,165.2 L666.7,158.1 L652.8,153.2 L638.9,145.2 L625,145.2 L611.1,139.5 L597.2,139.5 L588.9,133.3 L577.8,119.7 Z",
// // // // // //   ASIA: "M597.2,139.5 L611.1,139.5 L625,145.2 L638.9,145.2 L652.8,153.2 L666.7,158.1 L680.6,165.2 L694.4,158.1 L708.3,158.1 L722.2,165.2 L750,169.6 L777.8,181.8 L791.7,189.3 L819.4,192.9 L833.3,189.3 L855.6,192.9 L861.1,185.6 L875,173.8 L888.9,169.6 L902.8,158.1 L916.7,139.5 L902.8,119.7 L888.9,111.9 L875,111.9 L833.3,103.4 L819.4,93.8 L791.7,83.1 L750,88.6 L708.3,98.7 L680.6,98.7 L652.8,88.6 L625,88.6 L597.2,103.4 L577.8,119.7 L588.9,133.3 L597.2,139.5 Z",
// // // // // //   INDIA: "M688.9,196.3 L700,199.7 L708.3,203 L716.7,199.7 L727.8,209.5 L733.3,218.7 L744.4,218.7 L750,212.6 L755.6,218.7 L750,224.6 L744.4,230.4 L733.3,236 L722.2,238.9 L716.7,238.9 L713.9,236 L711.1,230.4 L705.6,224.6 L700,218.7 L694.4,218.7 L688.9,221.6 L683.3,218.7 L672.2,215.6 L666.7,209.5 L666.7,196.3 L672.2,192.9 L680.6,189.3 L688.9,189.3 L688.9,196.3 Z",
// // // // // //   SEASIA: "M777.8,218.7 L791.7,221.6 L805.6,224.6 L805.6,218.7 L819.4,209.5 L833.3,209.5 L838.9,215.6 L844.4,218.7 L838.9,224.6 L827.8,227.5 L822.2,233.2 L805.6,236 L788.9,238.9 L783.3,244.4 L788.9,247.2 L794.4,250 L800,255.6 L805.6,261.1 L811.1,261.1 L816.7,255.6 L822.2,252.8 L827.8,250 L833.3,247.2 L833.3,255.6 L822.2,261.1 L816.7,261.1 L811.1,258.3 L800,258.3 L794.4,255.6 L788.9,252.8 L783.3,247.2 L777.8,244.4 L772.2,238.9 L766.7,227.5 L772.2,221.6 L777.8,218.7 Z",
// // // // // //   AUS: "M816.7,281.3 L822.2,278.4 L827.8,275.4 L833.3,275.4 L838.9,275.4 L844.4,275.4 L850,272.5 L855.6,269.6 L861.1,266.8 L866.7,266.8 L872.2,266.8 L877.8,269.6 L883.3,272.5 L888.9,275.4 L894.4,275.4 L900,275.4 L905.6,275.4 L911.1,278.4 L916.7,281.3 L922.2,284.4 L922.2,287.4 L922.2,290.5 L916.7,293.7 L911.1,297 L905.6,300.3 L900,303.7 L894.4,307.1 L888.9,307.1 L883.3,303.7 L877.8,300.3 L872.2,300.3 L866.7,300.3 L861.1,300.3 L855.6,300.3 L850,300.3 L844.4,297 L838.9,293.7 L833.3,290.5 L827.8,287.4 L822.2,284.4 L816.7,281.3 Z",
// // // // // //   MIDDLEEAST: "M600,203 L605.6,199.7 L611.1,196.3 L622.2,196.3 L627.8,192.9 L638.9,196.3 L650,203 L655.6,206.3 L661.1,212.6 L661.1,218.7 L655.6,221.6 L650,224.6 L644.4,227.5 L638.9,230.4 L627.8,230.4 L622.2,230.4 L616.7,230.4 L611.1,227.5 L605.6,224.6 L600,218.7 L594.4,209.5 L600,203 Z",
// // // // // //   GREENLAND: "M361.1,83.1 L383.3,70.7 L411.1,38.3 L438.9,15.3 L450,70.7 L455.6,103.4 L444.4,126.8 L433.3,139.5 L416.7,145.2 L400,139.5 L383.3,133.3 L372.2,119.7 L361.1,103.4 L355.6,83.1 L361.1,83.1 Z",
// // // // // //   ALASKA: "M27.8,145.2 L33.3,126.8 L38.9,119.7 L50,119.7 L66.7,145.2 L77.8,150.6 L88.9,145.2 L100,145.2 L108.3,145.2 L108.3,150.6 L88.9,155.7 L69.4,158.1 L55.6,158.1 L38.9,160.5 L33.3,155.7 L27.8,150.6 L27.8,145.2 Z",
// // // // // //   JAPAN: "M861.1,203 L866.7,199.7 L872.2,196.3 L877.8,192.9 L883.3,189.3 L888.9,185.6 L894.4,181.8 L900,181.8 L900,185.6 L894.4,189.3 L888.9,192.9 L883.3,196.3 L877.8,199.7 L872.2,203 L861.1,203 Z",
// // // // // // };

// // // // // // function WorldMap({ points, activePoint, onHover }: {
// // // // // //   points: PresencePoint[];
// // // // // //   activePoint: number | null;
// // // // // //   onHover: (i: number) => void;
// // // // // // }) {
// // // // // //   const dots = points.map(p => {
// // // // // //     const [cx, cy] = toMercator(p.lon, p.lat);
// // // // // //     return { ...p, cx, cy };
// // // // // //   });

// // // // // //   return (
// // // // // //     <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
// // // // // //       <svg
// // // // // //         viewBox="0 0 1000 500"
// // // // // //         preserveAspectRatio="xMidYMid meet"
// // // // // //         style={{ width: "100%", height: "auto", display: "block" }}
// // // // // //         xmlns="http://www.w3.org/2000/svg"
// // // // // //       >
// // // // // //         {/* Ocean */}
// // // // // //         <rect width="1000" height="500" fill="#dff0f3" rx="6"/>

// // // // // //         {/* Land masses */}
// // // // // //         {Object.entries(LAND).map(([k, d]) => (
// // // // // //           <path key={k} d={d}
// // // // // //             fill={k === "AFRICA" || k === "IBERIA" ? "#9fd0d8" : "#b6d9de"}
// // // // // //             stroke="#85bec6" strokeWidth="0.7" strokeLinejoin="round"
// // // // // //           />
// // // // // //         ))}

// // // // // //         {/* Highlight: Cape Verde dot (tiny island, no landmass shape needed) */}
// // // // // //         <circle cx="434.7" cy="229" r="5" fill="#9fd0d8" stroke="#85bec6" strokeWidth="0.7"/>
// // // // // //         {/* São Tomé dot */}
// // // // // //         <circle cx="518.4" cy="249.5" r="4" fill="#9fd0d8" stroke="#85bec6" strokeWidth="0.7"/>

// // // // // //         {/* Connection lines between main offices */}
// // // // // //         {dots.filter(p => p.main).flatMap((p, i) =>
// // // // // //           dots.filter((q, j) => q.main && j > i).map((q, j) => (
// // // // // //             <line key={`ln-${i}-${j}`}
// // // // // //               x1={p.cx} y1={p.cy} x2={q.cx} y2={q.cy}
// // // // // //               stroke="#095b66" strokeWidth="1.2" strokeDasharray="5 4" opacity="0.55"
// // // // // //             />
// // // // // //           ))
// // // // // //         )}

// // // // // //         {/* Presence dots */}
// // // // // //         {dots.map((p, i) => (
// // // // // //           <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
// // // // // //             {p.main && (
// // // // // //               <>
// // // // // //                 <circle cx={p.cx} cy={p.cy} r="6" fill="#095b66" opacity="0.15">
// // // // // //                   <animate attributeName="r" values="6;20;6" dur="2.8s" repeatCount="indefinite"/>
// // // // // //                   <animate attributeName="opacity" values="0.15;0;0.15" dur="2.8s" repeatCount="indefinite"/>
// // // // // //                 </circle>
// // // // // //                 <circle cx={p.cx} cy={p.cy} r="9" fill="#095b66" opacity="0.12"/>
// // // // // //               </>
// // // // // //             )}
// // // // // //             <circle
// // // // // //               cx={p.cx} cy={p.cy}
// // // // // //               r={activePoint === i ? 9 : 6}
// // // // // //               fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#5cb8c0")}
// // // // // //               stroke="#fff" strokeWidth="2.5"
// // // // // //               style={{ transition: "r .2s, fill .2s" }}
// // // // // //             />
// // // // // //           </g>
// // // // // //         ))}
// // // // // //       </svg>

// // // // // //       {/* Tooltip */}
// // // // // //       {activePoint !== null && (() => {
// // // // // //         const d = dots[activePoint];
// // // // // //         const pctX = (d.cx / 1000) * 100;
// // // // // //         const pctY = (d.cy / 500) * 100;
// // // // // //         return (
// // // // // //           <div style={{
// // // // // //             position: "absolute",
// // // // // //             left: `${pctX}%`,
// // // // // //             top: `${pctY}%`,
// // // // // //             transform: `translate(${pctX > 65 ? "-105%" : "14px"}, ${pctY > 55 ? "-115%" : "14px"})`,
// // // // // //             background: "#fff",
// // // // // //             border: "1.5px solid #b8dde2",
// // // // // //             borderRadius: 10,
// // // // // //             padding: "12px 16px",
// // // // // //             minWidth: 220,
// // // // // //             boxShadow: "0 10px 36px rgba(9,91,102,.2)",
// // // // // //             zIndex: 10,
// // // // // //             pointerEvents: "none",
// // // // // //           }}>
// // // // // //             <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 5 }}>{d.name}</div>
// // // // // //             <div style={{ fontSize: 11.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{d.detail}</div>
// // // // // //           </div>
// // // // // //         );
// // // // // //       })()}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // /* ─────────────────────────────────────────────
// // // // // //    APP
// // // // // // ───────────────────────────────────────────── */
// // // // // // export default function Home() {
// // // // // //   const [slide, setSlide] = useState(0);
// // // // // //   const [animKey, setAnimKey] = useState(0);
// // // // // //   const [scrolled, setScrolled] = useState(false);
// // // // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // // // //   const [activeProduct, setActiveProduct] = useState(0);
// // // // // //   const [activePoint, setActivePoint] = useState<number | null>(null);
// // // // // //   const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

// // // // // //   const advance = () => {
// // // // // //     setSlide(s => (s + 1) % HERO_SLIDES.length);
// // // // // //     setAnimKey(k => k + 1);
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     timerRef.current = setInterval(advance, 6000);
// // // // // //     return () => clearInterval(timerRef.current);
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     const fn = () => setScrolled(window.scrollY > 48);
// // // // // //     window.addEventListener("scroll", fn);
// // // // // //     return () => window.removeEventListener("scroll", fn);
// // // // // //   }, []);

// // // // // //   const cur = HERO_SLIDES[slide];
// // // // // //   const curProd = PRODUCTS[activeProduct];

// // // // // //   const NAV = [
// // // // // //     { label: "Produtos", href: "#produtos" },
// // // // // //     { label: "Serviços", href: "#servicos" },
// // // // // //     { label: "Presença", href: "#presenca" },
// // // // // //     { label: "Contacto", href: "#contacto" },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", overflowX: "hidden" }}>
// // // // // //       <style>{`
// // // // // //         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
// // // // // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// // // // // //         html { scroll-behavior: smooth; }
// // // // // //         a { text-decoration: none; color: inherit; }
// // // // // //         button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
// // // // // //         ::selection { background: #095b66; color: #fff; }
// // // // // //         ::-webkit-scrollbar { width: 4px; }
// // // // // //         ::-webkit-scrollbar-thumb { background: #095b66; border-radius: 4px; }

// // // // // //         .nav-a { font-size: 11.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; transition: opacity .2s; }
// // // // // //         .nav-a:hover { opacity: .6; }

// // // // // //         @keyframes heroIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: none; } }
// // // // // //         .hero-in { animation: heroIn .5s cubic-bezier(.22,1,.36,1) both; }

// // // // // //         .dot { width: 7px; height: 7px; border-radius: 99px; cursor: pointer; border: none; transition: all .3s; background: rgba(255,255,255,.35); }
// // // // // //         .dot.on { width: 24px; background: #fff; }

// // // // // //         @keyframes pulse { 0%,100%{transform:scale(1);opacity:.6;} 50%{transform:scale(1.4);opacity:0;} }

// // // // // //         .prod-tab { padding: 14px 18px; border-radius: 8px; cursor: pointer; transition: all .2s; border: 1.5px solid transparent; display: flex; align-items: center; gap: 12px; }
// // // // // //         .prod-tab:hover { background: #f0f9fa; }
// // // // // //         .prod-tab.on { background: #095b66; border-color: #095b66; }

// // // // // //         .svc-card { background: #fff; border: 1.5px solid #dde8ea; border-radius: 14px; padding: 28px 24px; transition: all .3s; }
// // // // // //         .svc-card:hover { border-color: #095b66; box-shadow: 0 8px 32px rgba(9,91,102,.1); transform: translateY(-3px); }

// // // // // //         .brand-card { background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; padding: 14px 18px; text-align: center; transition: all .25s; }
// // // // // //         .brand-card:hover { border-color: #095b66; background: #fff; box-shadow: 0 4px 18px rgba(9,91,102,.08); }

// // // // // //         .client-chip { background: #f0f9fa; border: 1.5px solid #c8e8eb; border-radius: 99px; padding: 7px 16px; font-size: 12px; font-weight: 700; color: #1a4a4f; white-space: nowrap; transition: all .2s; }
// // // // // //         .client-chip:hover { background: #095b66; color: #fff; border-color: #095b66; }

// // // // // //         .input { width: 100%; background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 7px; color: #1a2c2e; padding: 12px 15px; font-family: 'Montserrat',sans-serif; font-size: 13px; outline: none; transition: border-color .2s; }
// // // // // //         .input:focus { border-color: #095b66; background: #fff; }
// // // // // //         .input::placeholder { color: #9bbbbe; }
// // // // // //         textarea.input { resize: vertical; min-height: 100px; }

// // // // // //         .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
// // // // // //         .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(9,91,102,.25); }
// // // // // //         .btn-outline-w { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.55); border-radius: 6px; padding: 11px 26px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; }
// // // // // //         .btn-outline-w:hover { background: rgba(255,255,255,.12); border-color: #fff; }
// // // // // //         .btn-white { background: #fff; color: #095b66; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
// // // // // //         .btn-white:hover { background: #e8f5f7; transform: translateY(-2px); }

// // // // // //         .footer-btn { background: none; border: none; padding: 0; font-family: 'Montserrat',sans-serif; font-size: 13px; color: #4a7a7e; cursor: pointer; transition: color .2s; text-align: left; width: 100%; }
// // // // // //         .footer-btn:hover { color: #fff; }

// // // // // //         @media (max-width: 900px) {
// // // // // //           .hide-mob { display: none !important; }
// // // // // //           .two { grid-template-columns: 1fr !important; }
// // // // // //           .three { grid-template-columns: 1fr 1fr !important; }
// // // // // //           .sp { padding-left: 22px !important; padding-right: 22px !important; }
// // // // // //           .hero-sp { padding: 86px 22px 0 !important; }
// // // // // //         }
// // // // // //         @media (max-width: 540px) {
// // // // // //           .three { grid-template-columns: 1fr !important; }
// // // // // //         }
// // // // // //       `}</style>

// // // // // //       {/* ── NAVBAR ─────────────────────────────── */}
// // // // // //       <header style={{
// // // // // //         position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
// // // // // //         height: 64,
// // // // // //         background: scrolled ? "rgba(255,255,255,.97)" : "transparent",
// // // // // //         backdropFilter: scrolled ? "blur(16px)" : "none",
// // // // // //         boxShadow: scrolled ? "0 1px 0 rgba(9,91,102,.08)" : "none",
// // // // // //         transition: "all .3s",
// // // // // //         display: "flex", alignItems: "center", padding: "0 48px",
// // // // // //       }}>
// // // // // //         <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, flex: "0 0 auto" }}>
// // // // // //           <div style={{ width: 34, height: 34, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // // //             <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
// // // // // //               <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" stroke="#fff" strokeWidth=".5" strokeLinejoin="round"/>
// // // // // //             </svg>
// // // // // //           </div>
// // // // // //           <span style={{ fontWeight: 900, fontSize: 16, color: scrolled ? "#095b66" : "#fff", transition: "color .3s" }}>
// // // // // //             Multi<span style={{ color: scrolled ? "#0a7a89" : "rgba(255,255,255,.6)" }}>energia</span>
// // // // // //           </span>
// // // // // //         </Link>

// // // // // //         <nav className="hide-mob" style={{ display: "flex", gap: 36, marginLeft: "auto", marginRight: 32 }}>
// // // // // //           {NAV.map(l => (
// // // // // //             <a key={l.label} href={l.href} className="nav-a"
// // // // // //               style={{ color: scrolled ? "#1a2c2e" : "rgba(255,255,255,.85)" }}>
// // // // // //               {l.label}
// // // // // //             </a>
// // // // // //           ))}
// // // // // //           <Link href="/sobre" className="nav-a" style={{ color: scrolled ? "#1a2c2e" : "rgba(255,255,255,.85)" }}>Sobre</Link>
// // // // // //         </nav>

// // // // // //         <a href="#contacto" className="btn-teal hide-mob" style={{ fontSize: 11, padding: "9px 20px" }}>
// // // // // //           Orçamento
// // // // // //         </a>

// // // // // //         <button className="hide-mob" style={{ display: "none" }} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
// // // // // //           <span style={{ display: "block", width: 22, height: 2, background: scrolled ? "#095b66" : "#fff", marginBottom: 5, borderRadius: 2 }}/>
// // // // // //           <span style={{ display: "block", width: 22, height: 2, background: scrolled ? "#095b66" : "#fff", marginBottom: 5, borderRadius: 2 }}/>
// // // // // //           <span style={{ display: "block", width: 22, height: 2, background: scrolled ? "#095b66" : "#fff", borderRadius: 2 }}/>
// // // // // //         </button>
// // // // // //       </header>

// // // // // //       {/* ── HERO ───────────────────────────────── */}
// // // // // //       <section style={{ position: "relative", minHeight: "100vh", background: "#095b66", overflow: "hidden", display: "flex", flexDirection: "column" }}>
// // // // // //         {/* Geometric accent */}
// // // // // //         <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", background: "rgba(255,255,255,.04)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}/>
// // // // // //         <div style={{ position: "absolute", top: 0, right: 0, width: "30%", height: "100%", background: "rgba(255,255,255,.03)", clipPath: "polygon(25% 0, 100% 0, 100% 100%, 10% 100%)" }}/>

// // // // // //         {/* Grid */}
// // // // // //         <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }}/>

// // // // // //         {/* Lightning bolt large bg */}
// // // // // //         <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", opacity: .06, pointerEvents: "none" }}>
// // // // // //           <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330">
// // // // // //             <path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/>
// // // // // //           </svg>
// // // // // //         </div>

// // // // // //         <div className="hero-sp sp" style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", alignItems: "center", padding: "100px 80px 0", maxWidth: 1280, margin: "0 auto", width: "100%" }}>
// // // // // //           <div style={{ maxWidth: 660 }}>
// // // // // //             <div key={`tag-${animKey}`} className="hero-in" style={{ animationDelay: "0s" }}>
// // // // // //               <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, padding: "5px 14px", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.85)", marginBottom: 32 }}>
// // // // // //                 {cur.tag}
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s" }}>
// // // // // //               <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28 }}>
// // // // // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line1}</span>
// // // // // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)", color: "rgba(255,255,255,.4)" }}>{cur.line2}</span>
// // // // // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line3}</span>
// // // // // //               </h1>
// // // // // //             </div>

// // // // // //             <div key={`s-${animKey}`} className="hero-in" style={{ animationDelay: ".16s" }}>
// // // // // //               <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.7)", maxWidth: 480, marginBottom: 44 }}>
// // // // // //                 {cur.sub}
// // // // // //               </p>
// // // // // //               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
// // // // // //                 <a href="#produtos" className="btn-white">Ver Soluções</a>
// // // // // //                 <a href="#contacto" className="btn-outline-w">Pedir Orçamento</a>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Dots + bottom strip */}
// // // // // //         <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
// // // // // //           {HERO_SLIDES.map((_, i) => (
// // // // // //             <button key={i} className={`dot ${i === slide ? "on" : ""}`}
// // // // // //               onClick={() => { clearInterval(timerRef.current); setSlide(i); setAnimKey(k => k + 1); }}
// // // // // //               aria-label={`Slide ${i + 1}`}
// // // // // //             />
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* White wave */}
// // // // // //         <div style={{ height: 64, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)", marginTop: 40 }}/>
// // // // // //       </section>

// // // // // //       {/* ── PRODUCTS ───────────────────────────── */}
// // // // // //       <section id="produtos" style={{ padding: "96px 0 80px" }}>
// // // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // // //           <Reveal>
// // // // // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 52, flexWrap: "wrap" }}>
// // // // // //               <div>
// // // // // //                 <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Catálogo</p>
// // // // // //                 <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05 }}>
// // // // // //                   Os Nossos Produtos
// // // // // //                 </h2>
// // // // // //               </div>
// // // // // //               <Link href="/products" style={{ fontSize: 12, fontWeight: 700, color: "#095b66", letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "2px solid #095b66", paddingBottom: 2 }}>
// // // // // //                 Ver todos →
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //           </Reveal>

// // // // // //           {/* Split layout: tabs left + detail right */}
// // // // // //           <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32, alignItems: "start" }}>
// // // // // //             {/* Tabs */}
// // // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
// // // // // //               {PRODUCTS.map((p, i) => (
// // // // // //                 <Reveal key={i} delay={i * .05}>
// // // // // //                   <button
// // // // // //                     className={`prod-tab ${activeProduct === i ? "on" : ""}`}
// // // // // //                     onClick={() => setActiveProduct(i)}
// // // // // //                     aria-label={p.name}
// // // // // //                   >
// // // // // //                     <div style={{
// // // // // //                       width: 36, height: 36, borderRadius: 8, flexShrink: 0,
// // // // // //                       background: activeProduct === i ? "rgba(255,255,255,.15)" : p.light,
// // // // // //                       display: "flex", alignItems: "center", justifyContent: "center",
// // // // // //                     }}>
// // // // // //                       {/* Mini icon */}
// // // // // //                       <svg viewBox="0 0 48 48" fill="none" width="22" height="22">
// // // // // //                         {i === 0 && <><circle cx="24" cy="24" r="8" fill={activeProduct===i?"#fff":"#095b66"}/><path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.5 11.5l3.5 3.5M33 33l3.5 3.5M11.5 36.5l3.5-3.5M33 15l3.5-3.5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/></>}
// // // // // //                         {i === 1 && <><rect x="14" y="6" width="20" height="36" rx="3" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="18" y="10" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"}/><rect x="18" y="18" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><rect x="18" y="26" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
// // // // // //                         {i === 2 && <><rect x="6" y="6" width="36" height="36" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="10" y="10" width="28" height="6" rx="1" fill={activeProduct===i?"#fff":"#095b66"} opacity=".7"/><circle cx="15" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"}/><circle cx="24" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><circle cx="33" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
// // // // // //                         {i === 3 && <><rect x="8" y="14" width="32" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 24l-5 6h6l-4 6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
// // // // // //                         {i === 4 && <><rect x="10" y="16" width="28" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 8v8" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/><path d="M16 8h16" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
// // // // // //                         {i === 5 && <><rect x="6" y="16" width="36" height="22" rx="5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><circle cx="14" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><circle cx="34" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><path d="M12 27h8l3 5h14" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M34 13v5M31 16h6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
// // // // // //                       </svg>
// // // // // //                     </div>
// // // // // //                     <span style={{ fontSize: 13, fontWeight: 700, color: activeProduct === i ? "#fff" : "#1a2c2e", textAlign: "left", lineHeight: 1.3 }}>
// // // // // //                       {p.name}
// // // // // //                     </span>
// // // // // //                   </button>
// // // // // //                 </Reveal>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             {/* Detail panel */}
// // // // // //             <Reveal key={activeProduct}>
// // // // // //               <div style={{
// // // // // //                 background: "linear-gradient(135deg, #095b66 0%, #0a7a89 100%)",
// // // // // //                 borderRadius: 20, padding: "44px 48px",
// // // // // //                 minHeight: 360, position: "relative", overflow: "hidden",
// // // // // //               }}>
// // // // // //                 {/* bg decoration */}
// // // // // //                 <div style={{ position: "absolute", right: -30, top: -30, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,.05)", pointerEvents: "none" }}/>
// // // // // //                 <div style={{ position: "absolute", right: 30, bottom: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }}/>

// // // // // //                 <div style={{ position: "relative", zIndex: 1 }}>
// // // // // //                   {/* SVG icon */}
// // // // // //                   <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
// // // // // //                     {/* Recolor the SVG for white context */}
// // // // // //                     <svg viewBox="0 0 64 64" fill="none" width="44" height="44">
// // // // // //                       {activeProduct === 0 && <><circle cx="32" cy="32" r="10" fill="rgba(255,255,255,.9)"/><path d="M32 10v5M32 49v5M10 32h5M49 32h5M16.5 16.5l3.5 3.5M44 44l3.5 3.5M16.5 47.5l3.5-3.5M44 20l3.5-3.5" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/></>}
// // // // // //                       {activeProduct === 1 && <><rect x="18" y="6" width="28" height="52" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="22" y="12" width="20" height="8" rx="2" fill="rgba(255,255,255,.9)"/><rect x="22" y="24" width="20" height="8" rx="2" fill="rgba(255,255,255,.5)"/><rect x="22" y="36" width="20" height="8" rx="2" fill="rgba(255,255,255,.3)"/><path d="M28 60h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // // //                       {activeProduct === 2 && <><rect x="8" y="8" width="48" height="48" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="14" y="14" width="36" height="8" rx="2" fill="rgba(255,255,255,.9)" opacity=".8"/><circle cx="20" cy="34" r="5" fill="rgba(255,255,255,.9)"/><circle cx="32" cy="34" r="5" fill="rgba(255,255,255,.6)"/><circle cx="44" cy="34" r="5" fill="rgba(255,255,255,.3)"/></>}
// // // // // //                       {activeProduct === 3 && <><rect x="10" y="16" width="44" height="32" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 24l-8 10h10l-6 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>}
// // // // // //                       {activeProduct === 4 && <><rect x="12" y="20" width="40" height="30" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 8v12" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 8h24M20 14h24" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><rect x="20" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/><rect x="34" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/></>}
// // // // // //                       {activeProduct === 5 && <><rect x="8" y="22" width="48" height="26" rx="6" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><circle cx="20" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="20" cy="52" r="3" fill="rgba(255,255,255,.9)"/><circle cx="44" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="44" cy="52" r="3" fill="rgba(255,255,255,.9)"/><path d="M14 30h14l4 8h18" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M42 18v8M38 22h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // // //                     </svg>
// // // // // //                   </div>

// // // // // //                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 8 }}>
// // // // // //                     {curProd.id.toUpperCase()}
// // // // // //                   </p>
// // // // // //                   <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>{curProd.name}</h3>
// // // // // //                   <p style={{ fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}>{curProd.desc}</p>

// // // // // //                   {/* Specs */}
// // // // // //                   <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
// // // // // //                     {curProd.specs.map(s => (
// // // // // //                       <span key={s} style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, fontSize: 11, fontWeight: 600, color: "#fff", padding: "4px 12px" }}>{s}</span>
// // // // // //                     ))}
// // // // // //                   </div>

// // // // // //                   {/* Brands */}
// // // // // //                   <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
// // // // // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: ".1em", textTransform: "uppercase" }}>Marcas:</span>
// // // // // //                     {curProd.brands.map(b => (
// // // // // //                       <span key={b} style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,.8)", background: "rgba(255,255,255,.1)", borderRadius: 5, padding: "3px 10px" }}>{b}</span>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </Reveal>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ── SERVICES ───────────────────────────── */}
// // // // // //       <section id="servicos" style={{ background: "#095b66", padding: "96px 0" }}>
// // // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // // //           <Reveal>
// // // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 8 }}>— Serviços</p>
// // // // // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 56, flexWrap: "wrap" }}>
// // // // // //               <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#fff", lineHeight: 1.05 }}>
// // // // // //                 O que fazemos
// // // // // //               </h2>
// // // // // //               <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 380, lineHeight: 1.7 }}>
// // // // // //                 Da concepção ao comissionamento. Suporte especializado em todas as fases do seu projeto energético.
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </Reveal>

// // // // // //           <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
// // // // // //             {SERVICES.map((s, i) => (
// // // // // //               <Reveal key={i} delay={i * .07}>
// // // // // //                 <div style={{
// // // // // //                   background: i % 2 === 0 ? "rgba(255,255,255,.06)" : "rgba(255,255,255,.04)",
// // // // // //                   border: "1.5px solid rgba(255,255,255,.1)",
// // // // // //                   borderRadius: 16, padding: "32px 28px",
// // // // // //                   transition: "all .3s", cursor: "default",
// // // // // //                 }}
// // // // // //                   onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
// // // // // //                   onMouseLeave={e => { e.currentTarget.style.background = i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; e.currentTarget.style.transform = "none"; }}
// // // // // //                 >
// // // // // //                   {/* Icon wrapper */}
// // // // // //                   <div style={{ width: 58, height: 58, borderRadius: 14, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
// // // // // //                     {/* Re-render icon in white */}
// // // // // //                     <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
// // // // // //                       {i === 0 && <><rect x="6" y="6" width="36" height="36" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M14 24h20M24 14v20" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="14" cy="14" r="3" fill="rgba(255,255,255,.4)"/><circle cx="34" cy="34" r="3" fill="rgba(255,255,255,.4)"/></>}
// // // // // //                       {i === 1 && <><circle cx="24" cy="24" r="18" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M24 14v10l6 6" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 24h4M34 24h4M24 10v4M24 34v4" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // // //                       {i === 2 && <><path d="M8 36l8-8 6 6 10-12 8 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="6" width="36" height="28" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 42h16M24 34v8" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // // //                       {i === 3 && <><path d="M24 6l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L24 23.4l-6.9 3.8 1.3-7.7-5.6-5.4 7.7-1.1z" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinejoin="round"/><path d="M14 30l-6 12M34 30l6 12" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // // //                       {i === 4 && <><path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M32 8l8 0 0 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 8L28 20" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 24l4-6 4 6" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
// // // // // //                       {i === 5 && <><rect x="6" y="14" width="36" height="26" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 14V10a8 8 0 0116 0v4" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M24 26v4" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="24" cy="24" r="3" fill="rgba(255,255,255,.9)"/></>}
// // // // // //                     </svg>
// // // // // //                   </div>
// // // // // //                   <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
// // // // // //                   <p style={{ fontSize: 13, color: "rgba(255,255,255,.62)", lineHeight: 1.7 }}>{s.short}</p>
// // // // // //                 </div>
// // // // // //               </Reveal>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           {/* CTA row */}
// // // // // //           <Reveal style={{ marginTop: 52, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
// // // // // //             <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
// // // // // //               <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
// // // // // //                 <div style={{ width: 48, height: 48, background: "rgba(255,255,255,.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</div>
// // // // // //                 <div>
// // // // // //                   <div style={{ fontSize: 10, color: "rgba(255,255,255,.45)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>Angola · Suporte</div>
// // // // // //                   <a href="tel:+244933153362" style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>+244 933 153 362</a>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <a href="#contacto" className="btn-white">Solicitar Visita Técnica</a>
// // // // // //           </Reveal>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ── GEOGRAPHIC PRESENCE ────────────────── */}
// // // // // //       <section id="presenca" style={{ background: "#fff", padding: "96px 0" }}>
// // // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // // //           <Reveal>
// // // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Presença Internacional</p>
// // // // // //             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 12 }}>
// // // // // //               Onde estamos
// // // // // //             </h2>
// // // // // //             <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 480, lineHeight: 1.75, marginBottom: 56 }}>
// // // // // //               Operamos em Angola, Portugal, Cabo Verde e São Tomé e Príncipe. Clique nos pontos do mapa para mais detalhes.
// // // // // //             </p>
// // // // // //           </Reveal>

// // // // // //           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
// // // // // //             <Reveal>
// // // // // //               <div style={{ background: "#f0f9fa", borderRadius: 20, padding: "8px", border: "1.5px solid #c8e8eb" }}>
// // // // // //                 <WorldMap points={PRESENCE} activePoint={activePoint} onHover={i => setActivePoint(activePoint === i ? null : i)} />
// // // // // //               </div>
// // // // // //             </Reveal>

// // // // // //             <Reveal delay={.1}>
// // // // // //               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // // // // //                 {PRESENCE.map((p, i) => (
// // // // // //                   <button key={i}
// // // // // //                     onClick={() => setActivePoint(activePoint === i ? null : i)}
// // // // // //                     style={{
// // // // // //                       background: activePoint === i ? "#095b66" : "#fff",
// // // // // //                       border: `1.5px solid ${activePoint === i ? "#095b66" : "#dde8ea"}`,
// // // // // //                       borderRadius: 12, padding: "16px 20px",
// // // // // //                       display: "flex", gap: 14, alignItems: "flex-start", cursor: "pointer",
// // // // // //                       transition: "all .25s", textAlign: "left",
// // // // // //                     }}>
// // // // // //                     <div style={{ width: 36, height: 36, borderRadius: 8, background: activePoint === i ? "rgba(255,255,255,.15)" : "#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
// // // // // //                       {i === 0 ? "🇦🇴" : i === 1 ? "🇵🇹" : i === 2 ? "🇨🇻" : "🇸🇹"}
// // // // // //                     </div>
// // // // // //                     <div>
// // // // // //                       <div style={{ fontSize: 13, fontWeight: 800, color: activePoint === i ? "#fff" : "#0a1c1e", marginBottom: 3 }}>{p.name}</div>
// // // // // //                       <div style={{ fontSize: 11, color: activePoint === i ? "rgba(255,255,255,.65)" : "#6a9598", lineHeight: 1.5, whiteSpace: "pre-line" }}>{p.detail}</div>
// // // // // //                     </div>
// // // // // //                   </button>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </Reveal>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ── CLIENTS + BRANDS ───────────────────── */}
// // // // // //       <section style={{ background: "#f0f9fa", padding: "80px 0" }}>
// // // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // // //           <Reveal>
// // // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Clientes</p>
// // // // // //             <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>
// // // // // //               Confiam em Nós
// // // // // //             </h2>
// // // // // //           </Reveal>

// // // // // //           <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 72 }}>
// // // // // //             {CLIENTS.map((c, i) => (
// // // // // //               <Reveal key={i} delay={i * .015}>
// // // // // //                 <div className="client-chip">{c}</div>
// // // // // //               </Reveal>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           {/* Brands divider */}
// // // // // //           <div style={{ borderTop: "1.5px solid #c8e8eb", paddingTop: 64 }}>
// // // // // //             <Reveal>
// // // // // //               <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Parceiros</p>
// // // // // //               <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>
// // // // // //                 Marcas que Representamos
// // // // // //               </h2>
// // // // // //             </Reveal>
// // // // // //             <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
// // // // // //               {BRANDS.map((b, i) => (
// // // // // //                 <Reveal key={i} delay={i * .04}>
// // // // // //                   <div className="brand-card">
// // // // // //                     <div style={{ fontSize: 13, fontWeight: 900, color: "#0a1c1e", marginBottom: 4 }}>{b.name}</div>
// // // // // //                     <div style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".08em", textTransform: "uppercase" }}>{b.role}</div>
// // // // // //                   </div>
// // // // // //                 </Reveal>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ── CTA BAND ───────────────────────────── */}
// // // // // //       <section style={{ background: "#095b66", padding: "0" }}>
// // // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 80px" }}>
// // // // // //           <Reveal>
// // // // // //             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 36, flexWrap: "wrap" }}>
// // // // // //               <div>
// // // // // //                 <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 10 }}>
// // // // // //                   Pronto para começar?
// // // // // //                 </h2>
// // // // // //                 <p style={{ color: "rgba(255,255,255,.65)", maxWidth: 440, lineHeight: 1.75, fontSize: 15 }}>
// // // // // //                   Peça um orçamento sem compromisso. A nossa equipa técnica responde em 24 horas.
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
// // // // // //                 <a href="#contacto" className="btn-white">Solicitar Orçamento</a>
// // // // // //                 <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer" className="btn-outline-w" style={{ gap: 8 }}>
// // // // // //                   💬 WhatsApp
// // // // // //                 </a>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </Reveal>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ── CONTACT ────────────────────────────── */}
// // // // // //       <section id="contacto" style={{ background: "#fff", padding: "96px 0" }}>
// // // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // // //           <Reveal>
// // // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Contacto</p>
// // // // // //             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 56 }}>
// // // // // //               Fale Connosco
// // // // // //             </h2>
// // // // // //           </Reveal>

// // // // // //           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 72 }}>
// // // // // //             <Reveal>
// // // // // //               <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.8, marginBottom: 44 }}>
// // // // // //                 Entre em contacto com o escritório mais próximo ou envie-nos uma mensagem e entraremos em contacto consigo brevemente.
// // // // // //               </p>

// // // // // //               <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
// // // // // //                 {[
// // // // // //                   { flag: "🇦🇴", country: "Angola", info: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362 · (+244) 938 306 698\ngeral@multienergia.com.pt" },
// // // // // //                   { flag: "🇵🇹", country: "Portugal", info: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909 · geral@multienergia.com.pt" },
// // // // // //                   { flag: "🇸🇹", country: "São Tomé e Príncipe", info: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443 · geral@multienergia.com.pt" },
// // // // // //                 ].map((c, i) => (
// // // // // //                   <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
// // // // // //                     <div style={{ width: 40, height: 40, borderRadius: 8, background: "#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.flag}</div>
// // // // // //                     <div>
// // // // // //                       <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 3, textTransform: "uppercase", letterSpacing: ".06em" }}>{c.country}</div>
// // // // // //                       <div style={{ fontSize: 12.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{c.info}</div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>

// // // // // //               <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer"
// // // // // //                 style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 28, fontSize: 13, fontWeight: 700, color: "#095b66" }}>
// // // // // //                 🌐 www.multienergia.com.pt
// // // // // //               </a>
// // // // // //             </Reveal>

// // // // // //             <Reveal delay={.1}>
// // // // // //               <form onSubmit={e => e.preventDefault()}
// // // // // //                 style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 16, padding: "36px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
// // // // // //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// // // // // //                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Nome</span>
// // // // // //                     <input className="input" placeholder="Nome completo" autoComplete="name"/>
// // // // // //                   </label>
// // // // // //                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Empresa</span>
// // // // // //                     <input className="input" placeholder="Empresa" autoComplete="organization"/>
// // // // // //                   </label>
// // // // // //                 </div>
// // // // // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>E-mail</span>
// // // // // //                   <input className="input" type="email" placeholder="email@empresa.com" autoComplete="email"/>
// // // // // //                 </label>
// // // // // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Assunto</span>
// // // // // //                   <select className="input" defaultValue="" style={{ appearance: "none", cursor: "pointer" }}>
// // // // // //                     <option value="" disabled>Selecione o assunto</option>
// // // // // //                     <option>Sistemas de Energia Solar</option>
// // // // // //                     <option>EcoFlow / Armazenamento</option>
// // // // // //                     <option>Quadros Elétricos BT</option>
// // // // // //                     <option>Postos de Transformação MT</option>
// // // // // //                     <option>UPS & Estabilizadores</option>
// // // // // //                     <option>Mobilidade Elétrica</option>
// // // // // //                     <option>Proteção Atmosférica (SPDA)</option>
// // // // // //                     <option>Auditoria Energética</option>
// // // // // //                     <option>Formação – Energy Academy</option>
// // // // // //                     <option>Outro</option>
// // // // // //                   </select>
// // // // // //                 </label>
// // // // // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Mensagem</span>
// // // // // //                   <textarea className="input" placeholder="Descreva o seu projeto…"/>
// // // // // //                 </label>
// // // // // //                 <button type="submit" className="btn-teal" style={{ alignSelf: "flex-start", marginTop: 4 }}>
// // // // // //                   Enviar Mensagem
// // // // // //                   <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // // // //                 </button>
// // // // // //               </form>
// // // // // //             </Reveal>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ── FOOTER ─────────────────────────────── */}
// // // // // //       <footer style={{ background: "#06161a", padding: "52px 80px 28px" }}>
// // // // // //         <div style={{ maxWidth: 1280, margin: "0 auto" }}>
// // // // // //           <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 44, marginBottom: 44 }}>
// // // // // //             <div>
// // // // // //               <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
// // // // // //                 <div style={{ width: 32, height: 32, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center" }}>
// // // // // //                   <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/></svg>
// // // // // //                 </div>
// // // // // //                 <span style={{ fontWeight: 900, fontSize: 15, color: "#fff" }}>Multi<span style={{ color: "#3ec8d4" }}>energia</span></span>
// // // // // //               </div>
// // // // // //               <p style={{ fontSize: 12.5, color: "#3a6a6e", lineHeight: 1.8, maxWidth: 240, marginBottom: 16 }}>
// // // // // //                 Inovação tecnológica ao serviço da energia. Angola · Portugal · Cabo Verde · São Tomé.
// // // // // //               </p>
// // // // // //               <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11.5, fontWeight: 600, color: "#3ec8d4" }}>
// // // // // //                 www.multienergia.com.pt
// // // // // //               </a>
// // // // // //             </div>
// // // // // //             {[
// // // // // //               { title: "Produtos", links: ["Sistemas Solares","EcoFlow PowerOcean","Quadros BT","Postos MT","UPS & Estabilizadores","Mobilidade Elétrica"] },
// // // // // //               { title: "Serviços", links: ["Projeto & Engenharia","Instalação & Montagem","Auditoria Energética","Proteção Atmosférica","Manutenção","Energy Academy"] },
// // // // // //               { title: "Empresa", links: ["Sobre Nós","Certificações","Clientes","Parceiros","Contacto"] },
// // // // // //             ].map(col => (
// // // // // //               <nav key={col.title}>
// // // // // //                 <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#0a7a89", marginBottom: 16 }}>{col.title}</div>
// // // // // //                 <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
// // // // // //                   {col.links.map(l => <li key={l}><button className="footer-btn">{l}</button></li>)}
// // // // // //                 </ul>
// // // // // //               </nav>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //           <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
// // // // // //             <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>© 2025 Multienergia. Todos os direitos reservados.</p>
// // // // // //             <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>Alvará IRCOP nº 982/CCOP/IRCOP/SC/2025 · 5ª Classe</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </footer>
// // // // // //     </div>
// // // // // //   );
// // // // // // }



// // // // // "use client";
// // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // import Link from "next/link";

// // // // // /* ─────────────────────────────────────────────
// // // // //    DATA
// // // // // ───────────────────────────────────────────── */
// // // // // const HERO_SLIDES = [
// // // // //   {
// // // // //     tag: "Eficiência · Transição · Inovação",
// // // // //     line1: "Energia que",
// // // // //     line2: "transforma",
// // // // //     line3: "Angola",
// // // // //     sub: "25 anos a fornecer soluções energéticas completas. Da geração ao consumo, do projeto à manutenção.",
// // // // //   },
// // // // //   {
// // // // //     tag: "Representante Oficial EcoFlow · Angola",
// // // // //     line1: "Independência",
// // // // //     line2: "energética",
// // // // //     line3: "total",
// // // // //     sub: "Sistemas solares residenciais e industriais, armazenamento e inversores híbridos.",
// // // // //   },
// // // // //   {
// // // // //     tag: "Fabricante Certificado · Legrand Partner",
// // // // //     line1: "Fabricamos",
// // // // //     line2: "o que outros",
// // // // //     line3: "apenas vendem",
// // // // //     sub: "Quadros elétricos BT fabricados em Luanda e Lisboa. Qualidade IEC 61439 garantida.",
// // // // //   },
// // // // // ];

// // // // // const PRODUCTS = [
// // // // //   {
// // // // //     id: "solar",
// // // // //     color: "#095b66",
// // // // //     light: "#e8f7f9",
// // // // //     name: "Sistemas de Energia Solar",
// // // // //     specs: ["+50 MW instalados","Residencial · Industrial · Utility","Autoconsumo · Carports · Centrais"],
// // // // //     brands: ["Huawei FusionSolar","SMA","Siemens","Nextracker"],
// // // // //     desc: "Dimensionamos e instalamos sistemas fotovoltaicos completos. Do painel ao inversor, da ligação à rede ao armazenamento em bateria.",
// // // // //   },
// // // // //   {
// // // // //     id: "ecoflow",
// // // // //     color: "#0a7a89",
// // // // //     light: "#e6f5f7",
// // // // //     name: "EcoFlow PowerOcean",
// // // // //     specs: ["5 kW a 29 kW","Até 45 kWh expansível","15 anos garantia · LFP"],
// // // // //     brands: ["EcoFlow"],
// // // // //     desc: "Inversor híbrido trifásico com armazenamento de energia expansível. Backup potente, instalação plug & play e monitorização remota.",
// // // // //   },
// // // // //   {
// // // // //     id: "quadros",
// // // // //     color: "#064e58",
// // // // //     light: "#e5f4f6",
// // // // //     name: "Quadros Elétricos BT",
// // // // //     specs: ["Até 6300 A · Forma 1–4","Fabricação própria em Luanda","Parceiro Legrand · IEC 61439"],
// // // // //     brands: ["Legrand"],
// // // // //     desc: "Fabricamos quadros elétricos de baixa tensão com unidades industriais próprias em Luanda e Lisboa. Soluções padrão e à medida.",
// // // // //   },
// // // // //   {
// // // // //     id: "ups",
// // // // //     color: "#095b66",
// // // // //     light: "#e8f7f9",
// // // // //     name: "UPS & Estabilizadores",
// // // // //     specs: ["Salicru até 800 KVA","Socomec MODULYS 200–4800 KVA","Online dupla conversão"],
// // // // //     brands: ["Salicru","Socomec"],
// // // // //     desc: "Energia crítica ininterrupta para data centers, hospitais, indústrias e telecomunicações. Proteção contra cortes, surtos e variações.",
// // // // //   },
// // // // //   {
// // // // //     id: "mt",
// // // // //     color: "#0a7a89",
// // // // //     light: "#e6f5f7",
// // // // //     name: "Postos de Transformação",
// // // // //     specs: ["Toshiba TCSU 10–30 kV","500 a 2000 KVA","Plug & play · IP66 · Pré-montado"],
// // // // //     brands: ["Toshiba T&D"],
// // // // //     desc: "Postos compactos pré-montados para ligação de média tensão. Instalação rápida, segurança máxima (Class AB) e resistência climática.",
// // // // //   },
// // // // //   {
// // // // //     id: "ve",
// // // // //     color: "#064e58",
// // // // //     light: "#e5f4f6",
// // // // //     name: "Mobilidade Elétrica",
// // // // //     specs: ["11 kW · 22 kW · 50 kW","Doméstico e via pública","Avaliação técnica incluída"],
// // // // //     brands: ["Huawei","Tesla","Circutor"],
// // // // //     desc: "Soluções completas para carregamento de veículos elétricos. Aconselhamento, instalação certificada e manutenção contínua.",
// // // // //   },
// // // // // ];

// // // // // const SERVICES = [
// // // // //   { title: "Projeto & Engenharia", short: "Dimensionamento técnico completo com esquemas unifilares e memoriais descritivos." },
// // // // //   { title: "Instalação & Montagem", short: "Equipa certificada para quadros, sistemas solares, SPDA e postos de transformação." },
// // // // //   { title: "Auditoria Energética", short: "Inspeção termográfica, análise de qualidade de energia e monitorização contínua." },
// // // // //   { title: "Proteção Atmosférica", short: "Sistemas SPDA completos Franklin France. Conformidade NA 33:2014 e normas internacionais." },
// // // // //   { title: "Manutenção Preventiva", short: "Planos periódicos para garantir continuidade operacional e longevidade dos equipamentos." },
// // // // //   { title: "Energy Academy", short: "Formação especializada em energia solar, UPS, SPDA e eletrotecnia. Certificação reconhecida." },
// // // // // ];

// // // // // const CLIENTS = [
// // // // //   "Sonangol","ETU Energias","Unitel","BFA","Fidelidade","MCA",
// // // // //   "TVCabo","Omatapalo","SIC Notícias","Multitel","Refriango","Arreiou",
// // // // //   "BancoBNI","Caixa Angola","Telepizza","InfraSat","Prodel","Azueira",
// // // // //   "Governo de Angola","Standard Bank","IBM","TotalEnergies","Jumbo",
// // // // //   "BancoBIC","CASAIS","ENDE","Axians","Sonangalp","Elecnor","Marlin",
// // // // // ];

// // // // // const BRANDS = [
// // // // //   { name: "Huawei FusionSolar", role: "Parceiro Solar" },
// // // // //   { name: "EcoFlow", role: "Rep. Oficial AO" },
// // // // //   { name: "Toshiba T&D", role: "Rep. Oficial" },
// // // // //   { name: "Franklin France", role: "Rep. Oficial SPDA" },
// // // // //   { name: "Legrand", role: "Parceiro Quadros" },
// // // // //   { name: "Salicru", role: "Rep. Oficial UPS" },
// // // // //   { name: "Socomec", role: "Rep. Oficial UPS" },
// // // // //   { name: "Siemens", role: "Parceiro" },
// // // // //   { name: "Schneider Electric", role: "Parceiro" },
// // // // //   { name: "SMA", role: "Parceiro Solar" },
// // // // //   { name: "Circutor", role: "Parceiro VE" },
// // // // //   { name: "Nextracker", role: "Parceiro Solar" },
// // // // // ];

// // // // // const PRESENCE = [
// // // // //   { name: "Angola · Luanda",     lon: 13.23,  lat: -8.84, main: true,  detail: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362" },
// // // // //   { name: "Portugal · Lisboa",   lon: -9.14,  lat: 38.72, main: true,  detail: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
// // // // //   { name: "Cabo Verde · Praia",  lon: -23.51, lat: 14.93, main: false, detail: "Presença comercial activa" },
// // // // //   { name: "São Tomé e Príncipe", lon:  6.61,  lat:  0.33, main: false, detail: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
// // // // // ];

// // // // // /* ─────────────────────────────────────────────
// // // // //    HOOKS
// // // // // ───────────────────────────────────────────── */
// // // // // function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
// // // // //   const ref = useRef<HTMLDivElement | null>(null);
// // // // //   const [vis, setVis] = useState(false);
// // // // //   useEffect(() => {
// // // // //     const el = ref.current;
// // // // //     if (!el) return;
// // // // //     const obs = new IntersectionObserver(([e]) => {
// // // // //       if (e.isIntersecting) { setVis(true); obs.disconnect(); }
// // // // //     }, { threshold });
// // // // //     obs.observe(el);
// // // // //     return () => obs.disconnect();
// // // // //   }, [threshold]);
// // // // //   return [ref, vis];
// // // // // }

// // // // // function Reveal({ children, delay = 0, style = {} }: {
// // // // //   children: React.ReactNode; delay?: number; style?: React.CSSProperties;
// // // // // }) {
// // // // //   const [ref, vis] = useInView();
// // // // //   return (
// // // // //     <div ref={ref as React.RefObject<HTMLDivElement>} style={{
// // // // //       opacity: vis ? 1 : 0,
// // // // //       transform: vis ? "none" : "translateY(22px)",
// // // // //       transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
// // // // //       ...style,
// // // // //     }}>
// // // // //       {children}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // /* ─────────────────────────────────────────────
// // // // //    WORLD MAP
// // // // //    ViewBox 1000 × 500. All paths computed from
// // // // //    real lon/lat via Web-Mercator:
// // // // //      x = (lon+180)/360 * 1000
// // // // //      y = 250 - 250/π * ln(tan(π/4 + lat*π/360))
// // // // // ───────────────────────────────────────────── */
// // // // // type PresencePoint = { name: string; lon: number; lat: number; main: boolean; detail: string };

// // // // // function merc(lon: number, lat: number): [number, number] {
// // // // //   const x = (lon + 180) / 360 * 1000;
// // // // //   const y = 250 - (250 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
// // // // //   return [+x.toFixed(1), +y.toFixed(1)];
// // // // // }

// // // // // /*
// // // // //   All paths below are mathematically generated from real lon/lat coordinates.
// // // // //   Projection: Web Mercator, viewBox 1000×500.
// // // // //   x = (lon+180)/360*1000
// // // // //   y = 250 − (250/π)·ln(tan(π/4 + lat·π/360))

// // // // //   Key y-values: lat80=56, lat60=145, lat40=189, lat20=222,
// // // // //                 lat0=250, lat-20=278, lat-40=311, lat-55=344
// // // // // */
// // // // // const LAND: Record<string, string> = {

// // // // //   /* ── North America ────────────────────────────────────────────── */
// // // // //   NORTH_AMERICA: `
// // // // //     M 111.1,145.2 L 138.9,119.7 L 155.6,111.9 L 166.7,93.8
// // // // //     L 183.3,88.6 L 200,88.6   L 222.2,93.8  L 244.4,88.6
// // // // //     L 261.1,88.6 L 277.8,88.6 L 291.7,93.8  L 305.6,98.7
// // // // //     L 316.7,88.6 L 319.4,107.7 L 316.7,119.7 L 322.2,145.2
// // // // //     L 316.7,162.9 L 311.1,158.1 L 305.6,186.5 L 300,192.9
// // // // //     L 291.7,198  L 286.1,210   L 277.8,214.1 L 263.9,218.7
// // // // //     L 250,221.6  L 230.6,214.1 L 208.3,214.1 L 194.4,217.2
// // // // //     L 175,202.2  L 161.1,194.6 L 155.6,189.3
// // // // //     L 158.3,177.9 L 155.6,171.7 L 138.9,160.5
// // // // //     L 125,150.6  L 108.3,145.2 Z`,

// // // // //   /* ── Alaska ───────────────────────────────────────────────────── */
// // // // //   ALASKA: `
// // // // //     M 0,148   L 16.7,139.5 L 27.8,130.1 L 33.3,119.7
// // // // //     L 50,119.7 L 66.7,130.1 L 77.8,139.5 L 88.9,139.5
// // // // //     L 100,139.5 L 108.3,145.2 L 100,150.6 L 88.9,150.6
// // // // //     L 77.8,155.7 L 61.1,158.1 L 44.4,158.1 L 27.8,155.7
// // // // //     L 11.1,152 Z`,

// // // // //   /* ── Greenland ────────────────────────────────────────────────── */
// // // // //   GREENLAND: `
// // // // //     M 355.6,83.1 L 375,56.1   L 400,27.6  L 427.8,22.8
// // // // //     L 452.8,27.6 L 466.7,56.1 L 461.1,83.1 L 450,111.9
// // // // //     L 433.3,130.1 L 416.7,145.2 L 400,139.5
// // // // //     L 383.3,130.1 L 372.2,111.9 Z`,

// // // // //   /* ── Central America + Caribbean ─────────────────────────────── */
// // // // //   C_AMERICA: `
// // // // //     M 230.6,214.1 L 244.4,210 L 255.6,214.1
// // // // //     L 263.9,224.6 L 272.2,236 L 277.8,250
// // // // //     L 263.9,247.2 L 255.6,241.7 L 247.2,233.2
// // // // //     L 238.9,224.6 Z`,

// // // // //   /* ── South America ────────────────────────────────────────────── */
// // // // //   SOUTH_AMERICA: `
// // // // //     M 277.8,250   L 288.9,247.2 L 300,247.2  L 316.7,243
// // // // //     L 333.3,241.7 L 347.2,241.7 L 361.1,247.2
// // // // //     L 375,252.8  L 388.9,257   L 402.8,257
// // // // //     L 405.6,262.6 L 397.2,271.1 L 388.9,279.8
// // // // //     L 377.8,285.9 L 366.7,290.5 L 355.6,300.3
// // // // //     L 344.4,307.1 L 330.6,316.3 L 319.4,330.4
// // // // //     L 316.7,344.3 L 311.1,344.3 L 305.6,336.5
// // // // //     L 297.2,323.7 L 291.7,310.7 L 291.7,297
// // // // //     L 288.9,284.4 L 280.6,271.1 L 275,257 Z`,

// // // // //   /* ── Europe (main body) ───────────────────────────────────────── */
// // // // //   EUROPE: `
// // // // //     M 472.2,196.3 L 477.8,181.8 L 486.1,173.8
// // // // //     L 494.4,174.8 L 495.8,182.8 L 508.3,183
// // // // //     L 516.7,182.4 L 525,180.8   L 536.1,179.9
// // // // //     L 541.7,181.8 L 550,181.8   L 558.3,179.9
// // // // //     L 566.7,179.9 L 575,181.8   L 583.3,181.8
// // // // //     L 591.7,169.6 L 588.9,165.2 L 575,159.4
// // // // //     L 561.1,158.1 L 547.2,158.1 L 536.1,159.4
// // // // //     L 527.8,151.9 L 513.9,150.6 L 508.3,158.1
// // // // //     L 502.8,165.2 L 497.2,168.5 L 491.7,173.8
// // // // //     L 486.1,173.8 L 477.8,181.8 Z
// // // // //     M 583.3,181.8 L 591.7,181.8 L 600,185.6
// // // // //     L 602.8,192.9 L 597.2,198   L 586.1,196.3
// // // // //     L 577.8,196.3 L 575,190.5 Z`,

// // // // //   /* ── Iberian Peninsula ────────────────────────────────────────── */
// // // // //   IBERIA: `
// // // // //     M 472.2,196.3 L 477.8,181.8 L 486.1,173.8
// // // // //     L 491.7,173.8 L 495.8,182.8 L 508.3,183
// // // // //     L 509.4,186   L 502.8,188.1 L 500.6,192.9
// // // // //     L 497.2,195   L 486.1,197   L 481.9,195.2
// // // // //     L 475.6,195   L 473.9,192.5 Z`,

// // // // //   /* ── UK & Ireland ─────────────────────────────────────────────── */
// // // // //   UK: `M 477.8,162.9 L 486.1,158.1 L 497.2,158.1
// // // // //        L 502.8,162.9 L 497.2,167.4 L 488.9,169.6
// // // // //        L 480.6,167.4 Z
// // // // //        M 469.4,158.1 L 477.8,152 L 483.3,155.7
// // // // //        L 480.6,165.2 L 472.2,165.2 Z`,

// // // // //   /* ── Iceland ──────────────────────────────────────────────────── */
// // // // //   ICELAND: `M 427.8,126.8 L 438.9,120.6 L 455.6,119.7
// // // // //              L 461.1,124.1 L 452.8,130.1 L 438.9,133.3 Z`,

// // // // //   /* ── Scandinavia ──────────────────────────────────────────────── */
// // // // //   SCANDINAVIA: `
// // // // //     M 513.9,150.6 L 527.8,151.9 L 536.1,158.1
// // // // //     L 543.1,155.7 L 547.2,152   L 552.8,149.3
// // // // //     L 558.3,147.9 L 566.7,146.6 L 572.2,142.4
// // // // //     L 577.8,128.5 L 580.6,117.8 L 575,109.8
// // // // //     L 566.7,107.7 L 555.6,107.7 L 550,115.9
// // // // //     L 544.4,117.8 L 538.9,128.5 L 525,133.3
// // // // //     L 519.4,133.3 L 513.9,139.5 Z`,

// // // // //   /* ── Russia (European + Siberian) ────────────────────────────── */
// // // // //   RUSSIA: `
// // // // //     M 544.4,117.8 L 558.3,107.7 L 583.3,98.7
// // // // //     L 611.1,93.8  L 638.9,93.8  L 666.7,93.8
// // // // //     L 694.4,86.1  L 722.2,83.1  L 750,83.1
// // // // //     L 777.8,86.1  L 805.6,93.8  L 833.3,98.7
// // // // //     L 861.1,98.7  L 888.9,111.9 L 916.7,119.7
// // // // //     L 944.4,119.7 L 966.7,107.7 L 980.6,98.7
// // // // //     L 1000,98.7   L 1000,145.2
// // // // //     L 972.2,158.1 L 944.4,158.1 L 916.7,145.2
// // // // //     L 900,165.2   L 888.9,169.6 L 875,177.9
// // // // //     L 861.1,185.6 L 847.2,185.6 L 833.3,185.6
// // // // //     L 819.4,177.9 L 805.6,175.9 L 791.7,175.9
// // // // //     L 777.8,175.9 L 763.9,171.7 L 750,169.6
// // // // //     L 736.1,165.2 L 722.2,165.2 L 708.3,158.1
// // // // //     L 694.4,158.1 L 680.6,165.2 L 666.7,158.1
// // // // //     L 652.8,152   L 638.9,145.2 L 625,145.2
// // // // //     L 611.1,139.5 L 597.2,139.5 L 588.9,133.3
// // // // //     L 577.8,119.7 L 566.7,117.8 Z`,

// // // // //   /* ── Central Asia / Turkey / Caucasus ───────────────────────── */
// // // // //   C_ASIA: `
// // // // //     M 538.9,181.8 L 555.6,179.9 L 566.7,179.9
// // // // //     L 575,181.8   L 586.1,177.9 L 600,185.6
// // // // //     L 616.7,185.6 L 630.6,181.8 L 644.4,181.8
// // // // //     L 658.3,185.6 L 666.7,185.6 L 680.6,181.8
// // // // //     L 694.4,175.9 L 708.3,172.2 L 716.7,175.9
// // // // //     L 722.2,185.6 L 722.2,196.3 L 713.9,203
// // // // //     L 700,206.3   L 686.1,206.3 L 672.2,203
// // // // //     L 655.6,206.3 L 638.9,206.3 L 622.2,206.3
// // // // //     L 611.1,200   L 600,192.9   L 591.7,181.8
// // // // //     L 577.8,181.8 L 566.7,185.6 L 552.8,185.6
// // // // //     L 541.7,185.6 Z`,

// // // // //   /* ── Middle East / Arabian Peninsula ────────────────────────── */
// // // // //   MIDDLE_EAST: `
// // // // //     M 563.9,192.9 L 577.8,181.8 L 586.1,181.8
// // // // //     L 600,185.6   L 611.1,185.6 L 622.2,185.6
// // // // //     L 636.1,192.9 L 650,203     L 658.3,212.6
// // // // //     L 663.9,218.7 L 655.6,228.9 L 644.4,234.6
// // // // //     L 627.8,238.9 L 616.7,238.9 L 608.3,232.2
// // // // //     L 597.2,224.6 L 591.7,215.6 L 577.8,212.6
// // // // //     L 566.7,206.3 L 558.3,196.3 Z`,

// // // // //   /* ── Africa ───────────────────────────────────────────────────── */
// // // // //   AFRICA: `
// // // // //     M 447.2,194.6 L 461.1,190.6 L 475,190.6
// // // // //     L 488.9,192.9 L 502.8,194.6 L 516.7,194.6
// // // // //     L 530.6,194.6 L 544.4,194.6 L 558.3,196.3
// // // // //     L 572.2,203   L 583.3,209.5 L 594.4,209.5
// // // // //     L 608.3,215.6 L 616.7,224.6 L 622.2,234.6
// // // // //     L 625,241.7   L 619.4,250   L 613.9,258.3
// // // // //     L 611.1,265.4 L 605.6,274   L 600,285.9
// // // // //     L 594.4,296.3 L 588.9,302   L 575,305.4
// // // // //     L 558.3,302   L 547.2,298.6 L 541.7,285.9
// // // // //     L 536.1,271.1 L 530.6,258.3 L 522.2,247.2
// // // // //     L 513.9,244.4 L 505.6,244.4 L 494.4,244.4
// // // // //     L 483.3,244.4 L 472.2,244.4 L 461.1,241.7
// // // // //     L 450,234.6   L 444.4,227.5 L 444.4,218.7
// // // // //     L 447.2,207   Z
// // // // //     M 444.4,227.5 L 436.1,230.4 L 425,238.9
// // // // //     L 422.2,250   L 427.8,259.3 L 438.9,258.3
// // // // //     L 447.2,250   L 447.2,238.9 Z`,

// // // // //   /* ── Madagascar ───────────────────────────────────────────────── */
// // // // //   MADAGASCAR: `
// // // // //     M 616.7,262.6 L 622.2,262.6 L 633.3,265.4
// // // // //     L 641.7,268.2 L 641.7,282.8 L 633.3,291.7
// // // // //     L 622.2,291.7 L 613.9,282.8 L 611.1,271.1 Z`,

// // // // //   /* ── India ────────────────────────────────────────────────────── */
// // // // //   INDIA: `
// // // // //     M 663.9,196.3 L 677.8,189.3 L 688.9,189.3
// // // // //     L 700,192.9   L 711.1,200   L 719.4,199.7
// // // // //     L 730.6,209.5 L 736.1,218.7 L 747.2,221.6
// // // // //     L 750,228.9   L 744.4,236   L 733.3,241.7
// // // // //     L 722.2,244.4 L 713.9,241.7 L 705.6,230.4
// // // // //     L 694.4,221.6 L 688.9,224.6 L 683.3,221.6
// // // // //     L 672.2,218.7 L 663.9,209.5 Z`,

// // // // //   /* ── China / East Asia ────────────────────────────────────────── */
// // // // //   CHINA: `
// // // // //     M 694.4,175.9 L 708.3,172.2 L 716.7,175.9
// // // // //     L 722.2,185.6 L 736.1,181.8 L 750,175.9
// // // // //     L 763.9,171.7 L 777.8,168.5 L 791.7,165.2
// // // // //     L 805.6,162.9 L 819.4,162.9 L 833.3,162.9
// // // // //     L 850,169.6   L 861.1,181.8 L 858.3,192.9
// // // // //     L 852.8,196.3 L 847.2,192.9 L 833.3,192.9
// // // // //     L 819.4,196.3 L 808.3,209.5 L 800,221.6
// // // // //     L 791.7,221.6 L 780.6,218.7 L 769.4,215.6
// // // // //     L 755.6,221.6 L 747.2,221.6 L 736.1,218.7
// // // // //     L 730.6,209.5 L 719.4,199.7 L 711.1,200
// // // // //     L 700,192.9   Z`,

// // // // //   /* ── SE Asia (Indochina + Malaysia) ──────────────────────────── */
// // // // //   SE_ASIA: `
// // // // //     M 777.8,218.7 L 791.7,221.6 L 800,218.7
// // // // //     L 808.3,209.5 L 819.4,209.5 L 833.3,209.5
// // // // //     L 844.4,218.7 L 838.9,228.9 L 827.8,234.6
// // // // //     L 816.7,234.6 L 808.3,241.7 L 800,250
// // // // //     L 808.3,258.3 L 816.7,258.3 L 822.2,252.8
// // // // //     L 833.3,252.8 L 833.3,263.9 L 816.7,263.9
// // // // //     L 808.3,258.3 L 797.2,255.6 L 786.1,250
// // // // //     L 780.6,244.4 L 772.2,238.9 L 769.4,228.9
// // // // //     L 769.4,221.6 Z`,

// // // // //   /* ── Japan ────────────────────────────────────────────────────── */
// // // // //   JAPAN: `
// // // // //     M 855.6,192.9 L 861.1,185.6 L 872.2,181.8
// // // // //     L 883.3,181.8 L 886.1,185.6 L 880.6,192.9
// // // // //     L 872.2,196.3 L 861.1,199.7 Z
// // // // //     M 877.8,199.7 L 883.3,192.9 L 894.4,189.3
// // // // //     L 900,192.9   L 897.2,203   L 886.1,206.3
// // // // //     L 877.8,203 Z`,

// // // // //   /* ── Korea ────────────────────────────────────────────────────── */
// // // // //   KOREA: `M 836.1,192.9 L 847.2,189.3 L 855.6,192.9
// // // // //            L 855.6,203   L 847.2,206.3 L 836.1,203 Z`,

// // // // //   /* ── Australia ────────────────────────────────────────────────── */
// // // // //   AUSTRALIA: `
// // // // //     M 808.3,278.4 L 819.4,272.5 L 833.3,268.2
// // // // //     L 850,265.4   L 866.7,263.9 L 880.6,265.4
// // // // //     L 894.4,269.6 L 908.3,272.5 L 916.7,281.3
// // // // //     L 925,290.5   L 925,303.7   L 916.7,311.1
// // // // //     L 905.6,311.1 L 894.4,311.1 L 883.3,307.7
// // // // //     L 869.4,303.7 L 855.6,307.7 L 841.7,311.1
// // // // //     L 827.8,307.7 L 816.7,300.3 L 808.3,290.5 Z
// // // // //     M 916.7,281.3 L 930.6,275.4 L 941.7,281.3
// // // // //     L 938.9,293.7 L 925,296.3 Z`,

// // // // //   /* ── New Zealand ─────────────────────────────────────────────── */
// // // // //   NEW_ZEALAND: `
// // // // //     M 966.7,318.2 L 977.8,311.1 L 988.9,315.4
// // // // //     L 988.9,326   L 977.8,329   L 966.7,322.1 Z
// // // // //     M 972.2,329   L 983.3,318.2 L 994.4,322.1
// // // // //     L 994.4,337   L 983.3,341   L 972.2,334 Z`,

// // // // //   /* ── Cabo Verde (island cluster, accent) ─────────────────────── */
// // // // //   CAPE_VERDE: `M 424,236 L 432,229 L 442,232 L 439,241 L 428,244 Z`,

// // // // //   /* ── São Tomé (island, accent) ───────────────────────────────── */
// // // // //   SAO_TOME: `M 516,252 L 523,245 L 530,248 L 528,257 L 519,260 Z`,
// // // // // };

// // // // // const ACCENT = new Set(["AFRICA", "IBERIA", "CAPE_VERDE", "SAO_TOME"]);

// // // // // function WorldMap({ points, activePoint, onHover }: {
// // // // //   points: PresencePoint[];
// // // // //   activePoint: number | null;
// // // // //   onHover: (i: number) => void;
// // // // // }) {
// // // // //   const dots = points.map(p => {
// // // // //     const [cx, cy] = merc(p.lon, p.lat);
// // // // //     return { ...p, cx, cy };
// // // // //   });

// // // // //   /* reference latitudes */
// // // // //   const yEq   = merc(0,   0)[1];
// // // // //   const yCanc = merc(0,  23.5)[1];
// // // // //   const yCap  = merc(0, -23.5)[1];

// // // // //   return (
// // // // //     <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
// // // // //       <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet"
// // // // //         style={{ width: "100%", height: "auto", display: "block" }}>

// // // // //         <rect width="1000" height="500" fill="#dff0f3" rx="8"/>

// // // // //         {/* Latitude reference lines */}
// // // // //         <line x1="0" y1={yEq}   x2="1000" y2={yEq}   stroke="#b8dfe8" strokeWidth="0.8" strokeDasharray="6 8"/>
// // // // //         <line x1="0" y1={yCanc} x2="1000" y2={yCanc} stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10"/>
// // // // //         <line x1="0" y1={yCap}  x2="1000" y2={yCap}  stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10"/>

// // // // //         {/* Continents */}
// // // // //         {Object.entries(LAND).map(([k, d]) => (
// // // // //           <path key={k} d={d}
// // // // //             fill={ACCENT.has(k) ? "#8ecdd6" : "#b2d8e0"}
// // // // //             stroke="#7ab8c0" strokeWidth="0.7"
// // // // //             strokeLinejoin="round" strokeLinecap="round"
// // // // //           />
// // // // //         ))}

// // // // //         {/* Connection line between the 2 main offices */}
// // // // //         {(() => { const m = dots.filter(p => p.main); return m.length >= 2 ? <line x1={m[0].cx} y1={m[0].cy} x2={m[1].cx} y2={m[1].cy} stroke="#095b66" strokeWidth="1.3" strokeDasharray="5 5" opacity="0.55"/> : null; })()}

// // // // //         {/* Dots */}
// // // // //         {dots.map((p, i) => (
// // // // //           <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
// // // // //             {p.main && <>
// // // // //               <circle cx={p.cx} cy={p.cy} r="6" fill="#095b66" opacity="0.15">
// // // // //                 <animate attributeName="r" values="6;20;6" dur="3s" repeatCount="indefinite"/>
// // // // //                 <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite"/>
// // // // //               </circle>
// // // // //               <circle cx={p.cx} cy={p.cy} r="10" fill="#095b66" opacity="0.1"/>
// // // // //             </>}
// // // // //             <circle cx={p.cx} cy={p.cy}
// // // // //               r={activePoint === i ? 9 : 6}
// // // // //               fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#5cb8c0")}
// // // // //               stroke="#fff" strokeWidth="2.5"
// // // // //               style={{ transition: "r .2s, fill .2s" }}
// // // // //             />
// // // // //           </g>
// // // // //         ))}
// // // // //       </svg>

// // // // //       {activePoint !== null && (() => {
// // // // //         const d = dots[activePoint];
// // // // //         const px = (d.cx / 1000) * 100;
// // // // //         const py = (d.cy / 500) * 100;
// // // // //         return (
// // // // //           <div style={{
// // // // //             position: "absolute", left: `${px}%`, top: `${py}%`,
// // // // //             transform: `translate(${px > 62 ? "-108%" : "14px"}, ${py > 58 ? "-118%" : "14px"})`,
// // // // //             background: "#fff", border: "1.5px solid #b8dde2", borderRadius: 10,
// // // // //             padding: "12px 16px", minWidth: 222,
// // // // //             boxShadow: "0 10px 36px rgba(9,91,102,.2)", zIndex: 10, pointerEvents: "none",
// // // // //           }}>
// // // // //             <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 5 }}>{d.name}</div>
// // // // //             <div style={{ fontSize: 11.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{d.detail}</div>
// // // // //           </div>
// // // // //         );
// // // // //       })()}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // /* ─────────────────────────────────────────────
// // // // //    SIMULADOR — tipos e motor de cálculo
// // // // // ───────────────────────────────────────────── */
// // // // // type TipoProjeto = "residencial" | "empresa" | "industrial" | "agricola" | "outro";
// // // // // type SimStep = 1 | 2 | 3;

// // // // // interface SimForm {
// // // // //   tipo: TipoProjeto | "";
// // // // //   area: string;
// // // // //   consumo: string;
// // // // //   autonomia: string;
// // // // //   trifasico: boolean;
// // // // //   gerador: boolean;
// // // // //   spda: boolean;
// // // // //   ve: boolean;
// // // // //   solar: boolean;
// // // // //   ups: boolean;
// // // // //   localizacao: string;
// // // // // }

// // // // // interface MatItem {
// // // // //   ref: string;
// // // // //   nome: string;
// // // // //   marca: string;
// // // // //   qtd: number;
// // // // //   unidade: string;
// // // // //   cat: string;
// // // // //   obs?: string;
// // // // // }

// // // // // const TIPOS_PROJETO = [
// // // // //   { id: "residencial" as TipoProjeto, label: "Residencial", sub: "Moradia / Apartamento",
// // // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M4 14L16 4l12 10v14H20v-9h-8v9H4V14z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg> },
// // // // //   { id: "empresa" as TipoProjeto, label: "Empresa / Escritório", sub: "Comercial · Serviços",
// // // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><rect x="4" y="6" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M10 28V20h5v8M17 28V20h5v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><rect x="9" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="19" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="14" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/></svg> },
// // // // //   { id: "industrial" as TipoProjeto, label: "Industrial", sub: "Fábrica · Armazém",
// // // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M2 28V14l8-6v6l8-6v6l8-6v20H2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><rect x="6" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="14" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="22" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><path d="M10 6V2M18 4V2M26 6V2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
// // // // //   { id: "agricola" as TipoProjeto, label: "Agrícola / Rural", sub: "Bombeamento · Campo",
// // // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="14" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M16 7V3M16 21v-4M9 14H5M27 14h-4M11 9L8 6M24 6l-3 3M11 19l-3 3M24 22l-3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="16" cy="14" r="2.5" fill="currentColor" opacity=".4"/><path d="M8 28h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
// // // // //   { id: "outro" as TipoProjeto, label: "Outro / Misto", sub: "Projecto personalizado",
// // // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8"/><path d="M16 10v2M16 20v2M10 16h2M20 16h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="3" fill="currentColor" opacity=".45"/></svg> },
// // // // // ];

// // // // // const CAT_CONFIG: Record<string, { cor: string; fundo: string }> = {
// // // // //   "Quadros BT":       { cor: "#064e58", fundo: "#e5f4f6" },
// // // // //   "Protecção":        { cor: "#095b66", fundo: "#e8f7f9" },
// // // // //   "Cablagem":         { cor: "#0a7a89", fundo: "#e6f5f7" },
// // // // //   "Infraestrutura":   { cor: "#095b66", fundo: "#f0f9fa" },
// // // // //   "Iluminação":       { cor: "#064e58", fundo: "#e5f4f6" },
// // // // //   "Tomadas/Acabam.":  { cor: "#095b66", fundo: "#e8f7f9" },
// // // // //   "Solar":            { cor: "#7a5200", fundo: "#fff7e0" },
// // // // //   "Armazenamento":    { cor: "#7a5200", fundo: "#fff3cc" },
// // // // //   "UPS":              { cor: "#095b66", fundo: "#e8f7f9" },
// // // // //   "Média Tensão":     { cor: "#7a0000", fundo: "#fce8e8" },
// // // // //   "SPDA":             { cor: "#8a4200", fundo: "#fff0e0" },
// // // // //   "Mobilidade VE":    { cor: "#1a3a8f", fundo: "#e6eeff" },
// // // // //   "Backup Gerador":   { cor: "#3a2a10", fundo: "#f0ebe0" },
// // // // // };

// // // // // function calcSimulacao(f: SimForm): MatItem[] {
// // // // //   if (!f.tipo || !f.consumo || !f.area) return [];
// // // // //   const kwh  = Math.max(1, parseFloat(f.consumo) || 10);
// // // // //   const m2   = Math.max(10, parseFloat(f.area)   || 100);
// // // // //   const aut  = parseInt(f.autonomia) || 1;
// // // // //   const ind  = f.tipo === "industrial";
// // // // //   const res  = f.tipo === "residencial";
// // // // //   const agr  = f.tipo === "agricola";
// // // // //   const mats: MatItem[] = [];

// // // // //   /* ── QUADRO GERAL ── */
// // // // //   const ampQG = kwh > 300 ? 630 : kwh > 80 ? 250 : kwh > 30 ? 125 : kwh > 15 ? 100 : 63;
// // // // //   mats.push({ cat: "Quadros BT", ref: "QGD-BT",     nome: `Quadro Geral Distribuição BT ${ampQG}A`,         marca: "Legrand / Fabricação Própria", qtd: 1,  unidade: "un", obs: f.trifasico ? "Trifásico 3×400V" : "Monofásico 230V · IEC 61439" });
// // // // //   if (!res && kwh > 20) mats.push({ cat: "Quadros BT", ref: "QS-ZONA",  nome: "Quadro Secundário de Zona",                      marca: "Legrand",                     qtd: Math.ceil(m2 / 400), unidade: "un", obs: "Distribuição por zonas / pisos" });

// // // // //   /* ── PROTECÇÃO ── */
// // // // //   const nZonas = res ? Math.ceil(m2 / 20) : ind ? Math.ceil(m2 / 40) : Math.ceil(m2 / 25);
// // // // //   mats.push({ cat: "Protecção", ref: "DIS-16A",  nome: "Disjuntor Magnetotérmico 16A unipolar",          marca: "Legrand",  qtd: Math.max(2, Math.ceil(nZonas * .55)), unidade: "un" });
// // // // //   mats.push({ cat: "Protecção", ref: "DIS-32A",  nome: "Disjuntor Magnetotérmico 32A unipolar",          marca: "Legrand",  qtd: Math.max(1, Math.ceil(nZonas * .35)), unidade: "un" });
// // // // //   if (ind || f.trifasico) mats.push({ cat: "Protecção", ref: "DIS-TRI-63A", nome: "Disjuntor Trifásico 63A",               marca: "Legrand",  qtd: Math.max(1, Math.ceil(nZonas * .15)), unidade: "un", obs: "Circuitos de força / motores" });
// // // // //   mats.push({ cat: "Protecção", ref: "DDI-30mA", nome: "Interruptor Diferencial 30mA 2P",                marca: "Legrand",  qtd: Math.ceil(nZonas / 4), unidade: "un" });
// // // // //   if (!res) mats.push({ cat: "Protecção", ref: "DDI-300mA", nome: "Interruptor Diferencial 300mA 4P",            marca: "Legrand",  qtd: Math.ceil(nZonas / 8), unidade: "un", obs: "Protecção geral circuitos força" });
// // // // //   mats.push({ cat: "Protecção", ref: "SURTO-T2", nome: "Descarregador Sobretensões Tipo 2",              marca: "Legrand",  qtd: 1, unidade: "un", obs: "Protecção QGD principal" });

// // // // //   /* ── CABLAGEM ── */
// // // // //   const fCab = ind ? 1.1 : res ? 0.85 : 1.0;
// // // // //   mats.push({ cat: "Cablagem", ref: "CAB-2.5",  nome: "Cabo H07V-K 2,5mm² (anel/tomadas)",             marca: "Nexans",   qtd: Math.round(m2 * 1.6 * fCab), unidade: "m",  obs: "Circuitos iluminação e tomadas" });
// // // // //   mats.push({ cat: "Cablagem", ref: "CAB-4",    nome: "Cabo H07V-K 4mm² (circuitos potência)",         marca: "Nexans",   qtd: Math.round(m2 * 0.7 * fCab), unidade: "m" });
// // // // //   mats.push({ cat: "Cablagem", ref: "CAB-16",   nome: "Cabo H07V-K 16mm² (alimentação principal)",     marca: "Nexans",   qtd: Math.round(m2 * 0.4 * fCab), unidade: "m" });
// // // // //   if (ind) mats.push({ cat: "Cablagem", ref: "CAB-35",  nome: "Cabo H07V-K 35mm² (acometimento BT)",    marca: "Nexans",   qtd: Math.round(m2 * 0.15), unidade: "m", obs: "Ligação QGBT / transformador" });

// // // // //   /* ── INFRAESTRUTURA ── */
// // // // //   mats.push({ cat: "Infraestrutura", ref: "CALHA-40",   nome: "Calha Técnica PVC 40×40mm",              marca: "Legrand",  qtd: Math.ceil(m2 * 0.45), unidade: "m" });
// // // // //   if (!res) mats.push({ cat: "Infraestrutura", ref: "CALHA-100",  nome: "Calha Técnica PVC 100×60mm (corredor técnico)", marca: "Legrand", qtd: Math.ceil(m2 * 0.12), unidade: "m" });
// // // // //   mats.push({ cat: "Infraestrutura", ref: "CORR-20",    nome: "Tubo Corrugado Flexível Ø20mm",          marca: "Legrand",  qtd: Math.round(m2 * 0.9), unidade: "m" });
// // // // //   if (ind) mats.push({ cat: "Infraestrutura", ref: "BANDEJA-100", nome: "Bandeja Portacabos Aço 100mm",  marca: "Legrand",  qtd: Math.ceil(m2 * 0.08), unidade: "m", obs: "Distribuição aérea industrial" });
// // // // //   mats.push({ cat: "Infraestrutura", ref: "CAIXA-ENT",  nome: "Caixa de Encastrar 2-módulos",           marca: "Legrand",  qtd: Math.ceil(m2 / (res ? 6 : 8)), unidade: "un" });

// // // // //   /* ── ILUMINAÇÃO ── */
// // // // //   const lux   = ind ? 200 : res ? 100 : 150;
// // // // //   const wLum  = ind ? 150 : res ? 18 : 36;
// // // // //   const nLum  = Math.ceil((m2 * lux) / (wLum * 100));
// // // // //   const tipo  = ind ? "Armadura LED Industrial" : res ? "Painel LED Encastrado" : "Armadura LED Slim";
// // // // //   const ip    = ind ? "IP65" : "IP44";
// // // // //   mats.push({ cat: "Iluminação", ref: `LED-${wLum}W`, nome: `${tipo} ${wLum}W ≥130lm/W`,  marca: "Legrand / Philips", qtd: nLum, unidade: "un", obs: `${ip} · Eficiência classe A+` });
// // // // //   mats.push({ cat: "Iluminação", ref: "BLQ-EMG-8W",   nome: "Bloco Autónomo Emergência 8W 3h", marca: "Legrand", qtd: Math.max(2, Math.ceil(nLum / 6)), unidade: "un", obs: "Sinalização saídas emergência" });

// // // // //   /* ── TOMADAS / ACABAMENTOS ── */
// // // // //   const nTom = Math.ceil(m2 / (res ? 7 : 10));
// // // // //   mats.push({ cat: "Tomadas/Acabam.", ref: "TOM-16A", nome: res ? "Tomada Dupla Schuko 16A com terra" : "Tomada Industrial IP44 16A", marca: "Legrand", qtd: nTom, unidade: "un" });
// // // // //   if (!res) mats.push({ cat: "Tomadas/Acabam.", ref: "TOM-32A-IND", nome: "Tomada Industrial IP44 32A 3P+N+T", marca: "Legrand", qtd: Math.ceil(m2 / 60), unidade: "un", obs: "Força motriz / equipamentos" });

// // // // //   /* ── SOLAR ── */
// // // // //   if (f.solar) {
// // // // //     const hpico  = agr ? 5.5 : 5.0;               // horas pico solar Angola/Portugal
// // // // //     const kwp    = Math.ceil(kwh / hpico * 1.15);  // 15% oversizing
// // // // //     const nPain  = Math.ceil((kwp * 1000) / 580);
// // // // //     const pInv   = kwp <= 5 ? 5 : kwp <= 15 ? 15 : kwp <= 30 ? 30 : kwp <= 60 ? 60 : 100;
// // // // //     mats.push({ cat: "Solar", ref: "PV-580W",     nome: "Painel Solar Mono Half-Cut 580Wp",                  marca: "Huawei FusionSolar", qtd: nPain,             unidade: "un", obs: `Total: ${(nPain * 0.58).toFixed(1)} kWp · Eficiência ≥21,5%` });
// // // // //     mats.push({ cat: "Solar", ref: `INV-${pInv}K`, nome: `Inversor Híbrido SUN2000-${pInv}KTL`,             marca: "Huawei",            qtd: 1,                 unidade: "un", obs: "MPPT duplo · monitorização remota · WiFi" });
// // // // //     mats.push({ cat: "Solar", ref: "CAB-SOL-4",   nome: "Cabo Solar PV H1Z2Z2-K 4mm²",                     marca: "Prysmian",          qtd: nPain * 14,        unidade: "m" });
// // // // //     mats.push({ cat: "Solar", ref: "ESTR-COBERT", nome: "Estrutura Fixação Alumínio em Cobertura",          marca: "K2 Systems",        qtd: Math.ceil(nPain / 2), unidade: "kit", obs: "Inclinação ajustável 10–35°" });
// // // // //     mats.push({ cat: "Solar", ref: "CON-MC4",     nome: "Conector MC4 (par macho+fêmea)",                  marca: "Stäubli",           qtd: nPain * 2,         unidade: "par" });
// // // // //     mats.push({ cat: "Solar", ref: "SURTO-PV",    nome: "Protecção Sobretensão DC Tipo 2",                 marca: "Legrand",           qtd: 1,                 unidade: "un", obs: "Protecção string box" });
// // // // //     /* Armazenamento */
// // // // //     if (aut > 0) {
// // // // //       const kwhBat = Math.ceil(kwh * aut * 1.25);
// // // // //       const nMod   = Math.ceil(kwhBat / 5);
// // // // //       mats.push({ cat: "Armazenamento", ref: "BAT-LFP-5K", nome: "Módulo Bateria LFP 5kWh PowerOcean",       marca: "EcoFlow",           qtd: nMod,              unidade: "un", obs: `${kwhBat} kWh total · ${aut}d autonomia · 15 anos garantia` });
// // // // //     }
// // // // //   }

// // // // //   /* ── UPS ── */
// // // // //   if (f.ups) {
// // // // //     const kva = res ? 3 : ind ? (kwh > 200 ? 200 : 80) : 20;
// // // // //     const fab = kva > 40 ? "Socomec MODULYS" : "Salicru SLC TWIN RT";
// // // // //     mats.push({ cat: "UPS", ref: `UPS-${kva}KVA`, nome: `UPS Online Dupla Conversão ${kva} KVA`, marca: fab, qtd: 1, unidade: "un", obs: "10 min autonomia interna · extensível via ext. battery" });
// // // // //   }

// // // // //   /* ── MÉDIA TENSÃO ── */
// // // // //   if (ind && kwh > 100) {
// // // // //     const kvaT = kwh > 500 ? 2000 : kwh > 200 ? 1000 : 500;
// // // // //     mats.push({ cat: "Média Tensão", ref: `PT-${kvaT}K`, nome: `Posto Transformação Compacto ${kvaT} KVA`, marca: "Toshiba T&D TCSU", qtd: 1, unidade: "un", obs: "10–30 kV · Pré-montado · IP66 · Class AB" });
// // // // //   }

// // // // //   /* ── SPDA ── */
// // // // //   if (f.spda) {
// // // // //     const raio = ind ? 107 : 60;
// // // // //     mats.push({ cat: "SPDA", ref: "PARARR-ESE",  nome: `Para-Raios ESE Franklin France R${raio}m`,      marca: "Franklin France", qtd: 1,                       unidade: "un", obs: `Raio de protecção: ${raio}m · IEC 62305` });
// // // // //     mats.push({ cat: "SPDA", ref: "COND-DES-50", nome: "Condutor de Descida Cobre 50mm²",               marca: "Franklin France", qtd: Math.ceil(Math.sqrt(m2)*4), unidade: "m" });
// // // // //     mats.push({ cat: "SPDA", ref: "ELEC-TERRA",  nome: "Eléctrodo Terra Aço Inox Ø14mm × 1,5m",         marca: "Franklin France", qtd: Math.ceil(m2 / 200) + 1, unidade: "un" });
// // // // //     mats.push({ cat: "SPDA", ref: "SURTO-T1T2",  nome: "Descarregador Sobretensão Tipo 1+2",            marca: "Legrand",         qtd: 1,                       unidade: "un", obs: "Protecção combinada QGD principal" });
// // // // //   }

// // // // //   /* ── MOBILIDADE VE ── */
// // // // //   if (f.ve) {
// // // // //     const pvE = res ? 7.4 : ind ? 50 : 22;
// // // // //     const nVE = res ? 1 : Math.max(2, Math.ceil(m2 / 400));
// // // // //     const fab = pvE >= 50 ? "Circutor" : "Huawei";
// // // // //     mats.push({ cat: "Mobilidade VE", ref: `VE-${pvE}KW`,  nome: `Posto Carregamento VE ${pvE}kW`,                  marca: fab,   qtd: nVE, unidade: "un", obs: pvE >= 50 ? "DC Rápido · CCS + CHAdeMO · OCPP" : pvE >= 22 ? "AC Trifásico · Type 2 · RFID" : "Modo 3 · Type 2 · App" });
// // // // //     mats.push({ cat: "Mobilidade VE", ref: "CAB-VE-6",      nome: "Cabo Flexível H05VV-F 3×6mm² para VE",           marca: "Prysmian", qtd: nVE * (pvE >= 22 ? 30 : 15), unidade: "m" });
// // // // //   }

// // // // //   /* ── BACKUP / GERADOR ── */
// // // // //   if (f.gerador) {
// // // // //     const kvaG = kwh > 200 ? 200 : kwh > 80 ? 80 : kwh > 30 ? 30 : 15;
// // // // //     mats.push({ cat: "Backup Gerador", ref: `GEN-${kvaG}K`,  nome: `Grupo Gerador Diesel ${kvaG} KVA Insonorizado`, marca: "Perkins / Stamford", qtd: 1, unidade: "un", obs: "Arranque automático · nível sonoro ≤70 dB(A)" });
// // // // //     mats.push({ cat: "Backup Gerador", ref: "ATS-AUTO",       nome: "Comutador Automático ATS 4P",                   marca: "Legrand",           qtd: 1, unidade: "un", obs: "Comutação automática rede ↔ gerador <3s" });
// // // // //     mats.push({ cat: "Backup Gerador", ref: "CAB-GEN-16",     nome: "Cabo Alimentação Gerador NYY 4×16mm²",          marca: "Nexans",            qtd: 30, unidade: "m" });
// // // // //   }

// // // // //   return mats;
// // // // // }

// // // // // /* ─────────────────────────────────────────────
// // // // //    APP
// // // // // ───────────────────────────────────────────── */
// // // // // export default function Home() {
// // // // //   const [slide, setSlide] = useState(0);
// // // // //   const [animKey, setAnimKey] = useState(0);
// // // // //   const [scrolled, setScrolled] = useState(false);
// // // // //   const [activeProduct, setActiveProduct] = useState(0);
// // // // //   const [activePoint, setActivePoint] = useState<number | null>(null);
// // // // //   const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

// // // // //   /* ── Simulador state ── */
// // // // //   const [simStep, setSimStep]     = useState<SimStep>(1);
// // // // //   const [simForm, setSimForm]     = useState<SimForm>({
// // // // //     tipo: "", area: "", consumo: "", autonomia: "1",
// // // // //     trifasico: false, gerador: false, spda: false,
// // // // //     ve: false, solar: false, ups: false, localizacao: "Luanda",
// // // // //   });
// // // // //   const [simResult, setSimResult] = useState<MatItem[]>([]);
// // // // //   const [simCatFil, setSimCatFil] = useState("Todos");
// // // // //   const setSim = (k: keyof SimForm, v: string | boolean) =>
// // // // //     setSimForm(prev => ({ ...prev, [k]: v }));
// // // // //   const simCats = ["Todos", ...Array.from(new Set(simResult.map(m => m.cat)))];
// // // // //   const simVisible = simCatFil === "Todos" ? simResult : simResult.filter(m => m.cat === simCatFil);
// // // // //   const runSim = () => {
// // // // //     setSimResult(calcSimulacao(simForm));
// // // // //     setSimCatFil("Todos");
// // // // //     setSimStep(3);
// // // // //   };

// // // // //   const advance = () => { setSlide(s => (s + 1) % HERO_SLIDES.length); setAnimKey(k => k + 1); };

// // // // //   useEffect(() => {
// // // // //     timerRef.current = setInterval(advance, 6000);
// // // // //     return () => clearInterval(timerRef.current);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const fn = () => setScrolled(window.scrollY > 48);
// // // // //     window.addEventListener("scroll", fn);
// // // // //     return () => window.removeEventListener("scroll", fn);
// // // // //   }, []);

// // // // //   const cur = HERO_SLIDES[slide];
// // // // //   const curProd = PRODUCTS[activeProduct];

// // // // //   const NAV = [
// // // // //     { label: "Produtos", href: "#produtos" },
// // // // //     { label: "Serviços", href: "#servicos" },
// // // // //     { label: "Simulador", href: "/simulator" },
// // // // //     { label: "Presença", href: "#presenca" },
// // // // //     { label: "Contacto", href: "#contacto" },
// // // // //   ];

// // // // //   return (
// // // // //     <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", overflowX: "hidden" }}>
// // // // //       <style>{`
// // // // //         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
// // // // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// // // // //         html { scroll-behavior: smooth; }
// // // // //         a { text-decoration: none; color: inherit; }
// // // // //         button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
// // // // //         ::selection { background: #095b66; color: #fff; }
// // // // //         ::-webkit-scrollbar { width: 4px; }
// // // // //         ::-webkit-scrollbar-thumb { background: #095b66; border-radius: 4px; }
// // // // //         .nav-a { font-size: 11.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; transition: opacity .2s; }
// // // // //         .nav-a:hover { opacity: .6; }
// // // // //         @keyframes heroIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: none; } }
// // // // //         .hero-in { animation: heroIn .5s cubic-bezier(.22,1,.36,1) both; }
// // // // //         .dot { width: 7px; height: 7px; border-radius: 99px; cursor: pointer; border: none; transition: all .3s; background: rgba(255,255,255,.35); }
// // // // //         .dot.on { width: 24px; background: #fff; }
// // // // //         .prod-tab { padding: 14px 18px; border-radius: 8px; cursor: pointer; transition: all .2s; border: 1.5px solid transparent; display: flex; align-items: center; gap: 12px; }
// // // // //         .prod-tab:hover { background: #f0f9fa; }
// // // // //         .prod-tab.on { background: #095b66; border-color: #095b66; }
// // // // //         .brand-card { background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; padding: 14px 18px; text-align: center; transition: all .25s; }
// // // // //         .brand-card:hover { border-color: #095b66; background: #fff; box-shadow: 0 4px 18px rgba(9,91,102,.08); }
// // // // //         .client-chip { background: #f0f9fa; border: 1.5px solid #c8e8eb; border-radius: 99px; padding: 7px 16px; font-size: 12px; font-weight: 700; color: #1a4a4f; white-space: nowrap; transition: all .2s; }
// // // // //         .client-chip:hover { background: #095b66; color: #fff; border-color: #095b66; }
// // // // //         .input { width: 100%; background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 7px; color: #1a2c2e; padding: 12px 15px; font-family: 'Montserrat',sans-serif; font-size: 13px; outline: none; transition: border-color .2s; }
// // // // //         .input:focus { border-color: #095b66; background: #fff; }
// // // // //         .input::placeholder { color: #9bbbbe; }
// // // // //         textarea.input { resize: vertical; min-height: 100px; }
// // // // //         .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
// // // // //         .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(9,91,102,.25); }
// // // // //         .btn-outline-w { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.55); border-radius: 6px; padding: 11px 26px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; }
// // // // //         .btn-outline-w:hover { background: rgba(255,255,255,.12); border-color: #fff; }
// // // // //         .btn-white { background: #fff; color: #095b66; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
// // // // //         .btn-white:hover { background: #e8f5f7; transform: translateY(-2px); }
// // // // //         .footer-btn { background: none; border: none; padding: 0; font-family: 'Montserrat',sans-serif; font-size: 13px; color: #4a7a7e; cursor: pointer; transition: color .2s; text-align: left; width: 100%; }
// // // // //         .footer-btn:hover { color: #fff; }
// // // // //         /* ── Simulador ── */
// // // // //         @keyframes simUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }
// // // // //         .sim-up { animation: simUp .4s ease both; }
// // // // //         .sim-tipo-btn { border: 1.5px solid #dde8ea; border-radius: 14px; background: #fff; cursor: pointer; transition: all .22s; padding: 22px 16px; display: flex; flex-direction: column; align-items: center; gap: 10px; font-family: 'Montserrat',sans-serif; }
// // // // //         .sim-tipo-btn:hover { border-color: #095b66; transform: translateY(-2px); box-shadow: 0 6px 22px rgba(9,91,102,.1); }
// // // // //         .sim-tipo-btn.on { border-color: #095b66; background: #095b66; box-shadow: 0 8px 28px rgba(9,91,102,.22); transform: translateY(-3px); }
// // // // //         .sim-field { display: flex; flex-direction: column; gap: 6px; }
// // // // //         .sim-field label { font-size: 10px; font-weight: 700; color: #095b66; letter-spacing: .14em; text-transform: uppercase; }
// // // // //         .sim-field small { font-size: 10.5px; color: #9bbbbe; margin-top: 2px; }
// // // // //         .sim-inp { width: 100%; background: #fff; border: 1.5px solid #dde8ea; border-radius: 9px; color: #1a2c2e; padding: 11px 14px; font-family: 'Montserrat',sans-serif; font-size: 13px; font-weight: 600; outline: none; transition: border-color .2s, box-shadow .2s; }
// // // // //         .sim-inp:focus { border-color: #095b66; box-shadow: 0 0 0 3px rgba(9,91,102,.08); }
// // // // //         .sim-inp::placeholder { color: #b0c8ca; font-weight: 500; }
// // // // //         .sim-sel { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%23095b66' stroke-width='2.2' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 13px center; padding-right:36px; }
// // // // //         .sim-toggle { position:relative; display:inline-flex; width:40px; height:22px; flex-shrink:0; }
// // // // //         .sim-toggle input { opacity:0; width:0; height:0; }
// // // // //         .sim-slider { position:absolute; inset:0; border-radius:99px; background:#dde8ea; cursor:pointer; transition:background .2s; }
// // // // //         .sim-slider::before { content:''; position:absolute; width:16px; height:16px; left:3px; bottom:3px; background:#fff; border-radius:50%; transition:transform .22s; box-shadow:0 1px 3px rgba(0,0,0,.15); }
// // // // //         .sim-toggle input:checked + .sim-slider { background: #095b66; }
// // // // //         .sim-toggle input:checked + .sim-slider::before { transform: translateX(18px); }
// // // // //         .sim-cat-pill { padding: 6px 14px; border-radius: 99px; border: 1.5px solid #dde8ea; background: #fff; font-size: 11px; font-weight: 700; color: #4a7275; cursor: pointer; transition: all .18s; white-space: nowrap; font-family:'Montserrat',sans-serif; }
// // // // //         .sim-cat-pill:hover { border-color: #095b66; color: #095b66; }
// // // // //         .sim-cat-pill.on { background: #095b66; border-color: #095b66; color: #fff; }
// // // // //         .sim-row:hover { background: #f8fcfc; }
// // // // //         .sim-prog-line { height: 2px; flex:1; margin: 0 6px 20px; transition: background .3s; }
// // // // //         @media (max-width: 900px) {
// // // // //           .hide-mob { display: none !important; }
// // // // //           .two { grid-template-columns: 1fr !important; }
// // // // //           .three { grid-template-columns: 1fr 1fr !important; }
// // // // //           .sp { padding-left: 22px !important; padding-right: 22px !important; }
// // // // //           .hero-sp { padding: 86px 22px 0 !important; }
// // // // //         }
// // // // //         @media (max-width: 540px) { .three { grid-template-columns: 1fr !important; } }
// // // // //       `}</style>

// // // // //       {/* ── NAVBAR ── */}
// // // // //       <header style={{
// // // // //         position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 64,
// // // // //         background: scrolled ? "rgba(255,255,255,.97)" : "transparent",
// // // // //         backdropFilter: scrolled ? "blur(16px)" : "none",
// // // // //         boxShadow: scrolled ? "0 1px 0 rgba(9,91,102,.08)" : "none",
// // // // //         transition: "all .3s", display: "flex", alignItems: "center", padding: "0 48px",
// // // // //       }}>
// // // // //         <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, flex: "0 0 auto" }}>
// // // // //           <div style={{ width: 34, height: 34, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // //             <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
// // // // //               <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" stroke="#fff" strokeWidth=".5" strokeLinejoin="round"/>
// // // // //             </svg>
// // // // //           </div>
// // // // //           <span style={{ fontWeight: 900, fontSize: 16, color: scrolled ? "#095b66" : "#fff", transition: "color .3s" }}>
// // // // //             Multi<span style={{ color: scrolled ? "#0a7a89" : "rgba(255,255,255,.6)" }}>energia</span>
// // // // //           </span>
// // // // //         </Link>
// // // // //         <nav className="hide-mob" style={{ display: "flex", gap: 36, marginLeft: "auto", marginRight: 32 }}>
// // // // //           {NAV.map(l => (
// // // // //             <a key={l.label} href={l.href} className="nav-a" style={{ color: scrolled ? "#1a2c2e" : "rgba(255,255,255,.85)" }}>{l.label}</a>
// // // // //           ))}
// // // // //           <Link href="/sobre" className="nav-a" style={{ color: scrolled ? "#1a2c2e" : "rgba(255,255,255,.85)" }}>Sobre</Link>
// // // // //         </nav>
// // // // //         <a href="#contacto" className="btn-teal hide-mob" style={{ fontSize: 11, padding: "9px 20px" }}>Orçamento</a>
// // // // //       </header>

// // // // //       {/* ── HERO ── */}
// // // // //       <section style={{ position: "relative", minHeight: "100vh", background: "#095b66", overflow: "hidden", display: "flex", flexDirection: "column" }}>
// // // // //         <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", background: "rgba(255,255,255,.04)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}/>
// // // // //         <div style={{ position: "absolute", top: 0, right: 0, width: "30%", height: "100%", background: "rgba(255,255,255,.03)", clipPath: "polygon(25% 0, 100% 0, 100% 100%, 10% 100%)" }}/>
// // // // //         <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }}/>
// // // // //         <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", opacity: .06, pointerEvents: "none" }}>
// // // // //           <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330"><path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/></svg>
// // // // //         </div>
// // // // //         <div className="hero-sp sp" style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", alignItems: "center", padding: "100px 80px 0", maxWidth: 1280, margin: "0 auto", width: "100%" }}>
// // // // //           <div style={{ maxWidth: 660 }}>
// // // // //             <div key={`tag-${animKey}`} className="hero-in" style={{ animationDelay: "0s" }}>
// // // // //               <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, padding: "5px 14px", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.85)", marginBottom: 32 }}>
// // // // //                 {cur.tag}
// // // // //               </div>
// // // // //             </div>
// // // // //             <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s" }}>
// // // // //               <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28 }}>
// // // // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line1}</span>
// // // // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)", color: "rgba(255,255,255,.4)" }}>{cur.line2}</span>
// // // // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line3}</span>
// // // // //               </h1>
// // // // //             </div>
// // // // //             <div key={`s-${animKey}`} className="hero-in" style={{ animationDelay: ".16s" }}>
// // // // //               <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.7)", maxWidth: 480, marginBottom: 44 }}>{cur.sub}</p>
// // // // //               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
// // // // //                 <a href="#produtos" className="btn-white">Ver Soluções</a>
// // // // //                 <a href="#contacto" className="btn-outline-w">Pedir Orçamento</a>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
// // // // //           {HERO_SLIDES.map((_, i) => (
// // // // //             <button key={i} className={`dot ${i === slide ? "on" : ""}`}
// // // // //               onClick={() => { clearInterval(timerRef.current); setSlide(i); setAnimKey(k => k + 1); }}
// // // // //               aria-label={`Slide ${i + 1}`}
// // // // //             />
// // // // //           ))}
// // // // //         </div>
// // // // //         <div style={{ height: 64, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)", marginTop: 40 }}/>
// // // // //       </section>

// // // // //       {/* ── PRODUCTS ── */}
// // // // //       <section id="produtos" style={{ padding: "96px 0 80px" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // //           <Reveal>
// // // // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 52, flexWrap: "wrap" }}>
// // // // //               <div>
// // // // //                 <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Catálogo</p>
// // // // //                 <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05 }}>Os Nossos Produtos</h2>
// // // // //               </div>
// // // // //               <Link href="/products" style={{ fontSize: 12, fontWeight: 700, color: "#095b66", letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "2px solid #095b66", paddingBottom: 2 }}>
// // // // //                 Ver todos →
// // // // //               </Link>
// // // // //             </div>
// // // // //           </Reveal>

// // // // //           <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32, alignItems: "start" }}>
// // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
// // // // //               {PRODUCTS.map((p, i) => (
// // // // //                 <Reveal key={i} delay={i * .05}>
// // // // //                   <button className={`prod-tab ${activeProduct === i ? "on" : ""}`} onClick={() => setActiveProduct(i)} aria-label={p.name}>
// // // // //                     <div style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, background: activeProduct === i ? "rgba(255,255,255,.15)" : p.light, display: "flex", alignItems: "center", justifyContent: "center" }}>
// // // // //                       <svg viewBox="0 0 48 48" fill="none" width="22" height="22">
// // // // //                         {i === 0 && <><circle cx="24" cy="24" r="8" fill={activeProduct===i?"#fff":"#095b66"}/><path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.5 11.5l3.5 3.5M33 33l3.5 3.5M11.5 36.5l3.5-3.5M33 15l3.5-3.5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/></>}
// // // // //                         {i === 1 && <><rect x="14" y="6" width="20" height="36" rx="3" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="18" y="10" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"}/><rect x="18" y="18" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><rect x="18" y="26" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
// // // // //                         {i === 2 && <><rect x="6" y="6" width="36" height="36" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="10" y="10" width="28" height="6" rx="1" fill={activeProduct===i?"#fff":"#095b66"} opacity=".7"/><circle cx="15" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"}/><circle cx="24" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><circle cx="33" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
// // // // //                         {i === 3 && <><rect x="8" y="14" width="32" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 24l-5 6h6l-4 6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
// // // // //                         {i === 4 && <><rect x="10" y="16" width="28" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 8v8" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/><path d="M16 8h16" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                         {i === 5 && <><rect x="6" y="16" width="36" height="22" rx="5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><circle cx="14" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><circle cx="34" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><path d="M12 27h8l3 5h14" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M34 13v5M31 16h6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                       </svg>
// // // // //                     </div>
// // // // //                     <span style={{ fontSize: 13, fontWeight: 700, color: activeProduct === i ? "#fff" : "#1a2c2e", textAlign: "left", lineHeight: 1.3 }}>{p.name}</span>
// // // // //                   </button>
// // // // //                 </Reveal>
// // // // //               ))}
// // // // //             </div>

// // // // //             <Reveal key={activeProduct}>
// // // // //               <div style={{ background: "linear-gradient(135deg, #095b66 0%, #0a7a89 100%)", borderRadius: 20, padding: "44px 48px", minHeight: 360, position: "relative", overflow: "hidden" }}>
// // // // //                 <div style={{ position: "absolute", right: -30, top: -30, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,.05)", pointerEvents: "none" }}/>
// // // // //                 <div style={{ position: "absolute", right: 30, bottom: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }}/>
// // // // //                 <div style={{ position: "relative", zIndex: 1 }}>
// // // // //                   <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
// // // // //                     <svg viewBox="0 0 64 64" fill="none" width="44" height="44">
// // // // //                       {activeProduct === 0 && <><circle cx="32" cy="32" r="10" fill="rgba(255,255,255,.9)"/><path d="M32 10v5M32 49v5M10 32h5M49 32h5M16.5 16.5l3.5 3.5M44 44l3.5 3.5M16.5 47.5l3.5-3.5M44 20l3.5-3.5" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/></>}
// // // // //                       {activeProduct === 1 && <><rect x="18" y="6" width="28" height="52" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="22" y="12" width="20" height="8" rx="2" fill="rgba(255,255,255,.9)"/><rect x="22" y="24" width="20" height="8" rx="2" fill="rgba(255,255,255,.5)"/><rect x="22" y="36" width="20" height="8" rx="2" fill="rgba(255,255,255,.3)"/><path d="M28 60h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                       {activeProduct === 2 && <><rect x="8" y="8" width="48" height="48" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="14" y="14" width="36" height="8" rx="2" fill="rgba(255,255,255,.9)" opacity=".8"/><circle cx="20" cy="34" r="5" fill="rgba(255,255,255,.9)"/><circle cx="32" cy="34" r="5" fill="rgba(255,255,255,.6)"/><circle cx="44" cy="34" r="5" fill="rgba(255,255,255,.3)"/></>}
// // // // //                       {activeProduct === 3 && <><rect x="10" y="16" width="44" height="32" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 24l-8 10h10l-6 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>}
// // // // //                       {activeProduct === 4 && <><rect x="12" y="20" width="40" height="30" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 8v12" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 8h24M20 14h24" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><rect x="20" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/><rect x="34" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/></>}
// // // // //                       {activeProduct === 5 && <><rect x="8" y="22" width="48" height="26" rx="6" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><circle cx="20" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="20" cy="52" r="3" fill="rgba(255,255,255,.9)"/><circle cx="44" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="44" cy="52" r="3" fill="rgba(255,255,255,.9)"/><path d="M14 30h14l4 8h18" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M42 18v8M38 22h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                     </svg>
// // // // //                   </div>
// // // // //                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 8 }}>{curProd.id.toUpperCase()}</p>
// // // // //                   <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>{curProd.name}</h3>
// // // // //                   <p style={{ fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}>{curProd.desc}</p>
// // // // //                   <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
// // // // //                     {curProd.specs.map(s => (
// // // // //                       <span key={s} style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, fontSize: 11, fontWeight: 600, color: "#fff", padding: "4px 12px" }}>{s}</span>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                   <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
// // // // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: ".1em", textTransform: "uppercase" }}>Marcas:</span>
// // // // //                     {curProd.brands.map(b => (
// // // // //                       <span key={b} style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,.8)", background: "rgba(255,255,255,.1)", borderRadius: 5, padding: "3px 10px" }}>{b}</span>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </Reveal>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── SERVICES ── */}
// // // // //       <section id="servicos" style={{ background: "#095b66", padding: "96px 0" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // //           <Reveal>
// // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 8 }}>— Serviços</p>
// // // // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 56, flexWrap: "wrap" }}>
// // // // //               <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#fff", lineHeight: 1.05 }}>O que fazemos</h2>
// // // // //               <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 380, lineHeight: 1.7 }}>Da concepção ao comissionamento. Suporte especializado em todas as fases do seu projeto energético.</p>
// // // // //             </div>
// // // // //           </Reveal>
// // // // //           <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
// // // // //             {SERVICES.map((s, i) => (
// // // // //               <Reveal key={i} delay={i * .07}>
// // // // //                 <div style={{ background: i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)", border: "1.5px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "32px 28px", transition: "all .3s", cursor: "default" }}
// // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background="rgba(255,255,255,.12)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,.25)"; (e.currentTarget as HTMLDivElement).style.transform="translateY(-4px)"; }}
// // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background=i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,.1)"; (e.currentTarget as HTMLDivElement).style.transform="none"; }}>
// // // // //                   <div style={{ width: 58, height: 58, borderRadius: 14, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
// // // // //                     <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
// // // // //                       {i === 0 && <><rect x="6" y="6" width="36" height="36" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M14 24h20M24 14v20" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="14" cy="14" r="3" fill="rgba(255,255,255,.4)"/><circle cx="34" cy="34" r="3" fill="rgba(255,255,255,.4)"/></>}
// // // // //                       {i === 1 && <><circle cx="24" cy="24" r="18" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M24 14v10l6 6" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 24h4M34 24h4M24 10v4M24 34v4" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                       {i === 2 && <><path d="M8 36l8-8 6 6 10-12 8 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="6" width="36" height="28" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 42h16M24 34v8" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                       {i === 3 && <><path d="M24 6l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L24 23.4l-6.9 3.8 1.3-7.7-5.6-5.4 7.7-1.1z" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinejoin="round"/><path d="M14 30l-6 12M34 30l6 12" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                       {i === 4 && <><path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M32 8l8 0 0 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 8L28 20" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 24l4-6 4 6" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
// // // // //                       {i === 5 && <><rect x="6" y="14" width="36" height="26" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 14V10a8 8 0 0116 0v4" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M24 26v4" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="24" cy="24" r="3" fill="rgba(255,255,255,.9)"/></>}
// // // // //                     </svg>
// // // // //                   </div>
// // // // //                   <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
// // // // //                   <p style={{ fontSize: 13, color: "rgba(255,255,255,.62)", lineHeight: 1.7 }}>{s.short}</p>
// // // // //                 </div>
// // // // //               </Reveal>
// // // // //             ))}
// // // // //           </div>
// // // // //           <Reveal style={{ marginTop: 52, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
// // // // //             <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
// // // // //               <div style={{ width: 48, height: 48, background: "rgba(255,255,255,.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</div>
// // // // //               <div>
// // // // //                 <div style={{ fontSize: 10, color: "rgba(255,255,255,.45)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>Angola · Suporte</div>
// // // // //                 <a href="tel:+244933153362" style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>+244 933 153 362</a>
// // // // //               </div>
// // // // //             </div>
// // // // //             <a href="#contacto" className="btn-white">Solicitar Visita Técnica</a>
// // // // //           </Reveal>
// // // // //         </div>
// // // // //       </section>

      

// // // // //             {/* ── GEOGRAPHIC PRESENCE — FIXED MAP ── */}
// // // // //       {/* <section id="presenca" style={{ background: "#fff", padding: "96px 0" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // //           <Reveal>
// // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Presença Internacional</p>
// // // // //             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 12 }}>Onde estamos</h2>
// // // // //             <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 480, lineHeight: 1.75, marginBottom: 56 }}>
// // // // //               Operamos em Angola, Portugal, Cabo Verde e São Tomé e Príncipe. Clique nos pontos do mapa para mais detalhes.
// // // // //             </p>
// // // // //           </Reveal>
// // // // //           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
// // // // //             <Reveal>
// // // // //               <div style={{ background: "#f0f9fa", borderRadius: 20, padding: "8px", border: "1.5px solid #c8e8eb" }}>
// // // // //                 <WorldMap points={PRESENCE} activePoint={activePoint} onHover={i => setActivePoint(activePoint === i ? null : i)} />
// // // // //               </div>
// // // // //             </Reveal>
// // // // //             <Reveal delay={.1}>
// // // // //               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // // // //                 {PRESENCE.map((p, i) => (
// // // // //                   <button key={i} onClick={() => setActivePoint(activePoint === i ? null : i)}
// // // // //                     style={{ background: activePoint===i?"#095b66":"#fff", border: `1.5px solid ${activePoint===i?"#095b66":"#dde8ea"}`, borderRadius: 12, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start", cursor: "pointer", transition: "all .25s", textAlign: "left" }}>
// // // // //                     <div style={{ width: 36, height: 36, borderRadius: 8, background: activePoint===i?"rgba(255,255,255,.15)":"#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
// // // // //                       {i===0?"🇦🇴":i===1?"🇵🇹":i===2?"🇨🇻":"🇸🇹"}
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <div style={{ fontSize: 13, fontWeight: 800, color: activePoint===i?"#fff":"#0a1c1e", marginBottom: 3 }}>{p.name}</div>
// // // // //                       <div style={{ fontSize: 11, color: activePoint===i?"rgba(255,255,255,.65)":"#6a9598", lineHeight: 1.5, whiteSpace: "pre-line" }}>{p.detail}</div>
// // // // //                     </div>
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </Reveal>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section> */}


// // // // //       <section id="presenca" style={{ background: "#fff", padding: "96px 0" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // //           <Reveal>
// // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Presença Internacional</p>
// // // // //             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 12 }}>
// // // // //               Onde estamos
// // // // //             </h2>
// // // // //             <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 480, lineHeight: 1.75, marginBottom: 56 }}>
// // // // //               Operamos em Angola, Portugal, Cabo Verde e São Tomé e Príncipe. Clique nos pontos do mapa para mais detalhes.
// // // // //             </p>
// // // // //           </Reveal>

// // // // //           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
// // // // //             <Reveal>
// // // // //               <div style={{ background: "#f0f9fa", borderRadius: 20, padding: "8px", border: "1.5px solid #c8e8eb" }}>
// // // // //                 <WorldMap points={PRESENCE} activePoint={activePoint} onHover={i => setActivePoint(activePoint === i ? null : i)} />
// // // // //               </div>
// // // // //             </Reveal>

// // // // //             <Reveal delay={.1}>
// // // // //               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // // // //                 {PRESENCE.map((p, i) => (
// // // // //                   <button key={i}
// // // // //                     onClick={() => setActivePoint(activePoint === i ? null : i)}
// // // // //                     style={{
// // // // //                       background: activePoint === i ? "#095b66" : "#fff",
// // // // //                       border: `1.5px solid ${activePoint === i ? "#095b66" : "#dde8ea"}`,
// // // // //                       borderRadius: 12, padding: "16px 20px",
// // // // //                       display: "flex", gap: 14, alignItems: "flex-start", cursor: "pointer",
// // // // //                       transition: "all .25s", textAlign: "left",
// // // // //                     }}>
// // // // //                     <div style={{ width: 36, height: 36, borderRadius: 8, background: activePoint === i ? "rgba(255,255,255,.15)" : "#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
// // // // //                       {i === 0 ? "🇦🇴" : i === 1 ? "🇵🇹" : i === 2 ? "🇨🇻" : "🇸🇹"}
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <div style={{ fontSize: 13, fontWeight: 800, color: activePoint === i ? "#fff" : "#0a1c1e", marginBottom: 3 }}>{p.name}</div>
// // // // //                       <div style={{ fontSize: 11, color: activePoint === i ? "rgba(255,255,255,.65)" : "#6a9598", lineHeight: 1.5, whiteSpace: "pre-line" }}>{p.detail}</div>
// // // // //                     </div>
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </Reveal>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── CLIENTS + BRANDS ── */}
// // // // //       <section style={{ background: "#f0f9fa", padding: "80px 0" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // //           <Reveal>
// // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Clientes</p>
// // // // //             <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Confiam em Nós</h2>
// // // // //           </Reveal>
// // // // //           <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 72 }}>
// // // // //             {CLIENTS.map((c, i) => (
// // // // //               <Reveal key={i} delay={i * .015}><div className="client-chip">{c}</div></Reveal>
// // // // //             ))}
// // // // //           </div>
// // // // //           <div style={{ borderTop: "1.5px solid #c8e8eb", paddingTop: 64 }}>
// // // // //             <Reveal>
// // // // //               <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Parceiros</p>
// // // // //               <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Marcas que Representamos</h2>
// // // // //             </Reveal>
// // // // //             <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
// // // // //               {BRANDS.map((b, i) => (
// // // // //                 <Reveal key={i} delay={i * .04}>
// // // // //                   <div className="brand-card">
// // // // //                     <div style={{ fontSize: 13, fontWeight: 900, color: "#0a1c1e", marginBottom: 4 }}>{b.name}</div>
// // // // //                     <div style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".08em", textTransform: "uppercase" }}>{b.role}</div>
// // // // //                   </div>
// // // // //                 </Reveal>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── CTA BAND ── */}
// // // // //       <section style={{ background: "#095b66" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 80px" }}>
// // // // //           <Reveal>
// // // // //             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 36, flexWrap: "wrap" }}>
// // // // //               <div>
// // // // //                 <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 10 }}>Pronto para começar?</h2>
// // // // //                 <p style={{ color: "rgba(255,255,255,.65)", maxWidth: 440, lineHeight: 1.75, fontSize: 15 }}>Peça um orçamento sem compromisso. A nossa equipa técnica responde em 24 horas.</p>
// // // // //               </div>
// // // // //               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
// // // // //                 <a href="#contacto" className="btn-white">Solicitar Orçamento</a>
// // // // //                 <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer" className="btn-outline-w" style={{ gap: 8 }}>💬 WhatsApp</a>
// // // // //               </div>
// // // // //             </div>
// // // // //           </Reveal>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── CONTACT ── */}
// // // // //       <section id="contacto" style={{ background: "#fff", padding: "96px 0" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // //           <Reveal>
// // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Contacto</p>
// // // // //             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 56 }}>Fale Connosco</h2>
// // // // //           </Reveal>
// // // // //           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 72 }}>
// // // // //             <Reveal>
// // // // //               <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.8, marginBottom: 44 }}>Entre em contacto com o escritório mais próximo ou envie-nos uma mensagem e entraremos em contacto consigo brevemente.</p>
// // // // //               <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
// // // // //                 {[
// // // // //                   { flag: "🇦🇴", country: "Angola", info: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362 · (+244) 938 306 698\ngeral@multienergia.com.pt" },
// // // // //                   { flag: "🇵🇹", country: "Portugal", info: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909 · geral@multienergia.com.pt" },
// // // // //                   { flag: "🇸🇹", country: "São Tomé e Príncipe", info: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443 · geral@multienergia.com.pt" },
// // // // //                 ].map((c, i) => (
// // // // //                   <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
// // // // //                     <div style={{ width: 40, height: 40, borderRadius: 8, background: "#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.flag}</div>
// // // // //                     <div>
// // // // //                       <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 3, textTransform: "uppercase", letterSpacing: ".06em" }}>{c.country}</div>
// // // // //                       <div style={{ fontSize: 12.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{c.info}</div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //               <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer"
// // // // //                 style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 28, fontSize: 13, fontWeight: 700, color: "#095b66" }}>
// // // // //                 🌐 www.multienergia.com.pt
// // // // //               </a>
// // // // //             </Reveal>
// // // // //             <Reveal delay={.1}>
// // // // //               <form onSubmit={e => e.preventDefault()}
// // // // //                 style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 16, padding: "36px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
// // // // //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// // // // //                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Nome</span>
// // // // //                     <input className="input" placeholder="Nome completo" autoComplete="name"/>
// // // // //                   </label>
// // // // //                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Empresa</span>
// // // // //                     <input className="input" placeholder="Empresa" autoComplete="organization"/>
// // // // //                   </label>
// // // // //                 </div>
// // // // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>E-mail</span>
// // // // //                   <input className="input" type="email" placeholder="email@empresa.com" autoComplete="email"/>
// // // // //                 </label>
// // // // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Assunto</span>
// // // // //                   <select className="input" defaultValue="" style={{ appearance: "none", cursor: "pointer" }}>
// // // // //                     <option value="" disabled>Selecione o assunto</option>
// // // // //                     <option>Sistemas de Energia Solar</option>
// // // // //                     <option>EcoFlow / Armazenamento</option>
// // // // //                     <option>Quadros Elétricos BT</option>
// // // // //                     <option>Postos de Transformação MT</option>
// // // // //                     <option>UPS & Estabilizadores</option>
// // // // //                     <option>Mobilidade Elétrica</option>
// // // // //                     <option>Proteção Atmosférica (SPDA)</option>
// // // // //                     <option>Auditoria Energética</option>
// // // // //                     <option>Formação – Energy Academy</option>
// // // // //                     <option>Outro</option>
// // // // //                   </select>
// // // // //                 </label>
// // // // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Mensagem</span>
// // // // //                   <textarea className="input" placeholder="Descreva o seu projeto…"/>
// // // // //                 </label>
// // // // //                 <button type="submit" className="btn-teal" style={{ alignSelf: "flex-start", marginTop: 4 }}>
// // // // //                   Enviar Mensagem
// // // // //                   <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // // //                 </button>
// // // // //               </form>
// // // // //             </Reveal>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── FOOTER ── */}
// // // // //       <footer style={{ background: "#06161a", padding: "52px 80px 28px" }}>
// // // // //         <div style={{ maxWidth: 1280, margin: "0 auto" }}>
// // // // //           <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 44, marginBottom: 44 }}>
// // // // //             <div>
// // // // //               <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
// // // // //                 <div style={{ width: 32, height: 32, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center" }}>
// // // // //                   <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/></svg>
// // // // //                 </div>
// // // // //                 <span style={{ fontWeight: 900, fontSize: 15, color: "#fff" }}>Multi<span style={{ color: "#3ec8d4" }}>energia</span></span>
// // // // //               </div>
// // // // //               <p style={{ fontSize: 12.5, color: "#3a6a6e", lineHeight: 1.8, maxWidth: 240, marginBottom: 16 }}>Inovação tecnológica ao serviço da energia. Angola · Portugal · Cabo Verde · São Tomé.</p>
// // // // //               <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11.5, fontWeight: 600, color: "#3ec8d4" }}>www.multienergia.com.pt</a>
// // // // //             </div>
// // // // //             {[
// // // // //               { title: "Produtos", links: ["Sistemas Solares","EcoFlow PowerOcean","Quadros BT","Postos MT","UPS & Estabilizadores","Mobilidade Elétrica"] },
// // // // //               { title: "Serviços", links: ["Projeto & Engenharia","Instalação & Montagem","Auditoria Energética","Proteção Atmosférica","Manutenção","Energy Academy"] },
// // // // //               { title: "Empresa", links: ["Sobre Nós","Certificações","Clientes","Parceiros","Contacto"] },
// // // // //             ].map(col => (
// // // // //               <nav key={col.title}>
// // // // //                 <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#0a7a89", marginBottom: 16 }}>{col.title}</div>
// // // // //                 <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
// // // // //                   {col.links.map(l => <li key={l}><button className="footer-btn">{l}</button></li>)}
// // // // //                 </ul>
// // // // //               </nav>
// // // // //             ))}
// // // // //           </div>
// // // // //           <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
// // // // //             <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>© 2025 Multienergia. Todos os direitos reservados.</p>
// // // // //             <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>Alvará IRCOP nº 982/CCOP/IRCOP/SC/2025 · 5ª Classe</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </footer>
// // // // //     </div>
// // // // //   );
// // // // // }




// // // // // "use client";
// // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // import Link from "next/link";

// // // // // /* ─────────────────────────────────────────────
// // // // //    DATA
// // // // // ───────────────────────────────────────────── */
// // // // // const HERO_SLIDES = [
// // // // //   {
// // // // //     tag: "Eficiência · Transição · Inovação",
// // // // //     line1: "Energia que",
// // // // //     line2: "transforma",
// // // // //     line3: "Angola",
// // // // //     sub: "25 anos a fornecer soluções energéticas completas. Da geração ao consumo, do projeto à manutenção.",
// // // // //   },
// // // // //   {
// // // // //     tag: "Representante Oficial EcoFlow · Angola",
// // // // //     line1: "Independência",
// // // // //     line2: "energética",
// // // // //     line3: "total",
// // // // //     sub: "Sistemas solares residenciais e industriais, armazenamento e inversores híbridos.",
// // // // //   },
// // // // //   {
// // // // //     tag: "Fabricante Certificado · Legrand Partner",
// // // // //     line1: "Fabricamos",
// // // // //     line2: "o que outros",
// // // // //     line3: "apenas vendem",
// // // // //     sub: "Quadros elétricos BT fabricados em Luanda e Lisboa. Qualidade IEC 61439 garantida.",
// // // // //   },
// // // // // ];

// // // // // const PRODUCTS = [
// // // // //   {
// // // // //     id: "solar",
// // // // //     color: "#095b66",
// // // // //     light: "#e8f7f9",
// // // // //     name: "Sistemas de Energia Solar",
// // // // //     specs: ["+50 MW instalados","Residencial · Industrial · Utility","Autoconsumo · Carports · Centrais"],
// // // // //     brands: ["Huawei FusionSolar","SMA","Siemens","Nextracker"],
// // // // //     desc: "Dimensionamos e instalamos sistemas fotovoltaicos completos. Do painel ao inversor, da ligação à rede ao armazenamento em bateria.",
// // // // //   },
// // // // //   {
// // // // //     id: "ecoflow",
// // // // //     color: "#0a7a89",
// // // // //     light: "#e6f5f7",
// // // // //     name: "EcoFlow PowerOcean",
// // // // //     specs: ["5 kW a 29 kW","Até 45 kWh expansível","15 anos garantia · LFP"],
// // // // //     brands: ["EcoFlow"],
// // // // //     desc: "Inversor híbrido trifásico com armazenamento de energia expansível. Backup potente, instalação plug & play e monitorização remota.",
// // // // //   },
// // // // //   {
// // // // //     id: "quadros",
// // // // //     color: "#064e58",
// // // // //     light: "#e5f4f6",
// // // // //     name: "Quadros Elétricos BT",
// // // // //     specs: ["Até 6300 A · Forma 1–4","Fabricação própria em Luanda","Parceiro Legrand · IEC 61439"],
// // // // //     brands: ["Legrand"],
// // // // //     desc: "Fabricamos quadros elétricos de baixa tensão com unidades industriais próprias em Luanda e Lisboa. Soluções padrão e à medida.",
// // // // //   },
// // // // //   {
// // // // //     id: "ups",
// // // // //     color: "#095b66",
// // // // //     light: "#e8f7f9",
// // // // //     name: "UPS & Estabilizadores",
// // // // //     specs: ["Salicru até 800 KVA","Socomec MODULYS 200–4800 KVA","Online dupla conversão"],
// // // // //     brands: ["Salicru","Socomec"],
// // // // //     desc: "Energia crítica ininterrupta para data centers, hospitais, indústrias e telecomunicações. Proteção contra cortes, surtos e variações.",
// // // // //   },
// // // // //   {
// // // // //     id: "mt",
// // // // //     color: "#0a7a89",
// // // // //     light: "#e6f5f7",
// // // // //     name: "Postos de Transformação",
// // // // //     specs: ["Toshiba TCSU 10–30 kV","500 a 2000 KVA","Plug & play · IP66 · Pré-montado"],
// // // // //     brands: ["Toshiba T&D"],
// // // // //     desc: "Postos compactos pré-montados para ligação de média tensão. Instalação rápida, segurança máxima (Class AB) e resistência climática.",
// // // // //   },
// // // // //   {
// // // // //     id: "ve",
// // // // //     color: "#064e58",
// // // // //     light: "#e5f4f6",
// // // // //     name: "Mobilidade Elétrica",
// // // // //     specs: ["11 kW · 22 kW · 50 kW","Doméstico e via pública","Avaliação técnica incluída"],
// // // // //     brands: ["Huawei","Tesla","Circutor"],
// // // // //     desc: "Soluções completas para carregamento de veículos elétricos. Aconselhamento, instalação certificada e manutenção contínua.",
// // // // //   },
// // // // // ];

// // // // // const SERVICES = [
// // // // //   { title: "Projeto & Engenharia", short: "Dimensionamento técnico completo com esquemas unifilares e memoriais descritivos." },
// // // // //   { title: "Instalação & Montagem", short: "Equipa certificada para quadros, sistemas solares, SPDA e postos de transformação." },
// // // // //   { title: "Auditoria Energética", short: "Inspeção termográfica, análise de qualidade de energia e monitorização contínua." },
// // // // //   { title: "Proteção Atmosférica", short: "Sistemas SPDA completos Franklin France. Conformidade NA 33:2014 e normas internacionais." },
// // // // //   { title: "Manutenção Preventiva", short: "Planos periódicos para garantir continuidade operacional e longevidade dos equipamentos." },
// // // // //   { title: "Energy Academy", short: "Formação especializada em energia solar, UPS, SPDA e eletrotecnia. Certificação reconhecida." },
// // // // // ];

// // // // // const CLIENTS = [
// // // // //   "Sonangol","ETU Energias","Unitel","BFA","Fidelidade","MCA",
// // // // //   "TVCabo","Omatapalo","SIC Notícias","Multitel","Refriango","Arreiou",
// // // // //   "BancoBNI","Caixa Angola","Telepizza","InfraSat","Prodel","Azueira",
// // // // //   "Governo de Angola","Standard Bank","IBM","TotalEnergies","Jumbo",
// // // // //   "BancoBIC","CASAIS","ENDE","Axians","Sonangalp","Elecnor","Marlin",
// // // // // ];

// // // // // const BRANDS = [
// // // // //   { name: "Huawei FusionSolar", role: "Parceiro Solar" },
// // // // //   { name: "EcoFlow", role: "Rep. Oficial AO" },
// // // // //   { name: "Toshiba T&D", role: "Rep. Oficial" },
// // // // //   { name: "Franklin France", role: "Rep. Oficial SPDA" },
// // // // //   { name: "Legrand", role: "Parceiro Quadros" },
// // // // //   { name: "Salicru", role: "Rep. Oficial UPS" },
// // // // //   { name: "Socomec", role: "Rep. Oficial UPS" },
// // // // //   { name: "Siemens", role: "Parceiro" },
// // // // //   { name: "Schneider Electric", role: "Parceiro" },
// // // // //   { name: "SMA", role: "Parceiro Solar" },
// // // // //   { name: "Circutor", role: "Parceiro VE" },
// // // // //   { name: "Nextracker", role: "Parceiro Solar" },
// // // // // ];

// // // // // const PRESENCE = [
// // // // //   { name: "Angola · Luanda",     lon: 13.23,  lat: -8.84, main: true,  detail: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362" },
// // // // //   { name: "Portugal · Lisboa",   lon: -9.14,  lat: 38.72, main: true,  detail: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
// // // // //   { name: "Cabo Verde · Praia",  lon: -23.51, lat: 14.93, main: false, detail: "Presença comercial activa" },
// // // // //   { name: "São Tomé e Príncipe", lon:  6.61,  lat:  0.33, main: false, detail: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
// // // // // ];

// // // // // /* ─────────────────────────────────────────────
// // // // //    HOOKS
// // // // // ───────────────────────────────────────────── */
// // // // // function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
// // // // //   const ref = useRef<HTMLDivElement | null>(null);
// // // // //   const [vis, setVis] = useState(false);
// // // // //   useEffect(() => {
// // // // //     const el = ref.current;
// // // // //     if (!el) return;
// // // // //     const obs = new IntersectionObserver(([e]) => {
// // // // //       if (e.isIntersecting) { setVis(true); obs.disconnect(); }
// // // // //     }, { threshold });
// // // // //     obs.observe(el);
// // // // //     return () => obs.disconnect();
// // // // //   }, [threshold]);
// // // // //   return [ref, vis];
// // // // // }

// // // // // function Reveal({ children, delay = 0, style = {} }: {
// // // // //   children: React.ReactNode; delay?: number; style?: React.CSSProperties;
// // // // // }) {
// // // // //   const [ref, vis] = useInView();
// // // // //   return (
// // // // //     <div ref={ref as React.RefObject<HTMLDivElement>} style={{
// // // // //       opacity: vis ? 1 : 0,
// // // // //       transform: vis ? "none" : "translateY(22px)",
// // // // //       transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
// // // // //       ...style,
// // // // //     }}>
// // // // //       {children}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // /* ─────────────────────────────────────────────
// // // // //    WORLD MAP
// // // // //    ViewBox 1000 × 500. All paths computed from
// // // // //    real lon/lat via Web-Mercator:
// // // // //      x = (lon+180)/360 * 1000
// // // // //      y = 250 - 250/π * ln(tan(π/4 + lat*π/360))
// // // // // ───────────────────────────────────────────── */
// // // // // type PresencePoint = { name: string; lon: number; lat: number; main: boolean; detail: string };

// // // // // function merc(lon: number, lat: number): [number, number] {
// // // // //   const x = (lon + 180) / 360 * 1000;
// // // // //   const y = 250 - (250 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
// // // // //   return [+x.toFixed(1), +y.toFixed(1)];
// // // // // }

// // // // // /*
// // // // //   All paths below are mathematically generated from real lon/lat coordinates.
// // // // //   Projection: Web Mercator, viewBox 1000×500.
// // // // //   x = (lon+180)/360*1000
// // // // //   y = 250 − (250/π)·ln(tan(π/4 + lat·π/360))

// // // // //   Key y-values: lat80=56, lat60=145, lat40=189, lat20=222,
// // // // //                 lat0=250, lat-20=278, lat-40=311, lat-55=344
// // // // // */
// // // // // const LAND: Record<string, string> = {

// // // // //   /* ── North America ────────────────────────────────────────────── */
// // // // //   NORTH_AMERICA: `
// // // // //     M 111.1,145.2 L 138.9,119.7 L 155.6,111.9 L 166.7,93.8
// // // // //     L 183.3,88.6 L 200,88.6   L 222.2,93.8  L 244.4,88.6
// // // // //     L 261.1,88.6 L 277.8,88.6 L 291.7,93.8  L 305.6,98.7
// // // // //     L 316.7,88.6 L 319.4,107.7 L 316.7,119.7 L 322.2,145.2
// // // // //     L 316.7,162.9 L 311.1,158.1 L 305.6,186.5 L 300,192.9
// // // // //     L 291.7,198  L 286.1,210   L 277.8,214.1 L 263.9,218.7
// // // // //     L 250,221.6  L 230.6,214.1 L 208.3,214.1 L 194.4,217.2
// // // // //     L 175,202.2  L 161.1,194.6 L 155.6,189.3
// // // // //     L 158.3,177.9 L 155.6,171.7 L 138.9,160.5
// // // // //     L 125,150.6  L 108.3,145.2 Z`,

// // // // //   /* ── Alaska ───────────────────────────────────────────────────── */
// // // // //   ALASKA: `
// // // // //     M 0,148   L 16.7,139.5 L 27.8,130.1 L 33.3,119.7
// // // // //     L 50,119.7 L 66.7,130.1 L 77.8,139.5 L 88.9,139.5
// // // // //     L 100,139.5 L 108.3,145.2 L 100,150.6 L 88.9,150.6
// // // // //     L 77.8,155.7 L 61.1,158.1 L 44.4,158.1 L 27.8,155.7
// // // // //     L 11.1,152 Z`,

// // // // //   /* ── Greenland ────────────────────────────────────────────────── */
// // // // //   GREENLAND: `
// // // // //     M 355.6,83.1 L 375,56.1   L 400,27.6  L 427.8,22.8
// // // // //     L 452.8,27.6 L 466.7,56.1 L 461.1,83.1 L 450,111.9
// // // // //     L 433.3,130.1 L 416.7,145.2 L 400,139.5
// // // // //     L 383.3,130.1 L 372.2,111.9 Z`,

// // // // //   /* ── Central America + Caribbean ─────────────────────────────── */
// // // // //   C_AMERICA: `
// // // // //     M 230.6,214.1 L 244.4,210 L 255.6,214.1
// // // // //     L 263.9,224.6 L 272.2,236 L 277.8,250
// // // // //     L 263.9,247.2 L 255.6,241.7 L 247.2,233.2
// // // // //     L 238.9,224.6 Z`,

// // // // //   /* ── South America ────────────────────────────────────────────── */
// // // // //   SOUTH_AMERICA: `
// // // // //     M 277.8,250   L 288.9,247.2 L 300,247.2  L 316.7,243
// // // // //     L 333.3,241.7 L 347.2,241.7 L 361.1,247.2
// // // // //     L 375,252.8  L 388.9,257   L 402.8,257
// // // // //     L 405.6,262.6 L 397.2,271.1 L 388.9,279.8
// // // // //     L 377.8,285.9 L 366.7,290.5 L 355.6,300.3
// // // // //     L 344.4,307.1 L 330.6,316.3 L 319.4,330.4
// // // // //     L 316.7,344.3 L 311.1,344.3 L 305.6,336.5
// // // // //     L 297.2,323.7 L 291.7,310.7 L 291.7,297
// // // // //     L 288.9,284.4 L 280.6,271.1 L 275,257 Z`,

// // // // //   /* ── Europe (main body) ───────────────────────────────────────── */
// // // // //   EUROPE: `
// // // // //     M 472.2,196.3 L 477.8,181.8 L 486.1,173.8
// // // // //     L 494.4,174.8 L 495.8,182.8 L 508.3,183
// // // // //     L 516.7,182.4 L 525,180.8   L 536.1,179.9
// // // // //     L 541.7,181.8 L 550,181.8   L 558.3,179.9
// // // // //     L 566.7,179.9 L 575,181.8   L 583.3,181.8
// // // // //     L 591.7,169.6 L 588.9,165.2 L 575,159.4
// // // // //     L 561.1,158.1 L 547.2,158.1 L 536.1,159.4
// // // // //     L 527.8,151.9 L 513.9,150.6 L 508.3,158.1
// // // // //     L 502.8,165.2 L 497.2,168.5 L 491.7,173.8
// // // // //     L 486.1,173.8 L 477.8,181.8 Z
// // // // //     M 583.3,181.8 L 591.7,181.8 L 600,185.6
// // // // //     L 602.8,192.9 L 597.2,198   L 586.1,196.3
// // // // //     L 577.8,196.3 L 575,190.5 Z`,

// // // // //   /* ── Iberian Peninsula ────────────────────────────────────────── */
// // // // //   IBERIA: `
// // // // //     M 472.2,196.3 L 477.8,181.8 L 486.1,173.8
// // // // //     L 491.7,173.8 L 495.8,182.8 L 508.3,183
// // // // //     L 509.4,186   L 502.8,188.1 L 500.6,192.9
// // // // //     L 497.2,195   L 486.1,197   L 481.9,195.2
// // // // //     L 475.6,195   L 473.9,192.5 Z`,

// // // // //   /* ── UK & Ireland ─────────────────────────────────────────────── */
// // // // //   UK: `M 477.8,162.9 L 486.1,158.1 L 497.2,158.1
// // // // //        L 502.8,162.9 L 497.2,167.4 L 488.9,169.6
// // // // //        L 480.6,167.4 Z
// // // // //        M 469.4,158.1 L 477.8,152 L 483.3,155.7
// // // // //        L 480.6,165.2 L 472.2,165.2 Z`,

// // // // //   /* ── Iceland ──────────────────────────────────────────────────── */
// // // // //   ICELAND: `M 427.8,126.8 L 438.9,120.6 L 455.6,119.7
// // // // //              L 461.1,124.1 L 452.8,130.1 L 438.9,133.3 Z`,

// // // // //   /* ── Scandinavia ──────────────────────────────────────────────── */
// // // // //   SCANDINAVIA: `
// // // // //     M 513.9,150.6 L 527.8,151.9 L 536.1,158.1
// // // // //     L 543.1,155.7 L 547.2,152   L 552.8,149.3
// // // // //     L 558.3,147.9 L 566.7,146.6 L 572.2,142.4
// // // // //     L 577.8,128.5 L 580.6,117.8 L 575,109.8
// // // // //     L 566.7,107.7 L 555.6,107.7 L 550,115.9
// // // // //     L 544.4,117.8 L 538.9,128.5 L 525,133.3
// // // // //     L 519.4,133.3 L 513.9,139.5 Z`,

// // // // //   /* ── Russia (European + Siberian) ────────────────────────────── */
// // // // //   RUSSIA: `
// // // // //     M 544.4,117.8 L 558.3,107.7 L 583.3,98.7
// // // // //     L 611.1,93.8  L 638.9,93.8  L 666.7,93.8
// // // // //     L 694.4,86.1  L 722.2,83.1  L 750,83.1
// // // // //     L 777.8,86.1  L 805.6,93.8  L 833.3,98.7
// // // // //     L 861.1,98.7  L 888.9,111.9 L 916.7,119.7
// // // // //     L 944.4,119.7 L 966.7,107.7 L 980.6,98.7
// // // // //     L 1000,98.7   L 1000,145.2
// // // // //     L 972.2,158.1 L 944.4,158.1 L 916.7,145.2
// // // // //     L 900,165.2   L 888.9,169.6 L 875,177.9
// // // // //     L 861.1,185.6 L 847.2,185.6 L 833.3,185.6
// // // // //     L 819.4,177.9 L 805.6,175.9 L 791.7,175.9
// // // // //     L 777.8,175.9 L 763.9,171.7 L 750,169.6
// // // // //     L 736.1,165.2 L 722.2,165.2 L 708.3,158.1
// // // // //     L 694.4,158.1 L 680.6,165.2 L 666.7,158.1
// // // // //     L 652.8,152   L 638.9,145.2 L 625,145.2
// // // // //     L 611.1,139.5 L 597.2,139.5 L 588.9,133.3
// // // // //     L 577.8,119.7 L 566.7,117.8 Z`,

// // // // //   /* ── Central Asia / Turkey / Caucasus ───────────────────────── */
// // // // //   C_ASIA: `
// // // // //     M 538.9,181.8 L 555.6,179.9 L 566.7,179.9
// // // // //     L 575,181.8   L 586.1,177.9 L 600,185.6
// // // // //     L 616.7,185.6 L 630.6,181.8 L 644.4,181.8
// // // // //     L 658.3,185.6 L 666.7,185.6 L 680.6,181.8
// // // // //     L 694.4,175.9 L 708.3,172.2 L 716.7,175.9
// // // // //     L 722.2,185.6 L 722.2,196.3 L 713.9,203
// // // // //     L 700,206.3   L 686.1,206.3 L 672.2,203
// // // // //     L 655.6,206.3 L 638.9,206.3 L 622.2,206.3
// // // // //     L 611.1,200   L 600,192.9   L 591.7,181.8
// // // // //     L 577.8,181.8 L 566.7,185.6 L 552.8,185.6
// // // // //     L 541.7,185.6 Z`,

// // // // //   /* ── Middle East / Arabian Peninsula ────────────────────────── */
// // // // //   MIDDLE_EAST: `
// // // // //     M 563.9,192.9 L 577.8,181.8 L 586.1,181.8
// // // // //     L 600,185.6   L 611.1,185.6 L 622.2,185.6
// // // // //     L 636.1,192.9 L 650,203     L 658.3,212.6
// // // // //     L 663.9,218.7 L 655.6,228.9 L 644.4,234.6
// // // // //     L 627.8,238.9 L 616.7,238.9 L 608.3,232.2
// // // // //     L 597.2,224.6 L 591.7,215.6 L 577.8,212.6
// // // // //     L 566.7,206.3 L 558.3,196.3 Z`,

// // // // //   /* ── Africa ───────────────────────────────────────────────────── */
// // // // //   AFRICA: `
// // // // //     M 447.2,194.6 L 461.1,190.6 L 475,190.6
// // // // //     L 488.9,192.9 L 502.8,194.6 L 516.7,194.6
// // // // //     L 530.6,194.6 L 544.4,194.6 L 558.3,196.3
// // // // //     L 572.2,203   L 583.3,209.5 L 594.4,209.5
// // // // //     L 608.3,215.6 L 616.7,224.6 L 622.2,234.6
// // // // //     L 625,241.7   L 619.4,250   L 613.9,258.3
// // // // //     L 611.1,265.4 L 605.6,274   L 600,285.9
// // // // //     L 594.4,296.3 L 588.9,302   L 575,305.4
// // // // //     L 558.3,302   L 547.2,298.6 L 541.7,285.9
// // // // //     L 536.1,271.1 L 530.6,258.3 L 522.2,247.2
// // // // //     L 513.9,244.4 L 505.6,244.4 L 494.4,244.4
// // // // //     L 483.3,244.4 L 472.2,244.4 L 461.1,241.7
// // // // //     L 450,234.6   L 444.4,227.5 L 444.4,218.7
// // // // //     L 447.2,207   Z
// // // // //     M 444.4,227.5 L 436.1,230.4 L 425,238.9
// // // // //     L 422.2,250   L 427.8,259.3 L 438.9,258.3
// // // // //     L 447.2,250   L 447.2,238.9 Z`,

// // // // //   /* ── Madagascar ───────────────────────────────────────────────── */
// // // // //   MADAGASCAR: `
// // // // //     M 616.7,262.6 L 622.2,262.6 L 633.3,265.4
// // // // //     L 641.7,268.2 L 641.7,282.8 L 633.3,291.7
// // // // //     L 622.2,291.7 L 613.9,282.8 L 611.1,271.1 Z`,

// // // // //   /* ── India ────────────────────────────────────────────────────── */
// // // // //   INDIA: `
// // // // //     M 663.9,196.3 L 677.8,189.3 L 688.9,189.3
// // // // //     L 700,192.9   L 711.1,200   L 719.4,199.7
// // // // //     L 730.6,209.5 L 736.1,218.7 L 747.2,221.6
// // // // //     L 750,228.9   L 744.4,236   L 733.3,241.7
// // // // //     L 722.2,244.4 L 713.9,241.7 L 705.6,230.4
// // // // //     L 694.4,221.6 L 688.9,224.6 L 683.3,221.6
// // // // //     L 672.2,218.7 L 663.9,209.5 Z`,

// // // // //   /* ── China / East Asia ────────────────────────────────────────── */
// // // // //   CHINA: `
// // // // //     M 694.4,175.9 L 708.3,172.2 L 716.7,175.9
// // // // //     L 722.2,185.6 L 736.1,181.8 L 750,175.9
// // // // //     L 763.9,171.7 L 777.8,168.5 L 791.7,165.2
// // // // //     L 805.6,162.9 L 819.4,162.9 L 833.3,162.9
// // // // //     L 850,169.6   L 861.1,181.8 L 858.3,192.9
// // // // //     L 852.8,196.3 L 847.2,192.9 L 833.3,192.9
// // // // //     L 819.4,196.3 L 808.3,209.5 L 800,221.6
// // // // //     L 791.7,221.6 L 780.6,218.7 L 769.4,215.6
// // // // //     L 755.6,221.6 L 747.2,221.6 L 736.1,218.7
// // // // //     L 730.6,209.5 L 719.4,199.7 L 711.1,200
// // // // //     L 700,192.9   Z`,

// // // // //   /* ── SE Asia (Indochina + Malaysia) ──────────────────────────── */
// // // // //   SE_ASIA: `
// // // // //     M 777.8,218.7 L 791.7,221.6 L 800,218.7
// // // // //     L 808.3,209.5 L 819.4,209.5 L 833.3,209.5
// // // // //     L 844.4,218.7 L 838.9,228.9 L 827.8,234.6
// // // // //     L 816.7,234.6 L 808.3,241.7 L 800,250
// // // // //     L 808.3,258.3 L 816.7,258.3 L 822.2,252.8
// // // // //     L 833.3,252.8 L 833.3,263.9 L 816.7,263.9
// // // // //     L 808.3,258.3 L 797.2,255.6 L 786.1,250
// // // // //     L 780.6,244.4 L 772.2,238.9 L 769.4,228.9
// // // // //     L 769.4,221.6 Z`,

// // // // //   /* ── Japan ────────────────────────────────────────────────────── */
// // // // //   JAPAN: `
// // // // //     M 855.6,192.9 L 861.1,185.6 L 872.2,181.8
// // // // //     L 883.3,181.8 L 886.1,185.6 L 880.6,192.9
// // // // //     L 872.2,196.3 L 861.1,199.7 Z
// // // // //     M 877.8,199.7 L 883.3,192.9 L 894.4,189.3
// // // // //     L 900,192.9   L 897.2,203   L 886.1,206.3
// // // // //     L 877.8,203 Z`,

// // // // //   /* ── Korea ────────────────────────────────────────────────────── */
// // // // //   KOREA: `M 836.1,192.9 L 847.2,189.3 L 855.6,192.9
// // // // //            L 855.6,203   L 847.2,206.3 L 836.1,203 Z`,

// // // // //   /* ── Australia ────────────────────────────────────────────────── */
// // // // //   AUSTRALIA: `
// // // // //     M 808.3,278.4 L 819.4,272.5 L 833.3,268.2
// // // // //     L 850,265.4   L 866.7,263.9 L 880.6,265.4
// // // // //     L 894.4,269.6 L 908.3,272.5 L 916.7,281.3
// // // // //     L 925,290.5   L 925,303.7   L 916.7,311.1
// // // // //     L 905.6,311.1 L 894.4,311.1 L 883.3,307.7
// // // // //     L 869.4,303.7 L 855.6,307.7 L 841.7,311.1
// // // // //     L 827.8,307.7 L 816.7,300.3 L 808.3,290.5 Z
// // // // //     M 916.7,281.3 L 930.6,275.4 L 941.7,281.3
// // // // //     L 938.9,293.7 L 925,296.3 Z`,

// // // // //   /* ── New Zealand ─────────────────────────────────────────────── */
// // // // //   NEW_ZEALAND: `
// // // // //     M 966.7,318.2 L 977.8,311.1 L 988.9,315.4
// // // // //     L 988.9,326   L 977.8,329   L 966.7,322.1 Z
// // // // //     M 972.2,329   L 983.3,318.2 L 994.4,322.1
// // // // //     L 994.4,337   L 983.3,341   L 972.2,334 Z`,

// // // // //   /* ── Cabo Verde (island cluster, accent) ─────────────────────── */
// // // // //   CAPE_VERDE: `M 424,236 L 432,229 L 442,232 L 439,241 L 428,244 Z`,

// // // // //   /* ── São Tomé (island, accent) ───────────────────────────────── */
// // // // //   SAO_TOME: `M 516,252 L 523,245 L 530,248 L 528,257 L 519,260 Z`,
// // // // // };

// // // // // const ACCENT = new Set(["AFRICA", "IBERIA", "CAPE_VERDE", "SAO_TOME"]);

// // // // // function WorldMap({ points, activePoint, onHover }: {
// // // // //   points: PresencePoint[];
// // // // //   activePoint: number | null;
// // // // //   onHover: (i: number) => void;
// // // // // }) {
// // // // //   const dots = points.map(p => {
// // // // //     const [cx, cy] = merc(p.lon, p.lat);
// // // // //     return { ...p, cx, cy };
// // // // //   });

// // // // //   /* reference latitudes */
// // // // //   const yEq   = merc(0,   0)[1];
// // // // //   const yCanc = merc(0,  23.5)[1];
// // // // //   const yCap  = merc(0, -23.5)[1];

// // // // //   return (
// // // // //     <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
// // // // //       <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet"
// // // // //         style={{ width: "100%", height: "auto", display: "block" }}>

// // // // //         <rect width="1000" height="500" fill="#dff0f3" rx="8"/>

// // // // //         {/* Latitude reference lines */}
// // // // //         <line x1="0" y1={yEq}   x2="1000" y2={yEq}   stroke="#b8dfe8" strokeWidth="0.8" strokeDasharray="6 8"/>
// // // // //         <line x1="0" y1={yCanc} x2="1000" y2={yCanc} stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10"/>
// // // // //         <line x1="0" y1={yCap}  x2="1000" y2={yCap}  stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10"/>

// // // // //         {/* Continents */}
// // // // //         {Object.entries(LAND).map(([k, d]) => (
// // // // //           <path key={k} d={d}
// // // // //             fill={ACCENT.has(k) ? "#8ecdd6" : "#b2d8e0"}
// // // // //             stroke="#7ab8c0" strokeWidth="0.7"
// // // // //             strokeLinejoin="round" strokeLinecap="round"
// // // // //           />
// // // // //         ))}

// // // // //         {/* Connection line between the 2 main offices */}
// // // // //         {(() => { const m = dots.filter(p => p.main); return m.length >= 2 ? <line x1={m[0].cx} y1={m[0].cy} x2={m[1].cx} y2={m[1].cy} stroke="#095b66" strokeWidth="1.3" strokeDasharray="5 5" opacity="0.55"/> : null; })()}

// // // // //         {/* Dots */}
// // // // //         {dots.map((p, i) => (
// // // // //           <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
// // // // //             {p.main && <>
// // // // //               <circle cx={p.cx} cy={p.cy} r="6" fill="#095b66" opacity="0.15">
// // // // //                 <animate attributeName="r" values="6;20;6" dur="3s" repeatCount="indefinite"/>
// // // // //                 <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite"/>
// // // // //               </circle>
// // // // //               <circle cx={p.cx} cy={p.cy} r="10" fill="#095b66" opacity="0.1"/>
// // // // //             </>}
// // // // //             <circle cx={p.cx} cy={p.cy}
// // // // //               r={activePoint === i ? 9 : 6}
// // // // //               fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#5cb8c0")}
// // // // //               stroke="#fff" strokeWidth="2.5"
// // // // //               style={{ transition: "r .2s, fill .2s" }}
// // // // //             />
// // // // //           </g>
// // // // //         ))}
// // // // //       </svg>

// // // // //       {activePoint !== null && (() => {
// // // // //         const d = dots[activePoint];
// // // // //         const px = (d.cx / 1000) * 100;
// // // // //         const py = (d.cy / 500) * 100;
// // // // //         return (
// // // // //           <div style={{
// // // // //             position: "absolute", left: `${px}%`, top: `${py}%`,
// // // // //             transform: `translate(${px > 62 ? "-108%" : "14px"}, ${py > 58 ? "-118%" : "14px"})`,
// // // // //             background: "#fff", border: "1.5px solid #b8dde2", borderRadius: 10,
// // // // //             padding: "12px 16px", minWidth: 222,
// // // // //             boxShadow: "0 10px 36px rgba(9,91,102,.2)", zIndex: 10, pointerEvents: "none",
// // // // //           }}>
// // // // //             <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 5 }}>{d.name}</div>
// // // // //             <div style={{ fontSize: 11.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{d.detail}</div>
// // // // //           </div>
// // // // //         );
// // // // //       })()}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // /* ─────────────────────────────────────────────
// // // // //    SIMULADOR — tipos e motor de cálculo
// // // // // ───────────────────────────────────────────── */
// // // // // type TipoProjeto = "residencial" | "empresa" | "industrial" | "agricola" | "outro";
// // // // // type SimStep = 1 | 2 | 3;

// // // // // interface SimForm {
// // // // //   tipo: TipoProjeto | "";
// // // // //   area: string;
// // // // //   consumo: string;
// // // // //   autonomia: string;
// // // // //   trifasico: boolean;
// // // // //   gerador: boolean;
// // // // //   spda: boolean;
// // // // //   ve: boolean;
// // // // //   solar: boolean;
// // // // //   ups: boolean;
// // // // //   localizacao: string;
// // // // // }

// // // // // interface MatItem {
// // // // //   ref: string;
// // // // //   nome: string;
// // // // //   marca: string;
// // // // //   qtd: number;
// // // // //   unidade: string;
// // // // //   cat: string;
// // // // //   obs?: string;
// // // // // }

// // // // // const TIPOS_PROJETO = [
// // // // //   { id: "residencial" as TipoProjeto, label: "Residencial", sub: "Moradia / Apartamento",
// // // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M4 14L16 4l12 10v14H20v-9h-8v9H4V14z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg> },
// // // // //   { id: "empresa" as TipoProjeto, label: "Empresa / Escritório", sub: "Comercial · Serviços",
// // // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><rect x="4" y="6" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M10 28V20h5v8M17 28V20h5v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><rect x="9" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="19" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="14" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/></svg> },
// // // // //   { id: "industrial" as TipoProjeto, label: "Industrial", sub: "Fábrica · Armazém",
// // // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M2 28V14l8-6v6l8-6v6l8-6v20H2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><rect x="6" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="14" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="22" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><path d="M10 6V2M18 4V2M26 6V2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
// // // // //   { id: "agricola" as TipoProjeto, label: "Agrícola / Rural", sub: "Bombeamento · Campo",
// // // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="14" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M16 7V3M16 21v-4M9 14H5M27 14h-4M11 9L8 6M24 6l-3 3M11 19l-3 3M24 22l-3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="16" cy="14" r="2.5" fill="currentColor" opacity=".4"/><path d="M8 28h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
// // // // //   { id: "outro" as TipoProjeto, label: "Outro / Misto", sub: "Projecto personalizado",
// // // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8"/><path d="M16 10v2M16 20v2M10 16h2M20 16h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="3" fill="currentColor" opacity=".45"/></svg> },
// // // // // ];

// // // // // const CAT_CONFIG: Record<string, { cor: string; fundo: string }> = {
// // // // //   "Quadros BT":       { cor: "#064e58", fundo: "#e5f4f6" },
// // // // //   "Protecção":        { cor: "#095b66", fundo: "#e8f7f9" },
// // // // //   "Cablagem":         { cor: "#0a7a89", fundo: "#e6f5f7" },
// // // // //   "Infraestrutura":   { cor: "#095b66", fundo: "#f0f9fa" },
// // // // //   "Iluminação":       { cor: "#064e58", fundo: "#e5f4f6" },
// // // // //   "Tomadas/Acabam.":  { cor: "#095b66", fundo: "#e8f7f9" },
// // // // //   "Solar":            { cor: "#7a5200", fundo: "#fff7e0" },
// // // // //   "Armazenamento":    { cor: "#7a5200", fundo: "#fff3cc" },
// // // // //   "UPS":              { cor: "#095b66", fundo: "#e8f7f9" },
// // // // //   "Média Tensão":     { cor: "#7a0000", fundo: "#fce8e8" },
// // // // //   "SPDA":             { cor: "#8a4200", fundo: "#fff0e0" },
// // // // //   "Mobilidade VE":    { cor: "#1a3a8f", fundo: "#e6eeff" },
// // // // //   "Backup Gerador":   { cor: "#3a2a10", fundo: "#f0ebe0" },
// // // // // };

// // // // // function calcSimulacao(f: SimForm): MatItem[] {
// // // // //   if (!f.tipo || !f.consumo || !f.area) return [];
// // // // //   const kwh  = Math.max(1, parseFloat(f.consumo) || 10);
// // // // //   const m2   = Math.max(10, parseFloat(f.area)   || 100);
// // // // //   const aut  = parseInt(f.autonomia) || 1;
// // // // //   const ind  = f.tipo === "industrial";
// // // // //   const res  = f.tipo === "residencial";
// // // // //   const agr  = f.tipo === "agricola";
// // // // //   const mats: MatItem[] = [];

// // // // //   /* ── QUADRO GERAL ── */
// // // // //   const ampQG = kwh > 300 ? 630 : kwh > 80 ? 250 : kwh > 30 ? 125 : kwh > 15 ? 100 : 63;
// // // // //   mats.push({ cat: "Quadros BT", ref: "QGD-BT",     nome: `Quadro Geral Distribuição BT ${ampQG}A`,         marca: "Legrand / Fabricação Própria", qtd: 1,  unidade: "un", obs: f.trifasico ? "Trifásico 3×400V" : "Monofásico 230V · IEC 61439" });
// // // // //   if (!res && kwh > 20) mats.push({ cat: "Quadros BT", ref: "QS-ZONA",  nome: "Quadro Secundário de Zona",                      marca: "Legrand",                     qtd: Math.ceil(m2 / 400), unidade: "un", obs: "Distribuição por zonas / pisos" });

// // // // //   /* ── PROTECÇÃO ── */
// // // // //   const nZonas = res ? Math.ceil(m2 / 20) : ind ? Math.ceil(m2 / 40) : Math.ceil(m2 / 25);
// // // // //   mats.push({ cat: "Protecção", ref: "DIS-16A",  nome: "Disjuntor Magnetotérmico 16A unipolar",          marca: "Legrand",  qtd: Math.max(2, Math.ceil(nZonas * .55)), unidade: "un" });
// // // // //   mats.push({ cat: "Protecção", ref: "DIS-32A",  nome: "Disjuntor Magnetotérmico 32A unipolar",          marca: "Legrand",  qtd: Math.max(1, Math.ceil(nZonas * .35)), unidade: "un" });
// // // // //   if (ind || f.trifasico) mats.push({ cat: "Protecção", ref: "DIS-TRI-63A", nome: "Disjuntor Trifásico 63A",               marca: "Legrand",  qtd: Math.max(1, Math.ceil(nZonas * .15)), unidade: "un", obs: "Circuitos de força / motores" });
// // // // //   mats.push({ cat: "Protecção", ref: "DDI-30mA", nome: "Interruptor Diferencial 30mA 2P",                marca: "Legrand",  qtd: Math.ceil(nZonas / 4), unidade: "un" });
// // // // //   if (!res) mats.push({ cat: "Protecção", ref: "DDI-300mA", nome: "Interruptor Diferencial 300mA 4P",            marca: "Legrand",  qtd: Math.ceil(nZonas / 8), unidade: "un", obs: "Protecção geral circuitos força" });
// // // // //   mats.push({ cat: "Protecção", ref: "SURTO-T2", nome: "Descarregador Sobretensões Tipo 2",              marca: "Legrand",  qtd: 1, unidade: "un", obs: "Protecção QGD principal" });

// // // // //   /* ── CABLAGEM ── */
// // // // //   const fCab = ind ? 1.1 : res ? 0.85 : 1.0;
// // // // //   mats.push({ cat: "Cablagem", ref: "CAB-2.5",  nome: "Cabo H07V-K 2,5mm² (anel/tomadas)",             marca: "Nexans",   qtd: Math.round(m2 * 1.6 * fCab), unidade: "m",  obs: "Circuitos iluminação e tomadas" });
// // // // //   mats.push({ cat: "Cablagem", ref: "CAB-4",    nome: "Cabo H07V-K 4mm² (circuitos potência)",         marca: "Nexans",   qtd: Math.round(m2 * 0.7 * fCab), unidade: "m" });
// // // // //   mats.push({ cat: "Cablagem", ref: "CAB-16",   nome: "Cabo H07V-K 16mm² (alimentação principal)",     marca: "Nexans",   qtd: Math.round(m2 * 0.4 * fCab), unidade: "m" });
// // // // //   if (ind) mats.push({ cat: "Cablagem", ref: "CAB-35",  nome: "Cabo H07V-K 35mm² (acometimento BT)",    marca: "Nexans",   qtd: Math.round(m2 * 0.15), unidade: "m", obs: "Ligação QGBT / transformador" });

// // // // //   /* ── INFRAESTRUTURA ── */
// // // // //   mats.push({ cat: "Infraestrutura", ref: "CALHA-40",   nome: "Calha Técnica PVC 40×40mm",              marca: "Legrand",  qtd: Math.ceil(m2 * 0.45), unidade: "m" });
// // // // //   if (!res) mats.push({ cat: "Infraestrutura", ref: "CALHA-100",  nome: "Calha Técnica PVC 100×60mm (corredor técnico)", marca: "Legrand", qtd: Math.ceil(m2 * 0.12), unidade: "m" });
// // // // //   mats.push({ cat: "Infraestrutura", ref: "CORR-20",    nome: "Tubo Corrugado Flexível Ø20mm",          marca: "Legrand",  qtd: Math.round(m2 * 0.9), unidade: "m" });
// // // // //   if (ind) mats.push({ cat: "Infraestrutura", ref: "BANDEJA-100", nome: "Bandeja Portacabos Aço 100mm",  marca: "Legrand",  qtd: Math.ceil(m2 * 0.08), unidade: "m", obs: "Distribuição aérea industrial" });
// // // // //   mats.push({ cat: "Infraestrutura", ref: "CAIXA-ENT",  nome: "Caixa de Encastrar 2-módulos",           marca: "Legrand",  qtd: Math.ceil(m2 / (res ? 6 : 8)), unidade: "un" });

// // // // //   /* ── ILUMINAÇÃO ── */
// // // // //   const lux   = ind ? 200 : res ? 100 : 150;
// // // // //   const wLum  = ind ? 150 : res ? 18 : 36;
// // // // //   const nLum  = Math.ceil((m2 * lux) / (wLum * 100));
// // // // //   const tipo  = ind ? "Armadura LED Industrial" : res ? "Painel LED Encastrado" : "Armadura LED Slim";
// // // // //   const ip    = ind ? "IP65" : "IP44";
// // // // //   mats.push({ cat: "Iluminação", ref: `LED-${wLum}W`, nome: `${tipo} ${wLum}W ≥130lm/W`,  marca: "Legrand / Philips", qtd: nLum, unidade: "un", obs: `${ip} · Eficiência classe A+` });
// // // // //   mats.push({ cat: "Iluminação", ref: "BLQ-EMG-8W",   nome: "Bloco Autónomo Emergência 8W 3h", marca: "Legrand", qtd: Math.max(2, Math.ceil(nLum / 6)), unidade: "un", obs: "Sinalização saídas emergência" });

// // // // //   /* ── TOMADAS / ACABAMENTOS ── */
// // // // //   const nTom = Math.ceil(m2 / (res ? 7 : 10));
// // // // //   mats.push({ cat: "Tomadas/Acabam.", ref: "TOM-16A", nome: res ? "Tomada Dupla Schuko 16A com terra" : "Tomada Industrial IP44 16A", marca: "Legrand", qtd: nTom, unidade: "un" });
// // // // //   if (!res) mats.push({ cat: "Tomadas/Acabam.", ref: "TOM-32A-IND", nome: "Tomada Industrial IP44 32A 3P+N+T", marca: "Legrand", qtd: Math.ceil(m2 / 60), unidade: "un", obs: "Força motriz / equipamentos" });

// // // // //   /* ── SOLAR ── */
// // // // //   if (f.solar) {
// // // // //     const hpico  = agr ? 5.5 : 5.0;               // horas pico solar Angola/Portugal
// // // // //     const kwp    = Math.ceil(kwh / hpico * 1.15);  // 15% oversizing
// // // // //     const nPain  = Math.ceil((kwp * 1000) / 580);
// // // // //     const pInv   = kwp <= 5 ? 5 : kwp <= 15 ? 15 : kwp <= 30 ? 30 : kwp <= 60 ? 60 : 100;
// // // // //     mats.push({ cat: "Solar", ref: "PV-580W",     nome: "Painel Solar Mono Half-Cut 580Wp",                  marca: "Huawei FusionSolar", qtd: nPain,             unidade: "un", obs: `Total: ${(nPain * 0.58).toFixed(1)} kWp · Eficiência ≥21,5%` });
// // // // //     mats.push({ cat: "Solar", ref: `INV-${pInv}K`, nome: `Inversor Híbrido SUN2000-${pInv}KTL`,             marca: "Huawei",            qtd: 1,                 unidade: "un", obs: "MPPT duplo · monitorização remota · WiFi" });
// // // // //     mats.push({ cat: "Solar", ref: "CAB-SOL-4",   nome: "Cabo Solar PV H1Z2Z2-K 4mm²",                     marca: "Prysmian",          qtd: nPain * 14,        unidade: "m" });
// // // // //     mats.push({ cat: "Solar", ref: "ESTR-COBERT", nome: "Estrutura Fixação Alumínio em Cobertura",          marca: "K2 Systems",        qtd: Math.ceil(nPain / 2), unidade: "kit", obs: "Inclinação ajustável 10–35°" });
// // // // //     mats.push({ cat: "Solar", ref: "CON-MC4",     nome: "Conector MC4 (par macho+fêmea)",                  marca: "Stäubli",           qtd: nPain * 2,         unidade: "par" });
// // // // //     mats.push({ cat: "Solar", ref: "SURTO-PV",    nome: "Protecção Sobretensão DC Tipo 2",                 marca: "Legrand",           qtd: 1,                 unidade: "un", obs: "Protecção string box" });
// // // // //     /* Armazenamento */
// // // // //     if (aut > 0) {
// // // // //       const kwhBat = Math.ceil(kwh * aut * 1.25);
// // // // //       const nMod   = Math.ceil(kwhBat / 5);
// // // // //       mats.push({ cat: "Armazenamento", ref: "BAT-LFP-5K", nome: "Módulo Bateria LFP 5kWh PowerOcean",       marca: "EcoFlow",           qtd: nMod,              unidade: "un", obs: `${kwhBat} kWh total · ${aut}d autonomia · 15 anos garantia` });
// // // // //     }
// // // // //   }

// // // // //   /* ── UPS ── */
// // // // //   if (f.ups) {
// // // // //     const kva = res ? 3 : ind ? (kwh > 200 ? 200 : 80) : 20;
// // // // //     const fab = kva > 40 ? "Socomec MODULYS" : "Salicru SLC TWIN RT";
// // // // //     mats.push({ cat: "UPS", ref: `UPS-${kva}KVA`, nome: `UPS Online Dupla Conversão ${kva} KVA`, marca: fab, qtd: 1, unidade: "un", obs: "10 min autonomia interna · extensível via ext. battery" });
// // // // //   }

// // // // //   /* ── MÉDIA TENSÃO ── */
// // // // //   if (ind && kwh > 100) {
// // // // //     const kvaT = kwh > 500 ? 2000 : kwh > 200 ? 1000 : 500;
// // // // //     mats.push({ cat: "Média Tensão", ref: `PT-${kvaT}K`, nome: `Posto Transformação Compacto ${kvaT} KVA`, marca: "Toshiba T&D TCSU", qtd: 1, unidade: "un", obs: "10–30 kV · Pré-montado · IP66 · Class AB" });
// // // // //   }

// // // // //   /* ── SPDA ── */
// // // // //   if (f.spda) {
// // // // //     const raio = ind ? 107 : 60;
// // // // //     mats.push({ cat: "SPDA", ref: "PARARR-ESE",  nome: `Para-Raios ESE Franklin France R${raio}m`,      marca: "Franklin France", qtd: 1,                       unidade: "un", obs: `Raio de protecção: ${raio}m · IEC 62305` });
// // // // //     mats.push({ cat: "SPDA", ref: "COND-DES-50", nome: "Condutor de Descida Cobre 50mm²",               marca: "Franklin France", qtd: Math.ceil(Math.sqrt(m2)*4), unidade: "m" });
// // // // //     mats.push({ cat: "SPDA", ref: "ELEC-TERRA",  nome: "Eléctrodo Terra Aço Inox Ø14mm × 1,5m",         marca: "Franklin France", qtd: Math.ceil(m2 / 200) + 1, unidade: "un" });
// // // // //     mats.push({ cat: "SPDA", ref: "SURTO-T1T2",  nome: "Descarregador Sobretensão Tipo 1+2",            marca: "Legrand",         qtd: 1,                       unidade: "un", obs: "Protecção combinada QGD principal" });
// // // // //   }

// // // // //   /* ── MOBILIDADE VE ── */
// // // // //   if (f.ve) {
// // // // //     const pvE = res ? 7.4 : ind ? 50 : 22;
// // // // //     const nVE = res ? 1 : Math.max(2, Math.ceil(m2 / 400));
// // // // //     const fab = pvE >= 50 ? "Circutor" : "Huawei";
// // // // //     mats.push({ cat: "Mobilidade VE", ref: `VE-${pvE}KW`,  nome: `Posto Carregamento VE ${pvE}kW`,                  marca: fab,   qtd: nVE, unidade: "un", obs: pvE >= 50 ? "DC Rápido · CCS + CHAdeMO · OCPP" : pvE >= 22 ? "AC Trifásico · Type 2 · RFID" : "Modo 3 · Type 2 · App" });
// // // // //     mats.push({ cat: "Mobilidade VE", ref: "CAB-VE-6",      nome: "Cabo Flexível H05VV-F 3×6mm² para VE",           marca: "Prysmian", qtd: nVE * (pvE >= 22 ? 30 : 15), unidade: "m" });
// // // // //   }

// // // // //   /* ── BACKUP / GERADOR ── */
// // // // //   if (f.gerador) {
// // // // //     const kvaG = kwh > 200 ? 200 : kwh > 80 ? 80 : kwh > 30 ? 30 : 15;
// // // // //     mats.push({ cat: "Backup Gerador", ref: `GEN-${kvaG}K`,  nome: `Grupo Gerador Diesel ${kvaG} KVA Insonorizado`, marca: "Perkins / Stamford", qtd: 1, unidade: "un", obs: "Arranque automático · nível sonoro ≤70 dB(A)" });
// // // // //     mats.push({ cat: "Backup Gerador", ref: "ATS-AUTO",       nome: "Comutador Automático ATS 4P",                   marca: "Legrand",           qtd: 1, unidade: "un", obs: "Comutação automática rede ↔ gerador <3s" });
// // // // //     mats.push({ cat: "Backup Gerador", ref: "CAB-GEN-16",     nome: "Cabo Alimentação Gerador NYY 4×16mm²",          marca: "Nexans",            qtd: 30, unidade: "m" });
// // // // //   }

// // // // //   return mats;
// // // // // }

// // // // // /* ─────────────────────────────────────────────
// // // // //    APP
// // // // // ───────────────────────────────────────────── */
// // // // // export default function Home() {
// // // // //   const [slide, setSlide] = useState(0);
// // // // //   const [animKey, setAnimKey] = useState(0);
// // // // //   const [scrolled, setScrolled] = useState(false);
// // // // //   const [activeProduct, setActiveProduct] = useState(0);
// // // // //   const [activePoint, setActivePoint] = useState<number | null>(null);
// // // // //   const [loaderVis, setLoaderVis] = useState(true);
// // // // //   const [loaderFade, setLoaderFade] = useState(false);
// // // // //   const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

// // // // //   /* ── Simulador state ── */
// // // // //   const [simStep, setSimStep]     = useState<SimStep>(1);
// // // // //   const [simForm, setSimForm]     = useState<SimForm>({
// // // // //     tipo: "", area: "", consumo: "", autonomia: "1",
// // // // //     trifasico: false, gerador: false, spda: false,
// // // // //     ve: false, solar: false, ups: false, localizacao: "Luanda",
// // // // //   });
// // // // //   const [simResult, setSimResult] = useState<MatItem[]>([]);
// // // // //   const [simCatFil, setSimCatFil] = useState("Todos");
// // // // //   const setSim = (k: keyof SimForm, v: string | boolean) =>
// // // // //     setSimForm(prev => ({ ...prev, [k]: v }));
// // // // //   const simCats = ["Todos", ...Array.from(new Set(simResult.map(m => m.cat)))];
// // // // //   const simVisible = simCatFil === "Todos" ? simResult : simResult.filter(m => m.cat === simCatFil);
// // // // //   const runSim = () => {
// // // // //     setSimResult(calcSimulacao(simForm));
// // // // //     setSimCatFil("Todos");
// // // // //     setSimStep(3);
// // // // //   };

// // // // //   const advance = () => { setSlide(s => (s + 1) % HERO_SLIDES.length); setAnimKey(k => k + 1); };

// // // // //   useEffect(() => {
// // // // //     timerRef.current = setInterval(advance, 6000);
// // // // //     return () => clearInterval(timerRef.current);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const fn = () => setScrolled(window.scrollY > 48);
// // // // //     window.addEventListener("scroll", fn);
// // // // //     return () => window.removeEventListener("scroll", fn);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const hide = () => { setLoaderFade(true); setTimeout(() => setLoaderVis(false), 480); };
// // // // //     const t = setTimeout(hide, 900);
// // // // //     const onLoad = () => { clearTimeout(t); setTimeout(hide, 200); };
// // // // //     if (document.readyState === "complete") onLoad();
// // // // //     else window.addEventListener("load", onLoad);
// // // // //     return () => { clearTimeout(t); window.removeEventListener("load", onLoad); };
// // // // //   }, []);

// // // // //   const cur = HERO_SLIDES[slide];
// // // // //   const curProd = PRODUCTS[activeProduct];

// // // // //   const NAV = [
// // // // //     { label: "Produtos", href: "#produtos" },
// // // // //     { label: "Serviços", href: "#servicos" },
// // // // //     { label: "Simulador", href: "#simulador" },
// // // // //     { label: "Presença", href: "#presenca" },
// // // // //     { label: "Contacto", href: "#contacto" },
// // // // //   ];

// // // // //   return (
// // // // //     <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", overflowX: "hidden" }}>
// // // // //       {/* ── PAGE LOADER ── */}
// // // // //       {loaderVis && (
// // // // //         <div style={{ position:"fixed", inset:0, zIndex:9999, background:"#095b66", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:28, transition:"opacity .48s ease, transform .48s ease", opacity:loaderFade?0:1, transform:loaderFade?"scale(1.02)":"none", pointerEvents:loaderFade?"none":"auto" }}>
// // // // //           <style>{`
// // // // //             @keyframes _lp{0%,100%{opacity:1}50%{opacity:.4}}
// // // // //             @keyframes _lb{0%{transform:scaleX(0)}60%{transform:scaleX(.75)}100%{transform:scaleX(1)}}
// // // // //             @keyframes _ls{0%{background-position:-400px 0}100%{background-position:400px 0}}
// // // // //           `}</style>
// // // // //           <div style={{ display:"flex", alignItems:"center", gap:10, animation:"_lp 1.6s ease infinite" }}>
// // // // //             <div style={{ width:44, height:44, borderRadius:10, background:"rgba(255,255,255,.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
// // // // //               <svg viewBox="0 0 24 24" fill="none" width="26" height="26"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" stroke="#fff" strokeWidth=".5" strokeLinejoin="round"/></svg>
// // // // //             </div>
// // // // //             <span style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:900, fontSize:22, color:"#fff", letterSpacing:"-.01em" }}>
// // // // //               Multi<span style={{ color:"rgba(255,255,255,.5)" }}>energia</span>
// // // // //             </span>
// // // // //           </div>
// // // // //           <div style={{ width:160, height:2, background:"rgba(255,255,255,.15)", borderRadius:99, overflow:"hidden" }}>
// // // // //             <div style={{ height:"100%", width:"100%", background:"linear-gradient(90deg,rgba(255,255,255,.6) 0%,#fff 50%,rgba(255,255,255,.6) 100%)", backgroundSize:"200% 100%", borderRadius:99, transformOrigin:"left", animation:"_lb 900ms cubic-bezier(.4,0,.2,1) forwards, _ls 1.2s linear infinite" }}/>
// // // // //           </div>
// // // // //           <div style={{ display:"flex", gap:6 }}>
// // // // //             {[0,.15,.3].map((d,i) => <div key={i} style={{ width:5, height:5, borderRadius:"50%", background:"rgba(255,255,255,.6)", animation:`_lp 1.2s ${d}s ease infinite` }}/>)}
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //       <style>{`
// // // // //         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
// // // // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// // // // //         html { scroll-behavior: smooth; }
// // // // //         a { text-decoration: none; color: inherit; }
// // // // //         button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
// // // // //         ::selection { background: #095b66; color: #fff; }
// // // // //         ::-webkit-scrollbar { width: 4px; }
// // // // //         ::-webkit-scrollbar-thumb { background: #095b66; border-radius: 4px; }
// // // // //         .nav-a { font-size: 11.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; transition: opacity .2s; }
// // // // //         .nav-a:hover { opacity: .6; }
// // // // //         @keyframes heroIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: none; } }
// // // // //         .hero-in { animation: heroIn .5s cubic-bezier(.22,1,.36,1) both; }
// // // // //         .dot { width: 7px; height: 7px; border-radius: 99px; cursor: pointer; border: none; transition: all .3s; background: rgba(255,255,255,.35); }
// // // // //         .dot.on { width: 24px; background: #fff; }
// // // // //         .prod-tab { padding: 14px 18px; border-radius: 8px; cursor: pointer; transition: all .2s; border: 1.5px solid transparent; display: flex; align-items: center; gap: 12px; }
// // // // //         .prod-tab:hover { background: #f0f9fa; }
// // // // //         .prod-tab.on { background: #095b66; border-color: #095b66; }
// // // // //         .brand-card { background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; padding: 14px 18px; text-align: center; transition: all .25s; }
// // // // //         .brand-card:hover { border-color: #095b66; background: #fff; box-shadow: 0 4px 18px rgba(9,91,102,.08); }
// // // // //         .client-chip { background: #f0f9fa; border: 1.5px solid #c8e8eb; border-radius: 99px; padding: 7px 16px; font-size: 12px; font-weight: 700; color: #1a4a4f; white-space: nowrap; transition: all .2s; }
// // // // //         .client-chip:hover { background: #095b66; color: #fff; border-color: #095b66; }
// // // // //         .input { width: 100%; background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 7px; color: #1a2c2e; padding: 12px 15px; font-family: 'Montserrat',sans-serif; font-size: 13px; outline: none; transition: border-color .2s; }
// // // // //         .input:focus { border-color: #095b66; background: #fff; }
// // // // //         .input::placeholder { color: #9bbbbe; }
// // // // //         textarea.input { resize: vertical; min-height: 100px; }
// // // // //         .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
// // // // //         .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(9,91,102,.25); }
// // // // //         .btn-outline-w { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.55); border-radius: 6px; padding: 11px 26px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; }
// // // // //         .btn-outline-w:hover { background: rgba(255,255,255,.12); border-color: #fff; }
// // // // //         .btn-white { background: #fff; color: #095b66; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
// // // // //         .btn-white:hover { background: #e8f5f7; transform: translateY(-2px); }
// // // // //         .footer-btn { background: none; border: none; padding: 0; font-family: 'Montserrat',sans-serif; font-size: 13px; color: #4a7a7e; cursor: pointer; transition: color .2s; text-align: left; width: 100%; }
// // // // //         .footer-btn:hover { color: #fff; }
// // // // //         /* ── Simulador ── */
// // // // //         @keyframes simUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }
// // // // //         .sim-up { animation: simUp .4s ease both; }
// // // // //         .sim-tipo-btn { border: 1.5px solid #dde8ea; border-radius: 14px; background: #fff; cursor: pointer; transition: all .22s; padding: 22px 16px; display: flex; flex-direction: column; align-items: center; gap: 10px; font-family: 'Montserrat',sans-serif; }
// // // // //         .sim-tipo-btn:hover { border-color: #095b66; transform: translateY(-2px); box-shadow: 0 6px 22px rgba(9,91,102,.1); }
// // // // //         .sim-tipo-btn.on { border-color: #095b66; background: #095b66; box-shadow: 0 8px 28px rgba(9,91,102,.22); transform: translateY(-3px); }
// // // // //         .sim-field { display: flex; flex-direction: column; gap: 6px; }
// // // // //         .sim-field label { font-size: 10px; font-weight: 700; color: #095b66; letter-spacing: .14em; text-transform: uppercase; }
// // // // //         .sim-field small { font-size: 10.5px; color: #9bbbbe; margin-top: 2px; }
// // // // //         .sim-inp { width: 100%; background: #fff; border: 1.5px solid #dde8ea; border-radius: 9px; color: #1a2c2e; padding: 11px 14px; font-family: 'Montserrat',sans-serif; font-size: 13px; font-weight: 600; outline: none; transition: border-color .2s, box-shadow .2s; }
// // // // //         .sim-inp:focus { border-color: #095b66; box-shadow: 0 0 0 3px rgba(9,91,102,.08); }
// // // // //         .sim-inp::placeholder { color: #b0c8ca; font-weight: 500; }
// // // // //         .sim-sel { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%23095b66' stroke-width='2.2' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 13px center; padding-right:36px; }
// // // // //         .sim-toggle { position:relative; display:inline-flex; width:40px; height:22px; flex-shrink:0; }
// // // // //         .sim-toggle input { opacity:0; width:0; height:0; }
// // // // //         .sim-slider { position:absolute; inset:0; border-radius:99px; background:#dde8ea; cursor:pointer; transition:background .2s; }
// // // // //         .sim-slider::before { content:''; position:absolute; width:16px; height:16px; left:3px; bottom:3px; background:#fff; border-radius:50%; transition:transform .22s; box-shadow:0 1px 3px rgba(0,0,0,.15); }
// // // // //         .sim-toggle input:checked + .sim-slider { background: #095b66; }
// // // // //         .sim-toggle input:checked + .sim-slider::before { transform: translateX(18px); }
// // // // //         .sim-cat-pill { padding: 6px 14px; border-radius: 99px; border: 1.5px solid #dde8ea; background: #fff; font-size: 11px; font-weight: 700; color: #4a7275; cursor: pointer; transition: all .18s; white-space: nowrap; font-family:'Montserrat',sans-serif; }
// // // // //         .sim-cat-pill:hover { border-color: #095b66; color: #095b66; }
// // // // //         .sim-cat-pill.on { background: #095b66; border-color: #095b66; color: #fff; }
// // // // //         .sim-row:hover { background: #f8fcfc; }
// // // // //         .sim-prog-line { height: 2px; flex:1; margin: 0 6px 20px; transition: background .3s; }
// // // // //         @media (max-width: 900px) {
// // // // //           .hide-mob { display: none !important; }
// // // // //           .two { grid-template-columns: 1fr !important; }
// // // // //           .three { grid-template-columns: 1fr 1fr !important; }
// // // // //           .sp { padding-left: 22px !important; padding-right: 22px !important; }
// // // // //           .hero-sp { padding: 86px 22px 0 !important; }
// // // // //         }
// // // // //         @media (max-width: 540px) { .three { grid-template-columns: 1fr !important; } }
// // // // //       `}</style>

// // // // //       {/* ── NAVBAR ── */}
// // // // //       <header style={{
// // // // //         position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 64,
// // // // //         background: scrolled ? "rgba(255,255,255,.97)" : "transparent",
// // // // //         backdropFilter: scrolled ? "blur(16px)" : "none",
// // // // //         boxShadow: scrolled ? "0 1px 0 rgba(9,91,102,.08)" : "none",
// // // // //         transition: "all .3s", display: "flex", alignItems: "center", padding: "0 48px",
// // // // //       }}>
// // // // //         <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, flex: "0 0 auto" }}>
// // // // //           <div style={{ width: 34, height: 34, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // // // //             <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
// // // // //               <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" stroke="#fff" strokeWidth=".5" strokeLinejoin="round"/>
// // // // //             </svg>
// // // // //           </div>
// // // // //           <span style={{ fontWeight: 900, fontSize: 16, color: scrolled ? "#095b66" : "#fff", transition: "color .3s" }}>
// // // // //             Multi<span style={{ color: scrolled ? "#0a7a89" : "rgba(255,255,255,.6)" }}>energia</span>
// // // // //           </span>
// // // // //         </Link>
// // // // //         <nav className="hide-mob" style={{ display: "flex", gap: 36, marginLeft: "auto", marginRight: 32 }}>
// // // // //           {NAV.map(l => (
// // // // //             <a key={l.label} href={l.href} className="nav-a" style={{ color: scrolled ? "#1a2c2e" : "rgba(255,255,255,.85)" }}>{l.label}</a>
// // // // //           ))}
// // // // //           <Link href="/sobre" className="nav-a" style={{ color: scrolled ? "#1a2c2e" : "rgba(255,255,255,.85)" }}>Sobre</Link>
// // // // //         </nav>
// // // // //         <a href="#contacto" className="btn-teal hide-mob" style={{ fontSize: 11, padding: "9px 20px" }}>Orçamento</a>
// // // // //       </header>

// // // // //       {/* ── HERO ── */}
// // // // //       <section style={{ position: "relative", minHeight: "100vh", background: "#095b66", overflow: "hidden", display: "flex", flexDirection: "column" }}>
// // // // //         <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", background: "rgba(255,255,255,.04)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}/>
// // // // //         <div style={{ position: "absolute", top: 0, right: 0, width: "30%", height: "100%", background: "rgba(255,255,255,.03)", clipPath: "polygon(25% 0, 100% 0, 100% 100%, 10% 100%)" }}/>
// // // // //         <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }}/>
// // // // //         <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", opacity: .06, pointerEvents: "none" }}>
// // // // //           <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330"><path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/></svg>
// // // // //         </div>
// // // // //         <div className="hero-sp sp" style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", alignItems: "center", padding: "100px 80px 0", maxWidth: 1280, margin: "0 auto", width: "100%" }}>
// // // // //           <div style={{ maxWidth: 660 }}>
// // // // //             <div key={`tag-${animKey}`} className="hero-in" style={{ animationDelay: "0s" }}>
// // // // //               <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, padding: "5px 14px", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.85)", marginBottom: 32 }}>
// // // // //                 {cur.tag}
// // // // //               </div>
// // // // //             </div>
// // // // //             <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s" }}>
// // // // //               <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28 }}>
// // // // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line1}</span>
// // // // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)", color: "rgba(255,255,255,.4)" }}>{cur.line2}</span>
// // // // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line3}</span>
// // // // //               </h1>
// // // // //             </div>
// // // // //             <div key={`s-${animKey}`} className="hero-in" style={{ animationDelay: ".16s" }}>
// // // // //               <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.7)", maxWidth: 480, marginBottom: 44 }}>{cur.sub}</p>
// // // // //               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
// // // // //                 <a href="#produtos" className="btn-white">Ver Soluções</a>
// // // // //                 <a href="#contacto" className="btn-outline-w">Pedir Orçamento</a>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
// // // // //           {HERO_SLIDES.map((_, i) => (
// // // // //             <button key={i} className={`dot ${i === slide ? "on" : ""}`}
// // // // //               onClick={() => { clearInterval(timerRef.current); setSlide(i); setAnimKey(k => k + 1); }}
// // // // //               aria-label={`Slide ${i + 1}`}
// // // // //             />
// // // // //           ))}
// // // // //         </div>
// // // // //         <div style={{ height: 64, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)", marginTop: 40 }}/>
// // // // //       </section>

// // // // //       {/* ── PRODUCTS ── */}
// // // // //       <section id="produtos" style={{ padding: "96px 0 80px" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // //           <Reveal>
// // // // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 52, flexWrap: "wrap" }}>
// // // // //               <div>
// // // // //                 <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Catálogo</p>
// // // // //                 <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05 }}>Os Nossos Produtos</h2>
// // // // //               </div>
// // // // //               <Link href="/produtos" style={{ fontSize: 12, fontWeight: 700, color: "#095b66", letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "2px solid #095b66", paddingBottom: 2 }}>
// // // // //                 Ver todos →
// // // // //               </Link>
// // // // //             </div>
// // // // //           </Reveal>

// // // // //           <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32, alignItems: "start" }}>
// // // // //             <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
// // // // //               {PRODUCTS.map((p, i) => (
// // // // //                 <Reveal key={i} delay={i * .05}>
// // // // //                   <button className={`prod-tab ${activeProduct === i ? "on" : ""}`} onClick={() => setActiveProduct(i)} aria-label={p.name}>
// // // // //                     <div style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, background: activeProduct === i ? "rgba(255,255,255,.15)" : p.light, display: "flex", alignItems: "center", justifyContent: "center" }}>
// // // // //                       <svg viewBox="0 0 48 48" fill="none" width="22" height="22">
// // // // //                         {i === 0 && <><circle cx="24" cy="24" r="8" fill={activeProduct===i?"#fff":"#095b66"}/><path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.5 11.5l3.5 3.5M33 33l3.5 3.5M11.5 36.5l3.5-3.5M33 15l3.5-3.5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/></>}
// // // // //                         {i === 1 && <><rect x="14" y="6" width="20" height="36" rx="3" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="18" y="10" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"}/><rect x="18" y="18" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><rect x="18" y="26" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
// // // // //                         {i === 2 && <><rect x="6" y="6" width="36" height="36" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="10" y="10" width="28" height="6" rx="1" fill={activeProduct===i?"#fff":"#095b66"} opacity=".7"/><circle cx="15" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"}/><circle cx="24" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><circle cx="33" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
// // // // //                         {i === 3 && <><rect x="8" y="14" width="32" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 24l-5 6h6l-4 6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
// // // // //                         {i === 4 && <><rect x="10" y="16" width="28" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 8v8" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/><path d="M16 8h16" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                         {i === 5 && <><rect x="6" y="16" width="36" height="22" rx="5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><circle cx="14" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><circle cx="34" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><path d="M12 27h8l3 5h14" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M34 13v5M31 16h6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                       </svg>
// // // // //                     </div>
// // // // //                     <span style={{ fontSize: 13, fontWeight: 700, color: activeProduct === i ? "#fff" : "#1a2c2e", textAlign: "left", lineHeight: 1.3 }}>{p.name}</span>
// // // // //                   </button>
// // // // //                 </Reveal>
// // // // //               ))}
// // // // //             </div>

// // // // //             <Reveal key={activeProduct}>
// // // // //               <div style={{ background: "linear-gradient(135deg, #095b66 0%, #0a7a89 100%)", borderRadius: 20, padding: "44px 48px", minHeight: 360, position: "relative", overflow: "hidden" }}>
// // // // //                 <div style={{ position: "absolute", right: -30, top: -30, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,.05)", pointerEvents: "none" }}/>
// // // // //                 <div style={{ position: "absolute", right: 30, bottom: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }}/>
// // // // //                 <div style={{ position: "relative", zIndex: 1 }}>
// // // // //                   <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
// // // // //                     <svg viewBox="0 0 64 64" fill="none" width="44" height="44">
// // // // //                       {activeProduct === 0 && <><circle cx="32" cy="32" r="10" fill="rgba(255,255,255,.9)"/><path d="M32 10v5M32 49v5M10 32h5M49 32h5M16.5 16.5l3.5 3.5M44 44l3.5 3.5M16.5 47.5l3.5-3.5M44 20l3.5-3.5" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/></>}
// // // // //                       {activeProduct === 1 && <><rect x="18" y="6" width="28" height="52" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="22" y="12" width="20" height="8" rx="2" fill="rgba(255,255,255,.9)"/><rect x="22" y="24" width="20" height="8" rx="2" fill="rgba(255,255,255,.5)"/><rect x="22" y="36" width="20" height="8" rx="2" fill="rgba(255,255,255,.3)"/><path d="M28 60h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                       {activeProduct === 2 && <><rect x="8" y="8" width="48" height="48" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="14" y="14" width="36" height="8" rx="2" fill="rgba(255,255,255,.9)" opacity=".8"/><circle cx="20" cy="34" r="5" fill="rgba(255,255,255,.9)"/><circle cx="32" cy="34" r="5" fill="rgba(255,255,255,.6)"/><circle cx="44" cy="34" r="5" fill="rgba(255,255,255,.3)"/></>}
// // // // //                       {activeProduct === 3 && <><rect x="10" y="16" width="44" height="32" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 24l-8 10h10l-6 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>}
// // // // //                       {activeProduct === 4 && <><rect x="12" y="20" width="40" height="30" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 8v12" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 8h24M20 14h24" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><rect x="20" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/><rect x="34" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/></>}
// // // // //                       {activeProduct === 5 && <><rect x="8" y="22" width="48" height="26" rx="6" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><circle cx="20" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="20" cy="52" r="3" fill="rgba(255,255,255,.9)"/><circle cx="44" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="44" cy="52" r="3" fill="rgba(255,255,255,.9)"/><path d="M14 30h14l4 8h18" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M42 18v8M38 22h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                     </svg>
// // // // //                   </div>
// // // // //                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 8 }}>{curProd.id.toUpperCase()}</p>
// // // // //                   <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>{curProd.name}</h3>
// // // // //                   <p style={{ fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}>{curProd.desc}</p>
// // // // //                   <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
// // // // //                     {curProd.specs.map(s => (
// // // // //                       <span key={s} style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, fontSize: 11, fontWeight: 600, color: "#fff", padding: "4px 12px" }}>{s}</span>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                   <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
// // // // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: ".1em", textTransform: "uppercase" }}>Marcas:</span>
// // // // //                     {curProd.brands.map(b => (
// // // // //                       <span key={b} style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,.8)", background: "rgba(255,255,255,.1)", borderRadius: 5, padding: "3px 10px" }}>{b}</span>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </Reveal>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── SERVICES ── */}
// // // // //       <section id="servicos" style={{ background: "#095b66", padding: "96px 0" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // //           <Reveal>
// // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 8 }}>— Serviços</p>
// // // // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 56, flexWrap: "wrap" }}>
// // // // //               <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#fff", lineHeight: 1.05 }}>O que fazemos</h2>
// // // // //               <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 380, lineHeight: 1.7 }}>Da concepção ao comissionamento. Suporte especializado em todas as fases do seu projeto energético.</p>
// // // // //             </div>
// // // // //           </Reveal>
// // // // //           <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
// // // // //             {SERVICES.map((s, i) => (
// // // // //               <Reveal key={i} delay={i * .07}>
// // // // //                 <div style={{ background: i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)", border: "1.5px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "32px 28px", transition: "all .3s", cursor: "default" }}
// // // // //                   onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background="rgba(255,255,255,.12)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,.25)"; (e.currentTarget as HTMLDivElement).style.transform="translateY(-4px)"; }}
// // // // //                   onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background=i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,.1)"; (e.currentTarget as HTMLDivElement).style.transform="none"; }}>
// // // // //                   <div style={{ width: 58, height: 58, borderRadius: 14, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
// // // // //                     <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
// // // // //                       {i === 0 && <><rect x="6" y="6" width="36" height="36" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M14 24h20M24 14v20" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="14" cy="14" r="3" fill="rgba(255,255,255,.4)"/><circle cx="34" cy="34" r="3" fill="rgba(255,255,255,.4)"/></>}
// // // // //                       {i === 1 && <><circle cx="24" cy="24" r="18" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M24 14v10l6 6" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 24h4M34 24h4M24 10v4M24 34v4" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                       {i === 2 && <><path d="M8 36l8-8 6 6 10-12 8 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="6" width="36" height="28" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 42h16M24 34v8" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                       {i === 3 && <><path d="M24 6l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L24 23.4l-6.9 3.8 1.3-7.7-5.6-5.4 7.7-1.1z" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinejoin="round"/><path d="M14 30l-6 12M34 30l6 12" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/></>}
// // // // //                       {i === 4 && <><path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M32 8l8 0 0 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 8L28 20" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 24l4-6 4 6" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
// // // // //                       {i === 5 && <><rect x="6" y="14" width="36" height="26" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 14V10a8 8 0 0116 0v4" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M24 26v4" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="24" cy="24" r="3" fill="rgba(255,255,255,.9)"/></>}
// // // // //                     </svg>
// // // // //                   </div>
// // // // //                   <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
// // // // //                   <p style={{ fontSize: 13, color: "rgba(255,255,255,.62)", lineHeight: 1.7 }}>{s.short}</p>
// // // // //                 </div>
// // // // //               </Reveal>
// // // // //             ))}
// // // // //           </div>
// // // // //           <Reveal style={{ marginTop: 52, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
// // // // //             <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
// // // // //               <div style={{ width: 48, height: 48, background: "rgba(255,255,255,.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</div>
// // // // //               <div>
// // // // //                 <div style={{ fontSize: 10, color: "rgba(255,255,255,.45)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>Angola · Suporte</div>
// // // // //                 <a href="tel:+244933153362" style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>+244 933 153 362</a>
// // // // //               </div>
// // // // //             </div>
// // // // //             <a href="#contacto" className="btn-white">Solicitar Visita Técnica</a>
// // // // //           </Reveal>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── SIMULADOR DE PROJECTO ── */}
// // // // //       <section id="simulador" style={{ background: "#f0f9fa", padding: "96px 0" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>

// // // // //           {/* Header */}
// // // // //           <Reveal>
// // // // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
// // // // //               <div>
// // // // //                 <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Simulador</p>
// // // // //                 <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 10 }}>Simule o seu Projecto</h2>
// // // // //                 <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 500, lineHeight: 1.75 }}>
// // // // //                   Obtenha a lista indicativa de materiais eléctricos para o seu projecto em segundos, com base em pressupostos técnicos reais.
// // // // //                 </p>
// // // // //               </div>
// // // // //               <div style={{ display:"flex", alignItems:"center", gap:9, background:"#fff", border:"1.5px solid #dde8ea", borderRadius:12, padding:"11px 20px" }}>
// // // // //                 <svg viewBox="0 0 20 20" fill="none" width="15" height="15"><circle cx="10" cy="10" r="8" stroke="#095b66" strokeWidth="1.5"/><path d="M10 6v4l3 3" stroke="#095b66" strokeWidth="1.5" strokeLinecap="round"/></svg>
// // // // //                 <span style={{ fontSize:12, fontWeight:700, color:"#095b66" }}>Resultado em &lt;30 segundos</span>
// // // // //               </div>
// // // // //             </div>
// // // // //           </Reveal>

// // // // //           {/* Stepper */}
// // // // //           <div style={{ display:"flex", alignItems:"center", maxWidth:520, marginBottom:44 }}>
// // // // //             {([["1","Tipo de Projecto"],["2","Pressupostos"],["3","Resultado"]] as [string,string][]).map(([n,lbl], i) => (
// // // // //               <React.Fragment key={n}>
// // // // //                 <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
// // // // //                   <div style={{ width:36, height:36, borderRadius:"50%", background: simStep > +n ? "#095b66" : simStep === +n ? "#095b66" : "#e8eef0", border:`2px solid ${simStep >= +n ? "#095b66" : "#dde8ea"}`, display:"flex", alignItems:"center", justifyContent:"center", transition:"all .3s" }}>
// // // // //                     {simStep > +n
// // // // //                       ? <svg viewBox="0 0 14 14" fill="none" width="12" height="12"><path d="M2 7l4 4 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // // //                       : <span style={{ fontSize:12, fontWeight:800, color: simStep >= +n ? "#fff" : "#9bbbbe" }}>{n}</span>
// // // // //                     }
// // // // //                   </div>
// // // // //                   <span style={{ fontSize:9.5, fontWeight:700, color: simStep >= +n ? "#095b66" : "#9bbbbe", textTransform:"uppercase", letterSpacing:".08em", whiteSpace:"nowrap" }}>{lbl}</span>
// // // // //                 </div>
// // // // //                 {i < 2 && <div className="sim-prog-line" style={{ background: simStep > +n ? "#095b66" : "#dde8ea" }}/>}
// // // // //               </React.Fragment>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* ─ PASSO 1: Tipo ─ */}
// // // // //           {simStep === 1 && (
// // // // //             <div className="sim-up">
// // // // //               <p style={{ fontSize:11.5, fontWeight:700, color:"#4a7275", marginBottom:20, textTransform:"uppercase", letterSpacing:".1em" }}>Seleccione o tipo de projecto:</p>
// // // // //               <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:12, marginBottom:40 }} className="three">
// // // // //                 {TIPOS_PROJETO.map(t => (
// // // // //                   <button key={t.id} className={`sim-tipo-btn ${simForm.tipo === t.id ? "on" : ""}`}
// // // // //                     onClick={() => setSim("tipo", t.id)}>
// // // // //                     <div style={{ color: simForm.tipo === t.id ? "#fff" : "#095b66" }}>{t.icon}</div>
// // // // //                     <div style={{ textAlign:"center" }}>
// // // // //                       <div style={{ fontSize:12.5, fontWeight:800, color: simForm.tipo === t.id ? "#fff" : "#0a1c1e", marginBottom:3, lineHeight:1.25 }}>{t.label}</div>
// // // // //                       <div style={{ fontSize:10, fontWeight:600, color: simForm.tipo === t.id ? "rgba(255,255,255,.6)" : "#9bbbbe" }}>{t.sub}</div>
// // // // //                     </div>
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </div>
// // // // //               <div style={{ display:"flex", justifyContent:"flex-end" }}>
// // // // //                 <button disabled={!simForm.tipo} onClick={() => setSimStep(2)} className="btn-teal"
// // // // //                   style={{ opacity: simForm.tipo ? 1 : .45, cursor: simForm.tipo ? "pointer" : "not-allowed" }}>
// // // // //                   Continuar
// // // // //                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M4 8h8M9 5l3 3-3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}

// // // // //           {/* ─ PASSO 2: Pressupostos ─ */}
// // // // //           {simStep === 2 && (
// // // // //             <div className="sim-up">
// // // // //               <div className="two" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, marginBottom:36 }}>

// // // // //                 {/* Campos numéricos */}
// // // // //                 <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
// // // // //                   <div className="sim-field">
// // // // //                     <label>Área Total (m²) *</label>
// // // // //                     <input className="sim-inp" type="number" min="10" placeholder={simForm.tipo==="residencial"?"Ex: 120":simForm.tipo==="industrial"?"Ex: 2000":"Ex: 400"} value={simForm.area} onChange={e=>setSim("area",e.target.value)}/>
// // // // //                     <small>Área total a electrificar em m²</small>
// // // // //                   </div>
// // // // //                   <div className="sim-field">
// // // // //                     <label>Consumo Estimado (kWh/dia) *</label>
// // // // //                     <input className="sim-inp" type="number" min="1" placeholder={simForm.tipo==="residencial"?"Ex: 15":simForm.tipo==="industrial"?"Ex: 300":"Ex: 60"} value={simForm.consumo} onChange={e=>setSim("consumo",e.target.value)}/>
// // // // //                     <small>{simForm.tipo==="residencial"?"Tipicamente 8–25 kWh/dia para moradia":simForm.tipo==="industrial"?"Tipicamente 100–800 kWh/dia para fábrica":"Consulte a factura eléctrica ou medição"}</small>
// // // // //                   </div>
// // // // //                   <div className="sim-field">
// // // // //                     <label>Localização</label>
// // // // //                     <select className="sim-inp sim-sel" value={simForm.localizacao} onChange={e=>setSim("localizacao",e.target.value)}>
// // // // //                       {["Luanda","Benguela","Huambo","Lobito","Namibe","Cabinda","Malanje","Lisboa","Porto","Praia","São Tomé","Outro"].map(l=><option key={l}>{l}</option>)}
// // // // //                     </select>
// // // // //                   </div>
// // // // //                   {simForm.solar && (
// // // // //                     <div className="sim-field">
// // // // //                       <label>Autonomia em Bateria</label>
// // // // //                       <select className="sim-inp sim-sel" value={simForm.autonomia} onChange={e=>setSim("autonomia",e.target.value)}>
// // // // //                         <option value="0">Sem armazenamento (só injecção)</option>
// // // // //                         <option value="1">1 dia</option>
// // // // //                         <option value="2">2 dias</option>
// // // // //                         <option value="3">3 dias (máx. resiliência)</option>
// // // // //                       </select>
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>

// // // // //                 {/* Toggles */}
// // // // //                 <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:16, padding:"24px" }}>
// // // // //                   <p style={{ fontSize:10, fontWeight:700, color:"#095b66", letterSpacing:".14em", textTransform:"uppercase", marginBottom:16 }}>Equipamentos adicionais:</p>
// // // // //                   {([
// // // // //                     ["solar",     "Sistema Solar Fotovoltaico",    "Painéis + inversor + armazenamento LFP"],
// // // // //                     ["ups",       "UPS / Estabilizador",            "Alimentação ininterrupta de cargas críticas"],
// // // // //                     ["spda",      "Protecção Atmosférica SPDA",    "Para-raios ESE + aterramento Franklin France"],
// // // // //                     ["ve",        "Postos de Carregamento VE",      "Veículos eléctricos · Modo 3 / DC rápido"],
// // // // //                     ["gerador",   "Grupo Gerador de Backup",        "Diesel insonorizado + ATS automático"],
// // // // //                     ["trifasico", "Instalação Trifásica 400V",      "Força motriz / motores / equipamentos pesados"],
// // // // //                   ] as [keyof SimForm, string, string][]).map(([k,lbl,sub], i, arr) => (
// // // // //                     <div key={k} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, padding:"13px 0", borderBottom: i<arr.length-1 ? "1px solid #f0f5f6" : "none" }}>
// // // // //                       <div>
// // // // //                         <div style={{ fontSize:13, fontWeight:700, color:"#0a1c1e" }}>{lbl}</div>
// // // // //                         <div style={{ fontSize:10.5, color:"#9bbbbe", marginTop:2 }}>{sub}</div>
// // // // //                       </div>
// // // // //                       <label className="sim-toggle">
// // // // //                         <input type="checkbox" checked={!!simForm[k]} onChange={e=>setSim(k,e.target.checked)}/>
// // // // //                         <span className="sim-slider"/>
// // // // //                       </label>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
// // // // //                 <button onClick={()=>setSimStep(1)} style={{ background:"none", border:"1.5px solid #dde8ea", borderRadius:7, padding:"12px 22px", fontSize:12, fontWeight:700, color:"#4a7275", cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:7 }}>
// // // // //                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M12 8H4M7 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // // //                   Voltar
// // // // //                 </button>
// // // // //                 <button disabled={!simForm.area || !simForm.consumo} onClick={runSim} className="btn-teal"
// // // // //                   style={{ opacity: (simForm.area && simForm.consumo) ? 1 : .45, cursor: (simForm.area && simForm.consumo) ? "pointer" : "not-allowed" }}>
// // // // //                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0z" stroke="#fff" strokeWidth="1.5"/><path d="M10 8H6M8 6v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
// // // // //                   Gerar Lista de Materiais
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}

// // // // //           {/* ─ PASSO 3: Resultado ─ */}
// // // // //           {simStep === 3 && (
// // // // //             <div className="sim-up">

// // // // //               {/* Banner sumário */}
// // // // //               <div style={{ background:"linear-gradient(135deg,#095b66,#0a7a89)", borderRadius:18, padding:"26px 36px", marginBottom:28, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:20 }}>
// // // // //                 <div style={{ display:"flex", gap:36, flexWrap:"wrap" }}>
// // // // //                   {[
// // // // //                     ["Tipo", TIPOS_PROJETO.find(t=>t.id===simForm.tipo)?.label ?? "–"],
// // // // //                     ["Área", `${simForm.area} m²`],
// // // // //                     ["Consumo", `${simForm.consumo} kWh/dia`],
// // // // //                     ["Referências", `${simResult.length} itens`],
// // // // //                   ].map(([k,v]) => (
// // // // //                     <div key={k}>
// // // // //                       <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,.5)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:3 }}>{k}</div>
// // // // //                       <div style={{ fontSize:15, fontWeight:900, color:"#fff" }}>{v}</div>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //                 <div style={{ display:"flex", gap:10 }}>
// // // // //                   <button onClick={()=>{setSimStep(2);}} style={{ background:"rgba(255,255,255,.15)", color:"#fff", border:"1.5px solid rgba(255,255,255,.3)", borderRadius:7, padding:"9px 18px", fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:6 }}>
// // // // //                     <svg viewBox="0 0 14 14" fill="none" width="11" height="11"><path d="M10 7H4M6.5 4.5L4 7l2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
// // // // //                     Editar
// // // // //                   </button>
// // // // //                   <a href="#contacto" className="btn-white" style={{ fontSize:11, padding:"9px 18px" }}>
// // // // //                     Pedir Orçamento →
// // // // //                   </a>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Nota aviso */}
// // // // //               <div style={{ background:"#fff8e0", border:"1.5px solid #f0d47a", borderRadius:10, padding:"11px 18px", marginBottom:22, display:"flex", alignItems:"flex-start", gap:10 }}>
// // // // //                 <svg viewBox="0 0 18 18" fill="none" width="15" height="15" style={{ flexShrink:0, marginTop:1 }}><circle cx="9" cy="9" r="7" stroke="#a07000" strokeWidth="1.5"/><path d="M9 5.5v3.5M9 12.5v.5" stroke="#a07000" strokeWidth="2" strokeLinecap="round"/></svg>
// // // // //                 <p style={{ fontSize:11.5, color:"#7a5000", lineHeight:1.65, margin:0 }}>
// // // // //                   <strong>Estimativa indicativa.</strong> Quantidades e especificações finais devem ser validadas por engenheiro habilitado. Esta lista serve de base para pedido de orçamento formal.
// // // // //                 </p>
// // // // //               </div>

// // // // //               {/* Filtros por categoria */}
// // // // //               <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:18 }}>
// // // // //                 {simCats.map(cat => (
// // // // //                   <button key={cat} className={`sim-cat-pill ${simCatFil===cat?"on":""}`}
// // // // //                     onClick={()=>setSimCatFil(cat)}>
// // // // //                     {cat} {cat!=="Todos" && <span style={{ fontWeight:600, opacity:.7 }}>({simResult.filter(m=>m.cat===cat).length})</span>}
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </div>

// // // // //               {/* Tabela de materiais */}
// // // // //               <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:16, overflow:"hidden", marginBottom:32 }}>
// // // // //                 {/* Cabeçalho */}
// // // // //                 <div style={{ display:"grid", gridTemplateColumns:"52px 1fr 100px", background:"#f8fbfc", borderBottom:"1.5px solid #dde8ea" }}>
// // // // //                   <div style={{ padding:"11px 0 11px 16px" }}/>
// // // // //                   <div style={{ padding:"11px 16px", fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase" }}>Material / Referência</div>
// // // // //                   <div style={{ padding:"11px 16px 11px 0", fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase", textAlign:"right" }}>Qtd.</div>
// // // // //                 </div>

// // // // //                 {simVisible.map((m, i) => {
// // // // //                   const c = CAT_CONFIG[m.cat] ?? { cor:"#095b66", fundo:"#e8f7f9" };
// // // // //                   return (
// // // // //                     <div key={i} className="sim-row"
// // // // //                       style={{ display:"grid", gridTemplateColumns:"52px 1fr 100px", alignItems:"center", borderBottom: i<simVisible.length-1 ? "1px solid #f0f5f6" : "none",
// // // // //                                animation:`simUp .3s ${Math.min(i * .025, 0.5)}s both ease-out` }}>
// // // // //                       {/* Cat icon */}
// // // // //                       <div style={{ padding:"13px 0 13px 14px" }}>
// // // // //                         <div style={{ width:28, height:28, borderRadius:7, background:c.fundo, display:"flex", alignItems:"center", justifyContent:"center" }}>
// // // // //                           <span style={{ fontSize:9, fontWeight:900, color:c.cor, letterSpacing:".04em" }}>{m.cat.slice(0,3).toUpperCase()}</span>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                       {/* Info */}
// // // // //                       <div style={{ padding:"13px 16px" }}>
// // // // //                         <div style={{ display:"flex", gap:7, alignItems:"center", marginBottom:3, flexWrap:"wrap" }}>
// // // // //                           <span style={{ fontSize:9.5, fontWeight:800, color:c.cor, background:c.fundo, borderRadius:4, padding:"2px 7px", letterSpacing:".05em", textTransform:"uppercase" }}>{m.cat}</span>
// // // // //                           <span style={{ fontSize:9.5, fontWeight:600, color:"#b0c4c6", fontFamily:"monospace" }}>{m.ref}</span>
// // // // //                         </div>
// // // // //                         <div style={{ fontSize:13.5, fontWeight:700, color:"#0a1c1e", lineHeight:1.3, marginBottom: m.obs ? 3 : 0 }}>{m.nome}</div>
// // // // //                         {m.obs && <div style={{ fontSize:11, color:"#7a9ea0", marginTop:1 }}>{m.obs}</div>}
// // // // //                         <div style={{ fontSize:10.5, color:"#b8ccce", marginTop:2, fontWeight:600 }}>{m.marca}</div>
// // // // //                       </div>
// // // // //                       {/* Qty */}
// // // // //                       <div style={{ padding:"13px 16px 13px 0", textAlign:"right" }}>
// // // // //                         <span style={{ fontSize:19, fontWeight:900, color:"#095b66", lineHeight:1 }}>{m.qtd}</span>
// // // // //                         <span style={{ fontSize:10.5, color:"#9bbbbe", display:"block", fontWeight:600 }}>{m.unidade}</span>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   );
// // // // //                 })}
// // // // //               </div>

// // // // //               {/* CTA final */}
// // // // //               <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:14, padding:"24px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:20, flexWrap:"wrap" }}>
// // // // //                 <div>
// // // // //                   <div style={{ fontSize:15, fontWeight:800, color:"#0a1c1e", marginBottom:4 }}>Quer um orçamento formal com preços reais?</div>
// // // // //                   <div style={{ fontSize:13, color:"#4a7275" }}>A nossa equipa analisa esta simulação e envia proposta detalhada em 24 horas.</div>
// // // // //                 </div>
// // // // //                 <div style={{ display:"flex", gap:10, flexShrink:0 }}>
// // // // //                   <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer"
// // // // //                     style={{ background:"#25D366", color:"#fff", border:"none", borderRadius:7, padding:"12px 20px", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:7, textDecoration:"none" }}>
// // // // //                     💬 WhatsApp
// // // // //                   </a>
// // // // //                   <a href="#contacto" className="btn-teal" style={{ fontSize:11 }}>
// // // // //                     Solicitar Proposta
// // // // //                     <svg viewBox="0 0 14 14" fill="none" width="12" height="12"><path d="M3 7h8M8 4.5l2.5 2.5L8 9.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // // //                   </a>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}

// // // // //         </div>
// // // // //       </section>

// // // // //             {/* ── GEOGRAPHIC PRESENCE — FIXED MAP ── */}
// // // // //       <section id="presenca" style={{ background: "#fff", padding: "96px 0" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // //           <Reveal>
// // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Presença Internacional</p>
// // // // //             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 12 }}>Onde estamos</h2>
// // // // //             <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 480, lineHeight: 1.75, marginBottom: 56 }}>
// // // // //               Operamos em Angola, Portugal, Cabo Verde e São Tomé e Príncipe. Clique nos pontos do mapa para mais detalhes.
// // // // //             </p>
// // // // //           </Reveal>
// // // // //           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
// // // // //             <Reveal>
// // // // //               <div style={{ background: "#f0f9fa", borderRadius: 20, padding: "8px", border: "1.5px solid #c8e8eb" }}>
// // // // //                 <WorldMap points={PRESENCE} activePoint={activePoint} onHover={i => setActivePoint(activePoint === i ? null : i)} />
// // // // //               </div>
// // // // //             </Reveal>
// // // // //             <Reveal delay={.1}>
// // // // //               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // // // //                 {PRESENCE.map((p, i) => (
// // // // //                   <button key={i} onClick={() => setActivePoint(activePoint === i ? null : i)}
// // // // //                     style={{ background: activePoint===i?"#095b66":"#fff", border: `1.5px solid ${activePoint===i?"#095b66":"#dde8ea"}`, borderRadius: 12, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start", cursor: "pointer", transition: "all .25s", textAlign: "left" }}>
// // // // //                     <div style={{ width: 36, height: 36, borderRadius: 8, background: activePoint===i?"rgba(255,255,255,.15)":"#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
// // // // //                       {i===0?"🇦🇴":i===1?"🇵🇹":i===2?"🇨🇻":"🇸🇹"}
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <div style={{ fontSize: 13, fontWeight: 800, color: activePoint===i?"#fff":"#0a1c1e", marginBottom: 3 }}>{p.name}</div>
// // // // //                       <div style={{ fontSize: 11, color: activePoint===i?"rgba(255,255,255,.65)":"#6a9598", lineHeight: 1.5, whiteSpace: "pre-line" }}>{p.detail}</div>
// // // // //                     </div>
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </Reveal>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── CLIENTS + BRANDS ── */}
// // // // //       <section style={{ background: "#f0f9fa", padding: "80px 0" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // //           <Reveal>
// // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Clientes</p>
// // // // //             <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Confiam em Nós</h2>
// // // // //           </Reveal>
// // // // //           <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 72 }}>
// // // // //             {CLIENTS.map((c, i) => (
// // // // //               <Reveal key={i} delay={i * .015}><div className="client-chip">{c}</div></Reveal>
// // // // //             ))}
// // // // //           </div>
// // // // //           <div style={{ borderTop: "1.5px solid #c8e8eb", paddingTop: 64 }}>
// // // // //             <Reveal>
// // // // //               <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Parceiros</p>
// // // // //               <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Marcas que Representamos</h2>
// // // // //             </Reveal>
// // // // //             <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
// // // // //               {BRANDS.map((b, i) => (
// // // // //                 <Reveal key={i} delay={i * .04}>
// // // // //                   <div className="brand-card">
// // // // //                     <div style={{ fontSize: 13, fontWeight: 900, color: "#0a1c1e", marginBottom: 4 }}>{b.name}</div>
// // // // //                     <div style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".08em", textTransform: "uppercase" }}>{b.role}</div>
// // // // //                   </div>
// // // // //                 </Reveal>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── CTA BAND ── */}
// // // // //       <section style={{ background: "#095b66" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 80px" }}>
// // // // //           <Reveal>
// // // // //             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 36, flexWrap: "wrap" }}>
// // // // //               <div>
// // // // //                 <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 10 }}>Pronto para começar?</h2>
// // // // //                 <p style={{ color: "rgba(255,255,255,.65)", maxWidth: 440, lineHeight: 1.75, fontSize: 15 }}>Peça um orçamento sem compromisso. A nossa equipa técnica responde em 24 horas.</p>
// // // // //               </div>
// // // // //               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
// // // // //                 <a href="#contacto" className="btn-white">Solicitar Orçamento</a>
// // // // //                 <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer" className="btn-outline-w" style={{ gap: 8 }}>💬 WhatsApp</a>
// // // // //               </div>
// // // // //             </div>
// // // // //           </Reveal>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── CONTACT ── */}
// // // // //       <section id="contacto" style={{ background: "#fff", padding: "96px 0" }}>
// // // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // // //           <Reveal>
// // // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Contacto</p>
// // // // //             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 56 }}>Fale Connosco</h2>
// // // // //           </Reveal>
// // // // //           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 72 }}>
// // // // //             <Reveal>
// // // // //               <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.8, marginBottom: 44 }}>Entre em contacto com o escritório mais próximo ou envie-nos uma mensagem e entraremos em contacto consigo brevemente.</p>
// // // // //               <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
// // // // //                 {[
// // // // //                   { flag: "🇦🇴", country: "Angola", info: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362 · (+244) 938 306 698\ngeral@multienergia.com.pt" },
// // // // //                   { flag: "🇵🇹", country: "Portugal", info: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909 · geral@multienergia.com.pt" },
// // // // //                   { flag: "🇸🇹", country: "São Tomé e Príncipe", info: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443 · geral@multienergia.com.pt" },
// // // // //                 ].map((c, i) => (
// // // // //                   <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
// // // // //                     <div style={{ width: 40, height: 40, borderRadius: 8, background: "#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.flag}</div>
// // // // //                     <div>
// // // // //                       <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 3, textTransform: "uppercase", letterSpacing: ".06em" }}>{c.country}</div>
// // // // //                       <div style={{ fontSize: 12.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{c.info}</div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //               <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer"
// // // // //                 style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 28, fontSize: 13, fontWeight: 700, color: "#095b66" }}>
// // // // //                 🌐 www.multienergia.com.pt
// // // // //               </a>
// // // // //             </Reveal>
// // // // //             <Reveal delay={.1}>
// // // // //               <form onSubmit={e => e.preventDefault()}
// // // // //                 style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 16, padding: "36px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
// // // // //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// // // // //                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Nome</span>
// // // // //                     <input className="input" placeholder="Nome completo" autoComplete="name"/>
// // // // //                   </label>
// // // // //                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Empresa</span>
// // // // //                     <input className="input" placeholder="Empresa" autoComplete="organization"/>
// // // // //                   </label>
// // // // //                 </div>
// // // // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>E-mail</span>
// // // // //                   <input className="input" type="email" placeholder="email@empresa.com" autoComplete="email"/>
// // // // //                 </label>
// // // // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Assunto</span>
// // // // //                   <select className="input" defaultValue="" style={{ appearance: "none", cursor: "pointer" }}>
// // // // //                     <option value="" disabled>Selecione o assunto</option>
// // // // //                     <option>Sistemas de Energia Solar</option>
// // // // //                     <option>EcoFlow / Armazenamento</option>
// // // // //                     <option>Quadros Elétricos BT</option>
// // // // //                     <option>Postos de Transformação MT</option>
// // // // //                     <option>UPS & Estabilizadores</option>
// // // // //                     <option>Mobilidade Elétrica</option>
// // // // //                     <option>Proteção Atmosférica (SPDA)</option>
// // // // //                     <option>Auditoria Energética</option>
// // // // //                     <option>Formação – Energy Academy</option>
// // // // //                     <option>Outro</option>
// // // // //                   </select>
// // // // //                 </label>
// // // // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Mensagem</span>
// // // // //                   <textarea className="input" placeholder="Descreva o seu projeto…"/>
// // // // //                 </label>
// // // // //                 <button type="submit" className="btn-teal" style={{ alignSelf: "flex-start", marginTop: 4 }}>
// // // // //                   Enviar Mensagem
// // // // //                   <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // // //                 </button>
// // // // //               </form>
// // // // //             </Reveal>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── FOOTER ── */}
// // // // //       <footer style={{ background: "#06161a", padding: "52px 80px 28px" }}>
// // // // //         <div style={{ maxWidth: 1280, margin: "0 auto" }}>
// // // // //           <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 44, marginBottom: 44 }}>
// // // // //             <div>
// // // // //               <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
// // // // //                 <div style={{ width: 32, height: 32, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center" }}>
// // // // //                   <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/></svg>
// // // // //                 </div>
// // // // //                 <span style={{ fontWeight: 900, fontSize: 15, color: "#fff" }}>Multi<span style={{ color: "#3ec8d4" }}>energia</span></span>
// // // // //               </div>
// // // // //               <p style={{ fontSize: 12.5, color: "#3a6a6e", lineHeight: 1.8, maxWidth: 240, marginBottom: 16 }}>Inovação tecnológica ao serviço da energia. Angola · Portugal · Cabo Verde · São Tomé.</p>
// // // // //               <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11.5, fontWeight: 600, color: "#3ec8d4" }}>www.multienergia.com.pt</a>
// // // // //             </div>
// // // // //             {[
// // // // //               { title: "Produtos", links: ["Sistemas Solares","EcoFlow PowerOcean","Quadros BT","Postos MT","UPS & Estabilizadores","Mobilidade Elétrica"] },
// // // // //               { title: "Serviços", links: ["Projeto & Engenharia","Instalação & Montagem","Auditoria Energética","Proteção Atmosférica","Manutenção","Energy Academy"] },
// // // // //               { title: "Empresa", links: ["Sobre Nós","Certificações","Clientes","Parceiros","Contacto"] },
// // // // //             ].map(col => (
// // // // //               <nav key={col.title}>
// // // // //                 <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#0a7a89", marginBottom: 16 }}>{col.title}</div>
// // // // //                 <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
// // // // //                   {col.links.map(l => <li key={l}><button className="footer-btn">{l}</button></li>)}
// // // // //                 </ul>
// // // // //               </nav>
// // // // //             ))}
// // // // //           </div>
// // // // //           <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
// // // // //             <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>© 2025 Multienergia. Todos os direitos reservados.</p>
// // // // //             <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>Alvará IRCOP nº 982/CCOP/IRCOP/SC/2025 · 5ª Classe</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </footer>
// // // // //     </div>
// // // // //   );
// // // // // }






// // // // "use client";
// // // // import React, { useState, useEffect, useRef } from "react";
// // // // import Link from "next/link";

// // // // /* ─────────────────────────────────────────────
// // // //    DATA
// // // // ───────────────────────────────────────────── */
// // // // const HERO_SLIDES = [
// // // //   {
// // // //     tag: "Eficiência · Transição · Inovação",
// // // //     line1: "Energia que",
// // // //     line2: "transforma",
// // // //     line3: "Angola",
// // // //     sub: "25 anos a fornecer soluções energéticas completas. Da geração ao consumo, do projeto à manutenção.",
// // // //   },
// // // //   {
// // // //     tag: "Representante Oficial EcoFlow · Angola",
// // // //     line1: "Independência",
// // // //     line2: "energética",
// // // //     line3: "total",
// // // //     sub: "Sistemas solares residenciais e industriais, armazenamento e inversores híbridos.",
// // // //   },
// // // //   {
// // // //     tag: "Fabricante Certificado · Legrand Partner",
// // // //     line1: "Fabricamos",
// // // //     line2: "o que outros",
// // // //     line3: "apenas vendem",
// // // //     sub: "Quadros elétricos BT fabricados em Luanda e Lisboa. Qualidade IEC 61439 garantida.",
// // // //   },
// // // // ];

// // // // const PRODUCTS = [
// // // //   {
// // // //     id: "solar",
// // // //     color: "#095b66",
// // // //     light: "#e8f7f9",
// // // //     name: "Sistemas de Energia Solar",
// // // //     specs: ["+50 MW instalados","Residencial · Industrial · Utility","Autoconsumo · Carports · Centrais"],
// // // //     brands: ["Huawei FusionSolar","SMA","Siemens","Nextracker"],
// // // //     desc: "Dimensionamos e instalamos sistemas fotovoltaicos completos. Do painel ao inversor, da ligação à rede ao armazenamento em bateria.",
// // // //   },
// // // //   {
// // // //     id: "ecoflow",
// // // //     color: "#0a7a89",
// // // //     light: "#e6f5f7",
// // // //     name: "EcoFlow PowerOcean",
// // // //     specs: ["5 kW a 29 kW","Até 45 kWh expansível","15 anos garantia · LFP"],
// // // //     brands: ["EcoFlow"],
// // // //     desc: "Inversor híbrido trifásico com armazenamento de energia expansível. Backup potente, instalação plug & play e monitorização remota.",
// // // //   },
// // // //   {
// // // //     id: "quadros",
// // // //     color: "#064e58",
// // // //     light: "#e5f4f6",
// // // //     name: "Quadros Elétricos BT",
// // // //     specs: ["Até 6300 A · Forma 1–4","Fabricação própria em Luanda","Parceiro Legrand · IEC 61439"],
// // // //     brands: ["Legrand"],
// // // //     desc: "Fabricamos quadros elétricos de baixa tensão com unidades industriais próprias em Luanda e Lisboa. Soluções padrão e à medida.",
// // // //   },
// // // //   {
// // // //     id: "ups",
// // // //     color: "#095b66",
// // // //     light: "#e8f7f9",
// // // //     name: "UPS & Estabilizadores",
// // // //     specs: ["Salicru até 800 KVA","Socomec MODULYS 200–4800 KVA","Online dupla conversão"],
// // // //     brands: ["Salicru","Socomec"],
// // // //     desc: "Energia crítica ininterrupta para data centers, hospitais, indústrias e telecomunicações. Proteção contra cortes, surtos e variações.",
// // // //   },
// // // //   {
// // // //     id: "mt",
// // // //     color: "#0a7a89",
// // // //     light: "#e6f5f7",
// // // //     name: "Postos de Transformação",
// // // //     specs: ["Toshiba TCSU 10–30 kV","500 a 2000 KVA","Plug & play · IP66 · Pré-montado"],
// // // //     brands: ["Toshiba T&D"],
// // // //     desc: "Postos compactos pré-montados para ligação de média tensão. Instalação rápida, segurança máxima (Class AB) e resistência climática.",
// // // //   },
// // // //   {
// // // //     id: "ve",
// // // //     color: "#064e58",
// // // //     light: "#e5f4f6",
// // // //     name: "Mobilidade Elétrica",
// // // //     specs: ["11 kW · 22 kW · 50 kW","Doméstico e via pública","Avaliação técnica incluída"],
// // // //     brands: ["Huawei","Tesla","Circutor"],
// // // //     desc: "Soluções completas para carregamento de veículos elétricos. Aconselhamento, instalação certificada e manutenção contínua.",
// // // //   },
// // // // ];

// // // // const SERVICES = [
// // // //   { title: "Projeto & Engenharia", short: "Dimensionamento técnico completo com esquemas unifilares e memoriais descritivos." },
// // // //   { title: "Instalação & Montagem", short: "Equipa certificada para quadros, sistemas solares, SPDA e postos de transformação." },
// // // //   { title: "Auditoria Energética", short: "Inspeção termográfica, análise de qualidade de energia e monitorização contínua." },
// // // //   { title: "Proteção Atmosférica", short: "Sistemas SPDA completos Franklin France. Conformidade NA 33:2014 e normas internacionais." },
// // // //   { title: "Manutenção Preventiva", short: "Planos periódicos para garantir continuidade operacional e longevidade dos equipamentos." },
// // // //   { title: "Energy Academy", short: "Formação especializada em energia solar, UPS, SPDA e eletrotecnia. Certificação reconhecida." },
// // // // ];

// // // // const CLIENTS = [
// // // //   "Sonangol","ETU Energias","Unitel","BFA","Fidelidade","MCA",
// // // //   "TVCabo","Omatapalo","SIC Notícias","Multitel","Refriango","Arreiou",
// // // //   "BancoBNI","Caixa Angola","Telepizza","InfraSat","Prodel","Azueira",
// // // //   "Governo de Angola","Standard Bank","IBM","TotalEnergies","Jumbo",
// // // //   "BancoBIC","CASAIS","ENDE","Axians","Sonangalp","Elecnor","Marlin",
// // // // ];

// // // // const BRANDS = [
// // // //   { name: "Huawei FusionSolar", role: "Parceiro Solar" },
// // // //   { name: "EcoFlow", role: "Rep. Oficial AO" },
// // // //   { name: "Toshiba T&D", role: "Rep. Oficial" },
// // // //   { name: "Franklin France", role: "Rep. Oficial SPDA" },
// // // //   { name: "Legrand", role: "Parceiro Quadros" },
// // // //   { name: "Salicru", role: "Rep. Oficial UPS" },
// // // //   { name: "Socomec", role: "Rep. Oficial UPS" },
// // // //   { name: "Siemens", role: "Parceiro" },
// // // //   { name: "Schneider Electric", role: "Parceiro" },
// // // //   { name: "SMA", role: "Parceiro Solar" },
// // // //   { name: "Circutor", role: "Parceiro VE" },
// // // //   { name: "Nextracker", role: "Parceiro Solar" },
// // // // ];

// // // // const PRESENCE = [
// // // //   { name: "Angola · Luanda",     lon: 13.23,  lat: -8.84, main: true,  detail: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362" },
// // // //   { name: "Portugal · Lisboa",   lon: -9.14,  lat: 38.72, main: true,  detail: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
// // // //   { name: "Cabo Verde · Praia",  lon: -23.51, lat: 14.93, main: false, detail: "Presença comercial activa" },
// // // //   { name: "São Tomé e Príncipe", lon:  6.61,  lat:  0.33, main: false, detail: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
// // // // ];

// // // // /* ─────────────────────────────────────────────
// // // //    HOOKS
// // // // ───────────────────────────────────────────── */
// // // // function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
// // // //   const ref = useRef<HTMLDivElement | null>(null);
// // // //   const [vis, setVis] = useState(false);
// // // //   useEffect(() => {
// // // //     const el = ref.current;
// // // //     if (!el) return;
// // // //     const obs = new IntersectionObserver(([e]) => {
// // // //       if (e.isIntersecting) { setVis(true); obs.disconnect(); }
// // // //     }, { threshold });
// // // //     obs.observe(el);
// // // //     return () => obs.disconnect();
// // // //   }, [threshold]);
// // // //   return [ref, vis];
// // // // }

// // // // function Reveal({ children, delay = 0, style = {} }: {
// // // //   children: React.ReactNode; delay?: number; style?: React.CSSProperties;
// // // // }) {
// // // //   const [ref, vis] = useInView();
// // // //   return (
// // // //     <div ref={ref as React.RefObject<HTMLDivElement>} style={{
// // // //       opacity: vis ? 1 : 0,
// // // //       transform: vis ? "none" : "translateY(22px)",
// // // //       transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
// // // //       ...style,
// // // //     }}>
// // // //       {children}
// // // //     </div>
// // // //   );
// // // // }

// // // // /* ─────────────────────────────────────────────
// // // //    WORLD MAP
// // // //    ViewBox 1000 × 500. All paths computed from
// // // //    real lon/lat via Web-Mercator:
// // // //      x = (lon+180)/360 * 1000
// // // //      y = 250 - 250/π * ln(tan(π/4 + lat*π/360))
// // // // ───────────────────────────────────────────── */
// // // // type PresencePoint = { name: string; lon: number; lat: number; main: boolean; detail: string };

// // // // function merc(lon: number, lat: number): [number, number] {
// // // //   const x = (lon + 180) / 360 * 1000;
// // // //   const y = 250 - (250 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
// // // //   return [+x.toFixed(1), +y.toFixed(1)];
// // // // }

// // // // /*
// // // //   All paths below are mathematically generated from real lon/lat coordinates.
// // // //   Projection: Web Mercator, viewBox 1000×500.
// // // //   x = (lon+180)/360*1000
// // // //   y = 250 − (250/π)·ln(tan(π/4 + lat·π/360))

// // // //   Key y-values: lat80=56, lat60=145, lat40=189, lat20=222,
// // // //                 lat0=250, lat-20=278, lat-40=311, lat-55=344
// // // // */
// // // // const LAND: Record<string, string> = {

// // // //   /* ── North America ────────────────────────────────────────────── */
// // // //   NORTH_AMERICA: `
// // // //     M 111.1,145.2 L 138.9,119.7 L 155.6,111.9 L 166.7,93.8
// // // //     L 183.3,88.6 L 200,88.6   L 222.2,93.8  L 244.4,88.6
// // // //     L 261.1,88.6 L 277.8,88.6 L 291.7,93.8  L 305.6,98.7
// // // //     L 316.7,88.6 L 319.4,107.7 L 316.7,119.7 L 322.2,145.2
// // // //     L 316.7,162.9 L 311.1,158.1 L 305.6,186.5 L 300,192.9
// // // //     L 291.7,198  L 286.1,210   L 277.8,214.1 L 263.9,218.7
// // // //     L 250,221.6  L 230.6,214.1 L 208.3,214.1 L 194.4,217.2
// // // //     L 175,202.2  L 161.1,194.6 L 155.6,189.3
// // // //     L 158.3,177.9 L 155.6,171.7 L 138.9,160.5
// // // //     L 125,150.6  L 108.3,145.2 Z`,

// // // //   /* ── Alaska ───────────────────────────────────────────────────── */
// // // //   ALASKA: `
// // // //     M 0,148   L 16.7,139.5 L 27.8,130.1 L 33.3,119.7
// // // //     L 50,119.7 L 66.7,130.1 L 77.8,139.5 L 88.9,139.5
// // // //     L 100,139.5 L 108.3,145.2 L 100,150.6 L 88.9,150.6
// // // //     L 77.8,155.7 L 61.1,158.1 L 44.4,158.1 L 27.8,155.7
// // // //     L 11.1,152 Z`,

// // // //   /* ── Greenland ────────────────────────────────────────────────── */
// // // //   GREENLAND: `
// // // //     M 355.6,83.1 L 375,56.1   L 400,27.6  L 427.8,22.8
// // // //     L 452.8,27.6 L 466.7,56.1 L 461.1,83.1 L 450,111.9
// // // //     L 433.3,130.1 L 416.7,145.2 L 400,139.5
// // // //     L 383.3,130.1 L 372.2,111.9 Z`,

// // // //   /* ── Central America + Caribbean ─────────────────────────────── */
// // // //   C_AMERICA: `
// // // //     M 230.6,214.1 L 244.4,210 L 255.6,214.1
// // // //     L 263.9,224.6 L 272.2,236 L 277.8,250
// // // //     L 263.9,247.2 L 255.6,241.7 L 247.2,233.2
// // // //     L 238.9,224.6 Z`,

// // // //   /* ── South America ────────────────────────────────────────────── */
// // // //   SOUTH_AMERICA: `
// // // //     M 277.8,250   L 288.9,247.2 L 300,247.2  L 316.7,243
// // // //     L 333.3,241.7 L 347.2,241.7 L 361.1,247.2
// // // //     L 375,252.8  L 388.9,257   L 402.8,257
// // // //     L 405.6,262.6 L 397.2,271.1 L 388.9,279.8
// // // //     L 377.8,285.9 L 366.7,290.5 L 355.6,300.3
// // // //     L 344.4,307.1 L 330.6,316.3 L 319.4,330.4
// // // //     L 316.7,344.3 L 311.1,344.3 L 305.6,336.5
// // // //     L 297.2,323.7 L 291.7,310.7 L 291.7,297
// // // //     L 288.9,284.4 L 280.6,271.1 L 275,257 Z`,

// // // //   /* ── Europe (main body) ───────────────────────────────────────── */
// // // //   EUROPE: `
// // // //     M 472.2,196.3 L 477.8,181.8 L 486.1,173.8
// // // //     L 494.4,174.8 L 495.8,182.8 L 508.3,183
// // // //     L 516.7,182.4 L 525,180.8   L 536.1,179.9
// // // //     L 541.7,181.8 L 550,181.8   L 558.3,179.9
// // // //     L 566.7,179.9 L 575,181.8   L 583.3,181.8
// // // //     L 591.7,169.6 L 588.9,165.2 L 575,159.4
// // // //     L 561.1,158.1 L 547.2,158.1 L 536.1,159.4
// // // //     L 527.8,151.9 L 513.9,150.6 L 508.3,158.1
// // // //     L 502.8,165.2 L 497.2,168.5 L 491.7,173.8
// // // //     L 486.1,173.8 L 477.8,181.8 Z
// // // //     M 583.3,181.8 L 591.7,181.8 L 600,185.6
// // // //     L 602.8,192.9 L 597.2,198   L 586.1,196.3
// // // //     L 577.8,196.3 L 575,190.5 Z`,

// // // //   /* ── Iberian Peninsula ────────────────────────────────────────── */
// // // //   IBERIA: `
// // // //     M 472.2,196.3 L 477.8,181.8 L 486.1,173.8
// // // //     L 491.7,173.8 L 495.8,182.8 L 508.3,183
// // // //     L 509.4,186   L 502.8,188.1 L 500.6,192.9
// // // //     L 497.2,195   L 486.1,197   L 481.9,195.2
// // // //     L 475.6,195   L 473.9,192.5 Z`,

// // // //   /* ── UK & Ireland ─────────────────────────────────────────────── */
// // // //   UK: `M 477.8,162.9 L 486.1,158.1 L 497.2,158.1
// // // //        L 502.8,162.9 L 497.2,167.4 L 488.9,169.6
// // // //        L 480.6,167.4 Z
// // // //        M 469.4,158.1 L 477.8,152 L 483.3,155.7
// // // //        L 480.6,165.2 L 472.2,165.2 Z`,

// // // //   /* ── Iceland ──────────────────────────────────────────────────── */
// // // //   ICELAND: `M 427.8,126.8 L 438.9,120.6 L 455.6,119.7
// // // //              L 461.1,124.1 L 452.8,130.1 L 438.9,133.3 Z`,

// // // //   /* ── Scandinavia ──────────────────────────────────────────────── */
// // // //   SCANDINAVIA: `
// // // //     M 513.9,150.6 L 527.8,151.9 L 536.1,158.1
// // // //     L 543.1,155.7 L 547.2,152   L 552.8,149.3
// // // //     L 558.3,147.9 L 566.7,146.6 L 572.2,142.4
// // // //     L 577.8,128.5 L 580.6,117.8 L 575,109.8
// // // //     L 566.7,107.7 L 555.6,107.7 L 550,115.9
// // // //     L 544.4,117.8 L 538.9,128.5 L 525,133.3
// // // //     L 519.4,133.3 L 513.9,139.5 Z`,

// // // //   /* ── Russia (European + Siberian) ────────────────────────────── */
// // // //   RUSSIA: `
// // // //     M 544.4,117.8 L 558.3,107.7 L 583.3,98.7
// // // //     L 611.1,93.8  L 638.9,93.8  L 666.7,93.8
// // // //     L 694.4,86.1  L 722.2,83.1  L 750,83.1
// // // //     L 777.8,86.1  L 805.6,93.8  L 833.3,98.7
// // // //     L 861.1,98.7  L 888.9,111.9 L 916.7,119.7
// // // //     L 944.4,119.7 L 966.7,107.7 L 980.6,98.7
// // // //     L 1000,98.7   L 1000,145.2
// // // //     L 972.2,158.1 L 944.4,158.1 L 916.7,145.2
// // // //     L 900,165.2   L 888.9,169.6 L 875,177.9
// // // //     L 861.1,185.6 L 847.2,185.6 L 833.3,185.6
// // // //     L 819.4,177.9 L 805.6,175.9 L 791.7,175.9
// // // //     L 777.8,175.9 L 763.9,171.7 L 750,169.6
// // // //     L 736.1,165.2 L 722.2,165.2 L 708.3,158.1
// // // //     L 694.4,158.1 L 680.6,165.2 L 666.7,158.1
// // // //     L 652.8,152   L 638.9,145.2 L 625,145.2
// // // //     L 611.1,139.5 L 597.2,139.5 L 588.9,133.3
// // // //     L 577.8,119.7 L 566.7,117.8 Z`,

// // // //   /* ── Central Asia / Turkey / Caucasus ───────────────────────── */
// // // //   C_ASIA: `
// // // //     M 538.9,181.8 L 555.6,179.9 L 566.7,179.9
// // // //     L 575,181.8   L 586.1,177.9 L 600,185.6
// // // //     L 616.7,185.6 L 630.6,181.8 L 644.4,181.8
// // // //     L 658.3,185.6 L 666.7,185.6 L 680.6,181.8
// // // //     L 694.4,175.9 L 708.3,172.2 L 716.7,175.9
// // // //     L 722.2,185.6 L 722.2,196.3 L 713.9,203
// // // //     L 700,206.3   L 686.1,206.3 L 672.2,203
// // // //     L 655.6,206.3 L 638.9,206.3 L 622.2,206.3
// // // //     L 611.1,200   L 600,192.9   L 591.7,181.8
// // // //     L 577.8,181.8 L 566.7,185.6 L 552.8,185.6
// // // //     L 541.7,185.6 Z`,

// // // //   /* ── Middle East / Arabian Peninsula ────────────────────────── */
// // // //   MIDDLE_EAST: `
// // // //     M 563.9,192.9 L 577.8,181.8 L 586.1,181.8
// // // //     L 600,185.6   L 611.1,185.6 L 622.2,185.6
// // // //     L 636.1,192.9 L 650,203     L 658.3,212.6
// // // //     L 663.9,218.7 L 655.6,228.9 L 644.4,234.6
// // // //     L 627.8,238.9 L 616.7,238.9 L 608.3,232.2
// // // //     L 597.2,224.6 L 591.7,215.6 L 577.8,212.6
// // // //     L 566.7,206.3 L 558.3,196.3 Z`,

// // // //   /* ── Africa ───────────────────────────────────────────────────── */
// // // //   AFRICA: `
// // // //     M 447.2,194.6 L 461.1,190.6 L 475,190.6
// // // //     L 488.9,192.9 L 502.8,194.6 L 516.7,194.6
// // // //     L 530.6,194.6 L 544.4,194.6 L 558.3,196.3
// // // //     L 572.2,203   L 583.3,209.5 L 594.4,209.5
// // // //     L 608.3,215.6 L 616.7,224.6 L 622.2,234.6
// // // //     L 625,241.7   L 619.4,250   L 613.9,258.3
// // // //     L 611.1,265.4 L 605.6,274   L 600,285.9
// // // //     L 594.4,296.3 L 588.9,302   L 575,305.4
// // // //     L 558.3,302   L 547.2,298.6 L 541.7,285.9
// // // //     L 536.1,271.1 L 530.6,258.3 L 522.2,247.2
// // // //     L 513.9,244.4 L 505.6,244.4 L 494.4,244.4
// // // //     L 483.3,244.4 L 472.2,244.4 L 461.1,241.7
// // // //     L 450,234.6   L 444.4,227.5 L 444.4,218.7
// // // //     L 447.2,207   Z
// // // //     M 444.4,227.5 L 436.1,230.4 L 425,238.9
// // // //     L 422.2,250   L 427.8,259.3 L 438.9,258.3
// // // //     L 447.2,250   L 447.2,238.9 Z`,

// // // //   /* ── Madagascar ───────────────────────────────────────────────── */
// // // //   MADAGASCAR: `
// // // //     M 616.7,262.6 L 622.2,262.6 L 633.3,265.4
// // // //     L 641.7,268.2 L 641.7,282.8 L 633.3,291.7
// // // //     L 622.2,291.7 L 613.9,282.8 L 611.1,271.1 Z`,

// // // //   /* ── India ────────────────────────────────────────────────────── */
// // // //   INDIA: `
// // // //     M 663.9,196.3 L 677.8,189.3 L 688.9,189.3
// // // //     L 700,192.9   L 711.1,200   L 719.4,199.7
// // // //     L 730.6,209.5 L 736.1,218.7 L 747.2,221.6
// // // //     L 750,228.9   L 744.4,236   L 733.3,241.7
// // // //     L 722.2,244.4 L 713.9,241.7 L 705.6,230.4
// // // //     L 694.4,221.6 L 688.9,224.6 L 683.3,221.6
// // // //     L 672.2,218.7 L 663.9,209.5 Z`,

// // // //   /* ── China / East Asia ────────────────────────────────────────── */
// // // //   CHINA: `
// // // //     M 694.4,175.9 L 708.3,172.2 L 716.7,175.9
// // // //     L 722.2,185.6 L 736.1,181.8 L 750,175.9
// // // //     L 763.9,171.7 L 777.8,168.5 L 791.7,165.2
// // // //     L 805.6,162.9 L 819.4,162.9 L 833.3,162.9
// // // //     L 850,169.6   L 861.1,181.8 L 858.3,192.9
// // // //     L 852.8,196.3 L 847.2,192.9 L 833.3,192.9
// // // //     L 819.4,196.3 L 808.3,209.5 L 800,221.6
// // // //     L 791.7,221.6 L 780.6,218.7 L 769.4,215.6
// // // //     L 755.6,221.6 L 747.2,221.6 L 736.1,218.7
// // // //     L 730.6,209.5 L 719.4,199.7 L 711.1,200
// // // //     L 700,192.9   Z`,

// // // //   /* ── SE Asia (Indochina + Malaysia) ──────────────────────────── */
// // // //   SE_ASIA: `
// // // //     M 777.8,218.7 L 791.7,221.6 L 800,218.7
// // // //     L 808.3,209.5 L 819.4,209.5 L 833.3,209.5
// // // //     L 844.4,218.7 L 838.9,228.9 L 827.8,234.6
// // // //     L 816.7,234.6 L 808.3,241.7 L 800,250
// // // //     L 808.3,258.3 L 816.7,258.3 L 822.2,252.8
// // // //     L 833.3,252.8 L 833.3,263.9 L 816.7,263.9
// // // //     L 808.3,258.3 L 797.2,255.6 L 786.1,250
// // // //     L 780.6,244.4 L 772.2,238.9 L 769.4,228.9
// // // //     L 769.4,221.6 Z`,

// // // //   /* ── Japan ────────────────────────────────────────────────────── */
// // // //   JAPAN: `
// // // //     M 855.6,192.9 L 861.1,185.6 L 872.2,181.8
// // // //     L 883.3,181.8 L 886.1,185.6 L 880.6,192.9
// // // //     L 872.2,196.3 L 861.1,199.7 Z
// // // //     M 877.8,199.7 L 883.3,192.9 L 894.4,189.3
// // // //     L 900,192.9   L 897.2,203   L 886.1,206.3
// // // //     L 877.8,203 Z`,

// // // //   /* ── Korea ────────────────────────────────────────────────────── */
// // // //   KOREA: `M 836.1,192.9 L 847.2,189.3 L 855.6,192.9
// // // //            L 855.6,203   L 847.2,206.3 L 836.1,203 Z`,

// // // //   /* ── Australia ────────────────────────────────────────────────── */
// // // //   AUSTRALIA: `
// // // //     M 808.3,278.4 L 819.4,272.5 L 833.3,268.2
// // // //     L 850,265.4   L 866.7,263.9 L 880.6,265.4
// // // //     L 894.4,269.6 L 908.3,272.5 L 916.7,281.3
// // // //     L 925,290.5   L 925,303.7   L 916.7,311.1
// // // //     L 905.6,311.1 L 894.4,311.1 L 883.3,307.7
// // // //     L 869.4,303.7 L 855.6,307.7 L 841.7,311.1
// // // //     L 827.8,307.7 L 816.7,300.3 L 808.3,290.5 Z
// // // //     M 916.7,281.3 L 930.6,275.4 L 941.7,281.3
// // // //     L 938.9,293.7 L 925,296.3 Z`,

// // // //   /* ── New Zealand ─────────────────────────────────────────────── */
// // // //   NEW_ZEALAND: `
// // // //     M 966.7,318.2 L 977.8,311.1 L 988.9,315.4
// // // //     L 988.9,326   L 977.8,329   L 966.7,322.1 Z
// // // //     M 972.2,329   L 983.3,318.2 L 994.4,322.1
// // // //     L 994.4,337   L 983.3,341   L 972.2,334 Z`,

// // // //   /* ── Cabo Verde (island cluster, accent) ─────────────────────── */
// // // //   CAPE_VERDE: `M 424,236 L 432,229 L 442,232 L 439,241 L 428,244 Z`,

// // // //   /* ── São Tomé (island, accent) ───────────────────────────────── */
// // // //   SAO_TOME: `M 516,252 L 523,245 L 530,248 L 528,257 L 519,260 Z`,
// // // // };

// // // // const ACCENT = new Set(["AFRICA", "IBERIA", "CAPE_VERDE", "SAO_TOME"]);

// // // // function WorldMap({ points, activePoint, onHover }: {
// // // //   points: PresencePoint[];
// // // //   activePoint: number | null;
// // // //   onHover: (i: number) => void;
// // // // }) {
// // // //   const dots = points.map(p => {
// // // //     const [cx, cy] = merc(p.lon, p.lat);
// // // //     return { ...p, cx, cy };
// // // //   });

// // // //   /* reference latitudes */
// // // //   const yEq   = merc(0,   0)[1];
// // // //   const yCanc = merc(0,  23.5)[1];
// // // //   const yCap  = merc(0, -23.5)[1];

// // // //   return (
// // // //     <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
// // // //       <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet"
// // // //         style={{ width: "100%", height: "auto", display: "block" }}>

// // // //         <rect width="1000" height="500" fill="#dff0f3" rx="8"/>

// // // //         {/* Latitude reference lines */}
// // // //         <line x1="0" y1={yEq}   x2="1000" y2={yEq}   stroke="#b8dfe8" strokeWidth="0.8" strokeDasharray="6 8"/>
// // // //         <line x1="0" y1={yCanc} x2="1000" y2={yCanc} stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10"/>
// // // //         <line x1="0" y1={yCap}  x2="1000" y2={yCap}  stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10"/>

// // // //         {/* Continents */}
// // // //         {Object.entries(LAND).map(([k, d]) => (
// // // //           <path key={k} d={d}
// // // //             fill={ACCENT.has(k) ? "#8ecdd6" : "#b2d8e0"}
// // // //             stroke="#7ab8c0" strokeWidth="0.7"
// // // //             strokeLinejoin="round" strokeLinecap="round"
// // // //           />
// // // //         ))}

// // // //         {/* Connection line between the 2 main offices */}
// // // //         {(() => { const m = dots.filter(p => p.main); return m.length >= 2 ? <line x1={m[0].cx} y1={m[0].cy} x2={m[1].cx} y2={m[1].cy} stroke="#095b66" strokeWidth="1.3" strokeDasharray="5 5" opacity="0.55"/> : null; })()}

// // // //         {/* Dots */}
// // // //         {dots.map((p, i) => (
// // // //           <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
// // // //             {p.main && <>
// // // //               <circle cx={p.cx} cy={p.cy} r="6" fill="#095b66" opacity="0.15">
// // // //                 <animate attributeName="r" values="6;20;6" dur="3s" repeatCount="indefinite"/>
// // // //                 <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite"/>
// // // //               </circle>
// // // //               <circle cx={p.cx} cy={p.cy} r="10" fill="#095b66" opacity="0.1"/>
// // // //             </>}
// // // //             <circle cx={p.cx} cy={p.cy}
// // // //               r={activePoint === i ? 9 : 6}
// // // //               fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#5cb8c0")}
// // // //               stroke="#fff" strokeWidth="2.5"
// // // //               style={{ transition: "r .2s, fill .2s" }}
// // // //             />
// // // //           </g>
// // // //         ))}
// // // //       </svg>

// // // //       {activePoint !== null && (() => {
// // // //         const d = dots[activePoint];
// // // //         const px = (d.cx / 1000) * 100;
// // // //         const py = (d.cy / 500) * 100;
// // // //         return (
// // // //           <div style={{
// // // //             position: "absolute", left: `${px}%`, top: `${py}%`,
// // // //             transform: `translate(${px > 62 ? "-108%" : "14px"}, ${py > 58 ? "-118%" : "14px"})`,
// // // //             background: "#fff", border: "1.5px solid #b8dde2", borderRadius: 10,
// // // //             padding: "12px 16px", minWidth: 222,
// // // //             boxShadow: "0 10px 36px rgba(9,91,102,.2)", zIndex: 10, pointerEvents: "none",
// // // //           }}>
// // // //             <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 5 }}>{d.name}</div>
// // // //             <div style={{ fontSize: 11.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{d.detail}</div>
// // // //           </div>
// // // //         );
// // // //       })()}
// // // //     </div>
// // // //   );
// // // // }

// // // // /* ─────────────────────────────────────────────
// // // //    SIMULADOR — tipos e motor de cálculo
// // // // ───────────────────────────────────────────── */
// // // // type TipoProjeto = "residencial" | "empresa" | "industrial" | "agricola" | "outro";
// // // // type SimStep = 1 | 2 | 3;

// // // // interface SimForm {
// // // //   tipo: TipoProjeto | "";
// // // //   area: string;
// // // //   consumo: string;
// // // //   autonomia: string;
// // // //   trifasico: boolean;
// // // //   gerador: boolean;
// // // //   spda: boolean;
// // // //   ve: boolean;
// // // //   solar: boolean;
// // // //   ups: boolean;
// // // //   localizacao: string;
// // // // }

// // // // interface MatItem {
// // // //   ref: string;
// // // //   nome: string;
// // // //   marca: string;
// // // //   qtd: number;
// // // //   unidade: string;
// // // //   cat: string;
// // // //   obs?: string;
// // // // }

// // // // const TIPOS_PROJETO = [
// // // //   { id: "residencial" as TipoProjeto, label: "Residencial", sub: "Moradia / Apartamento",
// // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M4 14L16 4l12 10v14H20v-9h-8v9H4V14z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg> },
// // // //   { id: "empresa" as TipoProjeto, label: "Empresa / Escritório", sub: "Comercial · Serviços",
// // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><rect x="4" y="6" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M10 28V20h5v8M17 28V20h5v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><rect x="9" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="19" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="14" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/></svg> },
// // // //   { id: "industrial" as TipoProjeto, label: "Industrial", sub: "Fábrica · Armazém",
// // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M2 28V14l8-6v6l8-6v6l8-6v20H2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><rect x="6" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="14" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="22" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><path d="M10 6V2M18 4V2M26 6V2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
// // // //   { id: "agricola" as TipoProjeto, label: "Agrícola / Rural", sub: "Bombeamento · Campo",
// // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="14" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M16 7V3M16 21v-4M9 14H5M27 14h-4M11 9L8 6M24 6l-3 3M11 19l-3 3M24 22l-3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="16" cy="14" r="2.5" fill="currentColor" opacity=".4"/><path d="M8 28h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
// // // //   { id: "outro" as TipoProjeto, label: "Outro / Misto", sub: "Projecto personalizado",
// // // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8"/><path d="M16 10v2M16 20v2M10 16h2M20 16h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="3" fill="currentColor" opacity=".45"/></svg> },
// // // // ];

// // // // const CAT_CONFIG: Record<string, { cor: string; fundo: string }> = {
// // // //   "Quadros BT":       { cor: "#064e58", fundo: "#e5f4f6" },
// // // //   "Protecção":        { cor: "#095b66", fundo: "#e8f7f9" },
// // // //   "Cablagem":         { cor: "#0a7a89", fundo: "#e6f5f7" },
// // // //   "Infraestrutura":   { cor: "#095b66", fundo: "#f0f9fa" },
// // // //   "Iluminação":       { cor: "#064e58", fundo: "#e5f4f6" },
// // // //   "Tomadas/Acabam.":  { cor: "#095b66", fundo: "#e8f7f9" },
// // // //   "Solar":            { cor: "#7a5200", fundo: "#fff7e0" },
// // // //   "Armazenamento":    { cor: "#7a5200", fundo: "#fff3cc" },
// // // //   "UPS":              { cor: "#095b66", fundo: "#e8f7f9" },
// // // //   "Média Tensão":     { cor: "#7a0000", fundo: "#fce8e8" },
// // // //   "SPDA":             { cor: "#8a4200", fundo: "#fff0e0" },
// // // //   "Mobilidade VE":    { cor: "#1a3a8f", fundo: "#e6eeff" },
// // // //   "Backup Gerador":   { cor: "#3a2a10", fundo: "#f0ebe0" },
// // // // };

// // // // function calcSimulacao(f: SimForm): MatItem[] {
// // // //   if (!f.tipo || !f.consumo || !f.area) return [];
// // // //   const kwh  = Math.max(1, parseFloat(f.consumo) || 10);
// // // //   const m2   = Math.max(10, parseFloat(f.area)   || 100);
// // // //   const aut  = parseInt(f.autonomia) || 1;
// // // //   const ind  = f.tipo === "industrial";
// // // //   const res  = f.tipo === "residencial";
// // // //   const agr  = f.tipo === "agricola";
// // // //   const mats: MatItem[] = [];

// // // //   /* ── QUADRO GERAL ── */
// // // //   const ampQG = kwh > 300 ? 630 : kwh > 80 ? 250 : kwh > 30 ? 125 : kwh > 15 ? 100 : 63;
// // // //   mats.push({ cat: "Quadros BT", ref: "QGD-BT",     nome: `Quadro Geral Distribuição BT ${ampQG}A`,         marca: "Legrand / Fabricação Própria", qtd: 1,  unidade: "un", obs: f.trifasico ? "Trifásico 3×400V" : "Monofásico 230V · IEC 61439" });
// // // //   if (!res && kwh > 20) mats.push({ cat: "Quadros BT", ref: "QS-ZONA",  nome: "Quadro Secundário de Zona",                      marca: "Legrand",                     qtd: Math.ceil(m2 / 400), unidade: "un", obs: "Distribuição por zonas / pisos" });

// // // //   /* ── PROTECÇÃO ── */
// // // //   const nZonas = res ? Math.ceil(m2 / 20) : ind ? Math.ceil(m2 / 40) : Math.ceil(m2 / 25);
// // // //   mats.push({ cat: "Protecção", ref: "DIS-16A",  nome: "Disjuntor Magnetotérmico 16A unipolar",          marca: "Legrand",  qtd: Math.max(2, Math.ceil(nZonas * .55)), unidade: "un" });
// // // //   mats.push({ cat: "Protecção", ref: "DIS-32A",  nome: "Disjuntor Magnetotérmico 32A unipolar",          marca: "Legrand",  qtd: Math.max(1, Math.ceil(nZonas * .35)), unidade: "un" });
// // // //   if (ind || f.trifasico) mats.push({ cat: "Protecção", ref: "DIS-TRI-63A", nome: "Disjuntor Trifásico 63A",               marca: "Legrand",  qtd: Math.max(1, Math.ceil(nZonas * .15)), unidade: "un", obs: "Circuitos de força / motores" });
// // // //   mats.push({ cat: "Protecção", ref: "DDI-30mA", nome: "Interruptor Diferencial 30mA 2P",                marca: "Legrand",  qtd: Math.ceil(nZonas / 4), unidade: "un" });
// // // //   if (!res) mats.push({ cat: "Protecção", ref: "DDI-300mA", nome: "Interruptor Diferencial 300mA 4P",            marca: "Legrand",  qtd: Math.ceil(nZonas / 8), unidade: "un", obs: "Protecção geral circuitos força" });
// // // //   mats.push({ cat: "Protecção", ref: "SURTO-T2", nome: "Descarregador Sobretensões Tipo 2",              marca: "Legrand",  qtd: 1, unidade: "un", obs: "Protecção QGD principal" });

// // // //   /* ── CABLAGEM ── */
// // // //   const fCab = ind ? 1.1 : res ? 0.85 : 1.0;
// // // //   mats.push({ cat: "Cablagem", ref: "CAB-2.5",  nome: "Cabo H07V-K 2,5mm² (anel/tomadas)",             marca: "Nexans",   qtd: Math.round(m2 * 1.6 * fCab), unidade: "m",  obs: "Circuitos iluminação e tomadas" });
// // // //   mats.push({ cat: "Cablagem", ref: "CAB-4",    nome: "Cabo H07V-K 4mm² (circuitos potência)",         marca: "Nexans",   qtd: Math.round(m2 * 0.7 * fCab), unidade: "m" });
// // // //   mats.push({ cat: "Cablagem", ref: "CAB-16",   nome: "Cabo H07V-K 16mm² (alimentação principal)",     marca: "Nexans",   qtd: Math.round(m2 * 0.4 * fCab), unidade: "m" });
// // // //   if (ind) mats.push({ cat: "Cablagem", ref: "CAB-35",  nome: "Cabo H07V-K 35mm² (acometimento BT)",    marca: "Nexans",   qtd: Math.round(m2 * 0.15), unidade: "m", obs: "Ligação QGBT / transformador" });

// // // //   /* ── INFRAESTRUTURA ── */
// // // //   mats.push({ cat: "Infraestrutura", ref: "CALHA-40",   nome: "Calha Técnica PVC 40×40mm",              marca: "Legrand",  qtd: Math.ceil(m2 * 0.45), unidade: "m" });
// // // //   if (!res) mats.push({ cat: "Infraestrutura", ref: "CALHA-100",  nome: "Calha Técnica PVC 100×60mm (corredor técnico)", marca: "Legrand", qtd: Math.ceil(m2 * 0.12), unidade: "m" });
// // // //   mats.push({ cat: "Infraestrutura", ref: "CORR-20",    nome: "Tubo Corrugado Flexível Ø20mm",          marca: "Legrand",  qtd: Math.round(m2 * 0.9), unidade: "m" });
// // // //   if (ind) mats.push({ cat: "Infraestrutura", ref: "BANDEJA-100", nome: "Bandeja Portacabos Aço 100mm",  marca: "Legrand",  qtd: Math.ceil(m2 * 0.08), unidade: "m", obs: "Distribuição aérea industrial" });
// // // //   mats.push({ cat: "Infraestrutura", ref: "CAIXA-ENT",  nome: "Caixa de Encastrar 2-módulos",           marca: "Legrand",  qtd: Math.ceil(m2 / (res ? 6 : 8)), unidade: "un" });

// // // //   /* ── ILUMINAÇÃO ── */
// // // //   const lux   = ind ? 200 : res ? 100 : 150;
// // // //   const wLum  = ind ? 150 : res ? 18 : 36;
// // // //   const nLum  = Math.ceil((m2 * lux) / (wLum * 100));
// // // //   const tipo  = ind ? "Armadura LED Industrial" : res ? "Painel LED Encastrado" : "Armadura LED Slim";
// // // //   const ip    = ind ? "IP65" : "IP44";
// // // //   mats.push({ cat: "Iluminação", ref: `LED-${wLum}W`, nome: `${tipo} ${wLum}W ≥130lm/W`,  marca: "Legrand / Philips", qtd: nLum, unidade: "un", obs: `${ip} · Eficiência classe A+` });
// // // //   mats.push({ cat: "Iluminação", ref: "BLQ-EMG-8W",   nome: "Bloco Autónomo Emergência 8W 3h", marca: "Legrand", qtd: Math.max(2, Math.ceil(nLum / 6)), unidade: "un", obs: "Sinalização saídas emergência" });

// // // //   /* ── TOMADAS / ACABAMENTOS ── */
// // // //   const nTom = Math.ceil(m2 / (res ? 7 : 10));
// // // //   mats.push({ cat: "Tomadas/Acabam.", ref: "TOM-16A", nome: res ? "Tomada Dupla Schuko 16A com terra" : "Tomada Industrial IP44 16A", marca: "Legrand", qtd: nTom, unidade: "un" });
// // // //   if (!res) mats.push({ cat: "Tomadas/Acabam.", ref: "TOM-32A-IND", nome: "Tomada Industrial IP44 32A 3P+N+T", marca: "Legrand", qtd: Math.ceil(m2 / 60), unidade: "un", obs: "Força motriz / equipamentos" });

// // // //   /* ── SOLAR ── */
// // // //   if (f.solar) {
// // // //     const hpico  = agr ? 5.5 : 5.0;               // horas pico solar Angola/Portugal
// // // //     const kwp    = Math.ceil(kwh / hpico * 1.15);  // 15% oversizing
// // // //     const nPain  = Math.ceil((kwp * 1000) / 580);
// // // //     const pInv   = kwp <= 5 ? 5 : kwp <= 15 ? 15 : kwp <= 30 ? 30 : kwp <= 60 ? 60 : 100;
// // // //     mats.push({ cat: "Solar", ref: "PV-580W",     nome: "Painel Solar Mono Half-Cut 580Wp",                  marca: "Huawei FusionSolar", qtd: nPain,             unidade: "un", obs: `Total: ${(nPain * 0.58).toFixed(1)} kWp · Eficiência ≥21,5%` });
// // // //     mats.push({ cat: "Solar", ref: `INV-${pInv}K`, nome: `Inversor Híbrido SUN2000-${pInv}KTL`,             marca: "Huawei",            qtd: 1,                 unidade: "un", obs: "MPPT duplo · monitorização remota · WiFi" });
// // // //     mats.push({ cat: "Solar", ref: "CAB-SOL-4",   nome: "Cabo Solar PV H1Z2Z2-K 4mm²",                     marca: "Prysmian",          qtd: nPain * 14,        unidade: "m" });
// // // //     mats.push({ cat: "Solar", ref: "ESTR-COBERT", nome: "Estrutura Fixação Alumínio em Cobertura",          marca: "K2 Systems",        qtd: Math.ceil(nPain / 2), unidade: "kit", obs: "Inclinação ajustável 10–35°" });
// // // //     mats.push({ cat: "Solar", ref: "CON-MC4",     nome: "Conector MC4 (par macho+fêmea)",                  marca: "Stäubli",           qtd: nPain * 2,         unidade: "par" });
// // // //     mats.push({ cat: "Solar", ref: "SURTO-PV",    nome: "Protecção Sobretensão DC Tipo 2",                 marca: "Legrand",           qtd: 1,                 unidade: "un", obs: "Protecção string box" });
// // // //     /* Armazenamento */
// // // //     if (aut > 0) {
// // // //       const kwhBat = Math.ceil(kwh * aut * 1.25);
// // // //       const nMod   = Math.ceil(kwhBat / 5);
// // // //       mats.push({ cat: "Armazenamento", ref: "BAT-LFP-5K", nome: "Módulo Bateria LFP 5kWh PowerOcean",       marca: "EcoFlow",           qtd: nMod,              unidade: "un", obs: `${kwhBat} kWh total · ${aut}d autonomia · 15 anos garantia` });
// // // //     }
// // // //   }

// // // //   /* ── UPS ── */
// // // //   if (f.ups) {
// // // //     const kva = res ? 3 : ind ? (kwh > 200 ? 200 : 80) : 20;
// // // //     const fab = kva > 40 ? "Socomec MODULYS" : "Salicru SLC TWIN RT";
// // // //     mats.push({ cat: "UPS", ref: `UPS-${kva}KVA`, nome: `UPS Online Dupla Conversão ${kva} KVA`, marca: fab, qtd: 1, unidade: "un", obs: "10 min autonomia interna · extensível via ext. battery" });
// // // //   }

// // // //   /* ── MÉDIA TENSÃO ── */
// // // //   if (ind && kwh > 100) {
// // // //     const kvaT = kwh > 500 ? 2000 : kwh > 200 ? 1000 : 500;
// // // //     mats.push({ cat: "Média Tensão", ref: `PT-${kvaT}K`, nome: `Posto Transformação Compacto ${kvaT} KVA`, marca: "Toshiba T&D TCSU", qtd: 1, unidade: "un", obs: "10–30 kV · Pré-montado · IP66 · Class AB" });
// // // //   }

// // // //   /* ── SPDA ── */
// // // //   if (f.spda) {
// // // //     const raio = ind ? 107 : 60;
// // // //     mats.push({ cat: "SPDA", ref: "PARARR-ESE",  nome: `Para-Raios ESE Franklin France R${raio}m`,      marca: "Franklin France", qtd: 1,                       unidade: "un", obs: `Raio de protecção: ${raio}m · IEC 62305` });
// // // //     mats.push({ cat: "SPDA", ref: "COND-DES-50", nome: "Condutor de Descida Cobre 50mm²",               marca: "Franklin France", qtd: Math.ceil(Math.sqrt(m2)*4), unidade: "m" });
// // // //     mats.push({ cat: "SPDA", ref: "ELEC-TERRA",  nome: "Eléctrodo Terra Aço Inox Ø14mm × 1,5m",         marca: "Franklin France", qtd: Math.ceil(m2 / 200) + 1, unidade: "un" });
// // // //     mats.push({ cat: "SPDA", ref: "SURTO-T1T2",  nome: "Descarregador Sobretensão Tipo 1+2",            marca: "Legrand",         qtd: 1,                       unidade: "un", obs: "Protecção combinada QGD principal" });
// // // //   }

// // // //   /* ── MOBILIDADE VE ── */
// // // //   if (f.ve) {
// // // //     const pvE = res ? 7.4 : ind ? 50 : 22;
// // // //     const nVE = res ? 1 : Math.max(2, Math.ceil(m2 / 400));
// // // //     const fab = pvE >= 50 ? "Circutor" : "Huawei";
// // // //     mats.push({ cat: "Mobilidade VE", ref: `VE-${pvE}KW`,  nome: `Posto Carregamento VE ${pvE}kW`,                  marca: fab,   qtd: nVE, unidade: "un", obs: pvE >= 50 ? "DC Rápido · CCS + CHAdeMO · OCPP" : pvE >= 22 ? "AC Trifásico · Type 2 · RFID" : "Modo 3 · Type 2 · App" });
// // // //     mats.push({ cat: "Mobilidade VE", ref: "CAB-VE-6",      nome: "Cabo Flexível H05VV-F 3×6mm² para VE",           marca: "Prysmian", qtd: nVE * (pvE >= 22 ? 30 : 15), unidade: "m" });
// // // //   }

// // // //   /* ── BACKUP / GERADOR ── */
// // // //   if (f.gerador) {
// // // //     const kvaG = kwh > 200 ? 200 : kwh > 80 ? 80 : kwh > 30 ? 30 : 15;
// // // //     mats.push({ cat: "Backup Gerador", ref: `GEN-${kvaG}K`,  nome: `Grupo Gerador Diesel ${kvaG} KVA Insonorizado`, marca: "Perkins / Stamford", qtd: 1, unidade: "un", obs: "Arranque automático · nível sonoro ≤70 dB(A)" });
// // // //     mats.push({ cat: "Backup Gerador", ref: "ATS-AUTO",       nome: "Comutador Automático ATS 4P",                   marca: "Legrand",           qtd: 1, unidade: "un", obs: "Comutação automática rede ↔ gerador <3s" });
// // // //     mats.push({ cat: "Backup Gerador", ref: "CAB-GEN-16",     nome: "Cabo Alimentação Gerador NYY 4×16mm²",          marca: "Nexans",            qtd: 30, unidade: "m" });
// // // //   }

// // // //   return mats;
// // // // }

// // // // /* ─────────────────────────────────────────────
// // // //    APP
// // // // ───────────────────────────────────────────── */
// // // // export default function Home() {
// // // //   const [slide, setSlide] = useState(0);
// // // //   const [animKey, setAnimKey] = useState(0);

// // // //   const [activeProduct, setActiveProduct] = useState(0);
// // // //   const [activePoint, setActivePoint] = useState<number | null>(null);
// // // //   const [loaderVis, setLoaderVis] = useState(true);
// // // //   const [loaderFade, setLoaderFade] = useState(false);
// // // //   const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

// // // //   /* ── Simulador state ── */
// // // //   const [simStep, setSimStep]     = useState<SimStep>(1);
// // // //   const [simForm, setSimForm]     = useState<SimForm>({
// // // //     tipo: "", area: "", consumo: "", autonomia: "1",
// // // //     trifasico: false, gerador: false, spda: false,
// // // //     ve: false, solar: false, ups: false, localizacao: "Luanda",
// // // //   });
// // // //   const [simResult, setSimResult] = useState<MatItem[]>([]);
// // // //   const [simCatFil, setSimCatFil] = useState("Todos");
// // // //   const setSim = (k: keyof SimForm, v: string | boolean) =>
// // // //     setSimForm(prev => ({ ...prev, [k]: v }));
// // // //   const simCats = ["Todos", ...Array.from(new Set(simResult.map(m => m.cat)))];
// // // //   const simVisible = simCatFil === "Todos" ? simResult : simResult.filter(m => m.cat === simCatFil);
// // // //   const runSim = () => {
// // // //     setSimResult(calcSimulacao(simForm));
// // // //     setSimCatFil("Todos");
// // // //     setSimStep(3);
// // // //   };

// // // //   const advance = () => { setSlide(s => (s + 1) % HERO_SLIDES.length); setAnimKey(k => k + 1); };

// // // //   useEffect(() => {
// // // //     timerRef.current = setInterval(advance, 6000);
// // // //     return () => clearInterval(timerRef.current);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const fn = () => setScrolled(window.scrollY > 48);
// // // //     window.addEventListener("scroll", fn);
// // // //     return () => window.removeEventListener("scroll", fn);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const hide = () => { setLoaderFade(true); setTimeout(() => setLoaderVis(false), 480); };
// // // //     const t = setTimeout(hide, 900);
// // // //     const onLoad = () => { clearTimeout(t); setTimeout(hide, 200); };
// // // //     if (document.readyState === "complete") onLoad();
// // // //     else window.addEventListener("load", onLoad);
// // // //     return () => { clearTimeout(t); window.removeEventListener("load", onLoad); };
// // // //   }, []);

// // // //   const cur = HERO_SLIDES[slide];
// // // //   const curProd = PRODUCTS[activeProduct];

// // // //   const NAV = [
// // // //     { label: "Produtos", href: "#produtos" },
// // // //     { label: "Serviços", href: "#servicos" },
// // // //     { label: "Simulador", href: "#simulador" },
// // // //     { label: "Presença", href: "#presenca" },
// // // //     { label: "Contacto", href: "#contacto" },
// // // //   ];

// // // //   return (
// // // //     <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", overflowX: "hidden" }}>
// // // //       {/* ── PAGE LOADER ── */}
// // // //       {loaderVis && (
// // // //         <div style={{ position:"fixed", inset:0, zIndex:9999, background:"#095b66", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:28, transition:"opacity .48s ease, transform .48s ease", opacity:loaderFade?0:1, transform:loaderFade?"scale(1.02)":"none", pointerEvents:loaderFade?"none":"auto" }}>
// // // //           <style>{`
// // // //             @keyframes _lp{0%,100%{opacity:1}50%{opacity:.4}}
// // // //             @keyframes _lb{0%{transform:scaleX(0)}60%{transform:scaleX(.75)}100%{transform:scaleX(1)}}
// // // //             @keyframes _ls{0%{background-position:-400px 0}100%{background-position:400px 0}}
// // // //           `}</style>
// // // //           <div style={{ display:"flex", alignItems:"center", gap:10, animation:"_lp 1.6s ease infinite" }}>
// // // //             <div style={{ width:44, height:44, borderRadius:10, background:"rgba(255,255,255,.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
// // // //               <svg viewBox="0 0 24 24" fill="none" width="26" height="26"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" stroke="#fff" strokeWidth=".5" strokeLinejoin="round"/></svg>
// // // //             </div>
// // // //             <span style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:900, fontSize:22, color:"#fff", letterSpacing:"-.01em" }}>
// // // //               Multi<span style={{ color:"rgba(255,255,255,.5)" }}>energia</span>
// // // //             </span>
// // // //           </div>
// // // //           <div style={{ width:160, height:2, background:"rgba(255,255,255,.15)", borderRadius:99, overflow:"hidden" }}>
// // // //             <div style={{ height:"100%", width:"100%", background:"linear-gradient(90deg,rgba(255,255,255,.6) 0%,#fff 50%,rgba(255,255,255,.6) 100%)", backgroundSize:"200% 100%", borderRadius:99, transformOrigin:"left", animation:"_lb 900ms cubic-bezier(.4,0,.2,1) forwards, _ls 1.2s linear infinite" }}/>
// // // //           </div>
// // // //           <div style={{ display:"flex", gap:6 }}>
// // // //             {[0,.15,.3].map((d,i) => <div key={i} style={{ width:5, height:5, borderRadius:"50%", background:"rgba(255,255,255,.6)", animation:`_lp 1.2s ${d}s ease infinite` }}/>)}
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //       <style>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
// // // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// // // //         html { scroll-behavior: smooth; }
// // // //         a { text-decoration: none; color: inherit; }
// // // //         button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
// // // //         ::selection { background: #095b66; color: #fff; }
// // // //         ::-webkit-scrollbar { width: 4px; }
// // // //         ::-webkit-scrollbar-thumb { background: #095b66; border-radius: 4px; }
// // // //         .nav-a { font-size: 11.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; transition: opacity .2s; }
// // // //         .nav-a:hover { opacity: .6; }
// // // //         @keyframes heroIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: none; } }
// // // //         .hero-in { animation: heroIn .5s cubic-bezier(.22,1,.36,1) both; }
// // // //         .dot { width: 7px; height: 7px; border-radius: 99px; cursor: pointer; border: none; transition: all .3s; background: rgba(255,255,255,.35); }
// // // //         .dot.on { width: 24px; background: #fff; }
// // // //         .prod-tab { padding: 14px 18px; border-radius: 8px; cursor: pointer; transition: all .2s; border: 1.5px solid transparent; display: flex; align-items: center; gap: 12px; }
// // // //         .prod-tab:hover { background: #f0f9fa; }
// // // //         .prod-tab.on { background: #095b66; border-color: #095b66; }
// // // //         .brand-card { background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; padding: 14px 18px; text-align: center; transition: all .25s; }
// // // //         .brand-card:hover { border-color: #095b66; background: #fff; box-shadow: 0 4px 18px rgba(9,91,102,.08); }
// // // //         .client-chip { background: #f0f9fa; border: 1.5px solid #c8e8eb; border-radius: 99px; padding: 7px 16px; font-size: 12px; font-weight: 700; color: #1a4a4f; white-space: nowrap; transition: all .2s; }
// // // //         .client-chip:hover { background: #095b66; color: #fff; border-color: #095b66; }
// // // //         .input { width: 100%; background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 7px; color: #1a2c2e; padding: 12px 15px; font-family: 'Montserrat',sans-serif; font-size: 13px; outline: none; transition: border-color .2s; }
// // // //         .input:focus { border-color: #095b66; background: #fff; }
// // // //         .input::placeholder { color: #9bbbbe; }
// // // //         textarea.input { resize: vertical; min-height: 100px; }
// // // //         .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
// // // //         .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(9,91,102,.25); }
// // // //         .btn-outline-w { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.55); border-radius: 6px; padding: 11px 26px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; }
// // // //         .btn-outline-w:hover { background: rgba(255,255,255,.12); border-color: #fff; }
// // // //         .btn-white { background: #fff; color: #095b66; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
// // // //         .btn-white:hover { background: #e8f5f7; transform: translateY(-2px); }
// // // //         .footer-btn { background: none; border: none; padding: 0; font-family: 'Montserrat',sans-serif; font-size: 13px; color: #4a7a7e; cursor: pointer; transition: color .2s; text-align: left; width: 100%; }
// // // //         .footer-btn:hover { color: #fff; }
// // // //         /* ── Simulador ── */
// // // //         @keyframes simUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }
// // // //         .sim-up { animation: simUp .4s ease both; }
// // // //         .sim-tipo-btn { border: 1.5px solid #dde8ea; border-radius: 14px; background: #fff; cursor: pointer; transition: all .22s; padding: 22px 16px; display: flex; flex-direction: column; align-items: center; gap: 10px; font-family: 'Montserrat',sans-serif; }
// // // //         .sim-tipo-btn:hover { border-color: #095b66; transform: translateY(-2px); box-shadow: 0 6px 22px rgba(9,91,102,.1); }
// // // //         .sim-tipo-btn.on { border-color: #095b66; background: #095b66; box-shadow: 0 8px 28px rgba(9,91,102,.22); transform: translateY(-3px); }
// // // //         .sim-field { display: flex; flex-direction: column; gap: 6px; }
// // // //         .sim-field label { font-size: 10px; font-weight: 700; color: #095b66; letter-spacing: .14em; text-transform: uppercase; }
// // // //         .sim-field small { font-size: 10.5px; color: #9bbbbe; margin-top: 2px; }
// // // //         .sim-inp { width: 100%; background: #fff; border: 1.5px solid #dde8ea; border-radius: 9px; color: #1a2c2e; padding: 11px 14px; font-family: 'Montserrat',sans-serif; font-size: 13px; font-weight: 600; outline: none; transition: border-color .2s, box-shadow .2s; }
// // // //         .sim-inp:focus { border-color: #095b66; box-shadow: 0 0 0 3px rgba(9,91,102,.08); }
// // // //         .sim-inp::placeholder { color: #b0c8ca; font-weight: 500; }
// // // //         .sim-sel { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%23095b66' stroke-width='2.2' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 13px center; padding-right:36px; }
// // // //         .sim-toggle { position:relative; display:inline-flex; width:40px; height:22px; flex-shrink:0; }
// // // //         .sim-toggle input { opacity:0; width:0; height:0; }
// // // //         .sim-slider { position:absolute; inset:0; border-radius:99px; background:#dde8ea; cursor:pointer; transition:background .2s; }
// // // //         .sim-slider::before { content:''; position:absolute; width:16px; height:16px; left:3px; bottom:3px; background:#fff; border-radius:50%; transition:transform .22s; box-shadow:0 1px 3px rgba(0,0,0,.15); }
// // // //         .sim-toggle input:checked + .sim-slider { background: #095b66; }
// // // //         .sim-toggle input:checked + .sim-slider::before { transform: translateX(18px); }
// // // //         .sim-cat-pill { padding: 6px 14px; border-radius: 99px; border: 1.5px solid #dde8ea; background: #fff; font-size: 11px; font-weight: 700; color: #4a7275; cursor: pointer; transition: all .18s; white-space: nowrap; font-family:'Montserrat',sans-serif; }
// // // //         .sim-cat-pill:hover { border-color: #095b66; color: #095b66; }
// // // //         .sim-cat-pill.on { background: #095b66; border-color: #095b66; color: #fff; }
// // // //         .sim-row:hover { background: #f8fcfc; }
// // // //         .sim-prog-line { height: 2px; flex:1; margin: 0 6px 20px; transition: background .3s; }
// // // //         @media (max-width: 900px) {
// // // //           .hide-mob { display: none !important; }
// // // //           .two { grid-template-columns: 1fr !important; }
// // // //           .three { grid-template-columns: 1fr 1fr !important; }
// // // //           .sp { padding-left: 22px !important; padding-right: 22px !important; }
// // // //           .hero-sp { padding: 86px 22px 0 !important; }
// // // //         }
// // // //         @media (max-width: 540px) { .three { grid-template-columns: 1fr !important; } }
// // // //       `}</style>



// // // //       {/* ── HERO ── */}
// // // //       <section style={{ position: "relative", minHeight: "100vh", background: "#095b66", overflow: "hidden", display: "flex", flexDirection: "column" }}>
// // // //         <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", background: "rgba(255,255,255,.04)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}/>
// // // //         <div style={{ position: "absolute", top: 0, right: 0, width: "30%", height: "100%", background: "rgba(255,255,255,.03)", clipPath: "polygon(25% 0, 100% 0, 100% 100%, 10% 100%)" }}/>
// // // //         <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }}/>
// // // //         <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", opacity: .06, pointerEvents: "none" }}>
// // // //           <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330"><path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/></svg>
// // // //         </div>
// // // //         <div className="hero-sp sp" style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", alignItems: "center", padding: "100px 80px 0", maxWidth: 1280, margin: "0 auto", width: "100%" }}>
// // // //           <div style={{ maxWidth: 660 }}>
// // // //             <div key={`tag-${animKey}`} className="hero-in" style={{ animationDelay: "0s" }}>
// // // //               <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, padding: "5px 14px", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.85)", marginBottom: 32 }}>
// // // //                 {cur.tag}
// // // //               </div>
// // // //             </div>
// // // //             <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s" }}>
// // // //               <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28 }}>
// // // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line1}</span>
// // // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)", color: "rgba(255,255,255,.4)" }}>{cur.line2}</span>
// // // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line3}</span>
// // // //               </h1>
// // // //             </div>
// // // //             <div key={`s-${animKey}`} className="hero-in" style={{ animationDelay: ".16s" }}>
// // // //               <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.7)", maxWidth: 480, marginBottom: 44 }}>{cur.sub}</p>
// // // //               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
// // // //                 <a href="#produtos" className="btn-white">Ver Soluções</a>
// // // //                 <a href="#contacto" className="btn-outline-w">Pedir Orçamento</a>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //         <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
// // // //           {HERO_SLIDES.map((_, i) => (
// // // //             <button key={i} className={`dot ${i === slide ? "on" : ""}`}
// // // //               onClick={() => { clearInterval(timerRef.current); setSlide(i); setAnimKey(k => k + 1); }}
// // // //               aria-label={`Slide ${i + 1}`}
// // // //             />
// // // //           ))}
// // // //         </div>
// // // //         <div style={{ height: 64, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)", marginTop: 40 }}/>
// // // //       </section>

// // // //       {/* ── PRODUCTS ── */}
// // // //       <section id="produtos" style={{ padding: "96px 0 80px" }}>
// // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // //           <Reveal>
// // // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 52, flexWrap: "wrap" }}>
// // // //               <div>
// // // //                 <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Catálogo</p>
// // // //                 <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05 }}>Os Nossos Produtos</h2>
// // // //               </div>
// // // //               <Link href="/produtos" style={{ fontSize: 12, fontWeight: 700, color: "#095b66", letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "2px solid #095b66", paddingBottom: 2 }}>
// // // //                 Ver todos →
// // // //               </Link>
// // // //             </div>
// // // //           </Reveal>

// // // //           <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32, alignItems: "start" }}>
// // // //             <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
// // // //               {PRODUCTS.map((p, i) => (
// // // //                 <Reveal key={i} delay={i * .05}>
// // // //                   <button className={`prod-tab ${activeProduct === i ? "on" : ""}`} onClick={() => setActiveProduct(i)} aria-label={p.name}>
// // // //                     <div style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, background: activeProduct === i ? "rgba(255,255,255,.15)" : p.light, display: "flex", alignItems: "center", justifyContent: "center" }}>
// // // //                       <svg viewBox="0 0 48 48" fill="none" width="22" height="22">
// // // //                         {i === 0 && <><circle cx="24" cy="24" r="8" fill={activeProduct===i?"#fff":"#095b66"}/><path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.5 11.5l3.5 3.5M33 33l3.5 3.5M11.5 36.5l3.5-3.5M33 15l3.5-3.5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/></>}
// // // //                         {i === 1 && <><rect x="14" y="6" width="20" height="36" rx="3" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="18" y="10" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"}/><rect x="18" y="18" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><rect x="18" y="26" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
// // // //                         {i === 2 && <><rect x="6" y="6" width="36" height="36" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="10" y="10" width="28" height="6" rx="1" fill={activeProduct===i?"#fff":"#095b66"} opacity=".7"/><circle cx="15" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"}/><circle cx="24" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><circle cx="33" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
// // // //                         {i === 3 && <><rect x="8" y="14" width="32" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 24l-5 6h6l-4 6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
// // // //                         {i === 4 && <><rect x="10" y="16" width="28" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 8v8" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/><path d="M16 8h16" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
// // // //                         {i === 5 && <><rect x="6" y="16" width="36" height="22" rx="5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><circle cx="14" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><circle cx="34" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><path d="M12 27h8l3 5h14" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M34 13v5M31 16h6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
// // // //                       </svg>
// // // //                     </div>
// // // //                     <span style={{ fontSize: 13, fontWeight: 700, color: activeProduct === i ? "#fff" : "#1a2c2e", textAlign: "left", lineHeight: 1.3 }}>{p.name}</span>
// // // //                   </button>
// // // //                 </Reveal>
// // // //               ))}
// // // //             </div>

// // // //             <Reveal key={activeProduct}>
// // // //               <div style={{ background: "linear-gradient(135deg, #095b66 0%, #0a7a89 100%)", borderRadius: 20, padding: "44px 48px", minHeight: 360, position: "relative", overflow: "hidden" }}>
// // // //                 <div style={{ position: "absolute", right: -30, top: -30, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,.05)", pointerEvents: "none" }}/>
// // // //                 <div style={{ position: "absolute", right: 30, bottom: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }}/>
// // // //                 <div style={{ position: "relative", zIndex: 1 }}>
// // // //                   <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
// // // //                     <svg viewBox="0 0 64 64" fill="none" width="44" height="44">
// // // //                       {activeProduct === 0 && <><circle cx="32" cy="32" r="10" fill="rgba(255,255,255,.9)"/><path d="M32 10v5M32 49v5M10 32h5M49 32h5M16.5 16.5l3.5 3.5M44 44l3.5 3.5M16.5 47.5l3.5-3.5M44 20l3.5-3.5" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/></>}
// // // //                       {activeProduct === 1 && <><rect x="18" y="6" width="28" height="52" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="22" y="12" width="20" height="8" rx="2" fill="rgba(255,255,255,.9)"/><rect x="22" y="24" width="20" height="8" rx="2" fill="rgba(255,255,255,.5)"/><rect x="22" y="36" width="20" height="8" rx="2" fill="rgba(255,255,255,.3)"/><path d="M28 60h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
// // // //                       {activeProduct === 2 && <><rect x="8" y="8" width="48" height="48" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="14" y="14" width="36" height="8" rx="2" fill="rgba(255,255,255,.9)" opacity=".8"/><circle cx="20" cy="34" r="5" fill="rgba(255,255,255,.9)"/><circle cx="32" cy="34" r="5" fill="rgba(255,255,255,.6)"/><circle cx="44" cy="34" r="5" fill="rgba(255,255,255,.3)"/></>}
// // // //                       {activeProduct === 3 && <><rect x="10" y="16" width="44" height="32" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 24l-8 10h10l-6 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>}
// // // //                       {activeProduct === 4 && <><rect x="12" y="20" width="40" height="30" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 8v12" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 8h24M20 14h24" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><rect x="20" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/><rect x="34" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/></>}
// // // //                       {activeProduct === 5 && <><rect x="8" y="22" width="48" height="26" rx="6" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><circle cx="20" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="20" cy="52" r="3" fill="rgba(255,255,255,.9)"/><circle cx="44" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="44" cy="52" r="3" fill="rgba(255,255,255,.9)"/><path d="M14 30h14l4 8h18" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M42 18v8M38 22h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
// // // //                     </svg>
// // // //                   </div>
// // // //                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 8 }}>{curProd.id.toUpperCase()}</p>
// // // //                   <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>{curProd.name}</h3>
// // // //                   <p style={{ fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}>{curProd.desc}</p>
// // // //                   <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
// // // //                     {curProd.specs.map(s => (
// // // //                       <span key={s} style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, fontSize: 11, fontWeight: 600, color: "#fff", padding: "4px 12px" }}>{s}</span>
// // // //                     ))}
// // // //                   </div>
// // // //                   <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
// // // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: ".1em", textTransform: "uppercase" }}>Marcas:</span>
// // // //                     {curProd.brands.map(b => (
// // // //                       <span key={b} style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,.8)", background: "rgba(255,255,255,.1)", borderRadius: 5, padding: "3px 10px" }}>{b}</span>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </Reveal>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ── SERVICES ── */}
// // // //       <section id="servicos" style={{ background: "#095b66", padding: "96px 0" }}>
// // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // //           <Reveal>
// // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 8 }}>— Serviços</p>
// // // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 56, flexWrap: "wrap" }}>
// // // //               <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#fff", lineHeight: 1.05 }}>O que fazemos</h2>
// // // //               <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 380, lineHeight: 1.7 }}>Da concepção ao comissionamento. Suporte especializado em todas as fases do seu projeto energético.</p>
// // // //             </div>
// // // //           </Reveal>
// // // //           <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
// // // //             {SERVICES.map((s, i) => (
// // // //               <Reveal key={i} delay={i * .07}>
// // // //                 <div style={{ background: i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)", border: "1.5px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "32px 28px", transition: "all .3s", cursor: "default" }}
// // // //                   onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background="rgba(255,255,255,.12)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,.25)"; (e.currentTarget as HTMLDivElement).style.transform="translateY(-4px)"; }}
// // // //                   onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background=i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,.1)"; (e.currentTarget as HTMLDivElement).style.transform="none"; }}>
// // // //                   <div style={{ width: 58, height: 58, borderRadius: 14, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
// // // //                     <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
// // // //                       {i === 0 && <><rect x="6" y="6" width="36" height="36" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M14 24h20M24 14v20" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="14" cy="14" r="3" fill="rgba(255,255,255,.4)"/><circle cx="34" cy="34" r="3" fill="rgba(255,255,255,.4)"/></>}
// // // //                       {i === 1 && <><circle cx="24" cy="24" r="18" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M24 14v10l6 6" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 24h4M34 24h4M24 10v4M24 34v4" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/></>}
// // // //                       {i === 2 && <><path d="M8 36l8-8 6 6 10-12 8 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="6" width="36" height="28" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 42h16M24 34v8" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round"/></>}
// // // //                       {i === 3 && <><path d="M24 6l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L24 23.4l-6.9 3.8 1.3-7.7-5.6-5.4 7.7-1.1z" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinejoin="round"/><path d="M14 30l-6 12M34 30l6 12" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/></>}
// // // //                       {i === 4 && <><path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M32 8l8 0 0 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 8L28 20" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 24l4-6 4 6" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
// // // //                       {i === 5 && <><rect x="6" y="14" width="36" height="26" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 14V10a8 8 0 0116 0v4" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M24 26v4" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="24" cy="24" r="3" fill="rgba(255,255,255,.9)"/></>}
// // // //                     </svg>
// // // //                   </div>
// // // //                   <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
// // // //                   <p style={{ fontSize: 13, color: "rgba(255,255,255,.62)", lineHeight: 1.7 }}>{s.short}</p>
// // // //                 </div>
// // // //               </Reveal>
// // // //             ))}
// // // //           </div>
// // // //           <Reveal style={{ marginTop: 52, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
// // // //             <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
// // // //               <div style={{ width: 48, height: 48, background: "rgba(255,255,255,.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</div>
// // // //               <div>
// // // //                 <div style={{ fontSize: 10, color: "rgba(255,255,255,.45)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>Angola · Suporte</div>
// // // //                 <a href="tel:+244933153362" style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>+244 933 153 362</a>
// // // //               </div>
// // // //             </div>
// // // //             <a href="#contacto" className="btn-white">Solicitar Visita Técnica</a>
// // // //           </Reveal>
// // // //         </div>
// // // //       </section>

// // // //       {/* ── SIMULADOR DE PROJECTO ── */}
// // // //       <section id="simulador" style={{ background: "#f0f9fa", padding: "96px 0" }}>
// // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>

// // // //           {/* Header */}
// // // //           <Reveal>
// // // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
// // // //               <div>
// // // //                 <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Simulador</p>
// // // //                 <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 10 }}>Simule o seu Projecto</h2>
// // // //                 <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 500, lineHeight: 1.75 }}>
// // // //                   Obtenha a lista indicativa de materiais eléctricos para o seu projecto em segundos, com base em pressupostos técnicos reais.
// // // //                 </p>
// // // //               </div>
// // // //               <div style={{ display:"flex", alignItems:"center", gap:9, background:"#fff", border:"1.5px solid #dde8ea", borderRadius:12, padding:"11px 20px" }}>
// // // //                 <svg viewBox="0 0 20 20" fill="none" width="15" height="15"><circle cx="10" cy="10" r="8" stroke="#095b66" strokeWidth="1.5"/><path d="M10 6v4l3 3" stroke="#095b66" strokeWidth="1.5" strokeLinecap="round"/></svg>
// // // //                 <span style={{ fontSize:12, fontWeight:700, color:"#095b66" }}>Resultado em &lt;30 segundos</span>
// // // //               </div>
// // // //             </div>
// // // //           </Reveal>

// // // //           {/* Stepper */}
// // // //           <div style={{ display:"flex", alignItems:"center", maxWidth:520, marginBottom:44 }}>
// // // //             {([["1","Tipo de Projecto"],["2","Pressupostos"],["3","Resultado"]] as [string,string][]).map(([n,lbl], i) => (
// // // //               <React.Fragment key={n}>
// // // //                 <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
// // // //                   <div style={{ width:36, height:36, borderRadius:"50%", background: simStep > +n ? "#095b66" : simStep === +n ? "#095b66" : "#e8eef0", border:`2px solid ${simStep >= +n ? "#095b66" : "#dde8ea"}`, display:"flex", alignItems:"center", justifyContent:"center", transition:"all .3s" }}>
// // // //                     {simStep > +n
// // // //                       ? <svg viewBox="0 0 14 14" fill="none" width="12" height="12"><path d="M2 7l4 4 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // //                       : <span style={{ fontSize:12, fontWeight:800, color: simStep >= +n ? "#fff" : "#9bbbbe" }}>{n}</span>
// // // //                     }
// // // //                   </div>
// // // //                   <span style={{ fontSize:9.5, fontWeight:700, color: simStep >= +n ? "#095b66" : "#9bbbbe", textTransform:"uppercase", letterSpacing:".08em", whiteSpace:"nowrap" }}>{lbl}</span>
// // // //                 </div>
// // // //                 {i < 2 && <div className="sim-prog-line" style={{ background: simStep > +n ? "#095b66" : "#dde8ea" }}/>}
// // // //               </React.Fragment>
// // // //             ))}
// // // //           </div>

// // // //           {/* ─ PASSO 1: Tipo ─ */}
// // // //           {simStep === 1 && (
// // // //             <div className="sim-up">
// // // //               <p style={{ fontSize:11.5, fontWeight:700, color:"#4a7275", marginBottom:20, textTransform:"uppercase", letterSpacing:".1em" }}>Seleccione o tipo de projecto:</p>
// // // //               <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:12, marginBottom:40 }} className="three">
// // // //                 {TIPOS_PROJETO.map(t => (
// // // //                   <button key={t.id} className={`sim-tipo-btn ${simForm.tipo === t.id ? "on" : ""}`}
// // // //                     onClick={() => setSim("tipo", t.id)}>
// // // //                     <div style={{ color: simForm.tipo === t.id ? "#fff" : "#095b66" }}>{t.icon}</div>
// // // //                     <div style={{ textAlign:"center" }}>
// // // //                       <div style={{ fontSize:12.5, fontWeight:800, color: simForm.tipo === t.id ? "#fff" : "#0a1c1e", marginBottom:3, lineHeight:1.25 }}>{t.label}</div>
// // // //                       <div style={{ fontSize:10, fontWeight:600, color: simForm.tipo === t.id ? "rgba(255,255,255,.6)" : "#9bbbbe" }}>{t.sub}</div>
// // // //                     </div>
// // // //                   </button>
// // // //                 ))}
// // // //               </div>
// // // //               <div style={{ display:"flex", justifyContent:"flex-end" }}>
// // // //                 <button disabled={!simForm.tipo} onClick={() => setSimStep(2)} className="btn-teal"
// // // //                   style={{ opacity: simForm.tipo ? 1 : .45, cursor: simForm.tipo ? "pointer" : "not-allowed" }}>
// // // //                   Continuar
// // // //                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M4 8h8M9 5l3 3-3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //           {/* ─ PASSO 2: Pressupostos ─ */}
// // // //           {simStep === 2 && (
// // // //             <div className="sim-up">
// // // //               <div className="two" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, marginBottom:36 }}>

// // // //                 {/* Campos numéricos */}
// // // //                 <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
// // // //                   <div className="sim-field">
// // // //                     <label>Área Total (m²) *</label>
// // // //                     <input className="sim-inp" type="number" min="10" placeholder={simForm.tipo==="residencial"?"Ex: 120":simForm.tipo==="industrial"?"Ex: 2000":"Ex: 400"} value={simForm.area} onChange={e=>setSim("area",e.target.value)}/>
// // // //                     <small>Área total a electrificar em m²</small>
// // // //                   </div>
// // // //                   <div className="sim-field">
// // // //                     <label>Consumo Estimado (kWh/dia) *</label>
// // // //                     <input className="sim-inp" type="number" min="1" placeholder={simForm.tipo==="residencial"?"Ex: 15":simForm.tipo==="industrial"?"Ex: 300":"Ex: 60"} value={simForm.consumo} onChange={e=>setSim("consumo",e.target.value)}/>
// // // //                     <small>{simForm.tipo==="residencial"?"Tipicamente 8–25 kWh/dia para moradia":simForm.tipo==="industrial"?"Tipicamente 100–800 kWh/dia para fábrica":"Consulte a factura eléctrica ou medição"}</small>
// // // //                   </div>
// // // //                   <div className="sim-field">
// // // //                     <label>Localização</label>
// // // //                     <select className="sim-inp sim-sel" value={simForm.localizacao} onChange={e=>setSim("localizacao",e.target.value)}>
// // // //                       {["Luanda","Benguela","Huambo","Lobito","Namibe","Cabinda","Malanje","Lisboa","Porto","Praia","São Tomé","Outro"].map(l=><option key={l}>{l}</option>)}
// // // //                     </select>
// // // //                   </div>
// // // //                   {simForm.solar && (
// // // //                     <div className="sim-field">
// // // //                       <label>Autonomia em Bateria</label>
// // // //                       <select className="sim-inp sim-sel" value={simForm.autonomia} onChange={e=>setSim("autonomia",e.target.value)}>
// // // //                         <option value="0">Sem armazenamento (só injecção)</option>
// // // //                         <option value="1">1 dia</option>
// // // //                         <option value="2">2 dias</option>
// // // //                         <option value="3">3 dias (máx. resiliência)</option>
// // // //                       </select>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>

// // // //                 {/* Toggles */}
// // // //                 <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:16, padding:"24px" }}>
// // // //                   <p style={{ fontSize:10, fontWeight:700, color:"#095b66", letterSpacing:".14em", textTransform:"uppercase", marginBottom:16 }}>Equipamentos adicionais:</p>
// // // //                   {([
// // // //                     ["solar",     "Sistema Solar Fotovoltaico",    "Painéis + inversor + armazenamento LFP"],
// // // //                     ["ups",       "UPS / Estabilizador",            "Alimentação ininterrupta de cargas críticas"],
// // // //                     ["spda",      "Protecção Atmosférica SPDA",    "Para-raios ESE + aterramento Franklin France"],
// // // //                     ["ve",        "Postos de Carregamento VE",      "Veículos eléctricos · Modo 3 / DC rápido"],
// // // //                     ["gerador",   "Grupo Gerador de Backup",        "Diesel insonorizado + ATS automático"],
// // // //                     ["trifasico", "Instalação Trifásica 400V",      "Força motriz / motores / equipamentos pesados"],
// // // //                   ] as [keyof SimForm, string, string][]).map(([k,lbl,sub], i, arr) => (
// // // //                     <div key={k} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, padding:"13px 0", borderBottom: i<arr.length-1 ? "1px solid #f0f5f6" : "none" }}>
// // // //                       <div>
// // // //                         <div style={{ fontSize:13, fontWeight:700, color:"#0a1c1e" }}>{lbl}</div>
// // // //                         <div style={{ fontSize:10.5, color:"#9bbbbe", marginTop:2 }}>{sub}</div>
// // // //                       </div>
// // // //                       <label className="sim-toggle">
// // // //                         <input type="checkbox" checked={!!simForm[k]} onChange={e=>setSim(k,e.target.checked)}/>
// // // //                         <span className="sim-slider"/>
// // // //                       </label>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //               <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
// // // //                 <button onClick={()=>setSimStep(1)} style={{ background:"none", border:"1.5px solid #dde8ea", borderRadius:7, padding:"12px 22px", fontSize:12, fontWeight:700, color:"#4a7275", cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:7 }}>
// // // //                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M12 8H4M7 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // //                   Voltar
// // // //                 </button>
// // // //                 <button disabled={!simForm.area || !simForm.consumo} onClick={runSim} className="btn-teal"
// // // //                   style={{ opacity: (simForm.area && simForm.consumo) ? 1 : .45, cursor: (simForm.area && simForm.consumo) ? "pointer" : "not-allowed" }}>
// // // //                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0z" stroke="#fff" strokeWidth="1.5"/><path d="M10 8H6M8 6v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
// // // //                   Gerar Lista de Materiais
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //           {/* ─ PASSO 3: Resultado ─ */}
// // // //           {simStep === 3 && (
// // // //             <div className="sim-up">

// // // //               {/* Banner sumário */}
// // // //               <div style={{ background:"linear-gradient(135deg,#095b66,#0a7a89)", borderRadius:18, padding:"26px 36px", marginBottom:28, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:20 }}>
// // // //                 <div style={{ display:"flex", gap:36, flexWrap:"wrap" }}>
// // // //                   {[
// // // //                     ["Tipo", TIPOS_PROJETO.find(t=>t.id===simForm.tipo)?.label ?? "–"],
// // // //                     ["Área", `${simForm.area} m²`],
// // // //                     ["Consumo", `${simForm.consumo} kWh/dia`],
// // // //                     ["Referências", `${simResult.length} itens`],
// // // //                   ].map(([k,v]) => (
// // // //                     <div key={k}>
// // // //                       <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,.5)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:3 }}>{k}</div>
// // // //                       <div style={{ fontSize:15, fontWeight:900, color:"#fff" }}>{v}</div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //                 <div style={{ display:"flex", gap:10 }}>
// // // //                   <button onClick={()=>{setSimStep(2);}} style={{ background:"rgba(255,255,255,.15)", color:"#fff", border:"1.5px solid rgba(255,255,255,.3)", borderRadius:7, padding:"9px 18px", fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:6 }}>
// // // //                     <svg viewBox="0 0 14 14" fill="none" width="11" height="11"><path d="M10 7H4M6.5 4.5L4 7l2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
// // // //                     Editar
// // // //                   </button>
// // // //                   <a href="#contacto" className="btn-white" style={{ fontSize:11, padding:"9px 18px" }}>
// // // //                     Pedir Orçamento →
// // // //                   </a>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Nota aviso */}
// // // //               <div style={{ background:"#fff8e0", border:"1.5px solid #f0d47a", borderRadius:10, padding:"11px 18px", marginBottom:22, display:"flex", alignItems:"flex-start", gap:10 }}>
// // // //                 <svg viewBox="0 0 18 18" fill="none" width="15" height="15" style={{ flexShrink:0, marginTop:1 }}><circle cx="9" cy="9" r="7" stroke="#a07000" strokeWidth="1.5"/><path d="M9 5.5v3.5M9 12.5v.5" stroke="#a07000" strokeWidth="2" strokeLinecap="round"/></svg>
// // // //                 <p style={{ fontSize:11.5, color:"#7a5000", lineHeight:1.65, margin:0 }}>
// // // //                   <strong>Estimativa indicativa.</strong> Quantidades e especificações finais devem ser validadas por engenheiro habilitado. Esta lista serve de base para pedido de orçamento formal.
// // // //                 </p>
// // // //               </div>

// // // //               {/* Filtros por categoria */}
// // // //               <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:18 }}>
// // // //                 {simCats.map(cat => (
// // // //                   <button key={cat} className={`sim-cat-pill ${simCatFil===cat?"on":""}`}
// // // //                     onClick={()=>setSimCatFil(cat)}>
// // // //                     {cat} {cat!=="Todos" && <span style={{ fontWeight:600, opacity:.7 }}>({simResult.filter(m=>m.cat===cat).length})</span>}
// // // //                   </button>
// // // //                 ))}
// // // //               </div>

// // // //               {/* Tabela de materiais */}
// // // //               <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:16, overflow:"hidden", marginBottom:32 }}>
// // // //                 {/* Cabeçalho */}
// // // //                 <div style={{ display:"grid", gridTemplateColumns:"52px 1fr 100px", background:"#f8fbfc", borderBottom:"1.5px solid #dde8ea" }}>
// // // //                   <div style={{ padding:"11px 0 11px 16px" }}/>
// // // //                   <div style={{ padding:"11px 16px", fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase" }}>Material / Referência</div>
// // // //                   <div style={{ padding:"11px 16px 11px 0", fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase", textAlign:"right" }}>Qtd.</div>
// // // //                 </div>

// // // //                 {simVisible.map((m, i) => {
// // // //                   const c = CAT_CONFIG[m.cat] ?? { cor:"#095b66", fundo:"#e8f7f9" };
// // // //                   return (
// // // //                     <div key={i} className="sim-row"
// // // //                       style={{ display:"grid", gridTemplateColumns:"52px 1fr 100px", alignItems:"center", borderBottom: i<simVisible.length-1 ? "1px solid #f0f5f6" : "none",
// // // //                                animation:`simUp .3s ${Math.min(i * .025, 0.5)}s both ease-out` }}>
// // // //                       {/* Cat icon */}
// // // //                       <div style={{ padding:"13px 0 13px 14px" }}>
// // // //                         <div style={{ width:28, height:28, borderRadius:7, background:c.fundo, display:"flex", alignItems:"center", justifyContent:"center" }}>
// // // //                           <span style={{ fontSize:9, fontWeight:900, color:c.cor, letterSpacing:".04em" }}>{m.cat.slice(0,3).toUpperCase()}</span>
// // // //                         </div>
// // // //                       </div>
// // // //                       {/* Info */}
// // // //                       <div style={{ padding:"13px 16px" }}>
// // // //                         <div style={{ display:"flex", gap:7, alignItems:"center", marginBottom:3, flexWrap:"wrap" }}>
// // // //                           <span style={{ fontSize:9.5, fontWeight:800, color:c.cor, background:c.fundo, borderRadius:4, padding:"2px 7px", letterSpacing:".05em", textTransform:"uppercase" }}>{m.cat}</span>
// // // //                           <span style={{ fontSize:9.5, fontWeight:600, color:"#b0c4c6", fontFamily:"monospace" }}>{m.ref}</span>
// // // //                         </div>
// // // //                         <div style={{ fontSize:13.5, fontWeight:700, color:"#0a1c1e", lineHeight:1.3, marginBottom: m.obs ? 3 : 0 }}>{m.nome}</div>
// // // //                         {m.obs && <div style={{ fontSize:11, color:"#7a9ea0", marginTop:1 }}>{m.obs}</div>}
// // // //                         <div style={{ fontSize:10.5, color:"#b8ccce", marginTop:2, fontWeight:600 }}>{m.marca}</div>
// // // //                       </div>
// // // //                       {/* Qty */}
// // // //                       <div style={{ padding:"13px 16px 13px 0", textAlign:"right" }}>
// // // //                         <span style={{ fontSize:19, fontWeight:900, color:"#095b66", lineHeight:1 }}>{m.qtd}</span>
// // // //                         <span style={{ fontSize:10.5, color:"#9bbbbe", display:"block", fontWeight:600 }}>{m.unidade}</span>
// // // //                       </div>
// // // //                     </div>
// // // //                   );
// // // //                 })}
// // // //               </div>

// // // //               {/* CTA final */}
// // // //               <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:14, padding:"24px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:20, flexWrap:"wrap" }}>
// // // //                 <div>
// // // //                   <div style={{ fontSize:15, fontWeight:800, color:"#0a1c1e", marginBottom:4 }}>Quer um orçamento formal com preços reais?</div>
// // // //                   <div style={{ fontSize:13, color:"#4a7275" }}>A nossa equipa analisa esta simulação e envia proposta detalhada em 24 horas.</div>
// // // //                 </div>
// // // //                 <div style={{ display:"flex", gap:10, flexShrink:0 }}>
// // // //                   <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer"
// // // //                     style={{ background:"#25D366", color:"#fff", border:"none", borderRadius:7, padding:"12px 20px", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:7, textDecoration:"none" }}>
// // // //                     💬 WhatsApp
// // // //                   </a>
// // // //                   <a href="#contacto" className="btn-teal" style={{ fontSize:11 }}>
// // // //                     Solicitar Proposta
// // // //                     <svg viewBox="0 0 14 14" fill="none" width="12" height="12"><path d="M3 7h8M8 4.5l2.5 2.5L8 9.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // //                   </a>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //         </div>
// // // //       </section>

// // // //             {/* ── GEOGRAPHIC PRESENCE — FIXED MAP ── */}
// // // //       <section id="presenca" style={{ background: "#fff", padding: "96px 0" }}>
// // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // //           <Reveal>
// // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Presença Internacional</p>
// // // //             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 12 }}>Onde estamos</h2>
// // // //             <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 480, lineHeight: 1.75, marginBottom: 56 }}>
// // // //               Operamos em Angola, Portugal, Cabo Verde e São Tomé e Príncipe. Clique nos pontos do mapa para mais detalhes.
// // // //             </p>
// // // //           </Reveal>
// // // //           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
// // // //             <Reveal>
// // // //               <div style={{ background: "#f0f9fa", borderRadius: 20, padding: "8px", border: "1.5px solid #c8e8eb" }}>
// // // //                 <WorldMap points={PRESENCE} activePoint={activePoint} onHover={i => setActivePoint(activePoint === i ? null : i)} />
// // // //               </div>
// // // //             </Reveal>
// // // //             <Reveal delay={.1}>
// // // //               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // // //                 {PRESENCE.map((p, i) => (
// // // //                   <button key={i} onClick={() => setActivePoint(activePoint === i ? null : i)}
// // // //                     style={{ background: activePoint===i?"#095b66":"#fff", border: `1.5px solid ${activePoint===i?"#095b66":"#dde8ea"}`, borderRadius: 12, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start", cursor: "pointer", transition: "all .25s", textAlign: "left" }}>
// // // //                     <div style={{ width: 36, height: 36, borderRadius: 8, background: activePoint===i?"rgba(255,255,255,.15)":"#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
// // // //                       {i===0?"🇦🇴":i===1?"🇵🇹":i===2?"🇨🇻":"🇸🇹"}
// // // //                     </div>
// // // //                     <div>
// // // //                       <div style={{ fontSize: 13, fontWeight: 800, color: activePoint===i?"#fff":"#0a1c1e", marginBottom: 3 }}>{p.name}</div>
// // // //                       <div style={{ fontSize: 11, color: activePoint===i?"rgba(255,255,255,.65)":"#6a9598", lineHeight: 1.5, whiteSpace: "pre-line" }}>{p.detail}</div>
// // // //                     </div>
// // // //                   </button>
// // // //                 ))}
// // // //               </div>
// // // //             </Reveal>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ── CLIENTS + BRANDS ── */}
// // // //       <section style={{ background: "#f0f9fa", padding: "80px 0" }}>
// // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // //           <Reveal>
// // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Clientes</p>
// // // //             <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Confiam em Nós</h2>
// // // //           </Reveal>
// // // //           <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 72 }}>
// // // //             {CLIENTS.map((c, i) => (
// // // //               <Reveal key={i} delay={i * .015}><div className="client-chip">{c}</div></Reveal>
// // // //             ))}
// // // //           </div>
// // // //           <div style={{ borderTop: "1.5px solid #c8e8eb", paddingTop: 64 }}>
// // // //             <Reveal>
// // // //               <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Parceiros</p>
// // // //               <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Marcas que Representamos</h2>
// // // //             </Reveal>
// // // //             <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
// // // //               {BRANDS.map((b, i) => (
// // // //                 <Reveal key={i} delay={i * .04}>
// // // //                   <div className="brand-card">
// // // //                     <div style={{ fontSize: 13, fontWeight: 900, color: "#0a1c1e", marginBottom: 4 }}>{b.name}</div>
// // // //                     <div style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".08em", textTransform: "uppercase" }}>{b.role}</div>
// // // //                   </div>
// // // //                 </Reveal>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ── CTA BAND ── */}
// // // //       <section style={{ background: "#095b66" }}>
// // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 80px" }}>
// // // //           <Reveal>
// // // //             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 36, flexWrap: "wrap" }}>
// // // //               <div>
// // // //                 <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 10 }}>Pronto para começar?</h2>
// // // //                 <p style={{ color: "rgba(255,255,255,.65)", maxWidth: 440, lineHeight: 1.75, fontSize: 15 }}>Peça um orçamento sem compromisso. A nossa equipa técnica responde em 24 horas.</p>
// // // //               </div>
// // // //               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
// // // //                 <a href="#contacto" className="btn-white">Solicitar Orçamento</a>
// // // //                 <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer" className="btn-outline-w" style={{ gap: 8 }}>💬 WhatsApp</a>
// // // //               </div>
// // // //             </div>
// // // //           </Reveal>
// // // //         </div>
// // // //       </section>

// // // //       {/* ── CONTACT ── */}
// // // //       <section id="contacto" style={{ background: "#fff", padding: "96px 0" }}>
// // // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // // //           <Reveal>
// // // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Contacto</p>
// // // //             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 56 }}>Fale Connosco</h2>
// // // //           </Reveal>
// // // //           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 72 }}>
// // // //             <Reveal>
// // // //               <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.8, marginBottom: 44 }}>Entre em contacto com o escritório mais próximo ou envie-nos uma mensagem e entraremos em contacto consigo brevemente.</p>
// // // //               <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
// // // //                 {[
// // // //                   { flag: "🇦🇴", country: "Angola", info: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362 · (+244) 938 306 698\ngeral@multienergia.com.pt" },
// // // //                   { flag: "🇵🇹", country: "Portugal", info: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909 · geral@multienergia.com.pt" },
// // // //                   { flag: "🇸🇹", country: "São Tomé e Príncipe", info: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443 · geral@multienergia.com.pt" },
// // // //                 ].map((c, i) => (
// // // //                   <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
// // // //                     <div style={{ width: 40, height: 40, borderRadius: 8, background: "#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.flag}</div>
// // // //                     <div>
// // // //                       <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 3, textTransform: "uppercase", letterSpacing: ".06em" }}>{c.country}</div>
// // // //                       <div style={{ fontSize: 12.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{c.info}</div>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //               <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer"
// // // //                 style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 28, fontSize: 13, fontWeight: 700, color: "#095b66" }}>
// // // //                 🌐 www.multienergia.com.pt
// // // //               </a>
// // // //             </Reveal>
// // // //             <Reveal delay={.1}>
// // // //               <form onSubmit={e => e.preventDefault()}
// // // //                 style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 16, padding: "36px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
// // // //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// // // //                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Nome</span>
// // // //                     <input className="input" placeholder="Nome completo" autoComplete="name"/>
// // // //                   </label>
// // // //                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Empresa</span>
// // // //                     <input className="input" placeholder="Empresa" autoComplete="organization"/>
// // // //                   </label>
// // // //                 </div>
// // // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>E-mail</span>
// // // //                   <input className="input" type="email" placeholder="email@empresa.com" autoComplete="email"/>
// // // //                 </label>
// // // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Assunto</span>
// // // //                   <select className="input" defaultValue="" style={{ appearance: "none", cursor: "pointer" }}>
// // // //                     <option value="" disabled>Selecione o assunto</option>
// // // //                     <option>Sistemas de Energia Solar</option>
// // // //                     <option>EcoFlow / Armazenamento</option>
// // // //                     <option>Quadros Elétricos BT</option>
// // // //                     <option>Postos de Transformação MT</option>
// // // //                     <option>UPS & Estabilizadores</option>
// // // //                     <option>Mobilidade Elétrica</option>
// // // //                     <option>Proteção Atmosférica (SPDA)</option>
// // // //                     <option>Auditoria Energética</option>
// // // //                     <option>Formação – Energy Academy</option>
// // // //                     <option>Outro</option>
// // // //                   </select>
// // // //                 </label>
// // // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Mensagem</span>
// // // //                   <textarea className="input" placeholder="Descreva o seu projeto…"/>
// // // //                 </label>
// // // //                 <button type="submit" className="btn-teal" style={{ alignSelf: "flex-start", marginTop: 4 }}>
// // // //                   Enviar Mensagem
// // // //                   <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // //                 </button>
// // // //               </form>
// // // //             </Reveal>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ── FOOTER ── */}
// // // //       <footer style={{ background: "#06161a", padding: "52px 80px 28px" }}>
// // // //         <div style={{ maxWidth: 1280, margin: "0 auto" }}>
// // // //           <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 44, marginBottom: 44 }}>
// // // //             <div>
// // // //               <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
// // // //                 <div style={{ width: 32, height: 32, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center" }}>
// // // //                   <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/></svg>
// // // //                 </div>
// // // //                 <span style={{ fontWeight: 900, fontSize: 15, color: "#fff" }}>Multi<span style={{ color: "#3ec8d4" }}>energia</span></span>
// // // //               </div>
// // // //               <p style={{ fontSize: 12.5, color: "#3a6a6e", lineHeight: 1.8, maxWidth: 240, marginBottom: 16 }}>Inovação tecnológica ao serviço da energia. Angola · Portugal · Cabo Verde · São Tomé.</p>
// // // //               <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11.5, fontWeight: 600, color: "#3ec8d4" }}>www.multienergia.com.pt</a>
// // // //             </div>
// // // //             {[
// // // //               { title: "Produtos", links: ["Sistemas Solares","EcoFlow PowerOcean","Quadros BT","Postos MT","UPS & Estabilizadores","Mobilidade Elétrica"] },
// // // //               { title: "Serviços", links: ["Projeto & Engenharia","Instalação & Montagem","Auditoria Energética","Proteção Atmosférica","Manutenção","Energy Academy"] },
// // // //               { title: "Empresa", links: ["Sobre Nós","Certificações","Clientes","Parceiros","Contacto"] },
// // // //             ].map(col => (
// // // //               <nav key={col.title}>
// // // //                 <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#0a7a89", marginBottom: 16 }}>{col.title}</div>
// // // //                 <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
// // // //                   {col.links.map(l => <li key={l}><button className="footer-btn">{l}</button></li>)}
// // // //                 </ul>
// // // //               </nav>
// // // //             ))}
// // // //           </div>
// // // //           <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
// // // //             <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>© 2025 Multienergia. Todos os direitos reservados.</p>
// // // //             <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>Alvará IRCOP nº 982/CCOP/IRCOP/SC/2025 · 5ª Classe</p>
// // // //           </div>
// // // //         </div>
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // }






// // // "use client";
// // // import React, { useState, useEffect, useRef } from "react";
// // // import Link from "next/link";

// // // /* ─────────────────────────────────────────────
// // //    DATA
// // // ───────────────────────────────────────────── */
// // // const HERO_SLIDES = [
// // //   {
// // //     tag: "Eficiência · Transição · Inovação",
// // //     line1: "Energia que",
// // //     line2: "transforma",
// // //     line3: "Angola",
// // //     sub: "25 anos a fornecer soluções energéticas completas. Da geração ao consumo, do projeto à manutenção.",
// // //   },
// // //   {
// // //     tag: "Representante Oficial EcoFlow · Angola",
// // //     line1: "Independência",
// // //     line2: "energética",
// // //     line3: "total",
// // //     sub: "Sistemas solares residenciais e industriais, armazenamento e inversores híbridos.",
// // //   },
// // //   {
// // //     tag: "Fabricante Certificado · Legrand Partner",
// // //     line1: "Fabricamos",
// // //     line2: "o que outros",
// // //     line3: "apenas vendem",
// // //     sub: "Quadros elétricos BT fabricados em Luanda e Lisboa. Qualidade IEC 61439 garantida.",
// // //   },
// // // ];

// // // const PRODUCTS = [
// // //   {
// // //     id: "solar",
// // //     color: "#095b66",
// // //     light: "#e8f7f9",
// // //     name: "Sistemas de Energia Solar",
// // //     specs: ["+50 MW instalados","Residencial · Industrial · Utility","Autoconsumo · Carports · Centrais"],
// // //     brands: ["Huawei FusionSolar","SMA","Siemens","Nextracker"],
// // //     desc: "Dimensionamos e instalamos sistemas fotovoltaicos completos. Do painel ao inversor, da ligação à rede ao armazenamento em bateria.",
// // //   },
// // //   {
// // //     id: "ecoflow",
// // //     color: "#0a7a89",
// // //     light: "#e6f5f7",
// // //     name: "EcoFlow PowerOcean",
// // //     specs: ["5 kW a 29 kW","Até 45 kWh expansível","15 anos garantia · LFP"],
// // //     brands: ["EcoFlow"],
// // //     desc: "Inversor híbrido trifásico com armazenamento de energia expansível. Backup potente, instalação plug & play e monitorização remota.",
// // //   },
// // //   {
// // //     id: "quadros",
// // //     color: "#064e58",
// // //     light: "#e5f4f6",
// // //     name: "Quadros Elétricos BT",
// // //     specs: ["Até 6300 A · Forma 1–4","Fabricação própria em Luanda","Parceiro Legrand · IEC 61439"],
// // //     brands: ["Legrand"],
// // //     desc: "Fabricamos quadros elétricos de baixa tensão com unidades industriais próprias em Luanda e Lisboa. Soluções padrão e à medida.",
// // //   },
// // //   {
// // //     id: "ups",
// // //     color: "#095b66",
// // //     light: "#e8f7f9",
// // //     name: "UPS & Estabilizadores",
// // //     specs: ["Salicru até 800 KVA","Socomec MODULYS 200–4800 KVA","Online dupla conversão"],
// // //     brands: ["Salicru","Socomec"],
// // //     desc: "Energia crítica ininterrupta para data centers, hospitais, indústrias e telecomunicações. Proteção contra cortes, surtos e variações.",
// // //   },
// // //   {
// // //     id: "mt",
// // //     color: "#0a7a89",
// // //     light: "#e6f5f7",
// // //     name: "Postos de Transformação",
// // //     specs: ["Toshiba TCSU 10–30 kV","500 a 2000 KVA","Plug & play · IP66 · Pré-montado"],
// // //     brands: ["Toshiba T&D"],
// // //     desc: "Postos compactos pré-montados para ligação de média tensão. Instalação rápida, segurança máxima (Class AB) e resistência climática.",
// // //   },
// // //   {
// // //     id: "ve",
// // //     color: "#064e58",
// // //     light: "#e5f4f6",
// // //     name: "Mobilidade Elétrica",
// // //     specs: ["11 kW · 22 kW · 50 kW","Doméstico e via pública","Avaliação técnica incluída"],
// // //     brands: ["Huawei","Tesla","Circutor"],
// // //     desc: "Soluções completas para carregamento de veículos elétricos. Aconselhamento, instalação certificada e manutenção contínua.",
// // //   },
// // // ];

// // // const SERVICES = [
// // //   { title: "Projeto & Engenharia", short: "Dimensionamento técnico completo com esquemas unifilares e memoriais descritivos." },
// // //   { title: "Instalação & Montagem", short: "Equipa certificada para quadros, sistemas solares, SPDA e postos de transformação." },
// // //   { title: "Auditoria Energética", short: "Inspeção termográfica, análise de qualidade de energia e monitorização contínua." },
// // //   { title: "Proteção Atmosférica", short: "Sistemas SPDA completos Franklin France. Conformidade NA 33:2014 e normas internacionais." },
// // //   { title: "Manutenção Preventiva", short: "Planos periódicos para garantir continuidade operacional e longevidade dos equipamentos." },
// // //   { title: "Energy Academy", short: "Formação especializada em energia solar, UPS, SPDA e eletrotecnia. Certificação reconhecida." },
// // // ];

// // // const CLIENTS = [
// // //   "Sonangol","ETU Energias","Unitel","BFA","Fidelidade","MCA",
// // //   "TVCabo","Omatapalo","SIC Notícias","Multitel","Refriango","Arreiou",
// // //   "BancoBNI","Caixa Angola","Telepizza","InfraSat","Prodel","Azueira",
// // //   "Governo de Angola","Standard Bank","IBM","TotalEnergies","Jumbo",
// // //   "BancoBIC","CASAIS","ENDE","Axians","Sonangalp","Elecnor","Marlin",
// // // ];

// // // const BRANDS = [
// // //   { name: "Huawei FusionSolar", role: "Parceiro Solar" },
// // //   { name: "EcoFlow", role: "Rep. Oficial AO" },
// // //   { name: "Toshiba T&D", role: "Rep. Oficial" },
// // //   { name: "Franklin France", role: "Rep. Oficial SPDA" },
// // //   { name: "Legrand", role: "Parceiro Quadros" },
// // //   { name: "Salicru", role: "Rep. Oficial UPS" },
// // //   { name: "Socomec", role: "Rep. Oficial UPS" },
// // //   { name: "Siemens", role: "Parceiro" },
// // //   { name: "Schneider Electric", role: "Parceiro" },
// // //   { name: "SMA", role: "Parceiro Solar" },
// // //   { name: "Circutor", role: "Parceiro VE" },
// // //   { name: "Nextracker", role: "Parceiro Solar" },
// // // ];

// // // const PRESENCE = [
// // //   { name: "Angola · Luanda",     lon: 13.23,  lat: -8.84, main: true,  detail: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362" },
// // //   { name: "Portugal · Lisboa",   lon: -9.14,  lat: 38.72, main: true,  detail: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
// // //   { name: "Cabo Verde · Praia",  lon: -23.51, lat: 14.93, main: false, detail: "Presença comercial activa" },
// // //   { name: "São Tomé e Príncipe", lon:  6.61,  lat:  0.33, main: false, detail: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
// // // ];

// // // /* ─────────────────────────────────────────────
// // //    HOOKS
// // // ───────────────────────────────────────────── */
// // // function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
// // //   const ref = useRef<HTMLDivElement | null>(null);
// // //   const [vis, setVis] = useState(false);
// // //   useEffect(() => {
// // //     const el = ref.current;
// // //     if (!el) return;
// // //     const obs = new IntersectionObserver(([e]) => {
// // //       if (e.isIntersecting) { setVis(true); obs.disconnect(); }
// // //     }, { threshold });
// // //     obs.observe(el);
// // //     return () => obs.disconnect();
// // //   }, [threshold]);
// // //   return [ref, vis];
// // // }

// // // function Reveal({ children, delay = 0, style = {} }: {
// // //   children: React.ReactNode; delay?: number; style?: React.CSSProperties;
// // // }) {
// // //   const [ref, vis] = useInView();
// // //   return (
// // //     <div ref={ref as React.RefObject<HTMLDivElement>} style={{
// // //       opacity: vis ? 1 : 0,
// // //       transform: vis ? "none" : "translateY(22px)",
// // //       transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
// // //       ...style,
// // //     }}>
// // //       {children}
// // //     </div>
// // //   );
// // // }

// // // /* ─────────────────────────────────────────────
// // //    WORLD MAP
// // //    ViewBox 1000 × 500. All paths computed from
// // //    real lon/lat via Web-Mercator:
// // //      x = (lon+180)/360 * 1000
// // //      y = 250 - 250/π * ln(tan(π/4 + lat*π/360))
// // // ───────────────────────────────────────────── */
// // // type PresencePoint = { name: string; lon: number; lat: number; main: boolean; detail: string };

// // // function merc(lon: number, lat: number): [number, number] {
// // //   const x = (lon + 180) / 360 * 1000;
// // //   const y = 250 - (250 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
// // //   return [+x.toFixed(1), +y.toFixed(1)];
// // // }

// // // /*
// // //   All paths below are mathematically generated from real lon/lat coordinates.
// // //   Projection: Web Mercator, viewBox 1000×500.
// // //   x = (lon+180)/360*1000
// // //   y = 250 − (250/π)·ln(tan(π/4 + lat·π/360))

// // //   Key y-values: lat80=56, lat60=145, lat40=189, lat20=222,
// // //                 lat0=250, lat-20=278, lat-40=311, lat-55=344
// // // */
// // // const LAND: Record<string, string> = {

// // //   /* ── North America ────────────────────────────────────────────── */
// // //   NORTH_AMERICA: `
// // //     M 111.1,145.2 L 138.9,119.7 L 155.6,111.9 L 166.7,93.8
// // //     L 183.3,88.6 L 200,88.6   L 222.2,93.8  L 244.4,88.6
// // //     L 261.1,88.6 L 277.8,88.6 L 291.7,93.8  L 305.6,98.7
// // //     L 316.7,88.6 L 319.4,107.7 L 316.7,119.7 L 322.2,145.2
// // //     L 316.7,162.9 L 311.1,158.1 L 305.6,186.5 L 300,192.9
// // //     L 291.7,198  L 286.1,210   L 277.8,214.1 L 263.9,218.7
// // //     L 250,221.6  L 230.6,214.1 L 208.3,214.1 L 194.4,217.2
// // //     L 175,202.2  L 161.1,194.6 L 155.6,189.3
// // //     L 158.3,177.9 L 155.6,171.7 L 138.9,160.5
// // //     L 125,150.6  L 108.3,145.2 Z`,

// // //   /* ── Alaska ───────────────────────────────────────────────────── */
// // //   ALASKA: `
// // //     M 0,148   L 16.7,139.5 L 27.8,130.1 L 33.3,119.7
// // //     L 50,119.7 L 66.7,130.1 L 77.8,139.5 L 88.9,139.5
// // //     L 100,139.5 L 108.3,145.2 L 100,150.6 L 88.9,150.6
// // //     L 77.8,155.7 L 61.1,158.1 L 44.4,158.1 L 27.8,155.7
// // //     L 11.1,152 Z`,

// // //   /* ── Greenland ────────────────────────────────────────────────── */
// // //   GREENLAND: `
// // //     M 355.6,83.1 L 375,56.1   L 400,27.6  L 427.8,22.8
// // //     L 452.8,27.6 L 466.7,56.1 L 461.1,83.1 L 450,111.9
// // //     L 433.3,130.1 L 416.7,145.2 L 400,139.5
// // //     L 383.3,130.1 L 372.2,111.9 Z`,

// // //   /* ── Central America + Caribbean ─────────────────────────────── */
// // //   C_AMERICA: `
// // //     M 230.6,214.1 L 244.4,210 L 255.6,214.1
// // //     L 263.9,224.6 L 272.2,236 L 277.8,250
// // //     L 263.9,247.2 L 255.6,241.7 L 247.2,233.2
// // //     L 238.9,224.6 Z`,

// // //   /* ── South America ────────────────────────────────────────────── */
// // //   SOUTH_AMERICA: `
// // //     M 277.8,250   L 288.9,247.2 L 300,247.2  L 316.7,243
// // //     L 333.3,241.7 L 347.2,241.7 L 361.1,247.2
// // //     L 375,252.8  L 388.9,257   L 402.8,257
// // //     L 405.6,262.6 L 397.2,271.1 L 388.9,279.8
// // //     L 377.8,285.9 L 366.7,290.5 L 355.6,300.3
// // //     L 344.4,307.1 L 330.6,316.3 L 319.4,330.4
// // //     L 316.7,344.3 L 311.1,344.3 L 305.6,336.5
// // //     L 297.2,323.7 L 291.7,310.7 L 291.7,297
// // //     L 288.9,284.4 L 280.6,271.1 L 275,257 Z`,

// // //   /* ── Europe (main body) ───────────────────────────────────────── */
// // //   EUROPE: `
// // //     M 472.2,196.3 L 477.8,181.8 L 486.1,173.8
// // //     L 494.4,174.8 L 495.8,182.8 L 508.3,183
// // //     L 516.7,182.4 L 525,180.8   L 536.1,179.9
// // //     L 541.7,181.8 L 550,181.8   L 558.3,179.9
// // //     L 566.7,179.9 L 575,181.8   L 583.3,181.8
// // //     L 591.7,169.6 L 588.9,165.2 L 575,159.4
// // //     L 561.1,158.1 L 547.2,158.1 L 536.1,159.4
// // //     L 527.8,151.9 L 513.9,150.6 L 508.3,158.1
// // //     L 502.8,165.2 L 497.2,168.5 L 491.7,173.8
// // //     L 486.1,173.8 L 477.8,181.8 Z
// // //     M 583.3,181.8 L 591.7,181.8 L 600,185.6
// // //     L 602.8,192.9 L 597.2,198   L 586.1,196.3
// // //     L 577.8,196.3 L 575,190.5 Z`,

// // //   /* ── Iberian Peninsula ────────────────────────────────────────── */
// // //   IBERIA: `
// // //     M 472.2,196.3 L 477.8,181.8 L 486.1,173.8
// // //     L 491.7,173.8 L 495.8,182.8 L 508.3,183
// // //     L 509.4,186   L 502.8,188.1 L 500.6,192.9
// // //     L 497.2,195   L 486.1,197   L 481.9,195.2
// // //     L 475.6,195   L 473.9,192.5 Z`,

// // //   /* ── UK & Ireland ─────────────────────────────────────────────── */
// // //   UK: `M 477.8,162.9 L 486.1,158.1 L 497.2,158.1
// // //        L 502.8,162.9 L 497.2,167.4 L 488.9,169.6
// // //        L 480.6,167.4 Z
// // //        M 469.4,158.1 L 477.8,152 L 483.3,155.7
// // //        L 480.6,165.2 L 472.2,165.2 Z`,

// // //   /* ── Iceland ──────────────────────────────────────────────────── */
// // //   ICELAND: `M 427.8,126.8 L 438.9,120.6 L 455.6,119.7
// // //              L 461.1,124.1 L 452.8,130.1 L 438.9,133.3 Z`,

// // //   /* ── Scandinavia ──────────────────────────────────────────────── */
// // //   SCANDINAVIA: `
// // //     M 513.9,150.6 L 527.8,151.9 L 536.1,158.1
// // //     L 543.1,155.7 L 547.2,152   L 552.8,149.3
// // //     L 558.3,147.9 L 566.7,146.6 L 572.2,142.4
// // //     L 577.8,128.5 L 580.6,117.8 L 575,109.8
// // //     L 566.7,107.7 L 555.6,107.7 L 550,115.9
// // //     L 544.4,117.8 L 538.9,128.5 L 525,133.3
// // //     L 519.4,133.3 L 513.9,139.5 Z`,

// // //   /* ── Russia (European + Siberian) ────────────────────────────── */
// // //   RUSSIA: `
// // //     M 544.4,117.8 L 558.3,107.7 L 583.3,98.7
// // //     L 611.1,93.8  L 638.9,93.8  L 666.7,93.8
// // //     L 694.4,86.1  L 722.2,83.1  L 750,83.1
// // //     L 777.8,86.1  L 805.6,93.8  L 833.3,98.7
// // //     L 861.1,98.7  L 888.9,111.9 L 916.7,119.7
// // //     L 944.4,119.7 L 966.7,107.7 L 980.6,98.7
// // //     L 1000,98.7   L 1000,145.2
// // //     L 972.2,158.1 L 944.4,158.1 L 916.7,145.2
// // //     L 900,165.2   L 888.9,169.6 L 875,177.9
// // //     L 861.1,185.6 L 847.2,185.6 L 833.3,185.6
// // //     L 819.4,177.9 L 805.6,175.9 L 791.7,175.9
// // //     L 777.8,175.9 L 763.9,171.7 L 750,169.6
// // //     L 736.1,165.2 L 722.2,165.2 L 708.3,158.1
// // //     L 694.4,158.1 L 680.6,165.2 L 666.7,158.1
// // //     L 652.8,152   L 638.9,145.2 L 625,145.2
// // //     L 611.1,139.5 L 597.2,139.5 L 588.9,133.3
// // //     L 577.8,119.7 L 566.7,117.8 Z`,

// // //   /* ── Central Asia / Turkey / Caucasus ───────────────────────── */
// // //   C_ASIA: `
// // //     M 538.9,181.8 L 555.6,179.9 L 566.7,179.9
// // //     L 575,181.8   L 586.1,177.9 L 600,185.6
// // //     L 616.7,185.6 L 630.6,181.8 L 644.4,181.8
// // //     L 658.3,185.6 L 666.7,185.6 L 680.6,181.8
// // //     L 694.4,175.9 L 708.3,172.2 L 716.7,175.9
// // //     L 722.2,185.6 L 722.2,196.3 L 713.9,203
// // //     L 700,206.3   L 686.1,206.3 L 672.2,203
// // //     L 655.6,206.3 L 638.9,206.3 L 622.2,206.3
// // //     L 611.1,200   L 600,192.9   L 591.7,181.8
// // //     L 577.8,181.8 L 566.7,185.6 L 552.8,185.6
// // //     L 541.7,185.6 Z`,

// // //   /* ── Middle East / Arabian Peninsula ────────────────────────── */
// // //   MIDDLE_EAST: `
// // //     M 563.9,192.9 L 577.8,181.8 L 586.1,181.8
// // //     L 600,185.6   L 611.1,185.6 L 622.2,185.6
// // //     L 636.1,192.9 L 650,203     L 658.3,212.6
// // //     L 663.9,218.7 L 655.6,228.9 L 644.4,234.6
// // //     L 627.8,238.9 L 616.7,238.9 L 608.3,232.2
// // //     L 597.2,224.6 L 591.7,215.6 L 577.8,212.6
// // //     L 566.7,206.3 L 558.3,196.3 Z`,

// // //   /* ── Africa ───────────────────────────────────────────────────── */
// // //   AFRICA: `
// // //     M 447.2,194.6 L 461.1,190.6 L 475,190.6
// // //     L 488.9,192.9 L 502.8,194.6 L 516.7,194.6
// // //     L 530.6,194.6 L 544.4,194.6 L 558.3,196.3
// // //     L 572.2,203   L 583.3,209.5 L 594.4,209.5
// // //     L 608.3,215.6 L 616.7,224.6 L 622.2,234.6
// // //     L 625,241.7   L 619.4,250   L 613.9,258.3
// // //     L 611.1,265.4 L 605.6,274   L 600,285.9
// // //     L 594.4,296.3 L 588.9,302   L 575,305.4
// // //     L 558.3,302   L 547.2,298.6 L 541.7,285.9
// // //     L 536.1,271.1 L 530.6,258.3 L 522.2,247.2
// // //     L 513.9,244.4 L 505.6,244.4 L 494.4,244.4
// // //     L 483.3,244.4 L 472.2,244.4 L 461.1,241.7
// // //     L 450,234.6   L 444.4,227.5 L 444.4,218.7
// // //     L 447.2,207   Z
// // //     M 444.4,227.5 L 436.1,230.4 L 425,238.9
// // //     L 422.2,250   L 427.8,259.3 L 438.9,258.3
// // //     L 447.2,250   L 447.2,238.9 Z`,

// // //   /* ── Madagascar ───────────────────────────────────────────────── */
// // //   MADAGASCAR: `
// // //     M 616.7,262.6 L 622.2,262.6 L 633.3,265.4
// // //     L 641.7,268.2 L 641.7,282.8 L 633.3,291.7
// // //     L 622.2,291.7 L 613.9,282.8 L 611.1,271.1 Z`,

// // //   /* ── India ────────────────────────────────────────────────────── */
// // //   INDIA: `
// // //     M 663.9,196.3 L 677.8,189.3 L 688.9,189.3
// // //     L 700,192.9   L 711.1,200   L 719.4,199.7
// // //     L 730.6,209.5 L 736.1,218.7 L 747.2,221.6
// // //     L 750,228.9   L 744.4,236   L 733.3,241.7
// // //     L 722.2,244.4 L 713.9,241.7 L 705.6,230.4
// // //     L 694.4,221.6 L 688.9,224.6 L 683.3,221.6
// // //     L 672.2,218.7 L 663.9,209.5 Z`,

// // //   /* ── China / East Asia ────────────────────────────────────────── */
// // //   CHINA: `
// // //     M 694.4,175.9 L 708.3,172.2 L 716.7,175.9
// // //     L 722.2,185.6 L 736.1,181.8 L 750,175.9
// // //     L 763.9,171.7 L 777.8,168.5 L 791.7,165.2
// // //     L 805.6,162.9 L 819.4,162.9 L 833.3,162.9
// // //     L 850,169.6   L 861.1,181.8 L 858.3,192.9
// // //     L 852.8,196.3 L 847.2,192.9 L 833.3,192.9
// // //     L 819.4,196.3 L 808.3,209.5 L 800,221.6
// // //     L 791.7,221.6 L 780.6,218.7 L 769.4,215.6
// // //     L 755.6,221.6 L 747.2,221.6 L 736.1,218.7
// // //     L 730.6,209.5 L 719.4,199.7 L 711.1,200
// // //     L 700,192.9   Z`,

// // //   /* ── SE Asia (Indochina + Malaysia) ──────────────────────────── */
// // //   SE_ASIA: `
// // //     M 777.8,218.7 L 791.7,221.6 L 800,218.7
// // //     L 808.3,209.5 L 819.4,209.5 L 833.3,209.5
// // //     L 844.4,218.7 L 838.9,228.9 L 827.8,234.6
// // //     L 816.7,234.6 L 808.3,241.7 L 800,250
// // //     L 808.3,258.3 L 816.7,258.3 L 822.2,252.8
// // //     L 833.3,252.8 L 833.3,263.9 L 816.7,263.9
// // //     L 808.3,258.3 L 797.2,255.6 L 786.1,250
// // //     L 780.6,244.4 L 772.2,238.9 L 769.4,228.9
// // //     L 769.4,221.6 Z`,

// // //   /* ── Japan ────────────────────────────────────────────────────── */
// // //   JAPAN: `
// // //     M 855.6,192.9 L 861.1,185.6 L 872.2,181.8
// // //     L 883.3,181.8 L 886.1,185.6 L 880.6,192.9
// // //     L 872.2,196.3 L 861.1,199.7 Z
// // //     M 877.8,199.7 L 883.3,192.9 L 894.4,189.3
// // //     L 900,192.9   L 897.2,203   L 886.1,206.3
// // //     L 877.8,203 Z`,

// // //   /* ── Korea ────────────────────────────────────────────────────── */
// // //   KOREA: `M 836.1,192.9 L 847.2,189.3 L 855.6,192.9
// // //            L 855.6,203   L 847.2,206.3 L 836.1,203 Z`,

// // //   /* ── Australia ────────────────────────────────────────────────── */
// // //   AUSTRALIA: `
// // //     M 808.3,278.4 L 819.4,272.5 L 833.3,268.2
// // //     L 850,265.4   L 866.7,263.9 L 880.6,265.4
// // //     L 894.4,269.6 L 908.3,272.5 L 916.7,281.3
// // //     L 925,290.5   L 925,303.7   L 916.7,311.1
// // //     L 905.6,311.1 L 894.4,311.1 L 883.3,307.7
// // //     L 869.4,303.7 L 855.6,307.7 L 841.7,311.1
// // //     L 827.8,307.7 L 816.7,300.3 L 808.3,290.5 Z
// // //     M 916.7,281.3 L 930.6,275.4 L 941.7,281.3
// // //     L 938.9,293.7 L 925,296.3 Z`,

// // //   /* ── New Zealand ─────────────────────────────────────────────── */
// // //   NEW_ZEALAND: `
// // //     M 966.7,318.2 L 977.8,311.1 L 988.9,315.4
// // //     L 988.9,326   L 977.8,329   L 966.7,322.1 Z
// // //     M 972.2,329   L 983.3,318.2 L 994.4,322.1
// // //     L 994.4,337   L 983.3,341   L 972.2,334 Z`,

// // //   /* ── Cabo Verde (island cluster, accent) ─────────────────────── */
// // //   CAPE_VERDE: `M 424,236 L 432,229 L 442,232 L 439,241 L 428,244 Z`,

// // //   /* ── São Tomé (island, accent) ───────────────────────────────── */
// // //   SAO_TOME: `M 516,252 L 523,245 L 530,248 L 528,257 L 519,260 Z`,
// // // };

// // // const ACCENT = new Set(["AFRICA", "IBERIA", "CAPE_VERDE", "SAO_TOME"]);

// // // function WorldMap({ points, activePoint, onHover }: {
// // //   points: PresencePoint[];
// // //   activePoint: number | null;
// // //   onHover: (i: number) => void;
// // // }) {
// // //   const dots = points.map(p => {
// // //     const [cx, cy] = merc(p.lon, p.lat);
// // //     return { ...p, cx, cy };
// // //   });

// // //   /* reference latitudes */
// // //   const yEq   = merc(0,   0)[1];
// // //   const yCanc = merc(0,  23.5)[1];
// // //   const yCap  = merc(0, -23.5)[1];

// // //   return (
// // //     <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
// // //       <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet"
// // //         style={{ width: "100%", height: "auto", display: "block" }}>

// // //         <rect width="1000" height="500" fill="#dff0f3" rx="8"/>

// // //         {/* Latitude reference lines */}
// // //         <line x1="0" y1={yEq}   x2="1000" y2={yEq}   stroke="#b8dfe8" strokeWidth="0.8" strokeDasharray="6 8"/>
// // //         <line x1="0" y1={yCanc} x2="1000" y2={yCanc} stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10"/>
// // //         <line x1="0" y1={yCap}  x2="1000" y2={yCap}  stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10"/>

// // //         {/* Continents */}
// // //         {Object.entries(LAND).map(([k, d]) => (
// // //           <path key={k} d={d}
// // //             fill={ACCENT.has(k) ? "#8ecdd6" : "#b2d8e0"}
// // //             stroke="#7ab8c0" strokeWidth="0.7"
// // //             strokeLinejoin="round" strokeLinecap="round"
// // //           />
// // //         ))}

// // //         {/* Connection line between the 2 main offices */}
// // //         {(() => { const m = dots.filter(p => p.main); return m.length >= 2 ? <line x1={m[0].cx} y1={m[0].cy} x2={m[1].cx} y2={m[1].cy} stroke="#095b66" strokeWidth="1.3" strokeDasharray="5 5" opacity="0.55"/> : null; })()}

// // //         {/* Dots */}
// // //         {dots.map((p, i) => (
// // //           <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
// // //             {p.main && <>
// // //               <circle cx={p.cx} cy={p.cy} r="6" fill="#095b66" opacity="0.15">
// // //                 <animate attributeName="r" values="6;20;6" dur="3s" repeatCount="indefinite"/>
// // //                 <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite"/>
// // //               </circle>
// // //               <circle cx={p.cx} cy={p.cy} r="10" fill="#095b66" opacity="0.1"/>
// // //             </>}
// // //             <circle cx={p.cx} cy={p.cy}
// // //               r={activePoint === i ? 9 : 6}
// // //               fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#5cb8c0")}
// // //               stroke="#fff" strokeWidth="2.5"
// // //               style={{ transition: "r .2s, fill .2s" }}
// // //             />
// // //           </g>
// // //         ))}
// // //       </svg>

// // //       {activePoint !== null && (() => {
// // //         const d = dots[activePoint];
// // //         const px = (d.cx / 1000) * 100;
// // //         const py = (d.cy / 500) * 100;
// // //         return (
// // //           <div style={{
// // //             position: "absolute", left: `${px}%`, top: `${py}%`,
// // //             transform: `translate(${px > 62 ? "-108%" : "14px"}, ${py > 58 ? "-118%" : "14px"})`,
// // //             background: "#fff", border: "1.5px solid #b8dde2", borderRadius: 10,
// // //             padding: "12px 16px", minWidth: 222,
// // //             boxShadow: "0 10px 36px rgba(9,91,102,.2)", zIndex: 10, pointerEvents: "none",
// // //           }}>
// // //             <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 5 }}>{d.name}</div>
// // //             <div style={{ fontSize: 11.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{d.detail}</div>
// // //           </div>
// // //         );
// // //       })()}
// // //     </div>
// // //   );
// // // }

// // // /* ─────────────────────────────────────────────
// // //    SIMULADOR — tipos e motor de cálculo
// // // ───────────────────────────────────────────── */
// // // type TipoProjeto = "residencial" | "empresa" | "industrial" | "agricola" | "outro";
// // // type SimStep = 1 | 2 | 3;

// // // interface SimForm {
// // //   tipo: TipoProjeto | "";
// // //   area: string;
// // //   consumo: string;
// // //   autonomia: string;
// // //   trifasico: boolean;
// // //   gerador: boolean;
// // //   spda: boolean;
// // //   ve: boolean;
// // //   solar: boolean;
// // //   ups: boolean;
// // //   localizacao: string;
// // // }

// // // interface MatItem {
// // //   ref: string;
// // //   nome: string;
// // //   marca: string;
// // //   qtd: number;
// // //   unidade: string;
// // //   cat: string;
// // //   obs?: string;
// // // }

// // // const TIPOS_PROJETO = [
// // //   { id: "residencial" as TipoProjeto, label: "Residencial", sub: "Moradia / Apartamento",
// // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M4 14L16 4l12 10v14H20v-9h-8v9H4V14z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg> },
// // //   { id: "empresa" as TipoProjeto, label: "Empresa / Escritório", sub: "Comercial · Serviços",
// // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><rect x="4" y="6" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M10 28V20h5v8M17 28V20h5v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><rect x="9" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="19" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="14" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/></svg> },
// // //   { id: "industrial" as TipoProjeto, label: "Industrial", sub: "Fábrica · Armazém",
// // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M2 28V14l8-6v6l8-6v6l8-6v20H2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><rect x="6" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="14" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="22" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><path d="M10 6V2M18 4V2M26 6V2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
// // //   { id: "agricola" as TipoProjeto, label: "Agrícola / Rural", sub: "Bombeamento · Campo",
// // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="14" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M16 7V3M16 21v-4M9 14H5M27 14h-4M11 9L8 6M24 6l-3 3M11 19l-3 3M24 22l-3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="16" cy="14" r="2.5" fill="currentColor" opacity=".4"/><path d="M8 28h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
// // //   { id: "outro" as TipoProjeto, label: "Outro / Misto", sub: "Projecto personalizado",
// // //     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8"/><path d="M16 10v2M16 20v2M10 16h2M20 16h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="3" fill="currentColor" opacity=".45"/></svg> },
// // // ];

// // // const CAT_CONFIG: Record<string, { cor: string; fundo: string }> = {
// // //   "Quadros BT":       { cor: "#064e58", fundo: "#e5f4f6" },
// // //   "Protecção":        { cor: "#095b66", fundo: "#e8f7f9" },
// // //   "Cablagem":         { cor: "#0a7a89", fundo: "#e6f5f7" },
// // //   "Infraestrutura":   { cor: "#095b66", fundo: "#f0f9fa" },
// // //   "Iluminação":       { cor: "#064e58", fundo: "#e5f4f6" },
// // //   "Tomadas/Acabam.":  { cor: "#095b66", fundo: "#e8f7f9" },
// // //   "Solar":            { cor: "#7a5200", fundo: "#fff7e0" },
// // //   "Armazenamento":    { cor: "#7a5200", fundo: "#fff3cc" },
// // //   "UPS":              { cor: "#095b66", fundo: "#e8f7f9" },
// // //   "Média Tensão":     { cor: "#7a0000", fundo: "#fce8e8" },
// // //   "SPDA":             { cor: "#8a4200", fundo: "#fff0e0" },
// // //   "Mobilidade VE":    { cor: "#1a3a8f", fundo: "#e6eeff" },
// // //   "Backup Gerador":   { cor: "#3a2a10", fundo: "#f0ebe0" },
// // // };

// // // function calcSimulacao(f: SimForm): MatItem[] {
// // //   if (!f.tipo || !f.consumo || !f.area) return [];
// // //   const kwh  = Math.max(1, parseFloat(f.consumo) || 10);
// // //   const m2   = Math.max(10, parseFloat(f.area)   || 100);
// // //   const aut  = parseInt(f.autonomia) || 1;
// // //   const ind  = f.tipo === "industrial";
// // //   const res  = f.tipo === "residencial";
// // //   const agr  = f.tipo === "agricola";
// // //   const mats: MatItem[] = [];

// // //   /* ── QUADRO GERAL ── */
// // //   const ampQG = kwh > 300 ? 630 : kwh > 80 ? 250 : kwh > 30 ? 125 : kwh > 15 ? 100 : 63;
// // //   mats.push({ cat: "Quadros BT", ref: "QGD-BT",     nome: `Quadro Geral Distribuição BT ${ampQG}A`,         marca: "Legrand / Fabricação Própria", qtd: 1,  unidade: "un", obs: f.trifasico ? "Trifásico 3×400V" : "Monofásico 230V · IEC 61439" });
// // //   if (!res && kwh > 20) mats.push({ cat: "Quadros BT", ref: "QS-ZONA",  nome: "Quadro Secundário de Zona",                      marca: "Legrand",                     qtd: Math.ceil(m2 / 400), unidade: "un", obs: "Distribuição por zonas / pisos" });

// // //   /* ── PROTECÇÃO ── */
// // //   const nZonas = res ? Math.ceil(m2 / 20) : ind ? Math.ceil(m2 / 40) : Math.ceil(m2 / 25);
// // //   mats.push({ cat: "Protecção", ref: "DIS-16A",  nome: "Disjuntor Magnetotérmico 16A unipolar",          marca: "Legrand",  qtd: Math.max(2, Math.ceil(nZonas * .55)), unidade: "un" });
// // //   mats.push({ cat: "Protecção", ref: "DIS-32A",  nome: "Disjuntor Magnetotérmico 32A unipolar",          marca: "Legrand",  qtd: Math.max(1, Math.ceil(nZonas * .35)), unidade: "un" });
// // //   if (ind || f.trifasico) mats.push({ cat: "Protecção", ref: "DIS-TRI-63A", nome: "Disjuntor Trifásico 63A",               marca: "Legrand",  qtd: Math.max(1, Math.ceil(nZonas * .15)), unidade: "un", obs: "Circuitos de força / motores" });
// // //   mats.push({ cat: "Protecção", ref: "DDI-30mA", nome: "Interruptor Diferencial 30mA 2P",                marca: "Legrand",  qtd: Math.ceil(nZonas / 4), unidade: "un" });
// // //   if (!res) mats.push({ cat: "Protecção", ref: "DDI-300mA", nome: "Interruptor Diferencial 300mA 4P",            marca: "Legrand",  qtd: Math.ceil(nZonas / 8), unidade: "un", obs: "Protecção geral circuitos força" });
// // //   mats.push({ cat: "Protecção", ref: "SURTO-T2", nome: "Descarregador Sobretensões Tipo 2",              marca: "Legrand",  qtd: 1, unidade: "un", obs: "Protecção QGD principal" });

// // //   /* ── CABLAGEM ── */
// // //   const fCab = ind ? 1.1 : res ? 0.85 : 1.0;
// // //   mats.push({ cat: "Cablagem", ref: "CAB-2.5",  nome: "Cabo H07V-K 2,5mm² (anel/tomadas)",             marca: "Nexans",   qtd: Math.round(m2 * 1.6 * fCab), unidade: "m",  obs: "Circuitos iluminação e tomadas" });
// // //   mats.push({ cat: "Cablagem", ref: "CAB-4",    nome: "Cabo H07V-K 4mm² (circuitos potência)",         marca: "Nexans",   qtd: Math.round(m2 * 0.7 * fCab), unidade: "m" });
// // //   mats.push({ cat: "Cablagem", ref: "CAB-16",   nome: "Cabo H07V-K 16mm² (alimentação principal)",     marca: "Nexans",   qtd: Math.round(m2 * 0.4 * fCab), unidade: "m" });
// // //   if (ind) mats.push({ cat: "Cablagem", ref: "CAB-35",  nome: "Cabo H07V-K 35mm² (acometimento BT)",    marca: "Nexans",   qtd: Math.round(m2 * 0.15), unidade: "m", obs: "Ligação QGBT / transformador" });

// // //   /* ── INFRAESTRUTURA ── */
// // //   mats.push({ cat: "Infraestrutura", ref: "CALHA-40",   nome: "Calha Técnica PVC 40×40mm",              marca: "Legrand",  qtd: Math.ceil(m2 * 0.45), unidade: "m" });
// // //   if (!res) mats.push({ cat: "Infraestrutura", ref: "CALHA-100",  nome: "Calha Técnica PVC 100×60mm (corredor técnico)", marca: "Legrand", qtd: Math.ceil(m2 * 0.12), unidade: "m" });
// // //   mats.push({ cat: "Infraestrutura", ref: "CORR-20",    nome: "Tubo Corrugado Flexível Ø20mm",          marca: "Legrand",  qtd: Math.round(m2 * 0.9), unidade: "m" });
// // //   if (ind) mats.push({ cat: "Infraestrutura", ref: "BANDEJA-100", nome: "Bandeja Portacabos Aço 100mm",  marca: "Legrand",  qtd: Math.ceil(m2 * 0.08), unidade: "m", obs: "Distribuição aérea industrial" });
// // //   mats.push({ cat: "Infraestrutura", ref: "CAIXA-ENT",  nome: "Caixa de Encastrar 2-módulos",           marca: "Legrand",  qtd: Math.ceil(m2 / (res ? 6 : 8)), unidade: "un" });

// // //   /* ── ILUMINAÇÃO ── */
// // //   const lux   = ind ? 200 : res ? 100 : 150;
// // //   const wLum  = ind ? 150 : res ? 18 : 36;
// // //   const nLum  = Math.ceil((m2 * lux) / (wLum * 100));
// // //   const tipo  = ind ? "Armadura LED Industrial" : res ? "Painel LED Encastrado" : "Armadura LED Slim";
// // //   const ip    = ind ? "IP65" : "IP44";
// // //   mats.push({ cat: "Iluminação", ref: `LED-${wLum}W`, nome: `${tipo} ${wLum}W ≥130lm/W`,  marca: "Legrand / Philips", qtd: nLum, unidade: "un", obs: `${ip} · Eficiência classe A+` });
// // //   mats.push({ cat: "Iluminação", ref: "BLQ-EMG-8W",   nome: "Bloco Autónomo Emergência 8W 3h", marca: "Legrand", qtd: Math.max(2, Math.ceil(nLum / 6)), unidade: "un", obs: "Sinalização saídas emergência" });

// // //   /* ── TOMADAS / ACABAMENTOS ── */
// // //   const nTom = Math.ceil(m2 / (res ? 7 : 10));
// // //   mats.push({ cat: "Tomadas/Acabam.", ref: "TOM-16A", nome: res ? "Tomada Dupla Schuko 16A com terra" : "Tomada Industrial IP44 16A", marca: "Legrand", qtd: nTom, unidade: "un" });
// // //   if (!res) mats.push({ cat: "Tomadas/Acabam.", ref: "TOM-32A-IND", nome: "Tomada Industrial IP44 32A 3P+N+T", marca: "Legrand", qtd: Math.ceil(m2 / 60), unidade: "un", obs: "Força motriz / equipamentos" });

// // //   /* ── SOLAR ── */
// // //   if (f.solar) {
// // //     const hpico  = agr ? 5.5 : 5.0;               // horas pico solar Angola/Portugal
// // //     const kwp    = Math.ceil(kwh / hpico * 1.15);  // 15% oversizing
// // //     const nPain  = Math.ceil((kwp * 1000) / 580);
// // //     const pInv   = kwp <= 5 ? 5 : kwp <= 15 ? 15 : kwp <= 30 ? 30 : kwp <= 60 ? 60 : 100;
// // //     mats.push({ cat: "Solar", ref: "PV-580W",     nome: "Painel Solar Mono Half-Cut 580Wp",                  marca: "Huawei FusionSolar", qtd: nPain,             unidade: "un", obs: `Total: ${(nPain * 0.58).toFixed(1)} kWp · Eficiência ≥21,5%` });
// // //     mats.push({ cat: "Solar", ref: `INV-${pInv}K`, nome: `Inversor Híbrido SUN2000-${pInv}KTL`,             marca: "Huawei",            qtd: 1,                 unidade: "un", obs: "MPPT duplo · monitorização remota · WiFi" });
// // //     mats.push({ cat: "Solar", ref: "CAB-SOL-4",   nome: "Cabo Solar PV H1Z2Z2-K 4mm²",                     marca: "Prysmian",          qtd: nPain * 14,        unidade: "m" });
// // //     mats.push({ cat: "Solar", ref: "ESTR-COBERT", nome: "Estrutura Fixação Alumínio em Cobertura",          marca: "K2 Systems",        qtd: Math.ceil(nPain / 2), unidade: "kit", obs: "Inclinação ajustável 10–35°" });
// // //     mats.push({ cat: "Solar", ref: "CON-MC4",     nome: "Conector MC4 (par macho+fêmea)",                  marca: "Stäubli",           qtd: nPain * 2,         unidade: "par" });
// // //     mats.push({ cat: "Solar", ref: "SURTO-PV",    nome: "Protecção Sobretensão DC Tipo 2",                 marca: "Legrand",           qtd: 1,                 unidade: "un", obs: "Protecção string box" });
// // //     /* Armazenamento */
// // //     if (aut > 0) {
// // //       const kwhBat = Math.ceil(kwh * aut * 1.25);
// // //       const nMod   = Math.ceil(kwhBat / 5);
// // //       mats.push({ cat: "Armazenamento", ref: "BAT-LFP-5K", nome: "Módulo Bateria LFP 5kWh PowerOcean",       marca: "EcoFlow",           qtd: nMod,              unidade: "un", obs: `${kwhBat} kWh total · ${aut}d autonomia · 15 anos garantia` });
// // //     }
// // //   }

// // //   /* ── UPS ── */
// // //   if (f.ups) {
// // //     const kva = res ? 3 : ind ? (kwh > 200 ? 200 : 80) : 20;
// // //     const fab = kva > 40 ? "Socomec MODULYS" : "Salicru SLC TWIN RT";
// // //     mats.push({ cat: "UPS", ref: `UPS-${kva}KVA`, nome: `UPS Online Dupla Conversão ${kva} KVA`, marca: fab, qtd: 1, unidade: "un", obs: "10 min autonomia interna · extensível via ext. battery" });
// // //   }

// // //   /* ── MÉDIA TENSÃO ── */
// // //   if (ind && kwh > 100) {
// // //     const kvaT = kwh > 500 ? 2000 : kwh > 200 ? 1000 : 500;
// // //     mats.push({ cat: "Média Tensão", ref: `PT-${kvaT}K`, nome: `Posto Transformação Compacto ${kvaT} KVA`, marca: "Toshiba T&D TCSU", qtd: 1, unidade: "un", obs: "10–30 kV · Pré-montado · IP66 · Class AB" });
// // //   }

// // //   /* ── SPDA ── */
// // //   if (f.spda) {
// // //     const raio = ind ? 107 : 60;
// // //     mats.push({ cat: "SPDA", ref: "PARARR-ESE",  nome: `Para-Raios ESE Franklin France R${raio}m`,      marca: "Franklin France", qtd: 1,                       unidade: "un", obs: `Raio de protecção: ${raio}m · IEC 62305` });
// // //     mats.push({ cat: "SPDA", ref: "COND-DES-50", nome: "Condutor de Descida Cobre 50mm²",               marca: "Franklin France", qtd: Math.ceil(Math.sqrt(m2)*4), unidade: "m" });
// // //     mats.push({ cat: "SPDA", ref: "ELEC-TERRA",  nome: "Eléctrodo Terra Aço Inox Ø14mm × 1,5m",         marca: "Franklin France", qtd: Math.ceil(m2 / 200) + 1, unidade: "un" });
// // //     mats.push({ cat: "SPDA", ref: "SURTO-T1T2",  nome: "Descarregador Sobretensão Tipo 1+2",            marca: "Legrand",         qtd: 1,                       unidade: "un", obs: "Protecção combinada QGD principal" });
// // //   }

// // //   /* ── MOBILIDADE VE ── */
// // //   if (f.ve) {
// // //     const pvE = res ? 7.4 : ind ? 50 : 22;
// // //     const nVE = res ? 1 : Math.max(2, Math.ceil(m2 / 400));
// // //     const fab = pvE >= 50 ? "Circutor" : "Huawei";
// // //     mats.push({ cat: "Mobilidade VE", ref: `VE-${pvE}KW`,  nome: `Posto Carregamento VE ${pvE}kW`,                  marca: fab,   qtd: nVE, unidade: "un", obs: pvE >= 50 ? "DC Rápido · CCS + CHAdeMO · OCPP" : pvE >= 22 ? "AC Trifásico · Type 2 · RFID" : "Modo 3 · Type 2 · App" });
// // //     mats.push({ cat: "Mobilidade VE", ref: "CAB-VE-6",      nome: "Cabo Flexível H05VV-F 3×6mm² para VE",           marca: "Prysmian", qtd: nVE * (pvE >= 22 ? 30 : 15), unidade: "m" });
// // //   }

// // //   /* ── BACKUP / GERADOR ── */
// // //   if (f.gerador) {
// // //     const kvaG = kwh > 200 ? 200 : kwh > 80 ? 80 : kwh > 30 ? 30 : 15;
// // //     mats.push({ cat: "Backup Gerador", ref: `GEN-${kvaG}K`,  nome: `Grupo Gerador Diesel ${kvaG} KVA Insonorizado`, marca: "Perkins / Stamford", qtd: 1, unidade: "un", obs: "Arranque automático · nível sonoro ≤70 dB(A)" });
// // //     mats.push({ cat: "Backup Gerador", ref: "ATS-AUTO",       nome: "Comutador Automático ATS 4P",                   marca: "Legrand",           qtd: 1, unidade: "un", obs: "Comutação automática rede ↔ gerador <3s" });
// // //     mats.push({ cat: "Backup Gerador", ref: "CAB-GEN-16",     nome: "Cabo Alimentação Gerador NYY 4×16mm²",          marca: "Nexans",            qtd: 30, unidade: "m" });
// // //   }

// // //   return mats;
// // // }

// // // /* ─────────────────────────────────────────────
// // //    APP
// // // ───────────────────────────────────────────── */
// // // export default function Home() {
// // //   const [slide, setSlide] = useState(0);
// // //   const [animKey, setAnimKey] = useState(0);

// // //   const [activeProduct, setActiveProduct] = useState(0);
// // //   const [activePoint, setActivePoint] = useState<number | null>(null);
// // //   const [loaderVis, setLoaderVis] = useState(true);
// // //   const [loaderFade, setLoaderFade] = useState(false);
// // //   const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

// // //   /* ── Simulador state ── */
// // //   const [simStep, setSimStep]     = useState<SimStep>(1);
// // //   const [simForm, setSimForm]     = useState<SimForm>({
// // //     tipo: "", area: "", consumo: "", autonomia: "1",
// // //     trifasico: false, gerador: false, spda: false,
// // //     ve: false, solar: false, ups: false, localizacao: "Luanda",
// // //   });
// // //   const [simResult, setSimResult] = useState<MatItem[]>([]);
// // //   const [simCatFil, setSimCatFil] = useState("Todos");
// // //   const setSim = (k: keyof SimForm, v: string | boolean) =>
// // //     setSimForm(prev => ({ ...prev, [k]: v }));
// // //   const simCats = ["Todos", ...Array.from(new Set(simResult.map(m => m.cat)))];
// // //   const simVisible = simCatFil === "Todos" ? simResult : simResult.filter(m => m.cat === simCatFil);
// // //   const runSim = () => {
// // //     setSimResult(calcSimulacao(simForm));
// // //     setSimCatFil("Todos");
// // //     setSimStep(3);
// // //   };

// // //   const advance = () => { setSlide(s => (s + 1) % HERO_SLIDES.length); setAnimKey(k => k + 1); };

// // //   useEffect(() => {
// // //     timerRef.current = setInterval(advance, 6000);
// // //     return () => clearInterval(timerRef.current);
// // //   }, []);

// // //   useEffect(() => {
// // //     const hide = () => { setLoaderFade(true); setTimeout(() => setLoaderVis(false), 480); };
// // //     const t = setTimeout(hide, 900);
// // //     const onLoad = () => { clearTimeout(t); setTimeout(hide, 200); };
// // //     if (document.readyState === "complete") onLoad();
// // //     else window.addEventListener("load", onLoad);
// // //     return () => { clearTimeout(t); window.removeEventListener("load", onLoad); };
// // //   }, []);

// // //   const cur = HERO_SLIDES[slide];
// // //   const curProd = PRODUCTS[activeProduct];

// // //   const NAV = [
// // //     { label: "Produtos", href: "#produtos" },
// // //     { label: "Serviços", href: "#servicos" },
// // //     { label: "Simulador", href: "#simulador" },
// // //     { label: "Presença", href: "#presenca" },
// // //     { label: "Contacto", href: "#contacto" },
// // //   ];

// // //   return (
// // //     <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", overflowX: "hidden" }}>
// // //       {/* ── PAGE LOADER ── */}
// // //       {loaderVis && (
// // //         <div style={{ position:"fixed", inset:0, zIndex:9999, background:"#095b66", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:28, transition:"opacity .48s ease, transform .48s ease", opacity:loaderFade?0:1, transform:loaderFade?"scale(1.02)":"none", pointerEvents:loaderFade?"none":"auto" }}>
// // //           <style>{`
// // //             @keyframes _lp{0%,100%{opacity:1}50%{opacity:.4}}
// // //             @keyframes _lb{0%{transform:scaleX(0)}60%{transform:scaleX(.75)}100%{transform:scaleX(1)}}
// // //             @keyframes _ls{0%{background-position:-400px 0}100%{background-position:400px 0}}
// // //           `}</style>
// // //           <div style={{ display:"flex", alignItems:"center", gap:10, animation:"_lp 1.6s ease infinite" }}>
// // //             <div style={{ width:44, height:44, borderRadius:10, background:"rgba(255,255,255,.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
// // //               <svg viewBox="0 0 24 24" fill="none" width="26" height="26"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" stroke="#fff" strokeWidth=".5" strokeLinejoin="round"/></svg>
// // //             </div>
// // //             <span style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:900, fontSize:22, color:"#fff", letterSpacing:"-.01em" }}>
// // //               Multi<span style={{ color:"rgba(255,255,255,.5)" }}>energia</span>
// // //             </span>
// // //           </div>
// // //           <div style={{ width:160, height:2, background:"rgba(255,255,255,.15)", borderRadius:99, overflow:"hidden" }}>
// // //             <div style={{ height:"100%", width:"100%", background:"linear-gradient(90deg,rgba(255,255,255,.6) 0%,#fff 50%,rgba(255,255,255,.6) 100%)", backgroundSize:"200% 100%", borderRadius:99, transformOrigin:"left", animation:"_lb 900ms cubic-bezier(.4,0,.2,1) forwards, _ls 1.2s linear infinite" }}/>
// // //           </div>
// // //           <div style={{ display:"flex", gap:6 }}>
// // //             {[0,.15,.3].map((d,i) => <div key={i} style={{ width:5, height:5, borderRadius:"50%", background:"rgba(255,255,255,.6)", animation:`_lp 1.2s ${d}s ease infinite` }}/>)}
// // //           </div>
// // //         </div>
// // //       )}
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
// // //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// // //         html { scroll-behavior: smooth; }
// // //         a { text-decoration: none; color: inherit; }
// // //         button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
// // //         ::selection { background: #095b66; color: #fff; }
// // //         ::-webkit-scrollbar { width: 4px; }
// // //         ::-webkit-scrollbar-thumb { background: #095b66; border-radius: 4px; }
// // //         .nav-a { font-size: 11.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; transition: opacity .2s; }
// // //         .nav-a:hover { opacity: .6; }
// // //         @keyframes heroIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: none; } }
// // //         .hero-in { animation: heroIn .5s cubic-bezier(.22,1,.36,1) both; }
// // //         .dot { width: 7px; height: 7px; border-radius: 99px; cursor: pointer; border: none; transition: all .3s; background: rgba(255,255,255,.35); }
// // //         .dot.on { width: 24px; background: #fff; }
// // //         .prod-tab { padding: 14px 18px; border-radius: 8px; cursor: pointer; transition: all .2s; border: 1.5px solid transparent; display: flex; align-items: center; gap: 12px; }
// // //         .prod-tab:hover { background: #f0f9fa; }
// // //         .prod-tab.on { background: #095b66; border-color: #095b66; }
// // //         .brand-card { background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; padding: 14px 18px; text-align: center; transition: all .25s; }
// // //         .brand-card:hover { border-color: #095b66; background: #fff; box-shadow: 0 4px 18px rgba(9,91,102,.08); }
// // //         .client-chip { background: #f0f9fa; border: 1.5px solid #c8e8eb; border-radius: 99px; padding: 7px 16px; font-size: 12px; font-weight: 700; color: #1a4a4f; white-space: nowrap; transition: all .2s; }
// // //         .client-chip:hover { background: #095b66; color: #fff; border-color: #095b66; }
// // //         .input { width: 100%; background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 7px; color: #1a2c2e; padding: 12px 15px; font-family: 'Montserrat',sans-serif; font-size: 13px; outline: none; transition: border-color .2s; }
// // //         .input:focus { border-color: #095b66; background: #fff; }
// // //         .input::placeholder { color: #9bbbbe; }
// // //         textarea.input { resize: vertical; min-height: 100px; }
// // //         .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
// // //         .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(9,91,102,.25); }
// // //         .btn-outline-w { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.55); border-radius: 6px; padding: 11px 26px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; }
// // //         .btn-outline-w:hover { background: rgba(255,255,255,.12); border-color: #fff; }
// // //         .btn-white { background: #fff; color: #095b66; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
// // //         .btn-white:hover { background: #e8f5f7; transform: translateY(-2px); }
// // //         .footer-btn { background: none; border: none; padding: 0; font-family: 'Montserrat',sans-serif; font-size: 13px; color: #4a7a7e; cursor: pointer; transition: color .2s; text-align: left; width: 100%; }
// // //         .footer-btn:hover { color: #fff; }
// // //         /* ── Simulador ── */
// // //         @keyframes simUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }
// // //         .sim-up { animation: simUp .4s ease both; }
// // //         .sim-tipo-btn { border: 1.5px solid #dde8ea; border-radius: 14px; background: #fff; cursor: pointer; transition: all .22s; padding: 22px 16px; display: flex; flex-direction: column; align-items: center; gap: 10px; font-family: 'Montserrat',sans-serif; }
// // //         .sim-tipo-btn:hover { border-color: #095b66; transform: translateY(-2px); box-shadow: 0 6px 22px rgba(9,91,102,.1); }
// // //         .sim-tipo-btn.on { border-color: #095b66; background: #095b66; box-shadow: 0 8px 28px rgba(9,91,102,.22); transform: translateY(-3px); }
// // //         .sim-field { display: flex; flex-direction: column; gap: 6px; }
// // //         .sim-field label { font-size: 10px; font-weight: 700; color: #095b66; letter-spacing: .14em; text-transform: uppercase; }
// // //         .sim-field small { font-size: 10.5px; color: #9bbbbe; margin-top: 2px; }
// // //         .sim-inp { width: 100%; background: #fff; border: 1.5px solid #dde8ea; border-radius: 9px; color: #1a2c2e; padding: 11px 14px; font-family: 'Montserrat',sans-serif; font-size: 13px; font-weight: 600; outline: none; transition: border-color .2s, box-shadow .2s; }
// // //         .sim-inp:focus { border-color: #095b66; box-shadow: 0 0 0 3px rgba(9,91,102,.08); }
// // //         .sim-inp::placeholder { color: #b0c8ca; font-weight: 500; }
// // //         .sim-sel { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%23095b66' stroke-width='2.2' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 13px center; padding-right:36px; }
// // //         .sim-toggle { position:relative; display:inline-flex; width:40px; height:22px; flex-shrink:0; }
// // //         .sim-toggle input { opacity:0; width:0; height:0; }
// // //         .sim-slider { position:absolute; inset:0; border-radius:99px; background:#dde8ea; cursor:pointer; transition:background .2s; }
// // //         .sim-slider::before { content:''; position:absolute; width:16px; height:16px; left:3px; bottom:3px; background:#fff; border-radius:50%; transition:transform .22s; box-shadow:0 1px 3px rgba(0,0,0,.15); }
// // //         .sim-toggle input:checked + .sim-slider { background: #095b66; }
// // //         .sim-toggle input:checked + .sim-slider::before { transform: translateX(18px); }
// // //         .sim-cat-pill { padding: 6px 14px; border-radius: 99px; border: 1.5px solid #dde8ea; background: #fff; font-size: 11px; font-weight: 700; color: #4a7275; cursor: pointer; transition: all .18s; white-space: nowrap; font-family:'Montserrat',sans-serif; }
// // //         .sim-cat-pill:hover { border-color: #095b66; color: #095b66; }
// // //         .sim-cat-pill.on { background: #095b66; border-color: #095b66; color: #fff; }
// // //         .sim-row:hover { background: #f8fcfc; }
// // //         .sim-prog-line { height: 2px; flex:1; margin: 0 6px 20px; transition: background .3s; }
// // //         @media (max-width: 900px) {
// // //           .hide-mob { display: none !important; }
// // //           .two { grid-template-columns: 1fr !important; }
// // //           .three { grid-template-columns: 1fr 1fr !important; }
// // //           .sp { padding-left: 22px !important; padding-right: 22px !important; }
// // //           .hero-sp { padding: 86px 22px 0 !important; }
// // //         }
// // //         @media (max-width: 540px) { .three { grid-template-columns: 1fr !important; } }
// // //       `}</style>



// // //       {/* ── HERO ── */}
// // //       <section style={{ position: "relative", minHeight: "100vh", background: "#095b66", overflow: "hidden", display: "flex", flexDirection: "column" }}>
// // //         <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", background: "rgba(255,255,255,.04)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}/>
// // //         <div style={{ position: "absolute", top: 0, right: 0, width: "30%", height: "100%", background: "rgba(255,255,255,.03)", clipPath: "polygon(25% 0, 100% 0, 100% 100%, 10% 100%)" }}/>
// // //         <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }}/>
// // //         <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", opacity: .06, pointerEvents: "none" }}>
// // //           <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330"><path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/></svg>
// // //         </div>
// // //         <div className="hero-sp sp" style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", alignItems: "center", padding: "100px 80px 0", maxWidth: 1280, margin: "0 auto", width: "100%" }}>
// // //           <div style={{ maxWidth: 660 }}>
// // //             <div key={`tag-${animKey}`} className="hero-in" style={{ animationDelay: "0s" }}>
// // //               <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, padding: "5px 14px", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.85)", marginBottom: 32 }}>
// // //                 {cur.tag}
// // //               </div>
// // //             </div>
// // //             <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s" }}>
// // //               <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28 }}>
// // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line1}</span>
// // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)", color: "rgba(255,255,255,.4)" }}>{cur.line2}</span>
// // //                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line3}</span>
// // //               </h1>
// // //             </div>
// // //             <div key={`s-${animKey}`} className="hero-in" style={{ animationDelay: ".16s" }}>
// // //               <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.7)", maxWidth: 480, marginBottom: 44 }}>{cur.sub}</p>
// // //               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
// // //                 <a href="#produtos" className="btn-white">Ver Soluções</a>
// // //                 <a href="#contacto" className="btn-outline-w">Pedir Orçamento</a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
// // //           {HERO_SLIDES.map((_, i) => (
// // //             <button key={i} className={`dot ${i === slide ? "on" : ""}`}
// // //               onClick={() => { clearInterval(timerRef.current); setSlide(i); setAnimKey(k => k + 1); }}
// // //               aria-label={`Slide ${i + 1}`}
// // //             />
// // //           ))}
// // //         </div>
// // //         <div style={{ height: 64, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)", marginTop: 40 }}/>
// // //       </section>

// // //       {/* ── PRODUCTS ── */}
// // //       <section id="produtos" style={{ padding: "96px 0 80px" }}>
// // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // //           <Reveal>
// // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 52, flexWrap: "wrap" }}>
// // //               <div>
// // //                 <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Catálogo</p>
// // //                 <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05 }}>Os Nossos Produtos</h2>
// // //               </div>
// // //               <Link href="/produtos" style={{ fontSize: 12, fontWeight: 700, color: "#095b66", letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "2px solid #095b66", paddingBottom: 2 }}>
// // //                 Ver todos →
// // //               </Link>
// // //             </div>
// // //           </Reveal>

// // //           <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32, alignItems: "start" }}>
// // //             <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
// // //               {PRODUCTS.map((p, i) => (
// // //                 <Reveal key={i} delay={i * .05}>
// // //                   <button className={`prod-tab ${activeProduct === i ? "on" : ""}`} onClick={() => setActiveProduct(i)} aria-label={p.name}>
// // //                     <div style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, background: activeProduct === i ? "rgba(255,255,255,.15)" : p.light, display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //                       <svg viewBox="0 0 48 48" fill="none" width="22" height="22">
// // //                         {i === 0 && <><circle cx="24" cy="24" r="8" fill={activeProduct===i?"#fff":"#095b66"}/><path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.5 11.5l3.5 3.5M33 33l3.5 3.5M11.5 36.5l3.5-3.5M33 15l3.5-3.5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/></>}
// // //                         {i === 1 && <><rect x="14" y="6" width="20" height="36" rx="3" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="18" y="10" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"}/><rect x="18" y="18" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><rect x="18" y="26" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
// // //                         {i === 2 && <><rect x="6" y="6" width="36" height="36" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="10" y="10" width="28" height="6" rx="1" fill={activeProduct===i?"#fff":"#095b66"} opacity=".7"/><circle cx="15" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"}/><circle cx="24" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><circle cx="33" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
// // //                         {i === 3 && <><rect x="8" y="14" width="32" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 24l-5 6h6l-4 6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
// // //                         {i === 4 && <><rect x="10" y="16" width="28" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 8v8" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/><path d="M16 8h16" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
// // //                         {i === 5 && <><rect x="6" y="16" width="36" height="22" rx="5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><circle cx="14" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><circle cx="34" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><path d="M12 27h8l3 5h14" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M34 13v5M31 16h6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
// // //                       </svg>
// // //                     </div>
// // //                     <span style={{ fontSize: 13, fontWeight: 700, color: activeProduct === i ? "#fff" : "#1a2c2e", textAlign: "left", lineHeight: 1.3 }}>{p.name}</span>
// // //                   </button>
// // //                 </Reveal>
// // //               ))}
// // //             </div>

// // //             <Reveal key={activeProduct}>
// // //               <div style={{ background: "linear-gradient(135deg, #095b66 0%, #0a7a89 100%)", borderRadius: 20, padding: "44px 48px", minHeight: 360, position: "relative", overflow: "hidden" }}>
// // //                 <div style={{ position: "absolute", right: -30, top: -30, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,.05)", pointerEvents: "none" }}/>
// // //                 <div style={{ position: "absolute", right: 30, bottom: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }}/>
// // //                 <div style={{ position: "relative", zIndex: 1 }}>
// // //                   <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
// // //                     <svg viewBox="0 0 64 64" fill="none" width="44" height="44">
// // //                       {activeProduct === 0 && <><circle cx="32" cy="32" r="10" fill="rgba(255,255,255,.9)"/><path d="M32 10v5M32 49v5M10 32h5M49 32h5M16.5 16.5l3.5 3.5M44 44l3.5 3.5M16.5 47.5l3.5-3.5M44 20l3.5-3.5" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/></>}
// // //                       {activeProduct === 1 && <><rect x="18" y="6" width="28" height="52" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="22" y="12" width="20" height="8" rx="2" fill="rgba(255,255,255,.9)"/><rect x="22" y="24" width="20" height="8" rx="2" fill="rgba(255,255,255,.5)"/><rect x="22" y="36" width="20" height="8" rx="2" fill="rgba(255,255,255,.3)"/><path d="M28 60h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
// // //                       {activeProduct === 2 && <><rect x="8" y="8" width="48" height="48" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="14" y="14" width="36" height="8" rx="2" fill="rgba(255,255,255,.9)" opacity=".8"/><circle cx="20" cy="34" r="5" fill="rgba(255,255,255,.9)"/><circle cx="32" cy="34" r="5" fill="rgba(255,255,255,.6)"/><circle cx="44" cy="34" r="5" fill="rgba(255,255,255,.3)"/></>}
// // //                       {activeProduct === 3 && <><rect x="10" y="16" width="44" height="32" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 24l-8 10h10l-6 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>}
// // //                       {activeProduct === 4 && <><rect x="12" y="20" width="40" height="30" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 8v12" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 8h24M20 14h24" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><rect x="20" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/><rect x="34" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/></>}
// // //                       {activeProduct === 5 && <><rect x="8" y="22" width="48" height="26" rx="6" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><circle cx="20" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="20" cy="52" r="3" fill="rgba(255,255,255,.9)"/><circle cx="44" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="44" cy="52" r="3" fill="rgba(255,255,255,.9)"/><path d="M14 30h14l4 8h18" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M42 18v8M38 22h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
// // //                     </svg>
// // //                   </div>
// // //                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 8 }}>{curProd.id.toUpperCase()}</p>
// // //                   <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>{curProd.name}</h3>
// // //                   <p style={{ fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}>{curProd.desc}</p>
// // //                   <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
// // //                     {curProd.specs.map(s => (
// // //                       <span key={s} style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, fontSize: 11, fontWeight: 600, color: "#fff", padding: "4px 12px" }}>{s}</span>
// // //                     ))}
// // //                   </div>
// // //                   <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
// // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: ".1em", textTransform: "uppercase" }}>Marcas:</span>
// // //                     {curProd.brands.map(b => (
// // //                       <span key={b} style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,.8)", background: "rgba(255,255,255,.1)", borderRadius: 5, padding: "3px 10px" }}>{b}</span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </Reveal>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── SERVICES ── */}
// // //       <section id="servicos" style={{ background: "#095b66", padding: "96px 0" }}>
// // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // //           <Reveal>
// // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 8 }}>— Serviços</p>
// // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 56, flexWrap: "wrap" }}>
// // //               <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#fff", lineHeight: 1.05 }}>O que fazemos</h2>
// // //               <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 380, lineHeight: 1.7 }}>Da concepção ao comissionamento. Suporte especializado em todas as fases do seu projeto energético.</p>
// // //             </div>
// // //           </Reveal>
// // //           <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
// // //             {SERVICES.map((s, i) => (
// // //               <Reveal key={i} delay={i * .07}>
// // //                 <div style={{ background: i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)", border: "1.5px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "32px 28px", transition: "all .3s", cursor: "default" }}
// // //                   onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background="rgba(255,255,255,.12)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,.25)"; (e.currentTarget as HTMLDivElement).style.transform="translateY(-4px)"; }}
// // //                   onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background=i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,.1)"; (e.currentTarget as HTMLDivElement).style.transform="none"; }}>
// // //                   <div style={{ width: 58, height: 58, borderRadius: 14, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
// // //                     <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
// // //                       {i === 0 && <><rect x="6" y="6" width="36" height="36" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M14 24h20M24 14v20" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="14" cy="14" r="3" fill="rgba(255,255,255,.4)"/><circle cx="34" cy="34" r="3" fill="rgba(255,255,255,.4)"/></>}
// // //                       {i === 1 && <><circle cx="24" cy="24" r="18" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M24 14v10l6 6" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 24h4M34 24h4M24 10v4M24 34v4" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/></>}
// // //                       {i === 2 && <><path d="M8 36l8-8 6 6 10-12 8 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="6" width="36" height="28" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 42h16M24 34v8" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round"/></>}
// // //                       {i === 3 && <><path d="M24 6l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L24 23.4l-6.9 3.8 1.3-7.7-5.6-5.4 7.7-1.1z" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinejoin="round"/><path d="M14 30l-6 12M34 30l6 12" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/></>}
// // //                       {i === 4 && <><path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M32 8l8 0 0 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 8L28 20" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 24l4-6 4 6" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
// // //                       {i === 5 && <><rect x="6" y="14" width="36" height="26" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 14V10a8 8 0 0116 0v4" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M24 26v4" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="24" cy="24" r="3" fill="rgba(255,255,255,.9)"/></>}
// // //                     </svg>
// // //                   </div>
// // //                   <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
// // //                   <p style={{ fontSize: 13, color: "rgba(255,255,255,.62)", lineHeight: 1.7 }}>{s.short}</p>
// // //                 </div>
// // //               </Reveal>
// // //             ))}
// // //           </div>
// // //           <Reveal style={{ marginTop: 52, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
// // //             <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
// // //               <div style={{ width: 48, height: 48, background: "rgba(255,255,255,.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</div>
// // //               <div>
// // //                 <div style={{ fontSize: 10, color: "rgba(255,255,255,.45)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>Angola · Suporte</div>
// // //                 <a href="tel:+244933153362" style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>+244 933 153 362</a>
// // //               </div>
// // //             </div>
// // //             <a href="#contacto" className="btn-white">Solicitar Visita Técnica</a>
// // //           </Reveal>
// // //         </div>
// // //       </section>

// // //       {/* ── SIMULADOR DE PROJECTO ── */}
// // //       <section id="simulador" style={{ background: "#f0f9fa", padding: "96px 0" }}>
// // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>

// // //           {/* Header */}
// // //           <Reveal>
// // //             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
// // //               <div>
// // //                 <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Simulador</p>
// // //                 <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 10 }}>Simule o seu Projecto</h2>
// // //                 <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 500, lineHeight: 1.75 }}>
// // //                   Obtenha a lista indicativa de materiais eléctricos para o seu projecto em segundos, com base em pressupostos técnicos reais.
// // //                 </p>
// // //               </div>
// // //               <div style={{ display:"flex", alignItems:"center", gap:9, background:"#fff", border:"1.5px solid #dde8ea", borderRadius:12, padding:"11px 20px" }}>
// // //                 <svg viewBox="0 0 20 20" fill="none" width="15" height="15"><circle cx="10" cy="10" r="8" stroke="#095b66" strokeWidth="1.5"/><path d="M10 6v4l3 3" stroke="#095b66" strokeWidth="1.5" strokeLinecap="round"/></svg>
// // //                 <span style={{ fontSize:12, fontWeight:700, color:"#095b66" }}>Resultado em &lt;30 segundos</span>
// // //               </div>
// // //             </div>
// // //           </Reveal>

// // //           {/* Stepper */}
// // //           <div style={{ display:"flex", alignItems:"center", maxWidth:520, marginBottom:44 }}>
// // //             {([["1","Tipo de Projecto"],["2","Pressupostos"],["3","Resultado"]] as [string,string][]).map(([n,lbl], i) => (
// // //               <React.Fragment key={n}>
// // //                 <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
// // //                   <div style={{ width:36, height:36, borderRadius:"50%", background: simStep > +n ? "#095b66" : simStep === +n ? "#095b66" : "#e8eef0", border:`2px solid ${simStep >= +n ? "#095b66" : "#dde8ea"}`, display:"flex", alignItems:"center", justifyContent:"center", transition:"all .3s" }}>
// // //                     {simStep > +n
// // //                       ? <svg viewBox="0 0 14 14" fill="none" width="12" height="12"><path d="M2 7l4 4 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // //                       : <span style={{ fontSize:12, fontWeight:800, color: simStep >= +n ? "#fff" : "#9bbbbe" }}>{n}</span>
// // //                     }
// // //                   </div>
// // //                   <span style={{ fontSize:9.5, fontWeight:700, color: simStep >= +n ? "#095b66" : "#9bbbbe", textTransform:"uppercase", letterSpacing:".08em", whiteSpace:"nowrap" }}>{lbl}</span>
// // //                 </div>
// // //                 {i < 2 && <div className="sim-prog-line" style={{ background: simStep > +n ? "#095b66" : "#dde8ea" }}/>}
// // //               </React.Fragment>
// // //             ))}
// // //           </div>

// // //           {/* ─ PASSO 1: Tipo ─ */}
// // //           {simStep === 1 && (
// // //             <div className="sim-up">
// // //               <p style={{ fontSize:11.5, fontWeight:700, color:"#4a7275", marginBottom:20, textTransform:"uppercase", letterSpacing:".1em" }}>Seleccione o tipo de projecto:</p>
// // //               <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:12, marginBottom:40 }} className="three">
// // //                 {TIPOS_PROJETO.map(t => (
// // //                   <button key={t.id} className={`sim-tipo-btn ${simForm.tipo === t.id ? "on" : ""}`}
// // //                     onClick={() => setSim("tipo", t.id)}>
// // //                     <div style={{ color: simForm.tipo === t.id ? "#fff" : "#095b66" }}>{t.icon}</div>
// // //                     <div style={{ textAlign:"center" }}>
// // //                       <div style={{ fontSize:12.5, fontWeight:800, color: simForm.tipo === t.id ? "#fff" : "#0a1c1e", marginBottom:3, lineHeight:1.25 }}>{t.label}</div>
// // //                       <div style={{ fontSize:10, fontWeight:600, color: simForm.tipo === t.id ? "rgba(255,255,255,.6)" : "#9bbbbe" }}>{t.sub}</div>
// // //                     </div>
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //               <div style={{ display:"flex", justifyContent:"flex-end" }}>
// // //                 <button disabled={!simForm.tipo} onClick={() => setSimStep(2)} className="btn-teal"
// // //                   style={{ opacity: simForm.tipo ? 1 : .45, cursor: simForm.tipo ? "pointer" : "not-allowed" }}>
// // //                   Continuar
// // //                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M4 8h8M9 5l3 3-3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* ─ PASSO 2: Pressupostos ─ */}
// // //           {simStep === 2 && (
// // //             <div className="sim-up">
// // //               <div className="two" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, marginBottom:36 }}>

// // //                 {/* Campos numéricos */}
// // //                 <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
// // //                   <div className="sim-field">
// // //                     <label>Área Total (m²) *</label>
// // //                     <input className="sim-inp" type="number" min="10" placeholder={simForm.tipo==="residencial"?"Ex: 120":simForm.tipo==="industrial"?"Ex: 2000":"Ex: 400"} value={simForm.area} onChange={e=>setSim("area",e.target.value)}/>
// // //                     <small>Área total a electrificar em m²</small>
// // //                   </div>
// // //                   <div className="sim-field">
// // //                     <label>Consumo Estimado (kWh/dia) *</label>
// // //                     <input className="sim-inp" type="number" min="1" placeholder={simForm.tipo==="residencial"?"Ex: 15":simForm.tipo==="industrial"?"Ex: 300":"Ex: 60"} value={simForm.consumo} onChange={e=>setSim("consumo",e.target.value)}/>
// // //                     <small>{simForm.tipo==="residencial"?"Tipicamente 8–25 kWh/dia para moradia":simForm.tipo==="industrial"?"Tipicamente 100–800 kWh/dia para fábrica":"Consulte a factura eléctrica ou medição"}</small>
// // //                   </div>
// // //                   <div className="sim-field">
// // //                     <label>Localização</label>
// // //                     <select className="sim-inp sim-sel" value={simForm.localizacao} onChange={e=>setSim("localizacao",e.target.value)}>
// // //                       {["Luanda","Benguela","Huambo","Lobito","Namibe","Cabinda","Malanje","Lisboa","Porto","Praia","São Tomé","Outro"].map(l=><option key={l}>{l}</option>)}
// // //                     </select>
// // //                   </div>
// // //                   {simForm.solar && (
// // //                     <div className="sim-field">
// // //                       <label>Autonomia em Bateria</label>
// // //                       <select className="sim-inp sim-sel" value={simForm.autonomia} onChange={e=>setSim("autonomia",e.target.value)}>
// // //                         <option value="0">Sem armazenamento (só injecção)</option>
// // //                         <option value="1">1 dia</option>
// // //                         <option value="2">2 dias</option>
// // //                         <option value="3">3 dias (máx. resiliência)</option>
// // //                       </select>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 {/* Toggles */}
// // //                 <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:16, padding:"24px" }}>
// // //                   <p style={{ fontSize:10, fontWeight:700, color:"#095b66", letterSpacing:".14em", textTransform:"uppercase", marginBottom:16 }}>Equipamentos adicionais:</p>
// // //                   {([
// // //                     ["solar",     "Sistema Solar Fotovoltaico",    "Painéis + inversor + armazenamento LFP"],
// // //                     ["ups",       "UPS / Estabilizador",            "Alimentação ininterrupta de cargas críticas"],
// // //                     ["spda",      "Protecção Atmosférica SPDA",    "Para-raios ESE + aterramento Franklin France"],
// // //                     ["ve",        "Postos de Carregamento VE",      "Veículos eléctricos · Modo 3 / DC rápido"],
// // //                     ["gerador",   "Grupo Gerador de Backup",        "Diesel insonorizado + ATS automático"],
// // //                     ["trifasico", "Instalação Trifásica 400V",      "Força motriz / motores / equipamentos pesados"],
// // //                   ] as [keyof SimForm, string, string][]).map(([k,lbl,sub], i, arr) => (
// // //                     <div key={k} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, padding:"13px 0", borderBottom: i<arr.length-1 ? "1px solid #f0f5f6" : "none" }}>
// // //                       <div>
// // //                         <div style={{ fontSize:13, fontWeight:700, color:"#0a1c1e" }}>{lbl}</div>
// // //                         <div style={{ fontSize:10.5, color:"#9bbbbe", marginTop:2 }}>{sub}</div>
// // //                       </div>
// // //                       <label className="sim-toggle">
// // //                         <input type="checkbox" checked={!!simForm[k]} onChange={e=>setSim(k,e.target.checked)}/>
// // //                         <span className="sim-slider"/>
// // //                       </label>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
// // //                 <button onClick={()=>setSimStep(1)} style={{ background:"none", border:"1.5px solid #dde8ea", borderRadius:7, padding:"12px 22px", fontSize:12, fontWeight:700, color:"#4a7275", cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:7 }}>
// // //                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M12 8H4M7 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // //                   Voltar
// // //                 </button>
// // //                 <button disabled={!simForm.area || !simForm.consumo} onClick={runSim} className="btn-teal"
// // //                   style={{ opacity: (simForm.area && simForm.consumo) ? 1 : .45, cursor: (simForm.area && simForm.consumo) ? "pointer" : "not-allowed" }}>
// // //                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0z" stroke="#fff" strokeWidth="1.5"/><path d="M10 8H6M8 6v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
// // //                   Gerar Lista de Materiais
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* ─ PASSO 3: Resultado ─ */}
// // //           {simStep === 3 && (
// // //             <div className="sim-up">

// // //               {/* Banner sumário */}
// // //               <div style={{ background:"linear-gradient(135deg,#095b66,#0a7a89)", borderRadius:18, padding:"26px 36px", marginBottom:28, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:20 }}>
// // //                 <div style={{ display:"flex", gap:36, flexWrap:"wrap" }}>
// // //                   {[
// // //                     ["Tipo", TIPOS_PROJETO.find(t=>t.id===simForm.tipo)?.label ?? "–"],
// // //                     ["Área", `${simForm.area} m²`],
// // //                     ["Consumo", `${simForm.consumo} kWh/dia`],
// // //                     ["Referências", `${simResult.length} itens`],
// // //                   ].map(([k,v]) => (
// // //                     <div key={k}>
// // //                       <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,.5)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:3 }}>{k}</div>
// // //                       <div style={{ fontSize:15, fontWeight:900, color:"#fff" }}>{v}</div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //                 <div style={{ display:"flex", gap:10 }}>
// // //                   <button onClick={()=>{setSimStep(2);}} style={{ background:"rgba(255,255,255,.15)", color:"#fff", border:"1.5px solid rgba(255,255,255,.3)", borderRadius:7, padding:"9px 18px", fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:6 }}>
// // //                     <svg viewBox="0 0 14 14" fill="none" width="11" height="11"><path d="M10 7H4M6.5 4.5L4 7l2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
// // //                     Editar
// // //                   </button>
// // //                   <a href="#contacto" className="btn-white" style={{ fontSize:11, padding:"9px 18px" }}>
// // //                     Pedir Orçamento →
// // //                   </a>
// // //                 </div>
// // //               </div>

// // //               {/* Nota aviso */}
// // //               <div style={{ background:"#fff8e0", border:"1.5px solid #f0d47a", borderRadius:10, padding:"11px 18px", marginBottom:22, display:"flex", alignItems:"flex-start", gap:10 }}>
// // //                 <svg viewBox="0 0 18 18" fill="none" width="15" height="15" style={{ flexShrink:0, marginTop:1 }}><circle cx="9" cy="9" r="7" stroke="#a07000" strokeWidth="1.5"/><path d="M9 5.5v3.5M9 12.5v.5" stroke="#a07000" strokeWidth="2" strokeLinecap="round"/></svg>
// // //                 <p style={{ fontSize:11.5, color:"#7a5000", lineHeight:1.65, margin:0 }}>
// // //                   <strong>Estimativa indicativa.</strong> Quantidades e especificações finais devem ser validadas por engenheiro habilitado. Esta lista serve de base para pedido de orçamento formal.
// // //                 </p>
// // //               </div>

// // //               {/* Filtros por categoria */}
// // //               <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:18 }}>
// // //                 {simCats.map(cat => (
// // //                   <button key={cat} className={`sim-cat-pill ${simCatFil===cat?"on":""}`}
// // //                     onClick={()=>setSimCatFil(cat)}>
// // //                     {cat} {cat!=="Todos" && <span style={{ fontWeight:600, opacity:.7 }}>({simResult.filter(m=>m.cat===cat).length})</span>}
// // //                   </button>
// // //                 ))}
// // //               </div>

// // //               {/* Tabela de materiais */}
// // //               <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:16, overflow:"hidden", marginBottom:32 }}>
// // //                 {/* Cabeçalho */}
// // //                 <div style={{ display:"grid", gridTemplateColumns:"52px 1fr 100px", background:"#f8fbfc", borderBottom:"1.5px solid #dde8ea" }}>
// // //                   <div style={{ padding:"11px 0 11px 16px" }}/>
// // //                   <div style={{ padding:"11px 16px", fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase" }}>Material / Referência</div>
// // //                   <div style={{ padding:"11px 16px 11px 0", fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase", textAlign:"right" }}>Qtd.</div>
// // //                 </div>

// // //                 {simVisible.map((m, i) => {
// // //                   const c = CAT_CONFIG[m.cat] ?? { cor:"#095b66", fundo:"#e8f7f9" };
// // //                   return (
// // //                     <div key={i} className="sim-row"
// // //                       style={{ display:"grid", gridTemplateColumns:"52px 1fr 100px", alignItems:"center", borderBottom: i<simVisible.length-1 ? "1px solid #f0f5f6" : "none",
// // //                                animation:`simUp .3s ${Math.min(i * .025, 0.5)}s both ease-out` }}>
// // //                       {/* Cat icon */}
// // //                       <div style={{ padding:"13px 0 13px 14px" }}>
// // //                         <div style={{ width:28, height:28, borderRadius:7, background:c.fundo, display:"flex", alignItems:"center", justifyContent:"center" }}>
// // //                           <span style={{ fontSize:9, fontWeight:900, color:c.cor, letterSpacing:".04em" }}>{m.cat.slice(0,3).toUpperCase()}</span>
// // //                         </div>
// // //                       </div>
// // //                       {/* Info */}
// // //                       <div style={{ padding:"13px 16px" }}>
// // //                         <div style={{ display:"flex", gap:7, alignItems:"center", marginBottom:3, flexWrap:"wrap" }}>
// // //                           <span style={{ fontSize:9.5, fontWeight:800, color:c.cor, background:c.fundo, borderRadius:4, padding:"2px 7px", letterSpacing:".05em", textTransform:"uppercase" }}>{m.cat}</span>
// // //                           <span style={{ fontSize:9.5, fontWeight:600, color:"#b0c4c6", fontFamily:"monospace" }}>{m.ref}</span>
// // //                         </div>
// // //                         <div style={{ fontSize:13.5, fontWeight:700, color:"#0a1c1e", lineHeight:1.3, marginBottom: m.obs ? 3 : 0 }}>{m.nome}</div>
// // //                         {m.obs && <div style={{ fontSize:11, color:"#7a9ea0", marginTop:1 }}>{m.obs}</div>}
// // //                         <div style={{ fontSize:10.5, color:"#b8ccce", marginTop:2, fontWeight:600 }}>{m.marca}</div>
// // //                       </div>
// // //                       {/* Qty */}
// // //                       <div style={{ padding:"13px 16px 13px 0", textAlign:"right" }}>
// // //                         <span style={{ fontSize:19, fontWeight:900, color:"#095b66", lineHeight:1 }}>{m.qtd}</span>
// // //                         <span style={{ fontSize:10.5, color:"#9bbbbe", display:"block", fontWeight:600 }}>{m.unidade}</span>
// // //                       </div>
// // //                     </div>
// // //                   );
// // //                 })}
// // //               </div>

// // //               {/* CTA final */}
// // //               <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:14, padding:"24px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:20, flexWrap:"wrap" }}>
// // //                 <div>
// // //                   <div style={{ fontSize:15, fontWeight:800, color:"#0a1c1e", marginBottom:4 }}>Quer um orçamento formal com preços reais?</div>
// // //                   <div style={{ fontSize:13, color:"#4a7275" }}>A nossa equipa analisa esta simulação e envia proposta detalhada em 24 horas.</div>
// // //                 </div>
// // //                 <div style={{ display:"flex", gap:10, flexShrink:0 }}>
// // //                   <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer"
// // //                     style={{ background:"#25D366", color:"#fff", border:"none", borderRadius:7, padding:"12px 20px", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:7, textDecoration:"none" }}>
// // //                     💬 WhatsApp
// // //                   </a>
// // //                   <a href="#contacto" className="btn-teal" style={{ fontSize:11 }}>
// // //                     Solicitar Proposta
// // //                     <svg viewBox="0 0 14 14" fill="none" width="12" height="12"><path d="M3 7h8M8 4.5l2.5 2.5L8 9.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}

// // //         </div>
// // //       </section>

// // //             {/* ── GEOGRAPHIC PRESENCE — FIXED MAP ── */}
// // //       <section id="presenca" style={{ background: "#fff", padding: "96px 0" }}>
// // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // //           <Reveal>
// // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Presença Internacional</p>
// // //             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 12 }}>Onde estamos</h2>
// // //             <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 480, lineHeight: 1.75, marginBottom: 56 }}>
// // //               Operamos em Angola, Portugal, Cabo Verde e São Tomé e Príncipe. Clique nos pontos do mapa para mais detalhes.
// // //             </p>
// // //           </Reveal>
// // //           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
// // //             <Reveal>
// // //               <div style={{ background: "#f0f9fa", borderRadius: 20, padding: "8px", border: "1.5px solid #c8e8eb" }}>
// // //                 <WorldMap points={PRESENCE} activePoint={activePoint} onHover={i => setActivePoint(activePoint === i ? null : i)} />
// // //               </div>
// // //             </Reveal>
// // //             <Reveal delay={.1}>
// // //               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
// // //                 {PRESENCE.map((p, i) => (
// // //                   <button key={i} onClick={() => setActivePoint(activePoint === i ? null : i)}
// // //                     style={{ background: activePoint===i?"#095b66":"#fff", border: `1.5px solid ${activePoint===i?"#095b66":"#dde8ea"}`, borderRadius: 12, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start", cursor: "pointer", transition: "all .25s", textAlign: "left" }}>
// // //                     <div style={{ width: 36, height: 36, borderRadius: 8, background: activePoint===i?"rgba(255,255,255,.15)":"#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
// // //                       {i===0?"🇦🇴":i===1?"🇵🇹":i===2?"🇨🇻":"🇸🇹"}
// // //                     </div>
// // //                     <div>
// // //                       <div style={{ fontSize: 13, fontWeight: 800, color: activePoint===i?"#fff":"#0a1c1e", marginBottom: 3 }}>{p.name}</div>
// // //                       <div style={{ fontSize: 11, color: activePoint===i?"rgba(255,255,255,.65)":"#6a9598", lineHeight: 1.5, whiteSpace: "pre-line" }}>{p.detail}</div>
// // //                     </div>
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             </Reveal>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── CLIENTS + BRANDS ── */}
// // //       <section style={{ background: "#f0f9fa", padding: "80px 0" }}>
// // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // //           <Reveal>
// // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Clientes</p>
// // //             <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Confiam em Nós</h2>
// // //           </Reveal>
// // //           <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 72 }}>
// // //             {CLIENTS.map((c, i) => (
// // //               <Reveal key={i} delay={i * .015}><div className="client-chip">{c}</div></Reveal>
// // //             ))}
// // //           </div>
// // //           <div style={{ borderTop: "1.5px solid #c8e8eb", paddingTop: 64 }}>
// // //             <Reveal>
// // //               <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Parceiros</p>
// // //               <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Marcas que Representamos</h2>
// // //             </Reveal>
// // //             <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
// // //               {BRANDS.map((b, i) => (
// // //                 <Reveal key={i} delay={i * .04}>
// // //                   <div className="brand-card">
// // //                     <div style={{ fontSize: 13, fontWeight: 900, color: "#0a1c1e", marginBottom: 4 }}>{b.name}</div>
// // //                     <div style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".08em", textTransform: "uppercase" }}>{b.role}</div>
// // //                   </div>
// // //                 </Reveal>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── CTA BAND ── */}
// // //       <section style={{ background: "#095b66" }}>
// // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 80px" }}>
// // //           <Reveal>
// // //             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 36, flexWrap: "wrap" }}>
// // //               <div>
// // //                 <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 10 }}>Pronto para começar?</h2>
// // //                 <p style={{ color: "rgba(255,255,255,.65)", maxWidth: 440, lineHeight: 1.75, fontSize: 15 }}>Peça um orçamento sem compromisso. A nossa equipa técnica responde em 24 horas.</p>
// // //               </div>
// // //               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
// // //                 <a href="#contacto" className="btn-white">Solicitar Orçamento</a>
// // //                 <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer" className="btn-outline-w" style={{ gap: 8 }}>💬 WhatsApp</a>
// // //               </div>
// // //             </div>
// // //           </Reveal>
// // //         </div>
// // //       </section>

// // //       {/* ── CONTACT ── */}
// // //       <section id="contacto" style={{ background: "#fff", padding: "96px 0" }}>
// // //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
// // //           <Reveal>
// // //             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Contacto</p>
// // //             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 56 }}>Fale Connosco</h2>
// // //           </Reveal>
// // //           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 72 }}>
// // //             <Reveal>
// // //               <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.8, marginBottom: 44 }}>Entre em contacto com o escritório mais próximo ou envie-nos uma mensagem e entraremos em contacto consigo brevemente.</p>
// // //               <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
// // //                 {[
// // //                   { flag: "🇦🇴", country: "Angola", info: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362 · (+244) 938 306 698\ngeral@multienergia.com.pt" },
// // //                   { flag: "🇵🇹", country: "Portugal", info: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909 · geral@multienergia.com.pt" },
// // //                   { flag: "🇸🇹", country: "São Tomé e Príncipe", info: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443 · geral@multienergia.com.pt" },
// // //                 ].map((c, i) => (
// // //                   <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
// // //                     <div style={{ width: 40, height: 40, borderRadius: 8, background: "#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.flag}</div>
// // //                     <div>
// // //                       <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 3, textTransform: "uppercase", letterSpacing: ".06em" }}>{c.country}</div>
// // //                       <div style={{ fontSize: 12.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{c.info}</div>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer"
// // //                 style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 28, fontSize: 13, fontWeight: 700, color: "#095b66" }}>
// // //                 🌐 www.multienergia.com.pt
// // //               </a>
// // //             </Reveal>
// // //             <Reveal delay={.1}>
// // //               <form onSubmit={e => e.preventDefault()}
// // //                 style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 16, padding: "36px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
// // //                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
// // //                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Nome</span>
// // //                     <input className="input" placeholder="Nome completo" autoComplete="name"/>
// // //                   </label>
// // //                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // //                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Empresa</span>
// // //                     <input className="input" placeholder="Empresa" autoComplete="organization"/>
// // //                   </label>
// // //                 </div>
// // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>E-mail</span>
// // //                   <input className="input" type="email" placeholder="email@empresa.com" autoComplete="email"/>
// // //                 </label>
// // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Assunto</span>
// // //                   <select className="input" defaultValue="" style={{ appearance: "none", cursor: "pointer" }}>
// // //                     <option value="" disabled>Selecione o assunto</option>
// // //                     <option>Sistemas de Energia Solar</option>
// // //                     <option>EcoFlow / Armazenamento</option>
// // //                     <option>Quadros Elétricos BT</option>
// // //                     <option>Postos de Transformação MT</option>
// // //                     <option>UPS & Estabilizadores</option>
// // //                     <option>Mobilidade Elétrica</option>
// // //                     <option>Proteção Atmosférica (SPDA)</option>
// // //                     <option>Auditoria Energética</option>
// // //                     <option>Formação – Energy Academy</option>
// // //                     <option>Outro</option>
// // //                   </select>
// // //                 </label>
// // //                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
// // //                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Mensagem</span>
// // //                   <textarea className="input" placeholder="Descreva o seu projeto…"/>
// // //                 </label>
// // //                 <button type="submit" className="btn-teal" style={{ alignSelf: "flex-start", marginTop: 4 }}>
// // //                   Enviar Mensagem
// // //                   <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // //                 </button>
// // //               </form>
// // //             </Reveal>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── FOOTER ── */}
// // //       <footer style={{ background: "#06161a", padding: "52px 80px 28px" }}>
// // //         <div style={{ maxWidth: 1280, margin: "0 auto" }}>
// // //           <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 44, marginBottom: 44 }}>
// // //             <div>
// // //               <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
// // //                 <div style={{ width: 32, height: 32, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //                   <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/></svg>
// // //                 </div>
// // //                 <span style={{ fontWeight: 900, fontSize: 15, color: "#fff" }}>Multi<span style={{ color: "#3ec8d4" }}>energia</span></span>
// // //               </div>
// // //               <p style={{ fontSize: 12.5, color: "#3a6a6e", lineHeight: 1.8, maxWidth: 240, marginBottom: 16 }}>Inovação tecnológica ao serviço da energia. Angola · Portugal · Cabo Verde · São Tomé.</p>
// // //               <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11.5, fontWeight: 600, color: "#3ec8d4" }}>www.multienergia.com.pt</a>
// // //             </div>
// // //             {[
// // //               { title: "Produtos", links: ["Sistemas Solares","EcoFlow PowerOcean","Quadros BT","Postos MT","UPS & Estabilizadores","Mobilidade Elétrica"] },
// // //               { title: "Serviços", links: ["Projeto & Engenharia","Instalação & Montagem","Auditoria Energética","Proteção Atmosférica","Manutenção","Energy Academy"] },
// // //               { title: "Empresa", links: ["Sobre Nós","Certificações","Clientes","Parceiros","Contacto"] },
// // //             ].map(col => (
// // //               <nav key={col.title}>
// // //                 <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#0a7a89", marginBottom: 16 }}>{col.title}</div>
// // //                 <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
// // //                   {col.links.map(l => <li key={l}><button className="footer-btn">{l}</button></li>)}
// // //                 </ul>
// // //               </nav>
// // //             ))}
// // //           </div>
// // //           <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
// // //             <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>© 2025 Multienergia. Todos os direitos reservados.</p>
// // //             <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>Alvará IRCOP nº 982/CCOP/IRCOP/SC/2025 · 5ª Classe</p>
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // }






// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";

// /* ─────────────────────────────────────────────
//    DATA
// ───────────────────────────────────────────── */
// const HERO_SLIDES = [
//   {
//     tag: "Eficiência · Transição · Inovação",
//     line1: "Energia que",
//     line2: "transforma",
//     line3: "Angola",
//     sub: "25 anos a fornecer soluções energéticas completas. Da geração ao consumo, do projeto à manutenção.",
//   },
//   {
//     tag: "Representante Oficial EcoFlow · Angola",
//     line1: "Independência",
//     line2: "energética",
//     line3: "total",
//     sub: "Sistemas solares residenciais e industriais, armazenamento e inversores híbridos.",
//   },
//   {
//     tag: "Fabricante Certificado · Legrand Partner",
//     line1: "Fabricamos",
//     line2: "o que outros",
//     line3: "apenas vendem",
//     sub: "Quadros elétricos BT fabricados em Luanda e Lisboa. Qualidade IEC 61439 garantida.",
//   },
// ];

// const PRODUCTS = [
//   {
//     id: "solar",
//     color: "#095b66",
//     light: "#e8f7f9",
//     name: "Sistemas de Energia Solar",
//     specs: ["+50 MW instalados","Residencial · Industrial · Utility","Autoconsumo · Carports · Centrais"],
//     brands: ["Huawei FusionSolar","SMA","Siemens","Nextracker"],
//     desc: "Dimensionamos e instalamos sistemas fotovoltaicos completos. Do painel ao inversor, da ligação à rede ao armazenamento em bateria.",
//   },
//   {
//     id: "ecoflow",
//     color: "#0a7a89",
//     light: "#e6f5f7",
//     name: "EcoFlow PowerOcean",
//     specs: ["5 kW a 29 kW","Até 45 kWh expansível","15 anos garantia · LFP"],
//     brands: ["EcoFlow"],
//     desc: "Inversor híbrido trifásico com armazenamento de energia expansível. Backup potente, instalação plug & play e monitorização remota.",
//   },
//   {
//     id: "quadros",
//     color: "#064e58",
//     light: "#e5f4f6",
//     name: "Quadros Elétricos BT",
//     specs: ["Até 6300 A · Forma 1–4","Fabricação própria em Luanda","Parceiro Legrand · IEC 61439"],
//     brands: ["Legrand"],
//     desc: "Fabricamos quadros elétricos de baixa tensão com unidades industriais próprias em Luanda e Lisboa. Soluções padrão e à medida.",
//   },
//   {
//     id: "ups",
//     color: "#095b66",
//     light: "#e8f7f9",
//     name: "UPS & Estabilizadores",
//     specs: ["Salicru até 800 KVA","Socomec MODULYS 200–4800 KVA","Online dupla conversão"],
//     brands: ["Salicru","Socomec"],
//     desc: "Energia crítica ininterrupta para data centers, hospitais, indústrias e telecomunicações. Proteção contra cortes, surtos e variações.",
//   },
//   {
//     id: "mt",
//     color: "#0a7a89",
//     light: "#e6f5f7",
//     name: "Postos de Transformação",
//     specs: ["Toshiba TCSU 10–30 kV","500 a 2000 KVA","Plug & play · IP66 · Pré-montado"],
//     brands: ["Toshiba T&D"],
//     desc: "Postos compactos pré-montados para ligação de média tensão. Instalação rápida, segurança máxima (Class AB) e resistência climática.",
//   },
//   {
//     id: "ve",
//     color: "#064e58",
//     light: "#e5f4f6",
//     name: "Mobilidade Elétrica",
//     specs: ["11 kW · 22 kW · 50 kW","Doméstico e via pública","Avaliação técnica incluída"],
//     brands: ["Huawei","Tesla","Circutor"],
//     desc: "Soluções completas para carregamento de veículos elétricos. Aconselhamento, instalação certificada e manutenção contínua.",
//   },
// ];

// const SERVICES = [
//   { title: "Fabricação de Quadros Elétricos",       short: "Conceção, fabrico e certificação de quadros elétricos BT e MT: quadros gerais, de distribuição, de comando e automação, executados segundo EN 61439." },
//   { title: "Solar + Armazenamento",                  short: "Sistemas fotovoltaicos on-grid, off-grid e híbridos com baterias de lítio. Soluções Huawei FusionSolar e EcoFlow para instalações residenciais, comerciais e industriais." },
//   { title: "Sistemas de Energia Crítica",            short: "UPS, by-pass estático, grupos geradores e redundância N+1 para centros de dados, hospitais e infraestruturas que exigem continuidade de serviço 24/7." },
//   { title: "Proteção Atmosférica (SPDA)",            short: "Projeto e instalação de sistemas de proteção contra descargas atmosféricas Franklin France. Conformidade com NA 33:2014 e normas IEC 62305." },
//   { title: "Mobilidade Elétrica",                    short: "Fornecimento e instalação de postos de carregamento para veículos elétricos (AC e DC), gestão de energia e integração com solar. Parceiro Circutor e Schneider." },
//   { title: "Fabricação de Armários de Passeio",      short: "Produção de armários técnicos para instalação em espaço público: telecomunicações, iluminação, contagem e distribuição, com acabamento anti-vandalismo." },
//   { title: "Auditoria Energética",                   short: "Inspeção termográfica, análise de qualidade de energia, monitorização de consumos e elaboração de relatórios com plano de medidas de eficiência energética." },
//   { title: "Postos de Transformação",                short: "Projeto, montagem e ensaio de postos de transformação MT/BT cabine e aéreos, incluindo aparelhagem, transformadores e proteções em conformidade com ENDE." },
//   { title: "Telecom",                                short: "Infraestruturas de cabling estruturado, fibra ótica, redes LAN/WAN, CCTV e sistemas de controlo de acesso para edifícios corporativos e industriais." },
//   { title: "SATCOM",                                 short: "Instalação e manutenção de sistemas de comunicação por satélite: VSAT, antenas parabólicas, terminais IP e redundância de link para locais remotos e offshore." },
// ];

// const CLIENTS = [
//   "Sonangol","ETU Energias","Unitel","BFA","Fidelidade","MCA",
//   "TVCabo","Omatapalo","SIC Notícias","Multitel","Refriango","Arreiou",
//   "BancoBNI","Caixa Angola","Telepizza","InfraSat","Prodel","Azueira",
//   "Governo de Angola","Standard Bank","IBM","TotalEnergies","Jumbo",
//   "BancoBIC","CASAIS","ENDE","Axians","Sonangalp","Elecnor","Marlin",
// ];

// const BRANDS = [
//   { name: "Huawei FusionSolar", role: "Parceiro Solar" },
//   { name: "EcoFlow", role: "Rep. Oficial AO" },
//   { name: "Toshiba T&D", role: "Rep. Oficial" },
//   { name: "Franklin France", role: "Rep. Oficial SPDA" },
//   { name: "Legrand", role: "Parceiro Quadros" },
//   { name: "Salicru", role: "Rep. Oficial UPS" },
//   { name: "Socomec", role: "Rep. Oficial UPS" },
//   { name: "Siemens", role: "Parceiro" },
//   { name: "Schneider Electric", role: "Parceiro" },
//   { name: "SMA", role: "Parceiro Solar" },
//   { name: "Circutor", role: "Parceiro VE" },
//   { name: "Nextracker", role: "Parceiro Solar" },
// ];

// const PRESENCE = [
//   { name: "Angola · Luanda",     lon: 13.23,  lat: -8.84, main: true,  detail: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362" },
//   { name: "Portugal · Lisboa",   lon: -9.14,  lat: 38.72, main: true,  detail: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
//   { name: "Cabo Verde · Praia",  lon: -23.51, lat: 14.93, main: false, detail: "Presença comercial activa" },
//   { name: "São Tomé e Príncipe", lon:  6.61,  lat:  0.33, main: false, detail: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
// ];

// /* ─────────────────────────────────────────────
//    HOOKS
// ───────────────────────────────────────────── */
// function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [vis, setVis] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting) { setVis(true); obs.disconnect(); }
//     }, { threshold });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, vis];
// }

// function Reveal({ children, delay = 0, style = {} }: {
//   children: React.ReactNode; delay?: number; style?: React.CSSProperties;
// }) {
//   const [ref, vis] = useInView();
//   return (
//     <div ref={ref as React.RefObject<HTMLDivElement>} style={{
//       opacity: vis ? 1 : 0,
//       transform: vis ? "none" : "translateY(22px)",
//       transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
//       ...style,
//     }}>
//       {children}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    WORLD MAP
//    ViewBox 1000 × 500. All paths computed from
//    real lon/lat via Web-Mercator:
//      x = (lon+180)/360 * 1000
//      y = 250 - 250/π * ln(tan(π/4 + lat*π/360))
// ───────────────────────────────────────────── */
// type PresencePoint = { name: string; lon: number; lat: number; main: boolean; detail: string };

// function merc(lon: number, lat: number): [number, number] {
//   const x = (lon + 180) / 360 * 1000;
//   const y = 250 - (250 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
//   return [+x.toFixed(1), +y.toFixed(1)];
// }

// /*
//   All paths below are mathematically generated from real lon/lat coordinates.
//   Projection: Web Mercator, viewBox 1000×500.
//   x = (lon+180)/360*1000
//   y = 250 − (250/π)·ln(tan(π/4 + lat·π/360))

//   Key y-values: lat80=56, lat60=145, lat40=189, lat20=222,
//                 lat0=250, lat-20=278, lat-40=311, lat-55=344
// */
// const LAND: Record<string, string> = {

//   /* ── North America ────────────────────────────────────────────── */
//   NORTH_AMERICA: `
//     M 111.1,145.2 L 138.9,119.7 L 155.6,111.9 L 166.7,93.8
//     L 183.3,88.6 L 200,88.6   L 222.2,93.8  L 244.4,88.6
//     L 261.1,88.6 L 277.8,88.6 L 291.7,93.8  L 305.6,98.7
//     L 316.7,88.6 L 319.4,107.7 L 316.7,119.7 L 322.2,145.2
//     L 316.7,162.9 L 311.1,158.1 L 305.6,186.5 L 300,192.9
//     L 291.7,198  L 286.1,210   L 277.8,214.1 L 263.9,218.7
//     L 250,221.6  L 230.6,214.1 L 208.3,214.1 L 194.4,217.2
//     L 175,202.2  L 161.1,194.6 L 155.6,189.3
//     L 158.3,177.9 L 155.6,171.7 L 138.9,160.5
//     L 125,150.6  L 108.3,145.2 Z`,

//   /* ── Alaska ───────────────────────────────────────────────────── */
//   ALASKA: `
//     M 0,148   L 16.7,139.5 L 27.8,130.1 L 33.3,119.7
//     L 50,119.7 L 66.7,130.1 L 77.8,139.5 L 88.9,139.5
//     L 100,139.5 L 108.3,145.2 L 100,150.6 L 88.9,150.6
//     L 77.8,155.7 L 61.1,158.1 L 44.4,158.1 L 27.8,155.7
//     L 11.1,152 Z`,

//   /* ── Greenland ────────────────────────────────────────────────── */
//   GREENLAND: `
//     M 355.6,83.1 L 375,56.1   L 400,27.6  L 427.8,22.8
//     L 452.8,27.6 L 466.7,56.1 L 461.1,83.1 L 450,111.9
//     L 433.3,130.1 L 416.7,145.2 L 400,139.5
//     L 383.3,130.1 L 372.2,111.9 Z`,

//   /* ── Central America + Caribbean ─────────────────────────────── */
//   C_AMERICA: `
//     M 230.6,214.1 L 244.4,210 L 255.6,214.1
//     L 263.9,224.6 L 272.2,236 L 277.8,250
//     L 263.9,247.2 L 255.6,241.7 L 247.2,233.2
//     L 238.9,224.6 Z`,

//   /* ── South America ────────────────────────────────────────────── */
//   SOUTH_AMERICA: `
//     M 277.8,250   L 288.9,247.2 L 300,247.2  L 316.7,243
//     L 333.3,241.7 L 347.2,241.7 L 361.1,247.2
//     L 375,252.8  L 388.9,257   L 402.8,257
//     L 405.6,262.6 L 397.2,271.1 L 388.9,279.8
//     L 377.8,285.9 L 366.7,290.5 L 355.6,300.3
//     L 344.4,307.1 L 330.6,316.3 L 319.4,330.4
//     L 316.7,344.3 L 311.1,344.3 L 305.6,336.5
//     L 297.2,323.7 L 291.7,310.7 L 291.7,297
//     L 288.9,284.4 L 280.6,271.1 L 275,257 Z`,

//   /* ── Europe (main body) ───────────────────────────────────────── */
//   EUROPE: `
//     M 472.2,196.3 L 477.8,181.8 L 486.1,173.8
//     L 494.4,174.8 L 495.8,182.8 L 508.3,183
//     L 516.7,182.4 L 525,180.8   L 536.1,179.9
//     L 541.7,181.8 L 550,181.8   L 558.3,179.9
//     L 566.7,179.9 L 575,181.8   L 583.3,181.8
//     L 591.7,169.6 L 588.9,165.2 L 575,159.4
//     L 561.1,158.1 L 547.2,158.1 L 536.1,159.4
//     L 527.8,151.9 L 513.9,150.6 L 508.3,158.1
//     L 502.8,165.2 L 497.2,168.5 L 491.7,173.8
//     L 486.1,173.8 L 477.8,181.8 Z
//     M 583.3,181.8 L 591.7,181.8 L 600,185.6
//     L 602.8,192.9 L 597.2,198   L 586.1,196.3
//     L 577.8,196.3 L 575,190.5 Z`,

//   /* ── Iberian Peninsula ────────────────────────────────────────── */
//   IBERIA: `
//     M 472.2,196.3 L 477.8,181.8 L 486.1,173.8
//     L 491.7,173.8 L 495.8,182.8 L 508.3,183
//     L 509.4,186   L 502.8,188.1 L 500.6,192.9
//     L 497.2,195   L 486.1,197   L 481.9,195.2
//     L 475.6,195   L 473.9,192.5 Z`,

//   /* ── UK & Ireland ─────────────────────────────────────────────── */
//   UK: `M 477.8,162.9 L 486.1,158.1 L 497.2,158.1
//        L 502.8,162.9 L 497.2,167.4 L 488.9,169.6
//        L 480.6,167.4 Z
//        M 469.4,158.1 L 477.8,152 L 483.3,155.7
//        L 480.6,165.2 L 472.2,165.2 Z`,

//   /* ── Iceland ──────────────────────────────────────────────────── */
//   ICELAND: `M 427.8,126.8 L 438.9,120.6 L 455.6,119.7
//              L 461.1,124.1 L 452.8,130.1 L 438.9,133.3 Z`,

//   /* ── Scandinavia ──────────────────────────────────────────────── */
//   SCANDINAVIA: `
//     M 513.9,150.6 L 527.8,151.9 L 536.1,158.1
//     L 543.1,155.7 L 547.2,152   L 552.8,149.3
//     L 558.3,147.9 L 566.7,146.6 L 572.2,142.4
//     L 577.8,128.5 L 580.6,117.8 L 575,109.8
//     L 566.7,107.7 L 555.6,107.7 L 550,115.9
//     L 544.4,117.8 L 538.9,128.5 L 525,133.3
//     L 519.4,133.3 L 513.9,139.5 Z`,

//   /* ── Russia (European + Siberian) ────────────────────────────── */
//   RUSSIA: `
//     M 544.4,117.8 L 558.3,107.7 L 583.3,98.7
//     L 611.1,93.8  L 638.9,93.8  L 666.7,93.8
//     L 694.4,86.1  L 722.2,83.1  L 750,83.1
//     L 777.8,86.1  L 805.6,93.8  L 833.3,98.7
//     L 861.1,98.7  L 888.9,111.9 L 916.7,119.7
//     L 944.4,119.7 L 966.7,107.7 L 980.6,98.7
//     L 1000,98.7   L 1000,145.2
//     L 972.2,158.1 L 944.4,158.1 L 916.7,145.2
//     L 900,165.2   L 888.9,169.6 L 875,177.9
//     L 861.1,185.6 L 847.2,185.6 L 833.3,185.6
//     L 819.4,177.9 L 805.6,175.9 L 791.7,175.9
//     L 777.8,175.9 L 763.9,171.7 L 750,169.6
//     L 736.1,165.2 L 722.2,165.2 L 708.3,158.1
//     L 694.4,158.1 L 680.6,165.2 L 666.7,158.1
//     L 652.8,152   L 638.9,145.2 L 625,145.2
//     L 611.1,139.5 L 597.2,139.5 L 588.9,133.3
//     L 577.8,119.7 L 566.7,117.8 Z`,

//   /* ── Central Asia / Turkey / Caucasus ───────────────────────── */
//   C_ASIA: `
//     M 538.9,181.8 L 555.6,179.9 L 566.7,179.9
//     L 575,181.8   L 586.1,177.9 L 600,185.6
//     L 616.7,185.6 L 630.6,181.8 L 644.4,181.8
//     L 658.3,185.6 L 666.7,185.6 L 680.6,181.8
//     L 694.4,175.9 L 708.3,172.2 L 716.7,175.9
//     L 722.2,185.6 L 722.2,196.3 L 713.9,203
//     L 700,206.3   L 686.1,206.3 L 672.2,203
//     L 655.6,206.3 L 638.9,206.3 L 622.2,206.3
//     L 611.1,200   L 600,192.9   L 591.7,181.8
//     L 577.8,181.8 L 566.7,185.6 L 552.8,185.6
//     L 541.7,185.6 Z`,

//   /* ── Middle East / Arabian Peninsula ────────────────────────── */
//   MIDDLE_EAST: `
//     M 563.9,192.9 L 577.8,181.8 L 586.1,181.8
//     L 600,185.6   L 611.1,185.6 L 622.2,185.6
//     L 636.1,192.9 L 650,203     L 658.3,212.6
//     L 663.9,218.7 L 655.6,228.9 L 644.4,234.6
//     L 627.8,238.9 L 616.7,238.9 L 608.3,232.2
//     L 597.2,224.6 L 591.7,215.6 L 577.8,212.6
//     L 566.7,206.3 L 558.3,196.3 Z`,

//   /* ── Africa ───────────────────────────────────────────────────── */
//   AFRICA: `
//     M 447.2,194.6 L 461.1,190.6 L 475,190.6
//     L 488.9,192.9 L 502.8,194.6 L 516.7,194.6
//     L 530.6,194.6 L 544.4,194.6 L 558.3,196.3
//     L 572.2,203   L 583.3,209.5 L 594.4,209.5
//     L 608.3,215.6 L 616.7,224.6 L 622.2,234.6
//     L 625,241.7   L 619.4,250   L 613.9,258.3
//     L 611.1,265.4 L 605.6,274   L 600,285.9
//     L 594.4,296.3 L 588.9,302   L 575,305.4
//     L 558.3,302   L 547.2,298.6 L 541.7,285.9
//     L 536.1,271.1 L 530.6,258.3 L 522.2,247.2
//     L 513.9,244.4 L 505.6,244.4 L 494.4,244.4
//     L 483.3,244.4 L 472.2,244.4 L 461.1,241.7
//     L 450,234.6   L 444.4,227.5 L 444.4,218.7
//     L 447.2,207   Z
//     M 444.4,227.5 L 436.1,230.4 L 425,238.9
//     L 422.2,250   L 427.8,259.3 L 438.9,258.3
//     L 447.2,250   L 447.2,238.9 Z`,

//   /* ── Madagascar ───────────────────────────────────────────────── */
//   MADAGASCAR: `
//     M 616.7,262.6 L 622.2,262.6 L 633.3,265.4
//     L 641.7,268.2 L 641.7,282.8 L 633.3,291.7
//     L 622.2,291.7 L 613.9,282.8 L 611.1,271.1 Z`,

//   /* ── India ────────────────────────────────────────────────────── */
//   INDIA: `
//     M 663.9,196.3 L 677.8,189.3 L 688.9,189.3
//     L 700,192.9   L 711.1,200   L 719.4,199.7
//     L 730.6,209.5 L 736.1,218.7 L 747.2,221.6
//     L 750,228.9   L 744.4,236   L 733.3,241.7
//     L 722.2,244.4 L 713.9,241.7 L 705.6,230.4
//     L 694.4,221.6 L 688.9,224.6 L 683.3,221.6
//     L 672.2,218.7 L 663.9,209.5 Z`,

//   /* ── China / East Asia ────────────────────────────────────────── */
//   CHINA: `
//     M 694.4,175.9 L 708.3,172.2 L 716.7,175.9
//     L 722.2,185.6 L 736.1,181.8 L 750,175.9
//     L 763.9,171.7 L 777.8,168.5 L 791.7,165.2
//     L 805.6,162.9 L 819.4,162.9 L 833.3,162.9
//     L 850,169.6   L 861.1,181.8 L 858.3,192.9
//     L 852.8,196.3 L 847.2,192.9 L 833.3,192.9
//     L 819.4,196.3 L 808.3,209.5 L 800,221.6
//     L 791.7,221.6 L 780.6,218.7 L 769.4,215.6
//     L 755.6,221.6 L 747.2,221.6 L 736.1,218.7
//     L 730.6,209.5 L 719.4,199.7 L 711.1,200
//     L 700,192.9   Z`,

//   /* ── SE Asia (Indochina + Malaysia) ──────────────────────────── */
//   SE_ASIA: `
//     M 777.8,218.7 L 791.7,221.6 L 800,218.7
//     L 808.3,209.5 L 819.4,209.5 L 833.3,209.5
//     L 844.4,218.7 L 838.9,228.9 L 827.8,234.6
//     L 816.7,234.6 L 808.3,241.7 L 800,250
//     L 808.3,258.3 L 816.7,258.3 L 822.2,252.8
//     L 833.3,252.8 L 833.3,263.9 L 816.7,263.9
//     L 808.3,258.3 L 797.2,255.6 L 786.1,250
//     L 780.6,244.4 L 772.2,238.9 L 769.4,228.9
//     L 769.4,221.6 Z`,

//   /* ── Japan ────────────────────────────────────────────────────── */
//   JAPAN: `
//     M 855.6,192.9 L 861.1,185.6 L 872.2,181.8
//     L 883.3,181.8 L 886.1,185.6 L 880.6,192.9
//     L 872.2,196.3 L 861.1,199.7 Z
//     M 877.8,199.7 L 883.3,192.9 L 894.4,189.3
//     L 900,192.9   L 897.2,203   L 886.1,206.3
//     L 877.8,203 Z`,

//   /* ── Korea ────────────────────────────────────────────────────── */
//   KOREA: `M 836.1,192.9 L 847.2,189.3 L 855.6,192.9
//            L 855.6,203   L 847.2,206.3 L 836.1,203 Z`,

//   /* ── Australia ────────────────────────────────────────────────── */
//   AUSTRALIA: `
//     M 808.3,278.4 L 819.4,272.5 L 833.3,268.2
//     L 850,265.4   L 866.7,263.9 L 880.6,265.4
//     L 894.4,269.6 L 908.3,272.5 L 916.7,281.3
//     L 925,290.5   L 925,303.7   L 916.7,311.1
//     L 905.6,311.1 L 894.4,311.1 L 883.3,307.7
//     L 869.4,303.7 L 855.6,307.7 L 841.7,311.1
//     L 827.8,307.7 L 816.7,300.3 L 808.3,290.5 Z
//     M 916.7,281.3 L 930.6,275.4 L 941.7,281.3
//     L 938.9,293.7 L 925,296.3 Z`,

//   /* ── New Zealand ─────────────────────────────────────────────── */
//   NEW_ZEALAND: `
//     M 966.7,318.2 L 977.8,311.1 L 988.9,315.4
//     L 988.9,326   L 977.8,329   L 966.7,322.1 Z
//     M 972.2,329   L 983.3,318.2 L 994.4,322.1
//     L 994.4,337   L 983.3,341   L 972.2,334 Z`,

//   /* ── Cabo Verde (island cluster, accent) ─────────────────────── */
//   CAPE_VERDE: `M 424,236 L 432,229 L 442,232 L 439,241 L 428,244 Z`,

//   /* ── São Tomé (island, accent) ───────────────────────────────── */
//   SAO_TOME: `M 516,252 L 523,245 L 530,248 L 528,257 L 519,260 Z`,
// };

// const ACCENT = new Set(["AFRICA", "IBERIA", "CAPE_VERDE", "SAO_TOME"]);

// function WorldMap({ points, activePoint, onHover }: {
//   points: PresencePoint[];
//   activePoint: number | null;
//   onHover: (i: number) => void;
// }) {
//   const dots = points.map(p => {
//     const [cx, cy] = merc(p.lon, p.lat);
//     return { ...p, cx, cy };
//   });

//   /* reference latitudes */
//   const yEq   = merc(0,   0)[1];
//   const yCanc = merc(0,  23.5)[1];
//   const yCap  = merc(0, -23.5)[1];

//   return (
//     <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
//       <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet"
//         style={{ width: "100%", height: "auto", display: "block" }}>

//         <rect width="1000" height="500" fill="#dff0f3" rx="8"/>

//         {/* Latitude reference lines */}
//         <line x1="0" y1={yEq}   x2="1000" y2={yEq}   stroke="#b8dfe8" strokeWidth="0.8" strokeDasharray="6 8"/>
//         <line x1="0" y1={yCanc} x2="1000" y2={yCanc} stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10"/>
//         <line x1="0" y1={yCap}  x2="1000" y2={yCap}  stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10"/>

//         {/* Continents */}
//         {Object.entries(LAND).map(([k, d]) => (
//           <path key={k} d={d}
//             fill={ACCENT.has(k) ? "#8ecdd6" : "#b2d8e0"}
//             stroke="#7ab8c0" strokeWidth="0.7"
//             strokeLinejoin="round" strokeLinecap="round"
//           />
//         ))}

//         {/* Connection line between the 2 main offices */}
//         {(() => { const m = dots.filter(p => p.main); return m.length >= 2 ? <line x1={m[0].cx} y1={m[0].cy} x2={m[1].cx} y2={m[1].cy} stroke="#095b66" strokeWidth="1.3" strokeDasharray="5 5" opacity="0.55"/> : null; })()}

//         {/* Dots */}
//         {dots.map((p, i) => (
//           <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
//             {p.main && <>
//               <circle cx={p.cx} cy={p.cy} r="6" fill="#095b66" opacity="0.15">
//                 <animate attributeName="r" values="6;20;6" dur="3s" repeatCount="indefinite"/>
//                 <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite"/>
//               </circle>
//               <circle cx={p.cx} cy={p.cy} r="10" fill="#095b66" opacity="0.1"/>
//             </>}
//             <circle cx={p.cx} cy={p.cy}
//               r={activePoint === i ? 9 : 6}
//               fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#5cb8c0")}
//               stroke="#fff" strokeWidth="2.5"
//               style={{ transition: "r .2s, fill .2s" }}
//             />
//           </g>
//         ))}
//       </svg>

//       {activePoint !== null && (() => {
//         const d = dots[activePoint];
//         const px = (d.cx / 1000) * 100;
//         const py = (d.cy / 500) * 100;
//         return (
//           <div style={{
//             position: "absolute", left: `${px}%`, top: `${py}%`,
//             transform: `translate(${px > 62 ? "-108%" : "14px"}, ${py > 58 ? "-118%" : "14px"})`,
//             background: "#fff", border: "1.5px solid #b8dde2", borderRadius: 10,
//             padding: "12px 16px", minWidth: 222,
//             boxShadow: "0 10px 36px rgba(9,91,102,.2)", zIndex: 10, pointerEvents: "none",
//           }}>
//             <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 5 }}>{d.name}</div>
//             <div style={{ fontSize: 11.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{d.detail}</div>
//           </div>
//         );
//       })()}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    SIMULADOR — tipos e motor de cálculo
// ───────────────────────────────────────────── */
// type TipoProjeto = "residencial" | "empresa" | "industrial" | "agricola" | "outro";
// type SimStep = 1 | 2 | 3;

// interface SimForm {
//   tipo: TipoProjeto | "";
//   area: string;
//   consumo: string;
//   autonomia: string;
//   trifasico: boolean;
//   gerador: boolean;
//   spda: boolean;
//   ve: boolean;
//   solar: boolean;
//   ups: boolean;
//   localizacao: string;
// }

// interface MatItem {
//   ref: string;
//   nome: string;
//   marca: string;
//   qtd: number;
//   unidade: string;
//   cat: string;
//   obs?: string;
// }

// const TIPOS_PROJETO = [
//   { id: "residencial" as TipoProjeto, label: "Residencial", sub: "Moradia / Apartamento",
//     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M4 14L16 4l12 10v14H20v-9h-8v9H4V14z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg> },
//   { id: "empresa" as TipoProjeto, label: "Empresa / Escritório", sub: "Comercial · Serviços",
//     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><rect x="4" y="6" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M10 28V20h5v8M17 28V20h5v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><rect x="9" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="19" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="14" y="10" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/></svg> },
//   { id: "industrial" as TipoProjeto, label: "Industrial", sub: "Fábrica · Armazém",
//     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><path d="M2 28V14l8-6v6l8-6v6l8-6v20H2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><rect x="6" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="14" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><rect x="22" y="20" width="4" height="8" rx="1" fill="currentColor" opacity=".4"/><path d="M10 6V2M18 4V2M26 6V2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
//   { id: "agricola" as TipoProjeto, label: "Agrícola / Rural", sub: "Bombeamento · Campo",
//     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="14" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M16 7V3M16 21v-4M9 14H5M27 14h-4M11 9L8 6M24 6l-3 3M11 19l-3 3M24 22l-3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="16" cy="14" r="2.5" fill="currentColor" opacity=".4"/><path d="M8 28h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> },
//   { id: "outro" as TipoProjeto, label: "Outro / Misto", sub: "Projecto personalizado",
//     icon: <svg viewBox="0 0 32 32" fill="none" width="26" height="26"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8"/><path d="M16 10v2M16 20v2M10 16h2M20 16h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="3" fill="currentColor" opacity=".45"/></svg> },
// ];

// const CAT_CONFIG: Record<string, { cor: string; fundo: string }> = {
//   "Quadros BT":       { cor: "#064e58", fundo: "#e5f4f6" },
//   "Protecção":        { cor: "#095b66", fundo: "#e8f7f9" },
//   "Cablagem":         { cor: "#0a7a89", fundo: "#e6f5f7" },
//   "Infraestrutura":   { cor: "#095b66", fundo: "#f0f9fa" },
//   "Iluminação":       { cor: "#064e58", fundo: "#e5f4f6" },
//   "Tomadas/Acabam.":  { cor: "#095b66", fundo: "#e8f7f9" },
//   "Solar":            { cor: "#7a5200", fundo: "#fff7e0" },
//   "Armazenamento":    { cor: "#7a5200", fundo: "#fff3cc" },
//   "UPS":              { cor: "#095b66", fundo: "#e8f7f9" },
//   "Média Tensão":     { cor: "#7a0000", fundo: "#fce8e8" },
//   "SPDA":             { cor: "#8a4200", fundo: "#fff0e0" },
//   "Mobilidade VE":    { cor: "#1a3a8f", fundo: "#e6eeff" },
//   "Backup Gerador":   { cor: "#3a2a10", fundo: "#f0ebe0" },
// };

// function calcSimulacao(f: SimForm): MatItem[] {
//   if (!f.tipo || !f.consumo || !f.area) return [];
//   const kwh  = Math.max(1, parseFloat(f.consumo) || 10);
//   const m2   = Math.max(10, parseFloat(f.area)   || 100);
//   const aut  = parseInt(f.autonomia) || 1;
//   const ind  = f.tipo === "industrial";
//   const res  = f.tipo === "residencial";
//   const agr  = f.tipo === "agricola";
//   const mats: MatItem[] = [];

//   /* ── QUADRO GERAL ── */
//   const ampQG = kwh > 300 ? 630 : kwh > 80 ? 250 : kwh > 30 ? 125 : kwh > 15 ? 100 : 63;
//   mats.push({ cat: "Quadros BT", ref: "QGD-BT",     nome: `Quadro Geral Distribuição BT ${ampQG}A`,         marca: "Legrand / Fabricação Própria", qtd: 1,  unidade: "un", obs: f.trifasico ? "Trifásico 3×400V" : "Monofásico 230V · IEC 61439" });
//   if (!res && kwh > 20) mats.push({ cat: "Quadros BT", ref: "QS-ZONA",  nome: "Quadro Secundário de Zona",                      marca: "Legrand",                     qtd: Math.ceil(m2 / 400), unidade: "un", obs: "Distribuição por zonas / pisos" });

//   /* ── PROTECÇÃO ── */
//   const nZonas = res ? Math.ceil(m2 / 20) : ind ? Math.ceil(m2 / 40) : Math.ceil(m2 / 25);
//   mats.push({ cat: "Protecção", ref: "DIS-16A",  nome: "Disjuntor Magnetotérmico 16A unipolar",          marca: "Legrand",  qtd: Math.max(2, Math.ceil(nZonas * .55)), unidade: "un" });
//   mats.push({ cat: "Protecção", ref: "DIS-32A",  nome: "Disjuntor Magnetotérmico 32A unipolar",          marca: "Legrand",  qtd: Math.max(1, Math.ceil(nZonas * .35)), unidade: "un" });
//   if (ind || f.trifasico) mats.push({ cat: "Protecção", ref: "DIS-TRI-63A", nome: "Disjuntor Trifásico 63A",               marca: "Legrand",  qtd: Math.max(1, Math.ceil(nZonas * .15)), unidade: "un", obs: "Circuitos de força / motores" });
//   mats.push({ cat: "Protecção", ref: "DDI-30mA", nome: "Interruptor Diferencial 30mA 2P",                marca: "Legrand",  qtd: Math.ceil(nZonas / 4), unidade: "un" });
//   if (!res) mats.push({ cat: "Protecção", ref: "DDI-300mA", nome: "Interruptor Diferencial 300mA 4P",            marca: "Legrand",  qtd: Math.ceil(nZonas / 8), unidade: "un", obs: "Protecção geral circuitos força" });
//   mats.push({ cat: "Protecção", ref: "SURTO-T2", nome: "Descarregador Sobretensões Tipo 2",              marca: "Legrand",  qtd: 1, unidade: "un", obs: "Protecção QGD principal" });

//   /* ── CABLAGEM ── */
//   const fCab = ind ? 1.1 : res ? 0.85 : 1.0;
//   mats.push({ cat: "Cablagem", ref: "CAB-2.5",  nome: "Cabo H07V-K 2,5mm² (anel/tomadas)",             marca: "Nexans",   qtd: Math.round(m2 * 1.6 * fCab), unidade: "m",  obs: "Circuitos iluminação e tomadas" });
//   mats.push({ cat: "Cablagem", ref: "CAB-4",    nome: "Cabo H07V-K 4mm² (circuitos potência)",         marca: "Nexans",   qtd: Math.round(m2 * 0.7 * fCab), unidade: "m" });
//   mats.push({ cat: "Cablagem", ref: "CAB-16",   nome: "Cabo H07V-K 16mm² (alimentação principal)",     marca: "Nexans",   qtd: Math.round(m2 * 0.4 * fCab), unidade: "m" });
//   if (ind) mats.push({ cat: "Cablagem", ref: "CAB-35",  nome: "Cabo H07V-K 35mm² (acometimento BT)",    marca: "Nexans",   qtd: Math.round(m2 * 0.15), unidade: "m", obs: "Ligação QGBT / transformador" });

//   /* ── INFRAESTRUTURA ── */
//   mats.push({ cat: "Infraestrutura", ref: "CALHA-40",   nome: "Calha Técnica PVC 40×40mm",              marca: "Legrand",  qtd: Math.ceil(m2 * 0.45), unidade: "m" });
//   if (!res) mats.push({ cat: "Infraestrutura", ref: "CALHA-100",  nome: "Calha Técnica PVC 100×60mm (corredor técnico)", marca: "Legrand", qtd: Math.ceil(m2 * 0.12), unidade: "m" });
//   mats.push({ cat: "Infraestrutura", ref: "CORR-20",    nome: "Tubo Corrugado Flexível Ø20mm",          marca: "Legrand",  qtd: Math.round(m2 * 0.9), unidade: "m" });
//   if (ind) mats.push({ cat: "Infraestrutura", ref: "BANDEJA-100", nome: "Bandeja Portacabos Aço 100mm",  marca: "Legrand",  qtd: Math.ceil(m2 * 0.08), unidade: "m", obs: "Distribuição aérea industrial" });
//   mats.push({ cat: "Infraestrutura", ref: "CAIXA-ENT",  nome: "Caixa de Encastrar 2-módulos",           marca: "Legrand",  qtd: Math.ceil(m2 / (res ? 6 : 8)), unidade: "un" });

//   /* ── ILUMINAÇÃO ── */
//   const lux   = ind ? 200 : res ? 100 : 150;
//   const wLum  = ind ? 150 : res ? 18 : 36;
//   const nLum  = Math.ceil((m2 * lux) / (wLum * 100));
//   const tipo  = ind ? "Armadura LED Industrial" : res ? "Painel LED Encastrado" : "Armadura LED Slim";
//   const ip    = ind ? "IP65" : "IP44";
//   mats.push({ cat: "Iluminação", ref: `LED-${wLum}W`, nome: `${tipo} ${wLum}W ≥130lm/W`,  marca: "Legrand / Philips", qtd: nLum, unidade: "un", obs: `${ip} · Eficiência classe A+` });
//   mats.push({ cat: "Iluminação", ref: "BLQ-EMG-8W",   nome: "Bloco Autónomo Emergência 8W 3h", marca: "Legrand", qtd: Math.max(2, Math.ceil(nLum / 6)), unidade: "un", obs: "Sinalização saídas emergência" });

//   /* ── TOMADAS / ACABAMENTOS ── */
//   const nTom = Math.ceil(m2 / (res ? 7 : 10));
//   mats.push({ cat: "Tomadas/Acabam.", ref: "TOM-16A", nome: res ? "Tomada Dupla Schuko 16A com terra" : "Tomada Industrial IP44 16A", marca: "Legrand", qtd: nTom, unidade: "un" });
//   if (!res) mats.push({ cat: "Tomadas/Acabam.", ref: "TOM-32A-IND", nome: "Tomada Industrial IP44 32A 3P+N+T", marca: "Legrand", qtd: Math.ceil(m2 / 60), unidade: "un", obs: "Força motriz / equipamentos" });

//   /* ── SOLAR ── */
//   if (f.solar) {
//     const hpico  = agr ? 5.5 : 5.0;               // horas pico solar Angola/Portugal
//     const kwp    = Math.ceil(kwh / hpico * 1.15);  // 15% oversizing
//     const nPain  = Math.ceil((kwp * 1000) / 580);
//     const pInv   = kwp <= 5 ? 5 : kwp <= 15 ? 15 : kwp <= 30 ? 30 : kwp <= 60 ? 60 : 100;
//     mats.push({ cat: "Solar", ref: "PV-580W",     nome: "Painel Solar Mono Half-Cut 580Wp",                  marca: "Huawei FusionSolar", qtd: nPain,             unidade: "un", obs: `Total: ${(nPain * 0.58).toFixed(1)} kWp · Eficiência ≥21,5%` });
//     mats.push({ cat: "Solar", ref: `INV-${pInv}K`, nome: `Inversor Híbrido SUN2000-${pInv}KTL`,             marca: "Huawei",            qtd: 1,                 unidade: "un", obs: "MPPT duplo · monitorização remota · WiFi" });
//     mats.push({ cat: "Solar", ref: "CAB-SOL-4",   nome: "Cabo Solar PV H1Z2Z2-K 4mm²",                     marca: "Prysmian",          qtd: nPain * 14,        unidade: "m" });
//     mats.push({ cat: "Solar", ref: "ESTR-COBERT", nome: "Estrutura Fixação Alumínio em Cobertura",          marca: "K2 Systems",        qtd: Math.ceil(nPain / 2), unidade: "kit", obs: "Inclinação ajustável 10–35°" });
//     mats.push({ cat: "Solar", ref: "CON-MC4",     nome: "Conector MC4 (par macho+fêmea)",                  marca: "Stäubli",           qtd: nPain * 2,         unidade: "par" });
//     mats.push({ cat: "Solar", ref: "SURTO-PV",    nome: "Protecção Sobretensão DC Tipo 2",                 marca: "Legrand",           qtd: 1,                 unidade: "un", obs: "Protecção string box" });
//     /* Armazenamento */
//     if (aut > 0) {
//       const kwhBat = Math.ceil(kwh * aut * 1.25);
//       const nMod   = Math.ceil(kwhBat / 5);
//       mats.push({ cat: "Armazenamento", ref: "BAT-LFP-5K", nome: "Módulo Bateria LFP 5kWh PowerOcean",       marca: "EcoFlow",           qtd: nMod,              unidade: "un", obs: `${kwhBat} kWh total · ${aut}d autonomia · 15 anos garantia` });
//     }
//   }

//   /* ── UPS ── */
//   if (f.ups) {
//     const kva = res ? 3 : ind ? (kwh > 200 ? 200 : 80) : 20;
//     const fab = kva > 40 ? "Socomec MODULYS" : "Salicru SLC TWIN RT";
//     mats.push({ cat: "UPS", ref: `UPS-${kva}KVA`, nome: `UPS Online Dupla Conversão ${kva} KVA`, marca: fab, qtd: 1, unidade: "un", obs: "10 min autonomia interna · extensível via ext. battery" });
//   }

//   /* ── MÉDIA TENSÃO ── */
//   if (ind && kwh > 100) {
//     const kvaT = kwh > 500 ? 2000 : kwh > 200 ? 1000 : 500;
//     mats.push({ cat: "Média Tensão", ref: `PT-${kvaT}K`, nome: `Posto Transformação Compacto ${kvaT} KVA`, marca: "Toshiba T&D TCSU", qtd: 1, unidade: "un", obs: "10–30 kV · Pré-montado · IP66 · Class AB" });
//   }

//   /* ── SPDA ── */
//   if (f.spda) {
//     const raio = ind ? 107 : 60;
//     mats.push({ cat: "SPDA", ref: "PARARR-ESE",  nome: `Para-Raios ESE Franklin France R${raio}m`,      marca: "Franklin France", qtd: 1,                       unidade: "un", obs: `Raio de protecção: ${raio}m · IEC 62305` });
//     mats.push({ cat: "SPDA", ref: "COND-DES-50", nome: "Condutor de Descida Cobre 50mm²",               marca: "Franklin France", qtd: Math.ceil(Math.sqrt(m2)*4), unidade: "m" });
//     mats.push({ cat: "SPDA", ref: "ELEC-TERRA",  nome: "Eléctrodo Terra Aço Inox Ø14mm × 1,5m",         marca: "Franklin France", qtd: Math.ceil(m2 / 200) + 1, unidade: "un" });
//     mats.push({ cat: "SPDA", ref: "SURTO-T1T2",  nome: "Descarregador Sobretensão Tipo 1+2",            marca: "Legrand",         qtd: 1,                       unidade: "un", obs: "Protecção combinada QGD principal" });
//   }

//   /* ── MOBILIDADE VE ── */
//   if (f.ve) {
//     const pvE = res ? 7.4 : ind ? 50 : 22;
//     const nVE = res ? 1 : Math.max(2, Math.ceil(m2 / 400));
//     const fab = pvE >= 50 ? "Circutor" : "Huawei";
//     mats.push({ cat: "Mobilidade VE", ref: `VE-${pvE}KW`,  nome: `Posto Carregamento VE ${pvE}kW`,                  marca: fab,   qtd: nVE, unidade: "un", obs: pvE >= 50 ? "DC Rápido · CCS + CHAdeMO · OCPP" : pvE >= 22 ? "AC Trifásico · Type 2 · RFID" : "Modo 3 · Type 2 · App" });
//     mats.push({ cat: "Mobilidade VE", ref: "CAB-VE-6",      nome: "Cabo Flexível H05VV-F 3×6mm² para VE",           marca: "Prysmian", qtd: nVE * (pvE >= 22 ? 30 : 15), unidade: "m" });
//   }

//   /* ── BACKUP / GERADOR ── */
//   if (f.gerador) {
//     const kvaG = kwh > 200 ? 200 : kwh > 80 ? 80 : kwh > 30 ? 30 : 15;
//     mats.push({ cat: "Backup Gerador", ref: `GEN-${kvaG}K`,  nome: `Grupo Gerador Diesel ${kvaG} KVA Insonorizado`, marca: "Perkins / Stamford", qtd: 1, unidade: "un", obs: "Arranque automático · nível sonoro ≤70 dB(A)" });
//     mats.push({ cat: "Backup Gerador", ref: "ATS-AUTO",       nome: "Comutador Automático ATS 4P",                   marca: "Legrand",           qtd: 1, unidade: "un", obs: "Comutação automática rede ↔ gerador <3s" });
//     mats.push({ cat: "Backup Gerador", ref: "CAB-GEN-16",     nome: "Cabo Alimentação Gerador NYY 4×16mm²",          marca: "Nexans",            qtd: 30, unidade: "m" });
//   }

//   return mats;
// }

// /* ─────────────────────────────────────────────
//    APP
// ───────────────────────────────────────────── */
// export default function Home() {
//   const [slide, setSlide] = useState(0);
//   const [animKey, setAnimKey] = useState(0);

//   const [activeProduct, setActiveProduct] = useState(0);
//   const [activePoint, setActivePoint] = useState<number | null>(null);
//   const [loaderVis, setLoaderVis] = useState(true);
//   const [loaderFade, setLoaderFade] = useState(false);
//   const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

//   /* ── Simulador state ── */
//   const [simStep, setSimStep]     = useState<SimStep>(1);
//   const [simForm, setSimForm]     = useState<SimForm>({
//     tipo: "", area: "", consumo: "", autonomia: "1",
//     trifasico: false, gerador: false, spda: false,
//     ve: false, solar: false, ups: false, localizacao: "Luanda",
//   });
//   const [simResult, setSimResult] = useState<MatItem[]>([]);
//   const [simCatFil, setSimCatFil] = useState("Todos");
//   const setSim = (k: keyof SimForm, v: string | boolean) =>
//     setSimForm(prev => ({ ...prev, [k]: v }));
//   const simCats = ["Todos", ...Array.from(new Set(simResult.map(m => m.cat)))];
//   const simVisible = simCatFil === "Todos" ? simResult : simResult.filter(m => m.cat === simCatFil);
//   const runSim = () => {
//     setSimResult(calcSimulacao(simForm));
//     setSimCatFil("Todos");
//     setSimStep(3);
//   };

//   const advance = () => { setSlide(s => (s + 1) % HERO_SLIDES.length); setAnimKey(k => k + 1); };

//   useEffect(() => {
//     timerRef.current = setInterval(advance, 6000);
//     return () => clearInterval(timerRef.current);
//   }, []);

//   useEffect(() => {
//     const hide = () => { setLoaderFade(true); setTimeout(() => setLoaderVis(false), 480); };
//     const t = setTimeout(hide, 900);
//     const onLoad = () => { clearTimeout(t); setTimeout(hide, 200); };
//     if (document.readyState === "complete") onLoad();
//     else window.addEventListener("load", onLoad);
//     return () => { clearTimeout(t); window.removeEventListener("load", onLoad); };
//   }, []);

//   const cur = HERO_SLIDES[slide];
//   const curProd = PRODUCTS[activeProduct];

//   const NAV = [
//     { label: "Produtos", href: "#produtos" },
//     { label: "Serviços", href: "#servicos" },
//     { label: "Simulador", href: "#simulador" },
//     { label: "Presença", href: "#presenca" },
//     { label: "Contacto", href: "#contacto" },
//   ];

//   return (
//     <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", overflowX: "hidden" }}>
//       {/* ── PAGE LOADER ── */}
//       {loaderVis && (
//         <div style={{ position:"fixed", inset:0, zIndex:9999, background:"#095b66", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:28, transition:"opacity .48s ease, transform .48s ease", opacity:loaderFade?0:1, transform:loaderFade?"scale(1.02)":"none", pointerEvents:loaderFade?"none":"auto" }}>
//           <style>{`
//             @keyframes _lp{0%,100%{opacity:1}50%{opacity:.4}}
//             @keyframes _lb{0%{transform:scaleX(0)}60%{transform:scaleX(.75)}100%{transform:scaleX(1)}}
//             @keyframes _ls{0%{background-position:-400px 0}100%{background-position:400px 0}}
//           `}</style>
//           <div style={{ display:"flex", alignItems:"center", gap:10, animation:"_lp 1.6s ease infinite" }}>
//             <div style={{ width:44, height:44, borderRadius:10, background:"rgba(255,255,255,.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
//               <svg viewBox="0 0 24 24" fill="none" width="26" height="26"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" stroke="#fff" strokeWidth=".5" strokeLinejoin="round"/></svg>
//             </div>
//             <span style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:900, fontSize:22, color:"#fff", letterSpacing:"-.01em" }}>
//               Multi<span style={{ color:"rgba(255,255,255,.5)" }}>energia</span>
//             </span>
//           </div>
//           <div style={{ width:160, height:2, background:"rgba(255,255,255,.15)", borderRadius:99, overflow:"hidden" }}>
//             <div style={{ height:"100%", width:"100%", background:"linear-gradient(90deg,rgba(255,255,255,.6) 0%,#fff 50%,rgba(255,255,255,.6) 100%)", backgroundSize:"200% 100%", borderRadius:99, transformOrigin:"left", animation:"_lb 900ms cubic-bezier(.4,0,.2,1) forwards, _ls 1.2s linear infinite" }}/>
//           </div>
//           <div style={{ display:"flex", gap:6 }}>
//             {[0,.15,.3].map((d,i) => <div key={i} style={{ width:5, height:5, borderRadius:"50%", background:"rgba(255,255,255,.6)", animation:`_lp 1.2s ${d}s ease infinite` }}/>)}
//           </div>
//         </div>
//       )}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         html { scroll-behavior: smooth; }
//         a { text-decoration: none; color: inherit; }
//         button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
//         ::selection { background: #095b66; color: #fff; }
//         ::-webkit-scrollbar { width: 4px; }
//         ::-webkit-scrollbar-thumb { background: #095b66; border-radius: 4px; }
//         .nav-a { font-size: 11.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; transition: opacity .2s; }
//         .nav-a:hover { opacity: .6; }
//         @keyframes heroIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: none; } }
//         .hero-in { animation: heroIn .5s cubic-bezier(.22,1,.36,1) both; }
//         .dot { width: 7px; height: 7px; border-radius: 99px; cursor: pointer; border: none; transition: all .3s; background: rgba(255,255,255,.35); }
//         .dot.on { width: 24px; background: #fff; }
//         .prod-tab { padding: 14px 18px; border-radius: 8px; cursor: pointer; transition: all .2s; border: 1.5px solid transparent; display: flex; align-items: center; gap: 12px; }
//         .prod-tab:hover { background: #f0f9fa; }
//         .prod-tab.on { background: #095b66; border-color: #095b66; }
//         .brand-card { background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; padding: 14px 18px; text-align: center; transition: all .25s; }
//         .brand-card:hover { border-color: #095b66; background: #fff; box-shadow: 0 4px 18px rgba(9,91,102,.08); }
//         .client-chip { background: #f0f9fa; border: 1.5px solid #c8e8eb; border-radius: 99px; padding: 7px 16px; font-size: 12px; font-weight: 700; color: #1a4a4f; white-space: nowrap; transition: all .2s; }
//         .client-chip:hover { background: #095b66; color: #fff; border-color: #095b66; }
//         .input { width: 100%; background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 7px; color: #1a2c2e; padding: 12px 15px; font-family: 'Montserrat',sans-serif; font-size: 13px; outline: none; transition: border-color .2s; }
//         .input:focus { border-color: #095b66; background: #fff; }
//         .input::placeholder { color: #9bbbbe; }
//         textarea.input { resize: vertical; min-height: 100px; }
//         .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
//         .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(9,91,102,.25); }
//         .btn-outline-w { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.55); border-radius: 6px; padding: 11px 26px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; }
//         .btn-outline-w:hover { background: rgba(255,255,255,.12); border-color: #fff; }
//         .btn-white { background: #fff; color: #095b66; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
//         .btn-white:hover { background: #e8f5f7; transform: translateY(-2px); }
//         .footer-btn { background: none; border: none; padding: 0; font-family: 'Montserrat',sans-serif; font-size: 13px; color: #4a7a7e; cursor: pointer; transition: color .2s; text-align: left; width: 100%; }
//         .footer-btn:hover { color: #fff; }
//         /* ── Simulador ── */
//         @keyframes simUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }
//         .sim-up { animation: simUp .4s ease both; }
//         .sim-tipo-btn { border: 1.5px solid #dde8ea; border-radius: 14px; background: #fff; cursor: pointer; transition: all .22s; padding: 22px 16px; display: flex; flex-direction: column; align-items: center; gap: 10px; font-family: 'Montserrat',sans-serif; }
//         .sim-tipo-btn:hover { border-color: #095b66; transform: translateY(-2px); box-shadow: 0 6px 22px rgba(9,91,102,.1); }
//         .sim-tipo-btn.on { border-color: #095b66; background: #095b66; box-shadow: 0 8px 28px rgba(9,91,102,.22); transform: translateY(-3px); }
//         .sim-field { display: flex; flex-direction: column; gap: 6px; }
//         .sim-field label { font-size: 10px; font-weight: 700; color: #095b66; letter-spacing: .14em; text-transform: uppercase; }
//         .sim-field small { font-size: 10.5px; color: #9bbbbe; margin-top: 2px; }
//         .sim-inp { width: 100%; background: #fff; border: 1.5px solid #dde8ea; border-radius: 9px; color: #1a2c2e; padding: 11px 14px; font-family: 'Montserrat',sans-serif; font-size: 13px; font-weight: 600; outline: none; transition: border-color .2s, box-shadow .2s; }
//         .sim-inp:focus { border-color: #095b66; box-shadow: 0 0 0 3px rgba(9,91,102,.08); }
//         .sim-inp::placeholder { color: #b0c8ca; font-weight: 500; }
//         .sim-sel { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6' stroke='%23095b66' stroke-width='2.2' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 13px center; padding-right:36px; }
//         .sim-toggle { position:relative; display:inline-flex; width:40px; height:22px; flex-shrink:0; }
//         .sim-toggle input { opacity:0; width:0; height:0; }
//         .sim-slider { position:absolute; inset:0; border-radius:99px; background:#dde8ea; cursor:pointer; transition:background .2s; }
//         .sim-slider::before { content:''; position:absolute; width:16px; height:16px; left:3px; bottom:3px; background:#fff; border-radius:50%; transition:transform .22s; box-shadow:0 1px 3px rgba(0,0,0,.15); }
//         .sim-toggle input:checked + .sim-slider { background: #095b66; }
//         .sim-toggle input:checked + .sim-slider::before { transform: translateX(18px); }
//         .sim-cat-pill { padding: 6px 14px; border-radius: 99px; border: 1.5px solid #dde8ea; background: #fff; font-size: 11px; font-weight: 700; color: #4a7275; cursor: pointer; transition: all .18s; white-space: nowrap; font-family:'Montserrat',sans-serif; }
//         .sim-cat-pill:hover { border-color: #095b66; color: #095b66; }
//         .sim-cat-pill.on { background: #095b66; border-color: #095b66; color: #fff; }
//         .sim-row:hover { background: #f8fcfc; }
//         .sim-prog-line { height: 2px; flex:1; margin: 0 6px 20px; transition: background .3s; }
//         @media (max-width: 900px) {
//           .hide-mob { display: none !important; }
//           .two { grid-template-columns: 1fr !important; }
//           .three { grid-template-columns: 1fr 1fr !important; }
//           .svc-grid { grid-template-columns: repeat(2,1fr) !important; }
//           .sp { padding-left: 22px !important; padding-right: 22px !important; }
//           .hero-sp { padding: 86px 22px 0 !important; }
//         }
//         @media (max-width: 540px) { .three { grid-template-columns: 1fr !important; } .svc-grid { grid-template-columns: 1fr !important; } }
//         @media (min-width: 769px) and (max-width: 1100px) { .svc-grid { grid-template-columns: repeat(3,1fr) !important; } }
//       `}</style>



//       {/* ── HERO ── */}
//       <section style={{ position: "relative", minHeight: "100vh", background: "#095b66", overflow: "hidden", display: "flex", flexDirection: "column" }}>
//         <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", background: "rgba(255,255,255,.04)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}/>
//         <div style={{ position: "absolute", top: 0, right: 0, width: "30%", height: "100%", background: "rgba(255,255,255,.03)", clipPath: "polygon(25% 0, 100% 0, 100% 100%, 10% 100%)" }}/>
//         <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }}/>
//         <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", opacity: .06, pointerEvents: "none" }}>
//           <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330"><path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/></svg>
//         </div>
//         <div className="hero-sp sp" style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", alignItems: "center", padding: "100px 80px 0", maxWidth: 1280, margin: "0 auto", width: "100%" }}>
//           <div style={{ maxWidth: 660 }}>
//             <div key={`tag-${animKey}`} className="hero-in" style={{ animationDelay: "0s" }}>
//               <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, padding: "5px 14px", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.85)", marginBottom: 32 }}>
//                 {cur.tag}
//               </div>
//             </div>
//             <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s" }}>
//               <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28 }}>
//                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line1}</span>
//                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)", color: "rgba(255,255,255,.4)" }}>{cur.line2}</span>
//                 <span style={{ display: "block", fontSize: "clamp(52px,7vw,96px)" }}>{cur.line3}</span>
//               </h1>
//             </div>
//             <div key={`s-${animKey}`} className="hero-in" style={{ animationDelay: ".16s" }}>
//               <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.7)", maxWidth: 480, marginBottom: 44 }}>{cur.sub}</p>
//               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
//                 <a href="#produtos" className="btn-white">Ver Soluções</a>
//                 <a href="#contacto" className="btn-outline-w">Pedir Orçamento</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
//           {HERO_SLIDES.map((_, i) => (
//             <button key={i} className={`dot ${i === slide ? "on" : ""}`}
//               onClick={() => { clearInterval(timerRef.current); setSlide(i); setAnimKey(k => k + 1); }}
//               aria-label={`Slide ${i + 1}`}
//             />
//           ))}
//         </div>
//         <div style={{ height: 64, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)", marginTop: 40 }}/>
//       </section>

//       {/* ── PRODUCTS ── */}
//       <section id="produtos" style={{ padding: "96px 0 80px" }}>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
//           <Reveal>
//             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 52, flexWrap: "wrap" }}>
//               <div>
//                 <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Catálogo</p>
//                 <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05 }}>Os Nossos Produtos</h2>
//               </div>
//               <Link href="/produtos" style={{ fontSize: 12, fontWeight: 700, color: "#095b66", letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "2px solid #095b66", paddingBottom: 2 }}>
//                 Ver todos →
//               </Link>
//             </div>
//           </Reveal>

//           <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32, alignItems: "start" }}>
//             <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               {PRODUCTS.map((p, i) => (
//                 <Reveal key={i} delay={i * .05}>
//                   <button className={`prod-tab ${activeProduct === i ? "on" : ""}`} onClick={() => setActiveProduct(i)} aria-label={p.name}>
//                     <div style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, background: activeProduct === i ? "rgba(255,255,255,.15)" : p.light, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                       <svg viewBox="0 0 48 48" fill="none" width="22" height="22">
//                         {i === 0 && <><circle cx="24" cy="24" r="8" fill={activeProduct===i?"#fff":"#095b66"}/><path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.5 11.5l3.5 3.5M33 33l3.5 3.5M11.5 36.5l3.5-3.5M33 15l3.5-3.5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/></>}
//                         {i === 1 && <><rect x="14" y="6" width="20" height="36" rx="3" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="18" y="10" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"}/><rect x="18" y="18" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><rect x="18" y="26" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
//                         {i === 2 && <><rect x="6" y="6" width="36" height="36" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="10" y="10" width="28" height="6" rx="1" fill={activeProduct===i?"#fff":"#095b66"} opacity=".7"/><circle cx="15" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"}/><circle cx="24" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><circle cx="33" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
//                         {i === 3 && <><rect x="8" y="14" width="32" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 24l-5 6h6l-4 6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
//                         {i === 4 && <><rect x="10" y="16" width="28" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 8v8" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/><path d="M16 8h16" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
//                         {i === 5 && <><rect x="6" y="16" width="36" height="22" rx="5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><circle cx="14" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><circle cx="34" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><path d="M12 27h8l3 5h14" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M34 13v5M31 16h6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
//                       </svg>
//                     </div>
//                     <span style={{ fontSize: 13, fontWeight: 700, color: activeProduct === i ? "#fff" : "#1a2c2e", textAlign: "left", lineHeight: 1.3 }}>{p.name}</span>
//                   </button>
//                 </Reveal>
//               ))}
//             </div>

//             <Reveal key={activeProduct}>
//               <div style={{ background: "linear-gradient(135deg, #095b66 0%, #0a7a89 100%)", borderRadius: 20, padding: "44px 48px", minHeight: 360, position: "relative", overflow: "hidden" }}>
//                 <div style={{ position: "absolute", right: -30, top: -30, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,.05)", pointerEvents: "none" }}/>
//                 <div style={{ position: "absolute", right: 30, bottom: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }}/>
//                 <div style={{ position: "relative", zIndex: 1 }}>
//                   <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
//                     <svg viewBox="0 0 64 64" fill="none" width="44" height="44">
//                       {activeProduct === 0 && <><circle cx="32" cy="32" r="10" fill="rgba(255,255,255,.9)"/><path d="M32 10v5M32 49v5M10 32h5M49 32h5M16.5 16.5l3.5 3.5M44 44l3.5 3.5M16.5 47.5l3.5-3.5M44 20l3.5-3.5" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/></>}
//                       {activeProduct === 1 && <><rect x="18" y="6" width="28" height="52" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="22" y="12" width="20" height="8" rx="2" fill="rgba(255,255,255,.9)"/><rect x="22" y="24" width="20" height="8" rx="2" fill="rgba(255,255,255,.5)"/><rect x="22" y="36" width="20" height="8" rx="2" fill="rgba(255,255,255,.3)"/><path d="M28 60h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
//                       {activeProduct === 2 && <><rect x="8" y="8" width="48" height="48" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="14" y="14" width="36" height="8" rx="2" fill="rgba(255,255,255,.9)" opacity=".8"/><circle cx="20" cy="34" r="5" fill="rgba(255,255,255,.9)"/><circle cx="32" cy="34" r="5" fill="rgba(255,255,255,.6)"/><circle cx="44" cy="34" r="5" fill="rgba(255,255,255,.3)"/></>}
//                       {activeProduct === 3 && <><rect x="10" y="16" width="44" height="32" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 24l-8 10h10l-6 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>}
//                       {activeProduct === 4 && <><rect x="12" y="20" width="40" height="30" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M32 8v12" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/><path d="M20 8h24M20 14h24" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><rect x="20" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/><rect x="34" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/></>}
//                       {activeProduct === 5 && <><rect x="8" y="22" width="48" height="26" rx="6" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><circle cx="20" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="20" cy="52" r="3" fill="rgba(255,255,255,.9)"/><circle cx="44" cy="52" r="5" fill="rgba(255,255,255,.4)"/><circle cx="44" cy="52" r="3" fill="rgba(255,255,255,.9)"/><path d="M14 30h14l4 8h18" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M42 18v8M38 22h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/></>}
//                     </svg>
//                   </div>
//                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 8 }}>{curProd.id.toUpperCase()}</p>
//                   <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>{curProd.name}</h3>
//                   <p style={{ fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}>{curProd.desc}</p>
//                   <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
//                     {curProd.specs.map(s => (
//                       <span key={s} style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, fontSize: 11, fontWeight: 600, color: "#fff", padding: "4px 12px" }}>{s}</span>
//                     ))}
//                   </div>
//                   <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
//                     <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: ".1em", textTransform: "uppercase" }}>Marcas:</span>
//                     {curProd.brands.map(b => (
//                       <span key={b} style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,.8)", background: "rgba(255,255,255,.1)", borderRadius: 5, padding: "3px 10px" }}>{b}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ── SERVICES ── */}
//       <section id="servicos" style={{ background: "#095b66", padding: "96px 0" }}>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
//           <Reveal>
//             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 8 }}>— Serviços</p>
//             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 56, flexWrap: "wrap" }}>
//               <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#fff", lineHeight: 1.05 }}>O que fazemos</h2>
//               <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 380, lineHeight: 1.7 }}>Da concepção ao comissionamento. Suporte especializado em todas as fases do seu projeto energético.</p>
//             </div>
//           </Reveal>
//           <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }}>
//             {SERVICES.map((s, i) => (
//               <Reveal key={i} delay={i * .07}>
//                 <div style={{ background: i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)", border: "1.5px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "32px 28px", transition: "all .3s", cursor: "default" }}
//                   onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background="rgba(255,255,255,.12)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,.25)"; (e.currentTarget as HTMLDivElement).style.transform="translateY(-4px)"; }}
//                   onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background=i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)"; (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,.1)"; (e.currentTarget as HTMLDivElement).style.transform="none"; }}>
//                   <div style={{ width: 58, height: 58, borderRadius: 14, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
//                     <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
//                       {/* 0 Quadros Elétricos */}
//                       {i === 0 && <><rect x="8" y="4" width="32" height="40" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><rect x="13" y="10" width="10" height="6" rx="1.5" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.7)" strokeWidth="1.5"/><rect x="25" y="10" width="10" height="6" rx="1.5" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.7)" strokeWidth="1.5"/><path d="M13 24h22M13 30h16M13 36h10" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round"/><circle cx="35" cy="33" r="4" stroke="rgba(255,255,255,.8)" strokeWidth="1.5"/><path d="M35 31v2l1.5 1.5" stroke="rgba(255,255,255,.8)" strokeWidth="1.5" strokeLinecap="round"/></>}
//                       {/* 1 Solar + Armazenamento */}
//                       {i === 1 && <><path d="M8 18h32" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M8 18L14 8h20l6 10" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinejoin="round"/><path d="M16 8l-2 10M32 8l2 10M24 8v10" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" strokeLinecap="round"/><rect x="10" y="28" width="28" height="12" rx="3" stroke="rgba(255,255,255,.8)" strokeWidth="2"/><path d="M16 34h4M28 34h4" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><path d="M24 22l-3 5h6l-3 5" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
//                       {/* 2 Energia Crítica / UPS */}
//                       {i === 2 && <><rect x="6" y="10" width="36" height="28" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M14 38v4M34 38v4M10 42h28" stroke="rgba(255,255,255,.6)" strokeWidth="1.5" strokeLinecap="round"/><path d="M24 16v6l4 4-4 4-4-4 4-4" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="36" cy="18" r="3" fill="rgba(255,255,255,.3)" stroke="rgba(255,255,255,.8)" strokeWidth="1.5"/><circle cx="36" cy="18" r="1" fill="rgba(255,255,255,.9)"/></>}
//                       {/* 3 SPDA */}
//                       {i === 3 && <><path d="M24 4l3 8 8.5 1.2-6.2 6 1.5 8.5L24 23.5l-6.8 4.2 1.5-8.5-6.2-6L21 12z" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinejoin="round"/><path d="M15 32l-5 12M33 32l5 12" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/><path d="M10 44h28" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/></>}
//                       {/* 4 Mobilidade Elétrica */}
//                       {i === 4 && <><rect x="10" y="8" width="28" height="22" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M18 30v8M30 30v8" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/><path d="M14 38h20" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round"/><path d="M24 13v5l3 3" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 19h4M34 19h4" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" strokeLinecap="round"/></>}
//                       {/* 5 Armários de Passeio */}
//                       {i === 5 && <><rect x="10" y="6" width="28" height="38" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M10 16h28" stroke="rgba(255,255,255,.5)" strokeWidth="1.5"/><path d="M10 36h28" stroke="rgba(255,255,255,.5)" strokeWidth="1.5"/><path d="M24 6v4M24 36v8" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" strokeLinecap="round"/><circle cx="30" cy="26" r="2.5" stroke="rgba(255,255,255,.8)" strokeWidth="1.5"/><path d="M16 22h8M16 28h6" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round"/></>}
//                       {/* 6 Auditoria Energética */}
//                       {i === 6 && <><rect x="6" y="6" width="36" height="28" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M16 42h16M24 34v8" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round"/><path d="M12 26l7-7 5 5 8-10 6 6" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>}
//                       {/* 7 Postos de Transformação */}
//                       {i === 7 && <><path d="M8 38V16l16-10 16 10v22" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinejoin="round"/><path d="M8 38h32" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><rect x="18" y="26" width="12" height="12" rx="1.5" stroke="rgba(255,255,255,.7)" strokeWidth="1.5"/><path d="M24 8v8" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"/><circle cx="24" cy="22" r="3" stroke="rgba(255,255,255,.8)" strokeWidth="1.5"/></>}
//                       {/* 8 Telecom */}
//                       {i === 8 && <><rect x="6" y="6" width="36" height="28" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/><path d="M6 18h36" stroke="rgba(255,255,255,.4)" strokeWidth="1.5"/><circle cx="14" cy="12" r="2" fill="rgba(255,255,255,.5)"/><circle cx="20" cy="12" r="2" fill="rgba(255,255,255,.3)"/><path d="M12 24h24M12 28h16" stroke="rgba(255,255,255,.6)" strokeWidth="1.5" strokeLinecap="round"/><path d="M18 34v8M30 34v8" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 42h20" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" strokeLinecap="round"/></>}
//                       {/* 9 SATCOM */}
//                       {i === 9 && <><path d="M6 36c0-10 8-18 18-18s18 8 18 18" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" strokeLinecap="round"/><path d="M10 36c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="rgba(255,255,255,.6)" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 36a8 8 0 018-8 8 8 0 018 8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/><circle cx="24" cy="36" r="3" fill="rgba(255,255,255,.9)"/><path d="M24 36v6" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/></>}
//                     </svg>
//                   </div>
//                   <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
//                   <p style={{ fontSize: 13, color: "rgba(255,255,255,.62)", lineHeight: 1.7 }}>{s.short}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//           <Reveal style={{ marginTop: 52, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
//               <div style={{ width: 48, height: 48, background: "rgba(255,255,255,.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</div>
//               <div>
//                 <div style={{ fontSize: 10, color: "rgba(255,255,255,.45)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>Angola · Suporte</div>
//                 <a href="tel:+244933153362" style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>+244 933 153 362</a>
//               </div>
//             </div>
//             <a href="#contacto" className="btn-white">Solicitar Visita Técnica</a>
//           </Reveal>
//         </div>
//       </section>

//       {/* ── SIMULADOR DE PROJECTO ── */}
//       <section id="simulador" style={{ background: "#f0f9fa", padding: "96px 0" }}>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>

//           {/* Header */}
//           <Reveal>
//             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
//               <div>
//                 <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Simulador</p>
//                 <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 10 }}>Simule o seu Projecto</h2>
//                 <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 500, lineHeight: 1.75 }}>
//                   Obtenha a lista indicativa de materiais eléctricos para o seu projecto em segundos, com base em pressupostos técnicos reais.
//                 </p>
//               </div>
//               <div style={{ display:"flex", alignItems:"center", gap:9, background:"#fff", border:"1.5px solid #dde8ea", borderRadius:12, padding:"11px 20px" }}>
//                 <svg viewBox="0 0 20 20" fill="none" width="15" height="15"><circle cx="10" cy="10" r="8" stroke="#095b66" strokeWidth="1.5"/><path d="M10 6v4l3 3" stroke="#095b66" strokeWidth="1.5" strokeLinecap="round"/></svg>
//                 <span style={{ fontSize:12, fontWeight:700, color:"#095b66" }}>Resultado em &lt;30 segundos</span>
//               </div>
//             </div>
//           </Reveal>

//           {/* Stepper */}
//           <div style={{ display:"flex", alignItems:"center", maxWidth:520, marginBottom:44 }}>
//             {([["1","Tipo de Projecto"],["2","Pressupostos"],["3","Resultado"]] as [string,string][]).map(([n,lbl], i) => (
//               <React.Fragment key={n}>
//                 <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
//                   <div style={{ width:36, height:36, borderRadius:"50%", background: simStep > +n ? "#095b66" : simStep === +n ? "#095b66" : "#e8eef0", border:`2px solid ${simStep >= +n ? "#095b66" : "#dde8ea"}`, display:"flex", alignItems:"center", justifyContent:"center", transition:"all .3s" }}>
//                     {simStep > +n
//                       ? <svg viewBox="0 0 14 14" fill="none" width="12" height="12"><path d="M2 7l4 4 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                       : <span style={{ fontSize:12, fontWeight:800, color: simStep >= +n ? "#fff" : "#9bbbbe" }}>{n}</span>
//                     }
//                   </div>
//                   <span style={{ fontSize:9.5, fontWeight:700, color: simStep >= +n ? "#095b66" : "#9bbbbe", textTransform:"uppercase", letterSpacing:".08em", whiteSpace:"nowrap" }}>{lbl}</span>
//                 </div>
//                 {i < 2 && <div className="sim-prog-line" style={{ background: simStep > +n ? "#095b66" : "#dde8ea" }}/>}
//               </React.Fragment>
//             ))}
//           </div>

//           {/* ─ PASSO 1: Tipo ─ */}
//           {simStep === 1 && (
//             <div className="sim-up">
//               <p style={{ fontSize:11.5, fontWeight:700, color:"#4a7275", marginBottom:20, textTransform:"uppercase", letterSpacing:".1em" }}>Seleccione o tipo de projecto:</p>
//               <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:12, marginBottom:40 }} className="three">
//                 {TIPOS_PROJETO.map(t => (
//                   <button key={t.id} className={`sim-tipo-btn ${simForm.tipo === t.id ? "on" : ""}`}
//                     onClick={() => setSim("tipo", t.id)}>
//                     <div style={{ color: simForm.tipo === t.id ? "#fff" : "#095b66" }}>{t.icon}</div>
//                     <div style={{ textAlign:"center" }}>
//                       <div style={{ fontSize:12.5, fontWeight:800, color: simForm.tipo === t.id ? "#fff" : "#0a1c1e", marginBottom:3, lineHeight:1.25 }}>{t.label}</div>
//                       <div style={{ fontSize:10, fontWeight:600, color: simForm.tipo === t.id ? "rgba(255,255,255,.6)" : "#9bbbbe" }}>{t.sub}</div>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//               <div style={{ display:"flex", justifyContent:"flex-end" }}>
//                 <button disabled={!simForm.tipo} onClick={() => setSimStep(2)} className="btn-teal"
//                   style={{ opacity: simForm.tipo ? 1 : .45, cursor: simForm.tipo ? "pointer" : "not-allowed" }}>
//                   Continuar
//                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M4 8h8M9 5l3 3-3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* ─ PASSO 2: Pressupostos ─ */}
//           {simStep === 2 && (
//             <div className="sim-up">
//               <div className="two" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, marginBottom:36 }}>

//                 {/* Campos numéricos */}
//                 <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
//                   <div className="sim-field">
//                     <label>Área Total (m²) *</label>
//                     <input className="sim-inp" type="number" min="10" placeholder={simForm.tipo==="residencial"?"Ex: 120":simForm.tipo==="industrial"?"Ex: 2000":"Ex: 400"} value={simForm.area} onChange={e=>setSim("area",e.target.value)}/>
//                     <small>Área total a electrificar em m²</small>
//                   </div>
//                   <div className="sim-field">
//                     <label>Consumo Estimado (kWh/dia) *</label>
//                     <input className="sim-inp" type="number" min="1" placeholder={simForm.tipo==="residencial"?"Ex: 15":simForm.tipo==="industrial"?"Ex: 300":"Ex: 60"} value={simForm.consumo} onChange={e=>setSim("consumo",e.target.value)}/>
//                     <small>{simForm.tipo==="residencial"?"Tipicamente 8–25 kWh/dia para moradia":simForm.tipo==="industrial"?"Tipicamente 100–800 kWh/dia para fábrica":"Consulte a factura eléctrica ou medição"}</small>
//                   </div>
//                   <div className="sim-field">
//                     <label>Localização</label>
//                     <select className="sim-inp sim-sel" value={simForm.localizacao} onChange={e=>setSim("localizacao",e.target.value)}>
//                       {["Luanda","Benguela","Huambo","Lobito","Namibe","Cabinda","Malanje","Lisboa","Porto","Praia","São Tomé","Outro"].map(l=><option key={l}>{l}</option>)}
//                     </select>
//                   </div>
//                   {simForm.solar && (
//                     <div className="sim-field">
//                       <label>Autonomia em Bateria</label>
//                       <select className="sim-inp sim-sel" value={simForm.autonomia} onChange={e=>setSim("autonomia",e.target.value)}>
//                         <option value="0">Sem armazenamento (só injecção)</option>
//                         <option value="1">1 dia</option>
//                         <option value="2">2 dias</option>
//                         <option value="3">3 dias (máx. resiliência)</option>
//                       </select>
//                     </div>
//                   )}
//                 </div>

//                 {/* Toggles */}
//                 <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:16, padding:"24px" }}>
//                   <p style={{ fontSize:10, fontWeight:700, color:"#095b66", letterSpacing:".14em", textTransform:"uppercase", marginBottom:16 }}>Equipamentos adicionais:</p>
//                   {([
//                     ["solar",     "Sistema Solar Fotovoltaico",    "Painéis + inversor + armazenamento LFP"],
//                     ["ups",       "UPS / Estabilizador",            "Alimentação ininterrupta de cargas críticas"],
//                     ["spda",      "Protecção Atmosférica SPDA",    "Para-raios ESE + aterramento Franklin France"],
//                     ["ve",        "Postos de Carregamento VE",      "Veículos eléctricos · Modo 3 / DC rápido"],
//                     ["gerador",   "Grupo Gerador de Backup",        "Diesel insonorizado + ATS automático"],
//                     ["trifasico", "Instalação Trifásica 400V",      "Força motriz / motores / equipamentos pesados"],
//                   ] as [keyof SimForm, string, string][]).map(([k,lbl,sub], i, arr) => (
//                     <div key={k} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, padding:"13px 0", borderBottom: i<arr.length-1 ? "1px solid #f0f5f6" : "none" }}>
//                       <div>
//                         <div style={{ fontSize:13, fontWeight:700, color:"#0a1c1e" }}>{lbl}</div>
//                         <div style={{ fontSize:10.5, color:"#9bbbbe", marginTop:2 }}>{sub}</div>
//                       </div>
//                       <label className="sim-toggle">
//                         <input type="checkbox" checked={!!simForm[k]} onChange={e=>setSim(k,e.target.checked)}/>
//                         <span className="sim-slider"/>
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//                 <button onClick={()=>setSimStep(1)} style={{ background:"none", border:"1.5px solid #dde8ea", borderRadius:7, padding:"12px 22px", fontSize:12, fontWeight:700, color:"#4a7275", cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:7 }}>
//                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M12 8H4M7 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                   Voltar
//                 </button>
//                 <button disabled={!simForm.area || !simForm.consumo} onClick={runSim} className="btn-teal"
//                   style={{ opacity: (simForm.area && simForm.consumo) ? 1 : .45, cursor: (simForm.area && simForm.consumo) ? "pointer" : "not-allowed" }}>
//                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0z" stroke="#fff" strokeWidth="1.5"/><path d="M10 8H6M8 6v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
//                   Gerar Lista de Materiais
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* ─ PASSO 3: Resultado ─ */}
//           {simStep === 3 && (
//             <div className="sim-up">

//               {/* Banner sumário */}
//               <div style={{ background:"linear-gradient(135deg,#095b66,#0a7a89)", borderRadius:18, padding:"26px 36px", marginBottom:28, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:20 }}>
//                 <div style={{ display:"flex", gap:36, flexWrap:"wrap" }}>
//                   {[
//                     ["Tipo", TIPOS_PROJETO.find(t=>t.id===simForm.tipo)?.label ?? "–"],
//                     ["Área", `${simForm.area} m²`],
//                     ["Consumo", `${simForm.consumo} kWh/dia`],
//                     ["Referências", `${simResult.length} itens`],
//                   ].map(([k,v]) => (
//                     <div key={k}>
//                       <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,.5)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:3 }}>{k}</div>
//                       <div style={{ fontSize:15, fontWeight:900, color:"#fff" }}>{v}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{ display:"flex", gap:10 }}>
//                   <button onClick={()=>{setSimStep(2);}} style={{ background:"rgba(255,255,255,.15)", color:"#fff", border:"1.5px solid rgba(255,255,255,.3)", borderRadius:7, padding:"9px 18px", fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:6 }}>
//                     <svg viewBox="0 0 14 14" fill="none" width="11" height="11"><path d="M10 7H4M6.5 4.5L4 7l2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
//                     Editar
//                   </button>
//                   <a href="#contacto" className="btn-white" style={{ fontSize:11, padding:"9px 18px" }}>
//                     Pedir Orçamento →
//                   </a>
//                 </div>
//               </div>

//               {/* Nota aviso */}
//               <div style={{ background:"#fff8e0", border:"1.5px solid #f0d47a", borderRadius:10, padding:"11px 18px", marginBottom:22, display:"flex", alignItems:"flex-start", gap:10 }}>
//                 <svg viewBox="0 0 18 18" fill="none" width="15" height="15" style={{ flexShrink:0, marginTop:1 }}><circle cx="9" cy="9" r="7" stroke="#a07000" strokeWidth="1.5"/><path d="M9 5.5v3.5M9 12.5v.5" stroke="#a07000" strokeWidth="2" strokeLinecap="round"/></svg>
//                 <p style={{ fontSize:11.5, color:"#7a5000", lineHeight:1.65, margin:0 }}>
//                   <strong>Estimativa indicativa.</strong> Quantidades e especificações finais devem ser validadas por engenheiro habilitado. Esta lista serve de base para pedido de orçamento formal.
//                 </p>
//               </div>

//               {/* Filtros por categoria */}
//               <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:18 }}>
//                 {simCats.map(cat => (
//                   <button key={cat} className={`sim-cat-pill ${simCatFil===cat?"on":""}`}
//                     onClick={()=>setSimCatFil(cat)}>
//                     {cat} {cat!=="Todos" && <span style={{ fontWeight:600, opacity:.7 }}>({simResult.filter(m=>m.cat===cat).length})</span>}
//                   </button>
//                 ))}
//               </div>

//               {/* Tabela de materiais */}
//               <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:16, overflow:"hidden", marginBottom:32 }}>
//                 {/* Cabeçalho */}
//                 <div style={{ display:"grid", gridTemplateColumns:"52px 1fr 100px", background:"#f8fbfc", borderBottom:"1.5px solid #dde8ea" }}>
//                   <div style={{ padding:"11px 0 11px 16px" }}/>
//                   <div style={{ padding:"11px 16px", fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase" }}>Material / Referência</div>
//                   <div style={{ padding:"11px 16px 11px 0", fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase", textAlign:"right" }}>Qtd.</div>
//                 </div>

//                 {simVisible.map((m, i) => {
//                   const c = CAT_CONFIG[m.cat] ?? { cor:"#095b66", fundo:"#e8f7f9" };
//                   return (
//                     <div key={i} className="sim-row"
//                       style={{ display:"grid", gridTemplateColumns:"52px 1fr 100px", alignItems:"center", borderBottom: i<simVisible.length-1 ? "1px solid #f0f5f6" : "none",
//                                animation:`simUp .3s ${Math.min(i * .025, 0.5)}s both ease-out` }}>
//                       {/* Cat icon */}
//                       <div style={{ padding:"13px 0 13px 14px" }}>
//                         <div style={{ width:28, height:28, borderRadius:7, background:c.fundo, display:"flex", alignItems:"center", justifyContent:"center" }}>
//                           <span style={{ fontSize:9, fontWeight:900, color:c.cor, letterSpacing:".04em" }}>{m.cat.slice(0,3).toUpperCase()}</span>
//                         </div>
//                       </div>
//                       {/* Info */}
//                       <div style={{ padding:"13px 16px" }}>
//                         <div style={{ display:"flex", gap:7, alignItems:"center", marginBottom:3, flexWrap:"wrap" }}>
//                           <span style={{ fontSize:9.5, fontWeight:800, color:c.cor, background:c.fundo, borderRadius:4, padding:"2px 7px", letterSpacing:".05em", textTransform:"uppercase" }}>{m.cat}</span>
//                           <span style={{ fontSize:9.5, fontWeight:600, color:"#b0c4c6", fontFamily:"monospace" }}>{m.ref}</span>
//                         </div>
//                         <div style={{ fontSize:13.5, fontWeight:700, color:"#0a1c1e", lineHeight:1.3, marginBottom: m.obs ? 3 : 0 }}>{m.nome}</div>
//                         {m.obs && <div style={{ fontSize:11, color:"#7a9ea0", marginTop:1 }}>{m.obs}</div>}
//                         <div style={{ fontSize:10.5, color:"#b8ccce", marginTop:2, fontWeight:600 }}>{m.marca}</div>
//                       </div>
//                       {/* Qty */}
//                       <div style={{ padding:"13px 16px 13px 0", textAlign:"right" }}>
//                         <span style={{ fontSize:19, fontWeight:900, color:"#095b66", lineHeight:1 }}>{m.qtd}</span>
//                         <span style={{ fontSize:10.5, color:"#9bbbbe", display:"block", fontWeight:600 }}>{m.unidade}</span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* CTA final */}
//               <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:14, padding:"24px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:20, flexWrap:"wrap" }}>
//                 <div>
//                   <div style={{ fontSize:15, fontWeight:800, color:"#0a1c1e", marginBottom:4 }}>Quer um orçamento formal com preços reais?</div>
//                   <div style={{ fontSize:13, color:"#4a7275" }}>A nossa equipa analisa esta simulação e envia proposta detalhada em 24 horas.</div>
//                 </div>
//                 <div style={{ display:"flex", gap:10, flexShrink:0 }}>
//                   <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer"
//                     style={{ background:"#25D366", color:"#fff", border:"none", borderRadius:7, padding:"12px 20px", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:7, textDecoration:"none" }}>
//                     💬 WhatsApp
//                   </a>
//                   <a href="#contacto" className="btn-teal" style={{ fontSize:11 }}>
//                     Solicitar Proposta
//                     <svg viewBox="0 0 14 14" fill="none" width="12" height="12"><path d="M3 7h8M8 4.5l2.5 2.5L8 9.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           )}

//         </div>
//       </section>

//             {/* ── GEOGRAPHIC PRESENCE — FIXED MAP ── */}
//       <section id="presenca" style={{ background: "#fff", padding: "96px 0" }}>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
//           <Reveal>
//             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Presença Internacional</p>
//             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 12 }}>Onde estamos</h2>
//             <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 480, lineHeight: 1.75, marginBottom: 56 }}>
//               Operamos em Angola, Portugal, Cabo Verde e São Tomé e Príncipe. Clique nos pontos do mapa para mais detalhes.
//             </p>
//           </Reveal>
//           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
//             <Reveal>
//               <div style={{ background: "#f0f9fa", borderRadius: 20, padding: "8px", border: "1.5px solid #c8e8eb" }}>
//                 <WorldMap points={PRESENCE} activePoint={activePoint} onHover={i => setActivePoint(activePoint === i ? null : i)} />
//               </div>
//             </Reveal>
//             <Reveal delay={.1}>
//               <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//                 {PRESENCE.map((p, i) => (
//                   <button key={i} onClick={() => setActivePoint(activePoint === i ? null : i)}
//                     style={{ background: activePoint===i?"#095b66":"#fff", border: `1.5px solid ${activePoint===i?"#095b66":"#dde8ea"}`, borderRadius: 12, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start", cursor: "pointer", transition: "all .25s", textAlign: "left" }}>
//                     <div style={{ width: 36, height: 36, borderRadius: 8, background: activePoint===i?"rgba(255,255,255,.15)":"#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
//                       {i===0?"🇦🇴":i===1?"🇵🇹":i===2?"🇨🇻":"🇸🇹"}
//                     </div>
//                     <div>
//                       <div style={{ fontSize: 13, fontWeight: 800, color: activePoint===i?"#fff":"#0a1c1e", marginBottom: 3 }}>{p.name}</div>
//                       <div style={{ fontSize: 11, color: activePoint===i?"rgba(255,255,255,.65)":"#6a9598", lineHeight: 1.5, whiteSpace: "pre-line" }}>{p.detail}</div>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ── CLIENTS + BRANDS ── */}
//       <section style={{ background: "#f0f9fa", padding: "80px 0" }}>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
//           <Reveal>
//             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Clientes</p>
//             <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Confiam em Nós</h2>
//           </Reveal>
//           <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 72 }}>
//             {CLIENTS.map((c, i) => (
//               <Reveal key={i} delay={i * .015}><div className="client-chip">{c}</div></Reveal>
//             ))}
//           </div>
//           <div style={{ borderTop: "1.5px solid #c8e8eb", paddingTop: 64 }}>
//             <Reveal>
//               <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Parceiros</p>
//               <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Marcas que Representamos</h2>
//             </Reveal>
//             <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
//               {BRANDS.map((b, i) => (
//                 <Reveal key={i} delay={i * .04}>
//                   <div className="brand-card">
//                     <div style={{ fontSize: 13, fontWeight: 900, color: "#0a1c1e", marginBottom: 4 }}>{b.name}</div>
//                     <div style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".08em", textTransform: "uppercase" }}>{b.role}</div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── CTA BAND ── */}
//       <section style={{ background: "#095b66" }}>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 80px" }}>
//           <Reveal>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 36, flexWrap: "wrap" }}>
//               <div>
//                 <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 10 }}>Pronto para começar?</h2>
//                 <p style={{ color: "rgba(255,255,255,.65)", maxWidth: 440, lineHeight: 1.75, fontSize: 15 }}>Peça um orçamento sem compromisso. A nossa equipa técnica responde em 24 horas.</p>
//               </div>
//               <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
//                 <a href="#contacto" className="btn-white">Solicitar Orçamento</a>
//                 <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer" className="btn-outline-w" style={{ gap: 8 }}>💬 WhatsApp</a>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ── CONTACT ── */}
//       <section id="contacto" style={{ background: "#fff", padding: "96px 0" }}>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
//           <Reveal>
//             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Contacto</p>
//             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 56 }}>Fale Connosco</h2>
//           </Reveal>
//           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 72 }}>
//             <Reveal>
//               <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.8, marginBottom: 44 }}>Entre em contacto com o escritório mais próximo ou envie-nos uma mensagem e entraremos em contacto consigo brevemente.</p>
//               <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
//                 {[
//                   { flag: "🇦🇴", country: "Angola", info: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362 · (+244) 938 306 698\ngeral@multienergia.com.pt" },
//                   { flag: "🇵🇹", country: "Portugal", info: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909 · geral@multienergia.com.pt" },
//                   { flag: "🇸🇹", country: "São Tomé e Príncipe", info: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443 · geral@multienergia.com.pt" },
//                 ].map((c, i) => (
//                   <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
//                     <div style={{ width: 40, height: 40, borderRadius: 8, background: "#f0f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.flag}</div>
//                     <div>
//                       <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 3, textTransform: "uppercase", letterSpacing: ".06em" }}>{c.country}</div>
//                       <div style={{ fontSize: 12.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{c.info}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer"
//                 style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 28, fontSize: 13, fontWeight: 700, color: "#095b66" }}>
//                 🌐 www.multienergia.com.pt
//               </a>
//             </Reveal>
//             <Reveal delay={.1}>
//               <form onSubmit={e => e.preventDefault()}
//                 style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 16, padding: "36px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Nome</span>
//                     <input className="input" placeholder="Nome completo" autoComplete="name"/>
//                   </label>
//                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Empresa</span>
//                     <input className="input" placeholder="Empresa" autoComplete="organization"/>
//                   </label>
//                 </div>
//                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>E-mail</span>
//                   <input className="input" type="email" placeholder="email@empresa.com" autoComplete="email"/>
//                 </label>
//                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Assunto</span>
//                   <select className="input" defaultValue="" style={{ appearance: "none", cursor: "pointer" }}>
//                     <option value="" disabled>Selecione o assunto</option>
//                     <option>Sistemas de Energia Solar</option>
//                     <option>EcoFlow / Armazenamento</option>
//                     <option>Quadros Elétricos BT</option>
//                     <option>Postos de Transformação MT</option>
//                     <option>UPS & Estabilizadores</option>
//                     <option>Mobilidade Elétrica</option>
//                     <option>Proteção Atmosférica (SPDA)</option>
//                     <option>Auditoria Energética</option>
//                     <option>Formação – Energy Academy</option>
//                     <option>Outro</option>
//                   </select>
//                 </label>
//                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Mensagem</span>
//                   <textarea className="input" placeholder="Descreva o seu projeto…"/>
//                 </label>
//                 <button type="submit" className="btn-teal" style={{ alignSelf: "flex-start", marginTop: 4 }}>
//                   Enviar Mensagem
//                   <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                 </button>
//               </form>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ── FOOTER ── */}
//       <footer style={{ background: "#06161a", padding: "52px 80px 28px" }}>
//         <div style={{ maxWidth: 1280, margin: "0 auto" }}>
//           <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 44, marginBottom: 44 }}>
//             <div>
//               <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
//                 <div style={{ width: 32, height: 32, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/></svg>
//                 </div>
//                 <span style={{ fontWeight: 900, fontSize: 15, color: "#fff" }}>Multi<span style={{ color: "#3ec8d4" }}>energia</span></span>
//               </div>
//               <p style={{ fontSize: 12.5, color: "#3a6a6e", lineHeight: 1.8, maxWidth: 240, marginBottom: 16 }}>Inovação tecnológica ao serviço da energia. Angola · Portugal · Cabo Verde · São Tomé.</p>
//               <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11.5, fontWeight: 600, color: "#3ec8d4" }}>www.multienergia.com.pt</a>
//             </div>
//             {[
//               { title: "Produtos", links: ["Sistemas Solares","EcoFlow PowerOcean","Quadros BT","Postos MT","UPS & Estabilizadores","Mobilidade Elétrica"] },
//               { title: "Serviços", links: ["Projeto & Engenharia","Instalação & Montagem","Auditoria Energética","Proteção Atmosférica","Manutenção","Energy Academy"] },
//               { title: "Empresa", links: ["Sobre Nós","Certificações","Clientes","Parceiros","Contacto"] },
//             ].map(col => (
//               <nav key={col.title}>
//                 <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#0a7a89", marginBottom: 16 }}>{col.title}</div>
//                 <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
//                   {col.links.map(l => <li key={l}><button className="footer-btn">{l}</button></li>)}
//                 </ul>
//               </nav>
//             ))}
//           </div>
//           <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
//             <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>© 2025 Multienergia. Todos os direitos reservados.</p>
//             <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>Alvará IRCOP nº 982/CCOP/IRCOP/SC/2025 · 5ª Classe</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



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
  const [slide, setSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const [activeProduct, setActiveProduct] = useState(0);
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [loaderVis, setLoaderVis] = useState(true);
  const [loaderFade, setLoaderFade] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

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

  const advance = () => { setSlide(s => (s + 1) % HERO_SLIDES.length); setAnimKey(k => k + 1); };

  useEffect(() => {
    timerRef.current = setInterval(advance, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const hide = () => { setLoaderFade(true); setTimeout(() => setLoaderVis(false), 480); };
    const t = setTimeout(hide, 900);
    const onLoad = () => { clearTimeout(t); setTimeout(hide, 200); };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => { clearTimeout(t); window.removeEventListener("load", onLoad); };
  }, []);

  const cur = HERO_SLIDES[slide];
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
      <section style={{ position: "relative", minHeight: "100vh", background: "#095b66", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", background: "rgba(255,255,255,.04)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}/>
        <div style={{ position: "absolute", top: 0, right: 0, width: "30%", height: "100%", background: "rgba(255,255,255,.03)", clipPath: "polygon(25% 0, 100% 0, 100% 100%, 10% 100%)" }}/>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }}/>
        <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", opacity: .06, pointerEvents: "none" }}>
          <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330"><path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/></svg>
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
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.7)", maxWidth: 480, marginBottom: 44 }}>{cur.sub}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#produtos" className="btn-white">Ver Soluções</a>
                <a href="#contacto" className="btn-outline-w">Pedir Orçamento</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
          {HERO_SLIDES.map((_, i) => (
            <button key={i} className={`dot ${i === slide ? "on" : ""}`}
              onClick={() => { clearInterval(timerRef.current); setSlide(i); setAnimKey(k => k + 1); }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div style={{ height: 64, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)", marginTop: 40 }}/>
      </section>

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

          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {PRODUCTS.map((p, i) => (
                <Reveal key={i} delay={i * .05}>
                  <button className={`prod-tab ${activeProduct === i ? "on" : ""}`} onClick={() => setActiveProduct(i)} aria-label={p.name}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0, background: activeProduct === i ? "rgba(255,255,255,.15)" : p.light, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 48 48" fill="none" width="22" height="22">
                        {i === 0 && <><circle cx="24" cy="24" r="8" fill={activeProduct===i?"#fff":"#095b66"}/><path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.5 11.5l3.5 3.5M33 33l3.5 3.5M11.5 36.5l3.5-3.5M33 15l3.5-3.5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/></>}
                        {i === 1 && <><rect x="14" y="6" width="20" height="36" rx="3" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="18" y="10" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"}/><rect x="18" y="18" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><rect x="18" y="26" width="12" height="5" rx="1.5" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
                        {i === 2 && <><rect x="6" y="6" width="36" height="36" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><rect x="10" y="10" width="28" height="6" rx="1" fill={activeProduct===i?"#fff":"#095b66"} opacity=".7"/><circle cx="15" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"}/><circle cx="24" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".5"/><circle cx="33" cy="26" r="3" fill={activeProduct===i?"#fff":"#095b66"} opacity=".3"/></>}
                        {i === 3 && <><rect x="8" y="14" width="32" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 24l-5 6h6l-4 6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
                        {i === 4 && <><rect x="10" y="16" width="28" height="22" rx="2" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><path d="M24 8v8" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2.5" strokeLinecap="round"/><path d="M16 8h16" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
                        {i === 5 && <><rect x="6" y="16" width="36" height="22" rx="5" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2"/><circle cx="14" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><circle cx="34" cy="40" r="4" fill={activeProduct===i?"rgba(255,255,255,.4)":"#095b66"} opacity=".5"/><path d="M12 27h8l3 5h14" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M34 13v5M31 16h6" stroke={activeProduct===i?"#fff":"#095b66"} strokeWidth="2" strokeLinecap="round"/></>}
                      </svg>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: activeProduct === i ? "#fff" : "#1a2c2e", textAlign: "left", lineHeight: 1.3 }}>{p.name}</span>
                  </button>
                </Reveal>
              ))}
            </div>

            <Reveal key={activeProduct}>
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
        </div>
      </section>

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