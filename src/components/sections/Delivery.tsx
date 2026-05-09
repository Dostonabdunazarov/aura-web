import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Truck, Clock, MapPin, Package, Phone, ShoppingBag } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Delivery() {
  const { t } = useTranslation()

  const infoCards = [
    { icon: ShoppingBag, labelKey: 'delivery.min_order', valueKey: 'delivery.min_order_value' },
    { icon: Clock, labelKey: 'delivery.delivery_time', valueKey: 'delivery.delivery_time_value' },
    { icon: MapPin, labelKey: 'delivery.delivery_zone', valueKey: 'delivery.delivery_zone_value' },
    { icon: Package, labelKey: 'delivery.free_delivery', valueKey: 'delivery.free_delivery_value' },
  ]

  return (
    <section id="delivery" style={{ backgroundColor: 'var(--color-cream)' }} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold)' }}>
            {t('delivery.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-espresso)' }}>
            {t('delivery.title')}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <AnimatedSection direction="left">
            <div className="relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=700&q=80"
                alt="Доставка"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(201,151,58,0.3) 0%, transparent 60%)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="p-6 rounded-full"
                  style={{ backgroundColor: 'var(--color-gold)' }}
                >
                  <Truck className="w-12 h-12 text-white" />
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Info cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {infoCards.map(({ icon: Icon, labelKey, valueKey }) => (
              <motion.div
                key={labelKey}
                variants={itemVariants}
                className="p-5 rounded-2xl flex flex-col gap-2"
                style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-gold)', opacity: 0.9 }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--color-muted)' }}>
                  {t(labelKey)}
                </p>
                <p className="font-semibold text-lg" style={{ color: 'var(--color-espresso)', fontFamily: 'var(--font-accent)' }}>
                  {t(valueKey)}
                </p>
              </motion.div>
            ))}

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="sm:col-span-2 flex gap-3 flex-wrap">
              <motion.a
                href="tel:+998901314696"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white"
                style={{ backgroundColor: 'var(--color-gold)' }}
              >
                <ShoppingBag className="w-4 h-4" />
                {t('delivery.order_btn')}
              </motion.a>
              <motion.a
                href="tel:+998901314696"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold"
                style={{ border: '2px solid var(--color-gold)', color: 'var(--color-gold)' }}
              >
                <Phone className="w-4 h-4" />
                {t('delivery.call_btn')}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
