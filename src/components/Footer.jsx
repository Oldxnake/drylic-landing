import EmailSignup from './EmailSignup'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

function SocialIcon({ title, children }) {
  return (
    <button
      aria-label={title}
      className="
        group flex items-center justify-center
        h-11 w-11 sm:h-12 sm:w-12
        rounded-2xl
        border border-[#E3ECF5]
        bg-white
        shadow-[0_12px_30px_rgba(39,76,119,0.08)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(39,76,119,0.12)]
        active:scale-95
        shrink-0
      "
    >
      {children}
    </button>
  )
}

export default function Footer() {
  const revealRef = useRevealOnScroll()

  return (
    <footer
      id="contacto"
      ref={revealRef}
      className="
        reveal-section
        relative overflow-hidden
        px-4 pb-14 pt-8
        sm:px-6 sm:pb-16 sm:pt-10
        md:px-10
        lg:px-24 lg:pb-20 lg:pt-12
      "
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFEFF] to-[#F3F8FD]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">

        {/* CTA SECTION */}
        <div
          className="
            relative overflow-hidden
            rounded-[28px]
            border border-white/60
            bg-white/70
            px-5 py-10
            shadow-[0_40px_120px_rgba(39,76,119,0.08)]
            backdrop-blur-xl

            sm:px-7 sm:py-12
            md:rounded-[38px]
            md:px-12 md:py-14
            lg:rounded-[52px]
            lg:px-20 lg:py-20
          "
        >
          {/* glow */}
          <div
            className="
              absolute right-[-50px] top-[-60px]
              h-[160px] w-[160px]
              rounded-full
              bg-[#DCEEFF]/50
              blur-[60px]

              sm:h-[220px] sm:w-[220px]
              lg:right-[-40px]
              lg:top-[-80px]
              lg:h-[280px]
              lg:w-[280px]
              lg:blur-[80px]
            "
          />

          <div className="relative z-10 max-w-[760px] text-center lg:text-left">

            <span className="text-[10px] uppercase tracking-[0.22em] text-[#8DA0B5] sm:text-[12px]">
              Drylic®
            </span>

            <h2
              className="
                mt-4
                text-[2.15rem]
                leading-[0.98]
                tracking-[-0.06em]
                font-extralight
                text-[#274C77]

                sm:text-[3rem]
                md:text-[3.8rem]
                lg:mt-5
                lg:text-[4.5rem]
              "
            >
              Las noches tranquilas
              <br />
              empiezan aquí.
            </h2>

            <p
              className="
                mx-auto mt-5
                max-w-[620px]
                text-[0.98rem]
                leading-[1.8]
                font-light
                text-[#6F8092]

                sm:text-[1.05rem]
                md:text-[1.12rem]
                lg:mx-0
                lg:mt-8
                lg:text-[1.2rem]
                lg:leading-[1.9]
              "
            >
              Poco a poco, una mejor noche también puede cambiar cómo empieza el día.
            </p>

            <div className="mt-7 lg:mt-10">
              <EmailSignup />
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div
          className="
            mt-8
            flex flex-col items-center
            gap-7
            border-t border-[#E2ECF5]
            pt-8
            text-center

            md:mt-10
            md:flex-row
            md:justify-between
            md:text-left
          "
        >
          {/* left */}
          <div>
            <h3 className="text-[1.45rem] font-light tracking-[-0.04em] text-[#274C77] sm:text-[1.8rem]">
              Drylic®
            </h3>

            <p className="mt-2 text-[0.9rem] font-light text-[#8FA0B2] sm:text-[0.95rem]">
              Noches tranquilas. Grandes mañanas.
            </p>
          </div>

          {/* social icons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">

            {/* Instagram */}
            <SocialIcon title="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7F95AB"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:scale-110 group-hover:stroke-[#274C77]"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </SocialIcon>

            {/* Facebook */}
            <SocialIcon title="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7F95AB"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:scale-110 group-hover:stroke-[#274C77]"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </SocialIcon>

            {/* TikTok */}
            <SocialIcon title="TikTok">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7F95AB"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:scale-110 group-hover:stroke-[#274C77]"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </SocialIcon>

          </div>
        </div>
      </div>
    </footer>
  )
}