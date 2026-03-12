import { DATA, useScrollReveal } from '../data';

export default function ContactPage() {
  useScrollReveal();

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
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="container">
          <div className="page-hero-content reveal">
            <div className="hero-badge">
              <span className="dot" /> Say Hello
            </div>
            <h1 className="page-hero-title">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="page-hero-subtitle">
              Whether you have an opportunity, a project idea, or just want to say hi.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <h2>
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p>
                Whether you have an exciting opportunity, a cool project idea, or just want to
                say hi — my inbox is always open. I'll do my best to get back to you!
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
                  Currently working at{' '}
                  <strong style={{ color: 'var(--accent-primary)' }}>TCS</strong> and open to
                  exciting side projects and collaborations.
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
    </main>
  );
}
