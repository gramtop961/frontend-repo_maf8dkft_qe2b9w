import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <FAQ />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
