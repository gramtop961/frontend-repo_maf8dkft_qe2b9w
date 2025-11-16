export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500" />
              <span className="text-sm uppercase tracking-[0.2em] text-white/80">FLUX AGENCY</span>
            </div>
            <p className="mt-4 text-white/60">Cinematic digital products powered by design and intelligent systems.</p>
          </div>

          <div>
            <h4 className="text-white/70">Explore</h4>
            <ul className="mt-3 space-y-2 text-white/60">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#work" className="hover:text-white">Work</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/70">Support</h4>
            <ul className="mt-3 space-y-2 text-white/60">
              <li>Help Center</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/70">Special Services</h4>
            <ul className="mt-3 space-y-2 text-white/60">
              <li>AI Roadmaps</li>
              <li>Brand Systems</li>
              <li>E-commerce</li>
              <li>Web Performance</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-white/70">Ready to move fast?</p>
              <a href="#" className="mt-3 inline-block rounded-xl bg-white px-4 py-2 font-medium text-gray-900">Book a call</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">© {new Date().getFullYear()} Flux Agency. All rights reserved.</div>
      </div>
    </footer>
  )
}
