const experiences = [
  {
    company: "Wybrid Technologies Pvt. Ltd.",
    role: "Backend Developer",
    period: "Jan 2025 – Present",
    location: "Mumbai, India",
    type: "SaaS · HRTech",
    accent: "#4FFFA0",
    points: [
      "Designed and optimised RESTful APIs using Node.js and Express.js, improving response time by 25% and reducing server load.",
      "Documented 100+ API endpoints using Swagger, improving API clarity and reducing integration issues by 30%.",
      "Developed backend modules for attendance tracking, contracts, and workspace allocation to support high-volume user operations.",
      "Implemented JWT-based authentication and role-based access control, enhancing application security.",
      "Built asynchronous event-driven background jobs and automated cron tasks using Redis for notifications, improving concurrency by 40%.",
      "Worked with Docker, CI/CD pipelines, Linux environments, and AWS cloud deployment workflows.",
      "Also built responsive frontend components using React.js alongside core backend work.",
    ],
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "Redis", "Docker", "AWS", "JWT", "Swagger"],
  },
  {
    company: "Newgen Software Technologies",
    role: "Software Engineer",
    period: "Jan 2024 – Dec 2024",
    location: "Mumbai, India",
    type: "FinTech · Banking",
    accent: "#6464FF",
    points: [
      "Developed and maintained enterprise banking applications using Java, JavaScript, and SQL (MySQL).",
      "Built and optimised enterprise trade finance APIs involving data transformation, filtering, and database operations — improving retrieval efficiency by 25%.",
      "Worked within structured SDLC processes — debugging, deployment, technical documentation, and production support on WebLogic servers.",
    ],
    tech: ["Java", "JavaScript", "MySQL", "WebLogic", "Spring Boot", "SQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-num">02 — Experience</div>
      <div className="section-eyebrow">Where I've worked</div>
      <div className="section-title">Work Experience</div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {experiences.map((exp, i) => (
          <div key={i} className="card" style={{
            padding: "2rem 2.5rem",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Left accent bar */}
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0,
              width: 3,
              background: `linear-gradient(to bottom, ${exp.accent}, transparent)`,
            }} />

            {/* Header */}
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", marginBottom: "1.2rem",
              flexWrap: "wrap", gap: "0.5rem",
            }}>
              <div>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.2rem", fontWeight: 700,
                  color: "#fff", letterSpacing: "-0.3px",
                }}>
                  {exp.company}
                </div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8rem", color: exp.accent,
                  marginTop: "0.2rem",
                }}>
                  {exp.role}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem", color: "#7A8898",
                  letterSpacing: "0.5px",
                }}>
                  {exp.period}
                </div>
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.4rem", justifyContent: "flex-end", flexWrap: "wrap" }}>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.62rem", letterSpacing: "1px",
                    color: "#4B5563",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "2px 8px", borderRadius: 3,
                  }}>{exp.location}</span>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.62rem", letterSpacing: "1px",
                    color: exp.accent,
                    background: `rgba(${exp.accent === "#4FFFA0" ? "79,255,160" : "100,100,255"},0.08)`,
                    border: `1px solid rgba(${exp.accent === "#4FFFA0" ? "79,255,160" : "100,100,255"},0.2)`,
                    padding: "2px 8px", borderRadius: 3,
                  }}>{exp.type}</span>
                </div>
              </div>
            </div>

            {/* Points */}
            <ul style={{ listStyle: "none", marginBottom: "1.5rem" }}>
              {exp.points.map((p, j) => (
                <li key={j} style={{
                  display: "flex", gap: 12,
                  fontSize: "0.88rem", lineHeight: 1.75,
                  color: "#7A8898", marginBottom: "0.5rem",
                }}>
                  <span style={{ color: exp.accent, flexShrink: 0, marginTop: 1 }}>▹</span>
                  {p}
                </li>
              ))}
            </ul>

            {/* Tech pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {exp.tech.map(t => (
                <span key={t} style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.65rem", color: "#4B5563",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "3px 10px", borderRadius: 4,
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}