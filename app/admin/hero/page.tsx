// "use client";
// // app/admin/page.tsx
// // Multienergia CMS Dashboard — Dashboard principal

// import React, { useState, useEffect, useCallback } from "react";

// // ─── TYPES ────────────────────────────────────────────────────────────────────

// type HeroSlide = { id: number; order: number; tag: string; line1: string; line2: string; line3: string; sub: string; active: boolean };
// type Product = { id: number; slug: string; order: number; name: string; desc: string; color: string; lightColor: string; specs: string[]; brands: string[]; active: boolean };
// type Service = { id: number; order: number; title: string; short: string; iconIndex: number; active: boolean };
// type Client = { id: number; order: number; name: string; active: boolean };
// type Brand = { id: number; order: number; name: string; role: string; logoUrl?: string; active: boolean };
// type PresencePoint = { id: number; order: number; name: string; lon: number; lat: number; isMain: boolean; detail: string; active: boolean };
// type ContactOffice = { id: number; order: number; country: string; flag: string; address: string; phones: string[]; email: string; active: boolean };
// type SiteSetting = { id: number; key: string; value: string; label: string; group: string };

// // ─── API HELPERS ──────────────────────────────────────────────────────────────

// const api = {
//   get: (col: string) => fetch(`/api/cms/${col}`).then(r => r.json()),
//   post: (col: string, data: object) => fetch(`/api/cms/${col}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(r => r.json()),
//   put: (col: string, id: string | number, data: object) => fetch(`/api/cms/${col}/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(r => r.json()),
//   del: (col: string, id: string | number) => fetch(`/api/cms/${col}/${id}`, { method: "DELETE" }).then(r => r.json()),
// };

// // ─── STYLES ──────────────────────────────────────────────────────────────────

// const C = {
//   bg: "#0d1117",
//   surface: "#161b22",
//   border: "#21262d",
//   teal: "#095b66",
//   tealLight: "#0a7a89",
//   text: "#e6edf3",
//   muted: "#7d8590",
//   success: "#238636",
//   danger: "#da3633",
//   warn: "#bb8009",
// };

// const s: Record<string, React.CSSProperties> = {
//   layout: { display: "flex", minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif", background: C.bg, color: C.text },
//   sidebar: { width: 220, background: C.surface, borderRight: `1px solid ${C.border}`, padding: "24px 0", display: "flex", flexDirection: "column", flexShrink: 0, position: "sticky", top: 0, height: "100vh", overflow: "auto" },
//   logo: { padding: "0 20px 24px", borderBottom: `1px solid ${C.border}`, marginBottom: 8 },
//   main: { flex: 1, padding: "32px 40px", overflow: "auto" },
//   card: { background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "24px", marginBottom: 20 },
//   input: { background: "#0d1117", border: `1px solid ${C.border}`, borderRadius: 6, color: C.text, padding: "8px 12px", fontSize: 13, width: "100%", outline: "none", fontFamily: "inherit" },
//   textarea: { background: "#0d1117", border: `1px solid ${C.border}`, borderRadius: 6, color: C.text, padding: "8px 12px", fontSize: 13, width: "100%", outline: "none", fontFamily: "inherit", minHeight: 80, resize: "vertical" },
//   label: { fontSize: 11, fontWeight: 600, color: C.muted, letterSpacing: ".08em", textTransform: "uppercase" as const, marginBottom: 4, display: "block" },
//   btnPrimary: { background: C.teal, color: "#fff", border: "none", borderRadius: 6, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer", letterSpacing: ".04em" },
//   btnDanger: { background: "transparent", color: C.danger, border: `1px solid ${C.danger}`, borderRadius: 6, padding: "6px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer" },
//   btnGhost: { background: "transparent", color: C.muted, border: `1px solid ${C.border}`, borderRadius: 6, padding: "6px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer" },
//   row: { display: "flex", gap: 12, alignItems: "flex-start" },
//   badge: { display: "inline-flex", alignItems: "center", padding: "2px 8px", borderRadius: 99, fontSize: 11, fontWeight: 600 },
//   table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 13 },
//   th: { textAlign: "left" as const, padding: "10px 14px", fontSize: 11, fontWeight: 600, color: C.muted, letterSpacing: ".06em", textTransform: "uppercase" as const, borderBottom: `1px solid ${C.border}` },
//   td: { padding: "12px 14px", borderBottom: `1px solid ${C.border}`, verticalAlign: "middle" as const },
// };

// // ─── NAV SECTIONS ─────────────────────────────────────────────────────────────

// const sections = [
//   { id: "hero",     label: "Hero Slides",     icon: "▶" },
//   { id: "products", label: "Produtos",         icon: "⚡" },
//   { id: "services", label: "Serviços",         icon: "🔧" },
//   { id: "clients",  label: "Clientes",         icon: "🏢" },
//   { id: "brands",   label: "Marcas",           icon: "🏷" },
//   { id: "presence", label: "Presença Global",  icon: "🌍" },
//   { id: "contact",  label: "Escritórios",      icon: "📍" },
//   { id: "settings", label: "Configurações",    icon: "⚙️" },
// ];

// // ─── HERO SLIDES PANEL ───────────────────────────────────────────────────────

// function HeroPanel() {
//   const [slides, setSlides] = useState<HeroSlide[]>([]);
//   const [editing, setEditing] = useState<HeroSlide | null>(null);
//   const [form, setForm] = useState<Partial<HeroSlide>>({});
//   const [saving, setSaving] = useState(false);

//   useEffect(() => { api.get("hero-slides").then(setSlides); }, []);

//   const openEdit = (slide: HeroSlide) => { setEditing(slide); setForm(slide); };
//   const openNew = () => { setEditing({ id: -1 } as HeroSlide); setForm({ order: slides.length, active: true }); };
//   const close = () => { setEditing(null); setForm({}); };

//   const save = async () => {
//     setSaving(true);
//     if (editing!.id === -1) {
//       const created = await api.post("hero-slides", form);
//       setSlides(s => [...s, created].sort((a, b) => a.order - b.order));
//     } else {
//       const updated = await api.put("hero-slides", editing!.id, form);
//       setSlides(s => s.map(x => x.id === updated.id ? updated : x));
//     }
//     setSaving(false); close();
//   };

//   const del = async (id: number) => {
//     if (!confirm("Eliminar slide?")) return;
//     await api.del("hero-slides", id);
//     setSlides(s => s.filter(x => x.id !== id));
//   };

//   const toggle = async (slide: HeroSlide) => {
//     const updated = await api.put("hero-slides", slide.id, { active: !slide.active });
//     setSlides(s => s.map(x => x.id === updated.id ? updated : x));
//   };

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
//         <div>
//           <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Hero Slides</h2>
//           <p style={{ fontSize: 13, color: C.muted }}>Slides do topo da página inicial — avançam automaticamente a cada 6 segundos.</p>
//         </div>
//         <button style={s.btnPrimary} onClick={openNew}>+ Novo Slide</button>
//       </div>

//       {editing && (
//         <div style={{ ...s.card, borderColor: C.teal, marginBottom: 24 }}>
//           <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>{editing.id === -1 ? "Novo Slide" : "Editar Slide"}</h3>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 14 }}>
//             {["line1", "line2", "line3"].map(f => (
//               <label key={f} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                 <span style={s.label}>{f === "line1" ? "Linha 1" : f === "line2" ? "Linha 2" : "Linha 3"}</span>
//                 <input style={s.input} value={(form as Record<string, string>)[f] ?? ""} onChange={e => setForm(p => ({ ...p, [f]: e.target.value }))} />
//               </label>
//             ))}
//           </div>
//           <label style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 14 }}>
//             <span style={s.label}>Tag (pequeno texto acima)</span>
//             <input style={s.input} value={form.tag ?? ""} onChange={e => setForm(p => ({ ...p, tag: e.target.value }))} />
//           </label>
//           <label style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 14 }}>
//             <span style={s.label}>Subtítulo</span>
//             <textarea style={s.textarea} value={form.sub ?? ""} onChange={e => setForm(p => ({ ...p, sub: e.target.value }))} />
//           </label>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "center" }}>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Ordem</span>
//               <input style={{ ...s.input, width: 80 }} type="number" value={form.order ?? 0} onChange={e => setForm(p => ({ ...p, order: +e.target.value }))} />
//             </label>
//             <div style={{ display: "flex", gap: 8, paddingTop: 18 }}>
//               <button style={s.btnPrimary} onClick={save} disabled={saving}>{saving ? "A guardar..." : "Guardar"}</button>
//               <button style={s.btnGhost} onClick={close}>Cancelar</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <table style={s.table}>
//         <thead>
//           <tr>
//             {["#", "Tag", "Linha 1 · 2 · 3", "Estado", ""].map(h => <th key={h} style={s.th}>{h}</th>)}
//           </tr>
//         </thead>
//         <tbody>
//           {slides.map(slide => (
//             <tr key={slide.id}>
//               <td style={{ ...s.td, color: C.muted, width: 36 }}>{slide.order + 1}</td>
//               <td style={{ ...s.td, color: C.muted, fontSize: 12 }}>{slide.tag}</td>
//               <td style={s.td}>
//                 <span style={{ fontWeight: 700 }}>{slide.line1}</span>
//                 <span style={{ color: C.tealLight }}> {slide.line2}</span>
//                 <span style={{ color: C.muted }}> {slide.line3}</span>
//               </td>
//               <td style={s.td}>
//                 <button onClick={() => toggle(slide)} style={{ ...s.badge, background: slide.active ? "#0d3320" : "#2d1b1b", color: slide.active ? "#3fb950" : "#f85149", border: "none", cursor: "pointer" }}>
//                   {slide.active ? "● Ativo" : "○ Inativo"}
//                 </button>
//               </td>
//               <td style={{ ...s.td, textAlign: "right" }}>
//                 <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
//                   <button style={s.btnGhost} onClick={() => openEdit(slide)}>Editar</button>
//                   <button style={s.btnDanger} onClick={() => del(slide.id)}>Eliminar</button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// // ─── CLIENTS PANEL ───────────────────────────────────────────────────────────

// function ClientsPanel() {
//   const [clients, setClients] = useState<Client[]>([]);
//   const [newName, setNewName] = useState("");
//   const [editing, setEditing] = useState<{ id: number; name: string } | null>(null);

//   useEffect(() => { api.get("clients").then(setClients); }, []);

//   const add = async () => {
//     if (!newName.trim()) return;
//     const created = await api.post("clients", { name: newName.trim(), order: clients.length, active: true });
//     setClients(c => [...c, created]);
//     setNewName("");
//   };

//   const del = async (id: number) => {
//     if (!confirm("Eliminar cliente?")) return;
//     await api.del("clients", id);
//     setClients(c => c.filter(x => x.id !== id));
//   };

//   const saveEdit = async () => {
//     if (!editing) return;
//     const updated = await api.put("clients", editing.id, { name: editing.name });
//     setClients(c => c.map(x => x.id === updated.id ? updated : x));
//     setEditing(null);
//   };

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
//         <div>
//           <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Clientes</h2>
//           <p style={{ fontSize: 13, color: C.muted }}>Lista de clientes exibida na secção Quem Nos Escolhe — {clients.length} atualmente.</p>
//         </div>
//       </div>

//       <div style={{ ...s.card, marginBottom: 20 }}>
//         <div style={{ display: "flex", gap: 10 }}>
//           <input style={{ ...s.input, flex: 1 }} placeholder="Nome do cliente..." value={newName} onChange={e => setNewName(e.target.value)}
//             onKeyDown={e => e.key === "Enter" && add()} />
//           <button style={s.btnPrimary} onClick={add}>Adicionar</button>
//         </div>
//       </div>

//       <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
//         {clients.map(c => (
//           <div key={c.id} style={{ background: "#0d1b1e", border: `1px solid ${C.teal}40`, borderRadius: 99, padding: "6px 14px", display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600 }}>
//             {editing?.id === c.id ? (
//               <>
//                 <input style={{ ...s.input, width: 120, padding: "2px 8px", fontSize: 12 }} value={editing.name} onChange={e => setEditing(p => p ? { ...p, name: e.target.value } : null)} onKeyDown={e => e.key === "Enter" && saveEdit()} autoFocus />
//                 <button style={{ background: "none", border: "none", color: "#3fb950", cursor: "pointer", fontSize: 14, padding: 0 }} onClick={saveEdit}>✓</button>
//                 <button style={{ background: "none", border: "none", color: C.muted, cursor: "pointer", fontSize: 14, padding: 0 }} onClick={() => setEditing(null)}>✕</button>
//               </>
//             ) : (
//               <>
//                 <span>{c.name}</span>
//                 <button style={{ background: "none", border: "none", color: C.muted, cursor: "pointer", fontSize: 12, padding: 0 }} onClick={() => setEditing({ id: c.id, name: c.name })}>✎</button>
//                 <button style={{ background: "none", border: "none", color: C.danger, cursor: "pointer", fontSize: 12, padding: 0 }} onClick={() => del(c.id)}>✕</button>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─── BRANDS PANEL ────────────────────────────────────────────────────────────

// function BrandsPanel() {
//   const [brands, setBrands] = useState<Brand[]>([]);
//   const [editing, setEditing] = useState<Brand | null>(null);
//   const [form, setForm] = useState<Partial<Brand>>({});

//   useEffect(() => { api.get("brands").then(setBrands); }, []);

//   const openEdit = (b: Brand) => { setEditing(b); setForm(b); };
//   const openNew = () => { setEditing({ id: -1 } as Brand); setForm({ order: brands.length, active: true }); };
//   const close = () => { setEditing(null); setForm({}); };

//   const save = async () => {
//     if (editing!.id === -1) {
//       const created = await api.post("brands", form);
//       setBrands(b => [...b, created]);
//     } else {
//       const updated = await api.put("brands", editing!.id, form);
//       setBrands(b => b.map(x => x.id === updated.id ? updated : x));
//     }
//     close();
//   };

//   const del = async (id: number) => {
//     if (!confirm("Eliminar marca?")) return;
//     await api.del("brands", id);
//     setBrands(b => b.filter(x => x.id !== id));
//   };

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
//         <div>
//           <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Marcas Parceiras</h2>
//           <p style={{ fontSize: 13, color: C.muted }}>Parceiros e representações oficiais. {brands.length} marcas ativas.</p>
//         </div>
//         <button style={s.btnPrimary} onClick={openNew}>+ Nova Marca</button>
//       </div>

//       {editing && (
//         <div style={{ ...s.card, borderColor: C.teal, marginBottom: 20 }}>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 12, alignItems: "flex-end" }}>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Nome da Marca</span>
//               <input style={s.input} value={form.name ?? ""} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
//             </label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Papel / Tipo</span>
//               <input style={s.input} value={form.role ?? ""} onChange={e => setForm(p => ({ ...p, role: e.target.value }))} placeholder="Ex: Rep. Oficial AO" />
//             </label>
//             <div style={{ display: "flex", gap: 8 }}>
//               <button style={s.btnPrimary} onClick={save}>Guardar</button>
//               <button style={s.btnGhost} onClick={close}>Cancelar</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
//         {brands.map(b => (
//           <div key={b.id} style={{ ...s.card, padding: "16px 18px", marginBottom: 0 }}>
//             <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{b.name}</div>
//             <div style={{ fontSize: 11, color: C.tealLight, fontWeight: 600, letterSpacing: ".05em", marginBottom: 12 }}>{b.role}</div>
//             <div style={{ display: "flex", gap: 6 }}>
//               <button style={{ ...s.btnGhost, fontSize: 11, padding: "4px 10px" }} onClick={() => openEdit(b)}>Editar</button>
//               <button style={{ ...s.btnDanger, fontSize: 11, padding: "4px 10px" }} onClick={() => del(b.id)}>Eliminar</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─── SERVICES PANEL ──────────────────────────────────────────────────────────

// function ServicesPanel() {
//   const [services, setServices] = useState<Service[]>([]);
//   const [editing, setEditing] = useState<Service | null>(null);
//   const [form, setForm] = useState<Partial<Service>>({});

//   useEffect(() => { api.get("services").then(setServices); }, []);

//   const save = async () => {
//     if (editing!.id === -1) {
//       const created = await api.post("services", form);
//       setServices(s => [...s, created]);
//     } else {
//       const updated = await api.put("services", editing!.id, form);
//       setServices(s => s.map(x => x.id === updated.id ? updated : x));
//     }
//     setEditing(null); setForm({});
//   };

//   const del = async (id: number) => {
//     if (!confirm("Eliminar serviço?")) return;
//     await api.del("services", id);
//     setServices(s => s.filter(x => x.id !== id));
//   };

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
//         <div>
//           <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Serviços</h2>
//           <p style={{ fontSize: 13, color: C.muted }}>10 serviços apresentados em grelha de 5 colunas com ícones SVG.</p>
//         </div>
//         <button style={s.btnPrimary} onClick={() => { setEditing({ id: -1 } as Service); setForm({ order: services.length, iconIndex: 0, active: true }); }}>+ Novo Serviço</button>
//       </div>

//       {editing && (
//         <div style={{ ...s.card, borderColor: C.teal, marginBottom: 20 }}>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16 }}>
//             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//               <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                 <span style={s.label}>Título</span>
//                 <input style={s.input} value={form.title ?? ""} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} />
//               </label>
//               <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                 <span style={s.label}>Descrição curta</span>
//                 <textarea style={s.textarea} value={form.short ?? ""} onChange={e => setForm(p => ({ ...p, short: e.target.value }))} />
//               </label>
//               <div style={{ display: "flex", gap: 12 }}>
//                 <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                   <span style={s.label}>Índice do Ícone (0–9)</span>
//                   <input style={{ ...s.input, width: 80 }} type="number" min={0} max={9} value={form.iconIndex ?? 0} onChange={e => setForm(p => ({ ...p, iconIndex: +e.target.value }))} />
//                 </label>
//                 <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                   <span style={s.label}>Ordem</span>
//                   <input style={{ ...s.input, width: 80 }} type="number" value={form.order ?? 0} onChange={e => setForm(p => ({ ...p, order: +e.target.value }))} />
//                 </label>
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: 8, alignSelf: "flex-end" }}>
//               <button style={s.btnPrimary} onClick={save}>Guardar</button>
//               <button style={s.btnGhost} onClick={() => { setEditing(null); setForm({}); }}>Cancelar</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <table style={s.table}>
//         <thead><tr>{["#", "Título", "Descrição", "Ícone", ""].map(h => <th key={h} style={s.th}>{h}</th>)}</tr></thead>
//         <tbody>
//           {services.map(sv => (
//             <tr key={sv.id}>
//               <td style={{ ...s.td, color: C.muted, width: 36 }}>{sv.order + 1}</td>
//               <td style={{ ...s.td, fontWeight: 600 }}>{sv.title}</td>
//               <td style={{ ...s.td, color: C.muted, maxWidth: 300, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{sv.short}</td>
//               <td style={{ ...s.td, color: C.muted }}>{sv.iconIndex}</td>
//               <td style={{ ...s.td, textAlign: "right" }}>
//                 <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
//                   <button style={s.btnGhost} onClick={() => { setEditing(sv); setForm(sv); }}>Editar</button>
//                   <button style={s.btnDanger} onClick={() => del(sv.id)}>Eliminar</button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// // ─── SETTINGS PANEL ──────────────────────────────────────────────────────────

// function SettingsPanel() {
//   const [settings, setSettings] = useState<SiteSetting[]>([]);
//   const [editing, setEditing] = useState<Record<string, string>>({});
//   const [saved, setSaved] = useState<string | null>(null);

//   useEffect(() => { api.get("site-settings").then(setSettings); }, []);

//   const handleChange = (key: string, val: string) => setEditing(p => ({ ...p, [key]: val }));

//   const save = async (key: string) => {
//     const val = editing[key] ?? settings.find(s => s.key === key)?.value ?? "";
//     await api.put("site-settings", key, { value: val });
//     setSettings(s => s.map(x => x.key === key ? { ...x, value: val } : x));
//     setSaved(key); setTimeout(() => setSaved(null), 1500);
//   };

//   const groups = [...new Set(settings.map(s => s.group))];

//   return (
//     <div>
//       <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Configurações do Site</h2>
//       <p style={{ fontSize: 13, color: C.muted, marginBottom: 24 }}>Textos globais e dados de contacto usados em todo o site.</p>

//       {groups.map(group => (
//         <div key={group} style={{ ...s.card, marginBottom: 16 }}>
//           <h3 style={{ fontSize: 12, fontWeight: 700, color: C.tealLight, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 16 }}>{group}</h3>
//           <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//             {settings.filter(x => x.group === group).map(setting => (
//               <div key={setting.key} style={{ display: "grid", gridTemplateColumns: "180px 1fr auto", gap: 12, alignItems: "center" }}>
//                 <label style={{ ...s.label, marginBottom: 0 }}>{setting.label}</label>
//                 <input
//                   style={s.input}
//                   value={editing[setting.key] ?? setting.value}
//                   onChange={e => handleChange(setting.key, e.target.value)}
//                   onKeyDown={e => e.key === "Enter" && save(setting.key)}
//                 />
//                 <button
//                   style={{ ...s.btnPrimary, background: saved === setting.key ? C.success : C.teal, minWidth: 70 }}
//                   onClick={() => save(setting.key)}
//                 >
//                   {saved === setting.key ? "✓ Salvo" : "Guardar"}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// // ─── PRESENCE PANEL ──────────────────────────────────────────────────────────

// function PresencePanel() {
//   const [points, setPoints] = useState<PresencePoint[]>([]);
//   const [editing, setEditing] = useState<PresencePoint | null>(null);
//   const [form, setForm] = useState<Partial<PresencePoint>>({});

//   useEffect(() => { api.get("presence-points").then(setPoints); }, []);

//   const save = async () => {
//     if (editing!.id === -1) {
//       const created = await api.post("presence-points", form);
//       setPoints(p => [...p, created]);
//     } else {
//       const updated = await api.put("presence-points", editing!.id, form);
//       setPoints(p => p.map(x => x.id === updated.id ? updated : x));
//     }
//     setEditing(null); setForm({});
//   };

//   const del = async (id: number) => {
//     if (!confirm("Eliminar ponto?")) return;
//     await api.del("presence-points", id);
//     setPoints(p => p.filter(x => x.id !== id));
//   };

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
//         <div>
//           <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Presença Global</h2>
//           <p style={{ fontSize: 13, color: C.muted }}>Pontos no mapa SVG interativo. Coordenadas em longitude/latitude.</p>
//         </div>
//         <button style={s.btnPrimary} onClick={() => { setEditing({ id: -1 } as PresencePoint); setForm({ order: points.length, active: true, isMain: false }); }}>+ Novo País</button>
//       </div>

//       {editing && (
//         <div style={{ ...s.card, borderColor: C.teal, marginBottom: 20 }}>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 12 }}>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Nome</span>
//               <input style={s.input} value={form.name ?? ""} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
//             </label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Longitude</span>
//               <input style={s.input} type="number" step="0.01" value={form.lon ?? 0} onChange={e => setForm(p => ({ ...p, lon: +e.target.value }))} />
//             </label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Latitude</span>
//               <input style={s.input} type="number" step="0.01" value={form.lat ?? 0} onChange={e => setForm(p => ({ ...p, lat: +e.target.value }))} />
//             </label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Sede Principal?</span>
//               <select style={s.input} value={form.isMain ? "true" : "false"} onChange={e => setForm(p => ({ ...p, isMain: e.target.value === "true" }))}>
//                 <option value="false">Não</option>
//                 <option value="true">Sim</option>
//               </select>
//             </label>
//           </div>
//           <label style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 }}>
//             <span style={s.label}>Detalhe (mostra no tooltip)</span>
//             <textarea style={s.textarea} value={form.detail ?? ""} onChange={e => setForm(p => ({ ...p, detail: e.target.value }))} />
//           </label>
//           <div style={{ display: "flex", gap: 8 }}>
//             <button style={s.btnPrimary} onClick={save}>Guardar</button>
//             <button style={s.btnGhost} onClick={() => { setEditing(null); setForm({}); }}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <table style={s.table}>
//         <thead><tr>{["País", "Coordenadas", "Sede", "Detalhe", ""].map(h => <th key={h} style={s.th}>{h}</th>)}</tr></thead>
//         <tbody>
//           {points.map(p => (
//             <tr key={p.id}>
//               <td style={{ ...s.td, fontWeight: 600 }}>{p.name}</td>
//               <td style={{ ...s.td, color: C.muted, fontSize: 12 }}>{p.lon.toFixed(2)}, {p.lat.toFixed(2)}</td>
//               <td style={s.td}>{p.isMain && <span style={{ ...s.badge, background: "#0d2d3a", color: C.tealLight }}>★ Principal</span>}</td>
//               <td style={{ ...s.td, color: C.muted, maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 12 }}>{p.detail}</td>
//               <td style={{ ...s.td, textAlign: "right" }}>
//                 <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
//                   <button style={s.btnGhost} onClick={() => { setEditing(p); setForm(p); }}>Editar</button>
//                   <button style={s.btnDanger} onClick={() => del(p.id)}>Eliminar</button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// // ─── CONTACT OFFICES PANEL ───────────────────────────────────────────────────

// function ContactPanel() {
//   const [offices, setOffices] = useState<ContactOffice[]>([]);
//   const [editing, setEditing] = useState<ContactOffice | null>(null);
//   const [form, setForm] = useState<Partial<ContactOffice> & { phonesStr?: string }>({});

//   useEffect(() => { api.get("contact-offices").then(setOffices); }, []);

//   const open = (o: ContactOffice) => { setEditing(o); setForm({ ...o, phonesStr: o.phones.join("\n") }); };
//   const openNew = () => { setEditing({ id: -1 } as ContactOffice); setForm({ order: offices.length, phones: [], active: true, phonesStr: "" }); };

//   const save = async () => {
//     const data = { ...form, phones: (form.phonesStr ?? "").split("\n").map(x => x.trim()).filter(Boolean) };
//     delete (data as Record<string, unknown>).phonesStr;

//     if (editing!.id === -1) {
//       const created = await api.post("contact-offices", data);
//       setOffices(o => [...o, created]);
//     } else {
//       const updated = await api.put("contact-offices", editing!.id, data);
//       setOffices(o => o.map(x => x.id === updated.id ? updated : x));
//     }
//     setEditing(null); setForm({});
//   };

//   const del = async (id: number) => {
//     if (!confirm("Eliminar escritório?")) return;
//     await api.del("contact-offices", id);
//     setOffices(o => o.filter(x => x.id !== id));
//   };

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
//         <div>
//           <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Escritórios / Contactos</h2>
//           <p style={{ fontSize: 13, color: C.muted }}>Informação de contacto por país, visível na secção Fale Connosco.</p>
//         </div>
//         <button style={s.btnPrimary} onClick={openNew}>+ Novo Escritório</button>
//       </div>

//       {editing && (
//         <div style={{ ...s.card, borderColor: C.teal, marginBottom: 20 }}>
//           <div style={{ display: "grid", gridTemplateColumns: "auto 1fr 1fr", gap: 12, marginBottom: 12 }}>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Emoji Bandeira</span>
//               <input style={{ ...s.input, width: 60, fontSize: 22, textAlign: "center" }} value={form.flag ?? ""} onChange={e => setForm(p => ({ ...p, flag: e.target.value }))} />
//             </label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>País</span>
//               <input style={s.input} value={form.country ?? ""} onChange={e => setForm(p => ({ ...p, country: e.target.value }))} />
//             </label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>E-mail</span>
//               <input style={s.input} type="email" value={form.email ?? ""} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
//             </label>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Morada</span>
//               <textarea style={s.textarea} value={form.address ?? ""} onChange={e => setForm(p => ({ ...p, address: e.target.value }))} />
//             </label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Telefones (um por linha)</span>
//               <textarea style={s.textarea} value={form.phonesStr ?? ""} onChange={e => setForm(p => ({ ...p, phonesStr: e.target.value }))} placeholder="(+244) 933 153 362&#10;(+244) 938 306 698" />
//             </label>
//           </div>
//           <div style={{ display: "flex", gap: 8 }}>
//             <button style={s.btnPrimary} onClick={save}>Guardar</button>
//             <button style={s.btnGhost} onClick={() => { setEditing(null); setForm({}); }}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
//         {offices.map(o => (
//           <div key={o.id} style={{ ...s.card, marginBottom: 0 }}>
//             <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
//               <span style={{ fontSize: 28 }}>{o.flag}</span>
//               <div>
//                 <div style={{ fontWeight: 700, fontSize: 14 }}>{o.country}</div>
//                 <div style={{ fontSize: 12, color: C.tealLight }}>{o.email}</div>
//               </div>
//             </div>
//             <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, marginBottom: 12, whiteSpace: "pre-line" }}>{o.address}</div>
//             <div style={{ fontSize: 12, color: C.muted, marginBottom: 14 }}>{o.phones.join(" · ")}</div>
//             <div style={{ display: "flex", gap: 6 }}>
//               <button style={{ ...s.btnGhost, fontSize: 11 }} onClick={() => open(o)}>Editar</button>
//               <button style={{ ...s.btnDanger, fontSize: 11 }} onClick={() => del(o.id)}>Eliminar</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─── PRODUCTS PANEL (placeholder) ────────────────────────────────────────────

// function ProductsPanel() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [editing, setEditing] = useState<Product | null>(null);
//   const [form, setForm] = useState<Partial<Product> & { specsStr?: string; brandsStr?: string }>({});

//   useEffect(() => { api.get("products").then(setProducts); }, []);

//   const open = (p: Product) => { setEditing(p); setForm({ ...p, specsStr: p.specs.join("\n"), brandsStr: p.brands.join("\n") }); };
//   const close = () => { setEditing(null); setForm({}); };

//   const save = async () => {
//     const data = {
//       ...form,
//       specs: (form.specsStr ?? "").split("\n").map(x => x.trim()).filter(Boolean),
//       brands: (form.brandsStr ?? "").split("\n").map(x => x.trim()).filter(Boolean),
//     };
//     delete (data as Record<string, unknown>).specsStr;
//     delete (data as Record<string, unknown>).brandsStr;

//     const updated = await api.put("products", editing!.id, data);
//     setProducts(p => p.map(x => x.id === updated.id ? updated : x));
//     close();
//   };

//   return (
//     <div>
//       <div style={{ marginBottom: 20 }}>
//         <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Produtos</h2>
//         <p style={{ fontSize: 13, color: C.muted }}>6 produtos apresentados com tab lateral + painel de detalhe.</p>
//       </div>

//       {editing && (
//         <div style={{ ...s.card, borderColor: C.teal, marginBottom: 20 }}>
//           <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Editar: {editing.name}</h3>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 12 }}>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Nome</span>
//               <input style={s.input} value={form.name ?? ""} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
//             </label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Cor Principal (hex)</span>
//               <input style={s.input} value={form.color ?? ""} onChange={e => setForm(p => ({ ...p, color: e.target.value }))} />
//             </label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Cor Clara (hex)</span>
//               <input style={s.input} value={form.lightColor ?? ""} onChange={e => setForm(p => ({ ...p, lightColor: e.target.value }))} />
//             </label>
//           </div>
//           <label style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 }}>
//             <span style={s.label}>Descrição</span>
//             <textarea style={s.textarea} value={form.desc ?? ""} onChange={e => setForm(p => ({ ...p, desc: e.target.value }))} />
//           </label>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Especificações (uma por linha)</span>
//               <textarea style={s.textarea} value={form.specsStr ?? ""} onChange={e => setForm(p => ({ ...p, specsStr: e.target.value }))} />
//             </label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//               <span style={s.label}>Marcas associadas (uma por linha)</span>
//               <textarea style={s.textarea} value={form.brandsStr ?? ""} onChange={e => setForm(p => ({ ...p, brandsStr: e.target.value }))} />
//             </label>
//           </div>
//           <div style={{ display: "flex", gap: 8 }}>
//             <button style={s.btnPrimary} onClick={save}>Guardar</button>
//             <button style={s.btnGhost} onClick={close}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
//         {products.map(p => (
//           <div key={p.id} style={{ ...s.card, marginBottom: 0, borderLeft: `3px solid ${p.color}` }}>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
//               <div>
//                 <div style={{ fontWeight: 700, fontSize: 15 }}>{p.name}</div>
//                 <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>/{p.slug}</div>
//               </div>
//               <div style={{ width: 16, height: 16, borderRadius: 4, background: p.color, flexShrink: 0, marginTop: 2 }} />
//             </div>
//             <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, marginBottom: 12 }}>{p.desc.substring(0, 100)}…</p>
//             <div style={{ fontSize: 11, color: C.muted, marginBottom: 12 }}>
//               <strong style={{ color: C.text }}>Marcas:</strong> {p.brands.join(", ")}
//             </div>
//             <button style={{ ...s.btnGhost, fontSize: 11 }} onClick={() => open(p)}>Editar Produto</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─── MAIN DASHBOARD ──────────────────────────────────────────────────────────

// export default function CMSDashboard() {
//   const [active, setActive] = useState("hero");

//   const panels: Record<string, React.ReactNode> = {
//     hero:     <HeroPanel />,
//     products: <ProductsPanel />,
//     services: <ServicesPanel />,
//     clients:  <ClientsPanel />,
//     brands:   <BrandsPanel />,
//     presence: <PresencePanel />,
//     contact:  <ContactPanel />,
//     settings: <SettingsPanel />,
//   };

//   return (
//     <div style={s.layout}>
//       <style>{`
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         body { background: ${C.bg}; }
//         input, textarea, select { font-family: inherit; }
//         input:focus, textarea:focus, select:focus { border-color: ${C.teal} !important; outline: none; }
//         ::-webkit-scrollbar { width: 4px; height: 4px; }
//         ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }
//       `}</style>

//       {/* ── Sidebar ── */}
//       <aside style={s.sidebar}>
//         <div style={s.logo}>
//           <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//             <div style={{ width: 28, height: 28, borderRadius: 7, background: C.teal, display: "flex", alignItems: "center", justifyContent: "center" }}>
//               <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/></svg>
//             </div>
//             <div>
//               <div style={{ fontSize: 13, fontWeight: 800, color: C.text }}>Multienergia</div>
//               <div style={{ fontSize: 10, color: C.muted, letterSpacing: ".08em", textTransform: "uppercase" }}>CMS Dashboard</div>
//             </div>
//           </div>
//         </div>

//         <nav style={{ flex: 1, padding: "0 8px" }}>
//           {sections.map(sec => (
//             <button key={sec.id} onClick={() => setActive(sec.id)} style={{
//               width: "100%", padding: "9px 12px", borderRadius: 7, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10,
//               background: active === sec.id ? `${C.teal}22` : "transparent",
//               color: active === sec.id ? "#fff" : C.muted,
//               fontSize: 13, fontWeight: active === sec.id ? 600 : 400, fontFamily: "inherit",
//               transition: "all .15s", marginBottom: 2,
//               borderLeft: active === sec.id ? `2px solid ${C.teal}` : "2px solid transparent",
//             }}>
//               <span style={{ fontSize: 14 }}>{sec.icon}</span>
//               {sec.label}
//             </button>
//           ))}
//         </nav>

//         <div style={{ padding: "16px 20px", borderTop: `1px solid ${C.border}` }}>
//           <a href="/" target="_blank" style={{ fontSize: 11, color: C.muted, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
//             <span>↗</span> Ver site
//           </a>
//         </div>
//       </aside>

//       {/* ── Main content ── */}
//       <main style={s.main}>
//         {panels[active]}
//       </main>
//     </div>
//   );
// }





"use client";
import React, { useState, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface HeroSlide {
  id: number;
  order: number;
  tag: string;
  line1: string;
  line2: string;
  line3: string;
  sub: string;
  active: boolean;
}

type FormData = Omit<HeroSlide, "id">;

const EMPTY_FORM: FormData = {
  order: 0,
  tag: "",
  line1: "",
  line2: "",
  line3: "",
  sub: "",
  active: true,
};

/* ─────────────────────────────────────────────
   HERO PREVIEW (miniatura fiel ao design real)
───────────────────────────────────────────── */
function HeroPreview({ slide }: { slide: FormData }) {
  return (
    <div style={{
      position: "relative", background: "#095b66", borderRadius: 12,
      padding: "20px 24px 0", overflow: "hidden", minHeight: 160,
      border: "1px solid rgba(255,255,255,.08)",
    }}>
      {/* decoração fundo */}
      <div style={{ position:"absolute", top:0, right:0, width:"42%", height:"100%", background:"rgba(255,255,255,.04)", clipPath:"polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}/>
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize:"20px 20px", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", right:"4%", top:"50%", transform:"translateY(-50%)", opacity:.06 }}>
        <svg viewBox="0 0 200 300" fill="#fff" width="60" height="90"><path d="M120 10L20 160H100L80 290L180 140H100L120 10Z"/></svg>
      </div>
      {/* conteúdo */}
      <div style={{ position:"relative", zIndex:1 }}>
        <div style={{ display:"inline-flex", alignItems:"center", background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.2)", borderRadius:99, padding:"2px 8px", fontSize:8, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.85)", marginBottom:10 }}>
          {slide.tag || "Tag do slide"}
        </div>
        <div style={{ fontWeight:900, lineHeight:.95, color:"#fff", marginBottom:8 }}>
          <div style={{ fontSize:18 }}>{slide.line1 || "Linha 1"}</div>
          <div style={{ fontSize:18, color:"rgba(255,255,255,.4)" }}>{slide.line2 || "Linha 2"}</div>
          <div style={{ fontSize:18 }}>{slide.line3 || "Linha 3"}</div>
        </div>
        <p style={{ fontSize:9, lineHeight:1.6, color:"rgba(255,255,255,.65)", maxWidth:240, marginBottom:14 }}>{slide.sub || "Subtítulo do slide..."}</p>
        <div style={{ display:"flex", gap:6 }}>
          <div style={{ background:"#fff", borderRadius:4, padding:"4px 10px", fontSize:8, fontWeight:700, color:"#095b66" }}>Ver Soluções</div>
          <div style={{ background:"transparent", border:"1px solid rgba(255,255,255,.4)", borderRadius:4, padding:"4px 10px", fontSize:8, fontWeight:700, color:"#fff" }}>Pedir Orçamento</div>
        </div>
      </div>
      {/* wave bottom */}
      <div style={{ height:16, background:"#fff", clipPath:"ellipse(55% 100% at 50% 100%)", marginTop:14 }}/>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MODAL DE EDIÇÃO / CRIAÇÃO
───────────────────────────────────────────── */
function SlideModal({
  initial,
  onSave,
  onClose,
  loading,
}: {
  initial: FormData;
  onSave: (data: FormData) => void;
  onClose: () => void;
  loading: boolean;
}) {
  const [form, setForm] = useState<FormData>(initial);
  const set = (k: keyof FormData, v: string | boolean | number) =>
    setForm(prev => ({ ...prev, [k]: v }));

  const fields: { key: keyof FormData; label: string; hint: string; type?: string }[] = [
    { key: "tag",   label: "Tag / Badge",  hint: 'Ex: "Eficiência · Transição · Inovação"' },
    { key: "line1", label: "Título — Linha 1", hint: "Ex: Energia que" },
    { key: "line2", label: "Título — Linha 2 (esmaecida)", hint: "Ex: transforma" },
    { key: "line3", label: "Título — Linha 3", hint: "Ex: Angola" },
    { key: "sub",   label: "Subtítulo", hint: "Frase descritiva abaixo do título", type: "textarea" },
    { key: "order", label: "Ordem", hint: "Número inteiro · menor = primeiro", type: "number" },
  ];

  const valid = form.tag && form.line1 && form.line2 && form.line3 && form.sub;

  return (
    <div style={{ position:"fixed", inset:0, zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
      {/* overlay */}
      <div onClick={onClose} style={{ position:"absolute", inset:0, background:"rgba(6,20,22,.7)", backdropFilter:"blur(4px)" }}/>

      <div style={{ position:"relative", zIndex:1, width:"100%", maxWidth:860, maxHeight:"92vh", overflowY:"auto", background:"#fff", borderRadius:20, boxShadow:"0 32px 96px rgba(6,20,22,.35)" }}>

        {/* Header */}
        <div style={{ padding:"28px 32px 20px", borderBottom:"1.5px solid #edf2f2", display:"flex", alignItems:"center", justifyContent:"space-between", gap:16 }}>
          <div>
            <p style={{ fontSize:11, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"#095b66", marginBottom:4 }}>Hero Slide</p>
            <h2 style={{ fontSize:20, fontWeight:900, color:"#0a1c1e" }}>
              {initial.tag ? "Editar Slide" : "Novo Slide"}
            </h2>
          </div>
          <button onClick={onClose} style={{ width:36, height:36, borderRadius:8, border:"1.5px solid #dde8ea", background:"#f8fbfc", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
            <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M4 4l8 8M12 4l-8 8" stroke="#4a7275" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 320px", gap:0 }}>
          {/* Form */}
          <div style={{ padding:"24px 32px", display:"flex", flexDirection:"column", gap:18 }}>
            {fields.map(f => (
              <label key={f.key} style={{ display:"flex", flexDirection:"column", gap:5 }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <span style={{ fontSize:10, fontWeight:700, color:"#095b66", letterSpacing:".12em", textTransform:"uppercase" }}>{f.label}</span>
                  <span style={{ fontSize:10, color:"#9bbbbe" }}>{f.hint}</span>
                </div>
                {f.type === "textarea" ? (
                  <textarea
                    value={form[f.key] as string}
                    onChange={e => set(f.key, e.target.value)}
                    rows={3}
                    style={{ width:"100%", background:"#f8fbfc", border:"1.5px solid #dde8ea", borderRadius:8, color:"#1a2c2e", padding:"10px 12px", fontFamily:"'Montserrat',sans-serif", fontSize:13, outline:"none", resize:"vertical", lineHeight:1.6 }}
                    onFocus={e => { e.currentTarget.style.borderColor="#095b66"; e.currentTarget.style.background="#fff"; }}
                    onBlur={e => { e.currentTarget.style.borderColor="#dde8ea"; e.currentTarget.style.background="#f8fbfc"; }}
                  />
                ) : f.type === "number" ? (
                  <input
                    type="number"
                    value={form[f.key] as number}
                    onChange={e => set(f.key, parseInt(e.target.value) || 0)}
                    style={{ width:100, background:"#f8fbfc", border:"1.5px solid #dde8ea", borderRadius:8, color:"#1a2c2e", padding:"10px 12px", fontFamily:"'Montserrat',sans-serif", fontSize:13, outline:"none" }}
                    onFocus={e => { e.currentTarget.style.borderColor="#095b66"; e.currentTarget.style.background="#fff"; }}
                    onBlur={e => { e.currentTarget.style.borderColor="#dde8ea"; e.currentTarget.style.background="#f8fbfc"; }}
                  />
                ) : (
                  <input
                    type="text"
                    value={form[f.key] as string}
                    onChange={e => set(f.key, e.target.value)}
                    placeholder={f.hint}
                    style={{ width:"100%", background:"#f8fbfc", border:"1.5px solid #dde8ea", borderRadius:8, color:"#1a2c2e", padding:"10px 12px", fontFamily:"'Montserrat',sans-serif", fontSize:13, outline:"none" }}
                    onFocus={e => { e.currentTarget.style.borderColor="#095b66"; e.currentTarget.style.background="#fff"; }}
                    onBlur={e => { e.currentTarget.style.borderColor="#dde8ea"; e.currentTarget.style.background="#f8fbfc"; }}
                  />
                )}
              </label>
            ))}

            {/* Toggle activo */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", background:"#f8fbfc", border:"1.5px solid #dde8ea", borderRadius:10, padding:"14px 16px" }}>
              <div>
                <div style={{ fontSize:13, fontWeight:700, color:"#0a1c1e" }}>Slide activo</div>
                <div style={{ fontSize:11, color:"#9bbbbe", marginTop:2 }}>Quando inactivo não aparece no site</div>
              </div>
              <button
                onClick={() => set("active", !form.active)}
                style={{ width:48, height:26, borderRadius:99, border:"none", cursor:"pointer", background:form.active?"#095b66":"#dde8ea", position:"relative", transition:"background .2s", flexShrink:0 }}>
                <div style={{ position:"absolute", top:3, left:form.active?24:3, width:20, height:20, borderRadius:"50%", background:"#fff", transition:"left .2s", boxShadow:"0 1px 4px rgba(0,0,0,.18)" }}/>
              </button>
            </div>
          </div>

          {/* Preview ao vivo */}
          <div style={{ padding:"24px 24px 24px 0", borderLeft:"1.5px solid #edf2f2", paddingLeft:24 }}>
            <p style={{ fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".12em", textTransform:"uppercase", marginBottom:10 }}>Pré-visualização</p>
            <HeroPreview slide={form}/>
            <div style={{ marginTop:14, background:"#f0f9fa", borderRadius:10, padding:"12px 14px" }}>
              <p style={{ fontSize:10, fontWeight:700, color:"#095b66", marginBottom:6, letterSpacing:".08em", textTransform:"uppercase" }}>Estrutura do título</p>
              <div style={{ display:"flex", flexDirection:"column", gap:3 }}>
                {[
                  { l:"Linha 1", v:form.line1, opac:"100%" },
                  { l:"Linha 2", v:form.line2, opac:"40% (esmaecida)" },
                  { l:"Linha 3", v:form.line3, opac:"100%" },
                ].map(r => (
                  <div key={r.l} style={{ display:"flex", gap:8, alignItems:"center" }}>
                    <span style={{ fontSize:9, fontWeight:700, color:"#095b66", minWidth:42 }}>{r.l}</span>
                    <span style={{ fontSize:9, color:"#4a7275", flex:1 }}>{r.v || "—"}</span>
                    <span style={{ fontSize:8, color:"#9bbbbe" }}>{r.opac}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding:"16px 32px 24px", borderTop:"1.5px solid #edf2f2", display:"flex", alignItems:"center", justifyContent:"flex-end", gap:10 }}>
          <button onClick={onClose} style={{ padding:"10px 20px", borderRadius:8, border:"1.5px solid #dde8ea", background:"#fff", fontSize:12, fontWeight:700, color:"#4a7275", cursor:"pointer", fontFamily:"'Montserrat',sans-serif" }}>
            Cancelar
          </button>
          <button
            onClick={() => valid && onSave(form)}
            disabled={!valid || loading}
            style={{ padding:"10px 24px", borderRadius:8, border:"none", background:valid && !loading?"#095b66":"#b0c8ca", fontSize:12, fontWeight:700, color:"#fff", cursor:valid && !loading?"pointer":"not-allowed", fontFamily:"'Montserrat',sans-serif", display:"flex", alignItems:"center", gap:8, transition:"background .2s" }}>
            {loading ? (
              <>
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14" style={{ animation:"spin .8s linear infinite" }}><circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,.3)" strokeWidth="2"/><path d="M8 2a6 6 0 016 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                A guardar…
              </>
            ) : (
              <>
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8l4 4 6-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Guardar Slide
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CONFIRM DELETE
───────────────────────────────────────────── */
function ConfirmDelete({ slide, onConfirm, onClose, loading }: {
  slide: HeroSlide; onConfirm: () => void; onClose: () => void; loading: boolean;
}) {
  return (
    <div style={{ position:"fixed", inset:0, zIndex:300, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
      <div onClick={onClose} style={{ position:"absolute", inset:0, background:"rgba(6,20,22,.7)", backdropFilter:"blur(4px)" }}/>
      <div style={{ position:"relative", zIndex:1, background:"#fff", borderRadius:16, padding:"32px", maxWidth:420, width:"100%", boxShadow:"0 24px 64px rgba(6,20,22,.3)" }}>
        <div style={{ width:48, height:48, borderRadius:12, background:"#fce8e8", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
          <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 style={{ fontSize:18, fontWeight:900, color:"#0a1c1e", marginBottom:8 }}>Eliminar slide?</h3>
        <p style={{ fontSize:13, color:"#4a7275", lineHeight:1.6, marginBottom:8 }}>
          Vai eliminar permanentemente o slide:
        </p>
        <div style={{ background:"#f8fbfc", border:"1.5px solid #dde8ea", borderRadius:8, padding:"10px 14px", marginBottom:24 }}>
          <div style={{ fontSize:12, fontWeight:800, color:"#0a1c1e" }}>{slide.line1} {slide.line2} {slide.line3}</div>
          <div style={{ fontSize:11, color:"#9bbbbe", marginTop:2 }}>{slide.tag}</div>
        </div>
        <div style={{ display:"flex", gap:10 }}>
          <button onClick={onClose} style={{ flex:1, padding:"11px", borderRadius:8, border:"1.5px solid #dde8ea", background:"#fff", fontSize:12, fontWeight:700, color:"#4a7275", cursor:"pointer", fontFamily:"'Montserrat',sans-serif" }}>Cancelar</button>
          <button onClick={onConfirm} disabled={loading} style={{ flex:1, padding:"11px", borderRadius:8, border:"none", background:loading?"#e8a0a0":"#c0392b", fontSize:12, fontWeight:700, color:"#fff", cursor:loading?"not-allowed":"pointer", fontFamily:"'Montserrat',sans-serif", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
            {loading ? "A eliminar…" : <>
              <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M5 5l6 6M11 5l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              Eliminar
            </>}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE CARD (linha na lista)
───────────────────────────────────────────── */
function SlideCard({
  slide,
  index,
  total,
  onEdit,
  onDelete,
  onToggle,
  onMove,
}: {
  slide: HeroSlide;
  index: number;
  total: number;
  onEdit: () => void;
  onDelete: () => void;
  onToggle: () => void;
  onMove: (dir: "up" | "down") => void;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "#fafcfc" : "#fff",
        border: `1.5px solid ${slide.active ? "#dde8ea" : "#f0d8d8"}`,
        borderRadius: 14,
        padding: "20px 20px 20px 0",
        display: "grid",
        gridTemplateColumns: "56px 1fr auto",
        gap: 0,
        alignItems: "center",
        transition: "all .2s",
        opacity: slide.active ? 1 : 0.65,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* barra lateral colorida */}
      <div style={{ position:"absolute", left:0, top:0, bottom:0, width:4, background: slide.active ? "#095b66" : "#e8a0a0", borderRadius:"4px 0 0 4px" }}/>

      {/* ordenação */}
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2, paddingLeft:16 }}>
        <button
          disabled={index === 0}
          onClick={() => onMove("up")}
          style={{ width:24, height:24, borderRadius:6, border:"1.5px solid #dde8ea", background:index===0?"#f8fbfc":"#fff", cursor:index===0?"not-allowed":"pointer", display:"flex", alignItems:"center", justifyContent:"center", opacity:index===0?.3:1 }}>
          <svg viewBox="0 0 10 10" fill="none" width="8"><path d="M2 7l3-4 3 4" stroke="#4a7275" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span style={{ fontSize:11, fontWeight:800, color:"#9bbbbe" }}>{index + 1}</span>
        <button
          disabled={index === total - 1}
          onClick={() => onMove("down")}
          style={{ width:24, height:24, borderRadius:6, border:"1.5px solid #dde8ea", background:index===total-1?"#f8fbfc":"#fff", cursor:index===total-1?"not-allowed":"pointer", display:"flex", alignItems:"center", justifyContent:"center", opacity:index===total-1?.3:1 }}>
          <svg viewBox="0 0 10 10" fill="none" width="8"><path d="M2 3l3 4 3-4" stroke="#4a7275" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* conteúdo */}
      <div style={{ padding:"0 20px" }}>
        {/* badge + estado */}
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
          <span style={{ background:"rgba(9,91,102,.08)", border:"1px solid rgba(9,91,102,.15)", borderRadius:99, padding:"2px 10px", fontSize:10, fontWeight:700, color:"#095b66", letterSpacing:".06em" }}>
            {slide.tag}
          </span>
          <span style={{ padding:"2px 8px", borderRadius:99, fontSize:9, fontWeight:800, letterSpacing:".08em", textTransform:"uppercase", background:slide.active?"#dcfce7":"#fce8e8", color:slide.active?"#166534":"#991b1b" }}>
            {slide.active ? "Activo" : "Inactivo"}
          </span>
        </div>
        {/* título */}
        <div style={{ display:"flex", alignItems:"baseline", gap:8, flexWrap:"wrap", marginBottom:6 }}>
          <span style={{ fontSize:18, fontWeight:900, color:"#0a1c1e", lineHeight:1 }}>{slide.line1}</span>
          <span style={{ fontSize:18, fontWeight:900, color:"rgba(9,91,102,.35)", lineHeight:1 }}>{slide.line2}</span>
          <span style={{ fontSize:18, fontWeight:900, color:"#0a1c1e", lineHeight:1 }}>{slide.line3}</span>
        </div>
        {/* subtítulo */}
        <p style={{ fontSize:12, color:"#6a9598", lineHeight:1.5, display:"-webkit-box", WebkitLineClamp:1, WebkitBoxOrient:"vertical", overflow:"hidden", margin:0 }}>
          {slide.sub}
        </p>
      </div>

      {/* acções */}
      <div style={{ display:"flex", alignItems:"center", gap:8, paddingRight:4 }}>

        {/* toggle activo */}
        <button
          onClick={onToggle}
          title={slide.active ? "Desactivar" : "Activar"}
          style={{ width:36, height:36, borderRadius:8, border:"1.5px solid #dde8ea", background:slide.active?"#f0fdf4":"#fef2f2", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
          {slide.active
            ? <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="8" r="6" stroke="#22c55e" strokeWidth="1.8"/><path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            : <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="8" r="6" stroke="#ef4444" strokeWidth="1.8"/><path d="M6 6l4 4M10 6l-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
          }
        </button>

        {/* editar */}
        <button
          onClick={onEdit}
          title="Editar"
          style={{ width:36, height:36, borderRadius:8, border:"1.5px solid #dde8ea", background:"#fff", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M11 2l3 3-8 8H3v-3l8-8z" stroke="#095b66" strokeWidth="1.6" strokeLinejoin="round"/></svg>
        </button>

        {/* eliminar */}
        <button
          onClick={onDelete}
          title="Eliminar"
          style={{ width:36, height:36, borderRadius:8, border:"1.5px solid #fce8e8", background:"#fff5f5", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M3 4h10M6 4V2h4v2M5 4v9h6V4" stroke="#c0392b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PÁGINA PRINCIPAL
───────────────────────────────────────────── */
export default function AdminHeroSlides() {
  const [slides, setSlides]         = useState<HeroSlide[]>([]);
  const [loading, setLoading]       = useState(true);
  const [saving, setSaving]         = useState(false);
  const [error, setError]           = useState<string | null>(null);

  const [modalOpen, setModalOpen]   = useState(false);
  const [editSlide, setEditSlide]   = useState<HeroSlide | null>(null);

  const [deleteTarget, setDeleteTarget] = useState<HeroSlide | null>(null);
  const [deleting, setDeleting]         = useState(false);

  const [toast, setToast]   = useState<{ msg: string; type: "ok" | "err" } | null>(null);
  const [preview, setPreview] = useState<HeroSlide | null>(null);

  /* toast helper */
  const showToast = useCallback((msg: string, type: "ok" | "err" = "ok") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  /* fetch */
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/cms/hero-slides");
      if (!res.ok) throw new Error("Erro ao carregar");
      setSlides(await res.json());
      setError(null);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  /* create / update */
  const handleSave = async (data: FormData) => {
    setSaving(true);
    try {
      if (editSlide) {
        const res = await fetch(`/api/cms/hero-slides/${editSlide.id}`, {
          method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Erro ao actualizar");
        showToast("Slide actualizado com sucesso");
      } else {
        const res = await fetch("/api/cms/hero-slides", {
          method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Erro ao criar");
        showToast("Slide criado com sucesso");
      }
      setModalOpen(false);
      setEditSlide(null);
      await load();
    } catch (e: unknown) {
      showToast(e instanceof Error ? e.message : "Erro desconhecido", "err");
    } finally {
      setSaving(false);
    }
  };

  /* toggle active */
  const handleToggle = async (slide: HeroSlide) => {
    try {
      const res = await fetch(`/api/cms/hero-slides/${slide.id}`, {
        method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !slide.active }),
      });
      if (!res.ok) throw new Error("Erro ao actualizar estado");
      showToast(slide.active ? "Slide desactivado" : "Slide activado");
      await load();
    } catch (e: unknown) {
      showToast(e instanceof Error ? e.message : "Erro desconhecido", "err");
    }
  };

  /* move order */
  const handleMove = async (idx: number, dir: "up" | "down") => {
    const target = slides[idx];
    const swap   = slides[dir === "up" ? idx - 1 : idx + 1];
    if (!swap) return;
    try {
      await Promise.all([
        fetch(`/api/cms/hero-slides/${target.id}`, { method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ order: swap.order }) }),
        fetch(`/api/cms/hero-slides/${swap.id}`,   { method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ order: target.order }) }),
      ]);
      await load();
    } catch {
      showToast("Erro ao reordenar", "err");
    }
  };

  /* delete */
  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/cms/hero-slides/${deleteTarget.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Erro ao eliminar");
      showToast("Slide eliminado");
      setDeleteTarget(null);
      await load();
    } catch (e: unknown) {
      showToast(e instanceof Error ? e.message : "Erro desconhecido", "err");
    } finally {
      setDeleting(false);
    }
  };

  const activeCount = slides.filter(s => s.active).length;

  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes toastIn { from { opacity:0; transform:translateY(16px) scale(.97); } to { opacity:1; transform:none; } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        * { box-sizing: border-box; }
        body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div style={{ minHeight:"100vh", background:"#f4f8f8", fontFamily:"'Montserrat',sans-serif" }}>

        {/* ── HEADER ── */}
        <div style={{ background:"#fff", borderBottom:"1.5px solid #e8f0f0", padding:"0 32px", paddingTop:200 }}>
          <div style={{ maxWidth:1100, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <a href="/admin" style={{ display:"flex", alignItems:"center", gap:8, textDecoration:"none", color:"#4a7275", fontSize:12, fontWeight:700 }}>
                <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Dashboard
              </a>
              <div style={{ width:1, height:20, background:"#dde8ea" }}/>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:32, height:32, borderRadius:8, background:"#095b66", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M2 6L8 2l6 4v8H2V6z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/><rect x="5" y="10" width="6" height="4" rx="1" fill="#fff" opacity=".5"/></svg>
                </div>
                <div>
                  <div style={{ fontSize:14, fontWeight:800, color:"#0a1c1e" }}>Hero Slides</div>
                  <div style={{ fontSize:11, color:"#9bbbbe" }}>{slides.length} slide{slides.length !== 1 ? "s" : ""} · {activeCount} activo{activeCount !== 1 ? "s" : ""}</div>
                </div>
              </div>
            </div>
            <button
              onClick={() => { setEditSlide(null); setModalOpen(true); }}
              style={{ display:"flex", alignItems:"center", gap:8, padding:"9px 18px", background:"#095b66", border:"none", borderRadius:8, fontSize:12, fontWeight:700, color:"#fff", cursor:"pointer", fontFamily:"'Montserrat',sans-serif", letterSpacing:".04em" }}>
              <svg viewBox="0 0 14 14" fill="none" width="12"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
              Novo Slide
            </button>
          </div>
        </div>

        <div style={{ maxWidth:1100, margin:"0 auto", padding:"32px 32px" }}>

          {/* ── STATS ── */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginBottom:28 }}>
            {[
              { label:"Total de slides", value:slides.length, icon:<svg viewBox="0 0 16 16" fill="none" width="16"><rect x="2" y="4" width="12" height="8" rx="2" stroke="#095b66" strokeWidth="1.5"/><path d="M5 8h6" stroke="#095b66" strokeWidth="1.5" strokeLinecap="round"/></svg>, color:"#095b66", bg:"#e8f7f9" },
              { label:"Slides activos", value:activeCount, icon:<svg viewBox="0 0 16 16" fill="none" width="16"><circle cx="8" cy="8" r="6" stroke="#22c55e" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>, color:"#166534", bg:"#dcfce7" },
              { label:"Slides inactivos", value:slides.length - activeCount, icon:<svg viewBox="0 0 16 16" fill="none" width="16"><circle cx="8" cy="8" r="6" stroke="#ef4444" strokeWidth="1.5"/><path d="M6 6l4 4M10 6l-4 4" stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round"/></svg>, color:"#991b1b", bg:"#fce8e8" },
            ].map(s => (
              <div key={s.label} style={{ background:"#fff", border:"1.5px solid #e8f0f0", borderRadius:12, padding:"16px 20px", display:"flex", alignItems:"center", gap:14 }}>
                <div style={{ width:38, height:38, borderRadius:10, background:s.bg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{s.icon}</div>
                <div>
                  <div style={{ fontSize:22, fontWeight:900, color:s.color, lineHeight:1 }}>{s.value}</div>
                  <div style={{ fontSize:11, color:"#9bbbbe", marginTop:3 }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── INFO SOBRE FORMATO ── */}
          <div style={{ background:"linear-gradient(135deg,#f0f9fa,#e8f5f7)", border:"1.5px solid #c8e8eb", borderRadius:12, padding:"14px 18px", marginBottom:24, display:"flex", gap:14, alignItems:"flex-start" }}>
            <div style={{ flexShrink:0, marginTop:2 }}>
              <svg viewBox="0 0 16 16" fill="none" width="16"><circle cx="8" cy="8" r="6" stroke="#095b66" strokeWidth="1.5"/><path d="M8 7v4M8 5.5v.5" stroke="#095b66" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div style={{ fontSize:12, color:"#2a5a5e", lineHeight:1.6 }}>
              <strong>Estrutura do título:</strong> o título do Hero é composto por 3 linhas. A <strong>Linha 2</strong> aparece esmaecida (40% opacidade) no site, criando contraste visual. Use esta linha para palavras como que, de, e, etc.
              · Os slides são apresentados sequencialmente com intervalo de 6 segundos.
            </div>
          </div>

          {/* ── LISTA ── */}
          {loading ? (
            <div style={{ padding:"60px 0", display:"flex", flexDirection:"column", alignItems:"center", gap:16, color:"#9bbbbe" }}>
              <svg viewBox="0 0 32 32" fill="none" width="32" style={{ animation:"spin .8s linear infinite" }}><circle cx="16" cy="16" r="12" stroke="#dde8ea" strokeWidth="3"/><path d="M16 4a12 12 0 0112 12" stroke="#095b66" strokeWidth="3" strokeLinecap="round"/></svg>
              <span style={{ fontSize:13, fontWeight:600 }}>A carregar slides…</span>
            </div>
          ) : error ? (
            <div style={{ padding:"48px 0", textAlign:"center" }}>
              <div style={{ display:"inline-flex", flexDirection:"column", alignItems:"center", gap:12 }}>
                <div style={{ width:48, height:48, borderRadius:12, background:"#fce8e8", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <svg viewBox="0 0 20 20" fill="none" width="20"><path d="M10 7v4M10 15h.01M9 3l-7 13h16L9 3z" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p style={{ fontSize:13, color:"#c0392b", fontWeight:600 }}>{error}</p>
                <button onClick={load} style={{ padding:"8px 16px", borderRadius:8, border:"1.5px solid #c0392b", background:"#fff", fontSize:12, fontWeight:700, color:"#c0392b", cursor:"pointer", fontFamily:"'Montserrat',sans-serif" }}>Tentar novamente</button>
              </div>
            </div>
          ) : slides.length === 0 ? (
            <div style={{ padding:"64px 0", display:"flex", flexDirection:"column", alignItems:"center", gap:16 }}>
              <div style={{ width:64, height:64, borderRadius:16, background:"#f0f9fa", border:"2px dashed #c8e8eb", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg viewBox="0 0 32 32" fill="none" width="28"><rect x="4" y="8" width="24" height="16" rx="3" stroke="#095b66" strokeWidth="1.8"/><path d="M16 12v8M12 16h8" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </div>
              <div style={{ textAlign:"center" }}>
                <p style={{ fontSize:15, fontWeight:800, color:"#0a1c1e", marginBottom:4 }}>Nenhum slide criado</p>
                <p style={{ fontSize:13, color:"#9bbbbe" }}>Crie o primeiro slide do Hero para começar</p>
              </div>
              <button onClick={() => { setEditSlide(null); setModalOpen(true); }}
                style={{ display:"flex", alignItems:"center", gap:8, padding:"11px 22px", background:"#095b66", border:"none", borderRadius:8, fontSize:12, fontWeight:700, color:"#fff", cursor:"pointer", fontFamily:"'Montserrat',sans-serif" }}>
                <svg viewBox="0 0 14 14" fill="none" width="12"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
                Criar primeiro slide
              </button>
            </div>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {slides.map((s, i) => (
                <SlideCard
                  key={s.id}
                  slide={s}
                  index={i}
                  total={slides.length}
                  onEdit={() => { setEditSlide(s); setModalOpen(true); }}
                  onDelete={() => setDeleteTarget(s)}
                  onToggle={() => handleToggle(s)}
                  onMove={dir => handleMove(i, dir)}
                />
              ))}
            </div>
          )}

          {/* ── PREVIEW SECÇÃO ── */}
          {slides.length > 0 && (
            <div style={{ marginTop:32, background:"#fff", border:"1.5px solid #e8f0f0", borderRadius:16, padding:"24px 24px" }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
                <div>
                  <p style={{ fontSize:11, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:"#095b66", marginBottom:4 }}>Pré-visualização</p>
                  <h3 style={{ fontSize:15, fontWeight:800, color:"#0a1c1e" }}>Como ficará no site</h3>
                </div>
                <div style={{ display:"flex", gap:8 }}>
                  {slides.filter(s => s.active).map(s => (
                    <button
                      key={s.id}
                      onClick={() => setPreview(preview?.id === s.id ? null : s)}
                      style={{ padding:"6px 12px", borderRadius:99, border:`1.5px solid ${preview?.id===s.id?"#095b66":"#dde8ea"}`, background:preview?.id===s.id?"#095b66":"#fff", fontSize:11, fontWeight:700, color:preview?.id===s.id?"#fff":"#4a7275", cursor:"pointer", fontFamily:"'Montserrat',sans-serif", transition:"all .2s" }}>
                      Slide {slides.indexOf(s) + 1}
                    </button>
                  ))}
                </div>
              </div>
              {preview
                ? <HeroPreview slide={preview}/>
                : (
                  <div style={{ background:"#f8fbfc", border:"1.5px dashed #dde8ea", borderRadius:10, padding:"32px", textAlign:"center" }}>
                    <p style={{ fontSize:12, color:"#9bbbbe" }}>Clique num slide activo acima para pré-visualizar</p>
                  </div>
                )
              }
            </div>
          )}
        </div>
      </div>

      {/* ── MODAL CRIAR/EDITAR ── */}
      {modalOpen && (
        <SlideModal
          initial={editSlide ? { order:editSlide.order, tag:editSlide.tag, line1:editSlide.line1, line2:editSlide.line2, line3:editSlide.line3, sub:editSlide.sub, active:editSlide.active } : { ...EMPTY_FORM, order: slides.length }}
          onSave={handleSave}
          onClose={() => { setModalOpen(false); setEditSlide(null); }}
          loading={saving}
        />
      )}

      {/* ── CONFIRM DELETE ── */}
      {deleteTarget && (
        <ConfirmDelete
          slide={deleteTarget}
          onConfirm={handleDelete}
          onClose={() => setDeleteTarget(null)}
          loading={deleting}
        />
      )}

      {/* ── TOAST ── */}
      {toast && (
        <div style={{ position:"fixed", bottom:24, right:24, zIndex:999, animation:"toastIn .3s ease both" }}>
          <div style={{ background:toast.type==="ok"?"#095b66":"#c0392b", color:"#fff", borderRadius:10, padding:"12px 18px", fontSize:13, fontWeight:700, display:"flex", alignItems:"center", gap:10, boxShadow:"0 8px 32px rgba(0,0,0,.2)" }}>
            {toast.type==="ok"
              ? <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="8" r="6" stroke="#fff" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              : <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="8" r="6" stroke="#fff" strokeWidth="1.5"/><path d="M6 6l4 4M10 6l-4 4" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/></svg>
            }
            {toast.msg}
          </div>
        </div>
      )}
    </>
  );
}