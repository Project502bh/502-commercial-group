export type Lang = 'en' | 'ar';

export interface Diffuser {
  id: string;
  model: string;
  connectivity: string;
  colors: string;
  priceUSD: number;
  coverage: string;
  descEn: string;
  descAr: string;
  category: 'commercial' | 'personal';
}

export interface Fragrance {
  id: number;
  nameEn: string;
  code: string;
  profile: string;
  topNotes: string;
  middleNotes: string;
  baseNotes: string;
  inspiration: string;
  concentration: 'Light' | 'Strong' | 'Low concentration' | 'Economy';
  family: string;
  hotelInspired: boolean;
}

export const diffusers: Diffuser[] = [
  {
    id: 'sp5000',
    model: 'SP5000-2.5L',
    connectivity: 'Bluetooth & WiFi',
    colors: 'Black',
    priceUSD: 100,
    coverage: '1000–5000 m²',
    category: 'commercial',
    descEn: 'High-capacity commercial diffuser with 2.5L tank, ideal for hotels, malls, and large lobbies. Smart IoT platform with app control.',
    descAr: 'موزع تجاري عالي الطاقة بخزان 2.5 لتر، مثالي للفنادق والمجمعات والبهوات الكبيرة. منصة IoT ذكية مع تحكم عبر التطبيق.',
  },
  {
    id: 'sp2000',
    model: 'SP2000',
    connectivity: 'Bluetooth & WiFi',
    colors: 'Black',
    priceUSD: 73,
    coverage: '500–2000 m²',
    category: 'commercial',
    descEn: 'Mid-range commercial scent diffuser with smart scheduling and remote management for offices and retail spaces.',
    descAr: 'موزع عطور تجاري متوسط المدى مع جدولة ذكية وإدارة عن بُعد للمكاتب والمحلات التجارية.',
  },
  {
    id: 'xp1000plus',
    model: 'XP1000 Plus',
    connectivity: 'Bluetooth & WiFi',
    colors: 'Black / Silver',
    priceUSD: 75,
    coverage: '200–1000 m²',
    category: 'commercial',
    descEn: 'Elegant slim design with dual connectivity. Perfect for boutique hotels, spas, and premium retail environments.',
    descAr: 'تصميم رفيع أنيق مع اتصال مزدوج. مثالي للفنادق البوتيك والمنتجعات الصحية وبيئات البيع بالتجزئة الراقية.',
  },
  {
    id: 'xp2000plus',
    model: 'XP2000 Plus',
    connectivity: 'Bluetooth',
    colors: 'Black / Silver',
    priceUSD: 80,
    coverage: '300–2000 m²',
    category: 'commercial',
    descEn: 'Professional-grade diffuser with Bluetooth management, designed for medium to large commercial spaces.',
    descAr: 'موزع من الدرجة الاحترافية مع إدارة بلوتوث، مصمم للمساحات التجارية المتوسطة والكبيرة.',
  },
  {
    id: 'ep500',
    model: 'EP500',
    connectivity: 'Bluetooth & WiFi',
    colors: 'Black / White',
    priceUSD: 30,
    coverage: '50–500 m²',
    category: 'personal',
    descEn: 'Compact smart diffuser for homes and small offices. Quiet operation with full app control and scheduling.',
    descAr: 'موزع ذكي مدمج للمنازل والمكاتب الصغيرة. تشغيل هادئ مع تحكم كامل عبر التطبيق والجدولة.',
  },
  {
    id: 'sp300',
    model: 'SP300',
    connectivity: 'Bluetooth & WiFi',
    colors: 'Black / White',
    priceUSD: 28,
    coverage: '30–300 m²',
    category: 'personal',
    descEn: 'Entry-level smart diffuser with modern design, ideal for bedrooms, small offices, and personal spaces.',
    descAr: 'موزع ذكي للمبتدئين بتصميم عصري، مثالي لغرف النوم والمكاتب الصغيرة والمساحات الشخصية.',
  },
  {
    id: 'ap30',
    model: 'AP30',
    connectivity: 'Bluetooth',
    colors: 'Black / Silver',
    priceUSD: 43,
    coverage: '30–200 m²',
    category: 'personal',
    descEn: 'Stylish personal diffuser with Bluetooth control. Sleek design fits any interior while delivering consistent fragrance.',
    descAr: 'موزع شخصي أنيق بتحكم بلوتوث. تصميم أنيق يناسب أي ديكور مع توصيل عطر متسق.',
  },
  {
    id: 'ap40',
    model: 'AP40',
    connectivity: 'Bluetooth & WiFi',
    colors: 'Black / Silver',
    priceUSD: 60,
    coverage: '50–400 m²',
    category: 'personal',
    descEn: 'Premium personal diffuser with dual connectivity, timer scheduling, and whisper-quiet ultrasonic technology.',
    descAr: 'موزع شخصي متميز مع اتصال مزدوج وجدولة بالمؤقت وتقنية فوق صوتية هادئة للغاية.',
  },
];

export const fragrances: Fragrance[] = [
  { id: 1, nameEn: 'Bali Citrus', code: '06.HF.0514-AS', profile: 'Citrus', topNotes: 'Grapefruit, Bali Citrus, Pear, Green Apple', middleNotes: 'Kumquat, Tea Tree Leaf, Petitgrain', baseNotes: 'Musk, Cedarwood', inspiration: 'Tropical evenings of Bali where citrus meets ocean breeze and soft musk.', concentration: 'Light', family: 'Citrus', hotelInspired: false },
  { id: 2, nameEn: 'Zen Tea', code: '06.HF.0516-AS', profile: 'Fresh Woody', topNotes: 'Lemon, Green Leaves, Green Tea, Lime', middleNotes: 'Jasmine, White Tea, Lily of the Valley, Rose', baseNotes: 'Musk, Ambergris, Amber, Wood', inspiration: 'Immersed in a misty tea mountain with light clouds and lush green tea fields.', concentration: 'Light', family: 'Fresh Woody', hotelInspired: false },
  { id: 3, nameEn: 'Westin White Tea', code: '06.HF.0517-AS', profile: 'Fresh Fruity', topNotes: 'Lemon, Peach, Apple, Tea', middleNotes: 'Rose, White Tea, Jasmine, Violet', baseNotes: 'Musk, Amber, Cedarwood', inspiration: 'The fresh aroma of white tea blends with fruity notes evoking tranquility.', concentration: 'Light', family: 'Fresh Fruity', hotelInspired: true },
  { id: 4, nameEn: 'Fresh White Tea', code: '06.HF.0518-AS', profile: 'Fresh Woody', topNotes: 'Lemon Oil, Green Leaves, Violet Leaves, Cucumber', middleNotes: 'Pu-erh Tea, Rose, Osmanthus, Jasmine', baseNotes: 'Musk, Amber, Balsam, Tea Sclareolide', inspiration: 'The captivating aroma of Pu-erh tea with morning dew and warm sunlight.', concentration: 'Light', family: 'Fresh Woody', hotelInspired: false },
  { id: 5, nameEn: 'Ritz-Carlton', code: '06.HF.0519-AS', profile: 'Floral Woody', topNotes: 'Lime, Violet Leaves, Mint, Bergamot', middleNotes: 'Rose, Lily of the Valley, Jasmine, White Tea, Green Bamboo', baseNotes: 'Musk, Ambergris, Sandalwood, Cypress Oil, Cedarwood', inspiration: 'Elegance of white florals merges with gentle warmth of wood — graceful and refined.', concentration: 'Light', family: 'Floral Woody', hotelInspired: true },
  { id: 6, nameEn: 'Kempinski', code: '06.HF.0520-AS', profile: 'Floral Fruity', topNotes: 'Citrus, Mint, Grapefruit, Red Apple, Pomegranate', middleNotes: 'Orchid, Jasmine, Osmanthus, Orange Blossom, Rose, Ocean', baseNotes: 'Cedarwood, Fir Wood, Vanilla, Amber, Musk', inspiration: 'Rich tropical fruits with oriental florals and marine elements painting a vibrant picture.', concentration: 'Light', family: 'Floral Fruity', hotelInspired: true },
  { id: 7, nameEn: 'IHG', code: '06.HF.0521-AS', profile: 'Floral Fruity', topNotes: 'Tuberose, Pink Pepper, Violet, Freesia, Red Berries', middleNotes: 'Peony, Rose, Lily, Lilac, Lily of the Valley, Geranium', baseNotes: 'Sandalwood, Patchouli, Musk, Cedarwood', inspiration: 'Rich elegant floral notes with warm sandalwood creating a comforting warm atmosphere.', concentration: 'Low concentration', family: 'Floral', hotelInspired: true },
  { id: 8, nameEn: 'Channel', code: '06.HF.0522-AS', profile: 'Oriental Woody', topNotes: 'Lemon Oil, Sweet Orange Oil, Grapefruit, Bergamot', middleNotes: 'Black Rose, Orange Blossom, Lily of the Valley, Vanilla', baseNotes: 'Tonka Bean, Ambergris, Sandalwood, Cedarwood, Cypress Oil', inspiration: 'Citrus freshness leads to enchanting florals, with tonka bean and wood elevating the evening.', concentration: 'Strong', family: 'Oriental Woody', hotelInspired: false },
  { id: 9, nameEn: 'Verbena (Jo Malone)', code: '06.HF.0523-AS', profile: 'Aromatic Citrus', topNotes: 'California Lemon Oil, Lime, Sweet Orange Oil', middleNotes: 'Verbena, Mint, Orange Blossom, Green Leaves', baseNotes: 'Musk, Orange Leaf, Amber', inspiration: 'A refreshing summer breeze with light cool rain — soothing and invigorating.', concentration: 'Light', family: 'Citrus', hotelInspired: false },
  { id: 10, nameEn: 'Tuberose', code: '06.HF.0524-AS', profile: 'Floral', topNotes: 'Orange Blossom, Iris, Rose', middleNotes: 'Tuberose, Pink Pepper', baseNotes: 'Benzoin, Musk', inspiration: 'Powdery creamy tuberose — captivating like a dancer under the spotlight.', concentration: 'Light', family: 'Floral', hotelInspired: false },
  { id: 11, nameEn: 'Norwegian Forest', code: '06.HF.0525-AS', profile: 'Fruity Woody', topNotes: 'Red Orange Oil, Peppermint, Pineapple, Bergamot, Raspberry', middleNotes: 'Rose Oil, Jasmine, Violet, Nutmeg, White Tea', baseNotes: 'Sandalwood, Ambergris, Lavender, Amber, Cedarwood, Fir Oil', inspiration: 'Fantastical fruity woody blend like Alice\'s Wonderland — captivating at every turn.', concentration: 'Light', family: 'Fruity Woody', hotelInspired: false },
  { id: 12, nameEn: 'Bluebell', code: '06.HF.0526-AS', profile: 'Green Floral', topNotes: 'Bluebell, Dew, Green Leaves, Lilac', middleNotes: 'Lily of the Valley, Peach, Lily, Gardenia', baseNotes: 'Musk, Powdery Notes, Amber', inspiration: 'Fresh green bluebell with soft florals and musk — smooth and refined.', concentration: 'Light', family: 'Floral', hotelInspired: false },
  { id: 13, nameEn: 'Oriental Heritage', code: '06.HF.0527-AS', profile: 'Oriental Woody', topNotes: 'Lemon, Peppermint, Peach, Coconut, Pu-erh Tea', middleNotes: 'Rose Oil, Jasmine, Gardenia, Violet, Cinnamon', baseNotes: 'Musk, Sandalwood, Ambergris, Chinese Cypress, Guaiac Wood', inspiration: 'Ancient courtyard atmosphere with deep serene woody tones — timeless Eastern charm.', concentration: 'Light', family: 'Oriental Woody', hotelInspired: false },
  { id: 14, nameEn: 'Blue Paria', code: '06.HF.0528-AS', profile: 'Aquatic Fougere', topNotes: 'Lemon, Peppermint, Basil Oil, Green Leaves', middleNotes: 'Rose, Ylang-Ylang, Violet, Fennel, Sea Water', baseNotes: 'Sandalwood, Ambergris, Oakmoss, Lavender', inspiration: 'Fresh, floral, oriental, and woody notes harmoniously blending layer by layer.', concentration: 'Light', family: 'Aquatic', hotelInspired: false },
  { id: 15, nameEn: 'Poison', code: '06.HF.0529-AS', profile: 'Oriental Floral', topNotes: 'Coriander, Plum, Raspberry, Blackberry, Brazilian Rosewood', middleNotes: 'Carnation, Jasmine, Orange Blossom, Tuberose, Cinnamon, Rose', baseNotes: 'Vetiver, Musk, Sandalwood, Cedarwood, Amber, Vanilla', inspiration: 'Sweet and spicy opening leads to rich florals with woody amber depth — unique and unforgettable.', concentration: 'Light', family: 'Oriental Floral', hotelInspired: false },
  { id: 16, nameEn: 'Blue', code: '06.HF.0530-AS', profile: 'Aromatic Woody', topNotes: 'Grapefruit, Lemon, Mint, Pink Pepper', middleNotes: 'Ginger, Nutmeg, Jasmine, Ambergris', baseNotes: 'Incense, Vetiver, Cedarwood, Sandalwood, Patchouli, Musk', inspiration: 'Spicy pink pepper with fresh citrus and cool mint — unique warmth from velvety amber.', concentration: 'Light', family: 'Woody', hotelInspired: false },
  { id: 17, nameEn: 'Lemongrass Green Tea', code: '06.HF.0531-AS', profile: 'Herbal Green', topNotes: 'Lemongrass, Citrus, Coconut, Green Leaves, Green Tea', middleNotes: 'Orange Blossom, Jasmine, Rose, Violet, White Tea', baseNotes: 'Musk, Sandalwood, Cypress, Ambergris', inspiration: 'Gentle spring breeze of citrus and green leaves, followed by garden florals in perfect harmony.', concentration: 'Light', family: 'Fresh Woody', hotelInspired: false },
  { id: 18, nameEn: 'Galaxy Macau', code: '06.HF.0532-AS', profile: 'Green Fresh', topNotes: 'Italian Lemon Oil, Lemongrass, Green Leaves, Mint', middleNotes: 'Jasmine, Lily of the Valley, Violet Leaf', baseNotes: 'Musk, Cypress, Fir, Ambergris', inspiration: 'Fresh lively opening of lemon and mint with soft white flowers and cool woody depth.', concentration: 'Light', family: 'Fresh Fruity', hotelInspired: true },
  { id: 19, nameEn: 'Westin', code: '06.HF.0533-AS', profile: 'Green Woody', topNotes: 'Lemon Oil, Blueberry, Mint', middleNotes: 'Rose Oil, Orange Blossom, Violet, White Tea', baseNotes: 'Musk, Amber, Fir Wood, Moss, Ambergris', inspiration: 'Delicate white tea with fresh blueberries and earthy notes — tea, fruit, floral and woody united.', concentration: 'Light', family: 'Fresh Woody', hotelInspired: true },
  { id: 20, nameEn: 'Marriott', code: '06.HF.0534-AS', profile: 'Floral Green', topNotes: 'Citrus, Apple, Green Leaves, Sweet Peach, Coconut', middleNotes: 'Jasmine, Osmanthus, Lily of the Valley, Rose, Violet', baseNotes: 'Musk, Cypress, Fir, Ambergris', inspiration: 'Refreshing citrus burst leads to a delicate floral bouquet with steady woody finish.', concentration: 'Light', family: 'Floral', hotelInspired: true },
  { id: 21, nameEn: 'Chance', code: '06.HF.0535-AS', profile: 'Floral Chypre', topNotes: 'Citrus, Pink Pepper, Pineapple, Hyacinth', middleNotes: 'Lemon, Jasmine, Rose, Iris', baseNotes: 'Patchouli, Musk, Vetiver, Vanilla', inspiration: 'Pineapple tanginess with patchouli wood and elegant florals — vibrant and poetic.', concentration: 'Light', family: 'Floral', hotelInspired: false },
  { id: 22, nameEn: 'Oriental Charm', code: '06.HF.0536-AS', profile: 'Oriental Woody', topNotes: 'California Lemon Oil, Sweet Orange, White Lemon, Green Leaves', middleNotes: 'Red Rose, Jasmine, Fennel, Nutmeg, Vanilla, Violet', baseNotes: 'Sandalwood, White Musk, Agarwood, Cedarwood, Ambergris', inspiration: 'Steady woody musk with citrus and warm spices — elegant, tranquil and mysterious Eastern charm.', concentration: 'Strong', family: 'Oriental Woody', hotelInspired: false },
  { id: 23, nameEn: 'Velvet Rose & Agarwood', code: '06.HF.0537-AS', profile: 'Oriental Floral', topNotes: 'Lychee, Honey, Candy Almond', middleNotes: 'Rose, Violet, Lilac, Mate Tea', baseNotes: 'Agarwood, Vanilla, Sandalwood, Cedarwood', inspiration: 'Rich sweet rose with lychee balanced by deep mysterious agarwood — velvety elegance.', concentration: 'Strong', family: 'Oriental Floral', hotelInspired: false },
  { id: 24, nameEn: 'Wyndham', code: '06.HF.0538-AS', profile: 'Fruity Floral', topNotes: 'Citrus, Peony, Grapefruit, Pineapple', middleNotes: 'Lily of the Valley, Rose, Creamy Note, Honey, Frankincense', baseNotes: 'Vanilla, Ebony Wood, Geranium Oil, Musk, Ambergris', inspiration: 'Refreshing fruity floral reminiscent of a tranquil serene orchard.', concentration: 'Light', family: 'Floral', hotelInspired: true },
  { id: 25, nameEn: 'Blue Enchantress', code: '06.HF.0539-AS', profile: 'Oriental Floral', topNotes: 'Raspberry, Pear, Orange, Mandarin, Lemon', middleNotes: 'Peony, Jasmine, Mandrake, Orange Blossom, Blue Rose', baseNotes: 'Patchouli, Musk, Vanilla, Ambergris, Oakmoss, Cedarwood', inspiration: 'Full-bodied floral with romantic charm gradually enveloping in mysterious oriental notes.', concentration: 'Strong', family: 'Oriental Floral', hotelInspired: false },
  { id: 26, nameEn: 'Dior Icepoint', code: '06.HF.0540-AS', profile: 'Woody Fougere', topNotes: 'California Lemon Oil, Green Leaves, Ocean, Grapefruit', middleNotes: 'Rose, Jasmine, Nutmeg, Lavender, Clove', baseNotes: 'Sandalwood, Ambergris, Cypress, Oakmoss, Patchouli', inspiration: 'Refreshing marine essence with layered woody masculine allure and subtle sensuality.', concentration: 'Strong', family: 'Woody', hotelInspired: false },
  { id: 27, nameEn: 'French Quarter', code: '06.HF.0541-AS', profile: 'Fougere', topNotes: 'Lemon Oil, Lavender, Mint, Sea Breeze', middleNotes: 'Pink Pepper, Gardenia, Patchouli, Cinnamon', baseNotes: 'Fir, Cedarwood, Incense, Ambergris, Cypress', inspiration: 'Lemon and mint breeze with warm spices and rich woody aroma — the scent of a true gentleman.', concentration: 'Strong', family: 'Woody', hotelInspired: false },
  { id: 28, nameEn: 'Black Burberry', code: '06.HF.0542-AS', profile: 'Floral Oriental', topNotes: 'Peach, Cardamom, Black Currant, Strawberry, Apple', middleNotes: 'Peach, Rose, Violet, Pink Pepper', baseNotes: 'Amber, Patchouli, Vanilla, Ambergris', inspiration: 'Sweet peach and cardamom with jasmine and violet anchored by intense amber and patchouli.', concentration: 'Strong', family: 'Oriental Floral', hotelInspired: false },
  { id: 29, nameEn: 'Coco Mademoiselle', code: '06.HF.0543-AS', profile: 'Floral Oriental', topNotes: 'Orange, Tangerine, Lemon, Orange Blossom', middleNotes: 'Rose, Jasmine, Mimosa, Ylang-Ylang, Patchouli', baseNotes: 'Musk, Vanilla, Vetiver, Tonka Bean, Myrrh', inspiration: 'Delicate sensual rose with patchouli bitterness and earthy vetiver — far from ordinary florals.', concentration: 'Strong', family: 'Oriental Floral', hotelInspired: false },
  { id: 30, nameEn: 'Four Seasons Hotel', code: '06.HF.0544-AS', profile: 'Fruity Floral', topNotes: 'Sweet Orange, Lemon, Pineapple, Freesia', middleNotes: 'Rose, Lily of the Valley, Lily, Apple, Orange Blossom', baseNotes: 'Ambergris, Tonka Musk, Amber, Musk', inspiration: 'Crisp citrus with rich florals — like stepping into a city where flowers bloom all year.', concentration: 'Light', family: 'Floral', hotelInspired: true },
  { id: 31, nameEn: "Victoria's Secret", code: '06.HF.0545-AS', profile: 'Fruity Floral', topNotes: 'Peach, Cherry Blossom, Red Apple, Green Mint', middleNotes: 'Lilac, Jasmine, Lily of the Valley, Water', baseNotes: 'Tamarind, Musk, Fir', inspiration: 'Vibrant fruitiness leads to delicate florals with woody stability evoking summer night serenity.', concentration: 'Strong', family: 'Floral', hotelInspired: false },
  { id: 32, nameEn: 'Green Bamboo', code: '06.HF.0547-AS', profile: 'Fresh Floral', topNotes: 'Sweet Orange, Green Apple, Green Leaves, Jasmine', middleNotes: 'Rose, Green Bamboo, Lily, Lily of the Valley, Tea', baseNotes: 'Amber, Musk, Ambergris, Sandalwood, Cedarwood', inspiration: 'Serene lush bamboo forest evoking Zen-like tranquility with gentle lily and lily of the valley.', concentration: 'Light', family: 'Fresh Fruity', hotelInspired: false },
  { id: 33, nameEn: 'New White Tea', code: '06.HF.0548-AS', profile: 'Fresh Woody', topNotes: 'Lemon, Tea Leaves, Artemisia, Coriander', middleNotes: 'Lily of the Valley, White Tea, Cardamom, Rose', baseNotes: 'Musk, Amber, Sandalwood, Cedarwood, Mate Tea', inspiration: 'Vintage Oriental garden with lush greenery, vibrant blooms, and lingering tea aroma.', concentration: 'Light', family: 'Fresh Woody', hotelInspired: false },
  { id: 34, nameEn: 'Gardenia Bliss', code: '06.HF.0549-AS', profile: 'Floral', topNotes: 'Green Leaves, Mint, Green Tea, Green Apple', middleNotes: 'Gardenia, Jasmine, Night-Blooming Cereus, Ylang-Ylang, White Tea', baseNotes: 'Wintergreen Oil, Musk, Vanilla, Sandalwood, Ambergris', inspiration: 'Morning mist freshness leads to blooming sea of gardenia — gentle yet profound.', concentration: 'Strong', family: 'Floral', hotelInspired: false },
  { id: 35, nameEn: 'Midsummer Dream', code: '06.HF.0550-AS', profile: 'Floral Fruity', topNotes: 'Pineapple, Passion Fruit, Lemon', middleNotes: 'Freesia, Peach, Peony', baseNotes: 'Amber, Musk, Cedarwood', inspiration: 'Juicy pineapple and passion fruit with warm amber musk evoking sun-kissed skin.', concentration: 'Light', family: 'Floral', hotelInspired: false },
  { id: 36, nameEn: 'White Tea', code: '06.HF.0551-AS', profile: 'Fresh Woody', topNotes: 'Lemon Oil, Brazilian Sweet Orange, Orange Blossom, Tea', middleNotes: 'White Tea, Rose, Jasmine, Violet, Lily of the Valley', baseNotes: 'Musk, Ambergris, Cashmere Wood, Tea Squalene', inspiration: 'Tranquil elegance of white tea — soft, gentle, and serene Oriental charm.', concentration: 'Light', family: 'Fresh Woody', hotelInspired: false },
  { id: 37, nameEn: 'Shangri-La', code: '06.HF.0498-AS', profile: 'Oriental Woody', topNotes: 'California Lemon Oil, Sweet Orange, White Lemon, Green Leaves', middleNotes: 'Red Rose, Jasmine, Caraway, Nutmeg, Vanilla, Violet', baseNotes: 'Sandalwood, White Musk, Agarwood, Cedarwood, Ambergris', inspiration: 'Sandalwood and agarwood offer refined tranquil essence — profound and contemplative.', concentration: 'Strong', family: 'Oriental Woody', hotelInspired: true },
  { id: 38, nameEn: 'Black Opium', code: '06.HF.0499-AS', profile: 'Gourmand Oriental', topNotes: 'Pink Pepper, Citrus, Pear, Black Currant', middleNotes: 'Orange Blossom, Tuberose, Jasmine, Coffee, Red Rose', baseNotes: 'Musk, Vanilla, Patchouli, Cashmere Wood, Cedarwood', inspiration: 'Sweet fruit with bitter coffee and alluring rose — vanilla and warm wood add sophistication.', concentration: 'Strong', family: 'Oriental Woody', hotelInspired: false },
  { id: 39, nameEn: 'Lifelong Waters', code: '06.HF.0502-AS', profile: 'Aquatic Floral', topNotes: 'Lotus, Freesia, White Rose, Cucumber', middleNotes: 'Lily of the Valley, Lily, Carnation, Peony', baseNotes: 'Cedarwood, Tuberose, Musk', inspiration: 'Rich floral notes blending seamlessly — sensual, captivating, and irresistibly seductive.', concentration: 'Light', family: 'Aquatic', hotelInspired: false },
  { id: 40, nameEn: 'Arden Green Tea', code: '06.HF.0501-AS', profile: 'Aromatic Citrus', topNotes: 'Lemon Verbena, Galangal, Rhubarb, Lemon, Orange', middleNotes: 'Mint, Jasmine, Carnation, Caraway', baseNotes: 'Amber, Oakmoss, Musk', inspiration: 'Natural green tea with citrus — refreshing as if you just peeled an orange.', concentration: 'Light', family: 'Citrus', hotelInspired: false },
  { id: 41, nameEn: 'Venetian', code: '06.HF.0500-AS', profile: 'Citrus Fruity', topNotes: 'Red Apple, Grapefruit, Sweet Orange Oil, Lime', middleNotes: 'Orange Blossom, Rose Oil, Peach, Pear, Pineapple', baseNotes: 'Amber, Vanilla, Violet, Musk', inspiration: 'Lazy sweet dream of rich orange and tropical fruits — pleasing and uplifting.', concentration: 'Light', family: 'Citrus', hotelInspired: false },
  { id: 42, nameEn: 'Park Hyatt', code: '06.HF.0503-AS', profile: 'Floral Fruity', topNotes: 'Lemon, Citrus, Green Leaves, Sweet Orange, Peach', middleNotes: 'Rose Oil, Orange Blossom, Violet, Black Currant, Black Tea', baseNotes: 'Musk, Amber, White Cedarwood, Moss, Ambergris', inspiration: 'Vibrant orchard freshness leads to a romantic rose garden with mysterious forest afterglow.', concentration: 'Light', family: 'Floral', hotelInspired: true },
  { id: 43, nameEn: 'Classic White Tea B', code: '06.HT.0046', profile: 'Woody Floral', topNotes: 'Lemon Oil, Tea Leaves, Artemisia, Bergamot', middleNotes: 'Orange Blossom, Tea, Coriander, Rose, Jasmine', baseNotes: 'Ambergris, Amber, Musk, Woody Notes', inspiration: 'Fresh citrus and green tea leaves with delicate florals and long-lasting tea aftertaste.', concentration: 'Light', family: 'Fresh Woody', hotelInspired: false },
  { id: 44, nameEn: 'R664 Classic White Tea', code: '06.HT.0081', profile: 'Oriental Woody', topNotes: 'Lemon oil, Sweet orange oil, Tea, Grapefruit, Bergamot', middleNotes: 'Rose, Ylang-ylang, Black tea, Coriander, Cardamom', baseNotes: 'Woody, Ambergris, Amber, Musk, Sandalwood', inspiration: 'Citrus, green, floral, and tea notes capturing elegance shaped by time.', concentration: 'Light', family: 'Oriental Woody', hotelInspired: false },
  { id: 45, nameEn: 'Chimelong Hotel Black Tea', code: '06.HT.0058', profile: 'Green Tea', topNotes: 'Green Leaves, Lime, Green Apple, White Tea, Green Tea', middleNotes: 'Rose, Lily of the Valley, Peach Blossom, Violet, Honey', baseNotes: 'Sea Musk, Ocean, Black Tea, Sandalwood, Amber', inspiration: 'Deep rich black tea with smooth mellow aroma — lively yet refined atmosphere.', concentration: 'Light', family: 'Fresh Woody', hotelInspired: true },
  { id: 46, nameEn: 'Incanto Shine', code: '06.PF.0014', profile: 'Floral Fruity', topNotes: 'Pineapple, Passion Fruit, Bergamot', middleNotes: 'Freesia, Peach, Peony', baseNotes: 'Amber, Musk, Cedar', inspiration: 'Skin bathed in warmth of sunlight — warm white cedarwood, amber, and musk.', concentration: 'Light', family: 'Floral', hotelInspired: false },
  { id: 47, nameEn: 'Secret Wish', code: '06.PF.0011', profile: 'Fruity Floral', topNotes: 'Lemon, Cantaloupe, Peach, Marigold', middleNotes: 'Pineapple, Black Currant, Floral Notes', baseNotes: 'Cedarwood, Musk, Amber, Sandalwood', inspiration: 'Refreshing lemon leads to pineapple and currant dance — lingering charm of twilight.', concentration: 'Light', family: 'Floral', hotelInspired: false },
  { id: 48, nameEn: 'Love is Heavenly', code: '06.PF.0015', profile: 'Oriental Floral', topNotes: 'Lemon Verbena, Camellia, Cranberry', middleNotes: 'Damascus Rose, Rose, Frankincense', baseNotes: 'Cypress, Musk, Vanilla, Amber, Ambergris', inspiration: 'Blooming rose garden heart with amber and woody base adding allure and sensuality.', concentration: 'Strong', family: 'Oriental Floral', hotelInspired: false },
  { id: 49, nameEn: 'Upscale Cologne B', code: '06.PF.0152', profile: 'Oriental', topNotes: 'Orange, Basil, Violet Leaf, Bergamot', middleNotes: 'Nutmeg, Cinnamon, Pink Pepper, Cardamom, Lavender', baseNotes: 'Musk, Sandalwood, Woody Incense, Vetiver', inspiration: 'Crisp citrus with cinnamon sophistication and grounding woody comfort — refined and reassuring.', concentration: 'Strong', family: 'Woody', hotelInspired: false },
  { id: 50, nameEn: 'Wild Bluebell', code: '06.PF.0156', profile: 'Green Leaf Aquatic', topNotes: 'Bellflower, Clove, Cucumber', middleNotes: 'Jasmine, Lily of the Valley, Wild Rosehip, Cold Water', baseNotes: 'Musk, Amber, Ocean, Fraser Fir', inspiration: 'Morning orchard citrus leads to pure airy bellflower under a blue sky — healing and enchanting.', concentration: 'Light', family: 'Aquatic', hotelInspired: false },
  { id: 51, nameEn: 'Ji Hotel Zen Tea', code: '06.BP.0027', profile: 'Woody Green', topNotes: 'Citrus, Red Apple, Geranium', middleNotes: 'Chinese Tea, Jasmine, Rose, Cardamom', baseNotes: 'Ambergris, Sandalwood, Incense, Powder', inspiration: 'Fresh tea leaves with jasmine and rose — warm woody undertones like first rays of morning sunlight.', concentration: 'Light', family: 'Fresh Woody', hotelInspired: true },
  { id: 52, nameEn: 'Four Seasons Rose', code: '03.A.525', profile: 'Floral Fruity', topNotes: 'Bergamot, Citrus, Rose Leaf, White Tea', middleNotes: 'Rose, Jasmine, Cardamom, Anise', baseNotes: 'Musk, Ambergris, Sandalwood, Vanilla', inspiration: 'Rich rose paired with lemon — April sunshine warmth creating light uplifting atmosphere.', concentration: 'Low concentration', family: 'Floral', hotelInspired: true },
  { id: 53, nameEn: 'Roman Holiday', code: '03.A.520', profile: 'Citrus Fruity', topNotes: 'Grapefruit, Bergamot, Sweet Orange, Lemon Verbena', middleNotes: 'Pineapple, Peach, Pear, Orange Blossom', baseNotes: 'Musk, Amber, Cedarwood, Sandalwood', inspiration: 'Serene orchard in the heart of Rome — sweet fragrant dream carried by the holiday breeze.', concentration: 'Light', family: 'Citrus', hotelInspired: false },
  { id: 54, nameEn: 'Night-Blooming Jasmine', code: '06.Q.0020', profile: 'Floral', topNotes: 'Orange Blossom, Iris, Rose', middleNotes: 'Night-Blooming Jasmine, Pink Pepper', baseNotes: 'Benzoin, Musk', inspiration: 'Gentle jasmine with powdery notes — soft like water with refined allure balancing purity and seduction.', concentration: 'Low concentration', family: 'Floral', hotelInspired: false },
  // Economy series
  { id: 55, nameEn: 'Westin White Tea (Economy)', code: '06.HF.0546-AS', profile: 'Green Fruity', topNotes: 'Lemon, Peach, Apple, Tea', middleNotes: 'Rose, White Tea, Jasmine, Violet', baseNotes: 'Musk, Amber, Cedarwood', inspiration: 'Soft and elegant white tea aroma — a gentle inhale disperses all worries.', concentration: 'Economy', family: 'Fresh Fruity', hotelInspired: true },
  { id: 56, nameEn: 'Verbena (Economy)', code: '06.HF.0552-AS', profile: 'Aromatic Citrus', topNotes: 'California Lemon Oil, Lime, Sweet Orange Oil', middleNotes: 'Verbena, Mint, Orange Blossom, Green Leaves', baseNotes: 'Musk, Orange Leaf, Amber', inspiration: 'Refreshing summer breeze with light cool rain — crisp, soothing, and cooling.', concentration: 'Economy', family: 'Citrus', hotelInspired: false },
  { id: 57, nameEn: 'Blue (Economy)', code: '06.HF.0553-AS', profile: 'Aromatic Woody', topNotes: 'Grapefruit, Lemon, Mint, Pink Pepper', middleNotes: 'Ginger, Nutmeg, Jasmine, Ambergris', baseNotes: 'Incense, Vetiver, Cedarwood, Sandalwood, Patchouli, Musk', inspiration: 'Spicy pink pepper with fresh citrus and velvety amber warmth — invigorating and comforting.', concentration: 'Economy', family: 'Woody', hotelInspired: false },
  { id: 58, nameEn: 'Shangri-La (Economy)', code: '06.HF.0554-AS', profile: 'Oriental Woody', topNotes: 'California Lemon Oil, Sweet Orange, White Lemon, Green Leaves', middleNotes: 'Red Rose, Jasmine, Caraway, Nutmeg, Vanilla, Violet', baseNotes: 'Sandalwood, White Musk, Agarwood, Cedarwood, Ambergris', inspiration: 'Serene elegance and quiet sophistication — tranquility and timeless allure.', concentration: 'Economy', family: 'Oriental Woody', hotelInspired: true },
  { id: 59, nameEn: 'Zen Tea (Economy)', code: '06.HF.0555-AS', profile: 'Green Woody', topNotes: 'Lemon, Green Leaves, Green Tea, Lime', middleNotes: 'Jasmine, White Tea, Lily of the Valley, Rose', baseNotes: 'Musk, Ambergris, Amber, Wood', inspiration: 'Mist-covered tea mountain with green tea and jasmine — tranquility and mindfulness.', concentration: 'Economy', family: 'Fresh Woody', hotelInspired: false },
  { id: 60, nameEn: 'Miss COCO (Economy)', code: '06.HF.0556-AS', profile: 'Floral Oriental', topNotes: 'Orange, Mandarin, Lemon, Orange Blossom', middleNotes: 'Rose, Jasmine, Mimosa, Ylang-Ylang, Patchouli', baseNotes: 'Musk, Vanilla, Vetiver, Tonka Bean, Myrrh', inspiration: 'Intriguing and sophisticated — far from typical sweet florals.', concentration: 'Economy', family: 'Oriental Floral', hotelInspired: false },
  { id: 61, nameEn: 'Poison (Economy)', code: '06.HF.0557-AS', profile: 'Oriental Floral', topNotes: 'Coriander, Plum, Raspberry, Blackberry, Brazilian Rosewood', middleNotes: 'Carnation, Jasmine, Orange Blossom, Tuberose, Cinnamon, Rose', baseNotes: 'Vetiver, Musk, Sandalwood, Cedar, Amber, Vanilla', inspiration: 'Spicy opening with rich florals and deep woody amber — unique and unforgettable.', concentration: 'Economy', family: 'Oriental Floral', hotelInspired: false },
  { id: 62, nameEn: 'Blue Ocean (Economy)', code: '06.HF.0558-AS', profile: 'Aquatic', topNotes: 'Lemon, Lavender, Hyacinth', middleNotes: 'Sea Water, Rose, Grapefruit, Orange Blossom', baseNotes: 'Sandalwood, Amber, Ambroxan', inspiration: 'Sunlight through sea surface — profound blue from light to deep, mysterious and captivating.', concentration: 'Economy', family: 'Aquatic', hotelInspired: false },
  { id: 63, nameEn: 'Green Tea (Economy)', code: '06.HF.0559-AS', profile: 'Citrus Green', topNotes: 'Lemon, Lime, Grapefruit, Bitter Orange Leaf', middleNotes: 'Orange Blossom, Tea Leaf, Green Tea, Bamboo, Jasmine', baseNotes: 'Musk, Birch, Cedarwood', inspiration: 'Like a cup of green tea — natural, pure, and soothing aura.', concentration: 'Economy', family: 'Fresh Woody', hotelInspired: false },
  { id: 64, nameEn: 'White Tea (Economy)', code: '06.HF.0560-AS', profile: 'Green Woody', topNotes: 'Lemon Oil, Brazilian Sweet Orange, Orange Blossom, Tea', middleNotes: 'White Tea, Rose, Jasmine, Violet, Lily of the Valley', baseNotes: 'Musk, Ambergris, Cashmere Wood, Tea Saponin', inspiration: 'Serene simplicity — elegant tea fragrance with subtle sophistication and tranquil Oriental character.', concentration: 'Economy', family: 'Fresh Woody', hotelInspired: false },
];

export const fragranceFamilies = ['All', 'Citrus', 'Floral', 'Fresh Woody', 'Fresh Fruity', 'Oriental Woody', 'Oriental Floral', 'Woody', 'Aquatic', 'Floral Fruity'];
export const concentrations = ['All', 'Light', 'Strong', 'Low concentration', 'Economy'];

// ── 502 Group Corporate Content ─────────────────────────────────────────────
export const group502 = {
  taglineEn: 'Engineering the Future, Empowering Brands',
  taglineAr: 'نهندس المستقبل ونمكّن العلامات التجارية',
  aboutEn: '502 Commercial Group is a premier investment and management entity designed to be the core engine and strategic catalyst for promising, emerging brands. We do more than just manage businesses; we build an integrated ecosystem that incubates innovative ideas and ambitious projects — providing the essential infrastructure, strategic guidance, and cutting-edge technological solutions needed to accelerate growth and establish a strong foothold in competitive markets.',
  aboutAr: 'مجموعة 502 التجارية كيان استثماري وإداري متميز مصمم ليكون المحرك الأساسي والمحفز الاستراتيجي للعلامات التجارية الواعدة والناشئة. نحن لا ندير الأعمال فحسب؛ بل نبني منظومة متكاملة تحتضن الأفكار المبتكرة والمشاريع الطموحة، ونوفر البنية التحتية الأساسية والتوجيه الاستراتيجي والحلول التكنولوجية المتطورة اللازمة لتسريع النمو.',
  visionEn: 'To be the most advanced and innovative investment and management platform — the ultimate destination for transforming emerging brands into industry leaders by anticipating the future and adopting the latest technological and management practices.',
  visionAr: 'أن نكون المنصة الاستثمارية والإدارية الأكثر تطوراً وابتكاراً — الوجهة المثلى لتحويل العلامات التجارية الناشئة إلى رواد الصناعة من خلال استشراف المستقبل واعتماد أحدث الممارسات التكنولوجية والإدارية.',
  missionEn: 'To empower and guide our diverse portfolio of brands by providing strategic leadership, operational innovation, and advanced technology and marketing support. We are dedicated to ensuring sustainable growth, mitigating risks, and maximizing the return on investment for every brand under our umbrella.',
  missionAr: 'تمكين وتوجيه محفظتنا المتنوعة من العلامات التجارية من خلال توفير القيادة الاستراتيجية والابتكار التشغيلي ودعم التكنولوجيا والتسويق المتقدم. نحن ملتزمون بضمان النمو المستدام وتخفيف المخاطر وتعظيم العائد على الاستثمار.',
  values: [
    { icon: '🔭', en: 'Future-Focused', ar: 'التوجه نحو المستقبل', descEn: 'We embrace proactive thinking and leverage modern technology to build businesses capable of meeting tomorrow\'s challenges.', descAr: 'نتبنى التفكير الاستباقي ونستفيد من التكنولوجيا الحديثة لبناء أعمال قادرة على مواجهة تحديات الغد.' },
    { icon: '🔗', en: 'Synergy', ar: 'التآزر', descEn: 'We create an interconnected environment where every brand benefits from the collective expertise and resources of the Group.', descAr: 'نخلق بيئة مترابطة تستفيد فيها كل علامة تجارية من الخبرة الجماعية وموارد المجموعة.' },
    { icon: '⚡', en: 'Empowerment', ar: 'التمكين', descEn: 'We equip emerging brands with the tools, knowledge, and space they need to thrive and scale effectively.', descAr: 'نزوّد العلامات التجارية الناشئة بالأدوات والمعرفة والمساحة التي تحتاجها للازدهار والتوسع.' },
    { icon: '🚀', en: 'Agility & Innovation', ar: 'الرشاقة والابتكار', descEn: 'We adapt quickly to market dynamics and pioneer unconventional solutions to ensure our projects consistently excel.', descAr: 'نتكيف بسرعة مع ديناميكيات السوق ونريد حلولاً غير تقليدية لضمان التميز المستمر.' },
  ],
};

export const brands = [
  {
    id: 'amos-aroma',
    name: 'Amos Aroma',
    taglineEn: 'Smart Scent Technology',
    taglineAr: 'تكنولوجيا التعطير الذكي',
    descEn: 'Guangdong Amos Intelligent Equipment Co., Ltd. — manufacturer of premium IoT-enabled scent diffusers and 64 signature fragrance oils. 502 Commercial Group holds the exclusive distribution rights for Bahrain.',
    descAr: 'شركة Amos الذكية لإنتاج الأجهزة الكهربائية — مصنّعة أجهزة التعطير الذكية وزيوت عطرية فاخرة. تمتلك مجموعة 502 التجارية حقوق التوزيع الحصري في البحرين.',
    logo: '/logo-amos.png',
    color: '#00E6F7',
    active: true,
    tags: ['IoT Diffusers', 'Fragrance Oils', 'Smart Home', 'Hospitality'],
  },
  {
    id: 'coming-soon-1',
    name: 'Brand 02',
    taglineEn: 'Coming Soon',
    taglineAr: 'قريباً',
    descEn: 'The next brand in the 502 Commercial Group portfolio is under development.',
    descAr: 'العلامة التجارية القادمة في محفظة مجموعة 502 التجارية قيد التطوير.',
    logo: null,
    color: '#254663',
    active: false,
    tags: ['In Development'],
  },
  {
    id: 'coming-soon-2',
    name: 'Brand 03',
    taglineEn: 'Coming Soon',
    taglineAr: 'قريباً',
    descEn: 'Expanding the portfolio with curated brands that align with our vision.',
    descAr: 'توسيع المحفظة بعلامات تجارية مختارة تتماشى مع رؤيتنا.',
    logo: null,
    color: '#254663',
    active: false,
    tags: ['In Development'],
  },
];

export const translations = {
  en: {
    brand: '502 Commercial Group',
    tagline: 'Engineering the Future, Empowering Brands',
    nav: { home: 'Home', about: 'About', brands: 'Brands', contact: 'Contact', diffusers: 'Diffusers', fragrances: 'Fragrances', lifestyle: 'Lifestyle' },
    hero: {
      title: 'Elevate Every Space with Scent',
      subtitle: 'Premium smart scent diffusers and 64 signature fragrance oils — crafted for luxury hotels, offices, and discerning homes.',
      cta1: 'Explore Diffusers',
      cta2: 'Browse Fragrances',
    },
    diffusers: {
      title: 'Smart IoT Diffusers',
      subtitle: 'Professionally engineered scent systems with Bluetooth & WiFi control — from personal spaces to luxury hotel lobbies.',
      commercial: 'Commercial',
      personal: 'Personal',
      connectivity: 'Connectivity',
      coverage: 'Coverage',
      inquire: 'Request Quote',
    },
    fragrances: {
      title: 'Fragrance Oil Library',
      subtitle: '64 signature scents inspired by world-class hotels, designer perfumes, and nature\'s finest moments.',
      filterFamily: 'Fragrance Family',
      filterConc: 'Concentration',
      hotelInspired: 'Hotel Inspired',
      topNotes: 'Top Notes',
      middleNotes: 'Middle Notes',
      baseNotes: 'Base Notes',
      inspiration: 'Inspiration',
      all: 'All',
    },
    lifestyle: {
      title: 'Lifestyle & Accessories',
      subtitle: 'Curated home fragrance products for personal use and gifting.',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Request a quote, ask about bulk orders, or schedule a demonstration.',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      type: 'Inquiry Type',
      typeOptions: ['B2C — Personal Purchase', 'B2B — Wholesale / Bulk', 'Hotel / Corporate Project', 'Distributor Inquiry'],
      message: 'Message',
      send: 'Send Inquiry',
    },
    footer: {
      rights: 'All rights reserved.',
      distributor: 'Exclusive Distributor for Bahrain',
    },
  },
  ar: {
    brand: 'مجموعة 502 التجارية',
    tagline: 'الموزع الحصري لـ Amos Aroma — البحرين',
    nav: { home: 'الرئيسية', about: 'من نحن', brands: 'علاماتنا', diffusers: 'أجهزة التعطير', fragrances: 'مكتبة العطور', lifestyle: 'منتجات الأفراد', contact: 'تواصل معنا' },
    hero: {
      title: 'ارتقِ بكل مكان برائحة استثنائية',
      subtitle: 'أجهزة تعطير ذكية متطورة و64 نوعاً من الزيوت العطرية الفاخرة — مصممة للفنادق الراقية والمكاتب والمنازل المميزة.',
      cta1: 'استكشف الأجهزة',
      cta2: 'تصفح العطور',
    },
    diffusers: {
      title: 'أجهزة التعطير الذكية',
      subtitle: 'أنظمة تعطير احترافية بتحكم Bluetooth و WiFi — من المساحات الشخصية إلى بهوات الفنادق الفاخرة.',
      commercial: 'تجاري',
      personal: 'شخصي',
      connectivity: 'الاتصال',
      coverage: 'التغطية',
      inquire: 'طلب عرض سعر',
    },
    fragrances: {
      title: 'مكتبة الزيوت العطرية',
      subtitle: '64 عطراً مميزاً مستوحى من أفخم فنادق العالم وأرقى العطور الفرنسية ولحظات الطبيعة الساحرة.',
      filterFamily: 'العائلة العطرية',
      filterConc: 'التركيز',
      hotelInspired: 'مستوحى من الفنادق',
      topNotes: 'النوتات الافتتاحية',
      middleNotes: 'نوتات القلب',
      baseNotes: 'النوتات القاعدية',
      inspiration: 'الإلهام',
      all: 'الكل',
    },
    lifestyle: {
      title: 'منتجات الأفراد والهدايا',
      subtitle: 'منتجات عطرية منزلية مختارة بعناية للاستخدام الشخصي والهدايا.',
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'اطلب عرض سعر أو استفسر عن الطلبات بالجملة أو جدول عرضاً توضيحياً.',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      type: 'نوع الاستفسار',
      typeOptions: ['أفراد — شراء شخصي', 'شركات — جملة / كميات كبيرة', 'فندق / مشروع مؤسسي', 'استفسار موزعين'],
      message: 'الرسالة',
      send: 'إرسال الاستفسار',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      distributor: 'الموزع الحصري للبحرين',
    },
  },
};
