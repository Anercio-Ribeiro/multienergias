export default function Footer() {

    return (



      <footer style={{ background: "#06161a", padding: "52px 80px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 44, marginBottom: 44 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 7, background: "#095b66", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/></svg>
                </div>
                <span style={{ fontWeight: 900, fontSize: 15, color: "#fff" }}>Multi<span style={{ color: "#3ec8d4" }}>energia</span></span>
              </div>
              <p style={{ fontSize: 12.5, color: "#3a6a6e", lineHeight: 1.8, maxWidth: 240, marginBottom: 16 }}>Inovação tecnológica ao serviço da energia. Angola · Portugal · Cabo Verde · São Tomé.</p>
              <a href="https://www.multienergia.com.pt" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11.5, fontWeight: 600, color: "#3ec8d4" }}>www.multienergia.com.pt</a>
            </div>
            {[
              { title: "Produtos",  links: ["Sistemas Solares","EcoFlow PowerOcean","Quadros BT","Postos MT","UPS & Estabilizadores","Mobilidade Elétrica"] },
              { title: "Serviços",  links: ["Projeto & Engenharia","Instalação & Montagem","Auditoria Energética","Proteção Atmosférica","Manutenção","Energy Academy"] },
              { title: "Empresa",   links: ["Sobre Nós","Certificações","Clientes","Parceiros","Contacto"] },
            ].map(col => (
              <nav key={col.title}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#0a7a89", marginBottom: 16 }}>{col.title}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map(l => <li key={l}><button className="footer-btn">{l}</button></li>)}
                </ul>
              </nav>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
            <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>© 2025 Multienergia. Todos os direitos reservados.</p>
            <p style={{ fontSize: 11.5, color: "#1e4a4e" }}>Alvará IRCOP nº 982/CCOP/IRCOP/SC/2025 · 5ª Classe</p>
          </div>
        </div>
      </footer>
      
      );
}