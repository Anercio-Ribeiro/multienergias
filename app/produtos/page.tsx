// // "use client";
// // import React, { useState, useMemo } from "react";
// // import Link from "next/link";

// // /* ─────────────────────────────────────────────
// //    ALL PRODUCTS DATA
// // ───────────────────────────────────────────── */
// // const ALL_PRODUCTS = [
// //   // SOLAR
// //   {
// //     id: "solar-residential",
// //     category: "Solar",
// //     name: "Sistema Solar Residencial",
// //     brand: "Huawei FusionSolar",
// //     power: "3–15 kW",
// //     tag: "Residencial",
// //     desc: "Kit completo para habitação. Painel + inversor + monitorização remota.",
// //     badge: null,
// //   },
// //   {
// //     id: "solar-industrial",
// //     category: "Solar",
// //     name: "Sistema Solar Industrial",
// //     brand: "Huawei FusionSolar",
// //     power: "50–500 kW",
// //     tag: "Industrial",
// //     desc: "Solução de grande escala para fábricas, armazéns e instalações industriais.",
// //     badge: "Popular",
// //   },
// //   {
// //     id: "solar-utility",
// //     category: "Solar",
// //     name: "Central Fotovoltaica",
// //     brand: "Nextracker + SMA",
// //     power: "> 1 MW",
// //     tag: "Utility",
// //     desc: "Centrais de produção fotovoltaica com rastreamento solar automático.",
// //     badge: null,
// //   },
// //   {
// //     id: "solar-carport",
// //     category: "Solar",
// //     name: "Carport Solar",
// //     brand: "Siemens",
// //     power: "10–100 kW",
// //     tag: "Carport",
// //     desc: "Cobertura para parques de estacionamento com produção de energia integrada.",
// //     badge: null,
// //   },
// //   // STORAGE
// //   {
// //     id: "ecoflow-powerocean",
// //     category: "Armazenamento",
// //     name: "EcoFlow PowerOcean",
// //     brand: "EcoFlow",
// //     power: "5–29 kW / 45 kWh",
// //     tag: "Híbrido",
// //     desc: "Inversor híbrido trifásico com armazenamento LFP expansível. Plug & play.",
// //     badge: "Novo",
// //   },
// //   {
// //     id: "bateria-lfp",
// //     category: "Armazenamento",
// //     name: "Bateria LFP Expansível",
// //     brand: "EcoFlow",
// //     power: "5–45 kWh",
// //     tag: "Bateria",
// //     desc: "Módulos de bateria de lítio ferro-fosfato com 15 anos de garantia.",
// //     badge: null,
// //   },
// //   // QUADROS
// //   {
// //     id: "quadro-bt-standard",
// //     category: "Quadros BT",
// //     name: "Quadro Elétrico BT Standard",
// //     brand: "Legrand",
// //     power: "Até 630 A",
// //     tag: "Standard",
// //     desc: "Quadros modulares de baixa tensão fabricados em Luanda. Forma 1 e 2.",
// //     badge: null,
// //   },
// //   {
// //     id: "quadro-bt-industrial",
// //     category: "Quadros BT",
// //     name: "Quadro Elétrico BT Industrial",
// //     brand: "Legrand",
// //     power: "Até 6300 A",
// //     tag: "Industrial",
// //     desc: "Soluções à medida para instalações industriais. IEC 61439. Forma 3 e 4.",
// //     badge: "Popular",
// //   },
// //   {
// //     id: "quadro-cgd",
// //     category: "Quadros BT",
// //     name: "Quadro Geral de Distribuição",
// //     brand: "Legrand",
// //     power: "Até 3200 A",
// //     tag: "Distribuição",
// //     desc: "CGD para edifícios de grande porte, hotéis e centros comerciais.",
// //     badge: null,
// //   },
// //   // UPS
// //   {
// //     id: "ups-salicru-small",
// //     category: "UPS",
// //     name: "UPS Salicru SLC Twin RT",
// //     brand: "Salicru",
// //     power: "10–120 KVA",
// //     tag: "Rack",
// //     desc: "UPS online dupla conversão para data centers e salas de servidores.",
// //     badge: null,
// //   },
// //   {
// //     id: "ups-salicru-large",
// //     category: "UPS",
// //     name: "UPS Salicru SLC Plus",
// //     brand: "Salicru",
// //     power: "120–800 KVA",
// //     tag: "Industrial",
// //     desc: "Proteção crítica para hospitais, telecomunicações e instalações industriais.",
// //     badge: "Popular",
// //   },
// //   {
// //     id: "ups-socomec",
// //     category: "UPS",
// //     name: "Socomec MODULYS GP",
// //     brand: "Socomec",
// //     power: "200–4800 KVA",
// //     tag: "Modular",
// //     desc: "Sistema UPS modular de alta capacidade. Escalável e redundante N+1.",
// //     badge: null,
// //   },
// //   {
// //     id: "estabilizador",
// //     category: "UPS",
// //     name: "Estabilizador de Tensão",
// //     brand: "Salicru",
// //     power: "1–500 KVA",
// //     tag: "Estabilizador",
// //     desc: "Correção automática de tensão para equipamentos sensíveis.",
// //     badge: null,
// //   },
// //   // POSTOS MT
// //   {
// //     id: "posto-toshiba-500",
// //     category: "Postos MT",
// //     name: "Posto de Transformação 500 KVA",
// //     brand: "Toshiba T&D",
// //     power: "500 KVA · 10–30 kV",
// //     tag: "Compacto",
// //     desc: "Posto compacto pré-montado. Instalação rápida. IP66. Class AB.",
// //     badge: null,
// //   },
// //   {
// //     id: "posto-toshiba-1000",
// //     category: "Postos MT",
// //     name: "Posto de Transformação 1000 KVA",
// //     brand: "Toshiba T&D",
// //     power: "1000 KVA · 10–30 kV",
// //     tag: "Compacto",
// //     desc: "TCSU pré-fabricado para ligação de média tensão. Plug & play.",
// //     badge: "Popular",
// //   },
// //   {
// //     id: "posto-toshiba-2000",
// //     category: "Postos MT",
// //     name: "Posto de Transformação 2000 KVA",
// //     brand: "Toshiba T&D",
// //     power: "2000 KVA · 10–30 kV",
// //     tag: "Industrial",
// //     desc: "Alta potência para instalações industriais de grande porte.",
// //     badge: null,
// //   },
// //   // MOBILIDADE
// //   {
// //     id: "ve-domest",
// //     category: "Mobilidade Elétrica",
// //     name: "Carregador VE Doméstico",
// //     brand: "Huawei",
// //     power: "7–22 kW",
// //     tag: "Doméstico",
// //     desc: "Posto de carregamento monofásico/trifásico para habitação e condomínios.",
// //     badge: null,
// //   },
// //   {
// //     id: "ve-publico",
// //     category: "Mobilidade Elétrica",
// //     name: "Carregador VE Via Pública",
// //     brand: "Circutor",
// //     power: "22–50 kW",
// //     tag: "Público",
// //     desc: "Estação de carregamento rápido para espaços públicos e empresas.",
// //     badge: "Novo",
// //   },
// //   {
// //     id: "ve-tesla",
// //     category: "Mobilidade Elétrica",
// //     name: "Tesla Wall Connector",
// //     brand: "Tesla",
// //     power: "11–22 kW",
// //     tag: "Premium",
// //     desc: "Solução de carregamento premium para residências e frotas Tesla.",
// //     badge: null,
// //   },
// //   // SPDA
// //   {
// //     id: "spda-franklin",
// //     category: "Proteção SPDA",
// //     name: "Sistema SPDA Franklin France",
// //     brand: "Franklin France",
// //     power: "Class I · II · III",
// //     tag: "SPDA",
// //     desc: "Proteção atmosférica completa. Conformidade NA 33:2014 e IEC 62305.",
// //     badge: null,
// //   },
// //   {
// //     id: "spda-pararaios",
// //     category: "Proteção SPDA",
// //     name: "Para-Raios ESE",
// //     brand: "Franklin France",
// //     power: "R=45–107 m",
// //     tag: "ESE",
// //     desc: "Para-raios de ionização com antecipação. Protege raio de até 107 metros.",
// //     badge: null,
// //   },
// //   {
// //     id: "spda-descargadores",
// //     category: "Proteção SPDA",
// //     name: "Descarregadores de Sobretensão",
// //     brand: "Legrand",
// //     power: "Tipo 1 · 2 · 3",
// //     tag: "Proteção",
// //     desc: "Proteção contra surtos elétricos para painéis e equipamentos críticos.",
// //     badge: null,
// //   },
// //   // ILUMINAÇÃO
// //   {
// //     id: "led-industrial",
// //     category: "Iluminação",
// //     name: "Iluminação LED Industrial",
// //     brand: "Legrand",
// //     power: "50–500 W",
// //     tag: "Industrial",
// //     desc: "Luminárias de alta eficiência para armazéns, fábricas e espaços industriais.",
// //     badge: null,
// //   },
// //   {
// //     id: "led-exterior",
// //     category: "Iluminação",
// //     name: "Iluminação LED Exterior",
// //     brand: "Legrand",
// //     power: "30–200 W",
// //     tag: "Exterior",
// //     desc: "Postes e projetores LED para vias públicas, parques e áreas exteriores.",
// //     badge: null,
// //   },
// // ];

// // const CATEGORIES = ["Todos", "Solar", "Armazenamento", "Quadros BT", "UPS", "Postos MT", "Mobilidade Elétrica", "Proteção SPDA", "Iluminação"];
// // const BRANDS_FILTER = ["Todas as Marcas", "Huawei FusionSolar", "EcoFlow", "Legrand", "Salicru", "Socomec", "Toshiba T&D", "Franklin France", "Circutor", "Tesla", "Nextracker + SMA", "Siemens", "Huawei"];
// // const PER_PAGE = 8;

// // /* ─────────────────────────────────────────────
// //    ICONS per category
// // ───────────────────────────────────────────── */
// // function CategoryIcon({ cat, active }: { cat: string; active: boolean }) {
// //   const c = active ? "#fff" : "#095b66";
// //   const size = 16;
// //   const icons: Record<string, React.ReactElement> = {
// //     "Solar": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" fill={c}/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke={c} strokeWidth="1.8" strokeLinecap="round"/></svg>,
// //     "Armazenamento": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="7" y="3" width="10" height="18" rx="2" stroke={c} strokeWidth="1.8"/><rect x="9" y="6" width="6" height="3" rx="1" fill={c}/><path d="M10 21h4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/></svg>,
// //     "Quadros BT": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke={c} strokeWidth="1.8"/><rect x="6" y="6" width="12" height="3" rx="1" fill={c} opacity=".8"/><circle cx="8" cy="14" r="2" fill={c}/><circle cx="12" cy="14" r="2" fill={c} opacity=".5"/><circle cx="16" cy="14" r="2" fill={c} opacity=".3"/></svg>,
// //     "UPS": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="12" rx="2" stroke={c} strokeWidth="1.8"/><path d="M13 10l-4 5h5l-3 4" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
// //     "Postos MT": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="5" y="9" width="14" height="11" rx="2" stroke={c} strokeWidth="1.8"/><path d="M12 3v6" stroke={c} strokeWidth="1.8" strokeLinecap="round"/><path d="M8 3h8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/><path d="M8 6h8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
// //     "Mobilidade Elétrica": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="2" y="9" width="20" height="10" rx="4" stroke={c} strokeWidth="1.8"/><circle cx="7" cy="21" r="2" fill={c}/><circle cx="17" cy="21" r="2" fill={c}/><path d="M5 13h5l2 3h8" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 7v4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/><path d="M15 9h4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
// //     "Proteção SPDA": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 2l2 5 5 .7-3.6 3.5.8 5L12 13.6l-4.2 2.6.8-5L5 7.7l5-.7z" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/><path d="M8 18l-3 5M16 18l3 5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
// //     "Iluminação": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9 21h6M12 3a6 6 0 0 1 4 10.5V17H8v-3.5A6 6 0 0 1 12 3z" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
// //     "Todos": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" fill={c}/><rect x="14" y="3" width="7" height="7" rx="1.5" fill={c} opacity=".6"/><rect x="3" y="14" width="7" height="7" rx="1.5" fill={c} opacity=".6"/><rect x="14" y="14" width="7" height="7" rx="1.5" fill={c} opacity=".3"/></svg>,
// //   };
// //   return icons[cat] || icons["Todos"];
// // }

// // /* ─────────────────────────────────────────────
// //    PRODUCT CARD
// // ───────────────────────────────────────────── */
// // const CAT_COLORS: Record<string, { bg: string; dot: string }> = {
// //   "Solar":              { bg: "#e8f7f9", dot: "#095b66" },
// //   "Armazenamento":      { bg: "#e6f5f7", dot: "#0a7a89" },
// //   "Quadros BT":         { bg: "#e5f4f6", dot: "#064e58" },
// //   "UPS":                { bg: "#e8f7f9", dot: "#095b66" },
// //   "Postos MT":          { bg: "#e6f5f7", dot: "#0a7a89" },
// //   "Mobilidade Elétrica":{ bg: "#e5f4f6", dot: "#064e58" },
// //   "Proteção SPDA":      { bg: "#e8f7f9", dot: "#095b66" },
// //   "Iluminação":         { bg: "#e6f5f7", dot: "#0a7a89" },
// // };

// // function ProductCard({ p, index }: { p: typeof ALL_PRODUCTS[0]; index: number }) {
// //   const col = CAT_COLORS[p.category] || { bg: "#e8f7f9", dot: "#095b66" };
// //   return (
// //     <div style={{
// //       background: "#fff",
// //       border: "1.5px solid #dde8ea",
// //       borderRadius: 16,
// //       padding: "24px",
// //       display: "flex",
// //       flexDirection: "column",
// //       gap: 0,
// //       cursor: "pointer",
// //       transition: "all .25s",
// //       position: "relative",
// //       animation: `cardIn .35s ${index * 0.04}s both ease-out`,
// //     }}
// //       onMouseEnter={e => {
// //         (e.currentTarget as HTMLDivElement).style.borderColor = "#095b66";
// //         (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(9,91,102,.12)";
// //         (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
// //       }}
// //       onMouseLeave={e => {
// //         (e.currentTarget as HTMLDivElement).style.borderColor = "#dde8ea";
// //         (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
// //         (e.currentTarget as HTMLDivElement).style.transform = "none";
// //       }}
// //     >
// //       {/* Badge */}
// //       {p.badge && (
// //         <div style={{
// //           position: "absolute", top: 16, right: 16,
// //           background: p.badge === "Novo" ? "#095b66" : p.badge === "Popular" ? "#0a7a89" : "#064e58",
// //           color: "#fff", fontSize: 9, fontWeight: 800, letterSpacing: ".1em",
// //           textTransform: "uppercase", borderRadius: 99, padding: "3px 9px",
// //         }}>{p.badge}</div>
// //       )}

// //       {/* Icon area */}
// //       <div style={{
// //         width: 52, height: 52, borderRadius: 12,
// //         background: col.bg,
// //         display: "flex", alignItems: "center", justifyContent: "center",
// //         marginBottom: 16, flexShrink: 0,
// //       }}>
// //         <CategoryIcon cat={p.category} active={false} />
// //       </div>

// //       {/* Category */}
// //       <div style={{ fontSize: 10, fontWeight: 700, color: col.dot, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>
// //         {p.category}
// //       </div>

// //       {/* Name */}
// //       <h3 style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e", lineHeight: 1.35, marginBottom: 8 }}>
// //         {p.name}
// //       </h3>

// //       {/* Desc */}
// //       <p style={{ fontSize: 12.5, color: "#5a8285", lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
// //         {p.desc}
// //       </p>

// //       {/* Footer */}
// //       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 14, borderTop: "1px solid #edf3f4" }}>
// //         <div>
// //           <div style={{ fontSize: 10, color: "#9bbbbe", fontWeight: 600, marginBottom: 2 }}>Potência</div>
// //           <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66" }}>{p.power}</div>
// //         </div>
// //         <div style={{ textAlign: "right" }}>
// //           <div style={{ fontSize: 10, color: "#9bbbbe", fontWeight: 600, marginBottom: 2 }}>Marca</div>
// //           <div style={{ fontSize: 11, fontWeight: 700, color: "#1a2c2e" }}>{p.brand}</div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ─────────────────────────────────────────────
// //    FIXED WORLD MAP — proper Robinson-like paths
// // ───────────────────────────────────────────── */
// // type PresencePoint = { name: string; lon: number; lat: number; main: boolean; detail: string };

// // function toMerc(lon: number, lat: number, W = 1000, H = 520): [number, number] {
// //   const x = (lon + 180) * (W / 360);
// //   const latR = (lat * Math.PI) / 180;
// //   const mercN = Math.log(Math.tan(Math.PI / 4 + latR / 2));
// //   const y = H / 2 - (H * mercN) / (2 * Math.PI);
// //   return [+x.toFixed(1), +y.toFixed(1)];
// // }

// // const PRESENCE = [
// //   { name: "Angola · Luanda",     lon: 13.23,  lat: -8.84, main: true,  detail: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362" },
// //   { name: "Portugal · Lisboa",   lon: -9.14,  lat: 38.72, main: true,  detail: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
// //   { name: "Cabo Verde · Praia",  lon: -23.51, lat: 14.93, main: false, detail: "Presença comercial activa" },
// //   { name: "São Tomé e Príncipe", lon:  6.61,  lat:  0.33, main: false, detail: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
// // ];

// // /* Corrected, much larger continent paths for 1000×520 Mercator */
// // const CONTINENTS = {
// //   NORTH_AMERICA: `M 90,90 L 105,80 L 125,75 L 148,78 L 165,88 L 178,100 L 188,118 L 192,135 L 188,155 L 175,170 L 160,182 L 148,195 L 140,210 L 132,222 L 125,232 L 118,238 L 110,235 L 100,228 L 92,215 L 86,200 L 82,185 L 80,168 L 82,150 L 86,132 L 90,115 L 90,90 Z M 82,150 L 72,142 L 58,138 L 48,143 L 46,156 L 54,164 L 68,162 L 78,156 Z M 178,100 L 190,90 L 205,85 L 218,90 L 220,102 L 210,112 L 196,110 Z`,
// //   ALASKA: `M 32,95 L 48,85 L 65,82 L 78,90 L 82,105 L 76,115 L 60,118 L 44,115 L 34,106 Z M 8,100 L 25,92 L 35,96 L 32,108 L 18,112 Z`,
// //   GREENLAND: `M 268,25 L 295,18 L 322,20 L 340,35 L 335,58 L 315,72 L 292,78 L 270,72 L 255,55 L 258,36 Z`,
// //   CENTRAL_AMERICA: `M 140,210 L 155,215 L 165,228 L 162,242 L 150,250 L 138,248 L 130,238 L 130,225 Z`,
// //   CARIBBEAN: `M 162,195 L 178,190 L 188,198 L 182,208 L 165,210 Z M 192,202 L 205,198 L 212,205 L 205,212 Z`,
// //   SOUTH_AMERICA: `M 165,228 L 185,222 L 210,225 L 232,235 L 248,252 L 255,272 L 252,295 L 245,318 L 235,345 L 220,370 L 205,390 L 192,405 L 178,408 L 162,400 L 148,382 L 138,358 L 132,332 L 130,305 L 132,278 L 138,255 L 145,240 L 152,232 Z`,
// //   ICELAND: `M 375,62 L 395,55 L 415,58 L 418,72 L 405,80 L 386,78 Z`,
// //   BRITISH_ISLES: `M 420,100 L 432,92 L 442,96 L 440,110 L 428,114 Z M 412,88 L 425,80 L 432,86 L 428,96 L 416,98 Z`,
// //   SCANDINAVIA: `M 450,62 L 468,52 L 488,48 L 508,54 L 515,68 L 505,85 L 490,96 L 475,100 L 462,96 L 450,85 Z M 508,54 L 528,45 L 548,48 L 552,62 L 542,75 L 528,78 L 515,72 Z M 468,95 L 480,100 L 478,115 L 466,118 L 458,110 Z`,
// //   EUROPE: `M 432,110 L 455,104 L 480,100 L 502,105 L 520,112 L 530,125 L 528,140 L 515,152 L 498,158 L 482,160 L 465,155 L 450,148 L 440,138 L 432,125 Z M 480,100 L 502,92 L 522,95 L 530,108 L 518,115 L 500,112 Z M 530,125 L 548,120 L 560,128 L 556,142 L 542,148 L 532,142 Z M 450,148 L 462,155 L 458,168 L 446,170 L 440,160 Z M 465,155 L 478,162 L 474,175 L 462,175 L 458,165 Z`,
// //   IBERIA: `M 420,135 L 442,130 L 462,133 L 466,148 L 460,162 L 444,168 L 428,165 L 418,155 L 416,143 Z`,
// //   AFRICA: `M 448,178 L 470,172 L 498,172 L 520,178 L 540,192 L 552,208 L 558,228 L 555,250 L 548,272 L 545,296 L 548,322 L 542,348 L 528,372 L 510,392 L 490,405 L 470,408 L 450,400 L 434,382 L 422,358 L 415,332 L 415,305 L 418,278 L 424,252 L 428,228 L 425,205 L 428,185 L 435,178 Z M 428,240 L 415,245 L 405,256 L 406,268 L 416,272 L 428,265 Z`,
// //   MADAGASCAR: `M 555,318 L 565,305 L 575,308 L 578,328 L 570,348 L 558,352 L 550,338 Z`,
// //   MIDDLE_EAST: `M 548,175 L 572,168 L 598,170 L 615,182 L 618,200 L 608,218 L 588,228 L 565,232 L 548,222 L 538,208 L 540,190 Z`,
// //   TURKEY: `M 520,145 L 548,138 L 575,140 L 590,152 L 585,168 L 565,175 L 540,178 L 520,168 L 510,155 Z`,
// //   RUSSIA_SIBERIA: `M 490,45 L 548,35 L 615,30 L 682,32 L 745,38 L 800,45 L 848,55 L 878,68 L 895,85 L 888,105 L 868,118 L 840,125 L 808,128 L 775,125 L 742,118 L 712,112 L 680,110 L 648,112 L 618,118 L 592,125 L 572,132 L 548,138 L 520,132 L 500,118 L 488,102 L 488,80 Z`,
// //   CENTRAL_ASIA: `M 570,132 L 612,125 L 648,128 L 672,140 L 678,158 L 662,172 L 635,178 L 608,175 L 585,165 L 572,150 Z`,
// //   CHINA_EAST_ASIA: `M 648,105 L 695,98 L 742,100 L 778,112 L 798,128 L 792,148 L 775,162 L 748,170 L 718,172 L 688,168 L 660,158 L 645,142 L 642,125 Z`,
// //   INDIA: `M 610,168 L 638,162 L 658,168 L 672,182 L 678,202 L 670,225 L 652,238 L 632,245 L 610,242 L 592,232 L 582,212 L 585,192 L 595,178 Z`,
// //   SE_ASIA: `M 705,168 L 738,162 L 760,170 L 772,188 L 762,208 L 738,215 L 715,210 L 698,195 Z M 762,172 L 785,162 L 802,170 L 805,188 L 790,198 L 770,195 Z M 718,210 L 745,218 L 755,235 L 742,248 L 722,248 L 710,232 Z`,
// //   JAPAN: `M 815,108 L 830,100 L 842,108 L 838,125 L 822,130 Z M 835,128 L 852,118 L 865,128 L 858,148 L 842,152 Z`,
// //   KOREA: `M 792,118 L 808,112 L 818,120 L 812,138 L 798,142 Z`,
// //   AUSTRALIA: `M 745,320 L 778,305 L 818,302 L 855,312 L 878,332 L 885,358 L 878,385 L 858,405 L 830,415 L 800,418 L 770,408 L 748,390 L 735,365 L 732,340 Z M 878,332 L 900,325 L 915,338 L 910,355 L 892,358 Z`,
// //   NEW_ZEALAND: `M 898,395 L 912,382 L 922,392 L 915,410 L 900,412 Z M 905,410 L 918,398 L 928,410 L 920,428 L 908,425 Z`,
// //   CAPE_VERDE: `M 390,230 L 396,224 L 402,228 L 400,236 L 392,238 Z`,
// //   SAO_TOME: `M 475,264 L 480,258 L 486,262 L 484,270 L 476,272 Z`,
// // };

// // export function WorldMapFixed({ points, activePoint, onHover }: {
// //   points: PresencePoint[];
// //   activePoint: number | null;
// //   onHover: (i: number) => void;
// // }) {
// //   const dots = points.map(p => {
// //     const [cx, cy] = toMerc(p.lon, p.lat);
// //     return { ...p, cx, cy };
// //   });

// //   return (
// //     <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
// //       <svg viewBox="0 0 1000 520" preserveAspectRatio="xMidYMid meet"
// //         style={{ width: "100%", height: "auto", display: "block" }}>
// //         <rect width="1000" height="520" fill="#dff0f3" rx="8"/>
// //         {/* Grid lines subtle */}
// //         <line x1="0" y1="260" x2="1000" y2="260" stroke="#c5e5ea" strokeWidth="0.5" strokeDasharray="4 6"/>
// //         <line x1="500" y1="0" x2="500" y2="520" stroke="#c5e5ea" strokeWidth="0.5" strokeDasharray="4 6"/>

// //         {/* All continents */}
// //         {Object.entries(CONTINENTS).map(([k, d]) => (
// //           <path key={k} d={d}
// //             fill={["AFRICA","IBERIA","CAPE_VERDE","SAO_TOME"].includes(k) ? "#8ecdd6" : "#b0d8e0"}
// //             stroke="#7ab8c0" strokeWidth="0.8" strokeLinejoin="round" strokeLinecap="round"
// //           />
// //         ))}

// //         {/* Connection lines */}
// //         {dots.filter(p => p.main).flatMap((p, i) =>
// //           dots.filter((q, j) => q.main && j > i).map((q, j) => (
// //             <line key={`ln-${i}-${j}`}
// //               x1={p.cx} y1={p.cy} x2={q.cx} y2={q.cy}
// //               stroke="#095b66" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.6"
// //             />
// //           ))
// //         )}

// //         {/* Dots */}
// //         {dots.map((p, i) => (
// //           <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
// //             {p.main && (
// //               <>
// //                 <circle cx={p.cx} cy={p.cy} r="5" fill="#095b66" opacity="0.15">
// //                   <animate attributeName="r" values="8;22;8" dur="3s" repeatCount="indefinite"/>
// //                   <animate attributeName="opacity" values="0.18;0;0.18" dur="3s" repeatCount="indefinite"/>
// //                 </circle>
// //                 <circle cx={p.cx} cy={p.cy} r="11" fill="#095b66" opacity="0.1"/>
// //               </>
// //             )}
// //             <circle cx={p.cx} cy={p.cy}
// //               r={activePoint === i ? 10 : 6.5}
// //               fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#4db5bf")}
// //               stroke="#fff" strokeWidth="2.5"
// //               style={{ transition: "r .2s, fill .2s" }}
// //             />
// //           </g>
// //         ))}
// //       </svg>

// //       {activePoint !== null && (() => {
// //         const d = dots[activePoint];
// //         const pctX = (d.cx / 1000) * 100;
// //         const pctY = (d.cy / 520) * 100;
// //         return (
// //           <div style={{
// //             position: "absolute",
// //             left: `${pctX}%`, top: `${pctY}%`,
// //             transform: `translate(${pctX > 60 ? "-108%" : "14px"}, ${pctY > 60 ? "-118%" : "14px"})`,
// //             background: "#fff", border: "1.5px solid #b8dde2", borderRadius: 10,
// //             padding: "12px 16px", minWidth: 225,
// //             boxShadow: "0 10px 36px rgba(9,91,102,.2)", zIndex: 10, pointerEvents: "none",
// //           }}>
// //             <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 5 }}>{d.name}</div>
// //             <div style={{ fontSize: 11.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{d.detail}</div>
// //           </div>
// //         );
// //       })()}
// //     </div>
// //   );
// // }

// // /* ─────────────────────────────────────────────
// //    MAIN PAGE
// // ───────────────────────────────────────────── */
// // export default function ProdutosPage() {
// //   const [search, setSearch] = useState("");
// //   const [category, setCategory] = useState("Todos");
// //   const [brand, setBrand] = useState("Todas as Marcas");
// //   const [page, setPage] = useState(1);

// //   const filtered = useMemo(() => {
// //     return ALL_PRODUCTS.filter(p => {
// //       const matchCat = category === "Todos" || p.category === category;
// //       const matchBrand = brand === "Todas as Marcas" || p.brand === brand;
// //       const q = search.toLowerCase();
// //       const matchSearch = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
// //       return matchCat && matchBrand && matchSearch;
// //     });
// //   }, [search, category, brand]);

// //   const totalPages = Math.ceil(filtered.length / PER_PAGE);
// //   const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

// //   const handleFilter = (cat: string) => {
// //     setCategory(cat);
// //     setPage(1);
// //   };

// //   return (
// //     <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", minHeight: "100vh" }}>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
// //         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// //         a { text-decoration: none; color: inherit; }
// //         button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
// //         @keyframes cardIn { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform:none; } }
// //         .filter-chip { padding: 8px 16px; border-radius: 99px; border: 1.5px solid #dde8ea; background: #fff; font-size: 12px; font-weight: 700; color: #4a7275; cursor: pointer; transition: all .2s; display: flex; align-items: center; gap: 7px; white-space: nowrap; }
// //         .filter-chip:hover { border-color: #095b66; color: #095b66; background: #f0f9fa; }
// //         .filter-chip.active { background: #095b66; border-color: #095b66; color: #fff; }
// //         .search-input { width: 100%; background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; color: #1a2c2e; padding: 12px 16px 12px 44px; font-family: 'Montserrat',sans-serif; font-size: 13px; font-weight: 500; outline: none; transition: border-color .2s; }
// //         .search-input:focus { border-color: #095b66; background: #fff; box-shadow: 0 0 0 3px rgba(9,91,102,.08); }
// //         .search-input::placeholder { color: #9bbbbe; }
// //         .select-filter { background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; color: #1a2c2e; padding: 11px 38px 11px 14px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 600; outline: none; transition: border-color .2s; appearance: none; cursor: pointer; }
// //         .select-filter:focus { border-color: #095b66; }
// //         .page-btn { width: 36px; height: 36px; border-radius: 8px; border: 1.5px solid #dde8ea; background: #fff; font-size: 13px; font-weight: 700; color: #4a7275; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all .2s; }
// //         .page-btn:hover { border-color: #095b66; color: #095b66; }
// //         .page-btn.active { background: #095b66; border-color: #095b66; color: #fff; }
// //         .page-btn:disabled { opacity: .35; pointer-events: none; }
// //         .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
// //         .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); }
// //         .nav-a { font-size: 11.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; color: #1a2c2e; transition: opacity .2s; }
// //         .nav-a:hover { opacity: .6; }
// //         @media (max-width: 900px) {
// //           .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
// //           .sp { padding-left: 22px !important; padding-right: 22px !important; }
// //         }
// //         @media (max-width: 540px) {
// //           .products-grid { grid-template-columns: 1fr !important; }
// //           .filters-scroll { overflow-x: auto; padding-bottom: 8px; }
// //         }
// //       `}</style>

// //       {/* ── NAVBAR ── */}
// //       <header style={{
// //         position: "sticky", top: 0, zIndex: 100,
// //         height: 64, background: "rgba(255,255,255,.97)",
// //         backdropFilter: "blur(16px)",
// //         boxShadow: "0 1px 0 rgba(9,91,102,.08)",
// //         display: "flex", alignItems: "center", padding: "0 48px", gap: 32,
// //       }}>
// //         <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9 }}>
// //           <div style={{ width: 34, height: 34, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center" }}>
// //             <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
// //               <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" strokeLinejoin="round"/>
// //             </svg>
// //           </div>
// //           <span style={{ fontWeight: 900, fontSize: 16, color: "#095b66" }}>
// //             Multi<span style={{ color: "#0a7a89" }}>energia</span>
// //           </span>
// //         </Link>
// //         <nav style={{ display: "flex", gap: 32, marginLeft: "auto" }}>
// //           <Link href="/#produtos" className="nav-a">Produtos</Link>
// //           <Link href="/#servicos" className="nav-a">Serviços</Link>
// //           <Link href="/#presenca" className="nav-a">Presença</Link>
// //           <Link href="/#contacto" className="nav-a">Contacto</Link>
// //         </nav>
// //         <Link href="/#contacto" className="btn-teal" style={{ fontSize: 11, padding: "9px 20px" }}>Orçamento</Link>
// //       </header>

// //       {/* ── HERO BAND ── */}
// //       <div style={{ background: "linear-gradient(135deg, #095b66 0%, #0a7a89 100%)", padding: "52px 80px 48px", position: "relative", overflow: "hidden" }}>
// //         <div style={{ position: "absolute", right: -40, top: -40, width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,.05)" }}/>
// //         <div style={{ position: "absolute", right: 80, bottom: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,.04)" }}/>
// //         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
// //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
// //             <Link href="/" style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.5)", letterSpacing: ".06em", textTransform: "uppercase" }}>Início</Link>
// //             <span style={{ color: "rgba(255,255,255,.3)", fontSize: 12 }}>›</span>
// //             <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.85)", letterSpacing: ".06em", textTransform: "uppercase" }}>Todos os Produtos</span>
// //           </div>
// //           <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: 12 }}>
// //             Catálogo Completo
// //           </h1>
// //           <p style={{ fontSize: 15, color: "rgba(255,255,255,.65)", maxWidth: 480, lineHeight: 1.75 }}>
// //             {ALL_PRODUCTS.length} produtos de energia solar, armazenamento, proteção elétrica e mobilidade.
// //           </p>
// //         </div>
// //       </div>

// //       {/* ── MAIN ── */}
// //       <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 80px 96px" }}>

// //         {/* Search + Brand filter row */}
// //         <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
// //           {/* Search */}
// //           <div style={{ position: "relative", flex: "1 1 280px", minWidth: 220 }}>
// //             <svg viewBox="0 0 24 24" fill="none" width="16" height="16"
// //               style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
// //               <circle cx="11" cy="11" r="7" stroke="#9bbbbe" strokeWidth="2"/>
// //               <path d="M16.5 16.5l4 4" stroke="#9bbbbe" strokeWidth="2" strokeLinecap="round"/>
// //             </svg>
// //             <input className="search-input" placeholder="Pesquisar produtos, marcas…"
// //               value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}/>
// //           </div>

// //           {/* Brand select */}
// //           <div style={{ position: "relative" }}>
// //             <select className="select-filter" value={brand} onChange={e => { setBrand(e.target.value); setPage(1); }}>
// //               {BRANDS_FILTER.map(b => <option key={b}>{b}</option>)}
// //             </select>
// //             <svg viewBox="0 0 24 24" fill="none" width="14" height="14"
// //               style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
// //               <path d="M6 9l6 6 6-6" stroke="#6a9598" strokeWidth="2" strokeLinecap="round"/>
// //             </svg>
// //           </div>

// //           {/* Result count */}
// //           <div style={{ fontSize: 12, fontWeight: 600, color: "#9bbbbe", marginLeft: "auto" }}>
// //             {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
// //           </div>
// //         </div>

// //         {/* Category filters */}
// //         <div className="filters-scroll" style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
// //           {CATEGORIES.map(cat => (
// //             <button key={cat} className={`filter-chip ${category === cat ? "active" : ""}`}
// //               onClick={() => handleFilter(cat)}>
// //               <CategoryIcon cat={cat} active={category === cat} />
// //               {cat}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Products grid */}
// //         {paginated.length > 0 ? (
// //           <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginBottom: 44 }}>
// //             {paginated.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
// //           </div>
// //         ) : (
// //           <div style={{ textAlign: "center", padding: "64px 0", color: "#9bbbbe" }}>
// //             <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
// //             <div style={{ fontSize: 15, fontWeight: 700, color: "#4a7275", marginBottom: 6 }}>Nenhum produto encontrado</div>
// //             <div style={{ fontSize: 13 }}>Tente ajustar os filtros ou a pesquisa</div>
// //           </div>
// //         )}

// //         {/* Pagination */}
// //         {totalPages > 1 && (
// //           <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
// //             <button className="page-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>
// //               <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
// //             </button>
// //             {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
// //               <button key={n} className={`page-btn ${page === n ? "active" : ""}`} onClick={() => setPage(n)}>{n}</button>
// //             ))}
// //             <button className="page-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
// //               <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
// //             </button>
// //           </div>
// //         )}

// //         {/* CTA */}
// //         <div style={{ marginTop: 72, background: "linear-gradient(135deg, #095b66, #0a7a89)", borderRadius: 20, padding: "44px 52px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
// //           <div>
// //             <h2 style={{ fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 900, color: "#fff", marginBottom: 8 }}>
// //               Não encontrou o que procura?
// //             </h2>
// //             <p style={{ fontSize: 14, color: "rgba(255,255,255,.65)", maxWidth: 400, lineHeight: 1.75 }}>
// //               A nossa equipa técnica pode dimensionar uma solução personalizada para o seu projeto.
// //             </p>
// //           </div>
// //           <div style={{ display: "flex", gap: 12 }}>
// //             <Link href="/#contacto" style={{ background: "#fff", color: "#095b66", border: "none", borderRadius: 6, padding: "13px 28px", fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
// //               Fale Connosco
// //             </Link>
// //             <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer"
// //               style={{ background: "rgba(255,255,255,.12)", color: "#fff", border: "2px solid rgba(255,255,255,.35)", borderRadius: 6, padding: "11px 22px", fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
// //               💬 WhatsApp
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Footer */}
// //       <footer style={{ background: "#06161a", padding: "28px 80px" }}>
// //         <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
// //           <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>© 2025 Multienergia. Todos os direitos reservados.</p>
// //           <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>Alvará IRCOP nº 982/CCOP/IRCOP/SC/2025 · 5ª Classe</p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }




// "use client";
// import React, { useState, useMemo, useEffect } from "react";
// import Link from "next/link";

// /* ─────────────────────────────────────────────
//    ALL PRODUCTS DATA
// ───────────────────────────────────────────── */
// const ALL_PRODUCTS = [
//   // SOLAR
//   {
//     id: "solar-residential",
//     category: "Solar",
//     name: "Sistema Solar Residencial",
//     brand: "Huawei FusionSolar",
//     power: "3–15 kW",
//     tag: "Residencial",
//     desc: "Kit completo para habitação. Painel + inversor + monitorização remota.",
//     badge: null,
//   },
//   {
//     id: "solar-industrial",
//     category: "Solar",
//     name: "Sistema Solar Industrial",
//     brand: "Huawei FusionSolar",
//     power: "50–500 kW",
//     tag: "Industrial",
//     desc: "Solução de grande escala para fábricas, armazéns e instalações industriais.",
//     badge: "Popular",
//   },
//   {
//     id: "solar-utility",
//     category: "Solar",
//     name: "Central Fotovoltaica",
//     brand: "Nextracker + SMA",
//     power: "> 1 MW",
//     tag: "Utility",
//     desc: "Centrais de produção fotovoltaica com rastreamento solar automático.",
//     badge: null,
//   },
//   {
//     id: "solar-carport",
//     category: "Solar",
//     name: "Carport Solar",
//     brand: "Siemens",
//     power: "10–100 kW",
//     tag: "Carport",
//     desc: "Cobertura para parques de estacionamento com produção de energia integrada.",
//     badge: null,
//   },
//   // STORAGE
//   {
//     id: "ecoflow-powerocean",
//     category: "Armazenamento",
//     name: "EcoFlow PowerOcean",
//     brand: "EcoFlow",
//     power: "5–29 kW / 45 kWh",
//     tag: "Híbrido",
//     desc: "Inversor híbrido trifásico com armazenamento LFP expansível. Plug & play.",
//     badge: "Novo",
//   },
//   {
//     id: "bateria-lfp",
//     category: "Armazenamento",
//     name: "Bateria LFP Expansível",
//     brand: "EcoFlow",
//     power: "5–45 kWh",
//     tag: "Bateria",
//     desc: "Módulos de bateria de lítio ferro-fosfato com 15 anos de garantia.",
//     badge: null,
//   },
//   // QUADROS
//   {
//     id: "quadro-bt-standard",
//     category: "Quadros BT",
//     name: "Quadro Elétrico BT Standard",
//     brand: "Legrand",
//     power: "Até 630 A",
//     tag: "Standard",
//     desc: "Quadros modulares de baixa tensão fabricados em Luanda. Forma 1 e 2.",
//     badge: null,
//   },
//   {
//     id: "quadro-bt-industrial",
//     category: "Quadros BT",
//     name: "Quadro Elétrico BT Industrial",
//     brand: "Legrand",
//     power: "Até 6300 A",
//     tag: "Industrial",
//     desc: "Soluções à medida para instalações industriais. IEC 61439. Forma 3 e 4.",
//     badge: "Popular",
//   },
//   {
//     id: "quadro-cgd",
//     category: "Quadros BT",
//     name: "Quadro Geral de Distribuição",
//     brand: "Legrand",
//     power: "Até 3200 A",
//     tag: "Distribuição",
//     desc: "CGD para edifícios de grande porte, hotéis e centros comerciais.",
//     badge: null,
//   },
//   // UPS
//   {
//     id: "ups-salicru-small",
//     category: "UPS",
//     name: "UPS Salicru SLC Twin RT",
//     brand: "Salicru",
//     power: "10–120 KVA",
//     tag: "Rack",
//     desc: "UPS online dupla conversão para data centers e salas de servidores.",
//     badge: null,
//   },
//   {
//     id: "ups-salicru-large",
//     category: "UPS",
//     name: "UPS Salicru SLC Plus",
//     brand: "Salicru",
//     power: "120–800 KVA",
//     tag: "Industrial",
//     desc: "Proteção crítica para hospitais, telecomunicações e instalações industriais.",
//     badge: "Popular",
//   },
//   {
//     id: "ups-socomec",
//     category: "UPS",
//     name: "Socomec MODULYS GP",
//     brand: "Socomec",
//     power: "200–4800 KVA",
//     tag: "Modular",
//     desc: "Sistema UPS modular de alta capacidade. Escalável e redundante N+1.",
//     badge: null,
//   },
//   {
//     id: "estabilizador",
//     category: "UPS",
//     name: "Estabilizador de Tensão",
//     brand: "Salicru",
//     power: "1–500 KVA",
//     tag: "Estabilizador",
//     desc: "Correção automática de tensão para equipamentos sensíveis.",
//     badge: null,
//   },
//   // POSTOS MT
//   {
//     id: "posto-toshiba-500",
//     category: "Postos MT",
//     name: "Posto de Transformação 500 KVA",
//     brand: "Toshiba T&D",
//     power: "500 KVA · 10–30 kV",
//     tag: "Compacto",
//     desc: "Posto compacto pré-montado. Instalação rápida. IP66. Class AB.",
//     badge: null,
//   },
//   {
//     id: "posto-toshiba-1000",
//     category: "Postos MT",
//     name: "Posto de Transformação 1000 KVA",
//     brand: "Toshiba T&D",
//     power: "1000 KVA · 10–30 kV",
//     tag: "Compacto",
//     desc: "TCSU pré-fabricado para ligação de média tensão. Plug & play.",
//     badge: "Popular",
//   },
//   {
//     id: "posto-toshiba-2000",
//     category: "Postos MT",
//     name: "Posto de Transformação 2000 KVA",
//     brand: "Toshiba T&D",
//     power: "2000 KVA · 10–30 kV",
//     tag: "Industrial",
//     desc: "Alta potência para instalações industriais de grande porte.",
//     badge: null,
//   },
//   // MOBILIDADE
//   {
//     id: "ve-domest",
//     category: "Mobilidade Elétrica",
//     name: "Carregador VE Doméstico",
//     brand: "Huawei",
//     power: "7–22 kW",
//     tag: "Doméstico",
//     desc: "Posto de carregamento monofásico/trifásico para habitação e condomínios.",
//     badge: null,
//   },
//   {
//     id: "ve-publico",
//     category: "Mobilidade Elétrica",
//     name: "Carregador VE Via Pública",
//     brand: "Circutor",
//     power: "22–50 kW",
//     tag: "Público",
//     desc: "Estação de carregamento rápido para espaços públicos e empresas.",
//     badge: "Novo",
//   },
//   {
//     id: "ve-tesla",
//     category: "Mobilidade Elétrica",
//     name: "Tesla Wall Connector",
//     brand: "Tesla",
//     power: "11–22 kW",
//     tag: "Premium",
//     desc: "Solução de carregamento premium para residências e frotas Tesla.",
//     badge: null,
//   },
//   // SPDA
//   {
//     id: "spda-franklin",
//     category: "Proteção SPDA",
//     name: "Sistema SPDA Franklin France",
//     brand: "Franklin France",
//     power: "Class I · II · III",
//     tag: "SPDA",
//     desc: "Proteção atmosférica completa. Conformidade NA 33:2014 e IEC 62305.",
//     badge: null,
//   },
//   {
//     id: "spda-pararaios",
//     category: "Proteção SPDA",
//     name: "Para-Raios ESE",
//     brand: "Franklin France",
//     power: "R=45–107 m",
//     tag: "ESE",
//     desc: "Para-raios de ionização com antecipação. Protege raio de até 107 metros.",
//     badge: null,
//   },
//   {
//     id: "spda-descargadores",
//     category: "Proteção SPDA",
//     name: "Descarregadores de Sobretensão",
//     brand: "Legrand",
//     power: "Tipo 1 · 2 · 3",
//     tag: "Proteção",
//     desc: "Proteção contra surtos elétricos para painéis e equipamentos críticos.",
//     badge: null,
//   },
//   // ILUMINAÇÃO
//   {
//     id: "led-industrial",
//     category: "Iluminação",
//     name: "Iluminação LED Industrial",
//     brand: "Legrand",
//     power: "50–500 W",
//     tag: "Industrial",
//     desc: "Luminárias de alta eficiência para armazéns, fábricas e espaços industriais.",
//     badge: null,
//   },
//   {
//     id: "led-exterior",
//     category: "Iluminação",
//     name: "Iluminação LED Exterior",
//     brand: "Legrand",
//     power: "30–200 W",
//     tag: "Exterior",
//     desc: "Postes e projetores LED para vias públicas, parques e áreas exteriores.",
//     badge: null,
//   },
// ];

// const CATEGORIES = ["Todos", "Solar", "Armazenamento", "Quadros BT", "UPS", "Postos MT", "Mobilidade Elétrica", "Proteção SPDA", "Iluminação"];
// const BRANDS_FILTER = ["Todas as Marcas", "Huawei FusionSolar", "EcoFlow", "Legrand", "Salicru", "Socomec", "Toshiba T&D", "Franklin France", "Circutor", "Tesla", "Nextracker + SMA", "Siemens", "Huawei"];
// const PER_PAGE = 8;

// /* ─────────────────────────────────────────────
//    ICONS per category
// ───────────────────────────────────────────── */
// function CategoryIcon({ cat, active }: { cat: string; active: boolean }) {
//   const c = active ? "#fff" : "#095b66";
//   const size = 16;
//   const icons: Record<string, React.ReactElement> = {
//     "Solar": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" fill={c}/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke={c} strokeWidth="1.8" strokeLinecap="round"/></svg>,
//     "Armazenamento": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="7" y="3" width="10" height="18" rx="2" stroke={c} strokeWidth="1.8"/><rect x="9" y="6" width="6" height="3" rx="1" fill={c}/><path d="M10 21h4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/></svg>,
//     "Quadros BT": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke={c} strokeWidth="1.8"/><rect x="6" y="6" width="12" height="3" rx="1" fill={c} opacity=".8"/><circle cx="8" cy="14" r="2" fill={c}/><circle cx="12" cy="14" r="2" fill={c} opacity=".5"/><circle cx="16" cy="14" r="2" fill={c} opacity=".3"/></svg>,
//     "UPS": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="12" rx="2" stroke={c} strokeWidth="1.8"/><path d="M13 10l-4 5h5l-3 4" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
//     "Postos MT": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="5" y="9" width="14" height="11" rx="2" stroke={c} strokeWidth="1.8"/><path d="M12 3v6" stroke={c} strokeWidth="1.8" strokeLinecap="round"/><path d="M8 3h8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/><path d="M8 6h8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
//     "Mobilidade Elétrica": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="2" y="9" width="20" height="10" rx="4" stroke={c} strokeWidth="1.8"/><circle cx="7" cy="21" r="2" fill={c}/><circle cx="17" cy="21" r="2" fill={c}/><path d="M5 13h5l2 3h8" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 7v4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/><path d="M15 9h4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
//     "Proteção SPDA": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 2l2 5 5 .7-3.6 3.5.8 5L12 13.6l-4.2 2.6.8-5L5 7.7l5-.7z" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/><path d="M8 18l-3 5M16 18l3 5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
//     "Iluminação": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9 21h6M12 3a6 6 0 0 1 4 10.5V17H8v-3.5A6 6 0 0 1 12 3z" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
//     "Todos": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" fill={c}/><rect x="14" y="3" width="7" height="7" rx="1.5" fill={c} opacity=".6"/><rect x="3" y="14" width="7" height="7" rx="1.5" fill={c} opacity=".6"/><rect x="14" y="14" width="7" height="7" rx="1.5" fill={c} opacity=".3"/></svg>,
//   };
//   return icons[cat] || icons["Todos"];
// }

// /* ─────────────────────────────────────────────
//    PRODUCT CARD
// ───────────────────────────────────────────── */
// const CAT_COLORS: Record<string, { bg: string; dot: string }> = {
//   "Solar":              { bg: "#e8f7f9", dot: "#095b66" },
//   "Armazenamento":      { bg: "#e6f5f7", dot: "#0a7a89" },
//   "Quadros BT":         { bg: "#e5f4f6", dot: "#064e58" },
//   "UPS":                { bg: "#e8f7f9", dot: "#095b66" },
//   "Postos MT":          { bg: "#e6f5f7", dot: "#0a7a89" },
//   "Mobilidade Elétrica":{ bg: "#e5f4f6", dot: "#064e58" },
//   "Proteção SPDA":      { bg: "#e8f7f9", dot: "#095b66" },
//   "Iluminação":         { bg: "#e6f5f7", dot: "#0a7a89" },
// };

// function ProductCard({ p, index }: { p: typeof ALL_PRODUCTS[0]; index: number }) {
//   const col = CAT_COLORS[p.category] || { bg: "#e8f7f9", dot: "#095b66" };
//   return (
//     <div style={{
//       background: "#fff",
//       border: "1.5px solid #dde8ea",
//       borderRadius: 16,
//       padding: "24px",
//       display: "flex",
//       flexDirection: "column",
//       gap: 0,
//       cursor: "pointer",
//       transition: "all .25s",
//       position: "relative",
//       animation: `cardIn .35s ${index * 0.04}s both ease-out`,
//     }}
//       onMouseEnter={e => {
//         (e.currentTarget as HTMLDivElement).style.borderColor = "#095b66";
//         (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(9,91,102,.12)";
//         (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
//       }}
//       onMouseLeave={e => {
//         (e.currentTarget as HTMLDivElement).style.borderColor = "#dde8ea";
//         (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
//         (e.currentTarget as HTMLDivElement).style.transform = "none";
//       }}
//     >
//       {/* Badge */}
//       {p.badge && (
//         <div style={{
//           position: "absolute", top: 16, right: 16,
//           background: p.badge === "Novo" ? "#095b66" : p.badge === "Popular" ? "#0a7a89" : "#064e58",
//           color: "#fff", fontSize: 9, fontWeight: 800, letterSpacing: ".1em",
//           textTransform: "uppercase", borderRadius: 99, padding: "3px 9px",
//         }}>{p.badge}</div>
//       )}

//       {/* Icon area */}
//       <div style={{
//         width: 52, height: 52, borderRadius: 12,
//         background: col.bg,
//         display: "flex", alignItems: "center", justifyContent: "center",
//         marginBottom: 16, flexShrink: 0,
//       }}>
//         <CategoryIcon cat={p.category} active={false} />
//       </div>

//       {/* Category */}
//       <div style={{ fontSize: 10, fontWeight: 700, color: col.dot, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>
//         {p.category}
//       </div>

//       {/* Name */}
//       <h3 style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e", lineHeight: 1.35, marginBottom: 8 }}>
//         {p.name}
//       </h3>

//       {/* Desc */}
//       <p style={{ fontSize: 12.5, color: "#5a8285", lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
//         {p.desc}
//       </p>

//       {/* Footer */}
//       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 14, borderTop: "1px solid #edf3f4" }}>
//         <div>
//           <div style={{ fontSize: 10, color: "#9bbbbe", fontWeight: 600, marginBottom: 2 }}>Potência</div>
//           <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66" }}>{p.power}</div>
//         </div>
//         <div style={{ textAlign: "right" }}>
//           <div style={{ fontSize: 10, color: "#9bbbbe", fontWeight: 600, marginBottom: 2 }}>Marca</div>
//           <div style={{ fontSize: 11, fontWeight: 700, color: "#1a2c2e" }}>{p.brand}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    FIXED WORLD MAP — proper Robinson-like paths
// ───────────────────────────────────────────── */
// type PresencePoint = { name: string; lon: number; lat: number; main: boolean; detail: string };

// function toMerc(lon: number, lat: number, W = 1000, H = 520): [number, number] {
//   const x = (lon + 180) * (W / 360);
//   const latR = (lat * Math.PI) / 180;
//   const mercN = Math.log(Math.tan(Math.PI / 4 + latR / 2));
//   const y = H / 2 - (H * mercN) / (2 * Math.PI);
//   return [+x.toFixed(1), +y.toFixed(1)];
// }

// const PRESENCE = [
//   { name: "Angola · Luanda",     lon: 13.23,  lat: -8.84, main: true,  detail: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362" },
//   { name: "Portugal · Lisboa",   lon: -9.14,  lat: 38.72, main: true,  detail: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
//   { name: "Cabo Verde · Praia",  lon: -23.51, lat: 14.93, main: false, detail: "Presença comercial activa" },
//   { name: "São Tomé e Príncipe", lon:  6.61,  lat:  0.33, main: false, detail: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
// ];

// /* Corrected, much larger continent paths for 1000×520 Mercator */
// const CONTINENTS = {
//   NORTH_AMERICA: `M 90,90 L 105,80 L 125,75 L 148,78 L 165,88 L 178,100 L 188,118 L 192,135 L 188,155 L 175,170 L 160,182 L 148,195 L 140,210 L 132,222 L 125,232 L 118,238 L 110,235 L 100,228 L 92,215 L 86,200 L 82,185 L 80,168 L 82,150 L 86,132 L 90,115 L 90,90 Z M 82,150 L 72,142 L 58,138 L 48,143 L 46,156 L 54,164 L 68,162 L 78,156 Z M 178,100 L 190,90 L 205,85 L 218,90 L 220,102 L 210,112 L 196,110 Z`,
//   ALASKA: `M 32,95 L 48,85 L 65,82 L 78,90 L 82,105 L 76,115 L 60,118 L 44,115 L 34,106 Z M 8,100 L 25,92 L 35,96 L 32,108 L 18,112 Z`,
//   GREENLAND: `M 268,25 L 295,18 L 322,20 L 340,35 L 335,58 L 315,72 L 292,78 L 270,72 L 255,55 L 258,36 Z`,
//   CENTRAL_AMERICA: `M 140,210 L 155,215 L 165,228 L 162,242 L 150,250 L 138,248 L 130,238 L 130,225 Z`,
//   CARIBBEAN: `M 162,195 L 178,190 L 188,198 L 182,208 L 165,210 Z M 192,202 L 205,198 L 212,205 L 205,212 Z`,
//   SOUTH_AMERICA: `M 165,228 L 185,222 L 210,225 L 232,235 L 248,252 L 255,272 L 252,295 L 245,318 L 235,345 L 220,370 L 205,390 L 192,405 L 178,408 L 162,400 L 148,382 L 138,358 L 132,332 L 130,305 L 132,278 L 138,255 L 145,240 L 152,232 Z`,
//   ICELAND: `M 375,62 L 395,55 L 415,58 L 418,72 L 405,80 L 386,78 Z`,
//   BRITISH_ISLES: `M 420,100 L 432,92 L 442,96 L 440,110 L 428,114 Z M 412,88 L 425,80 L 432,86 L 428,96 L 416,98 Z`,
//   SCANDINAVIA: `M 450,62 L 468,52 L 488,48 L 508,54 L 515,68 L 505,85 L 490,96 L 475,100 L 462,96 L 450,85 Z M 508,54 L 528,45 L 548,48 L 552,62 L 542,75 L 528,78 L 515,72 Z M 468,95 L 480,100 L 478,115 L 466,118 L 458,110 Z`,
//   EUROPE: `M 432,110 L 455,104 L 480,100 L 502,105 L 520,112 L 530,125 L 528,140 L 515,152 L 498,158 L 482,160 L 465,155 L 450,148 L 440,138 L 432,125 Z M 480,100 L 502,92 L 522,95 L 530,108 L 518,115 L 500,112 Z M 530,125 L 548,120 L 560,128 L 556,142 L 542,148 L 532,142 Z M 450,148 L 462,155 L 458,168 L 446,170 L 440,160 Z M 465,155 L 478,162 L 474,175 L 462,175 L 458,165 Z`,
//   IBERIA: `M 420,135 L 442,130 L 462,133 L 466,148 L 460,162 L 444,168 L 428,165 L 418,155 L 416,143 Z`,
//   AFRICA: `M 448,178 L 470,172 L 498,172 L 520,178 L 540,192 L 552,208 L 558,228 L 555,250 L 548,272 L 545,296 L 548,322 L 542,348 L 528,372 L 510,392 L 490,405 L 470,408 L 450,400 L 434,382 L 422,358 L 415,332 L 415,305 L 418,278 L 424,252 L 428,228 L 425,205 L 428,185 L 435,178 Z M 428,240 L 415,245 L 405,256 L 406,268 L 416,272 L 428,265 Z`,
//   MADAGASCAR: `M 555,318 L 565,305 L 575,308 L 578,328 L 570,348 L 558,352 L 550,338 Z`,
//   MIDDLE_EAST: `M 548,175 L 572,168 L 598,170 L 615,182 L 618,200 L 608,218 L 588,228 L 565,232 L 548,222 L 538,208 L 540,190 Z`,
//   TURKEY: `M 520,145 L 548,138 L 575,140 L 590,152 L 585,168 L 565,175 L 540,178 L 520,168 L 510,155 Z`,
//   RUSSIA_SIBERIA: `M 490,45 L 548,35 L 615,30 L 682,32 L 745,38 L 800,45 L 848,55 L 878,68 L 895,85 L 888,105 L 868,118 L 840,125 L 808,128 L 775,125 L 742,118 L 712,112 L 680,110 L 648,112 L 618,118 L 592,125 L 572,132 L 548,138 L 520,132 L 500,118 L 488,102 L 488,80 Z`,
//   CENTRAL_ASIA: `M 570,132 L 612,125 L 648,128 L 672,140 L 678,158 L 662,172 L 635,178 L 608,175 L 585,165 L 572,150 Z`,
//   CHINA_EAST_ASIA: `M 648,105 L 695,98 L 742,100 L 778,112 L 798,128 L 792,148 L 775,162 L 748,170 L 718,172 L 688,168 L 660,158 L 645,142 L 642,125 Z`,
//   INDIA: `M 610,168 L 638,162 L 658,168 L 672,182 L 678,202 L 670,225 L 652,238 L 632,245 L 610,242 L 592,232 L 582,212 L 585,192 L 595,178 Z`,
//   SE_ASIA: `M 705,168 L 738,162 L 760,170 L 772,188 L 762,208 L 738,215 L 715,210 L 698,195 Z M 762,172 L 785,162 L 802,170 L 805,188 L 790,198 L 770,195 Z M 718,210 L 745,218 L 755,235 L 742,248 L 722,248 L 710,232 Z`,
//   JAPAN: `M 815,108 L 830,100 L 842,108 L 838,125 L 822,130 Z M 835,128 L 852,118 L 865,128 L 858,148 L 842,152 Z`,
//   KOREA: `M 792,118 L 808,112 L 818,120 L 812,138 L 798,142 Z`,
//   AUSTRALIA: `M 745,320 L 778,305 L 818,302 L 855,312 L 878,332 L 885,358 L 878,385 L 858,405 L 830,415 L 800,418 L 770,408 L 748,390 L 735,365 L 732,340 Z M 878,332 L 900,325 L 915,338 L 910,355 L 892,358 Z`,
//   NEW_ZEALAND: `M 898,395 L 912,382 L 922,392 L 915,410 L 900,412 Z M 905,410 L 918,398 L 928,410 L 920,428 L 908,425 Z`,
//   CAPE_VERDE: `M 390,230 L 396,224 L 402,228 L 400,236 L 392,238 Z`,
//   SAO_TOME: `M 475,264 L 480,258 L 486,262 L 484,270 L 476,272 Z`,
// };

// export function WorldMapFixed({ points, activePoint, onHover }: {
//   points: PresencePoint[];
//   activePoint: number | null;
//   onHover: (i: number) => void;
// }) {
//   const dots = points.map(p => {
//     const [cx, cy] = toMerc(p.lon, p.lat);
//     return { ...p, cx, cy };
//   });

//   return (
//     <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
//       <svg viewBox="0 0 1000 520" preserveAspectRatio="xMidYMid meet"
//         style={{ width: "100%", height: "auto", display: "block" }}>
//         <rect width="1000" height="520" fill="#dff0f3" rx="8"/>
//         {/* Grid lines subtle */}
//         <line x1="0" y1="260" x2="1000" y2="260" stroke="#c5e5ea" strokeWidth="0.5" strokeDasharray="4 6"/>
//         <line x1="500" y1="0" x2="500" y2="520" stroke="#c5e5ea" strokeWidth="0.5" strokeDasharray="4 6"/>

//         {/* All continents */}
//         {Object.entries(CONTINENTS).map(([k, d]) => (
//           <path key={k} d={d}
//             fill={["AFRICA","IBERIA","CAPE_VERDE","SAO_TOME"].includes(k) ? "#8ecdd6" : "#b0d8e0"}
//             stroke="#7ab8c0" strokeWidth="0.8" strokeLinejoin="round" strokeLinecap="round"
//           />
//         ))}

//         {/* Connection lines */}
//         {dots.filter(p => p.main).flatMap((p, i) =>
//           dots.filter((q, j) => q.main && j > i).map((q, j) => (
//             <line key={`ln-${i}-${j}`}
//               x1={p.cx} y1={p.cy} x2={q.cx} y2={q.cy}
//               stroke="#095b66" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.6"
//             />
//           ))
//         )}

//         {/* Dots */}
//         {dots.map((p, i) => (
//           <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
//             {p.main && (
//               <>
//                 <circle cx={p.cx} cy={p.cy} r="5" fill="#095b66" opacity="0.15">
//                   <animate attributeName="r" values="8;22;8" dur="3s" repeatCount="indefinite"/>
//                   <animate attributeName="opacity" values="0.18;0;0.18" dur="3s" repeatCount="indefinite"/>
//                 </circle>
//                 <circle cx={p.cx} cy={p.cy} r="11" fill="#095b66" opacity="0.1"/>
//               </>
//             )}
//             <circle cx={p.cx} cy={p.cy}
//               r={activePoint === i ? 10 : 6.5}
//               fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#4db5bf")}
//               stroke="#fff" strokeWidth="2.5"
//               style={{ transition: "r .2s, fill .2s" }}
//             />
//           </g>
//         ))}
//       </svg>

//       {activePoint !== null && (() => {
//         const d = dots[activePoint];
//         const pctX = (d.cx / 1000) * 100;
//         const pctY = (d.cy / 520) * 100;
//         return (
//           <div style={{
//             position: "absolute",
//             left: `${pctX}%`, top: `${pctY}%`,
//             transform: `translate(${pctX > 60 ? "-108%" : "14px"}, ${pctY > 60 ? "-118%" : "14px"})`,
//             background: "#fff", border: "1.5px solid #b8dde2", borderRadius: 10,
//             padding: "12px 16px", minWidth: 225,
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
//    MAIN PAGE
// ───────────────────────────────────────────── */
// export default function ProdutosPage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("Todos");
//   const [brand, setBrand] = useState("Todas as Marcas");
//   const [page, setPage] = useState(1);
//   const [loaderVis, setLoaderVis] = useState(true);
//   const [loaderFade, setLoaderFade] = useState(false);
//   useEffect(() => {
//     const hide = () => { setLoaderFade(true); setTimeout(() => setLoaderVis(false), 480); };
//     if (document.readyState === "complete") { setTimeout(hide, 600); }
//     else { window.addEventListener("load", () => setTimeout(hide, 600), { once: true }); }
//   }, []);

//   const filtered = useMemo(() => {
//     return ALL_PRODUCTS.filter(p => {
//       const matchCat = category === "Todos" || p.category === category;
//       const matchBrand = brand === "Todas as Marcas" || p.brand === brand;
//       const q = search.toLowerCase();
//       const matchSearch = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
//       return matchCat && matchBrand && matchSearch;
//     });
//   }, [search, category, brand]);

//   const totalPages = Math.ceil(filtered.length / PER_PAGE);
//   const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

//   const handleFilter = (cat: string) => {
//     setCategory(cat);
//     setPage(1);
//   };

//   return (
//     <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", minHeight: "100vh" }}>
//       {/* ── PAGE LOADER ── */}
//       {loaderVis && (
//         <div style={{ position:"fixed",inset:0,zIndex:9999,background:"#095b66",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20,transition:"opacity .48s cubic-bezier(.4,0,.2,1)",opacity:loaderFade?0:1,pointerEvents:loaderFade?"none":"all" }}>
//           <div style={{ display:"flex",alignItems:"center",gap:10,animation:"ml-pulse 1.6s ease-in-out infinite" }}>
//             <div style={{ width:38,height:38,borderRadius:8,background:"rgba(255,255,255,.15)",display:"flex",alignItems:"center",justifyContent:"center" }}>
//               <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h8l-1 8 9-12h-8z" fill="#fff"/></svg>
//             </div>
//             <span style={{ fontSize:18,fontWeight:900,color:"#fff",letterSpacing:".04em",fontFamily:"'Montserrat',sans-serif" }}>
//               MULTI<span style={{ color:"rgba(255,255,255,.5)" }}>ENERGIA</span>
//             </span>
//           </div>
//           <div style={{ width:180,height:3,borderRadius:99,background:"rgba(255,255,255,.15)",overflow:"hidden",position:"relative" }}>
//             <div style={{ position:"absolute",inset:0,borderRadius:99,background:"#fff",transformOrigin:"left",animation:"ml-bar .9s cubic-bezier(.4,0,.2,1) forwards" }}/>
//             <div style={{ position:"absolute",inset:0,borderRadius:99,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent)",animation:"ml-shimmer 1.1s ease-in-out infinite" }}/>
//           </div>
//           <div style={{ display:"flex",gap:7 }}>
//             {[0,1,2].map(i=><div key={i} style={{ width:6,height:6,borderRadius:"50%",background:"rgba(255,255,255,.55)",animation:`ml-pulse 1.2s ease-in-out ${i*.18}s infinite` }}/>)}
//           </div>
//         </div>
//       )}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         a { text-decoration: none; color: inherit; }
//         button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
//         @keyframes ml-bar { from{transform:scaleX(0)} to{transform:scaleX(1)} }
//         @keyframes ml-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.7;transform:scale(.96)} }
//         @keyframes ml-shimmer { 0%{background-position:-200px 0} 100%{background-position:200px 0} }
//         @keyframes cardIn { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform:none; } }
//         .filter-chip { padding: 8px 16px; border-radius: 99px; border: 1.5px solid #dde8ea; background: #fff; font-size: 12px; font-weight: 700; color: #4a7275; cursor: pointer; transition: all .2s; display: flex; align-items: center; gap: 7px; white-space: nowrap; }
//         .filter-chip:hover { border-color: #095b66; color: #095b66; background: #f0f9fa; }
//         .filter-chip.active { background: #095b66; border-color: #095b66; color: #fff; }
//         .search-input { width: 100%; background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; color: #1a2c2e; padding: 12px 16px 12px 44px; font-family: 'Montserrat',sans-serif; font-size: 13px; font-weight: 500; outline: none; transition: border-color .2s; }
//         .search-input:focus { border-color: #095b66; background: #fff; box-shadow: 0 0 0 3px rgba(9,91,102,.08); }
//         .search-input::placeholder { color: #9bbbbe; }
//         .select-filter { background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; color: #1a2c2e; padding: 11px 38px 11px 14px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 600; outline: none; transition: border-color .2s; appearance: none; cursor: pointer; }
//         .select-filter:focus { border-color: #095b66; }
//         .page-btn { width: 36px; height: 36px; border-radius: 8px; border: 1.5px solid #dde8ea; background: #fff; font-size: 13px; font-weight: 700; color: #4a7275; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all .2s; }
//         .page-btn:hover { border-color: #095b66; color: #095b66; }
//         .page-btn.active { background: #095b66; border-color: #095b66; color: #fff; }
//         .page-btn:disabled { opacity: .35; pointer-events: none; }
//         .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
//         .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); }
//         .nav-a { font-size: 11.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; color: #1a2c2e; transition: opacity .2s; }
//         .nav-a:hover { opacity: .6; }
//         @media (max-width: 900px) {
//           .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
//           .sp { padding-left: 22px !important; padding-right: 22px !important; }
//         }
//         @media (max-width: 540px) {
//           .products-grid { grid-template-columns: 1fr !important; }
//           .filters-scroll { overflow-x: auto; padding-bottom: 8px; }
//         }
//       `}</style>

//       {/* ── NAVBAR ── */}
//       <header style={{
//         position: "sticky", top: 0, zIndex: 100,
//         height: 64, background: "rgba(255,255,255,.97)",
//         backdropFilter: "blur(16px)",
//         boxShadow: "0 1px 0 rgba(9,91,102,.08)",
//         display: "flex", alignItems: "center", padding: "0 48px", gap: 32,
//       }}>
//         <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9 }}>
//           <div style={{ width: 34, height: 34, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
//               <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" strokeLinejoin="round"/>
//             </svg>
//           </div>
//           <span style={{ fontWeight: 900, fontSize: 16, color: "#095b66" }}>
//             Multi<span style={{ color: "#0a7a89" }}>energia</span>
//           </span>
//         </Link>
//         <nav style={{ display: "flex", gap: 32, marginLeft: "auto" }}>
//           <Link href="/#produtos" className="nav-a">Produtos</Link>
//           <Link href="/#servicos" className="nav-a">Serviços</Link>
//           <Link href="/#presenca" className="nav-a">Presença</Link>
//           <Link href="/#contacto" className="nav-a">Contacto</Link>
//         </nav>
//         <Link href="/#contacto" className="btn-teal" style={{ fontSize: 11, padding: "9px 20px" }}>Orçamento</Link>
//       </header>

//       {/* ── HERO BAND ── */}
//       <div style={{ background: "linear-gradient(135deg, #095b66 0%, #0a7a89 100%)", padding: "52px 80px 48px", position: "relative", overflow: "hidden" }}>
//         <div style={{ position: "absolute", right: -40, top: -40, width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,.05)" }}/>
//         <div style={{ position: "absolute", right: 80, bottom: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,.04)" }}/>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
//             <Link href="/" style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.5)", letterSpacing: ".06em", textTransform: "uppercase" }}>Início</Link>
//             <span style={{ color: "rgba(255,255,255,.3)", fontSize: 12 }}>›</span>
//             <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.85)", letterSpacing: ".06em", textTransform: "uppercase" }}>Todos os Produtos</span>
//           </div>
//           <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: 12 }}>
//             Catálogo Completo
//           </h1>
//           <p style={{ fontSize: 15, color: "rgba(255,255,255,.65)", maxWidth: 480, lineHeight: 1.75 }}>
//             {ALL_PRODUCTS.length} produtos de energia solar, armazenamento, proteção elétrica e mobilidade.
//           </p>
//         </div>
//       </div>

//       {/* ── MAIN ── */}
//       <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 80px 96px" }}>

//         {/* Search + Brand filter row */}
//         <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
//           {/* Search */}
//           <div style={{ position: "relative", flex: "1 1 280px", minWidth: 220 }}>
//             <svg viewBox="0 0 24 24" fill="none" width="16" height="16"
//               style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
//               <circle cx="11" cy="11" r="7" stroke="#9bbbbe" strokeWidth="2"/>
//               <path d="M16.5 16.5l4 4" stroke="#9bbbbe" strokeWidth="2" strokeLinecap="round"/>
//             </svg>
//             <input className="search-input" placeholder="Pesquisar produtos, marcas…"
//               value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}/>
//           </div>

//           {/* Brand select */}
//           <div style={{ position: "relative" }}>
//             <select className="select-filter" value={brand} onChange={e => { setBrand(e.target.value); setPage(1); }}>
//               {BRANDS_FILTER.map(b => <option key={b}>{b}</option>)}
//             </select>
//             <svg viewBox="0 0 24 24" fill="none" width="14" height="14"
//               style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
//               <path d="M6 9l6 6 6-6" stroke="#6a9598" strokeWidth="2" strokeLinecap="round"/>
//             </svg>
//           </div>

//           {/* Result count */}
//           <div style={{ fontSize: 12, fontWeight: 600, color: "#9bbbbe", marginLeft: "auto" }}>
//             {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
//           </div>
//         </div>

//         {/* Category filters */}
//         <div className="filters-scroll" style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
//           {CATEGORIES.map(cat => (
//             <button key={cat} className={`filter-chip ${category === cat ? "active" : ""}`}
//               onClick={() => handleFilter(cat)}>
//               <CategoryIcon cat={cat} active={category === cat} />
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products grid */}
//         {paginated.length > 0 ? (
//           <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginBottom: 44 }}>
//             {paginated.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
//           </div>
//         ) : (
//           <div style={{ textAlign: "center", padding: "64px 0", color: "#9bbbbe" }}>
//             <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
//             <div style={{ fontSize: 15, fontWeight: 700, color: "#4a7275", marginBottom: 6 }}>Nenhum produto encontrado</div>
//             <div style={{ fontSize: 13 }}>Tente ajustar os filtros ou a pesquisa</div>
//           </div>
//         )}

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
//             <button className="page-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>
//               <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
//             </button>
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
//               <button key={n} className={`page-btn ${page === n ? "active" : ""}`} onClick={() => setPage(n)}>{n}</button>
//             ))}
//             <button className="page-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
//               <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
//             </button>
//           </div>
//         )}

//         {/* CTA */}
//         <div style={{ marginTop: 72, background: "linear-gradient(135deg, #095b66, #0a7a89)", borderRadius: 20, padding: "44px 52px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
//           <div>
//             <h2 style={{ fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 900, color: "#fff", marginBottom: 8 }}>
//               Não encontrou o que procura?
//             </h2>
//             <p style={{ fontSize: 14, color: "rgba(255,255,255,.65)", maxWidth: 400, lineHeight: 1.75 }}>
//               A nossa equipa técnica pode dimensionar uma solução personalizada para o seu projeto.
//             </p>
//           </div>
//           <div style={{ display: "flex", gap: 12 }}>
//             <Link href="/#contacto" style={{ background: "#fff", color: "#095b66", border: "none", borderRadius: 6, padding: "13px 28px", fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
//               Fale Connosco
//             </Link>
//             <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer"
//               style={{ background: "rgba(255,255,255,.12)", color: "#fff", border: "2px solid rgba(255,255,255,.35)", borderRadius: 6, padding: "11px 22px", fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
//               💬 WhatsApp
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer style={{ background: "#06161a", padding: "28px 80px" }}>
//         <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
//           <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>© 2025 Multienergia. Todos os direitos reservados.</p>
//           <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>Alvará IRCOP nº 982/CCOP/IRCOP/SC/2025 · 5ª Classe</p>
//         </div>
//       </footer>
//     </div>
//   );
// }




"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   ALL PRODUCTS DATA
───────────────────────────────────────────── */
const ALL_PRODUCTS = [
  // SOLAR
  {
    id: "solar-residential",
    category: "Solar",
    name: "Sistema Solar Residencial",
    brand: "Huawei FusionSolar",
    power: "3–15 kW",
    tag: "Residencial",
    desc: "Kit completo para habitação. Painel + inversor + monitorização remota.",
    badge: null,
  },
  {
    id: "solar-industrial",
    category: "Solar",
    name: "Sistema Solar Industrial",
    brand: "Huawei FusionSolar",
    power: "50–500 kW",
    tag: "Industrial",
    desc: "Solução de grande escala para fábricas, armazéns e instalações industriais.",
    badge: "Popular",
  },
  {
    id: "solar-utility",
    category: "Solar",
    name: "Central Fotovoltaica",
    brand: "Nextracker + SMA",
    power: "> 1 MW",
    tag: "Utility",
    desc: "Centrais de produção fotovoltaica com rastreamento solar automático.",
    badge: null,
  },
  {
    id: "solar-carport",
    category: "Solar",
    name: "Carport Solar",
    brand: "Siemens",
    power: "10–100 kW",
    tag: "Carport",
    desc: "Cobertura para parques de estacionamento com produção de energia integrada.",
    badge: null,
  },
  // STORAGE
  {
    id: "ecoflow-powerocean",
    category: "Armazenamento",
    name: "EcoFlow PowerOcean",
    brand: "EcoFlow",
    power: "5–29 kW / 45 kWh",
    tag: "Híbrido",
    desc: "Inversor híbrido trifásico com armazenamento LFP expansível. Plug & play.",
    badge: "Novo",
  },
  {
    id: "bateria-lfp",
    category: "Armazenamento",
    name: "Bateria LFP Expansível",
    brand: "EcoFlow",
    power: "5–45 kWh",
    tag: "Bateria",
    desc: "Módulos de bateria de lítio ferro-fosfato com 15 anos de garantia.",
    badge: null,
  },
  // QUADROS
  {
    id: "quadro-bt-standard",
    category: "Quadros BT",
    name: "Quadro Elétrico BT Standard",
    brand: "Legrand",
    power: "Até 630 A",
    tag: "Standard",
    desc: "Quadros modulares de baixa tensão fabricados em Luanda. Forma 1 e 2.",
    badge: null,
  },
  {
    id: "quadro-bt-industrial",
    category: "Quadros BT",
    name: "Quadro Elétrico BT Industrial",
    brand: "Legrand",
    power: "Até 6300 A",
    tag: "Industrial",
    desc: "Soluções à medida para instalações industriais. IEC 61439. Forma 3 e 4.",
    badge: "Popular",
  },
  {
    id: "quadro-cgd",
    category: "Quadros BT",
    name: "Quadro Geral de Distribuição",
    brand: "Legrand",
    power: "Até 3200 A",
    tag: "Distribuição",
    desc: "CGD para edifícios de grande porte, hotéis e centros comerciais.",
    badge: null,
  },
  // UPS
  {
    id: "ups-salicru-small",
    category: "UPS",
    name: "UPS Salicru SLC Twin RT",
    brand: "Salicru",
    power: "10–120 KVA",
    tag: "Rack",
    desc: "UPS online dupla conversão para data centers e salas de servidores.",
    badge: null,
  },
  {
    id: "ups-salicru-large",
    category: "UPS",
    name: "UPS Salicru SLC Plus",
    brand: "Salicru",
    power: "120–800 KVA",
    tag: "Industrial",
    desc: "Proteção crítica para hospitais, telecomunicações e instalações industriais.",
    badge: "Popular",
  },
  {
    id: "ups-socomec",
    category: "UPS",
    name: "Socomec MODULYS GP",
    brand: "Socomec",
    power: "200–4800 KVA",
    tag: "Modular",
    desc: "Sistema UPS modular de alta capacidade. Escalável e redundante N+1.",
    badge: null,
  },
  {
    id: "estabilizador",
    category: "UPS",
    name: "Estabilizador de Tensão",
    brand: "Salicru",
    power: "1–500 KVA",
    tag: "Estabilizador",
    desc: "Correção automática de tensão para equipamentos sensíveis.",
    badge: null,
  },
  // POSTOS MT
  {
    id: "posto-toshiba-500",
    category: "Postos MT",
    name: "Posto de Transformação 500 KVA",
    brand: "Toshiba T&D",
    power: "500 KVA · 10–30 kV",
    tag: "Compacto",
    desc: "Posto compacto pré-montado. Instalação rápida. IP66. Class AB.",
    badge: null,
  },
  {
    id: "posto-toshiba-1000",
    category: "Postos MT",
    name: "Posto de Transformação 1000 KVA",
    brand: "Toshiba T&D",
    power: "1000 KVA · 10–30 kV",
    tag: "Compacto",
    desc: "TCSU pré-fabricado para ligação de média tensão. Plug & play.",
    badge: "Popular",
  },
  {
    id: "posto-toshiba-2000",
    category: "Postos MT",
    name: "Posto de Transformação 2000 KVA",
    brand: "Toshiba T&D",
    power: "2000 KVA · 10–30 kV",
    tag: "Industrial",
    desc: "Alta potência para instalações industriais de grande porte.",
    badge: null,
  },
  // MOBILIDADE
  {
    id: "ve-domest",
    category: "Mobilidade Elétrica",
    name: "Carregador VE Doméstico",
    brand: "Huawei",
    power: "7–22 kW",
    tag: "Doméstico",
    desc: "Posto de carregamento monofásico/trifásico para habitação e condomínios.",
    badge: null,
  },
  {
    id: "ve-publico",
    category: "Mobilidade Elétrica",
    name: "Carregador VE Via Pública",
    brand: "Circutor",
    power: "22–50 kW",
    tag: "Público",
    desc: "Estação de carregamento rápido para espaços públicos e empresas.",
    badge: "Novo",
  },
  {
    id: "ve-tesla",
    category: "Mobilidade Elétrica",
    name: "Tesla Wall Connector",
    brand: "Tesla",
    power: "11–22 kW",
    tag: "Premium",
    desc: "Solução de carregamento premium para residências e frotas Tesla.",
    badge: null,
  },
  // SPDA
  {
    id: "spda-franklin",
    category: "Proteção SPDA",
    name: "Sistema SPDA Franklin France",
    brand: "Franklin France",
    power: "Class I · II · III",
    tag: "SPDA",
    desc: "Proteção atmosférica completa. Conformidade NA 33:2014 e IEC 62305.",
    badge: null,
  },
  {
    id: "spda-pararaios",
    category: "Proteção SPDA",
    name: "Para-Raios ESE",
    brand: "Franklin France",
    power: "R=45–107 m",
    tag: "ESE",
    desc: "Para-raios de ionização com antecipação. Protege raio de até 107 metros.",
    badge: null,
  },
  {
    id: "spda-descargadores",
    category: "Proteção SPDA",
    name: "Descarregadores de Sobretensão",
    brand: "Legrand",
    power: "Tipo 1 · 2 · 3",
    tag: "Proteção",
    desc: "Proteção contra surtos elétricos para painéis e equipamentos críticos.",
    badge: null,
  },
  // ILUMINAÇÃO
  {
    id: "led-industrial",
    category: "Iluminação",
    name: "Iluminação LED Industrial",
    brand: "Legrand",
    power: "50–500 W",
    tag: "Industrial",
    desc: "Luminárias de alta eficiência para armazéns, fábricas e espaços industriais.",
    badge: null,
  },
  {
    id: "led-exterior",
    category: "Iluminação",
    name: "Iluminação LED Exterior",
    brand: "Legrand",
    power: "30–200 W",
    tag: "Exterior",
    desc: "Postes e projetores LED para vias públicas, parques e áreas exteriores.",
    badge: null,
  },
];

const CATEGORIES = ["Todos", "Solar", "Armazenamento", "Quadros BT", "UPS", "Postos MT", "Mobilidade Elétrica", "Proteção SPDA", "Iluminação"];
const BRANDS_FILTER = ["Todas as Marcas", "Huawei FusionSolar", "EcoFlow", "Legrand", "Salicru", "Socomec", "Toshiba T&D", "Franklin France", "Circutor", "Tesla", "Nextracker + SMA", "Siemens", "Huawei"];
const PER_PAGE = 8;

/* ─────────────────────────────────────────────
   ICONS per category
───────────────────────────────────────────── */
function CategoryIcon({ cat, active }: { cat: string; active: boolean }) {
  const c = active ? "#fff" : "#095b66";
  const size = 16;
  const icons: Record<string, React.ReactElement> = {
    "Solar": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" fill={c}/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke={c} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    "Armazenamento": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="7" y="3" width="10" height="18" rx="2" stroke={c} strokeWidth="1.8"/><rect x="9" y="6" width="6" height="3" rx="1" fill={c}/><path d="M10 21h4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    "Quadros BT": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke={c} strokeWidth="1.8"/><rect x="6" y="6" width="12" height="3" rx="1" fill={c} opacity=".8"/><circle cx="8" cy="14" r="2" fill={c}/><circle cx="12" cy="14" r="2" fill={c} opacity=".5"/><circle cx="16" cy="14" r="2" fill={c} opacity=".3"/></svg>,
    "UPS": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="12" rx="2" stroke={c} strokeWidth="1.8"/><path d="M13 10l-4 5h5l-3 4" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    "Postos MT": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="5" y="9" width="14" height="11" rx="2" stroke={c} strokeWidth="1.8"/><path d="M12 3v6" stroke={c} strokeWidth="1.8" strokeLinecap="round"/><path d="M8 3h8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/><path d="M8 6h8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
    "Mobilidade Elétrica": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="2" y="9" width="20" height="10" rx="4" stroke={c} strokeWidth="1.8"/><circle cx="7" cy="21" r="2" fill={c}/><circle cx="17" cy="21" r="2" fill={c}/><path d="M5 13h5l2 3h8" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 7v4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/><path d="M15 9h4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
    "Proteção SPDA": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 2l2 5 5 .7-3.6 3.5.8 5L12 13.6l-4.2 2.6.8-5L5 7.7l5-.7z" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/><path d="M8 18l-3 5M16 18l3 5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
    "Iluminação": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9 21h6M12 3a6 6 0 0 1 4 10.5V17H8v-3.5A6 6 0 0 1 12 3z" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    "Todos": <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" fill={c}/><rect x="14" y="3" width="7" height="7" rx="1.5" fill={c} opacity=".6"/><rect x="3" y="14" width="7" height="7" rx="1.5" fill={c} opacity=".6"/><rect x="14" y="14" width="7" height="7" rx="1.5" fill={c} opacity=".3"/></svg>,
  };
  return icons[cat] || icons["Todos"];
}

/* ─────────────────────────────────────────────
   PRODUCT CARD
───────────────────────────────────────────── */
const CAT_COLORS: Record<string, { bg: string; dot: string }> = {
  "Solar":              { bg: "#e8f7f9", dot: "#095b66" },
  "Armazenamento":      { bg: "#e6f5f7", dot: "#0a7a89" },
  "Quadros BT":         { bg: "#e5f4f6", dot: "#064e58" },
  "UPS":                { bg: "#e8f7f9", dot: "#095b66" },
  "Postos MT":          { bg: "#e6f5f7", dot: "#0a7a89" },
  "Mobilidade Elétrica":{ bg: "#e5f4f6", dot: "#064e58" },
  "Proteção SPDA":      { bg: "#e8f7f9", dot: "#095b66" },
  "Iluminação":         { bg: "#e6f5f7", dot: "#0a7a89" },
};

function ProductCard({ p, index }: { p: typeof ALL_PRODUCTS[0]; index: number }) {
  const col = CAT_COLORS[p.category] || { bg: "#e8f7f9", dot: "#095b66" };
  return (
    <div style={{
      background: "#fff",
      border: "1.5px solid #dde8ea",
      borderRadius: 16,
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: 0,
      cursor: "pointer",
      transition: "all .25s",
      position: "relative",
      animation: `cardIn .35s ${index * 0.04}s both ease-out`,
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#095b66";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(9,91,102,.12)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#dde8ea";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.transform = "none";
      }}
    >
      {/* Badge */}
      {p.badge && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          background: p.badge === "Novo" ? "#095b66" : p.badge === "Popular" ? "#0a7a89" : "#064e58",
          color: "#fff", fontSize: 9, fontWeight: 800, letterSpacing: ".1em",
          textTransform: "uppercase", borderRadius: 99, padding: "3px 9px",
        }}>{p.badge}</div>
      )}

      {/* Icon area */}
      <div style={{
        width: 52, height: 52, borderRadius: 12,
        background: col.bg,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 16, flexShrink: 0,
      }}>
        <CategoryIcon cat={p.category} active={false} />
      </div>

      {/* Category */}
      <div style={{ fontSize: 10, fontWeight: 700, color: col.dot, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>
        {p.category}
      </div>

      {/* Name */}
      <h3 style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e", lineHeight: 1.35, marginBottom: 8 }}>
        {p.name}
      </h3>

      {/* Desc */}
      <p style={{ fontSize: 12.5, color: "#5a8285", lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
        {p.desc}
      </p>

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 14, borderTop: "1px solid #edf3f4" }}>
        <div>
          <div style={{ fontSize: 10, color: "#9bbbbe", fontWeight: 600, marginBottom: 2 }}>Potência</div>
          <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66" }}>{p.power}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 10, color: "#9bbbbe", fontWeight: 600, marginBottom: 2 }}>Marca</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#1a2c2e" }}>{p.brand}</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FIXED WORLD MAP — proper Robinson-like paths
───────────────────────────────────────────── */
type PresencePoint = { name: string; lon: number; lat: number; main: boolean; detail: string };

function toMerc(lon: number, lat: number, W = 1000, H = 520): [number, number] {
  const x = (lon + 180) * (W / 360);
  const latR = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latR / 2));
  const y = H / 2 - (H * mercN) / (2 * Math.PI);
  return [+x.toFixed(1), +y.toFixed(1)];
}

const PRESENCE = [
  { name: "Angola · Luanda",     lon: 13.23,  lat: -8.84, main: true,  detail: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362" },
  { name: "Portugal · Lisboa",   lon: -9.14,  lat: 38.72, main: true,  detail: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
  { name: "Cabo Verde · Praia",  lon: -23.51, lat: 14.93, main: false, detail: "Presença comercial activa" },
  { name: "São Tomé e Príncipe", lon:  6.61,  lat:  0.33, main: false, detail: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
];

/* Corrected, much larger continent paths for 1000×520 Mercator */
const CONTINENTS = {
  NORTH_AMERICA: `M 90,90 L 105,80 L 125,75 L 148,78 L 165,88 L 178,100 L 188,118 L 192,135 L 188,155 L 175,170 L 160,182 L 148,195 L 140,210 L 132,222 L 125,232 L 118,238 L 110,235 L 100,228 L 92,215 L 86,200 L 82,185 L 80,168 L 82,150 L 86,132 L 90,115 L 90,90 Z M 82,150 L 72,142 L 58,138 L 48,143 L 46,156 L 54,164 L 68,162 L 78,156 Z M 178,100 L 190,90 L 205,85 L 218,90 L 220,102 L 210,112 L 196,110 Z`,
  ALASKA: `M 32,95 L 48,85 L 65,82 L 78,90 L 82,105 L 76,115 L 60,118 L 44,115 L 34,106 Z M 8,100 L 25,92 L 35,96 L 32,108 L 18,112 Z`,
  GREENLAND: `M 268,25 L 295,18 L 322,20 L 340,35 L 335,58 L 315,72 L 292,78 L 270,72 L 255,55 L 258,36 Z`,
  CENTRAL_AMERICA: `M 140,210 L 155,215 L 165,228 L 162,242 L 150,250 L 138,248 L 130,238 L 130,225 Z`,
  CARIBBEAN: `M 162,195 L 178,190 L 188,198 L 182,208 L 165,210 Z M 192,202 L 205,198 L 212,205 L 205,212 Z`,
  SOUTH_AMERICA: `M 165,228 L 185,222 L 210,225 L 232,235 L 248,252 L 255,272 L 252,295 L 245,318 L 235,345 L 220,370 L 205,390 L 192,405 L 178,408 L 162,400 L 148,382 L 138,358 L 132,332 L 130,305 L 132,278 L 138,255 L 145,240 L 152,232 Z`,
  ICELAND: `M 375,62 L 395,55 L 415,58 L 418,72 L 405,80 L 386,78 Z`,
  BRITISH_ISLES: `M 420,100 L 432,92 L 442,96 L 440,110 L 428,114 Z M 412,88 L 425,80 L 432,86 L 428,96 L 416,98 Z`,
  SCANDINAVIA: `M 450,62 L 468,52 L 488,48 L 508,54 L 515,68 L 505,85 L 490,96 L 475,100 L 462,96 L 450,85 Z M 508,54 L 528,45 L 548,48 L 552,62 L 542,75 L 528,78 L 515,72 Z M 468,95 L 480,100 L 478,115 L 466,118 L 458,110 Z`,
  EUROPE: `M 432,110 L 455,104 L 480,100 L 502,105 L 520,112 L 530,125 L 528,140 L 515,152 L 498,158 L 482,160 L 465,155 L 450,148 L 440,138 L 432,125 Z M 480,100 L 502,92 L 522,95 L 530,108 L 518,115 L 500,112 Z M 530,125 L 548,120 L 560,128 L 556,142 L 542,148 L 532,142 Z M 450,148 L 462,155 L 458,168 L 446,170 L 440,160 Z M 465,155 L 478,162 L 474,175 L 462,175 L 458,165 Z`,
  IBERIA: `M 420,135 L 442,130 L 462,133 L 466,148 L 460,162 L 444,168 L 428,165 L 418,155 L 416,143 Z`,
  AFRICA: `M 448,178 L 470,172 L 498,172 L 520,178 L 540,192 L 552,208 L 558,228 L 555,250 L 548,272 L 545,296 L 548,322 L 542,348 L 528,372 L 510,392 L 490,405 L 470,408 L 450,400 L 434,382 L 422,358 L 415,332 L 415,305 L 418,278 L 424,252 L 428,228 L 425,205 L 428,185 L 435,178 Z M 428,240 L 415,245 L 405,256 L 406,268 L 416,272 L 428,265 Z`,
  MADAGASCAR: `M 555,318 L 565,305 L 575,308 L 578,328 L 570,348 L 558,352 L 550,338 Z`,
  MIDDLE_EAST: `M 548,175 L 572,168 L 598,170 L 615,182 L 618,200 L 608,218 L 588,228 L 565,232 L 548,222 L 538,208 L 540,190 Z`,
  TURKEY: `M 520,145 L 548,138 L 575,140 L 590,152 L 585,168 L 565,175 L 540,178 L 520,168 L 510,155 Z`,
  RUSSIA_SIBERIA: `M 490,45 L 548,35 L 615,30 L 682,32 L 745,38 L 800,45 L 848,55 L 878,68 L 895,85 L 888,105 L 868,118 L 840,125 L 808,128 L 775,125 L 742,118 L 712,112 L 680,110 L 648,112 L 618,118 L 592,125 L 572,132 L 548,138 L 520,132 L 500,118 L 488,102 L 488,80 Z`,
  CENTRAL_ASIA: `M 570,132 L 612,125 L 648,128 L 672,140 L 678,158 L 662,172 L 635,178 L 608,175 L 585,165 L 572,150 Z`,
  CHINA_EAST_ASIA: `M 648,105 L 695,98 L 742,100 L 778,112 L 798,128 L 792,148 L 775,162 L 748,170 L 718,172 L 688,168 L 660,158 L 645,142 L 642,125 Z`,
  INDIA: `M 610,168 L 638,162 L 658,168 L 672,182 L 678,202 L 670,225 L 652,238 L 632,245 L 610,242 L 592,232 L 582,212 L 585,192 L 595,178 Z`,
  SE_ASIA: `M 705,168 L 738,162 L 760,170 L 772,188 L 762,208 L 738,215 L 715,210 L 698,195 Z M 762,172 L 785,162 L 802,170 L 805,188 L 790,198 L 770,195 Z M 718,210 L 745,218 L 755,235 L 742,248 L 722,248 L 710,232 Z`,
  JAPAN: `M 815,108 L 830,100 L 842,108 L 838,125 L 822,130 Z M 835,128 L 852,118 L 865,128 L 858,148 L 842,152 Z`,
  KOREA: `M 792,118 L 808,112 L 818,120 L 812,138 L 798,142 Z`,
  AUSTRALIA: `M 745,320 L 778,305 L 818,302 L 855,312 L 878,332 L 885,358 L 878,385 L 858,405 L 830,415 L 800,418 L 770,408 L 748,390 L 735,365 L 732,340 Z M 878,332 L 900,325 L 915,338 L 910,355 L 892,358 Z`,
  NEW_ZEALAND: `M 898,395 L 912,382 L 922,392 L 915,410 L 900,412 Z M 905,410 L 918,398 L 928,410 L 920,428 L 908,425 Z`,
  CAPE_VERDE: `M 390,230 L 396,224 L 402,228 L 400,236 L 392,238 Z`,
  SAO_TOME: `M 475,264 L 480,258 L 486,262 L 484,270 L 476,272 Z`,
};

export function WorldMapFixed({ points, activePoint, onHover }: {
  points: PresencePoint[];
  activePoint: number | null;
  onHover: (i: number) => void;
}) {
  const dots = points.map(p => {
    const [cx, cy] = toMerc(p.lon, p.lat);
    return { ...p, cx, cy };
  });

  return (
    <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
      <svg viewBox="0 0 1000 520" preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "auto", display: "block" }}>
        <rect width="1000" height="520" fill="#dff0f3" rx="8"/>
        {/* Grid lines subtle */}
        <line x1="0" y1="260" x2="1000" y2="260" stroke="#c5e5ea" strokeWidth="0.5" strokeDasharray="4 6"/>
        <line x1="500" y1="0" x2="500" y2="520" stroke="#c5e5ea" strokeWidth="0.5" strokeDasharray="4 6"/>

        {/* All continents */}
        {Object.entries(CONTINENTS).map(([k, d]) => (
          <path key={k} d={d}
            fill={["AFRICA","IBERIA","CAPE_VERDE","SAO_TOME"].includes(k) ? "#8ecdd6" : "#b0d8e0"}
            stroke="#7ab8c0" strokeWidth="0.8" strokeLinejoin="round" strokeLinecap="round"
          />
        ))}

        {/* Connection lines */}
        {dots.filter(p => p.main).flatMap((p, i) =>
          dots.filter((q, j) => q.main && j > i).map((q, j) => (
            <line key={`ln-${i}-${j}`}
              x1={p.cx} y1={p.cy} x2={q.cx} y2={q.cy}
              stroke="#095b66" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.6"
            />
          ))
        )}

        {/* Dots */}
        {dots.map((p, i) => (
          <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
            {p.main && (
              <>
                <circle cx={p.cx} cy={p.cy} r="5" fill="#095b66" opacity="0.15">
                  <animate attributeName="r" values="8;22;8" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.18;0;0.18" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx={p.cx} cy={p.cy} r="11" fill="#095b66" opacity="0.1"/>
              </>
            )}
            <circle cx={p.cx} cy={p.cy}
              r={activePoint === i ? 10 : 6.5}
              fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#4db5bf")}
              stroke="#fff" strokeWidth="2.5"
              style={{ transition: "r .2s, fill .2s" }}
            />
          </g>
        ))}
      </svg>

      {activePoint !== null && (() => {
        const d = dots[activePoint];
        const pctX = (d.cx / 1000) * 100;
        const pctY = (d.cy / 520) * 100;
        return (
          <div style={{
            position: "absolute",
            left: `${pctX}%`, top: `${pctY}%`,
            transform: `translate(${pctX > 60 ? "-108%" : "14px"}, ${pctY > 60 ? "-118%" : "14px"})`,
            background: "#fff", border: "1.5px solid #b8dde2", borderRadius: 10,
            padding: "12px 16px", minWidth: 225,
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
   MAIN PAGE
───────────────────────────────────────────── */
export default function ProdutosPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [brand, setBrand] = useState("Todas as Marcas");
  const [page, setPage] = useState(1);
  const [loaderVis, setLoaderVis] = useState(true);
  const [loaderFade, setLoaderFade] = useState(false);
  useEffect(() => {
    const hide = () => { setLoaderFade(true); setTimeout(() => setLoaderVis(false), 480); };
    if (document.readyState === "complete") { setTimeout(hide, 600); }
    else { window.addEventListener("load", () => setTimeout(hide, 600), { once: true }); }
  }, []);

  const filtered = useMemo(() => {
    return ALL_PRODUCTS.filter(p => {
      const matchCat = category === "Todos" || p.category === category;
      const matchBrand = brand === "Todas as Marcas" || p.brand === brand;
      const q = search.toLowerCase();
      const matchSearch = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      return matchCat && matchBrand && matchSearch;
    });
  }, [search, category, brand]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleFilter = (cat: string) => {
    setCategory(cat);
    setPage(1);
  };

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", minHeight: "100vh" }}>
      {/* ── PAGE LOADER ── */}
      {loaderVis && (
        <div style={{ position:"fixed",inset:0,zIndex:9999,background:"#095b66",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20,transition:"opacity .48s cubic-bezier(.4,0,.2,1)",opacity:loaderFade?0:1,pointerEvents:loaderFade?"none":"all" }}>
          <div style={{ display:"flex",alignItems:"center",gap:10,animation:"ml-pulse 1.6s ease-in-out infinite" }}>
            <div style={{ width:38,height:38,borderRadius:8,background:"rgba(255,255,255,.15)",display:"flex",alignItems:"center",justifyContent:"center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h8l-1 8 9-12h-8z" fill="#fff"/></svg>
            </div>
            <span style={{ fontSize:18,fontWeight:900,color:"#fff",letterSpacing:".04em",fontFamily:"'Montserrat',sans-serif" }}>
              MULTI<span style={{ color:"rgba(255,255,255,.5)" }}>ENERGIA</span>
            </span>
          </div>
          <div style={{ width:180,height:3,borderRadius:99,background:"rgba(255,255,255,.15)",overflow:"hidden",position:"relative" }}>
            <div style={{ position:"absolute",inset:0,borderRadius:99,background:"#fff",transformOrigin:"left",animation:"ml-bar .9s cubic-bezier(.4,0,.2,1) forwards" }}/>
            <div style={{ position:"absolute",inset:0,borderRadius:99,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent)",animation:"ml-shimmer 1.1s ease-in-out infinite" }}/>
          </div>
          <div style={{ display:"flex",gap:7 }}>
            {[0,1,2].map(i=><div key={i} style={{ width:6,height:6,borderRadius:"50%",background:"rgba(255,255,255,.55)",animation:`ml-pulse 1.2s ease-in-out ${i*.18}s infinite` }}/>)}
          </div>
        </div>
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
        @keyframes ml-bar { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes ml-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.7;transform:scale(.96)} }
        @keyframes ml-shimmer { 0%{background-position:-200px 0} 100%{background-position:200px 0} }
        @keyframes cardIn { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform:none; } }
        .filter-chip { padding: 8px 16px; border-radius: 99px; border: 1.5px solid #dde8ea; background: #fff; font-size: 12px; font-weight: 700; color: #4a7275; cursor: pointer; transition: all .2s; display: flex; align-items: center; gap: 7px; white-space: nowrap; }
        .filter-chip:hover { border-color: #095b66; color: #095b66; background: #f0f9fa; }
        .filter-chip.active { background: #095b66; border-color: #095b66; color: #fff; }
        .search-input { width: 100%; background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; color: #1a2c2e; padding: 12px 16px 12px 44px; font-family: 'Montserrat',sans-serif; font-size: 13px; font-weight: 500; outline: none; transition: border-color .2s; }
        .search-input:focus { border-color: #095b66; background: #fff; box-shadow: 0 0 0 3px rgba(9,91,102,.08); }
        .search-input::placeholder { color: #9bbbbe; }
        .select-filter { background: #f8fbfc; border: 1.5px solid #dde8ea; border-radius: 10px; color: #1a2c2e; padding: 11px 38px 11px 14px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 600; outline: none; transition: border-color .2s; appearance: none; cursor: pointer; }
        .select-filter:focus { border-color: #095b66; }
        .page-btn { width: 36px; height: 36px; border-radius: 8px; border: 1.5px solid #dde8ea; background: #fff; font-size: 13px; font-weight: 700; color: #4a7275; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all .2s; }
        .page-btn:hover { border-color: #095b66; color: #095b66; }
        .page-btn.active { background: #095b66; border-color: #095b66; color: #fff; }
        .page-btn:disabled { opacity: .35; pointer-events: none; }
        .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); }
        .nav-a { font-size: 11.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; color: #1a2c2e; transition: opacity .2s; }
        .nav-a:hover { opacity: .6; }
        @media (max-width: 900px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sp { padding-left: 22px !important; padding-right: 22px !important; }
        }
        @media (max-width: 540px) {
          .products-grid { grid-template-columns: 1fr !important; }
          .filters-scroll { overflow-x: auto; padding-bottom: 8px; }
        }
      `}</style>



      {/* ── HERO BAND ── */}
      <div style={{ background: "linear-gradient(135deg, #095b66 0%, #0a7a89 100%)", padding: "52px 80px 48px", position: "relative", overflow: "hidden", paddingTop: 150 }}>
        <div style={{ position: "absolute", right: -40, top: -40, width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,.05)" }}/>
        <div style={{ position: "absolute", right: 80, bottom: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,.04)" }}/>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <Link href="/" style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.5)", letterSpacing: ".06em", textTransform: "uppercase" }}>Início</Link>
            <span style={{ color: "rgba(255,255,255,.3)", fontSize: 12 }}>›</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.85)", letterSpacing: ".06em", textTransform: "uppercase" }}>Todos os Produtos</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: 12 }}>
            Catálogo Completo
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,.65)", maxWidth: 480, lineHeight: 1.75 }}>
            {ALL_PRODUCTS.length} produtos de energia solar, armazenamento, proteção elétrica e mobilidade.
          </p>
        </div>
      </div>

      {/* ── MAIN ── */}
      <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 80px 96px" }}>

        {/* Search + Brand filter row */}
        <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
          {/* Search */}
          <div style={{ position: "relative", flex: "1 1 280px", minWidth: 220 }}>
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16"
              style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
              <circle cx="11" cy="11" r="7" stroke="#9bbbbe" strokeWidth="2"/>
              <path d="M16.5 16.5l4 4" stroke="#9bbbbe" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input className="search-input" placeholder="Pesquisar produtos, marcas…"
              value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}/>
          </div>

          {/* Brand select */}
          <div style={{ position: "relative" }}>
            <select className="select-filter" value={brand} onChange={e => { setBrand(e.target.value); setPage(1); }}>
              {BRANDS_FILTER.map(b => <option key={b}>{b}</option>)}
            </select>
            <svg viewBox="0 0 24 24" fill="none" width="14" height="14"
              style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
              <path d="M6 9l6 6 6-6" stroke="#6a9598" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Result count */}
          <div style={{ fontSize: 12, fontWeight: 600, color: "#9bbbbe", marginLeft: "auto" }}>
            {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Category filters */}
        <div className="filters-scroll" style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
          {CATEGORIES.map(cat => (
            <button key={cat} className={`filter-chip ${category === cat ? "active" : ""}`}
              onClick={() => handleFilter(cat)}>
              <CategoryIcon cat={cat} active={category === cat} />
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        {paginated.length > 0 ? (
          <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginBottom: 44 }}>
            {paginated.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "64px 0", color: "#9bbbbe" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#4a7275", marginBottom: 6 }}>Nenhum produto encontrado</div>
            <div style={{ fontSize: 13 }}>Tente ajustar os filtros ou a pesquisa</div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <button className="page-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>
              <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button key={n} className={`page-btn ${page === n ? "active" : ""}`} onClick={() => setPage(n)}>{n}</button>
            ))}
            <button className="page-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
              <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: 72, background: "linear-gradient(135deg, #095b66, #0a7a89)", borderRadius: 20, padding: "44px 52px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 900, color: "#fff", marginBottom: 8 }}>
              Não encontrou o que procura?
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,.65)", maxWidth: 400, lineHeight: 1.75 }}>
              A nossa equipa técnica pode dimensionar uma solução personalizada para o seu projeto.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Link href="/#contacto" style={{ background: "#fff", color: "#095b66", border: "none", borderRadius: 6, padding: "13px 28px", fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              Fale Connosco
            </Link>
            <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer"
              style={{ background: "rgba(255,255,255,.12)", color: "#fff", border: "2px solid rgba(255,255,255,.35)", borderRadius: 6, padding: "11px 22px", fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}