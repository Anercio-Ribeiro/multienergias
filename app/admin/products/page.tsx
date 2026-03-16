// // "use client";
// // import React, { useState, useRef, useEffect, useCallback } from "react";
// // import type { Product, ProductHighlight } from "@/app/components/ProductsSection";

// // /* ══════════════════════════════════════════════════════
// //    CONSTANTS
// // ══════════════════════════════════════════════════════ */
// // const API = "/api/cms/products";

// // const CATEGORIES = [
// //   "Energia Solar", "Sistemas Solares", "Energia Portátil",
// //   "Mobilidade", "Fabricação", "Proteção Elétrica",
// //   "Energia Crítica", "Serviços", "Média Tensão", "Industrial", "Formação",
// // ];

// // const EMPTY: Omit<Product, "id"> = {
// //   order: 1, slug: "", name: "", category: "Energia Solar",
// //   desc: "", longDesc: "",
// //   color: "#095b66", lightColor: "#e8f7f9",
// //   specs: [], brands: [], highlights: [],
// //   iconIndex: 0, image: null, active: true,
// // };

// // function slugify(s: string) {
// //   return s.toLowerCase().normalize("NFD")
// //     .replace(/[\u0300-\u036f]/g, "")
// //     .replace(/[^a-z0-9]+/g, "-")
// //     .replace(/^-|-$/g, "");
// // }

// // /* ══════════════════════════════════════════════════════
// //    IMAGE UPLOADER  (igual ao do dashboard, prefixo "product")
// // ══════════════════════════════════════════════════════ */
// // function ImageUploader({
// //   value,
// //   onChange,
// //   onBusyChange,
// // }: {
// //   value: string | null;
// //   onChange: (url: string | null) => void;
// //   onBusyChange?: (busy: boolean) => void;
// // }) {
// //   const fileRef   = useRef<HTMLInputElement>(null);
// //   const [uploading, setUploading] = useState(false);
// //   const [dragOver,  setDragOver]  = useState(false);
// //   const [error,     setError]     = useState<string | null>(null);

// //   const doUpload = async (file: File) => {
// //     if (!file.type.startsWith("image/")) {
// //       setError("Apenas imagens são permitidas");
// //       return;
// //     }
// //     setError(null);
// //     setUploading(true);
// //     onBusyChange?.(true);
// //     try {
// //       const fd = new FormData();
// //       fd.append("file", file);
// //       // passa o prefixo "product" para o endpoint de upload
// //       const res  = await fetch("/api/cms/upload?prefix=product", { method: "POST", body: fd });
// //       const data = await res.json();
// //       if (data.url) {
// //         onChange(data.url);
// //       } else {
// //         setError(data.error ?? "Erro no upload");
// //       }
// //     } catch {
// //       setError("Erro ao fazer upload");
// //     } finally {
// //       setUploading(false);
// //       onBusyChange?.(false);
// //       if (fileRef.current) fileRef.current.value = "";
// //     }
// //   };

// //   return (
// //     <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>

// //       {/* ── Zona de drop / preview ── */}
// //       <div
// //         style={{
// //           position: "relative", borderRadius: 10, overflow: "hidden",
// //           border: dragOver ? "2px dashed #095b66" : "1.5px solid #dde8ea",
// //           background: dragOver ? "#e8f7f9" : (value ? "#000" : "#f8fbfc"),
// //           height: 140, cursor: "pointer", transition: "all .2s",
// //         }}
// //         onDragOver={e  => { e.preventDefault(); setDragOver(true); }}
// //         onDragLeave={() => setDragOver(false)}
// //         onDrop={e => {
// //           e.preventDefault(); setDragOver(false);
// //           const f = e.dataTransfer.files?.[0];
// //           if (f) doUpload(f);
// //         }}
// //         onClick={() => !uploading && fileRef.current?.click()}
// //       >
// //         {value ? (
// //           <>
// //             <img
// //               src={value} alt="Capa do produto"
// //               style={{ width: "100%", height: "100%", objectFit: "cover", opacity: uploading ? .35 : 1, transition: "opacity .2s" }}
// //             />
// //             {/* overlay de troca */}
// //             <div
// //               style={{
// //                 position: "absolute", inset: 0,
// //                 background: "rgba(9,27,30,.0)",
// //                 display: "flex", alignItems: "center", justifyContent: "center",
// //                 opacity: 0, transition: "all .2s",
// //               }}
// //               onMouseEnter={e => {
// //                 (e.currentTarget as HTMLDivElement).style.opacity = "1";
// //                 (e.currentTarget as HTMLDivElement).style.background = "rgba(9,27,30,.55)";
// //               }}
// //               onMouseLeave={e => {
// //                 (e.currentTarget as HTMLDivElement).style.opacity = "0";
// //                 (e.currentTarget as HTMLDivElement).style.background = "rgba(9,27,30,.0)";
// //               }}
// //             >
// //               <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
// //                 <svg viewBox="0 0 20 20" fill="none" width="20">
// //                   <path d="M10 13V5M7 8l3-3 3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
// //                   <path d="M4 15h12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
// //                 </svg>
// //                 <span style={{ fontSize: 10, color: "#fff", fontWeight: 700 }}>Trocar imagem</span>
// //               </div>
// //             </div>
// //             {/* botão ✕ */}
// //             <button
// //               onClick={e => { e.stopPropagation(); onChange(null); }}
// //               style={{
// //                 position: "absolute", top: 7, right: 7,
// //                 width: 22, height: 22, borderRadius: "50%",
// //                 background: "rgba(0,0,0,.65)", border: "none",
// //                 cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2,
// //               }}
// //             >
// //               <svg viewBox="0 0 10 10" fill="none" width="9">
// //                 <path d="M2 2l6 6M8 2l-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
// //               </svg>
// //             </button>
// //           </>
// //         ) : (
// //           /* placeholder */
// //           <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
// //             {uploading ? (
// //               <svg viewBox="0 0 24 24" fill="none" width="26" style={{ animation: "spin .8s linear infinite" }}>
// //                 <circle cx="12" cy="12" r="9" stroke="#dde8ea" strokeWidth="2.5"/>
// //                 <path d="M12 3a9 9 0 019 9" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round"/>
// //               </svg>
// //             ) : (
// //               <>
// //                 <svg viewBox="0 0 24 24" fill="none" width="28">
// //                   <rect x="3" y="5" width="18" height="14" rx="2.5" stroke={dragOver ? "#095b66" : "#c8d8da"} strokeWidth="1.6"/>
// //                   <circle cx="9" cy="11" r="2" fill={dragOver ? "#095b66" : "#c8d8da"}/>
// //                   <path d="M3 16l4-4 3 3 4-5 7 7" stroke={dragOver ? "#095b66" : "#c8d8da"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
// //                 </svg>
// //                 <span style={{ fontSize: 10, color: dragOver ? "#095b66" : "#b0c8ca", fontWeight: 700, textAlign: "center", lineHeight: 1.5 }}>
// //                   {dragOver ? "Largar aqui" : "Clique ou arraste a imagem de capa"}
// //                 </span>
// //                 <span style={{ fontSize: 9, color: "#c8d8da" }}>JPG · PNG · WEBP · máx. 8 MB</span>
// //               </>
// //             )}
// //           </div>
// //         )}
// //       </div>

// //       {/* input oculto */}
// //       <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => { const f = e.target.files?.[0]; if (f) doUpload(f); }}/>

// //       {/* Botões + path */}
// //       <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
// //         <button
// //           onClick={() => fileRef.current?.click()}
// //           disabled={uploading}
// //           className="btn-sm"
// //           style={{ opacity: uploading ? .5 : 1, cursor: uploading ? "not-allowed" : "pointer" }}
// //         >
// //           {uploading ? "A fazer upload…" : value ? "Trocar imagem" : "Escolher imagem"}
// //         </button>
// //         {value && (
// //           <button
// //             onClick={() => onChange(null)}
// //             className="btn-ghost"
// //             style={{ fontSize: 10, padding: "6px 12px", color: "#e05a5a", borderColor: "#fce8e8" }}
// //           >
// //             ✕ Remover
// //           </button>
// //         )}
// //       </div>

// //       {/* path guardado */}
// //       {value && (
// //         <div style={{
// //           fontSize: 10, color: "#6a9598", background: "#f8fbfc",
// //           border: "1.5px solid #dde8ea", borderRadius: 6,
// //           padding: "6px 9px", fontFamily: "monospace", wordBreak: "break-all",
// //           lineHeight: 1.5,
// //         }}>
// //           <span style={{ color: "#9bbbbe", fontSize: 9 }}>GUARDADO EM  </span>
// //           {value}
// //         </div>
// //       )}

// //       {/* erro */}
// //       {error && (
// //         <div style={{ fontSize: 11, color: "#c0392b", fontWeight: 600 }}>⚠ {error}</div>
// //       )}
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════════════
// //    TAG INPUT
// // ══════════════════════════════════════════════════════ */
// // function TagInput({ value, onChange, placeholder }: {
// //   value: string[]; onChange: (v: string[]) => void; placeholder: string;
// // }) {
// //   const [draft, setDraft] = useState("");
// //   const add = () => {
// //     const t = draft.trim();
// //     if (t && !value.includes(t)) onChange([...value, t]);
// //     setDraft("");
// //   };
// //   return (
// //     <div>
// //       <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 8 }}>
// //         {value.map(v => (
// //           <span key={v} style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#f0f9fa", border: "1px solid #c8e8eb", borderRadius: 99, padding: "3px 10px", fontSize: 11, fontWeight: 700, color: "#095b66" }}>
// //             {v}
// //             <button onClick={() => onChange(value.filter(x => x !== v))}
// //               style={{ background: "none", border: "none", cursor: "pointer", color: "#095b66", padding: 0, lineHeight: 1, fontSize: 14 }}>×</button>
// //           </span>
// //         ))}
// //       </div>
// //       <div style={{ display: "flex", gap: 8 }}>
// //         <input className="fi" value={draft} placeholder={placeholder} style={{ flex: 1 }}
// //           onChange={e => setDraft(e.target.value)}
// //           onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); add(); } }} />
// //         <button className="btn-sm" onClick={add}>+ Add</button>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════════════
// //    HIGHLIGHTS INPUT
// // ══════════════════════════════════════════════════════ */
// // function HighlightsInput({ value, onChange }: {
// //   value: ProductHighlight[]; onChange: (v: ProductHighlight[]) => void;
// // }) {
// //   const [lbl, setLbl] = useState(""); const [val, setVal] = useState("");
// //   const add = () => {
// //     if (lbl.trim() && val.trim()) { onChange([...value, { label: lbl.trim(), value: val.trim() }]); setLbl(""); setVal(""); }
// //   };
// //   return (
// //     <div>
// //       <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
// //         {value.map((h, i) => (
// //           <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#095b66", color: "#fff", borderRadius: 8, padding: "4px 10px", fontSize: 11, fontWeight: 700 }}>
// //             <span style={{ opacity: .65, fontSize: 10 }}>{h.label}</span>
// //             <span style={{ opacity: .4 }}>·</span>
// //             {h.value}
// //             <button onClick={() => onChange(value.filter((_, j) => j !== i))}
// //               style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 0, lineHeight: 1, fontSize: 14 }}>×</button>
// //           </span>
// //         ))}
// //       </div>
// //       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 8 }}>
// //         <input className="fi" value={lbl} placeholder="Rótulo  ex: +50 MW" onChange={e => setLbl(e.target.value)} />
// //         <input className="fi" value={val} placeholder="Valor  ex: instalados"
// //           onChange={e => setVal(e.target.value)}
// //           onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); add(); } }} />
// //         <button className="btn-sm" onClick={add}>+ Add</button>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════════════
// //    FORM
// // ══════════════════════════════════════════════════════ */
// // function ProductForm({ initial, onSave, onCancel, saving }: {
// //   initial: Omit<Product, "id"> & { id?: number };
// //   onSave: (p: Omit<Product, "id"> & { id?: number }) => void;
// //   onCancel: () => void;
// //   saving: boolean;
// // }) {
// //   const [f, setF]           = useState({ ...initial });
// //   const [uploadBusy, setUploadBusy] = useState(false);

// //   const set = <K extends keyof typeof f>(k: K, v: typeof f[K]) => setF(p => ({ ...p, [k]: v }));
// //   const valid = f.name.trim() && f.slug.trim() && f.desc.trim();

// //   return (
// //     <div className="form-panel">

// //       {/* ── Identificação ── */}
// //       <div className="fsec">Identificação</div>
// //       <div className="fg2">
// //         <div className="field">
// //           <label>Nome do produto</label>
// //           <input className="fi" value={f.name} placeholder="ex: Sistemas de Energia Solar"
// //             onChange={e => { set("name", e.target.value); set("slug", slugify(e.target.value)); }} />
// //         </div>
// //         <div className="field">
// //           <label>Slug <span className="flabel-note">(URL — auto-gerado)</span></label>
// //           <input className="fi" value={f.slug} placeholder="ex: energia-solar"
// //             onChange={e => set("slug", slugify(e.target.value))} />
// //         </div>
// //         <div className="field">
// //           <label>Categoria</label>
// //           <select className="fi" value={f.category} onChange={e => set("category", e.target.value)}>
// //             {CATEGORIES.map(c => <option key={c}>{c}</option>)}
// //           </select>
// //         </div>
// //         <div className="field">
// //           <label>Ordem de exibição</label>
// //           <input className="fi" type="number" min={1} value={f.order}
// //             onChange={e => set("order", parseInt(e.target.value) || 1)} />
// //         </div>
// //       </div>

// //       {/* ── Descrições ── */}
// //       <div className="fsec">Descrições</div>
// //       <div className="field">
// //         <label>Descrição curta <span className="flabel-note">(aparece no card do site)</span></label>
// //         <input className="fi" value={f.desc} placeholder="Frase de impacto — 1 a 2 linhas"
// //           onChange={e => set("desc", e.target.value)} />
// //       </div>
// //       <div className="field">
// //         <label>Descrição completa <span className="flabel-note">(página dedicada do produto)</span></label>
// //         <textarea className="fi" rows={4} value={f.longDesc}
// //           placeholder="Texto completo, contexto, diferenciais…"
// //           onChange={e => set("longDesc", e.target.value)}
// //           style={{ resize: "vertical" }} />
// //       </div>

// //       {/* ── Imagem e visual ── */}
// //       <div className="fsec">Imagem de Capa e Visual</div>

// //       {/* ── IMAGE UPLOADER ── */}
// //       <div className="field">
// //         <label>
// //           Imagem de capa{" "}
// //           <span className="flabel-note">(16:9 recomendado · guardada em public/img/)</span>
// //         </label>
// //         <ImageUploader
// //           value={f.image}
// //           onChange={url => set("image", url)}
// //           onBusyChange={setUploadBusy}
// //         />
// //       </div>

// //       <div className="fg3">
// //         <div className="field">
// //           <label>Cor principal</label>
// //           <div style={{ display: "flex", gap: 8 }}>
// //             <input type="color" value={f.color} onChange={e => set("color", e.target.value)}
// //               style={{ width: 40, height: 38, border: "none", borderRadius: 6, cursor: "pointer", padding: 2 }} />
// //             <input className="fi" value={f.color} style={{ flex: 1 }} onChange={e => set("color", e.target.value)} />
// //           </div>
// //         </div>
// //         <div className="field">
// //           <label>Cor clara</label>
// //           <div style={{ display: "flex", gap: 8 }}>
// //             <input type="color" value={f.lightColor} onChange={e => set("lightColor", e.target.value)}
// //               style={{ width: 40, height: 38, border: "none", borderRadius: 6, cursor: "pointer", padding: 2 }} />
// //             <input className="fi" value={f.lightColor} style={{ flex: 1 }} onChange={e => set("lightColor", e.target.value)} />
// //           </div>
// //         </div>
// //         <div className="field">
// //           <label>Estado</label>
// //           <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
// //             <label className="toggle">
// //               <input type="checkbox" checked={f.active} onChange={e => set("active", e.target.checked)} />
// //               <span className="tslide" />
// //             </label>
// //             <span style={{ fontSize: 12, fontWeight: 700, color: f.active ? "#095b66" : "#aaa" }}>
// //               {f.active ? "Activo" : "Inactivo"}
// //             </span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* pré-visualização do gradiente quando não há imagem */}
// //       {!f.image && (
// //         <div style={{
// //           height: 60,
// //           background: `linear-gradient(135deg, ${f.lightColor}, ${f.color}22)`,
// //           borderRadius: 8,
// //           border: `1.5px dashed ${f.color}55`,
// //           display: "flex", alignItems: "center", justifyContent: "center",
// //         }}>
// //           <span style={{ fontSize: 11, color: f.color, fontWeight: 700, opacity: .6 }}>
// //             Pré-visualização do gradiente (sem imagem)
// //           </span>
// //         </div>
// //       )}

// //       {/* ── Especificações ── */}
// //       <div className="fsec">Especificações Técnicas</div>
// //       <div className="field">
// //         <label>Specs / Destaques técnicos</label>
// //         <small>Prima Enter ou clique + Add para cada item</small>
// //         <TagInput value={f.specs} onChange={v => set("specs", v)} placeholder="ex: Até 6300 A · Forma 1 a 4" />
// //       </div>

// //       {/* ── Marcas ── */}
// //       <div className="fsec">Marcas e Parceiros <span className="flabel-note" style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: 10 }}>— opcional</span></div>
// //       <div className="field">
// //         <label>Marcas</label>
// //         <TagInput value={f.brands} onChange={v => set("brands", v)} placeholder="ex: Huawei FusionSolar" />
// //       </div>

// //       {/* ── Métricas ── */}
// //       <div className="fsec">Métricas de Destaque</div>
// //       <div className="field">
// //         <label>Highlights</label>
// //         <small>Rótulo → Valor  ·  ex: +50 MW → instalados</small>
// //         <HighlightsInput value={f.highlights} onChange={v => set("highlights", v)} />
// //       </div>

// //       {/* ── Actions ── */}
// //       <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", paddingTop: 16, borderTop: "1px solid #f0f5f6" }}>
// //         <button className="btn-ghost" onClick={onCancel} disabled={saving || uploadBusy}>Cancelar</button>
// //         <button
// //           className="btn-primary"
// //           disabled={!valid || saving || uploadBusy}
// //           onClick={() => onSave(f)}
// //           title={uploadBusy ? "Aguardar o upload terminar…" : undefined}
// //         >
// //           {saving       ? "A guardar…"          :
// //            uploadBusy   ? "Aguardar upload…"    :
// //            f.id         ? "Guardar Alterações"  : "Criar Produto"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════════════
// //    ROW
// // ══════════════════════════════════════════════════════ */
// // function ProductRow({ p, onEdit, onToggle, onDelete }: {
// //   p: Product; onEdit: () => void; onToggle: () => void; onDelete: () => void;
// // }) {
// //   return (
// //     <div className={`prow ${!p.active ? "prow-off" : ""}`}>
// //       <div className="prow-accent" style={{ background: p.color }} />

// //       {/* Thumbnail */}
// //       <div className="prow-thumb" style={{ background: p.lightColor }}>
// //         {p.image
// //           ? <img src={p.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 8 }} />
// //           : <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
// //               <rect x="3" y="3" width="18" height="18" rx="3" stroke={p.color} strokeWidth="1.5"/>
// //               <circle cx="8.5" cy="8.5" r="1.5" fill={p.color}/>
// //               <path d="M3 15l5-5 4 4 3-3 6 6" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// //             </svg>}
// //       </div>

// //       {/* Info */}
// //       <div style={{ flex: 1, minWidth: 0 }}>
// //         <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2, flexWrap: "wrap" }}>
// //           <span className="cat-pill" style={{ background: p.lightColor, color: p.color }}>{p.category || "—"}</span>
// //           <span style={{ fontSize: 9.5, color: "#b0c8ca", fontWeight: 600 }}>#{p.order} · /{p.slug}</span>
// //           {!p.active && <span className="off-badge">INACTIVO</span>}
// //           {p.image && (
// //             <span style={{ fontSize: 9, color: "#22c55e", fontWeight: 700, background: "#f0fdf4", borderRadius: 4, padding: "1px 5px" }}>
// //               📷 com imagem
// //             </span>
// //           )}
// //         </div>
// //         <div style={{ fontSize: 14, fontWeight: 800, color: "#0a1c1e", marginBottom: 3 }}>{p.name}</div>
// //         <div style={{ fontSize: 11.5, color: "#5a8285", lineHeight: 1.5, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 480 }}>
// //           {p.desc}
// //         </div>
// //         <div style={{ display: "flex", gap: 4, marginTop: 6, flexWrap: "wrap" }}>
// //           {p.brands.map(b => <span key={b} className="brand-badge">{b}</span>)}
// //           {p.highlights.slice(0, 3).map((h, i) => (
// //             <span key={i} className="hl-badge">{h.label}<span style={{ opacity: .6 }}> {h.value}</span></span>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Actions */}
// //       <div style={{ display: "flex", gap: 5, flexShrink: 0, alignItems: "center" }}>
// //         <button className="icon-btn" onClick={onToggle} title={p.active ? "Desactivar" : "Activar"}>
// //           <svg viewBox="0 0 20 20" fill="none" width="14" height="14">
// //             <circle cx="10" cy="10" r="7" stroke={p.active ? "#095b66" : "#ccc"} strokeWidth="2"/>
// //             {p.active && <circle cx="10" cy="10" r="3.5" fill="#095b66"/>}
// //           </svg>
// //         </button>
// //         <button className="icon-btn" onClick={onEdit} title="Editar">
// //           <svg viewBox="0 0 20 20" fill="none" width="14" height="14">
// //             <path d="M14.5 2.5l3 3L6 17H3v-3L14.5 2.5z" stroke="#095b66" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
// //           </svg>
// //         </button>
// //         <button className="icon-btn icon-btn-del" onClick={onDelete} title="Eliminar">
// //           <svg viewBox="0 0 20 20" fill="none" width="14" height="14">
// //             <path d="M4 6h12M8 6V4h4v2M7 6v10h6V6H7z" stroke="#e05a5a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
// //           </svg>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════════════
// //    TOAST
// // ══════════════════════════════════════════════════════ */
// // function Toast({ msg, type, onClose }: { msg: string; type: "ok" | "err"; onClose: () => void }) {
// //   useEffect(() => { const t = setTimeout(onClose, 3500); return () => clearTimeout(t); }, [onClose]);
// //   return (
// //     <div style={{
// //       position: "fixed", bottom: 28, right: 28, zIndex: 999,
// //       background: type === "ok" ? "#095b66" : "#e05a5a",
// //       color: "#fff", borderRadius: 10, padding: "12px 20px",
// //       fontSize: 13, fontWeight: 700, fontFamily: "'Montserrat',sans-serif",
// //       boxShadow: "0 8px 32px rgba(0,0,0,.18)",
// //       display: "flex", alignItems: "center", gap: 10,
// //     }}>
// //       {type === "ok" ? "✓" : "✕"} {msg}
// //       <button onClick={onClose} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: 16, lineHeight: 1, opacity: .7 }}>×</button>
// //     </div>
// //   );
// // }

// // /* ══════════════════════════════════════════════════════
// //    MAIN
// // ══════════════════════════════════════════════════════ */
// // export default function ProductsAdmin() {
// //   const [products,  setProducts]  = useState<Product[]>([]);
// //   const [loading,   setLoading]   = useState(true);
// //   const [saving,    setSaving]    = useState(false);
// //   const [editing,   setEditing]   = useState<number | null>(null);
// //   const [creating,  setCreating]  = useState(false);
// //   const [search,    setSearch]    = useState("");
// //   const [catFilter, setCatFilter] = useState("Todas");
// //   const [toast,     setToast]     = useState<{ msg: string; type: "ok" | "err" } | null>(null);
// //   const formRef = useRef<HTMLDivElement>(null);

// //   /* ── Load ── */
// //   const load = useCallback(async () => {
// //     setLoading(true);
// //     try {
// //       const res = await fetch(API);
// //       if (!res.ok) throw new Error();
// //       setProducts(await res.json());
// //     } catch {
// //       setToast({ msg: "Erro ao carregar produtos", type: "err" });
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => { load(); }, [load]);

// //   /* ── Scroll to form ── */
// //   useEffect(() => {
// //     if ((creating || editing !== null) && formRef.current)
// //       formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
// //   }, [creating, editing]);

// //   /* ── Save ── */
// //   const save = async (data: Omit<Product, "id"> & { id?: number }) => {
// //     setSaving(true);
// //     try {
// //       const isEdit = !!data.id;
// //       const res = await fetch(isEdit ? `${API}/${data.id}` : API, {
// //         method: isEdit ? "PATCH" : "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(data),
// //       });
// //       if (!res.ok) {
// //         const err = await res.json();
// //         throw new Error(err.error ?? "Erro desconhecido");
// //       }
// //       setToast({ msg: isEdit ? "Produto actualizado" : "Produto criado", type: "ok" });
// //       setEditing(null); setCreating(false);
// //       await load();
// //     } catch (e: unknown) {
// //       setToast({ msg: e instanceof Error ? e.message : "Erro ao guardar", type: "err" });
// //     } finally {
// //       setSaving(false);
// //     }
// //   };

// //   /* ── Toggle ── */
// //   const toggle = async (p: Product) => {
// //     try {
// //       const res = await fetch(`${API}/${p.id}`, {
// //         method: "PATCH",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ active: !p.active }),
// //       });
// //       if (!res.ok) throw new Error();
// //       setProducts(ps => ps.map(x => x.id === p.id ? { ...x, active: !x.active } : x));
// //     } catch {
// //       setToast({ msg: "Erro ao actualizar estado", type: "err" });
// //     }
// //   };

// //   /* ── Delete ── */
// //   const del = async (p: Product) => {
// //     if (!window.confirm(`Eliminar "${p.name}"?`)) return;
// //     try {
// //       const res = await fetch(`${API}/${p.id}`, { method: "DELETE" });
// //       if (!res.ok) throw new Error();
// //       setProducts(ps => ps.filter(x => x.id !== p.id));
// //       setToast({ msg: "Produto eliminado", type: "ok" });
// //     } catch {
// //       setToast({ msg: "Erro ao eliminar produto", type: "err" });
// //     }
// //   };

// //   /* ── Filter ── */
// //   const allCats = ["Todas", ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))];
// //   const visible = products
// //     .filter(p => catFilter === "Todas" || p.category === catFilter)
// //     .filter(p => !search ||
// //       p.name.toLowerCase().includes(search.toLowerCase()) ||
// //       p.slug.includes(search.toLowerCase()) ||
// //       p.category.toLowerCase().includes(search.toLowerCase()))
// //     .sort((a, b) => a.order - b.order);

// //   /* ══════════════════════════════════════════════════════
// //      RENDER
// //   ══════════════════════════════════════════════════════ */
// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');
// //         *{box-sizing:border-box;margin:0;padding:0}
// //         .padm{font-family:'Montserrat',sans-serif;background:#f4f6f6;min-height:100vh}

// //         .topbar{background:#095b66;padding:0 32px;height:58px;display:flex;align-items:center;justify-content:space-between}
// //         .tlogo{font-size:13px;font-weight:900;letter-spacing:.08em;color:#fff;text-transform:uppercase}
// //         .tsub{font-size:9px;font-weight:700;letter-spacing:.2em;color:rgba(255,255,255,.45);text-transform:uppercase}
// //         .tright{font-size:11px;color:rgba(255,255,255,.45);font-weight:600}

// //         .page{max-width:1000px;margin:0 auto;padding:36px 24px 80px}
// //         .ph{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:28px;gap:16px;flex-wrap:wrap}
// //         .peyebrow{font-size:9.5px;font-weight:800;color:#095b66;letter-spacing:.2em;text-transform:uppercase;margin-bottom:6px}
// //         .ptitle{font-size:30px;font-weight:900;color:#0a1c1e;line-height:1.1}
// //         .psub{font-size:12.5px;color:#6a9598;margin-top:4px;font-weight:600}

// //         .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:28px}
// //         .scard{background:#fff;border:1.5px solid #e8f0f1;border-radius:12px;padding:16px 20px}
// //         .sval{font-size:26px;font-weight:900;color:#095b66;line-height:1;margin-bottom:2px}
// //         .slbl{font-size:10.5px;font-weight:600;color:#6a9598}

// //         .toolbar{display:flex;gap:10px;margin-bottom:18px;align-items:center;flex-wrap:wrap}
// //         .swrap{position:relative;flex:1;min-width:200px;max-width:300px}
// //         .swrap svg{position:absolute;left:12px;top:50%;transform:translateY(-50%);pointer-events:none}
// //         .sinp{width:100%;background:#fff;border:1.5px solid #dde8ea;border-radius:9px;padding:9px 12px 9px 36px;font-family:'Montserrat',sans-serif;font-size:12.5px;color:#1a2c2e;outline:none;transition:border-color .2s}
// //         .sinp:focus{border-color:#095b66}
// //         .sinp::placeholder{color:#b0c8ca}
// //         .cpill{padding:6px 13px;border-radius:99px;border:1.5px solid #dde8ea;background:#fff;font-size:10.5px;font-weight:700;color:#4a7275;cursor:pointer;transition:all .15s;font-family:'Montserrat',sans-serif;white-space:nowrap}
// //         .cpill:hover{border-color:#095b66;color:#095b66}
// //         .cpill.on{background:#095b66;border-color:#095b66;color:#fff}

// //         .form-panel{background:#fff;border:1.5px solid #dde8ea;border-radius:16px;padding:32px 36px;display:flex;flex-direction:column;gap:20px;margin-bottom:24px}
// //         .fsec{font-size:9px;font-weight:800;color:#095b66;letter-spacing:.22em;text-transform:uppercase;padding-bottom:8px;border-bottom:1px solid #f0f5f6;margin-top:4px}
// //         .fg2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
// //         .fg3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}
// //         .field{display:flex;flex-direction:column;gap:6px}
// //         .field label{font-size:9.5px;font-weight:800;color:#095b66;letter-spacing:.14em;text-transform:uppercase}
// //         .field small{font-size:10.5px;color:#a0bbbe;margin-bottom:2px}
// //         .flabel-note{font-weight:400;text-transform:none;letter-spacing:0;font-size:9px;color:#b0c8ca}
// //         .fi{width:100%;background:#f8fbfc;border:1.5px solid #dde8ea;border-radius:8px;color:#1a2c2e;padding:10px 13px;font-family:'Montserrat',sans-serif;font-size:13px;outline:none;transition:border-color .2s,background .2s}
// //         .fi:focus{border-color:#095b66;background:#fff}
// //         .fi::placeholder{color:#b8d0d2}
// //         select.fi{cursor:pointer}

// //         .btn-primary{background:#095b66;color:#fff;border:none;border-radius:8px;padding:11px 26px;font-family:'Montserrat',sans-serif;font-size:11.5px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;cursor:pointer;transition:all .2s}
// //         .btn-primary:hover:not(:disabled){background:#0a7a89;transform:translateY(-1px);box-shadow:0 4px 16px rgba(9,91,102,.25)}
// //         .btn-primary:disabled{opacity:.35;cursor:not-allowed}
// //         .btn-ghost{background:transparent;color:#4a7275;border:1.5px solid #dde8ea;border-radius:8px;padding:10px 22px;font-family:'Montserrat',sans-serif;font-size:11.5px;font-weight:700;cursor:pointer;transition:all .2s}
// //         .btn-ghost:hover{border-color:#095b66;color:#095b66}
// //         .btn-ghost:disabled{opacity:.4;cursor:not-allowed}
// //         .btn-sm{background:#f0f9fa;color:#095b66;border:1.5px solid #c8e8eb;border-radius:7px;padding:8px 14px;white-space:nowrap;font-family:'Montserrat',sans-serif;font-size:10.5px;font-weight:700;cursor:pointer;transition:all .18s}
// //         .btn-sm:hover{background:#095b66;color:#fff;border-color:#095b66}
// //         .icon-btn{width:34px;height:34px;border-radius:8px;border:1.5px solid #e8f0f1;background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;flex-shrink:0}
// //         .icon-btn:hover{border-color:#095b66;background:#f0f9fa}
// //         .icon-btn-del:hover{border-color:#e05a5a;background:#fff5f5}

// //         .toggle{position:relative;display:inline-flex;width:40px;height:22px;flex-shrink:0}
// //         .toggle input{opacity:0;width:0;height:0}
// //         .tslide{position:absolute;inset:0;border-radius:99px;background:#dde8ea;cursor:pointer;transition:background .2s}
// //         .tslide::before{content:'';position:absolute;width:16px;height:16px;left:3px;bottom:3px;background:#fff;border-radius:50%;transition:transform .22s;box-shadow:0 1px 3px rgba(0,0,0,.15)}
// //         .toggle input:checked + .tslide{background:#095b66}
// //         .toggle input:checked + .tslide::before{transform:translateX(18px)}

// //         .prow{background:#fff;border:1.5px solid #e8f0f1;border-radius:14px;padding:16px 20px;display:flex;align-items:center;gap:14px;transition:all .2s}
// //         .prow:hover{border-color:#c8e8eb;box-shadow:0 4px 16px rgba(9,91,102,.07)}
// //         .prow-off{opacity:.5}
// //         .prow-accent{width:4px;height:44px;border-radius:99px;flex-shrink:0}
// //         .prow-thumb{width:60px;height:42px;border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden}
// //         .cat-pill{font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;border-radius:5px;padding:2px 7px}
// //         .off-badge{font-size:9px;font-weight:800;background:#f0f0f0;color:#999;border-radius:99px;padding:1px 8px}
// //         .brand-badge{font-size:9.5px;font-weight:800;color:#095b66;background:#f0f9fa;border:1px solid #c8e8eb;border-radius:5px;padding:2px 7px}
// //         .hl-badge{font-size:9.5px;font-weight:800;color:#fff;background:#095b66;border-radius:5px;padding:2px 7px}

// //         .sh{display:flex;align-items:center;gap:10px;margin-bottom:14px}
// //         .sl{font-size:9.5px;font-weight:800;color:#095b66;letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}
// //         .sline{flex:1;height:1px;background:#e8f0f1}

// //         .skel{background:linear-gradient(90deg,#f0f5f6 25%,#e8f0f1 50%,#f0f5f6 75%);background-size:200% 100%;animation:shimmer 1.4s infinite;border-radius:10px}
// //         @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
// //         @keyframes spin{to{transform:rotate(360deg)}}

// //         @media(max-width:640px){
// //           .stats{grid-template-columns:repeat(2,1fr)}
// //           .fg2,.fg3{grid-template-columns:1fr}
// //           .ph{flex-direction:column;align-items:flex-start}
// //         }
// //       `}</style>

// //       <div className="padm">
// //         <div className="page">

// //           {/* ── Header ── */}
// //           <div className="ph">
// //             <div>
// //               <div className="peyebrow">— Catálogo de Produtos</div>
// //               <h1 className="ptitle">Produtos</h1>
// //               <p className="psub">
// //                 {loading ? "A carregar…" : `${products.filter(p => p.active).length} activos · ${products.filter(p => !p.active).length} inactivos · ${new Set(products.map(p => p.category).filter(Boolean)).size} categorias`}
// //               </p>
// //             </div>
// //             {!creating && editing === null && (
// //               <button className="btn-primary" onClick={() => setCreating(true)}>+ Novo Produto</button>
// //             )}
// //           </div>

// //           {/* ── Stats ── */}
// //           <div className="stats">
// //             {[
// //               { v: products.length,                                                     l: "Total" },
// //               { v: products.filter(p => p.active).length,                               l: "Activos" },
// //               { v: new Set(products.map(p => p.category).filter(Boolean)).size,          l: "Categorias" },
// //               { v: products.filter(p => p.image).length,                                l: "Com imagem" },
// //             ].map(s => (
// //               <div key={s.l} className="scard">
// //                 {loading
// //                   ? <div className="skel" style={{ height: 26, width: 40, marginBottom: 6 }} />
// //                   : <div className="sval">{s.v}</div>}
// //                 <div className="slbl">{s.l}</div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* ── Formulário de criação ── */}
// //           {creating && (
// //             <div ref={formRef}>
// //               <div className="sh"><span className="sl">Novo Produto</span><div className="sline" /></div>
// //               <ProductForm
// //                 initial={{ ...EMPTY, order: products.length + 1 }}
// //                 onSave={save} onCancel={() => setCreating(false)} saving={saving}
// //               />
// //             </div>
// //           )}

// //           {/* ── Toolbar ── */}
// //           {!creating && editing === null && (
// //             <div className="toolbar">
// //               <div className="swrap">
// //                 <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
// //                   <circle cx="6.5" cy="6.5" r="4.5" stroke="#9bbbbe" strokeWidth="1.5"/>
// //                   <path d="M10 10l3 3" stroke="#9bbbbe" strokeWidth="1.5" strokeLinecap="round"/>
// //                 </svg>
// //                 <input className="sinp" value={search}
// //                   onChange={e => setSearch(e.target.value)}
// //                   placeholder="Pesquisar por nome, slug ou categoria…" />
// //               </div>
// //               <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
// //                 {allCats.map(c => (
// //                   <button key={c} className={`cpill ${catFilter === c ? "on" : ""}`}
// //                     onClick={() => setCatFilter(c)}>{c}</button>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* ── Skeleton ── */}
// //           {loading && (
// //             <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
// //               {[1, 2, 3].map(i => (
// //                 <div key={i} className="skel" style={{ height: 82, borderRadius: 14 }} />
// //               ))}
// //             </div>
// //           )}

// //           {/* ── Lista ── */}
// //           {!loading && (
// //             <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
// //               {visible.map(p =>
// //                 editing === p.id ? (
// //                   <div key={p.id} ref={formRef}>
// //                     <div className="sh">
// //                       <span className="sl">Editar — {p.name}</span>
// //                       <div className="sline" />
// //                     </div>
// //                     <ProductForm
// //                       initial={p} onSave={save}
// //                       onCancel={() => setEditing(null)} saving={saving}
// //                     />
// //                   </div>
// //                 ) : (
// //                   <ProductRow key={p.id} p={p}
// //                     onEdit={() => { setCreating(false); setEditing(p.id); }}
// //                     onToggle={() => toggle(p)}
// //                     onDelete={() => del(p)}
// //                   />
// //                 )
// //               )}
// //               {visible.length === 0 && !loading && (
// //                 <div style={{ textAlign: "center", padding: "64px 0", color: "#b0c8ca", fontSize: 13, fontWeight: 600 }}>
// //                   Nenhum produto encontrado.
// //                 </div>
// //               )}
// //             </div>
// //           )}

// //         </div>
// //       </div>

// //       {toast && (
// //         <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />
// //       )}
// //     </>
// //   );
// // }




// "use client";
// import React, { useState, useEffect, useCallback } from "react";

// /* ─────────────────────────────────────────────
//    TYPES
// ───────────────────────────────────────────── */
// export interface Product {
//   id: number;
//   slug: string;
//   name: string;
//   category: string;
//   desc: string;
//   longDesc?: string;
//   color?: string;
//   lightColor?: string;
//   specs?: string[];
//   brands?: string[];
//   highlights?: string[];
//   iconIndex?: number;
//   image?: string | null;
//   active?: boolean;
//   order?: number;
//   badge?: string | null;
//   tag?: string | null;
// }

// type FormState = Omit<Product, "id"> & { id?: number };

// const EMPTY_FORM: FormState = {
//   slug: "", name: "", category: "", desc: "", longDesc: "",
//   color: "#095b66", lightColor: "#e8f7f9",
//   specs: [], brands: [], highlights: [],
//   iconIndex: 0, image: null, active: true, order: 0,
//   badge: null, tag: null,
// };

// /* ─────────────────────────────────────────────
//    HELPERS
// ───────────────────────────────────────────── */
// function slugify(s: string) {
//   return s.toLowerCase()
//     .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-|-$/g, "");
// }

// function TagInput({
//   label, value, onChange,
// }: { label: string; value: string[]; onChange: (v: string[]) => void }) {
//   const [input, setInput] = useState("");
//   const add = () => {
//     const t = input.trim();
//     if (t && !value.includes(t)) onChange([...value, t]);
//     setInput("");
//   };
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//       <span style={labelStyle}>{label}</span>
//       <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 6 }}>
//         {value.map((v, i) => (
//           <span key={i} style={{
//             background: "#e8f7f9", border: "1px solid #b8dde2", borderRadius: 99,
//             fontSize: 11, fontWeight: 700, color: "#095b66",
//             padding: "3px 10px", display: "flex", alignItems: "center", gap: 5,
//           }}>
//             {v}
//             <button onClick={() => onChange(value.filter((_, j) => j !== i))}
//               style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "#4a7275", lineHeight: 1, padding: 0 }}>
//               ×
//             </button>
//           </span>
//         ))}
//       </div>
//       <div style={{ display: "flex", gap: 6 }}>
//         <input
//           style={inputStyle} value={input}
//           placeholder={`Adicionar ${label.toLowerCase()}…`}
//           onChange={e => setInput(e.target.value)}
//           onKeyDown={e => e.key === "Enter" && (e.preventDefault(), add())}
//         />
//         <button onClick={add} style={btnSmallStyle}>+</button>
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    PRODUCT CARD (admin preview variant)
// ───────────────────────────────────────────── */
// function AdminProductCard({
//   p, onEdit, onDelete, onToggle,
// }: {
//   p: Product;
//   onEdit: (p: Product) => void;
//   onDelete: (id: number) => void;
//   onToggle: (id: number, active: boolean) => void;
// }) {
//   const accent = p.color ?? "#095b66";
//   const bg     = p.lightColor ?? "#e8f7f9";

//   return (
//     <div style={{
//       background: "#fff",
//       border: `1.5px solid ${p.active ? "#dde8ea" : "#f0d0d0"}`,
//       borderRadius: 16,
//       overflow: "hidden",
//       display: "flex",
//       flexDirection: "column",
//       position: "relative",
//       transition: "box-shadow .2s",
//       opacity: p.active ? 1 : .65,
//     }}>
//       {/* Active toggle badge */}
//       <div style={{
//         position: "absolute", top: 10, left: 10, zIndex: 3,
//         background: p.active ? "#22c55e" : "#ef4444",
//         borderRadius: 99, width: 8, height: 8,
//         boxShadow: `0 0 0 3px ${p.active ? "#dcfce7" : "#fee2e2"}`,
//       }} />

//       {/* Image / Placeholder */}
//       <div style={{
//         width: "100%", aspectRatio: "16/9", background: p.image ? "#f0f4f5" : bg,
//         display: "flex", alignItems: "center", justifyContent: "center",
//         overflow: "hidden", position: "relative",
//       }}>
//         {p.image ? (
//           <img src={p.image} alt={p.name}
//             style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//         ) : (
//           <div style={{
//             width: 52, height: 52, borderRadius: "50%",
//             background: `${accent}22`,
//             display: "flex", alignItems: "center", justifyContent: "center",
//             fontSize: 24, fontWeight: 900, color: accent,
//           }}>
//             {p.category?.[0]?.toUpperCase() ?? "P"}
//           </div>
//         )}
//         {p.badge && (
//           <div style={{
//             position: "absolute", top: 8, right: 8,
//             background: accent, color: "#fff",
//             fontSize: 8, fontWeight: 800, letterSpacing: ".1em",
//             textTransform: "uppercase", borderRadius: 99, padding: "2px 7px",
//           }}>{p.badge}</div>
//         )}
//       </div>

//       {/* Info */}
//       <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
//         <div style={{ fontSize: 9, fontWeight: 700, color: accent, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 4 }}>
//           {p.category}
//         </div>
//         <h3 style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e", lineHeight: 1.3, marginBottom: 6 }}>
//           {p.name}
//         </h3>
//         <p style={{ fontSize: 11.5, color: "#5a8285", lineHeight: 1.6, flex: 1, marginBottom: 12 }}>
//           {p.desc}
//         </p>

//         {/* Footer specs */}
//         {(p.specs?.length || p.brands?.length) ? (
//           <div style={{
//             display: "flex", justifyContent: "space-between", alignItems: "center",
//             paddingTop: 10, borderTop: "1px solid #edf3f4", marginBottom: 12,
//           }}>
//             {p.specs?.[0] && (
//               <div>
//                 <div style={{ fontSize: 9, color: "#9bbbbe", fontWeight: 600 }}>Potência</div>
//                 <div style={{ fontSize: 11, fontWeight: 800, color: accent }}>{p.specs[0]}</div>
//               </div>
//             )}
//             {p.brands?.[0] && (
//               <div style={{ textAlign: "right" }}>
//                 <div style={{ fontSize: 9, color: "#9bbbbe", fontWeight: 600 }}>Marca</div>
//                 <div style={{ fontSize: 10, fontWeight: 700, color: "#1a2c2e" }}>{p.brands[0]}</div>
//               </div>
//             )}
//           </div>
//         ) : null}

//         {/* Actions */}
//         <div style={{ display: "flex", gap: 6 }}>
//           <button onClick={() => onEdit(p)} style={{
//             flex: 1, padding: "7px 0", borderRadius: 7,
//             border: "1.5px solid #095b66", background: "#fff",
//             color: "#095b66", fontSize: 11, fontWeight: 700, cursor: "pointer",
//             transition: "all .15s",
//           }}>
//             ✏️ Editar
//           </button>
//           <button onClick={() => onToggle(p.id, !p.active)} style={{
//             padding: "7px 10px", borderRadius: 7,
//             border: `1.5px solid ${p.active ? "#f59e0b" : "#22c55e"}`,
//             background: "#fff",
//             color: p.active ? "#f59e0b" : "#22c55e",
//             fontSize: 11, fontWeight: 700, cursor: "pointer",
//           }}>
//             {p.active ? "⏸" : "▶"}
//           </button>
//           <button onClick={() => onDelete(p.id)} style={{
//             padding: "7px 10px", borderRadius: 7,
//             border: "1.5px solid #ef4444", background: "#fff",
//             color: "#ef4444", fontSize: 11, fontWeight: 700, cursor: "pointer",
//           }}>
//             🗑
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    MODAL FORM
// ───────────────────────────────────────────── */
// function ProductModal({
//   form, setForm, onSave, onClose, saving,
// }: {
//   form: FormState;
//   setForm: React.Dispatch<React.SetStateAction<FormState>>;
//   onSave: () => void;
//   onClose: () => void;
//   saving: boolean;
// }) {
//   const set = (key: keyof FormState, val: unknown) =>
//     setForm(prev => ({ ...prev, [key]: val }));

//   const handleNameChange = (name: string) => {
//     setForm(prev => ({
//       ...prev, name,
//       slug: prev.id ? prev.slug : slugify(name),
//     }));
//   };

//   return (
//     <div style={{
//       position: "fixed", inset: 0, zIndex: 1000,
//       background: "rgba(0,0,0,.55)", backdropFilter: "blur(4px)",
//       display: "flex", alignItems: "center", justifyContent: "center",
//       padding: 20,
//     }} onClick={onClose}>
//       <div onClick={e => e.stopPropagation()} style={{
//         background: "#fff", borderRadius: 20, padding: "32px 36px",
//         width: "100%", maxWidth: 760, maxHeight: "90vh",
//         overflowY: "auto", display: "flex", flexDirection: "column", gap: 18,
//         boxShadow: "0 24px 80px rgba(0,0,0,.25)",
//       }}>
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <h2 style={{ fontSize: 20, fontWeight: 900, color: "#0a1c1e" }}>
//             {form.id ? "✏️ Editar Produto" : "➕ Novo Produto"}
//           </h2>
//           <button onClick={onClose} style={{
//             background: "#f4f6f6", border: "none", borderRadius: 8,
//             width: 36, height: 36, fontSize: 18, cursor: "pointer", color: "#4a7275",
//           }}>×</button>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
//           {/* Name */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//             <span style={labelStyle}>Nome *</span>
//             <input style={inputStyle} value={form.name}
//               onChange={e => handleNameChange(e.target.value)} placeholder="Nome do produto" />
//           </div>
//           {/* Slug */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//             <span style={labelStyle}>Slug *</span>
//             <input style={inputStyle} value={form.slug}
//               onChange={e => set("slug", e.target.value)} placeholder="slug-do-produto" />
//           </div>
//           {/* Category */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//             <span style={labelStyle}>Categoria</span>
//             <input style={inputStyle} value={form.category}
//               onChange={e => set("category", e.target.value)} placeholder="ex: Solar" />
//           </div>
//           {/* Tag */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//             <span style={labelStyle}>Tag</span>
//             <input style={inputStyle} value={form.tag ?? ""}
//               onChange={e => set("tag", e.target.value || null)} placeholder="ex: Industrial" />
//           </div>
//           {/* Badge */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//             <span style={labelStyle}>Badge</span>
//             <select style={inputStyle} value={form.badge ?? ""}
//               onChange={e => set("badge", e.target.value || null)}>
//               <option value="">Nenhum</option>
//               <option value="Novo">Novo</option>
//               <option value="Popular">Popular</option>
//             </select>
//           </div>
//           {/* Order */}
//           <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//             <span style={labelStyle}>Ordem</span>
//             <input style={inputStyle} type="number" value={form.order ?? 0}
//               onChange={e => set("order", Number(e.target.value))} />
//           </div>
//         </div>

//         {/* Desc */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//           <span style={labelStyle}>Descrição curta *</span>
//           <textarea style={{ ...inputStyle, minHeight: 72, resize: "vertical" }}
//             value={form.desc} onChange={e => set("desc", e.target.value)}
//             placeholder="Resumo do produto..." />
//         </div>

//         {/* Long Desc */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//           <span style={labelStyle}>Descrição longa</span>
//           <textarea style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
//             value={form.longDesc ?? ""} onChange={e => set("longDesc", e.target.value)}
//             placeholder="Descrição detalhada..." />
//         </div>

//         {/* Image URL */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//           <span style={labelStyle}>URL da Imagem</span>
//           <input style={inputStyle} value={form.image ?? ""}
//             onChange={e => set("image", e.target.value || null)}
//             placeholder="https://..." />
//           {form.image && (
//             <img src={form.image} alt="preview"
//               style={{ height: 120, objectFit: "cover", borderRadius: 8, border: "1px solid #dde8ea" }} />
//           )}
//         </div>

//         {/* Colors */}
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
//           <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//             <span style={labelStyle}>Cor principal</span>
//             <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//               <input type="color" value={form.color ?? "#095b66"}
//                 onChange={e => set("color", e.target.value)}
//                 style={{ width: 40, height: 36, border: "none", borderRadius: 6, cursor: "pointer" }} />
//               <input style={{ ...inputStyle, flex: 1 }} value={form.color ?? "#095b66"}
//                 onChange={e => set("color", e.target.value)} />
//             </div>
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//             <span style={labelStyle}>Cor clara</span>
//             <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//               <input type="color" value={form.lightColor ?? "#e8f7f9"}
//                 onChange={e => set("lightColor", e.target.value)}
//                 style={{ width: 40, height: 36, border: "none", borderRadius: 6, cursor: "pointer" }} />
//               <input style={{ ...inputStyle, flex: 1 }} value={form.lightColor ?? "#e8f7f9"}
//                 onChange={e => set("lightColor", e.target.value)} />
//             </div>
//           </div>
//         </div>

//         {/* Tag inputs */}
//         <TagInput label="Especificações" value={form.specs ?? []}
//           onChange={v => set("specs", v)} />
//         <TagInput label="Marcas" value={form.brands ?? []}
//           onChange={v => set("brands", v)} />
//         <TagInput label="Destaques" value={form.highlights ?? []}
//           onChange={v => set("highlights", v)} />

//         {/* Active */}
//         <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
//           <input type="checkbox" checked={form.active ?? true}
//             onChange={e => set("active", e.target.checked)}
//             style={{ width: 16, height: 16, accentColor: "#095b66" }} />
//           <span style={{ fontSize: 13, fontWeight: 600, color: "#1a2c2e" }}>Produto activo (visível no site)</span>
//         </label>

//         {/* Actions */}
//         <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", paddingTop: 8, borderTop: "1px solid #edf3f4" }}>
//           <button onClick={onClose} style={{
//             padding: "10px 22px", borderRadius: 8, border: "1.5px solid #dde8ea",
//             background: "#fff", color: "#4a7275", fontSize: 12, fontWeight: 700, cursor: "pointer",
//           }}>
//             Cancelar
//           </button>
//           <button onClick={onSave} disabled={saving} style={{
//             padding: "10px 28px", borderRadius: 8, border: "none",
//             background: saving ? "#9bbbbe" : "#095b66",
//             color: "#fff", fontSize: 12, fontWeight: 700, cursor: saving ? "not-allowed" : "pointer",
//             transition: "background .2s",
//           }}>
//             {saving ? "A guardar…" : form.id ? "Guardar alterações" : "Criar produto"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    SHARED STYLES
// ───────────────────────────────────────────── */
// const inputStyle: React.CSSProperties = {
//   background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 8,
//   color: "#1a2c2e", padding: "10px 12px",
//   fontFamily: "inherit", fontSize: 13, fontWeight: 500, outline: "none",
//   width: "100%",
// };
// const labelStyle: React.CSSProperties = {
//   fontSize: 10, fontWeight: 700, color: "#095b66",
//   letterSpacing: ".1em", textTransform: "uppercase",
// };
// const btnSmallStyle: React.CSSProperties = {
//   padding: "8px 14px", borderRadius: 8,
//   border: "1.5px solid #095b66", background: "#095b66",
//   color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", flexShrink: 0,
// };

// /* ─────────────────────────────────────────────
//    MAIN COMPONENT — ProductsAdmin
//    Drop inside AdminDashboard:
//    <ProductsAdmin />
// ───────────────────────────────────────────── */
// export default function ProductsAdmin() {
//   const [products,  setProducts]  = useState<Product[]>([]);
//   const [loading,   setLoading]   = useState(true);
//   const [search,    setSearch]    = useState("");
//   const [catFilter, setCatFilter] = useState("Todas");
//   const [view,      setView]      = useState<"grid" | "list">("grid");
//   const [modal,     setModal]     = useState(false);
//   const [form,      setForm]      = useState<FormState>(EMPTY_FORM);
//   const [saving,    setSaving]    = useState(false);
//   const [deleting,  setDeleting]  = useState<number | null>(null);
//   const [toast,     setToast]     = useState<{ msg: string; ok: boolean } | null>(null);

//   /* ── fetch ── */
//   const fetchProducts = useCallback(async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/cms/products");
//       if (!res.ok) throw new Error();
//       setProducts(await res.json());
//     } catch {
//       showToast("Erro ao carregar produtos", false);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => { fetchProducts(); }, [fetchProducts]);

//   /* ── toast ── */
//   const showToast = (msg: string, ok: boolean) => {
//     setToast({ msg, ok });
//     setTimeout(() => setToast(null), 3200);
//   };

//   /* ── open modal ── */
//   const openCreate = () => { setForm(EMPTY_FORM); setModal(true); };
//   const openEdit   = (p: Product) => { setForm({ ...p }); setModal(true); };
//   const closeModal = () => { setModal(false); setForm(EMPTY_FORM); };

//   /* ── save (create or update) ── */
//   const handleSave = async () => {
//     if (!form.slug || !form.name || !form.desc) {
//       showToast("Preencha: nome, slug e descrição", false);
//       return;
//     }
//     setSaving(true);
//     try {
//       const isEdit = !!form.id;
//       const url    = isEdit ? `/api/cms/products/${form.id}` : "/api/cms/products";
//       const method = isEdit ? "PATCH" : "POST";
//       const res    = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       if (!res.ok) {
//         const err = await res.json();
//         throw new Error(err.error ?? "Erro");
//       }
//       showToast(isEdit ? "Produto actualizado ✓" : "Produto criado ✓", true);
//       closeModal();
//       await fetchProducts();
//     } catch (e: unknown) {
//       showToast((e as Error).message, false);
//     } finally {
//       setSaving(false);
//     }
//   };

//   /* ── toggle active ── */
//   const handleToggle = async (id: number, active: boolean) => {
//     try {
//       const res = await fetch(`/api/cms/products/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ active }),
//       });
//       if (!res.ok) throw new Error();
//       setProducts(prev => prev.map(p => p.id === id ? { ...p, active } : p));
//       showToast(active ? "Produto activado" : "Produto desactivado", true);
//     } catch {
//       showToast("Erro ao actualizar", false);
//     }
//   };

//   /* ── delete ── */
//   const handleDelete = async (id: number) => {
//     if (!confirm("Eliminar este produto? Esta acção não pode ser desfeita.")) return;
//     setDeleting(id);
//     try {
//       const res = await fetch(`/api/cms/products/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error();
//       setProducts(prev => prev.filter(p => p.id !== id));
//       showToast("Produto eliminado", true);
//     } catch {
//       showToast("Erro ao eliminar", false);
//     } finally {
//       setDeleting(null);
//     }
//   };

//   /* ── filtering ── */
//   const categories = ["Todas", ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))];
//   const filtered   = products.filter(p => {
//     const matchCat  = catFilter === "Todas" || p.category === catFilter;
//     const q         = search.toLowerCase();
//     const matchQ    = !q || p.name.toLowerCase().includes(q) ||
//                       p.category?.toLowerCase().includes(q) ||
//                       p.desc?.toLowerCase().includes(q);
//     return matchCat && matchQ;
//   });

//   /* ─────────────────────────────────────────
//      RENDER
//   ───────────────────────────────────────── */
//   return (
//     <div style={{ fontFamily: "'Montserrat', sans-serif", color: "#1a2c2e" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
//         *, *::before, *::after { box-sizing: border-box; }
//         .adm-card:hover { box-shadow: 0 6px 24px rgba(9,91,102,.1); }
//         .adm-row:hover { background: #f8fbfc !important; }
//       `}</style>

//       {/* ── Toast ── */}
//       {toast && (
//         <div style={{
//           position: "fixed", top: 20, right: 20, zIndex: 9999,
//           background: toast.ok ? "#095b66" : "#ef4444",
//           color: "#fff", borderRadius: 10, padding: "12px 20px",
//           fontSize: 13, fontWeight: 700,
//           boxShadow: "0 8px 32px rgba(0,0,0,.2)",
//           animation: "cardIn .25s ease",
//         }}>
//           {toast.msg}
//         </div>
//       )}

//       {/* ── Header ── */}
//       <div style={{
//         display: "flex", alignItems: "center", justifyContent: "space-between",
//         marginBottom: 28, flexWrap: "wrap", gap: 12,
//       }}>
//         <div>
//           <h1 style={{ fontSize: 24, fontWeight: 900, color: "#0a1c1e", marginBottom: 4 }}>
//             Produtos
//           </h1>
//           <p style={{ fontSize: 13, color: "#6a9a9e" }}>
//             {products.length} produtos · {products.filter(p => p.active).length} activos
//           </p>
//         </div>
//         <button onClick={openCreate} style={{
//           background: "#095b66", color: "#fff", border: "none",
//           borderRadius: 10, padding: "12px 24px",
//           fontSize: 13, fontWeight: 700, cursor: "pointer",
//           display: "flex", alignItems: "center", gap: 8,
//           transition: "background .2s",
//         }}>
//           <span style={{ fontSize: 16 }}>+</span> Novo Produto
//         </button>
//       </div>

//       {/* ── Filters ── */}
//       <div style={{
//         display: "flex", gap: 10, marginBottom: 24,
//         flexWrap: "wrap", alignItems: "center",
//       }}>
//         {/* Search */}
//         <div style={{ position: "relative", flex: "1 1 220px", minWidth: 180 }}>
//           <svg viewBox="0 0 24 24" fill="none" width="14" height="14" style={{
//             position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)",
//             pointerEvents: "none",
//           }}>
//             <circle cx="11" cy="11" r="7" stroke="#9bbbbe" strokeWidth="2"/>
//             <path d="M16.5 16.5l4 4" stroke="#9bbbbe" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//           <input style={{ ...inputStyle, paddingLeft: 34 }}
//             placeholder="Pesquisar…" value={search}
//             onChange={e => setSearch(e.target.value)} />
//         </div>

//         {/* Category chips */}
//         <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
//           {categories.map(cat => (
//             <button key={cat} onClick={() => setCatFilter(cat)} style={{
//               padding: "8px 14px", borderRadius: 99,
//               border: "1.5px solid",
//               borderColor: catFilter === cat ? "#095b66" : "#dde8ea",
//               background: catFilter === cat ? "#095b66" : "#fff",
//               color: catFilter === cat ? "#fff" : "#4a7275",
//               fontSize: 11, fontWeight: 700, cursor: "pointer",
//               transition: "all .15s",
//             }}>
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* View toggle */}
//         <div style={{ display: "flex", gap: 4, marginLeft: "auto" }}>
//           {(["grid", "list"] as const).map(v => (
//             <button key={v} onClick={() => setView(v)} style={{
//               width: 34, height: 34, borderRadius: 8,
//               border: "1.5px solid",
//               borderColor: view === v ? "#095b66" : "#dde8ea",
//               background: view === v ? "#095b66" : "#fff",
//               color: view === v ? "#fff" : "#4a7275",
//               fontSize: 14, cursor: "pointer", display: "flex",
//               alignItems: "center", justifyContent: "center",
//             }}>
//               {v === "grid" ? "⊞" : "☰"}
//             </button>
//           ))}
//         </div>

//         <div style={{ fontSize: 12, color: "#9bbbbe", fontWeight: 600 }}>
//           {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
//         </div>
//       </div>

//       {/* ── Content ── */}
//       {loading ? (
//         <div style={{ textAlign: "center", padding: "64px 0", color: "#9bbbbe" }}>
//           <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
//           <div style={{ fontSize: 14, fontWeight: 700 }}>A carregar produtos…</div>
//         </div>
//       ) : filtered.length === 0 ? (
//         <div style={{ textAlign: "center", padding: "64px 0", color: "#9bbbbe" }}>
//           <div style={{ fontSize: 40, marginBottom: 12 }}>📦</div>
//           <div style={{ fontSize: 15, fontWeight: 700, color: "#4a7275", marginBottom: 6 }}>
//             Nenhum produto encontrado
//           </div>
//           <div style={{ fontSize: 13 }}>Crie o primeiro produto ou ajuste os filtros</div>
//         </div>
//       ) : view === "grid" ? (
//         /* GRID VIEW */
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
//           gap: 18,
//         }}>
//           {filtered.map(p => (
//             <div key={p.id} className="adm-card" style={{ opacity: deleting === p.id ? .4 : 1, transition: "opacity .2s" }}>
//               <AdminProductCard
//                 p={p}
//                 onEdit={openEdit}
//                 onDelete={handleDelete}
//                 onToggle={handleToggle}
//               />
//             </div>
//           ))}
//         </div>
//       ) : (
//         /* LIST VIEW */
//         <div style={{
//           background: "#fff", border: "1.5px solid #dde8ea",
//           borderRadius: 14, overflow: "hidden",
//         }}>
//           {/* Header row */}
//           <div style={{
//             display: "grid",
//             gridTemplateColumns: "48px 1fr 160px 120px 80px 120px",
//             gap: 12, padding: "12px 16px",
//             background: "#f8fbfc", borderBottom: "1px solid #edf3f4",
//             fontSize: 10, fontWeight: 700, color: "#6a9a9e", letterSpacing: ".1em", textTransform: "uppercase",
//           }}>
//             <div />
//             <div>Produto</div>
//             <div>Categoria</div>
//             <div>Marcas</div>
//             <div>Estado</div>
//             <div>Acções</div>
//           </div>

//           {filtered.map((p, i) => {
//             const accent = p.color ?? "#095b66";
//             const bg     = p.lightColor ?? "#e8f7f9";
//             return (
//               <div key={p.id} className="adm-row" style={{
//                 display: "grid",
//                 gridTemplateColumns: "48px 1fr 160px 120px 80px 120px",
//                 gap: 12, padding: "12px 16px",
//                 borderBottom: i < filtered.length - 1 ? "1px solid #edf3f4" : "none",
//                 alignItems: "center",
//                 opacity: deleting === p.id ? .4 : 1, transition: "all .15s",
//               }}>
//                 {/* Thumb */}
//                 <div style={{
//                   width: 44, height: 44, borderRadius: 8,
//                   background: p.image ? "#f0f4f5" : bg,
//                   overflow: "hidden", flexShrink: 0,
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                 }}>
//                   {p.image
//                     ? <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                     : <span style={{ fontSize: 16, fontWeight: 900, color: accent }}>{p.category?.[0]}</span>
//                   }
//                 </div>

//                 {/* Name + desc */}
//                 <div>
//                   <div style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e", marginBottom: 2 }}>{p.name}</div>
//                   <div style={{ fontSize: 11, color: "#6a9a9e", lineClamp: 1, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: 320 }}>{p.desc}</div>
//                 </div>

//                 {/* Category */}
//                 <div style={{ fontSize: 11, fontWeight: 700, color: accent }}>{p.category}</div>

//                 {/* Brands */}
//                 <div style={{ fontSize: 11, color: "#4a7275" }}>{p.brands?.[0] ?? "—"}</div>

//                 {/* Active */}
//                 <div>
//                   <span style={{
//                     background: p.active ? "#dcfce7" : "#fee2e2",
//                     color: p.active ? "#16a34a" : "#dc2626",
//                     fontSize: 10, fontWeight: 700, borderRadius: 99, padding: "3px 8px",
//                   }}>
//                     {p.active ? "Activo" : "Inactivo"}
//                   </span>
//                 </div>

//                 {/* Actions */}
//                 <div style={{ display: "flex", gap: 5 }}>
//                   <button onClick={() => openEdit(p)} style={{
//                     padding: "5px 10px", borderRadius: 6,
//                     border: "1.5px solid #095b66", background: "#fff",
//                     color: "#095b66", fontSize: 11, fontWeight: 700, cursor: "pointer",
//                   }}>Edit</button>
//                   <button onClick={() => handleToggle(p.id, !p.active)} style={{
//                     padding: "5px 8px", borderRadius: 6,
//                     border: `1.5px solid ${p.active ? "#f59e0b" : "#22c55e"}`,
//                     background: "#fff",
//                     color: p.active ? "#f59e0b" : "#22c55e",
//                     fontSize: 11, fontWeight: 700, cursor: "pointer",
//                   }}>
//                     {p.active ? "⏸" : "▶"}
//                   </button>
//                   <button onClick={() => handleDelete(p.id)} style={{
//                     padding: "5px 8px", borderRadius: 6,
//                     border: "1.5px solid #ef4444", background: "#fff",
//                     color: "#ef4444", fontSize: 11, fontWeight: 700, cursor: "pointer",
//                   }}>🗑</button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {/* ── Modal ── */}
//       {modal && (
//         <ProductModal
//           form={form} setForm={setForm}
//           onSave={handleSave} onClose={closeModal} saving={saving}
//         />
//       )}
//     </div>
//   );
// }








"use client";
import Link from "next/link";
import React, { useState, useCallback, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════════
   TYPES
══════════════════════════════════════════════════════ */
export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  desc: string;
  longDesc?: string;
  color?: string;
  lightColor?: string;
  specs?: string[];
  brands?: string[];
  highlights?: { label: string; value: string }[];
  iconIndex?: number;
  image?: string | null;
  active?: boolean;
  order?: number;
  badge?: string | null;
  tag?: string | null;
}

type FormState = Omit<Product, "id"> & { id?: number };

const EMPTY_FORM: FormState = {
  slug: "", name: "", category: "", desc: "", longDesc: "",
  color: "#095b66", lightColor: "#e8f7f9",
  specs: [], brands: [], highlights: [],
  iconIndex: 0, image: null, active: true, order: 0,
  badge: null, tag: null,
};

/* ══════════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════════ */
function slugify(s: string) {
  return s.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/* ══════════════════════════════════════════════════════
   IMAGE UPLOADER
   Igual ao AdminCategories — envia para /api/cms/upload
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
  const fileRef              = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver,  setDragOver]  = useState(false);
  const [error,     setError]     = useState<string | null>(null);

  const doUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) { setError("Apenas imagens são permitidas"); return; }
    if (file.size > 8 * 1024 * 1024)    { setError("Imagem demasiado grande (máx. 8 MB)"); return; }
    setError(null);
    setUploading(true);
    onBusyChange?.(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res  = await fetch("/api/cms/upload?prefix=product", { method: "POST", body: fd });
      const data = await res.json();
      if (data.url) onChange(data.url);
      else setError(data.error ?? "Erro no upload");
    } catch {
      setError("Erro ao fazer upload");
    } finally {
      setUploading(false);
      onBusyChange?.(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={S.label}>Imagem do Produto</span>

      {/* zona de drop */}
      <div
        style={{
          borderRadius: 10, overflow: "hidden", height: 164,
          border: dragOver ? "2px dashed #095b66" : "1.5px solid #dde8ea",
          background: dragOver ? "#e8f7f9" : (value ? "#000" : "#f8fbfc"),
          cursor: "pointer", position: "relative", transition: "all .2s",
        }}
        onDragOver={e  => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={e  => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files?.[0]; if (f) doUpload(f); }}
        onClick={() => !uploading && fileRef.current?.click()}
      >
        {value ? (
          <>
            <img
              src={value} alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: uploading ? .3 : 1, transition: "opacity .2s" }}
            />
            {/* overlay troca */}
            <div
              className="img-hover-overlay"
              style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "all .2s" }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.opacity = "1"; d.style.background = "rgba(9,27,30,.5)"; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.opacity = "0"; d.style.background = "transparent"; }}
            >
              <span style={{ fontSize: 11, color: "#fff", fontWeight: 700, background: "rgba(0,0,0,.4)", borderRadius: 99, padding: "5px 14px" }}>
                🔄 Trocar imagem
              </span>
            </div>
            {/* remover */}
            <button
              onClick={e => { e.stopPropagation(); onChange(null); }}
              style={{ position: "absolute", top: 8, right: 8, width: 24, height: 24, borderRadius: "50%", background: "rgba(0,0,0,.65)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}
            >
              <svg viewBox="0 0 10 10" fill="none" width="9"><path d="M2 2l6 6M8 2l-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </>
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
            {uploading ? (
              <svg viewBox="0 0 24 24" fill="none" width="28" style={{ animation: "spin .8s linear infinite" }}>
                <circle cx="12" cy="12" r="9" stroke="#dde8ea" strokeWidth="2.5"/>
                <path d="M12 3a9 9 0 019 9" stroke="#095b66" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" width="30">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" stroke={dragOver ? "#095b66" : "#c8d8da"} strokeWidth="1.6"/>
                  <circle cx="9" cy="11" r="2" fill={dragOver ? "#095b66" : "#c8d8da"}/>
                  <path d="M3 16l4-4 3 3 4-5 7 7" stroke={dragOver ? "#095b66" : "#c8d8da"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: dragOver ? "#095b66" : "#9bbbbe", fontWeight: 700 }}>
                    {dragOver ? "Largar aqui" : "Clique ou arraste a imagem"}
                  </div>
                  <div style={{ fontSize: 9.5, color: "#c8d8da", marginTop: 3 }}>JPG · PNG · WEBP · máx. 8 MB</div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => { const f = e.target.files?.[0]; if (f) doUpload(f); }}/>

      {/* botões abaixo */}
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          style={{ background: uploading ? "#e8f0f0" : "#f0f9fa", color: uploading ? "#9bbbbe" : "#095b66", border: "1.5px solid #c8e8eb", borderRadius: 7, padding: "7px 14px", fontFamily: "inherit", fontSize: 11, fontWeight: 700, cursor: uploading ? "not-allowed" : "pointer" }}
        >
          {uploading ? "A fazer upload…" : value ? "Trocar imagem" : "Escolher imagem"}
        </button>
        {value && (
          <button onClick={() => onChange(null)} style={{ background: "#fff5f5", color: "#e05a5a", border: "1.5px solid #fce8e8", borderRadius: 7, padding: "7px 14px", fontFamily: "inherit", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
            ✕ Remover
          </button>
        )}
      </div>

      {/* path salvo */}
      {value && !uploading && (
        <div style={{ fontSize: 10, color: "#6a9598", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 6, padding: "5px 9px", fontFamily: "monospace", wordBreak: "break-all" }}>
          <span style={{ color: "#9bbbbe", fontSize: 9, marginRight: 5 }}>PATH</span>{value}
        </div>
      )}
      {error && <div style={{ fontSize: 11, color: "#c0392b", fontWeight: 600 }}>⚠ {error}</div>}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   TAG INPUT
══════════════════════════════════════════════════════ */
function TagInput({ label, value, onChange }: { label: string; value: string[]; onChange: (v: string[]) => void }) {
  const [input, setInput] = useState("");
  const add = () => {
    const t = input.trim();
    if (t && !value.includes(t)) onChange([...value, t]);
    setInput("");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={S.label}>{label}</span>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", minHeight: 28 }}>
        {value.map((v, i) => (
          <span key={i} style={{ background: "#e8f7f9", border: "1px solid #b8dde2", borderRadius: 99, fontSize: 11, fontWeight: 700, color: "#095b66", padding: "3px 10px", display: "flex", alignItems: "center", gap: 5 }}>
            {v}
            <button onClick={() => onChange(value.filter((_, j) => j !== i))} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "#4a7275", lineHeight: 1, padding: 0 }}>×</button>
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        <input style={S.input} value={input} placeholder={`Adicionar ${label.toLowerCase()}…`} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), add())}/>
        <button onClick={add} style={{ padding: "9px 14px", borderRadius: 8, border: "1.5px solid #095b66", background: "#095b66", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>+</button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   PRODUCT DETAIL MODAL
   Design elegante — inspirado na ProdutosPage
══════════════════════════════════════════════════════ */
function ProductDetailModal({ p, onClose }: { p: Product; onClose: () => void }) {
  const accent = p.color      || "#095b66";
  const bg     = p.lightColor || "#e8f7f9";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", fn); };
  }, [onClose]);

  return (
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 900,
          background: "rgba(4,12,14,.82)",
          backdropFilter: "blur(10px)",
          animation: "dmOverlayIn .22s ease",
        }}
      />

      {/* contentor centralizado */}
      <div style={{ position: "fixed", inset: 0, zIndex: 901, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
        <div
          onClick={e => e.stopPropagation()}
          style={{
            background: "#fff",
            borderRadius: 24,
            width: "100%", maxWidth: 800,
            maxHeight: "92vh",
            overflow: "hidden",
            display: "flex", flexDirection: "column",
            boxShadow: "0 48px 120px rgba(4,12,14,.42), 0 0 0 1px rgba(255,255,255,.06)",
            animation: "dmPanelIn .3s cubic-bezier(.34,1.46,.64,1)",
          }}
        >

          {/* ── IMAGEM HERO ── */}
          <div style={{ position: "relative", height: 280, flexShrink: 0, overflow: "hidden", background: accent }}>

            {p.image ? (
              <img src={p.image} alt={p.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}/>
            ) : (
              /* placeholder gráfico com letra gigante */
              <>
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)` }}/>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }}/>
                <span style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", fontSize: 220, fontWeight: 900, color: "rgba(255,255,255,.06)", lineHeight: 1, userSelect: "none", fontFamily: "'Montserrat',sans-serif" }}>
                  {p.name?.[0]?.toUpperCase()}
                </span>
              </>
            )}

            {/* escurecimento gradual na base */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(4,12,14,.88) 0%, rgba(4,12,14,.3) 50%, transparent 100%)" }}/>

            {/* padrão de pontos */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}/>

            {/* fechar */}
            <button
              onClick={onClose}
              style={{ position: "absolute", top: 16, right: 16, width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,.14)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,.2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, transition: "background .15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,.24)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,.14)")}
            >
              <svg viewBox="0 0 14 14" fill="none" width="12" height="12">
                <path d="M1 1l12 12M13 1L1 13" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>

            {/* badge */}
            {p.badge && (
              <div style={{ position: "absolute", top: 16, left: 20, background: accent, color: "#fff", fontSize: 9, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 99, padding: "4px 11px", border: "1px solid rgba(255,255,255,.25)" }}>
                {p.badge}
              </div>
            )}

            {/* título na base */}
            <div style={{ position: "absolute", bottom: 24, left: 28, right: 72, zIndex: 2 }}>
              {p.category && (
                <div style={{ fontSize: 9, fontWeight: 800, color: "rgba(255,255,255,.5)", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 7 }}>
                  {p.category}
                </div>
              )}
              <h2 style={{ fontSize: "clamp(18px,2.8vw,26px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 0 }}>
                {p.name}
              </h2>
              {p.brands && p.brands.length > 0 && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 7 }}>
                  <div style={{ width: 16, height: 1, background: "rgba(255,255,255,.35)" }}/>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,.6)", fontWeight: 600 }}>
                    {p.brands.join(" · ")}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* ── CORPO (scrollable) ── */}
          <div style={{ overflowY: "auto", flex: 1 }}>

            {/* ── Chips de specs / highlights ── */}
            {((p.specs?.length ?? 0) > 0 || (p.highlights?.length ?? 0) > 0) && (
              <div style={{ padding: "20px 28px 0", display: "flex", gap: 10, flexWrap: "wrap" }}>
                {p.specs?.slice(0, 4).map((s, i) => (
                  <div key={`s-${i}`} style={{ background: "#f8fbfc", border: "1.5px solid #e4edf0", borderRadius: 10, padding: "11px 16px", minWidth: 100 }}>
                    <div style={{ fontSize: 8, fontWeight: 800, color: accent, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 4 }}>
                      {p.specs!.length > 1 ? `Espec. ${i + 1}` : "Especificação"}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{s}</div>
                  </div>
                ))}
                {p.highlights?.map((h, i) => (
                  <div key={`h-${i}`} style={{ background: bg, border: `1.5px solid ${accent}28`, borderRadius: 10, padding: "11px 16px", minWidth: 100 }}>
                    <div style={{ fontSize: 8, fontWeight: 800, color: accent, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 4 }}>{h.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e" }}>{h.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* ── Texto ── */}
            <div style={{ padding: "20px 28px 0" }}>
              {(p.longDesc || p.desc) && (
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <div style={{ width: 3, height: 14, borderRadius: 99, background: accent }}/>
                    <span style={{ fontSize: 9, fontWeight: 800, color: accent, letterSpacing: ".16em", textTransform: "uppercase" }}>Descrição</span>
                  </div>
                  {(p.longDesc || p.desc!).split("\n\n").map((para, i) => (
                    <p key={i} style={{ fontSize: 13.5, color: "#4a7275", lineHeight: 1.82, marginBottom: 10 }}>{para}</p>
                  ))}
                </div>
              )}

              {/* pills de specs como tags */}
              {(p.specs?.length ?? 0) > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 22 }}>
                  {p.specs!.map(s => (
                    <span key={s} style={{ background: bg, border: `1.5px solid ${accent}2e`, borderRadius: 99, padding: "5px 14px", fontSize: 11, fontWeight: 700, color: accent }}>
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* ── Rodapé CTA ── */}
            <div style={{ padding: "0 28px 24px" }}>
              <div style={{ borderTop: "1.5px solid #edf3f4", paddingTop: 20, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <Link
                  href="/#contacto"
                  style={{ background: accent, color: "#fff", borderRadius: 8, padding: "11px 24px", fontSize: 11, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 7, textDecoration: "none" }}
                >
                  <svg viewBox="0 0 16 16" fill="none" width="12">
                    <path d="M2 4h12v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM2 4l6 5 6-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Solicitar Orçamento
                </Link>
                <Link
                  href="https://wa.me/244933153362"
                  target="_blank" rel="noopener noreferrer"
                  style={{ background: "#25D366", color: "#fff", borderRadius: 8, padding: "11px 20px", fontSize: 11, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 7, textDecoration: "none" }}
                >
                  💬 WhatsApp
                </Link>
                <button
                  onClick={onClose}
                  style={{ marginLeft: "auto", padding: "11px 18px", borderRadius: 8, border: "1.5px solid #dde8ea", background: "#fff", fontSize: 11, fontWeight: 700, color: "#4a7275", cursor: "pointer", fontFamily: "inherit" }}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════
   ADMIN PRODUCT CARD
   — clicar na imagem abre o modal de detalhes
   — editar abre o formulário com upload
══════════════════════════════════════════════════════ */
function AdminProductCard({
  p, onEdit, onDelete, onToggle, onPreview,
}: {
  p: Product;
  onEdit:    (p: Product) => void;
  onDelete:  (id: number) => void;
  onToggle:  (id: number, active: boolean) => void;
  onPreview: (p: Product) => void;
}) {
  const accent = p.color      ?? "#095b66";
  const bg     = p.lightColor ?? "#e8f7f9";

  return (
    <div
      className="adm-card"
      style={{
        background: "#fff",
        border: `1.5px solid ${p.active ? "#dde8ea" : "#f0d0d0"}`,
        borderRadius: 16, overflow: "hidden",
        display: "flex", flexDirection: "column",
        position: "relative", transition: "box-shadow .2s",
        opacity: p.active ? 1 : .65,
      }}
    >
      {/* status dot */}
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 3, background: p.active ? "#22c55e" : "#ef4444", borderRadius: 99, width: 8, height: 8, boxShadow: `0 0 0 3px ${p.active ? "#dcfce7" : "#fee2e2"}` }}/>

      {/* imagem — clicável para preview */}
      <div
        onClick={() => onPreview(p)}
        style={{ width: "100%", aspectRatio: "16/9", background: p.image ? "#f0f4f5" : bg, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", cursor: "pointer" }}
      >
        {p.image ? (
          <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        ) : (
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: `${accent}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 900, color: accent }}>
            {p.category?.[0]?.toUpperCase() ?? "P"}
          </div>
        )}

        {/* hover — ver detalhes */}
        <div
          className="adm-card-hover-layer"
          style={{ position: "absolute", inset: 0, background: "rgba(4,12,14,0)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "all .2s" }}
        >
          <span style={{ background: "rgba(255,255,255,.92)", borderRadius: 99, padding: "5px 14px", fontSize: 10, fontWeight: 700, color: accent }}>
            👁 Ver detalhes
          </span>
        </div>

        {p.badge && (
          <div style={{ position: "absolute", top: 8, right: 8, background: accent, color: "#fff", fontSize: 8, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", borderRadius: 99, padding: "2px 7px" }}>{p.badge}</div>
        )}
      </div>

      {/* corpo */}
      <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: accent, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 4 }}>{p.category}</div>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e", lineHeight: 1.3, marginBottom: 6 }}>{p.name}</h3>
        <p style={{ fontSize: 11.5, color: "#5a8285", lineHeight: 1.6, flex: 1, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>{p.desc}</p>

        {(p.specs?.length || p.brands?.length) ? (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 10, borderTop: "1px solid #edf3f4", marginBottom: 12 }}>
            {p.specs?.[0] && <div><div style={{ fontSize: 9, color: "#9bbbbe", fontWeight: 600 }}>Espec.</div><div style={{ fontSize: 11, fontWeight: 800, color: accent }}>{p.specs[0]}</div></div>}
            {p.brands?.[0] && <div style={{ textAlign: "right" }}><div style={{ fontSize: 9, color: "#9bbbbe", fontWeight: 600 }}>Marca</div><div style={{ fontSize: 10, fontWeight: 700, color: "#1a2c2e" }}>{p.brands[0]}</div></div>}
          </div>
        ) : null}

        {/* acções */}
        <div style={{ display: "flex", gap: 6 }}>
          <button onClick={() => onEdit(p)} style={{ flex: 1, padding: "7px 0", borderRadius: 7, border: "1.5px solid #095b66", background: "#fff", color: "#095b66", fontSize: 11, fontWeight: 700, cursor: "pointer", transition: "all .15s" }}>
            ✏️ Editar
          </button>
          <button onClick={() => onToggle(p.id, !p.active)} style={{ padding: "7px 10px", borderRadius: 7, border: `1.5px solid ${p.active ? "#f59e0b" : "#22c55e"}`, background: "#fff", color: p.active ? "#f59e0b" : "#22c55e", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
            {p.active ? "⏸" : "▶"}
          </button>
          <button onClick={() => onDelete(p.id)} style={{ padding: "7px 10px", borderRadius: 7, border: "1.5px solid #ef4444", background: "#fff", color: "#ef4444", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
            🗑
          </button>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   PRODUCT FORM MODAL (criar / editar)
   — URL de imagem substituído por ImageUploader
══════════════════════════════════════════════════════ */
function ProductFormModal({
  form, setForm, onSave, onClose, saving,
}: {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  onSave: () => void;
  onClose: () => void;
  saving: boolean;
}) {
  const [uploadBusy, setUploadBusy] = useState(false);
  const set = (key: keyof FormState, val: unknown) => setForm(prev => ({ ...prev, [key]: val }));
  const handleNameChange = (name: string) =>
    setForm(prev => ({ ...prev, name, slug: prev.id ? prev.slug : slugify(name) }));
  const canSave = !!form.slug && !!form.name && !!form.desc && !saving && !uploadBusy;

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,.55)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: "#fff", borderRadius: 20, padding: "28px 32px", width: "100%", maxWidth: 780, maxHeight: "92vh", overflowY: "auto", display: "flex", flexDirection: "column", gap: 16, boxShadow: "0 24px 80px rgba(0,0,0,.25)" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "#0a1c1e" }}>
            {form.id ? "✏️ Editar Produto" : "➕ Novo Produto"}
          </h2>
          <button onClick={onClose} style={{ background: "#f4f6f6", border: "none", borderRadius: 8, width: 34, height: 34, fontSize: 18, cursor: "pointer", color: "#4a7275" }}>×</button>
        </div>

        {/* nome + slug */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={S.label}>Nome *</span>
            <input style={S.input} value={form.name} onChange={e => handleNameChange(e.target.value)} placeholder="Nome do produto"/>
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={S.label}>Slug *</span>
            <input style={S.input} value={form.slug} onChange={e => set("slug", e.target.value)} placeholder="slug-do-produto"/>
          </label>
        </div>

        {/* categoria + tag + badge + ordem */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 80px", gap: 12 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={S.label}>Categoria</span>
            <input style={S.input} value={form.category} onChange={e => set("category", e.target.value)} placeholder="ex: Solar"/>
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={S.label}>Tag</span>
            <input style={S.input} value={form.tag ?? ""} onChange={e => set("tag", e.target.value || null)} placeholder="ex: Industrial"/>
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={S.label}>Badge</span>
            <select style={{ ...S.input, appearance: "none" as const, cursor: "pointer" }} value={form.badge ?? ""} onChange={e => set("badge", e.target.value || null)}>
              <option value="">Nenhum</option>
              <option value="Novo">Novo</option>
              <option value="Popular">Popular</option>
            </select>
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={S.label}>Ordem</span>
            <input style={S.input} type="number" value={form.order ?? 0} onChange={e => set("order", Number(e.target.value))}/>
          </label>
        </div>

        {/* descrição curta */}
        <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={S.label}>Descrição curta *</span>
          <textarea style={{ ...S.input, minHeight: 70, resize: "vertical" }} value={form.desc} onChange={e => set("desc", e.target.value)} placeholder="Resumo do produto…"/>
        </label>

        {/* descrição longa */}
        <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={S.label}>Descrição longa</span>
          <textarea style={{ ...S.input, minHeight: 90, resize: "vertical" }} value={form.longDesc ?? ""} onChange={e => set("longDesc", e.target.value)} placeholder="Descrição detalhada…"/>
        </label>

        {/* ─── UPLOAD DE IMAGEM (sem campo URL) ─── */}
        <ImageUploader
          value={form.image ?? null}
          onChange={url => set("image", url)}
          onBusyChange={setUploadBusy}
        />

        {/* cores */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={S.label}>Cor principal</span>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input type="color" value={form.color ?? "#095b66"} onChange={e => set("color", e.target.value)} style={{ width: 40, height: 36, border: "none", borderRadius: 6, cursor: "pointer" }}/>
              <input style={{ ...S.input, flex: 1 }} value={form.color ?? "#095b66"} onChange={e => set("color", e.target.value)}/>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={S.label}>Cor clara</span>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input type="color" value={form.lightColor ?? "#e8f7f9"} onChange={e => set("lightColor", e.target.value)} style={{ width: 40, height: 36, border: "none", borderRadius: 6, cursor: "pointer" }}/>
              <input style={{ ...S.input, flex: 1 }} value={form.lightColor ?? "#e8f7f9"} onChange={e => set("lightColor", e.target.value)}/>
            </div>
          </div>
        </div>

        {/* tags */}
        <TagInput label="Especificações" value={form.specs ?? []} onChange={v => set("specs", v)}/>
        <TagInput label="Marcas"         value={form.brands ?? []}  onChange={v => set("brands", v)}/>

        {/* activo */}
        <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 10, padding: "12px 14px" }}>
          <input type="checkbox" checked={form.active ?? true} onChange={e => set("active", e.target.checked)} style={{ width: 16, height: 16, accentColor: "#095b66" }}/>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#1a2c2e" }}>Produto activo (visível no site)</span>
        </label>

        {/* aviso upload em curso */}
        {uploadBusy && (
          <div style={{ background: "#fff8e8", border: "1.5px solid #f0d88a", borderRadius: 8, padding: "10px 14px", fontSize: 12, color: "#7a5800", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
            <svg viewBox="0 0 24 24" fill="none" width="15" style={{ animation: "spin .8s linear infinite", flexShrink: 0 }}>
              <circle cx="12" cy="12" r="9" stroke="rgba(122,88,0,.3)" strokeWidth="2.5"/>
              <path d="M12 3a9 9 0 019 9" stroke="#7a5800" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            Upload em curso — aguarde antes de guardar
          </div>
        )}

        {/* footer */}
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", paddingTop: 8, borderTop: "1px solid #edf3f4" }}>
          <button onClick={onClose} style={{ padding: "10px 22px", borderRadius: 8, border: "1.5px solid #dde8ea", background: "#fff", color: "#4a7275", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
            Cancelar
          </button>
          <button
            onClick={onSave}
            disabled={!canSave}
            style={{ padding: "10px 28px", borderRadius: 8, border: "none", background: canSave ? "#095b66" : "#9bbbbe", color: "#fff", fontSize: 12, fontWeight: 700, cursor: canSave ? "pointer" : "not-allowed", fontFamily: "inherit", transition: "background .2s" }}
          >
            {saving ? "A guardar…" : uploadBusy ? "Aguardar upload…" : form.id ? "Guardar alterações" : "Criar produto"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   SHARED STYLES
══════════════════════════════════════════════════════ */
const S = {
  input: {
    background: "#f8fbfc", border: "1.5px solid #dde8ea", borderRadius: 8,
    color: "#1a2c2e", padding: "10px 12px",
    fontFamily: "inherit", fontSize: 13, fontWeight: 500, outline: "none", width: "100%",
  } as React.CSSProperties,
  label: {
    fontSize: 10, fontWeight: 700, color: "#095b66",
    letterSpacing: ".1em", textTransform: "uppercase" as const,
  } as React.CSSProperties,
};

/* ══════════════════════════════════════════════════════
   MAIN — ProductsAdmin
══════════════════════════════════════════════════════ */
export default function ProductsAdmin() {
  const [products,  setProducts]  = useState<Product[]>([]);
  const [loading,   setLoading]   = useState(true);
  const [search,    setSearch]    = useState("");
  const [catFilter, setCatFilter] = useState("Todas");
  const [view,      setView]      = useState<"grid" | "list">("grid");
  const [modal,     setModal]     = useState(false);
  const [form,      setForm]      = useState<FormState>(EMPTY_FORM);
  const [saving,    setSaving]    = useState(false);
  const [deleting,  setDeleting]  = useState<number | null>(null);
  const [toast,     setToast]     = useState<{ msg: string; ok: boolean } | null>(null);
  const [preview,   setPreview]   = useState<Product | null>(null);

  /* fetch */
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/cms/products");
      if (!res.ok) throw new Error();
      setProducts(await res.json());
    } catch {
      showToast("Erro ao carregar produtos", false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  const showToast = (msg: string, ok: boolean) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3200);
  };

  const openCreate = () => { setForm(EMPTY_FORM); setModal(true); };
  const openEdit   = (p: Product) => { setForm({ ...p }); setModal(true); };
  const closeModal = () => { setModal(false); setForm(EMPTY_FORM); };

  /* save */
  const handleSave = async () => {
    if (!form.slug || !form.name || !form.desc) { showToast("Preencha: nome, slug e descrição", false); return; }
    setSaving(true);
    try {
      const isEdit = !!form.id;
      const res = await fetch(isEdit ? `/api/cms/products/${form.id}` : "/api/cms/products", {
        method: isEdit ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) { const err = await res.json(); throw new Error(err.error ?? "Erro"); }
      showToast(isEdit ? "Produto actualizado ✓" : "Produto criado ✓", true);
      closeModal();
      await fetchProducts();
    } catch (e: unknown) {
      showToast((e as Error).message, false);
    } finally {
      setSaving(false);
    }
  };

  const handleToggle = async (id: number, active: boolean) => {
    try {
      const res = await fetch(`/api/cms/products/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active }) });
      if (!res.ok) throw new Error();
      setProducts(prev => prev.map(p => p.id === id ? { ...p, active } : p));
      showToast(active ? "Produto activado" : "Produto desactivado", true);
    } catch { showToast("Erro ao actualizar", false); }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Eliminar este produto? Esta acção não pode ser desfeita.")) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/cms/products/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      setProducts(prev => prev.filter(p => p.id !== id));
      showToast("Produto eliminado", true);
    } catch { showToast("Erro ao eliminar", false); }
    finally { setDeleting(null); }
  };

  const categories = ["Todas", ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))];
  const filtered   = products.filter(p => {
    const matchCat = catFilter === "Todas" || p.category === catFilter;
    const q = search.toLowerCase();
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q) || p.desc?.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  /* ══════════════════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════════════════ */
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", color: "#1a2c2e" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        @keyframes spin        { to { transform: rotate(360deg); } }
        @keyframes cardIn      { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
        @keyframes dmOverlayIn { from{opacity:0} to{opacity:1} }
        @keyframes dmPanelIn   { from{opacity:0;transform:scale(.96) translateY(14px)} to{opacity:1;transform:none} }
        .adm-card:hover { box-shadow: 0 6px 24px rgba(9,91,102,.1); }
        .adm-card:hover .adm-card-hover-layer { opacity: 1 !important; background: rgba(4,12,14,.44) !important; }
        .adm-row:hover { background: #f8fbfc !important; }
      `}</style>

      {/* Toast */}
      {toast && (
        <div style={{ position: "fixed", top: 20, right: 20, zIndex: 9999, background: toast.ok ? "#095b66" : "#ef4444", color: "#fff", borderRadius: 10, padding: "12px 20px", fontSize: 13, fontWeight: 700, boxShadow: "0 8px 32px rgba(0,0,0,.2)", animation: "cardIn .25s ease" }}>
          {toast.msg}
        </div>
      )}

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 900, color: "#0a1c1e", marginBottom: 4 }}>Produtos</h1>
          <p style={{ fontSize: 13, color: "#6a9a9e" }}>{products.length} produtos · {products.filter(p => p.active).length} activos</p>
        </div>
        <button onClick={openCreate} style={{ background: "#095b66", color: "#fff", border: "none", borderRadius: 10, padding: "11px 22px", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "inherit" }}>
          <span style={{ fontSize: 16 }}>+</span> Novo Produto
        </button>
      </div>

      {/* Filtros */}
      <div style={{ display: "flex", gap: 10, marginBottom: 22, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ position: "relative", flex: "1 1 220px", minWidth: 180 }}>
          <svg viewBox="0 0 24 24" fill="none" width="14" height="14" style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
            <circle cx="11" cy="11" r="7" stroke="#9bbbbe" strokeWidth="2"/>
            <path d="M16.5 16.5l4 4" stroke="#9bbbbe" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input style={{ ...S.input, paddingLeft: 34 }} placeholder="Pesquisar…" value={search} onChange={e => setSearch(e.target.value)}/>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setCatFilter(cat)} style={{ padding: "7px 13px", borderRadius: 99, border: "1.5px solid", borderColor: catFilter === cat ? "#095b66" : "#dde8ea", background: catFilter === cat ? "#095b66" : "#fff", color: catFilter === cat ? "#fff" : "#4a7275", fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
              {cat}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 4, marginLeft: "auto" }}>
          {(["grid", "list"] as const).map(v => (
            <button key={v} onClick={() => setView(v)} style={{ width: 34, height: 34, borderRadius: 8, border: "1.5px solid", borderColor: view === v ? "#095b66" : "#dde8ea", background: view === v ? "#095b66" : "#fff", color: view === v ? "#fff" : "#4a7275", fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit" }}>
              {v === "grid" ? "⊞" : "☰"}
            </button>
          ))}
        </div>
        <div style={{ fontSize: 12, color: "#9bbbbe", fontWeight: 600 }}>{filtered.length} resultado{filtered.length !== 1 ? "s" : ""}</div>
      </div>

      {/* Conteúdo */}
      {loading ? (
        <div style={{ textAlign: "center", padding: "64px 0", color: "#9bbbbe" }}>
          <svg viewBox="0 0 32 32" fill="none" width="32" style={{ animation: "spin .8s linear infinite", display: "block", margin: "0 auto 12px" }}>
            <circle cx="16" cy="16" r="12" stroke="#dde8ea" strokeWidth="3"/>
            <path d="M16 4a12 12 0 0112 12" stroke="#095b66" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <div style={{ fontSize: 13, fontWeight: 700 }}>A carregar produtos…</div>
        </div>
      ) : filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "64px 0", color: "#9bbbbe" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📦</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#4a7275", marginBottom: 6 }}>Nenhum produto encontrado</div>
          <div style={{ fontSize: 13 }}>Crie o primeiro produto ou ajuste os filtros</div>
        </div>
      ) : view === "grid" ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }}>
          {filtered.map(p => (
            <div key={p.id} style={{ opacity: deleting === p.id ? .4 : 1, transition: "opacity .2s" }}>
              <AdminProductCard p={p} onEdit={openEdit} onDelete={handleDelete} onToggle={handleToggle} onPreview={setPreview}/>
            </div>
          ))}
        </div>
      ) : (
        /* LIST VIEW */
        <div style={{ background: "#fff", border: "1.5px solid #dde8ea", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "48px 1fr 160px 120px 80px 160px", gap: 12, padding: "11px 16px", background: "#f8fbfc", borderBottom: "1px solid #edf3f4", fontSize: 10, fontWeight: 700, color: "#6a9a9e", letterSpacing: ".1em", textTransform: "uppercase" }}>
            <div/><div>Produto</div><div>Categoria</div><div>Marcas</div><div>Estado</div><div>Acções</div>
          </div>
          {filtered.map((p, i) => {
            const accent = p.color      ?? "#095b66";
            const bg     = p.lightColor ?? "#e8f7f9";
            return (
              <div key={p.id} className="adm-row" style={{ display: "grid", gridTemplateColumns: "48px 1fr 160px 120px 80px 160px", gap: 12, padding: "12px 16px", borderBottom: i < filtered.length - 1 ? "1px solid #edf3f4" : "none", alignItems: "center", opacity: deleting === p.id ? .4 : 1, transition: "all .15s" }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: p.image ? "#f0f4f5" : bg, overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => setPreview(p)}>
                  {p.image ? <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}/> : <span style={{ fontSize: 16, fontWeight: 900, color: accent }}>{p.category?.[0]}</span>}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#0a1c1e", marginBottom: 2 }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: "#6a9a9e", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: 320 }}>{p.desc}</div>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: accent }}>{p.category}</div>
                <div style={{ fontSize: 11, color: "#4a7275" }}>{p.brands?.[0] ?? "—"}</div>
                <div><span style={{ background: p.active ? "#dcfce7" : "#fee2e2", color: p.active ? "#16a34a" : "#dc2626", fontSize: 10, fontWeight: 700, borderRadius: 99, padding: "3px 8px" }}>{p.active ? "Activo" : "Inactivo"}</span></div>
                <div style={{ display: "flex", gap: 5 }}>
                  <button onClick={() => setPreview(p)} style={{ padding: "5px 8px", borderRadius: 6, border: "1.5px solid #dde8ea", background: "#f8fbfc", color: "#4a7275", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>👁</button>
                  <button onClick={() => openEdit(p)}   style={{ padding: "5px 10px", borderRadius: 6, border: "1.5px solid #095b66", background: "#fff", color: "#095b66", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Edit</button>
                  <button onClick={() => handleToggle(p.id, !p.active)} style={{ padding: "5px 8px", borderRadius: 6, border: `1.5px solid ${p.active ? "#f59e0b" : "#22c55e"}`, background: "#fff", color: p.active ? "#f59e0b" : "#22c55e", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>{p.active ? "⏸" : "▶"}</button>
                  <button onClick={() => handleDelete(p.id)} style={{ padding: "5px 8px", borderRadius: 6, border: "1.5px solid #ef4444", background: "#fff", color: "#ef4444", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>🗑</button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modais */}
      {modal   && <ProductFormModal   form={form} setForm={setForm} onSave={handleSave} onClose={closeModal} saving={saving}/>}
      {preview && <ProductDetailModal p={preview} onClose={() => setPreview(null)}/>}
    </div>
  );
}