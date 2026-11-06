export function Terminos() {
  return (
    <section className="bg-crema py-14 lg:py-20">
      <div className="mx-auto max-w-[840px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[640px] mx-auto mb-10">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-dorado">Legal</p>
          <h1 className="font-display font-bold text-[30px] lg:text-[40px] text-verde-oscuro mt-1">Condiciones del Servicio</h1>
          <p className="text-[13px] text-black/50 mt-2">Última actualización: noviembre de 2026</p>
        </div>

        <div className="bg-white rounded-[24px] p-6 sm:p-10 border border-black/5 shadow-sm space-y-6 text-[15px] leading-relaxed text-black/75">
          <p>
            Este sitio web y las páginas oficiales de Facebook ("Gimnasio Pedagógico Huellas del Saber") e Instagram
            (@huellasdelsabergp) son operados por el Gimnasio Pedagógico Huellas del Saber, en Neiva, Huila, Colombia.
          </p>

          <div>
            <h2 className="font-display font-bold text-[18px] text-verde-oscuro mb-2">Uso del contenido</h2>
            <p>
              El contenido publicado en este sitio y en nuestras redes sociales (textos, imágenes, información de
              admisiones) tiene fines informativos y educativos sobre nuestra institución. No está permitido
              reproducir o usar este contenido con fines comerciales sin autorización previa.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-[18px] text-verde-oscuro mb-2">Formularios y solicitudes</h2>
            <p>
              Al enviar el formulario de contacto o admisiones, usted declara que la información proporcionada es
              veraz y autoriza a que la usemos únicamente para dar respuesta a su solicitud.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-[18px] text-verde-oscuro mb-2">Enlaces externos</h2>
            <p>
              Nuestras páginas pueden enlazar a WhatsApp, Facebook, Instagram y Google Maps. No nos hacemos
              responsables por el contenido o las políticas de esos sitios externos.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-[18px] text-verde-oscuro mb-2">Contacto</h2>
            <p>
              Para cualquier pregunta sobre estas condiciones, escríbanos al WhatsApp{" "}
              <a href="https://wa.me/573167927255" target="_blank" rel="noopener noreferrer" className="text-verde font-semibold hover:underline">
                316 792 7255
              </a>{" "}
              o al correo{" "}
              <a href="mailto:g.p.huellasdelsaber@gmail.com" className="text-verde font-semibold hover:underline">
                g.p.huellasdelsaber@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
