import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import VideoBackground from './components/ui/VideoBackground'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Menu from './components/sections/Menu'
import Delivery from './components/sections/Delivery'
import Promotions from './components/sections/Promotions'
import Gallery from './components/sections/Gallery'
import FAQ from './components/sections/FAQ'
import Testimonials from './components/sections/Testimonials'
import QRMenu from './components/sections/QRMenu'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div style={{ color: 'var(--color-espresso)' }} className="relative">
      <VideoBackground />
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Delivery />
      <Promotions />
      <Gallery />
      <FAQ />
      <Testimonials />
      <QRMenu />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

