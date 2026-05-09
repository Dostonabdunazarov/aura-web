import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'
import CategoryTab from '../ui/CategoryTab'
import MenuCard from '../ui/MenuCard'
import { menuCategories, menuItems } from '../../data/menuData'
import type { MenuCategory } from '../../types'

export default function Menu() {
  const { t } = useTranslation()
  const [active, setActive] = useState<MenuCategory>('coffee')
  const scrollRef = useRef<HTMLDivElement>(null)

  const filtered = menuItems.filter(item => item.category === active)

  return (
    <section id="menu" style={{ backgroundColor: 'var(--color-roast)' }} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold)' }}>
            {t('menu.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-cream)' }}>
            {t('menu.title')}
          </h2>
        </AnimatedSection>

        {/* Category tabs — horizontal scroll on mobile */}
        <div ref={scrollRef} className="overflow-x-auto pb-2 mb-8 scrollbar-none">
          <div className="flex gap-1 min-w-max mx-auto justify-start md:justify-center px-1">
            {menuCategories.map(cat => (
              <CategoryTab
                key={cat}
                category={cat}
                label={t(`menu.categories.${cat}`)}
                isActive={active === cat}
                onClick={() => setActive(cat)}
              />
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.05}>
              <MenuCard item={item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
