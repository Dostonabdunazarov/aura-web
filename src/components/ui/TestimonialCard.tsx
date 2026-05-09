import { Star } from 'lucide-react'
import type { Testimonial } from '../../types'

export default function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div
      className="flex-shrink-0 w-72 md:w-80 p-5 rounded-2xl flex flex-col gap-3"
      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
    >
      <div className="flex items-center gap-3">
        <img
          src={item.avatar}
          alt={item.name}
          loading="lazy"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm" style={{ color: 'var(--color-espresso)' }}>{item.name}</p>
          <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{item.date}</p>
        </div>
      </div>

      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4"
            fill={i < item.rating ? 'var(--color-gold)' : 'none'}
            stroke={i < item.rating ? 'var(--color-gold)' : 'var(--color-muted)'}
          />
        ))}
      </div>

      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        "{item.text}"
      </p>
    </div>
  )
}
