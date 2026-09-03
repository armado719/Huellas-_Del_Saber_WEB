import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingWhatsApp() {
  const [bubbleVisible, setBubbleVisible] = useState(true)

  const waUrl =
    "https://wa.me/573167927255?text=Hola%20Gimnasio%20Huellas%20del%20Saber%2C%20quisiera%20informaci%C3%B3n%20sobre%20Admisiones%202026"

  return (
    <aside aria-label="Contacto flotante de WhatsApp" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Globo informativo emergente */}
      <AnimatePresence>
        {bubbleVisible && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[270px] bg-white rounded-2xl p-3.5 shadow-2xl border border-black/10 text-left"
          >
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" aria-hidden="true" />
                <p className="text-[11px] font-bold text-verde-oscuro uppercase tracking-wider">
                  Admisiones 2026
                </p>
              </div>
              <button
                type="button"
                onClick={() => setBubbleVisible(false)}
                className="w-5 h-5 grid place-items-center rounded-full text-black/40 hover:text-black/80 hover:bg-black/5 text-[11px]"
                aria-label="Cerrar notificación"
              >
                ✕
              </button>
            </div>
            <p className="text-[12.5px] text-black/70 leading-snug">
              ¿Deseas conocer cupos o agendar una visita guiada? <strong className="text-verde font-semibold">¡Escríbenos aquí!</strong>
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#25D366] hover:underline"
            >
              Iniciar conversación en WhatsApp →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante principal */}
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear con Gimnasio Huellas del Saber en WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white shadow-xl shadow-[#25D366]/30 grid place-items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dorado focus-visible:ring-offset-2"
      >
        {/* Onda de pulso sutil */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none"
          aria-hidden="true"
        />

        {/* Ícono de WhatsApp */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="relative z-10 drop-shadow"
        >
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 1.74.45 3.44 1.32 4.93L2 22l5.34-1.4a8.13 8.13 0 0 0 4.7 1.21h.01c5.46 0 9.88-4.42 9.88-9.88 0-2.64-1.03-5.12-2.88-6.99Zm-7.01 15.19h-.01a8.13 8.13 0 0 1-4.15-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.1 8.1 0 0 1-1.25-4.3c0-4.5 3.65-8.15 8.15-8.15 2.18 0 4.23.85 5.77 2.39a8.11 8.11 0 0 1 2.38 5.77c0 4.5-3.65 8.16-8.17 8.16Zm6.54-6.1c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.77.09-.36-.18-1.5-.55-2.86-1.76-1.06-.95-1.77-2.12-1.98-2.48-.21-.36 0-.56.16-.74.15-.15.36-.4.54-.6.18-.2.24-.36.36-.6.12-.24.06-.44-.03-.62-.09-.18-.81-1.96-1.11-2.68-.29-.7-.59-.6-.81-.62l-.69-.01c-.24 0-.62.09-.95.44-.33.36-1.25 1.22-1.25 2.98s1.28 3.45 1.46 3.69c.18.24 2.52 3.85 6.1 5.4.85.37 1.52.59 2.03.75.86.27 1.63.23 2.25.14.69-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42Z" />
        </svg>

        {/* Indicador de notificación */}
        <span
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rojo-escudo text-white text-[10px] font-extrabold grid place-items-center shadow border-2 border-white"
          aria-hidden="true"
        >
          1
        </span>
      </motion.a>
    </aside>
  )
}
