// // app/components/ProductsSection.tsx
// "use client";
// import React, { useState } from "react";

// export interface Product {
//   id: number;
//   order: number;
//   slug: string;
//   name: string;
//   desc: string;
//   color: string;
//   lightColor: string;
//   specs: string[];
//   brands: string[];
//   iconIndex: number;
//   active: boolean;
// }

// interface Props {
//   products: Product[];
// }

// /* ─────────────────────────────────────────────
//    TAB ICON — small (sidebar)
// ───────────────────────────────────────────── */
// function TabIcon({ index, active }: { index: number; active: boolean }) {
//   const stroke = active ? "#fff" : "#095b66";
//   const fill   = active ? "#fff" : "#095b66";
//   const fillo  = (op: number) => active ? `rgba(255,255,255,${op})` : `rgba(9,91,102,${op})`;

//   return (
//     <svg viewBox="0 0 48 48" fill="none" width="22" height="22">
//       {index === 0 && <>
//         <circle cx="24" cy="24" r="8" fill={fill}/>
//         <path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.5 11.5l3.5 3.5M33 33l3.5 3.5M11.5 36.5l3.5-3.5M33 15l3.5-3.5"
//           stroke={stroke} strokeWidth="2.5" strokeLinecap="round"/>
//       </>}
//       {index === 1 && <>
//         <rect x="14" y="6" width="20" height="36" rx="3" stroke={stroke} strokeWidth="2"/>
//         <rect x="18" y="10" width="12" height="5" rx="1.5" fill={fill}/>
//         <rect x="18" y="18" width="12" height="5" rx="1.5" fill={fill} opacity=".5"/>
//         <rect x="18" y="26" width="12" height="5" rx="1.5" fill={fill} opacity=".3"/>
//       </>}
//       {index === 2 && <>
//         <rect x="6" y="6" width="36" height="36" rx="2" stroke={stroke} strokeWidth="2"/>
//         <rect x="10" y="10" width="28" height="6" rx="1" fill={fill} opacity=".7"/>
//         <circle cx="15" cy="26" r="3" fill={fill}/>
//         <circle cx="24" cy="26" r="3" fill={fill} opacity=".5"/>
//         <circle cx="33" cy="26" r="3" fill={fill} opacity=".3"/>
//       </>}
//       {index === 3 && <>
//         <rect x="8" y="14" width="32" height="22" rx="2" stroke={stroke} strokeWidth="2"/>
//         <path d="M24 24l-5 6h6l-4 6" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//       </>}
//       {index === 4 && <>
//         <rect x="10" y="16" width="28" height="22" rx="2" stroke={stroke} strokeWidth="2"/>
//         <path d="M24 8v8" stroke={stroke} strokeWidth="2.5" strokeLinecap="round"/>
//         <path d="M16 8h16" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
//       </>}
//       {index === 5 && <>
//         <rect x="6" y="16" width="36" height="22" rx="5" stroke={stroke} strokeWidth="2"/>
//         <circle cx="14" cy="40" r="4" fill={fillo(active ? .4 : 1)} opacity=".5"/>
//         <circle cx="34" cy="40" r="4" fill={fillo(active ? .4 : 1)} opacity=".5"/>
//         <path d="M12 27h8l3 5h14" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         <path d="M34 13v5M31 16h6" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
//       </>}
//     </svg>
//   );
// }

// /* ─────────────────────────────────────────────
//    DETAIL ICON — large (panel)
// ───────────────────────────────────────────── */
// function DetailIcon({ index }: { index: number }) {
//   return (
//     <svg viewBox="0 0 64 64" fill="none" width="44" height="44">
//       {index === 0 && <>
//         <circle cx="32" cy="32" r="10" fill="rgba(255,255,255,.9)"/>
//         <path d="M32 10v5M32 49v5M10 32h5M49 32h5M16.5 16.5l3.5 3.5M44 44l3.5 3.5M16.5 47.5l3.5-3.5M44 20l3.5-3.5"
//           stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/>
//       </>}
//       {index === 1 && <>
//         <rect x="18" y="6" width="28" height="52" rx="4" stroke="rgba(255,255,255,.9)" strokeWidth="2"/>
//         <rect x="22" y="12" width="20" height="8" rx="2" fill="rgba(255,255,255,.9)"/>
//         <rect x="22" y="24" width="20" height="8" rx="2" fill="rgba(255,255,255,.5)"/>
//         <rect x="22" y="36" width="20" height="8" rx="2" fill="rgba(255,255,255,.3)"/>
//         <path d="M28 60h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/>
//       </>}
//       {index === 2 && <>
//         <rect x="8" y="8" width="48" height="48" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/>
//         <rect x="14" y="14" width="36" height="8" rx="2" fill="rgba(255,255,255,.9)" opacity=".8"/>
//         <circle cx="20" cy="34" r="5" fill="rgba(255,255,255,.9)"/>
//         <circle cx="32" cy="34" r="5" fill="rgba(255,255,255,.6)"/>
//         <circle cx="44" cy="34" r="5" fill="rgba(255,255,255,.3)"/>
//       </>}
//       {index === 3 && <>
//         <rect x="10" y="16" width="44" height="32" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/>
//         <path d="M32 24l-8 10h10l-6 8" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//       </>}
//       {index === 4 && <>
//         <rect x="12" y="20" width="40" height="30" rx="3" stroke="rgba(255,255,255,.9)" strokeWidth="2"/>
//         <path d="M32 8v12" stroke="rgba(255,255,255,.9)" strokeWidth="2.5" strokeLinecap="round"/>
//         <path d="M20 8h24M20 14h24" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/>
//         <rect x="20" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/>
//         <rect x="34" y="28" width="10" height="14" rx="2" fill="rgba(255,255,255,.5)"/>
//       </>}
//       {index === 5 && <>
//         <rect x="8" y="22" width="48" height="26" rx="6" stroke="rgba(255,255,255,.9)" strokeWidth="2"/>
//         <circle cx="20" cy="52" r="5" fill="rgba(255,255,255,.4)"/>
//         <circle cx="20" cy="52" r="3" fill="rgba(255,255,255,.9)"/>
//         <circle cx="44" cy="52" r="5" fill="rgba(255,255,255,.4)"/>
//         <circle cx="44" cy="52" r="3" fill="rgba(255,255,255,.9)"/>
//         <path d="M14 30h14l4 8h18" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         <path d="M42 18v8M38 22h8" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round"/>
//       </>}
//     </svg>
//   );
// }

// /* ─────────────────────────────────────────────
//    COMPONENT
// ───────────────────────────────────────────── */
// export default function ProductsSection({ products }: Props) {
//   const active = products.filter(p => p.active).sort((a, b) => a.order - b.order);
//   const [activeIndex, setActiveIndex] = useState(0);

//   if (active.length === 0) return null;

//   const cur = active[activeIndex] ?? active[0];

//   return (
//     <>
//       <style>{`
//         .prod-tab {
//           padding: 14px 18px;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: all .2s;
//           border: 1.5px solid transparent;
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           width: 100%;
//           background: transparent;
//           font-family: 'Montserrat', sans-serif;
//         }
//         .prod-tab:hover { background: #f0f9fa; }
//         .prod-tab.on { background: #095b66; border-color: #095b66; }
//       `}</style>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 32, alignItems: "start" }}>

//         {/* ── Tab list (sidebar) ── */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//           {active.map((p, i) => (
//             <button
//               key={p.id}
//               className={`prod-tab ${activeIndex === i ? "on" : ""}`}
//               onClick={() => setActiveIndex(i)}
//               aria-label={p.name}
//             >
//               <div style={{
//                 width: 36, height: 36, borderRadius: 8, flexShrink: 0,
//                 background: activeIndex === i ? "rgba(255,255,255,.15)" : p.lightColor,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//               }}>
//                 <TabIcon index={p.iconIndex} active={activeIndex === i} />
//               </div>
//               <span style={{
//                 fontSize: 13,
//                 fontWeight: 700,
//                 color: activeIndex === i ? "#fff" : "#1a2c2e",
//                 textAlign: "left",
//                 lineHeight: 1.3,
//               }}>
//                 {p.name}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* ── Detail panel ── */}
//         <div
//           key={cur.id}
//           style={{
//             background: "linear-gradient(135deg, #095b66 0%, #0a7a89 100%)",
//             borderRadius: 20,
//             padding: "44px 48px",
//             minHeight: 360,
//             position: "relative",
//             overflow: "hidden",
//           }}
//         >
//           {/* decorative circles */}
//           <div style={{ position: "absolute", right: -30, top: -30, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,.05)", pointerEvents: "none" }}/>
//           <div style={{ position: "absolute", right: 30, bottom: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }}/>

//           <div style={{ position: "relative", zIndex: 1 }}>

//             {/* icon */}
//             <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 14, width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
//               <DetailIcon index={cur.iconIndex} />
//             </div>

//             {/* slug */}
//             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 8 }}>
//               {cur.slug.toUpperCase()}
//             </p>

//             {/* name */}
//             <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>
//               {cur.name}
//             </h3>

//             {/* description */}
//             <p style={{ fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}>
//               {cur.desc}
//             </p>

//             {/* specs */}
//             <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
//               {cur.specs.map(s => (
//                 <span key={s} style={{
//                   background: "rgba(255,255,255,.12)",
//                   border: "1px solid rgba(255,255,255,.2)",
//                   borderRadius: 99,
//                   fontSize: 11, fontWeight: 600, color: "#fff",
//                   padding: "4px 12px",
//                 }}>
//                   {s}
//                 </span>
//               ))}
//             </div>

//             {/* brands */}
//             <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
//               <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: ".1em", textTransform: "uppercase" }}>Marcas:</span>
//               {cur.brands.map(b => (
//                 <span key={b} style={{
//                   fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,.8)",
//                   background: "rgba(255,255,255,.1)", borderRadius: 5, padding: "3px 10px",
//                 }}>
//                   {b}
//                 </span>
//               ))}
//             </div>

//           </div>
//         </div>

//       </div>
//     </>
//   );
// }






// app/components/ProductsSection.tsx
"use client";
import React, { useRef, useState, useEffect } from "react";

export interface Product {
  id: number;
  order: number;
  slug: string;
  name: string;
  desc: string;
  color: string;
  lightColor: string;
  specs: string[];
  brands: string[];
  iconIndex: number;
  image?: string | null;
  active: boolean;
}

interface Props {
  products: Product[];
}

function ProductIcon({ index }: { index: number }) {
  const c = "#095b66";
  return (
    <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
      {index === 0 && <>
        <circle cx="24" cy="24" r="8" fill={c}/>
        <path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.5 11.5l3.5 3.5M33 33l3.5 3.5M11.5 36.5l3.5-3.5M33 15l3.5-3.5"
          stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
      </>}
      {index === 1 && <>
        <rect x="14" y="6" width="20" height="36" rx="3" stroke={c} strokeWidth="2"/>
        <rect x="18" y="10" width="12" height="5" rx="1.5" fill={c}/>
        <rect x="18" y="18" width="12" height="5" rx="1.5" fill={c} opacity=".5"/>
        <rect x="18" y="26" width="12" height="5" rx="1.5" fill={c} opacity=".3"/>
      </>}
      {index === 2 && <>
        <rect x="6" y="6" width="36" height="36" rx="2" stroke={c} strokeWidth="2"/>
        <rect x="10" y="10" width="28" height="6" rx="1" fill={c} opacity=".7"/>
        <circle cx="15" cy="26" r="3" fill={c}/>
        <circle cx="24" cy="26" r="3" fill={c} opacity=".5"/>
        <circle cx="33" cy="26" r="3" fill={c} opacity=".3"/>
      </>}
      {index === 3 && <>
        <rect x="8" y="14" width="32" height="22" rx="2" stroke={c} strokeWidth="2"/>
        <path d="M24 24l-5 6h6l-4 6" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </>}
      {index === 4 && <>
        <rect x="10" y="16" width="28" height="22" rx="2" stroke={c} strokeWidth="2"/>
        <path d="M24 8v8" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M16 8h16" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      </>}
      {index === 5 && <>
        <rect x="6" y="16" width="36" height="22" rx="5" stroke={c} strokeWidth="2"/>
        <circle cx="14" cy="40" r="4" fill={c} opacity=".5"/>
        <circle cx="34" cy="40" r="4" fill={c} opacity=".5"/>
        <path d="M12 27h8l3 5h14" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34 13v5M31 16h6" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      </>}
    </svg>
  );
}

export default function ProductsSection({ products }: Props) {
  const active = products.filter(p => p.active).sort((a, b) => a.order - b.order);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [active.length]);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  if (active.length === 0) return null;

  return (
    <>
      <style>{`
        .pscroll-wrap {
          position: relative;
        }
        .pscroll {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 4px;
        }
        .pscroll::-webkit-scrollbar { display: none; }

        .pcard {
          flex: 0 0 300px;
          scroll-snap-align: start;
          background: #fff;
          border: 1.5px solid #e8f0f1;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color .25s, box-shadow .25s, transform .25s;
        }
        .pcard:hover {
          border-color: #095b66;
          box-shadow: 0 8px 32px rgba(9,91,102,.10);
          transform: translateY(-4px);
        }

        .pcard-img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          object-position: center;
          display: block;
          background: #f0f9fa;
        }
        .pcard-img-placeholder {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, #e8f5f7 0%, #d0edf1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pcard-body {
          padding: 20px 22px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 10px;
        }

        .pcard-name {
          font-size: 15px;
          font-weight: 800;
          color: #0a1c1e;
          line-height: 1.25;
          margin: 0;
        }

        .pcard-desc {
          font-size: 12.5px;
          color: #5a8285;
          line-height: 1.7;
          margin: 0;
          flex: 1;
        }

        .pcard-brands {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 4px;
        }
        .pcard-brand {
          font-size: 10px;
          font-weight: 800;
          color: #095b66;
          background: #f0f9fa;
          border: 1px solid #c8e8eb;
          border-radius: 6px;
          padding: 3px 9px;
          white-space: nowrap;
        }

        /* Arrow buttons */
        .pscroll-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 56px;
          border-radius: 8px;
          border: 1.5px solid #dde8ea;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,.08);
          transition: background .2s, border-color .2s, opacity .2s, transform .2s;
          z-index: 2;
        }
        .pscroll-arrow:hover {
          background: #095b66;
          border-color: #095b66;
        }
        .pscroll-arrow:hover svg path {
          stroke: #fff;
        }
        .pscroll-arrow.disabled {
          opacity: 0;
          pointer-events: none;
        }
        .pscroll-arrow-left  { left: -20px; }
        .pscroll-arrow-right { right: -20px; }

        /* fade edges */
        .pscroll-fade-left,
        .pscroll-fade-right {
          position: absolute;
          top: 0; bottom: 0;
          width: 48px;
          pointer-events: none;
          z-index: 1;
          transition: opacity .3s;
        }
        .pscroll-fade-left  { left: 0;  background: linear-gradient(to right, #fff, transparent); }
        .pscroll-fade-right { right: 0; background: linear-gradient(to left,  #fff, transparent); }
      `}</style>

      <div className="pscroll-wrap">

        {/* Left fade + arrow */}
        <div className="pscroll-fade-left"  style={{ opacity: canLeft  ? 1 : 0 }}/>
        <button className={`pscroll-arrow pscroll-arrow-left  ${!canLeft  ? "disabled" : ""}`} onClick={() => scroll("left")}  aria-label="Anterior">
          <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
            <path d="M12 5l-5 5 5 5" stroke="#095b66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Scroll track */}
        <div className="pscroll" ref={scrollRef}>
          {active.map((p) => (
            <div key={p.id} className="pcard">

              {/* Image or icon placeholder */}
              {p.image ? (
                <img
                  className="pcard-img"
                  src={p.image}
                  alt={p.name}
                />
              ) : (
                <div className="pcard-img-placeholder">
                  <ProductIcon index={p.iconIndex} />
                </div>
              )}

              {/* Body */}
              <div className="pcard-body">
                <h3 className="pcard-name">{p.name}</h3>
                <p className="pcard-desc">{p.desc}</p>
                {p.brands.length > 0 && (
                  <div className="pcard-brands">
                    {p.brands.map(b => (
                      <span key={b} className="pcard-brand">{b}</span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Right fade + arrow */}
        <div className="pscroll-fade-right" style={{ opacity: canRight ? 1 : 0 }}/>
        <button className={`pscroll-arrow pscroll-arrow-right ${!canRight ? "disabled" : ""}`} onClick={() => scroll("right")} aria-label="Próximo">
          <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
            <path d="M8 5l5 5-5 5" stroke="#095b66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </>
  );
}