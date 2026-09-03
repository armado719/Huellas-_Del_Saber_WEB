import { Escudo } from "./Escudo"

export function HuellasInfo() {
  return (
    <section className="bg-white border-y border-black/5 py-8 lg:py-10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[640px] bg-crema rounded-[28px] shadow-sm border border-black/5 p-6 lg:p-7">
          <div className="flex items-start gap-4">
            <Escudo className="w-[64px] h-[64px] shrink-0" />
            <div>
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-dorado">Gimnasio Huellas del Saber</p>
              <p className="font-display font-bold text-[18px] leading-tight text-verde-oscuro mt-0.5">Educación que deja huella</p>
              <p className="text-[13px] leading-relaxed text-black/60 mt-1.5">
                Un proyecto educativo que forma desde el ser, la familia y el conocimiento, acompañando cada etapa del crecimiento con amor, propósito y excelencia.
              </p>
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-verde mt-2">Desde 2019 · Formando para el futuro</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { k: "2019", v: "Desde" },
              { k: "4", v: "Niveles" },
              { k: "100%", v: "Acompañamiento" },
            ].map((s) => (
              <div key={s.k} className="bg-white rounded-2xl p-3 text-center border border-black/5">
                <p className="font-display font-bold text-verde text-[18px] leading-none">{s.k}</p>
                <p className="text-[11px] font-semibold tracking-wide uppercase text-black/55">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
