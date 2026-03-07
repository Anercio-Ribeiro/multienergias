"use client";
import React, { useState, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════ */
interface HeroSlide {
  id: number; order: number; tag: string;
  line1: string; line2: string; line3: string;
  sub: string; active: boolean;
}
interface Product {
  id: number; order: number; slug: string; name: string;
  desc: string; color: string; lightColor: string;
  iconIndex: number; active: boolean;
  specs: string[]; brands: string[];
}

type Section = "overview" | "hero" | "products";

/* ═══════════════════════════════════════════════
   HELPERS / SHARED UI
═══════════════════════════════════════════════ */
function Toast({ msg, type }: { msg: string; type: "ok" | "err" }) {
  return (
    <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999, animation: "toastIn .3s ease both" }}>
      <div style={{
        background: type === "ok" ? "#095b66" : "#c0392b", color: "#fff",
        borderRadius: 10, padding: "12px 20px", fontSize: 13, fontWeight: 700,
        display: "flex", alignItems: "center", gap: 10,
        boxShadow: "0 8px 32px rgba(0,0,0,.22)",
      }}>
        {type === "ok"
          ? <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="8" r="6" stroke="#fff" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          : <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="8" r="6" stroke="#fff" strokeWidth="1.5"/><path d="M6 6l4 4M10 6l-4 4" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/></svg>
        }
        {msg}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <div style={{ padding: "60px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      <svg viewBox="0 0 32 32" fill="none" width="32" style={{ animation: "spin .8s linear infinite" }}>
        <circle cx="16" cy="16" r="12" stroke="#dde8ea" strokeWidth="3"/>
        <path d="M16 4a12 12 0 0112 12" stroke="#095b66" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <span style={{ fontSize: 13, color: "#9bbbbe", fontWeight: 600 }}>A carregar…</span>
    </div>
  );
}

function StatCard({ label, value, color, bg }: { label: string; value: number; color: string; bg: string }) {
  return (
    <div style={{ background: "#fff", border: "1.5px solid #e8f0f0", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 20, fontWeight: 900, color }}>{value}</span>
      </div>
      <span style={{ fontSize: 12, color: "#9bbbbe", fontWeight: 600 }}>{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   HERO SLIDES SECTION
═══════════════════════════════════════════════ */
type HeroForm = Omit<HeroSlide, "id">;
const EMPTY_HERO: HeroForm = { order: 0, tag: "", line1: "", line2: "", line3: "", sub: "", active: true };

function HeroPreview({ slide }: { slide: HeroForm }) {
  return (
    <div style={{ position: "relative", background: "#095b66", borderRadius: 10, padding: "16px 20px 0", overflow: "hidden", minHeight: 130, border: "1px solid rgba(255,255,255,.08)" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", background: "rgba(255,255,255,.04)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}/>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }}/>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, padding: "2px 8px", fontSize: 8, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.85)", marginBottom: 8 }}>
          {slide.tag || "Tag do slide"}
        </div>
        <div style={{ fontWeight: 900, lineHeight: .95, color: "#fff", marginBottom: 6 }}>
          <div style={{ fontSize: 15 }}>{slide.line1 || "Linha 1"}</div>
          <div style={{ fontSize: 15, color: "rgba(255,255,255,.4)" }}>{slide.line2 || "Linha 2"}</div>
          <div style={{ fontSize: 15 }}>{slide.line3 || "Linha 3"}</div>
        </div>
        <p style={{ fontSize: 9, lineHeight: 1.6, color: "rgba(255,255,255,.65)", maxWidth: 220, marginBottom: 10 }}>{slide.sub || "Subtítulo…"}</p>
      </div>
      <div style={{ height: 12, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)", marginTop: 8 }}/>
    </div>
  );
}

function HeroModal({ initial, onSave, onClose, loading }: {
  initial: HeroForm; onSave: (d: HeroForm) => void; onClose: () => void; loading: boolean;
}) {
  const [form, setForm] = useState<HeroForm>(initial);
  const set = (k: keyof HeroForm, v: string | boolean | number) => setForm(p => ({ ...p, [k]: v }));
  const valid = form.tag && form.line1 && form.line2 && form.line3 && form.sub;

  const fields: { key: keyof HeroForm; label: string; hint: string; type?: string }[] = [
    { key: "tag",   label: "Tag / Badge",  hint: 'Ex: "Eficiência · Inovação"' },
    { key: "line1", label: "Linha 1", hint: "Ex: Energia que" },
    { key: "line2", label: "Linha 2 (esmaecida)", hint: "Ex: transforma" },
    { key: "line3", label: "Linha 3", hint: "Ex: Angola" },
    { key: "sub",   label: "Subtítulo", hint: "Frase descritiva", type: "textarea" },
    { key: "order", label: "Ordem", hint: "Inteiro, menor = primeiro", type: "number" },
  ];

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.72)", backdropFilter: "blur(4px)" }}/>
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 820, maxHeight: "92vh", overflowY: "auto", background: "#fff", borderRadius: 20, boxShadow: "0 32px 96px rgba(6,20,22,.35)" }}>
        {/* header */}
        <div style={{ padding: "26px 30px 18px", borderBottom: "1.5px solid #edf2f2", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#095b66", marginBottom: 3 }}>Hero Slides</p>
            <h2 style={{ fontSize: 18, fontWeight: 900, color: "#0a1c1e" }}>{initial.tag ? "Editar Slide" : "Novo Slide"}</h2>
          </div>
          <button onClick={onClose} style={iconBtn}><svg viewBox="0 0 16 16" fill="none" width="13"><path d="M4 4l8 8M12 4l-8 8" stroke="#4a7275" strokeWidth="2" strokeLinecap="round"/></svg></button>
        </div>
        {/* body */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px" }}>
          <div style={{ padding: "22px 30px", display: "flex", flexDirection: "column", gap: 14 }}>
            {fields.map(f => (
              <label key={f.key} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={lbl}>{f.label} <span style={{ fontWeight: 400, color: "#9bbbbe", textTransform: "none", letterSpacing: 0 }}>— {f.hint}</span></span>
                {f.type === "textarea" ? (
                  <textarea value={form[f.key] as string} onChange={e => set(f.key, e.target.value)} rows={3} style={inpStyle}/>
                ) : f.type === "number" ? (
                  <input type="number" value={form[f.key] as number} onChange={e => set(f.key, parseInt(e.target.value) || 0)} style={{ ...inpStyle, width: 90 }}/>
                ) : (
                  <input type="text" value={form[f.key] as string} onChange={e => set(f.key, e.target.value)} placeholder={f.hint} style={inpStyle}/>
                )}
              </label>
            ))}
            {/* toggle */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "12px 14px" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#0a1c1e" }}>Slide activo</div>
                <div style={{ fontSize: 11, color: "#9bbbbe", marginTop: 2 }}>Quando inactivo não aparece no site</div>
              </div>
              <Toggle on={form.active} onToggle={() => set("active", !form.active)}/>
            </div>
          </div>
          {/* preview */}
          <div style={{ padding: "22px 22px 22px 0", borderLeft: "1.5px solid #edf2f2", paddingLeft: 20 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#9bbbbe", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 8 }}>Pré-visualização</p>
            <HeroPreview slide={form}/>
          </div>
        </div>
        {/* footer */}
        <div style={{ padding: "14px 30px 22px", borderTop: "1.5px solid #edf2f2", display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button onClick={onClose} style={cancelBtn}>Cancelar</button>
          <button onClick={() => valid && onSave(form)} disabled={!valid || loading} style={{ ...primaryBtn, background: valid && !loading ? "#095b66" : "#b0c8ca", cursor: valid && !loading ? "pointer" : "not-allowed" }}>
            {loading ? "A guardar…" : "Guardar Slide"}
          </button>
        </div>
      </div>
    </div>
  );
}

function HeroSection({ showToast }: { showToast: (m: string, t?: "ok" | "err") => void }) {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState<HeroSlide | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<HeroSlide | null>(null);
  const [deleting, setDeleting] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try { const r = await fetch("/api/cms/hero-slides"); setSlides(await r.json()); } catch { showToast("Erro ao carregar slides", "err"); }
    finally { setLoading(false); }
  }, [showToast]);

  useEffect(() => { load(); }, [load]);

  const handleSave = async (data: HeroForm) => {
    setSaving(true);
    try {
      if (editItem) {
        await fetch(`/api/cms/hero-slides/${editItem.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        showToast("Slide actualizado");
      } else {
        await fetch("/api/cms/hero-slides", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        showToast("Slide criado");
      }
      setModal(false); setEditItem(null); await load();
    } catch { showToast("Erro ao guardar", "err"); }
    finally { setSaving(false); }
  };

  const handleToggle = async (s: HeroSlide) => {
    await fetch(`/api/cms/hero-slides/${s.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !s.active }) });
    showToast(s.active ? "Slide desactivado" : "Slide activado");
    await load();
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await fetch(`/api/cms/hero-slides/${deleteTarget.id}`, { method: "DELETE" });
      showToast("Slide eliminado"); setDeleteTarget(null); await load();
    } catch { showToast("Erro ao eliminar", "err"); }
    finally { setDeleting(false); }
  };

  const activeCount = slides.filter(s => s.active).length;

  return (
    <div>
      {/* stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 22 }}>
        <StatCard label="Total de slides" value={slides.length} color="#095b66" bg="#e8f7f9"/>
        <StatCard label="Slides activos" value={activeCount} color="#166534" bg="#dcfce7"/>
        <StatCard label="Slides inactivos" value={slides.length - activeCount} color="#991b1b" bg="#fce8e8"/>
      </div>

      {/* add button */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <button onClick={() => { setEditItem(null); setModal(true); }} style={primaryBtn}>
          <svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
          Novo Slide
        </button>
      </div>

      {loading ? <Spinner/> : slides.length === 0 ? (
        <EmptyState label="Nenhum slide criado" hint="Crie o primeiro slide do Hero" onAdd={() => setModal(true)}/>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {slides.map((s, i) => (
            <div key={s.id} style={{ ...rowCard, opacity: s.active ? 1 : 0.6, borderColor: s.active ? "#dde8ea" : "#f0d8d8", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: s.active ? "#095b66" : "#e8a0a0", borderRadius: "4px 0 0 4px" }}/>
              <div style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ background: "rgba(9,91,102,.08)", border: "1px solid rgba(9,91,102,.15)", borderRadius: 99, padding: "2px 9px", fontSize: 10, fontWeight: 700, color: "#095b66" }}>{s.tag}</span>
                  <StatusBadge active={s.active}/>
                  <span style={{ fontSize: 10, color: "#9bbbbe", marginLeft: 4 }}>#{i + 1}</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 16, fontWeight: 900, color: "#0a1c1e" }}>{s.line1}</span>
                  <span style={{ fontSize: 16, fontWeight: 900, color: "rgba(9,91,102,.35)" }}>{s.line2}</span>
                  <span style={{ fontSize: 16, fontWeight: 900, color: "#0a1c1e" }}>{s.line3}</span>
                </div>
                <p style={{ fontSize: 12, color: "#6a9598", lineHeight: 1.4, margin: 0, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>{s.sub}</p>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button onClick={() => handleToggle(s)} style={{ ...iconBtn, background: s.active ? "#f0fdf4" : "#fef2f2", borderColor: "#dde8ea" }} title={s.active ? "Desactivar" : "Activar"}>
                  {s.active ? <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#22c55e" strokeWidth="1.8"/><path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  : <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#ef4444" strokeWidth="1.8"/><path d="M6 6l4 4M10 6l-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                </button>
                <button onClick={() => { setEditItem(s); setModal(true); }} style={iconBtn} title="Editar">
                  <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M11 2l3 3-8 8H3v-3l8-8z" stroke="#095b66" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                </button>
                <button onClick={() => setDeleteTarget(s)} style={{ ...iconBtn, background: "#fff5f5", borderColor: "#fce8e8" }} title="Eliminar">
                  <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M3 4h10M6 4V2h4v2M5 4v9h6V4" stroke="#c0392b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <HeroModal
          initial={editItem ? { order: editItem.order, tag: editItem.tag, line1: editItem.line1, line2: editItem.line2, line3: editItem.line3, sub: editItem.sub, active: editItem.active } : { ...EMPTY_HERO, order: slides.length }}
          onSave={handleSave} onClose={() => { setModal(false); setEditItem(null); }} loading={saving}
        />
      )}

      {deleteTarget && (
        <ConfirmDeleteModal title={`${deleteTarget.line1} ${deleteTarget.line2} ${deleteTarget.line3}`} hint={deleteTarget.tag} onConfirm={handleDelete} onClose={() => setDeleteTarget(null)} loading={deleting}/>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PRODUCTS SECTION
═══════════════════════════════════════════════ */
const ICON_OPTIONS = ["0 — Solar", "1 — Bateria / EcoFlow", "2 — Quadro Elétrico", "3 — UPS", "4 — Transformador", "5 — Veículo Elétrico"];
type ProductForm = Omit<Product, "id"> & { specsStr: string; brandsStr: string };
const EMPTY_PRODUCT: ProductForm = { order: 0, slug: "", name: "", desc: "", color: "#095b66", lightColor: "#e8f7f9", iconIndex: 0, active: true, specs: [], brands: [], specsStr: "", brandsStr: "" };

function ProductModal({ initial, onSave, onClose, loading }: {
  initial: ProductForm; onSave: (d: ProductForm) => void; onClose: () => void; loading: boolean;
}) {
  const [form, setForm] = useState<ProductForm>(initial);
  const set = (k: keyof ProductForm, v: string | boolean | number) => setForm(p => ({ ...p, [k]: v }));
  const valid = form.name && form.slug;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.72)", backdropFilter: "blur(4px)" }}/>
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 780, maxHeight: "92vh", overflowY: "auto", background: "#fff", borderRadius: 20, boxShadow: "0 32px 96px rgba(6,20,22,.35)" }}>
        <div style={{ padding: "26px 30px 18px", borderBottom: "1.5px solid #edf2f2", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#095b66", marginBottom: 3 }}>Produtos</p>
            <h2 style={{ fontSize: 18, fontWeight: 900, color: "#0a1c1e" }}>{initial.name ? "Editar Produto" : "Novo Produto"}</h2>
          </div>
          <button onClick={onClose} style={iconBtn}><svg viewBox="0 0 16 16" fill="none" width="13"><path d="M4 4l8 8M12 4l-8 8" stroke="#4a7275" strokeWidth="2" strokeLinecap="round"/></svg></button>
        </div>
        <div style={{ padding: "22px 30px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={lbl}>Nome</span>
              <input style={inpStyle} value={form.name} onChange={e => set("name", e.target.value)} placeholder="Ex: Sistemas de Energia Solar"/>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={lbl}>Slug (URL)</span>
              <input style={inpStyle} value={form.slug} onChange={e => set("slug", e.target.value.toLowerCase().replace(/\s+/g, "-"))} placeholder="Ex: solar"/>
            </label>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={lbl}>Descrição</span>
            <textarea style={{ ...inpStyle, minHeight: 72, resize: "vertical" }} value={form.desc} onChange={e => set("desc", e.target.value)} placeholder="Texto descritivo..."/>
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={lbl}>Especificações (uma por linha)</span>
              <textarea style={{ ...inpStyle, minHeight: 80, resize: "vertical" }} value={form.specsStr} onChange={e => set("specsStr", e.target.value)} placeholder={"+50 MW instalados\nResidencial · Industrial"}/>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={lbl}>Marcas (uma por linha)</span>
              <textarea style={{ ...inpStyle, minHeight: 80, resize: "vertical" }} value={form.brandsStr} onChange={e => set("brandsStr", e.target.value)} placeholder={"Huawei FusionSolar\nSMA\nSiemens"}/>
            </label>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 80px", gap: 14 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={lbl}>Cor Principal</span>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input type="color" value={form.color} onChange={e => set("color", e.target.value)} style={{ width: 34, height: 34, borderRadius: 6, border: "1.5px solid #dde8ea", cursor: "pointer", padding: 2 }}/>
                <input style={{ ...inpStyle, flex: 1 }} value={form.color} onChange={e => set("color", e.target.value)}/>
              </div>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={lbl}>Cor Clara</span>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input type="color" value={form.lightColor} onChange={e => set("lightColor", e.target.value)} style={{ width: 34, height: 34, borderRadius: 6, border: "1.5px solid #dde8ea", cursor: "pointer", padding: 2 }}/>
                <input style={{ ...inpStyle, flex: 1 }} value={form.lightColor} onChange={e => set("lightColor", e.target.value)}/>
              </div>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={lbl}>Ícone</span>
              <select style={{ ...inpStyle, appearance: "none", cursor: "pointer" }} value={form.iconIndex} onChange={e => set("iconIndex", +e.target.value)}>
                {ICON_OPTIONS.map((o, i) => <option key={i} value={i}>{o}</option>)}
              </select>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={lbl}>Ordem</span>
              <input type="number" style={inpStyle} value={form.order} onChange={e => set("order", +e.target.value)}/>
            </label>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "12px 14px" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#0a1c1e" }}>Produto activo</div>
              <div style={{ fontSize: 11, color: "#9bbbbe", marginTop: 2 }}>Quando inactivo não aparece no site</div>
            </div>
            <Toggle on={form.active} onToggle={() => set("active", !form.active)}/>
          </div>
        </div>
        <div style={{ padding: "14px 30px 22px", borderTop: "1.5px solid #edf2f2", display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button onClick={onClose} style={cancelBtn}>Cancelar</button>
          <button onClick={() => valid && onSave(form)} disabled={!valid || loading} style={{ ...primaryBtn, background: valid && !loading ? "#095b66" : "#b0c8ca", cursor: valid && !loading ? "pointer" : "not-allowed" }}>
            {loading ? "A guardar…" : "Guardar Produto"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductsSection({ showToast }: { showToast: (m: string, t?: "ok" | "err") => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState<Product | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);
  const [deleting, setDeleting] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try { const r = await fetch("/api/cms/products?all=1"); setProducts(await r.json()); } catch { showToast("Erro ao carregar produtos", "err"); }
    finally { setLoading(false); }
  }, [showToast]);

  useEffect(() => { load(); }, [load]);

  const openEdit = (p: Product) => {
    setEditItem(p);
    setModal(true);
  };

  const getFormFromProduct = (p: Product): ProductForm => ({ ...p, specsStr: p.specs.join("\n"), brandsStr: p.brands.join("\n") });

  const handleSave = async (data: ProductForm) => {
    setSaving(true);
    const { specsStr, brandsStr, ...rest } = data;
    const payload = { ...rest, specs: specsStr.split("\n").map(x => x.trim()).filter(Boolean), brands: brandsStr.split("\n").map(x => x.trim()).filter(Boolean) };
    try {
      if (editItem) {
        await fetch(`/api/cms/products/${editItem.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        showToast("Produto actualizado");
      } else {
        await fetch("/api/cms/products", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        showToast("Produto criado");
      }
      setModal(false); setEditItem(null); await load();
    } catch { showToast("Erro ao guardar", "err"); }
    finally { setSaving(false); }
  };

  const handleToggle = async (p: Product) => {
    await fetch(`/api/cms/products/${p.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !p.active }) });
    showToast(p.active ? "Produto desactivado" : "Produto activado");
    await load();
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await fetch(`/api/cms/products/${deleteTarget.id}`, { method: "DELETE" });
      showToast("Produto eliminado"); setDeleteTarget(null); await load();
    } catch { showToast("Erro ao eliminar", "err"); }
    finally { setDeleting(false); }
  };

  const activeCount = products.filter(p => p.active).length;

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 22 }}>
        <StatCard label="Total de produtos" value={products.length} color="#095b66" bg="#e8f7f9"/>
        <StatCard label="Produtos activos" value={activeCount} color="#166534" bg="#dcfce7"/>
        <StatCard label="Produtos inactivos" value={products.length - activeCount} color="#991b1b" bg="#fce8e8"/>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <button onClick={() => { setEditItem(null); setModal(true); }} style={primaryBtn}>
          <svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
          Novo Produto
        </button>
      </div>

      {loading ? <Spinner/> : products.length === 0 ? (
        <EmptyState label="Nenhum produto criado" hint="Crie o primeiro produto" onAdd={() => setModal(true)}/>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {products.map((p, i) => (
            <div key={p.id} style={{ ...rowCard, opacity: p.active ? 1 : 0.65, borderColor: p.active ? "#dde8ea" : "#f0d8d8", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: p.color, borderRadius: "4px 0 0 4px" }}/>
              <div style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e" }}>{p.name}</span>
                  <StatusBadge active={p.active}/>
                  <span style={{ fontSize: 10, color: "#9bbbbe" }}>/{p.slug}</span>
                  <span style={{ fontSize: 10, color: "#9bbbbe" }}>#{i + 1}</span>
                </div>
                <p style={{ fontSize: 12, color: "#6a9598", lineHeight: 1.4, margin: 0, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 2 }}>
                  {p.brands.map(b => <span key={b} style={{ fontSize: 10, fontWeight: 700, color: "#095b66", background: "#e8f7f9", borderRadius: 4, padding: "1px 7px" }}>{b}</span>)}
                </div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button onClick={() => handleToggle(p)} style={{ ...iconBtn, background: p.active ? "#f0fdf4" : "#fef2f2", borderColor: "#dde8ea" }}>
                  {p.active ? <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#22c55e" strokeWidth="1.8"/><path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  : <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#ef4444" strokeWidth="1.8"/><path d="M6 6l4 4M10 6l-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                </button>
                <button onClick={() => openEdit(p)} style={iconBtn}>
                  <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M11 2l3 3-8 8H3v-3l8-8z" stroke="#095b66" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                </button>
                <button onClick={() => setDeleteTarget(p)} style={{ ...iconBtn, background: "#fff5f5", borderColor: "#fce8e8" }}>
                  <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M3 4h10M6 4V2h4v2M5 4v9h6V4" stroke="#c0392b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <ProductModal
          initial={editItem ? getFormFromProduct(editItem) : EMPTY_PRODUCT}
          onSave={handleSave} onClose={() => { setModal(false); setEditItem(null); }} loading={saving}
        />
      )}
      {deleteTarget && (
        <ConfirmDeleteModal title={deleteTarget.name} hint={`/${deleteTarget.slug}`} onConfirm={handleDelete} onClose={() => setDeleteTarget(null)} loading={deleting}/>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   OVERVIEW SECTION
═══════════════════════════════════════════════ */
function OverviewSection({ onNavigate }: { onNavigate: (s: Section) => void }) {
  const sections: { key: Section; label: string; desc: string; icon: React.ReactNode; color: string; bg: string }[] = [
    {
      key: "hero", label: "Hero Slides", desc: "Gere os slides rotativos da secção Hero da homepage",
      icon: <svg viewBox="0 0 20 20" fill="none" width="20"><rect x="2" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
      color: "#095b66", bg: "#e8f7f9",
    },
    {
      key: "products", label: "Produtos", desc: "Adiciona, edita e organiza os produtos e serviços",
      icon: <svg viewBox="0 0 20 20" fill="none" width="20"><path d="M3 6l7-3 7 3v8l-7 3-7-3V6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M10 3v14M3 6l7 4 7-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
      color: "#0a6e5c", bg: "#e0f5ef",
    },
  ];

  return (
    <div>
      <p style={{ fontSize: 13, color: "#6a9598", marginBottom: 24, lineHeight: 1.6 }}>
        Bem-vindo ao painel de gestão de conteúdo. Selecciona uma secção abaixo para gerir o conteúdo do site.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
        {sections.map(s => (
          <button key={s.key} onClick={() => onNavigate(s.key)} style={{ background: "#fff", border: "1.5px solid #e8f0f0", borderRadius: 16, padding: "24px", textAlign: "left", cursor: "pointer", fontFamily: "'Montserrat',sans-serif", transition: "all .2s", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: s.bg, color: s.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {s.icon}
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#0a1c1e", marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: "#9bbbbe", lineHeight: 1.5 }}>{s.desc}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: s.color }}>
              Gerir conteúdo
              <svg viewBox="0 0 14 14" fill="none" width="11"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SHARED SMALL COMPONENTS
═══════════════════════════════════════════════ */
function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} style={{ width: 48, height: 26, borderRadius: 99, border: "none", cursor: "pointer", background: on ? "#095b66" : "#dde8ea", position: "relative", transition: "background .2s", flexShrink: 0 }}>
      <div style={{ position: "absolute", top: 3, left: on ? 24 : 3, width: 20, height: 20, borderRadius: "50%", background: "#fff", transition: "left .2s", boxShadow: "0 1px 4px rgba(0,0,0,.18)" }}/>
    </button>
  );
}

function StatusBadge({ active }: { active: boolean }) {
  return (
    <span style={{ padding: "2px 8px", borderRadius: 99, fontSize: 9, fontWeight: 800, letterSpacing: ".07em", textTransform: "uppercase", background: active ? "#dcfce7" : "#fce8e8", color: active ? "#166534" : "#991b1b" }}>
      {active ? "Activo" : "Inactivo"}
    </span>
  );
}

function EmptyState({ label, hint, onAdd }: { label: string; hint: string; onAdd: () => void }) {
  return (
    <div style={{ padding: "52px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      <div style={{ width: 56, height: 56, borderRadius: 14, background: "#f0f9fa", border: "2px dashed #c8e8eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg viewBox="0 0 28 28" fill="none" width="24"><rect x="4" y="7" width="20" height="14" rx="3" stroke="#095b66" strokeWidth="1.6"/><path d="M14 10v8M10 14h8" stroke="#095b66" strokeWidth="1.6" strokeLinecap="round"/></svg>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e", marginBottom: 4 }}>{label}</p>
        <p style={{ fontSize: 12, color: "#9bbbbe" }}>{hint}</p>
      </div>
      <button onClick={onAdd} style={primaryBtn}>
        <svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
        Criar agora
      </button>
    </div>
  );
}

function ConfirmDeleteModal({ title, hint, onConfirm, onClose, loading }: {
  title: string; hint: string; onConfirm: () => void; onClose: () => void; loading: boolean;
}) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.72)", backdropFilter: "blur(4px)" }}/>
      <div style={{ position: "relative", zIndex: 1, background: "#fff", borderRadius: 16, padding: "30px", maxWidth: 400, width: "100%", boxShadow: "0 24px 64px rgba(6,20,22,.28)" }}>
        <div style={{ width: 44, height: 44, borderRadius: 11, background: "#fce8e8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
          <svg viewBox="0 0 20 20" fill="none" width="18"><path d="M10 7v4M10 15h.01M9 3l-7 13h16L9 3z" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 style={{ fontSize: 17, fontWeight: 900, color: "#0a1c1e", marginBottom: 8 }}>Eliminar?</h3>
        <p style={{ fontSize: 13, color: "#4a7275", marginBottom: 10 }}>Esta acção é permanente e não pode ser desfeita.</p>
        <div style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 8, padding: "10px 12px", marginBottom: 22 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{title}</div>
          <div style={{ fontSize: 11, color: "#9bbbbe", marginTop: 2 }}>{hint}</div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={onClose} style={{ ...cancelBtn, flex: 1 }}>Cancelar</button>
          <button onClick={onConfirm} disabled={loading} style={{ flex: 1, padding: "10px", borderRadius: 8, border: "none", background: loading ? "#e8a0a0" : "#c0392b", fontSize: 12, fontWeight: 700, color: "#fff", cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Montserrat',sans-serif" }}>
            {loading ? "A eliminar…" : "Eliminar"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SHARED STYLE OBJECTS
═══════════════════════════════════════════════ */
const inpStyle: React.CSSProperties = {
  width: "100%", background: "#f8fbfc", border: "1.5px solid #dde8ea",
  borderRadius: 8, color: "#1a2c2e", padding: "10px 12px",
  fontFamily: "'Montserrat',sans-serif", fontSize: 13, outline: "none",
};
const lbl: React.CSSProperties = {
  fontSize: 10, fontWeight: 700, color: "#095b66",
  letterSpacing: ".12em", textTransform: "uppercase",
};
const iconBtn: React.CSSProperties = {
  width: 34, height: 34, borderRadius: 8, border: "1.5px solid #dde8ea",
  background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
};
const primaryBtn: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 7, padding: "9px 18px",
  background: "#095b66", border: "none", borderRadius: 8,
  fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer",
  fontFamily: "'Montserrat',sans-serif", letterSpacing: ".04em",
};
const cancelBtn: React.CSSProperties = {
  padding: "10px 18px", borderRadius: 8, border: "1.5px solid #dde8ea",
  background: "#fff", fontSize: 12, fontWeight: 700, color: "#4a7275",
  cursor: "pointer", fontFamily: "'Montserrat',sans-serif",
};
const rowCard: React.CSSProperties = {
  background: "#fff", border: "1.5px solid #dde8ea", borderRadius: 12,
  padding: "16px 16px 16px 0", display: "flex", alignItems: "center", gap: 0,
  transition: "all .2s",
};

/* ═══════════════════════════════════════════════
   NAV ITEMS CONFIG
═══════════════════════════════════════════════ */
const NAV_ITEMS: { key: Section; label: string; icon: React.ReactNode }[] = [
  {
    key: "overview",
    label: "Dashboard",
    icon: <svg viewBox="0 0 16 16" fill="none" width="14"><rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>,
  },
  {
    key: "hero",
    label: "Hero Slides",
    icon: <svg viewBox="0 0 16 16" fill="none" width="14"><rect x="2" y="4" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M6 8h4M8 6v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  {
    key: "products",
    label: "Produtos",
    icon: <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M2 5l6-3 6 3v6l-6 3-6-3V5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 2v10M2 5l6 3 6-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  },
];

const SECTION_TITLES: Record<Section, string> = {
  overview: "Dashboard",
  hero: "Hero Slides",
  products: "Produtos",
};

/* ═══════════════════════════════════════════════
   MAIN DASHBOARD
═══════════════════════════════════════════════ */
export default function AdminDashboard() {
  const [section, setSection] = useState<Section>("overview");
  const [toast, setToast] = useState<{ msg: string; type: "ok" | "err" } | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const showToast = useCallback((msg: string, type: "ok" | "err" = "ok") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3200);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Montserrat', sans-serif; background: #f0f5f5; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes toastIn { from { opacity:0; transform:translateY(14px) scale(.97); } to { opacity:1; transform:none; } }
        @keyframes fadeSlide { from { opacity:0; transform:translateX(10px); } to { opacity:1; transform:none; } }
        button:hover { filter: brightness(0.97); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #c8dada; border-radius: 4px; }
      `}</style>

      <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Montserrat',sans-serif", background: "#f0f5f5" }}>

        {/* ── SIDEBAR ── */}
        <aside style={{
          width: sidebarCollapsed ? 64 : 220,
          background: "#0a1c1e",
          display: "flex", flexDirection: "column",
          flexShrink: 0,
          transition: "width .25s cubic-bezier(.4,0,.2,1)",
          overflow: "hidden",
          position: "sticky", top: 0, height: "100vh",
          zIndex: 100,
        }}>
          {/* logo area */}
          <div style={{ padding: "22px 16px 18px", borderBottom: "1px solid rgba(255,255,255,.07)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            {!sidebarCollapsed && (
              <div style={{ display: "flex", alignItems: "center", gap: 10, overflow: "hidden" }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M8 2l1.5 4.5H14L10.5 9l1.5 4.5L8 11 4 13.5 5.5 9 2 6.5h4.5L8 2z" fill="#fff"/></svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#fff", whiteSpace: "nowrap", letterSpacing: ".02em" }}>MultiEnergia</span>
              </div>
            )}
            <button onClick={() => setSidebarCollapsed(c => !c)} style={{ width: 28, height: 28, borderRadius: 6, border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.05)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg viewBox="0 0 14 14" fill="none" width="12" style={{ transform: sidebarCollapsed ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
                <path d="M9 2L5 7l4 5" stroke="rgba(255,255,255,.6)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* nav */}
          <nav style={{ flex: 1, padding: "12px 10px", display: "flex", flexDirection: "column", gap: 2 }}>
            {NAV_ITEMS.map(item => {
              const active = section === item.key;
              return (
                <button key={item.key} onClick={() => setSection(item.key)} title={sidebarCollapsed ? item.label : undefined} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: sidebarCollapsed ? "10px" : "10px 12px",
                  borderRadius: 8, border: "none",
                  background: active ? "#095b66" : "transparent",
                  color: active ? "#fff" : "rgba(255,255,255,.5)",
                  cursor: "pointer", fontFamily: "'Montserrat',sans-serif",
                  fontSize: 12, fontWeight: active ? 700 : 500,
                  transition: "all .15s", textAlign: "left",
                  justifyContent: sidebarCollapsed ? "center" : "flex-start",
                  whiteSpace: "nowrap", overflow: "hidden",
                }}>
                  <span style={{ flexShrink: 0 }}>{item.icon}</span>
                  {!sidebarCollapsed && item.label}
                  {active && !sidebarCollapsed && (
                    <div style={{ marginLeft: "auto", width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,.7)" }}/>
                  )}
                </button>
              );
            })}
          </nav>

          {/* footer */}
          {!sidebarCollapsed && (
            <div style={{ padding: "14px 14px 20px", borderTop: "1px solid rgba(255,255,255,.07)" }}>
              <a href="/" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.35)", textDecoration: "none" }}>
                <svg viewBox="0 0 14 14" fill="none" width="12"><path d="M11 8v4H2V3h4M9 2h3v3M7 7l5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Ver site
              </a>
            </div>
          )}
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
          {/* top bar */}
          <div style={{ background: "#fff", borderBottom: "1.5px solid #e4ecec", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60, flexShrink: 0 }}>
            {/* breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {section !== "overview" && (
                <>
                  <button onClick={() => setSection("overview")} style={{ fontSize: 12, fontWeight: 600, color: "#9bbbbe", background: "none", border: "none", cursor: "pointer", fontFamily: "'Montserrat',sans-serif", padding: 0 }}>
                    Dashboard
                  </button>
                  <svg viewBox="0 0 10 10" fill="none" width="8"><path d="M3 2l4 3-4 3" stroke="#c8d8da" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </>
              )}
              <span style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{SECTION_TITLES[section]}</span>
            </div>
            {/* right */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }}/>
              <span style={{ fontSize: 11, color: "#9bbbbe", fontWeight: 600 }}>Online</span>
            </div>
          </div>

          {/* section content */}
          <div style={{ flex: 1, padding: "28px 32px", overflowY: "auto", animation: "fadeSlide .25s ease both }} key={section "}}>
            {/* section header */}
            <div style={{ marginBottom: 24 }}>
              <h1 style={{ fontSize: 22, fontWeight: 900, color: "#0a1c1e", marginBottom: 4 }}>{SECTION_TITLES[section]}</h1>
              {section === "overview" && <p style={{ fontSize: 13, color: "#9bbbbe" }}>Painel de gestão de conteúdo do site MultiEnergia</p>}
              {section === "hero" && <p style={{ fontSize: 13, color: "#9bbbbe" }}>Slides rotativos da secção Hero da homepage · Intervalo de 6s</p>}
              {section === "products" && <p style={{ fontSize: 13, color: "#9bbbbe" }}>Produtos e serviços apresentados na secção de soluções</p>}
            </div>

            {section === "overview" && <OverviewSection onNavigate={setSection}/>}
            {section === "hero"     && <HeroSection showToast={showToast}/>}
            {section === "products" && <ProductsSection showToast={showToast}/>}
          </div>
        </main>
      </div>

      {toast && <Toast msg={toast.msg} type={toast.type}/>}
    </>
  );
}