import { motion } from 'framer-motion'
import type { GalleryItem } from '../../types'

interface Props {
  item: GalleryItem
  onClick: () => void
}

export default function GalleryImage({ item, onClick }: Props) {
  const spanClass =
    item.span === 'wide' ? 'sm:col-span-2' :
    item.span === 'tall' ? 'sm:row-span-2' : ''

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${spanClass}`}
      style={{ minHeight: '200px' }}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-cover absolute inset-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: 'rgba(201,151,58,0.35)' }}
      >
        <span className="text-white text-sm font-medium">{item.alt}</span>
      </motion.div>
    </motion.div>
  )
}
