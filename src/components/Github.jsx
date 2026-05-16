import { useState, useEffect } from "react";

const langColors = {
  JavaScript: "#F7DF1E", TypeScript: "#3178C6", Python: "#3572A5",
  Java: "#B07219", HTML: "#E34C26", CSS: "#563D7C",
  Shell: "#89E051", Go: "#00ADD8", Rust: "#DEA584",
};

export default function Github() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("https://api.github.com/users/Saurabhsawant77/repos?per_page=100&sort=updated")
      .then(r => { if (!r.ok) throw new Error(`GitHub API error: ${r.status}`); return r.json(); })
      .then(data => setRepos(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const languages = ["all", ...new Set(repos.map(r => r.language).filter(Boolean))];
  const filtered = filter === "all" ? repos : repos.filter(r => r.language === filter);

  return (
    <section id="github" className="section">
      <div className="section-num">06 — GitHub</div>
      <div className="section-eyebrow">Open Source</div>
      <div className="section-title">My Repositories</div>

      {/* Stats */}
      {!loading && !error && (
        <div className="gh-stats-row">
          {[
            { val: repos.length, label: "Total Repos" },
            { val: repos.filter(r => !r.fork).length, label: "Original" },
            { val: repos.reduce((a, r) => a + r.stargazers_count, 0), label: "Stars" },
            { val: repos.filter(r => r.fork).length, label: "Forked" },
          ].map(s => (
            <div key={s.label} style={{ background: "#0D1318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "0.8rem 1rem", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#4FFFA0" }}>{s.val}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#4B5563", letterSpacing: "1px", textTransform: "uppercase" }}>{s.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Language filter */}
      {!loading && !error && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
          {languages.map(lang => (
            <button key={lang} onClick={() => setFilter(lang)} style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
              letterSpacing: "1px", textTransform: "uppercase",
              padding: "5px 12px", borderRadius: 5, cursor: "pointer", transition: "all 0.2s",
              border: filter === lang ? "1px solid rgba(79,255,160,0.4)" : "1px solid rgba(255,255,255,0.07)",
              background: filter === lang ? "rgba(79,255,160,0.08)" : "rgba(255,255,255,0.03)",
              color: filter === lang ? "#4FFFA0" : "#7A8898",
            }}>
              {lang === "all" ? "All" : lang}
              {lang !== "all" && langColors[lang] && (
                <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: langColors[lang], marginLeft: 6, verticalAlign: "middle" }} />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Loading skeleton */}
      {loading && (
        <div className="repos-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ background: "#0D1318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "1.5rem", height: 130, animation: "pulse 1.5s infinite" }} />
          ))}
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{ background: "rgba(255,95,87,0.08)", border: "1px solid rgba(255,95,87,0.2)", borderRadius: 10, padding: "1.2rem", fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "#FF5F57" }}>
          ⚠ {error} — GitHub API rate limit may have been hit. Try again shortly.
        </div>
      )}

      {/* Repo grid */}
      {!loading && !error && (
        <div className="repos-grid">
          {filtered.map((repo) => (
            <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <div className="card" style={{ padding: "1.2rem", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "0.7rem" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: "0.4rem" }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#E8EDF2", wordBreak: "break-word" }}>
                      📁 {repo.name}
                    </div>
                    {repo.fork && (
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", color: "#4B5563", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", padding: "2px 6px", borderRadius: 3, whiteSpace: "nowrap", flexShrink: 0 }}>fork</span>
                    )}
                  </div>
                  {repo.description && (
                    <p style={{ fontSize: "0.75rem", color: "#7A8898", lineHeight: 1.55, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{repo.description}</p>
                  )}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", flexWrap: "wrap" }}>
                  {repo.language && (
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "#7A8898" }}>
                      <span style={{ width: 7, height: 7, borderRadius: "50%", background: langColors[repo.language] || "#4B5563", display: "inline-block" }} />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "#7A8898" }}>⭐ {repo.stargazers_count}</span>}
                  <span style={{ marginLeft: "auto", fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", color: "#2A3441" }}>
                    {new Date(repo.updated_at).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <a href="https://github.com/Saurabhsawant77" target="_blank" rel="noreferrer" className="btn-ghost">View Full GitHub Profile ↗</a>
      </div>
    </section>
  );
}