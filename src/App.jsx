import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
            solutions. Currently working at TCS.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">
              View Projects ↗
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>

          <div className="hero-social">
            <Link
              to="/contact"
              className="social-icon"
              title="Contact Me"
            >
              ✉️
            </Link>
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
