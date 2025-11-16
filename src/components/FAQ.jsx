export default function FAQ() {
  const faqs = [
    {q:'What is your typical timeline?', a:'Most engagements run 6–12 weeks depending on scope and team size.'},
    {q:'How do you price projects?', a:'We operate on fixed-scope or monthly retainers with transparent milestones.'},
    {q:'Do you work with startups?', a:'Yes — from seed to IPO. We tailor squads for your stage and velocity.'},
    {q:'What stack do you use?', a:'Modern React, Typescript, Tailwind, FastAPI and AI-first tooling.'},
    {q:'Do you offer AI strategy?', a:'Absolutely. We integrate LLMs, automations and data pipelines end-to-end.'},
    {q:'Can you support enterprise?', a:'Yes — security reviews, SOC2, SSO and rigorous QA are standard.'},
  ]

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-500">FAQ</p>
          <h2 className="mt-2 text-4xl font-semibold text-gray-900">Answers, fast</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((f,idx)=> (
            <div key={f.q} className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <span className="text-xs font-mono text-gray-500">{String(idx+1).padStart(2,'0')}</span>
              <h3 className="mt-2 text-lg font-medium text-gray-900">{f.q}</h3>
              <p className="mt-2 text-gray-600">{f.a}</p>
              <button className="mt-4 rounded-full bg-gray-900 px-4 py-2 text-sm text-white">Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
