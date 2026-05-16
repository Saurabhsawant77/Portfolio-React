const projects = [
  {
    tag: "Featured Project",
    title: "Role-Based Access Control — E-Commerce",
    desc: "A scalable RBAC system with secure REST APIs for Super Admin, Admin, Partner, and Customer workflows. Implemented JWT-based auth with bcrypt password hashing, securing 100% of user sessions. Designed end-to-end product management workflow reducing invalid listings by 30%.",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "bcrypt"],
    link: "https://github.com/saurabh-sawant",
    featured: true,
    accent: "#4FFFA0",
    metrics: [
      { val: "4", label: "User Roles" },
      { val: "100%", label: "Sessions Secured" },
      { val: "30%", label: "Invalid Listings ↓" },
    ],
  },
  {
    tag: "Backend",
    title: "Attendance & Workspace API System",
    desc: "Backend modules for attendance tracking, contracts, and workspace allocation built at Wybrid. Handles high-volume user operations with Redis-powered async jobs and cron tasks.",
    tech: ["Node.js", "Redis", "MongoDB", "Docker", "AWS"],
    link: "#",
    accent: "#6464FF",
    metrics: [
      { val: "25%", label: "Faster Response" },
      { val: "40%", label: "Concurrency ↑" },
    ],
  },
  {
    tag: "FinTech",
    title: "Trade Finance API Suite",
    desc: "Enterprise trade finance APIs for a banking platform at Newgen. Handled data transformation, filtering, and database operations at scale on WebLogic servers.",
    tech: ["Java", "Spring Boot", "MySQL", "WebLogic", "SQL"],
    link: "#",
    accent: "#F78C6C",
    metrics: [
      { val: "25%", label: "Query Efficiency ↑" },
      { val: "100+", label: "Endpoints Built" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-num">04 — Projects</div>
      <div className="section-eyebrow">Things I've built</div>
      <div className="section-title">Featured Work</div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {projects.map((p, i) => (
          <div key={i} className="card" style={{
            padding: "2rem 2.5rem",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Top-right arrow */}
            <a href={p.link} target="_blank" rel="noreferrer" style={{
              position: "absolute", top: "1.8rem", right: "2rem",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1rem", color: "rgba(255,255,255,0.15)",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.target.style.color = p.accent; e.target.style.transform = "translate(3px,-3px)"; }}
            onMouseLeave={e => { e.target.style.color = "rgba(255,255,255,0.15)"; e.target.style.transform = "none"; }}
            >↗</a>

            {/* Accent glow bg */}
            <div style={{
              position: "absolute", right: -60, top: -60,
              width: 200, height: 200,
              background: `radial-gradient(circle, ${p.accent}08 0%, transparent 70%)`,
              pointerEvents: "none",
            }} />

            {/* Tag */}
            <div style={{
              display: "inline-block",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.62rem", letterSpacing: "1.5px",
              textTransform: "uppercase", color: p.accent,
              background: `rgba(${hexToRgb(p.accent)},0.08)`,
              padding: "3px 10px", borderRadius: 3,
              border: `1px solid rgba(${hexToRgb(p.accent)},0.2)`,
              marginBottom: "1rem",
            }}>{p.tag}</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}>
              <div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.25rem", fontWeight: 700,
                  color: "#fff", letterSpacing: "-0.3px",
                  marginBottom: "0.7rem",
                }}>{p.title}</h3>

                <p style={{
                  fontSize: "0.88rem", lineHeight: 1.75,
                  color: "#7A8898", marginBottom: "1.5rem",
                  maxWidth: 580,
                }}>{p.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem", color: "#4B5563",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      padding: "3px 10px", borderRadius: 4,
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div style={{
                display: "flex", flexDirection: "column", gap: "0.8rem",
                minWidth: 120,
              }}>
                {p.metrics.map(m => (
                  <div key={m.label} style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 8, padding: "0.7rem 1rem",
                    textAlign: "center",
                  }}>
                    <div style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800, fontSize: "1.2rem",
                      color: p.accent,
                    }}>{m.val}</div>
                    <div style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.6rem", color: "#4B5563",
                      letterSpacing: "0.8px", textTransform: "uppercase",
                      marginTop: 3,
                    }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        textAlign: "center", marginTop: "2.5rem",
      }}>
        <a href="https://github.com/Saurabhsawant77"
           target="_blank" rel="noreferrer"
           className="btn-ghost">
          See More on GitHub ↗
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #projects .card > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `${r},${g},${b}`;
}