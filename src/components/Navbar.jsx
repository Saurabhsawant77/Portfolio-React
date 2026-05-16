import { useState, useEffect } from "react";

const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub", href: "#github" },
    { label: "Certs", href: "#certifications" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "1.2rem 3rem",
                background: scrolled ? "rgba(8,12,16,0.92)" : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
                transition: "all 0.3s",
            }}>
                {/* Logo */}
                <a href="#" style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: 800,
                    fontSize: "1.25rem", color: "#fff", textDecoration: "none",
                    letterSpacing: "-0.5px",
                }}>
                    S<span style={{ color: "#4FFFA0" }}>.</span>Sawant
                </a>

                {/* Desktop Links */}
                <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}
                    className="nav-desktop">
                    {links.map(l => (
                        <a key={l.label} href={l.href}
                            onClick={() => setActive(l.label)}
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: "0.8rem", fontWeight: 500,
                                letterSpacing: "1.5px", textTransform: "uppercase",
                                color: active === l.label ? "#4FFFA0" : "#7A8898",
                                textDecoration: "none", transition: "color 0.2s",
                            }}
                            onMouseEnter={e => e.target.style.color = "#4FFFA0"}
                            onMouseLeave={e => e.target.style.color = active === l.label ? "#4FFFA0" : "#7A8898"}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a href="/Portfolio-React/Saurabh_Sawant_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        download="Saurabh_Sawant_Resume.pdf"
                        style={{
                            padding: "0.5rem 1.3rem",
                            background: "transparent",
                            border: "1px solid rgba(79,255,160,0.4)",
                            color: "#4FFFA0",
                            fontSize: "0.75rem", letterSpacing: "1px",
                            textTransform: "uppercase",
                            cursor: "pointer", borderRadius: "5px",
                            fontFamily: "'Outfit', sans-serif",
                            textDecoration: "none",
                            transition: "all 0.2s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(79,255,160,0.1)"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button onClick={() => setMenuOpen(!menuOpen)} style={{
                    display: "none", background: "none", border: "none",
                    color: "#E8EDF2", cursor: "pointer", fontSize: "1.4rem",
                }} className="nav-hamburger">☰</button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={{
                    position: "fixed", inset: 0, background: "rgba(8,12,16,0.97)",
                    zIndex: 999, display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: "2rem",
                }}>
                    <button onClick={() => setMenuOpen(false)} style={{
                        position: "absolute", top: "1.5rem", right: "2rem",
                        background: "none", border: "none", color: "#E8EDF2",
                        fontSize: "1.4rem", cursor: "pointer",
                    }}>✕</button>
                    {links.map(l => (
                        <a key={l.label} href={l.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                fontFamily: "'Syne', sans-serif", fontSize: "2rem",
                                fontWeight: 700, color: "#E8EDF2", textDecoration: "none",
                            }}>
                            {l.label}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
        </>
    );
}