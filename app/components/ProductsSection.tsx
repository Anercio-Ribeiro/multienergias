"use client";
import React, { useRef, useState, useEffect } from "react";

/* ─────────────────────────────────────────────
   TYPES  (espelham o modelo Prisma Product)
───────────────────────────────────────────── */
export interface ProductHighlight {
  label: string;   // ex: "+50 MW"
  value: string;   // ex: "instalados"
}

export interface Product {
  id:         number;
  order:      number;
  slug:       string;
  name:       string;
  category:   string;                  // ex: "Energia Solar"
  desc:       string;                  // texto curto — exibido no card
  longDesc:   string;                  // texto completo — página dedicada
  color:      string;
  lightColor: string;
  specs:      string[];
  brands:     string[];                // pode ser [] 
  highlights: ProductHighlight[];      // métricas de destaque
  iconIndex:  number;
  image:      string | null;           // URL da imagem de capa
  active:     boolean;
}

interface Props {
  products: Product[];
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function ProductsSection({ products }: Props) {
  const active    = products.filter(p => p.active).sort((a, b) => a.order - b.order);
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
          {active.map(p => (
            <div key={p.id} className="pcard">

              {/* ── Imagem ── */}
              {p.image ? (
                <img className="pcard-img" src={p.image} alt={p.name} />
              ) : (
                <div className="pcard-img-placeholder">
                  <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
                    <rect x="4" y="4" width="40" height="40" rx="8"
                      stroke={p.color} strokeWidth="2" strokeDasharray="4 3"/>
                    <circle cx="18" cy="20" r="4" fill={p.color} opacity=".35"/>
                    <path d="M4 34l12-10 8 8 6-6 14 12" stroke={p.color} strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" opacity=".5"/>
                  </svg>
                </div>
              )}

              {/* ── Body ── */}
              <div className="pcard-body">
                {p.category && (
                  <span
                    className="pcard-category"
                    style={{ background: p.lightColor, color: p.color }}
                  >
                    {p.category}
                  </span>
                )}
                <h3 className="pcard-name">{p.name}</h3>
                <p className="pcard-desc">{p.desc}</p>

                {/* Marcas — apenas se existirem */}
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