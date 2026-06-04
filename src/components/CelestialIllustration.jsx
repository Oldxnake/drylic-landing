export default function CelestialIllustration() {
  return (
    <div className="relative w-full h-[640px] rounded-[48px] overflow-hidden bg-gradient-to-br from-[#EDF5FF] via-[#DCEBFA] to-[#C7DCF4] shadow-[0_30px_80px_rgba(39,76,119,0.08)]">

      {/* moon */}
      <img
  src="/tu-foto-de-luna.jpg"
  alt="Luna"
  className="absolute top-10 right-8 w-[300px] h-[300px] object-cover rounded-full opacity-90 drop-shadow-[0_20px_50px_rgba(39,76,119,0.18)]"
/>

      {/* stars */}
      <div className="absolute top-24 left-24 text-[#B8D2EE] text-[18px]">
      </div>

      {/* baby image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/baby-celestial.png"
          alt="Sleeping baby"
          className="w-[118%] max-w-[900px] object-contain scale-[1.22] opacity-95 drop-shadow-[0_25px_40px_rgba(39,76,119,0.18)]"
        />
      </div>

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