import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'
import TestimonialCard from '../ui/TestimonialCard'
import { testimonials } from '../../data/testimonialsData'

export default function Testimonials() {
  const { t } = useTranslation()
  const trackRef = useRef<HTMLDivElement>(null)

  // Auto-scroll: slow marquee effect
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    let req: number
    let x = 0
    const speed = 0.5

    const step = () => {
      x += speed
      if (x >= el.scrollWidth / 2) x = 0
      el.style.transform = `translateX(-${x}px)`
      req = requestAnimationFrame(step)
    }

    req = requestAnimationFrame(step)

    const stop = () => cancelAnimationFrame(req)
    const start = () => { req = requestAnimationFrame(step) }
    el.parentElement?.addEventListener('mouseenter', stop)
    el.parentElement?.addEventListener('mouseleave', start)

    return () => {
      cancelAnimationFrame(req)
      el.parentElement?.removeEventListener('mouseenter', stop)
      el.parentElement?.removeEventListener('mouseleave', start)
    }
  }, [])

  // Duplicate for seamless loop
  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" style={{ backgroundColor: 'var(--color-cream)' }} className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold)' }}>
            {t('testimonials.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-espresso)' }}>
            {t('testimonials.title')}
          </h2>
        </AnimatedSection>
      </div>

      <div className="overflow-hidden" style={{ cursor: 'grab' }}>
        <div ref={trackRef} className="flex gap-4 w-max">
          {doubled.map((item, i) => (
            <TestimonialCard key={`${item.id}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
