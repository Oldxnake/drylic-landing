import { useEffect, useRef } from 'react'

export default function useRevealOnScroll(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
        }
      },
      {
        threshold: options.threshold || 0.12,
        rootMargin: options.rootMargin || '0px',
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}