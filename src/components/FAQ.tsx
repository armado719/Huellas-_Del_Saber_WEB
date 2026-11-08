import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import faqs from "../../content/faq.json"

interface FAQItem {
  id: string
  pregunta: string
  respuesta: string
  categoria?: string
}

const FAQS: FAQItem[] = faqs

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-edades")

  const toggle = (id: string) => {
    setOpenId((curr) => (curr === id ? null : id))
  }

  return (
    <section id="faq" className="bg-crema-3 py-16 lg:py-24 border-t border-black/5">
      <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-black/5 shadow-sm mb-3">
            <span className="w-2 h-2 rounded-full bg-dorado" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-verde">
              Preguntas Frecuentes
            </span>
          </div>
          <h2 className="font-display font-bold text-[28px] sm:text-[38px] text-verde-oscuro leading-tight tracking-tight">
            Resolvemos las dudas de <span className="text-verde italic font-semibold">tu familia</span>
          </h2>
          <p className="mt-3 text-[14.5px] sm:text-[16px] text-black/65 leading-relaxed">
            Conoce todo sobre nuestros niveles, metodología afectiva, horarios y proceso de matrícula para este año escolar.
          </p>
        </div>

        {/* Acordeón de preguntas */}
        <div className="space-y-3">
          {FAQS.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="bg-white rounded-[20px] border border-black/5 shadow-sm transition-shadow hover:shadow-md overflow-hidden"
              >
                <button
                  type="button"
                  id={`btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde focus-visible:ring-inset"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-verde-soft text-verde font-bold text-[12px] grid place-items-center shrink-0">
                      ?
                    </span>
                    <span className="font-display font-bold text-[16px] sm:text-[17.5px] text-verde-oscuro leading-snug">
                      {item.pregunta}
                    </span>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-full grid place-items-center text-verde shrink-0 bg-crema text-[16px] font-bold transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-verde text-white" : ""
                    }`}
                    aria-hidden="true"
                  >
                    ⌄
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`panel-${item.id}`}
                      role="region"
                      aria-labelledby={`btn-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-[14px] sm:text-[14.5px] text-black/70 leading-relaxed border-t border-black/5 mt-1">
                        <p>{item.respuesta}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Banner inferior de consulta adicional */}
        <div className="mt-12 bg-white rounded-[24px] p-6 sm:p-8 border border-black/5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h3 className="font-display font-bold text-[18px] text-verde-oscuro">
              ¿Tienes una pregunta diferente?
            </h3>
            <p className="text-[13px] text-black/60 mt-1">
              Nuestro equipo directivo y docente te responde con gusto cualquier inquietud sobre tu hijo/a.
            </p>
          </div>
          <a
            href="https://wa.me/573167927255?text=Hola%20Huellas%20del%20Saber%2C%20tengo%20una%20pregunta%20espec%C3%ADfica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-verde hover:bg-verde-claro text-white font-bold text-[13.5px] px-6 py-3 rounded-full transition-colors shadow-md shadow-verde/20 shrink-0"
          >
            Preguntar por WhatsApp
            <span className="w-5 h-5 rounded-full bg-dorado text-verde-oscuro grid place-items-center text-[11px] font-bold">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
