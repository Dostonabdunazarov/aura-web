import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, User, Navigation } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'
import ContactForm from '../ui/ContactForm'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Contact() {
  const { t } = useTranslation()

  const infoRows = [
    { icon: MapPin, text: t('contact.address') },
    { icon: Phone, text: t('contact.phone'), href: 'tel:+998901314696' },
    { icon: Clock, text: t('contact.hours') },
    { icon: User, text: t('contact.manager') },
  ]

  return (
    <section id="contact" style={{ backgroundColor: 'var(--color-cream)' }} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold)' }}>
            {t('contact.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-espresso)' }}>
            {t('contact.title')}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — info + map */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-5"
          >
            {infoRows.map(({ icon: Icon, text, href }) => (
              <motion.div key={text} variants={itemVariants} className="flex items-start gap-3">
                <div
                  className="mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-gold)' }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
                {href ? (
                  <a href={href} className="text-base font-medium hover:underline" style={{ color: 'var(--color-espresso)' }}>
                    {text}
                  </a>
                ) : (
                  <span className="text-base" style={{ color: 'var(--color-espresso)' }}>{text}</span>
                )}
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex gap-3 flex-wrap mt-1">
              <motion.a
                href="https://t.me/auracafe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2 rounded-full text-sm font-medium text-white"
                style={{ backgroundColor: '#0088cc' }}
              >
                {t('contact.telegram')}
              </motion.a>
              <motion.a
                href="https://instagram.com/auracafe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2 rounded-full text-sm font-medium text-white"
                style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
              >
                {t('contact.instagram')}
              </motion.a>
              <motion.a
                href="https://2gis.uz/tashkent/search/%D0%90%D1%84%D1%80%D0%BE%D1%81%D0%B8%D0%B0%D0%B1%2012%2F2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium"
                style={{ border: '2px solid var(--color-gold)', color: 'var(--color-gold)' }}
              >
                <Navigation className="w-4 h-4" />
                {t('contact.route_btn')}
              </motion.a>
            </motion.div>

            {/* Embedded map */}
            <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden mt-2" style={{ height: '220px' }}>
              <iframe
                title="Карта кафе АУРА"
                src="https://yandex.ru/map-widget/v1/?ll=69.279900%2C41.299200&z=16&pt=69.279900,41.299200,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ border: 0 }}
              />
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <AnimatedSection direction="left">
            <div
              className="p-6 md:p-8 rounded-3xl h-full"
              style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
            >
              <h3
                className="text-2xl font-bold mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-espresso)' }}
              >
                {t('contact.form_title')}
              </h3>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
