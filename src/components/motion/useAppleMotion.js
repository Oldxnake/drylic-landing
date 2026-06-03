import { useEffect } from 'react'

export function useAppleMotion() {
  useEffect(() => {
    // GLOBAL MOUSE PARALLAX
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5)
      const y = (e.clientY / window.innerHeight - 0.5)

      document.documentElement.style.setProperty('--mx', x)
      document.documentElement.style.setProperty('--my', y)
    }

    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useEffect(() => {
    // SCROLL REVEAL SYSTEM
    const elements = document.querySelectorAll('[data-apple]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('apple-in')
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}