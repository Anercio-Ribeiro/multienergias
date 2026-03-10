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
//   /* Services: usa dados do CMS se disponíveis, senão usa mock */
//   const [services,   setServices]   = useState<Service[]>(MOCK_SERVICES);
//   const [clients,    setClients]    = useState<Client[]>([]);
//   const [brands,     setBrands]     = useState<Brand[]>([]);

//   useEffect(() => {
//     fetch("/api/cms/hero-slides").then(r => r.json()).then(setHeroSlides).catch(() => {});
//   }, []);
//   useEffect(() => {
//     fetch("/api/cms/products").then(r => r.json()).then(setProducts).catch(() => {});
//   }, []);
//   // useEffect(() => {
//   //   /* Quando a API retornar dados reais, substitui o mock automaticamente */
//   //   fetch("/api/cms/services")
//   //     .then(r => r.json())
//   //     .then((data: Service[]) => { if (data?.length) setServices(data); })
//   //     .catch(() => {});
//   // }, []);
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

//         /* ── Efeito de sobreposição da secção de serviços ── */
//         .section-products-wrap {
//           position: relative;
//           z-index: 1;
//         }
//         .section-services-wrap {
//           position: relative;
//           z-index: 2;
//           /* sombra no topo para dar sensação de profundidade */
//           box-shadow: 0 -24px 60px rgba(0,0,0,.10);
//           border-radius: 32px 32px 0 0;
//           /* sobe ligeiramente sobre a secção de produtos */
//           margin-top: -32px;
//           background: #fff;
//         }

//         @media (max-width: 900px) {
//           .hide-mob { display: none !important; }
//           .two { grid-template-columns: 1fr !important; }
//           .three { grid-template-columns: 1fr 1fr !important; }
//           .sp { padding-left: 16px !important; padding-right: 16px !important; }
//           .hero-sp { padding: 86px 22px 0 !important; }
//           .section-services-wrap { border-radius: 20px 20px 0 0; margin-top: -20px; }
//         }
//         @media (max-width: 540px) { .three { grid-template-columns: 1fr !important; } }
//       `}</style>

//       {/* ── HERO ── */}
//       <HeroSection slides={heroSlides} />


//        {/* ── SERVICES ── sobreposição ── */}
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
//                 {/* <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 380, lineHeight: 1.7 }}>
//                   Da concepção ao comissionamento. Suporte especializado em todas as fases do seu projeto energético.
//                 </p> */}
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

/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */
export default function Home() {
  const [loaderVis, setLoaderVis]   = useState(true);
  const [loaderFade, setLoaderFade] = useState(false);

  /* CMS data */
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [products,   setProducts]   = useState<Product[]>([]);
  const [services,   setServices]   = useState<Service[]>(MOCK_SERVICES);
  const [clients,    setClients]    = useState<Client[]>([]);
  const [brands,     setBrands]     = useState<Brand[]>([]);

  useEffect(() => {
    fetch("/api/cms/hero-slides").then(r => r.json()).then(setHeroSlides).catch(() => {});
  }, []);
  useEffect(() => {
    fetch("/api/cms/products").then(r => r.json()).then(setProducts).catch(() => {});
  }, []);
  useEffect(() => {
    fetch("/api/cms/clients").then(r => r.json()).then(setClients).catch(() => {});
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
              <ProductsSection products={products} />
            </Reveal>
          </div>
        </section>
      </div>
      

      {/* ── GEOGRAPHIC PRESENCE ── */}
      <section id="presenca" style={{ background: "#f4f6f6", padding: "96px 0" }}>
        <div className="sp" style={{ maxWidth: 1660, margin: "0 auto", padding: "0 60px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Presença Internacional</p>
            <h2 style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 12 }}>Onde estamos</h2>
            <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 480, lineHeight: 1.75, marginBottom: 56 }}>
              Operamos em Angola, Portugal, Cabo Verde e São Tomé e Príncipe. Clique nos pontos do mapa para mais detalhes.
            </p>
          </Reveal>
          <Reveal>
            <PresenceSection />
          </Reveal>
        </div>
      </section>

      {/* ── CLIENTS + BRANDS ── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="sp" style={{ maxWidth: 1660, margin: "0 auto", padding: "0 60px" }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Clientes</p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Confiam em Nós</h2>
          </Reveal>
          <Reveal>
            <ClientsSection clients={clients} />
          </Reveal>

          <div style={{ borderTop: "1.5px solid #e8f0f1", paddingTop: 64, marginTop: 72 }}>
            <Reveal>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Parceiros</p>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "#0a1c1e", marginBottom: 36 }}>Marcas que Representamos</h2>
            </Reveal>
            <Reveal>
              <BrandsSection brands={brands} />
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