export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-dark">
      <div className="container-site">

        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-white/40 mb-6">Let's talk</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tighter leading-tight mb-6">
            Let's find the leaks<br />
            costing you{' '}
            <span className="italic text-orange">leads.</span>
          </h2>
          <p className="font-body text-white/50 text-base md:text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            Sign up for a free 30-min audit. I'll review your site, funnels, and
            ads — and show you exactly where you're losing money and what to fix.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="mailto:ashokchaudhary@example.com"
              className="btn-primary"
            >
              ashokchaudhary@example.com
            </a>
            <a
              href="https://wa.me/919211332552"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              +91 92113 32552
            </a>
          </div>

          {/* Quick contact form */}
          <div className="bg-dark-card border border-white/8 rounded-2xl p-8 md:p-10 text-left">
            <p className="font-body font-semibold text-white mb-6 text-sm">
              Or fill in your details — I'll reach out within 4 hours.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-body text-white/40 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 font-body focus:outline-none focus:border-orange/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-body text-white/40 mb-2">WhatsApp Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 font-body focus:outline-none focus:border-orange/50 transition-colors"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-body text-white/40 mb-2">What do you need help with?</label>
              <textarea
                rows={3}
                placeholder="Briefly describe your business and biggest marketing challenge..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 font-body focus:outline-none focus:border-orange/50 transition-colors resize-none"
              />
            </div>
            <button className="btn-primary w-full sm:w-auto justify-center">
              Send & Book Audit →
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
