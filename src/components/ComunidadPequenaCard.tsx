import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ComunidadPequenaCard() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(true) } }}
        className="bg-white rounded-[20px] overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde"
      >
        <div className="aspect-[16/10] overflow-hidden bg-crema">
          <img src="/img/Comunidad_pequena.jpg" alt="Niños pintando juntos con docente" className="w-full h-full object-cover object-center" loading="lazy" />
        </div>
        <div className="p-6">
          <div className="w-9 h-9 rounded-full bg-verde-soft grid place-items-center text-verde font-bold text-[14px]">⬢</div>
          <h3 className="mt-4 font-display font-bold text-[16px] text-verde-oscuro">Comunidad pequeña</h3>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-black/60">Grupos reducidos, atención cercana. 31 publicaciones de vida real.</p>
          <p className="mt-3 text-[11px] font-bold text-verde/60">Ver más →</p>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 bg-verde-oscuro/45 backdrop-blur-[2px] z-40" onClick={() => setOpen(false)} aria-hidden="true" />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.32, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
            >
              <div className="bg-crema rounded-[28px] shadow-2xl border border-white max-w-[520px] w-full max-h-[90vh] overflow-hidden flex flex-col">
                <div className="aspect-[16/10] overflow-hidden shrink-0 relative bg-crema">
                  <img src="/img/Comunidad_pequena.jpg" alt="Niños pintando juntos" className="w-full h-full object-cover object-center" />
                  <button type="button" aria-label="Cerrar" onClick={() => setOpen(false)} className="absolute top-3 right-3 w-8 h-8 grid place-items-center rounded-full bg-white/90 hover:bg-white text-verde shadow-md border border-black/5">✕</button>
                </div>
                <div className="p-6 overflow-y-auto">
                  <h3 className="font-display font-bold text-[18px] text-verde-oscuro">Comunidad pequeña</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-black/70">Grupos reducidos y atención cercana donde cada niño es acompañado de forma personalizada. Una comunidad que comparte 31 historias reales de crecimiento y alegría.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
