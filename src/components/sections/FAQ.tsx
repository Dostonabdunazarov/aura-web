import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'
import FAQItem from '../ui/FAQItem'
import { faqItems } from '../../data/faqData'

export default function FAQ() {
  const { t } = useTranslation()

  return (
    <section id="faq" className="glass-dark py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold)' }}>
            {t('faq.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-cream)' }}>
            {t('faq.title')}
          </h2>
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.05}>
              <FAQItem item={item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
