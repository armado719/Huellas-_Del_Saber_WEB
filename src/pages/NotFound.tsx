import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Escudo } from "../components/Escudo"

export function NotFound() {
  const links = [
    { label: "Inicio", path: "/" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Propuesta", path: "/propuesta" },
    { label: "Niveles", path: "/niveles" },
    { label: "Admisiones", path: "/admisiones" },
    { label: "Galería", path: "/galeria" },
    { label: "Contacto", path: "/contacto" },
  ]

  return (
    <div className="bg-crema min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-[720px] w-full bg-white rounded-[28px] p-8 sm:p-12 border border-black/5 shadow-xl text-center relative overflow-hidden"
      >
        {/* Adorno sutil de fondo */}
        <div
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-verde-soft/60 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-dorado-claro/20 pointer-events-none"
          aria-hidden="true"
        />

        {/* Escudo institucional */}
        <div className="flex justify-center mb-6">
          <Escudo className="w-20 h-20" />
        </div>

        {/* Badge 404 */}
        <div className="inline-flex items-center gap-2 bg-verde-soft text-verde font-bold text-[12px] tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-4 border border-verde/10">
          <span className="w-2 h-2 rounded-full bg-rojo-escudo" aria-hidden="true" />
          <span>Error 404 · Huella no encontrada</span>
        </div>

        <h1 className="font-display font-bold text-[34px] sm:text-[46px] leading-[1.05] tracking-tight text-verde-oscuro">
          Cada paso cuenta, <br />
          <span className="text-verde italic font-semibold">retomemos el sendero</span>
        </h1>

        <p className="mt-4 text-[15px] sm:text-[16px] text-black/70 leading-relaxed max-w-[540px] mx-auto">
          La página que buscas no existe o ha sido trasladada. Pero en el{" "}
          <strong>Gimnasio Pedagógico Huellas del Saber</strong> siempre tenemos un camino
          seguro y lleno de aprendizaje para ti.
        </p>

        {/* Botones principales */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-verde hover:bg-verde-claro text-white font-bold text-[14px] px-6 py-3 rounded-full transition-colors shadow-md shadow-verde/20"
          >
            Volver al Inicio
            <span className="w-5 h-5 rounded-full bg-dorado text-verde-oscuro grid place-items-center text-[11px] font-bold">
              →
            </span>
          </Link>
          <Link
            to="/admisiones"
            className="inline-flex items-center gap-2 bg-dorado hover:bg-dorado-hover text-verde-oscuro font-bold text-[14px] px-6 py-3 rounded-full transition-colors"
          >
            Admisiones 2026
          </Link>
          <a
            href="https://wa.me/573167927255?text=Hola%20Huellas%20del%20Saber%20me%20ayudan%20con%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-[14px] px-5 py-3 rounded-full transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Enlaces rápidos */}
        <div className="mt-10 pt-6 border-t border-black/5">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-dorado mb-3">
            O explora nuestras secciones
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[13px] font-semibold text-verde/80 hover:text-verde hover:bg-verde-soft px-3 py-1.5 rounded-full transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
