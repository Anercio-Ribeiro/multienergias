// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";

// /* ─────────────────────────────────────────────
//    DADOS (partilhado com page.tsx via import em prod)
// ───────────────────────────────────────────── */
// const PROJECTS = [
//   {
//     id: "sonangol-luanda",
//     category: "Energia Crítica",
//     title: "Sonangol — Centro de Dados Luanda",
//     location: "Luanda, Angola",
//     year: "2023",
//     short: "Instalação de sistema UPS N+1 de 800 kVA com grupo gerador para continuidade operacional 24/7.",
//     description: "O projeto contemplou o fornecimento e instalação de dois sistemas UPS Socomec MODULYS de 400 kVA em configuração paralela redundante N+1, garantindo autonomia de 30 minutos em plena carga.\n\nFoi também instalado um grupo gerador de 1250 kVA com transferência automática em menos de 10 segundos. O quadro geral de distribuição foi fabricado nas nossas instalações de Luanda com barramentos de cobre e proteções diferenciais de classe A+.\n\nO projeto incluiu a supervisão de comissionamento, testes de carga a 100% e formação da equipa técnica do cliente.",
//     tags: ["UPS", "Grupo Gerador", "Quadros BT", "Data Center"],
//     images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg", "/projects/placeholder-3.jpg"],
//     client: "Sonangol",
//     scope: "Fornecimento, instalação e comissionamento",
//     power: "800 kVA UPS + 1250 kVA GG",
//   },
//   {
//     id: "solar-cabinda",
//     category: "Solar",
//     title: "Central Solar Híbrida — Cabinda",
//     location: "Cabinda, Angola",
//     year: "2023",
//     short: "Central fotovoltaica de 2,4 MWp com armazenamento de 4 MWh para complexo industrial.",
//     description: "Projeto de grande escala desenvolvido para um complexo industrial petrolífero em Cabinda. Foram instalados 6 000 painéis Huawei de 400 Wp montados em estruturas de rastreamento solar Nextracker.\n\nO sistema de armazenamento é composto por baterias LFP de 4 MWh com inversores Huawei SUN2000. A central opera em modo híbrido, reduzindo o consumo de gasóleo em cerca de 65%.\n\nO projeto incluiu a instalação de um sistema SCADA para monitorização remota em tempo real e geração de relatórios de produção energética.",
//     tags: ["Solar", "Armazenamento", "Huawei", "Industrial"],
//     images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
//     client: "Confidencial",
//     scope: "Projeto, fornecimento, instalação e SCADA",
//     power: "2,4 MWp + 4 MWh",
//   },
//   {
//     id: "bfa-quadros",
//     category: "Quadros Elétricos",
//     title: "BFA — Renovação de Quadros Elétricos",
//     location: "Luanda, Angola",
//     year: "2022",
//     short: "Fabrico e instalação de 14 quadros elétricos BT para rede de balcões bancários.",
//     description: "Fabrico em série de 14 quadros elétricos de baixa tensão para renovação da infraestrutura elétrica da rede de balcões do BFA em Luanda.\n\nCada quadro foi dimensionado individualmente conforme levantamento local, com proteções Legrand e barramentos de cobre de 1600 A. Todos os quadros passaram ensaios de continuidade, isolamento e forma segundo IEC 61439-1.\n\nO trabalho incluiu desmontagem dos quadros existentes, instalação dos novos e ensaios em carga com registo fotográfico.",
//     tags: ["Quadros BT", "Legrand", "Bancário"],
//     images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
//     client: "BFA — Banco de Fomento Angola",
//     scope: "Fabrico, fornecimento e instalação",
//     power: "14 Quadros · 1600 A",
//   },
//   {
//     id: "spda-unitel",
//     category: "SPDA",
//     title: "Unitel — Sistema SPDA Nacional",
//     location: "Angola (multi-site)",
//     year: "2022",
//     short: "Proteção atmosférica para 38 torres de telecomunicações em Angola com Franklin France.",
//     description: "Projeto nacional de proteção contra descargas atmosféricas para infraestrutura de telecomunicações da Unitel. Foram instalados sistemas SPDA Franklin France com captores ESE em 38 torres de comunicação distribuídas por 12 províncias.\n\nO trabalho incluiu estudo de risco IEC 62305-2, dimensionamento, instalação, ligação à terra e emissão de certificados de conformidade por localização.\n\nTodos os trabalhos foram executados por técnicos certificados Franklin France, com relatório final entregue à Unitel e à IRCOP.",
//     tags: ["SPDA", "Franklin France", "Telecom", "Multi-site"],
//     images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
//     client: "Unitel",
//     scope: "Projeto, instalação e certificação",
//     power: "38 torres · 12 províncias",
//   },
//   {
//     id: "pt-etu",
//     category: "Postos de Transformação",
//     title: "ETU Energias — Rede de PT Luanda",
//     location: "Luanda, Angola",
//     year: "2023",
//     short: "Instalação de 9 postos de transformação Toshiba MT/BT para expansão da rede urbana.",
//     description: "Em parceria com a ETU Energias, instalámos 9 postos de transformação compactos Toshiba TCSU de 10 kV / 630 kVA em zonas urbanas de Luanda.\n\nOs postos pré-montados foram entregues prontos para ligação (plug & play), com quadros BT associados fabricados nas nossas instalações. O projeto incluiu a coordenação com a ENDE para testes de comissionamento e ligação à rede de distribuição.\n\nO trabalho foi concluído em 14 semanas, dentro do prazo e orçamento acordados.",
//     tags: ["Postos de Transformação", "Toshiba", "MT/BT", "ENDE"],
//     images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
//     client: "ETU Energias",
//     scope: "Fornecimento, instalação e comissionamento",
//     power: "9 × 630 kVA · 10 kV",
//   },
//   {
//     id: "ve-luanda",
//     category: "Mobilidade Elétrica",
//     title: "Rede de Carregamento VE — Luanda",
//     location: "Luanda, Angola",
//     year: "2024",
//     short: "Instalação dos primeiros postos de carregamento rápido DC para veículos elétricos em Angola.",
//     description: "Projeto pioneiro em Angola para a implementação de uma rede de carregamento para veículos elétricos na cidade de Luanda.\n\nForam instalados 12 postos de carregamento Circutor com potências de 22 kW (AC) e 50 kW (DC) em parques comerciais e hotéis. O sistema integra monitorização remota, gestão de energia e faturação por utilizador.\n\nEste projeto representou o primeiro passo para a eletrificação da mobilidade em Angola, com cobertura mediática nacional e reconhecimento pelo Ministério da Energia.",
//     tags: ["Mobilidade Elétrica", "Circutor", "VE", "Angola"],
//     images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
//     client: "Consórcio privado",
//     scope: "Fornecimento, instalação e plataforma de gestão",
//     power: "12 postos · 22 kW / 50 kW",
//   },
//   {
//     id: "hospital-luanda",
//     category: "Energia Crítica",
//     title: "Hospital Américo Boavida — Renovação Elétrica",
//     location: "Luanda, Angola",
//     year: "2021",
//     short: "Renovação completa da infraestrutura elétrica com quadros e UPS para bloco cirúrgico.",
//     description: "Renovação integral da instalação elétrica do bloco cirúrgico e UCI do Hospital Américo Boavida.\n\nO projeto incluiu o fabrico de quadros elétricos com proteções diferenciais de alta sensibilidade (30 mA) para áreas médicas, instalação de sistemas UPS Salicru SLC de 80 kVA para equipamentos críticos.\n\nFoi implementado um sistema de terra de proteção médica conforme IEC 60364-7-710, com medições periódicas de impedância e registo em livro de manutenção.",
//     tags: ["UPS", "Quadros BT", "Saúde", "IEC 60364"],
//     images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
//     client: "Hospital Américo Boavida",
//     scope: "Projeto, fabrico, instalação e manutenção",
//     power: "80 kVA UPS · Bloco cirúrgico",
//   },
//   {
//     id: "stp-solar",
//     category: "Solar",
//     title: "São Tomé — Electrificação Rural Solar",
//     location: "São Tomé e Príncipe",
//     year: "2022",
//     short: "60 sistemas solares domésticos off-grid com baterias EcoFlow para electrificação rural.",
//     description: "Programa de electrificação rural em São Tomé e Príncipe com a instalação de 60 sistemas solares domésticos off-grid.\n\nCada sistema é composto por 4 painéis de 400 Wp e uma bateria EcoFlow DELTA Pro de 3,6 kWh, dimensionados para cobrir as necessidades essenciais de cada habitação.\n\nO projeto foi desenvolvido em parceria com o governo local e visa reduzir a dependência de gasóleo para geração elétrica nas zonas rurais, beneficiando mais de 250 pessoas diretamente.",
//     tags: ["Solar", "EcoFlow", "Off-grid", "Rural"],
//     images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
//     client: "Governo de São Tomé e Príncipe",
//     scope: "Fornecimento, instalação e formação",
//     power: "60 sistemas · 1,6 kWp cada",
//   },
//   {
//     id: "telecom-angola",
//     category: "Telecom",
//     title: "Multitel — Infraestrutura de Cabling",
//     location: "Luanda, Angola",
//     year: "2023",
//     short: "Cabling estruturado Cat6A e fibra ótica para campus corporativo de 8 pisos.",
//     description: "Projeto de infraestrutura de telecomunicações para o novo campus corporativo da Multitel em Luanda.\n\nForam instalados mais de 12 km de cabo Cat6A, 3 km de fibra ótica OM4 e 480 pontos de dados distribuídos por 8 pisos. A infraestrutura suporta velocidades de 10 Gbps e foi certificada por Fluke Networks.\n\nO projeto incluiu também a instalação de sistemas CCTV IP com 64 câmaras e controlo de acesso com leitura biométrica em todos os pisos.",
//     tags: ["Telecom", "Cabling", "Fibra Ótica", "CCTV"],
//     images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
//     client: "Multitel",
//     scope: "Projeto, instalação e certificação",
//     power: "480 pontos · 10 Gbps",
//   },
//   {
//     id: "satcom-offshore",
//     category: "SATCOM",
//     title: "VSAT Offshore — Plataforma Petrolífera",
//     location: "Offshore Angola",
//     year: "2023",
//     short: "Sistema VSAT de redundância dupla para plataforma petrolífera com ligação 24/7.",
//     description: "Instalação de sistema de comunicação por satélite de alta disponibilidade para plataforma petrolífera offshore em Angola.\n\nO sistema é composto por duas antenas VSAT de 1,2 m em configuração redundante, com comutação automática em caso de falha. A ligação garante 50 Mbps dedicados para voz, dados e vídeo-conferência.\n\nO projeto incluiu a instalação do sistema de antenas, equipamentos de terra, integração com a rede LAN da plataforma e configuração do sistema de monitorização remota.",
//     tags: ["SATCOM", "VSAT", "Offshore", "Redundância"],
//     images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
//     client: "Confidencial",
//     scope: "Fornecimento, instalação e manutenção",
//     power: "50 Mbps dedicados · Redundância dupla",
//   },
//   {
//     id: "auditoria-refriango",
//     category: "Auditoria Energética",
//     title: "Refriango — Auditoria e Eficiência",
//     location: "Luanda, Angola",
//     year: "2022",
//     short: "Auditoria energética completa com termografia e análise de qualidade de energia.",
//     description: "Auditoria energética completa às instalações industriais da Refriango em Luanda, com o objectivo de identificar perdas e oportunidades de melhoria.\n\nForam realizadas inspecções termográficas de todos os quadros eléctricos e motores, análise de qualidade de energia com registador trifásico durante 7 dias e levantamento de consumos por sector.\n\nO relatório final identificou 18 medidas de melhoria com um potencial de poupança estimado em 23% do consumo total, com retorno do investimento inferior a 2 anos.",
//     tags: ["Auditoria", "Termografia", "Eficiência", "Industrial"],
//     images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
//     client: "Refriango",
//     scope: "Auditoria, relatório e plano de medidas",
//     power: "Poupança estimada: 23%",
//   },
//   {
//     id: "solar-portugal",
//     category: "Solar",
//     title: "UPAC Industrial — Lisboa",
//     location: "Lisboa, Portugal",
//     year: "2024",
//     short: "Unidade de produção para autoconsumo de 320 kWp para parque industrial em Lisboa.",
//     description: "Instalação de uma unidade de produção para autoconsumo (UPAC) de 320 kWp num parque industrial em Lisboa, em conformidade com o DL 153/2014 e alterações subsequentes.\n\nForam instalados 700 painéis de 455 Wp em coberturas de shed, com inversores SMA Tripower de 50 kW. O sistema inclui monitorização em tempo real e integração com o sistema de gestão de energia do parque.\n\nO projeto foi financiado parcialmente através do programa Portugal 2030, com produção anual estimada de 480 MWh.",
//     tags: ["Solar", "UPAC", "SMA", "Portugal"],
//     images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
//     client: "Parque Industrial Confidencial",
//     scope: "Projeto, licenciamento, instalação e comissionamento",
//     power: "320 kWp · 480 MWh/ano",
//   },
// ];

// const CATEGORIES = ["Todos", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

// /* ─────────────────────────────────────────────
//    REVEAL component (local)
// ───────────────────────────────────────────── */
// function Reveal({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
//   const ref = React.useRef<HTMLDivElement>(null);
//   const [vis, setVis] = React.useState(false);
//   React.useEffect(() => {
//     const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } }, { threshold: 0.1 });
//     if (ref.current) ob.observe(ref.current);
//     return () => ob.disconnect();
//   }, []);
//   return (
//     <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: `opacity .55s ${delay}s, transform .55s ${delay}s`, ...style }}>
//       {children}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    MODAL
// ───────────────────────────────────────────── */
// function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
//   const [imgIdx, setImgIdx] = useState(0);

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
//     window.addEventListener("keydown", fn);
//     return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", fn); };
//   }, [onClose]);

//   return (
//     <>
//       {/* Overlay */}
//       <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 900, background: "rgba(6,22,26,.72)", backdropFilter: "blur(6px)" }}/>
//       {/* Panel */}
//       <div style={{ position: "fixed", inset: 0, zIndex: 901, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
//         <div style={{ background: "#fff", borderRadius: 20, width: "100%", maxWidth: 860, maxHeight: "90vh", overflow: "auto", boxShadow: "0 32px 80px rgba(6,22,26,.3)" }}>

//           {/* Header */}
//           <div style={{ background: "linear-gradient(135deg,#095b66,#0a7a89)", padding: "36px 40px 32px", borderRadius: "20px 20px 0 0", position: "relative" }}>
//             <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "32px 32px", borderRadius: "20px 20px 0 0" }}/>
//             <div style={{ position: "relative" }}>
//               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
//                 <span style={{ fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,.6)", letterSpacing: ".14em", textTransform: "uppercase" }}>{project.category} · {project.year}</span>
//                 <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: 8, border: "none", background: "rgba(255,255,255,.15)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M1 1l12 12M13 1L1 13" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
//                 </button>
//               </div>
//               <h2 style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 10 }}>{project.title}</h2>
//               <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//                 <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" stroke="rgba(255,255,255,.7)" strokeWidth="1.3"/><circle cx="8" cy="6" r="1.5" stroke="rgba(255,255,255,.7)" strokeWidth="1.3"/></svg>
//                 <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.7)" }}>{project.location}</span>
//               </div>
//             </div>
//           </div>

//           {/* Body */}
//           <div style={{ padding: "36px 40px" }}>

//             {/* Image gallery */}
//             <div style={{ marginBottom: 32 }}>
//               <div style={{ height: 280, borderRadius: 14, background: "linear-gradient(135deg,#f0f9fa,#c8e8eb)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10, position: "relative", overflow: "hidden" }}>
//                 <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(9,91,102,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(9,91,102,.06) 1px,transparent 1px)", backgroundSize: "28px 28px" }}/>
//                 <div style={{ position: "relative", textAlign: "center" }}>
//                   <div style={{ fontSize: 36, marginBottom: 8 }}>🖼️</div>
//                   <div style={{ fontSize: 12, fontWeight: 700, color: "#4a7275" }}>Imagem {imgIdx + 1} de {project.images.length}</div>
//                 </div>
//                 {project.images.length > 1 && (
//                   <>
//                     <button onClick={() => setImgIdx(p => (p - 1 + project.images.length) % project.images.length)} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: 8, border: "none", background: "rgba(9,91,102,.15)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                       <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M10 4L6 8l4 4" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round"/></svg>
//                     </button>
//                     <button onClick={() => setImgIdx(p => (p + 1) % project.images.length)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: 8, border: "none", background: "rgba(9,91,102,.15)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                       <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M6 4l4 4-4 4" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round"/></svg>
//                     </button>
//                   </>
//                 )}
//               </div>
//               {project.images.length > 1 && (
//                 <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
//                   {project.images.map((_, i) => (
//                     <button key={i} onClick={() => setImgIdx(i)} style={{ width: i === imgIdx ? 20 : 8, height: 8, borderRadius: 99, border: "none", background: i === imgIdx ? "#095b66" : "#c8e8eb", cursor: "pointer", transition: "all .2s" }}/>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Meta */}
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 28 }}>
//               {[
//                 { label: "Cliente", value: project.client },
//                 { label: "Âmbito", value: project.scope },
//                 { label: "Capacidade", value: project.power },
//               ].map((m, i) => (
//                 <div key={i} style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "14px 16px" }}>
//                   <div style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 5 }}>{m.label}</div>
//                   <div style={{ fontSize: 13, fontWeight: 700, color: "#0a1c1e", lineHeight: 1.4 }}>{m.value}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Description */}
//             <div style={{ marginBottom: 28 }}>
//               {project.description.split("\n\n").map((para, i) => (
//                 <p key={i} style={{ fontSize: 14.5, color: "#4a7275", lineHeight: 1.8, marginBottom: i < project.description.split("\n\n").length - 1 ? 16 : 0 }}>{para}</p>
//               ))}
//             </div>

//             {/* Tags */}
//             <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
//               {project.tags.map(tag => (
//                 <span key={tag} style={{ background: "#f0f9fa", border: "1.5px solid #c8e8eb", borderRadius: 99, padding: "5px 14px", fontSize: 11.5, fontWeight: 700, color: "#095b66" }}>{tag}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// /* ─────────────────────────────────────────────
//    PAGE
// ───────────────────────────────────────────── */
// export default function ProjectosPage() {
//   const [filter, setFilter]       = useState("Todos");
//   const [selected, setSelected]   = useState<typeof PROJECTS[0] | null>(null);
//   const [search, setSearch]       = useState("");

//   const filtered = PROJECTS.filter(p => {
//     const matchCat = filter === "Todos" || p.category === filter;
//     const matchSearch = search === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())) || p.location.toLowerCase().includes(search.toLowerCase());
//     return matchCat && matchSearch;
//   });

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         html { scroll-behavior: smooth; }
//         a { text-decoration: none; color: inherit; }
//         button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
//         body { font-family: 'Montserrat', sans-serif; }
//         ::selection { background: #095b66; color: #fff; }
//         ::-webkit-scrollbar { width: 4px; }
//         ::-webkit-scrollbar-thumb { background: #095b66; border-radius: 4px; }
//         .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
//         .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(9,91,102,.25); }
//         .filter-pill { padding: 8px 18px; border-radius: 99px; border: 1.5px solid #dde8ea; background: #fff; font-size: 12px; font-weight: 700; color: #4a7275; cursor: pointer; transition: all .18s; white-space: nowrap; font-family: 'Montserrat',sans-serif; }
//         .filter-pill:hover { border-color: #095b66; color: #095b66; }
//         .filter-pill.on { background: #095b66; border-color: #095b66; color: #fff; }
//         .proj-card { background: #fff; border: 1.5px solid #dde8ea; border-radius: 18px; overflow: hidden; display: flex; flex-direction: column; transition: all .28s; cursor: pointer; }
//         .proj-card:hover { border-color: #095b66; box-shadow: 0 10px 36px rgba(9,91,102,.12); transform: translateY(-5px); }
//         .search-input { width: 100%; max-width: 360px; background: #fff; border: 1.5px solid #dde8ea; border-radius: 10px; color: #1a2c2e; padding: 11px 16px 11px 40px; font-family: 'Montserrat',sans-serif; font-size: 13px; font-weight: 600; outline: none; transition: border-color .2s; }
//         .search-input:focus { border-color: #095b66; box-shadow: 0 0 0 3px rgba(9,91,102,.08); }
//         .search-input::placeholder { color: #b0c8ca; font-weight: 500; }
//         @media (max-width: 768px) {
//           .proj-grid { grid-template-columns: 1fr 1fr !important; }
//           .page-inner { padding: 0 22px !important; }
//           .hero-pad { padding: 100px 22px 56px !important; }
//         }
//         @media (max-width: 500px) {
//           .proj-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>

//       {/* Hero */}
//       <div style={{ background: "#095b66", paddingTop: 66 }}>
//         <div className="hero-pad" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 80px 56px" }}>
//           <div style={{ position: "relative" }}>
//             <div style={{ position: "absolute", inset: "-80px -80px", backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }}/>
//             <div style={{ position: "relative" }}>
//               <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 12 }}>— Projectos</p>
//               <h1 style={{ fontSize: "clamp(32px,5vw,60px)", fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: 18 }}>Casos de Sucesso</h1>
//               <p style={{ fontSize: 16, color: "rgba(255,255,255,.65)", maxWidth: 520, lineHeight: 1.75, marginBottom: 36 }}>
//                 Mais de 500 projectos entregues em Angola, Portugal e São Tomé e Príncipe. Da concepção ao comissionamento.
//               </p>
//               <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
//                 {[
                 
//                   { n: "3", l: "Países" },
//                   { n: "37+", l: "Anos" },
//                 ].map((s, i) => (
//                   <div key={i} style={{ background: "rgba(255,255,255,.1)", border: "1.5px solid rgba(255,255,255,.15)", borderRadius: 12, padding: "14px 22px", textAlign: "center" }}>
//                     <div style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>{s.n}</div>
//                     <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.55)", letterSpacing: ".1em", textTransform: "uppercase" }}>{s.l}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Filters */}
//       <div style={{ background: "#fff", borderBottom: "1.5px solid #e8f0f1", position: "sticky", top: 66, zIndex: 100 }}>
//         <div className="page-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 0", overflowX: "auto" }}>
//             <div style={{ position: "relative", flexShrink: 0 }}>
//               <svg viewBox="0 0 16 16" fill="none" width="14" height="14" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
//                 <circle cx="7" cy="7" r="5" stroke="#9bbbbe" strokeWidth="1.5"/>
//                 <path d="M11 11l3 3" stroke="#9bbbbe" strokeWidth="1.5" strokeLinecap="round"/>
//               </svg>
//               <input className="search-input" placeholder="Pesquisar projectos..." value={search} onChange={e => setSearch(e.target.value)}/>
//             </div>
//             <div style={{ width: 1, height: 32, background: "#dde8ea", flexShrink: 0 }}/>
//             {CATEGORIES.map(cat => (
//               <button key={cat} className={`filter-pill${filter === cat ? " on" : ""}`} onClick={() => setFilter(cat)}>
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Grid */}
//       <div style={{ background: "#f8fbfc", minHeight: "60vh", padding: "56px 0 96px" }}>
//         <div className="page-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
//           {filtered.length === 0 ? (
//             <div style={{ textAlign: "center", padding: "80px 0" }}>
//               <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
//               <p style={{ fontSize: 16, fontWeight: 700, color: "#4a7275" }}>Nenhum projecto encontrado</p>
//               <p style={{ fontSize: 13, color: "#9bbbbe", marginTop: 8 }}>Tente ajustar os filtros ou a pesquisa</p>
//             </div>
//           ) : (
//             <>
//               <p style={{ fontSize: 12, fontWeight: 600, color: "#9bbbbe", marginBottom: 24 }}>{filtered.length} projecto{filtered.length !== 1 ? "s" : ""}</p>
//               <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
//                 {filtered.map((p, i) => (
//                   <Reveal key={p.id} delay={i * 0.05}>
//                     <div className="proj-card" onClick={() => setSelected(p)}>
//                       {/* Card image */}
//                       <div style={{ height: 180, background: "linear-gradient(135deg,#095b66 0%,#0a7a89 100%)", position: "relative", flexShrink: 0 }}>
//                         <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "24px 24px" }}/>
//                         <div style={{ position: "absolute", bottom: 14, left: 16, right: 16, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
//                           <span style={{ background: "rgba(255,255,255,.18)", borderRadius: 8, padding: "5px 12px", fontSize: 11, fontWeight: 800, color: "#fff", backdropFilter: "blur(8px)" }}>{p.category}</span>
//                           <span style={{ background: "rgba(0,0,0,.25)", borderRadius: 8, padding: "4px 10px", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.85)" }}>{p.year}</span>
//                         </div>
//                       </div>
//                       {/* Card body */}
//                       <div style={{ padding: "22px 22px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
//                         <h3 style={{ fontSize: 15, fontWeight: 800, color: "#0a1c1e", lineHeight: 1.35, marginBottom: 10 }}>{p.title}</h3>
//                         <p style={{ fontSize: 13, color: "#4a7275", lineHeight: 1.65, flex: 1, marginBottom: 16 }}>{p.short}</p>
//                         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                           <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
//                             <svg viewBox="0 0 16 16" fill="none" width="11" height="11"><path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" stroke="#9bbbbe" strokeWidth="1.3"/><circle cx="8" cy="6" r="1.5" stroke="#9bbbbe" strokeWidth="1.3"/></svg>
//                             <span style={{ fontSize: 11, fontWeight: 600, color: "#9bbbbe" }}>{p.location}</span>
//                           </div>
//                           <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11.5, fontWeight: 700, color: "#095b66" }}>
//                             Ver detalhes
//                             <svg viewBox="0 0 16 16" fill="none" width="11" height="11"><path d="M4 8h8M9 5l3 3-3 3" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </Reveal>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       {/* CTA */}
//       <div style={{ background: "#095b66", padding: "64px 0" }}>
//         <div className="page-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
//           <div>
//             <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 10 }}>Tem um projecto em mente?</h2>
//             <p style={{ fontSize: 15, color: "rgba(255,255,255,.65)", maxWidth: 400, lineHeight: 1.75 }}>A nossa equipa técnica está disponível para estudar a melhor solução para as suas necessidades.</p>
//           </div>
//           <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
//             <Link href="/#contacto" className="btn-teal" style={{ background: "#fff", color: "#095b66" }}>Solicitar Orçamento</Link>
//             <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#25D366", color:"#fff", border:"none", borderRadius:6, padding:"13px 24px", fontSize:12, fontWeight:700, letterSpacing:".07em", textTransform:"uppercase", cursor:"pointer", transition:"all .25s", textDecoration:"none" }}>
//               💬 WhatsApp
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {selected && <ProjectModal project={selected} onClose={() => setSelected(null)}/>}
//     </>
//   );
// }



"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const PROJECTS = [
  {
    id: "sonangol-luanda",
    category: "Energia Crítica",
    title: "Sonangol — Centro de Dados Luanda",
    location: "Luanda, Angola",
    year: "2023",
    short: "Instalação de sistema UPS N+1 de 800 kVA com grupo gerador para continuidade operacional 24/7.",
    description: "O projeto contemplou o fornecimento e instalação de dois sistemas UPS Socomec MODULYS de 400 kVA em configuração paralela redundante N+1, garantindo autonomia de 30 minutos em plena carga.\n\nFoi também instalado um grupo gerador de 1250 kVA com transferência automática em menos de 10 segundos. O quadro geral de distribuição foi fabricado nas nossas instalações de Luanda com barramentos de cobre e proteções diferenciais de classe A+.\n\nO projeto incluiu a supervisão de comissionamento, testes de carga a 100% e formação da equipa técnica do cliente.",
    tags: ["UPS", "Grupo Gerador", "Quadros BT", "Data Center"],
    images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg", "/projects/placeholder-3.jpg"],
    client: "Sonangol",
    scope: "Fornecimento, instalação e comissionamento",
    power: "800 kVA UPS + 1250 kVA GG",
  },
  {
    id: "solar-cabinda",
    category: "Solar",
    title: "Central Solar Híbrida — Cabinda",
    location: "Cabinda, Angola",
    year: "2023",
    short: "Central fotovoltaica de 2,4 MWp com armazenamento de 4 MWh para complexo industrial.",
    description: "Projeto de grande escala desenvolvido para um complexo industrial petrolífero em Cabinda. Foram instalados 6 000 painéis Huawei de 400 Wp montados em estruturas de rastreamento solar Nextracker.\n\nO sistema de armazenamento é composto por baterias LFP de 4 MWh com inversores Huawei SUN2000. A central opera em modo híbrido, reduzindo o consumo de gasóleo em cerca de 65%.\n\nO projeto incluiu a instalação de um sistema SCADA para monitorização remota em tempo real e geração de relatórios de produção energética.",
    tags: ["Solar", "Armazenamento", "Huawei", "Industrial"],
    images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
    client: "Confidencial",
    scope: "Projeto, fornecimento, instalação e SCADA",
    power: "2,4 MWp + 4 MWh",
  },
  {
    id: "bfa-quadros",
    category: "Quadros Elétricos",
    title: "BFA — Renovação de Quadros Elétricos",
    location: "Luanda, Angola",
    year: "2022",
    short: "Fabrico e instalação de 14 quadros elétricos BT para rede de balcões bancários.",
    description: "Fabrico em série de 14 quadros elétricos de baixa tensão para renovação da infraestrutura elétrica da rede de balcões do BFA em Luanda.\n\nCada quadro foi dimensionado individualmente conforme levantamento local, com proteções Legrand e barramentos de cobre de 1600 A. Todos os quadros passaram ensaios de continuidade, isolamento e forma segundo IEC 61439-1.\n\nO trabalho incluiu desmontagem dos quadros existentes, instalação dos novos e ensaios em carga com registo fotográfico.",
    tags: ["Quadros BT", "Legrand", "Bancário"],
    images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
    client: "BFA — Banco de Fomento Angola",
    scope: "Fabrico, fornecimento e instalação",
    power: "14 Quadros · 1600 A",
  },
  {
    id: "spda-unitel",
    category: "SPDA",
    title: "Unitel — Sistema SPDA Nacional",
    location: "Angola (multi-site)",
    year: "2022",
    short: "Proteção atmosférica para 38 torres de telecomunicações em Angola com Franklin France.",
    description: "Projeto nacional de proteção contra descargas atmosféricas para infraestrutura de telecomunicações da Unitel. Foram instalados sistemas SPDA Franklin France com captores ESE em 38 torres de comunicação distribuídas por 12 províncias.\n\nO trabalho incluiu estudo de risco IEC 62305-2, dimensionamento, instalação, ligação à terra e emissão de certificados de conformidade por localização.\n\nTodos os trabalhos foram executados por técnicos certificados Franklin France, com relatório final entregue à Unitel e à IRCOP.",
    tags: ["SPDA", "Franklin France", "Telecom", "Multi-site"],
    images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
    client: "Unitel",
    scope: "Projeto, instalação e certificação",
    power: "38 torres · 12 províncias",
  },
  {
    id: "pt-etu",
    category: "Postos de Transformação",
    title: "ETU Energias — Rede de PT Luanda",
    location: "Luanda, Angola",
    year: "2023",
    short: "Instalação de 9 postos de transformação Toshiba MT/BT para expansão da rede urbana.",
    description: "Em parceria com a ETU Energias, instalámos 9 postos de transformação compactos Toshiba TCSU de 10 kV / 630 kVA em zonas urbanas de Luanda.\n\nOs postos pré-montados foram entregues prontos para ligação (plug & play), com quadros BT associados fabricados nas nossas instalações. O projeto incluiu a coordenação com a ENDE para testes de comissionamento e ligação à rede de distribuição.\n\nO trabalho foi concluído em 14 semanas, dentro do prazo e orçamento acordados.",
    tags: ["Postos de Transformação", "Toshiba", "MT/BT", "ENDE"],
    images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
    client: "ETU Energias",
    scope: "Fornecimento, instalação e comissionamento",
    power: "9 × 630 kVA · 10 kV",
  },
  {
    id: "ve-luanda",
    category: "Mobilidade Elétrica",
    title: "Rede de Carregamento VE — Luanda",
    location: "Luanda, Angola",
    year: "2024",
    short: "Instalação dos primeiros postos de carregamento rápido DC para veículos elétricos em Angola.",
    description: "Projeto pioneiro em Angola para a implementação de uma rede de carregamento para veículos elétricos na cidade de Luanda.\n\nForam instalados 12 postos de carregamento Circutor com potências de 22 kW (AC) e 50 kW (DC) em parques comerciais e hotéis. O sistema integra monitorização remota, gestão de energia e faturação por utilizador.\n\nEste projeto representou o primeiro passo para a eletrificação da mobilidade em Angola, com cobertura mediática nacional e reconhecimento pelo Ministério da Energia.",
    tags: ["Mobilidade Elétrica", "Circutor", "VE", "Angola"],
    images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
    client: "Consórcio privado",
    scope: "Fornecimento, instalação e plataforma de gestão",
    power: "12 postos · 22 kW / 50 kW",
  },
  {
    id: "hospital-luanda",
    category: "Energia Crítica",
    title: "Hospital Américo Boavida — Renovação Elétrica",
    location: "Luanda, Angola",
    year: "2021",
    short: "Renovação completa da infraestrutura elétrica com quadros e UPS para bloco cirúrgico.",
    description: "Renovação integral da instalação elétrica do bloco cirúrgico e UCI do Hospital Américo Boavida.\n\nO projeto incluiu o fabrico de quadros elétricos com proteções diferenciais de alta sensibilidade (30 mA) para áreas médicas, instalação de sistemas UPS Salicru SLC de 80 kVA para equipamentos críticos.\n\nFoi implementado um sistema de terra de proteção médica conforme IEC 60364-7-710, com medições periódicas de impedância e registo em livro de manutenção.",
    tags: ["UPS", "Quadros BT", "Saúde", "IEC 60364"],
    images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
    client: "Hospital Américo Boavida",
    scope: "Projeto, fabrico, instalação e manutenção",
    power: "80 kVA UPS · Bloco cirúrgico",
  },
  {
    id: "stp-solar",
    category: "Solar",
    title: "São Tomé — Electrificação Rural Solar",
    location: "São Tomé e Príncipe",
    year: "2022",
    short: "60 sistemas solares domésticos off-grid com baterias EcoFlow para electrificação rural.",
    description: "Programa de electrificação rural em São Tomé e Príncipe com a instalação de 60 sistemas solares domésticos off-grid.\n\nCada sistema é composto por 4 painéis de 400 Wp e uma bateria EcoFlow DELTA Pro de 3,6 kWh, dimensionados para cobrir as necessidades essenciais de cada habitação.\n\nO projeto foi desenvolvido em parceria com o governo local e visa reduzir a dependência de gasóleo para geração elétrica nas zonas rurais, beneficiando mais de 250 pessoas diretamente.",
    tags: ["Solar", "EcoFlow", "Off-grid", "Rural"],
    images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
    client: "Governo de São Tomé e Príncipe",
    scope: "Fornecimento, instalação e formação",
    power: "60 sistemas · 1,6 kWp cada",
  },
  {
    id: "telecom-angola",
    category: "Telecom",
    title: "Multitel — Infraestrutura de Cabling",
    location: "Luanda, Angola",
    year: "2023",
    short: "Cabling estruturado Cat6A e fibra ótica para campus corporativo de 8 pisos.",
    description: "Projeto de infraestrutura de telecomunicações para o novo campus corporativo da Multitel em Luanda.\n\nForam instalados mais de 12 km de cabo Cat6A, 3 km de fibra ótica OM4 e 480 pontos de dados distribuídos por 8 pisos. A infraestrutura suporta velocidades de 10 Gbps e foi certificada por Fluke Networks.\n\nO projeto incluiu também a instalação de sistemas CCTV IP com 64 câmaras e controlo de acesso com leitura biométrica em todos os pisos.",
    tags: ["Telecom", "Cabling", "Fibra Ótica", "CCTV"],
    images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
    client: "Multitel",
    scope: "Projeto, instalação e certificação",
    power: "480 pontos · 10 Gbps",
  },
  {
    id: "satcom-offshore",
    category: "SATCOM",
    title: "VSAT Offshore — Plataforma Petrolífera",
    location: "Offshore Angola",
    year: "2023",
    short: "Sistema VSAT de redundância dupla para plataforma petrolífera com ligação 24/7.",
    description: "Instalação de sistema de comunicação por satélite de alta disponibilidade para plataforma petrolífera offshore em Angola.\n\nO sistema é composto por duas antenas VSAT de 1,2 m em configuração redundante, com comutação automática em caso de falha. A ligação garante 50 Mbps dedicados para voz, dados e vídeo-conferência.\n\nO projeto incluiu a instalação do sistema de antenas, equipamentos de terra, integração com a rede LAN da plataforma e configuração do sistema de monitorização remota.",
    tags: ["SATCOM", "VSAT", "Offshore", "Redundância"],
    images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
    client: "Confidencial",
    scope: "Fornecimento, instalação e manutenção",
    power: "50 Mbps dedicados · Redundância dupla",
  },
  {
    id: "auditoria-refriango",
    category: "Auditoria Energética",
    title: "Refriango — Auditoria e Eficiência",
    location: "Luanda, Angola",
    year: "2022",
    short: "Auditoria energética completa com termografia e análise de qualidade de energia.",
    description: "Auditoria energética completa às instalações industriais da Refriango em Luanda, com o objectivo de identificar perdas e oportunidades de melhoria.\n\nForam realizadas inspecções termográficas de todos os quadros eléctricos e motores, análise de qualidade de energia com registador trifásico durante 7 dias e levantamento de consumos por sector.\n\nO relatório final identificou 18 medidas de melhoria com um potencial de poupança estimado em 23% do consumo total, com retorno do investimento inferior a 2 anos.",
    tags: ["Auditoria", "Termografia", "Eficiência", "Industrial"],
    images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
    client: "Refriango",
    scope: "Auditoria, relatório e plano de medidas",
    power: "Poupança estimada: 23%",
  },
  {
    id: "solar-portugal",
    category: "Solar",
    title: "UPAC Industrial — Lisboa",
    location: "Lisboa, Portugal",
    year: "2024",
    short: "Unidade de produção para autoconsumo de 320 kWp para parque industrial em Lisboa.",
    description: "Instalação de uma unidade de produção para autoconsumo (UPAC) de 320 kWp num parque industrial em Lisboa, em conformidade com o DL 153/2014 e alterações subsequentes.\n\nForam instalados 700 painéis de 455 Wp em coberturas de shed, com inversores SMA Tripower de 50 kW. O sistema inclui monitorização em tempo real e integração com o sistema de gestão de energia do parque.\n\nO projeto foi financiado parcialmente através do programa Portugal 2030, com produção anual estimada de 480 MWh.",
    tags: ["Solar", "UPAC", "SMA", "Portugal"],
    images: ["/projects/placeholder-1.jpg", "/projects/placeholder-2.jpg"],
    client: "Parque Industrial Confidencial",
    scope: "Projeto, licenciamento, instalação e comissionamento",
    power: "320 kWp · 480 MWh/ano",
  },
];

const CATEGORIES = ["Todos", ...Array.from(new Set(PROJECTS.map(p => p.category)))];
const PER_PAGE = 6;

/* ─────────────────────────────────────────────
   REVEAL
───────────────────────────────────────────── */
function Reveal({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: `opacity .55s ${delay}s, transform .55s ${delay}s`, height: "100%", ...style }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGINATION
───────────────────────────────────────────── */
function Pagination({ page, totalPages, onChange }: { page: number; totalPages: number; onChange: (n: number) => void }) {
  if (totalPages <= 1) return null;

  const btnBase: React.CSSProperties = {
    width: 40, height: 40, borderRadius: 10, border: "1.5px solid",
    background: "#fff", fontFamily: "'Montserrat',sans-serif",
    fontSize: 13, fontWeight: 700, cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "all .2s",
  };

  // Build page range: always show first, last, current ±1, with ellipsis
  const range: (number | "…")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
      range.push(i);
    } else if (range[range.length - 1] !== "…") {
      range.push("…");
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 52 }}>
      {/* Prev */}
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        style={{
          ...btnBase,
          borderColor: page === 1 ? "#dde8ea" : "#095b66",
          color: page === 1 ? "#c8d8da" : "#095b66",
          cursor: page === 1 ? "default" : "pointer",
          background: page === 1 ? "#f8fbfc" : "#fff",
        }}
      >
        <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
          <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Pages */}
      {range.map((item, i) =>
        item === "…" ? (
          <span key={`ellipsis-${i}`} style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#9bbbbe", fontWeight: 700 }}>…</span>
        ) : (
          <button
            key={item}
            onClick={() => onChange(item as number)}
            style={{
              ...btnBase,
              borderColor: page === item ? "#095b66" : "#dde8ea",
              background: page === item ? "#095b66" : "#fff",
              color: page === item ? "#fff" : "#4a7275",
              boxShadow: page === item ? "0 4px 16px rgba(9,91,102,.2)" : "none",
              transform: page === item ? "translateY(-1px)" : "none",
            }}
          >
            {item}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        style={{
          ...btnBase,
          borderColor: page === totalPages ? "#dde8ea" : "#095b66",
          color: page === totalPages ? "#c8d8da" : "#095b66",
          cursor: page === totalPages ? "default" : "pointer",
          background: page === totalPages ? "#f8fbfc" : "#fff",
        }}
      >
        <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MODAL
───────────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", fn); };
  }, [onClose]);

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 900, background: "rgba(6,22,26,.72)", backdropFilter: "blur(6px)" }}/>
      <div style={{ position: "fixed", inset: 0, zIndex: 901, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        <div style={{ background: "#fff", borderRadius: 20, width: "100%", maxWidth: 860, maxHeight: "90vh", overflow: "auto", boxShadow: "0 32px 80px rgba(6,22,26,.3)" }}>

          {/* Header */}
          <div style={{ background: "linear-gradient(135deg,#095b66,#0a7a89)", padding: "36px 40px 32px", borderRadius: "20px 20px 0 0", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "32px 32px", borderRadius: "20px 20px 0 0" }}/>
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,.6)", letterSpacing: ".14em", textTransform: "uppercase" }}>{project.category} · {project.year}</span>
                <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: 8, border: "none", background: "rgba(255,255,255,.15)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M1 1l12 12M13 1L1 13" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </button>
              </div>
              <h2 style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 10 }}>{project.title}</h2>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" stroke="rgba(255,255,255,.7)" strokeWidth="1.3"/><circle cx="8" cy="6" r="1.5" stroke="rgba(255,255,255,.7)" strokeWidth="1.3"/></svg>
                <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.7)" }}>{project.location}</span>
              </div>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "36px 40px" }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{ height: 280, borderRadius: 14, background: "linear-gradient(135deg,#f0f9fa,#c8e8eb)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(9,91,102,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(9,91,102,.06) 1px,transparent 1px)", backgroundSize: "28px 28px" }}/>
                <div style={{ position: "relative", textAlign: "center" }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>🖼️</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#4a7275" }}>Imagem {imgIdx + 1} de {project.images.length}</div>
                </div>
                {project.images.length > 1 && (
                  <>
                    <button onClick={() => setImgIdx(p => (p - 1 + project.images.length) % project.images.length)} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: 8, border: "none", background: "rgba(9,91,102,.15)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M10 4L6 8l4 4" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round"/></svg>
                    </button>
                    <button onClick={() => setImgIdx(p => (p + 1) % project.images.length)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: 8, border: "none", background: "rgba(9,91,102,.15)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M6 4l4 4-4 4" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round"/></svg>
                    </button>
                  </>
                )}
              </div>
              {project.images.length > 1 && (
                <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                  {project.images.map((_, i) => (
                    <button key={i} onClick={() => setImgIdx(i)} style={{ width: i === imgIdx ? 20 : 8, height: 8, borderRadius: 99, border: "none", background: i === imgIdx ? "#095b66" : "#c8e8eb", cursor: "pointer", transition: "all .2s" }}/>
                  ))}
                </div>
              )}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 28 }}>
              {[
                { label: "Cliente", value: project.client },
                { label: "Âmbito", value: project.scope },
                { label: "Capacidade", value: project.power },
              ].map((m, i) => (
                <div key={i} style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 5 }}>{m.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0a1c1e", lineHeight: 1.4 }}>{m.value}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 28 }}>
              {project.description.split("\n\n").map((para, i) => (
                <p key={i} style={{ fontSize: 14.5, color: "#4a7275", lineHeight: 1.8, marginBottom: i < project.description.split("\n\n").length - 1 ? 16 : 0 }}>{para}</p>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ background: "#f0f9fa", border: "1.5px solid #c8e8eb", borderRadius: 99, padding: "5px 14px", fontSize: 11.5, fontWeight: 700, color: "#095b66" }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function ProjectosPage() {
  const [filter, setFilter]     = useState("Todos");
  const [selected, setSelected] = useState<typeof PROJECTS[0] | null>(null);
  const [search, setSearch]     = useState("");
  const [page, setPage]         = useState(1);

  const filtered = PROJECTS.filter(p => {
    const matchCat    = filter === "Todos" || p.category === filter;
    const matchSearch = search === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())) || p.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleFilterChange = (cat: string) => { setFilter(cat); setPage(1); };
  const handleSearchChange = (val: string) => { setSearch(val); setPage(1); };

  const handlePageChange = (n: number) => {
    setPage(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; color: inherit; }
        button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
        body { font-family: 'Montserrat', sans-serif; }
        ::selection { background: #095b66; color: #fff; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #095b66; border-radius: 4px; }
        .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(9,91,102,.25); }
        .filter-pill { padding: 8px 18px; border-radius: 99px; border: 1.5px solid #dde8ea; background: #fff; font-size: 12px; font-weight: 700; color: #4a7275; cursor: pointer; transition: all .18s; white-space: nowrap; font-family: 'Montserrat',sans-serif; }
        .filter-pill:hover { border-color: #095b66; color: #095b66; }
        .filter-pill.on { background: #095b66; border-color: #095b66; color: #fff; }
        .proj-card { background: #fff; border: 1.5px solid #dde8ea; border-radius: 18px; overflow: hidden; display: flex; flex-direction: column; transition: all .28s; cursor: pointer; height: 100%; }
        .proj-card:hover { border-color: #095b66; box-shadow: 0 10px 36px rgba(9,91,102,.12); transform: translateY(-5px); }
        .search-input { width: 100%; max-width: 360px; background: #fff; border: 1.5px solid #dde8ea; border-radius: 10px; color: #1a2c2e; padding: 11px 16px 11px 40px; font-family: 'Montserrat',sans-serif; font-size: 13px; font-weight: 600; outline: none; transition: border-color .2s; }
        .search-input:focus { border-color: #095b66; box-shadow: 0 0 0 3px rgba(9,91,102,.08); }
        .search-input::placeholder { color: #b0c8ca; font-weight: 500; }
        .page-btn:hover:not(:disabled) { background: #f0f9fa !important; border-color: #095b66 !important; transform: translateY(-1px); }
        @media (max-width: 768px) {
          .proj-grid { grid-template-columns: 1fr 1fr !important; }
          .page-inner { padding: 0 22px !important; }
          .hero-pad { padding: 100px 22px 56px !important; }
        }
        @media (max-width: 500px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Hero */}
      <div style={{ background: "#095b66", paddingTop: 66 }}>
        <div className="hero-pad" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 80px 56px" }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: "-80px -80px", backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }}/>
            <div style={{ position: "relative" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 12 }}>— Projectos</p>
              <h1 style={{ fontSize: "clamp(32px,5vw,60px)", fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: 18 }}>Casos de Sucesso</h1>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,.65)", maxWidth: 520, lineHeight: 1.75, marginBottom: 36 }}>
                Mais de 500 projectos entregues em Angola, Portugal e São Tomé e Príncipe. Da concepção ao comissionamento.
              </p>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {[
                  { n: "3", l: "Países" },
                  { n: "37+", l: "Anos" },
                ].map((s, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,.1)", border: "1.5px solid rgba(255,255,255,.15)", borderRadius: 12, padding: "14px 22px", textAlign: "center" }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>{s.n}</div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.55)", letterSpacing: ".1em", textTransform: "uppercase" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ background: "#fff", borderBottom: "1.5px solid #e8f0f1", position: "sticky", top: 66, zIndex: 100 }}>
        <div className="page-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 0", overflowX: "auto" }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <svg viewBox="0 0 16 16" fill="none" width="14" height="14" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                <circle cx="7" cy="7" r="5" stroke="#9bbbbe" strokeWidth="1.5"/>
                <path d="M11 11l3 3" stroke="#9bbbbe" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input className="search-input" placeholder="Pesquisar projectos..." value={search} onChange={e => handleSearchChange(e.target.value)}/>
            </div>
            <div style={{ width: 1, height: 32, background: "#dde8ea", flexShrink: 0 }}/>
            {CATEGORIES.map(cat => (
              <button key={cat} className={`filter-pill${filter === cat ? " on" : ""}`} onClick={() => handleFilterChange(cat)}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ background: "#f8fbfc", minHeight: "60vh", padding: "56px 0 96px" }}>
        <div className="page-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#4a7275" }}>Nenhum projecto encontrado</p>
              <p style={{ fontSize: 13, color: "#9bbbbe", marginTop: 8 }}>Tente ajustar os filtros ou a pesquisa</p>
            </div>
          ) : (
            <>
              {/* Count + page info */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#9bbbbe" }}>
                  {filtered.length} projecto{filtered.length !== 1 ? "s" : ""}
                </p>
                {totalPages > 1 && (
                  <p style={{ fontSize: 12, fontWeight: 600, color: "#9bbbbe" }}>
                    Página {page} de {totalPages}
                  </p>
                )}
              </div>

              {/* Cards grid — alignItems stretch keeps all rows equal height */}
              <div
                className="proj-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, alignItems: "stretch" }}
              >
                {paginated.map((p, i) => (
                  <Reveal key={`${p.id}-${page}`} delay={i * 0.05}>
                    <div className="proj-card" onClick={() => setSelected(p)}>
                      {/* Card image */}
                      <div style={{ height: 180, background: "linear-gradient(135deg,#095b66 0%,#0a7a89 100%)", position: "relative", flexShrink: 0 }}>
                        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "24px 24px" }}/>
                        <div style={{ position: "absolute", bottom: 14, left: 16, right: 16, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                          <span style={{ background: "rgba(255,255,255,.18)", borderRadius: 8, padding: "5px 12px", fontSize: 11, fontWeight: 800, color: "#fff", backdropFilter: "blur(8px)" }}>{p.category}</span>
                          <span style={{ background: "rgba(0,0,0,.25)", borderRadius: 8, padding: "4px 10px", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.85)" }}>{p.year}</span>
                        </div>
                      </div>
                      {/* Card body */}
                      <div style={{ padding: "22px 22px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <h3 style={{ fontSize: 15, fontWeight: 800, color: "#0a1c1e", lineHeight: 1.35, marginBottom: 10 }}>{p.title}</h3>
                        <p style={{ fontSize: 13, color: "#4a7275", lineHeight: 1.65, flex: 1, marginBottom: 16 }}>{p.short}</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                            <svg viewBox="0 0 16 16" fill="none" width="11" height="11"><path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" stroke="#9bbbbe" strokeWidth="1.3"/><circle cx="8" cy="6" r="1.5" stroke="#9bbbbe" strokeWidth="1.3"/></svg>
                            <span style={{ fontSize: 11, fontWeight: 600, color: "#9bbbbe" }}>{p.location}</span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11.5, fontWeight: 700, color: "#095b66" }}>
                            Ver detalhes
                            <svg viewBox="0 0 16 16" fill="none" width="11" height="11"><path d="M4 8h8M9 5l3 3-3 3" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Pagination */}
              <Pagination page={page} totalPages={totalPages} onChange={handlePageChange} />
            </>
          )}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "#095b66", padding: "64px 0" }}>
        <div className="page-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 10 }}>Tem um projecto em mente?</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.65)", maxWidth: 400, lineHeight: 1.75 }}>A nossa equipa técnica está disponível para estudar a melhor solução para as suas necessidades.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/#contacto" className="btn-teal" style={{ background: "#fff", color: "#095b66" }}>Solicitar Orçamento</Link>
            <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#25D366", color:"#fff", border:"none", borderRadius:6, padding:"13px 24px", fontSize:12, fontWeight:700, letterSpacing:".07em", textTransform:"uppercase", cursor:"pointer", transition:"all .25s", textDecoration:"none" }}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)}/>}
    </>
  );
}