import { useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { motion } from 'framer-motion'
import { Download, QrCode } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import AnimatedSection from '../ui/AnimatedSection'

const MENU_URL = 'https://aura.hypex.site/#menu'

export default function QRMenu() {
  const { t } = useTranslation()
  const canvasRef = useRef<HTMLDivElement>(null)

  const downloadQR = () => {
    const canvas = canvasRef.current?.querySelector('canvas')
    if (!canvas) return
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.download = 'aura-menu-qr.png'
    a.click()
  }

  return (
    <section id="qrmenu" className="glass-dark py-20 px-4 md:px-8">
      <div className="max-w-xl mx-auto text-center">
        <AnimatedSection className="mb-10">
          <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-gold)' }}>
            {t('qrmenu.subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-cream)' }}>
            {t('qrmenu.title')}
          </h2>
          <p className="mt-4 text-sm" style={{ color: 'var(--color-muted)' }}>
            {t('qrmenu.description')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-col items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="p-5 rounded-3xl inline-block"
              style={{ backgroundColor: 'white' }}
              ref={canvasRef}
            >
              <QRCodeCanvas
                value={MENU_URL}
                size={200}
                bgColor="#ffffff"
                fgColor="#1C1008"
                level="H"
                imageSettings={{
                  src: '',
                  excavate: false,
                  width: 0,
                  height: 0,
                }}
              />
            </motion.div>

            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
              <QrCode className="w-4 h-4" />
              <span>{MENU_URL}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadQR}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white"
              style={{ backgroundColor: 'var(--color-gold)' }}
            >
              <Download className="w-4 h-4" />
              {t('qrmenu.download_btn')}
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
