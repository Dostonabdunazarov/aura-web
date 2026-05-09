import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const LANGS = ['RU', 'UZ', 'EN'] as const
type Lang = typeof LANGS[number]

const langMap: Record<Lang, string> = { RU: 'ru', UZ: 'uz', EN: 'en' }

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = (Object.entries(langMap).find(([, v]) => v === i18n.language)?.[0] ?? 'RU') as Lang

  const change = (lang: Lang) => {
    i18n.changeLanguage(langMap[lang])
    localStorage.setItem('i18nextLng', langMap[lang])
  }

  return (
    <div className="flex items-center gap-0.5 text-sm font-medium">
      {LANGS.map((lang, idx) => (
        <span key={lang} className="flex items-center">
          <motion.button
            onClick={() => change(lang)}
            whileTap={{ scale: 0.9 }}
            className="px-1.5 py-0.5 rounded transition-colors duration-200"
            style={{
              color: current === lang ? 'var(--color-gold)' : 'var(--color-muted)',
              fontWeight: current === lang ? 700 : 400,
            }}
          >
            {lang}
          </motion.button>
          {idx < LANGS.length - 1 && (
            <span style={{ color: 'var(--color-border)' }}>|</span>
          )}
        </span>
      ))}
    </div>
  )
}
