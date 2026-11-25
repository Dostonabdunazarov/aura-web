import { useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import LanguageSwitcher from '../ui/LanguageSwitcher'

const NAV_LINKS = [
  { key: 'nav.menu', to: 'menu' },
  { key: 'nav.about', to: 'about' },
  { key: 'nav.delivery', to: 'delivery' },
  { key: 'nav.promotions', to: 'promotions' },
  { key: 'nav.gallery', to: 'gallery' },
  { key: 'nav.faq', to: 'faq' },
  { key: 'nav.contacts', to: 'contact' },
] as const

export default function Navbar() {
  const { t } = useTranslation()
  const scrollY = useScrollPosition()
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrolled = scrollY > 60

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? 'color-mix(in srgb, var(--color-roast) 97%, transparent)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.18)' : 'none',
        }}
      >
        <div className="container-wide px-4 sm:px-6 lg:px-0">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <Link to="hero" smooth duration={600} className="cursor-pointer">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <span
                  className="text-2xl lg:text-3xl tracking-widest font-bold"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-gold)' }}
                >
                  АУРА
                </span>
              </motion.div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map(({ key, to }) => (
                <Link
                  key={to}
                  to={to}
                  smooth
                  duration={600}
                  offset={-80}
                  className="text-[22px] tracking-wide cursor-pointer transition-colors duration-200 relative group"
                  style={{ color: 'var(--color-espresso)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                >
                  {t(key)}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: 'var(--color-gold)' }}
                  />
                </Link>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              {/* Reserve button (desktop) */}
              <Link
                to="contact"
                href="#contact"
                smooth
                duration={600}
                offset={-80}
                className="group relative hidden lg:inline-flex items-center gap-1.5 ml-2 pb-0.5 text-lg tracking-wide cursor-pointer text-gold"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
              >
                {t('nav.reserve')}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} aria-hidden />
                <span aria-hidden className="absolute left-0 bottom-0 h-px w-full bg-gold/40" />
                <span aria-hidden className="absolute left-0 bottom-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </Link>

              {/* Burger (mobile) */}
              <button
                onClick={() => setMobileOpen(v => !v)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg"
                style={{ color: 'var(--color-espresso)' }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-30"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-72 z-40 flex flex-col pt-20 pb-8 px-6 gap-2 shadow-2xl"
              style={{ backgroundColor: 'var(--color-roast)' }}
            >
              {NAV_LINKS.map(({ key, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <Link
                    to={to}
                    smooth
                    duration={600}
                    offset={-80}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-lg font-medium cursor-pointer border-b transition-colors duration-200"
                    style={{
                      color: 'var(--color-espresso)',
                      borderColor: 'var(--color-border)',
                    }}
                  >
                    {t(key)}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <Link
                  to="contact"
                  href="#contact"
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setMobileOpen(false)}
                  className="group relative inline-flex items-center gap-2 pb-1 text-xl tracking-wide cursor-pointer text-gold"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                >
                  {t('nav.reserve')}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} aria-hidden />
                  <span aria-hidden className="absolute left-0 bottom-0 h-px w-full bg-gold/40" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
