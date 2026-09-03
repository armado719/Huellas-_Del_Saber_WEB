import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const SLIDES = [
  { id: 1, img: "/img/filosofia1.webp", alt: "Niños jugando con cocina de juguete" },
  { id: 2, img: "/img/filosofia2.webp", alt: "Niño mostrando pulgares arriba" },
  { id: 3, img: "/img/filosofia3.webp", alt: "Niños haciendo arte con papeles de colores" },
  { id: 4, img: "/img/filosofia4.webp", alt: "Niños felices mostrando figuras geométricas" },
  { id: 5, img: "/img/filosofia5.webp", alt: "Niños recortando y dibujando en equipo" },
]

export function FilosofiaSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  useEffect(() => {
    if (paused) return
    ref.current = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 3000)
    return () => {
      if (ref.current) window.clearInterval(ref.current)
    }
  }, [paused, index])

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
      setIndex((i) => (i + 1) % SLIDES.length)
    } else if (distance < -minSwipeDistance) {
      setIndex((i) => (i > 0 ? i - 1 : SLIDES.length - 1))
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <div
      className="relative rounded-[28px] overflow-hidden bg-white p-2 shadow-xl border border-black/5 touch-pan-y"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Galería Filosofía"
    >
      <div className="relative w-full h-[380px] lg:h-[440px] rounded-[20px] overflow-hidden bg-crema">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={SLIDES[index].id}
            src={SLIDES[index].img}
            alt={SLIDES[index].alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </AnimatePresence>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 shadow-md border border-black/5">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Ver diapositiva ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all ${i === index ? "w-6 h-2 bg-verde" : "w-2 h-2 bg-black/20 hover:bg-rojo-escudo/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
