import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', phone: '', message: '' })
  }

  const inputStyle = {
    backgroundColor: 'var(--color-cream)',
    color: 'var(--color-espresso)',
    border: '1px solid var(--color-border)',
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder={t('contact.form_name')}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
        style={{ ...inputStyle, '--tw-ring-color': 'var(--color-gold)' } as React.CSSProperties}
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        required
        type="tel"
        placeholder={t('contact.form_phone')}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
        style={inputStyle}
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        rows={4}
        placeholder={t('contact.form_message')}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 resize-none"
        style={inputStyle}
      />

      {sent ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-green-500 font-medium"
        >
          <CheckCircle className="w-5 h-5" />
          {t('contact.form_success')}
        </motion.div>
      ) : (
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white w-full"
          style={{ backgroundColor: 'var(--color-gold)' }}
        >
          <Send className="w-4 h-4" />
          {t('contact.form_submit')}
        </motion.button>
      )}
    </form>
  )
}
