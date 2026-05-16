export default function Contact() {
  const links = [
    {
      icon: "📧",
      label: "Email",
      href: "mailto:saurabhsawant077@gmail.com",
      display: "saurabhsawant077@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saurabhsawant077/",
      display: "linkedin.com/in/saurabhsawant077",
    },
    {
      icon: "🐙",
      label: "GitHub",
      href: "https://github.com/Saurabhsawant77",
      display: "github.com/Saurabhsawant77",
    },
    {
      icon: "📱",
      label: "Phone",
      href: "tel:+918828357179",
      display: "+91 8828357179",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="section-num">05 — Contact</div>
      <div className="section-eyebrow">Get in touch</div>

      <div style={{
        background: "#0D1318",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16,
        padding: "4rem 3rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        marginBottom: "2rem",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(79,255,160,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", left: 0, top: 0, right: 0, height: 2,
          background: "linear-gradient(90deg, transparent, #4FFFA0, #6464FF, transparent)",
        }} />

        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800, color: "#fff",
          letterSpacing: "-1px", marginBottom: "1rem",
          position: "relative",
        }}>
          Let's work together.
        </h2>
        <p style={{
          fontSize: "0.95rem", lineHeight: 1.8,
          color: "#7A8898", maxWidth: 480,
          margin: "0 auto 2.5rem",
          position: "relative",
        }}>
          Open to full-time backend/full-stack roles and freelance projects.
          If you have an exciting problem to solve — I'd love to hear about it.
        </p>
        <a href="mailto:saurabhsawant077@gmail.com" className="btn-primary"
           style={{ position: "relative", display: "inline-flex" }}>
          Say Hello →
        </a>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 1,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 12, overflow: "hidden",
      }}>
        {links.map((l) => (
          <a key={l.label} href={l.href}
             target={l.href.startsWith("http") ? "_blank" : undefined}
             rel="noreferrer"
             style={{
               display: "flex", alignItems: "center", gap: "1rem",
               background: "#0D1318", padding: "1.4rem 1.8rem",
               textDecoration: "none",
               transition: "background 0.2s",
             }}
             onMouseEnter={e => e.currentTarget.style.background = "#111820"}
             onMouseLeave={e => e.currentTarget.style.background = "#0D1318"}
          >
            <span style={{ fontSize: "1.3rem" }}>{l.icon}</span>
            <div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem", letterSpacing: "1.5px",
                textTransform: "uppercase", color: "#4B5563",
                marginBottom: "0.2rem",
              }}>{l.label}</div>
              <div style={{
                fontSize: "0.85rem", color: "#4FFFA0",
                fontFamily: "'DM Mono', monospace",
              }}>{l.display}</div>
            </div>
            <span style={{
              marginLeft: "auto",
              color: "#2A3441", fontSize: "0.9rem",
            }}>↗</span>
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          #contact > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}