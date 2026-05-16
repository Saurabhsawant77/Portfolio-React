export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: 1100,
      margin: "0 auto",
      flexWrap: "wrap",
      gap: "1rem",
    }}>
      <div style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800, fontSize: "1rem", color: "#fff",
      }}>
        S<span style={{ color: "#4FFFA0" }}>.</span>Sawant
      </div>

      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.68rem", color: "#2A3441",
        letterSpacing: "1px",
      }}>
        © {new Date().getFullYear()} Saurabh Sawant — Built with React & Vite
      </div>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {[
          ["GH", "https://github.com/Saurabhsawant77"],
          ["LI", "https://www.linkedin.com/in/saurabhsawant077/"],
          ["✉", "mailto:saurabhsawant077@gmail.com"],
        ].map(([l, h]) => (
          <a key={l} href={h} target="_blank" rel="noreferrer" style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem", color: "#4B5563",
            textDecoration: "none", transition: "color 0.2s",
          }}
          onMouseEnter={e => e.target.style.color = "#4FFFA0"}
          onMouseLeave={e => e.target.style.color = "#4B5563"}
          >{l}</a>
        ))}
      </div>
    </footer>
  );
}