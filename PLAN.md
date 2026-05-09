# План: Веб-сайт кафе "АУРА"

## Context
Создание красивого, современного веб-сайта для кафе "АУРА" с нуля. Проект пустой — только git-репозиторий. Стек: React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion. Сайт многоязычный (RU / UZ / EN). Деплой через Docker.

## Контактная информация кафе
- **Управляющий:** Аббас Курбанов
- **Телефон:** +998 90 131-46-96
- **Адрес:** Улица Афросиаб, 12/2, Ташкент
- **Время работы:** Ежедневно 8:00 — 22:00

---

## Стек технологий
- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS v4** (плагин `@tailwindcss/vite`, без config-файла)
- **Framer Motion** — анимации при скролле, параллакс, microinteractions
- **Lucide React** — иконки
- **react-scroll** — плавный скролл по секциям
- **i18next + react-i18next** — многоязычность (RU / UZ / EN)
- **qrcode.react** — генерация QR-кода меню
- **Docker** — контейнеризация (nginx для раздачи статики)

---

## Setup команды
```powershell
npm create vite@latest . -- --template react-ts
npm install
npm install tailwindcss @tailwindcss/vite
npm install framer-motion lucide-react react-scroll
npm install i18next react-i18next
npm install qrcode.react
npm install --save-dev @types/react-scroll
```

---

## Docker
Файлы в корне проекта:

**`Dockerfile`** — multi-stage сборка:
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**`nginx.conf`** — SPA-конфиг:
```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

**`docker-compose.yml`**:
```yaml
services:
  aura-web:
    build: .
    ports:
      - "3000:80"
    restart: unless-stopped
```

---

## Многоязычность (i18n)

Библиотека: `i18next` + `react-i18next`

**Структура переводов:**
```
src/locales/
├── ru/translation.json   # Русский (по умолчанию)
├── uz/translation.json   # O'zbek tili
└── en/translation.json   # English
```

**Переключатель языка** — в Navbar, три кнопки: `RU | UZ | EN`
- Сохранение выбора в `localStorage`
- Переключение без перезагрузки страницы
- Все тексты сайта, меню, акции, FAQ — через `t('key')`

---

## Структура файлов
```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky, прозрачный→тёмный, мобил. меню, переключатель языка, тёмная тема
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx          # Видео на фоне + overlay, stagger-анимации, параллакс
│   │   ├── About.tsx         # 2 колонки: фото + текст, статы
│   │   ├── Menu.tsx          # 10 категорий-табов + карточки блюд
│   │   ├── Delivery.tsx      # Условия доставки, зона, минимальная сумма
│   │   ├── Promotions.tsx    # Карточки акций (5 типов)
│   │   ├── Gallery.tsx       # Masonry-сетка 8-10 фото
│   │   ├── FAQ.tsx           # Аккордеон
│   │   ├── Testimonials.tsx  # Отзывы, авто-скролл
│   │   ├── QRMenu.tsx        # QR-код на меню
│   │   └── Contact.tsx       # Карта, адрес, форма, маршрут
│   └── ui/
│       ├── AnimatedSection.tsx   # whileInView fade-up обёртка
│       ├── MenuCard.tsx          # Большое фото, состав, калории, значки, кнопка
│       ├── DishBadge.tsx         # 🌶 Острый / ✅ Халяль / 🌿 Веган
│       ├── GalleryImage.tsx
│       ├── CategoryTab.tsx
│       ├── PromoCard.tsx         # Карточка акции
│       ├── FAQItem.tsx           # Элемент аккордеона
│       ├── TestimonialCard.tsx
│       ├── ContactForm.tsx       # Форма обратной связи
│       ├── ReservationForm.tsx
│       ├── ThemeToggle.tsx       # Переключатель светлой/тёмной темы
│       ├── LanguageSwitcher.tsx  # RU / UZ / EN
│       └── ScrollToTop.tsx
├── locales/
│   ├── ru/translation.json
│   ├── uz/translation.json
│   └── en/translation.json
├── data/
│   ├── menuData.ts           # 10 категорий, блюда (состав, калории, значки)
│   ├── galleryData.ts        # 8-10 фото
│   ├── promotionsData.ts     # 5 типов акций
│   └── faqData.ts
├── hooks/
│   ├── useScrollPosition.ts
│   └── useTheme.ts           # Управление тёмной/светлой темой
├── types/
│   └── index.ts
├── i18n.ts                   # Конфигурация i18next
├── App.tsx
├── main.tsx
└── index.css                 # @import "tailwindcss" + @theme {} (light + dark)
```

---

## Дизайн-система

**Цвета (светлая / тёмная тема):**
| Переменная | Светлая | Тёмная | Использование |
|---|---|---|---|
| `--color-cream` | `#FAF6F0` | `#0F0A06` | Фон страницы |
| `--color-espresso` | `#1C1008` | `#F5EFE6` | Основной текст |
| `--color-roast` | `#3D2B1F` | `#2A1F15` | Тёмные секции / карточки |
| `--color-gold` | `#C9973A` | `#E8C07A` | Акценты, CTA |
| `--color-gold-light` | `#E8C07A` | `#C9973A` | Hover |

Переключение темы: класс `dark` на `<html>`, Tailwind `dark:` варианты. Выбор сохраняется в `localStorage`.

**Шрифты:** Cormorant Garamond (display) / Playfair Display (accent) / Inter (body)

---

## Секции сайта

1. **Navbar** — sticky, логотип, навигация, `ThemeToggle`, `LanguageSwitcher` (RU/UZ/EN), кнопка "Забронировать"
   - Ссылки: Меню / О нас / Доставка / Акции / Галерея / FAQ / Контакты
   - На мобиле: бургер + drawer (AnimatePresence)

2. **Hero** — full-screen видео на фоне (с fallback-фото), тёмный overlay, крупный заголовок "АУРА", параллакс, stagger-анимация кнопок

3. **About** — история кафе, 2 колонки (фото + текст), 3 стата

4. **Menu** — 10 категорий:
   Кофе / Завтраки / Выпечка / Десерты / Напитки / Бизнес-ланчи / Горячие блюда / Салаты / Вегетарианское / Сезонное
   - Карточка блюда: **большое фото**, название, состав, калории, цена, значки (`DishBadge`), кнопка "Заказать"
   - Горизонтальный скролл табов на мобиле

5. **Delivery** — условия, зона доставки, минимальная сумма, время

6. **Promotions** — 5 типов акций:
   - 🌅 Скидка на завтраки (до 12:00)
   - 🍹 Happy Hours (14:00–17:00)
   - 🎁 Комбо-наборы
   - 🎉 Акции на праздники
   - 🏷️ Промокоды (поле ввода промокода)
   - Карточки с таймером обратного отсчёта для временных акций

7. **Gallery** — 8–10 фото, masonry CSS Grid, lightbox по клику

8. **FAQ** — аккордеон, анимация раскрытия (Framer Motion height)

9. **Testimonials** — отзывы, авто-скролл

10. **QR Menu** — секция с QR-кодом, ведущим на страницу меню сайта (`/menu`). Кнопка "Скачать QR"

11. **Contact**:
    - Адрес: ул. Афросиаб 12/2, Ташкент
    - Телефон: +998 90 131-46-96
    - Telegram / Instagram ссылки
    - Embedded карта (2GIS/Yandex Maps iframe)
    - Кнопка "Построить маршрут"
    - Время работы: 8:00–22:00 ежедневно
    - Форма обратной связи (имя, телефон, сообщение)

---

## Современные фичи (тренды)

| Фича | Реализация |
|---|---|
| **Sticky Navbar** | `position: sticky`, прозрачный→тёмный при скролле через `useScrollPosition` |
| **Тёмная тема** | Tailwind `dark:`, `ThemeToggle`, сохранение в `localStorage` |
| **Анимации при скролле** | Framer Motion `whileInView`, `AnimatedSection` обёртка, stagger |
| **Видео на главной** | `<video autoPlay muted loop playsInline>` в Hero, fallback на фото |
| **Большие фото блюд** | `MenuCard` с фото на весь верх карточки, hover zoom |
| **Mobile-first дизайн** | Tailwind mobile-first breakpoints, бургер-меню, horizontal scroll табов |
| **QR меню** | `qrcode.react`, генерация QR на `/menu`, кнопка скачать PNG |
| **Многоязычность** | `i18next`, переключатель RU/UZ/EN в Navbar |

---

## Порядок реализации

### Фаза 1 — Основа ✅
1. ✅ Запустить setup-команды
2. ✅ Настроить `vite.config.ts`, `index.css` (@theme + dark mode), Google Fonts в `index.html`
3. ✅ Настроить `i18n.ts`, создать `locales/ru`, `locales/uz`, `locales/en`
4. ✅ Создать `types/index.ts`, все `data/*.ts` файлы
5. ✅ Создать `hooks/useScrollPosition.ts`, `hooks/useTheme.ts`
6. ✅ Скаффолдить `App.tsx`

### Фаза 2 — Layout ✅
7. ✅ `ThemeToggle.tsx` + `LanguageSwitcher.tsx`
8. ✅ `AnimatedSection.tsx`
9. ✅ `Navbar.tsx` — sticky, scroll-aware, тёмная тема, языки, мобильный drawer
10. ✅ `Footer.tsx`, `ScrollToTop.tsx`

### Фаза 3 — Hero ✅
11. ✅ `Hero.tsx` — видео-фон с fallback, параллакс, stagger-анимации

### Фаза 4 — Контентные секции
12. `About.tsx`
13. `DishBadge.tsx` + `CategoryTab.tsx` + `MenuCard.tsx` (большие фото)
14. `Menu.tsx` — 10 категорий
15. `Delivery.tsx`
16. `PromoCard.tsx` + `Promotions.tsx` — 5 типов акций, таймер обратного отсчёта
17. `GalleryImage.tsx` + `Gallery.tsx` — lightbox
18. `FAQItem.tsx` + `FAQ.tsx`
19. `TestimonialCard.tsx` + `Testimonials.tsx`
20. `QRMenu.tsx` — QR-код + кнопка скачать
21. `ContactForm.tsx` + `Contact.tsx`

### Фаза 5 — Полировка ✅
22. ✅ `whileInView` анимации во всех секциях — AnimatedSection + motion.div используются везде
23. ✅ Тёмная тема — все компоненты используют CSS-переменные (`--color-*`), hardcoded цвета убраны
24. ✅ Переводы — `ru`, `uz`, `en` файлы заполнены полностью (включены `hero.badge`, `menu.currency`, `contact.form_title`, `footer.nav_title`)
25. ✅ Адаптивность: 375px / 768px / 1024px / 1440px — исправлен Gallery grid (span только от sm+), Menu горизонтальный скролл табов
26. ✅ `loading="lazy"` на всех изображениях (About, Delivery, PromoCard, GalleryImage, TestimonialCard, MenuCard)
27. ✅ `<meta>` теги (description, keywords, og:*, twitter:*), `theme-color`, favicon SVG
28. ✅ `npm run build` — 0 ошибок TypeScript, успешная сборка (435 kB JS / 24 kB CSS)
29. ✅ Docker: `Dockerfile` (multi-stage), `nginx.conf` (SPA + gzip), `docker-compose.yml` (порт 3000)

### Фаза 6 — Реальный контент (TODO)
30. ⬜ Заменить placeholder-изображения на реальные фото:
    - `public/images/hero-bg.jpg` — главное фото/видео кафе
    - `public/images/about.jpg` — фото интерьера для секции "О нас"
    - `public/images/dishes/` — фото блюд для каждой позиции в `menuData.ts`
    - `public/images/gallery/` — 8–10 фото для галереи (заменить в `galleryData.ts`)
    - `public/images/promotions/` — фото для карточек акций
    - `public/video/hero.mp4` — видео для Hero-секции (с fallback на фото)
31. ⬜ Обновить `data/menuData.ts` — реальные названия, состав, цены, калории блюд
32. ⬜ Обновить `data/galleryData.ts` — реальные пути к фото галереи
33. ⬜ Обновить `data/promotionsData.ts` — реальные акции кафе

---

## Ключевые паттерны кода

**Stagger анимация:**
```tsx
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}
```

**Тёмная тема:**
```tsx
// hooks/useTheme.ts
const [theme, setTheme] = useState<'light' | 'dark'>(() =>
  localStorage.getItem('theme') as 'light' | 'dark' ?? 'light'
)
useEffect(() => {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  localStorage.setItem('theme', theme)
}, [theme])
```

**i18n использование:**
```tsx
import { useTranslation } from 'react-i18next'
const { t } = useTranslation()
// <h1>{t('hero.title')}</h1>
```

**FAQ аккордеон:**
```tsx
<motion.div
  initial={{ height: 0 }}
  animate={{ height: isOpen ? 'auto' : 0 }}
  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
  style={{ overflow: 'hidden' }}
/>
```

---

## Проверка результата
- `npm run dev` — сайт открывается, переключение языков RU/UZ/EN работает
- Тёмная тема переключается и сохраняется после перезагрузки
- Hero показывает видео (или фото как fallback)
- Меню: 10 категорий, карточки с большими фото, значками, кнопкой "Заказать"
- Акции: все 5 типов отображаются, промокод-поле работает
- QR-код генерируется и скачивается как PNG
- Контакты: карта, маршрут, форма, Telegram/Instagram
- `npm run build` — нет ошибок TypeScript
- `docker compose up --build` — сайт на `http://localhost:3000`
- Mobile: бургер-меню, горизонтальный скролл табов меню, все секции адаптивны
