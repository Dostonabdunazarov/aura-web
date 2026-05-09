import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { Phone, MapPin, Clock, Instagram } from 'lucide-react'

const NAV_LINKS = [
  { key: 'nav.menu', to: 'menu' },
  { key: 'nav.about', to: 'about' },
  { key: 'nav.delivery', to: 'delivery' },
  { key: 'nav.promotions', to: 'promotions' },
  { key: 'nav.gallery', to: 'gallery' },
  { key: 'nav.contacts', to: 'contact' },
] as const

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer
      className="pt-14 pb-8"
      style={{ backgroundColor: 'var(--color-roast)', color: 'var(--color-espresso)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: 'var(--color-border)' }}>
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span
              className="text-3xl font-bold tracking-widest"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-gold)' }}
            >
              АУРА
            </span>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              {t('hero.description')}
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-gold) 15%, transparent)', color: 'var(--color-gold)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-gold) 15%, transparent)', color: 'var(--color-gold)' }}
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-semibold" style={{ color: 'var(--color-gold)' }}>
              {t('footer.nav_title')}
            </h4>
            {NAV_LINKS.map(({ key, to }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={600}
                offset={-80}
                className="text-sm cursor-pointer transition-colors duration-200 hover:opacity-80 w-fit"
                style={{ color: 'var(--color-muted)' }}
              >
                {t(key)}
              </Link>
            ))}
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-semibold" style={{ color: 'var(--color-gold)' }}>
              {t('contact.title')}
            </h4>
            <div className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
              <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--color-gold)' }} />
              {t('contact.address')}
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
              <Phone size={15} className="shrink-0" style={{ color: 'var(--color-gold)' }} />
              {t('contact.phone')}
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
              <Clock size={15} className="shrink-0" style={{ color: 'var(--color-gold)' }} />
              {t('contact.hours')}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: 'var(--color-muted)' }}>
          <span>© {year} АУРА. {t('footer.rights')}.</span>
          <span>{t('footer.made_with')} ♥</span>
        </div>
      </div>
    </footer>
  )
}
