// "use client";
// import React, { useState, useEffect, useCallback, useRef } from "react";
// import ProductsSection from "../components/ProductsSection";

// /* ═══════════════════════════════════════════════
//    TYPES
// ═══════════════════════════════════════════════ */
// interface HeroSlide {
//   id: number; order: number; tag: string;
//   line1: string; line2: string; line3: string;
//   sub: string; image: string | null; active: boolean;
// }
// interface Product {
//   id: number; order: number; slug: string; name: string;
//   desc: string; color: string; lightColor: string;
//   iconIndex: number; active: boolean;
//   specs: string[]; brands: string[];
// }
// interface Service { id: number; order: number; title: string; short: string; iconIndex: number; active: boolean; }
// interface Client  { id: number; order: number; name: string; active: boolean; }
// interface Brand   { id: number; order: number; name: string; role: string; active: boolean; }
// interface Presence { id: number; order: number; name: string; lon: number; lat: number; main: boolean; detail: string; flag: string; active: boolean; }

// type Section = "overview" | "hero" | "products" | "services" | "clients" | "brands" | "presence";

// /* ═══════════════════════════════════════════════
//    SHARED STYLES
// ═══════════════════════════════════════════════ */
// const inpStyle: React.CSSProperties = {
//   width: "100%", background: "#f8fbfc", border: "1.5px solid #dde8ea",
//   borderRadius: 8, color: "#1a2c2e", padding: "10px 12px",
//   fontFamily: "'Montserrat',sans-serif", fontSize: 13, outline: "none",
// };
// const lbl: React.CSSProperties = {
//   fontSize: 10, fontWeight: 700, color: "#095b66",
//   letterSpacing: ".12em", textTransform: "uppercase" as const,
// };
// const iconBtn: React.CSSProperties = {
//   width: 34, height: 34, borderRadius: 8, border: "1.5px solid #dde8ea",
//   background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
// };
// const primaryBtn: React.CSSProperties = {
//   display: "flex", alignItems: "center", gap: 7, padding: "9px 18px",
//   background: "#095b66", border: "none", borderRadius: 8,
//   fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer",
//   fontFamily: "'Montserrat',sans-serif", letterSpacing: ".04em",
// };
// const cancelBtn: React.CSSProperties = {
//   padding: "10px 18px", borderRadius: 8, border: "1.5px solid #dde8ea",
//   background: "#fff", fontSize: 12, fontWeight: 700, color: "#4a7275",
//   cursor: "pointer", fontFamily: "'Montserrat',sans-serif",
// };
// const rowCard: React.CSSProperties = {
//   background: "#fff", border: "1.5px solid #dde8ea", borderRadius: 12,
//   padding: "13px 14px 13px 0", display: "flex", alignItems: "center",
//   transition: "all .2s", position: "relative", overflow: "hidden",
// };

// /* ═══════════════════════════════════════════════
//    MICRO COMPONENTS
// ═══════════════════════════════════════════════ */
// function Toast({ msg, type }: { msg: string; type: "ok" | "err" }) {
//   return (
//     <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999, animation: "toastIn .3s ease both" }}>
//       <div style={{ background: type === "ok" ? "#095b66" : "#c0392b", color: "#fff", borderRadius: 10, padding: "12px 20px", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 10, boxShadow: "0 8px 32px rgba(0,0,0,.22)" }}>
//         {type === "ok"
//           ? <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="8" r="6" stroke="#fff" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
//           : <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="8" r="6" stroke="#fff" strokeWidth="1.5"/><path d="M6 6l4 4M10 6l-4 4" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/></svg>}
//         {msg}
//       </div>
//     </div>
//   );
// }

// function Spinner() {
//   return (
//     <div style={{ padding: "52px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
//       <svg viewBox="0 0 32 32" fill="none" width="32" style={{ animation: "spin .8s linear infinite" }}>
//         <circle cx="16" cy="16" r="12" stroke="#dde8ea" strokeWidth="3"/>
//         <path d="M16 4a12 12 0 0112 12" stroke="#095b66" strokeWidth="3" strokeLinecap="round"/>
//       </svg>
//       <span style={{ fontSize: 13, color: "#9bbbbe", fontWeight: 600 }}>A carregar…</span>
//     </div>
//   );
// }

// function StatCard({ label, value, color, bg }: { label: string; value: number; color: string; bg: string }) {
//   return (
//     <div style={{ background: "#fff", border: "1.5px solid #e8f0f0", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
//       <div style={{ width: 38, height: 38, borderRadius: 10, background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <span style={{ fontSize: 18, fontWeight: 900, color }}>{value}</span>
//       </div>
//       <span style={{ fontSize: 11, color: "#9bbbbe", fontWeight: 600 }}>{label}</span>
//     </div>
//   );
// }

// function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
//   return (
//     <button onClick={onToggle} style={{ width: 48, height: 26, borderRadius: 99, border: "none", cursor: "pointer", background: on ? "#095b66" : "#dde8ea", position: "relative", transition: "background .2s", flexShrink: 0 }}>
//       <div style={{ position: "absolute", top: 3, left: on ? 24 : 3, width: 20, height: 20, borderRadius: "50%", background: "#fff", transition: "left .2s", boxShadow: "0 1px 4px rgba(0,0,0,.18)" }}/>
//     </button>
//   );
// }

// function StatusBadge({ active }: { active: boolean }) {
//   return (
//     <span style={{ padding: "2px 7px", borderRadius: 99, fontSize: 9, fontWeight: 800, letterSpacing: ".07em", textTransform: "uppercase" as const, background: active ? "#dcfce7" : "#fce8e8", color: active ? "#166534" : "#991b1b" }}>
//       {active ? "Activo" : "Inactivo"}
//     </span>
//   );
// }

// function EmptyState({ label, hint, onAdd }: { label: string; hint: string; onAdd: () => void }) {
//   return (
//     <div style={{ padding: "52px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
//       <div style={{ width: 54, height: 54, borderRadius: 13, background: "#f0f9fa", border: "2px dashed #c8e8eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <svg viewBox="0 0 28 28" fill="none" width="22"><rect x="4" y="7" width="20" height="14" rx="3" stroke="#095b66" strokeWidth="1.6"/><path d="M14 10v8M10 14h8" stroke="#095b66" strokeWidth="1.6" strokeLinecap="round"/></svg>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <p style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e", marginBottom: 4 }}>{label}</p>
//         <p style={{ fontSize: 12, color: "#9bbbbe" }}>{hint}</p>
//       </div>
//       <button onClick={onAdd} style={primaryBtn}>
//         <svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
//         Criar agora
//       </button>
//     </div>
//   );
// }

// function ConfirmDeleteModal({ title, hint, onConfirm, onClose, loading }: { title: string; hint?: string; onConfirm: () => void; onClose: () => void; loading: boolean }) {
//   return (
//     <div style={{ position: "fixed", inset: 0, zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
//       <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.72)", backdropFilter: "blur(4px)" }}/>
//       <div style={{ position: "relative", zIndex: 1, background: "#fff", borderRadius: 16, padding: "28px", maxWidth: 380, width: "100%", boxShadow: "0 24px 64px rgba(6,20,22,.28)" }}>
//         <div style={{ width: 42, height: 42, borderRadius: 10, background: "#fce8e8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
//           <svg viewBox="0 0 20 20" fill="none" width="17"><path d="M10 7v4M10 15h.01M9 3l-7 13h16L9 3z" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
//         </div>
//         <h3 style={{ fontSize: 16, fontWeight: 900, color: "#0a1c1e", marginBottom: 6 }}>Eliminar?</h3>
//         <p style={{ fontSize: 12, color: "#4a7275", marginBottom: 10 }}>Esta acção é permanente e não pode ser desfeita.</p>
//         <div style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 8, padding: "9px 12px", marginBottom: 20 }}>
//           <div style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{title}</div>
//           {hint && <div style={{ fontSize: 11, color: "#9bbbbe", marginTop: 2 }}>{hint}</div>}
//         </div>
//         <div style={{ display: "flex", gap: 8 }}>
//           <button onClick={onClose} style={{ ...cancelBtn, flex: 1 }}>Cancelar</button>
//           <button onClick={onConfirm} disabled={loading} style={{ flex: 1, padding: "10px", borderRadius: 8, border: "none", background: loading ? "#e8a0a0" : "#c0392b", fontSize: 12, fontWeight: 700, color: "#fff", cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Montserrat',sans-serif" }}>
//             {loading ? "A eliminar…" : "Eliminar"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ModalShell({ title, subtitle, onClose, children, footer, wide = false }: { title: string; subtitle: string; onClose: () => void; children: React.ReactNode; footer: React.ReactNode; wide?: boolean }) {
//   return (
//     <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
//       <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.72)", backdropFilter: "blur(4px)" }}/>
//       <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: wide ? 820 : 680, maxHeight: "92vh", overflowY: "auto", background: "#fff", borderRadius: 20, boxShadow: "0 32px 96px rgba(6,20,22,.35)" }}>
//         <div style={{ padding: "22px 26px 16px", borderBottom: "1.5px solid #edf2f2", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//           <div>
//             <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" as const, color: "#095b66", marginBottom: 2 }}>{subtitle}</p>
//             <h2 style={{ fontSize: 16, fontWeight: 900, color: "#0a1c1e" }}>{title}</h2>
//           </div>
//           <button onClick={onClose} style={iconBtn}>
//             <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M4 4l8 8M12 4l-8 8" stroke="#4a7275" strokeWidth="2" strokeLinecap="round"/></svg>
//           </button>
//         </div>
//         <div style={{ padding: "20px 26px", display: "flex", flexDirection: "column", gap: 14 }}>{children}</div>
//         <div style={{ padding: "12px 26px 20px", borderTop: "1.5px solid #edf2f2", display: "flex", justifyContent: "flex-end", gap: 10 }}>{footer}</div>
//       </div>
//     </div>
//   );
// }

// function RowActions({ active, onToggle, onEdit, onDelete }: { active: boolean; onToggle: () => void; onEdit: () => void; onDelete: () => void }) {
//   return (
//     <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
//       <button onClick={onToggle} style={{ ...iconBtn, background: active ? "#f0fdf4" : "#fef2f2", borderColor: "#dde8ea" }}>
//         {active
//           ? <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#22c55e" strokeWidth="1.8"/><path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round"/></svg>
//           : <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#ef4444" strokeWidth="1.8"/><path d="M6 6l4 4M10 6l-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>}
//       </button>
//       <button onClick={onEdit} style={iconBtn}>
//         <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M11 2l3 3-8 8H3v-3l8-8z" stroke="#095b66" strokeWidth="1.6" strokeLinejoin="round"/></svg>
//       </button>
//       <button onClick={onDelete} style={{ ...iconBtn, background: "#fff5f5", borderColor: "#fce8e8" }}>
//         <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M3 4h10M6 4V2h4v2M5 4v9h6V4" stroke="#c0392b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
//       </button>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════
//    IMAGE UPLOADER COMPONENT
// ═══════════════════════════════════════════════ */
// function ImageUploader({
//   value,
//   onChange,
//   onUploadStart,
//   onUploadEnd,
//   showToast,
// }: {
//   value: string | null;
//   onChange: (url: string | null) => void;
//   onUploadStart?: () => void;
//   onUploadEnd?: () => void;
//   showToast: (m: string, t?: "ok" | "err") => void;
// }) {
//   const fileRef = useRef<HTMLInputElement>(null);
//   const [uploading, setUploading] = useState(false);
//   const [dragOver, setDragOver] = useState(false);

//   const doUpload = async (file: File) => {
//     if (!file.type.startsWith("image/")) {
//       showToast("Apenas imagens são permitidas", "err");
//       return;
//     }
//     setUploading(true);
//     onUploadStart?.();
//     try {
//       const fd = new FormData();
//       fd.append("file", file);
//       const res = await fetch("/api/cms/upload", { method: "POST", body: fd });
//       const data = await res.json();
//       if (data.url) {
//         onChange(data.url);
//         showToast("Imagem carregada com sucesso");
//       } else {
//         showToast(data.error || "Erro no upload", "err");
//       }
//     } catch {
//       showToast("Erro ao fazer upload", "err");
//     } finally {
//       setUploading(false);
//       onUploadEnd?.();
//       if (fileRef.current) fileRef.current.value = "";
//     }
//   };

//   const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) doUpload(file);
//   };

//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault();
//     setDragOver(false);
//     const file = e.dataTransfer.files?.[0];
//     if (file) doUpload(file);
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//       <span style={lbl}>Imagem de Fundo</span>

//       <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
//         {/* ── Preview ── */}
//         <div
//           style={{
//             width: 160, height: 100, borderRadius: 10, overflow: "hidden", flexShrink: 0,
//             border: dragOver ? "2px dashed #095b66" : "1.5px solid #dde8ea",
//             background: dragOver ? "#e8f7f9" : (value ? "#000" : "#f8fbfc"),
//             position: "relative", transition: "all .2s",
//             cursor: "pointer",
//           }}
//           onDragOver={e => { e.preventDefault(); setDragOver(true); }}
//           onDragLeave={() => setDragOver(false)}
//           onDrop={handleDrop}
//           onClick={() => !uploading && fileRef.current?.click()}
//         >
//           {value ? (
//             <>
//               <img
//                 src={value}
//                 alt="Fundo do slide"
//                 style={{ width: "100%", height: "100%", objectFit: "cover", opacity: uploading ? .4 : 1, transition: "opacity .2s" }}
//               />
//               {/* Overlay de troca */}
//               <div style={{ position: "absolute", inset: 0, background: "rgba(9,27,30,.0)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "all .2s" }}
//                 onMouseEnter={e => (e.currentTarget.style.opacity = "1", e.currentTarget.style.background = "rgba(9,27,30,.55)")}
//                 onMouseLeave={e => (e.currentTarget.style.opacity = "0", e.currentTarget.style.background = "rgba(9,27,30,.0)")}
//               >
//                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
//                   <svg viewBox="0 0 20 20" fill="none" width="18"><path d="M10 13V5M7 8l3-3 3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 15h12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
//                   <span style={{ fontSize: 9, color: "#fff", fontWeight: 700 }}>Trocar</span>
//                 </div>
//               </div>
//               {/* Botão remover */}
//               <button
//                 onClick={e => { e.stopPropagation(); onChange(null); }}
//                 style={{ position: "absolute", top: 5, right: 5, width: 20, height: 20, borderRadius: "50%", background: "rgba(0,0,0,.65)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}
//               >
//                 <svg viewBox="0 0 10 10" fill="none" width="8"><path d="M2 2l6 6M8 2l-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
//               </button>
//             </>
//           ) : (
//             <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
//               {uploading ? (
//                 <svg viewBox="0 0 24 24" fill="none" width="22" style={{ animation: "spin .8s linear infinite" }}>
//                   <circle cx="12" cy="12" r="9" stroke="#dde8ea" strokeWidth="2.5"/>
//                   <path d="M12 3a9 9 0 019 9" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round"/>
//                 </svg>
//               ) : (
//                 <>
//                   <svg viewBox="0 0 24 24" fill="none" width="22">
//                     <rect x="3" y="5" width="18" height="14" rx="2.5" stroke={dragOver ? "#095b66" : "#c8d8da"} strokeWidth="1.6"/>
//                     <circle cx="9" cy="11" r="2" fill={dragOver ? "#095b66" : "#c8d8da"}/>
//                     <path d="M3 16l4-4 3 3 4-5 7 7" stroke={dragOver ? "#095b66" : "#c8d8da"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                   <span style={{ fontSize: 9, color: dragOver ? "#095b66" : "#c8d8da", fontWeight: 700, textAlign: "center", lineHeight: 1.4 }}>
//                     {dragOver ? "Largar aqui" : "Clique ou\narraste"}
//                   </span>
//                 </>
//               )}
//             </div>
//           )}
//         </div>

//         {/* ── Info + botões ── */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, minWidth: 0 }}>
//           <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleFile}/>

//           <button
//             onClick={() => fileRef.current?.click()}
//             disabled={uploading}
//             style={{
//               ...primaryBtn,
//               background: uploading ? "#b0c8ca" : "#095b66",
//               cursor: uploading ? "not-allowed" : "pointer",
//               fontSize: 11, padding: "8px 14px",
//             }}
//           >
//             {uploading ? (
//               <><svg viewBox="0 0 14 14" fill="none" width="11" style={{ animation: "spin .8s linear infinite" }}><circle cx="7" cy="7" r="5" stroke="rgba(255,255,255,.4)" strokeWidth="2"/><path d="M7 2a5 5 0 015 5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>A fazer upload…</>
//             ) : value ? (
//               <><svg viewBox="0 0 14 14" fill="none" width="11"><path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>Trocar imagem</>
//             ) : (
//               <><svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 9V3M4 6l3-3 3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 11h10" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>Escolher imagem</>
//             )}
//           </button>

//           {value && (
//             <div style={{
//               fontSize: 10, color: "#6a9598", background: "#f8fbfc",
//               border: "1.5px solid #dde8ea", borderRadius: 6,
//               padding: "6px 9px", fontFamily: "monospace",
//               wordBreak: "break-all" as const, lineHeight: 1.5,
//             }}>
//               <span style={{ color: "#9bbbbe", fontSize: 9 }}>PATH  </span>
//               {value}
//             </div>
//           )}

//           <div style={{ fontSize: 10, color: "#b0c8ca", lineHeight: 1.6 }}>
//             JPG, PNG ou WEBP · Recomendado <strong>1920×1080</strong><br/>
//             Guardado em <code style={{ background: "#f0f5f5", borderRadius: 3, padding: "1px 4px", fontSize: 9 }}>public/img/</code>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════
//    GENERIC CRUD HOOK
// ═══════════════════════════════════════════════ */
// function useCrud<T extends { id: number; active: boolean }>(
//   endpoint: string,
//   showToast: (m: string, t?: "ok" | "err") => void
// ) {
//   const [items, setItems]     = useState<T[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving]   = useState(false);
//   const [deleting, setDeleting] = useState(false);

//   const load = useCallback(async () => {
//     setLoading(true);
//     try {
//       const r = await fetch(`/api/cms/${endpoint}?all=1`);
//       setItems(await r.json());
//     } catch {
//       showToast("Erro ao carregar", "err");
//     } finally {
//       setLoading(false);
//     }
//   }, [endpoint, showToast]);

//   useEffect(() => { load(); }, [load]);

//   const save = async (data: Omit<T, "id">, id?: number, label = "Item") => {
//     setSaving(true);
//     try {
//       if (id) {
//         await fetch(`/api/cms/${endpoint}/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
//         showToast(`${label} actualizado`);
//       } else {
//         await fetch(`/api/cms/${endpoint}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
//         showToast(`${label} criado`);
//       }
//       await load();
//       return true;
//     } catch {
//       showToast("Erro ao guardar", "err");
//       return false;
//     } finally {
//       setSaving(false);
//     }
//   };

//   const toggle = async (item: T, label = "Item") => {
//     try {
//       await fetch(`/api/cms/${endpoint}/${item.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !item.active }) });
//       showToast(item.active ? `${label} desactivado` : `${label} activado`);
//       await load();
//     } catch {
//       showToast("Erro ao actualizar", "err");
//     }
//   };

//   const remove = async (id: number, label = "Item") => {
//     setDeleting(true);
//     try {
//       await fetch(`/api/cms/${endpoint}/${id}`, { method: "DELETE" });
//       showToast(`${label} eliminado`);
//       await load();
//       return true;
//     } catch {
//       showToast("Erro ao eliminar", "err");
//       return false;
//     } finally {
//       setDeleting(false);
//     }
//   };

//   return { items, loading, saving, deleting, load, save, toggle, remove };
// }

// /* ═══════════════════════════════════════════════
//    HERO SECTION  ← UPDATED WITH IMAGE UPLOAD
// ═══════════════════════════════════════════════ */
// type HeroForm = Omit<HeroSlide, "id">;
// const EMPTY_HERO: HeroForm = {
//   order: 0, tag: "", line1: "", line2: "", line3: "",
//   sub: "", image: null, active: true,
// };

// function HeroPreview({ slide }: { slide: HeroForm }) {
//   return (
//     <div style={{ position: "relative", borderRadius: 9, overflow: "hidden", minHeight: 100 }}>
//       {/* Imagem de fundo no preview */}
//       {slide.image ? (
//         <div style={{ position: "absolute", inset: 0 }}>
//           <img src={slide.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
//           <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(9,91,102,.82) 0%, rgba(6,60,68,.65) 100%)" }}/>
//         </div>
//       ) : (
//         <div style={{ position: "absolute", inset: 0, background: "#095b66" }}/>
//       )}
//       <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", background: "rgba(255,255,255,.04)", clipPath: "polygon(15% 0,100% 0,100% 100%,0% 100%)" }}/>
//       <div style={{ position: "relative", zIndex: 1, padding: "14px 16px 0" }}>
//         <div style={{ display: "inline-flex", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, padding: "2px 7px", fontSize: 7, fontWeight: 700, textTransform: "uppercase" as const, color: "rgba(255,255,255,.85)", marginBottom: 6 }}>
//           {slide.tag || "Tag"}
//         </div>
//         <div style={{ fontWeight: 900, lineHeight: .95, color: "#fff", marginBottom: 5 }}>
//           <div style={{ fontSize: 12 }}>{slide.line1 || "Linha 1"}</div>
//           <div style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>{slide.line2 || "Linha 2"}</div>
//           <div style={{ fontSize: 12 }}>{slide.line3 || "Linha 3"}</div>
//         </div>
//         <p style={{ fontSize: 8, lineHeight: 1.6, color: "rgba(255,255,255,.65)", maxWidth: 200, marginBottom: 8 }}>{slide.sub || "Subtítulo…"}</p>
//       </div>
//       <div style={{ height: 10, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)", position: "relative", zIndex: 1 }}/>
//     </div>
//   );
// }

// function HeroSection({ showToast }: { showToast: (m: string, t?: "ok" | "err") => void }) {
//   const { items, loading, saving, deleting, save, toggle, remove } = useCrud<HeroSlide>("hero-slides", showToast);
//   const [modal,    setModal]    = useState(false);
//   const [editItem, setEditItem] = useState<HeroSlide | null>(null);
//   const [form,     setForm]     = useState<HeroForm>(EMPTY_HERO);
//   const [del,      setDel]      = useState<HeroSlide | null>(null);
//   const [uploadBusy, setUploadBusy] = useState(false);

//   const set = (k: keyof HeroForm, v: string | boolean | number | null) =>
//     setForm(p => ({ ...p, [k]: v }));

//   const valid = form.tag && form.line1 && form.line2 && form.line3 && form.sub;
//   const activeCount = items.filter(s => s.active).length;

//   const openNew = () => {
//     setEditItem(null);
//     setForm({ ...EMPTY_HERO, order: items.length });
//     setModal(true);
//   };
//   const openEdit = (s: HeroSlide) => {
//     setEditItem(s);
//     setForm({ order: s.order, tag: s.tag, line1: s.line1, line2: s.line2, line3: s.line3, sub: s.sub, image: s.image, active: s.active });
//     setModal(true);
//   };

//   return (
//     <div>
//       {/* Stats */}
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
//         <StatCard label="Total de slides"   value={items.length}                      color="#095b66" bg="#e8f7f9"/>
//         <StatCard label="Slides activos"    value={activeCount}                        color="#166534" bg="#dcfce7"/>
//         <StatCard label="Slides inactivos"  value={items.length - activeCount}         color="#991b1b" bg="#fce8e8"/>
//       </div>

//       <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
//         <button onClick={openNew} style={primaryBtn}>
//           <svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
//           Novo Slide
//         </button>
//       </div>

//       {/* List */}
//       {loading ? <Spinner/> : items.length === 0 ? (
//         <EmptyState label="Nenhum slide criado" hint="Crie o primeiro slide do Hero" onAdd={openNew}/>
//       ) : (
//         <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
//           {items.map((s, i) => (
//             <div key={s.id} style={{ ...rowCard, opacity: s.active ? 1 : .6, borderColor: s.active ? "#dde8ea" : "#f0d8d8" }}>
//               <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: s.active ? "#095b66" : "#e8a0a0", borderRadius: "4px 0 0 4px" }}/>

//               {/* Thumbnail */}
//               <div style={{ paddingLeft: 14, flexShrink: 0 }}>
//                 {s.image ? (
//                   <div style={{ width: 62, height: 42, borderRadius: 7, overflow: "hidden", border: "1.5px solid #dde8ea", flexShrink: 0 }}>
//                     <img src={s.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
//                   </div>
//                 ) : (
//                   <div style={{ width: 62, height: 42, borderRadius: 7, background: "#e8f7f9", border: "1.5px dashed #b8dde4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
//                     <svg viewBox="0 0 16 16" fill="none" width="13"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#9bbbbe" strokeWidth="1.4"/><circle cx="6" cy="7" r="1.2" fill="#9bbbbe"/><path d="M2 11l3-3 2 2 3-4 4 5" stroke="#9bbbbe" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                     <span style={{ fontSize: 7, color: "#c8d8da", fontWeight: 700 }}>Sem imagem</span>
//                   </div>
//                 )}
//               </div>

//               {/* Info */}
//               <div style={{ paddingLeft: 12, display: "flex", flexDirection: "column", gap: 3, flex: 1, minWidth: 0 }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
//                   <span style={{ background: "rgba(9,91,102,.08)", border: "1px solid rgba(9,91,102,.15)", borderRadius: 99, padding: "2px 8px", fontSize: 10, fontWeight: 700, color: "#095b66" }}>{s.tag}</span>
//                   <StatusBadge active={s.active}/>
//                   <span style={{ fontSize: 10, color: "#9bbbbe" }}>#{i + 1}</span>
//                   {s.image && (
//                     <span style={{ fontSize: 9, color: "#22c55e", fontWeight: 700, background: "#f0fdf4", borderRadius: 4, padding: "1px 5px" }}>
//                       📷 com imagem
//                     </span>
//                   )}
//                 </div>
//                 <div style={{ display: "flex", gap: 5, flexWrap: "wrap" as const }}>
//                   <span style={{ fontSize: 14, fontWeight: 900, color: "#0a1c1e" }}>{s.line1}</span>
//                   <span style={{ fontSize: 14, fontWeight: 900, color: "rgba(9,91,102,.35)" }}>{s.line2}</span>
//                   <span style={{ fontSize: 14, fontWeight: 900, color: "#0a1c1e" }}>{s.line3}</span>
//                 </div>
//                 <p style={{ fontSize: 11, color: "#6a9598", margin: 0, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" as const }}>{s.sub}</p>
//               </div>

//               <div style={{ paddingRight: 4 }}>
//                 <RowActions active={s.active} onToggle={() => toggle(s, "Slide")} onEdit={() => openEdit(s)} onDelete={() => setDel(s)}/>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Modal */}
//       {modal && (
//         <ModalShell
//           wide
//           title={editItem ? "Editar Slide" : "Novo Slide"}
//           subtitle="Hero Slides"
//           onClose={() => { setModal(false); setEditItem(null); }}
//           footer={
//             <>
//               <button onClick={() => { setModal(false); setEditItem(null); }} style={cancelBtn}>Cancelar</button>
//               <button
//                 onClick={async () => {
//                   if (!valid || uploadBusy) return;
//                   const ok = await save(form, editItem?.id, "Slide");
//                   if (ok) { setModal(false); setEditItem(null); }
//                 }}
//                 disabled={!valid || saving || uploadBusy}
//                 style={{
//                   ...primaryBtn,
//                   background: valid && !saving && !uploadBusy ? "#095b66" : "#b0c8ca",
//                   cursor: valid && !saving && !uploadBusy ? "pointer" : "not-allowed",
//                 }}
//               >
//                 {saving ? "A guardar…" : uploadBusy ? "Aguardar upload…" : "Guardar Slide"}
//               </button>
//             </>
//           }
//         >
//           {/* Campos de texto */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//             {([
//               ["tag",   "Tag / Badge",          "Ex: Eficiência · Inovação"],
//               ["line1", "Linha 1",               "Ex: Energia que"],
//               ["line2", "Linha 2 (esmaecida)",   "Ex: transforma"],
//               ["line3", "Linha 3",               "Ex: Angola"],
//             ] as [keyof HeroForm, string, string][]).map(([k, l, h]) => (
//               <label key={k} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
//                 <span style={lbl}>{l}</span>
//                 <input style={inpStyle} value={form[k] as string} onChange={e => set(k, e.target.value)} placeholder={h}/>
//               </label>
//             ))}
//             <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
//               <span style={lbl}>Ordem</span>
//               <input type="number" style={{ ...inpStyle, width: 80 }} value={form.order} onChange={e => set("order", +e.target.value)}/>
//             </label>
//           </div>

//           <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
//             <span style={lbl}>Subtítulo</span>
//             <textarea value={form.sub} onChange={e => set("sub", e.target.value)} rows={2} style={{ ...inpStyle, resize: "vertical" }} placeholder="Frase descritiva…"/>
//           </label>

//           {/* ── IMAGE UPLOADER ── */}
//           <div style={{ background: "#f8fbfc", border: "1.5px solid #e4ecec", borderRadius: 12, padding: "16px" }}>
//             <ImageUploader
//               value={form.image}
//               onChange={url => set("image", url)}
//               onUploadStart={() => setUploadBusy(true)}
//               onUploadEnd={() => setUploadBusy(false)}
//               showToast={showToast}
//             />
//           </div>

//           {/* Toggle + Preview lado a lado */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "10px 14px" }}>
//               <div>
//                 <div style={{ fontSize: 12, fontWeight: 700, color: "#0a1c1e" }}>Slide activo</div>
//                 <div style={{ fontSize: 10, color: "#9bbbbe", marginTop: 2 }}>Quando inactivo não aparece no site</div>
//               </div>
//               <Toggle on={form.active} onToggle={() => set("active", !form.active)}/>
//             </div>
//             <div>
//               <p style={{ fontSize: 9, fontWeight: 700, color: "#9bbbbe", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 5 }}>Pré-visualização</p>
//               <HeroPreview slide={form}/>
//             </div>
//           </div>
//         </ModalShell>
//       )}

//       {del && (
//         <ConfirmDeleteModal
//           title={`${del.line1} ${del.line2} ${del.line3}`}
//           hint={del.tag}
//           onConfirm={async () => { const ok = await remove(del.id, "Slide"); if (ok) setDel(null); }}
//           onClose={() => setDel(null)}
//           loading={deleting}
//         />
//       )}
//     </div>
//   );
// }

// /*═══════════════════════════════════════════════ 
//    SERVICES SECTION
// ═══════════════════════════════════════════════ */
// const SVC_ICONS  = ["0—Quadros Elétricos","1—Solar+Armazenamento","2—Energia Crítica","3—SPDA","4—Mobilidade Elétrica","5—Armários de Passeio","6—Auditoria Energética","7—Postos de Transformação","8—Telecom","9—SATCOM"];
// const SVC_EMOJI  = ["⚡","☀️","🔋","⛈️","🚗","🗄️","📊","🏭","🌐","📡"];
// type ServiceForm = Omit<Service,"id">;
// const EMPTY_SVC: ServiceForm = { order: 0, title: "", short: "", iconIndex: 0, active: true };

// function ServicesSection({ showToast }: { showToast: (m: string, t?: "ok" | "err") => void }) {
//   const { items, loading, saving, deleting, save, toggle, remove } = useCrud<Service>("services", showToast);
//   const [modal, setModal] = useState(false); const [editItem, setEditItem] = useState<Service | null>(null);
//   const [form, setForm] = useState<ServiceForm>(EMPTY_SVC); const [del, setDel] = useState<Service | null>(null);
//   const set = (k: keyof ServiceForm, v: string | boolean | number) => setForm(p => ({ ...p, [k]: v }));
//   const activeCount = items.filter(s => s.active).length;
//   const openNew = () => { setEditItem(null); setForm({ ...EMPTY_SVC, order: items.length }); setModal(true); };
//   const openEdit = (s: Service) => { setEditItem(s); setForm({ order: s.order, title: s.title, short: s.short, iconIndex: s.iconIndex, active: s.active }); setModal(true); };
//   return (
//     <div>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
//         <StatCard label="Total" value={items.length} color="#095b66" bg="#e8f7f9"/>
//         <StatCard label="Activos" value={activeCount} color="#166534" bg="#dcfce7"/>
//         <StatCard label="Inactivos" value={items.length - activeCount} color="#991b1b" bg="#fce8e8"/>
//       </div>
//       <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
//         <button onClick={openNew} style={primaryBtn}><svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>Novo Serviço</button>
//       </div>
//       {loading ? <Spinner/> : items.length === 0 ? <EmptyState label="Nenhum serviço criado" hint="Adicione os serviços da empresa" onAdd={openNew}/> : (
//         <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
//           {items.map((s, i) => (
//             <div key={s.id} style={{ ...rowCard, opacity: s.active ? 1 : .6, borderColor: s.active ? "#dde8ea" : "#f0d8d8" }}>
//               <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: s.active ? "#095b66" : "#e8a0a0", borderRadius: "4px 0 0 4px" }}/>
//               <div style={{ paddingLeft: 14, display: "flex", alignItems: "center", gap: 10, width: 52 }}>
//                 <div style={{ width: 34, height: 34, borderRadius: 8, background: "#e8f7f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{SVC_EMOJI[s.iconIndex] || "⚡"}</div>
//               </div>
//               <div style={{ paddingLeft: 8, display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
//                   <span style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{s.title}</span>
//                   <StatusBadge active={s.active}/><span style={{ fontSize: 10, color: "#9bbbbe" }}>#{i+1}</span>
//                 </div>
//                 <p style={{ fontSize: 11, color: "#6a9598", margin: 0, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" as const }}>{s.short}</p>
//               </div>
//               <div style={{ paddingRight: 4 }}><RowActions active={s.active} onToggle={() => toggle(s, "Serviço")} onEdit={() => openEdit(s)} onDelete={() => setDel(s)}/></div>
//             </div>
//           ))}
//         </div>
//       )}
//       {modal && (
//         <ModalShell title={editItem ? "Editar Serviço" : "Novo Serviço"} subtitle="Serviços" onClose={() => { setModal(false); setEditItem(null); }}
//           footer={<><button onClick={() => { setModal(false); setEditItem(null); }} style={cancelBtn}>Cancelar</button><button onClick={async () => { const ok = await save(form, editItem?.id, "Serviço"); if (ok) { setModal(false); setEditItem(null); } }} disabled={!form.title || saving} style={{ ...primaryBtn, background: form.title && !saving ? "#095b66" : "#b0c8ca", cursor: form.title && !saving ? "pointer" : "not-allowed" }}>{saving ? "A guardar…" : "Guardar Serviço"}</button></>}>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 100px", gap: 12 }}>
//             <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Título</span><input style={inpStyle} value={form.title} onChange={e => set("title", e.target.value)} placeholder="Ex: Quadros Elétricos"/></label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Ordem</span><input type="number" style={inpStyle} value={form.order} onChange={e => set("order", +e.target.value)}/></label>
//           </div>
//           <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Descrição Curta</span><textarea style={{ ...inpStyle, minHeight: 72, resize: "vertical" }} value={form.short} onChange={e => set("short", e.target.value)} placeholder="Breve descrição que aparece no card…"/></label>
//           <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
//             <span style={lbl}>Ícone</span>
//             <select style={{ ...inpStyle, appearance: "none" as const, cursor: "pointer" }} value={form.iconIndex} onChange={e => set("iconIndex", +e.target.value)}>
//               {SVC_ICONS.map((o, i) => <option key={i} value={i}>{SVC_EMOJI[i]} {o}</option>)}
//             </select>
//           </label>
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "10px 14px" }}>
//             <span style={{ fontSize: 12, fontWeight: 700, color: "#0a1c1e" }}>Serviço activo</span>
//             <Toggle on={form.active} onToggle={() => set("active", !form.active)}/>
//           </div>
//         </ModalShell>
//       )}
//       {del && <ConfirmDeleteModal title={del.title} onConfirm={async () => { const ok = await remove(del.id, "Serviço"); if (ok) setDel(null); }} onClose={() => setDel(null)} loading={deleting}/>}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════
//    CLIENTS SECTION
// ═══════════════════════════════════════════════ */
// function ClientsSection({ showToast }: { showToast: (m: string, t?: "ok" | "err") => void }) {
//   const { items, loading, saving, deleting, save, toggle, remove, load } = useCrud<Client>("clients", showToast);
//   const [modal, setModal] = useState(false); const [editItem, setEditItem] = useState<Client | null>(null);
//   const [cName, setCName] = useState(""); const [cOrder, setCOrder] = useState(0); const [cActive, setCActive] = useState(true);
//   const [del, setDel] = useState<Client | null>(null);
//   const [bulkModal, setBulkModal] = useState(false); const [bulkText, setBulkText] = useState(""); const [bulkSaving, setBulkSaving] = useState(false);
//   const activeCount = items.filter(c => c.active).length;
//   const openNew  = () => { setEditItem(null); setCName(""); setCOrder(items.length); setCActive(true); setModal(true); };
//   const openEdit = (c: Client) => { setEditItem(c); setCName(c.name); setCOrder(c.order); setCActive(c.active); setModal(true); };
//   const handleBulk = async () => {
//     const names = bulkText.split("\n").map(x => x.trim()).filter(Boolean);
//     if (!names.length) return;
//     setBulkSaving(true);
//     try {
//       await Promise.all(names.map((n, i) => fetch("/api/cms/clients", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: n, order: items.length + i, active: true }) })));
//       showToast(`${names.length} clientes importados`);
//       setBulkModal(false); setBulkText(""); await load();
//     } catch { showToast("Erro na importação", "err"); }
//     finally { setBulkSaving(false); }
//   };
//   return (
//     <div>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
//         <StatCard label="Total" value={items.length} color="#095b66" bg="#e8f7f9"/>
//         <StatCard label="Activos" value={activeCount} color="#166534" bg="#dcfce7"/>
//         <StatCard label="Inactivos" value={items.length - activeCount} color="#991b1b" bg="#fce8e8"/>
//       </div>
//       <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 12 }}>
//         <button onClick={() => setBulkModal(true)} style={{ ...cancelBtn, display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
//           <svg viewBox="0 0 14 14" fill="none" width="11"><path d="M2 4h10M2 7h10M2 10h6" stroke="#4a7275" strokeWidth="1.6" strokeLinecap="round"/></svg>
//           Importar lista
//         </button>
//         <button onClick={openNew} style={primaryBtn}><svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>Novo Cliente</button>
//       </div>
//       {!loading && items.length > 0 && (
//         <div style={{ marginBottom: 14, background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 12, padding: "12px 14px" }}>
//           <p style={{ fontSize: 10, fontWeight: 700, color: "#9bbbbe", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 8 }}>Prévia</p>
//           <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 5 }}>
//             {items.filter(c => c.active).map(c => <span key={c.id} style={{ background: "#e8f7f9", border: "1.5px solid #b8dde4", borderRadius: 99, padding: "4px 12px", fontSize: 11, fontWeight: 700, color: "#1a4a4f" }}>{c.name}</span>)}
//           </div>
//         </div>
//       )}
//       {loading ? <Spinner/> : items.length === 0 ? <EmptyState label="Nenhum cliente adicionado" hint="Adicione individualmente ou importe uma lista" onAdd={openNew}/> : (
//         <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//           {items.map((c, i) => (
//             <div key={c.id} style={{ ...rowCard, opacity: c.active ? 1 : .6, borderColor: c.active ? "#dde8ea" : "#f0d8d8", padding: "9px 14px 9px 0" }}>
//               <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: c.active ? "#095b66" : "#e8a0a0", borderRadius: "3px 0 0 3px" }}/>
//               <div style={{ paddingLeft: 14, display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
//                 <span style={{ fontSize: 10, color: "#9bbbbe", fontWeight: 700, minWidth: 20 }}>#{i+1}</span>
//                 <span style={{ fontSize: 13, fontWeight: 700, color: "#0a1c1e" }}>{c.name}</span>
//                 <StatusBadge active={c.active}/>
//               </div>
//               <div style={{ paddingRight: 4 }}><RowActions active={c.active} onToggle={() => toggle(c, "Cliente")} onEdit={() => openEdit(c)} onDelete={() => setDel(c)}/></div>
//             </div>
//           ))}
//         </div>
//       )}
//       {modal && (
//         <ModalShell title={editItem ? "Editar Cliente" : "Novo Cliente"} subtitle="Clientes" onClose={() => { setModal(false); setEditItem(null); }}
//           footer={<><button onClick={() => { setModal(false); setEditItem(null); }} style={cancelBtn}>Cancelar</button><button onClick={async () => { const ok = await save({ name: cName, order: cOrder, active: cActive }, editItem?.id, "Cliente"); if (ok) { setModal(false); setEditItem(null); } }} disabled={!cName || saving} style={{ ...primaryBtn, background: cName && !saving ? "#095b66" : "#b0c8ca", cursor: cName && !saving ? "pointer" : "not-allowed" }}>{saving ? "A guardar…" : "Guardar Cliente"}</button></>}>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 100px", gap: 12 }}>
//             <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Nome</span><input style={inpStyle} value={cName} onChange={e => setCName(e.target.value)} placeholder="Ex: Sonangol"/></label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Ordem</span><input type="number" style={inpStyle} value={cOrder} onChange={e => setCOrder(+e.target.value)}/></label>
//           </div>
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "10px 14px" }}>
//             <span style={{ fontSize: 12, fontWeight: 700, color: "#0a1c1e" }}>Cliente activo</span>
//             <Toggle on={cActive} onToggle={() => setCActive(a => !a)}/>
//           </div>
//         </ModalShell>
//       )}
//       {bulkModal && (
//         <ModalShell title="Importar Lista de Clientes" subtitle="Clientes · Importação" onClose={() => setBulkModal(false)}
//           footer={<><button onClick={() => setBulkModal(false)} style={cancelBtn}>Cancelar</button><button onClick={handleBulk} disabled={!bulkText.trim() || bulkSaving} style={{ ...primaryBtn, background: bulkText.trim() && !bulkSaving ? "#095b66" : "#b0c8ca", cursor: bulkText.trim() && !bulkSaving ? "pointer" : "not-allowed" }}>{bulkSaving ? "A importar…" : `Importar ${bulkText.split("\n").filter(x => x.trim()).length} clientes`}</button></>}>
//           <div style={{ background: "#f0f9fa", border: "1.5px solid #c8e8eb", borderRadius: 8, padding: "10px 12px", fontSize: 12, color: "#2a5a5e", lineHeight: 1.6 }}>
//             Cola a lista — <strong>um cliente por linha</strong>. Todos serão importados como activos.
//           </div>
//           <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Lista de clientes</span><textarea style={{ ...inpStyle, minHeight: 160, resize: "vertical" as const, fontFamily: "monospace", fontSize: 12 }} value={bulkText} onChange={e => setBulkText(e.target.value)} placeholder={"Sonangol\nUnitel\nBFA\nFidelidade\n..."}/></label>
//         </ModalShell>
//       )}
//       {del && <ConfirmDeleteModal title={del.name} onConfirm={async () => { const ok = await remove(del.id, "Cliente"); if (ok) setDel(null); }} onClose={() => setDel(null)} loading={deleting}/>}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════
//    BRANDS SECTION
// ═══════════════════════════════════════════════ */
// const ROLE_SUGGESTIONS = ["Rep. Oficial AO","Rep. Oficial","Parceiro Solar","Parceiro Quadros","Parceiro","Parceiro VE"];

// function BrandsSection({ showToast }: { showToast: (m: string, t?: "ok" | "err") => void }) {
//   const { items, loading, saving, deleting, save, toggle, remove } = useCrud<Brand>("brands", showToast);
//   const [modal, setModal] = useState(false); const [editItem, setEditItem] = useState<Brand | null>(null);
//   const [form, setForm] = useState({ name: "", role: "", order: 0, active: true }); const [del, setDel] = useState<Brand | null>(null);
//   const activeCount = items.filter(b => b.active).length;
//   const openNew  = () => { setEditItem(null); setForm({ name: "", role: "", order: items.length, active: true }); setModal(true); };
//   const openEdit = (b: Brand) => { setEditItem(b); setForm({ name: b.name, role: b.role, order: b.order, active: b.active }); setModal(true); };
//   return (
//     <div>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
//         <StatCard label="Total" value={items.length} color="#095b66" bg="#e8f7f9"/>
//         <StatCard label="Activos" value={activeCount} color="#166534" bg="#dcfce7"/>
//         <StatCard label="Inactivos" value={items.length - activeCount} color="#991b1b" bg="#fce8e8"/>
//       </div>
//       <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
//         <button onClick={openNew} style={primaryBtn}><svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>Nova Marca</button>
//       </div>
//       {!loading && items.length > 0 && (
//         <div style={{ marginBottom: 14, background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 12, padding: "12px 14px" }}>
//           <p style={{ fontSize: 10, fontWeight: 700, color: "#9bbbbe", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 8 }}>Prévia</p>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: 7 }}>
//             {items.filter(b => b.active).map(b => (
//               <div key={b.id} style={{ background: "#fff", border: "1.5px solid #dde8ea", borderRadius: 8, padding: "9px 11px", textAlign: "center" as const }}>
//                 <div style={{ fontSize: 12, fontWeight: 900, color: "#0a1c1e", marginBottom: 2 }}>{b.name}</div>
//                 <div style={{ fontSize: 9, fontWeight: 700, color: "#095b66", letterSpacing: ".07em", textTransform: "uppercase" as const }}>{b.role}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {loading ? <Spinner/> : items.length === 0 ? <EmptyState label="Nenhuma marca adicionada" hint="Adicione as marcas que a empresa representa" onAdd={openNew}/> : (
//         <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//           {items.map((b, i) => (
//             <div key={b.id} style={{ ...rowCard, opacity: b.active ? 1 : .6, borderColor: b.active ? "#dde8ea" : "#f0d8d8", padding: "9px 14px 9px 0" }}>
//               <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: b.active ? "#095b66" : "#e8a0a0", borderRadius: "3px 0 0 3px" }}/>
//               <div style={{ paddingLeft: 14, display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
//                 <span style={{ fontSize: 10, color: "#9bbbbe", fontWeight: 700, minWidth: 20 }}>#{i+1}</span>
//                 <div><div style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{b.name}</div><div style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".06em", textTransform: "uppercase" as const }}>{b.role}</div></div>
//                 <StatusBadge active={b.active}/>
//               </div>
//               <div style={{ paddingRight: 4 }}><RowActions active={b.active} onToggle={() => toggle(b, "Marca")} onEdit={() => openEdit(b)} onDelete={() => setDel(b)}/></div>
//             </div>
//           ))}
//         </div>
//       )}
//       {modal && (
//         <ModalShell title={editItem ? "Editar Marca" : "Nova Marca"} subtitle="Marcas / Parceiros" onClose={() => { setModal(false); setEditItem(null); }}
//           footer={<><button onClick={() => { setModal(false); setEditItem(null); }} style={cancelBtn}>Cancelar</button><button onClick={async () => { const ok = await save(form, editItem?.id, "Marca"); if (ok) { setModal(false); setEditItem(null); } }} disabled={!form.name || saving} style={{ ...primaryBtn, background: form.name && !saving ? "#095b66" : "#b0c8ca", cursor: form.name && !saving ? "pointer" : "not-allowed" }}>{saving ? "A guardar…" : "Guardar Marca"}</button></>}>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 100px", gap: 12 }}>
//             <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Nome da marca</span><input style={inpStyle} value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Ex: Huawei FusionSolar"/></label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Ordem</span><input type="number" style={inpStyle} value={form.order} onChange={e => setForm(p => ({ ...p, order: +e.target.value }))}/></label>
//           </div>
//           <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
//             <span style={lbl}>Tipo de parceria</span>
//             <input list="role-opts" style={inpStyle} value={form.role} onChange={e => setForm(p => ({ ...p, role: e.target.value }))} placeholder="Ex: Rep. Oficial AO"/>
//             <datalist id="role-opts">{ROLE_SUGGESTIONS.map(r => <option key={r} value={r}/>)}</datalist>
//           </label>
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "10px 14px" }}>
//             <span style={{ fontSize: 12, fontWeight: 700, color: "#0a1c1e" }}>Marca activa</span>
//             <Toggle on={form.active} onToggle={() => setForm(p => ({ ...p, active: !p.active }))}/>
//           </div>
//         </ModalShell>
//       )}
//       {del && <ConfirmDeleteModal title={del.name} hint={del.role} onConfirm={async () => { const ok = await remove(del.id, "Marca"); if (ok) setDel(null); }} onClose={() => setDel(null)} loading={deleting}/>}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════
//    PRESENCE SECTION
// ═══════════════════════════════════════════════ */
// type PresenceForm = Omit<Presence,"id">;
// const EMPTY_PRES: PresenceForm = { order: 0, name: "", lon: 0, lat: 0, main: false, detail: "", flag: "🌍", active: true };
// const FLAG_OPTS = ["🇦🇴","🇵🇹","🇨🇻","🇸🇹","🇲🇿","🇧🇷","🌍"];

// function PresenceSection({ showToast }: { showToast: (m: string, t?: "ok" | "err") => void }) {
//   const { items, loading, saving, deleting, save, toggle, remove } = useCrud<Presence>("presence", showToast);
//   const [modal, setModal] = useState(false); const [editItem, setEditItem] = useState<Presence | null>(null);
//   const [form, setForm] = useState<PresenceForm>(EMPTY_PRES); const [del, setDel] = useState<Presence | null>(null);
//   const set = (k: keyof PresenceForm, v: string | boolean | number) => setForm(p => ({ ...p, [k]: v }));
//   const activeCount = items.filter(p => p.active).length;
//   const openNew  = () => { setEditItem(null); setForm({ ...EMPTY_PRES, order: items.length }); setModal(true); };
//   const openEdit = (p: Presence) => { setEditItem(p); setForm({ order: p.order, name: p.name, lon: p.lon, lat: p.lat, main: p.main, detail: p.detail, flag: p.flag, active: p.active }); setModal(true); };
//   return (
//     <div>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
//         <StatCard label="Total" value={items.length} color="#095b66" bg="#e8f7f9"/>
//         <StatCard label="Activos" value={activeCount} color="#166534" bg="#dcfce7"/>
//         <StatCard label="Escritórios principais" value={items.filter(p => p.main && p.active).length} color="#0a6e5c" bg="#e0f5ef"/>
//       </div>
//       <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
//         <button onClick={openNew} style={primaryBtn}><svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>Nova Localização</button>
//       </div>
//       {loading ? <Spinner/> : items.length === 0 ? <EmptyState label="Nenhuma localização adicionada" hint="Adicione as presenças geográficas da empresa" onAdd={openNew}/> : (
//         <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
//           {items.map((p, i) => (
//             <div key={p.id} style={{ ...rowCard, opacity: p.active ? 1 : .6, borderColor: p.active ? (p.main ? "#095b66" : "#dde8ea") : "#f0d8d8" }}>
//               <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: p.active ? (p.main ? "#095b66" : "#5cb8c0") : "#e8a0a0", borderRadius: "4px 0 0 4px" }}/>
//               <div style={{ paddingLeft: 18, display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
//                 <span style={{ fontSize: 20 }}>{p.flag}</span>
//                 <div style={{ flex: 1 }}>
//                   <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 2 }}>
//                     <span style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{p.name}</span>
//                     {p.main && <span style={{ padding: "2px 6px", borderRadius: 99, fontSize: 9, fontWeight: 800, background: "#e8f7f9", color: "#095b66", letterSpacing: ".07em", textTransform: "uppercase" as const }}>Principal</span>}
//                     <StatusBadge active={p.active}/><span style={{ fontSize: 10, color: "#9bbbbe" }}>#{i+1}</span>
//                   </div>
//                   <div style={{ display: "flex", gap: 10, fontSize: 11, color: "#9bbbbe" }}>
//                     <span>lat:{p.lat.toFixed(2)}</span><span>lon:{p.lon.toFixed(2)}</span>
//                     <span style={{ color: "#6a9598", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" as const, maxWidth: 280 }}>{p.detail.split("\n")[0]}</span>
//                   </div>
//                 </div>
//               </div>
//               <div style={{ paddingRight: 4 }}><RowActions active={p.active} onToggle={() => toggle(p, "Localização")} onEdit={() => openEdit(p)} onDelete={() => setDel(p)}/></div>
//             </div>
//           ))}
//         </div>
//       )}
//       {modal && (
//         <ModalShell title={editItem ? "Editar Localização" : "Nova Localização"} subtitle="Presença Geográfica" onClose={() => { setModal(false); setEditItem(null); }}
//           footer={<><button onClick={() => { setModal(false); setEditItem(null); }} style={cancelBtn}>Cancelar</button><button onClick={async () => { const ok = await save(form, editItem?.id, "Localização"); if (ok) { setModal(false); setEditItem(null); } }} disabled={!form.name || saving} style={{ ...primaryBtn, background: form.name && !saving ? "#095b66" : "#b0c8ca", cursor: form.name && !saving ? "pointer" : "not-allowed" }}>{saving ? "A guardar…" : "Guardar Localização"}</button></>}>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 100px", gap: 12 }}>
//             <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Nome</span><input style={inpStyle} value={form.name} onChange={e => set("name", e.target.value)} placeholder="Ex: Angola · Luanda"/></label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
//               <span style={lbl}>Bandeira</span>
//               <input list="flag-list" style={inpStyle} value={form.flag} onChange={e => set("flag", e.target.value)} placeholder="🇦🇴"/>
//               <datalist id="flag-list">{FLAG_OPTS.map(f => <option key={f} value={f}/>)}</datalist>
//             </label>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 80px", gap: 12 }}>
//             <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
//               <span style={lbl}>Latitude</span>
//               <input type="number" step="0.0001" style={inpStyle} value={form.lat} onChange={e => set("lat", +e.target.value)} placeholder="-8.84"/>
//               <span style={{ fontSize: 9, color: "#9bbbbe" }}>Angola −8.84 · Portugal 38.72</span>
//             </label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
//               <span style={lbl}>Longitude</span>
//               <input type="number" step="0.0001" style={inpStyle} value={form.lon} onChange={e => set("lon", +e.target.value)} placeholder="13.23"/>
//               <span style={{ fontSize: 9, color: "#9bbbbe" }}>Angola 13.23 · Portugal −9.14</span>
//             </label>
//             <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Ordem</span><input type="number" style={inpStyle} value={form.order} onChange={e => set("order", +e.target.value)}/></label>
//           </div>
//           <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
//             <span style={lbl}>Detalhe / Morada</span>
//             <textarea style={{ ...inpStyle, minHeight: 68, resize: "vertical" }} value={form.detail} onChange={e => set("detail", e.target.value)} placeholder={"Centro de Logística de Talatona · espaço H\n(+244) 933 153 362"}/>
//             <span style={{ fontSize: 9, color: "#9bbbbe" }}>Quebras de linha preservadas no site</span>
//           </label>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "10px 14px" }}>
//               <div><div style={{ fontSize: 12, fontWeight: 700, color: "#0a1c1e" }}>Escritório principal</div><div style={{ fontSize: 10, color: "#9bbbbe" }}>Aparece ligado no mapa</div></div>
//               <Toggle on={form.main} onToggle={() => set("main", !form.main)}/>
//             </div>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "10px 14px" }}>
//               <span style={{ fontSize: 12, fontWeight: 700, color: "#0a1c1e" }}>Localização activa</span>
//               <Toggle on={form.active} onToggle={() => set("active", !form.active)}/>
//             </div>
//           </div>
//         </ModalShell>
//       )}
//       {del && <ConfirmDeleteModal title={del.name} hint={del.flag} onConfirm={async () => { const ok = await remove(del.id, "Localização"); if (ok) setDel(null); }} onClose={() => setDel(null)} loading={deleting}/>}
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════
//    OVERVIEW + NAV
// ═══════════════════════════════════════════════ */
// const NAV_ITEMS: { key: Section; label: string; icon: React.ReactNode; desc: string; color: string; bg: string }[] = [
//   { key: "overview", label: "Dashboard",   desc: "",                                       color: "#095b66", bg: "#e8f7f9", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg> },
//   { key: "hero",     label: "Hero Slides", desc: "Slides rotativos da homepage",           color: "#095b66", bg: "#e8f7f9", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><rect x="2" y="4" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M6 8h4M8 6v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
//   { key: "products", label: "Produtos",    desc: "Catálogo de produtos e serviços",        color: "#0a6e5c", bg: "#e0f5ef", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M2 5l6-3 6 3v6l-6 3-6-3V5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 2v10M2 5l6 3 6-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg> },
//   { key: "services", label: "Serviços",    desc: "Cards da secção «O que fazemos»",        color: "#064e58", bg: "#e5f4f6", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.4"/><path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
//   { key: "clients",  label: "Clientes",    desc: "Empresas que confiam em nós",            color: "#166534", bg: "#dcfce7", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M2 13c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M11 7c1.1 0 2 .9 2 2s-.9 2-2 2M13 13c0-1.1-.5-2.1-1.3-2.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
//   { key: "brands",   label: "Marcas",      desc: "Fabricantes e parceiros estratégicos",  color: "#7a5200", bg: "#fff7e0", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M8 2l1.5 4H14l-3.5 2.5 1.5 4L8 10l-4 2.5 1.5-4L2 6h4.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
//   { key: "presence", label: "Presença",    desc: "Localizações no mapa e detalhes",       color: "#991b1b", bg: "#fce8e8", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M8 2C5.2 2 3 4.2 3 7c0 3.8 5 9 5 9s5-5.2 5-9c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.4"/></svg> },
// ];

// const SECTION_TITLES: Record<Section, string> = { overview: "Dashboard", hero: "Hero Slides", products: "Produtos", services: "Serviços", clients: "Clientes", brands: "Marcas / Parceiros", presence: "Presença Geográfica" };
// const SECTION_HINTS:  Record<Section, string> = {
//   overview: "Painel de gestão de conteúdo do site MultiEnergia",
//   hero:     "Slides rotativos da secção Hero da homepage · Intervalo de 6s",
//   products: "Produtos e serviços apresentados na secção de soluções",
//   services: "Cards da secção «O que fazemos» — grid de 5 colunas no site",
//   clients:  "Chips de clientes que aparecem na secção «Confiam em Nós»",
//   brands:   "Cards de marcas da secção «Marcas que Representamos»",
//   presence: "Pontos no mapa interactivo e cards de localização",
// };

// function OverviewSection({ onNavigate }: { onNavigate: (s: Section) => void }) {
//   return (
//     <div>
//       <p style={{ fontSize: 13, color: "#6a9598", marginBottom: 22, lineHeight: 1.7 }}>Selecciona uma secção para gerir o conteúdo do site.</p>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 11 }}>
//         {NAV_ITEMS.filter(n => n.key !== "overview").map(s => (
//           <button key={s.key} onClick={() => onNavigate(s.key)} style={{ background: "#fff", border: "1.5px solid #e8f0f0", borderRadius: 13, padding: "20px", textAlign: "left" as const, cursor: "pointer", fontFamily: "'Montserrat',sans-serif", transition: "all .2s", display: "flex", flexDirection: "column", gap: 11 }}>
//             <div style={{ width: 42, height: 42, borderRadius: 10, background: s.bg, color: s.color, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</div>
//             <div>
//               <div style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e", marginBottom: 3 }}>{s.label}</div>
//               <div style={{ fontSize: 11, color: "#9bbbbe", lineHeight: 1.5 }}>{s.desc}</div>
//             </div>
//             <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: s.color }}>
//               Gerir conteúdo <svg viewBox="0 0 12 12" fill="none" width="9"><path d="M2 6h8M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
//             </div>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════
//    MAIN DASHBOARD
// ═══════════════════════════════════════════════ */
// export default function AdminDashboard() {
//   const [section,   setSection]   = useState<Section>("overview");
//   const [toast,     setToast]     = useState<{ msg: string; type: "ok" | "err" } | null>(null);
//   const [collapsed, setCollapsed] = useState(false);

//   const showToast = useCallback((msg: string, type: "ok" | "err" = "ok") => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 3200);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         body { font-family: 'Montserrat', sans-serif; background: #f0f5f5; }
//         @keyframes spin      { to { transform: rotate(360deg); } }
//         @keyframes toastIn   { from { opacity:0; transform:translateY(14px) scale(.97); } to { opacity:1; transform:none; } }
//         @keyframes fadeSlide { from { opacity:0; transform:translateX(8px); } to { opacity:1; transform:none; } }
//         ::-webkit-scrollbar       { width: 4px; }
//         ::-webkit-scrollbar-thumb { background: #c8dada; border-radius: 4px; }
//         button:focus-visible { outline: 2px solid #095b66; outline-offset: 2px; }
//       `}</style>

//       <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Montserrat',sans-serif" }}>

//         {/* ── SIDEBAR ── */}
//         <aside style={{ width: collapsed ? 58 : 210, background: "#0a1c1e", display: "flex", flexDirection: "column", flexShrink: 0, transition: "width .25s cubic-bezier(.4,0,.2,1)", overflow: "hidden", position: "sticky", top: 0, height: "100vh", zIndex: 100 }}>
//           <div style={{ padding: "18px 12px 14px", borderBottom: "1px solid rgba(255,255,255,.07)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
//             {!collapsed && (
//               <div style={{ display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
//                 <div style={{ width: 26, height: 26, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                   <svg viewBox="0 0 16 16" fill="none" width="12"><path d="M8 2l1.5 4.5H14L10.5 9l1.5 4.5L8 11 4 13.5 5.5 9 2 6.5h4.5L8 2z" fill="#fff"/></svg>
//                 </div>
//                 <span style={{ fontSize: 12, fontWeight: 900, color: "#fff", whiteSpace: "nowrap" }}>MultiEnergia</span>
//               </div>
//             )}
//             <button onClick={() => setCollapsed(c => !c)} style={{ width: 24, height: 24, borderRadius: 5, border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.05)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//               <svg viewBox="0 0 12 12" fill="none" width="9" style={{ transform: collapsed ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
//                 <path d="M8 2L4 6l4 4" stroke="rgba(255,255,255,.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//           </div>

//           <nav style={{ flex: 1, padding: "8px 7px", display: "flex", flexDirection: "column", gap: 1, overflowY: "auto" }}>
//             {NAV_ITEMS.map(item => {
//               const active = section === item.key;
//               return (
//                 <button key={item.key} onClick={() => setSection(item.key)} title={collapsed ? item.label : undefined} style={{ display: "flex", alignItems: "center", gap: 8, padding: collapsed ? "8px" : "8px 9px", borderRadius: 6, border: "none", background: active ? "#095b66" : "transparent", color: active ? "#fff" : "rgba(255,255,255,.42)", cursor: "pointer", fontFamily: "'Montserrat',sans-serif", fontSize: 11, fontWeight: active ? 700 : 500, transition: "all .15s", justifyContent: collapsed ? "center" : "flex-start", whiteSpace: "nowrap" as const, overflow: "hidden" }}>
//                   <span style={{ flexShrink: 0 }}>{item.icon}</span>
//                   {!collapsed && item.label}
//                   {active && !collapsed && <div style={{ marginLeft: "auto", width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,.7)" }}/>}
//                 </button>
//               );
//             })}
//           </nav>

//           {!collapsed && (
//             <div style={{ padding: "10px 11px 16px", borderTop: "1px solid rgba(255,255,255,.07)" }}>
//               <a href="/" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,.28)", textDecoration: "none" }}>
//                 <svg viewBox="0 0 12 12" fill="none" width="9"><path d="M9 7v3H1V2h3M7 1h4v4M5 7l6-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                 Ver site
//               </a>
//             </div>
//           )}
//         </aside>

//         {/* ── MAIN ── */}
//         <main style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
//           {/* Top bar */}
//           <div style={{ background: "#fff", borderBottom: "1.5px solid #e4ecec", padding: "0 26px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54, flexShrink: 0 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
//               {section !== "overview" && (
//                 <>
//                   <button onClick={() => setSection("overview")} style={{ fontSize: 11, fontWeight: 600, color: "#9bbbbe", background: "none", border: "none", cursor: "pointer", fontFamily: "'Montserrat',sans-serif", padding: 0 }}>
//                     Dashboard
//                   </button>
//                   <svg viewBox="0 0 8 8" fill="none" width="6"><path d="M2 1l3 3-3 3" stroke="#c8d8da" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                 </>
//               )}
//               <span style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{SECTION_TITLES[section]}</span>
//             </div>
//             <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
//               <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }}/>
//               <span style={{ fontSize: 10, color: "#9bbbbe", fontWeight: 600 }}>Online</span>
//             </div>
//           </div>

//           {/* Content */}
//           <div key={section} style={{ flex: 1, padding: "24px 26px", overflowY: "auto", animation: "fadeSlide .22s ease both" }}>
//             <div style={{ marginBottom: 20 }}>
//               <h1 style={{ fontSize: 19, fontWeight: 900, color: "#0a1c1e", marginBottom: 3 }}>{SECTION_TITLES[section]}</h1>
//               <p style={{ fontSize: 12, color: "#9bbbbe" }}>{SECTION_HINTS[section]}</p>
//             </div>
//             {section === "overview"  && <OverviewSection onNavigate={setSection}/>}
//             {section === "hero"      && <HeroSection showToast={showToast}/>}
//             {section === "products"  && <ProductsSection />}
//             {section === "services"  && <ServicesSection showToast={showToast}/>}
//             {section === "clients"   && <ClientsSection showToast={showToast}/>}
//             {section === "brands"    && <BrandsSection showToast={showToast}/>}
//             {section === "presence"  && <PresenceSection showToast={showToast}/>}
//           </div>
//         </main>
//       </div>

//       {toast && <Toast msg={toast.msg} type={toast.type}/>}
//     </>
//   );
// }





"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import ProductsSection from "../components/ProductsSection";
import ProductsAdmin from "./products/page";
import AdminCategories from "./category/page";
// ← CORRIGIDO: era ProductsSection

/* ═══════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════ */
interface HeroSlide {
  id: number; order: number; tag: string;
  line1: string; line2: string; line3: string;
  sub: string; image: string | null; active: boolean;
}
interface Product {
  id: number; order: number; slug: string; name: string;
  desc: string; color: string; lightColor: string;
  iconIndex: number; active: boolean;
  specs: string[]; brands: string[];
}
interface Service { id: number; order: number; title: string; short: string; iconIndex: number; active: boolean; }
interface Client  { id: number; order: number; name: string; active: boolean; }
interface Brand   { id: number; order: number; name: string; role: string; active: boolean; }
interface Presence { id: number; order: number; name: string; lon: number; lat: number; main: boolean; detail: string; flag: string; active: boolean; }

// type Section = "overview" | "hero" | "products" | "services" | "clients" | "brands" | "presence";

type Section = "overview" | "hero" | "categories" | "services" | "clients" | "brands" | "presence" | "products";

/* ═══════════════════════════════════════════════
   SHARED STYLES
═══════════════════════════════════════════════ */
const inpStyle: React.CSSProperties = {
  width: "100%", background: "#f8fbfc", border: "1.5px solid #dde8ea",
  borderRadius: 8, color: "#1a2c2e", padding: "10px 12px",
  fontFamily: "'Montserrat',sans-serif", fontSize: 13, outline: "none",
};
const lbl: React.CSSProperties = {
  fontSize: 10, fontWeight: 700, color: "#095b66",
  letterSpacing: ".12em", textTransform: "uppercase" as const,
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
  padding: "13px 14px 13px 0", display: "flex", alignItems: "center",
  transition: "all .2s", position: "relative", overflow: "hidden",
};

/* ═══════════════════════════════════════════════
   MICRO COMPONENTS
═══════════════════════════════════════════════ */
function Toast({ msg, type }: { msg: string; type: "ok" | "err" }) {
  return (
    <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999, animation: "toastIn .3s ease both" }}>
      <div style={{ background: type === "ok" ? "#095b66" : "#c0392b", color: "#fff", borderRadius: 10, padding: "12px 20px", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 10, boxShadow: "0 8px 32px rgba(0,0,0,.22)" }}>
        {type === "ok"
          ? <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="8" r="6" stroke="#fff" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
          : <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="8" r="6" stroke="#fff" strokeWidth="1.5"/><path d="M6 6l4 4M10 6l-4 4" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/></svg>}
        {msg}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <div style={{ padding: "52px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
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
    <div style={{ background: "#fff", border: "1.5px solid #e8f0f0", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ width: 38, height: 38, borderRadius: 10, background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 18, fontWeight: 900, color }}>{value}</span>
      </div>
      <span style={{ fontSize: 11, color: "#9bbbbe", fontWeight: 600 }}>{label}</span>
    </div>
  );
}

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} style={{ width: 48, height: 26, borderRadius: 99, border: "none", cursor: "pointer", background: on ? "#095b66" : "#dde8ea", position: "relative", transition: "background .2s", flexShrink: 0 }}>
      <div style={{ position: "absolute", top: 3, left: on ? 24 : 3, width: 20, height: 20, borderRadius: "50%", background: "#fff", transition: "left .2s", boxShadow: "0 1px 4px rgba(0,0,0,.18)" }}/>
    </button>
  );
}

function StatusBadge({ active }: { active: boolean }) {
  return (
    <span style={{ padding: "2px 7px", borderRadius: 99, fontSize: 9, fontWeight: 800, letterSpacing: ".07em", textTransform: "uppercase" as const, background: active ? "#dcfce7" : "#fce8e8", color: active ? "#166534" : "#991b1b" }}>
      {active ? "Activo" : "Inactivo"}
    </span>
  );
}

function EmptyState({ label, hint, onAdd }: { label: string; hint: string; onAdd: () => void }) {
  return (
    <div style={{ padding: "52px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      <div style={{ width: 54, height: 54, borderRadius: 13, background: "#f0f9fa", border: "2px dashed #c8e8eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg viewBox="0 0 28 28" fill="none" width="22"><rect x="4" y="7" width="20" height="14" rx="3" stroke="#095b66" strokeWidth="1.6"/><path d="M14 10v8M10 14h8" stroke="#095b66" strokeWidth="1.6" strokeLinecap="round"/></svg>
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

function ConfirmDeleteModal({ title, hint, onConfirm, onClose, loading }: { title: string; hint?: string; onConfirm: () => void; onClose: () => void; loading: boolean }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.72)", backdropFilter: "blur(4px)" }}/>
      <div style={{ position: "relative", zIndex: 1, background: "#fff", borderRadius: 16, padding: "28px", maxWidth: 380, width: "100%", boxShadow: "0 24px 64px rgba(6,20,22,.28)" }}>
        <div style={{ width: 42, height: 42, borderRadius: 10, background: "#fce8e8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <svg viewBox="0 0 20 20" fill="none" width="17"><path d="M10 7v4M10 15h.01M9 3l-7 13h16L9 3z" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 style={{ fontSize: 16, fontWeight: 900, color: "#0a1c1e", marginBottom: 6 }}>Eliminar?</h3>
        <p style={{ fontSize: 12, color: "#4a7275", marginBottom: 10 }}>Esta acção é permanente e não pode ser desfeita.</p>
        <div style={{ background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 8, padding: "9px 12px", marginBottom: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{title}</div>
          {hint && <div style={{ fontSize: 11, color: "#9bbbbe", marginTop: 2 }}>{hint}</div>}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={onClose} style={{ ...cancelBtn, flex: 1 }}>Cancelar</button>
          <button onClick={onConfirm} disabled={loading} style={{ flex: 1, padding: "10px", borderRadius: 8, border: "none", background: loading ? "#e8a0a0" : "#c0392b", fontSize: 12, fontWeight: 700, color: "#fff", cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Montserrat',sans-serif" }}>
            {loading ? "A eliminar…" : "Eliminar"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ModalShell({ title, subtitle, onClose, children, footer, wide = false }: { title: string; subtitle: string; onClose: () => void; children: React.ReactNode; footer: React.ReactNode; wide?: boolean }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(6,20,22,.72)", backdropFilter: "blur(4px)" }}/>
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: wide ? 820 : 680, maxHeight: "92vh", overflowY: "auto", background: "#fff", borderRadius: 20, boxShadow: "0 32px 96px rgba(6,20,22,.35)" }}>
        <div style={{ padding: "22px 26px 16px", borderBottom: "1.5px solid #edf2f2", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" as const, color: "#095b66", marginBottom: 2 }}>{subtitle}</p>
            <h2 style={{ fontSize: 16, fontWeight: 900, color: "#0a1c1e" }}>{title}</h2>
          </div>
          <button onClick={onClose} style={iconBtn}>
            <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M4 4l8 8M12 4l-8 8" stroke="#4a7275" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div style={{ padding: "20px 26px", display: "flex", flexDirection: "column", gap: 14 }}>{children}</div>
        <div style={{ padding: "12px 26px 20px", borderTop: "1.5px solid #edf2f2", display: "flex", justifyContent: "flex-end", gap: 10 }}>{footer}</div>
      </div>
    </div>
  );
}

function RowActions({ active, onToggle, onEdit, onDelete }: { active: boolean; onToggle: () => void; onEdit: () => void; onDelete: () => void }) {
  return (
    <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
      <button onClick={onToggle} style={{ ...iconBtn, background: active ? "#f0fdf4" : "#fef2f2", borderColor: "#dde8ea" }}>
        {active
          ? <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#22c55e" strokeWidth="1.8"/><path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round"/></svg>
          : <svg viewBox="0 0 16 16" fill="none" width="13"><circle cx="8" cy="8" r="6" stroke="#ef4444" strokeWidth="1.8"/><path d="M6 6l4 4M10 6l-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>}
      </button>
      <button onClick={onEdit} style={iconBtn}>
        <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M11 2l3 3-8 8H3v-3l8-8z" stroke="#095b66" strokeWidth="1.6" strokeLinejoin="round"/></svg>
      </button>
      <button onClick={onDelete} style={{ ...iconBtn, background: "#fff5f5", borderColor: "#fce8e8" }}>
        <svg viewBox="0 0 16 16" fill="none" width="13"><path d="M3 4h10M6 4V2h4v2M5 4v9h6V4" stroke="#c0392b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   IMAGE UPLOADER COMPONENT
═══════════════════════════════════════════════ */
function ImageUploader({
  value, onChange, onUploadStart, onUploadEnd, showToast,
}: {
  value: string | null;
  onChange: (url: string | null) => void;
  onUploadStart?: () => void;
  onUploadEnd?: () => void;
  showToast: (m: string, t?: "ok" | "err") => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const doUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) { showToast("Apenas imagens são permitidas", "err"); return; }
    setUploading(true); onUploadStart?.();
    try {
      const fd = new FormData(); fd.append("file", file);
      const res = await fetch("/api/cms/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.url) { onChange(data.url); showToast("Imagem carregada com sucesso"); }
      else showToast(data.error || "Erro no upload", "err");
    } catch { showToast("Erro ao fazer upload", "err"); }
    finally { setUploading(false); onUploadEnd?.(); if (fileRef.current) fileRef.current.value = ""; }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={lbl}>Imagem de Fundo</span>
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <div
          style={{ width: 160, height: 100, borderRadius: 10, overflow: "hidden", flexShrink: 0, border: dragOver ? "2px dashed #095b66" : "1.5px solid #dde8ea", background: dragOver ? "#e8f7f9" : (value ? "#000" : "#f8fbfc"), position: "relative", transition: "all .2s", cursor: "pointer" }}
          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files?.[0]; if (f) doUpload(f); }}
          onClick={() => !uploading && fileRef.current?.click()}
        >
          {value ? (
            <>
              <img src={value} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: uploading ? .4 : 1 }}/>
              <button onClick={e => { e.stopPropagation(); onChange(null); }}
                style={{ position: "absolute", top: 5, right: 5, width: 20, height: 20, borderRadius: "50%", background: "rgba(0,0,0,.65)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                <svg viewBox="0 0 10 10" fill="none" width="8"><path d="M2 2l6 6M8 2l-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </>
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <svg viewBox="0 0 24 24" fill="none" width="22"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke={dragOver ? "#095b66" : "#c8d8da"} strokeWidth="1.6"/><circle cx="9" cy="11" r="2" fill={dragOver ? "#095b66" : "#c8d8da"}/><path d="M3 16l4-4 3 3 4-5 7 7" stroke={dragOver ? "#095b66" : "#c8d8da"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span style={{ fontSize: 9, color: dragOver ? "#095b66" : "#c8d8da", fontWeight: 700, textAlign: "center", lineHeight: 1.4 }}>{dragOver ? "Largar aqui" : "Clique ou\narraste"}</span>
            </div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, minWidth: 0 }}>
          <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => { const f = e.target.files?.[0]; if (f) doUpload(f); }}/>
          <button onClick={() => fileRef.current?.click()} disabled={uploading} style={{ ...primaryBtn, background: uploading ? "#b0c8ca" : "#095b66", cursor: uploading ? "not-allowed" : "pointer", fontSize: 11, padding: "8px 14px" }}>
            {uploading ? "A fazer upload…" : value ? "Trocar imagem" : "Escolher imagem"}
          </button>
          {value && <div style={{ fontSize: 10, color: "#6a9598", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 6, padding: "6px 9px", fontFamily: "monospace", wordBreak: "break-all" as const }}>{value}</div>}
          <div style={{ fontSize: 10, color: "#b0c8ca", lineHeight: 1.6 }}>JPG, PNG ou WEBP · Recomendado <strong>1920×1080</strong></div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   GENERIC CRUD HOOK
═══════════════════════════════════════════════ */
function useCrud<T extends { id: number; active: boolean }>(
  endpoint: string,
  showToast: (m: string, t?: "ok" | "err") => void
) {
  const [items, setItems]       = useState<T[]>([]);
  const [loading, setLoading]   = useState(true);
  const [saving, setSaving]     = useState(false);
  const [deleting, setDeleting] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try { const r = await fetch(`/api/cms/${endpoint}?all=1`); setItems(await r.json()); }
    catch { showToast("Erro ao carregar", "err"); }
    finally { setLoading(false); }
  }, [endpoint, showToast]);

  useEffect(() => { load(); }, [load]);

  const save = async (data: Omit<T, "id">, id?: number, label = "Item") => {
    setSaving(true);
    try {
      if (id) await fetch(`/api/cms/${endpoint}/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      else    await fetch(`/api/cms/${endpoint}`,       { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      showToast(id ? `${label} actualizado` : `${label} criado`);
      await load(); return true;
    } catch { showToast("Erro ao guardar", "err"); return false; }
    finally { setSaving(false); }
  };

  const toggle = async (item: T, label = "Item") => {
    try {
      await fetch(`/api/cms/${endpoint}/${item.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !item.active }) });
      showToast(item.active ? `${label} desactivado` : `${label} activado`);
      await load();
    } catch { showToast("Erro ao actualizar", "err"); }
  };

  const remove = async (id: number, label = "Item") => {
    setDeleting(true);
    try {
      await fetch(`/api/cms/${endpoint}/${id}`, { method: "DELETE" });
      showToast(`${label} eliminado`); await load(); return true;
    } catch { showToast("Erro ao eliminar", "err"); return false; }
    finally { setDeleting(false); }
  };

  return { items, loading, saving, deleting, load, save, toggle, remove };
}

/* ═══════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════ */
type HeroForm = Omit<HeroSlide, "id">;
const EMPTY_HERO: HeroForm = { order: 0, tag: "", line1: "", line2: "", line3: "", sub: "", image: null, active: true };

function HeroPreview({ slide }: { slide: HeroForm }) {
  return (
    <div style={{ position: "relative", borderRadius: 9, overflow: "hidden", minHeight: 100 }}>
      {slide.image ? (
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={slide.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(9,91,102,.82) 0%, rgba(6,60,68,.65) 100%)" }}/>
        </div>
      ) : (
        <div style={{ position: "absolute", inset: 0, background: "#095b66" }}/>
      )}
      <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", background: "rgba(255,255,255,.04)", clipPath: "polygon(15% 0,100% 0,100% 100%,0% 100%)" }}/>
      <div style={{ position: "relative", zIndex: 1, padding: "14px 16px 0" }}>
        <div style={{ display: "inline-flex", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 99, padding: "2px 7px", fontSize: 7, fontWeight: 700, textTransform: "uppercase" as const, color: "rgba(255,255,255,.85)", marginBottom: 6 }}>
          {slide.tag || "Tag"}
        </div>
        <div style={{ fontWeight: 900, lineHeight: .95, color: "#fff", marginBottom: 5 }}>
          <div style={{ fontSize: 12 }}>{slide.line1 || "Linha 1"}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>{slide.line2 || "Linha 2"}</div>
          <div style={{ fontSize: 12 }}>{slide.line3 || "Linha 3"}</div>
        </div>
        <p style={{ fontSize: 8, lineHeight: 1.6, color: "rgba(255,255,255,.65)", maxWidth: 200, marginBottom: 8 }}>{slide.sub || "Subtítulo…"}</p>
      </div>
      <div style={{ height: 10, background: "#fff", clipPath: "ellipse(55% 100% at 50% 100%)", position: "relative", zIndex: 1 }}/>
    </div>
  );
}

function HeroSection({ showToast }: { showToast: (m: string, t?: "ok" | "err") => void }) {
  const { items, loading, saving, deleting, save, toggle, remove } = useCrud<HeroSlide>("hero-slides", showToast);
  const [modal, setModal]       = useState(false);
  const [editItem, setEditItem] = useState<HeroSlide | null>(null);
  const [form, setForm]         = useState<HeroForm>(EMPTY_HERO);
  const [del, setDel]           = useState<HeroSlide | null>(null);
  const [uploadBusy, setUploadBusy] = useState(false);

  const set = (k: keyof HeroForm, v: string | boolean | number | null) => setForm(p => ({ ...p, [k]: v }));
  const valid = form.tag && form.line1 && form.line2 && form.line3 && form.sub;
  const activeCount = items.filter(s => s.active).length;

  const openNew  = () => { setEditItem(null); setForm({ ...EMPTY_HERO, order: items.length }); setModal(true); };
  const openEdit = (s: HeroSlide) => { setEditItem(s); setForm({ order: s.order, tag: s.tag, line1: s.line1, line2: s.line2, line3: s.line3, sub: s.sub, image: s.image, active: s.active }); setModal(true); };

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
        <StatCard label="Total de slides"  value={items.length}               color="#095b66" bg="#e8f7f9"/>
        <StatCard label="Slides activos"   value={activeCount}                 color="#166534" bg="#dcfce7"/>
        <StatCard label="Slides inactivos" value={items.length - activeCount}  color="#991b1b" bg="#fce8e8"/>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
        <button onClick={openNew} style={primaryBtn}>
          <svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
          Novo Slide
        </button>
      </div>
      {loading ? <Spinner/> : items.length === 0 ? (
        <EmptyState label="Nenhum slide criado" hint="Crie o primeiro slide do Hero" onAdd={openNew}/>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {items.map((s, i) => (
            <div key={s.id} style={{ ...rowCard, opacity: s.active ? 1 : .6, borderColor: s.active ? "#dde8ea" : "#f0d8d8" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: s.active ? "#095b66" : "#e8a0a0", borderRadius: "4px 0 0 4px" }}/>
              <div style={{ paddingLeft: 14, flexShrink: 0 }}>
                {s.image ? (
                  <div style={{ width: 62, height: 42, borderRadius: 7, overflow: "hidden", border: "1.5px solid #dde8ea" }}>
                    <img src={s.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                  </div>
                ) : (
                  <div style={{ width: 62, height: 42, borderRadius: 7, background: "#e8f7f9", border: "1.5px dashed #b8dde4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
                    <svg viewBox="0 0 16 16" fill="none" width="13"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#9bbbbe" strokeWidth="1.4"/><circle cx="6" cy="7" r="1.2" fill="#9bbbbe"/><path d="M2 11l3-3 2 2 3-4 4 5" stroke="#9bbbbe" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ fontSize: 7, color: "#c8d8da", fontWeight: 700 }}>Sem imagem</span>
                  </div>
                )}
              </div>
              <div style={{ paddingLeft: 12, display: "flex", flexDirection: "column", gap: 3, flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ background: "rgba(9,91,102,.08)", border: "1px solid rgba(9,91,102,.15)", borderRadius: 99, padding: "2px 8px", fontSize: 10, fontWeight: 700, color: "#095b66" }}>{s.tag}</span>
                  <StatusBadge active={s.active}/>
                  <span style={{ fontSize: 10, color: "#9bbbbe" }}>#{i + 1}</span>
                  {s.image && <span style={{ fontSize: 9, color: "#22c55e", fontWeight: 700, background: "#f0fdf4", borderRadius: 4, padding: "1px 5px" }}>📷 com imagem</span>}
                </div>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap" as const }}>
                  <span style={{ fontSize: 14, fontWeight: 900, color: "#0a1c1e" }}>{s.line1}</span>
                  <span style={{ fontSize: 14, fontWeight: 900, color: "rgba(9,91,102,.35)" }}>{s.line2}</span>
                  <span style={{ fontSize: 14, fontWeight: 900, color: "#0a1c1e" }}>{s.line3}</span>
                </div>
                <p style={{ fontSize: 11, color: "#6a9598", margin: 0, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" as const }}>{s.sub}</p>
              </div>
              <div style={{ paddingRight: 4 }}>
                <RowActions active={s.active} onToggle={() => toggle(s, "Slide")} onEdit={() => openEdit(s)} onDelete={() => setDel(s)}/>
              </div>
            </div>
          ))}
        </div>
      )}
      {modal && (
        <ModalShell wide title={editItem ? "Editar Slide" : "Novo Slide"} subtitle="Hero Slides" onClose={() => { setModal(false); setEditItem(null); }}
          footer={
            <>
              <button onClick={() => { setModal(false); setEditItem(null); }} style={cancelBtn}>Cancelar</button>
              <button onClick={async () => { if (!valid || uploadBusy) return; const ok = await save(form, editItem?.id, "Slide"); if (ok) { setModal(false); setEditItem(null); } }} disabled={!valid || saving || uploadBusy}
                style={{ ...primaryBtn, background: valid && !saving && !uploadBusy ? "#095b66" : "#b0c8ca", cursor: valid && !saving && !uploadBusy ? "pointer" : "not-allowed" }}>
                {saving ? "A guardar…" : uploadBusy ? "Aguardar upload…" : "Guardar Slide"}
              </button>
            </>
          }>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {([ ["tag","Tag / Badge","Ex: Eficiência · Inovação"], ["line1","Linha 1","Ex: Energia que"], ["line2","Linha 2 (esmaecida)","Ex: transforma"], ["line3","Linha 3","Ex: Angola"] ] as [keyof HeroForm, string, string][]).map(([k, l, h]) => (
              <label key={k} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <span style={lbl}>{l}</span>
                <input style={inpStyle} value={form[k] as string} onChange={e => set(k, e.target.value)} placeholder={h}/>
              </label>
            ))}
            <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={lbl}>Ordem</span>
              <input type="number" style={{ ...inpStyle, width: 80 }} value={form.order} onChange={e => set("order", +e.target.value)}/>
            </label>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <span style={lbl}>Subtítulo</span>
            <textarea value={form.sub} onChange={e => set("sub", e.target.value)} rows={2} style={{ ...inpStyle, resize: "vertical" }} placeholder="Frase descritiva…"/>
          </label>
          <div style={{ background: "#f8fbfc", border: "1.5px solid #e4ecec", borderRadius: 12, padding: "16px" }}>
            <ImageUploader value={form.image} onChange={url => set("image", url)} onUploadStart={() => setUploadBusy(true)} onUploadEnd={() => setUploadBusy(false)} showToast={showToast}/>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "10px 14px" }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#0a1c1e" }}>Slide activo</div>
                <div style={{ fontSize: 10, color: "#9bbbbe", marginTop: 2 }}>Quando inactivo não aparece no site</div>
              </div>
              <Toggle on={form.active} onToggle={() => set("active", !form.active)}/>
            </div>
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, color: "#9bbbbe", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 5 }}>Pré-visualização</p>
              <HeroPreview slide={form}/>
            </div>
          </div>
        </ModalShell>
      )}
      {del && <ConfirmDeleteModal title={`${del.line1} ${del.line2} ${del.line3}`} hint={del.tag} onConfirm={async () => { const ok = await remove(del.id, "Slide"); if (ok) setDel(null); }} onClose={() => setDel(null)} loading={deleting}/>}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SERVICES SECTION
═══════════════════════════════════════════════ */
const SVC_ICONS = ["0—Quadros Elétricos","1—Solar+Armazenamento","2—Energia Crítica","3—SPDA","4—Mobilidade Elétrica","5—Armários de Passeio","6—Auditoria Energética","7—Postos de Transformação","8—Telecom","9—SATCOM"];
const SVC_EMOJI = ["⚡","☀️","🔋","⛈️","🚗","🗄️","📊","🏭","🌐","📡"];
type ServiceForm = Omit<Service,"id">;
const EMPTY_SVC: ServiceForm = { order: 0, title: "", short: "", iconIndex: 0, active: true };

function ServicesSection({ showToast }: { showToast: (m: string, t?: "ok" | "err") => void }) {
  const { items, loading, saving, deleting, save, toggle, remove } = useCrud<Service>("services", showToast);
  const [modal, setModal] = useState(false); const [editItem, setEditItem] = useState<Service | null>(null);
  const [form, setForm] = useState<ServiceForm>(EMPTY_SVC); const [del, setDel] = useState<Service | null>(null);
  const set = (k: keyof ServiceForm, v: string | boolean | number) => setForm(p => ({ ...p, [k]: v }));
  const activeCount = items.filter(s => s.active).length;
  const openNew  = () => { setEditItem(null); setForm({ ...EMPTY_SVC, order: items.length }); setModal(true); };
  const openEdit = (s: Service) => { setEditItem(s); setForm({ order: s.order, title: s.title, short: s.short, iconIndex: s.iconIndex, active: s.active }); setModal(true); };
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
        <StatCard label="Total" value={items.length} color="#095b66" bg="#e8f7f9"/>
        <StatCard label="Activos" value={activeCount} color="#166534" bg="#dcfce7"/>
        <StatCard label="Inactivos" value={items.length - activeCount} color="#991b1b" bg="#fce8e8"/>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
        <button onClick={openNew} style={primaryBtn}><svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>Novo Serviço</button>
      </div>
      {loading ? <Spinner/> : items.length === 0 ? <EmptyState label="Nenhum serviço criado" hint="Adicione os serviços da empresa" onAdd={openNew}/> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {items.map((s, i) => (
            <div key={s.id} style={{ ...rowCard, opacity: s.active ? 1 : .6, borderColor: s.active ? "#dde8ea" : "#f0d8d8" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: s.active ? "#095b66" : "#e8a0a0", borderRadius: "4px 0 0 4px" }}/>
              <div style={{ paddingLeft: 14, display: "flex", alignItems: "center", gap: 10, width: 52 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: "#e8f7f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{SVC_EMOJI[s.iconIndex] || "⚡"}</div>
              </div>
              <div style={{ paddingLeft: 8, display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{s.title}</span>
                  <StatusBadge active={s.active}/><span style={{ fontSize: 10, color: "#9bbbbe" }}>#{i+1}</span>
                </div>
                <p style={{ fontSize: 11, color: "#6a9598", margin: 0, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" as const }}>{s.short}</p>
              </div>
              <div style={{ paddingRight: 4 }}><RowActions active={s.active} onToggle={() => toggle(s, "Serviço")} onEdit={() => openEdit(s)} onDelete={() => setDel(s)}/></div>
            </div>
          ))}
        </div>
      )}
      {modal && (
        <ModalShell title={editItem ? "Editar Serviço" : "Novo Serviço"} subtitle="Serviços" onClose={() => { setModal(false); setEditItem(null); }}
          footer={<><button onClick={() => { setModal(false); setEditItem(null); }} style={cancelBtn}>Cancelar</button><button onClick={async () => { const ok = await save(form, editItem?.id, "Serviço"); if (ok) { setModal(false); setEditItem(null); } }} disabled={!form.title || saving} style={{ ...primaryBtn, background: form.title && !saving ? "#095b66" : "#b0c8ca", cursor: form.title && !saving ? "pointer" : "not-allowed" }}>{saving ? "A guardar…" : "Guardar Serviço"}</button></>}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 100px", gap: 12 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Título</span><input style={inpStyle} value={form.title} onChange={e => set("title", e.target.value)} placeholder="Ex: Quadros Elétricos"/></label>
            <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Ordem</span><input type="number" style={inpStyle} value={form.order} onChange={e => set("order", +e.target.value)}/></label>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Descrição Curta</span><textarea style={{ ...inpStyle, minHeight: 72, resize: "vertical" }} value={form.short} onChange={e => set("short", e.target.value)} placeholder="Breve descrição que aparece no card…"/></label>
          <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <span style={lbl}>Ícone</span>
            <select style={{ ...inpStyle, appearance: "none" as const, cursor: "pointer" }} value={form.iconIndex} onChange={e => set("iconIndex", +e.target.value)}>
              {SVC_ICONS.map((o, i) => <option key={i} value={i}>{SVC_EMOJI[i]} {o}</option>)}
            </select>
          </label>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "10px 14px" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#0a1c1e" }}>Serviço activo</span>
            <Toggle on={form.active} onToggle={() => set("active", !form.active)}/>
          </div>
        </ModalShell>
      )}
      {del && <ConfirmDeleteModal title={del.title} onConfirm={async () => { const ok = await remove(del.id, "Serviço"); if (ok) setDel(null); }} onClose={() => setDel(null)} loading={deleting}/>}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CLIENTS SECTION
═══════════════════════════════════════════════ */
function ClientsSection({ showToast }: { showToast: (m: string, t?: "ok" | "err") => void }) {
  const { items, loading, saving, deleting, save, toggle, remove, load } = useCrud<Client>("clients", showToast);
  const [modal, setModal] = useState(false); const [editItem, setEditItem] = useState<Client | null>(null);
  const [cName, setCName] = useState(""); const [cOrder, setCOrder] = useState(0); const [cActive, setCActive] = useState(true);
  const [del, setDel] = useState<Client | null>(null);
  const [bulkModal, setBulkModal] = useState(false); const [bulkText, setBulkText] = useState(""); const [bulkSaving, setBulkSaving] = useState(false);
  const activeCount = items.filter(c => c.active).length;
  const openNew  = () => { setEditItem(null); setCName(""); setCOrder(items.length); setCActive(true); setModal(true); };
  const openEdit = (c: Client) => { setEditItem(c); setCName(c.name); setCOrder(c.order); setCActive(c.active); setModal(true); };
  const handleBulk = async () => {
    const names = bulkText.split("\n").map(x => x.trim()).filter(Boolean);
    if (!names.length) return;
    setBulkSaving(true);
    try {
      await Promise.all(names.map((n, i) => fetch("/api/cms/clients", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: n, order: items.length + i, active: true }) })));
      showToast(`${names.length} clientes importados`); setBulkModal(false); setBulkText(""); await load();
    } catch { showToast("Erro na importação", "err"); }
    finally { setBulkSaving(false); }
  };
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
        <StatCard label="Total" value={items.length} color="#095b66" bg="#e8f7f9"/>
        <StatCard label="Activos" value={activeCount} color="#166534" bg="#dcfce7"/>
        <StatCard label="Inactivos" value={items.length - activeCount} color="#991b1b" bg="#fce8e8"/>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 12 }}>
        <button onClick={() => setBulkModal(true)} style={{ ...cancelBtn, display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
          <svg viewBox="0 0 14 14" fill="none" width="11"><path d="M2 4h10M2 7h10M2 10h6" stroke="#4a7275" strokeWidth="1.6" strokeLinecap="round"/></svg>
          Importar lista
        </button>
        <button onClick={openNew} style={primaryBtn}><svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>Novo Cliente</button>
      </div>
      {!loading && items.length > 0 && (
        <div style={{ marginBottom: 14, background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 12, padding: "12px 14px" }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#9bbbbe", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 8 }}>Prévia</p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 5 }}>
            {items.filter(c => c.active).map(c => <span key={c.id} style={{ background: "#e8f7f9", border: "1.5px solid #b8dde4", borderRadius: 99, padding: "4px 12px", fontSize: 11, fontWeight: 700, color: "#1a4a4f" }}>{c.name}</span>)}
          </div>
        </div>
      )}
      {loading ? <Spinner/> : items.length === 0 ? <EmptyState label="Nenhum cliente adicionado" hint="Adicione individualmente ou importe uma lista" onAdd={openNew}/> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {items.map((c, i) => (
            <div key={c.id} style={{ ...rowCard, opacity: c.active ? 1 : .6, borderColor: c.active ? "#dde8ea" : "#f0d8d8", padding: "9px 14px 9px 0" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: c.active ? "#095b66" : "#e8a0a0", borderRadius: "3px 0 0 3px" }}/>
              <div style={{ paddingLeft: 14, display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                <span style={{ fontSize: 10, color: "#9bbbbe", fontWeight: 700, minWidth: 20 }}>#{i+1}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0a1c1e" }}>{c.name}</span>
                <StatusBadge active={c.active}/>
              </div>
              <div style={{ paddingRight: 4 }}><RowActions active={c.active} onToggle={() => toggle(c, "Cliente")} onEdit={() => openEdit(c)} onDelete={() => setDel(c)}/></div>
            </div>
          ))}
        </div>
      )}
      {modal && (
        <ModalShell title={editItem ? "Editar Cliente" : "Novo Cliente"} subtitle="Clientes" onClose={() => { setModal(false); setEditItem(null); }}
          footer={<><button onClick={() => { setModal(false); setEditItem(null); }} style={cancelBtn}>Cancelar</button><button onClick={async () => { const ok = await save({ name: cName, order: cOrder, active: cActive }, editItem?.id, "Cliente"); if (ok) { setModal(false); setEditItem(null); } }} disabled={!cName || saving} style={{ ...primaryBtn, background: cName && !saving ? "#095b66" : "#b0c8ca", cursor: cName && !saving ? "pointer" : "not-allowed" }}>{saving ? "A guardar…" : "Guardar Cliente"}</button></>}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 100px", gap: 12 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Nome</span><input style={inpStyle} value={cName} onChange={e => setCName(e.target.value)} placeholder="Ex: Sonangol"/></label>
            <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Ordem</span><input type="number" style={inpStyle} value={cOrder} onChange={e => setCOrder(+e.target.value)}/></label>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "10px 14px" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#0a1c1e" }}>Cliente activo</span>
            <Toggle on={cActive} onToggle={() => setCActive(a => !a)}/>
          </div>
        </ModalShell>
      )}
      {bulkModal && (
        <ModalShell title="Importar Lista de Clientes" subtitle="Clientes · Importação" onClose={() => setBulkModal(false)}
          footer={<><button onClick={() => setBulkModal(false)} style={cancelBtn}>Cancelar</button><button onClick={handleBulk} disabled={!bulkText.trim() || bulkSaving} style={{ ...primaryBtn, background: bulkText.trim() && !bulkSaving ? "#095b66" : "#b0c8ca", cursor: bulkText.trim() && !bulkSaving ? "pointer" : "not-allowed" }}>{bulkSaving ? "A importar…" : `Importar ${bulkText.split("\n").filter(x => x.trim()).length} clientes`}</button></>}>
          <div style={{ background: "#f0f9fa", border: "1.5px solid #c8e8eb", borderRadius: 8, padding: "10px 12px", fontSize: 12, color: "#2a5a5e", lineHeight: 1.6 }}>
            Cola a lista — <strong>um cliente por linha</strong>. Todos serão importados como activos.
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Lista de clientes</span><textarea style={{ ...inpStyle, minHeight: 160, resize: "vertical" as const, fontFamily: "monospace", fontSize: 12 }} value={bulkText} onChange={e => setBulkText(e.target.value)} placeholder={"Sonangol\nUnitel\nBFA\nFidelidade\n..."}/></label>
        </ModalShell>
      )}
      {del && <ConfirmDeleteModal title={del.name} onConfirm={async () => { const ok = await remove(del.id, "Cliente"); if (ok) setDel(null); }} onClose={() => setDel(null)} loading={deleting}/>}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   BRANDS SECTION
═══════════════════════════════════════════════ */
const ROLE_SUGGESTIONS = ["Rep. Oficial AO","Rep. Oficial","Parceiro Solar","Parceiro Quadros","Parceiro","Parceiro VE"];

function BrandsSection({ showToast }: { showToast: (m: string, t?: "ok" | "err") => void }) {
  const { items, loading, saving, deleting, save, toggle, remove } = useCrud<Brand>("brands", showToast);
  const [modal, setModal] = useState(false); const [editItem, setEditItem] = useState<Brand | null>(null);
  const [form, setForm] = useState({ name: "", role: "", order: 0, active: true }); const [del, setDel] = useState<Brand | null>(null);
  const activeCount = items.filter(b => b.active).length;
  const openNew  = () => { setEditItem(null); setForm({ name: "", role: "", order: items.length, active: true }); setModal(true); };
  const openEdit = (b: Brand) => { setEditItem(b); setForm({ name: b.name, role: b.role, order: b.order, active: b.active }); setModal(true); };
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
        <StatCard label="Total" value={items.length} color="#095b66" bg="#e8f7f9"/>
        <StatCard label="Activos" value={activeCount} color="#166534" bg="#dcfce7"/>
        <StatCard label="Inactivos" value={items.length - activeCount} color="#991b1b" bg="#fce8e8"/>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
        <button onClick={openNew} style={primaryBtn}><svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>Nova Marca</button>
      </div>
      {!loading && items.length > 0 && (
        <div style={{ marginBottom: 14, background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 12, padding: "12px 14px" }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#9bbbbe", letterSpacing: ".12em", textTransform: "uppercase" as const, marginBottom: 8 }}>Prévia</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: 7 }}>
            {items.filter(b => b.active).map(b => (
              <div key={b.id} style={{ background: "#fff", border: "1.5px solid #dde8ea", borderRadius: 8, padding: "9px 11px", textAlign: "center" as const }}>
                <div style={{ fontSize: 12, fontWeight: 900, color: "#0a1c1e", marginBottom: 2 }}>{b.name}</div>
                <div style={{ fontSize: 9, fontWeight: 700, color: "#095b66", letterSpacing: ".07em", textTransform: "uppercase" as const }}>{b.role}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {loading ? <Spinner/> : items.length === 0 ? <EmptyState label="Nenhuma marca adicionada" hint="Adicione as marcas que a empresa representa" onAdd={openNew}/> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {items.map((b, i) => (
            <div key={b.id} style={{ ...rowCard, opacity: b.active ? 1 : .6, borderColor: b.active ? "#dde8ea" : "#f0d8d8", padding: "9px 14px 9px 0" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: b.active ? "#095b66" : "#e8a0a0", borderRadius: "3px 0 0 3px" }}/>
              <div style={{ paddingLeft: 14, display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
                <span style={{ fontSize: 10, color: "#9bbbbe", fontWeight: 700, minWidth: 20 }}>#{i+1}</span>
                <div><div style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{b.name}</div><div style={{ fontSize: 10, fontWeight: 700, color: "#095b66", letterSpacing: ".06em", textTransform: "uppercase" as const }}>{b.role}</div></div>
                <StatusBadge active={b.active}/>
              </div>
              <div style={{ paddingRight: 4 }}><RowActions active={b.active} onToggle={() => toggle(b, "Marca")} onEdit={() => openEdit(b)} onDelete={() => setDel(b)}/></div>
            </div>
          ))}
        </div>
      )}
      {modal && (
        <ModalShell title={editItem ? "Editar Marca" : "Nova Marca"} subtitle="Marcas / Parceiros" onClose={() => { setModal(false); setEditItem(null); }}
          footer={<><button onClick={() => { setModal(false); setEditItem(null); }} style={cancelBtn}>Cancelar</button><button onClick={async () => { const ok = await save(form, editItem?.id, "Marca"); if (ok) { setModal(false); setEditItem(null); } }} disabled={!form.name || saving} style={{ ...primaryBtn, background: form.name && !saving ? "#095b66" : "#b0c8ca", cursor: form.name && !saving ? "pointer" : "not-allowed" }}>{saving ? "A guardar…" : "Guardar Marca"}</button></>}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 100px", gap: 12 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Nome da marca</span><input style={inpStyle} value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Ex: Huawei FusionSolar"/></label>
            <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Ordem</span><input type="number" style={inpStyle} value={form.order} onChange={e => setForm(p => ({ ...p, order: +e.target.value }))}/></label>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <span style={lbl}>Tipo de parceria</span>
            <input list="role-opts" style={inpStyle} value={form.role} onChange={e => setForm(p => ({ ...p, role: e.target.value }))} placeholder="Ex: Rep. Oficial AO"/>
            <datalist id="role-opts">{ROLE_SUGGESTIONS.map(r => <option key={r} value={r}/>)}</datalist>
          </label>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "10px 14px" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#0a1c1e" }}>Marca activa</span>
            <Toggle on={form.active} onToggle={() => setForm(p => ({ ...p, active: !p.active }))}/>
          </div>
        </ModalShell>
      )}
      {del && <ConfirmDeleteModal title={del.name} hint={del.role} onConfirm={async () => { const ok = await remove(del.id, "Marca"); if (ok) setDel(null); }} onClose={() => setDel(null)} loading={deleting}/>}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PRESENCE SECTION
═══════════════════════════════════════════════ */
type PresenceForm = Omit<Presence,"id">;
const EMPTY_PRES: PresenceForm = { order: 0, name: "", lon: 0, lat: 0, main: false, detail: "", flag: "🌍", active: true };
const FLAG_OPTS = ["🇦🇴","🇵🇹","🇨🇻","🇸🇹","🇲🇿","🇧🇷","🌍"];

function PresenceSection({ showToast }: { showToast: (m: string, t?: "ok" | "err") => void }) {
  const { items, loading, saving, deleting, save, toggle, remove } = useCrud<Presence>("presence", showToast);
  const [modal, setModal] = useState(false); const [editItem, setEditItem] = useState<Presence | null>(null);
  const [form, setForm] = useState<PresenceForm>(EMPTY_PRES); const [del, setDel] = useState<Presence | null>(null);
  const set = (k: keyof PresenceForm, v: string | boolean | number) => setForm(p => ({ ...p, [k]: v }));
  const activeCount = items.filter(p => p.active).length;
  const openNew  = () => { setEditItem(null); setForm({ ...EMPTY_PRES, order: items.length }); setModal(true); };
  const openEdit = (p: Presence) => { setEditItem(p); setForm({ order: p.order, name: p.name, lon: p.lon, lat: p.lat, main: p.main, detail: p.detail, flag: p.flag, active: p.active }); setModal(true); };
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
        <StatCard label="Total" value={items.length} color="#095b66" bg="#e8f7f9"/>
        <StatCard label="Activos" value={activeCount} color="#166534" bg="#dcfce7"/>
        <StatCard label="Escritórios principais" value={items.filter(p => p.main && p.active).length} color="#0a6e5c" bg="#e0f5ef"/>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
        <button onClick={openNew} style={primaryBtn}><svg viewBox="0 0 14 14" fill="none" width="11"><path d="M7 2v10M2 7h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>Nova Localização</button>
      </div>
      {loading ? <Spinner/> : items.length === 0 ? <EmptyState label="Nenhuma localização adicionada" hint="Adicione as presenças geográficas da empresa" onAdd={openNew}/> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {items.map((p, i) => (
            <div key={p.id} style={{ ...rowCard, opacity: p.active ? 1 : .6, borderColor: p.active ? (p.main ? "#095b66" : "#dde8ea") : "#f0d8d8" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: p.active ? (p.main ? "#095b66" : "#5cb8c0") : "#e8a0a0", borderRadius: "4px 0 0 4px" }}/>
              <div style={{ paddingLeft: 18, display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
                <span style={{ fontSize: 20 }}>{p.flag}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 2 }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{p.name}</span>
                    {p.main && <span style={{ padding: "2px 6px", borderRadius: 99, fontSize: 9, fontWeight: 800, background: "#e8f7f9", color: "#095b66", letterSpacing: ".07em", textTransform: "uppercase" as const }}>Principal</span>}
                    <StatusBadge active={p.active}/><span style={{ fontSize: 10, color: "#9bbbbe" }}>#{i+1}</span>
                  </div>
                  <div style={{ display: "flex", gap: 10, fontSize: 11, color: "#9bbbbe" }}>
                    <span>lat:{p.lat.toFixed(2)}</span><span>lon:{p.lon.toFixed(2)}</span>
                    <span style={{ color: "#6a9598", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" as const, maxWidth: 280 }}>{p.detail.split("\n")[0]}</span>
                  </div>
                </div>
              </div>
              <div style={{ paddingRight: 4 }}><RowActions active={p.active} onToggle={() => toggle(p, "Localização")} onEdit={() => openEdit(p)} onDelete={() => setDel(p)}/></div>
            </div>
          ))}
        </div>
      )}
      {modal && (
        <ModalShell title={editItem ? "Editar Localização" : "Nova Localização"} subtitle="Presença Geográfica" onClose={() => { setModal(false); setEditItem(null); }}
          footer={<><button onClick={() => { setModal(false); setEditItem(null); }} style={cancelBtn}>Cancelar</button><button onClick={async () => { const ok = await save(form, editItem?.id, "Localização"); if (ok) { setModal(false); setEditItem(null); } }} disabled={!form.name || saving} style={{ ...primaryBtn, background: form.name && !saving ? "#095b66" : "#b0c8ca", cursor: form.name && !saving ? "pointer" : "not-allowed" }}>{saving ? "A guardar…" : "Guardar Localização"}</button></>}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 100px", gap: 12 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Nome</span><input style={inpStyle} value={form.name} onChange={e => set("name", e.target.value)} placeholder="Ex: Angola · Luanda"/></label>
            <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={lbl}>Bandeira</span>
              <input list="flag-list" style={inpStyle} value={form.flag} onChange={e => set("flag", e.target.value)} placeholder="🇦🇴"/>
              <datalist id="flag-list">{FLAG_OPTS.map(f => <option key={f} value={f}/>)}</datalist>
            </label>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 80px", gap: 12 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={lbl}>Latitude</span>
              <input type="number" step="0.0001" style={inpStyle} value={form.lat} onChange={e => set("lat", +e.target.value)} placeholder="-8.84"/>
              <span style={{ fontSize: 9, color: "#9bbbbe" }}>Angola −8.84 · Portugal 38.72</span>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={lbl}>Longitude</span>
              <input type="number" step="0.0001" style={inpStyle} value={form.lon} onChange={e => set("lon", +e.target.value)} placeholder="13.23"/>
              <span style={{ fontSize: 9, color: "#9bbbbe" }}>Angola 13.23 · Portugal −9.14</span>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 3 }}><span style={lbl}>Ordem</span><input type="number" style={inpStyle} value={form.order} onChange={e => set("order", +e.target.value)}/></label>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <span style={lbl}>Detalhe / Morada</span>
            <textarea style={{ ...inpStyle, minHeight: 68, resize: "vertical" }} value={form.detail} onChange={e => set("detail", e.target.value)} placeholder={"Centro de Logística de Talatona · espaço H\n(+244) 933 153 362"}/>
            <span style={{ fontSize: 9, color: "#9bbbbe" }}>Quebras de linha preservadas no site</span>
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "10px 14px" }}>
              <div><div style={{ fontSize: 12, fontWeight: 700, color: "#0a1c1e" }}>Escritório principal</div><div style={{ fontSize: 10, color: "#9bbbbe" }}>Aparece ligado no mapa</div></div>
              <Toggle on={form.main} onToggle={() => set("main", !form.main)}/>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "10px 14px" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#0a1c1e" }}>Localização activa</span>
              <Toggle on={form.active} onToggle={() => set("active", !form.active)}/>
            </div>
          </div>
        </ModalShell>
      )}
      {del && <ConfirmDeleteModal title={del.name} hint={del.flag} onConfirm={async () => { const ok = await remove(del.id, "Localização"); if (ok) setDel(null); }} onClose={() => setDel(null)} loading={deleting}/>}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   OVERVIEW + NAV
═══════════════════════════════════════════════ */
const NAV_ITEMS: { key: Section; label: string; icon: React.ReactNode; desc: string; color: string; bg: string }[] = [
  { key: "overview", label: "Dashboard",   desc: "",                                       color: "#095b66", bg: "#e8f7f9", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { key: "hero",     label: "Hero Slides", desc: "Slides rotativos da homepage",           color: "#095b66", bg: "#e8f7f9", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><rect x="2" y="4" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M6 8h4M8 6v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
  // { key: "products", label: "Produtos",    desc: "Catálogo de produtos e serviços",        color: "#0a6e5c", bg: "#e0f5ef", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M2 5l6-3 6 3v6l-6 3-6-3V5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 2v10M2 5l6 3 6-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg> },
  { key: "services", label: "Serviços",    desc: "Cards da secção «O que fazemos»",        color: "#064e58", bg: "#e5f4f6", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.4"/><path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
  { key: "clients",  label: "Clientes",    desc: "Empresas que confiam em nós",            color: "#166534", bg: "#dcfce7", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M2 13c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M11 7c1.1 0 2 .9 2 2s-.9 2-2 2M13 13c0-1.1-.5-2.1-1.3-2.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
  { key: "brands",   label: "Marcas",      desc: "Fabricantes e parceiros estratégicos",  color: "#7a5200", bg: "#fff7e0", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M8 2l1.5 4H14l-3.5 2.5 1.5 4L8 10l-4 2.5 1.5-4L2 6h4.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
  { key: "presence", label: "Presença",    desc: "Localizações no mapa e detalhes",       color: "#991b1b", bg: "#fce8e8", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><circle cx="8" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M8 2C5.2 2 3 4.2 3 7c0 3.8 5 9 5 9s5-5.2 5-9c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.4"/></svg> },
  { key: "categories", label: "Categorias",  desc: "Categorias de produtos e serviços",      color: "#8b5cf6", bg: "#f3e8ff", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M2 5l6-3 6 3v6l-6 3-6-3V5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 2v10M2 5l6 3 6-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg> },
   { key: "products", label: "Produtos",    desc: "Catálogo de produtos e serviços",        color: "#0a6e5c", bg: "#e0f5ef", icon: <svg viewBox="0 0 16 16" fill="none" width="14"><path d="M2 5l6-3 6 3v6l-6 3-6-3V5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 2v10M2 5l6 3 6-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg> },
];

const SECTION_TITLES: Record<Section, string> = { overview: "Dashboard", hero: "Hero Slides",  services: "Serviços", clients: "Clientes", brands: "Marcas / Parceiros", presence: "Presença Geográfica", categories: "Categorias de Produtos", products: "Categorias de Produtos" };
const SECTION_HINTS:  Record<Section, string> = {
  overview: "Painel de gestão de conteúdo do site MultiEnergia",
  hero:     "Slides rotativos da secção Hero da homepage · Intervalo de 6s",
  products: "Produtos e serviços apresentados na secção de soluções",
  services: "Cards da secção «O que fazemos» — grid de 5 colunas no site",
  clients:  "Chips de clientes que aparecem na secção «Confiam em Nós»",
  brands:   "Cards de marcas da secção «Marcas que Representamos»",
  presence: "Pontos no mapa interactivo e cards de localização",
  categories: "Categorias de produtos e serviços",
};

function OverviewSection({ onNavigate }: { onNavigate: (s: Section) => void }) {
  return (
    <div>
      <p style={{ fontSize: 13, color: "#6a9598", marginBottom: 22, lineHeight: 1.7 }}>Selecciona uma secção para gerir o conteúdo do site.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 11 }}>
        {NAV_ITEMS.filter(n => n.key !== "overview").map(s => (
          <button key={s.key} onClick={() => onNavigate(s.key)} style={{ background: "#fff", border: "1.5px solid #e8f0f0", borderRadius: 13, padding: "20px", textAlign: "left" as const, cursor: "pointer", fontFamily: "'Montserrat',sans-serif", transition: "all .2s", display: "flex", flexDirection: "column", gap: 11 }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: s.bg, color: s.color, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e", marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: "#9bbbbe", lineHeight: 1.5 }}>{s.desc}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: s.color }}>
              Gerir conteúdo <svg viewBox="0 0 12 12" fill="none" width="9"><path d="M2 6h8M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN DASHBOARD
═══════════════════════════════════════════════ */
export default function AdminDashboard() {
  const [section,   setSection]   = useState<Section>("overview");
  const [toast,     setToast]     = useState<{ msg: string; type: "ok" | "err" } | null>(null);
  const [collapsed, setCollapsed] = useState(false);

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
        @keyframes spin      { to { transform: rotate(360deg); } }
        @keyframes toastIn   { from { opacity:0; transform:translateY(14px) scale(.97); } to { opacity:1; transform:none; } }
        @keyframes fadeSlide { from { opacity:0; transform:translateX(8px); } to { opacity:1; transform:none; } }
        ::-webkit-scrollbar       { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #c8dada; border-radius: 4px; }
        button:focus-visible { outline: 2px solid #095b66; outline-offset: 2px; }
      `}</style>

      <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Montserrat',sans-serif" }}>

        {/* ── SIDEBAR ── */}
        <aside style={{ width: collapsed ? 58 : 210, background: "#0a1c1e", display: "flex", flexDirection: "column", flexShrink: 0, transition: "width .25s cubic-bezier(.4,0,.2,1)", overflow: "hidden", position: "sticky", top: 0, height: "100vh", zIndex: 100 }}>
          <div style={{ padding: "18px 12px 14px", borderBottom: "1px solid rgba(255,255,255,.07)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            {!collapsed && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg viewBox="0 0 16 16" fill="none" width="12"><path d="M8 2l1.5 4.5H14L10.5 9l1.5 4.5L8 11 4 13.5 5.5 9 2 6.5h4.5L8 2z" fill="#fff"/></svg>
                </div>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#fff", whiteSpace: "nowrap" }}>MultiEnergia</span>
              </div>
            )}
            <button onClick={() => setCollapsed(c => !c)} style={{ width: 24, height: 24, borderRadius: 5, border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.05)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg viewBox="0 0 12 12" fill="none" width="9" style={{ transform: collapsed ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
                <path d="M8 2L4 6l4 4" stroke="rgba(255,255,255,.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <nav style={{ flex: 1, padding: "8px 7px", display: "flex", flexDirection: "column", gap: 1, overflowY: "auto" }}>
            {NAV_ITEMS.map(item => {
              const active = section === item.key;
              return (
                <button key={item.key} onClick={() => setSection(item.key)} title={collapsed ? item.label : undefined}
                  style={{ display: "flex", alignItems: "center", gap: 8, padding: collapsed ? "8px" : "8px 9px", borderRadius: 6, border: "none", background: active ? "#095b66" : "transparent", color: active ? "#fff" : "rgba(255,255,255,.42)", cursor: "pointer", fontFamily: "'Montserrat',sans-serif", fontSize: 11, fontWeight: active ? 700 : 500, transition: "all .15s", justifyContent: collapsed ? "center" : "flex-start", whiteSpace: "nowrap" as const, overflow: "hidden" }}>
                  <span style={{ flexShrink: 0 }}>{item.icon}</span>
                  {!collapsed && item.label}
                  {active && !collapsed && <div style={{ marginLeft: "auto", width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,.7)" }}/>}
                </button>
              );
            })}
          </nav>
          {!collapsed && (
            <div style={{ padding: "10px 11px 16px", borderTop: "1px solid rgba(255,255,255,.07)" }}>
              <a href="/" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,.28)", textDecoration: "none" }}>
                <svg viewBox="0 0 12 12" fill="none" width="9"><path d="M9 7v3H1V2h3M7 1h4v4M5 7l6-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Ver site
              </a>
            </div>
          )}
        </aside>

        {/* ── MAIN ── */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
          <div style={{ background: "#fff", borderBottom: "1.5px solid #e4ecec", padding: "0 26px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 54, flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              {section !== "overview" && (
                <>
                  <button onClick={() => setSection("overview")} style={{ fontSize: 11, fontWeight: 600, color: "#9bbbbe", background: "none", border: "none", cursor: "pointer", fontFamily: "'Montserrat',sans-serif", padding: 0 }}>Dashboard</button>
                  <svg viewBox="0 0 8 8" fill="none" width="6"><path d="M2 1l3 3-3 3" stroke="#c8d8da" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </>
              )}
              <span style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{SECTION_TITLES[section]}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }}/>
              <span style={{ fontSize: 10, color: "#9bbbbe", fontWeight: 600 }}>Online</span>
            </div>
          </div>

          <div key={section} style={{ flex: 1, padding: "24px 26px", overflowY: "auto", animation: "fadeSlide .22s ease both" }}>
            <div style={{ marginBottom: 20 }}>
              <h1 style={{ fontSize: 19, fontWeight: 900, color: "#0a1c1e", marginBottom: 3 }}>{SECTION_TITLES[section]}</h1>
              <p style={{ fontSize: 12, color: "#9bbbbe" }}>{SECTION_HINTS[section]}</p>
            </div>
            {section === "overview"  && <OverviewSection onNavigate={setSection}/>}
            {section === "hero"      && <HeroSection showToast={showToast}/>}
            {section === "products"  && <ProductsAdmin />}
            {section === "categories" && <AdminCategories />}
            {section === "services"  && <ServicesSection showToast={showToast}/>}
            {section === "clients"   && <ClientsSection showToast={showToast}/>}
            {section === "brands"    && <BrandsSection showToast={showToast}/>}
            {section === "presence"  && <PresenceSection showToast={showToast}/>}
            
          </div>
        </main>
      </div>

      {toast && <Toast msg={toast.msg} type={toast.type}/>}
    </>
  );
}