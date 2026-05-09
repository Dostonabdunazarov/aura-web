import { motion } from 'framer-motion'
import type { MenuCategory } from '../../types'

interface Props {
  category: MenuCategory
  label: string
  isActive: boolean
  onClick: () => void
}

export default function CategoryTab({ label, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="relative whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors duration-200"
      style={{ color: isActive ? 'var(--color-gold)' : 'var(--color-muted)' }}
    >
      {isActive && (
        <motion.span
          layoutId="category-indicator"
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: 'var(--color-gold)', opacity: 0.12 }}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      {label}
    </button>
  )
}
