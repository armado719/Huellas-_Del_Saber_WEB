export function Privacidad() {
  return (
    <section className="bg-crema py-14 lg:py-20">
      <div className="mx-auto max-w-[840px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[640px] mx-auto mb-10">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-dorado">Legal</p>
          <h1 className="font-display font-bold text-[30px] lg:text-[40px] text-verde-oscuro mt-1">Política de Privacidad</h1>
          <p className="text-[13px] text-black/50 mt-2">Última actualización: noviembre de 2026</p>
        </div>

        <div className="bg-white rounded-[24px] p-6 sm:p-10 border border-black/5 shadow-sm space-y-6 text-[15px] leading-relaxed text-black/75">
          <p>
            El Gimnasio Pedagógico Huellas del Saber ("nosotros") respeta la privacidad de las personas que visitan
            este sitio web y de quienes interactúan con nuestras páginas oficiales de Facebook e Instagram.
          </p>

          <div>
            <h2 className="font-display font-bold text-[18px] text-verde-oscuro mb-2">¿Qué información usamos?</h2>
            <p>
              Utilizamos herramientas de automatización (como n8n) conectadas a las páginas oficiales de Facebook
              ("Gimnasio Pedagógico Huellas del Saber") e Instagram (@huellasdelsabergp) únicamente para publicar
              contenido educativo e informativo de forma programada. Estas herramientas no recolectan, almacenan ni
              comparten datos personales de los usuarios que visitan o interactúan con nuestras páginas.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-[18px] text-verde-oscuro mb-2">Formulario de contacto/admisiones</h2>
            <p>
              Si nos escribe a través del formulario de este sitio o por WhatsApp, los datos que nos proporcione
              (nombre, teléfono, correo) se usan exclusivamente para responder su solicitud de información o
              admisión, y no se comparten con terceros ni se usan con fines publicitarios.
            </p>
          </div>

          <div id="eliminacion-datos">
            <h2 className="font-display font-bold text-[18px] text-verde-oscuro mb-2">Eliminación de datos</h2>
            <p>
              Si desea que eliminemos cualquier dato que nos haya proporcionado, puede solicitarlo en cualquier
              momento escribiéndonos a{" "}
              <a href="mailto:g.p.huellasdelsaber@gmail.com" className="text-verde font-semibold hover:underline">
                g.p.huellasdelsaber@gmail.com
              </a>{" "}
              o al WhatsApp{" "}
              <a href="https://wa.me/573167927255" target="_blank" rel="noopener noreferrer" className="text-verde font-semibold hover:underline">
                316 792 7255
              </a>
              . Atenderemos su solicitud en un plazo máximo de 10 días hábiles.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-[18px] text-verde-oscuro mb-2">Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos por WhatsApp al{" "}
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
