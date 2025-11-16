import { useState } from 'react'
import { Menu, Search, Phone, Globe, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('EN')

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-inner" />
              <span className="text-sm uppercase tracking-[0.2em] text-white/80">FLUX AGENCY</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
              <a href="#work" className="text-white/80 hover:text-white transition">Work</a>
              <a href="#faq" className="text-white/80 hover:text-white transition">FAQ</a>
              <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="group relative hidden lg:flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-3 py-2">
                <Search size={16} className="text-white/70" />
                <input placeholder="Search" className="bg-transparent placeholder-white/60 text-sm text-white outline-none w-36" />
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-3 py-2">
                <Globe size={16} className="text-white/70" />
                <select aria-label="Language" value={lang} onChange={(e)=>setLang(e.target.value)} className="bg-transparent text-sm outline-none text-white">
                  <option className="bg-gray-900" value="EN">EN</option>
                  <option className="bg-gray-900" value="FR">FR</option>
                  <option className="bg-gray-900" value="JP">JP</option>
                </select>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-emerald-400/90 hover:bg-emerald-400 text-gray-900 font-medium px-4 py-2 transition">
                <Phone size={16} /> Consult
              </a>
            </div>

            <button className="md:hidden text-white" onClick={()=>setOpen(true)}>
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/80">Menu</span>
                <button onClick={()=>setOpen(false)} className="text-white"><X /></button>
              </div>
              <div className="grid gap-3">
                <a onClick={()=>setOpen(false)} href="#services" className="text-white/90">Services</a>
                <a onClick={()=>setOpen(false)} href="#work" className="text-white/90">Work</a>
                <a onClick={()=>setOpen(false)} href="#faq" className="text-white/90">FAQ</a>
                <a onClick={()=>setOpen(false)} href="#contact" className="text-white/90">Contact</a>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-3 py-2">
                  <Globe size={16} className="text-white/70" />
                  <select aria-label="Language" value={lang} onChange={(e)=>setLang(e.target.value)} className="bg-transparent text-sm outline-none text-white">
                    <option className="bg-gray-900" value="EN">EN</option>
                    <option className="bg-gray-900" value="FR">FR</option>
                    <option className="bg-gray-900" value="JP">JP</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
