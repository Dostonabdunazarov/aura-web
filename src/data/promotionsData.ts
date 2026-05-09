import type { Promotion } from '../types'

export const promotions: Promotion[] = [
  {
    id: 'promo1',
    type: 'morning',
    title: 'Скидка на завтраки',
    description: 'Каждое утро до 12:00 скидка 20% на все завтраки и кофе',
    discount: '20%',
    image: 'https://images.unsplash.com/photo-1484723091739-30990ff50064?w=600&q=80',
  },
  {
    id: 'promo2',
    type: 'happy_hours',
    title: 'Happy Hours',
    description: 'С 14:00 до 17:00 второй напиток за полцены',
    discount: '50%',
    validUntil: new Date('2026-12-31'),
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80',
  },
  {
    id: 'promo3',
    type: 'combo',
    title: 'Комбо-набор',
    description: 'Кофе + завтрак + десерт — экономия 15 000 сум',
    discount: '15 000 UZS',
    image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80',
  },
  {
    id: 'promo4',
    type: 'holiday',
    title: 'Праздничное предложение',
    description: 'На дни рождения — торт в подарок при заказе от 200 000 сум',
    discount: 'Бесплатный торт',
    validUntil: new Date('2026-12-31'),
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80',
  },
  {
    id: 'promo5',
    type: 'promo_code',
    title: 'Промокод АУРА10',
    description: 'Введите промокод и получите скидку 10% на первый заказ',
    discount: '10%',
    promoCode: 'АУРА10',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
  },
]
