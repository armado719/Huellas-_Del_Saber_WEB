import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Nosotros } from "./pages/Nosotros"
import { Propuesta } from "./pages/Propuesta"
import { Niveles } from "./pages/Niveles"
import { Filosofia } from "./pages/Filosofia"
import { Admisiones } from "./pages/Admisiones"
import { Galeria } from "./pages/Galeria"
import { Contacto } from "./pages/Contacto"
import { Privacidad } from "./pages/Privacidad"
import { Terminos } from "./pages/Terminos"
import { NotFound } from "./pages/NotFound"
import { FloatingWhatsApp } from "./components/FloatingWhatsApp"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-verde text-white px-4 py-2 rounded-full z-[100]">
        Saltar al contenido
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/propuesta" element={<Propuesta />} />
          <Route path="/niveles" element={<Niveles />} />
          <Route path="/filosofia" element={<Filosofia />} />
          <Route path="/admisiones" element={<Admisiones />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  )
}
