import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Backend Developer",
        "API Architect",
        "Full-Stack Engineer",
        "Problem Solver",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      maxWidth: 1100,
      margin: "0 auto",
      padding: "0 2rem",
      gap: "3rem",
      position: "relative",
    }}>
      {/* Glow blobs */}
      <div style={{
        position: "fixed", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(79,255,160,0.05) 0%, transparent 70%)",
        top: -80, right: -80, pointerEvents: "none", zIndex: 0,
      }} />

      {/* Left — Text */}
      <div style={{ animation: "fadeUp 0.8s ease both", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase",
          color: "#4FFFA0", marginBottom: "1.5rem",
        }}>
          <span style={{ width: 24, height: 1, background: "#4FFFA0", display: "inline-block" }} />
          Available for opportunities
          <span style={{
            width: 8, height: 8, borderRadius: "50%", background: "#4FFFA0",
            animation: "pulse-glow 2s infinite",
            boxShadow: "0 0 0 0 rgba(79,255,160,0.4)",
          }} />
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(3rem, 6vw, 5.5rem)",
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: "-2px",
          color: "#fff",
          marginBottom: "1rem",
        }}>
          Saurabh<br />
          <span style={{
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
          }}>
            Sawant
          </span>
        </h1>

        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "1rem",
          color: "#4FFFA0",
          marginBottom: "1.5rem",
          minHeight: "1.5rem",
        }}>
          // <span ref={typedRef} />
        </div>

        <p style={{
          fontSize: "0.95rem",
          lineHeight: 1.85,
          color: "#7A8898",
          maxWidth: 420,
          marginBottom: "2.5rem",
        }}>
          Software Engineer with <strong style={{ color: "#E8EDF2" }}>2.5 years</strong> of
          experience building scalable REST APIs, distributed backend systems, and
          SaaS/FinTech applications. Based in{" "}
          <strong style={{ color: "#E8EDF2" }}>Mumbai, India 🇮🇳</strong>.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="mailto:saurabhsawant077@gmail.com" className="btn-ghost">Say Hello →</a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: "4rem",
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{
            width: 1, height: 48,
            background: "linear-gradient(to bottom, #4FFFA0, transparent)",
          }} />
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.62rem", letterSpacing: "2px",
            textTransform: "uppercase", color: "#2A3441",
          }}>
            Scroll
          </span>
        </div>
      </div>

      {/* Right — Code card */}
      <div style={{
        display: "flex", flexDirection: "column", gap: "1rem",
        animation: "fadeUp 0.8s 0.2s ease both", opacity: 0,
        animationFillMode: "forwards", position: "relative", zIndex: 1,
      }}>
        {/* Terminal card */}
        <div className="card" style={{ overflow: "hidden" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "0.8rem 1.2rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "#0A0F14",
          }}>
            {[["#FF5F57","r"], ["#FFBD2E","y"], ["#28CA41","g"]].map(([c, k]) => (
              <div key={k} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem", color: "#374151", marginLeft: 6,
            }}>
              profile.ts
            </span>
          </div>

          <div style={{
            padding: "1.2rem 1.5rem",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.78rem",
            lineHeight: 2.1,
          }}>
            {[
              [<><S c="#C792EA">const</S> <S c="#82AAFF">developer</S> = {"{"}</>],
              [<>&nbsp;&nbsp;name: <S c="#C3E88D">"Saurabh Sawant"</S>,</>],
              [<>&nbsp;&nbsp;role: <S c="#C3E88D">"Software Engineer"</S>,</>],
              [<>&nbsp;&nbsp;exp: <S c="#F78C6C">2.5</S> <S c="#7A8898">+</S> <S c="#C3E88D">" years"</S>,</>],
              [<>&nbsp;&nbsp;location: <S c="#C3E88D">"Mumbai, IN 🇮🇳"</S>,</>],
              [<>&nbsp;&nbsp;focus: <S c="#C3E88D">"Backend & APIs"</S>,</>],
              [<>&nbsp;&nbsp;open_to_work: <S c="#4FFFA0">true</S>,</>],
              [<>{"}"}</>],
              [<><S c="#374151">// Let's build something great →</S></>],
            ].map((line, i) => (
              <div key={i} style={{ display: "flex", gap: 16 }}>
                <span style={{ color: "#2A3441", userSelect: "none", minWidth: 16 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1, background: "rgba(255,255,255,0.06)",
          borderRadius: 10, overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          {[
            ["2.5+", "Years Exp"],
            ["15+", "Projects"],
            ["100+", "API Endpoints"],
          ].map(([n, l]) => (
            <div key={l} style={{
              background: "#0D1318", padding: "1.1rem",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.6rem", fontWeight: 800, color: "#4FFFA0",
              }}>{n}</div>
              <div style={{
                fontSize: "0.68rem", color: "#4B5563",
                letterSpacing: "1px", textTransform: "uppercase", marginTop: 3,
              }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(79,255,160,0.5); }
          50% { box-shadow: 0 0 0 8px rgba(79,255,160,0); }
        }
        @media (max-width: 768px) {
          #home { grid-template-columns: 1fr !important; padding-top: 7rem !important; }
        }
      `}</style>
    </section>
  );
}

function S({ c, children }) {
  return <span style={{ color: c }}>{children}</span>;
}