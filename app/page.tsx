const pillars = [
  'GitHub-first onboarding',
  'CodeGuard policy profiles',
  'PR security checks',
  'CI/CD workflow risk detection',
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Valkyra</p>
          <h1>Control layer for AI-built software.</h1>
          <p className="lede">
            Valkyra helps SMB software teams install AI coding guardrails, scan pull requests, detect CI/CD risks, and produce security-readiness reports without running heavy infrastructure.
          </p>
          <div className="actions">
            <a className="primary-action" href="mailto:hello@valkyra.dev">Request early access</a>
            <a className="secondary-action" href="https://github.com/tyungchan/valkyra">View repo</a>
          </div>
        </div>
        <div className="pillar-grid">
          {pillars.map((item) => (
            <div key={item} className="pillar-card">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
