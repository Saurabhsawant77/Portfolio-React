import { useState } from 'react';
import { certificates } from '../assets/certficates';

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="section">
      <div className="section-num">07 — Certifications</div>
      <div className="section-eyebrow">Credentials & Learning</div>
      <div className="section-title">Certifications</div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
      }}>
        {certificates.map((cert, i) => (
          <div
            key={i}
            onClick={() => setSelected(cert)}
            style={{ cursor: "pointer" }}
          >
            <div className="card" style={{
              padding: "1.8rem 2rem",
              display: "flex", gap: "1.5rem",
              alignItems: "flex-start",
              position: "relative", overflow: "hidden",
              transition: "border-color 0.2s, background 0.2s",
            }}>
              <div style={{
                position: "absolute", right: -40, top: -40,
                width: 150, height: 150,
                background: `radial-gradient(circle, ${cert.color}10 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />

              <div style={{
                width: 56, height: 56, flexShrink: 0,
                background: `rgba(${hexToRgb(cert.color)},0.08)`,
                border: `1px solid rgba(${hexToRgb(cert.color)},0.2)`,
                borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.6rem",
              }}>
                {cert.image
                  ? <img src={cert.image} alt={cert.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }} />
                  : cert.badge}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700, fontSize: "1rem",
                  color: "#E8EDF2", marginBottom: "0.3rem", lineHeight: 1.3,
                }}>{cert.title}</div>

                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem", color: "#7A8898", marginBottom: "0.5rem",
                }}>{cert.issuer}</div>

                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem", letterSpacing: "1px", textTransform: "uppercase",
                  color: cert.color,
                  background: `rgba(${hexToRgb(cert.color)},0.08)`,
                  border: `1px solid rgba(${hexToRgb(cert.color)},0.2)`,
                  padding: "3px 10px", borderRadius: 4,
                }}>✓ Certified · {cert.date}</div>
              </div>

              <span style={{
                fontFamily: "monospace", color: "#2A3441",
                fontSize: "1.1rem", alignSelf: "center", flexShrink: 0,
              }}>⤢</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── MODAL ── */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 2000,
            background: "rgba(8,12,16,0.88)",
            backdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1.5rem",
            animation: "fadeIn 0.2s ease",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#0D1318",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16, width: "100%", maxWidth: 680,
              overflow: "hidden",
              animation: "slideUp 0.25s ease",
              position: "relative",
            }}
          >
            {/* Top accent line */}
            <div style={{
              height: 3,
              background: `linear-gradient(90deg, ${selected.color}, transparent)`,
            }} />

            {/* Header */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "1.2rem 1.8rem",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 36, height: 36,
                  background: `rgba(${hexToRgb(selected.color)},0.1)`,
                  border: `1px solid rgba(${hexToRgb(selected.color)},0.25)`,
                  borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.1rem",
                }}>
                  {selected.image
                    ? <img src={selected.image} alt={selected.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6 }} />
                    : selected.badge}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700, fontSize: "0.95rem", color: "#fff",
                  }}>{selected.title}</div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.68rem", color: "#7A8898",
                  }}>{selected.issuer} · {selected.date}</div>
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#7A8898", borderRadius: 8,
                  width: 32, height: 32,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", fontSize: "1rem", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,95,87,0.1)"; e.currentTarget.style.color = "#FF5F57"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#7A8898"; }}
              >✕</button>
            </div>

            {/* Certificate image / preview */}
            <div style={{ padding: "1.5rem 1.8rem", background: "#080C10" }}>
              {selected.image ? (
                <img
                  src={selected.image}
                  alt={selected.title}
                  style={{
                    width: "100%", borderRadius: 10, display: "block",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                />
              ) : (
                <div style={{
                  height: 220,
                  background: `radial-gradient(ellipse at 50% 50%, rgba(${hexToRgb(selected.color)},0.08) 0%, transparent 70%)`,
                  border: "1px dashed rgba(255,255,255,0.08)",
                  borderRadius: 10,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: 12,
                }}>
                  <span style={{ fontSize: "3rem" }}>{selected.badge}</span>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem", color: "#4B5563", letterSpacing: "1px",
                  }}>No image preview — click below to view online</span>
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={{
              padding: "1rem 1.8rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem", letterSpacing: "1px", textTransform: "uppercase",
                color: selected.color,
                background: `rgba(${hexToRgb(selected.color)},0.08)`,
                border: `1px solid rgba(${hexToRgb(selected.color)},0.2)`,
                padding: "4px 12px", borderRadius: 4,
              }}>✓ Certified · {selected.date}</div>

              {selected.link && selected.link !== "#" && (
                <a href={selected.link} target="_blank" rel="noreferrer"
                   className="btn-primary"
                   style={{ fontSize: "0.72rem", padding: "0.55rem 1.2rem" }}>
                  View Certificate ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 700px) {
          #certifications > div:first-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function hexToRgb(hex) {
  if (!hex || !hex.startsWith("#")) return "79,255,160";
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}