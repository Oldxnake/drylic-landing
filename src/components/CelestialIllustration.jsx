export default function CelestialIllustration() {
  return (
    <div className="relative w-full h-[640px] rounded-[48px] overflow-hidden shadow-[0_30px_80px_rgba(39,76,119,0.08)]">

      {/* foto de fondo — ocupa todo el componente */}
      <img
        src="/Dreamybaby.png"
        alt="Bebé durmiendo bajo las estrellas"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* overlay suave para que la card inferior sea legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a35]/60 via-transparent to-transparent" />

      {/* floating card */}
      <div className="absolute bottom-8 left-8 rounded-[34px] bg-white/88 backdrop-blur-md px-7 py-6 shadow-[0_20px_50px_rgba(39,76,119,0.15)] border border-white/50">
        <p className="uppercase tracking-[0.18em] text-[12px] text-[#7D8A97]">
          Descanso tranquilo
        </p>
        <h3 className="mt-2 text-[32px] leading-none font-light text-[#274C77]">
          Dulces sueños
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-[#6F8092] max-w-[280px]">
          Diseñado para noches más tranquilas y mañanas más felices.
        </p>
      </div>

    </div>
  )
}