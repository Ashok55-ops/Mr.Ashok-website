export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/8 py-10">
      <div className="container-site flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body font-semibold text-sm text-white">
          Ashok Chaudhary
        </p>
        <p className="text-xs font-body text-white/30">
          © {new Date().getFullYear()} · Delhi, India · All rights reserved
        </p>
        <div className="flex gap-5">
          {['LinkedIn', 'WhatsApp', 'Email'].map(s => (
            <a
              key={s}
              href="#"
              className="text-xs font-body text-white/40 hover:text-white transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
