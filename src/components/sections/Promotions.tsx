import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'
import PromoCard from '../ui/PromoCard'
import { promotions } from '../../data/promotionsData'

export default function Promotions() {
  const { t } = useTranslation()

  return (
    <section id="promotions" className="glass-dark py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold)' }}>
            {t('promotions.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-cream)' }}>
            {t('promotions.title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo, i) => (
            <AnimatedSection key={promo.id} delay={i * 0.08}>
              <PromoCard promo={promo} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
