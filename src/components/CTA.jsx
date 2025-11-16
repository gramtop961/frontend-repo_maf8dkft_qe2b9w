export default function CTA() {
  return (
    <section id="contact" className="relative">
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2400&auto=format&fit=crop" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-center">
          <div className="max-w-3xl text-white">
            <h2 className="text-4xl sm:text-5xl font-semibold">Let’s build your next flagship experience</h2>
            <p className="mt-4 text-white/80">High-velocity teams. Enterprise-grade quality. Outcomes you can measure.</p>
            <div className="mt-6 flex justify-center">
              <a href="#" className="rounded-full bg-white px-6 py-3 text-gray-900 font-medium">Book a call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
