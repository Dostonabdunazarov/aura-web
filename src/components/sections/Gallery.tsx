import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'
import GalleryImage from '../ui/GalleryImage'
import { galleryItems } from '../../data/galleryData'

export default function Gallery() {
  const { t } = useTranslation()
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox(i => (i! > 0 ? i! - 1 : galleryItems.length - 1))
  const next = () => setLightbox(i => (i! < galleryItems.length - 1 ? i! + 1 : 0))

  return (
    <section id="gallery" className="glass-light py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold)' }}>
            {t('gallery.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-espresso)' }}>
            {t('gallery.title')}
          </h2>
        </AnimatedSection>

        {/* Masonry grid */}
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(220px, 100%), 1fr))', gridAutoRows: '200px' }}
        >
          {galleryItems.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.04}>
              <GalleryImage item={item} onClick={() => setLightbox(i)} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              key={lightbox}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={galleryItems[lightbox].src.replace('w=600', 'w=1200')}
              alt={galleryItems[lightbox].alt}
              className="max-w-4xl max-h-[80vh] w-full h-full object-contain rounded-2xl"
              onClick={e => e.stopPropagation()}
            />

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-4 p-2 rounded-full text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-4 p-2 rounded-full text-white"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
