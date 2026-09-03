import { Hero } from "../components/Hero"
import { HuellasInfo } from "../components/HuellasInfo"

export function Home() {
  return (
    <>
      <Hero />
      <HuellasInfo />
      <section className="bg-crema py-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: "Caminadores a Jardín", d: "Educación inicial con amor, juego y valores.", href: "/niveles" },
              { t: "Calle 24a #34 bis-35", d: "Neiva, Huila · Visítanos", href: "https://maps.app.goo.gl/bGRuR2Fu57BDgoj48" },
              { t: "@huellasdelsabergp", d: "31 momentos que florecen", href: "https://instagram.com/huellasdelsabergp" },
            ].map((c) => (
              <a key={c.t} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-display font-bold text-verde-oscuro">{c.t}</p>
                <p className="text-[13px] text-black/60">{c.d}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
