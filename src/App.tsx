import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactPopup from './components/ContactPopup'

function App() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onBookNow={() => setIsContactPopupOpen(true)} />
      <main>
        <Hero onBookNow={() => setIsContactPopupOpen(true)} />
        <About />
        <Services onBookNow={() => setIsContactPopupOpen(true)} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
      />
    </div>
  )
}

export default App
