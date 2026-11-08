import { NivelCard } from "../components/NivelCard"
import niveles from "../../content/niveles.json"

export function Niveles() {
  return (
    <section className="bg-white py-14 lg:py-20 border-y border-black/5">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[680px] mx-auto">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-dorado">Niveles educativos</p>
          <h1 className="mt-2 font-display font-bold text-[30px] lg:text-[40px] leading-none tracking-tight text-verde-oscuro">
            De Caminadores a <span className="text-verde italic">Jardín</span>
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-black/60">
            Educación inicial integral: juego, arte, literatura y exploración del medio. Cada nivel con propósito y ternura.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {niveles.map((nivel) => (
            <NivelCard key={nivel.nivel} {...nivel} />
          ))}
        </div>
      </div>
    </section>
  )
}
