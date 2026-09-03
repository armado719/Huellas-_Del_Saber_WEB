import { NivelCard } from "../components/NivelCard"

export function Niveles() {
  return (
    <section className="bg-white py-14 lg:py-20 border-y border-black/5">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[680px] mx-auto">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-dorado">Niveles educativos</p>
          <h1 className="mt-2 font-display font-bold text-[30px] lg:text-[40px] leading-none tracking-tight text-verde-oscuro">
            De Caminadores a <span className="text-verde italic">Jardín</span>
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-black/60">
            Educación inicial integral: juego, arte, literatura y exploración del medio. Cada nivel con propósito y ternura.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          <NivelCard
            edad="1 — 2 años"
            nivel="Caminadores"
            img="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=80&auto=format&fit=crop"
            alt="Niños de 1 a 2 años explorando y jugando"
            frase="Aprender explorando, crecer sintiéndose seguro."
            bullets={["Apego y autonomía", "Estimulación sensorial", "Juego libre y exploración"]}
            queTrabajamos={["Apego y autonomía", "Estimulación sensorial", "Juego libre y exploración", "Lenguaje y comunicación", "Desarrollo motor", "Socialización y vínculos afectivos"]}
            descripcion="En Caminadores acompañamos los primeros pasos de cada niño en un ambiente seguro, afectivo y estimulante. A través del juego, la exploración y experiencias sensoriales, fortalecemos su autonomía, comunicación, movimiento y vínculos con los demás, respetando siempre su ritmo de desarrollo."
          />
          <NivelCard
            edad="2 — 3 años"
            nivel="Párvulos"
            img="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700&q=80&auto=format&fit=crop"
            alt="Niños de 2 a 3 años en actividades de lenguaje y juego"
            frase="Descubrir el mundo con palabras, juego y afecto."
            bullets={["Lenguaje y comunicación", "Arte y música", "Hábitos y valores"]}
            queTrabajamos={["Lenguaje y comunicación", "Juego simbólico", "Autonomía y hábitos", "Motricidad fina y gruesa", "Socialización", "Expresión artística"]}
            descripcion="En Párvulos potenciamos la comunicación y la autonomía a través del juego simbólico, la música y el arte. Cada experiencia fortalece el lenguaje, la motricidad y los vínculos, en un entorno cálido que celebra la curiosidad y la expresión."
          />
          <NivelCard
            edad="3 — 4 años"
            nivel="Pre-Jardín"
            img="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80&auto=format&fit=crop"
            alt="Niños de 3 a 4 años en pre-jardín con libros y juego"
            frase="Preguntar, crear y compartir con alegría."
            bullets={["Pre-lectura y lógica", "Inglés lúdico", "Exploración"]}
            queTrabajamos={["Pre-lectura y lógica inicial", "Inglés lúdico", "Exploración del medio", "Convivencia y valores", "Creatividad y arte", "Autonomía"]}
            descripcion="En Pre-Jardín despertamos el pensamiento lógico, la lectura inicial y el inglés lúdico mediante proyectos de exploración, arte y juego. Fomentamos la convivencia, la creatividad y la autonomía para aprender con alegría y confianza."
          />
          <NivelCard
            edad="4 — 5 años"
            nivel="Jardín"
            img="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=700&q=80&auto=format&fit=crop"
            alt="Niños de 4 a 5 años en jardín con docente preparando transición"
            frase="Preparar el vuelo con confianza y curiosidad."
            bullets={["Aprestamiento", "Convivencia", "Preparación transición"]}
            queTrabajamos={["Aprestamiento lectoescritor", "Pensamiento lógico", "Convivencia y valores", "Inglés cotidiano", "Motricidad y expresión", "Preparación para la transición"]}
            descripcion="En Jardín consolidamos el aprestamiento lectoescritor y lógico con proyectos significativos, fortaleciendo la convivencia, el inglés cotidiano y la expresión. Preparamos con amor y seguridad la transición a la primaria, respetando el ritmo de cada niño."
          />
        </div>
      </div>
    </section>
  )
}
