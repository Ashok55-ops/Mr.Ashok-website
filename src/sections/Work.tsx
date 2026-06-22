const cases = [
  {
    client: 'Local Service Business',
    industry: 'Home Services',
    problem: 'Relying almost entirely on word-of-mouth, zero digital presence.',
    solution: 'Google Business optimisation, local SEO, and lead capture funnel.',
    result: '+37% inbound calls in 60 days',
    resultColor: 'bg-orange text-white',
  },
  {
    client: 'Coaching Brand',
    industry: 'Education',
    problem: 'Hundreds of leads per month, no system to follow up or convert.',
    solution: 'Built CRM pipeline, 5-step WhatsApp nurture, and email sequences.',
    result: '3.2× more discovery calls',
    resultColor: 'bg-ink text-white',
  },
  {
    client: 'D2C Studio',
    industry: 'E-Commerce',
    problem: 'Meta ads eating budget with zero ROAS visibility or attribution.',
    solution: 'Rebuilt ad structure, landing pages, and conversion tracking from scratch.',
    result: 'Conversion rate jumped to 4.1%',
    resultColor: 'bg-orange text-white',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-white border-t border-ash">
      <div className="container-site">

        <div className="mb-16">
          <p className="section-label mb-4">Results</p>
          <h2 className="display-heading text-4xl md:text-5xl">
            Real businesses.<br />
            <span className="italic-accent">Real numbers.</span>
          </h2>
        </div>

        <div className="space-y-5">
          {cases.map((c, i) => (
            <div
              key={i}
              className="grid md:grid-cols-4 gap-6 md:gap-10 border border-ash rounded-2xl p-7 md:p-8 hover:shadow-md transition-all duration-300 items-start"
            >
              {/* Client */}
              <div>
                <p className="section-label mb-2">Client</p>
                <p className="font-body font-semibold text-ink">{c.client}</p>
                <p className="text-xs text-muted mt-1">{c.industry}</p>
              </div>

              {/* Problem */}
              <div>
                <p className="section-label mb-2">Challenge</p>
                <p className="text-sm font-body text-muted leading-relaxed">{c.problem}</p>
              </div>

              {/* Solution */}
              <div>
                <p className="section-label mb-2">Solution</p>
                <p className="text-sm font-body text-muted leading-relaxed">{c.solution}</p>
              </div>

              {/* Result */}
              <div className="flex items-start">
                <span className={`inline-block px-4 py-2 rounded-xl text-sm font-body font-bold ${c.resultColor}`}>
                  {c.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
