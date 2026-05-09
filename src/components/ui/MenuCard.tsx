import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import DishBadge from './DishBadge'
import type { MenuItem } from '../../types'

export default function MenuCard({ item }: { item: MenuItem }) {
  const { t } = useTranslation()
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex flex-wrap gap-1">
          {item.badges.map(b => <DishBadge key={b} type={b} />)}
        </div>

        <h3 className="font-semibold text-base leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-espresso)' }}>
          {item.name}
        </h3>

        <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{item.composition}</p>

        <div className="flex items-center justify-between mt-auto pt-2">
          <div>
            <span className="font-bold text-lg" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-accent)' }}>
              {item.price.toLocaleString()} {t('menu.currency')}
            </span>
            <span className="ml-2 text-xs" style={{ color: 'var(--color-muted)' }}>
              {item.calories} {t('menu.calories')}
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1.5 rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: 'var(--color-gold)' }}
          >
            {t('menu.order_btn')}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
