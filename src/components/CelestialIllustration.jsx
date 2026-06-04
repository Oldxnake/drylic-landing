export default function CelestialIllustration() {
  const stars = [
    // ⭐ HERO (más grandes, foco visual)
    { top: '8%', left: '12%', color: '#B8D2EE', size: 18, delay: '0s', dur: '3.2s' },
    { top: '12%', left: '42%', color: '#ffffff', size: 16, delay: '1.2s', dur: '3.8s' },
    { top: '18%', left: '82%', color: '#FFE8A0', size: 17, delay: '0.6s', dur: '2.9s' },

    // ✨ MID (equilibrio visual)
    { top: '6%', left: '58%', color: '#C8F0FF', size: 12, delay: '0.3s', dur: '3.5s' },
    { top: '14%', left: '68%', color: '#ffffff', size: 13, delay: '1.8s', dur: '2.2s' },
    { top: '22%', left: '6%', color: '#FFE8A0', size: 11, delay: '1.5s', dur: '2.9s' },
    { top: '10%', left: '62%', color: '#B8D2EE', size: 10, delay: '0.2s', dur: '3.6s' },

    // 🌙 DUST (profundidad suave)
    { top: '25%', left: '35%', color: '#ffffff', size: 6, delay: '1.1s', dur: '4.2s' },
    { top: '20%', left: '52%', color: '#FFD6FA', size: 7, delay: '2.4s', dur: '3.0s' },
    { top: '28%', left: '78%', color: '#FFE8A0', size: 6, delay: '1.7s', dur: '4.5s' },
    { top: '7%', left: '88%', color: '#FFD6FA', size: 6, delay: '0.5s', dur: '4.8s' },
  ]

  return (
    <div className="relative w-full h-[640px] rounded-[48px] overflow-hidden bg-gradient-to-br from-[#EDF5FF] via-[#DCEBFA] to-[#C7DCF4] shadow-[0_30px_80px_rgba(39,76,119,0.08)]">

      <style>{`
        @keyframes twinkle {
          0% {
            opacity: 0.15;
            transform: scale(0.9);
            filter: blur(0.2px);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
            filter: blur(0px);
          }
          100% {
            opacity: 0.2;
            transform: scale(0.95);
            filter: blur(0.2px);
          }
        }
      `}</style>

      {/* soft global glow (premium atmosphere) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
      </div>

      {/* moon */}
      <img
        src="/tu-foto-de-luna.jpg"
        alt="Luna"
        className="absolute top-10 right-8 w-[300px] h-[300px] object-cover rounded-full opacity-90 drop-shadow-[0_20px_50px_rgba(39,76,119,0.18)]"
      />

      {/* stars */}
      {stars.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.dur} ${s.delay} ease-in-out infinite`,
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: s.color,
              boxShadow: `0 0 ${s.size * 2}px ${s.color}55`,
              opacity: 0.95,
            }}
          />
        </div>
      ))}

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