import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Backend Developer", "API Architect", "Full-Stack Engineer", "Problem Solver"],
      typeSpeed: 60, backSpeed: 40, backDelay: 2000, loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" style={{ minHeight: "100vh", maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>
      <div className="hero-grid" style={{ minHeight: "100vh" }}>

        {/* Left */}
        <div style={{ animation: "fadeUp 0.8s ease both", position: "relative", zIndex: 1, paddingTop: "2rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
            letterSpacing: "2px", textTransform: "uppercase",
            color: "#4FFFA0", marginBottom: "1.5rem",
          }}>
            <span style={{ width: 20, height: 1, background: "#4FFFA0", display: "inline-block" }} />
            Available for opportunities
            <span style={{
              width: 8, height: 8, borderRadius: "50%", background: "#4FFFA0",
              animation: "pulse-glow 2s infinite",
            }} />
          </div>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 800, lineHeight: 0.95,
            letterSpacing: "-2px", color: "#fff", marginBottom: "1rem",
          }}>
            Saurabh<br />
            <span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.25)" }}>
              Sawant
            </span>
          </h1>

          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.95rem",
            color: "#4FFFA0", marginBottom: "1.2rem", minHeight: "1.5rem",
          }}>
            // <span ref={typedRef} />
          </div>

          <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "#7A8898", maxWidth: 420, marginBottom: "2rem" }}>
            Software Engineer with <strong style={{ color: "#E8EDF2" }}>2.5 years</strong> building
            scalable REST APIs, distributed backend systems, and SaaS/FinTech applications.
            Based in <strong style={{ color: "#E8EDF2" }}>Mumbai, India 🇮🇳</strong>.
          </p>

          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="mailto:saurabhsawant077@gmail.com" className="btn-ghost">Say Hello →</a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #4FFFA0, transparent)" }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "2px", textTransform: "uppercase", color: "#2A3441" }}>
              Scroll
            </span>
          </div>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", animation: "fadeUp 0.8s 0.2s ease both", animationFillMode: "forwards", opacity: 0 }}>
          {/* Code card */}
          <div className="card" style={{ overflow: "hidden" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "0.7rem 1.2rem",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              background: "#0A0F14",
            }}>
              {[["#FF5F57","r"],["#FFBD2E","y"],["#28CA41","g"]].map(([c,k]) => (
                <div key={k} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#374151", marginLeft: 6 }}>profile.ts</span>
            </div>
            <div style={{ padding: "1.2rem 1.5rem", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", lineHeight: 2 }}>
              {[
                <><S c="#C792EA">const</S> <S c="#82AAFF">developer</S> = {"{"}</>,
                <>&nbsp;&nbsp;name: <S c="#C3E88D">"Saurabh Sawant"</S>,</>,
                <>&nbsp;&nbsp;role: <S c="#C3E88D">"Software Engineer"</S>,</>,
                <>&nbsp;&nbsp;exp: <S c="#F78C6C">2.5</S><S c="#7A8898"> + </S><S c="#C3E88D">" years"</S>,</>,
                <>&nbsp;&nbsp;location: <S c="#C3E88D">"Mumbai, IN 🇮🇳"</S>,</>,
                <>&nbsp;&nbsp;focus: <S c="#C3E88D">"Backend & APIs"</S>,</>,
                <>&nbsp;&nbsp;open_to_work: <S c="#4FFFA0">true</S>,</>,
                <>{"}"}</>,
                <><S c="#374151">// Let's build something great →</S></>,
              ].map((line, i) => (
                <div key={i} style={{ display: "flex", gap: 14 }}>
                  <span style={{ color: "#2A3441", userSelect: "none", minWidth: 16 }}>{String(i+1).padStart(2,"0")}</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="stats-row">
            {[["2.5+","Years Exp"],["15+","Projects"],["100+","APIs Built"]].map(([n,l]) => (
              <div key={l} style={{ background: "#0D1318", padding: "1rem", textAlign: "center" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#4FFFA0" }}>{n}</div>
                <div style={{ fontSize: "0.62rem", color: "#4B5563", letterSpacing: "1px", textTransform: "uppercase", marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function S({ c, children }) {
  return <span style={{ color: c }}>{children}</span>;
}