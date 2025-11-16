import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/70">Creative • AI • Web</p>
        <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight">
          Cinematic experiences for ambitious brands
        </h1>
        <p className="mt-6 max-w-2xl text-white/80">
          We craft premium digital products and immersive brand worlds powered by design and intelligent systems.
        </p>

        <div className="mt-8 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row">
          <div className="flex w-full items-center rounded-2xl bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur-xl">
            <input type="email" placeholder="Enter your email" className="w-full bg-transparent px-4 py-3 text-white placeholder-white/60 outline-none" />
            <button className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-3 font-medium">
              Get Proposal <ArrowRight size={16} />
            </button>
          </div>
          <p className="text-xs text-white/70">Free audit • 24h response</p>
        </div>
      </div>
    </section>
  )
}
