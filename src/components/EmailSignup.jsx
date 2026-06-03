import { useState } from 'react'
import axios from 'axios'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!email.trim() || !email.includes('@')) {
      setStatus('error')

      setTimeout(() => {
        setStatus('idle')
      }, 2200)

      return
    }

    try {
      setLoading(true)

      await axios.post(
        'https://api.brevo.com/v3/contacts',
        {
          email,
          listIds: [Number(import.meta.env.VITE_BREVO_LIST_ID)],
          updateEnabled: true,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': import.meta.env.VITE_BREVO_API_KEY,
          },
        }
      )

      setStatus('success')
      setEmail('')

      setTimeout(() => {
        setStatus('idle')
      }, 3500)
    } catch (error) {
      console.error(error)

      setStatus('error')

      setTimeout(() => {
        setStatus('idle')
      }, 2500)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-[460px]">

      <span className="mb-3 block text-[0.72rem] font-medium tracking-[0.08em] text-drylic-slate">
        Sé de los primeros en conocer Drylic®
      </span>

      <div
        className={`
          group relative flex overflow-hidden rounded-[28px]
          border backdrop-blur-xl
          transition-all duration-500
          shadow-[0_12px_40px_rgba(39,76,119,0.08)]

          ${
            status === 'error'
              ? 'border-red-200 bg-red-50/70'
              : status === 'success'
              ? 'border-[#D8E9DB] bg-[#F4FBF5]'
              : 'border-white/60 bg-white/78 hover:shadow-[0_18px_50px_rgba(39,76,119,0.12)]'
          }
        `}
      >
        <input
          type="email"
          value={email}
          disabled={loading || status === 'success'}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) =>
            e.key === 'Enter' && !loading && handleSubmit()
          }
          placeholder={
            status === 'success'
              ? '✨ Ya estás dentro'
              : loading
              ? 'Enviando...'
              : 'tu@correo.com'
          }
          className="
            flex-1 bg-transparent px-6 py-[1.05rem]
            text-[0.96rem] font-light
            text-[#274C77]
            outline-none
            placeholder:text-[#A7B3C2]
          "
        />

        <button
          onClick={handleSubmit}
          disabled={loading || status === 'success'}
          className={`
            relative flex min-w-[150px] items-center justify-center
            px-7 text-[0.92rem]
            font-medium tracking-[-0.02em]
            transition-all duration-500

            ${
              status === 'success'
                ? 'bg-[#2C7A56] text-white'
                : loading
                ? 'bg-[#355A84] text-white'
                : 'bg-[#274C77] text-white hover:bg-[#1F3F66]'
            }
          `}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border border-white/25 border-t-white" />
              Enviando
            </div>
          ) : status === 'success' ? (
            '✓ Listo'
          ) : (
            'Notificarme'
          )}
        </button>

        {/* glow premium */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute left-[15%] top-[-60px] h-[140px] w-[140px] rounded-full bg-[#DCEEFF]/40 blur-[50px]" />
        </div>
      </div>

      <p
        className={`
          mt-3 text-[0.85rem]
          transition-all duration-500

          ${
            status === 'error'
              ? 'text-red-400 opacity-100'
              : status === 'success'
              ? 'text-[#6A8B76] opacity-100'
              : 'opacity-0'
          }
        `}
      >
        {status === 'error'
          ? 'Revisa tu correo e inténtalo de nuevo.'
          : 'Gracias por unirte temprano a Drylic® ✨'}
      </p>
    </div>
  )
}