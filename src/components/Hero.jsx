import { useEffect, useRef } from 'react'
import CelestialIllustration from './CelestialIllustration'
import EmailSignup from './EmailSignup'

export default function Hero() {
  const heroRef = useRef(null)
  const cardRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = cardRef.current
      if (!card) return

      const rect = card.getBoundingClientRect()

      const x =
        (e.clientX - rect.left) / rect.width - 0.5

      const y =
        (e.clientY - rect.top) / rect.height - 0.5

      requestAnimationFrame(() => {
        card.style.transform = `
          perspective(1200px)
          rotateY(${x * 5}deg)
          rotateX(${y * -5}deg)
          translate3d(${x * 12}px, ${y * 12}px, 0)
        `
      })
    }

    const handleScroll = () => {
      const hero = heroRef.current
      const glow = glowRef.current

      if (!hero || !glow) return

      const scrollY = window.scrollY

      requestAnimationFrame(() => {
        hero.style.transform = `translateY(${scrollY * 0.08}px)`

        glow.style.transform = `
          translateY(${scrollY * 0.12}px)
          scale(${1 + scrollY * 0.0002})
        `
      })
    }

    window.addEventListener(
      'mousemove',
      handleMouseMove
    )

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )

      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [])

  return (
    <section
      id="inicio"
      className="
        relative overflow-hidden
        px-4 pt-28 pb-16
        sm:px-6
        md:px-10 md:pt-36 md:pb-24
        lg:px-24 lg:pt-40 lg:pb-28
      "
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute inset-0
            animate-[backgroundFloat_18s_ease-in-out_infinite]
          "
          style={{
            background: `
              radial-gradient(circle at 78% 24%, rgba(220,238,255,0.58), transparent 32%),
              radial-gradient(circle at 15% 85%, rgba(234,244,255,0.42), transparent 28%),
              linear-gradient(180deg, #F9FBFD 0%, #F5F9FD 100%)
            `,
          }}
        />
      </div>

      {/* MAIN CARD */}
      <div
        ref={heroRef}
        className="
          relative z-10 mx-auto max-w-[1550px]
          overflow-hidden rounded-[34px]
          border border-white/60
          bg-white/68
          shadow-[0_50px_140px_rgba(39,76,119,0.08)]
          backdrop-blur-[22px]
          lg:rounded-[48px]

          animate-[heroIn_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]
          opacity-0 translate-y-6
          transition-transform duration-300
        "
      >
        <div className="grid items-center gap-14 px-5 py-8 sm:px-7 md:px-12 md:py-12 lg:grid-cols-[1fr_1.15fr] lg:gap-24 lg:px-24 lg:py-24">

          {/* LEFT */}
          <div className="max-w-[610px] text-center lg:text-left">

            <div
              className="
                mb-8 inline-flex items-center gap-3
                rounded-full border border-[#D9E9F8]
                bg-white/75 px-5 py-2.5
                shadow-sm backdrop-blur-sm
                animate-[fadeUp_1s_ease-out_0.1s_forwards]
                opacity-0 translate-y-3
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#274C77] opacity-70" />

              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#274C77] sm:text-[11px]">
                Próximamente
              </span>
            </div>

            <h1
              className="
                text-[3.3rem]
                leading-[0.9]
                tracking-[-0.07em]
                font-extralight text-drylic-navy
                sm:text-[4.4rem]
                md:text-[5.4rem]
                lg:text-[7.5rem]
                lg:leading-[0.86]

                animate-[fadeUp_1.2s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]
                opacity-0 translate-y-5
              "
            >
              Noches tranquilas.
              <br />
              <span className="italic text-[#3A6291]">
                Grandes mañanas.
              </span>
            </h1>

            <p
              className="
                mx-auto mt-7 max-w-[560px]
                text-[1.02rem] leading-[1.8]
                text-[#6F8092] font-light
                sm:text-[1.12rem]
                md:text-[1.18rem]
                lg:mx-0 lg:mt-10
                lg:text-[1.28rem]
                lg:leading-[1.9]

                animate-[fadeUp_1.2s_cubic-bezier(0.16,1,0.3,1)_0.35s_forwards]
                opacity-0 translate-y-5
              "
            >
              Diseñados para noches más tranquilas,
              porque el descanso también es amor.
            </p>

            <div
              className="
                mt-8 flex items-center justify-center gap-4
                lg:mt-10 lg:justify-start
              "
            >
              <div className="h-[1px] w-12 bg-[#C7D8EA] sm:w-16" />

              <p className="text-[0.72rem] uppercase tracking-[0.18em] text-[#8A9AAF] sm:text-[0.82rem]">
                Premium baby care
              </p>
            </div>

            <div className="mt-8 lg:mt-10">
              <EmailSignup />
            </div>

            <p className="mt-5 text-[0.85rem] font-light text-[#97A7B7] sm:text-[0.92rem]">
              Diseñado para noches más tranquilas.
              Hecho con cuidado.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[420px] md:min-h-[520px] lg:min-h-[680px]">

            {/* PREMIUM GLOW */}
            <div
              ref={glowRef}
              className="
                absolute
                h-[260px] w-[260px]
                rounded-full
                bg-[#DCEEFF]/55
                blur-[70px]

                sm:h-[380px] sm:w-[380px]
                md:h-[480px] md:w-[480px]
                lg:h-[620px] lg:w-[620px]
                lg:blur-[110px]

                animate-[premiumGlow_10s_ease-in-out_infinite]
              "
            />

            {/* CARD */}
            <div
              ref={cardRef}
              className="
                relative w-full max-w-[700px]
                overflow-hidden rounded-[30px]
                border border-white/60
                bg-gradient-to-br
                from-[#FAFCFF]
                via-[#F2F8FF]
                to-[#E7F1FD]

                p-4
                shadow-[0_40px_100px_rgba(39,76,119,0.10)]

                sm:p-6
                md:p-8
                lg:rounded-[48px]
                lg:p-10

                transition-transform duration-300 ease-out
                will-change-transform
              "
            >
              <div className="pointer-events-none absolute left-0 right-0 top-0 h-[160px] bg-gradient-to-b from-white/35 to-transparent" />

              <CelestialIllustration />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(30px)
              scale(0.98);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0)
              scale(1);
            filter: blur(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes premiumGlow {
          0%,100% {
            transform: scale(1);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.72;
          }
        }

        @keyframes backgroundFloat {
          0%,100% {
            transform: scale(1)
              translate3d(0,0,0);
          }

          50% {
            transform: scale(1.03)
              translate3d(0,-12px,0);
          }
        }
      `}</style>
    </section>
  )
}