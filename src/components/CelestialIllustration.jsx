export default function CelestialIllustration() {
  const stars = [
    { top: '8%',  left: '12%', color: '#B8D2EE', size: 14, delay: '0s',    dur: '2.4s' },
    { top: '5%',  left: '28%', color: '#ffffff', size: 10, delay: '0.6s',  dur: '3.1s' },
    { top: '12%', left: '42%', color: '#FFE8A0', size: 16, delay: '1.2s',  dur: '2.8s' },
    { top: '6%',  left: '58%', color: '#C8F0FF', size: 11, delay: '0.3s',  dur: '3.5s' },
    { top: '14%', left: '68%', color: '#ffffff', size: 13, delay: '1.8s',  dur: '2.2s' },
    { top: '4%',  left: '75%', color: '#FFE8A0', size: 9,  delay: '0.9s',  dur: '4.0s' },
    { top: '18%', left: '82%', color: '#B8D2EE', size: 15, delay: '0.4s',  dur: '2.6s' },
    { top: '9%',  left: '90%', color: '#ffffff', size: 10, delay: '2.1s',  dur: '3.2s' },
    { top: '22%', left: '6%',  color: '#FFE8A0', size: 12, delay: '1.5s',  dur: '2.9s' },
    { top: '16%', left: '20%', color: '#C8F0FF', size: 8,  delay: '0.7s',  dur: '3.8s' },
    { top: '25%', left: '35%', color: '#ffffff', size: 11, delay: '1.1s',  dur: '2.5s' },
    { top: '20%', left: '52%', color: '#FFD6FA', size: 13, delay: '2.4s',  dur: '3.0s' },
    { top: '10%', left: '62%', color: '#B8D2EE', size: 9,  delay: '0.2s',  dur: '3.6s' },
    { top: '28%', left: '78%', color: '#FFE8A0', size: 14, delay: '1.7s',  dur: '2.3s' },
    { top: '7%',  left: '88%', color: '#FFD6FA', size: 10, delay: '0.5s',  dur: '4.2s' },
    { top: '32%', left: '15%', color: '#ffffff', size: 8,  delay: '1.3s',  dur: '2.7s' },
    { top: '3%',  left: '48%', color: '#C8F0FF', size: 12, delay: '2.0s',  dur: '3.3s' },
    { top: '24%', left: '92%', color: '#FFE8A0', size: 10, delay: '0.8s',  dur: '2.1s' },
  ]

  return (
    <div className="relative w-full h-[640px] rounded-[48px] overflow-hidden bg-gradient-to-br from-[#EDF5FF] via-[#DCEBFA] to-[#C7DCF4] shadow-[0_30px_80px_rgba(39,76,119,0.08)]">

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50%       { opacity: 1;    transform: scale(1.2); }
        }
      `}</style>

      {/* moon */}
      <img
        src="/tu-foto-de-luna.jpg"
        alt="Luna"
        className="absolute top-10 right-8 w-[300px] h-[300px] object-cover rounded-full opacity-90 drop-shadow-[0_20px_50px_rgba(39,76,119,0.18)]"
      />

      {/* estrellas titilantes */}
      {stars.map((s, i) => (
  <div
    key={i}
    style={{
      position: 'absolute',
      top: s.top,
      left: s.left,
      width: s.size,
      height: s.size,
      color: s.color,
      animation: `twinkle ${s.dur} ${s.delay} ease-in-out infinite`,
      fontSize: s.size,
      lineHeight: 1,
      userSelect: 'none',
      zIndex: 10,
      pointerEvents: 'none',
          }}
        >
          ✦
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