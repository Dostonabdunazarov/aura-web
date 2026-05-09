import { useTranslation } from 'react-i18next'
import type { BadgeType } from '../../types'

const badgeConfig: Record<BadgeType, { emoji: string; color: string }> = {
  spicy:   { emoji: '🌶', color: '#EF4444' },
  halal:   { emoji: '✅', color: '#22C55E' },
  vegan:   { emoji: '🌿', color: '#16A34A' },
  new:     { emoji: '⭐', color: '#3B82F6' },
  popular: { emoji: '🔥', color: '#F97316' },
}

export default function DishBadge({ type }: { type: BadgeType }) {
  const { t } = useTranslation()
  const { emoji, color } = badgeConfig[type]
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium text-white"
      style={{ backgroundColor: color }}
    >
      {emoji} {t(`badges.${type}`)}
    </span>
  )
}
