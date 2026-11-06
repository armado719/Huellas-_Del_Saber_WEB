import { Escudo } from "./Escudo"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-verde-oscuro text-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Escudo className="w-12 h-12" />
              <div className="leading-relaxed">
                <p className="font-display font-bold text-[16px] leading-5">Gimnasio Pedagógico</p>
                <p className="text-[11px] tracking-[0.16em] uppercase text-dorado-claro font-semibold leading-5">Huellas del Saber</p>
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-white/70 max-w-[360px]">
              🌱 Educación inicial con amor, juego y valores. Niños de Caminadores a Jardín. Un lugar donde tu hijo florece.
            </p>
            <div className="mt-3 flex items-center gap-2 text-[12px] text-white/60">
              <span className="w-2 h-2 rounded-full bg-dorado" /> 31 publicaciones · Comunidad en Instagram
            </div>
            <div className="mt-5 flex gap-2">
              <a href="https://instagram.com/huellasdelsabergp" target="_blank" rel="noopener noreferrer" aria-label="Instagram huellasdelsabergp" className="w-9 h-9 grid place-items-center rounded-full text-white hover:opacity-90 transition-opacity border border-white/10" style={{ background: "linear-gradient(45deg,#feda75,#d62976 45%,#962fbf)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100091446056359" target="_blank" rel="noopener noreferrer" aria-label="Facebook g.p.huellasdelsaber" className="w-9 h-9 grid place-items-center rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white border border-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 8h3V3h-3c-2.21 0-4 1.79-4 4v3H7v5h3v6h5v-6h3l1-5h-4V7c0-.55.45-1 1-1Z" />
                </svg>
              </a>
              <a href="https://wa.me/573167927255" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp 3167927255" className="w-9 h-9 grid place-items-center rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white border border-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 1.74.45 3.44 1.32 4.93L2 22l5.34-1.4a8.13 8.13 0 0 0 4.7 1.21h.01c5.46 0 9.88-4.42 9.88-9.88 0-2.64-1.03-5.12-2.88-6.99Zm-7.01 15.19h-.01a8.13 8.13 0 0 1-4.15-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.1 8.1 0 0 1-1.25-4.3c0-4.5 3.65-8.15 8.15-8.15 2.18 0 4.23.85 5.77 2.39a8.11 8.11 0 0 1 2.38 5.77c0 4.5-3.65 8.16-8.17 8.16Zm6.54-6.1c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.77.09-.36-.18-1.5-.55-2.86-1.76-1.06-.95-1.77-2.12-1.98-2.48-.21-.36 0-.56.16-.74.15-.15.36-.4.54-.6.18-.2.24-.36.36-.6.12-.24.06-.44-.03-.62-.09-.18-.81-1.96-1.11-2.68-.29-.7-.59-.6-.81-.62l-.69-.01c-.24 0-.62.09-.95.44-.33.36-1.25 1.22-1.25 2.98s1.28 3.45 1.46 3.69c.18.24 2.52 3.85 6.1 5.4.85.37 1.52.59 2.03.75.86.27 1.63.23 2.25.14.69-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-dorado-claro">Navegación</p>
            <ul className="mt-4 space-y-2 text-[13.5px] text-white/75">
              <li><Link to="/nosotros" className="hover:text-white">Nosotros</Link></li>
              <li><Link to="/propuesta" className="hover:text-white">Propuesta</Link></li>
              <li><Link to="/filosofia" className="hover:text-white">Filosofía</Link></li>
              <li><Link to="/galeria" className="hover:text-white">Galería</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-dorado-claro">Contacto</p>
            <ul className="mt-4 space-y-2 text-[13.5px] text-white/75">
              <li><a href="https://maps.app.goo.gl/bGRuR2Fu57BDgoj48" target="_blank" rel="noopener noreferrer" className="hover:text-white">Calle 24a # 34 bis -35, Neiva, Huila</a></li>
              <li><a href="https://wa.me/573167927255" target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold text-dorado-claro">316 7927255</a></li>
              <li><a href="mailto:g.p.huellasdelsaber@gmail.com" className="hover:text-white">g.p.huellasdelsaber@gmail.com</a></li>
              <li><a href="https://instagram.com/huellasdelsabergp" target="_blank" rel="noopener noreferrer" className="hover:text-white">@huellasdelsabergp</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100091446056359" target="_blank" rel="noopener noreferrer" className="hover:text-white">fb: g.p.huellasdelsaber · 117 seguidores</a></li>
              <li className="mt-2 pt-2 border-t border-white/10">
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-dorado-claro">Horario de Atención</p>
                <p className="text-[13px] font-semibold text-white">7:00 A.M a 05:30 P.M</p>
                <p className="text-[12px] text-white/60">De Lunes a Viernes</p>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-dorado-claro">Admisiones</p>
            <p className="mt-4 text-[13px] text-white/70">Caminadores a Jardín. Agenda tu visita.</p>
            <a href="https://wa.me/573167927255?text=Hola%20Huellas%20del%20Saber%20quiero%20info%20admisiones" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex bg-dorado hover:bg-dorado-hover text-verde-oscuro font-bold text-[13.5px] px-5 py-2.5 rounded-full">
              Solicitar info
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:gap-3 items-center sm:items-start justify-between text-[12px] text-white/55 text-center sm:text-left">
          <p>© 2019 Gimnasio Pedagógico Huellas del Saber · Neiva, Huila</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link to="/privacidad" className="hover:text-white">Política de Privacidad</Link>
            <Link to="/terminos" className="hover:text-white">Condiciones del Servicio</Link>
          </div>
          <p className="text-dorado-claro font-medium">¡Formando para el futuro!</p>
        </div>
      </div>
    </footer>
  )
}
