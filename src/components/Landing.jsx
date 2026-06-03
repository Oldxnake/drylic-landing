import { useEffect, useRef } from 'react'

export default function Landing() {
  const cardsRef = useRef([])

  const moments = [
    {
      number: '01',
      title: 'Dormir con tranquilidad',
      text: 'Protección pensada para acompañar noches más tranquilas, sin interrupciones innecesarias.',
    },
    {
      number: '02',
      title: 'Despertar sin preocupaciones',
      text: 'Mañanas más felices para bebés y padres.',
    },
    {
      number: '03',
      title: 'Suavidad que acompaña',
      text: 'Comodidad delicada y confiable en cada momento.',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('reveal')
        })
      },
      { threshold: 0.15 }
    )

    cardsRef.current.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e, i) => {
    const el = cardsRef.current[i]
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    el.style.setProperty('--x', `${x}%`)
    el.style.setProperty('--y', `${y}%`)
  }

  return (
    <main className="relative bg-[#F7FAFF] overflow-hidden">

      {/* 🌫 Ambient background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#ffffff,transparent)] opacity-70" />

      {/* ================= HERO ================= */}
      <section className="relative px-6 pt-28 pb-24 md:px-16 lg:px-24">

        <div className="max-w-4xl mx-auto text-center animate-[intro_1s_ease-out_forwards] opacity-0">

          <p className="text-[11px] tracking-[0.3em] uppercase text-[#8DA0B5]">
            Drylic®
          </p>

          <h1 className="mt-6 text-[3rem] md:text-[5rem] font-extralight leading-[1.05] text-[#274C77]">
            Más calma.<br />
            Más descanso.<br />
            Más mañanas felices.
          </h1>

          <p className="mt-8 text-[1.1rem] text-[#6F8092] max-w-xl mx-auto leading-[1.8]">
            Un pañal premium diseñado para transformar noches en tranquilidad y mañanas en bienestar.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-[#274C77] text-white hover:scale-105 transition">
              Ver beneficios
            </button>

            <button className="px-6 py-3 rounded-full border border-[#C9D6E6] text-[#274C77] hover:bg-white/60 transition">
              Conocer más
            </button>
          </div>

        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="relative px-6 py-24 md:px-16 lg:px-24">

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {moments.map((item, i) => (
            <div
              key={item.number}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseMove={(e) => handleMouseMove(e, i)}
              className="
                relative overflow-hidden
                rounded-[40px]
                p-8 md:p-10

                bg-white/60 backdrop-blur-2xl
                border border-white/40

                opacity-0 translate-y-[40px] blur-[12px]

                transition-all duration-700
                hover:scale-[1.02] hover:-translate-y-2

                card
              "
            >

              <div className="light" />
              <div className="sweep" />

              <span className="text-[0.8rem] tracking-[0.2em] text-[#AABBD0]">
                {item.number}
              </span>

              <h3 className="mt-6 text-[1.8rem] font-light text-[#274C77]">
                {item.title}
              </h3>

              <p className="mt-4 text-[#6F8092] leading-[1.8]">
                {item.text}
              </p>

            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative px-6 py-28 md:px-16 lg:px-24 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-[2.5rem] md:text-[3.5rem] font-extralight text-[#274C77]">
            Diseñado para noches mejores.
          </h2>

          <p className="mt-6 text-[#6F8092] leading-[1.8]">
            Cada detalle importa cuando se trata de bienestar.
          </p>

          <button className="mt-10 px-8 py-4 rounded-full bg-[#274C77] text-white hover:scale-105 transition">
            Empezar ahora
          </button>

        </div>

      </section>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .card {
          --x: 50%;
          --y: 50%;
        }

        .card.reveal {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .light {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at var(--x) var(--y),
            rgba(255,255,255,0.8),
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .card:hover .light {
          opacity: 1;
        }

        .sweep {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255,255,255,0.3),
            transparent 70%
          );
          transform: translateX(-120%);
          transition: transform 0.8s ease;
        }

        .card:hover .sweep {
          transform: translateX(120%);
        }

        @keyframes intro {
          from {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </main>
  )
}