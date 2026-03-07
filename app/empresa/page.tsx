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

// export const PROJECTS = [
//   {
//     id: "sonangol-luanda",
//     category: "Energia Crítica",
//     title: "Sonangol — Centro de Dados Luanda",
//     location: "Luanda, Angola",
//     year: "2023",
//     short: "Instalação de sistema UPS N+1 de 800 kVA com grupo gerador para continuidade operacional 24/7.",
//     description: "O projeto contemplou o fornecimento e instalação de dois sistemas UPS Socomec MODULYS de 400 kVA em configuração paralela redundante N+1, garantindo autonomia de 30 minutos em plena carga. Foi também instalado um grupo gerador de 1250 kVA com transferência automática em menos de 10 segundos. O quadro geral de distribuição foi fabricado nas nossas instalações de Luanda com barramentos de cobre e protecções diferenciais de classe A+.",
//     tags: ["UPS", "Grupo Gerador", "Quadros BT", "Data Center"],
//     images: ["/projects/sonangol-1.jpg", "/projects/sonangol-2.jpg", "/projects/sonangol-3.jpg"],
//   },
//   {
//     id: "solar-cabinda",
//     category: "Solar",
//     title: "Central Solar Híbrida — Cabinda",
//     location: "Cabinda, Angola",
//     year: "2023",
//     short: "Central fotovoltaica de 2,4 MWp com armazenamento de 4 MWh para complexo industrial.",
//     description: "Projeto de grande escala desenvolvido para um complexo industrial petrolífero em Cabinda. Foram instalados 6 000 painéis Huawei de 400 Wp montados em estruturas de rastreamento solar Nextracker. O sistema de armazenamento é composto por baterias LFP de 4 MWh com inversores Huawei SUN2000. A central opera em modo híbrido, reduzindo o consumo de gasóleo em cerca de 65%.",
//     tags: ["Solar", "Armazenamento", "Huawei", "Industrial"],
//     images: ["/projects/solar-cabinda-1.jpg", "/projects/solar-cabinda-2.jpg"],
//   },
//   {
//     id: "bfa-quadros",
//     category: "Quadros Elétricos",
//     title: "BFA — Renovação de Quadros Elétricos",
//     location: "Luanda, Angola",
//     year: "2022",
//     short: "Fabrico e instalação de 14 quadros elétricos BT para rede de balcões bancários.",
//     description: "Fabrico em série de 14 quadros elétricos de baixa tensão para renovação da infraestrutura elétrica da rede de balcões do BFA em Luanda. Cada quadro foi dimensionado individualmente conforme levantamento local, com proteções Legrand e barramentos de cobre de 1600 A. Todos os quadros passaram ensaios de continuidade, isolamento e forma segundo IEC 61439-1.",
//     tags: ["Quadros BT", "Legrand", "Bancário"],
//     images: ["/projects/bfa-1.jpg", "/projects/bfa-2.jpg"],
//   },
//   {
//     id: "spda-unitel",
//     category: "SPDA",
//     title: "Unitel — Sistema SPDA Nacional",
//     location: "Angola (multi-site)",
//     year: "2022",
//     short: "Proteção atmosférica para 38 torres de telecomunicações em Angola com Franklin France.",
//     description: "Projeto nacional de proteção contra descargas atmosféricas para infraestrutura de telecomunicações da Unitel. Foram instalados sistemas SPDA Franklin France com captores ESE (Early Streamer Emission) em 38 torres de comunicação distribuídas por 12 províncias. O trabalho incluiu estudo de risco, dimensionamento, instalação, ligação à terra e emissão de certificados de conformidade por localização.",
//     tags: ["SPDA", "Franklin France", "Telecom", "Multi-site"],
//     images: ["/projects/spda-unitel-1.jpg", "/projects/spda-unitel-2.jpg"],
//   },
//   {
//     id: "pt-etu",
//     category: "Postos de Transformação",
//     title: "ETU Energias — Rede de PT Luanda",
//     location: "Luanda, Angola",
//     year: "2023",
//     short: "Instalação de 9 postos de transformação Toshiba MT/BT para expansão da rede urbana.",
//     description: "Em parceria com a ETU Energias, instalámos 9 postos de transformação compactos Toshiba TCSU de 10 kV / 630 kVA em zonas urbanas de Luanda. Os postos pré-montados foram entregues prontos para ligação (plug & play), com quadros BT associados fabricados nas nossas instalações. O projeto incluiu a coordenação com a ENDE para testes de comissionamento e ligação à rede de distribuição.",
//     tags: ["Postos de Transformação", "Toshiba", "MT/BT", "ENDE"],
//     images: ["/projects/pt-etu-1.jpg", "/projects/pt-etu-2.jpg"],
//   },
//   {
//     id: "ve-luanda",
//     category: "Mobilidade Elétrica",
//     title: "Rede de Carregamento VE — Luanda",
//     location: "Luanda, Angola",
//     year: "2024",
//     short: "Instalação dos primeiros postos de carregamento rápido DC para veículos elétricos em Angola.",
//     description: "Projeto pioneiro em Angola para a implementação de uma rede de carregamento para veículos elétricos na cidade de Luanda. Foram instalados 12 postos de carregamento Circutor com potências de 22 kW (AC) e 50 kW (DC) em parques comerciais e hotéis. O sistema integra monitorização remota, gestão de energia e faturação por utilizador. Este projeto representou o primeiro passo para a eletrificação da mobilidade em Angola.",
//     tags: ["Mobilidade Elétrica", "Circutor", "VE", "Angola"],
//     images: ["/projects/ve-luanda-1.jpg", "/projects/ve-luanda-2.jpg"],
//   },
//   {
//     id: "hospital-luanda",
//     category: "Energia Crítica",
//     title: "Hospital Américo Boavida — Renovação Elétrica",
//     location: "Luanda, Angola",
//     year: "2021",
//     short: "Renovação completa da infraestrutura elétrica com quadros e UPS para bloco cirúrgico.",
//     description: "Renovação integral da instalação elétrica do bloco cirúrgico e UCI do Hospital Américo Boavida. O projeto incluiu o fabrico de quadros elétricos com proteções diferencias de alta sensibilidade (30 mA) para áreas médicas, instalação de sistemas UPS Salicru SLC de 80 kVA para equipamentos críticos e implementação de sistema de terra de proteção médica conforme IEC 60364-7-710.",
//     tags: ["UPS", "Quadros BT", "Saúde", "IEC 60364"],
//     images: ["/projects/hospital-1.jpg", "/projects/hospital-2.jpg"],
//   },
//   {
//     id: "stp-solar",
//     category: "Solar",
//     title: "São Tomé — Sistema Solar Residencial",
//     location: "São Tomé e Príncipe",
//     year: "2022",
//     short: "60 sistemas solares domésticos off-grid com baterias EcoFlow para eletrificação rural.",
//     description: "Programa de eletrificação rural em São Tomé e Príncipe com a instalação de 60 sistemas solares domésticos off-grid. Cada sistema é composto por 4 painéis de 400 Wp e uma bateria EcoFlow DELTA Pro de 3,6 kWh, dimensionados para cobrir as necessidades essenciais de cada habitação. O projeto foi desenvolvido em parceria com o governo local e visa reduzir a dependência de gasóleo para geração elétrica.",
//     tags: ["Solar", "EcoFlow", "Off-grid", "Rural"],
//     images: ["/projects/stp-solar-1.jpg", "/projects/stp-solar-2.jpg"],
//   },
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
//    APP
// ───────────────────────────────────────────── */
// export default function Empresa() {
//   const [slide, setSlide] = useState(0);
//   const [animKey, setAnimKey] = useState(0);
//   const [loaderVis, setLoaderVis] = useState(true);
//   const [loaderFade, setLoaderFade] = useState(false);
//   const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

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
//         @keyframes heroIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: none; } }
//         .hero-in { animation: heroIn .5s cubic-bezier(.22,1,.36,1) both; }
//         .dot { width: 7px; height: 7px; border-radius: 99px; cursor: pointer; border: none; transition: all .3s; background: rgba(255,255,255,.35); }
//         .dot.on { width: 24px; background: #fff; }
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
//         @media (max-width: 900px) {
//           .hide-mob { display: none !important; }
//           .two { grid-template-columns: 1fr !important; }
//           .three { grid-template-columns: 1fr 1fr !important; }
//           .sp { padding-left: 22px !important; padding-right: 22px !important; }
//           .hero-sp { padding: 86px 22px 0 !important; }
//           .ph-inner { padding: 48px 22px 36px !important; }
//           .ph-stats { display: none !important; }
//         }
//         @media (max-width: 540px) { .three { grid-template-columns: 1fr !important; } }
//       `}</style>


//       {/* ── EMPRESA — PAGE HEADER ── */}
//       <div id="empresa" style={{ background: "#095b66", paddingTop:64, position:"relative", overflow:"hidden" }}>
//         {/* Grid texture */}
//         <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize:"56px 56px", pointerEvents:"none" }}/>
//         {/* Angled accent panels */}
//         <div style={{ position:"absolute", right:0, top:0, width:"40%", height:"100%", background:"rgba(255,255,255,.035)", clipPath:"polygon(20% 0,100% 0,100% 100%,0% 100%)", pointerEvents:"none" }}/>
//         <div style={{ position:"absolute", right:0, top:0, width:"26%", height:"100%", background:"rgba(255,255,255,.025)", clipPath:"polygon(32% 0,100% 0,100% 100%,14% 100%)", pointerEvents:"none" }}/>
//         {/* Bolt watermark */}
//         <div style={{ position:"absolute", right:"5%", top:"50%", transform:"translateY(-50%)", opacity:.06, pointerEvents:"none" }}>
//           <svg viewBox="0 0 200 300" fill="#fff" width="180" height="260"><path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/></svg>
//         </div>

//         <div className="ph-inner sp" style={{ maxWidth:1280, margin:"0 auto", padding:"52px 80px 0", position:"relative" }}>
//           {/* Breadcrumb */}
//           <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:22 }}>
//             <span style={{ fontSize:11, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>Início</span>
//             <svg viewBox="0 0 12 12" fill="none" width="10" height="10"><path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" strokeLinecap="round"/></svg>
//             <span style={{ fontSize:11, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.75)" }}>Empresa</span>
//           </div>

//           {/* Title + stats row */}
//           <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", gap:32, flexWrap:"wrap", paddingBottom:48 }}>
//             <div>
//               <p style={{ fontSize:11, fontWeight:700, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", marginBottom:12 }}>— Empresa</p>
//               <h2 style={{ fontSize:"clamp(38px,5.5vw,68px)", fontWeight:900, color:"#fff", lineHeight:.98, marginBottom:16 }}>Quem Somos</h2>
//               <p style={{ fontSize:15.5, color:"rgba(255,255,255,.58)", maxWidth:500, lineHeight:1.72 }}>
//                 37 anos de história, três países, uma missão: fornecer energia com inteligência, qualidade e responsabilidade.
//               </p>
//             </div>
//             {/* <div className="ph-stats" style={{ display:"flex", gap:12, flexShrink:0 }}>
//               {[{ n:"1987", l:"Fundação" },{ n:"3", l:"Países" }].map((s,i) => (
//                 <div key={i} style={{ background:"rgba(255,255,255,.09)", border:"1.5px solid rgba(255,255,255,.13)", borderRadius:14, padding:"18px 24px", textAlign:"center", minWidth:96 }}>
//                   <div style={{ fontSize:24, fontWeight:900, color:"#fff", lineHeight:1 }}>{s.n}</div>
//                   <div style={{ fontSize:9.5, fontWeight:700, color:"rgba(255,255,255,.45)", letterSpacing:".1em", textTransform:"uppercase", marginTop:5 }}>{s.l}</div>
//                 </div>
//               ))}
//             </div> */}
//           </div>
//         </div>

//         {/* Wave bottom */}
//         <div style={{ height:56, background:"#fff", clipPath:"ellipse(55% 100% at 50% 100%)" }}/>
//       </div>

//       {/* ── QUEM SOMOS — body ── */}
//       <section style={{ background: "#fff", padding: "76px 0 96px" }}>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
//           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
//             <Reveal>
//               <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.85, marginBottom: 20 }}>
//                 Fundada em 1987 como <strong style={{ color: "#095b66" }}>MultiNove</strong>, a nossa empresa passou por uma transformação significativa em 2010, adoptando o nome <strong style={{ color: "#095b66" }}>Multienergia</strong> com o objectivo de tornar a marca mais jovem e dinâmica.
//               </p>
//               <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.85, marginBottom: 20 }}>
//                 Com uma trajectória de inovação e excelência, destacamo-nos no sector energético, oferecendo soluções completas e personalizadas — desde a fabricação de quadros eléctricos até à implementação de sistemas híbridos de energia solar.
//               </p>
//               <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.85, marginBottom: 36 }}>
//                 Com presença sólida em <strong style={{ color: "#0a1c1e" }}>Portugal, São Tomé e Príncipe e Angola</strong>, contamos com centros logísticos estratégicos em cada país de operação, uma fábrica de quadros eléctricos e um laboratório de energia em Luanda.
//               </p>
              
//             </Reveal>
//             <Reveal delay={0.1}>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//                 {[
//                   { n: "1987", label: "Ano de fundação" },
//                   { n: "37+", label: "Anos de experiência" },
//                   { n: "3", label: "Países de operação" },
//                 ].map((stat, i) => (
//                   <div key={i} style={{ background: i % 2 === 0 ? "#f0f9fa" : "#095b66", border: `1.5px solid ${i % 2 === 0 ? "#c8e8eb" : "#095b66"}`, borderRadius: 16, padding: "32px 24px" }}>
//                     <div style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: 900, color: i % 2 === 0 ? "#095b66" : "#fff", lineHeight: 1, marginBottom: 8 }}>{stat.n}</div>
//                     <div style={{ fontSize: 12, fontWeight: 700, color: i % 2 === 0 ? "#4a7275" : "rgba(255,255,255,.65)", letterSpacing: ".06em", textTransform: "uppercase" }}>{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ── ESG ── */}
//       <section id="esg" style={{ background: "#f0f9fa", padding: "96px 0" }}>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
//           <Reveal>
//             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 10 }}>— ESG</p>
//             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 56, flexWrap: "wrap" }}>
//               <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.08 }}>Compromisso<br/>com o Futuro</h2>
//               <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 420, lineHeight: 1.8 }}>A sustentabilidade não é apenas um objectivo — é a base de cada decisão que tomamos.</p>
//             </div>
//           </Reveal>
//           <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
//             {[
//               { letter:"E", title:"Ambiental", color:"#095b66", items:["Mais de 50 MW de solar instalado, evitando toneladas de CO₂ por ano","Soluções de armazenamento que reduzem dependência de combustíveis fósseis","Laboratório de eficiência energética em Luanda para I&D sustentável"] },
//               { letter:"S", title:"Social", color:"#0a7a89", items:["Programa Multienergia Academy: formação técnica gratuita para jovens angolanos","Electrificação de comunidades rurais em São Tomé e Príncipe","Parceria com hospitais públicos para garantir energia crítica contínua"] },
//               { letter:"G", title:"Governança", color:"#064e58", items:["Certificação ISO 9001 e conformidade com normas IEC internacionais","Transparência total em fornecedores, contratos e processos de qualidade","Alvará IRCOP nº 982 · 5ª Classe — Angola"] },
//             ].map((esg, i) => (
//               <Reveal key={i} delay={i * 0.1}>
//                 <div style={{ background: "#fff", border: "1.5px solid #c8e8eb", borderRadius: 18, padding: "36px 32px", height: "100%" }}>
//                   <div style={{ width: 52, height: 52, borderRadius: 14, background: esg.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
//                     <span style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>{esg.letter}</span>
//                   </div>
//                   <h3 style={{ fontSize: 18, fontWeight: 900, color: "#0a1c1e", marginBottom: 20 }}>{esg.title}</h3>
//                   <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
//                     {esg.items.map((item, j) => (
//                       <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
//                         <span style={{ width: 6, height: 6, borderRadius: "50%", background: esg.color, flexShrink: 0, marginTop: 6 }}/>
//                         <span style={{ fontSize: 13.5, color: "#4a7275", lineHeight: 1.65 }}>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>
    

//       {/* ── CERTIFICATIONS ── */}
//       <section id="certificacoes" style={{ background: "#f0f9fa", padding: "120px 0" }}>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
//           <Reveal>
//             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 10 }}>— Certificações</p>
//             <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 44 }}>Qualidade Certificada</h2>
//           </Reveal>
//           <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
//             {[
//               { code: "ISO 9001",          label: "Sistema de Gestão da Qualidade",          body: "Bureau Veritas" },
//               { code: "IEC 61439",         label: "Quadros Eléctricos BT — Fabricação",      body: "Ensaios internos certificados" },
//               { code: "IEC 62305",         label: "Protecção Contra Descargas Atmosféricas", body: "Conformidade Franklin France" },
//               { code: "NA 33:2014",        label: "Norma Angolana SPDA",                     body: "IRCOP Angola" },
//               { code: "IEC 60364",         label: "Instalações Eléctricas BT",               body: "Projecto e Execução" },
//               { code: "LVDR / CPR",        label: "Directivas Europeias de Produto",          body: "Portugal · UE" },
//               { code: "Alvará 982",        label: "IRCOP · 5ª Classe",                       body: "Angola" },
//               { code: "Huawei FusionSolar",label: "Parceiro Solar Certificado",              body: "Gold Partner" },
//             ].map((cert, i) => (
//               <Reveal key={i} delay={i * 0.05}>
//                 <div style={{ background: "#fff", border: "1.5px solid #c8e8eb", borderRadius: 14, padding: "24px 22px", transition: "all .24s" }}
//                   onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor="#095b66"; d.style.boxShadow="0 6px 22px rgba(9,91,102,.1)"; d.style.transform="translateY(-3px)"; }}
//                   onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor="#c8e8eb"; d.style.boxShadow="none"; d.style.transform="none"; }}>
//                   <div style={{ width: 38, height: 38, borderRadius: 10, background: "#f0f9fa", border: "1.5px solid #c8e8eb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
//                     <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 14l-4.8 2.6.9-5.3L4.3 7.6l5.3-.8z" stroke="#095b66" strokeWidth="1.5" strokeLinejoin="round"/></svg>
//                   </div>
//                   <div style={{ fontSize: 13, fontWeight: 900, color: "#095b66", marginBottom: 6 }}>{cert.code}</div>
//                   <div style={{ fontSize: 12.5, fontWeight: 600, color: "#0a1c1e", lineHeight: 1.45, marginBottom: 8 }}>{cert.label}</div>
//                   <div style={{ fontSize: 11, fontWeight: 600, color: "#9bbbbe", letterSpacing: ".04em" }}>{cert.body}</div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── KNOWLEDGE HUB ── */}
//       <section id="knowledge-hub" style={{ background: "#095b66", padding: "88px 0" }}>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
//           <Reveal>
//             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 10 }}>— Guia Técnico</p>
//             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
//               <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, color: "#fff", lineHeight: 1.08 }}>Knowledge Hub</h2>
//               <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 400, lineHeight: 1.75 }}>Recursos técnicos, guias práticos e documentação para projectistas e instaladores.</p>
//             </div>
//           </Reveal>
//           <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
//             {[
//               { icon:"📘", tag:"Guia",          title:"Dimensionamento de Sistemas Solares Off-grid",     desc:"Metodologia passo a passo para dimensionar sistemas fotovoltaicos autónomos com baterias.",              time:"15 min leitura" },
//               { icon:"📐", tag:"Cálculo",       title:"Selecção e Coordenação de Protecções BT",          desc:"Critérios técnicos para escolha de disjuntores, fusíveis e diferencias segundo IEC 60364.",             time:"20 min leitura" },
//               { icon:"⚡", tag:"Norma",         title:"SPDA: Análise de Risco IEC 62305-2",               desc:"Como avaliar o risco de descarga atmosférica e determinar a necessidade de protecção.",                time:"12 min leitura" },
//               { icon:"🔋", tag:"Ficha Técnica", title:"Comparativo: Baterias LFP vs NMC",                 desc:"Análise técnica e económica das principais tecnologias de armazenamento de energia.",                  time:"10 min leitura" },
//               { icon:"🏗️", tag:"Projecto",     title:"Quadros Eléctricos: da Concepção ao Ensaio",       desc:"Do esquema unifilar à certificação IEC 61439: guia completo de fabrico e verificação.",                time:"18 min leitura" },
//               { icon:"🌍", tag:"Regulamento",   title:"Normas Eléctricas em Angola: Guia Prático",        desc:"Enquadramento regulatório da ENDE, IRCOP e normas angolanas aplicáveis a instalações eléctricas.",     time:"14 min leitura" },
//             ].map((item, i) => (
//               <Reveal key={i} delay={i * 0.07}>
//                 <div style={{ background: i % 2 === 0 ? "rgba(255,255,255,.06)" : "rgba(255,255,255,.04)", border: "1.5px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "28px 24px", cursor: "pointer", transition: "all .28s", display: "flex", flexDirection: "column" }}
//                   onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.background="rgba(255,255,255,.12)"; d.style.borderColor="rgba(255,255,255,.25)"; d.style.transform="translateY(-4px)"; }}
//                   onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.background=i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)"; d.style.borderColor="rgba(255,255,255,.1)"; d.style.transform="none"; }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
//                     <span style={{ fontSize: 22 }}>{item.icon}</span>
//                     <span style={{ fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,.5)", letterSpacing: ".14em", textTransform: "uppercase" }}>{item.tag}</span>
//                   </div>
//                   <h3 style={{ fontSize: 15, fontWeight: 800, color: "#fff", lineHeight: 1.35, marginBottom: 12, flex: 1 }}>{item.title}</h3>
//                   <p style={{ fontSize: 13, color: "rgba(255,255,255,.58)", lineHeight: 1.65, marginBottom: 20 }}>{item.desc}</p>
//                   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                     <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.4)" }}>{item.time}</span>
//                     <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,.7)" }}>
//                       Ler
//                       <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                     </div>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
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
//                   { flag:"🇦🇴", country:"Angola",              info:"Centro de Logística de Talatona · espaço H\n(+244) 933 153 362 · (+244) 938 306 698\ngeral@multienergia.com.pt" },
//                   { flag:"🇵🇹", country:"Portugal",            info:"Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909 · geral@multienergia.com.pt" },
//                   { flag:"🇸🇹", country:"São Tomé e Príncipe", info:"Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443 · geral@multienergia.com.pt" },
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

export const PROJECTS = [
  {
    id: "sonangol-luanda",
    category: "Energia Crítica",
    title: "Sonangol — Centro de Dados Luanda",
    location: "Luanda, Angola",
    year: "2023",
    short: "Instalação de sistema UPS N+1 de 800 kVA com grupo gerador para continuidade operacional 24/7.",
    description: "O projeto contemplou o fornecimento e instalação de dois sistemas UPS Socomec MODULYS de 400 kVA em configuração paralela redundante N+1, garantindo autonomia de 30 minutos em plena carga. Foi também instalado um grupo gerador de 1250 kVA com transferência automática em menos de 10 segundos. O quadro geral de distribuição foi fabricado nas nossas instalações de Luanda com barramentos de cobre e protecções diferenciais de classe A+.",
    tags: ["UPS", "Grupo Gerador", "Quadros BT", "Data Center"],
    images: ["/projects/sonangol-1.jpg", "/projects/sonangol-2.jpg", "/projects/sonangol-3.jpg"],
  },
  {
    id: "solar-cabinda",
    category: "Solar",
    title: "Central Solar Híbrida — Cabinda",
    location: "Cabinda, Angola",
    year: "2023",
    short: "Central fotovoltaica de 2,4 MWp com armazenamento de 4 MWh para complexo industrial.",
    description: "Projeto de grande escala desenvolvido para um complexo industrial petrolífero em Cabinda. Foram instalados 6 000 painéis Huawei de 400 Wp montados em estruturas de rastreamento solar Nextracker. O sistema de armazenamento é composto por baterias LFP de 4 MWh com inversores Huawei SUN2000. A central opera em modo híbrido, reduzindo o consumo de gasóleo em cerca de 65%.",
    tags: ["Solar", "Armazenamento", "Huawei", "Industrial"],
    images: ["/projects/solar-cabinda-1.jpg", "/projects/solar-cabinda-2.jpg"],
  },
  {
    id: "bfa-quadros",
    category: "Quadros Elétricos",
    title: "BFA — Renovação de Quadros Elétricos",
    location: "Luanda, Angola",
    year: "2022",
    short: "Fabrico e instalação de 14 quadros elétricos BT para rede de balcões bancários.",
    description: "Fabrico em série de 14 quadros elétricos de baixa tensão para renovação da infraestrutura elétrica da rede de balcões do BFA em Luanda. Cada quadro foi dimensionado individualmente conforme levantamento local, com proteções Legrand e barramentos de cobre de 1600 A. Todos os quadros passaram ensaios de continuidade, isolamento e forma segundo IEC 61439-1.",
    tags: ["Quadros BT", "Legrand", "Bancário"],
    images: ["/projects/bfa-1.jpg", "/projects/bfa-2.jpg"],
  },
  {
    id: "spda-unitel",
    category: "SPDA",
    title: "Unitel — Sistema SPDA Nacional",
    location: "Angola (multi-site)",
    year: "2022",
    short: "Proteção atmosférica para 38 torres de telecomunicações em Angola com Franklin France.",
    description: "Projeto nacional de proteção contra descargas atmosféricas para infraestrutura de telecomunicações da Unitel. Foram instalados sistemas SPDA Franklin France com captores ESE (Early Streamer Emission) em 38 torres de comunicação distribuídas por 12 províncias. O trabalho incluiu estudo de risco, dimensionamento, instalação, ligação à terra e emissão de certificados de conformidade por localização.",
    tags: ["SPDA", "Franklin France", "Telecom", "Multi-site"],
    images: ["/projects/spda-unitel-1.jpg", "/projects/spda-unitel-2.jpg"],
  },
  {
    id: "pt-etu",
    category: "Postos de Transformação",
    title: "ETU Energias — Rede de PT Luanda",
    location: "Luanda, Angola",
    year: "2023",
    short: "Instalação de 9 postos de transformação Toshiba MT/BT para expansão da rede urbana.",
    description: "Em parceria com a ETU Energias, instalámos 9 postos de transformação compactos Toshiba TCSU de 10 kV / 630 kVA em zonas urbanas de Luanda. Os postos pré-montados foram entregues prontos para ligação (plug & play), com quadros BT associados fabricados nas nossas instalações. O projeto incluiu a coordenação com a ENDE para testes de comissionamento e ligação à rede de distribuição.",
    tags: ["Postos de Transformação", "Toshiba", "MT/BT", "ENDE"],
    images: ["/projects/pt-etu-1.jpg", "/projects/pt-etu-2.jpg"],
  },
  {
    id: "ve-luanda",
    category: "Mobilidade Elétrica",
    title: "Rede de Carregamento VE — Luanda",
    location: "Luanda, Angola",
    year: "2024",
    short: "Instalação dos primeiros postos de carregamento rápido DC para veículos elétricos em Angola.",
    description: "Projeto pioneiro em Angola para a implementação de uma rede de carregamento para veículos elétricos na cidade de Luanda. Foram instalados 12 postos de carregamento Circutor com potências de 22 kW (AC) e 50 kW (DC) em parques comerciais e hotéis. O sistema integra monitorização remota, gestão de energia e faturação por utilizador. Este projeto representou o primeiro passo para a eletrificação da mobilidade em Angola.",
    tags: ["Mobilidade Elétrica", "Circutor", "VE", "Angola"],
    images: ["/projects/ve-luanda-1.jpg", "/projects/ve-luanda-2.jpg"],
  },
  {
    id: "hospital-luanda",
    category: "Energia Crítica",
    title: "Hospital Américo Boavida — Renovação Elétrica",
    location: "Luanda, Angola",
    year: "2021",
    short: "Renovação completa da infraestrutura elétrica com quadros e UPS para bloco cirúrgico.",
    description: "Renovação integral da instalação elétrica do bloco cirúrgico e UCI do Hospital Américo Boavida. O projeto incluiu o fabrico de quadros elétricos com proteções diferencias de alta sensibilidade (30 mA) para áreas médicas, instalação de sistemas UPS Salicru SLC de 80 kVA para equipamentos críticos e implementação de sistema de terra de proteção médica conforme IEC 60364-7-710.",
    tags: ["UPS", "Quadros BT", "Saúde", "IEC 60364"],
    images: ["/projects/hospital-1.jpg", "/projects/hospital-2.jpg"],
  },
  {
    id: "stp-solar",
    category: "Solar",
    title: "São Tomé — Sistema Solar Residencial",
    location: "São Tomé e Príncipe",
    year: "2022",
    short: "60 sistemas solares domésticos off-grid com baterias EcoFlow para eletrificação rural.",
    description: "Programa de eletrificação rural em São Tomé e Príncipe com a instalação de 60 sistemas solares domésticos off-grid. Cada sistema é composto por 4 painéis de 400 Wp e uma bateria EcoFlow DELTA Pro de 3,6 kWh, dimensionados para cobrir as necessidades essenciais de cada habitação. O projeto foi desenvolvido em parceria com o governo local e visa reduzir a dependência de gasóleo para geração elétrica.",
    tags: ["Solar", "EcoFlow", "Off-grid", "Rural"],
    images: ["/projects/stp-solar-1.jpg", "/projects/stp-solar-2.jpg"],
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
      display: "flex",
      flexDirection: "column",
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */
export default function Empresa() {
  const [slide, setSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [loaderVis, setLoaderVis] = useState(true);
  const [loaderFade, setLoaderFade] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

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
        @keyframes heroIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: none; } }
        .hero-in { animation: heroIn .5s cubic-bezier(.22,1,.36,1) both; }
        .dot { width: 7px; height: 7px; border-radius: 99px; cursor: pointer; border: none; transition: all .3s; background: rgba(255,255,255,.35); }
        .dot.on { width: 24px; background: #fff; }
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
          .ph-inner { padding: 48px 22px 36px !important; }
          .ph-stats { display: none !important; }
        }
        @media (max-width: 540px) { .three { grid-template-columns: 1fr !important; } }
      `}</style>


      {/* ── EMPRESA — PAGE HEADER ── */}
      <div id="empresa" style={{ background: "#095b66", paddingTop:64, position:"relative", overflow:"hidden" }}>
        {/* Grid texture */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize:"56px 56px", pointerEvents:"none" }}/>
        {/* Angled accent panels */}
        <div style={{ position:"absolute", right:0, top:0, width:"40%", height:"100%", background:"rgba(255,255,255,.035)", clipPath:"polygon(20% 0,100% 0,100% 100%,0% 100%)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", right:0, top:0, width:"26%", height:"100%", background:"rgba(255,255,255,.025)", clipPath:"polygon(32% 0,100% 0,100% 100%,14% 100%)", pointerEvents:"none" }}/>
        {/* Bolt watermark */}
        <div style={{ position:"absolute", right:"5%", top:"50%", transform:"translateY(-50%)", opacity:.06, pointerEvents:"none" }}>
          <svg viewBox="0 0 200 300" fill="#fff" width="180" height="260"><path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/></svg>
        </div>

        <div className="ph-inner sp" style={{ maxWidth:1280, margin:"0 auto", padding:"52px 80px 0", position:"relative" }}>
          {/* Breadcrumb */}
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:22 }}>
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>Início</span>
            <svg viewBox="0 0 12 12" fill="none" width="10" height="10"><path d="M4 2l4 4-4 4" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.75)" }}>Empresa</span>
          </div>

          {/* Title + stats row */}
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", gap:32, flexWrap:"wrap", paddingBottom:48 }}>
            <div>
              <p style={{ fontSize:11, fontWeight:700, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", marginBottom:12 }}>— Empresa</p>
              <h2 style={{ fontSize:"clamp(38px,5.5vw,68px)", fontWeight:900, color:"#fff", lineHeight:.98, marginBottom:16 }}>Quem Somos</h2>
              <p style={{ fontSize:15.5, color:"rgba(255,255,255,.58)", maxWidth:500, lineHeight:1.72 }}>
                37 anos de história, três países, uma missão: fornecer energia com inteligência, qualidade e responsabilidade.
              </p>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div style={{ height:56, background:"#fff", clipPath:"ellipse(55% 100% at 50% 100%)" }}/>
      </div>

      {/* ── QUEM SOMOS — body ── */}
      <section style={{ background: "#fff", padding: "76px 0 96px" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <Reveal>
              <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.85, marginBottom: 20 }}>
                Fundada em 1987 como <strong style={{ color: "#095b66" }}>MultiNove</strong>, a nossa empresa passou por uma transformação significativa em 2010, adoptando o nome <strong style={{ color: "#095b66" }}>Multienergia</strong> com o objectivo de tornar a marca mais jovem e dinâmica.
              </p>
              <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.85, marginBottom: 20 }}>
                Com uma trajectória de inovação e excelência, destacamo-nos no sector energético, oferecendo soluções completas e personalizadas — desde a fabricação de quadros eléctricos até à implementação de sistemas híbridos de energia solar.
              </p>
              <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.85, marginBottom: 36 }}>
                Com presença sólida em <strong style={{ color: "#0a1c1e" }}>Portugal, São Tomé e Príncipe e Angola</strong>, contamos com centros logísticos estratégicos em cada país de operação, uma fábrica de quadros eléctricos e um laboratório de energia em Luanda.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { n: "1987", label: "Ano de fundação" },
                  { n: "37+", label: "Anos de experiência" },
                  { n: "3", label: "Países de operação" },
                ].map((stat, i) => (
                  <div key={i} style={{ background: i % 2 === 0 ? "#f0f9fa" : "#095b66", border: `1.5px solid ${i % 2 === 0 ? "#c8e8eb" : "#095b66"}`, borderRadius: 16, padding: "32px 24px" }}>
                    <div style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: 900, color: i % 2 === 0 ? "#095b66" : "#fff", lineHeight: 1, marginBottom: 8 }}>{stat.n}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: i % 2 === 0 ? "#4a7275" : "rgba(255,255,255,.65)", letterSpacing: ".06em", textTransform: "uppercase" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ESG ── */}
      <section id="esg" style={{ background: "#f0f9fa", padding: "96px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 10 }}>— ESG</p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 56, flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.08 }}>Compromisso<br/>com o Futuro</h2>
              <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 420, lineHeight: 1.8 }}>A sustentabilidade não é apenas um objectivo — é a base de cada decisão que tomamos.</p>
            </div>
          </Reveal>
          <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, alignItems: "stretch" }}>
            {[
              { letter:"E", title:"Ambiental", color:"#095b66", items:["Mais de 50 MW de solar instalado, evitando toneladas de CO₂ por ano","Soluções de armazenamento que reduzem dependência de combustíveis fósseis","Laboratório de eficiência energética em Luanda para I&D sustentável"] },
              { letter:"S", title:"Social", color:"#0a7a89", items:["Programa Multienergia Academy: formação técnica gratuita para jovens angolanos","Electrificação de comunidades rurais em São Tomé e Príncipe","Parceria com hospitais públicos para garantir energia crítica contínua"] },
              { letter:"G", title:"Governança", color:"#064e58", items:["Certificação ISO 9001 e conformidade com normas IEC internacionais","Transparência total em fornecedores, contratos e processos de qualidade","Alvará IRCOP nº 982 · 5ª Classe — Angola"] },
            ].map((esg, i) => (
              <Reveal key={i} delay={i * 0.1} style={{ flex: 1 }}>
                <div style={{ background: "#fff", border: "1.5px solid #c8e8eb", borderRadius: 18, padding: "36px 32px", flex: 1 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: esg.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <span style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>{esg.letter}</span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: "#0a1c1e", marginBottom: 20 }}>{esg.title}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                    {esg.items.map((item, j) => (
                      <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: esg.color, flexShrink: 0, marginTop: 6 }}/>
                        <span style={{ fontSize: 13.5, color: "#4a7275", lineHeight: 1.65 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    

      {/* ── CERTIFICATIONS ── */}
      <section id="certificacoes" style={{ background: "#f0f9fa", padding: "120px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 10 }}>— Certificações</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 44 }}>Qualidade Certificada</h2>
          </Reveal>
          <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, alignItems: "stretch" }}>
            {[
              { code: "ISO 9001",          label: "Sistema de Gestão da Qualidade",          body: "Bureau Veritas" },
              { code: "IEC 61439",         label: "Quadros Eléctricos BT — Fabricação",      body: "Ensaios internos certificados" },
              { code: "IEC 62305",         label: "Protecção Contra Descargas Atmosféricas", body: "Conformidade Franklin France" },
              { code: "NA 33:2014",        label: "Norma Angolana SPDA",                     body: "IRCOP Angola" },
              { code: "IEC 60364",         label: "Instalações Eléctricas BT",               body: "Projecto e Execução" },
              { code: "LVDR / CPR",        label: "Directivas Europeias de Produto",          body: "Portugal · UE" },
              { code: "Alvará 982",        label: "IRCOP · 5ª Classe",                       body: "Angola" },
              { code: "Huawei FusionSolar",label: "Parceiro Solar Certificado",              body: "Gold Partner" },
            ].map((cert, i) => (
              <Reveal key={i} delay={i * 0.05} style={{ flex: 1 }}>
                <div style={{ background: "#fff", border: "1.5px solid #c8e8eb", borderRadius: 14, padding: "24px 22px", transition: "all .24s", flex: 1 }}
                  onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor="#095b66"; d.style.boxShadow="0 6px 22px rgba(9,91,102,.1)"; d.style.transform="translateY(-3px)"; }}
                  onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor="#c8e8eb"; d.style.boxShadow="none"; d.style.transform="none"; }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "#f0f9fa", border: "1.5px solid #c8e8eb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 14l-4.8 2.6.9-5.3L4.3 7.6l5.3-.8z" stroke="#095b66" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 900, color: "#095b66", marginBottom: 6 }}>{cert.code}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "#0a1c1e", lineHeight: 1.45, marginBottom: 8 }}>{cert.label}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#9bbbbe", letterSpacing: ".04em" }}>{cert.body}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── KNOWLEDGE HUB ── */}
      <section id="knowledge-hub" style={{ background: "#095b66", padding: "88px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 10 }}>— Guia Técnico</p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, color: "#fff", lineHeight: 1.08 }}>Knowledge Hub</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", maxWidth: 400, lineHeight: 1.75 }}>Recursos técnicos, guias práticos e documentação para projectistas e instaladores.</p>
            </div>
          </Reveal>
          <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, alignItems: "stretch" }}>
            {[
              { icon:"📘", tag:"Guia",          title:"Dimensionamento de Sistemas Solares Off-grid",     desc:"Metodologia passo a passo para dimensionar sistemas fotovoltaicos autónomos com baterias.",              time:"15 min leitura" },
              { icon:"📐", tag:"Cálculo",       title:"Selecção e Coordenação de Protecções BT",          desc:"Critérios técnicos para escolha de disjuntores, fusíveis e diferencias segundo IEC 60364.",             time:"20 min leitura" },
              { icon:"⚡", tag:"Norma",         title:"SPDA: Análise de Risco IEC 62305-2",               desc:"Como avaliar o risco de descarga atmosférica e determinar a necessidade de protecção.",                time:"12 min leitura" },
              { icon:"🔋", tag:"Ficha Técnica", title:"Comparativo: Baterias LFP vs NMC",                 desc:"Análise técnica e económica das principais tecnologias de armazenamento de energia.",                  time:"10 min leitura" },
              { icon:"🏗️", tag:"Projecto",     title:"Quadros Eléctricos: da Concepção ao Ensaio",       desc:"Do esquema unifilar à certificação IEC 61439: guia completo de fabrico e verificação.",                time:"18 min leitura" },
              { icon:"🌍", tag:"Regulamento",   title:"Normas Eléctricas em Angola: Guia Prático",        desc:"Enquadramento regulatório da ENDE, IRCOP e normas angolanas aplicáveis a instalações eléctricas.",     time:"14 min leitura" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.07} style={{ flex: 1 }}>
                <div style={{ background: i % 2 === 0 ? "rgba(255,255,255,.06)" : "rgba(255,255,255,.04)", border: "1.5px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "28px 24px", cursor: "pointer", transition: "all .28s", display: "flex", flexDirection: "column", flex: 1 }}
                  onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.background="rgba(255,255,255,.12)"; d.style.borderColor="rgba(255,255,255,.25)"; d.style.transform="translateY(-4px)"; }}
                  onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.background=i%2===0?"rgba(255,255,255,.06)":"rgba(255,255,255,.04)"; d.style.borderColor="rgba(255,255,255,.1)"; d.style.transform="none"; }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                    <span style={{ fontSize: 22 }}>{item.icon}</span>
                    <span style={{ fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,.5)", letterSpacing: ".14em", textTransform: "uppercase" }}>{item.tag}</span>
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#fff", lineHeight: 1.35, marginBottom: 12, flex: 1 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.58)", lineHeight: 1.65, marginBottom: 20 }}>{item.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.4)" }}>{item.time}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,.7)" }}>
                      Ler
                      <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
                  { flag:"🇦🇴", country:"Angola",              info:"Centro de Logística de Talatona · espaço H\n(+244) 933 153 362 · (+244) 938 306 698\ngeral@multienergia.com.pt" },
                  { flag:"🇵🇹", country:"Portugal",            info:"Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909 · geral@multienergia.com.pt" },
                  { flag:"🇸🇹", country:"São Tomé e Príncipe", info:"Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443 · geral@multienergia.com.pt" },
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