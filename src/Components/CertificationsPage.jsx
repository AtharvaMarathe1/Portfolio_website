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
            {DATA.certifications.map((c) => (
              <div className="cert-card" key={c.name}>
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
    </main>
  );
}
