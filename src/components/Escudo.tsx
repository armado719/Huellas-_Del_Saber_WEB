export function Escudo({ className = "w-14 h-14", withRing: _withRing = true }: { className?: string; withRing?: boolean }) {
  return (
    <div className={`relative shrink-0 ${className}`} aria-hidden="true">
      <div className="relative w-full h-full rounded-full bg-white p-[3px] shadow-sm border border-black/5 overflow-hidden">
        <img
          src="/escudo/escudo.png"
          alt="Escudo Gimnasio Pedagógico Huellas del Saber"
          className="w-full h-full object-contain rounded-full bg-white"
          width={96}
          height={96}
          loading="eager"
          decoding="async"
          style={{ imageRendering: "auto" as const }}
        />
      </div>
    </div>
  )
}
