// // "use client";
// // import React, { useState, useEffect, useRef } from "react";
// // import Image from "next/image";


// // /* ─────────────────────────────────────────────
// //    TYPES
// // ───────────────────────────────────────────── */
// // export interface HeroSlide {
// //   id: number;
// //   order: number;
// //   tag: string;
// //   line1: string;
// //   line2: string;
// //   line3: string;
// //   sub: string;
// //   image: string | null;   // ← caminho da imagem de fundo, ex: /img/hero-123.jpg
// //   active: boolean;
// // }

// // interface HeroSectionProps {
// //   slides: HeroSlide[];
// // }

// // /* ─────────────────────────────────────────────
// //    HERO SECTION
// // ───────────────────────────────────────────── */
// // export default function HeroSection({ slides }: HeroSectionProps) {
// //   const active     = slides.filter(s => s.active);
// //   const [current,  setCurrent]  = useState(0);
// //   const [animKey,  setAnimKey]  = useState(0);
// //   const timerRef   = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
// //   const total      = active.length;

// //   const advance = () => {
// //     setCurrent(c => (c + 1) % total);
// //     setAnimKey(k => k + 1);
// //   };

// //   useEffect(() => {
// //     if (total <= 1) return;
// //     timerRef.current = setInterval(advance, 6000);
// //     return () => clearInterval(timerRef.current);
// //   }, [total]);

// //   const cur = active[current];
// //   if (!cur) return null;

// //   return (
// //     <section style={{
// //       position: "relative",
// //       minHeight: "100vh",
// //       background: cur.image ? "transparent" : "#095b66",
// //       overflow: "hidden",
// //       display: "flex",
// //       flexDirection: "column",
// //     }}>

// //       {/* ══════════════════════════════════════
// //           IMAGEM DE FUNDO
// //           Ocupa 100% da largura e altura.
// //           Um overlay garante que o texto é legível.
// //       ══════════════════════════════════════ */}
// //       {cur.image && (
// //         <div
// //           key={`img-${animKey}`}      // anima a troca de imagem
// //           style={{
// //             position: "absolute",
// //             inset: 0,
// //             zIndex: 0,
// //             animation: "heroImgIn .9s ease both",
// //           }}
// //         >
// //           {/* Imagem full-cover */}
// //           <img
// //             src={cur.image}
// //             alt=""
// //             style={{
// //               width: "100%",
// //               height: "100vh",
// //               objectFit: "cover",
// //               objectPosition: "center",
// //               display: "block",
// //             }}
// //           />

// //         </div>
// //       )}

// //       {/* ── Decoração geométrica (apenas sem imagem) ── */}
// //       {!cur.image && (
// //         <>
// //           <div style={{ position:"absolute", top:0, right:0, width:"42%", height:"100%", background:"rgba(255,255,255,.04)", clipPath:"polygon(15% 0, 100% 0, 100% 100%, 0% 100%)", zIndex:1 }}/>
// //           <div style={{ position:"absolute", top:0, right:0, width:"30%", height:"100%", background:"rgba(255,255,255,.025)", clipPath:"polygon(25% 0, 100% 0, 100% 100%, 10% 100%)", zIndex:1 }}/>
// //           <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize:"56px 56px", pointerEvents:"none", zIndex:1 }}/>
// //           <div style={{ position:"absolute", right:"6%", top:"50%", transform:"translateY(-50%)", opacity:.05, pointerEvents:"none", zIndex:1 }}>
// //             <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330">
// //               <path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/>
// //             </svg>
// //           </div>
// //         </>
// //       )}

// //       {/* ══════════════════════════════════════
// //           CONTEÚDO PRINCIPAL
// //       ══════════════════════════════════════ */}
// //       <div
// //         style={{
// //           position: "relative",
// //           zIndex: 2,
// //           flex: 1,
// //           display: "flex",
// //           alignItems: "center",
// //           padding: "100px 80px 0",
// //           maxWidth: 1660,
// //           margin: "0 auto",
// //           width: "100%",
// //         }}
// //       >
// //         <div style={{ maxWidth: 660 }}>

// //           {/* Tag / badge */}
// //           {/* <div key={`tag-${animKey}`} className="hero-in" style={{ animationDelay: "0s" }}>
// //             <div style={{
// //               display: "inline-flex", alignItems: "center", gap: 8,
// //               background: "rgba(255,255,255,.12)", border: "1px solid rgba(150, 216, 225, 0.54)",
// //               borderRadius: 99, padding: "5px 14px",
// //               fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" as const,
// //               color: "rgba(255,255,255,.9)", marginBottom: 32,
// //               backdropFilter: "blur(4px)",
// //             }}>
// //               {cur.tag}
// //             </div>
// //           </div> */}

// //           {/* Título 3 linhas */}
// //           <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s", paddingBottom: 120 }}>
// //             <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28, textShadow: cur.image ? "0 2px 20px rgba(0,0,0,.3)" : "none" }}>
// //               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)" }}>{cur.line1}</span>
// //               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)", color: "rgba(255, 255, 255, 0.58)" }}>{cur.line2}</span>
// //               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)" }}>{cur.line3}</span>
// //             </h1>
// //           </div>

// //           {/* Subtítulo + CTAs (descomentado para activar) */}
// //           {/* <div key={`s-${animKey}`} className="hero-in" style={{ animationDelay: ".16s" }}>
// //             <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.75)", maxWidth: 480, marginBottom: 44 }}>
// //               {cur.sub}
// //             </p>
// //             <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
// //               <a href="#produtos" className="btn-white">Ver Soluções</a>
// //               <a href="#contacto" className="btn-outline-w">Pedir Orçamento</a>
// //             </div>
// //           </div> */}

// //         </div>
// //       </div>

// //       {/* ── Dots de navegação ── */}
// //       {total > 1 && (
// //         <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
// //           {active.map((_, i) => (
// //             <button
// //               key={i}
// //               className={`dot ${i === current ? "on" : ""}`}
// //               onClick={() => {
// //                 clearInterval(timerRef.current);
// //                 setCurrent(i);
// //                 setAnimKey(k => k + 1);
// //                 timerRef.current = setInterval(advance, 6000);
// //               }}
// //               aria-label={`Slide ${i + 1}`}
// //             />
// //           ))}
// //         </div>
// //       )}

// //       {/* ── Wave bottom ── */}
// //       {/* <div style={{ position: "relative", zIndex: 2, height: 64, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)", marginTop: 40 }}/> */}

// //       {/* ── Keyframes inline ── */}
// //       <style>{`
// //         @keyframes heroImgIn {
// //           from { opacity: 0; transform: scale(1.03); }
// //           to   { opacity: 1; transform: scale(1); }
// //         }
// //         .hero-in {
// //           animation: heroFadeUp .55s cubic-bezier(.22,1,.36,1) both;
// //         }
// //         @keyframes heroFadeUp {
// //           from { opacity: 0; transform: translateY(18px); }
// //           to   { opacity: 1; transform: none; }
// //         }
// //         .dot {
// //           width: 8px; height: 8px; border-radius: 50%;
// //           border: none; cursor: pointer;
// //           background: rgba(255,255,255,.35);
// //           transition: all .3s;
// //           padding: 0;
// //         }
// //         .dot.on {
// //           background: #fff;
// //           width: 22px;
// //           border-radius: 4px;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }




// // "use client";
// // import React, { useState, useEffect, useRef } from "react";

// // /* ─────────────────────────────────────────────
// //    TYPES
// // ───────────────────────────────────────────── */
// // export interface HeroSlide {
// //   id: number;
// //   order: number;
// //   tag: string;
// //   line1: string;
// //   line2: string;
// //   line3: string;
// //   sub: string;
// //   image: string | null;
// //   active: boolean;
// // }

// // interface HeroSectionProps {
// //   slides: HeroSlide[];
// // }

// // /* ─────────────────────────────────────────────
// //    HERO SECTION
// // ───────────────────────────────────────────── */
// // export default function HeroSection({ slides }: HeroSectionProps) {
// //   const active    = slides.filter(s => s.active);
// //   const [current, setCurrent] = useState(0);
// //   const [animKey, setAnimKey] = useState(0);
// //   const timerRef  = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
// //   const total     = active.length;

// //   const advance = () => {
// //     setCurrent(c => (c + 1) % total);
// //     setAnimKey(k => k + 1);
// //   };

// //   useEffect(() => {
// //     if (total <= 1) return;
// //     timerRef.current = setInterval(advance, 6000);
// //     return () => clearInterval(timerRef.current);
// //   }, [total]);

// //   const cur = active[current];
// //   if (!cur) return null;

// //   return (
// //     <section style={{
// //       position: "relative",
// //       /* ▸ altura fixa em 100vh para a imagem cobrir tudo */
// //       height: "100vh",
// //       background: cur.image ? "transparent" : "#095b66",
// //       overflow: "hidden",
// //       display: "flex",
// //       flexDirection: "column",
// //     }}>

// //       {/* ══════════════════════════════════════
// //           IMAGEM DE FUNDO — cobre 100 % da secção
// //       ══════════════════════════════════════ */}
// //       {cur.image && (
// //         <div
// //           key={`img-${animKey}`}
// //           style={{
// //             position: "absolute",
// //             inset: 0,           /* ← top/right/bottom/left: 0  */
// //             zIndex: 0,
// //             animation: "heroImgIn .9s ease both",
// //           }}
// //         >
// //           <img
// //             src={cur.image}
// //             alt=""
// //             style={{
// //               width: "100%",
// //               height: "100%",   /* ← 100% do container absoluto que já tem inset:0 */
// //               objectFit: "cover",
// //               objectPosition: "center",
// //               display: "block",
// //             }}
// //           />
// //         </div>
// //       )}

// //       {/* ── Decoração geométrica (apenas sem imagem) ── */}
// //       {!cur.image && (
// //         <>
// //           <div style={{ position:"absolute", top:0, right:0, width:"42%", height:"100%", background:"rgba(255,255,255,.04)", clipPath:"polygon(15% 0, 100% 0, 100% 100%, 0% 100%)", zIndex:1 }}/>
// //           <div style={{ position:"absolute", top:0, right:0, width:"30%", height:"100%", background:"rgba(255,255,255,.025)", clipPath:"polygon(25% 0, 100% 0, 100% 100%, 10% 100%)", zIndex:1 }}/>
// //           <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize:"56px 56px", pointerEvents:"none", zIndex:1 }}/>
// //           <div style={{ position:"absolute", right:"6%", top:"50%", transform:"translateY(-50%)", opacity:.05, pointerEvents:"none", zIndex:1 }}>
// //             <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330">
// //               <path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/>
// //             </svg>
// //           </div>
// //         </>
// //       )}

// //       {/* ══════════════════════════════════════
// //           CONTEÚDO PRINCIPAL
// //       ══════════════════════════════════════ */}
// //       <div
// //         style={{
// //           position: "relative",
// //           zIndex: 2,
// //           flex: 1,
// //           display: "flex",
// //           alignItems: "center",
// //           padding: "100px 80px 0",
// //           maxWidth: 1660,
// //           margin: "0 auto",
// //           width: "100%",
// //         }}
// //       >
// //         <div style={{ maxWidth: 660 }}>

// //           {/* Título 3 linhas */}
// //           <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s", paddingBottom: 120 }}>
// //             <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28, textShadow: cur.image ? "0 2px 20px rgba(0,0,0,.3)" : "none" }}>
// //               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)" }}>{cur.line1}</span>
// //               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)", color: "rgba(255, 255, 255, 0.58)" }}>{cur.line2}</span>
// //               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)" }}>{cur.line3}</span>
// //             </h1>
// //           </div>

// //         </div>
// //       </div>

// //       {/* ── Dots de navegação ── */}
// //       {total > 1 && (
// //         <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
// //           {active.map((_, i) => (
// //             <button
// //               key={i}
// //               className={`dot ${i === current ? "on" : ""}`}
// //               onClick={() => {
// //                 clearInterval(timerRef.current);
// //                 setCurrent(i);
// //                 setAnimKey(k => k + 1);
// //                 timerRef.current = setInterval(advance, 6000);
// //               }}
// //               aria-label={`Slide ${i + 1}`}
// //             />
// //           ))}
// //         </div>
// //       )}

// //       {/* ── Keyframes inline ── */}
// //       <style>{`
// //         @keyframes heroImgIn {
// //           from { opacity: 0; transform: scale(1.03); }
// //           to   { opacity: 1; transform: scale(1); }
// //         }
// //         .hero-in {
// //           animation: heroFadeUp .55s cubic-bezier(.22,1,.36,1) both;
// //         }
// //         @keyframes heroFadeUp {
// //           from { opacity: 0; transform: translateY(18px); }
// //           to   { opacity: 1; transform: none; }
// //         }
// //         .dot {
// //           width: 8px; height: 8px; border-radius: 50%;
// //           border: none; cursor: pointer;
// //           background: rgba(255,255,255,.35);
// //           transition: all .3s;
// //           padding: 0;
// //         }
// //         .dot.on {
// //           background: #fff;
// //           width: 22px;
// //           border-radius: 4px;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }




// // "use client";
// // import React, { useState, useEffect, useRef } from "react";

// // export interface HeroSlide {
// //   id: number;
// //   order: number;
// //   tag: string;
// //   line1: string;
// //   line2: string;
// //   line3: string;
// //   sub: string;
// //   image: string | null;
// //   active: boolean;
// // }

// // interface HeroSectionProps {
// //   slides: HeroSlide[];
// // }

// // export default function HeroSection({ slides }: HeroSectionProps) {
// //   const active    = slides.filter(s => s.active);
// //   const [current, setCurrent] = useState(0);
// //   const [animKey, setAnimKey] = useState(0);
// //   const timerRef  = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
// //   const total     = active.length;

// //   const advance = () => {
// //     setCurrent(c => (c + 1) % total);
// //     setAnimKey(k => k + 1);
// //   };

// //   useEffect(() => {
// //     if (total <= 1) return;
// //     timerRef.current = setInterval(advance, 6000);
// //     return () => clearInterval(timerRef.current);
// //   }, [total]);

// //   const cur = active[current];
// //   if (!cur) return null;

// //   return (
// //     <section style={{
// //       /*
// //         ── CHAVE DO EFEITO EFACEC ──
// //         position: sticky + top: 0 faz o Hero ficar colado ao topo
// //         enquanto o utilizador faz scroll. A ServicesSection, que vem
// //         a seguir no DOM, "sobe" por cima visualmente.
// //         z-index: 0 garante que a Services fica à frente.
// //       */
// //       position: "sticky",
// //       top: 0,
// //       zIndex: 0,

// //       height: "100vh",
// //       background: cur.image ? "transparent" : "#095b66",
// //       overflow: "hidden",
// //       display: "flex",
// //       flexDirection: "column",
// //     }}>

// //       {/* ── Imagem de fundo — cobre 100% da secção ── */}
// //       {cur.image && (
// //         <div
// //           key={`img-${animKey}`}
// //           style={{
// //             position: "absolute",
// //             inset: 0,
// //             zIndex: 0,
// //             animation: "heroImgIn .9s ease both",
// //           }}
// //         >
// //           <img
// //             src={cur.image}
// //             alt=""
// //             style={{
// //               width: "100%",
// //               height: "100%",
// //               objectFit: "cover",
// //               objectPosition: "center",
// //               display: "block",
// //             }}
// //           />
// //         </div>
// //       )}

// //       {/* ── Decoração geométrica (sem imagem) ── */}
// //       {!cur.image && (
// //         <>
// //           <div style={{ position:"absolute", top:0, right:0, width:"42%", height:"100%", background:"rgba(255,255,255,.04)", clipPath:"polygon(15% 0, 100% 0, 100% 100%, 0% 100%)", zIndex:1 }}/>
// //           <div style={{ position:"absolute", top:0, right:0, width:"30%", height:"100%", background:"rgba(255,255,255,.025)", clipPath:"polygon(25% 0, 100% 0, 100% 100%, 10% 100%)", zIndex:1 }}/>
// //           <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize:"56px 56px", pointerEvents:"none", zIndex:1 }}/>
// //           <div style={{ position:"absolute", right:"6%", top:"50%", transform:"translateY(-50%)", opacity:.05, pointerEvents:"none", zIndex:1 }}>
// //             <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330">
// //               <path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/>
// //             </svg>
// //           </div>
// //         </>
// //       )}

// //       {/* ── Conteúdo principal ── */}
// //       <div
// //         style={{
// //           position: "relative",
// //           zIndex: 2,
// //           flex: 1,
// //           display: "flex",
// //           alignItems: "center",
// //           padding: "100px 80px 0",
// //           maxWidth: 1660,
// //           margin: "0 auto",
// //           width: "100%",
// //         }}
// //       >
// //         <div style={{ maxWidth: 660 }}>
// //           <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s", paddingBottom: 120 }}>
// //             <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28, textShadow: cur.image ? "0 2px 20px rgba(0,0,0,.3)" : "none" }}>
// //               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)" }}>{cur.line1}</span>
// //               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)", color: "rgba(255,255,255,0.58)" }}>{cur.line2}</span>
// //               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)" }}>{cur.line3}</span>
// //             </h1>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ── Dots de navegação ── */}
// //       {total > 1 && (
// //         <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
// //           {active.map((_, i) => (
// //             <button
// //               key={i}
// //               className={`dot ${i === current ? "on" : ""}`}
// //               onClick={() => {
// //                 clearInterval(timerRef.current);
// //                 setCurrent(i);
// //                 setAnimKey(k => k + 1);
// //                 timerRef.current = setInterval(advance, 6000);
// //               }}
// //               aria-label={`Slide ${i + 1}`}
// //             />
// //           ))}
// //         </div>
// //       )}

// //       <style>{`
// //         @keyframes heroImgIn {
// //           from { opacity: 0; transform: scale(1.03); }
// //           to   { opacity: 1; transform: scale(1); }
// //         }
// //         .hero-in {
// //           animation: heroFadeUp .55s cubic-bezier(.22,1,.36,1) both;
// //         }
// //         @keyframes heroFadeUp {
// //           from { opacity: 0; transform: translateY(18px); }
// //           to   { opacity: 1; transform: none; }
// //         }
// //         .dot {
// //           width: 8px; height: 8px; border-radius: 50%;
// //           border: none; cursor: pointer;
// //           background: rgba(255,255,255,.35);
// //           transition: all .3s;
// //           padding: 0;
// //         }
// //         .dot.on {
// //           background: #fff;
// //           width: 22px;
// //           border-radius: 4px;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }





// // "use client";
// // import React, { useState, useEffect, useRef } from "react";

// // export interface HeroSlide {
// //   id: number;
// //   order: number;
// //   tag: string;
// //   line1: string;
// //   line2: string;
// //   line3: string;
// //   sub: string;
// //   image: string | null;
// //   active: boolean;
// // }

// // interface HeroSectionProps {
// //   slides: HeroSlide[];
// // }

// // export default function HeroSection({ slides }: HeroSectionProps) {
// //   const active    = slides.filter(s => s.active);
// //   const [current, setCurrent] = useState(0);
// //   const [animKey, setAnimKey] = useState(0);
// //   const timerRef  = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
// //   const total     = active.length;

// //   const advance = () => {
// //     setCurrent(c => (c + 1) % total);
// //     setAnimKey(k => k + 1);
// //   };

// //   useEffect(() => {
// //     if (total <= 1) return;
// //     timerRef.current = setInterval(advance, 6000);
// //     return () => clearInterval(timerRef.current);
// //   }, [total]);

// //   const cur = active[current];
// //   if (!cur) return null;

// //   return (
// //     <section style={{
// //       /*
// //         ── CHAVE DO EFEITO EFACEC ──
// //         position: sticky + top: 0 faz o Hero ficar colado ao topo
// //         enquanto o utilizador faz scroll. A ServicesSection, que vem
// //         a seguir no DOM, "sobe" por cima visualmente.
// //         z-index: 0 garante que a Services fica à frente.
// //       */
// //       position: "sticky",
// //       top: 0,
// //       zIndex: 0,

// //       height: "100vh",
// //       background: cur.image ? "transparent" : "#095b66",
// //       overflow: "hidden",
// //       display: "flex",
// //       flexDirection: "column",
// //     }}>

// //       {/* ── Imagem de fundo — cobre 100% da secção ── */}
// //       {cur.image && (
// //         <div
// //           key={`img-${animKey}`}
// //           style={{
// //             position: "absolute",
// //             inset: 0,
// //             zIndex: 0,
// //             animation: "heroImgIn .9s ease both",
// //           }}
// //         >
// //           <img
// //             src={cur.image}
// //             alt=""
// //             style={{
// //               width: "100%",
// //               height: "100%",
// //               objectFit: "cover",
// //               objectPosition: "center",
// //               display: "block",
// //             }}
// //           />
// //         </div>
// //       )}

// //       {/* ── Decoração geométrica (sem imagem) ── */}
// //       {!cur.image && (
// //         <>
// //           <div style={{ position:"absolute", top:0, right:0, width:"42%", height:"100%", background:"rgba(255,255,255,.04)", clipPath:"polygon(15% 0, 100% 0, 100% 100%, 0% 100%)", zIndex:1 }}/>
// //           <div style={{ position:"absolute", top:0, right:0, width:"30%", height:"100%", background:"rgba(255,255,255,.025)", clipPath:"polygon(25% 0, 100% 0, 100% 100%, 10% 100%)", zIndex:1 }}/>
// //           <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize:"56px 56px", pointerEvents:"none", zIndex:1 }}/>
// //           <div style={{ position:"absolute", right:"6%", top:"50%", transform:"translateY(-50%)", opacity:.05, pointerEvents:"none", zIndex:1 }}>
// //             <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330">
// //               <path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/>
// //             </svg>
// //           </div>
// //         </>
// //       )}

// //       {/* ── Conteúdo principal ── */}
// //       <div
// //         style={{
// //           position: "relative",
// //           zIndex: 2,
// //           flex: 1,
// //           display: "flex",
// //           alignItems: "center",
// //           padding: "100px 80px 0",
// //           maxWidth: 1660,
// //           margin: "0 auto",
// //           width: "100%",
// //         }}
// //       >
// //         <div style={{ maxWidth: 660 }}>
// //           <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s", paddingBottom: 120 }}>
// //             <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28, textShadow: cur.image ? "0 2px 20px rgba(0,0,0,.3)" : "none" }}>
// //               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)" }}>{cur.line1}</span>
// //               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)", color: "rgba(255,255,255,0.58)" }}>{cur.line2}</span>
// //               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)" }}>{cur.line3}</span>
// //             </h1>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ── Dots de navegação ── */}
// //       {total > 1 && (
// //         <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
// //           {active.map((_, i) => (
// //             <button
// //               key={i}
// //               className={`dot ${i === current ? "on" : ""}`}
// //               onClick={() => {
// //                 clearInterval(timerRef.current);
// //                 setCurrent(i);
// //                 setAnimKey(k => k + 1);
// //                 timerRef.current = setInterval(advance, 6000);
// //               }}
// //               aria-label={`Slide ${i + 1}`}
// //             />
// //           ))}
// //         </div>
// //       )}

// //       <style>{`
// //         @keyframes heroImgIn {
// //           from { opacity: 0; transform: scale(1.03); }
// //           to   { opacity: 1; transform: scale(1); }
// //         }
// //         .hero-in {
// //           animation: heroFadeUp .55s cubic-bezier(.22,1,.36,1) both;
// //         }
// //         @keyframes heroFadeUp {
// //           from { opacity: 0; transform: translateY(18px); }
// //           to   { opacity: 1; transform: none; }
// //         }
// //         .dot {
// //           width: 8px; height: 8px; border-radius: 50%;
// //           border: none; cursor: pointer;
// //           background: rgba(255,255,255,.35);
// //           transition: all .3s;
// //           padding: 0;
// //         }
// //         .dot.on {
// //           background: #fff;
// //           width: 22px;
// //           border-radius: 4px;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }






// "use client";
// import React, { useState, useEffect, useRef } from "react";

// export interface HeroSlide {
//   id: number;
//   order: number;
//   tag: string;
//   line1: string;
//   line2: string;
//   line3: string;
//   sub: string;
//   image: string | null;
//   active: boolean;
// }

// interface HeroSectionProps {
//   slides: HeroSlide[];
// }

// export default function HeroSection({ slides }: HeroSectionProps) {
//   const active    = slides.filter(s => s.active);
//   const [current, setCurrent] = useState(0);
//   const [animKey, setAnimKey] = useState(0);
//   const timerRef  = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
//   const total     = active.length;

//   const advance = () => {
//     setCurrent(c => (c + 1) % total);
//     setAnimKey(k => k + 1);
//   };

//   useEffect(() => {
//     if (total <= 1) return;
//     timerRef.current = setInterval(advance, 6000);
//     return () => clearInterval(timerRef.current);
//   }, [total]);

//   const cur = active[current];
//   if (!cur) return null;

//   return (
//     <section style={{
//       /*
//         ── CHAVE DO EFEITO EFACEC ──
//         position: sticky + top: 0 faz o Hero ficar colado ao topo
//         enquanto o utilizador faz scroll. A ServicesSection, que vem
//         a seguir no DOM, "sobe" por cima visualmente.
//         z-index: 0 garante que a Services fica à frente.
//       */
//       position: "sticky",
//       top: 0,
//       zIndex: 0,

//       height: "100vh",
//       background: cur.image ? "transparent" : "#095b66",
//       overflow: "hidden",
//       display: "flex",
//       flexDirection: "column",
//     }}>

//       {/* ── Imagem de fundo — cobre 100% da secção ── */}
//       {cur.image && (
//         <div
//           key={`img-${animKey}`}
//           style={{
//             position: "absolute",
//             inset: 0,
//             zIndex: 0,
//             animation: "heroImgIn .9s ease both",
//           }}
//         >
//           <img
//             src={cur.image}
//             alt=""
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               objectPosition: "center",
//               display: "block",
//             }}
//           />
//         </div>
//       )}

//       {/* ── Decoração geométrica (sem imagem) ── */}
//       {!cur.image && (
//         <>
//           <div style={{ position:"absolute", top:0, right:0, width:"42%", height:"100%", background:"rgba(255,255,255,.04)", clipPath:"polygon(15% 0, 100% 0, 100% 100%, 0% 100%)", zIndex:1 }}/>
//           <div style={{ position:"absolute", top:0, right:0, width:"30%", height:"100%", background:"rgba(255,255,255,.025)", clipPath:"polygon(25% 0, 100% 0, 100% 100%, 10% 100%)", zIndex:1 }}/>
//           <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize:"56px 56px", pointerEvents:"none", zIndex:1 }}/>
//           <div style={{ position:"absolute", right:"6%", top:"50%", transform:"translateY(-50%)", opacity:.05, pointerEvents:"none", zIndex:1 }}>
//             <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330">
//               <path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/>
//             </svg>
//           </div>
//         </>
//       )}

//       {/* ── Conteúdo principal ── */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           flex: 1,
//           display: "flex",
//           alignItems: "center",
//           padding: "100px 80px 0",
//           maxWidth: 1660,
//           margin: "0 auto",
//           width: "100%",
//         }}
//       >
//         <div style={{ maxWidth: 660 }}>
//           <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s", paddingBottom: 120 }}>
//             <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28, textShadow: cur.image ? "0 2px 20px rgba(0,0,0,.3)" : "none" }}>
//               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)" }}>{cur.line1}</span>
//               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)", color: "rgba(255,255,255,0.58)" }}>{cur.line2}</span>
//               <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)" }}>{cur.line3}</span>
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* ── Dots de navegação ── */}
//       {total > 1 && (
//         <div style={{ position: "relative", zIndex: 2, padding: "40px 0 0", display: "flex", justifyContent: "center", gap: 8 }}>
//           {active.map((_, i) => (
//             <button
//               key={i}
//               className={`dot ${i === current ? "on" : ""}`}
//               onClick={() => {
//                 clearInterval(timerRef.current);
//                 setCurrent(i);
//                 setAnimKey(k => k + 1);
//                 timerRef.current = setInterval(advance, 6000);
//               }}
//               aria-label={`Slide ${i + 1}`}
//             />
//           ))}
//         </div>
//       )}

//       <style>{`
//         @keyframes heroImgIn {
//           from { opacity: 0; transform: scale(1.03); }
//           to   { opacity: 1; transform: scale(1); }
//         }
//         .hero-in {
//           animation: heroFadeUp .55s cubic-bezier(.22,1,.36,1) both;
//         }
//         @keyframes heroFadeUp {
//           from { opacity: 0; transform: translateY(18px); }
//           to   { opacity: 1; transform: none; }
//         }
//         .dot {
//           width: 8px; height: 8px; border-radius: 50%;
//           border: none; cursor: pointer;
//           background: rgba(255,255,255,.35);
//           transition: all .3s;
//           padding: 0;
//         }
//         .dot.on {
//           background: #fff;
//           width: 22px;
//           border-radius: 4px;
//         }
//       `}</style>
//     </section>
//   );
// }




"use client";
import React, { useState, useEffect, useRef } from "react";

export interface HeroSlide {
  id: number;
  order: number;
  tag: string;
  line1: string;
  line2: string;
  line3: string;
  sub: string;
  image: string | null;
  active: boolean;
}

interface HeroSectionProps {
  slides: HeroSlide[];
}

export default function HeroSection({ slides }: HeroSectionProps) {
  const active    = slides.filter(s => s.active);
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef  = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const total     = active.length;

  const startTimer = () => {
    clearInterval(timerRef.current);
    if (total > 1) {
      timerRef.current = setInterval(() => {
        setCurrent(c => (c + 1) % total);
        setAnimKey(k => k + 1);
      }, 6000);
    }
  };

  const goTo = (index: number) => {
    setCurrent(index);
    setAnimKey(k => k + 1);
    startTimer();
  };

  const goPrev = () => goTo((current - 1 + total) % total);
  const goNext = () => goTo((current + 1) % total);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [total]);

  const cur = active[current];
  if (!cur) return null;

  return (
    <section style={{
      position: "sticky",
      top: 0,
      zIndex: 0,
      height: "100vh",
      background: cur.image ? "transparent" : "#095b66",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* ── Imagem de fundo ── */}
      {cur.image && (
        <div
          key={`img-${animKey}`}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            animation: "heroImgIn .9s ease both",
          }}
        >
          <img
            src={cur.image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>
      )}

      {/* ── Decoração geométrica (sem imagem) ── */}
      {!cur.image && (
        <>
          <div style={{ position:"absolute", top:0, right:0, width:"42%", height:"100%", background:"rgba(255,255,255,.04)", clipPath:"polygon(15% 0, 100% 0, 100% 100%, 0% 100%)", zIndex:1 }}/>
          <div style={{ position:"absolute", top:0, right:0, width:"30%", height:"100%", background:"rgba(255,255,255,.025)", clipPath:"polygon(25% 0, 100% 0, 100% 100%, 10% 100%)", zIndex:1 }}/>
          <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize:"56px 56px", pointerEvents:"none", zIndex:1 }}/>
          <div style={{ position:"absolute", right:"6%", top:"50%", transform:"translateY(-50%)", opacity:.05, pointerEvents:"none", zIndex:1 }}>
            <svg viewBox="0 0 200 300" fill="#fff" width="220" height="330">
              <path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/>
            </svg>
          </div>
        </>
      )}

      {/* ── Conteúdo principal ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "100px 80px 0",
          maxWidth: 1660,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 660 }}>
          <div key={`h-${animKey}`} className="hero-in" style={{ animationDelay: ".08s", paddingBottom: 120 }}>
            <h1 style={{ fontWeight: 900, lineHeight: .97, color: "#fff", marginBottom: 28, textShadow: cur.image ? "0 2px 20px rgba(0,0,0,.3)" : "none" }}>
              <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)" }}>{cur.line1}</span>
              <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)", color: "rgba(255,255,255,0.58)" }}>{cur.line2}</span>
              <span style={{ display: "block", fontSize: "clamp(52px,7vw,80px)" }}>{cur.line3}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* ── Navegação: setas laterais + dots na base ── */}
      {total > 1 && (
        <>
          {/* Seta Esquerda */}
          <button
            className="arrow-btn arrow-left"
            onClick={goPrev}
            aria-label="Slide anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Seta Direita */}
          <button
            className="arrow-btn arrow-right"
            onClick={goNext}
            aria-label="Próximo slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          {/* Dots na base */}
          <div style={{
            position: "absolute",
            bottom: 36,
            left: 0,
            right: 0,
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}>
            {active.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "on" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <style>{`
        @keyframes heroImgIn {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
        .hero-in {
          animation: heroFadeUp .55s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: none; }
        }

        /* ── Dots ── */
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: rgba(255,255,255,.35);
          transition: all .3s;
          padding: 0;
        }
        .dot.on {
          background: #fff;
          width: 32px;
          border-radius: 6px;
        }

        /* ── Setas ── */
        .arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 38px;
          border-radius: 6px;
          border: 1.5px solid rgba(255,255,255,0.35);
          background: rgba(0,0,0,0.22);
          color: #fff;
          cursor: pointer;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: background .25s, border-color .25s, transform .25s;
          z-index: 3;
        }
        .arrow-btn:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.75);
          transform: translateY(-50%) scale(1.06);
        }
        .arrow-left  { left: 28px; }
        .arrow-right { right: 28px; }
      `}</style>
    </section>
  );
}