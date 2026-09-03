import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useId, useRef, useState } from "react"
import { FilosofiaSlider } from "./FilosofiaSlider"
import { FormularioAdmisiones } from "./FormularioAdmisiones"

export function Institucional() {
  const [open, setOpen] = useState<number | null>(null)
  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null) }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = "" }
  }, [open])
  const cards = [
    { title: "Caminadores con amor", desc: "Primeros pasos con apego seguro, estimulación y juego libre.", icon: "♡", img: "/img/caminadores.webp", alt: "Niños Caminadores con camisas verdes" },
    { title: "Juego como lenguaje", desc: "Aprendizaje a través del juego, arte y exploración sensorial.", icon: "◈", img: "/img/Juego_como_lenguaje.webp", alt: "Niños jugando con sillas de colores" },
    { title: "Valores en cada día", desc: "Rutinas de respeto, solidaridad y autonomía con familia.", icon: "✦", img: "/img/Valores_en_cada_dia.webp", alt: "Niños aprendiendo valores con bloques" },
    { title: "Comunidad pequeña", desc: "Grupos reducidos, atención cercana. 31 publicaciones de vida real.", icon: "⬢", img: "/img/Comunidad_pequena.webp", alt: "Niños pintando juntos con docente" },
  ]
  return (
    <section className="bg-crema py-14 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-dorado">Nosotros · huellasdelsabergp</p>
            <h2 className="mt-2 font-display font-bold text-[28px] lg:text-[36px] leading-[0.95] tracking-tight text-verde-oscuro">
              Un lugar donde tu hijo <span className="text-verde italic">florece</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-black/70">
              Gimnasio Pedagógico Huellas del Saber — educación inicial con amor, juego y valores. Acompañamos desde <strong>Caminadores a Jardín</strong> en Neiva, Huila. 31 familias nos siguen y crecen con nosotros.
            </p>
            <div className="mt-4 flex items-start gap-2 bg-white border border-black/5 rounded-2xl p-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-rojo-escudo shrink-0" />
              <p className="text-[12px] leading-relaxed text-black/60"><strong className="text-verde">Calle 24a #34 bis-35, Neiva</strong> — Espacio seguro, luminoso y cercano a tu hogar. Escríbenos al <a className="text-verde font-bold underline" href="https://wa.me/573167927255">316 792 7255</a></p>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="inline-flex items-center gap-2 bg-white border border-black/5 rounded-full px-4 py-2 text-[12px] font-semibold text-verde">
                <span className="w-2 h-2 rounded-full bg-verde" /> Amor y juego
              </span>
              <span className="inline-flex items-center gap-2 bg-white border border-black/5 rounded-full px-4 py-2 text-[12px] font-semibold text-verde">
                <span className="w-2 h-2 rounded-full bg-dorado" /> Valores
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <div
                key={c.title}
                onClick={() => setOpen(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(i) } }}
                className="bg-white rounded-[20px] overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-crema">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="w-9 h-9 rounded-full bg-verde-soft grid place-items-center text-verde font-bold text-[14px]">{c.icon}</div>
                  <h3 className="mt-4 font-display font-bold text-[16px] text-verde-oscuro">{c.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-black/60">{c.desc}</p>
                  <p className="mt-3 text-[11px] font-bold text-verde/60 group-hover:text-verde">Ver más →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 bg-verde-oscuro/45 backdrop-blur-[2px] z-40" onClick={() => setOpen(null)} aria-hidden="true" />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.32, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => { if (e.target === e.currentTarget) setOpen(null) }}
            >
              <div className="bg-crema rounded-[28px] shadow-2xl border border-white max-w-[520px] w-full max-h-[90vh] overflow-hidden flex flex-col">
                <div className="aspect-[16/10] overflow-hidden shrink-0 relative bg-crema">
                  <img src={cards[open].img} alt={cards[open].alt} className="w-full h-full object-cover object-center" />
                  <button type="button" aria-label="Cerrar" onClick={() => setOpen(null)} className="absolute top-3 right-3 w-8 h-8 grid place-items-center rounded-full bg-white/90 hover:bg-white text-verde shadow-md border border-black/5">✕</button>
                </div>
                <div className="p-6 overflow-y-auto">
                  <h3 className="font-display font-bold text-[18px] text-verde-oscuro">{cards[open].title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-black/70">{cards[open].desc}</p>
                  <p className="mt-3 text-[12.5px] leading-relaxed text-verde/80">En Huellas del Saber cada día es una oportunidad para florecer con amor, juego y valores.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export function Propuesta() {
  const [open, setOpen] = useState<number | null>(null)
  const panelId = useId()
  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])
  const pilares = [
    {
      num: "01",
      icon: "◈",
      title: "Formación integral",
      subtitle: "Desarrollamos mucho más que conocimientos.",
      desc: "Fortalecemos habilidades, valores, autonomía, creatividad y competencias para acompañar el desarrollo integral de cada estudiante.",
      img: "/img/Formacion_integral.webp",
      alt: "Niños construyendo con bloques de colores",
    },
    {
      num: "02",
      icon: "♡",
      title: "Acompañamiento afectivo",
      subtitle: "Crecer sintiéndose seguro también es aprender.",
      desc: "Construimos ambientes cálidos y seguros donde cada niño puede desarrollar confianza, autonomía y sentido de pertenencia.",
      img: "/img/Acompanamiento_afectivo.webp",
      alt: "Docente leyendo con niños en rincón de lectura",
    },
    {
      num: "03",
      icon: "✦",
      title: "Familia y comunidad",
      subtitle: "Educamos de la mano con las familias.",
      desc: "Fortalecemos la comunicación y el vínculo entre familia y colegio para acompañar de manera cercana cada proceso de crecimiento.",
      img: "/img/Familia_y_comunidad.webp",
      alt: "Niños jugando en túnel con acompañamiento",
    },
    {
      num: "04",
      icon: "⬢",
      title: "Excelencia académica",
      subtitle: "Aprender para comprender, crear y transformar.",
      desc: "Promovemos aprendizajes significativos, curiosidad, pensamiento crítico y herramientas que preparan a nuestros estudiantes para los retos del futuro.",
      img: "/img/Excelencia_academica.webp",
      alt: "Niños explorando en piscina de pelotas de colores",
    },
  ]

  return (
    <section id="propuesta" className="bg-white py-14 lg:py-20 border-y border-black/5 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-[760px]"
        >
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-dorado">Nuestra propuesta</p>
          <h2 className="mt-2 font-display font-bold text-[30px] lg:text-[48px] leading-[0.9] tracking-tight text-verde-oscuro">
            Una educación que <span className="text-verde italic">acompaña, inspira</span> y deja huella.
          </h2>
          <p className="mt-4 text-[15px] lg:text-[17px] leading-relaxed text-black/60 max-w-[680px]">
            En el Gimnasio Huellas del Saber acompañamos cada etapa del crecimiento con una propuesta educativa que integra el
            desarrollo académico, emocional, social y humano, fortaleciendo los vínculos entre nuestros estudiantes, sus familias y
            la comunidad educativa.
          </p>
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-start">
          {/* Imagen principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1 relative rounded-[28px] overflow-hidden bg-crema p-2 shadow-xl border border-black/5 lg:sticky lg:top-[104px]"
          >
            <div className="relative h-[340px] lg:h-[620px] rounded-[20px] overflow-hidden bg-crema">
              <img
                src="/img/Propuesta.webp"
                alt="Niños en actividad de música y ritmo en el aula"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-verde-oscuro/25 via-transparent to-transparent" aria-hidden />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-md border border-black/5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-rojo-escudo shrink-0" aria-hidden />
                <p className="text-[12px] font-semibold leading-tight text-verde-oscuro">Fotografía real del colegio · Propuesta pedagógica en acción</p>
              </div>
            </div>
          </motion.div>

          {/* Pilares — click en toda la tarjeta abre modal, sin botón */}
          <div className="order-1 lg:order-2 grid gap-6">
            {pilares.map((p, i) => (
              <motion.article
                key={p.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -2 }}
                onClick={() => setOpen(i)}
                role="button"
                tabIndex={0}
                aria-label={`Ver ${p.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setOpen(i)
                  }
                }}
                className="group cursor-pointer bg-crema rounded-[24px] overflow-hidden border border-black/5 shadow-sm hover:shadow-md hover:border-verde/10 transition-all flex flex-col sm:flex-row focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde"
              >
                <div className="sm:w-[38%] h-[160px] sm:h-auto shrink-0 overflow-hidden bg-white">
                  <img src={p.img} alt={p.alt} className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-5 lg:p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-[0.16em] text-dorado"> {p.num} </span>
                    <span className="w-6 h-6 rounded-full bg-verde text-white grid place-items-center text-[11px] group-hover:bg-verde-claro transition-colors">
                      {p.icon}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-rojo-escudo/60" aria-hidden />
                  </div>
                  <h3 className="mt-2 font-display font-bold text-[17px] lg:text-[19px] leading-tight text-verde-oscuro">{p.title}</h3>
                  <p className="mt-1 text-[12.5px] font-semibold italic text-verde/80 leading-snug">{p.subtitle}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-black/60 line-clamp-3">{p.desc}</p>
                  <p className="mt-3 text-[11px] font-bold tracking-wide text-verde/60 group-hover:text-verde flex items-center gap-1">
                    Ver más <span aria-hidden>→</span>
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-verde-oscuro/45 backdrop-blur-[2px] z-40"
              onClick={() => setOpen(null)}
              aria-hidden="true"
            />
            <motion.div
              id={`${panelId}-${open}`}
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) setOpen(null)
              }}
            >
              <div className="bg-crema rounded-[28px] shadow-2xl border border-white max-w-[560px] w-full max-h-[90vh] overflow-hidden flex flex-col">
                <div className="aspect-[16/10] overflow-hidden shrink-0 relative bg-crema">
                  <img src={pilares[open].img} alt={pilares[open].alt} className="w-full h-full object-cover object-center" />
                  <button
                    type="button"
                    aria-label="Cerrar"
                    onClick={() => setOpen(null)}
                    className="absolute top-3 right-3 w-8 h-8 grid place-items-center rounded-full bg-white/90 hover:bg-white text-verde shadow-md border border-black/5"
                  >
                    ✕
                  </button>
                  <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase text-verde">
                    {pilares[open].num} · {pilares[open].title}
                  </div>
                </div>
                <div className="p-6 overflow-y-auto">
                  <h3 className="font-display font-bold text-[20px] text-verde-oscuro">{pilares[open].title}</h3>
                  <p className="text-[13px] italic font-semibold text-verde/80 mt-1">{pilares[open].subtitle}</p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-black/70">{pilares[open].desc}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export function Filosofia() {
  return (
    <section className="bg-crema py-14 lg:py-20 border-y border-black/5">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-dorado">Filosofía</p>
            <h2 className="mt-2 font-display font-bold text-[30px] lg:text-[42px] leading-[0.95] tracking-tight text-verde-oscuro">
              Educación inicial con <span className="text-verde italic">amor y valores</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-black/60 max-w-[560px]">
              🌱 Creemos que cada niño florece a su ritmo. Acompañamos con juego, vínculo y familia. Huellas con amor que perduran.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                {
                  q: "Misión",
                  a: "Ayudar en el proceso de formación de niños y niñas, durante su etapa inicial, desarrollando en ellos habilidades en las áreas cognitiva, psicomotora, socio afectiva y creativa. Para la interacción armónica con su entorno natural, familiar, social y cultural.",
                },
                {
                  q: "Visión",
                  a: "Formar niños y niñas, con amor, valores, autonomía, habilidades cognitivas y socio afectivas; que le permitan el desarrollo con el entorno. Satisfaciendo las necesidades y expectativas de los padres de familia.",
                },
                {
                  q: "Filosofía",
                  a: "El Gimnasio Pedagógico Huellas del Saber, busca un desarrollo integral para los infantes, considerando las capacidades: afectiva (sentir), corporal (saber hacer), cognitiva (saber), comunicativa (expresión del ser, saber, sentir y saber hacer), estética (expresión del ser y saber hacer) y actitudinal y valorativa (ser). El cual se ve reflejado en el desarrollo de las aptitudes hacia el aprendizaje, basado en la pedagogía constructivista. De igual forma inculcando los valores como el respeto, la tolerancia por el otro, entre otros.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white rounded-2xl p-5 border border-verde/10 shadow-sm">
                  <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-verde">{item.q}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-black/70">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <FilosofiaSlider />
        </div>
      </div>
    </section>
  )
}

export function Galeria() {
  const imgs = [
    "/img/Galeria.webp",
    "/img/Galeria1.webp",
    "/img/Galeria3.webp",
    "/img/Galeria4.webp",
    "/img/Galeria5.webp",
    "/img/Galeria6.webp",
    "/img/Galeria7.webp",
    "/img/Galeria8.webp",
    "/img/Galeria9.webp",
    "/img/Galeria10.webp",
    "/img/Galeria11.webp",
    "/img/Galeria12.webp",
    "/img/Galeria13.webp",
    "/img/Galeria14.webp",
    "/img/Galeria15.webp",
    "/img/Galeria16.webp",
    "/img/Galeria17.webp",
    "/img/Galeria18.webp",
    "/img/Galeria19.webp",
    "/img/Galeria20.webp",
    "/img/Galeria21.webp",
    "/img/Galeria22.webp",
    "/img/Galeria23.webp",
    "/img/Galeria24.webp",
    "/img/Galeria26.webp",
    "/img/Galeria27.webp",
  ]
  const [selected, setSelected] = useState(0)
  const [open, setOpen] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

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
      setSelected((i) => (i < imgs.length - 1 ? i + 1 : 0))
    } else if (distance < -minSwipeDistance) {
      setSelected((i) => (i > 0 ? i - 1 : imgs.length - 1))
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
      if (e.key === "ArrowLeft") setSelected((i) => (i > 0 ? i - 1 : imgs.length - 1))
      if (e.key === "ArrowRight") setSelected((i) => (i < imgs.length - 1 ? i + 1 : 0))
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, imgs.length])

  return (
    <section className="bg-crema-3 py-14 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-dorado">Galería · @huellasdelsabergp</p>
            <h2 className="font-display font-bold text-[28px] lg:text-[36px] leading-none tracking-tight text-verde-oscuro">
              Momentos que <span className="text-verde italic">florecen</span>
            </h2>
          </div>
          <a href="https://instagram.com/huellasdelsabergp" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-verde hover:text-verde-claro">Ver Instagram →</a>
        </div>

        <div className="mt-8 grid lg:grid-cols-[1.7fr_0.9fr] gap-6 items-start">
          <div className="relative rounded-[24px] overflow-hidden bg-white p-2 shadow-lg border border-black/5">
            <div
              className="relative aspect-[16/10] rounded-[16px] overflow-hidden bg-crema touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgs[selected]}
                  src={imgs[selected]}
                  alt={`Galería ${selected + 1}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 w-full h-full object-cover object-center cursor-zoom-in"
                  onClick={() => setOpen(true)}
                />
              </AnimatePresence>
              <button
                type="button"
                onClick={() => setSelected((i) => (i > 0 ? i - 1 : imgs.length - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 grid place-items-center rounded-full bg-white/90 hover:bg-white text-verde shadow-md border border-black/5"
                aria-label="Anterior"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setSelected((i) => (i < imgs.length - 1 ? i + 1 : 0))}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 grid place-items-center rounded-full bg-white/90 hover:bg-white text-verde shadow-md border border-black/5"
                aria-label="Siguiente"
              >
                ›
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-[11px] font-bold text-verde">
                {selected + 1} / {imgs.length}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-4 border border-black/5 shadow-sm max-h-[420px] overflow-y-auto">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-dorado">Seleccionar</p>
            <div className="mt-3 grid grid-cols-4 lg:grid-cols-3 gap-2">
              {imgs.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setSelected(i)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${i === selected ? "border-verde shadow-md scale-[1.02]" : "border-black/5 hover:border-verde/20"}`}
                  aria-label={`Ver ${i + 1}`}
                  aria-current={i === selected}
                >
                  <img src={src} alt={`Mini ${i + 1}`} className="w-full h-full object-cover object-center" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-verde-oscuro/80 backdrop-blur z-40" onClick={() => setOpen(false)} aria-hidden="true" />
              <motion.div
                role="dialog"
                aria-modal="true"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 touch-pan-y"
                onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="relative max-w-[900px] w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                  <div className="relative flex-1 bg-crema flex items-center justify-center overflow-hidden">
                    <img src={imgs[selected]} alt={`Galería ${selected + 1} grande`} className="w-full h-auto max-h-[75vh] object-contain" />
                    <button
                      type="button"
                      aria-label="Anterior en visor"
                      onClick={() => setSelected((i) => (i > 0 ? i - 1 : imgs.length - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-black/60 hover:bg-black/80 text-white shadow-md text-[20px] transition-transform active:scale-95"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Siguiente en visor"
                      onClick={() => setSelected((i) => (i < imgs.length - 1 ? i + 1 : 0))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-black/60 hover:bg-black/80 text-white shadow-md text-[20px] transition-transform active:scale-95"
                    >
                      ›
                    </button>
                    <button
                      type="button"
                      aria-label="Cerrar"
                      onClick={() => setOpen(false)}
                      className="absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full bg-black/60 hover:bg-black/80 text-white shadow-md text-[14px]"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-3 bg-white w-full flex items-center justify-between text-[13px] border-t border-black/5">
                    <span className="font-semibold text-verde">Foto {selected + 1} de {imgs.length}</span>
                    <span className="text-[11px] text-black/50 hidden sm:inline">Usa las teclas ← → o desliza en pantalla</span>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="bg-verde-soft text-verde font-bold px-3 py-1 rounded-full text-[12px] hover:bg-verde hover:text-white transition-colors"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export function CTA() {
  const pasos = [
    { num: "01", title: "Conoce nuestra propuesta", desc: "Descubre nuestro proyecto educativo, niveles, filosofía y propuesta de formación.", icon: "◈" },
    { num: "02", title: "Agenda tu visita", desc: "Conoce nuestras instalaciones y conversa con nuestro equipo para resolver tus inquietudes.", icon: "♡" },
    { num: "03", title: "Inicia tu proceso", desc: "Recibe orientación sobre requisitos, documentación y disponibilidad del nivel correspondiente.", icon: "✦" },
    { num: "04", title: "Forma parte de nuestra familia", desc: "Completa el proceso de inscripción y comienza una nueva etapa junto a nosotros.", icon: "⬢" },
  ]

  return (
    <section id="admisiones" className="bg-crema py-14 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-[760px]"
        >
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-dorado">Admisión e Inscripciones</p>
          <h2 className="mt-2 font-display font-bold text-[32px] lg:text-[46px] leading-[0.9] tracking-tight text-verde-oscuro">
            ¿Listos para <span className="text-verde italic">comenzar esta nueva etapa?</span>
          </h2>
          <p className="mt-4 text-[15px] lg:text-[17px] leading-relaxed text-black/60">
            En el Gimnasio Huellas del Saber estaremos felices de conocer a tu familia. Te acompañamos durante el proceso de
            admisión e inscripción para que dar el primer paso hacia nuestra comunidad educativa sea sencillo, cercano y claro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 bg-white rounded-2xl p-5 border border-dorado/20 shadow-sm max-w-[560px]"
        >
          <p className="font-display italic font-semibold text-[16px] lg:text-[19px] text-verde-oscuro">“Cada gran historia comienza con un primer paso.”</p>
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[28px] overflow-hidden bg-white p-2 shadow-xl border border-black/5"
          >
            <div className="relative h-[320px] lg:h-[460px] rounded-[20px] overflow-hidden bg-crema">
              <img src="/img/inicio1.webp" alt="Familias con cometas - comunidad educativa" className="w-full h-full object-cover object-center" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-verde-oscuro/20 via-transparent to-transparent" aria-hidden />
            </div>
            <div className="absolute -bottom-4 -right-2 lg:-right-4 bg-white rounded-2xl shadow-lg border border-black/5 p-3 flex items-center gap-3 max-w-[220px]">
              <img src="/img/inicio3.webp" alt="Niños celebrando" className="w-16 h-16 rounded-xl object-cover shrink-0" loading="lazy" />
              <p className="text-[11px] font-bold leading-tight text-verde-oscuro">Comunidad que acompaña</p>
            </div>
          </motion.div>

          <div>
            <h3 className="font-display font-bold text-[20px] lg:text-[22px] text-verde-oscuro">Proceso de inscripción</h3>
            <div className="mt-6 relative">
              <div className="hidden lg:block absolute top-[22px] left-[6%] right-[6%] h-px bg-gradient-to-r from-dorado/0 via-verde/20 to-dorado/0" aria-hidden />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
                {pasos.map((p, i) => (
                  <motion.div
                    key={p.num}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{ y: -2 }}
                    className="bg-white rounded-[20px] p-5 border border-black/5 shadow-sm hover:shadow-md hover:border-verde/10 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold tracking-widest text-dorado">{p.num}</span>
                      <span className="w-6 h-6 rounded-full bg-verde text-white grid place-items-center text-[11px]">{p.icon}</span>
                    </div>
                    <h4 className="mt-3 font-display font-bold text-[15px] leading-tight text-verde-oscuro">{p.title}</h4>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-black/60">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-[24px] p-6 lg:p-7 border border-black/5 shadow-sm">
              <h3 className="font-display font-bold text-[18px] text-verde-oscuro">Documentos para la inscripción</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-black/50">Estructura preparada — los requisitos definitivos se confirmarán con la institución. Ejemplos orientativos:</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-[13px] text-black/70">
                {["Registro civil", "Documento de identidad", "Documentación padres/acudientes", "Certificados académicos", "Certificados médicos", "Otros solicitados por la institución"].map((d) => (
                  <li key={d} className="flex items-center gap-2 bg-crema rounded-full px-3 py-2 border border-black/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-verde shrink-0" aria-hidden /> {d}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11px] text-black/40">* Confirma con admisiones los documentos vigentes.</p>
            </div>

            <div className="bg-verde rounded-[24px] p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-verde-claro/20 to-transparent" aria-hidden />
              <div className="relative">
                <h4 className="font-display font-bold text-[18px]">Atención Personalizada</h4>
                <p className="text-[12.5px] text-white/80 mt-1">Nuestro equipo directivo y docente está listo para resolver tus inquietudes y agendar tu visita al colegio.</p>
                <div className="mt-4 flex flex-col gap-2.5 text-[13px]">
                  <a href="https://wa.me/573167927255" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-dorado-claro hover:text-white">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" /> WhatsApp: 316 792 7255
                  </a>
                  <a href="https://maps.app.goo.gl/bGRuR2Fu57BDgoj48" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                    📍 Calle 24a #34 bis-35, Neiva, Huila
                  </a>
                  <span className="text-white/60 text-[12px]">⏰ 7:00 A.M a 05:30 P.M · Lunes a Viernes</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <FormularioAdmisiones />
          </div>
        </div>
      </div>
    </section>
  )
}
