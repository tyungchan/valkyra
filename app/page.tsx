const pillars = [
  'GitHub-first onboarding',
  'CodeGuard policy profiles',
  'PR security checks',
  'CI/CD workflow risk detection',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">Valkyra</p>
          <h1 className="text-5xl font-semibold leading-tight tracking-normal md:text-7xl">
            Control layer for AI-built software.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Valkyra helps SMB software teams install AI coding guardrails, scan pull requests, detect CI/CD risks, and produce security-readiness reports without running heavy infrastructure.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="rounded-md bg-[#7dd3fc] px-5 py-3 text-sm font-semibold text-slate-950" href="mailto:hello@valkyra.dev">Request early access</a>
            <a className="rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100" href="https://github.com/tyungchan/valkyra">View repo</a>
          </div>
        </div>
        <div className="mt-16 grid gap-3 md:grid-cols-4">
          {pillars.map((item) => (
            <div key={item} className="rounded-lg border border-slate-700 bg-slate-900/70 p-4 text-sm text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
