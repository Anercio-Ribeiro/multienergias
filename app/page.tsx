// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import HeroSection, { HeroSlide } from "./components/HeroSection";
// import ProductsSection, { Product } from "./components/ProductsSection";
// import ServicesSection, { Service, MOCK_SERVICES } from "./components/ServicesSection";
// import ClientsSection, { Client } from "./components/ClientsSection";
// import BrandsSection, { Brand } from "./components/BrandsSection";
// import PresenceSection from "./components/PresencesSection";

// /* ─────────────────────────────────────────────
//    HOOKS
// ───────────────────────────────────────────── */
// function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [vis, setVis] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
//       { threshold }
//     );
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
//     <div
//       ref={ref as React.RefObject<HTMLDivElement>}
//       style={{
//         opacity: vis ? 1 : 0,
//         transform: vis ? "none" : "translateY(22px)",
//         transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
//         ...style,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    APP
// ───────────────────────────────────────────── */
// export default function Home() {
//   const [loaderVis, setLoaderVis]   = useState(true);
//   const [loaderFade, setLoaderFade] = useState(false);

//   /* CMS data */
//   const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
//   const [products,   setProducts]   = useState<Product[]>([]);
//   const [services,   setServices]   = useState<Service[]>(MOCK_SERVICES);
//   const [clients,    setClients]    = useState<Client[]>([]);
//   const [brands,     setBrands]     = useState<Brand[]>([]);

//   useEffect(() => {
//     fetch("/api/cms/hero-slides").then(r => r.json()).then(setHeroSlides).catch(() => {});
//   }, []);
//   useEffect(() => {
//     fetch("/api/cms/products").then(r => r.json()).then(setProducts).catch(() => {});
//   }, []);
//   useEffect(() => {
//     fetch("/api/cms/clients").then(r => r.json()).then(setClients).catch(() => {});
//   }, []);
//   useEffect(() => {
//     fetch("/api/cms/brands").then(r => r.json()).then(setBrands).catch(() => {});
//   }, []);

//   useEffect(() => {
//     const hide = () => { setLoaderFade(true); setTimeout(() => setLoaderVis(false), 480); };
//     const t = setTimeout(hide, 900);
//     const onLoad = () => { clearTimeout(t); setTimeout(hide, 200); };
//     if (document.readyState === "complete") onLoad();
//     else window.addEventListener("load", onLoad);
//     return () => { clearTimeout(t); window.removeEventListener("load", onLoad); };
//   }, []);

//   return (
//     <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", overflowX: "hidden" }}>

//       {/* ── PAGE LOADER ── */}
//       {loaderVis && (
//         <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#095b66", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28, transition: "opacity .48s ease, transform .48s ease", opacity: loaderFade ? 0 : 1, transform: loaderFade ? "scale(1.02)" : "none", pointerEvents: loaderFade ? "none" : "auto" }}>
//           <style>{`@keyframes _lp{0%,100%{opacity:1}50%{opacity:.4}}@keyframes _lb{0%{transform:scaleX(0)}60%{transform:scaleX(.75)}100%{transform:scaleX(1)}}@keyframes _ls{0%{background-position:-400px 0}100%{background-position:400px 0}}`}</style>
//           <div style={{ display: "flex", alignItems: "center", gap: 10, animation: "_lp 1.6s ease infinite" }}>
//             <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(255,255,255,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//               <svg viewBox="0 0 24 24" fill="none" width="26" height="26"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" stroke="#fff" strokeWidth=".5" strokeLinejoin="round"/></svg>
//             </div>
//             <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: 22, color: "#fff", letterSpacing: "-.01em" }}>
//               Multi<span style={{ color: "rgba(255,255,255,.5)" }}>energia</span>
//             </span>
//           </div>
//           <div style={{ width: 160, height: 2, background: "rgba(255,255,255,.15)", borderRadius: 99, overflow: "hidden" }}>
//             <div style={{ height: "100%", width: "100%", background: "linear-gradient(90deg,rgba(255,255,255,.6) 0%,#fff 50%,rgba(255,255,255,.6) 100%)", backgroundSize: "200% 100%", borderRadius: 99, transformOrigin: "left", animation: "_lb 900ms cubic-bezier(.4,0,.2,1) forwards, _ls 1.2s linear infinite" }} />
//           </div>
//           <div style={{ display: "flex", gap: 6 }}>
//             {[0, .15, .3].map((d, i) => <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,.6)", animation: `_lp 1.2s ${d}s ease infinite` }} />)}
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
//         .btn-white { background: #fff; color: #095b66; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
//         .btn-white:hover { background: #e8f5f7; transform: translateY(-2px); }

//         /*
//           ══════════════════════════════════════════════
//           EFEITO STICKY — Hero fica colado ao topo
//           enquanto a secção Services "sobe" por cima.
//           ══════════════════════════════════════════════

//           1. .hero-sticky-wrapper
//              — tem altura de 200vh para que haja scroll
//                enquanto o Hero está sticky.
//              — z-index: 0 fica atrás de tudo o que vem depois.

//           2. HeroSection (dentro do wrapper)
//              — position: sticky + top: 0 + height: 100vh
//              — mantém-se visível durante os primeiros 100vh de scroll.

//           3. .section-services-wrap
//              — position: relative + z-index: 2
//              — border-radius no topo + box-shadow cria a ilusão
//                de uma "folha" que desliza por cima do Hero.
//              — margin-top: -100vh puxa-a para cima, sobrepondo
//                o Hero logo que o scroll ultrapassa os primeiros 100vh.
//         */

//         .hero-sticky-wrapper {
//           position: relative;
//           height: 200vh;   /* ← 100vh do Hero visível + 100vh de "scroll room" */
//           z-index: 0;
//         }

//         .section-services-wrap {
//           position: relative;
//           z-index: 2;
//           margin-top: -100vh;   /* ← sobe para a posição inicial sobre o Hero */
//           border-radius: 32px 32px 0 0;
//           box-shadow: 0 -32px 80px rgba(0,0,0,.18);
//           background: #fff;
//           /* Garante que o conteúdo não fica cortado pelo border-radius */
//           overflow: hidden;
//         }

//         .section-products-wrap {
//           position: relative;
//           z-index: 1;
//         }

//         @media (max-width: 900px) {
//           .hide-mob { display: none !important; }
//           .two { grid-template-columns: 1fr !important; }
//           .three { grid-template-columns: 1fr 1fr !important; }
//           .sp { padding-left: 16px !important; padding-right: 16px !important; }
//           .hero-sp { padding: 86px 22px 0 !important; }
//           .section-services-wrap { border-radius: 20px 20px 0 0; }
//           .hero-sticky-wrapper { height: 180vh; }
//         }
//         @media (max-width: 540px) { .three { grid-template-columns: 1fr !important; } }
//       `}</style>

//       {/* ══════════════════════════════════════
//           HERO — envolto no wrapper sticky
//           O wrapper tem 200vh de altura para
//           criar o "scroll room" necessário.
//       ══════════════════════════════════════ */}
//       <div className="hero-sticky-wrapper">
//         <HeroSection slides={heroSlides} />
//       </div>

//       {/* ══════════════════════════════════════
//           SERVICES — desliza por cima do Hero
//       ══════════════════════════════════════ */}
//       <div className="section-services-wrap">
//         <section id="servicos" style={{ padding: "72px 0 96px", background: "#fff" }}>
//           <div className="sp" style={{ maxWidth: 1660, margin: "0 auto", padding: "0 60px" }}>

//             <Reveal>
//               <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 10 }}>
//                 — Soluções
//               </p>
//               <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 52, flexWrap: "wrap" }}>
//                 <h2 style={{ fontSize: "clamp(32px,4vw,54px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05 }}>
//                   O que fazemos
//                 </h2>
//               </div>
//             </Reveal>

//             <Reveal>
//               <ServicesSection services={services} />
//             </Reveal>

//             <Reveal style={{ marginTop: 52, display: "flex", alignItems: "center", gap: 14 }}>
//               <div style={{ width: 48, height: 48, background: "#f0f9fa", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</div>
//               <div>
//                 <div style={{ fontSize: 10, color: "#6a9a9e", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>Angola · Suporte</div>
//                 <a href="tel:+244933153362" style={{ fontSize: 18, fontWeight: 800, color: "#0a1c1e" }}>+244 933 153 362</a>
//               </div>
//             </Reveal>

//           </div>
//         </section>
//       </div>

//       {/* ── PRODUCTS ── */}
//       <div className="section-products-wrap">
//         <section id="produtos" style={{ padding: "96px 0 112px", background: "#f4f6f6" }}>
//           <div className="sp" style={{ maxWidth: 1660, margin: "0 auto", padding: "0 60px" }}>
//             <Reveal>
//               <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 52, flexWrap: "wrap" }}>
//                 <div>
//                   <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Catálogo</p>
//                   <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05 }}>Os Nossos Produtos</h2>
//                 </div>
//                 <Link href="/produtos" style={{ fontSize: 12, fontWeight: 700, color: "#095b66", letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "2px solid #095b66", paddingBottom: 2 }}>
//                   Ver todos →
//                 </Link>
//               </div>
//             </Reveal>
//             <Reveal>
//               <ProductsSection products={products} />
//             </Reveal>
//           </div>
//         </section>
//       </div>
      

//       {/* ── GEOGRAPHIC PRESENCE ── */}
//       <section id="presenca" style={{ background: "#f4f6f6", padding: "96px 0" }}>
//         <div className="sp" style={{ maxWidth: 1660, margin: "0 auto", padding: "0 60px" }}>
//           <Reveal>
//             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Presença Internacional</p>
//             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 12 }}>Onde estamos</h2>
//             <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 480, lineHeight: 1.75, marginBottom: 56 }}>
//               Operamos em Angola, Portugal, Cabo Verde e São Tomé e Príncipe. Clique nos pontos do mapa para mais detalhes.
//             </p>
//           </Reveal>
//           <Reveal>
//             <PresenceSection />
//           </Reveal>
//         </div>
//       </section>

//       {/* ── CLIENTS + BRANDS ── */}
//       <section style={{ background: "#fff", padding: "80px 0" }}>
//         <div className="sp" style={{ maxWidth: 1660, margin: "0 auto", padding: "0 60px" }}>
//           <Reveal>
//             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Clientes</p>
//             <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Confiam em Nós</h2>
//           </Reveal>
//           <Reveal>
//             <ClientsSection clients={clients} />
//           </Reveal>

//           <div style={{ borderTop: "1.5px solid #e8f0f1", paddingTop: 64, marginTop: 72 }}>
//             <Reveal>
//               <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Parceiros</p>
//               <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Marcas que Representamos</h2>
//             </Reveal>
//             <Reveal>
//               <BrandsSection brands={brands} />
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ── CONTACT ── */}
//       <section id="contacto" style={{ background: "#f4f6f6", padding: "96px 0" }}>
//         <div className="sp" style={{ maxWidth: 1660, margin: "0 auto", padding: "0 60px" }}>
//           <Reveal>
//             <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Contacto</p>
//             <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 56 }}>Fale Connosco</h2>
//           </Reveal>
//           <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 72 }}>
//             <Reveal>
//               <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.8, marginBottom: 44 }}>Entre em contacto com o escritório mais próximo ou envie-nos uma mensagem.</p>
//               <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
//                 {[
//                   { flag: "🇦🇴", country: "Angola", info: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362 · (+244) 938 306 698\ngeral@multienergia.com.pt" },
//                   { flag: "🇵🇹", country: "Portugal", info: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909 · geral@multienergia.com.pt" },
//                   { flag: "🇸🇹", country: "São Tomé e Príncipe", info: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443 · geral@multienergia.com.pt" },
//                 ].map((c, i) => (
//                   <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
//                     <div style={{ width: 40, height: 40, borderRadius: 8, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.flag}</div>
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
//                 style={{ background: "#fff", border: "1.5px solid #dde8ea", borderRadius: 16, padding: "36px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Nome</span>
//                     <input className="input" placeholder="Nome completo" autoComplete="name" />
//                   </label>
//                   <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//                     <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Empresa</span>
//                     <input className="input" placeholder="Empresa" autoComplete="organization" />
//                   </label>
//                 </div>
//                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>E-mail</span>
//                   <input className="input" type="email" placeholder="email@empresa.com" autoComplete="email" />
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
//                     <option>Outro</option>
//                   </select>
//                 </label>
//                 <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//                   <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Mensagem</span>
//                   <textarea className="input" placeholder="Descreva o seu projeto…" />
//                 </label>
//                 <button type="submit" className="btn-teal" style={{ alignSelf: "flex-start", marginTop: 4 }}>
//                   Enviar Mensagem
//                   <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
import HeroSection, { HeroSlide } from "./components/HeroSection";
import ProductsSection, { Product } from "./components/ProductsSection";
import ServicesSection, { Service, MOCK_SERVICES } from "./components/ServicesSection";
import ClientsSection, { Client } from "./components/ClientsSection";
import BrandsSection, { Brand } from "./components/BrandsSection";
import PresenceSection from "./components/PresencesSection";
import CategoriesSection from "./components/CategorySection";
import { Category } from "@/generated/prisma/client";

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */
function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
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
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(22px)",
        transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}


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


/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */
export default function Home() {
  const [loaderVis, setLoaderVis]   = useState(true);
  const [loaderFade, setLoaderFade] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);

  /* CMS data */
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [products,   setProducts]   = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [services,   setServices]   = useState<Service[]>(MOCK_SERVICES);
  const [clients,    setClients]    = useState<Client[]>([]);
  const [brands,     setBrands]     = useState<Brand[]>([]);

  const curProd = PRODUCTS[activeProduct];

  useEffect(() => {
    fetch("/api/cms/hero-slides").then(r => r.json()).then(setHeroSlides).catch(() => {});
  }, []);
  useEffect(() => {
    fetch("/api/cms/products?active=true")
      .then(r => r.json())
      .then(data => setProducts(data.map((p: Product) => ({
        ...p,
        // Normalise JSON fields from Prisma
        highlights: Array.isArray(p.highlights) ? p.highlights : [],
        brands:     Array.isArray(p.brands)     ? p.brands     : [],
        specs:      Array.isArray(p.specs)      ? p.specs      : [],
        category:   p.category   ?? "",
        longDesc:   p.longDesc   ?? "",
        image:      p.image      ?? null,
      }))))
      .catch(() => {});
  }, []);
  useEffect(() => {
    fetch("/api/cms/clients").then(r => r.json()).then(setClients).catch(() => {});
  }, []);
   useEffect(() => {
    fetch("/api/cms/categories").then(r => r.json()).then(setCategories).catch(() => {});
  }, []);
  useEffect(() => {
    fetch("/api/cms/brands").then(r => r.json()).then(setBrands).catch(() => {});
  }, []);

  useEffect(() => {
    const hide = () => { setLoaderFade(true); setTimeout(() => setLoaderVis(false), 480); };
    const t = setTimeout(hide, 900);
    const onLoad = () => { clearTimeout(t); setTimeout(hide, 200); };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => { clearTimeout(t); window.removeEventListener("load", onLoad); };
  }, []);

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e", overflowX: "hidden" }}>

      {/* ── PAGE LOADER ── */}
      {loaderVis && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#095b66", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28, transition: "opacity .48s ease, transform .48s ease", opacity: loaderFade ? 0 : 1, transform: loaderFade ? "scale(1.02)" : "none", pointerEvents: loaderFade ? "none" : "auto" }}>
          <style>{`@keyframes _lp{0%,100%{opacity:1}50%{opacity:.4}}@keyframes _lb{0%{transform:scaleX(0)}60%{transform:scaleX(.75)}100%{transform:scaleX(1)}}@keyframes _ls{0%{background-position:-400px 0}100%{background-position:400px 0}}`}</style>
          <div style={{ display: "flex", alignItems: "center", gap: 10, animation: "_lp 1.6s ease infinite" }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(255,255,255,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" fill="none" width="26" height="26"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff" stroke="#fff" strokeWidth=".5" strokeLinejoin="round"/></svg>
            </div>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: 22, color: "#fff", letterSpacing: "-.01em" }}>
              Multi<span style={{ color: "rgba(255,255,255,.5)" }}>energia</span>
            </span>
          </div>
          <div style={{ width: 160, height: 2, background: "rgba(255,255,255,.15)", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: "100%", background: "linear-gradient(90deg,rgba(255,255,255,.6) 0%,#fff 50%,rgba(255,255,255,.6) 100%)", backgroundSize: "200% 100%", borderRadius: 99, transformOrigin: "left", animation: "_lb 900ms cubic-bezier(.4,0,.2,1) forwards, _ls 1.2s linear infinite" }} />
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {[0, .15, .3].map((d, i) => <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,.6)", animation: `_lp 1.2s ${d}s ease infinite` }} />)}
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
        .btn-white { background: #fff; color: #095b66; border: none; border-radius: 6px; padding: 13px 28px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; }
        .btn-white:hover { background: #e8f5f7; transform: translateY(-2px); }

        /*
          ══════════════════════════════════════════════
          EFEITO STICKY — Hero fica colado ao topo
          enquanto a secção Services "sobe" por cima.
          ══════════════════════════════════════════════

          1. .hero-sticky-wrapper
             — tem altura de 200vh para que haja scroll
               enquanto o Hero está sticky.
             — z-index: 0 fica atrás de tudo o que vem depois.

          2. HeroSection (dentro do wrapper)
             — position: sticky + top: 0 + height: 100vh
             — mantém-se visível durante os primeiros 100vh de scroll.

          3. .section-services-wrap
             — position: relative + z-index: 2
             — border-radius no topo + box-shadow cria a ilusão
               de uma "folha" que desliza por cima do Hero.
             — margin-top: -100vh puxa-a para cima, sobrepondo
               o Hero logo que o scroll ultrapassa os primeiros 100vh.
        */

        .hero-sticky-wrapper {
          position: relative;
          height: 200vh;   /* ← 100vh do Hero visível + 100vh de "scroll room" */
          z-index: 0;
        }

        .section-services-wrap {
          position: relative;
          z-index: 2;
          margin-top: -100vh;   /* ← sobe para a posição inicial sobre o Hero */
          border-radius: 32px 32px 0 0;
          box-shadow: 0 -32px 80px rgba(0,0,0,.18);
          background: #fff;
          /* Garante que o conteúdo não fica cortado pelo border-radius */
          overflow: hidden;
        }

        .section-products-wrap {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .hide-mob { display: none !important; }
          .two { grid-template-columns: 1fr !important; }
          .three { grid-template-columns: 1fr 1fr !important; }
          .sp { padding-left: 16px !important; padding-right: 16px !important; }
          .hero-sp { padding: 86px 22px 0 !important; }
          .section-services-wrap { border-radius: 20px 20px 0 0; }
          .hero-sticky-wrapper { height: 180vh; }
        }
        @media (max-width: 540px) { .three { grid-template-columns: 1fr !important; } }
      
        
       /* substitui as 3 regras antigas do .prod-tab */

.prod-tab {
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all .18s ease;
  border: 1.5px solid transparent;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  text-align: left;
  background: transparent;
}

.prod-tab:hover {
  background: #fff;
  border-color: #dde4e5;
}

.prod-tab.on {
  background: #fff;
  border-color: #b8c8ca;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .06);
}
      
      
      `}</style>

      {/* ══════════════════════════════════════
          HERO — envolto no wrapper sticky
          O wrapper tem 200vh de altura para
          criar o "scroll room" necessário.
      ══════════════════════════════════════ */}
      <div className="hero-sticky-wrapper">
        <HeroSection slides={heroSlides} />
      </div>

      {/* ══════════════════════════════════════
          SERVICES — desliza por cima do Hero
      ══════════════════════════════════════ */}
      <div className="section-services-wrap">
        <section id="servicos" style={{ padding: "72px 0 96px", background: "#fff" }}>
          <div className="sp" style={{ maxWidth: 1660, margin: "0 auto", padding: "0 60px" }}>

            <Reveal>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 10 }}>
                — Soluções
              </p>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 52, flexWrap: "wrap" }}>
                <h2 style={{ fontSize: "clamp(32px,4vw,54px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05 }}>
                  O que fazemos
                </h2>
              </div>
            </Reveal>

            <Reveal>
              <ServicesSection services={services} />
            </Reveal>

            <Reveal style={{ marginTop: 52, display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 48, height: 48, background: "#f0f9fa", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>📞</div>
              <div>
                <div style={{ fontSize: 10, color: "#6a9a9e", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 2 }}>Angola · Suporte</div>
                <a href="tel:+244933153362" style={{ fontSize: 18, fontWeight: 800, color: "#0a1c1e" }}>+244 933 153 362</a>
              </div>
            </Reveal>

          </div>
        </section>
      </div>

      {/* ── PRODUCTS ── */}
      <div className="section-products-wrap">
        <section id="produtos" style={{ padding: "96px 0 112px", background: "#f4f6f6" }}>
          <div className="sp" style={{ maxWidth: 1660, margin: "0 auto", padding: "0 60px" }}>
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
            <Reveal>
              <CategoriesSection categories={categories}  />
            </Reveal>
          </div>
        </section>
      </div>


      {/* <section id="produtos" style={{ padding: "96px 0 80px" }}>
        <div className="sp" style={{ maxWidth: 1660, margin: "0 auto", padding: "0 80px" }}>
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
      </section> */}


      {/* ── PRODUCTS ── */}
<section id="produtos" style={{ padding: "96px 0 80px" }}>
  <div className="sp" style={{ maxWidth: 1660, margin: "0 auto", padding: "0 80px" }}>
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

      {/* ── TABS COLUMN ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {PRODUCTS.map((p, i) => (
          <Reveal key={i} delay={i * .05}>
            <button
              className={`prod-tab ${activeProduct === i ? "on" : ""}`}
              onClick={() => setActiveProduct(i)}
              aria-label={p.name}
            >
              <div style={{
                width: 34, height: 34, borderRadius: 7, flexShrink: 0,
                background: activeProduct === i ? "#e8f0f1" : "#edf1f2",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg viewBox="0 0 40 40" fill="none" width="22" height="22">
                  {i === 0 && <><circle cx="20" cy="20" r="6" fill="#6e9a9e"/><path d="M20 6v4M20 30v4M6 20h4M30 20h4M9.5 9.5l2.8 2.8M27.7 27.7l2.8 2.8M9.5 30.5l2.8-2.8M27.7 12.3l2.8-2.8" stroke="#6e9a9e" strokeWidth="2" strokeLinecap="round"/></>}
                  {i === 1 && <><rect x="13" y="5" width="14" height="30" rx="3" stroke="#6e9a9e" strokeWidth="1.8"/><rect x="16" y="9" width="8" height="4" rx="1" fill="#6e9a9e"/><rect x="16" y="16" width="8" height="4" rx="1" fill="#6e9a9e" opacity=".5"/><rect x="16" y="23" width="8" height="4" rx="1" fill="#6e9a9e" opacity=".3"/></>}
                  {i === 2 && <><rect x="5" y="5" width="30" height="30" rx="2" stroke="#6e9a9e" strokeWidth="1.8"/><rect x="9" y="9" width="22" height="5" rx="1" fill="#6e9a9e" opacity=".7"/><circle cx="13" cy="23" r="2.5" fill="#6e9a9e"/><circle cx="20" cy="23" r="2.5" fill="#6e9a9e" opacity=".5"/><circle cx="27" cy="23" r="2.5" fill="#6e9a9e" opacity=".3"/></>}
                  {i === 3 && <><rect x="7" y="12" width="26" height="18" rx="2" stroke="#6e9a9e" strokeWidth="1.8"/><path d="M20 21l-4 5h5l-3 5" stroke="#6e9a9e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
                  {i === 4 && <><rect x="8" y="14" width="24" height="18" rx="2" stroke="#6e9a9e" strokeWidth="1.8"/><path d="M20 6v8" stroke="#6e9a9e" strokeWidth="2" strokeLinecap="round"/><path d="M13 6h14" stroke="#6e9a9e" strokeWidth="1.8" strokeLinecap="round"/></>}
                  {i === 5 && <><rect x="5" y="14" width="30" height="18" rx="4" stroke="#6e9a9e" strokeWidth="1.8"/><circle cx="12" cy="35" r="3" fill="#6e9a9e" opacity=".45"/><circle cx="28" cy="35" r="3" fill="#6e9a9e" opacity=".45"/><path d="M9 22h8l3 4h11" stroke="#6e9a9e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M28 10v5M25.5 12.5h5" stroke="#6e9a9e" strokeWidth="1.8" strokeLinecap="round"/></>}
                </svg>
              </div>
              <span style={{
                fontSize: 12.5, fontWeight: 700, lineHeight: 1.3, textAlign: "left",
                color: activeProduct === i ? "#1a2c2e" : "#7a9295",
                transition: "color .18s",
              }}>
                {p.name}
              </span>
              <span style={{
                width: 5, height: 5, borderRadius: "50%", marginLeft: "auto", flexShrink: 0,
                background: activeProduct === i ? "#6e9a9e" : "transparent",
                transition: "background .18s",
              }} />
            </button>
          </Reveal>
        ))}
      </div>

      {/* ── DETAIL CARD ── */}
      <Reveal key={activeProduct}>
        <div style={{
          background: "#fff",
          border: "1.5px solid #dde4e5",
          borderRadius: 18,
          padding: "40px 44px",
          minHeight: 340,
          position: "relative",
          overflow: "hidden",
        }}>
          {/* decorative circles */}
          <div style={{ position: "absolute", right: -40, top: -40, width: 200, height: 200, borderRadius: "50%", background: "#f4f6f6", pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 40, bottom: -60, width: 130, height: 130, borderRadius: "50%", background: "#f9fafa", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* icon */}
            <div style={{ width: 60, height: 60, borderRadius: 12, background: "#f0f4f5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
                {activeProduct === 0 && <><circle cx="20" cy="20" r="6" fill="#6e9a9e"/><path d="M20 6v4M20 30v4M6 20h4M30 20h4M9.5 9.5l2.8 2.8M27.7 27.7l2.8 2.8M9.5 30.5l2.8-2.8M27.7 12.3l2.8-2.8" stroke="#6e9a9e" strokeWidth="2" strokeLinecap="round"/></>}
                {activeProduct === 1 && <><rect x="13" y="5" width="14" height="30" rx="3" stroke="#6e9a9e" strokeWidth="1.8"/><rect x="16" y="9" width="8" height="4" rx="1" fill="#6e9a9e"/><rect x="16" y="16" width="8" height="4" rx="1" fill="#6e9a9e" opacity=".5"/><rect x="16" y="23" width="8" height="4" rx="1" fill="#6e9a9e" opacity=".3"/></>}
                {activeProduct === 2 && <><rect x="5" y="5" width="30" height="30" rx="2" stroke="#6e9a9e" strokeWidth="1.8"/><rect x="9" y="9" width="22" height="5" rx="1" fill="#6e9a9e" opacity=".7"/><circle cx="13" cy="23" r="2.5" fill="#6e9a9e"/><circle cx="20" cy="23" r="2.5" fill="#6e9a9e" opacity=".5"/><circle cx="27" cy="23" r="2.5" fill="#6e9a9e" opacity=".3"/></>}
                {activeProduct === 3 && <><rect x="7" y="12" width="26" height="18" rx="2" stroke="#6e9a9e" strokeWidth="1.8"/><path d="M20 21l-4 5h5l-3 5" stroke="#6e9a9e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>}
                {activeProduct === 4 && <><rect x="8" y="14" width="24" height="18" rx="2" stroke="#6e9a9e" strokeWidth="1.8"/><path d="M20 6v8" stroke="#6e9a9e" strokeWidth="2" strokeLinecap="round"/><path d="M13 6h14" stroke="#6e9a9e" strokeWidth="1.8" strokeLinecap="round"/></>}
                {activeProduct === 5 && <><rect x="5" y="14" width="30" height="18" rx="4" stroke="#6e9a9e" strokeWidth="1.8"/><circle cx="12" cy="35" r="3" fill="#6e9a9e" opacity=".45"/><circle cx="28" cy="35" r="3" fill="#6e9a9e" opacity=".45"/><path d="M9 22h8l3 4h11" stroke="#6e9a9e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M28 10v5M25.5 12.5h5" stroke="#6e9a9e" strokeWidth="1.8" strokeLinecap="round"/></>}
              </svg>
            </div>

            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#8aabae", marginBottom: 6 }}>
              {curProd.id.toUpperCase()}
            </p>
            <h3 style={{ fontSize: 22, fontWeight: 900, color: "#0d1f21", marginBottom: 14, lineHeight: 1.1 }}>
              {curProd.name}
            </h3>
            <p style={{ fontSize: 13.5, color: "#5e8082", lineHeight: 1.75, marginBottom: 24, maxWidth: 460 }}>
              {curProd.desc}
            </p>

            {/* specs */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
              {curProd.specs.map(s => (
                <span key={s} style={{
                  background: "#f0f4f5", border: "1px solid #d6e0e1",
                  borderRadius: 99, fontSize: 11, fontWeight: 600,
                  color: "#3d6568", padding: "4px 12px",
                }}>
                  {s}
                </span>
              ))}
            </div>

            {/* brands */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "#a0b5b7", letterSpacing: ".1em", textTransform: "uppercase" }}>
                Marcas:
              </span>
              {curProd.brands.map(b => (
                <span key={b} style={{
                  fontSize: 11, fontWeight: 800, color: "#4a7275",
                  background: "#f0f4f5", border: "1px solid #d6e0e1",
                  borderRadius: 5, padding: "3px 10px",
                }}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

    </div>
  </div>
</section>

     

      {/* ── CONTACT ── */}
      <section id="contacto" style={{ background: "#f4f6f6", padding: "96px 0" }}>
        <div className="sp" style={{ maxWidth: 1660, margin: "0 auto", padding: "0 60px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Contacto</p>
            <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 56 }}>Fale Connosco</h2>
          </Reveal>
          <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 72 }}>
            <Reveal>
              <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.8, marginBottom: 44 }}>Entre em contacto com o escritório mais próximo ou envie-nos uma mensagem.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { flag: "🇦🇴", country: "Angola", info: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362 · (+244) 938 306 698\ngeral@multienergia.com.pt" },
                  { flag: "🇵🇹", country: "Portugal", info: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909 · geral@multienergia.com.pt" },
                  { flag: "🇸🇹", country: "São Tomé e Príncipe", info: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443 · geral@multienergia.com.pt" },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.flag}</div>
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
                style={{ background: "#fff", border: "1.5px solid #dde8ea", borderRadius: 16, padding: "36px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Nome</span>
                    <input className="input" placeholder="Nome completo" autoComplete="name" />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Empresa</span>
                    <input className="input" placeholder="Empresa" autoComplete="organization" />
                  </label>
                </div>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>E-mail</span>
                  <input className="input" type="email" placeholder="email@empresa.com" autoComplete="email" />
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
                    <option>Outro</option>
                  </select>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".1em", textTransform: "uppercase" }}>Mensagem</span>
                  <textarea className="input" placeholder="Descreva o seu projeto…" />
                </label>
                <button type="submit" className="btn-teal" style={{ alignSelf: "flex-start", marginTop: 4 }}>
                  Enviar Mensagem
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}