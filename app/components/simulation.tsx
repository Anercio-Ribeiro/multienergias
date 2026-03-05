//  {/* ── SIMULADOR DE PROJECTO ── */}
// <section id="simulador" style={{ background: "#f0f9fa", padding: "96px 0" }}>
//         <div className="sp" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>

//           {/* Header */}
//           <Reveal>
//             <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 52 }}>
//               <div>
//                 <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#095b66", marginBottom: 8 }}>— Simulador</p>
//                 <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#0a1c1e", lineHeight: 1.05, marginBottom: 10 }}>Simule o seu Projecto</h2>
//                 <p style={{ fontSize: 15, color: "#4a7275", maxWidth: 500, lineHeight: 1.75 }}>
//                   Obtenha a lista indicativa de materiais eléctricos para o seu projecto em segundos, com base em pressupostos técnicos reais.
//                 </p>
//               </div>
//               <div style={{ display:"flex", alignItems:"center", gap:9, background:"#fff", border:"1.5px solid #dde8ea", borderRadius:12, padding:"11px 20px" }}>
//                 <svg viewBox="0 0 20 20" fill="none" width="15" height="15"><circle cx="10" cy="10" r="8" stroke="#095b66" strokeWidth="1.5"/><path d="M10 6v4l3 3" stroke="#095b66" strokeWidth="1.5" strokeLinecap="round"/></svg>
//                 <span style={{ fontSize:12, fontWeight:700, color:"#095b66" }}>Resultado em &lt;30 segundos</span>
//               </div>
//             </div>
//           </Reveal>

//           {/* Stepper */}
//           <div style={{ display:"flex", alignItems:"center", maxWidth:520, marginBottom:44 }}>
//             {([["1","Tipo de Projecto"],["2","Pressupostos"],["3","Resultado"]] as [string,string][]).map(([n,lbl], i) => (
//               <React.Fragment key={n}>
//                 <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
//                   <div style={{ width:36, height:36, borderRadius:"50%", background: simStep > +n ? "#095b66" : simStep === +n ? "#095b66" : "#e8eef0", border:`2px solid ${simStep >= +n ? "#095b66" : "#dde8ea"}`, display:"flex", alignItems:"center", justifyContent:"center", transition:"all .3s" }}>
//                     {simStep > +n
//                       ? <svg viewBox="0 0 14 14" fill="none" width="12" height="12"><path d="M2 7l4 4 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                       : <span style={{ fontSize:12, fontWeight:800, color: simStep >= +n ? "#fff" : "#9bbbbe" }}>{n}</span>
//                     }
//                   </div>
//                   <span style={{ fontSize:9.5, fontWeight:700, color: simStep >= +n ? "#095b66" : "#9bbbbe", textTransform:"uppercase", letterSpacing:".08em", whiteSpace:"nowrap" }}>{lbl}</span>
//                 </div>
//                 {i < 2 && <div className="sim-prog-line" style={{ background: simStep > +n ? "#095b66" : "#dde8ea" }}/>}
//               </React.Fragment>
//             ))}
//           </div>

//           {/* ─ PASSO 1: Tipo ─ */}
//           {simStep === 1 && (
//             <div className="sim-up">
//               <p style={{ fontSize:11.5, fontWeight:700, color:"#4a7275", marginBottom:20, textTransform:"uppercase", letterSpacing:".1em" }}>Seleccione o tipo de projecto:</p>
//               <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:12, marginBottom:40 }} className="three">
//                 {TIPOS_PROJETO.map(t => (
//                   <button key={t.id} className={`sim-tipo-btn ${simForm.tipo === t.id ? "on" : ""}`}
//                     onClick={() => setSim("tipo", t.id)}>
//                     <div style={{ color: simForm.tipo === t.id ? "#fff" : "#095b66" }}>{t.icon}</div>
//                     <div style={{ textAlign:"center" }}>
//                       <div style={{ fontSize:12.5, fontWeight:800, color: simForm.tipo === t.id ? "#fff" : "#0a1c1e", marginBottom:3, lineHeight:1.25 }}>{t.label}</div>
//                       <div style={{ fontSize:10, fontWeight:600, color: simForm.tipo === t.id ? "rgba(255,255,255,.6)" : "#9bbbbe" }}>{t.sub}</div>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//               <div style={{ display:"flex", justifyContent:"flex-end" }}>
//                 <button disabled={!simForm.tipo} onClick={() => setSimStep(2)} className="btn-teal"
//                   style={{ opacity: simForm.tipo ? 1 : .45, cursor: simForm.tipo ? "pointer" : "not-allowed" }}>
//                   Continuar
//                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M4 8h8M9 5l3 3-3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* ─ PASSO 2: Pressupostos ─ */}
//           {simStep === 2 && (
//             <div className="sim-up">
//               <div className="two" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, marginBottom:36 }}>

//                 {/* Campos numéricos */}
//                 <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
//                   <div className="sim-field">
//                     <label>Área Total (m²) *</label>
//                     <input className="sim-inp" type="number" min="10" placeholder={simForm.tipo==="residencial"?"Ex: 120":simForm.tipo==="industrial"?"Ex: 2000":"Ex: 400"} value={simForm.area} onChange={e=>setSim("area",e.target.value)}/>
//                     <small>Área total a electrificar em m²</small>
//                   </div>
//                   <div className="sim-field">
//                     <label>Consumo Estimado (kWh/dia) *</label>
//                     <input className="sim-inp" type="number" min="1" placeholder={simForm.tipo==="residencial"?"Ex: 15":simForm.tipo==="industrial"?"Ex: 300":"Ex: 60"} value={simForm.consumo} onChange={e=>setSim("consumo",e.target.value)}/>
//                     <small>{simForm.tipo==="residencial"?"Tipicamente 8–25 kWh/dia para moradia":simForm.tipo==="industrial"?"Tipicamente 100–800 kWh/dia para fábrica":"Consulte a factura eléctrica ou medição"}</small>
//                   </div>
//                   <div className="sim-field">
//                     <label>Localização</label>
//                     <select className="sim-inp sim-sel" value={simForm.localizacao} onChange={e=>setSim("localizacao",e.target.value)}>
//                       {["Luanda","Benguela","Huambo","Lobito","Namibe","Cabinda","Malanje","Lisboa","Porto","Praia","São Tomé","Outro"].map(l=><option key={l}>{l}</option>)}
//                     </select>
//                   </div>
//                   {simForm.solar && (
//                     <div className="sim-field">
//                       <label>Autonomia em Bateria</label>
//                       <select className="sim-inp sim-sel" value={simForm.autonomia} onChange={e=>setSim("autonomia",e.target.value)}>
//                         <option value="0">Sem armazenamento (só injecção)</option>
//                         <option value="1">1 dia</option>
//                         <option value="2">2 dias</option>
//                         <option value="3">3 dias (máx. resiliência)</option>
//                       </select>
//                     </div>
//                   )}
//                 </div>

//                 {/* Toggles */}
//                 <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:16, padding:"24px" }}>
//                   <p style={{ fontSize:10, fontWeight:700, color:"#095b66", letterSpacing:".14em", textTransform:"uppercase", marginBottom:16 }}>Equipamentos adicionais:</p>
//                   {([
//                     ["solar",     "Sistema Solar Fotovoltaico",    "Painéis + inversor + armazenamento LFP"],
//                     ["ups",       "UPS / Estabilizador",            "Alimentação ininterrupta de cargas críticas"],
//                     ["spda",      "Protecção Atmosférica SPDA",    "Para-raios ESE + aterramento Franklin France"],
//                     ["ve",        "Postos de Carregamento VE",      "Veículos eléctricos · Modo 3 / DC rápido"],
//                     ["gerador",   "Grupo Gerador de Backup",        "Diesel insonorizado + ATS automático"],
//                     ["trifasico", "Instalação Trifásica 400V",      "Força motriz / motores / equipamentos pesados"],
//                   ] as [keyof SimForm, string, string][]).map(([k,lbl,sub], i, arr) => (
//                     <div key={k} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, padding:"13px 0", borderBottom: i<arr.length-1 ? "1px solid #f0f5f6" : "none" }}>
//                       <div>
//                         <div style={{ fontSize:13, fontWeight:700, color:"#0a1c1e" }}>{lbl}</div>
//                         <div style={{ fontSize:10.5, color:"#9bbbbe", marginTop:2 }}>{sub}</div>
//                       </div>
//                       <label className="sim-toggle">
//                         <input type="checkbox" checked={!!simForm[k]} onChange={e=>setSim(k,e.target.checked)}/>
//                         <span className="sim-slider"/>
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
//                 <button onClick={()=>setSimStep(1)} style={{ background:"none", border:"1.5px solid #dde8ea", borderRadius:7, padding:"12px 22px", fontSize:12, fontWeight:700, color:"#4a7275", cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:7 }}>
//                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M12 8H4M7 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                   Voltar
//                 </button>
//                 <button disabled={!simForm.area || !simForm.consumo} onClick={runSim} className="btn-teal"
//                   style={{ opacity: (simForm.area && simForm.consumo) ? 1 : .45, cursor: (simForm.area && simForm.consumo) ? "pointer" : "not-allowed" }}>
//                   <svg viewBox="0 0 16 16" fill="none" width="13" height="13"><path d="M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0z" stroke="#fff" strokeWidth="1.5"/><path d="M10 8H6M8 6v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
//                   Gerar Lista de Materiais
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* ─ PASSO 3: Resultado ─ */}
//           {simStep === 3 && (
//             <div className="sim-up">

//               {/* Banner sumário */}
//               <div style={{ background:"linear-gradient(135deg,#095b66,#0a7a89)", borderRadius:18, padding:"26px 36px", marginBottom:28, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:20 }}>
//                 <div style={{ display:"flex", gap:36, flexWrap:"wrap" }}>
//                   {[
//                     ["Tipo", TIPOS_PROJETO.find(t=>t.id===simForm.tipo)?.label ?? "–"],
//                     ["Área", `${simForm.area} m²`],
//                     ["Consumo", `${simForm.consumo} kWh/dia`],
//                     ["Referências", `${simResult.length} itens`],
//                   ].map(([k,v]) => (
//                     <div key={k}>
//                       <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,.5)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:3 }}>{k}</div>
//                       <div style={{ fontSize:15, fontWeight:900, color:"#fff" }}>{v}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <div style={{ display:"flex", gap:10 }}>
//                   <button onClick={()=>{setSimStep(2);}} style={{ background:"rgba(255,255,255,.15)", color:"#fff", border:"1.5px solid rgba(255,255,255,.3)", borderRadius:7, padding:"9px 18px", fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:6 }}>
//                     <svg viewBox="0 0 14 14" fill="none" width="11" height="11"><path d="M10 7H4M6.5 4.5L4 7l2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
//                     Editar
//                   </button>
//                   <a href="#contacto" className="btn-white" style={{ fontSize:11, padding:"9px 18px" }}>
//                     Pedir Orçamento →
//                   </a>
//                 </div>
//               </div>

//               {/* Nota aviso */}
//               <div style={{ background:"#fff8e0", border:"1.5px solid #f0d47a", borderRadius:10, padding:"11px 18px", marginBottom:22, display:"flex", alignItems:"flex-start", gap:10 }}>
//                 <svg viewBox="0 0 18 18" fill="none" width="15" height="15" style={{ flexShrink:0, marginTop:1 }}><circle cx="9" cy="9" r="7" stroke="#a07000" strokeWidth="1.5"/><path d="M9 5.5v3.5M9 12.5v.5" stroke="#a07000" strokeWidth="2" strokeLinecap="round"/></svg>
//                 <p style={{ fontSize:11.5, color:"#7a5000", lineHeight:1.65, margin:0 }}>
//                   <strong>Estimativa indicativa.</strong> Quantidades e especificações finais devem ser validadas por engenheiro habilitado. Esta lista serve de base para pedido de orçamento formal.
//                 </p>
//               </div>

//               {/* Filtros por categoria */}
//               <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:18 }}>
//                 {simCats.map(cat => (
//                   <button key={cat} className={`sim-cat-pill ${simCatFil===cat?"on":""}`}
//                     onClick={()=>setSimCatFil(cat)}>
//                     {cat} {cat!=="Todos" && <span style={{ fontWeight:600, opacity:.7 }}>({simResult.filter(m=>m.cat===cat).length})</span>}
//                   </button>
//                 ))}
//               </div>

//               {/* Tabela de materiais */}
//               <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:16, overflow:"hidden", marginBottom:32 }}>
//                 {/* Cabeçalho */}
//                 <div style={{ display:"grid", gridTemplateColumns:"52px 1fr 100px", background:"#f8fbfc", borderBottom:"1.5px solid #dde8ea" }}>
//                   <div style={{ padding:"11px 0 11px 16px" }}/>
//                   <div style={{ padding:"11px 16px", fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase" }}>Material / Referência</div>
//                   <div style={{ padding:"11px 16px 11px 0", fontSize:10, fontWeight:700, color:"#9bbbbe", letterSpacing:".1em", textTransform:"uppercase", textAlign:"right" }}>Qtd.</div>
//                 </div>

//                 {simVisible.map((m, i) => {
//                   const c = CAT_CONFIG[m.cat] ?? { cor:"#095b66", fundo:"#e8f7f9" };
//                   return (
//                     <div key={i} className="sim-row"
//                       style={{ display:"grid", gridTemplateColumns:"52px 1fr 100px", alignItems:"center", borderBottom: i<simVisible.length-1 ? "1px solid #f0f5f6" : "none",
//                                animation:`simUp .3s ${Math.min(i * .025, 0.5)}s both ease-out` }}>
//                       {/* Cat icon */}
//                       <div style={{ padding:"13px 0 13px 14px" }}>
//                         <div style={{ width:28, height:28, borderRadius:7, background:c.fundo, display:"flex", alignItems:"center", justifyContent:"center" }}>
//                           <span style={{ fontSize:9, fontWeight:900, color:c.cor, letterSpacing:".04em" }}>{m.cat.slice(0,3).toUpperCase()}</span>
//                         </div>
//                       </div>
//                       {/* Info */}
//                       <div style={{ padding:"13px 16px" }}>
//                         <div style={{ display:"flex", gap:7, alignItems:"center", marginBottom:3, flexWrap:"wrap" }}>
//                           <span style={{ fontSize:9.5, fontWeight:800, color:c.cor, background:c.fundo, borderRadius:4, padding:"2px 7px", letterSpacing:".05em", textTransform:"uppercase" }}>{m.cat}</span>
//                           <span style={{ fontSize:9.5, fontWeight:600, color:"#b0c4c6", fontFamily:"monospace" }}>{m.ref}</span>
//                         </div>
//                         <div style={{ fontSize:13.5, fontWeight:700, color:"#0a1c1e", lineHeight:1.3, marginBottom: m.obs ? 3 : 0 }}>{m.nome}</div>
//                         {m.obs && <div style={{ fontSize:11, color:"#7a9ea0", marginTop:1 }}>{m.obs}</div>}
//                         <div style={{ fontSize:10.5, color:"#b8ccce", marginTop:2, fontWeight:600 }}>{m.marca}</div>
//                       </div>
//                       {/* Qty */}
//                       <div style={{ padding:"13px 16px 13px 0", textAlign:"right" }}>
//                         <span style={{ fontSize:19, fontWeight:900, color:"#095b66", lineHeight:1 }}>{m.qtd}</span>
//                         <span style={{ fontSize:10.5, color:"#9bbbbe", display:"block", fontWeight:600 }}>{m.unidade}</span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* CTA final */}
//               <div style={{ background:"#fff", border:"1.5px solid #dde8ea", borderRadius:14, padding:"24px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:20, flexWrap:"wrap" }}>
//                 <div>
//                   <div style={{ fontSize:15, fontWeight:800, color:"#0a1c1e", marginBottom:4 }}>Quer um orçamento formal com preços reais?</div>
//                   <div style={{ fontSize:13, color:"#4a7275" }}>A nossa equipa analisa esta simulação e envia proposta detalhada em 24 horas.</div>
//                 </div>
//                 <div style={{ display:"flex", gap:10, flexShrink:0 }}>
//                   <a href="https://wa.me/244933153362" target="_blank" rel="noopener noreferrer"
//                     style={{ background:"#25D366", color:"#fff", border:"none", borderRadius:7, padding:"12px 20px", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", display:"inline-flex", alignItems:"center", gap:7, textDecoration:"none" }}>
//                     💬 WhatsApp
//                   </a>
//                   <a href="#contacto" className="btn-teal" style={{ fontSize:11 }}>
//                     Solicitar Proposta
//                     <svg viewBox="0 0 14 14" fill="none" width="12" height="12"><path d="M3 7h8M8 4.5l2.5 2.5L8 9.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           )}

//         </div>
//       </section>