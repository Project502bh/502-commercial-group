'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { translations, diffusers, fragrances, fragranceFamilies, concentrations } from '@/lib/data';
import { useLang } from '@/lib/LangContext';

type Tab = 'overview' | 'diffusers' | 'fragrances' | 'lifestyle';

const diffuserSpecs: Record<string, { en: string; ar: string }[]> = {
  sp5000: [
    { en: 'Tank: 2.5L', ar: 'خزان: 2.5 لتر' },
    { en: 'Coverage: 1000–5000 m²', ar: 'تغطية: 1000–5000 متر²' },
    { en: 'Bluetooth + WiFi', ar: 'بلوتوث + واي فاي' },
    { en: 'IoT App Control', ar: 'تحكم عبر التطبيق' },
  ],
  sp2000: [
    { en: 'Coverage: 500–2000 m²', ar: 'تغطية: 500–2000 متر²' },
    { en: 'Bluetooth + WiFi', ar: 'بلوتوث + واي فاي' },
    { en: 'Remote Management', ar: 'إدارة عن بُعد' },
  ],
  xp1000plus: [
    { en: 'Coverage: 200–1000 m²', ar: 'تغطية: 200–1000 متر²' },
    { en: 'Bluetooth + WiFi', ar: 'بلوتوث + واي فاي' },
    { en: 'Slim Design', ar: 'تصميم رفيع' },
  ],
  xp2000plus: [
    { en: 'Coverage: 300–2000 m²', ar: 'تغطية: 300–2000 متر²' },
    { en: 'Bluetooth Only', ar: 'بلوتوث فقط' },
    { en: 'Professional Grade', ar: 'درجة احترافية' },
  ],
  ep500: [
    { en: 'Coverage: 50–500 m²', ar: 'تغطية: 50–500 متر²' },
    { en: 'Bluetooth + WiFi', ar: 'بلوتوث + واي فاي' },
    { en: 'Quiet Operation', ar: 'تشغيل هادئ' },
  ],
  sp300: [
    { en: 'Coverage: 30–300 m²', ar: 'تغطية: 30–300 متر²' },
    { en: 'Bluetooth + WiFi', ar: 'بلوتوث + واي فاي' },
    { en: 'Modern Design', ar: 'تصميم عصري' },
  ],
  ap30: [
    { en: 'Coverage: 30–200 m²', ar: 'تغطية: 30–200 متر²' },
    { en: 'Bluetooth Only', ar: 'بلوتوث فقط' },
    { en: 'Stylish Design', ar: 'تصميم أنيق' },
  ],
  ap40: [
    { en: 'Coverage: 50–400 m²', ar: 'تغطية: 50–400 متر²' },
    { en: 'Bluetooth + WiFi', ar: 'بلوتوث + واي فاي' },
    { en: 'Ultrasonic Technology', ar: 'تقنية فوق صوتية' },
  ],
};

const lifestyleProducts = [
  { icon: '🕯️', en: 'Reed Diffusers', ar: 'معطرات العصا', descEn: 'Elegant reed diffusers for home and gifting. Available in multiple signature scents.', descAr: 'معطرات عصا أنيقة للمنزل والهدايا. متوفرة بعطور مميزة متعددة.' },
  { icon: '🧴', en: 'Fragrance Sprays', ar: 'بخاخات العطر', descEn: 'Portable room sprays with premium Amos fragrance oils. Instant freshness anywhere.', descAr: 'بخاخات غرف محمولة بزيوت عطرية Amos الفاخرة. انتعاش فوري في أي مكان.' },
  { icon: '🎁', en: 'Gift Sets', ar: 'طقم الهدايا', descEn: 'Curated fragrance gift sets for corporate and personal gifting occasions.', descAr: 'طقم هدايا عطرية مختارة للمناسبات المؤسسية والشخصية.' },
  { icon: '🏺', en: 'Aroma Stones', ar: 'أحجار العطر', descEn: 'Natural porous aroma stones — add a few drops of fragrance oil for long-lasting scent.', descAr: 'أحجار عطر طبيعية مسامية — أضف قطرات من زيت العطر للحصول على رائحة دائمة.' },
  { icon: '🪔', en: 'Scented Candles', ar: 'الشموع المعطرة', descEn: 'Hand-poured soy candles infused with Amos signature fragrance oils.', descAr: 'شموع صويا يدوية الصب مشبعة بزيوت عطرية Amos المميزة.' },
  { icon: '🧳', en: 'Travel Kit', ar: 'طقم السفر', descEn: 'Compact travel-size fragrance essentials — perfect for hotels and business trips.', descAr: 'أساسيات العطر المدمجة لحجم السفر — مثالية للفنادق ورحلات العمل.' },
];

export default function AmosAromaPage() {
  const { lang } = useLang();
  const [tab, setTab] = useState<Tab>('overview');
  const [diffFilter, setDiffFilter] = useState<'all' | 'commercial' | 'personal'>('all');
  const [fragFamily, setFragFamily] = useState('All');
  const [fragConc, setFragConc] = useState('All');
  const [fragHotel, setFragHotel] = useState(false);
  const [fragSearch, setFragSearch] = useState('');
  const [expandedFrag, setExpandedFrag] = useState<number | null>(null);

  const t = translations[lang];
  const isRtl = lang === 'ar';

  const filteredDiffusers = diffFilter === 'all' ? diffusers : diffusers.filter(d => d.category === diffFilter);

  const filteredFragrances = useMemo(() => fragrances.filter(f => {
    if (fragFamily !== 'All' && f.family !== fragFamily) return false;
    if (fragConc !== 'All' && f.concentration !== fragConc) return false;
    if (fragHotel && !f.hotelInspired) return false;
    if (fragSearch && !f.nameEn.toLowerCase().includes(fragSearch.toLowerCase()) && !f.profile.toLowerCase().includes(fragSearch.toLowerCase())) return false;
    return true;
  }), [fragFamily, fragConc, fragHotel, fragSearch]);

  const tabs: { key: Tab; labelEn: string; labelAr: string; icon: string }[] = [
    { key: 'overview',    labelEn: 'Overview',          labelAr: 'نظرة عامة',         icon: '🏢' },
    { key: 'diffusers',   labelEn: 'Smart Diffusers',   labelAr: 'أجهزة التعطير',      icon: '🌬️' },
    { key: 'fragrances',  labelEn: 'Fragrance Library', labelAr: 'مكتبة العطور',       icon: '🌸' },
    { key: 'lifestyle',   labelEn: 'Lifestyle & Gifts', labelAr: 'منتجات الأفراد',     icon: '🎁' },
  ];

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ minHeight: '100vh' }}>
      <Navbar activePage="brands" />

      {/* Breadcrumb + Brand Header */}
      <section className="hero-bg" style={{ padding: '3.5rem 0 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#7AAFC0', fontSize: '0.8rem', marginBottom: '1.75rem' }}>
            <Link href="/" style={{ color: '#7AAFC0', textDecoration: 'none' }}>{isRtl ? 'الرئيسية' : 'Home'}</Link>
            <span>/</span>
            <Link href="/brands" style={{ color: '#7AAFC0', textDecoration: 'none' }}>{t.nav.brands}</Link>
            <span>/</span>
            <span style={{ color: '#00E6F7' }}>Amos Aroma</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{ width: '72px', height: '72px', background: 'rgba(0,230,247,0.08)', border: '2px solid rgba(0,230,247,0.3)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem' }}>
              🌬️
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <h1 style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#FFFFFF', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 900, margin: 0 }}>Amos Aroma</h1>
                <span style={{ background: 'rgba(0,230,247,0.1)', border: '1px solid rgba(0,230,247,0.3)', borderRadius: '999px', padding: '0.25rem 0.8rem', fontSize: '0.6rem', color: '#00E6F7', fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.1em' }}>
                  ◆ {isRtl ? 'العلامة المعتمدة' : 'ACTIVE BRAND'}
                </span>
              </div>
              <div style={{ color: '#00E6F7', fontSize: '0.82rem', fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.06em', marginTop: '0.3rem' }}>
                {isRtl ? 'تكنولوجيا التعطير الذكي' : 'Smart Scent Technology'}
              </div>
              <div style={{ color: '#4A7A8A', fontSize: '0.75rem', marginTop: '0.2rem' }}>
                {isRtl ? 'الموزع الحصري للبحرين — مجموعة 502 التجارية' : 'Exclusive Bahrain Distributor — 502 Commercial Group'}
              </div>
            </div>
          </div>

          {/* Tab Nav */}
          <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid rgba(0,230,247,0.12)', overflowX: 'auto' }}>
            {tabs.map(tb => (
              <button
                key={tb.key}
                onClick={() => setTab(tb.key)}
                style={{
                  padding: '0.85rem 1.4rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: tab === tb.key ? '2px solid #00E6F7' : '2px solid transparent',
                  color: tab === tb.key ? '#00E6F7' : '#4A7A8A',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: tab === tb.key ? 700 : 400,
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>{tb.icon}</span>
                <span>{isRtl ? tb.labelAr : tb.labelEn}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAB: OVERVIEW ────────────────────────────────── */}
      {tab === 'overview' && (
        <>
          <section style={{ padding: '4rem 0' }}>
            <div className="max-w-7xl mx-auto px-6">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                <div>
                  <h2 className="section-title" style={{ marginBottom: '1rem', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>
                    {isRtl ? 'عن Amos Aroma' : 'About Amos Aroma'}
                  </h2>
                  <div className="divider" style={{ marginBottom: '1.25rem' }} />
                  <p style={{ color: '#7AAFC0', lineHeight: 1.85, fontSize: '0.92rem', marginBottom: '1rem' }}>
                    {isRtl
                      ? 'شركة Guangdong Amos الذكية لإنتاج الأجهزة الكهربائية هي الشريك الصناعي الحصري لمجموعة 502 التجارية في البحرين. تتخصص في تصنيع أجهزة التعطير الذكية المدعومة بتقنية IoT وزيوت عطرية فاخرة مستوحاة من أفخم فنادق العالم.'
                      : 'Guangdong Amos Intelligent Equipment Co., Ltd. is the exclusive manufacturing partner for 502 Commercial Group in Bahrain. They specialize in IoT-enabled smart scent diffusers and premium fragrance oils inspired by the world\'s finest hotels.'}
                  </p>
                  <p style={{ color: '#7AAFC0', lineHeight: 1.85, fontSize: '0.92rem' }}>
                    {isRtl
                      ? 'تمتلك مجموعة 502 التجارية حقوق التوزيع الحصري في مملكة البحرين، مما يمنحك وصولاً مباشراً إلى أحدث تقنيات التعطير الذكي.'
                      : '502 Commercial Group holds exclusive distribution rights in the Kingdom of Bahrain, giving you direct access to the latest smart scent technology.'}
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {[
                    { icon: '🏭', en: 'Guangzhou, China', ar: 'قوانغتشو، الصين', sub: isRtl ? 'المقر الرئيسي' : 'Headquarters' },
                    { icon: '📡', en: 'IoT Certified', ar: 'معتمد IoT', sub: isRtl ? 'تقنية متطورة' : 'Smart Tech' },
                    { icon: '🌬️', en: '8 Diffusers', ar: '8 أجهزة', sub: isRtl ? 'طرازات مختلفة' : 'Models' },
                    { icon: '🌸', en: '64 Fragrances', ar: '64 عطراً', sub: isRtl ? 'زيوت عطرية' : 'Fragrance Oils' },
                  ].map(s => (
                    <div key={s.en} className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.8rem', marginBottom: '0.4rem' }}>{s.icon}</div>
                      <div style={{ color: '#00E6F7', fontFamily: 'var(--font-orbitron), monospace', fontSize: '0.75rem', fontWeight: 700 }}>{isRtl ? s.ar : s.en}</div>
                      <div style={{ color: '#4A7A8A', fontSize: '0.65rem', marginTop: '0.2rem' }}>{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* IoT Features */}
          <section style={{ padding: '4rem 0', background: 'var(--navy-2)' }}>
            <div className="max-w-7xl mx-auto px-6">
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h2 className="section-title">{isRtl ? 'منصة التحكم الذكي' : 'Smart IoT Platform'}</h2>
                <div className="divider" style={{ margin: '0.75rem auto' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                {[
                  { icon: '📱', en: 'App Control', ar: 'تحكم عبر التطبيق', descEn: 'Manage all diffusers from one app', descAr: 'تحكم بجميع الأجهزة من تطبيق واحد' },
                  { icon: '📅', en: 'Scheduling', ar: 'الجدولة الذكية', descEn: 'Set automatic on/off times', descAr: 'اضبط أوقات التشغيل التلقائي' },
                  { icon: '🌡️', en: 'Intensity Control', ar: 'التحكم في الشدة', descEn: 'Adjust fragrance intensity remotely', descAr: 'اضبط شدة العطر عن بُعد' },
                  { icon: '📊', en: 'Usage Analytics', ar: 'تحليلات الاستخدام', descEn: 'Track consumption and performance', descAr: 'تتبع الاستهلاك والأداء' },
                ].map(f => (
                  <div key={f.icon} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.65rem' }}>{f.icon}</div>
                    <div style={{ color: '#00E6F7', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.4rem' }}>{isRtl ? f.ar : f.en}</div>
                    <div style={{ color: '#7AAFC0', fontSize: '0.78rem' }}>{isRtl ? f.descAr : f.descEn}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sectors */}
          <section style={{ padding: '4rem 0' }}>
            <div className="max-w-7xl mx-auto px-6">
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h2 className="section-title">{isRtl ? 'قطاعات الخدمة' : 'Sectors We Serve'}</h2>
                <div className="divider" style={{ margin: '0.75rem auto' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
                {[
                  { icon: '🏨', en: 'Hotels & Resorts', ar: 'الفنادق والمنتجعات' },
                  { icon: '🏢', en: 'Corporate Offices', ar: 'المكاتب التجارية' },
                  { icon: '🛍️', en: 'Retail & Malls', ar: 'التجزئة والمراكز التجارية' },
                  { icon: '💆', en: 'Spas & Wellness', ar: 'المنتجعات الصحية' },
                  { icon: '🏠', en: 'Luxury Homes', ar: 'المنازل الفاخرة' },
                  { icon: '✈️', en: 'VIP Lounges', ar: 'الصالات المميزة' },
                ].map(s => (
                  <div key={s.en} className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{s.icon}</div>
                    <div style={{ color: '#7AAFC0', fontSize: '0.78rem', fontWeight: 500 }}>{isRtl ? s.ar : s.en}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section style={{ padding: '3rem 0 5rem', background: 'var(--navy-2)', borderTop: '1px solid rgba(0,230,247,0.1)' }}>
            <div className="max-w-7xl mx-auto px-6" style={{ textAlign: 'center' }}>
              <p style={{ color: '#7AAFC0', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
                {isRtl ? 'استكشف منتجات Amos Aroma المتكاملة' : 'Explore the complete Amos Aroma product range'}
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => setTab('diffusers')} className="btn-cyan">{isRtl ? 'أجهزة التعطير' : 'Smart Diffusers'}</button>
                <button onClick={() => setTab('fragrances')} className="btn-outline">{isRtl ? 'مكتبة العطور' : 'Fragrance Library'}</button>
                <Link href="/contact" className="btn-outline" style={{ textDecoration: 'none' }}>{isRtl ? 'طلب عرض سعر' : 'Request Quote'}</Link>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── TAB: DIFFUSERS ───────────────────────────────── */}
      {tab === 'diffusers' && (
        <section style={{ padding: '3rem 0 5rem' }}>
          <div className="max-w-7xl mx-auto px-6">
            {/* Filter */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {(['all', 'commercial', 'personal'] as const).map(f => (
                <button key={f} onClick={() => setDiffFilter(f)} style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '999px',
                  border: '1px solid',
                  borderColor: diffFilter === f ? '#00E6F7' : 'rgba(0,230,247,0.2)',
                  background: diffFilter === f ? 'rgba(0,230,247,0.1)' : 'transparent',
                  color: diffFilter === f ? '#00E6F7' : '#7AAFC0',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontWeight: diffFilter === f ? 600 : 400,
                  transition: 'all 0.2s',
                }}>
                  {f === 'all' ? (isRtl ? 'الكل' : 'All') : f === 'commercial' ? (isRtl ? 'تجاري' : 'Commercial') : (isRtl ? 'شخصي' : 'Personal')}
                </button>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.5rem' }}>
              {filteredDiffusers.map(d => (
                <div key={d.id} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #00E6F7, transparent)' }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div style={{ width: '60px', height: '60px', background: 'rgba(0,230,247,0.07)', border: '1px solid rgba(0,230,247,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.7rem' }}>
                      🌬️
                    </div>
                    <div style={{ textAlign: isRtl ? 'left' : 'right' }}>
                      <div style={{ color: '#00E6F7', fontSize: '1.4rem', fontWeight: 900, fontFamily: 'var(--font-orbitron), monospace' }}>${d.priceUSD}</div>
                      <div style={{ color: '#4A7A8A', fontSize: '0.65rem' }}>USD / unit</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                    <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-orbitron), monospace' }}>{d.model}</span>
                    <span className="tag tag-gold" style={{ fontSize: '0.58rem' }}>
                      {d.category === 'commercial' ? (isRtl ? 'تجاري' : 'Commercial') : (isRtl ? 'شخصي' : 'Personal')}
                    </span>
                  </div>

                  <div style={{ color: '#00E6F7', fontSize: '0.72rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.35rem', letterSpacing: '0.04em' }}>
                    <span>📡</span> {d.connectivity}
                  </div>

                  <p style={{ color: '#7AAFC0', fontSize: '0.83rem', lineHeight: 1.7, marginBottom: '1.25rem', flexGrow: 1 }}>
                    {isRtl ? d.descAr : d.descEn}
                  </p>

                  <div style={{ background: 'rgba(0,230,247,0.04)', border: '1px solid rgba(0,230,247,0.1)', borderRadius: '0.5rem', padding: '0.75rem 1rem', marginBottom: '1.25rem' }}>
                    {(diffuserSpecs[d.id] ?? []).map((s, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.2rem 0', color: '#7AAFC0', fontSize: '0.77rem' }}>
                        <span style={{ color: '#00E6F7', fontSize: '0.5rem' }}>◆</span>
                        {isRtl ? s.ar : s.en}
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="btn-cyan" style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}>
                    {isRtl ? 'طلب عرض سعر' : 'Request Quote'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TAB: FRAGRANCES ──────────────────────────────── */}
      {tab === 'fragrances' && (
        <section style={{ padding: '3rem 0 5rem' }}>
          <div className="max-w-7xl mx-auto px-6">
            {/* Filters */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem', alignItems: 'center' }}>
              <input
                type="text"
                placeholder={isRtl ? 'بحث...' : 'Search...'}
                value={fragSearch}
                onChange={e => setFragSearch(e.target.value)}
                style={{ background: 'rgba(0,230,247,0.05)', border: '1px solid rgba(0,230,247,0.2)', borderRadius: '0.4rem', padding: '0.5rem 1rem', color: '#E8F6FF', fontSize: '0.82rem', outline: 'none', minWidth: '160px' }}
              />
              <select value={fragFamily} onChange={e => setFragFamily(e.target.value)} style={{ background: 'var(--navy-3)', border: '1px solid rgba(0,230,247,0.2)', borderRadius: '0.4rem', padding: '0.5rem 1rem', color: '#7AAFC0', fontSize: '0.82rem', cursor: 'pointer' }}>
                {fragranceFamilies.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
              <select value={fragConc} onChange={e => setFragConc(e.target.value)} style={{ background: 'var(--navy-3)', border: '1px solid rgba(0,230,247,0.2)', borderRadius: '0.4rem', padding: '0.5rem 1rem', color: '#7AAFC0', fontSize: '0.82rem', cursor: 'pointer' }}>
                {concentrations.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#7AAFC0', fontSize: '0.82rem', cursor: 'pointer' }}>
                <input type="checkbox" checked={fragHotel} onChange={e => setFragHotel(e.target.checked)} style={{ accentColor: '#00E6F7' }} />
                {isRtl ? 'مستوحى من الفنادق' : 'Hotel Inspired'}
              </label>
              <span style={{ color: '#4A7A8A', fontSize: '0.75rem' }}>
                {filteredFragrances.length} {isRtl ? 'عطر' : 'scents'}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
              {filteredFragrances.map(f => (
                <div key={f.id} className="card" style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => setExpandedFrag(expandedFrag === f.id ? null : f.id)}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #00E6F7, transparent)', opacity: 0.5 }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <div style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.3 }}>
                      {f.nameEn}
                    </div>
                    {f.hotelInspired && <span className="tag tag-gold" style={{ fontSize: '0.55rem', whiteSpace: 'nowrap' }}>🏨 Hotel</span>}
                  </div>

                  <div style={{ color: '#4A7A8A', fontSize: '0.65rem', marginBottom: '0.5rem', fontFamily: 'monospace' }}>{f.code}</div>

                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                    <span className="tag tag-cyan" style={{ fontSize: '0.58rem' }}>{f.family}</span>
                    <span style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '999px', padding: '0.15rem 0.55rem', fontSize: '0.58rem', color: '#C9A84C' }}>{f.concentration}</span>
                  </div>

                  <p style={{ color: '#7AAFC0', fontSize: '0.78rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                    {f.profile}
                  </p>

                  {expandedFrag === f.id && (
                    <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,230,247,0.1)' }}>
                      {[
                        { label: isRtl ? 'النوتات الافتتاحية' : 'Top Notes', val: f.topNotes },
                        { label: isRtl ? 'نوتات القلب' : 'Middle Notes', val: f.middleNotes },
                        { label: isRtl ? 'النوتات القاعدية' : 'Base Notes', val: f.baseNotes },
                      ].map(n => (
                        <div key={n.label} style={{ marginBottom: '0.5rem' }}>
                          <div style={{ color: '#00E6F7', fontSize: '0.65rem', fontWeight: 700, marginBottom: '0.15rem' }}>{n.label}</div>
                          <div style={{ color: '#7AAFC0', fontSize: '0.75rem' }}>{n.val}</div>
                        </div>
                      ))}
                      <div style={{ marginTop: '0.5rem' }}>
                        <div style={{ color: '#C9A84C', fontSize: '0.65rem', fontWeight: 700, marginBottom: '0.15rem' }}>{isRtl ? 'الإلهام' : 'Inspiration'}</div>
                        <div style={{ color: '#7AAFC0', fontSize: '0.75rem', fontStyle: 'italic' }}>{f.inspiration}</div>
                      </div>
                    </div>
                  )}

                  <div style={{ color: expandedFrag === f.id ? '#00E6F7' : '#4A7A8A', fontSize: '0.7rem', marginTop: '0.75rem', textAlign: isRtl ? 'left' : 'right' }}>
                    {expandedFrag === f.id ? (isRtl ? '▲ إخفاء التفاصيل' : '▲ Hide details') : (isRtl ? '▼ عرض التفاصيل' : '▼ View details')}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link href="/contact" className="btn-cyan" style={{ textDecoration: 'none' }}>
                {isRtl ? 'اطلب عينات العطور' : 'Request Fragrance Samples'}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── TAB: LIFESTYLE ───────────────────────────────── */}
      {tab === 'lifestyle' && (
        <>
          <section style={{ padding: '3rem 0 5rem' }}>
            <div className="max-w-7xl mx-auto px-6">
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: '#7AAFC0', fontSize: '0.92rem', lineHeight: 1.75 }}>
                  {isRtl
                    ? 'منتجات عطرية منزلية مختارة بعناية للاستخدام الشخصي والهدايا المؤسسية — تعطيك تجربة عطرية Amos في كل مكان.'
                    : 'Curated home fragrance products for personal use and corporate gifting — bringing the Amos scent experience everywhere you go.'}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {lifestyleProducts.map(p => (
                  <div key={p.en} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.icon}</div>
                    <div style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                      {isRtl ? p.ar : p.en}
                    </div>
                    <p style={{ color: '#7AAFC0', fontSize: '0.85rem', lineHeight: 1.75, flexGrow: 1, marginBottom: '1.5rem' }}>
                      {isRtl ? p.descAr : p.descEn}
                    </p>
                    <Link href="/contact" className="btn-cyan" style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}>
                      {isRtl ? 'استفسار' : 'Inquire'}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Corporate Gifting Banner */}
          <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(37,70,99,0.3) 100%)', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
            <div className="max-w-7xl mx-auto px-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#C9A84C', fontFamily: 'var(--font-orbitron), monospace', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {isRtl ? 'للشركات والمؤسسات' : 'Corporate & B2B'}
                </div>
                <h2 style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#FFFFFF', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>
                  {isRtl ? 'هدايا مؤسسية راقية بعطور Amos' : 'Premium Corporate Gifts with Amos Scents'}
                </h2>
                <p style={{ color: '#9A9080', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  {isRtl
                    ? 'نوفر حلول هدايا مخصصة للشركات والفنادق والمؤسسات — يمكن تخصيص العبوات بشعار شركتك وعطورك المفضلة.'
                    : 'We provide custom gifting solutions for corporations, hotels, and institutions — packaging can be customized with your brand logo and preferred scents.'}
                </p>
                <Link href="/contact" className="btn-cyan" style={{ textDecoration: 'none' }}>
                  {isRtl ? 'تواصل مع فريق المبيعات' : 'Contact Sales Team'}
                </Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {[
                  { icon: '🎁', text: isRtl ? 'تغليف مخصص' : 'Custom Packaging' },
                  { icon: '🏷️', text: isRtl ? 'شعار الشركة' : 'Brand Labeling' },
                  { icon: '📦', text: isRtl ? 'طلبات بالجملة' : 'Bulk Orders' },
                  { icon: '🚀', text: isRtl ? 'توصيل سريع' : 'Fast Delivery' },
                ].map(item => (
                  <div key={item.text} style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '0.5rem', padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                    <div style={{ color: '#C9A84C', fontSize: '0.75rem', fontWeight: 600 }}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}
