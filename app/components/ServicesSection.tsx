// "use client";
// import React from "react";
// import Link from "next/link";

// export interface Service {
//   id: number;
//   order: number;
//   title: string;
//   short: string;
//   image: string | null;   // ex: /servicos/solar.jpg
//   href?: string | null;   // link opcional
//   active: boolean;
// }

// /* ── dados fictícios para usar até integração com CMS ── */
// export const MOCK_SERVICES: Service[] = [
//   { id: 1, order: 1, title: "Quadros Elétricos", short: "Concepção, montagem e ensaio de quadros de baixa tensão para uso industrial, comercial e residencial.", image: "/servicos/quadros.jpg", href: null, active: true },
//   { id: 2, order: 2, title: "Energia Solar & Armazenamento", short: "Sistemas fotovoltaicos on-grid, off-grid e híbridos com soluções de armazenamento de alta densidade.", image: "/servicos/solar.jpg", href: null, active: true },
//   { id: 3, order: 3, title: "Energia Crítica & UPS", short: "Alimentação ininterrupta para data centers, hospitais e infraestruturas críticas.", image: "/servicos/ups.jpg", href: null, active: true },
//   { id: 4, order: 4, title: "Proteção Atmosférica", short: "Projeto e instalação de sistemas de proteção contra descargas atmosféricas (SPDA/LPMS).", image: "/servicos/spda.jpg", href: null, active: true },
//   { id: 5, order: 5, title: "Mobilidade Elétrica", short: "Infra-estruturas de carregamento para veículos elétricos em condomínios, empresas e espaços públicos.", image: "/servicos/ev.jpg", href: null, active: true },
//   { id: 6, order: 6, title: "Postos de Transformação", short: "Construção e manutenção de postos de transformação MT/BT, câmaras de seccionamento e subestações.", image: "/servicos/pt.jpg", href: null, active: true },
//   { id: 7, order: 7, title: "Auditoria Energética", short: "Levantamento e análise do consumo energético com identificação de oportunidades de melhoria e certificação.", image: "/servicos/auditoria.jpg", href: null, active: true },
//   { id: 8, order: 8, title: "Telecomunicações & SATCOM", short: "Redes estruturadas, fibra óptica, sistemas de comunicação por satélite e infraestrutura de dados.", image: "/servicos/telecom.jpg", href: null, active: true },
// ];

// /* ── fallback gradient por índice quando não há imagem ── */
// const FALLBACK_GRADIENTS = [
//   "linear-gradient(135deg,#095b66,#0a7a89)",
//   "linear-gradient(135deg,#b45309,#d97706)",
//   "linear-gradient(135deg,#1e3a8a,#2563eb)",
//   "linear-gradient(135deg,#7c3aed,#6d28d9)",
//   "linear-gradient(135deg,#0f766e,#0d9488)",
//   "linear-gradient(135deg,#0e7490,#0891b2)",
//   "linear-gradient(135deg,#166534,#16a34a)",
//   "linear-gradient(135deg,#374151,#4b5563)",
// ];

// export default function ServicesSection({ services }: { services: Service[] }) {
//   const active = services.filter(s => s.active).sort((a, b) => a.order - b.order);
//   if (!active.length) return null;

//   return (
//     <>
//       <style>{`
//         .svc-grid-efacec {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 8px;
//         }
//         .svc-card-efacec {
//           display: flex;
//           flex-direction: column;
//           background: #fff;
//           border-radius: 16px;
//           overflow: hidden;
//           cursor: pointer;
//           text-decoration: none;
//           color: inherit;
//           transition: box-shadow .3s, transform .3s;
//         }
//         .svc-card-efacec:hover {
//           transform: translateY(-4px);
//         }
//         .svc-card-img-wrap {
//           position: relative;
//           overflow: hidden;
//           border-radius: 12px;
//           margin: 10px 10px 0;
//           aspect-ratio: 4 / 3;
//           background: #e5eef0;
//         }
//         .svc-card-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center;
//           display: block;
//           transition: transform .55s cubic-bezier(.25,.46,.45,.94);
//         }
//         .svc-card-efacec:hover .svc-card-img {
//           transform: scale(1.06);
//         }
//         .svc-card-body {
//           padding: 18px 20px 22px;
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//           flex: 1;
//         }
//         .svc-card-title {
//           font-size: 15px;
//           font-weight: 800;
//           color: #0a1c1e;
//           line-height: 1.25;
//           margin: 0;
//         }
//         .svc-card-short {
//           font-size: 12.5px;
//           color: #5a8285;
//           line-height: 1.65;
//           margin: 0;
//           flex: 1;
//         }
//         .svc-card-arrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: .1em;
//           text-transform: uppercase;
//           color: #095b66;
//           margin-top: 8px;
//           opacity: 0;
//           transform: translateX(-6px);
//           transition: opacity .25s, transform .25s;
//         }
//         .svc-card-efacec:hover .svc-card-arrow {
//           opacity: 1;
//           transform: none;
//         }

//         @media (max-width: 1060px) {
//           .svc-grid-efacec { grid-template-columns: repeat(3, 1fr); }
//         }
//         @media (max-width: 700px) {
//           .svc-grid-efacec { grid-template-columns: repeat(2, 1fr); gap: 10px; }
//         }
//         @media (max-width: 420px) {
//           .svc-grid-efacec { grid-template-columns: 1fr; }
//         }
//       `}</style>

//       <div className="svc-grid-efacec">
//         {active.map((s, i) => {
//           const inner = (
//             <>
//               {/* Imagem com bordas arredondadas */}
//               <div className="svc-card-img-wrap">
//                 {s.image ? (
//                   <img
//                     className="svc-card-img"
//                     src={s.image}
//                     alt={s.title}
//                   />
//                 ) : (
//                   <div style={{
//                     width: "100%", height: "100%",
//                     background: FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length],
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                   }}>
//                     <svg viewBox="0 0 48 48" fill="none" width="40" height="40" opacity=".35">
//                       <rect x="6" y="6" width="36" height="36" rx="8" stroke="#fff" strokeWidth="2"/>
//                       <circle cx="18" cy="18" r="4" stroke="#fff" strokeWidth="2"/>
//                       <path d="M6 32l10-10 8 8 6-6 12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </div>
//                 )}
//               </div>

//               {/* Texto */}
//               <div className="svc-card-body">
//                 <h3 className="svc-card-title">{s.title}</h3>
//                 <p className="svc-card-short">{s.short}</p>
//                 <div className="svc-card-arrow">
//                   Saber mais
//                   <svg viewBox="0 0 14 14" fill="none" width="11">
//                     <path d="M2 7h10M8 3l4 4-4 4" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//               </div>
//             </>
//           );

//           return s.href ? (
//             <Link key={s.id} href={s.href} className="svc-card-efacec">
//               {inner}
//             </Link>
//           ) : (
//             <div key={s.id} className="svc-card-efacec">
//               {inner}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }



"use client";
import React from "react";
import Link from "next/link";

export interface Service {
  id: number;
  order: number;
  title: string;
  // short: string;
  image: string | null;   // ex: /servicos/solar.jpg
  href?: string | null;   // link opcional
  active: boolean;
}

/* ── dados fictícios para usar até integração com CMS ── */
export const MOCK_SERVICES: Service[] = [
  { id: 1, order: 1, title: "Quadros Elétricos", // short: "Concepção, montagem e ensaio de quadros de baixa tensão para uso industrial, comercial e residencial.",
    image: "/img/Asset14.png", href: null, active: true },
  { id: 2, order: 2, title: "Energia Solar & Armazenamento", // short: "Sistemas fotovoltaicos on-grid, off-grid e híbridos com soluções de armazenamento de alta densidade.",
    image: "/img/imgi_127_ecoflow-delta-3-series-solar-gen_2000x.png", href: null, active: true },
  { id: 3, order: 3, title: "Energia Crítica & UPS", // short: "Alimentação ininterrupta para data centers, hospitais e infraestruturas críticas.",
    image: "/img/hero-1773083797469-anjmv.png", href: null, active: true },
  { id: 4, order: 4, title: "Proteção Atmosférica", // short: "Projeto e instalação de sistemas de proteção contra descargas atmosféricas (SPDA/LPMS).",
    image: "/img/imgi_112_ecoflow-river-3-plus-portable-po_4_400x@2x.png", href: null, active: true },
  { id: 5, order: 5, title: "Mobilidade Elétrica", // short: "Infra-estruturas de carregamento para veículos elétricos em condomínios, empresas e espaços públicos.",
    image: "/img/Asset 12 ddd.png", href: null, active: true },
  { id: 6, order: 6, title: "Postos de Transformação", // short: "Construção e manutenção de postos de transformação MT/BT, câmaras de seccionamento e subestações.",
    image: "/img/Asset 5.png", href: null, active: true },
  { id: 7, order: 7, title: "Auditoria Energética", // short: "Levantamento e análise do consumo energético com identificação de oportunidades de melhoria e certificação.",
    image: "/img/imgi_103_12333-15871037.jpg", href: null, active: true },
  { id: 8, order: 8, title: "Telecomunicações & SATCOM", // short: "Redes estruturadas, fibra óptica, sistemas de comunicação por satélite e infraestrutura de dados.",
    image: "/img/Asset 18.png", href: null, active: true },
];

/* ── fallback gradient por índice quando não há imagem ── */
const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg,#095b66,#0a7a89)",
  "linear-gradient(135deg,#b45309,#d97706)",
  "linear-gradient(135deg,#1e3a8a,#2563eb)",
  "linear-gradient(135deg,#7c3aed,#6d28d9)",
  "linear-gradient(135deg,#0f766e,#0d9488)",
  "linear-gradient(135deg,#0e7490,#0891b2)",
  "linear-gradient(135deg,#166534,#16a34a)",
  "linear-gradient(135deg,#374151,#4b5563)",
];

export default function ServicesSection({ services }: { services: Service[] }) {
  const active = services.filter(s => s.active).sort((a, b) => a.order - b.order);
  if (!active.length) return null;

  return (
    <>
      <style>{`
        .svc-grid-efacec {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
        }
        .svc-card-efacec {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          transition: box-shadow .3s, transform .3s;
        }
        .svc-card-efacec:hover {
          transform: translateY(-4px);
        }
        .svc-card-img-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          margin: 10px 10px 0;
          aspect-ratio: 4 / 3;
          background: #e5eef0;
        }
        .svc-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform .55s cubic-bezier(.25,.46,.45,.94);
        }
        .svc-card-efacec:hover .svc-card-img {
          transform: scale(1.06);
        }
        .svc-card-body {
          padding: 18px 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .svc-card-title {
          font-size: 15px;
          font-weight: 800;
          color: #0a1c1e;
          line-height: 1.25;
          margin: 0;
        }
        .svc-card-short {
          font-size: 12.5px;
          color: #5a8285;
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }
        .svc-card-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #095b66;
          margin-top: 8px;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity .25s, transform .25s;
        }
        .svc-card-efacec:hover .svc-card-arrow {
          opacity: 1;
          transform: none;
        }

        @media (max-width: 1060px) {
          .svc-grid-efacec { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 700px) {
          .svc-grid-efacec { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        }
        @media (max-width: 420px) {
          .svc-grid-efacec { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="svc-grid-efacec">
        {active.map((s, i) => {
          const inner = (
            <>
              {/* Imagem com bordas arredondadas */}
              <div className="svc-card-img-wrap">
                {s.image ? (
                  <img
                    className="svc-card-img"
                    src={s.image}
                    alt={s.title}
                  />
                ) : (
                  <div style={{
                    width: "100%", height: "100%",
                    background: FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length],
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg viewBox="0 0 48 48" fill="none" width="40" height="40" opacity=".35">
                      <rect x="6" y="6" width="36" height="36" rx="8" stroke="#fff" strokeWidth="2"/>
                      <circle cx="18" cy="18" r="4" stroke="#fff" strokeWidth="2"/>
                      <path d="M6 32l10-10 8 8 6-6 12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* Texto */}
              <div className="svc-card-body">
                <h3 className="svc-card-title">{s.title}</h3>
                {/* <p className="svc-card-short">{s.short}</p> */}
                <div className="svc-card-arrow">
                  Saber mais
                  <svg viewBox="0 0 14 14" fill="none" width="11">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </>
          );

          return s.href ? (
            <Link key={s.id} href={s.href} className="svc-card-efacec">
              {inner}
            </Link>
          ) : (
            <div key={s.id} className="svc-card-efacec">
              {inner}
            </div>
          );
        })}
      </div>
    </>
  );
}