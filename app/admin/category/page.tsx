// // app/admin/products/page.tsx
// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import { Product } from "@/app/components/ProductsSection";
// import { Category } from "@/generated/prisma/client";

// type FormData = Omit<Category, "id"> & { specsStr: string; brandsStr: string };

// const EMPTY: FormData = {
//    title: "", 
//   iconIndex: 0, 
//   active: true,
//   brands: [],
//   specsStr: "", brandsStr: "",
// };

// const ICON_OPTIONS = [
//   "0 — Solar",
//   "1 — Bateria / EcoFlow",
//   "2 — Quadro Elétrico",
//   "3 — UPS",
//   "4 — Transformador",
//   "5 — Veículo Elétrico",
// ];

// export default function AdminCategories() {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading]     = useState(true);
//   const [saving, setSaving]       = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [editItem, setEditItem]   = useState<Category | null>(null);
//   const [form, setForm]           = useState<FormData>(EMPTY);
//   const [deleteTarget, setDeleteTarget] = useState<Category | null>(null);
//   const [toast, setToast]         = useState<{ msg: string; type: "ok"|"err" } | null>(null);

//   const showToast = (msg: string, type: "ok"|"err" = "ok") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3000);
//   };

//   const load = useCallback(async () => {
//     setLoading(true);
//     const res = await fetch("/api/cms/categories?all=1");
//     setCategories(await res.json());
//     setLoading(false);
//   }, []);

//   useEffect(() => { load(); }, [load]);

//   const openNew  = () => { setEditItem(null); setForm(EMPTY); setModalOpen(true); };
//   const openEdit = (p: Category) => {
//     setEditItem(p);
//     setForm({ ...p, specsStr: p.brands.join("\n"), brandsStr: p.brands.join("\n") });
//     setModalOpen(true);
//   };

//   const save = async () => {
//     setSaving(true);
//     const payload = {
//       ...form,
//       specs:  form.specsStr.split("\n").map(x => x.trim()).filter(Boolean),
//       brands: form.brandsStr.split("\n").map(x => x.trim()).filter(Boolean),
//     };
//     // remove helper fields
//     const { specsStr, brandsStr, ...data } = payload;

//     try {
//       if (editItem) {
//         await fetch(`/api/cms/products/${editItem.id}`, {
//           method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
//         });
//         showToast("Produto actualizado");
//       } else {
//         await fetch("/api/cms/products", {
//           method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
//         });
//         showToast("Produto criado");
//       }
//       setModalOpen(false);
//       await load();
//     } catch {
//       showToast("Erro ao guardar", "err");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const toggleActive = async (p: Product) => {
//     await fetch(`/api/cms/products/${p.id}`, {
//       method: "PUT", headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ active: !p.active }),
//     });
//     showToast(p.active ? "Produto desactivado" : "Produto activado");
//     await load();
//   };

//   const confirmDelete = async () => {
//     if (!deleteTarget) return;
//     await fetch(`/api/cms/products/${deleteTarget.id}`, { method: "DELETE" });
//     showToast("Produto eliminado");
//     setDeleteTarget(null);
//     await load();
//   };

//   const set = (k: keyof FormData, v: string | boolean | number) =>
//     setForm(prev => ({ ...prev, [k]: v }));

//   // ── Styles ──
//   const inp: React.CSSProperties = {
//     width: "100%", background: "#f8fbfc", border: "1.5px solid #dde8ea",
//     borderRadius: 8, color: "#1a2c2e", padding: "10px 12px",
//     fontFamily: "'Montserrat',sans-serif", fontSize: 13, outline: "none",
//   };
//   const label: React.CSSProperties = {
//     fontSize: 10, fontWeight: 700, color: "#095b66",
//     letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 4, display: "block",
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         body { font-family: 'Montserrat', sans-serif; background: #f4f8f8; }
//         @keyframes toastIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }
//         @keyframes spin { to { transform:rotate(360deg); } }
//       `}</style>

//       <div style={{ minHeight: "100vh", background: "#f4f8f8", fontFamily: "'Montserrat',sans-serif" }}>

//         {/* Header */}
//         <div style={{ background: "#fff", borderBottom: "1.5px solid #e8f0f0", padding: "0 32px", paddingTop: 200 }}>
//           <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//               <a href="/admin" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#4a7275", fontSize: 12, fontWeight: 700 }}>
//                 <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
//                 Dashboard
//               </a>
//               <div style={{ width: 1, height: 20, background: "#dde8ea" }}/>
//               <div style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e" }}>Produtos</div>
//             </div>
//             <button onClick={openNew} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 18px", background: "#095b66", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer", fontFamily: "inherit" }}>
//               <svg viewBox="0 0 14 14" fill="none" width="12"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
//               Novo Produto
//             </button>
//           </div>
//         </div>

//         <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px" }}>

//           {/* Stats */}
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 28 }}>
//             {[
//               { label: "Total", value: categories.length, color: "#095b66", bg: "#e8f7f9" },
//               { label: "Activos", value: categories.filter(p => p.active).length, color: "#166534", bg: "#dcfce7" },
//               { label: "Inactivos", value: categories.filter(p => !p.active).length, color: "#991b1b", bg: "#fce8e8" },
//             ].map(s => (
//               <div key={s.label} style={{ background: "#fff", border: "1.5px solid #e8f0f0", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14 }}>
//                 <div style={{ width: 38, height: 38, borderRadius: 10, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                   <span style={{ fontSize: 18, fontWeight: 900, color: s.color }}>{s.value}</span>
//                 </div>
//                 <span style={{ fontSize: 12, color: "#9bbbbe", fontWeight: 600 }}>{s.label}</span>
//               </div>
//             ))}
//           </div>

//           {/* Table */}
//           {loading ? (
//             <div style={{ padding: "60px 0", display: "flex", justifyContent: "center" }}>
//               <svg viewBox="0 0 32 32" fill="none" width="32" style={{ animation: "spin .8s linear infinite" }}>
//                 <circle cx="16" cy="16" r="12" stroke="#dde8ea" strokeWidth="3"/>
//                 <path d="M16 4a12 12 0 0112 12" stroke="#095b66" strokeWidth="3" strokeLinecap="round"/>
//               </svg>
//             </div>
//           ) : (
//             <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//               {categories.map((c, i) => (
//                 <div key={c.id} style={{
//                   background: c.active ? "#fff" : "#fafafa",
//                   border: `1.5px solid ${c.active ? "#dde8ea" : "#f0d8d8"}`,
//                   borderRadius: 14, padding: "18px 20px",
//                   display: "grid", gridTemplateColumns: "40px 1fr auto",
//                   alignItems: "center", gap: 16, opacity: c.active ? 1 : 0.7,
//                   position: "relative", overflow: "hidden",
//                 }}>
                 
//                   {/* order */}
//                   <div style={{ textAlign: "center", paddingLeft: 8 }}>
//                     <span style={{ fontSize: 11, fontWeight: 800, color: "#9bbbbe" }}>{i + 1}</span>
//                   </div>

//                   {/* info */}
//                   <div>
//                     <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
//                       <span style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e" }}>{c.title}</span>
//                       <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "2px 8px", borderRadius: 99, background: c.active ? "#dcfce7" : "#fce8e8", color: c.active ? "#166534" : "#991b1b" }}>
//                         {c.active ? "Activo" : "Inactivo"}
//                       </span>
//                     </div>
//                     <p style={{ fontSize: 12, color: "#6a9598", lineHeight: 1.5, marginBottom: 6, display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
//                       {c.title}
//                     </p>
//                     <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
//                       {c.brands.map(b => (
//                         <span key={b} style={{ fontSize: 10, fontWeight: 700, color: "#095b66", background: "#e8f7f9", borderRadius: 4, padding: "2px 8px" }}>{b}</span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* actions */}
//                   <div style={{ display: "flex", gap: 8 }}>
//                     <button onClick={() => toggleActive(c.title)} style={{ width: 34, height: 34, borderRadius: 8, border: "1.5px solid #dde8ea", background: c.active ? "#f0fdf4" : "#fef2f2", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                       {c.active
//                         ? <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#22c55e" strokeWidth="1.8"/><path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round"/></svg>
//                         : <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#ef4444" strokeWidth="1.8"/><path d="M6 6l4 4M10 6l-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
//                       }
//                     </button>
//                     <button onClick={() => openEdit(p)} style={{ width: 34, height: 34, borderRadius: 8, border: "1.5px solid #dde8ea", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                       <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M11 2l3 3-8 8H3v-3l8-8z" stroke="#095b66" strokeWidth="1.6" strokeLinejoin="round"/></svg>
//                     </button>
//                     <button onClick={() => setDeleteTarget(p)} style={{ width: 34, height: 34, borderRadius: 8, border: "1.5px solid #fce8e8", background: "#fff5f5", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                       <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M3 4h10M6 4V2h4v2M5 4v9h6V4" stroke="#c0392b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ── Modal criar/editar ── */}
//       {modalOpen && (
//         <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
//           <div onClick={() => setModalOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.7)", backdropFilter: "blur(4px)" }}/>
//           <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 760, maxHeight: "92vh", overflowY: "auto", background: "#fff", borderRadius: 20, boxShadow: "0 32px 96px rgba(6,20,22,.3)" }}>

//             {/* Modal header */}
//             <div style={{ padding: "24px 28px 18px", borderBottom: "1.5px solid #edf2f2", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <h2 style={{ fontSize: 18, fontWeight: 900, color: "#0a1c1e" }}>{editItem ? "Editar Produto" : "Novo Produto"}</h2>
//               <button onClick={() => setModalOpen(false)} style={{ width: 32, height: 32, borderRadius: 8, border: "1.5px solid #dde8ea", background: "#f8fbfc", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <svg viewBox="0 0 16 16" fill="none" width="12"><path d="M4 4l8 8M12 4l-8 8" stroke="#4a7275" strokeWidth="2" strokeLinecap="round"/></svg>
//               </button>
//             </div>

//             {/* Modal body */}
//             <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 16 }}>

//               {/* Nome + Slug */}
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
//                 <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
//                   <span style={label}>Nome</span>
//                   <input style={inp} value={form.title} onChange={e => set("title", e.target.value)} placeholder="Ex: Sistemas de Energia Solar"/>
//                 </label>
                
//               </div>


//               {/* Specs + Brands */}
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
//                 <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
//                   <span style={label}>Especificações (uma por linha)</span>
//                   <textarea style={{ ...inp, minHeight: 90, resize: "vertical" }} value={form.specsStr} onChange={e => set("specsStr", e.target.value)} placeholder={"+50 MW instalados\nResidencial · Industrial\nAutoconsumo"}/>
//                 </label>
//                 <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
//                   <span style={label}>Marcas (uma por linha)</span>
//                   <textarea style={{ ...inp, minHeight: 90, resize: "vertical" }} value={form.brandsStr} onChange={e => set("brandsStr", e.target.value)} placeholder={"Huawei FusionSolar\nSMA\nSiemens"}/>
//                 </label>
//               </div>

//               {/* Cores + Ícone + Ordem */}
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 80px", gap: 14 }}>
              
    
//                 <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
//                   <span style={label}>Ícone</span>
//                   <select style={{ ...inp, appearance: "none", cursor: "pointer" }} value={form.iconIndex} onChange={e => set("iconIndex", +e.target.value)}>
//                     {ICON_OPTIONS.map((o, i) => <option key={i} value={i}>{o}</option>)}
//                   </select>
//                 </label>
              
//               </div>

//               {/* Activo */}
//               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "14px 16px" }}>
//                 <div>
//                   <div style={{ fontSize: 13, fontWeight: 700, color: "#0a1c1e" }}>Produto activo</div>
//                   <div style={{ fontSize: 11, color: "#9bbbbe", marginTop: 2 }}>Quando inactivo não aparece no site</div>
//                 </div>
//                 <button onClick={() => set("active", !form.active)} style={{ width: 48, height: 26, borderRadius: 99, border: "none", cursor: "pointer", background: form.active ? "#095b66" : "#dde8ea", position: "relative", transition: "background .2s", flexShrink: 0 }}>
//                   <div style={{ position: "absolute", top: 3, left: form.active ? 24 : 3, width: 20, height: 20, borderRadius: "50%", background: "#fff", transition: "left .2s", boxShadow: "0 1px 4px rgba(0,0,0,.18)" }}/>
//                 </button>
//               </div>
//             </div>

//             {/* Modal footer */}
//             <div style={{ padding: "16px 28px 24px", borderTop: "1.5px solid #edf2f2", display: "flex", justifyContent: "flex-end", gap: 10 }}>
//               <button onClick={() => setModalOpen(false)} style={{ padding: "10px 20px", borderRadius: 8, border: "1.5px solid #dde8ea", background: "#fff", fontSize: 12, fontWeight: 700, color: "#4a7275", cursor: "pointer", fontFamily: "inherit" }}>
//                 Cancelar
//               </button>
//               <button onClick={save} disabled={saving || !form.name || !form.slug} style={{ padding: "10px 24px", borderRadius: 8, border: "none", background: form.name && form.slug && !saving ? "#095b66" : "#b0c8ca", fontSize: 12, fontWeight: 700, color: "#fff", cursor: form.name && form.slug && !saving ? "pointer" : "not-allowed", fontFamily: "inherit" }}>
//                 {saving ? "A guardar…" : "Guardar Produto"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ── Confirm delete ── */}
//       {deleteTarget && (
//         <div style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
//           <div onClick={() => setDeleteTarget(null)} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.7)", backdropFilter: "blur(4px)" }}/>
//           <div style={{ position: "relative", zIndex: 1, background: "#fff", borderRadius: 16, padding: "32px", maxWidth: 400, width: "100%" }}>
//             <h3 style={{ fontSize: 18, fontWeight: 900, color: "#0a1c1e", marginBottom: 8 }}>Eliminar produto?</h3>
//             <p style={{ fontSize: 13, color: "#4a7275", marginBottom: 8 }}>Esta acção é permanente:</p>
//             <div style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 8, padding: "10px 14px", marginBottom: 24 }}>
//               <div style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{deleteTarget.name}</div>
//             </div>
//             <div style={{ display: "flex", gap: 10 }}>
//               <button onClick={() => setDeleteTarget(null)} style={{ flex: 1, padding: "11px", borderRadius: 8, border: "1.5px solid #dde8ea", background: "#fff", fontSize: 12, fontWeight: 700, color: "#4a7275", cursor: "pointer", fontFamily: "inherit" }}>Cancelar</button>
//               <button onClick={confirmDelete} style={{ flex: 1, padding: "11px", borderRadius: 8, border: "none", background: "#c0392b", fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer", fontFamily: "inherit" }}>Eliminar</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ── Toast ── */}
//       {toast && (
//         <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 999, animation: "toastIn .3s ease both" }}>
//           <div style={{ background: toast.type === "ok" ? "#095b66" : "#c0392b", color: "#fff", borderRadius: 10, padding: "12px 18px", fontSize: 13, fontWeight: 700, boxShadow: "0 8px 32px rgba(0,0,0,.2)" }}>
//             {toast.msg}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }




// app/admin/products/page.tsx
"use client";
import { Category } from "@/generated/prisma/client";
import React, { useState, useEffect, useCallback, useRef } from "react";


/* ══════════════════════════════════════════════════════
   TYPES
══════════════════════════════════════════════════════ */
type FormData = {
  title:      string;
  description: string;
  brands:     string[];
  brandsStr:  string;   // campo auxiliar para textarea
  iconIndex:  number;
  image:      string | null;
  active:     boolean;
};

const EMPTY: FormData = {
  title:     "",
    description: "",
  brands:    [],
  brandsStr: "",
  iconIndex: 0,
  image:     null,
  active:    true,
};

const ICON_OPTIONS = [
  "0 — Solar",
  "1 — Bateria / EcoFlow",
  "2 — Quadro Elétrico",
  "3 — UPS",
  "4 — Transformador",
  "5 — Veículo Elétrico",
];

/* ══════════════════════════════════════════════════════
   IMAGE UPLOADER
══════════════════════════════════════════════════════ */
function ImageUploader({
  value,
  onChange,
  onBusyChange,
}: {
  value: string | null;
  onChange: (url: string | null) => void;
  onBusyChange?: (busy: boolean) => void;
}) {
  const fileRef             = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver,  setDragOver]  = useState(false);
  const [error,     setError]     = useState<string | null>(null);

  const doUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Apenas imagens são permitidas");
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      setError("Imagem demasiado grande (máx. 8 MB)");
      return;
    }
    setError(null);
    setUploading(true);
    onBusyChange?.(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res  = await fetch("/api/cms/upload?prefix=category", { method: "POST", body: fd });
      const data = await res.json();
      if (data.url) {
        onChange(data.url);
      } else {
        setError(data.error ?? "Erro no upload");
      }
    } catch {
      setError("Erro ao fazer upload");
    } finally {
      setUploading(false);
      onBusyChange?.(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const inp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) doUpload(f);
  };

  const drop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) doUpload(f);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>

      {/* zona de drop / preview */}
      <div
        style={{
          position: "relative", borderRadius: 10, overflow: "hidden",
          border: dragOver ? "2px dashed #095b66" : "1.5px solid #dde8ea",
          background: dragOver ? "#e8f7f9" : (value ? "#000" : "#f8fbfc"),
          height: 148, cursor: "pointer", transition: "all .2s",
        }}
        onDragOver={e  => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={drop}
        onClick={() => !uploading && fileRef.current?.click()}
      >
        {value ? (
          <>
            <img
              src={value} alt="Capa da categoria"
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: uploading ? .35 : 1, transition: "opacity .2s" }}
            />
            {/* overlay de troca */}
            <div
              style={{ position: "absolute", inset: 0, background: "rgba(9,27,30,0)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "all .2s" }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.opacity = "1"; d.style.background = "rgba(9,27,30,.55)"; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.opacity = "0"; d.style.background = "rgba(9,27,30,0)"; }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <svg viewBox="0 0 20 20" fill="none" width="20">
                  <path d="M10 13V5M7 8l3-3 3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 15h12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                <span style={{ fontSize: 10, color: "#fff", fontWeight: 700 }}>Trocar imagem</span>
              </div>
            </div>
            {/* botão remover */}
            <button
              onClick={e => { e.stopPropagation(); onChange(null); }}
              style={{ position: "absolute", top: 7, right: 7, width: 22, height: 22, borderRadius: "50%", background: "rgba(0,0,0,.65)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}
            >
              <svg viewBox="0 0 10 10" fill="none" width="9"><path d="M2 2l6 6M8 2l-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </>
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
            {uploading ? (
              <svg viewBox="0 0 24 24" fill="none" width="26" style={{ animation: "spin .8s linear infinite" }}>
                <circle cx="12" cy="12" r="9" stroke="#dde8ea" strokeWidth="2.5"/>
                <path d="M12 3a9 9 0 019 9" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" width="28">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" stroke={dragOver ? "#095b66" : "#c8d8da"} strokeWidth="1.6"/>
                  <circle cx="9" cy="11" r="2" fill={dragOver ? "#095b66" : "#c8d8da"}/>
                  <path d="M3 16l4-4 3 3 4-5 7 7" stroke={dragOver ? "#095b66" : "#c8d8da"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 10, color: dragOver ? "#095b66" : "#b0c8ca", fontWeight: 700, textAlign: "center", lineHeight: 1.5 }}>
                  {dragOver ? "Largar aqui" : "Clique ou arraste a imagem de capa"}
                </span>
                <span style={{ fontSize: 9, color: "#c8d8da" }}>JPG · PNG · WEBP · máx. 8 MB · 16:9 recomendado</span>
              </>
            )}
          </div>
        )}
      </div>

      <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={inp}/>

      {/* botões */}
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          style={btnSmStyle(uploading)}
        >
          {uploading ? "A fazer upload…" : value ? "Trocar imagem" : "Escolher imagem"}
        </button>
        {value && (
          <button
            onClick={() => onChange(null)}
            style={{ ...btnSmStyle(false), color: "#e05a5a", borderColor: "#fce8e8", background: "#fff5f5" }}
          >
            ✕ Remover
          </button>
        )}
      </div>

      {/* path guardado */}
      {value && (
        <div style={{ fontSize: 10, color: "#6a9598", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 6, padding: "6px 9px", fontFamily: "monospace", wordBreak: "break-all", lineHeight: 1.5 }}>
          <span style={{ color: "#9bbbbe", fontSize: 9 }}>GUARDADO EM  </span>{value}
        </div>
      )}

      {error && <div style={{ fontSize: 11, color: "#c0392b", fontWeight: 600 }}>⚠ {error}</div>}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   STYLE HELPERS
══════════════════════════════════════════════════════ */
const inp: React.CSSProperties = {
  width: "100%", background: "#f8fbfc", border: "1.5px solid #dde8ea",
  borderRadius: 8, color: "#1a2c2e", padding: "10px 12px",
  fontFamily: "'Montserrat',sans-serif", fontSize: 13, outline: "none",
};
const labelStyle: React.CSSProperties = {
  fontSize: 10, fontWeight: 700, color: "#095b66",
  letterSpacing: ".12em", textTransform: "uppercase" as const,
  marginBottom: 4, display: "block",
};
const btnSmStyle = (disabled: boolean): React.CSSProperties => ({
  background: disabled ? "#e8f0f0" : "#f0f9fa",
  color: disabled ? "#9bbbbe" : "#095b66",
  border: "1.5px solid #c8e8eb",
  borderRadius: 7, padding: "8px 14px",
  fontFamily: "'Montserrat',sans-serif", fontSize: 10.5, fontWeight: 700,
  cursor: disabled ? "not-allowed" : "pointer",
  transition: "all .18s", whiteSpace: "nowrap" as const,
});
const primaryBtnStyle = (disabled: boolean): React.CSSProperties => ({
  padding: "10px 24px", borderRadius: 8, border: "none",
  background: disabled ? "#b0c8ca" : "#095b66",
  fontSize: 12, fontWeight: 700, color: "#fff",
  cursor: disabled ? "not-allowed" : "pointer",
  fontFamily: "'Montserrat',sans-serif",
});

/* ══════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════ */
export default function AdminCategories() {
  const [categories,    setCategories]    = useState<Category[]>([]);
  const [loading,       setLoading]       = useState(true);
  const [saving,        setSaving]        = useState(false);
  const [uploadBusy,    setUploadBusy]    = useState(false);
  const [modalOpen,     setModalOpen]     = useState(false);
  const [editItem,      setEditItem]      = useState<Category | null>(null);
  const [form,          setForm]          = useState<FormData>(EMPTY);
  const [deleteTarget,  setDeleteTarget]  = useState<Category | null>(null);
  const [toast,         setToast]         = useState<{ msg: string; type: "ok" | "err" } | null>(null);

  /* ── helpers ── */
  const showToast = (msg: string, type: "ok" | "err" = "ok") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };
  const setField = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setForm(prev => ({ ...prev, [k]: v }));

  /* ── load ── */
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/cms/categories?all=1");
      setCategories(await res.json());
    } catch {
      showToast("Erro ao carregar categorias", "err");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  /* ── open modal ── */
  const openNew = () => {
    setEditItem(null);
    setForm(EMPTY);
    setModalOpen(true);
  };
  const openEdit = (c: Category) => {
    setEditItem(c);
    setForm({
      title:     c.title,
      description: c.description,
      brands:    c.brands,
      brandsStr: c.brands.join("\n"),
      iconIndex: c.iconIndex,
      image:     c.image ?? null,
      active:    c.active,
    });
    setModalOpen(true);
  };

  /* ── save ── */
  const save = async () => {
    if (!form.title.trim() || uploadBusy) return;
    setSaving(true);

    const payload = {
      title:     form.title.trim(),
      brands:    form.brandsStr.split("\n").map(x => x.trim()).filter(Boolean),
      iconIndex: form.iconIndex,
      image:     form.image,
      active:    form.active,
      description: form.description.trim(),
    };

    try {
      if (editItem) {
        await fetch(`/api/cms/categories/${editItem.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        showToast("Categoria actualizada");
      } else {
        await fetch("/api/cms/categories", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        showToast("Categoria criada");
      }
      setModalOpen(false);
      await load();
    } catch {
      showToast("Erro ao guardar", "err");
    } finally {
      setSaving(false);
    }
  };

  /* ── toggle active ── */
  const toggleActive = async (c: Category) => {
    try {
      await fetch(`/api/cms/categories/${c.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !c.active }),
      });
      showToast(c.active ? "Categoria desactivada" : "Categoria activada");
      await load();
    } catch {
      showToast("Erro ao actualizar", "err");
    }
  };

  /* ── delete ── */
  const confirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await fetch(`/api/cms/categories/${deleteTarget.id}`, { method: "DELETE" });
      showToast("Categoria eliminada");
      setDeleteTarget(null);
      await load();
    } catch {
      showToast("Erro ao eliminar", "err");
    }
  };

  const canSave = form.title.trim().length > 0 && !saving && !uploadBusy;

  /* ══════════════════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════════════════ */
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Montserrat', sans-serif; background: #f4f8f8; }
        @keyframes toastIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }
        @keyframes spin { to { transform:rotate(360deg); } }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#f4f8f8", fontFamily: "'Montserrat',sans-serif" }}>

        {/* ── Header ── */}
        <div style={{ background: "#fff", borderBottom: "1.5px solid #e8f0f0", padding: "0 32px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <a href="/admin" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#4a7275", fontSize: 12, fontWeight: 700 }}>
                <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                Dashboard
              </a>
              <div style={{ width: 1, height: 20, background: "#dde8ea" }}/>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e" }}>Categorias</div>
            </div>
            <button onClick={openNew} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 18px", background: "#095b66", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer", fontFamily: "inherit" }}>
              <svg viewBox="0 0 14 14" fill="none" width="12"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
              Nova Categoria
            </button>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px" }}>

          {/* ── Stats ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 28 }}>
            {[
              { label: "Total",     value: categories.length,                          color: "#095b66", bg: "#e8f7f9" },
              { label: "Activas",   value: categories.filter(c => c.active).length,    color: "#166534", bg: "#dcfce7" },
              { label: "Inactivas", value: categories.filter(c => !c.active).length,   color: "#991b1b", bg: "#fce8e8" },
            ].map(s => (
              <div key={s.label} style={{ background: "#fff", border: "1.5px solid #e8f0f0", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 18, fontWeight: 900, color: s.color }}>{s.value}</span>
                </div>
                <span style={{ fontSize: 12, color: "#9bbbbe", fontWeight: 600 }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* ── Lista ── */}
          {loading ? (
            <div style={{ padding: "60px 0", display: "flex", justifyContent: "center" }}>
              <svg viewBox="0 0 32 32" fill="none" width="32" style={{ animation: "spin .8s linear infinite" }}>
                <circle cx="16" cy="16" r="12" stroke="#dde8ea" strokeWidth="3"/>
                <path d="M16 4a12 12 0 0112 12" stroke="#095b66" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          ) : categories.length === 0 ? (
            <div style={{ padding: "60px 0", textAlign: "center", color: "#9bbbbe", fontSize: 13, fontWeight: 600 }}>
              Nenhuma categoria criada ainda.
              <br/>
              <button onClick={openNew} style={{ marginTop: 16, padding: "9px 20px", background: "#095b66", border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>
                Criar agora
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {categories.map((c, i) => (
                <div key={c.id} style={{
                  background: "#fff",
                  border: `1.5px solid ${c.active ? "#dde8ea" : "#f0d8d8"}`,
                  borderRadius: 14, padding: "16px 20px",
                  display: "flex", alignItems: "center", gap: 16,
                  opacity: c.active ? 1 : 0.65,
                  position: "relative", overflow: "hidden",
                  transition: "all .2s",
                }}>
                  {/* barra lateral de cor */}
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: c.active ? "#095b66" : "#e8a0a0", borderRadius: "4px 0 0 4px" }}/>

                  {/* nº ordem */}
                  <div style={{ paddingLeft: 10, minWidth: 26, textAlign: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: "#9bbbbe" }}>#{i + 1}</span>
                  </div>

                  {/* thumbnail */}
                  <div style={{ width: 72, height: 48, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#f0f9fa", border: "1.5px solid #e8f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {c.image ? (
                      <img src={c.image} alt={c.title} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" width="18">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#c8d8da" strokeWidth="1.5"/>
                        <circle cx="9" cy="11" r="1.5" fill="#c8d8da"/>
                        <path d="M3 16l4-4 3 3 4-5 7 7" stroke="#c8d8da" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>

                  {/* info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e" }}>{c.title}</span>
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "2px 8px", borderRadius: 99, background: c.active ? "#dcfce7" : "#fce8e8", color: c.active ? "#166534" : "#991b1b" }}>
                        {c.active ? "Activa" : "Inactiva"}
                      </span>
                      {c.image && (
                        <span style={{ fontSize: 9, color: "#22c55e", fontWeight: 700, background: "#f0fdf4", borderRadius: 4, padding: "1px 5px" }}>
                          📷 com imagem
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                      {c.brands.map(b => (
                        <span key={b} style={{ fontSize: 10, fontWeight: 700, color: "#095b66", background: "#e8f7f9", borderRadius: 4, padding: "2px 8px" }}>{b}</span>
                      ))}
                      {c.brands.length === 0 && (
                        <span style={{ fontSize: 10, color: "#c8d8da", fontStyle: "italic" }}>Sem marcas</span>
                      )}
                    </div>
                  </div>

                  {/* actions */}
                  <div style={{ display: "flex", gap: 7, flexShrink: 0 }}>
                    <button onClick={() => toggleActive(c)} style={{ width: 34, height: 34, borderRadius: 8, border: "1.5px solid #dde8ea", background: c.active ? "#f0fdf4" : "#fef2f2", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {c.active
                        ? <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#22c55e" strokeWidth="1.8"/><path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round"/></svg>
                        : <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#ef4444" strokeWidth="1.8"/><path d="M6 6l4 4M10 6l-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      }
                    </button>
                    <button onClick={() => openEdit(c)} style={{ width: 34, height: 34, borderRadius: 8, border: "1.5px solid #dde8ea", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M11 2l3 3-8 8H3v-3l8-8z" stroke="#095b66" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                    </button>
                    <button onClick={() => setDeleteTarget(c)} style={{ width: 34, height: 34, borderRadius: 8, border: "1.5px solid #fce8e8", background: "#fff5f5", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M3 4h10M6 4V2h4v2M5 4v9h6V4" stroke="#c0392b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          MODAL CRIAR / EDITAR
      ══════════════════════════════════════════════════════ */}
      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={() => setModalOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.7)", backdropFilter: "blur(4px)" }}/>
          <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 680, maxHeight: "92vh", overflowY: "auto", background: "#fff", borderRadius: 20, boxShadow: "0 32px 96px rgba(6,20,22,.3)" }}>

            {/* cabeçalho */}
            <div style={{ padding: "22px 28px 16px", borderBottom: "1.5px solid #edf2f2", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#095b66", marginBottom: 2 }}>Categorias</p>
                <h2 style={{ fontSize: 16, fontWeight: 900, color: "#0a1c1e" }}>{editItem ? "Editar Categoria" : "Nova Categoria"}</h2>
              </div>
              <button onClick={() => setModalOpen(false)} style={{ width: 32, height: 32, borderRadius: 8, border: "1.5px solid #dde8ea", background: "#f8fbfc", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 16 16" fill="none" width="12"><path d="M4 4l8 8M12 4l-8 8" stroke="#4a7275" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>

            {/* corpo */}
            <div style={{ padding: "22px 28px", display: "flex", flexDirection: "column", gap: 18 }}>

              {/* Título */}
              <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={labelStyle}>Título da categoria <span style={{ color: "#e05a5a" }}>*</span></span>
                <input
                  style={inp}
                  value={form.title}
                  onChange={e => setField("title", e.target.value)}
                  placeholder="Ex: Energia Solar"
                />
              </label>
               <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={labelStyle}>Descrição da categoria <span style={{ color: "#e05a5a" }}>*</span></span>
                <input
                  style={inp}
                  value={form.description}
                  onChange={e => setField("description", e.target.value)}
                  placeholder="Ex: Energia Solar"
                />
              </label>

              {/* Imagem */}
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={labelStyle}>Imagem de capa</span>
                <ImageUploader
                  value={form.image}
                  onChange={url => setField("image", url)}
                  onBusyChange={setUploadBusy}
                />
              </div>

              {/* Marcas */}
              <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={labelStyle}>Marcas <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: 9, color: "#b0c8ca" }}>— uma por linha</span></span>
                <textarea
                  style={{ ...inp, minHeight: 90, resize: "vertical", fontFamily: "monospace", fontSize: 12 }}
                  value={form.brandsStr}
                  onChange={e => setField("brandsStr", e.target.value)}
                  placeholder={"Huawei FusionSolar\nSMA\nSiemens"}
                />
              </label>

              {/* Ícone */}
              <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={labelStyle}>Ícone</span>
                <select
                  style={{ ...inp, appearance: "none", cursor: "pointer" }}
                  value={form.iconIndex}
                  onChange={e => setField("iconIndex", +e.target.value)}
                >
                  {ICON_OPTIONS.map((o, i) => <option key={i} value={i}>{o}</option>)}
                </select>
              </label>

              {/* Activo */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "13px 16px" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0a1c1e" }}>Categoria activa</div>
                  <div style={{ fontSize: 11, color: "#9bbbbe", marginTop: 2 }}>Quando inactiva não aparece no site</div>
                </div>
                <button
                  onClick={() => setField("active", !form.active)}
                  style={{ width: 48, height: 26, borderRadius: 99, border: "none", cursor: "pointer", background: form.active ? "#095b66" : "#dde8ea", position: "relative", transition: "background .2s", flexShrink: 0 }}
                >
                  <div style={{ position: "absolute", top: 3, left: form.active ? 24 : 3, width: 20, height: 20, borderRadius: "50%", background: "#fff", transition: "left .2s", boxShadow: "0 1px 4px rgba(0,0,0,.18)" }}/>
                </button>
              </div>

              {/* aviso upload em curso */}
              {uploadBusy && (
                <div style={{ background: "#fff8e8", border: "1.5px solid #f0d88a", borderRadius: 8, padding: "10px 14px", fontSize: 12, color: "#7a5800", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                  <svg viewBox="0 0 24 24" fill="none" width="16" style={{ animation: "spin .8s linear infinite", flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="9" stroke="rgba(122,88,0,.3)" strokeWidth="2.5"/>
                    <path d="M12 3a9 9 0 019 9" stroke="#7a5800" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  Upload em curso — aguarde antes de guardar
                </div>
              )}
            </div>

            {/* rodapé */}
            <div style={{ padding: "14px 28px 22px", borderTop: "1.5px solid #edf2f2", display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <button
                onClick={() => setModalOpen(false)}
                style={{ padding: "10px 20px", borderRadius: 8, border: "1.5px solid #dde8ea", background: "#fff", fontSize: 12, fontWeight: 700, color: "#4a7275", cursor: "pointer", fontFamily: "inherit" }}
              >
                Cancelar
              </button>
              <button
                onClick={save}
                disabled={!canSave}
                style={primaryBtnStyle(!canSave)}
              >
                {saving       ? "A guardar…"       :
                 uploadBusy   ? "Aguardar upload…" :
                 editItem     ? "Guardar Alterações": "Criar Categoria"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          CONFIRMAR ELIMINAÇÃO
      ══════════════════════════════════════════════════════ */}
      {deleteTarget && (
        <div style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={() => setDeleteTarget(null)} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.7)", backdropFilter: "blur(4px)" }}/>
          <div style={{ position: "relative", zIndex: 1, background: "#fff", borderRadius: 16, padding: "28px", maxWidth: 380, width: "100%" }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: "#fce8e8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
              <svg viewBox="0 0 20 20" fill="none" width="17"><path d="M10 7v4M10 15h.01M9 3l-7 13h16L9 3z" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 900, color: "#0a1c1e", marginBottom: 6 }}>Eliminar categoria?</h3>
            <p style={{ fontSize: 12, color: "#4a7275", marginBottom: 10 }}>Esta acção é permanente e não pode ser desfeita.</p>
            <div style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 8, padding: "10px 14px", marginBottom: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{deleteTarget.title}</div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setDeleteTarget(null)} style={{ flex: 1, padding: "10px", borderRadius: 8, border: "1.5px solid #dde8ea", background: "#fff", fontSize: 12, fontWeight: 700, color: "#4a7275", cursor: "pointer", fontFamily: "inherit" }}>Cancelar</button>
              <button onClick={confirmDelete} style={{ flex: 1, padding: "10px", borderRadius: 8, border: "none", background: "#c0392b", fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer", fontFamily: "inherit" }}>Eliminar</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      {toast && (
        <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 999, animation: "toastIn .3s ease both" }}>
          <div style={{ background: toast.type === "ok" ? "#095b66" : "#c0392b", color: "#fff", borderRadius: 10, padding: "12px 18px", fontSize: 13, fontWeight: 700, boxShadow: "0 8px 32px rgba(0,0,0,.2)", display: "flex", alignItems: "center", gap: 10 }}>
            {toast.type === "ok"
              ? <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#fff" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
              : <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#fff" strokeWidth="1.5"/><path d="M6 6l4 4M10 6l-4 4" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/></svg>
            }
            {toast.msg}
          </div>
        </div>
      )}
    </>
  );
}