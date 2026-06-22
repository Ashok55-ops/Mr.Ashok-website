const services = [
  {
    icon: '⚡',
    title: 'Conversion-Focused Websites',
    desc: 'Sites built to turn traffic into qualified leads. Fast, clean, and persuasive — every element earns its place.',
    featured: true,
  },
  {
    icon: '📍',
    title: 'Google Business Profile',
    desc: 'Dominate local search. Get your business showing in the map pack and showing up when people are ready to buy.',
    featured: false,
  },
  {
    icon: '💬',
    title: 'WhatsApp Customer Journeys',
    desc: 'Automated follow-ups that feel personal. From first opt-in to first sale — all on auto-pilot via your client\'s chat.',
    featured: false,
  },
  {
    icon: '🗂️',
    title: 'CRM Setup & Management',
    desc: 'HubSpot pipelines that create clarity. Know exactly where every lead is and what needs to happen next.',
    featured: false,
  },
  {
    icon: '✉️',
    title: 'Email Automation & Nurture',
    desc: 'Stay top of mind without doing the work. Sequences that educate, build trust, and close — even while you sleep.',
    featured: false,
  },
  {
    icon: '📣',
    title: 'Ads Campaigns (Meta & Google)',
    desc: 'Targeted campaigns that reach the right audience — creatives, copy, audience structure, and daily optimisation.',
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream border-t border-ash">
      <div className="container-site">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">What I do</p>
            <h2 className="display-heading text-4xl md:text-5xl">
              Built for outcomes,<br />
              not <span className="italic-accent">deliverables.</span>
            </h2>
          </div>
          <p className="text-muted font-body text-sm max-w-xs leading-relaxed">
            Every service is connected to a business result. No vanity metrics, no bloated retainers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(s => (
            <div
              key={s.title}
              className={`rounded-2xl p-7 transition-all duration-300 group cursor-default
                ${s.featured
                  ? 'bg-ink text-white col-span-1 md:col-span-2 lg:col-span-1 hover:bg-dark'
                  : 'bg-white border border-ash hover:shadow-md hover:-translate-y-0.5'
                }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-5
                ${s.featured ? 'bg-orange/20' : 'bg-ash'}`}
              >
                {s.icon}
              </div>
              <h3 className={`font-body font-semibold text-base mb-3
                ${s.featured ? 'text-white' : 'text-ink'}`}
              >
                {s.title}
              </h3>
              <p className={`text-sm font-body leading-relaxed
                ${s.featured ? 'text-white/60' : 'text-muted'}`}
              >
                {s.desc}
              </p>
              <div className="mt-6">
                <span className={`text-xs font-semibold font-body flex items-center gap-1
                  ${s.featured ? 'text-orange' : 'text-orange'}`}
                >
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
