const traits = [
  'Not a big agency — there is no account manager',
  'Direct communication, no layers',
  'Fast execution, no fluff',
  'Measurable results at every step',
]

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-ash">
      <div className="container-site">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left */}
          <div>
            <p className="section-label mb-6">About</p>
            <h2 className="display-heading text-4xl md:text-5xl mb-6">
              Hi, I'm Ashok<br />
              <span className="italic-accent">Chaudhary.</span>
            </h2>
            <p className="text-sm text-muted font-body mb-2">
              A Delhi-based digital marketer helping businesses do one thing
            </p>
            <p className="font-display italic text-xl text-ink mb-8">
              — convert attention into revenue.
            </p>
          </div>

          {/* Right */}
          <div>
            <p className="font-body text-muted leading-relaxed mb-8">
              I'm not a big agency. There's no account manager, no jargon, no 8-week
              "discovery phase". Just me — building systems that generate qualified
              leads, sales and customers. I build it, you grow it. Simple.
            </p>

            <ul className="space-y-3 mb-10">
              {traits.map(t => (
                <li key={t} className="flex items-start gap-2 text-sm font-body text-ink">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange block" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Years of experience', value: '5+' },
                { label: 'Industries served', value: '12+' },
                { label: 'Clients across India', value: '40+' },
                { label: 'Avg. response time', value: '< 4h' },
              ].map(s => (
                <div key={s.label} className="border border-ash rounded-x3 p-4">
                  <p className="font-display font-bold text-2x1 tracking-tight text-ink">{s.value}</p>
                  <p className="text-xs font-body text-muted mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
