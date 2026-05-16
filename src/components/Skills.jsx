import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js & Express.js", level: 90 },
      { name: "REST API Design", level: 92 },
      { name: "Java & Spring Boot", level: 72 },
      { name: "Microservices Architecture", level: 78 },
      { name: "Event-Driven / Async Programming", level: 80 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 82 },
      { name: "TypeScript", level: 78 },
      { name: "Next.js", level: 65 },
      { name: "HTML5 / CSS3 / Tailwind", level: 85 },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MongoDB (NoSQL)", level: 85 },
      { name: "PostgreSQL / MySQL", level: 83 },
      { name: "Redis (Caching & Queues)", level: 80 },
      { name: "Query Optimisation", level: 78 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 75 },
      { name: "Docker", level: 70 },
      { name: "GitHub Actions / CI/CD", level: 72 },
      { name: "Linux / Bash", level: 68 },
    ],
  },
];

const otherTools = [
  "Git & GitHub", "Postman", "Swagger / OpenAPI",
  "JWT & OAuth", "Agile / Scrum", "VS Code",
  "Notion", "MVC Pattern", "OOP", "DSA",
];

function SkillBar({ name, level, animate }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        marginBottom: "0.4rem",
      }}>
        <span style={{ fontSize: "0.85rem", color: "#E8EDF2" }}>{name}</span>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem", color: "#4FFFA0",
        }}>{level}%</span>
      </div>
      <div style={{
        height: 2, background: "rgba(255,255,255,0.06)",
        borderRadius: 2, overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: animate ? `${level}%` : "0%",
          background: "linear-gradient(90deg, #4FFFA0, #6464FF)",
          borderRadius: 2,
          transition: "width 1s ease",
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="section-num">03 — Skills</div>
      <div className="section-eyebrow">What I work with</div>
      <div className="section-title">Tech Stack</div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        marginBottom: "1.5rem",
      }}>
        {skillGroups.map((group) => (
          <div key={group.category} className="card" style={{ padding: "1.8rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "1.2rem" }}>{group.icon}</span>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700, fontSize: "0.95rem", color: "#fff",
              }}>{group.category}</span>
            </div>
            {group.skills.map(s => (
              <SkillBar key={s.name} {...s} animate={animate} />
            ))}
          </div>
        ))}
      </div>

      {/* Other tools */}
      <div className="card" style={{ padding: "1.5rem 2rem" }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.65rem", letterSpacing: "2px",
          textTransform: "uppercase", color: "#4B5563",
          marginBottom: "1rem",
        }}>🔧 Tools & Methodologies</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {otherTools.map(t => (
            <span key={t} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem", color: "#7A8898",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "5px 14px", borderRadius: 5,
              transition: "all 0.2s",
              cursor: "default",
            }}
            onMouseEnter={e => {
              e.target.style.color = "#4FFFA0";
              e.target.style.borderColor = "rgba(79,255,160,0.3)";
              e.target.style.background = "rgba(79,255,160,0.06)";
            }}
            onMouseLeave={e => {
              e.target.style.color = "#7A8898";
              e.target.style.borderColor = "rgba(255,255,255,0.07)";
              e.target.style.background = "rgba(255,255,255,0.04)";
            }}
            >{t}</span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills > div:nth-child(4) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}