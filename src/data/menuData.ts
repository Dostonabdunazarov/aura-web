import type { MenuItem, MenuCategory } from '../types'

export const menuCategories: MenuCategory[] = [
  'coffee', 'breakfast', 'pastry', 'desserts', 'drinks',
  'lunch', 'hot', 'salads', 'vegan', 'seasonal',
]

export const menuItems: MenuItem[] = [
  // Coffee
  { id: 'c1', category: 'coffee', name: 'Капучино', description: 'Классический итальянский капучино', composition: 'Эспрессо, молоко, молочная пена', price: 22000, calories: 120, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80', badges: ['halal'] },
  { id: 'c2', category: 'coffee', name: 'Латте', description: 'Нежный кофе с молоком', composition: 'Эспрессо, молоко', price: 24000, calories: 150, image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80', badges: ['halal', 'popular'] },
  { id: 'c3', category: 'coffee', name: 'Флэт Уайт', description: 'Крепкий кофе с бархатным молоком', composition: 'Двойной эспрессо, микропена', price: 25000, calories: 130, image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&q=80', badges: ['halal', 'new'] },
  { id: 'c4', category: 'coffee', name: 'Раф кофе', description: 'Нежный сливочный кофе', composition: 'Эспрессо, сливки, ванильный сахар', price: 27000, calories: 200, image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&q=80', badges: ['halal', 'popular'] },
  { id: 'c5', category: 'coffee', name: 'Американо', description: 'Классический чёрный кофе', composition: 'Эспрессо, горячая вода', price: 18000, calories: 10, image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80', badges: ['halal', 'vegan'] },

  // Breakfast
  { id: 'b1', category: 'breakfast', name: 'Яйца Бенедикт', description: 'Классический завтрак', composition: 'Яйца пашот, бекон, голландский соус, булочка', price: 55000, calories: 480, image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80', badges: ['halal', 'popular'] },
  { id: 'b2', category: 'breakfast', name: 'Авокадо тост', description: 'Здоровый завтрак с авокадо', composition: 'Тост, авокадо, яйцо, кунжут, микрозелень', price: 48000, calories: 350, image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&q=80', badges: ['vegan', 'popular'] },
  { id: 'b3', category: 'breakfast', name: 'Французские тосты', description: 'Сладкий завтрак', composition: 'Бриошь, яйцо, ваниль, кленовый сироп, ягоды', price: 42000, calories: 420, image: 'https://images.unsplash.com/photo-1484723091739-30990ff50064?w=400&q=80', badges: ['halal'] },
  { id: 'b4', category: 'breakfast', name: 'Каша Боул', description: 'Питательный завтрак', composition: 'Овсяная каша, ягоды, банан, мёд, орехи', price: 38000, calories: 380, image: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=400&q=80', badges: ['vegan', 'halal'] },

  // Pastry
  { id: 'p1', category: 'pastry', name: 'Круассан', description: 'Свежая французская выпечка', composition: 'Слоёное тесто, масло', price: 18000, calories: 270, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80', badges: ['halal'] },
  { id: 'p2', category: 'pastry', name: 'Синнабон', description: 'Булочка с корицей', composition: 'Дрожжевое тесто, корица, крем-чиз глазурь', price: 22000, calories: 310, image: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&q=80', badges: ['halal', 'popular'] },
  { id: 'p3', category: 'pastry', name: 'Самса', description: 'Узбекская выпечка', composition: 'Слоёное тесто, баранина, лук', price: 15000, calories: 280, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', badges: ['halal', 'popular', 'spicy'] },

  // Desserts
  { id: 'd1', category: 'desserts', name: 'Чизкейк Нью-Йорк', description: 'Классический чизкейк', composition: 'Крем-чиз, сметана, печенье, ваниль', price: 45000, calories: 420, image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80', badges: ['halal', 'popular'] },
  { id: 'd2', category: 'desserts', name: 'Тирамису', description: 'Итальянский десерт', composition: 'Маскарпоне, савоярди, эспрессо, какао', price: 42000, calories: 380, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80', badges: ['halal'] },
  { id: 'd3', category: 'desserts', name: 'Вафли Бельгийские', description: 'Хрустящие вафли', composition: 'Вафельное тесто, ягоды, сливки, кленовый сироп', price: 48000, calories: 460, image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&q=80', badges: ['halal'] },

  // Drinks
  { id: 'dr1', category: 'drinks', name: 'Свежевыжатый сок', description: 'Апельсиновый или яблочный', composition: 'Свежие фрукты', price: 25000, calories: 110, image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=400&q=80', badges: ['vegan', 'halal'] },
  { id: 'dr2', category: 'drinks', name: 'Смузи Тропик', description: 'Тропический смузи', composition: 'Манго, банан, ананас, кокосовое молоко', price: 32000, calories: 220, image: 'https://images.unsplash.com/photo-1638176066959-9c67e3b0f0cc?w=400&q=80', badges: ['vegan', 'halal', 'popular'] },
  { id: 'dr3', category: 'drinks', name: 'Лимонад домашний', description: 'Освежающий напиток', composition: 'Лимон, мята, имбирь, мёд', price: 22000, calories: 80, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80', badges: ['vegan', 'halal'] },

  // Business Lunch
  { id: 'l1', category: 'lunch', name: 'Бизнес-ланч №1', description: 'Суп + основное + напиток', composition: 'Борщ, котлета с пюре, компот', price: 65000, calories: 750, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80', badges: ['halal', 'popular'] },
  { id: 'l2', category: 'lunch', name: 'Бизнес-ланч №2', description: 'Суп + основное + напиток', composition: 'Куриный суп, плов, чай', price: 65000, calories: 800, image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80', badges: ['halal'] },

  // Hot dishes
  { id: 'h1', category: 'hot', name: 'Плов по-узбекски', description: 'Традиционный узбекский плов', composition: 'Рис, баранина, морковь, лук, специи', price: 75000, calories: 620, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80', badges: ['halal', 'popular'] },
  { id: 'h2', category: 'hot', name: 'Лагман', description: 'Узбекский суп с лапшой', composition: 'Домашняя лапша, говядина, овощи, специи', price: 65000, calories: 540, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80', badges: ['halal', 'spicy'] },
  { id: 'h3', category: 'hot', name: 'Шашлык из курицы', description: 'Сочный куриный шашлык', composition: 'Куриное филе, маринад, овощи-гриль', price: 80000, calories: 490, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80', badges: ['halal', 'popular'] },

  // Salads
  { id: 's1', category: 'salads', name: 'Цезарь с курицей', description: 'Классический салат Цезарь', composition: 'Ромен, куриное филе, пармезан, гренки, соус', price: 55000, calories: 380, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80', badges: ['halal', 'popular'] },
  { id: 's2', category: 'salads', name: 'Греческий', description: 'Свежий греческий салат', composition: 'Помидоры, огурцы, перец, маслины, сыр фета', price: 45000, calories: 280, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80', badges: ['vegan', 'halal'] },

  // Vegan
  { id: 'v1', category: 'vegan', name: 'Боул Будды', description: 'Питательный веганский боул', composition: 'Киноа, авокадо, нут, овощи, тахини', price: 58000, calories: 420, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80', badges: ['vegan', 'halal', 'popular'] },
  { id: 'v2', category: 'vegan', name: 'Карри с нутом', description: 'Индийское карри', composition: 'Нут, кокосовое молоко, томаты, специи, рис', price: 52000, calories: 450, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80', badges: ['vegan', 'halal', 'spicy'] },

  // Seasonal
  { id: 'se1', category: 'seasonal', name: 'Клубничный смузи-боул', description: 'Сезонный летний боул', composition: 'Клубника, банан, гранола, мёд', price: 45000, calories: 320, image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&q=80', badges: ['vegan', 'halal', 'new'] },
  { id: 'se2', category: 'seasonal', name: 'Арбузный лимонад', description: 'Освежающий летний напиток', composition: 'Арбуз, лимон, мята, имбирь', price: 28000, calories: 90, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80', badges: ['vegan', 'halal', 'new'] },
]
