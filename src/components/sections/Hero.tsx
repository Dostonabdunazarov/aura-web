import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Extra darkening at the hero so the headline reads crisply over the
          global video background. Parallax keeps the depth feel on scroll. */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,10,6,0.35) 0%, rgba(15,10,6,0.45) 60%, rgba(15,10,6,0.70) 100%)',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span
            className="inline-block text-sm tracking-[0.3em] uppercase px-4 py-1.5 border rounded-full"
            style={{
              color: 'var(--color-gold)',
              borderColor: 'var(--color-gold)',
              fontFamily: 'var(--font-body)',
            }}
          >
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(4rem,15vw,10rem)] font-bold leading-none tracking-[0.15em]"
          style={{
            fontFamily: 'var(--font-display)',
            color: '#FAF6F0',
          }}
        >
          {t('hero.title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-lg md:text-xl tracking-wide"
          style={{ color: 'var(--color-gold-light)', fontFamily: 'var(--font-display)' }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-5 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          style={{ color: 'rgba(245,239,230,0.75)', fontFamily: 'var(--font-body)' }}
        >
          {t('hero.description')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="menu" smooth duration={600} offset={-80}>
            <button
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-widest uppercase cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'var(--color-gold)',
                color: '#0F0A06',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--color-gold-light)')
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--color-gold)')
              }
            >
              {t('hero.cta_menu')}
            </button>
          </Link>

          <Link to="contact" smooth duration={600} offset={-80}>
            <button
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-widest uppercase cursor-pointer border transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                borderColor: 'rgba(245,239,230,0.5)',
                color: '#FAF6F0',
                backgroundColor: 'transparent',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={e => {
                const btn = e.currentTarget as HTMLButtonElement
                btn.style.borderColor = 'var(--color-gold)'
                btn.style.color = 'var(--color-gold)'
              }}
              onMouseLeave={e => {
                const btn = e.currentTarget as HTMLButtonElement
                btn.style.borderColor = 'rgba(245,239,230,0.5)'
                btn.style.color = '#FAF6F0'
              }}
            >
              {t('hero.cta_reserve')}
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: 'rgba(245,239,230,0.5)', fontFamily: 'var(--font-body)' }}
        >
          scroll
        </span>
        <motion.div
          className="w-px h-10"
          style={{ backgroundColor: 'var(--color-gold)', originY: 0 }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
