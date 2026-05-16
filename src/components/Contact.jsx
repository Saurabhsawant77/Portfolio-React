export default function Contact() {
  const links = [
    { icon: "📧", label: "Email", href: "mailto:saurabhsawant077@gmail.com", display: "saurabhsawant077@gmail.com" },
    { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/saurabhsawant077/", display: "linkedin.com/in/saurabhsawant077" },
    { icon: "🐙", label: "GitHub", href: "https://github.com/Saurabhsawant77", display: "github.com/Saurabhsawant77" },
    { icon: "📱", label: "Phone", href: "tel:+918828357179", display: "+91 8828357179" },
  ];

  return (
    <section id="contact" className="section">
      <div className="section-num">05 — Contact</div>
      <div className="section-eyebrow">Get in touch</div>

      {/* Big CTA */}
      <div className="contact-cta" style={{
        background: "#0D1318", border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16, padding: "3.5rem 2rem",
        textAlign: "center", position: "relative", overflow: "hidden", marginBottom: "1.5rem",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(79,255,160,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: 0, top: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #4FFFA0, #6464FF, transparent)" }} />
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-1px", marginBottom: "1rem", position: "relative" }}>
          Let's work together.
        </h2>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "#7A8898", maxWidth: 460, margin: "0 auto 2rem", position: "relative" }}>
          Open to full-time backend/full-stack roles and freelance projects. If you have an exciting problem to solve — I'd love to hear about it.
        </p>
        <a href="mailto:saurabhsawant077@gmail.com" className="btn-primary" style={{ position: "relative", display: "inline-flex" }}>
          Say Hello →
        </a>
      </div>

      {/* Contact links */}
      <div className="contact-links-grid">
        {links.map((l) => (
          <a key={l.label} href={l.href}
             target={l.href.startsWith("http") ? "_blank" : undefined}
             rel="noreferrer"
             style={{ display: "flex", alignItems: "center", gap: "1rem", background: "#0D1318", padding: "1.2rem 1.5rem", textDecoration: "none", transition: "background 0.2s" }}
             onMouseEnter={e => e.currentTarget.style.background = "#111820"}
             onMouseLeave={e => e.currentTarget.style.background = "#0D1318"}
          >
            <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{l.icon}</span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "1.5px", textTransform: "uppercase", color: "#4B5563", marginBottom: "0.2rem" }}>{l.label}</div>
              <div style={{ fontSize: "0.8rem", color: "#4FFFA0", fontFamily: "'DM Mono', monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.display}</div>
            </div>
            <span style={{ marginLeft: "auto", color: "#2A3441", fontSize: "0.9rem", flexShrink: 0 }}>↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}