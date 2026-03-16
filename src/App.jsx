import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CertificationsPage from './Components/CertificationsPage';
import ProjectsPage from './Components/ProjectsPage';
import SkillsPage from './Components/SkillsPage';
import ContactPage from './Components/ContactPage';
import { DATA, useScrollReveal } from './data';
import './App.css';


function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />
      <div className="container">
        {/* — Left col — */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" /> Available for opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">{DATA.name}</span>
          </h1>

          <p className="hero-title">
            <span>{DATA.title}</span> &nbsp;·&nbsp; {DATA.subtitle}
          </p>

          <p className="hero-desc">
            I build robust, scalable full-stack applications — from Spring Boot
            microservices to React frontends, all the way to AWS-deployed cloud
            solutions. Currently shaping enterprise software at TCS.
          </p>

          <div className="hero-actions">
            <a href="/projects" className="btn-primary">
              View Projects ↗
            </a>
            <a href="/contact" className="btn-outline">
              Get in Touch
            </a>
          </div>

          <div className="hero-social">
            <a
              href={DATA.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={`mailto:${DATA.email}`}
              className="social-icon"
              title="Email"
            >
              ✉️
            </a>
            <a href={`tel:${DATA.phone}`} className="social-icon" title="Phone">
              📞
            </a>
          </div>
        </div>

        {/* — Right col — */}
        <div className="hero-avatar">
          <div className="avatar-wrapper">
            <div className="avatar-ring" />
            <img
              src="/avatar.png"
              alt="Atharva Marathe"
              className="avatar-img"
              onError={(e) => {
                 e.target.style.display = 'none';
                 e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="avatar-initials" style={{ display: 'none' }}>
              {DATA.initials}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { label: 'Location', value: DATA.location, sub: 'Mumbai, Maharashtra' },
    { label: 'Email', value: DATA.email, sub: 'Open to opportunities' },
    { label: 'Phone', value: DATA.phone, sub: 'WhatsApp available' },
    { label: 'Date of Birth', value: DATA.dob, sub: '22 years old' },
    { label: 'Languages', value: 'English · German · Hindi · Marathi', sub: 'Multilingual' },
    { label: 'Hobbies', value: 'Badminton · Chess · Music', sub: 'Beyond the keyboard' },
  ];

  return (
    <section id="about" className="section-alt">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate engineer who loves building things that matter.
          </p>
        </div>
        <div className="about-grid">
          {cards.map((c) => (
            <div className="info-card reveal" key={c.label}>
              <div className="info-card-label">{c.label}</div>
              <div className="info-card-value">{c.value}</div>
              <div className="info-card-sub">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Where I've worked and what I've built.
          </p>
        </div>
        <div className="timeline">
          {DATA.experience.map((exp) => (
            <div className="timeline-item reveal" key={exp.role}>
              <div className="timeline-dot">{exp.icon}</div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-role">{exp.role}</span>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <div className="timeline-company">{exp.company}</div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-alt">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">The academic foundation.</p>
        </div>
        <div className="education-grid">
          {DATA.education.map((e) => (
            <div className="edu-card reveal" key={e.degree}>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-meta">
                <span className="edu-badge">📊 {e.score}</span>
                <span className="edu-year">🗓️ {e.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  useScrollReveal();
  return (
    <main>
      <Hero />
      <Education />
      <Experience />
      <About />
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP ROOT
═══════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
