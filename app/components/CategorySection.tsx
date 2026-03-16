// "use client";
// import React, { useRef, useState, useEffect } from "react";

// export interface Category {
//   id: number;
//   title: string;
//   brands: string[];
//   active: boolean;
//   createdAt: string;
//   updatedAt: string;
//   iconIndex: number;
// }
 


// interface Props {
//   products: Category[];
// }

// function ProductIcon({ index }: { index: number }) {
//   const c = "#095b66";
//   return (
//     <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
//       {index === 0 && <>
//         <circle cx="24" cy="24" r="8" fill={c}/>
//         <path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.5 11.5l3.5 3.5M33 33l3.5 3.5M11.5 36.5l3.5-3.5M33 15l3.5-3.5"
//           stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
//       </>}
//       {index === 1 && <>
//         <rect x="14" y="6" width="20" height="36" rx="3" stroke={c} strokeWidth="2"/>
//         <rect x="18" y="10" width="12" height="5" rx="1.5" fill={c}/>
//         <rect x="18" y="18" width="12" height="5" rx="1.5" fill={c} opacity=".5"/>
//         <rect x="18" y="26" width="12" height="5" rx="1.5" fill={c} opacity=".3"/>
//       </>}
//       {index === 2 && <>
//         <rect x="6" y="6" width="36" height="36" rx="2" stroke={c} strokeWidth="2"/>
//         <rect x="10" y="10" width="28" height="6" rx="1" fill={c} opacity=".7"/>
//         <circle cx="15" cy="26" r="3" fill={c}/>
//         <circle cx="24" cy="26" r="3" fill={c} opacity=".5"/>
//         <circle cx="33" cy="26" r="3" fill={c} opacity=".3"/>
//       </>}
//       {index === 3 && <>
//         <rect x="8" y="14" width="32" height="22" rx="2" stroke={c} strokeWidth="2"/>
//         <path d="M24 24l-5 6h6l-4 6" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//       </>}
//       {index === 4 && <>
//         <rect x="10" y="16" width="28" height="22" rx="2" stroke={c} strokeWidth="2"/>
//         <path d="M24 8v8" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
//         <path d="M16 8h16" stroke={c} strokeWidth="2" strokeLinecap="round"/>
//       </>}
//       {index === 5 && <>
//         <rect x="6" y="16" width="36" height="22" rx="5" stroke={c} strokeWidth="2"/>
//         <circle cx="14" cy="40" r="4" fill={c} opacity=".5"/>
//         <circle cx="34" cy="40" r="4" fill={c} opacity=".5"/>
//         <path d="M12 27h8l3 5h14" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         <path d="M34 13v5M31 16h6" stroke={c} strokeWidth="2" strokeLinecap="round"/>
//       </>}
//     </svg>
//   );
// }

// export default function ProductsSection({ products }: Props) {
//   const active = products.filter(p => p.active).sort((a, b) => a.order - b.order);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [canLeft,  setCanLeft]  = useState(false);
//   const [canRight, setCanRight] = useState(false);

//   const checkScroll = () => {
//     const el = scrollRef.current;
//     if (!el) return;
//     setCanLeft(el.scrollLeft > 8);
//     setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
//   };

//   useEffect(() => {
//     checkScroll();
//     const el = scrollRef.current;
//     el?.addEventListener("scroll", checkScroll, { passive: true });
//     window.addEventListener("resize", checkScroll);
//     return () => {
//       el?.removeEventListener("scroll", checkScroll);
//       window.removeEventListener("resize", checkScroll);
//     };
//   }, [active.length]);

//   const scroll = (dir: "left" | "right") => {
//     scrollRef.current?.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
//   };

//   if (active.length === 0) return null;

//   return (
//     <>
//       <style>{`
//         .pscroll-wrap {
//           position: relative;
//         }
//         .pscroll {
//           display: flex;
//           gap: 16px;
//           overflow-x: auto;
//           scroll-snap-type: x mandatory;
//           -webkit-overflow-scrolling: touch;
//           scrollbar-width: none;
//           padding-bottom: 4px;
//         }
//         .pscroll::-webkit-scrollbar { display: none; }

//         .pcard {
//           flex: 0 0 300px;
//           scroll-snap-align: start;
//           background: #fff;
//           border: 1.5px solid #e8f0f1;
//           border-radius: 20px;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           transition: border-color .25s, box-shadow .25s, transform .25s;
//         }
//         .pcard:hover {
//           border-color: #095b66;
//           box-shadow: 0 8px 32px rgba(9,91,102,.10);
//           transform: translateY(-4px);
//         }

//         .pcard-img {
//           width: 100%;
//           aspect-ratio: 16 / 9;
//           object-fit: cover;
//           object-position: center;
//           display: block;
//           background: #f0f9fa;
//         }
//         .pcard-img-placeholder {
//           width: 100%;
//           aspect-ratio: 16 / 9;
//           background: linear-gradient(135deg, #e8f5f7 0%, #d0edf1 100%);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .pcard-body {
//           padding: 20px 22px 24px;
//           display: flex;
//           flex-direction: column;
//           flex: 1;
//           gap: 10px;
//         }

//         .pcard-name {
//           font-size: 15px;
//           font-weight: 800;
//           color: #0a1c1e;
//           line-height: 1.25;
//           margin: 0;
//         }

//         .pcard-desc {
//           font-size: 12.5px;
//           color: #5a8285;
//           line-height: 1.7;
//           margin: 0;
//           flex: 1;
//         }

//         .pcard-brands {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 5px;
//           margin-top: 4px;
//         }
//         .pcard-brand {
//           font-size: 10px;
//           font-weight: 800;
//           color: #095b66;
//           background: #f0f9fa;
//           border: 1px solid #c8e8eb;
//           border-radius: 6px;
//           padding: 3px 9px;
//           white-space: nowrap;
//         }

//         /* Arrow buttons */
//         .pscroll-arrow {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 40px;
//           height: 56px;
//           border-radius: 8px;
//           border: 1.5px solid #dde8ea;
//           background: #fff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           box-shadow: 0 4px 16px rgba(0,0,0,.08);
//           transition: background .2s, border-color .2s, opacity .2s, transform .2s;
//           z-index: 2;
//         }
//         .pscroll-arrow:hover {
//           background: #095b66;
//           border-color: #095b66;
//         }
//         .pscroll-arrow:hover svg path {
//           stroke: #fff;
//         }
//         .pscroll-arrow.disabled {
//           opacity: 0;
//           pointer-events: none;
//         }
//         .pscroll-arrow-left  { left: -20px; }
//         .pscroll-arrow-right { right: -20px; }

//         /* fade edges */
//         .pscroll-fade-left,
//         .pscroll-fade-right {
//           position: absolute;
//           top: 0; bottom: 0;
//           width: 48px;
//           pointer-events: none;
//           z-index: 1;
//           transition: opacity .3s;
//         }
//         .pscroll-fade-left  { left: 0;  background: linear-gradient(to right, #fff, transparent); }
//         .pscroll-fade-right { right: 0; background: linear-gradient(to left,  #fff, transparent); }
//       `}</style>

//       <div className="pscroll-wrap">

//         {/* Left fade + arrow */}
//         <div className="pscroll-fade-left"  style={{ opacity: canLeft  ? 1 : 0 }}/>
//         <button className={`pscroll-arrow pscroll-arrow-left  ${!canLeft  ? "disabled" : ""}`} onClick={() => scroll("left")}  aria-label="Anterior">
//           <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
//             <path d="M12 5l-5 5 5 5" stroke="#095b66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>

//         {/* Scroll track */}
//         <div className="pscroll" ref={scrollRef}>
//           {active.map((p) => (
//             <div key={p.id} className="pcard">

//               {/* Image or icon placeholder */}
//               {p.image ? (
//                 <img
//                   className="pcard-img"
//                   src={p.image}
//                   alt={p.name}
//                 />
//               ) : (
//                 <div className="pcard-img-placeholder">
//                   <ProductIcon index={p.iconIndex} />
//                 </div>
//               )}

//               {/* Body */}
//               <div className="pcard-body">
//                 <h3 className="pcard-name">{p.name}</h3>
//                 <p className="pcard-desc">{p.desc}</p>
//                 {p.brands.length > 0 && (
//                   <div className="pcard-brands">
//                     {p.brands.map(b => (
//                       <span key={b} className="pcard-brand">{b}</span>
//                     ))}
//                   </div>
//                 )}
//               </div>

//             </div>
//           ))}
//         </div>

//         {/* Right fade + arrow */}
//         <div className="pscroll-fade-right" style={{ opacity: canRight ? 1 : 0 }}/>
//         <button className={`pscroll-arrow pscroll-arrow-right ${!canRight ? "disabled" : ""}`} onClick={() => scroll("right")} aria-label="Próximo">
//           <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
//             <path d="M8 5l5 5-5 5" stroke="#095b66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>

//       </div>
//     </>
//   );
// }





"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────
   TYPES  (espelham o modelo Prisma Product)
───────────────────────────────────────────── */
export interface ProductHighlight {
  label: string;   // ex: "+50 MW"
  value: string;   // ex: "instalados"
}

// export interface Category {
//   id: number;
//   title: string;
//   brands: string[];
//   description: string;
//   active: boolean;
//   iconIndex: number;
//   image: string;
//   createdAt: string;
//   updatedAt: string;
  
// }

export interface Category {
  id: number;
  title: string;
  brands: string[];
  description: string;
  active: boolean;
  iconIndex: number;
  image: string | null;  // ← was: string
  createdAt: Date | string;
  updatedAt: Date | string;
}

interface Props {
  categories: Category[];
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function CategoriesSection({ categories }: Props) {
  const active    = categories.filter(c => c.active);
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

  const scroll = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });

  if (active.length === 0) return null;

  return (
    <>
      <style>{`
        .pscroll-wrap { position: relative; }

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

        /* ── Card ── */
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
          cursor: pointer;
        }
        .pcard:hover {
          border-color: #095b66;
          box-shadow: 0 8px 32px rgba(9,91,102,.10);
          transform: translateY(-4px);
        }

        /* ── Image ── */
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

        /* ── Body ── */
        .pcard-body {
          padding: 20px 22px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 10px;
        }
        .pcard-category {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 5px;
          align-self: flex-start;
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

        /* ── Arrows ── */
        .pscroll-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px; height: 56px;
          border-radius: 8px;
          border: 1.5px solid #dde8ea;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,.08);
          transition: background .2s, border-color .2s, opacity .2s;
          z-index: 2;
        }
        .pscroll-arrow:hover { background: #095b66; border-color: #095b66; }
        .pscroll-arrow:hover svg path { stroke: #fff; }
        .pscroll-arrow.disabled { opacity: 0; pointer-events: none; }
        .pscroll-arrow-left  { left: -20px; }
        .pscroll-arrow-right { right: -20px; }

        /* ── Fade edges ── */
        .pscroll-fade-left,
        .pscroll-fade-right {
          position: absolute;
          top: 0; bottom: 0;
          width: 48px;
          pointer-events: none;
          z-index: 1;
          transition: opacity .3s;
        }
        .pscroll-fade-left  { left: 0;  background: linear-gradient(to right, #f4f6f6, transparent); }
        .pscroll-fade-right { right: 0; background: linear-gradient(to left,  #f4f6f6, transparent); }
      `}</style>

      <div className="pscroll-wrap">

        {/* Left fade + arrow */}
        <div className="pscroll-fade-left" style={{ opacity: canLeft ? 1 : 0 }} />
        <button
          className={`pscroll-arrow pscroll-arrow-left ${!canLeft ? "disabled" : ""}`}
          onClick={() => scroll("left")} aria-label="Anterior"
        >
          <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
            <path d="M12 5l-5 5 5 5" stroke="#095b66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Scroll track */}
        <div className="pscroll" ref={scrollRef}>
          {active.map(c => (
            <div key={c.id} className="pcard">

              {/* ── Imagem ── */}
              {c.image ? (
                <Image className="pcard-img" src={c.image} alt={c.title} width={200} height={200} />
              ) : (
                <div className="pcard-img-placeholder">
                  <span style={{ fontSize: "12px", color: "#095b66" }}>No image</span>
                </div>
              )}
             

              {/* ── Body ── */}
              <div className="pcard-body">
               
                <h3 className="pcard-name">{c.title}</h3>
                {/* <p className="pcard-desc">{c.description}</p> */}

                {/* Marcas — apenas se existirem */}
                {c.brands.length > 0 && (
                  <div className="pcard-brands">
                    {c.brands.map(b => (
                      <span key={b} className="pcard-brand">{b}</span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Right fade + arrow */}
        <div className="pscroll-fade-right" style={{ opacity: canRight ? 1 : 0 }} />
        <button
          className={`pscroll-arrow pscroll-arrow-right ${!canRight ? "disabled" : ""}`}
          onClick={() => scroll("right")} aria-label="Próximo"
        >
          <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
            <path d="M8 5l5 5-5 5" stroke="#095b66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </>
  );
}