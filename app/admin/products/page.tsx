// app/admin/products/page.tsx
"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Product } from "@/app/components/ProductsSection";

type FormData = Omit<Product, "id"> & { specsStr: string; brandsStr: string };

const EMPTY: FormData = {
  order: 0, slug: "", name: "", desc: "",
  color: "#095b66", lightColor: "#e8f7f9",
  iconIndex: 0, active: true,
  specs: [], brands: [],
  specsStr: "", brandsStr: "",
};

const ICON_OPTIONS = [
  "0 — Solar",
  "1 — Bateria / EcoFlow",
  "2 — Quadro Elétrico",
  "3 — UPS",
  "4 — Transformador",
  "5 — Veículo Elétrico",
];

export default function AdminProducts() {
  const [products, setProducts]   = useState<Product[]>([]);
  const [loading, setLoading]     = useState(true);
  const [saving, setSaving]       = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem]   = useState<Product | null>(null);
  const [form, setForm]           = useState<FormData>(EMPTY);
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);
  const [toast, setToast]         = useState<{ msg: string; type: "ok"|"err" } | null>(null);

  const showToast = (msg: string, type: "ok"|"err" = "ok") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/cms/products?all=1");
    setProducts(await res.json());
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const openNew  = () => { setEditItem(null); setForm(EMPTY); setModalOpen(true); };
  const openEdit = (p: Product) => {
    setEditItem(p);
    setForm({ ...p, specsStr: p.specs.join("\n"), brandsStr: p.brands.join("\n") });
    setModalOpen(true);
  };

  const save = async () => {
    setSaving(true);
    const payload = {
      ...form,
      specs:  form.specsStr.split("\n").map(x => x.trim()).filter(Boolean),
      brands: form.brandsStr.split("\n").map(x => x.trim()).filter(Boolean),
    };
    // remove helper fields
    const { specsStr, brandsStr, ...data } = payload;

    try {
      if (editItem) {
        await fetch(`/api/cms/products/${editItem.id}`, {
          method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
        });
        showToast("Produto actualizado");
      } else {
        await fetch("/api/cms/products", {
          method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
        });
        showToast("Produto criado");
      }
      setModalOpen(false);
      await load();
    } catch {
      showToast("Erro ao guardar", "err");
    } finally {
      setSaving(false);
    }
  };

  const toggleActive = async (p: Product) => {
    await fetch(`/api/cms/products/${p.id}`, {
      method: "PUT", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !p.active }),
    });
    showToast(p.active ? "Produto desactivado" : "Produto activado");
    await load();
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    await fetch(`/api/cms/products/${deleteTarget.id}`, { method: "DELETE" });
    showToast("Produto eliminado");
    setDeleteTarget(null);
    await load();
  };

  const set = (k: keyof FormData, v: string | boolean | number) =>
    setForm(prev => ({ ...prev, [k]: v }));

  // ── Styles ──
  const inp: React.CSSProperties = {
    width: "100%", background: "#f8fbfc", border: "1.5px solid #dde8ea",
    borderRadius: 8, color: "#1a2c2e", padding: "10px 12px",
    fontFamily: "'Montserrat',sans-serif", fontSize: 13, outline: "none",
  };
  const label: React.CSSProperties = {
    fontSize: 10, fontWeight: 700, color: "#095b66",
    letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 4, display: "block",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Montserrat', sans-serif; background: #f4f8f8; }
        @keyframes toastIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }
        @keyframes spin { to { transform:rotate(360deg); } }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#f4f8f8", fontFamily: "'Montserrat',sans-serif" }}>

        {/* Header */}
        <div style={{ background: "#fff", borderBottom: "1.5px solid #e8f0f0", padding: "0 32px", paddingTop: 200 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <a href="/admin" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#4a7275", fontSize: 12, fontWeight: 700 }}>
                <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                Dashboard
              </a>
              <div style={{ width: 1, height: 20, background: "#dde8ea" }}/>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e" }}>Produtos</div>
            </div>
            <button onClick={openNew} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 18px", background: "#095b66", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer", fontFamily: "inherit" }}>
              <svg viewBox="0 0 14 14" fill="none" width="12"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
              Novo Produto
            </button>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px" }}>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 28 }}>
            {[
              { label: "Total", value: products.length, color: "#095b66", bg: "#e8f7f9" },
              { label: "Activos", value: products.filter(p => p.active).length, color: "#166534", bg: "#dcfce7" },
              { label: "Inactivos", value: products.filter(p => !p.active).length, color: "#991b1b", bg: "#fce8e8" },
            ].map(s => (
              <div key={s.label} style={{ background: "#fff", border: "1.5px solid #e8f0f0", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 18, fontWeight: 900, color: s.color }}>{s.value}</span>
                </div>
                <span style={{ fontSize: 12, color: "#9bbbbe", fontWeight: 600 }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Table */}
          {loading ? (
            <div style={{ padding: "60px 0", display: "flex", justifyContent: "center" }}>
              <svg viewBox="0 0 32 32" fill="none" width="32" style={{ animation: "spin .8s linear infinite" }}>
                <circle cx="16" cy="16" r="12" stroke="#dde8ea" strokeWidth="3"/>
                <path d="M16 4a12 12 0 0112 12" stroke="#095b66" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {products.map((p, i) => (
                <div key={p.id} style={{
                  background: p.active ? "#fff" : "#fafafa",
                  border: `1.5px solid ${p.active ? "#dde8ea" : "#f0d8d8"}`,
                  borderRadius: 14, padding: "18px 20px",
                  display: "grid", gridTemplateColumns: "40px 1fr auto",
                  alignItems: "center", gap: 16, opacity: p.active ? 1 : 0.7,
                  position: "relative", overflow: "hidden",
                }}>
                  {/* colour bar */}
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: p.color, borderRadius: "4px 0 0 4px" }}/>

                  {/* order */}
                  <div style={{ textAlign: "center", paddingLeft: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: "#9bbbbe" }}>{i + 1}</span>
                  </div>

                  {/* info */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e" }}>{p.name}</span>
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "2px 8px", borderRadius: 99, background: p.active ? "#dcfce7" : "#fce8e8", color: p.active ? "#166534" : "#991b1b" }}>
                        {p.active ? "Activo" : "Inactivo"}
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: "#6a9598", lineHeight: 1.5, marginBottom: 6, display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {p.desc}
                    </p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {p.brands.map(b => (
                        <span key={b} style={{ fontSize: 10, fontWeight: 700, color: "#095b66", background: "#e8f7f9", borderRadius: 4, padding: "2px 8px" }}>{b}</span>
                      ))}
                    </div>
                  </div>

                  {/* actions */}
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => toggleActive(p)} style={{ width: 34, height: 34, borderRadius: 8, border: "1.5px solid #dde8ea", background: p.active ? "#f0fdf4" : "#fef2f2", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {p.active
                        ? <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#22c55e" strokeWidth="1.8"/><path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round"/></svg>
                        : <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#ef4444" strokeWidth="1.8"/><path d="M6 6l4 4M10 6l-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      }
                    </button>
                    <button onClick={() => openEdit(p)} style={{ width: 34, height: 34, borderRadius: 8, border: "1.5px solid #dde8ea", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M11 2l3 3-8 8H3v-3l8-8z" stroke="#095b66" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                    </button>
                    <button onClick={() => setDeleteTarget(p)} style={{ width: 34, height: 34, borderRadius: 8, border: "1.5px solid #fce8e8", background: "#fff5f5", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M3 4h10M6 4V2h4v2M5 4v9h6V4" stroke="#c0392b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Modal criar/editar ── */}
      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={() => setModalOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.7)", backdropFilter: "blur(4px)" }}/>
          <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 760, maxHeight: "92vh", overflowY: "auto", background: "#fff", borderRadius: 20, boxShadow: "0 32px 96px rgba(6,20,22,.3)" }}>

            {/* Modal header */}
            <div style={{ padding: "24px 28px 18px", borderBottom: "1.5px solid #edf2f2", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontSize: 18, fontWeight: 900, color: "#0a1c1e" }}>{editItem ? "Editar Produto" : "Novo Produto"}</h2>
              <button onClick={() => setModalOpen(false)} style={{ width: 32, height: 32, borderRadius: 8, border: "1.5px solid #dde8ea", background: "#f8fbfc", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 16 16" fill="none" width="12"><path d="M4 4l8 8M12 4l-8 8" stroke="#4a7275" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>

            {/* Modal body */}
            <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Nome + Slug */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={label}>Nome</span>
                  <input style={inp} value={form.name} onChange={e => set("name", e.target.value)} placeholder="Ex: Sistemas de Energia Solar"/>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={label}>Slug (URL)</span>
                  <input style={inp} value={form.slug} onChange={e => set("slug", e.target.value.toLowerCase().replace(/\s+/g, "-"))} placeholder="Ex: solar"/>
                </label>
              </div>

              {/* Descrição */}
              <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={label}>Descrição</span>
                <textarea style={{ ...inp, minHeight: 80, resize: "vertical" }} value={form.desc} onChange={e => set("desc", e.target.value)} placeholder="Texto descritivo do produto..."/>
              </label>

              {/* Specs + Brands */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={label}>Especificações (uma por linha)</span>
                  <textarea style={{ ...inp, minHeight: 90, resize: "vertical" }} value={form.specsStr} onChange={e => set("specsStr", e.target.value)} placeholder={"+50 MW instalados\nResidencial · Industrial\nAutoconsumo"}/>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={label}>Marcas (uma por linha)</span>
                  <textarea style={{ ...inp, minHeight: 90, resize: "vertical" }} value={form.brandsStr} onChange={e => set("brandsStr", e.target.value)} placeholder={"Huawei FusionSolar\nSMA\nSiemens"}/>
                </label>
              </div>

              {/* Cores + Ícone + Ordem */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 80px", gap: 14 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={label}>Cor Principal</span>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input type="color" value={form.color} onChange={e => set("color", e.target.value)} style={{ width: 36, height: 36, borderRadius: 6, border: "1.5px solid #dde8ea", cursor: "pointer", padding: 2 }}/>
                    <input style={{ ...inp, flex: 1 }} value={form.color} onChange={e => set("color", e.target.value)} placeholder="#095b66"/>
                  </div>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={label}>Cor Clara</span>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input type="color" value={form.lightColor} onChange={e => set("lightColor", e.target.value)} style={{ width: 36, height: 36, borderRadius: 6, border: "1.5px solid #dde8ea", cursor: "pointer", padding: 2 }}/>
                    <input style={{ ...inp, flex: 1 }} value={form.lightColor} onChange={e => set("lightColor", e.target.value)} placeholder="#e8f7f9"/>
                  </div>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={label}>Ícone</span>
                  <select style={{ ...inp, appearance: "none", cursor: "pointer" }} value={form.iconIndex} onChange={e => set("iconIndex", +e.target.value)}>
                    {ICON_OPTIONS.map((o, i) => <option key={i} value={i}>{o}</option>)}
                  </select>
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={label}>Ordem</span>
                  <input type="number" style={inp} value={form.order} onChange={e => set("order", +e.target.value)}/>
                </label>
              </div>

              {/* Activo */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "14px 16px" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0a1c1e" }}>Produto activo</div>
                  <div style={{ fontSize: 11, color: "#9bbbbe", marginTop: 2 }}>Quando inactivo não aparece no site</div>
                </div>
                <button onClick={() => set("active", !form.active)} style={{ width: 48, height: 26, borderRadius: 99, border: "none", cursor: "pointer", background: form.active ? "#095b66" : "#dde8ea", position: "relative", transition: "background .2s", flexShrink: 0 }}>
                  <div style={{ position: "absolute", top: 3, left: form.active ? 24 : 3, width: 20, height: 20, borderRadius: "50%", background: "#fff", transition: "left .2s", boxShadow: "0 1px 4px rgba(0,0,0,.18)" }}/>
                </button>
              </div>
            </div>

            {/* Modal footer */}
            <div style={{ padding: "16px 28px 24px", borderTop: "1.5px solid #edf2f2", display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <button onClick={() => setModalOpen(false)} style={{ padding: "10px 20px", borderRadius: 8, border: "1.5px solid #dde8ea", background: "#fff", fontSize: 12, fontWeight: 700, color: "#4a7275", cursor: "pointer", fontFamily: "inherit" }}>
                Cancelar
              </button>
              <button onClick={save} disabled={saving || !form.name || !form.slug} style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: form.name && form.slug && !saving ? "#095b66" : "#b0c8ca", fontSize: 12, fontWeight: 700, color: "#fff", cursor: form.name && form.slug && !saving ? "pointer" : "not-allowed", fontFamily: "inherit" }}>
                {saving ? "A guardar…" : "Guardar Produto"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Confirm delete ── */}
      {deleteTarget && (
        <div style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={() => setDeleteTarget(null)} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.7)", backdropFilter: "blur(4px)" }}/>
          <div style={{ position: "relative", zIndex: 1, background: "#fff", borderRadius: 16, padding: "32px", maxWidth: 400, width: "100%" }}>
            <h3 style={{ fontSize: 18, fontWeight: 900, color: "#0a1c1e", marginBottom: 8 }}>Eliminar produto?</h3>
            <p style={{ fontSize: 13, color: "#4a7275", marginBottom: 8 }}>Esta acção é permanente:</p>
            <div style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 8, padding: "10px 14px", marginBottom: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{deleteTarget.name}</div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setDeleteTarget(null)} style={{ flex: 1, padding: "11px", borderRadius: 8, border: "1.5px solid #dde8ea", background: "#fff", fontSize: 12, fontWeight: 700, color: "#4a7275", cursor: "pointer", fontFamily: "inherit" }}>Cancelar</button>
              <button onClick={confirmDelete} style={{ flex: 1, padding: "11px", borderRadius: 8, border: "none", background: "#c0392b", fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer", fontFamily: "inherit" }}>Eliminar</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      {toast && (
        <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 999, animation: "toastIn .3s ease both" }}>
          <div style={{ background: toast.type === "ok" ? "#095b66" : "#c0392b", color: "#fff", borderRadius: 10, padding: "12px 18px", fontSize: 13, fontWeight: 700, boxShadow: "0 8px 32px rgba(0,0,0,.2)" }}>
            {toast.msg}
          </div>
        </div>
      )}
    </>
  );
}