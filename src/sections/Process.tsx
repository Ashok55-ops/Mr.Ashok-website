const steps = [
  {
    num: '01',
    title: 'Audit',
    desc: 'I dig into your website, ads, CRM, and funnels. Find every leak. Map the biggest revenue opportunities before touching anything.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'A clear 30/60/90 day plan. Which channels, what sequence, what metrics define success. You approve before we build anything.',
  },
  {
    num: '03',
    title: 'Implementation',
    desc: 'I build. Landing pages, automation flows, CRM pipelines, ad campaigns — executed fast and tested before going live.',
  },
  {
    num: '04',
    title: 'Optimisation',
    desc: 'Weekly reporting, ongoing testing, and iteration. We double down on what works, cut what does not, and keep improving.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-dark">
      <div className="container-site">

        <div className="mb-16">
          <p className="section-label text-white/40 mb-4">How it works</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tighter leading-tight">
            Four steps.{' '}
            <span className="italic text-orange">Zero fluff.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-dark-card border border-white/8 rounded-2xl p-7 hover:border-orange/30 transition-all duration-300 group"
            >
              <p className="font-display font-bold text-5xl text-white/10 group-hover:text-orange/20 transition-colors mb-6 tracking-tighter">
                {s.num}
              </p>
              <h3 className="font-body font-semibold text-white text-base mb-3">
                {s.title}
              </h3>
              <p className="text-sm font-body text-white/50 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-2xl md:text-3xl text-white tracking-tighter mb-2">
              Ready to find where you're <span className="italic text-orange">losing leads?</span>
            </p>
            <p className="text-sm font-body text-white/50">
              A free 30-minute audit. No pitch. Just clarity.
            </p>
          </div>
          <a href="#contact" className="btn-primary flex-shrink-0">
            Book Free Audit →
          </a>
        </div>

      </div>
    </section>
  )
}
