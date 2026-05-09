import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'

const stats = [
  { key: 'stat1' },
  { key: 'stat2' },
  { key: 'stat3' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" style={{ backgroundColor: 'var(--color-cream)' }} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold)' }}>
            {t('about.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-espresso)' }}>
            {t('about.title')}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
                alt="Интерьер кафе АУРА"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)' }}
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-6"
          >
            <motion.p variants={itemVariants} className="text-lg leading-relaxed" style={{ color: 'var(--color-espresso)' }}>
              {t('about.text1')}
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              {t('about.text2')}
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mt-4">
              {stats.map(({ key }) => (
                <div
                  key={key}
                  className="text-center p-4 rounded-2xl"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                >
                  <div className="text-2xl font-bold" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-accent)' }}>
                    {t(`about.${key}_value`)}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>
                    {t(`about.${key}_label`)}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
