import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] =
    useState('inicio')

  const [menuOpen, setMenuOpen] =
    useState(false)

  const navItems = [
    {
      label: 'Inicio',
      href: '#inicio',
      id: 'inicio',
    },
    {
      label: 'Nuestro Enfoque',
      href: '#filosofia',
      id: 'filosofia',
    },
    {
      label: 'Contacto',
      href: '#contacto',
      id: 'contacto',
    },
  ]

  // scroll navbar + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      )

      const scrollPosition =
        window.scrollY + 180

      for (const section of sections) {
        if (!section) continue

        const top = section.offsetTop
        const height =
          section.offsetHeight

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(section.id)
        }
      }
    }

    window.addEventListener(
      'scroll',
      handleScroll
    )

    handleScroll()

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      )
  }, [])

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow =
        'auto'
    }
  }, [menuOpen])

  const handleNavClick = (
    href,
    id
  ) => {
    const target =
      document.querySelector(href)

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      setActiveSection(id)
      setMenuOpen(false)
    }
  }

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 right-0
          z-50

          flex items-center justify-between

          px-4
          sm:px-7
          lg:px-16

          transition-all duration-700
          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${
            scrolled
              ? 'py-2 bg-white/82 backdrop-blur-[28px] shadow-[0_12px_40px_rgba(39,76,119,0.08)]'
              : 'py-3 bg-white/55 backdrop-blur-xl'
          }

          border-b border-[rgba(125,138,151,0.10)]
        `}
      >
        {/* LOGO */}
        <button
          onClick={() =>
            handleNavClick(
              '#inicio',
              'inicio'
            )
          }
          className="
            relative group
            flex items-center
            shrink-0
          "
        >
          <img
            src="/drylic-logo.png"
            alt="Drylic"
            className="
              h-[62px]
              w-auto object-contain

              sm:h-[78px]
              md:h-[96px]
              lg:h-[118px]

              transition-all duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]

              group-hover:scale-[1.03]
              group-active:scale-[0.98]
            "
          />

          <div
            className="
              absolute inset-0
              opacity-0
              blur-2xl

              bg-blue-200/20

              transition duration-700
              group-hover:opacity-100
            "
          />
        </button>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-10 lg:gap-14 list-none">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.id

            return (
              <li
                key={item.id}
                className="relative group"
              >
                <button
                  onClick={() =>
                    handleNavClick(
                      item.href,
                      item.id
                    )
                  }
                  className={`
                    relative

                    text-[0.8rem]
                    lg:text-[0.86rem]

                    font-light
                    tracking-[0.12em]

                    transition-all duration-500

                    ${
                      isActive
                        ? 'text-[#274C77]'
                        : 'text-[#5E738A] hover:text-[#274C77]'
                    }
                  `}
                >
                  {item.label}

                  <span
                    className={`
                      absolute left-0
                      -bottom-2

                      h-[1px]
                      bg-[#274C77]

                      transition-all duration-500

                      ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }
                    `}
                  />

                  {isActive && (
                    <span
                      className="
                        absolute inset-0
                        blur-xl
                        opacity-20
                        bg-blue-300
                      "
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="
            md:hidden

            relative
            flex items-center
            justify-center

            h-12 w-12
            shrink-0

            rounded-[20px]

            border border-[#E4ECF4]
            bg-white/72
            backdrop-blur-xl

            shadow-[0_10px_30px_rgba(39,76,119,0.08)]

            transition-all duration-300

            active:scale-90
          "
          aria-label="Menu"
        >
          <div className="relative h-5 w-5">
            {/* top */}
            <span
              className={`
                absolute left-0 top-1/2
                h-[1.5px] w-5
                bg-[#274C77]

                transition-all duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]

                ${
                  menuOpen
                    ? 'rotate-45'
                    : '-translate-y-[6px]'
                }
              `}
            />

            {/* middle */}
            <span
              className={`
                absolute left-0 top-1/2
                h-[1.5px] w-5
                bg-[#274C77]

                transition-all duration-300

                ${
                  menuOpen
                    ? 'opacity-0 scale-0'
                    : 'opacity-100'
                }
              `}
            />

            {/* bottom */}
            <span
              className={`
                absolute left-0 top-1/2
                h-[1.5px] w-5
                bg-[#274C77]

                transition-all duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]

                ${
                  menuOpen
                    ? '-rotate-45'
                    : 'translate-y-[6px]'
                }
              `}
            />
          </div>
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        className={`
          md:hidden
          fixed inset-0
          z-40

          bg-[#F7FBFF]/60
          backdrop-blur-[18px]

          transition-all duration-500

          ${
            menuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }
        `}
        onClick={() =>
          setMenuOpen(false)
        }
      />

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden

          fixed
          top-[88px]
          left-4
          right-4

          z-50

          rounded-[34px]
          border border-white/60

          bg-white/78
          backdrop-blur-[32px]

          shadow-[0_40px_100px_rgba(39,76,119,0.12)]

          overflow-hidden

          transition-all duration-500
          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${
            menuOpen
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none'
          }
        `}
      >
        <div className="flex flex-col p-3">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.id

            return (
              <button
                key={item.id}
                onClick={() =>
                  handleNavClick(
                    item.href,
                    item.id
                  )
                }
                className={`
                  rounded-[22px]
                  px-5 py-4

                  text-left
                  text-[0.96rem]

                  font-light
                  tracking-[0.04em]

                  transition-all duration-300

                  ${
                    isActive
                      ? 'bg-[#F3F8FD] text-[#274C77]'
                      : 'text-[#5E738A] hover:bg-[#F4F8FC]'
                  }
                `}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}