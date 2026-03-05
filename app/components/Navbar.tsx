"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ─────────────────────────────────────────────────────────────
   TIPOS E DADOS
───────────────────────────────────────────────────────────────  */
interface NavItem {
  label:    string;
  href:     string;
  academy?: boolean;
  wa?:      boolean;
  external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Empresa",   href: "/empresa"                                       },
  { label: "Serviços",  href: "/#servicos"                                   },
  { label: "Produtos",  href: "/produtos"                                    },
  { label: "Projectos",  href: "/projectos"                                    },
  { label: "Catálogo",  href: "/catalogo"                                    },
  { label: "Academy",   href: "/academy",   academy: true                    },
  { label: "Contactos", href: "/#contacto"                                   },
  { label: "WhatsApp",  href: "https://wa.me/244933153362", wa: true, external: true },
];

/* ── verifica link activo ── */
function checkActive(href: string, pathname: string): boolean {
  if (href.startsWith("http") || href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE
   - sem props: tudo derivado internamente
   - transparent automático para "/" e "/simulador"
───────────────────────────────────────────────────────────────  */
export default function Navbar() {
  const pathname = usePathname() ?? "/";

  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const drawerRef  = useRef<HTMLDivElement>(null);


  /* transparent em páginas com hero escuro */
  const heroPages  = ["/", "/simulador"];
  const transparent = heroPages.includes(pathname) && !scrolled;

  /* scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* bloquear scroll do body */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* click fora fecha drawer */
  useEffect(() => {
    if (!open) return;
    const fn = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [open]);

  /* ── tokens de cor ── */
  const bg       = transparent ? "transparent"              : "rgba(255,255,255,.97)";
  const bdr      = transparent ? "none"                     : "0 1px 0 rgba(9,91,102,.1)";
  const blur     = transparent ? "none"                     : "blur(18px)";
  const logoClr  = transparent ? "#fff"                     : "#095b66";
  const logoSub  = transparent ? "rgba(255,255,255,.42)"    : "#0a7a89";
  const iconBg   = transparent ? "rgba(255,255,255,.15)"    : "#095b66";
  const linkClr  = transparent ? "rgba(255,255,255,.82)"    : "#1e3a3e";
  const hamClr   = transparent ? "#fff"                     : "#095b66";

  return (
    <>
      <style>{`
        .nb-root {
          position:fixed;top:0;left:0;right:0;z-index:500;height:66px;
          display:flex;align-items:center;padding:0 40px;
          font-family:'Montserrat',sans-serif;
          transition:background .35s,box-shadow .35s;
        }
        .nb-logo {
          display:flex;align-items:center;gap:10px;
          flex-shrink:0;text-decoration:none;margin-right:36px;
        }
        .nb-logo-icon {
          width:36px;height:36px;border-radius:8px;flex-shrink:0;
          display:flex;align-items:center;justify-content:center;
          transition:background .35s;
        }
        .nb-logo-text {
          font-weight:900;font-size:15.5px;letter-spacing:-.01em;
          white-space:nowrap;transition:color .35s;
        }
        .nb-logo-sub { transition:color .35s; }
        .nb-nav {
          display:flex;align-items:center;gap:2px;margin-left:auto;
        }
        .nb-link {
          position:relative;display:inline-flex;align-items:center;
          font-size:10.5px;font-weight:700;letter-spacing:.09em;
          text-transform:uppercase;padding:7px 12px;border-radius:7px;
          text-decoration:none;white-space:nowrap;
          transition:color .2s,background .2s;
        }
        .nb-link:hover { background:rgba(9,91,102,.07); }
        .nb-link::after {
          content:'';position:absolute;bottom:3px;left:50%;right:50%;
          height:1.5px;border-radius:1px;background:currentColor;
          opacity:0;transition:left .22s,right .22s,opacity .22s;
        }
        .nb-link:hover::after { left:12px;right:12px;opacity:.3; }
        .nb-link.nb-on::after  { left:12px;right:12px;opacity:.5; }
        .nb-link.nb-on         { font-weight:800; }
        .nb-academy {
          background:linear-gradient(135deg,#095b66,#0a7a89)!important;
          color:#fff!important;border-radius:7px;font-weight:800;padding:7px 14px;
          transition:transform .2s,box-shadow .2s!important;
        }
        .nb-academy:hover {
          transform:translateY(-1px);
          box-shadow:0 6px 18px rgba(9,91,102,.28)!important;
        }
        .nb-academy::after { display:none!important; }
        .nb-wa-pill {
          display:inline-flex;align-items:center;gap:7px;
          font-size:10.5px;font-weight:800;letter-spacing:.07em;
          text-transform:uppercase;padding:8px 16px;border-radius:99px;
          margin-left:6px;background:#25D366;color:#fff!important;
          text-decoration:none;flex-shrink:0;
          transition:background .2s,transform .2s,box-shadow .2s;
        }
        .nb-wa-pill:hover {
          background:#1cb85a;transform:translateY(-1px);
          box-shadow:0 6px 18px rgba(37,211,102,.32);
        }
        .nb-wa-pill::after { display:none!important; }
        .nb-ham {
          display:none;flex-direction:column;justify-content:center;align-items:flex-end;
          width:40px;height:40px;gap:5.5px;border:none;background:none;cursor:pointer;
          padding:5px;border-radius:8px;margin-left:auto;transition:background .2s;
        }
        .nb-ham:hover { background:rgba(9,91,102,.07); }
        .nb-ham span {
          display:block;height:2px;border-radius:2px;
          transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .2s,width .2s,background .35s;
          transform-origin:center;
        }
        .nb-ham.nb-open span:nth-child(1){transform:translateY(7.5px) rotate(45deg);width:22px!important;}
        .nb-ham.nb-open span:nth-child(2){opacity:0;}
        .nb-ham.nb-open span:nth-child(3){transform:translateY(-7.5px) rotate(-45deg);width:22px!important;}
        .nb-overlay {
          position:fixed;inset:0;z-index:498;
          background:rgba(6,22,26,.5);backdrop-filter:blur(3px);
          opacity:0;pointer-events:none;transition:opacity .32s;
        }
        .nb-overlay.nb-open{opacity:1;pointer-events:auto;}
        .nb-drawer {
          position:fixed;top:0;right:0;bottom:0;z-index:499;
          width:min(320px,88vw);background:#fff;
          box-shadow:-8px 0 48px rgba(6,22,26,.16);
          display:flex;flex-direction:column;
          transform:translateX(100%);
          transition:transform .36s cubic-bezier(.22,1,.36,1);
          overflow-y:auto;
        }
        .nb-drawer.nb-open{transform:translateX(0);}
        .nb-dhead {
          display:flex;align-items:center;justify-content:space-between;
          padding:18px 22px;border-bottom:1px solid #f0f5f6;flex-shrink:0;
        }
        .nb-dclose {
          width:34px;height:34px;border-radius:8px;border:none;
          background:#f0f5f6;cursor:pointer;
          display:flex;align-items:center;justify-content:center;
          transition:background .18s;
        }
        .nb-dclose:hover{background:#dde8ea;}
        .nb-dnav{display:flex;flex-direction:column;padding:10px 0;flex:1;}
        .nb-dlink {
          display:flex;align-items:center;gap:12px;
          padding:13px 22px;font-size:12.5px;font-weight:700;
          letter-spacing:.06em;text-transform:uppercase;
          color:#2a4a4e;text-decoration:none;
          border-left:3px solid transparent;
          transition:background .14s,color .14s,border-color .14s;
        }
        .nb-dlink:hover{background:#f4fafb;color:#095b66;}
        .nb-dlink.nb-on{color:#095b66;border-left-color:#095b66;background:#f0f9fa;}
        .nb-ddot {
          width:6px;height:6px;border-radius:50%;
          background:#dde8ea;flex-shrink:0;transition:background .14s;
        }
        .nb-dlink:hover .nb-ddot,.nb-dlink.nb-on .nb-ddot{background:#3ec8d4;}
        .nb-ddiv{height:1px;background:#f0f5f6;margin:8px 22px;}
        .nb-dwa {
          display:flex;align-items:center;justify-content:center;gap:9px;
          margin:14px 22px 20px;background:#25D366;color:#fff;
          border-radius:10px;padding:14px;font-size:12.5px;font-weight:800;
          letter-spacing:.06em;text-transform:uppercase;text-decoration:none;
          transition:background .2s;
        }
        .nb-dwa:hover{background:#1cb85a;}
        .nb-dfoot {
          padding:14px 22px;border-top:1px solid #f0f5f6;
          font-size:10.5px;color:#9bbbbe;font-weight:600;
          flex-shrink:0;line-height:1.7;
          font-family:'Montserrat',sans-serif;
        }
        @media(max-width:1060px){
          .nb-nav{display:none;}
          .nb-ham{display:flex;}
          .nb-root{padding:0 20px;}
        }
      `}</style>

      {/* ── HEADER ── */}
      <header
        className="nb-root"
        style={{ background: bg, boxShadow: bdr, backdropFilter: blur }}
      >
        <Link href="/" className="nb-logo">
          {/* <div className="nb-logo-icon" style={{ background: iconBg }}>
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/>
            </svg>
          </div> */}
          <span className="nb-logo-text" style={{ color: logoClr }}>
            {/* Multi<span className="nb-logo-sub" style={{ color: logoSub }}>energia</span> */}
            <img src="/Multienergia.png" alt="Soluções Eléctricas e Energéticas" width={170} height={20} style={{ marginLeft:8, marginBottom:2, filter: transparent ? "drop-shadow(0 0 1px rgba(255,255,255,.4))" : "none" }} />    
          </span>
        </Link>

        <nav className="nb-nav">
          {NAV_ITEMS.filter(i => !i.wa).map(item => {
            if (item.academy) {
              return (
                <Link key={item.label} href={item.href} className="nb-link nb-academy">
                  {item.label}
                </Link>
              );
            }
            const active = checkActive(item.href, pathname);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`nb-link${active ? " nb-on" : ""}`}
                style={{ color: linkClr }}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/244933153362"
            target="_blank"
            rel="noopener noreferrer"
            className="nb-wa-pill"
          >
            <WaIcon />
            WhatsApp
          </a>
        </nav>

        <button
          className={`nb-ham${open ? " nb-open" : ""}`}
          onClick={() => setOpen(p => !p)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span style={{ background: hamClr, width: "22px" }}/>
          <span style={{ background: hamClr, width: "16px" }}/>
          <span style={{ background: hamClr, width: "22px" }}/>
        </button>
      </header>

      {/* ── OVERLAY ── */}
      <div
        className={`nb-overlay${open ? " nb-open" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* ── DRAWER ── */}
      <div ref={drawerRef} className={`nb-drawer${open ? " nb-open" : ""}`}>
        <div className="nb-dhead">
          <Link href="/" className="nb-logo" onClick={() => setOpen(false)}>
            <div style={{ width:34, height:34, borderRadius:8, background:"#095b66", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg viewBox="0 0 24 24" fill="none" width="17" height="17">
                <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/>
              </svg>
            </div>
            <span style={{ fontWeight:900, fontSize:15, color:"#095b66", fontFamily:"'Montserrat',sans-serif" }}>
              {/* Multi<span style={{ color:"#0a7a89" }}>energia</span> */}
            </span>
          </Link>
          <button className="nb-dclose" onClick={() => setOpen(false)} aria-label="Fechar">
            <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
              <path d="M1 1l12 12M13 1L1 13" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="nb-dnav">
          <Link
            href="/"
            className={`nb-dlink${pathname === "/" ? " nb-on" : ""}`}
            onClick={() => setOpen(false)}
          >
            {/* <span className="nb-ddot"/><span>Multienergia</span> */}
          </Link>

          {NAV_ITEMS.filter(i => !i.wa).map(item => {
            const active = checkActive(item.href, pathname);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`nb-dlink${active ? " nb-on" : ""}`}
                onClick={() => setOpen(false)}
                style={item.academy ? { color:"#095b66", fontWeight:800, background:"linear-gradient(90deg,#f0f9fa,#fff)" } : {}}
                {...(item.external ? { target:"_blank", rel:"noopener noreferrer" } : {})}
              >
                <span className="nb-ddot" style={item.academy ? { background:"#3ec8d4" } : {}}/>
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="nb-ddiv"/>

          <a
            href="https://wa.me/244933153362"
            target="_blank"
            rel="noopener noreferrer"
            className="nb-dwa"
            onClick={() => setOpen(false)}
          >
            <WaIcon size={18} />
            WhatsApp Angola
          </a>
        </nav>

        <div className="nb-dfoot">
          Alvará IRCOP nº 982 · 5ª Classe<br/>
          Luanda · Angola
        </div>
      </div>
    </>
  );
}

/* ── ícone WhatsApp reutilizável ── */
function WaIcon({ size = 13 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ flexShrink:0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}