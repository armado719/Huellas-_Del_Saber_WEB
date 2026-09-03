import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Escudo } from "./Escudo"
import { TopBanner } from "./TopBanner"

const NAV = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Propuesta", to: "/propuesta" },
  { label: "Niveles", to: "/niveles" },
  { label: "Filosofía", to: "/filosofia" },
  { label: "Galería", to: "/galeria" },
  { label: "Admisiones", to: "/admisiones" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-verde border-b border-white/10">
      <TopBanner />
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[76px] lg:min-h-[96px] items-center justify-between gap-4 py-2">
          <Link to="/" className="flex flex-col items-center text-center gap-2 group min-w-[200px] lg:min-w-[260px] py-1.5">
            <Escudo className="w-[56px] h-[56px] lg:w-[62px] lg:h-[62px] transition-transform group-hover:scale-[1.02]" />
            <div className="leading-relaxed">
              <p className="font-display font-bold text-white text-[13px] lg:text-[14.5px] tracking-tight leading-5">Gimnasio Pedagógico</p>
              <p className="font-sans text-[11px] lg:text-[12px] font-semibold tracking-[0.16em] text-dorado-claro uppercase leading-5">Huellas del Saber</p>
              <p className="text-[9.5px] lg:text-[10px] tracking-[0.14em] text-white/60 uppercase mt-2 font-medium leading-4">Neiva · Caminadores a Jardín · Con amor y valores</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-full text-[14px] font-medium transition-colors ${isActive ? "bg-white text-verde font-bold" : "text-white/90 hover:text-white hover:bg-white/10"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                `text-[13px] font-semibold px-4 py-2 rounded-full transition-colors border ${isActive ? "bg-white text-verde border-white font-bold" : "text-white bg-white/10 hover:bg-white hover:text-verde border-white/15"}`
              }
            >
              Contacto
            </NavLink>
            <a
              href="https://wa.me/573167927255"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] font-bold text-[13.5px] px-5 py-2.5 rounded-full transition-colors shadow-sm border border-transparent hover:border-[#25D366]"
            >
              WhatsApp
              <span aria-hidden className="w-5 h-5 rounded-full bg-white text-[#25D366] group-hover:bg-[#25D366] grid place-items-center text-[11px]">→</span>
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full bg-white/10 text-white border border-white/15"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6L18 18M18 6L6 18" /> : <path d="M4 7H20M4 12H20M4 17H20" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <nav className="bg-white rounded-2xl p-2 shadow-xl border border-black/5 flex flex-col gap-1">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${isActive ? "bg-verde text-white" : "text-verde hover:bg-verde-soft"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a href="https://wa.me/573167927255" onClick={() => setOpen(false)} className="mt-1 bg-[#25D366] text-white text-center font-bold py-3 rounded-xl">
                WhatsApp · 316 792 7255
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
