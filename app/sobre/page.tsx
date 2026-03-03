"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

function useInView(t = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold: t }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [t]);
  return [ref, v];
}

function R({ children, delay = 0, style = {} }: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const [ref, v] = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(20px)",
        transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const TIMELINE = [
  { year: "2000", title: "Fundação", desc: "Criação da Multienergia em Portugal, com foco em soluções de energia para o mercado lusófono." },
  { year: "2005", title: "Entrada em Angola", desc: "Abertura do primeiro escritório em Luanda. Início dos projetos de distribuição de BT e MT." },
  { year: "2012", title: "Fábrica de Quadros", desc: "Inauguração da unidade industrial em Luanda para fabricação própria de quadros elétricos BT." },
  { year: "2018", title: "Solar & EcoFlow", desc: "Parceria oficial EcoFlow para Angola. Lançamento das soluções fotovoltaicas residenciais e industriais." },
  { year: "2022", title: "Energy Academy", desc: "Criação do centro de formação especializado para capacitação técnica no setor energético." },
  { year: "2025", title: "Toshiba T&D", desc: "Representação oficial dos postos de transformação compactos Toshiba para Angola." },
];

const CERTS = [
  { name: "ANPG", full: "Agência Nacional de Petróleo, Gás e Biocombustíveis" },
  { name: "Infosi", full: "Certificação de Sistemas de Informação" },
  { name: "Proteção Civil", full: "Certificado de Proteção Civil · Angola" },
  { name: "IRCOP 5ª Classe", full: "Alvará nº 982/CCOP/IRCOP/SC/2025" },
];

const ALVARAS = ["Média Tensão (MT)", "Baixa Tensão (BT)", "Telecomunicações", "AVAC", "Produção de Energia", "Infraestruturas"];

const TEAM_VALUES = [
  { icon: "🎯", title: "Foco no Cliente", desc: "Cada projeto é único. Adaptamos as nossas soluções às necessidades reais de cada cliente." },
  { icon: "🔬", title: "Rigor Técnico", desc: "Todos os sistemas são dimensionados, instalados e testados com os mais altos padrões de qualidade." },
  { icon: "🌍", title: "Impacto Local", desc: "Investimos em talento angolano. A nossa equipa em Luanda é formada e certificada localmente." },
  { icon: "🔄", title: "Inovação Contínua", desc: "Acompanhamos as últimas tecnologias energéticas para oferecer sempre as melhores soluções." },
];

export default function Sobre() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#fff", color: "#1a2c2e" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; color: inherit; }
        button { font-family: 'Montserrat', sans-serif; cursor: pointer; }
        ::selection { background: #095b66; color: #fff; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #095b66; border-radius: 4px; }
        .nav-a { font-size: 11.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; transition: opacity .2s; }
        .nav-a:hover { opacity: .6; }
        .btn-teal { background: #095b66; color: #fff; border: none; border-radius: 6px; padding: 12px 26px; font-family: 'Montserrat',sans-serif; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
        .btn-teal:hover { background: #0a7a89; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(9,91,102,.25); }
        .value-card { background: #fff; border: 1.5px solid #dde8ea; border-radius: 14px; padding: 28px 24px; transition: all .3s; }
        .value-card:hover { border-color: #095b66; box-shadow: 0 8px 28px rgba(9,91,102,.1); transform: translateY(-3px); }
        .cert-card { background: #f0f9fa; border: 1.5px solid #c8e8eb; border-radius: 12px; padding: 20px 22px; transition: all .25s; }
        .cert-card:hover { background: #095b66; border-color: #095b66; }
        .cert-card:hover .cert-name { color: #fff !important; }
        .cert-card:hover .cert-full { color: rgba(255,255,255,.65) !important; }
        @media (max-width: 900px) {
          .hide-mob { display: none !important; }
          .two { grid-template-columns: 1fr !important; }
          .three { grid-template-columns: 1fr 1fr !important; }
          .sp { padding-left: 22px !important; padding-right: 22px !important; }
        }
        @media (max-width: 540px) {
          .three { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 64,
        background: scrolled ? "rgba(255,255,255,.97)" : "rgba(9,91,102,.95)",
        backdropFilter: "blur(16px)",
        boxShadow: scrolled ? "0 1px 0 rgba(9,91,102,.08)" : "none",
        transition: "all .3s", display: "flex", alignItems: "center", padding: "0 48px",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 32, height: 32, borderRadius: 7, background: scrolled ? "#095b66" : "rgba(255,255,255,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
              <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/>
            </svg>
          </div>
          <span style={{ fontWeight: 900, fontSize: 15, color: scrolled ? "#095b66" : "#fff" }}>
            Multi<span style={{ color: scrolled ? "#0a7a89" : "rgba(255,255,255,.5)" }}>energia</span>
          </span>
        </Link>

        <nav className="hide-mob" style={{ display: "flex", gap: 32, marginLeft: "auto", marginRight: 28 }}>
          {[["Produtos","/#produtos"],["Serviços","/#servicos"],["Contacto","/#contacto"]].map(([l,h]) => (
            <Link key={l} href={h} className="nav-a"
              style={{ color: scrolled ? "#1a2c2e" : "rgba(255,255,255,.85)" }}>
              {l}
            </Link>
          ))}
          <Link href="/sobre" className="nav-a"
            style={{ color: scrolled ? "#095b66" : "#fff", borderBottom: `2px solid ${scrolled ? "#095b66" : "#fff"}`, paddingBottom: 2 }}>
            Sobre
          </Link>
        </nav>

        <Link href="/#contacto" className="btn-teal hide-mob" style={{ fontSize: 11, padding: "8px 18px" }}>
          Orçamento
        </Link>
      </header>

      {/* HERO */}
      <section style={{ background: "#095b66", paddingTop: 64, minHeight: 480, display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "56px 56px" }}/>
        <div style={{ position: "absolute", right: 0, top: 0, width: "38%", height: "100%", background: "rgba(255,255,255,.03)", clipPath: "polygon(20% 0,100% 0,100% 100%,0 100%)" }}/>
        <div style={{ position: "absolute", right: 80, top: "50%", transform: "translateY(-50%)", opacity: .06 }}>
          <svg viewBox="0 0 200 300" fill="#fff" width="180" height="270">
            <path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/>
          </svg>
        </div>

        <div className="sp" style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "64px 80px 72px", width: "100%" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.45)", marginBottom: 12 }}>
            — Sobre a Multienergia
          </p>
          <h1 style={{ fontSize: "clamp(44px,6vw,80px)", fontWeight: 900, color: "#fff", lineHeight: .97, marginBottom: 28 }}>
            <span style={{ display: "block" }}>25 anos</span>
            <span style={{ display: "block", color: "rgba(255,255,255,.35)" }}>ao serviço</span>
            <span style={{ display: "block" }}>da energia</span>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.7)", maxWidth: 520, lineHeight: 1.75 }}>
            Empresa familiar no domínio da tecnologia energética, com forte presença em Angola, Portugal, Cabo Verde e São Tomé e Príncipe.
          </p>
        </div>

        <div style={{ height: 56, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)" }}/>
      </section>

      {/* MISSION */}
      <section className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 80px" }}>
        <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <R>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 12 }}>— Quem Somos</p>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.1, marginBottom: 24 }}>
              A inovação tecnológica ao serviço da energia
            </h2>
            <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.8, marginBottom: 18 }}>
              A Multienergia é uma empresa familiar no domínio da tecnologia, com mais de{" "}
              <strong style={{ color: "#095b66" }}>25 anos de experiência</strong> no setor energético.
            </p>
            <p style={{ fontSize: 15, color: "#4a7275", lineHeight: 1.8, marginBottom: 36 }}>
              Com uma forte presença internacional, operamos em Angola, Portugal, Cabo Verde e São Tomé, oferecendo soluções completas de eficiência e transição energética — seguindo os princípios ESG de forma integrada.
            </p>
            <Link href="/#contacto" className="btn-teal">Falar com a Equipa</Link>
          </R>

          <R delay={.12}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { v: "25+", l: "Anos de Experiência", dark: true },
                { v: "+50 MW", l: "Solares Instalados", dark: false },
                { v: "+75", l: "Sistemas Instalados", dark: false },
                { v: "4", l: "Países · AO PT CV STP", dark: false },
              ].map((s, i) => (
                <div key={i} style={{ background: s.dark ? "#095b66" : "#f0f9fa", border: s.dark ? "none" : "1.5px solid #c8e8eb", borderRadius: 14, padding: "28px 22px" }}>
                  <div style={{ fontSize: 34, fontWeight: 900, color: s.dark ? "#fff" : "#095b66", lineHeight: 1, marginBottom: 6 }}>{s.v}</div>
                  <div style={{ fontSize: 12, color: s.dark ? "rgba(255,255,255,.65)" : "#4a7275", lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* ESG */}
      <section style={{ background: "#095b66", padding: "80px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <R>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.45)", marginBottom: 8 }}>— Sustentabilidade</p>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>
              Os nossos princípios ESG
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.65)", maxWidth: 540, lineHeight: 1.75, marginBottom: 52 }}>
              Acreditamos que a energia do futuro deve ser eficiente, acessível e responsável.
            </p>
          </R>

          <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {[
              { letter: "E", word: "Environment", desc: "Implementamos soluções energéticas que reduzem a pegada de carbono. Os nossos sistemas solares instalados evitam a emissão de cerca de 219.000 toneladas de CO₂ por ano.", icon: "🌿" },
              { letter: "S", word: "Social", desc: "Investimos em formação e segurança, criando impacto positivo nas comunidades onde operamos. A Energy Academy é o nosso veículo de capacitação técnica local.", icon: "🤝" },
              { letter: "G", word: "Governance", desc: "Atuamos com transparência e responsabilidade, cumprindo todas as normas e regulamentos do setor em cada país onde operamos.", icon: "🏛️" },
            ].map((e, i) => (
              <R key={i} delay={i * .08}>
                <div
                  style={{ background: "rgba(255,255,255,.05)", border: "1.5px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "36px 28px", height: "100%", transition: "all .3s", cursor: "default" }}
                  onMouseEnter={ev => { ev.currentTarget.style.background = "rgba(255,255,255,.1)"; ev.currentTarget.style.borderColor = "rgba(255,255,255,.22)"; }}
                  onMouseLeave={ev => { ev.currentTarget.style.background = "rgba(255,255,255,.05)"; ev.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{e.icon}</div>
                    <div>
                      <div style={{ fontSize: 36, fontWeight: 900, color: "rgba(255,255,255,.2)", lineHeight: 1 }}>{e.letter}</div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: ".05em" }}>{e.word}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.65)", lineHeight: 1.75 }}>{e.desc}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 80px" }}>
        <R>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— História</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.1, marginBottom: 56 }}>
            O nosso percurso
          </h2>
        </R>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 72, top: 0, bottom: 0, width: 2, background: "linear-gradient(#095b66, #c8e8eb)" }}/>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {TIMELINE.map((t, i) => (
              <R key={i} delay={i * .06}>
                <div style={{ display: "flex", gap: 0, alignItems: "flex-start", paddingBottom: 40 }}>
                  <div style={{ width: 144, flexShrink: 0, paddingRight: 24, textAlign: "right" }}>
                    <span style={{ fontSize: 22, fontWeight: 900, color: "#095b66", display: "block", lineHeight: 1 }}>{t.year}</span>
                  </div>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#095b66", border: "3px solid #fff", boxShadow: "0 0 0 3px #095b66", flexShrink: 0, marginTop: 4 }}/>
                  <div style={{ paddingLeft: 28, flex: 1 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0a1c1e", marginBottom: 6 }}>{t.title}</h3>
                    <p style={{ fontSize: 13.5, color: "#4a7275", lineHeight: 1.7 }}>{t.desc}</p>
                  </div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: "#f0f9fa", padding: "80px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>
          <R>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Valores</p>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.1, marginBottom: 52 }}>
              O que nos define
            </h2>
          </R>
          <div className="two" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {TEAM_VALUES.map((v, i) => (
              <R key={i} delay={i * .07}>
                <div className="value-card">
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0a1c1e", marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: 13.5, color: "#4a7275", lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 80px" }}>
        <R>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Qualidade</p>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.1, marginBottom: 52 }}>
            Certificações & Alvarás
          </h2>
        </R>

        <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <R>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "#0a1c1e", marginBottom: 20 }}>Certificações</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {CERTS.map((c, i) => (
                <div key={i} className="cert-card">
                  <div className="cert-name" style={{ fontSize: 15, fontWeight: 900, color: "#095b66", marginBottom: 4, transition: "color .25s" }}>{c.name}</div>
                  <div className="cert-full" style={{ fontSize: 12, color: "#4a7275", transition: "color .25s" }}>{c.full}</div>
                </div>
              ))}
            </div>
          </R>

          <R delay={.1}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "#0a1c1e", marginBottom: 20 }}>Alvarás</h3>
            <div style={{ background: "#095b66", borderRadius: 16, padding: "28px", marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.55)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>IRCOP</div>
              <div style={{ fontSize: 15, fontWeight: 900, color: "#fff", marginBottom: 4 }}>Alvará nº 982/CCOP/IRCOP/SC/2025</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,.6)", marginBottom: 20 }}>5ª Classe · Portal Oficial</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {ALVARAS.map(a => (
                  <span key={a} style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 99, fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.8)", padding: "4px 12px" }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ background: "#f0f9fa", border: "1.5px solid #c8e8eb", borderRadius: 14, padding: "22px 24px" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#095b66", marginBottom: 12, letterSpacing: ".08em", textTransform: "uppercase" }}>Parceiro Certificado Legrand</div>
              <p style={{ fontSize: 13, color: "#4a7275", lineHeight: 1.7 }}>
                A nossa parceria com a Legrand valida a segurança e conformidade de cada quadro que sai da nossa linha de montagem. Execução segundo IEC 61439.
              </p>
            </div>
          </R>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#095b66", padding: "64px 0" }}>
        <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 36, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "#fff", marginBottom: 10 }}>Trabalhe connosco</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.65)", maxWidth: 400, lineHeight: 1.75 }}>Tem um projeto energético? A nossa equipa está pronta para ajudar.</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Link href="/#contacto" style={{ background: "#fff", color: "#095b66", border: "none", borderRadius: 6, padding: "13px 28px", fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", cursor: "pointer", display: "inline-flex", alignItems: "center" }}>
              Solicitar Orçamento
            </Link>
            <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer"
              style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.55)", borderRadius: 6, padding: "11px 24px", fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8 }}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#06161a", padding: "48px 80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 32 }}>
            <div style={{ width: 30, height: 30, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" fill="none" width="15" height="15">
                <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/>
              </svg>
            </div>
            <span style={{ fontWeight: 900, fontSize: 14, color: "#fff" }}>Multi<span style={{ color: "#3ec8d4" }}>energia</span></span>
          </Link>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 18, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
            <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>© 2025 Multienergia. Todos os direitos reservados.</p>
            <Link href="/" style={{ fontSize: 11.5, color: "#3ec8d4", fontWeight: 600 }}>← Voltar ao início</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}