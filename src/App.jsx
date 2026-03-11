import { useState, useEffect, useRef } from 'react';
import './App.css';

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */
const DATA = {
  name: 'Atharva Marathe',
  initials: 'AM',
  title: 'Full Stack Developer',
  subtitle: 'General Engineer Trainee @ TCS | Spring Boot · React · AWS',
  email: 'apmarathe10@gmail.com',
  phone: '+91 8329632714',
  github: 'https://github.com/AtharvaMarathe1',
  dob: '12 Sep 2003',
  location: 'Mumbai, India',

  experience: [
    {
      role: 'General Engineer Trainee',
      company: 'Tata Consultancy Services (TCS) · Mumbai, India',
      date: 'Nov 2025 – Present',
      icon: '🏢',
      bullets: [
        'Working on Spring Boot and Linux-based enterprise solutions',
      ],
    },
    {
      role: 'Full Stack Development & AI Integration Intern',
      company: 'Daira Edtech · Pune, India (Remote)',
      date: 'Jun 2025 – Oct 2025',
      icon: '🤖',
      bullets: [
        'Built TensorFlow CNN for handwriting-based learning difficulty and psychology analysis',
        'Applied contrast enhancement and alphabet bounding boxes for feature extraction',
        'Deployed via TFLite and TF.js (React) for cross-platform use',
      ],
    },
  ],

  projects: [
    {
      icon: '📚',
      title: 'Library Management System',
      desc: 'Enterprise-grade library platform built with Spring Boot microservices. Utilises Eureka Server for service registration, Feign Client for inter-service communication, and Angular for a rich, responsive UI.',
      tags: ['Spring Boot', 'Microservices', 'Eureka', 'Feign Client', 'Angular', 'Spring MVC'],
      github: null,
      live: null,
    },
    {
      icon: '🎮',
      title: 'AWS Cloud-Based Tic Tac Toe',
      desc: 'React application with full game logic, component-based architecture, and state management. Deployed via AWS S3 static hosting. Backend expansion underway with AWS Lambda & DynamoDB for multiplayer state sync.',
      tags: ['React', 'AWS S3', 'AWS Lambda', 'DynamoDB', 'Serverless'],
      github: 'https://github.com/AtharvaMarathe1/tictac',
      live: null,
    },
    {
      icon: '🌤️',
      title: 'Weather App',
      desc: 'Real-time weather application built in JavaScript that fetches live weather data from external APIs, displaying temperature, humidity, and conditions for any location worldwide.',
      tags: ['JavaScript', 'REST API', 'HTML/CSS'],
      github: 'https://github.com/AtharvaMarathe1/Weather',
      live: null,
    },
    {
      icon: '🔗',
      title: 'URL Shortener',
      desc: 'A lightweight URL shortening service built with JavaScript. Converts long URLs into short, shareable links while tracking usage statistics.',
      tags: ['JavaScript', 'Node.js', 'REST API'],
      github: 'https://github.com/AtharvaMarathe1/URL-shortner',
      live: null,
    },
  ],

  skills: [
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      tags: ['AWS S3', 'AWS Lambda', 'DynamoDB', 'EC2', 'Google Cloud'],
    },
    {
      icon: '⚙️',
      title: 'Backend',
      tags: ['Spring Boot', 'Spring MVC', 'Microservices', 'REST API', 'Feign Client', 'Eureka', 'Linux'],
    },
    {
      icon: '🎨',
      title: 'Frontend',
      tags: ['React', 'Angular', 'HTML5', 'CSS3', 'TF.js'],
    },
    {
      icon: '🤖',
      title: 'AI / ML',
      tags: ['TensorFlow', 'TFLite', 'PyTorch', 'CUDA', 'CNN'],
    },
    {
      icon: '🛠️',
      title: 'Tools & Others',
      tags: ['Git', 'Video Editing', 'Adobe Premiere Pro', 'Adobe After Effects'],
    },
    {
      icon: '🌐',
      title: 'Languages',
      tags: ['English', 'German', 'Hindi', 'Marathi'],
    },
  ],

  certifications: [
    {
      icon: '🏆',
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
    },
    {
      icon: '☁️',
      name: 'Google Cloud Computing Foundation',
      issuer: 'Google Cloud',
    },
    {
      icon: '🌐',
      name: 'Web-Verse: Web Development and Design',
      issuer: 'Android Club, VIT Chennai',
    },
    {
      icon: '🔐',
      name: 'Ethical Hacking',
      issuer: 'NPTEL',
    },
  ],

  education: [
    {
      degree: 'BTech in Computer Science Engineering',
      school: 'Vellore Institute of Technology',
      score: 'CGPA: 8.15',
      year: '2021 – 2025 · Chennai',
    },
    {
      degree: 'Higher Secondary Education (12th)',
      school: 'Maharashtra State Board',
      score: '88.00%',
      year: '2021 · Pune',
    },
    {
      degree: 'Secondary Education (10th)',
      school: 'Maharashtra State Board',
      score: '84.40%',
      year: '2019 · Pune',
    },
  ],
};

/* ═══════════════════════════════════════════════════════════
   HOOK: Scroll Reveal
═══════════════════════════════════════════════════════════ */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ═══════════════════════════════════════════════════════════
   COMPONENT: Navbar
═══════════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact', cta: true },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <span className="nav-logo">AM.</span>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={l.cta ? 'nav-cta' : ''}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENT: Hero
═══════════════════════════════════════════════════════════ */
function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero" id="home">
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
            <a href="#projects" className="btn-primary">
              View Projects ↗
            </a>
            <a href="#contact" className="btn-outline">
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
              {/* GitHub SVG */}
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
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
            {!imgError ? (
              <img
                src="/avatar.png"
                alt="Atharva Marathe"
                className="avatar-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="avatar-initials">{DATA.initials}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENT: About
═══════════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════════
   COMPONENT: Experience
═══════════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════════
   COMPONENT: Projects
═══════════════════════════════════════════════════════════ */
function Projects() {
  return (
    <section id="projects" className="section-alt">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Things I've built — from microservices to cloud deployments.
          </p>
        </div>
        <div className="projects-grid">
          {DATA.projects.map((p) => (
            <div className="project-card reveal" key={p.title}>
              <div className="project-icon">{p.icon}</div>
              <div>
                <div className="project-title">{p.title}</div>
                <p className="project-desc">{p.desc}</p>
              </div>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                )}
                {!p.github && (
                  <span className="project-link" style={{ opacity: 0.4, cursor: 'default' }}>
                    🔒 Private
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENT: Skills
═══════════════════════════════════════════════════════════ */
function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            My technical toolkit — constantly expanding.
          </p>
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
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENT: Certifications
═══════════════════════════════════════════════════════════ */
function Certifications() {
  return (
    <section className="section-alt">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Verified credentials that back up the experience.
          </p>
        </div>
        <div className="certs-grid">
          {DATA.certifications.map((c) => (
            <div className="cert-card reveal" key={c.name}>
              <div className="cert-icon">{c.icon}</div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENT: Education
═══════════════════════════════════════════════════════════ */
function Education() {
  return (
    <section id="education">
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

/* ═══════════════════════════════════════════════════════════
   COMPONENT: Contact
═══════════════════════════════════════════════════════════ */
function Contact() {
  const contactItems = [
    { icon: '✉️', label: 'Email', value: DATA.email, href: `mailto:${DATA.email}` },
    { icon: '📱', label: 'Phone', value: DATA.phone, href: `tel:${DATA.phone}` },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/AtharvaMarathe1',
      href: DATA.github,
      external: true,
    },
    { icon: '📍', label: 'Location', value: DATA.location, href: null },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h2>
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p>
              Whether you have an exciting opportunity, a cool project idea, or
              just want to say hi — my inbox is always open. I'll do my best to
              get back to you!
            </p>
            <div className="contact-links">
              {contactItems.map((item) =>
                item.href ? (
                  <a
                    href={item.href}
                    className="contact-item"
                    key={item.label}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                  >
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-value">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="contact-item" key={item.label}>
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-value">{item.value}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '6rem', marginBottom: '24px', lineHeight: 1 }}>👋</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '300px' }}>
                Currently working at <strong style={{ color: 'var(--accent-primary)' }}>TCS</strong> and open
                to exciting side projects and collaborations.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a href={`mailto:${DATA.email}`} className="btn-primary">
                  Send me an email ✉️
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPONENT: Footer
═══════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Designed &amp; built by{' '}
          <span>{DATA.name}</span> · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP ROOT
═══════════════════════════════════════════════════════════ */
export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
