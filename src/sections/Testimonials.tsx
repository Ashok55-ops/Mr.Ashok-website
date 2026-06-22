const testimonials = [
  {
    quote: 'Within 6 weeks we had doubled our inbound leads. The website redesign and Google Business work changed everything for us.',
    name: 'Rahul Mehta',
    role: 'Owner, FixIt Home Services',
    initials: 'RM',
    color: '#F05A22',
  },
  {
    quote: 'He set up our entire CRM in 3 days. Our sales team finally knows which leads to call and in what order. Conversion jumped 40%.',
    name: 'Priya Kapoor',
    role: 'Founder, SkillUp Academy',
    initials: 'PK',
    color: '#2D6BE4',
  },
  {
    quote: 'Honest, fast, and actually delivers. Most agencies talk ROI — Ashok builds it. The WhatsApp automation alone pays for everything.',
    name: 'Sanjay Joshi',
    role: 'Director, Nivo D2C',
    initials: 'SJ',
    color: '#059669',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-cream border-t border-ash">
      <div className="container-site">

        <div className="mb-16">
          <p className="section-label mb-4">Testimonials</p>
          <h2 className="display-heading text-4xl md:text-5xl">
            What people{' '}
            <span className="italic-accent">actually say.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-ash rounded-2xl p-7 flex flex-col hover:shadow-md transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-orange fill-orange" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-sm text-muted leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-ash">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-ink">{t.name}</p>
                  <p className="text-xs font-body text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap gap-6 items-center justify-center">
          {['Google Partner', 'HubSpot Certified', 'Meta Blueprint', 'WhatsApp Business API'].map(badge => (
            <span
              key={badge}
              className="text-xs font-body font-medium text-muted border border-ash rounded-full px-4 py-2"
            >
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
