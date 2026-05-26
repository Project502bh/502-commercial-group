'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { translations, type Lang } from '@/lib/data';

const products = [
  {
    id: 'candles',
    icon: '🕯️',
    titleEn: 'Luxury Scented Candles',
    titleAr: 'الشموع العطرية الفاخرة',
    descEn: 'Hand-poured soy wax candles infused with Amos signature fragrances. Burn time 40–60 hours. Available in elegant glass vessels.',
    descAr: 'شموع شمع الصويا المصبوبة يدوياً والمشبعة بعطور Amos المميزة. وقت الاحتراق 40–60 ساعة. متوفرة في أوانٍ زجاجية أنيقة.',
    available: ['Westin White Tea', 'Ritz-Carlton', 'Shangri-La', 'Oriental Heritage'],
    badge: 'New Arrival',
  },
  {
    id: 'reed',
    icon: '🪷',
    titleEn: 'Reed Diffusers',
    titleAr: 'معطرات الأعواد',
    descEn: 'Premium rattan reed diffusers with 150ml fragrance oil. Lasting 2–3 months of continuous fragrance. Ideal for home and office.',
    descAr: 'معطرات أعواد راتان فاخرة مع 150مل زيت عطري. عطر مستمر لمدة 2–3 أشهر. مثالية للمنزل والمكتب.',
    available: ['Zen Tea', 'Kempinski', 'Galaxy Macau', 'Green Bamboo'],
    badge: 'Best Seller',
  },
  {
    id: 'car',
    icon: '🚗',
    titleEn: 'Car Fragrance Cards',
    titleAr: 'بطاقات تعطير السيارات',
    descEn: 'Premium scented cards designed for car air vents. Long-lasting fragrance up to 30 days. Available in 8 signature scents.',
    descAr: 'بطاقات معطرة فاخرة مصممة لفتحات تهوية السيارة. عطر دائم حتى 30 يوماً. متوفرة بـ8 عطور مميزة.',
    available: ['Verbena', 'Blue', 'Bali Citrus', 'Norwegian Forest'],
    badge: 'Popular',
  },
  {
    id: 'gift',
    icon: '🎁',
    titleEn: 'Gift Sets',
    titleAr: 'طقم الهدايا',
    descEn: 'Curated gift sets combining candles, reed diffusers, and car cards. Perfect for corporate gifting, Eid, and special occasions.',
    descAr: 'طقم هدايا منتقاة تجمع الشموع ومعطرات الأعواد وبطاقات السيارة. مثالية للهدايا المؤسسية والعيد والمناسبات الخاصة.',
    available: ['Custom Selection', 'Hotel Experience Set', 'Oriental Collection'],
    badge: 'Corporate',
  },
  {
    id: 'testers',
    icon: '🧪',
    titleEn: 'Fragrance Sample Kit',
    titleAr: 'طقم العينات العطرية',
    descEn: '10-piece sampler set with Amos bestselling fragrance oils (2ml each). Perfect for discovering your signature scent before purchasing.',
    descAr: 'طقم مكون من 10 عينات من أفضل الزيوت العطرية من Amos (2مل لكل منها). مثالي لاستكشاف عطرك المميز قبل الشراء.',
    available: ['Hotel Collection', 'Oriental Collection', 'Citrus Collection'],
    badge: 'Discovery',
  },
  {
    id: 'accessories',
    icon: '💎',
    titleEn: 'Diffuser Accessories',
    titleAr: 'ملحقات الموزعات',
    descEn: 'Replacement fragrance oil cartridges, refill bottles, and spare parts for all Amos diffuser models. Genuine Amos accessories.',
    descAr: 'خراطيش زيت عطري بديلة وزجاجات إعادة تعبئة وقطع غيار لجميع طرازات موزعات Amos. ملحقات Amos الأصلية.',
    available: ['All Models Compatible', 'Custom Fragrance Cartridges'],
    badge: 'Accessories',
  },
];

export default function LifestylePage() {
  const [lang, setLang] = useState<Lang>('en');
  const t = translations[lang];
  const isRtl = lang === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} activePage="lifestyle" />

      {/* Header */}
      <section className="hero-bg" style={{ padding: '4rem 0 3rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9A9080', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#9A9080' }}>{isRtl ? 'الرئيسية' : 'Home'}</Link>
            <span>/</span>
            <span style={{ color: '#C9A84C' }}>{t.nav.lifestyle}</span>
          </div>
          <h1 className="section-title">{t.lifestyle.title}</h1>
          <div className="divider" />
          <p style={{ color: '#9A9080', fontSize: '1rem', maxWidth: '600px', lineHeight: 1.7 }}>{t.lifestyle.subtitle}</p>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '3rem 0 5rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '1.5rem' }}>
            {products.map(p => (
              <div key={p.id} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '2.5rem' }}>{p.icon}</div>
                  <span className="tag tag-gold" style={{ fontSize: '0.65rem' }}>{p.badge}</span>
                </div>
                <h3 style={{ color: '#E8E0D0', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.75rem' }}>
                  {isRtl ? p.titleAr : p.titleEn}
                </h3>
                <p style={{ color: '#9A9080', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {isRtl ? p.descAr : p.descEn}
                </p>
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ color: '#9A9080', fontSize: '0.72rem', marginBottom: '0.5rem' }}>
                    {isRtl ? 'متوفر بعطور:' : 'Available in:'}
                  </div>
                  {p.available.map(a => (
                    <span key={a} className="note-pill" style={{ margin: '2px' }}>{a}</span>
                  ))}
                </div>
                <Link href="/contact" className="btn-outline" style={{ textAlign: 'center', display: 'block', fontSize: '0.85rem' }}>
                  {isRtl ? 'استفسر الآن' : 'Inquire Now'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gifting Banner */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎁</div>
          <h2 style={{ color: '#E8E0D0', fontWeight: 700, fontSize: '1.75rem', marginBottom: '1rem' }}>
            {isRtl ? 'هدايا مؤسسية راقية' : 'Premium Corporate Gifting'}
          </h2>
          <p style={{ color: '#9A9080', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
            {isRtl
              ? 'نوفر طقم هدايا مخصصة للشركات والمناسبات مع خيارات التغليف الفاخر والطباعة الخاصة.'
              : 'Custom corporate gift sets with luxury packaging and private label options available.'}
          </p>
          <Link href="/contact" className="btn-gold">
            {isRtl ? 'طلب عرض أسعار مؤسسي' : 'Corporate Quote'}
          </Link>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
