import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { Promotion } from '../../types'

const typeEmoji: Record<string, string> = {
  morning: '🌅',
  happy_hours: '🍹',
  combo: '🎁',
  holiday: '🎉',
  promo_code: '🏷️',
}

function useCountdown(target?: Date) {
  const calc = () => {
    if (!target) return null
    const diff = target.getTime() - Date.now()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
    const d = Math.floor(diff / 86400000)
    const h = Math.floor((diff % 86400000) / 3600000)
    const m = Math.floor((diff % 3600000) / 60000)
    const s = Math.floor((diff % 60000) / 1000)
    return { d, h, m, s }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    if (!target) return
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [target])
  return time
}

export default function PromoCard({ promo }: { promo: Promotion }) {
  const { t } = useTranslation()
  const countdown = useCountdown(promo.validUntil)
  const [code, setCode] = useState('')
  const [status, setStatus] = useState<null | 'ok' | 'err'>(null)

  const applyCode = () => {
    if (code.trim().toUpperCase() === promo.promoCode?.toUpperCase()) {
      setStatus('ok')
    } else {
      setStatus('err')
    }
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={promo.image}
          alt={promo.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
        <div className="absolute top-3 left-3">
          <span className="text-2xl">{typeEmoji[promo.type]}</span>
        </div>
        <div
          className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: 'var(--color-gold)' }}
        >
          {promo.discount}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-base" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-espresso)' }}>
          {promo.title}
        </h3>
        <p className="text-sm" style={{ color: 'var(--color-muted)' }}>{promo.description}</p>

        {/* Countdown */}
        {countdown && (
          <div className="mt-1">
            <p className="text-xs mb-1" style={{ color: 'var(--color-muted)' }}>{t('promotions.timer_label')}</p>
            <div className="flex gap-2">
              {[
                { v: countdown.d, l: t('promotions.days') },
                { v: countdown.h, l: t('promotions.hours') },
                { v: countdown.m, l: t('promotions.minutes') },
                { v: countdown.s, l: t('promotions.seconds') },
              ].map(({ v, l }) => (
                <div key={l} className="text-center">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                    style={{ backgroundColor: 'var(--color-roast)', color: 'var(--color-gold)' }}
                  >
                    {String(v).padStart(2, '0')}
                  </div>
                  <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Promo code input */}
        {promo.type === 'promo_code' && (
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              value={code}
              onChange={e => { setCode(e.target.value); setStatus(null) }}
              placeholder={t('promotions.promo_code_placeholder')}
              className="flex-1 px-3 py-2 rounded-xl text-sm outline-none"
              style={{
                backgroundColor: 'var(--color-roast)',
                color: 'var(--color-espresso)',
                border: `1px solid ${status === 'err' ? '#EF4444' : status === 'ok' ? '#22C55E' : 'var(--color-border)'}`,
              }}
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={applyCode}
              className="px-3 py-2 rounded-xl text-sm font-medium text-white"
              style={{ backgroundColor: 'var(--color-gold)' }}
            >
              {t('promotions.promo_code_btn')}
            </motion.button>
          </div>
        )}
        {status === 'ok' && <p className="text-xs text-green-500">{t('promotions.promo_code_success')}</p>}
        {status === 'err' && <p className="text-xs text-red-500">{t('promotions.promo_code_error')}</p>}
      </div>
    </motion.div>
  )
}
