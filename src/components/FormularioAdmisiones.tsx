import { useState } from "react"
import { motion } from "framer-motion"

interface FormularioAdmisionesProps {
  className?: string
  titulo?: string
  subtitulo?: string
}

export function FormularioAdmisiones({
  className = "",
  titulo = "Solicita información de Admisiones 2026",
  subtitulo = "Completa este breve formulario y te contactaremos de inmediato con la disponibilidad y requisitos.",
}: FormularioAdmisionesProps) {
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [hijo, setHijo] = useState("")
  const [nivel, setNivel] = useState("Caminadores (1 - 2 años)")
  const [mensaje, setMensaje] = useState("")
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nombre.trim() || !telefono.trim()) {
      setError("Por favor completa tu nombre y número de contacto.")
      return
    }
    setError("")

    const texto =
      `¡Hola Gimnasio Huellas del Saber! 👋\n\n` +
      `Deseo solicitar información para el proceso de *Admisiones 2026*:\n\n` +
      `• *Acudiente:* ${nombre.trim()}\n` +
      `• *Contacto:* ${telefono.trim()}\n` +
      (hijo.trim() ? `• *Aspirante:* ${hijo.trim()}\n` : "") +
      `• *Nivel:* ${nivel}\n` +
      (mensaje.trim() ? `• *Mensaje:* ${mensaje.trim()}\n` : "") +
      `\nMuchas gracias.`

    const waUrl = `https://wa.me/573167927255?text=${encodeURIComponent(texto)}`
    setEnviado(true)
    window.open(waUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className={`relative rounded-[24px] bg-white p-6 sm:p-8 border border-black/5 shadow-lg ${className}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-verde animate-pulse" aria-hidden="true" />
        <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-dorado">
          Admisiones 2026
        </span>
      </div>

      <h3 className="font-display font-bold text-[22px] sm:text-[26px] leading-tight text-verde-oscuro">
        {titulo}
      </h3>
      <p className="mt-1.5 text-[13.5px] text-black/60 leading-relaxed">
        {subtitulo}
      </p>

      {error && (
        <div
          role="alert"
          className="mt-4 p-3 rounded-xl bg-rojo-soft border border-rojo-escudo/20 text-rojo-escudo text-[12.5px] font-semibold"
        >
          ⚠️ {error}
        </div>
      )}

      {enviado ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-6 rounded-2xl bg-verde-soft border border-verde/20 text-center"
        >
          <div className="w-12 h-12 rounded-full bg-verde text-white font-bold text-[20px] grid place-items-center mx-auto mb-3">
            ✓
          </div>
          <h4 className="font-display font-bold text-[18px] text-verde-oscuro">
            ¡Mensaje preparado con éxito!
          </h4>
          <p className="mt-1.5 text-[13px] text-verde-oscuro/80 leading-relaxed">
            Se ha abierto una conversación en WhatsApp con todos los datos organizados.
            Si no se abrió automáticamente, haz clic en el botón inferior:
          </p>
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-4 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-[13.5px] px-6 py-2.5 rounded-full shadow transition-all"
          >
            Abrir WhatsApp nuevamente
          </button>
          <button
            type="button"
            onClick={() => setEnviado(false)}
            className="block mx-auto mt-3 text-[12px] font-semibold text-verde underline hover:text-verde-claro"
          >
            Enviar otra solicitud
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="form-nombre"
                className="block text-[12px] font-bold text-verde-oscuro uppercase tracking-wider mb-1"
              >
                Tu Nombre y Apellido *
              </label>
              <input
                id="form-nombre"
                type="text"
                required
                placeholder="Ej. Carolina Pérez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full bg-crema/60 border border-black/10 rounded-xl px-3.5 py-2.5 text-[14px] text-verde-oscuro placeholder:text-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="form-telefono"
                className="block text-[12px] font-bold text-verde-oscuro uppercase tracking-wider mb-1"
              >
                WhatsApp / Teléfono *
              </label>
              <input
                id="form-telefono"
                type="tel"
                required
                placeholder="Ej. 316 123 4567"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full bg-crema/60 border border-black/10 rounded-xl px-3.5 py-2.5 text-[14px] text-verde-oscuro placeholder:text-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="form-hijo"
                className="block text-[12px] font-bold text-verde-oscuro uppercase tracking-wider mb-1"
              >
                Nombre del Niño / Niña
              </label>
              <input
                id="form-hijo"
                type="text"
                placeholder="Ej. Martín"
                value={hijo}
                onChange={(e) => setHijo(e.target.value)}
                className="w-full bg-crema/60 border border-black/10 rounded-xl px-3.5 py-2.5 text-[14px] text-verde-oscuro placeholder:text-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="form-nivel"
                className="block text-[12px] font-bold text-verde-oscuro uppercase tracking-wider mb-1"
              >
                Nivel de Interés
              </label>
              <select
                id="form-nivel"
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
                className="w-full bg-crema/60 border border-black/10 rounded-xl px-3.5 py-2.5 text-[14px] text-verde-oscuro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde focus:bg-white transition-colors"
              >
                <option value="Caminadores (1 - 2 años)">Caminadores (1 - 2 años)</option>
                <option value="Párvulos (2 - 3 años)">Párvulos (2 - 3 años)</option>
                <option value="Pre-Jardín (3 - 4 años)">Pre-Jardín (3 - 4 años)</option>
                <option value="Jardín (4 - 5 años)">Jardín (4 - 5 años)</option>
                <option value="Información General">Información General</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="form-mensaje"
              className="block text-[12px] font-bold text-verde-oscuro uppercase tracking-wider mb-1"
            >
              Pregunta o mensaje adicional (opcional)
            </label>
            <textarea
              id="form-mensaje"
              rows={2}
              placeholder="¿Deseas agendar visita guiada o consultar horarios?"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full bg-crema/60 border border-black/10 rounded-xl px-3.5 py-2 text-[14px] text-verde-oscuro placeholder:text-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde focus:bg-white transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-verde hover:bg-verde-claro text-white font-bold text-[14.5px] px-6 py-3.5 rounded-full shadow-lg shadow-verde/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dorado"
            >
              <span className="w-5 h-5 rounded-full bg-[#25D366] text-white grid place-items-center text-[12px] font-bold">
                ✓
              </span>
              Enviar solicitud por WhatsApp
              <span className="w-5 h-5 rounded-full bg-dorado text-verde-oscuro grid place-items-center text-[11px] font-bold">
                →
              </span>
            </button>
            <p className="mt-2.5 text-center text-[11px] text-black/50">
              🔒 Tus datos son confidenciales y solo serán utilizados para responder a tu solicitud institucional.
            </p>
          </div>
        </form>
      )}
    </div>
  )
}
