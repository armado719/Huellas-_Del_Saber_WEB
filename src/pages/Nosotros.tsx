import { Institucional } from "../components/Sections"

export function Nosotros() {
  return (
    <>
      <div className="bg-verde text-white py-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-dorado-claro">Nosotros</p>
          <h1 className="font-display font-bold text-[32px] lg:text-[42px] leading-none mt-2">Gimnasio Pedagógico<br /><span className="text-dorado-claro italic">Huellas del Saber</span></h1>
          <p className="text-white/70 text-[14px] mt-2">Neiva · Huila · Calle 24a #34 bis-35 · @huellasdelsabergp</p>
        </div>
      </div>
      <Institucional />
    </>
  )
}
