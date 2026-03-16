import { DATA, useScrollReveal } from '../data';

export default function CertificationsPage() {
  useScrollReveal();

  return (
    <main style={{ paddingTop: '80px' }}>
      <section id="certifications">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">Verified credentials that back up the experience.</p>
          </div>
          <div className="certs-grid">
            {DATA.certifications.map((c) => {
              const CardContent = (
                <>
                  <div className="cert-icon">{c.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-issuer">{c.issuer}</div>
                  </div>
                  {c.link && c.link !== '#' && (
                    <div style={{ opacity: 0.5, fontSize: '0.8rem' }}>↗</div>
                  )}
                </>
              );

              return c.link ? (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-card"
                  key={c.name}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {CardContent}
                </a>
              ) : (
                <div className="cert-card" key={c.name}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
