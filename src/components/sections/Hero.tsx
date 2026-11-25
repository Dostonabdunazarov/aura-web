import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import { ArrowRight } from 'lucide-react'

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
          className="mt-10 flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center"
        >
          <Link
            to="menu"
            href="#menu"
            smooth
            duration={600}
            offset={-80}
            className="group relative inline-flex items-center gap-2 pb-1 text-xl md:text-2xl tracking-wide cursor-pointer text-gold"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            {t('hero.cta_menu')}
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={1.5} aria-hidden />
            <span aria-hidden className="absolute left-0 bottom-0 h-px w-full bg-gold/40" />
            <span aria-hidden className="absolute left-0 bottom-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>

          <span aria-hidden className="hidden sm:block w-1.5 h-1.5 rotate-45 bg-gold/70" />

          <Link
            to="contact"
            href="#contact"
            smooth
            duration={600}
            offset={-80}
            className="group relative inline-flex items-center pb-1 text-xl md:text-2xl tracking-wide cursor-pointer text-espresso transition-colors duration-300 hover:text-gold"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
          >
            {t('hero.cta_reserve')}
            <span aria-hidden className="absolute left-0 bottom-0 h-px w-full bg-espresso/30" />
            <span aria-hidden className="absolute left-0 bottom-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
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
