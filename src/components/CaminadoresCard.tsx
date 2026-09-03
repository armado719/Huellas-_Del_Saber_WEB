import { AnimatePresence, motion } from "framer-motion"
import { useId, useState } from "react"

const QUE_TRABAJAMOS = [
  "Apego y autonomía",
  "Estimulación sensorial",
  "Juego libre y exploración",
  "Lenguaje y comunicación",
  "Desarrollo motor",
  "Socialización y vínculos afectivos",
]

export function CaminadoresCard() {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()
  const titleId = useId()

  const toggle = () => setExpanded((v) => !v)

  return (
    <article
      className="group overflow-hidden rounded-[24px] bg-crema border border-black/5 shadow-sm hover:shadow-lg hover:border-rojo-escudo/15 hover:border-t-rojo-escudo/30 transition-all flex flex-col"
      onMouseLeave={() => {
        if (expanded) setExpanded(false)
      }}
    >
      {/* IMAGEN */}
      <div className="h-[180px] overflow-hidden shrink-0">
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=80&auto=format&fit=crop"
          alt="Niños de 1 a 2 años explorando y jugando"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-verde">1 — 2 años</p>
        <h3 id={titleId} className="font-display font-bold text-[18px] text-verde-oscuro mt-1">
          Caminadores
        </h3>
        <p className="mt-1.5 text-[12.5px] font-medium italic leading-relaxed text-verde/80">
          “Aprender explorando, crecer sintiéndose seguro.”
        </p>

        {/* Contenido cerrado - siempre visible */}
        <ul className="mt-3 space-y-1.5" aria-hidden={expanded}>
          {["Apego y autonomía", "Estimulación sensorial", "Juego libre y exploración"].map((b) => (
            <li key={b} className="flex items-center gap-2 text-[13px] text-black/70">
              <span className="w-1.5 h-1.5 rounded-full bg-dorado shrink-0" aria-hidden /> {b}
            </li>
          ))}
        </ul>

        <div className="mt-4 h-px bg-gradient-to-r from-dorado/40 to-transparent" aria-hidden />

        {/* Botón Conocer más / Cerrar - accesible, fuera del área animada para no perder hover */}
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={toggle}
          className="mt-3 w-full inline-flex items-center justify-center gap-1.5 bg-verde hover:bg-verde-claro text-white font-bold text-[13px] px-4 py-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dorado"
        >
          {expanded ? (
            <>
              Cerrar <span aria-hidden>↑</span>
            </>
          ) : (
            <>
              Conocer más <span aria-hidden>→</span>
            </>
          )}
        </button>

        {/* Contenido expandido */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={titleId}
              initial={{ height: 0, opacity: 0, y: -6 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4">
                <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-verde">¿Qué trabajamos en esta etapa?</p>
                <ul className="mt-2 space-y-1.5">
                  {QUE_TRABAJAMOS.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12.5px] text-black/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-verde shrink-0" aria-hidden />
                      <span className="w-1 h-1 rounded-full bg-rojo-escudo/60 shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 bg-white rounded-2xl p-4 border border-verde/10">
                  <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-dorado">Descripción pedagógica</p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-black/70">
                    En Caminadores acompañamos los primeros pasos de cada niño en un ambiente seguro, afectivo y estimulante. A
                    través del juego, la exploración y experiencias sensoriales, fortalecemos su autonomía, comunicación,
                    movimiento y vínculos con los demás, respetando siempre su ritmo de desarrollo.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  )
}
