export function Contacto() {
  return (
    <section className="bg-crema py-14 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[720px] mx-auto bg-white rounded-[24px] p-8 lg:p-10 border border-black/5 shadow-sm">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-dorado">Contacto</p>
          <h1 className="font-display font-bold text-[28px] lg:text-[34px] text-verde-oscuro mt-1">Estamos en Neiva</h1>
          <p className="text-[15px] text-black/60 mt-2">Calle 24a # 34 bis -35, Neiva, Huila</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="https://wa.me/573167927255" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white rounded-2xl p-5 text-center font-bold hover:bg-[#1ebe5a] transition-colors">
              WhatsApp<br /><span className="text-white/90">316 792 7255</span>
            </a>
            <a href="mailto:g.p.huellasdelsaber@gmail.com" className="bg-white border border-black/5 rounded-2xl p-5 text-center font-bold text-verde hover:bg-crema transition-colors">
              Email<br /><span className="text-black/60 font-medium text-[11px] break-all">g.p.huellasdelsaber@gmail.com</span>
            </a>
            <a href="https://instagram.com/huellasdelsabergp" target="_blank" rel="noopener noreferrer" className="rounded-2xl p-5 text-center font-bold text-white hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(45deg,#feda75,#d62976 45%,#962fbf)" }}>
              Instagram<br /><span className="text-white/90 font-medium">@huellasdelsabergp</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100091446056359" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] rounded-2xl p-5 text-center font-bold text-white hover:bg-[#166fe5] transition-colors">
              Facebook<br /><span className="text-white/90 font-medium">g.p.huellasdelsaber</span>
            </a>
          </div>

          <div className="mt-6 bg-verde-soft rounded-2xl p-5 border border-black/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-verde text-white grid place-items-center shrink-0">◷</div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-verde">Horario de Atención</p>
              <p className="text-[14px] font-bold text-verde-oscuro">7:00 A.M a 05:30 P.M</p>
              <p className="text-[12px] text-black/60">De Lunes a Viernes</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl overflow-hidden border border-black/5 bg-verde-soft h-[280px] grid place-items-center text-verde/60 text-[13px]">
            Mapa · Calle 24a #34 bis-35, Neiva
            <br />
            <a href="https://maps.app.goo.gl/bGRuR2Fu57BDgoj48" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex bg-verde text-white px-4 py-2 rounded-full text-[12px] font-bold">Abrir en Maps</a>
          </div>
        </div>
      </div>
    </section>
  )
}
