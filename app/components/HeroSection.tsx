"use client";
import React, { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
export interface HeroSlide {
  id: number;
  order: number;
  tag: string;
  line1: string;
  line2: string;
  line3: string;
  sub: string;
  active: boolean;
}

interface HeroSectionProps {
  slides: HeroSlide[];
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
export default function HeroSection({ slides }: HeroSectionProps) {
  const active = slides.filter(s => s.active);
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const total = active.length;

  const advance = () => {
    setCurrent(c => (c + 1) % total);
    setAnimKey(k => k + 1);
  };

  useEffect(() => {
    if (total <= 1) return;
    timerRef.current = setInterval(advance, 6000);
    return () => clearInterval(timerRef.current);
  }, [total]);

  const cur = active[current];
  if (!cur) return null;

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      background: "#095b66",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* ── Decoração de fundo ── */}
      <div style={{ position:"absolute", top:0, right:0, width:"42%", height:"100%", background:"rgba(255,255,255,.04)", clipPath:"polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}/>
      <div style={{ position:"absolute", top:0, right:0, width:"30%", height:"100%", background:"rgba(255,255,255,.03)", clipPath:"polygon(25% 0, 100% 0, 100% 100%, 10% 100%)" }}/>
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize:"56px 56px", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", right:"6%", top:"50%", transform:"translateY(-50%)", opacity:.06, pointerEvents:"none" }}>
        <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330">
          <path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/>
        </svg>
      </div>

      {/* ── Conteúdo ── */}
      <div
        className="hero-sp sp"
        style={{ position:"relative", zIndex:2, flex:1, display:"flex", alignItems:"center", padding:"100px 80px 0", maxWidth:1280, margin:"0 auto", width:"100%" }}
      >
        <div style={{ maxWidth:660 }}>

          {/* Tag / badge */}
          <div key={`tag-${animKey}`} className="hero-in" style={{ animationDelay:"0s" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.2)", borderRadius:99, padding:"5px 14px", fontSize:11, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.85)", marginBottom:32 }}>
              {cur.tag}
            </div>
          </div>

          {/* Título 3 linhas */}
          <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay:".08s" }}>
            <h1 style={{ fontWeight:900, lineHeight:.97, color:"#fff", marginBottom:28 }}>
              <span style={{ display:"block", fontSize:"clamp(52px,7vw,96px)" }}>{cur.line1}</span>
              <span style={{ display:"block", fontSize:"clamp(52px,7vw,96px)", color:"rgba(255,255,255,.4)" }}>{cur.line2}</span>
              <span style={{ display:"block", fontSize:"clamp(52px,7vw,96px)" }}>{cur.line3}</span>
            </h1>
          </div>

          {/* Subtítulo + CTAs */}
          <div key={`s-${animKey}`} className="hero-in" style={{ animationDelay:".16s" }}>
            <p style={{ fontSize:16, lineHeight:1.75, color:"rgba(255,255,255,.7)", maxWidth:480, marginBottom:44 }}>
              {cur.sub}
            </p>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <a href="#produtos" className="btn-white">Ver Soluções</a>
              <a href="#contacto" className="btn-outline-w">Pedir Orçamento</a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Dots de navegação ── */}
      {total > 1 && (
        <div style={{ position:"relative", zIndex:2, padding:"40px 0 0", display:"flex", justifyContent:"center", gap:8 }}>
          {active.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "on" : ""}`}
              onClick={() => {
                clearInterval(timerRef.current);
                setCurrent(i);
                setAnimKey(k => k + 1);
                timerRef.current = setInterval(advance, 6000);
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* ── Wave bottom ── */}
      <div style={{ height:64, background:"#fff", clipPath:"ellipse(55% 100% at 50% 100%)", marginTop:40 }}/>
    </section>
  );
}