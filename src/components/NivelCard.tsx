import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useId, useState } from "react"

type Props = {
  edad: string
  nivel: string
  img: string
  alt: string
  frase: string
  bullets: string[]
  queTrabajamos: string[]
  descripcion: string
}

export function NivelCard({ edad, nivel, img, alt, frase, bullets, queTrabajamos, descripcion }: Props) {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <article className="group overflow-hidden rounded-[24px] bg-crema border border-black/5 shadow-sm hover:shadow-lg hover:border-rojo-escudo/15 hover:border-t-rojo-escudo/30 transition-all flex flex-col">
        <div className="aspect-[16/11] overflow-hidden shrink-0 bg-crema">
          <img src={img} alt={alt} className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-verde">{edad}</p>
          <h3 id={titleId} className="font-display font-bold text-[18px] text-verde-oscuro mt-1">
            {nivel}
          </h3>
          <p className="mt-1.5 text-[12.5px] font-medium italic leading-relaxed text-verde/80">“{frase}”</p>
          <ul className="mt-3 space-y-1.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-[13px] text-black/70">
                <span className="w-1.5 h-1.5 rounded-full bg-dorado shrink-0" aria-hidden /> {b}
              </li>
            ))}
          </ul>
          <div className="mt-4 h-px bg-gradient-to-r from-dorado/40 to-transparent" aria-hidden />
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen(true)}
            className="mt-3 w-full inline-flex items-center justify-center gap-1.5 bg-verde hover:bg-verde-claro text-white font-bold text-[13px] px-4 py-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dorado"
          >
            Conocer más <span aria-hidden>→</span>
          </button>
        </div>
      </article>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-verde-oscuro/45 backdrop-blur-[2px] z-40"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) setOpen(false)
              }}
            >
              <div className="bg-crema rounded-[28px] shadow-2xl border border-white max-w-[520px] w-full max-h-[90vh] overflow-hidden flex flex-col">
                <div className="aspect-[16/9] overflow-hidden shrink-0 relative bg-crema">
                  <img src={img} alt={alt} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" aria-hidden />
                  <button
                    type="button"
                    aria-label="Cerrar"
                    onClick={() => setOpen(false)}
                    className="absolute top-3 right-3 w-8 h-8 grid place-items-center rounded-full bg-white/90 hover:bg-white text-verde shadow-md border border-black/5"
                  >
                    ✕
                  </button>
                  <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase text-verde">
                    {edad} · {nivel}
                  </div>
                </div>

                <div className="p-6 overflow-y-auto">
                  <h3 className="font-display font-bold text-[20px] text-verde-oscuro">{nivel}</h3>
                  <p className="text-[12.5px] italic text-verde/80 mt-1">“{frase}”</p>

                  <p className="mt-4 text-[11px] font-bold tracking-[0.16em] uppercase text-verde">¿Qué trabajamos en esta etapa?</p>
                  <ul className="mt-2 space-y-1.5">
                    {queTrabajamos.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[13px] text-black/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-verde shrink-0" aria-hidden />
                        <span className="w-1 h-1 rounded-full bg-rojo-escudo/60 shrink-0" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 bg-white rounded-2xl p-4 border border-verde/10">
                    <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-dorado">Descripción pedagógica</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-black/70">{descripcion}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-5 w-full inline-flex items-center justify-center gap-1.5 bg-verde hover:bg-verde-claro text-white font-bold text-[13px] px-4 py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dorado"
                  >
                    Cerrar <span aria-hidden>↑</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
