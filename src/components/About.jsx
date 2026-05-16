export default function About() {
  const facts = [
    { icon: "🎓", label: "Education", value: "B.Tech IT — CGPA 9.54" },
    { icon: "📍", label: "Location", value: "Mumbai, India" },
    { icon: "🌐", label: "Languages", value: "English, Hindi, Marathi, German" },
    { icon: "⚡", label: "Focus", value: "Backend & Distributed Systems" },
  ];

  return (
    <section id="about" className="section">
      <div className="section-num">01 — About</div>
      <div className="section-eyebrow">Who I am</div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "start",
      }}>
        {/* Text */}
        <div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
            fontWeight: 700, color: "#fff",
            letterSpacing: "-0.5px", marginBottom: "1.5rem",
          }}>
            Building systems that <br />
            <span style={{ color: "#4FFFA0" }}>scale and perform.</span>
          </h2>

          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#7A8898", marginBottom: "1rem" }}>
            I'm a Software Engineer specialising in backend systems — REST APIs, microservices, and
            distributed architectures that handle real-world traffic. Currently at{" "}
            <span style={{ color: "#E8EDF2", fontWeight: 500 }}>Wybrid Technologies</span>, where I
            architect and optimise the backend infrastructure powering SaaS HR and workspace products.
          </p>

          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#7A8898", marginBottom: "2rem" }}>
            Previously at <span style={{ color: "#E8EDF2", fontWeight: 500 }}>Newgen Software Technologies</span>,
            I worked on enterprise FinTech banking applications serving large-scale trade finance operations.
            I care deeply about clean code, API design, and performance optimisation.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="https://www.linkedin.com/in/saurabhsawant077/" target="_blank" rel="noreferrer"
               className="btn-ghost" style={{ fontSize: "0.75rem" }}>
              LinkedIn ↗
            </a>
            <a href="mailto:saurabhsawant077@gmail.com" className="btn-primary"
               style={{ fontSize: "0.75rem" }}>
              Get In Touch
            </a>
          </div>
        </div>

        {/* Facts grid */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 1, background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: 12, overflow: "hidden",
        }}>
          {facts.map((f) => (
            <div key={f.label} className="card" style={{
              borderRadius: 0, border: "none",
              padding: "1.5rem",
            }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.6rem" }}>{f.icon}</div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem", letterSpacing: "1.5px",
                textTransform: "uppercase", color: "#4B5563",
                marginBottom: "0.3rem",
              }}>{f.label}</div>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.88rem", fontWeight: 600, color: "#E8EDF2",
              }}>{f.value}</div>
            </div>
          ))}

          {/* Soft skills full-width */}
          <div className="card" style={{
            borderRadius: 0, border: "none",
            padding: "1.5rem", gridColumn: "span 2",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem", letterSpacing: "1.5px",
              textTransform: "uppercase", color: "#4B5563",
              marginBottom: "0.8rem",
            }}>🧠 Soft Skills</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["Problem Solving", "Analytical Thinking", "Ownership & Accountability",
                "Cross-Team Communication", "Agile / Scrum"].map(s => (
                <span key={s} style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.68rem", color: "#7A8898",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "4px 10px", borderRadius: 4,
                }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}