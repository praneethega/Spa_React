import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactPopup from './components/ContactPopup'

function App() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header onBookNow={() => setIsContactPopupOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Hero onBookNow={() => setIsContactPopupOpen(true)} />} />
          <Route path="/home" element={<Hero onBookNow={() => setIsContactPopupOpen(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
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
