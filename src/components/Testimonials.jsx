export default function Testimonials() {
  const items = [
    {name:'Ava Chen', loc:'San Francisco, USA', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop', text:'They built our brand and platform in record time. The craft and results exceeded expectations.'},
    {name:'Marco Silva', loc:'Lisbon, PT', img:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop', text:'A strategic partner who understands business, design and AI. We saw immediate impact.'},
    {name:'Sofia Novak', loc:'Berlin, DE', img:'https://images.unsplash.com/photo-1548536908-58d1b02308e0?q=80&w=400&auto=format&fit=crop', text:'Premium from start to finish. Thoughtful systems, clean code and gorgeous visuals.'},
    {name:'Noah Patel', loc:'Toronto, CA', img:'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop', text:'They operate like an elite product team. Communication and delivery were flawless.'},
  ]

  return (
    <section className="relative bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">Testimonials</p>
          <h2 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">What partners say</h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {items.map((t)=> (
            <div key={t.name} className="snap-start flex w-80 flex-none flex-col rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] text-white">
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium ">{t.name}</p>
                  <p className="text-sm text-white/70">{t.loc}</p>
                </div>
              </div>
              <p className="mt-4 text-white/80">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
