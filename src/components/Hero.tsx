import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const SLIDES = [
  { id: 1, image: "/img/inicio1.webp", alt: "Niños con cometas al aire libre con familias" },
  { id: 2, image: "/img/inicio2.webp", alt: "Niños con trajes típicos San Pedrito" },
  { id: 3, image: "/img/inicio3.webp", alt: "Celebración Feliz Día del Niño con globos" },
  { id: 4, image: "/img/inicio4.webp", alt: "Familias bajo árbol compartiendo jornada" },
  { id: 5, image: "/img/inicio5.webp", alt: "Niñas danzando folclor con abuelos" },
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // autoplay 3s, pause on hover, cleanup
  useEffect(() => {
    if (paused) return
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, 3000)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [paused, index])

  // Soporte de gestos táctiles swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 45
    if (distance > minSwipeDistance) {
      // Deslizar izquierda -> siguiente slide
      setIndex((i) => (i + 1) % SLIDES.length)
    } else if (distance < -minSwipeDistance) {
      // Deslizar derecha -> slide anterior
      setIndex((i) => (i > 0 ? i - 1 : SLIDES.length - 1))
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-verde-oscuro touch-pan-y"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Presentación principal"
    >
      {/* slider */}
      <div className="relative h-[560px] sm:h-[620px] lg:h-[720px]">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={SLIDES[index].id}
            src={SLIDES[index].image}
            alt={SLIDES[index].alt}
            initial={{ opacity: 0, scale: 1.06, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </AnimatePresence>

        {/* overlay suave para no tapar fotos reales - solo velo ligero */}
        <div className="absolute inset-0 bg-crema/18 backdrop-blur-[0.3px]" aria-hidden />
        {/* legibilidad solo detrás del texto - no sobre toda la imagen */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent lg:from-white/45 lg:via-white/15" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-verde-oscuro/20 via-transparent to-transparent" aria-hidden />

        {/* contenido */}
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full max-w-[680px] py-10">
            {/* texto */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 shadow-sm border border-black/5">
                <span className="w-2 h-2 rounded-full bg-rojo-escudo animate-pulse" aria-hidden />
                <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-verde">Identidad · Calidez · Excelencia</span>
                <span className="hidden sm:inline text-[11px] text-black/50">· Desde 2019 formando huellas</span>
              </div>

              <h1 className="mt-5 font-display font-bold leading-[0.92] tracking-tight text-verde-oscuro">
                <span className="block text-[32px] sm:text-[42px] lg:text-[52px]">Formamos</span>
                <span className="block text-[34px] sm:text-[46px] lg:text-[56px] text-verde italic font-semibold">huellas</span>
                <span className="block text-[28px] sm:text-[38px] lg:text-[44px] font-semibold text-verde-oscuro/90">que trascienden</span>
              </h1>

              <p className="mt-4 max-w-[560px] mx-auto lg:mx-0 text-[15px] sm:text-[17px] leading-relaxed text-[#2e3a2e] font-medium">
                Educación integral con identidad institucional, cercanía familiar y exigencia académica. Un colegio que deja huella en cada etapa.
              </p>

              <div className="mt-7 flex gap-3 justify-center lg:justify-start">
                <a
                  href="https://wa.me/573167927255?text=Hola%20Huellas%20del%20Saber%20quiero%20info%20admisiones%202026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-verde hover:bg-verde-claro text-white font-bold text-[15px] px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-verde/20"
                >
                  Conoce admisiones 2026
                  <span className="w-6 h-6 rounded-full bg-dorado grid place-items-center text-verde-oscuro text-[12px]">→</span>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4 justify-center lg:justify-start text-[12px] font-semibold tracking-wide text-verde-oscuro/70">
                <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-verde" />100% bilingüe</span>
                <span className="w-px h-3 bg-black/15" />
                <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-dorado" />Homologado MEN</span>
                <span className="w-px h-3 bg-black/15" />
                <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-rojo-escudo" />Acompañamiento integral</span>
              </div>
            </div>
          </div>
        </div>

        {/* dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-2 shadow-lg border border-black/5">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Ir a slide ${i + 1} de ${SLIDES.length}: ${s.alt}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde ${
                i === index ? "w-7 h-2.5 bg-verde" : "w-2.5 h-2.5 bg-black/20 hover:bg-rojo-escudo/50"
              }`}
            />
          ))}
          <span className="ml-2 text-[11px] font-bold tracking-widest text-verde/70 hidden sm:inline">
            {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label={paused ? "Reanudar autoplay" : "Pausar autoplay"}
            onClick={() => setPaused((p) => !p)}
            className="ml-1 w-7 h-7 grid place-items-center rounded-full bg-verde text-white text-[11px]"
          >
            {paused ? "▶" : "❚❚"}
          </button>
        </div>
      </div>
    </section>
  )
}
