import { useState, useEffect } from 'react';
import { DATA, useScrollReveal } from './data';
import './App.css';

/* ═══════════════════════════════════════════════════════════
   SVG ICONS
═══════════════════════════════════════════════════════════ */
const MoonIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CodeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   THEME TOGGLE
═══════════════════════════════════════════════════════════ */
function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════════ */
function HeroSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const h12 = hours % 12 || 12;

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-header">
          <img
            src="/avatar.png"
            alt={DATA.name}
            className="hero-avatar-small"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="hero-avatar-fallback" style={{ display: 'none' }}>
            {DATA.initials}
          </div>
          <div className="hero-name-block">
            <h1 className="hero-name">{DATA.name.split(' ')[0]}</h1>
            <div className="hero-handle">@{DATA.email.replace(/\s+/g, '').toLowerCase()}</div>
          </div>
          <div className="hero-time">
            <div>// {h12}:{minutes} {ampm}</div>
            <div>GMT +5:30</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   BIO SECTION
═══════════════════════════════════════════════════════════ */
function BioSection() {
  return (
    <section className="bio-section">
      <div className="container reveal">
        <h2 className="bio-greeting">
          Hi, I&rsquo;m <strong>{DATA.name}</strong>
        </h2>
        <p className="bio-role">
          <strong>{DATA.title}</strong> &nbsp;·&nbsp; {DATA.subtitle}
        </p>
        <p>
          I build robust, scalable full-stack applications — from Spring Boot
          microservices to React frontends, all the way to AWS-deployed cloud
          solutions. Currently working at TCS.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CV SECTION
═══════════════════════════════════════════════════════════ */
function CVSection() {
  return (
    <section className="cv-section">
      <div className="container reveal">
        {/* <h3>Curriculum Vitae</h3> */}
        <div className="cv-card">
          <div className="cv-card-label">Resume / CV</div>
          <div className="cv-card-title">Career Snapshot</div>
          <div className="cv-card-desc">
            A quick walkthrough of my experience, impactful builds, technical stack,
            and the work I care about.
          </div>
          <a
            href="/Atharva_Resume_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-download-btn"
          >
            View Resume →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SOCIALS SECTION
═══════════════════════════════════════════════════════════ */
function SocialsSection() {
  return (
    <section className="socials-section">
      <div className="container reveal">
        <div className="socials-title">Find me around the web</div>
        <div className="socials-row">
          <a href={`mailto:${DATA.email}`} className="social-btn" title="Email">
            <MailIcon />
          </a>
          <a href={DATA.github} target="_blank" rel="noreferrer" className="social-btn" title="GitHub">
            <GithubIcon />
          </a>
          <a href={`tel:${DATA.phone}`} className="social-btn" title="Phone">
            <PhoneIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION HEADING (reusable)
═══════════════════════════════════════════════════════════ */
function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <div className="container">
        <div className="section-heading-inner">
          <div>
            <h2>{title}</h2>
            <div className="section-heading-sub">{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STACK / SKILLS SECTION
═══════════════════════════════════════════════════════════ */
function StackSection() {
  return (
    <>
      <SectionHeading title="Stack" subtitle="Technologies I work with" />
      <section className="stack-section">
        <div className="container">
          <p className="stack-desc reveal">
            These are the technologies I&rsquo;ve learned and worked with.
            This list is constantly evolving as I continue to learn and grow as a developer.
          </p>
          {DATA.skills.map((cat, i) => (
            <div className="stack-category reveal" key={cat.title}>
              <span className="stack-category-num">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="stack-category-title">{cat.title}</span>
              <div className="stack-tags">
                {cat.tags.map((tag) => (
                  <span className="stack-tag" key={tag}>
                    <span className="stack-tag-icon">{cat.icon}</span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   WORK / EXPERIENCE SECTION
═══════════════════════════════════════════════════════════ */
function WorkSection() {
  return (
    <>
      <SectionHeading title="Work" subtitle="Experience" />
      <section className="work-section">
        <div className="container">
          {DATA.experience.map((exp) => (
            <div className="work-item reveal" key={exp.role}>
              <div className="work-company-row">
                <div className="work-company-left">
                  <div className="work-company-icon">{exp.icon}</div>
                  <span className="work-company-name">{exp.company.split('·')[0].trim()}</span>
                </div>
                <span className="work-location">
                  {exp.company.includes('·') ? exp.company.split('·')[1].trim() : ''}
                </span>
              </div>
              <div className="work-role-block">
                <div className="work-role-header">
                  <div className="work-role-icon"><CodeIcon /></div>
                  <div className="work-role-info">
                    <div className="work-role-title">{exp.role}</div>
                  </div>
                </div>
                <div className="work-role-meta">
                  <span>{exp.role.includes('Intern') ? 'Intern' : 'Full-time'}</span> | {exp.date}
                </div>
                <ul className="work-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {exp.tags && (
                  <div className="work-tags">
                    {exp.tags.map((t) => (
                      <span className="work-tag" key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECTS SECTION
═══════════════════════════════════════════════════════════ */
function ProjectsSection() {
  return (
    <>
      <SectionHeading title="Projects" subtitle="Things I've built" />
      <section className="projects-section">
        <div className="container">
          {DATA.projects.map((p, i) => (
            <div className="project-item reveal" key={p.title}>
              <div className="project-num-row">
                <span className="project-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="project-content">
                  <div className="project-title-row">
                    <h3 className="project-title">{p.title}</h3>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-github-link"
                        title="View on GitHub"
                      >
                        <GithubIcon />
                      </a>
                    )}
                  </div>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="project-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   EDUCATION SECTION
═══════════════════════════════════════════════════════════ */
function EducationSection() {
  return (
    <>
      <SectionHeading title="Education" subtitle="Academic foundation" />
      <section className="education-section">
        <div className="container">
          {DATA.education.map((e) => (
            <div className="edu-item reveal" key={e.degree}>
              <div className="edu-icon-wrap">🎓</div>
              <div className="edu-info">
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-meta-row">
                  <span className="edu-score">📊 {e.score}</span>
                  <span className="edu-year">🗓️ {e.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   CERTIFICATIONS SECTION
═══════════════════════════════════════════════════════════ */
function CertificationsSection() {
  return (
    <>
      <SectionHeading title="Certifications" subtitle="Verified credentials" />
      <section className="certs-section">
        <div className="container">
          {DATA.certifications.map((c) => {
            const inner = (
              <>
                <div className="cert-icon-wrap">{c.icon}</div>
                <div className="cert-info">
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                </div>
                {c.link && c.link !== '#' && (
                  <span className="cert-link-arrow">↗</span>
                )}
              </>
            );

            return c.link && c.link !== '#' ? (
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="cert-item"
                key={c.name}
              >
                {inner}
              </a>
            ) : (
              <div className="cert-item" key={c.name}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT SECTION
═══════════════════════════════════════════════════════════ */
function ContactSection() {
  const items = [
    { icon: '✉️', label: 'Email', value: DATA.email, href: `mailto:${DATA.email}` },
    { icon: '📱', label: 'Phone', value: DATA.phone, href: `tel:${DATA.phone}` },
    { icon: <span style={{ display: 'flex' }}><GithubIcon /></span>, label: 'GitHub', value: 'github.com/AtharvaMarathe1', href: DATA.github, external: true },
    { icon: '📍', label: 'Location', value: DATA.location, href: null },
  ];

  return (
    <>
      <SectionHeading title="Contact" subtitle="Get in touch" />
      <section className="contact-section">
        <div className="container">
          <p className="contact-desc reveal">
            Currently working at <strong>TCS</strong> and open to exciting side projects
            and collaborations. Feel free to reach out!
          </p>
          <div className="contact-items">
            {items.map((item) =>
              item.href ? (
                <a
                  href={item.href}
                  className="contact-item reveal"
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
                <div className="contact-item reveal" key={item.label}>
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
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Designed &amp; built by {DATA.name} · {new Date().getFullYear()}
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
    <div className="page-wrapper">
      <div className="grid-bg" />
      <ThemeToggle />
      <main>
        <HeroSection />
        <BioSection />
        <CVSection />
        <SocialsSection />
        <StackSection />
        <WorkSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
