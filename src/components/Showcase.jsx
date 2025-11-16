import { Mountain, Gem, Palette } from 'lucide-react'

const items = [
  { title: 'Adventure', icon: Mountain, img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop', tag: 'Experience' },
  { title: 'Luxury', icon: Gem, img: 'https://images.unsplash.com/photo-1541558619105-c98b39b1c39b?q=80&w=1600&auto=format&fit=crop', tag: 'Premium' },
  { title: 'Creative', icon: Palette, img: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop', tag: 'Branding' },
]

export default function Showcase() {
  return (
    <section id="work" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Featured</p>
            <h2 className="mt-2 text-4xl font-semibold text-gray-900">Signature work</h2>
          </div>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">View all</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((i)=> (
            <div key={i.title} className="group relative h-80 overflow-hidden rounded-3xl shadow-2xl">
              <img src={i.img} alt={i.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="backdrop-blur-md bg-white/10 ring-1 ring-white/20 rounded-2xl p-4 text-white flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <i.icon size={14} className="text-emerald-300" /> {i.tag}
                    </div>
                    <h3 className="mt-1 text-xl font-medium">{i.title}</h3>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-white/10 ring-1 ring-white/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
