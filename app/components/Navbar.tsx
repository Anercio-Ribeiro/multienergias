"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  academy?: boolean;
  wa?: boolean;
  external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Empresa",    href: "/empresa" },
  { label: "Serviços",   href: "/#servicos" },
  { label: "Produtos",   href: "/produtos" },
  { label: "Projectos",  href: "/projectos" },
  { label: "Catálogo",   href: "/" },
  { label: "Academy",    href: "/", academy: true },
  { label: "Contactos",  href: "/#contacto" },
  { label: "WhatsApp",   href: "https://wa.me/244933153362", wa: true, external: true },
];

function checkActive(href: string, pathname: string): boolean {
  if (href.startsWith("http") || href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname  = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const fn = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [open]);

  const linkClr = "#1e3a3e";
  const hamClr  = "#095b66";

  return (
    <>
      <style>{`
        /* ── barra fixa ── */
        .nb-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 500;
          height: 66px;
          background: #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,.06);
          font-family: 'Montserrat', sans-serif;
        }

        /* ── container interno com max-width igual ao conteúdo ── */
        .nb-inner {
          max-width: 1660px;
          margin: 0 auto;
          height: 100%;
          padding: 0 40px;
          display: flex;
          align-items: center;
          gap: 0;
        }

        /* ── logo ── */
        .nb-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          margin-right: 32px;
        }

        /* ── links do meio ── */
        .nb-nav {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: flex-end; /* links encostados ao lado do WhatsApp */
        }

        .nb-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: .09em;
          text-transform: uppercase;
          padding: 7px 11px;
          border-radius: 7px;
          text-decoration: none;
          white-space: nowrap;
          transition: color .2s, background .2s;
        }
        .nb-link:hover { background: rgba(9,91,102,.07); }
        .nb-link.nb-on  { font-weight: 800; color: #095b66 !important; }

        .nb-academy {
          background: linear-gradient(135deg,#095b66,#0a7a89);
          color: #fff !important;
          border-radius: 7px;
          font-weight: 800;
          padding: 7px 14px;
        }
        .nb-academy:hover { background: linear-gradient(135deg,#074f59,#086e7a) !important; }

        /* ── botão whatsapp — encostado à direita ── */
        .nb-wa-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: .07em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 99px;
          background: #25D366;
          color: #fff;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          margin-left: 32px;
        }

        /* ── hamburger ── */
        .nb-ham {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          width: 40px; height: 40px;
          gap: 5px;
          border: none; background: none;
          cursor: pointer;
          margin-left: auto;
          flex-shrink: 0;
        }
        .nb-ham span {
          display: block;
          height: 2px;
          border-radius: 2px;
        }

        /* ── overlay + drawer ── */
        .nb-overlay {
          position: fixed; inset: 0; z-index: 498;
          background: rgba(0,0,0,.5);
          opacity: 0; pointer-events: none;
          transition: opacity .3s;
        }
        .nb-overlay.nb-open { opacity: 1; pointer-events: auto; }

        .nb-drawer {
          position: fixed; top: 0; right: 0; bottom: 0; z-index: 499;
          width: min(320px, 88vw);
          background: #fff;
          box-shadow: -8px 0 48px rgba(0,0,0,.16);
          display: flex; flex-direction: column;
          transform: translateX(100%);
          transition: transform .35s;
        }
        .nb-drawer.nb-open { transform: translateX(0); }

        .nb-dnav { display: flex; flex-direction: column; padding: 20px 0; }
        .nb-dlink {
          padding: 13px 22px;
          font-size: 12px; font-weight: 700;
          letter-spacing: .06em; text-transform: uppercase;
          color: #2a4a4e; text-decoration: none;
        }
        .nb-dlink.nb-on { color: #095b66; }

        /* ── responsive ── */
        @media (max-width: 1060px) {
          .nb-inner  { padding: 0 20px; }
          .nb-nav    { display: none; }
          .nb-wa-pill { display: none; }
          .nb-ham    { display: flex; }
        }
      `}</style>

      <header className="nb-root">
        <div className="nb-inner">

          {/* Logo */}
          <Link href="/" className="nb-logo">
            <Image
              src="/logo.svg"
              alt="Soluções Eléctricas e Energéticas"
              width={220}
              height={40}
            />
          </Link>

          {/* Links centrais */}
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
          </nav>

          {/* WhatsApp — direita */}
          <a
            href="https://wa.me/244933153362"
            target="_blank"
            rel="noopener noreferrer"
            className="nb-wa-pill"
          >
            <WaIcon />
            WhatsApp
          </a>

          {/* Hamburger mobile */}
          <button
            className="nb-ham"
            onClick={() => setOpen(p => !p)}
            aria-label="Abrir menu"
          >
            <span style={{ background: hamClr, width: 22 }} />
            <span style={{ background: hamClr, width: 16 }} />
            <span style={{ background: hamClr, width: 22 }} />
          </button>

        </div>
      </header>

      <div
        className={`nb-overlay${open ? " nb-open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <div ref={drawerRef} className={`nb-drawer${open ? " nb-open" : ""}`}>
        <nav className="nb-dnav">
          {NAV_ITEMS.map(item => {
            const active = checkActive(item.href, pathname);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`nb-dlink${active ? " nb-on" : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

function WaIcon({ size = 13 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
    </svg>
  );
}