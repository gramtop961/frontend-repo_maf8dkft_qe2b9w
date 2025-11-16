import { Sparkles, Layers, Rocket, Shield } from 'lucide-react'

const badges = [
  { icon: Sparkles, label: 'Brand Systems' },
  { icon: Layers, label: 'UI Engineering' },
  { icon: Rocket, label: 'Growth Experiments' },
  { icon: Shield, label: 'Security & QA' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-gray-950 to-gray-950/95 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Our Services</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Design, AI and web engineered to perform</h2>
            <p className="mt-5 text-white/70">From strategy to production. We deliver brand systems, AI-powered platforms and cinematic web experiences with measurable outcomes.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
                  <b.icon size={16} className="text-emerald-300" /> {b.label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
              {[1,2,3,4].map((i)=> (
                <img key={i} src={`https://images.unsplash.com/photo-15${60+i}000000-0?auto=format&fit=crop&w=900&q=60`} alt="Preview" className="h-28 w-44 flex-none rounded-xl object-cover ring-1 ring-white/15 shadow-xl" />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-1 ring-1 ring-inset ring-white/15 backdrop-blur-xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]">
              <div className="rounded-3xl bg-gray-900 p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-medium">End-to-end product team</h3>
                    <p className="mt-2 max-w-sm text-white/70">Plug in a senior cross-functional squad to accelerate brand, product and go-to-market.</p>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-emerald-400/20 ring-1 ring-emerald-300/30" />
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    {k:'Strategy',v:'Positioning, narrative, OKRs'},
                    {k:'Design',v:'Brand, product, motion'},
                    {k:'Engineering',v:'Web, AI, automation'},
                    {k:'Growth',v:'SEO, CRO, analytics'},
                  ].map((item)=> (
                    <div key={item.k} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <p className="text-sm text-white/60">{item.k}</p>
                      <p className="mt-1 font-medium">{item.v}</p>
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full rounded-2xl bg-white py-3 text-gray-900 font-medium">Explore capabilities</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
