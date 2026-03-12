import { DATA, useScrollReveal } from '../data';

export default function SkillsPage() {
  useScrollReveal();

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* ── Skills Grid ── */}
      <section id="skills">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Technologies and tools I work with.</p>
          </div>
          <div className="skills-grid">
            {DATA.skills.map((s) => (
              <div className="skill-category reveal" key={s.title}>
                <div className="skill-cat-header">
                  <span className="skill-cat-icon">{s.icon}</span>
                  <span className="skill-cat-title">{s.title}</span>
                </div>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span className="skill-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
