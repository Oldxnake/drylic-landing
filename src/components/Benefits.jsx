import { useEffect, useRef } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function Benefits() {
  const moments = [
    {
      number: '01',
      title: 'Dormir con tranquilidad',
      text:
        'Protección pensada para acompañar noches más suaves, para que el descanso se sienta un poco más ligero.',
    },
    {
      number: '02',
      title: 'Despertar con calma',
      text:
        'Porque una mejor noche puede transformar la forma en que empieza el día.',
    },
    {
      number: '03',
      title: 'Suavidad que acompaña',
      text:
        'Pensado para sentirse delicado, cómodo y confiable cuando más importa.',
    },
  ]

  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const revealRef =
    useRevealOnScroll()

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting)
            return

          cardsRef.current.forEach(
            (el, i) => {
              if (!el) return

              setTimeout(() => {
                el.classList.add(
                  'reveal'
                )
              }, i * 120)
            }
          )

          observer.disconnect()
        },
        { threshold: 0.2 }
      )

    if (sectionRef.current) {
      observer.observe(
        sectionRef.current
      )
    }

    return () =>
      observer.disconnect()
  }, [])

  const handleMouseMove = (
    e,
    index
  ) => {
    if (
      window.innerWidth < 1024
    )
      return

    const el =
      cardsRef.current[index]

    if (!el) return

    const rect =
      el.getBoundingClientRect()

    const x =
      ((e.clientX - rect.left) /
        rect.width) *
      100

    const y =
      ((e.clientY - rect.top) /
        rect.height) *
      100

    el.style.setProperty(
      '--x',
      `${x}%`
    )

    el.style.setProperty(
      '--y',
      `${y}%`
    )
  }

  return (
    <section
      id="filosofia"
      ref={(el) => {
        sectionRef.current = el
        revealRef.current = el
      }}
      className="
        reveal-section
        relative overflow-x-hidden
        bg-[#F8FBFF]

        px-4 py-16

        sm:px-7 sm:py-20

        md:px-14 md:py-28

        lg:px-24
      "
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">

        {/* HEADER */}
        <div
          className="
            header-reveal
            mb-12
            max-w-[760px]
            text-center

            lg:mb-16
            lg:text-left
          "
        >
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#8DA0B5] sm:text-[11px]">
            Cómo se siente Drylic®
          </span>

          <h2
            className="
              mt-4

              text-[2.5rem]
              leading-[1]
              tracking-[-0.05em]
              font-extralight
              text-[#274C77]

              sm:text-[3rem]

              md:text-[4rem]

              lg:text-[4.6rem]
            "
          >
            Más calma.
            <br />
            Menos interrupciones.
            <br />
            Un mejor comienzo para el día.
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[620px]

              text-[1rem]
              leading-[1.85]
              text-[#6F8092]

              sm:text-[1.06rem]

              lg:mx-0
              lg:mt-6
              lg:text-[1.1rem]
            "
          >
            Creado para acompañar los pequeños momentos que terminan significándolo todo.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-5 md:grid-cols-3 lg:gap-8">
          {moments.map(
            (item, i) => (
              <div
                key={item.number}
                ref={(el) =>
                  (cardsRef.current[
                    i
                  ] = el)
                }
                onMouseMove={(e) =>
                  handleMouseMove(
                    e,
                    i
                  )
                }
                className="card apple-card"
              >
                <div className="light" />
                <div className="sweep" />

                <span className="number">
                  {item.number}
                </span>

                <h3 className="title">
                  {item.title}
                </h3>

                <p className="text">
                  {item.text}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      <style>{`
        .header-reveal {
          opacity: 0;
          transform: translateY(20px);
          filter: blur(10px);
          animation:
            headerIn 1.1s
            cubic-bezier(
              0.2,
              0.8,
              0.2,
              1
            )
            forwards;
        }

        @keyframes headerIn {
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .card {
          --x: 50%;
          --y: 50%;

          position: relative;
          overflow: hidden;

          border-radius: 30px;

          padding: 28px 24px;

          border: 1px solid
            rgba(
              255,
              255,
              255,
              0.45
            );

          background:
            rgba(
              255,
              255,
              255,
              0.72
            );

          backdrop-filter:
            blur(26px);

          opacity: 0;

          transform:
            translateY(40px)
            scale(0.98);

          filter: blur(12px);

          transition:
            transform 0.9s
              cubic-bezier(
                0.16,
                1,
                0.3,
                1
              ),
            opacity 0.9s ease,
            filter 0.9s ease;
        }

        @media (
          min-width: 768px
        ) {
          .card {
            border-radius: 40px;
            padding: 40px;
          }
        }

        .card.reveal {
          opacity: 1;
          transform:
            translateY(0)
            scale(1);

          filter: blur(0);
        }

        @media (
          min-width: 1024px
        ) {
          .apple-card:hover {
            transform:
              translateY(-10px)
              scale(1.02);
          }
        }

        .light {
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at
                var(--x)
                var(--y),
              rgba(
                255,
                255,
                255,
                0.72
              ),
              transparent 60%
            );

          opacity: 0;

          transition:
            opacity 0.4s ease;

          pointer-events: none;
        }

        .apple-card:hover
          .light {
          opacity: 1;
        }

        .sweep {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              120deg,
              transparent 30%,
              rgba(
                255,
                255,
                255,
                0.35
              ),
              transparent 70%
            );

          transform:
            translateX(-120%);

          transition:
            transform 0.9s ease;
        }

        .apple-card:hover
          .sweep {
          transform:
            translateX(120%);
        }

        .number {
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          color: #aabbd0;
        }

        .title {
          margin-top: 16px;

          font-size: 1.55rem;
          font-weight: 300;
          line-height: 1.12;

          letter-spacing: -0.03em;

          color: #274c77;
        }

        @media (
          min-width: 768px
        ) {
          .title {
            margin-top: 24px;
            font-size: 2rem;
          }
        }

        .text {
          margin-top: 14px;

          color: #6f8092;

          line-height: 1.9;

          font-size: 0.97rem;
        }
      `}</style>
    </section>
  )
}