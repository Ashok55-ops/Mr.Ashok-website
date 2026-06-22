const stats = [
  { value: '3.2×', label: 'Avg. ROAS' },
  { value: '60',   label: 'Days on average' },
  { value: '100%', label: 'Focused on results' },
]

export default function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-cream">
      <div className="container-site">

        {/* Eyebrow */}
        <p className="section-label mb-8">
          Freelance Digital Marketing Consultant · Delhi, India
        </p>

        {/* Headline */}
        <h1 className="display-heading text-5xl md:text-7xl lg:text-8xl max-w-4xl mb-8">
          Turning website<br />
          visitors into{' '}
          <span className="italic-accent block md:inline">paying clients.</span>
        </h1>

        {/* Sub */}
        <p className="font-body text-muted text-lg md:text-xl max-w-xl leading-relaxed mb-12">
          I'm Ashok — a freelance digital marketer helping service businesses
          generate more leads with high-converting websites, WhatsApp automation,
          CRM systems and ad campaigns that actually work.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a href="#contact" className="btn-primary">
            Get My Free Audit →
          </a>
          <a href="#work" className="btn-secondary">
            See Real Results
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 pt-10 border-t border-ash">
          {stats.map(s => (
            <div key={s.value}>
              <p className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-ink">
                {s.value}
              </p>
              <p className="text-sm font-body text-muted mt-1">{s.label}</p>
            </div>
          ))}

          {/* Social proof avatars */}
          <div className="sm:ml-auto flex items-center gap-3">
            <div className="flex -space-x-3">
              {['AC', 'RM', 'PK', 'SJ'].map((initials, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-cream flex items-center justify-center text-xs font-semibold text-white"
                  style={{ background: ['#F05A22','#2D6BE4','#059669','#7C3AED'][i], zIndex: 4 - i }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm font-body text-muted">
              <span className="text-ink font-semibold">50+</span> happy clients
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
