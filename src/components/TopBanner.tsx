import { Link } from "react-router-dom"

export function TopBanner() {
  return (
    <aside aria-label="Aviso institucional" className="bg-verde-oscuro text-crema text-[12px] py-2 px-4 border-b border-white/10 relative z-50">
      <div className="mx-auto max-w-[1280px] flex items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="w-2 h-2 rounded-full bg-dorado animate-pulse" aria-hidden="true" />
          <span className="font-medium tracking-wide">
            <strong className="text-dorado-claro font-bold uppercase tracking-wider text-[11px] mr-1">Admisiones 2026:</strong>
            Cupos abiertos para Caminadores a Jardín en Neiva
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[11.5px] text-white/80">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado/70" aria-hidden="true" />
            Calle 24a #34 bis-35, Neiva
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-dorado/70" aria-hidden="true" />
            7:00 A.M a 05:30 P.M
          </span>
          <Link
            to="/admisiones"
            className="inline-flex items-center gap-1 text-dorado-claro hover:text-white font-bold underline transition-colors"
          >
            Conocer requisitos →
          </Link>
        </div>
      </div>
    </aside>
  )
}
