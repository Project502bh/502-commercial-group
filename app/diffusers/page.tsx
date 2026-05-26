'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { translations, diffusers, type Lang } from '@/lib/data';

const specs: Record<string, { en: string; ar: string }[]> = {
  sp5000: [
    { en: 'Tank: 2.5L', ar: 'خزان: 2.5 لتر' },
    { en: 'Coverage: 1000–5000 m²', ar: 'تغطية: 1000–5000 متر²' },
    { en: 'Bluetooth + WiFi', ar: 'بلوتوث + واي فاي' },
    { en: 'IoT App Control', ar: 'تحكم عبر التطبيق' },
    { en: 'Timer Scheduling', ar: 'جدولة بالمؤقت' },
    { en: 'Color: Black', ar: 'اللون: أسود' },
  ],
  sp2000: [
    { en: 'Coverage: 500–2000 m²', ar: 'تغطية: 500–2000 متر²' },
    { en: 'Bluetooth + WiFi', ar: 'بلوتوث + واي فاي' },
    { en: 'Remote Management', ar: 'إدارة عن بُعد' },
    { en: 'Smart Scheduling', ar: 'جدولة ذكية' },
    { en: 'Color: Black', ar: 'اللون: أسود' },
  ],
  xp1000plus: [
    { en: 'Coverage: 200–1000 m²', ar: 'تغطية: 200–1000 متر²' },
    { en: 'Bluetooth + WiFi', ar: 'بلوتوث + واي فاي' },
    { en: 'Slim Design', ar: 'تصميم رفيع' },
    { en: 'Colors: Black / Silver', ar: 'الألوان: أسود / فضي' },
  ],
  xp2000plus: [
    { en: 'Coverage: 300–2000 m²', ar: 'تغطية: 300–2000 متر²' },
    { en: 'Bluetooth Only', ar: 'بلوتوث فقط' },
    { en: 'Professional Grade', ar: 'درجة احترافية' },
    { en: 'Colors: Black / Silver', ar: 'الألوان: أسود / فضي' },
  ],
  ep500: [
    { en: 'Coverage: 50–500 m²', ar: 'تغطية: 50–500 متر²' },
    { en: 'Bluetooth + WiFi', ar: 'بلوتوث + واي فاي' },
    { en: 'Quiet Operation', ar: 'تشغيل هادئ' },
    { en: 'Colors: Black / White', ar: 'الألوان: أسود / أبيض' },
  ],
  sp300: [
    { en: 'Coverage: 30–300 m²', ar: 'تغطية: 30–300 متر²' },
    { en: 'Bluetooth + WiFi', ar: 'بلوتوث + واي فاي' },
    { en: 'Modern Design', ar: 'تصميم عصري' },
    { en: 'Colors: Black / White', ar: 'الألوان: أسود / أبيض' },
  ],
  ap30: [
    { en: 'Coverage: 30–200 m²', ar: 'تغطية: 30–200 متر²' },
    { en: 'Bluetooth Only', ar: 'بلوتوث فقط' },
    { en: 'Stylish Design', ar: 'تصميم أنيق' },
    { en: 'Colors: Black / Silver', ar: 'الألوان: أسود / فضي' },
  ],
  ap40: [
    { en: 'Coverage: 50–400 m²', ar: 'تغطية: 50–400 متر²' },
    { en: 'Bluetooth + WiFi', ar: 'بلوتوث + واي فاي' },
    { en: 'Ultrasonic Technology', ar: 'تقنية فوق صوتية' },
    { en: 'Colors: Black / Silver', ar: 'الألوان: أسود / فضي' },
  ],
};

export default function DiffusersPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [filter, setFilter] = useState<'all' | 'commercial' | 'personal'>('all');
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const filtered = filter === 'all' ? diffusers : diffusers.filter(d => d.category === filter);

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} activePage="diffusers" />

      {/* Header */}
      <section className="hero-bg" style={{ padding: '4rem 0 3rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9A9080', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#9A9080' }}>{isRtl ? 'الرئيسية' : 'Home'}</Link>
            <span>/</span>
            <span style={{ color: '#C9A84C' }}>{t.nav.diffusers}</span>
          </div>
          <h1 className="section-title">{t.diffusers.title}</h1>
          <div className="divider" />
          <p style={{ color: '#9A9080', fontSize: '1rem', maxWidth: '600px', lineHeight: 1.7 }}>{t.diffusers.subtitle}</p>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {(['all', 'commercial', 'personal'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '999px',
                  border: '1px solid',
                  borderColor: filter === f ? '#C9A84C' : 'rgba(201,168,76,0.25)',
                  background: filter === f ? 'rgba(201,168,76,0.15)' : 'transparent',
                  color: filter === f ? '#C9A84C' : '#9A9080',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: filter === f ? 600 : 400,
                  transition: 'all 0.2s',
                }}>
                {f === 'all' ? (isRtl ? 'الكل' : 'All') : f === 'commercial' ? (isRtl ? 'تجاري' : 'Commercial') : (isRtl ? 'شخصي' : 'Personal')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ padding: '3rem 0 5rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.5rem' }}>
            {filtered.map(d => (
              <div key={d.id} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #00E6F7, transparent)' }} />
                {/* Icon + Price */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{ width: '68px', height: '68px', background: 'rgba(0,230,247,0.07)', border: '1px solid rgba(0,230,247,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.9rem' }}>
                    🌬️
                  </div>
                  <div style={{ textAlign: isRtl ? 'left' : 'right' }}>
                    <div style={{ color: '#00E6F7', fontSize: '1.5rem', fontWeight: 900, fontFamily: 'var(--font-orbitron), monospace' }}>${d.priceUSD}</div>
                    <div style={{ color: '#4A7A8A', fontSize: '0.68rem', letterSpacing: '0.04em' }}>USD / unit</div>
                  </div>
                </div>

                <div style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.05rem', fontFamily: 'var(--font-orbitron), monospace' }}>{d.model}</span>
                  <span className="tag tag-gold" style={{ fontSize: '0.6rem' }}>
                    {d.category === 'commercial' ? (isRtl ? 'تجاري' : 'Commercial') : (isRtl ? 'شخصي' : 'Personal')}
                  </span>
                </div>
                <div style={{ color: '#00E6F7', fontSize: '0.75rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', letterSpacing: '0.04em' }}>
                  <span>📡</span> {d.connectivity}
                </div>

                <p style={{ color: '#7AAFC0', fontSize: '0.83rem', lineHeight: 1.7, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {isRtl ? d.descAr : d.descEn}
                </p>

                <div style={{ background: 'rgba(0,230,247,0.04)', border: '1px solid rgba(0,230,247,0.1)', borderRadius: '0.5rem', padding: '0.75rem 1rem', marginBottom: '1.25rem' }}>
                  {(specs[d.id] ?? []).map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.2rem 0', color: '#7AAFC0', fontSize: '0.77rem' }}>
                      <span style={{ color: '#00E6F7', fontSize: '0.55rem' }}>◆</span>
                      {isRtl ? s.ar : s.en}
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-gold" style={{ textAlign: 'center', display: 'block' }}>
                  {t.diffusers.inquire}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Feature Section */}
      <section style={{ padding: '4rem 0', background: '#0D0D0D', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">{isRtl ? 'منصة التحكم الذكي' : 'Smart IoT Platform'}</h2>
            <div className="divider" style={{ margin: '0.75rem auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.5rem' }}>
            {[
              { icon: '📱', en: 'App Control', ar: 'تحكم عبر التطبيق', desc_en: 'Control all diffusers from one app', desc_ar: 'تحكم بجميع الأجهزة من تطبيق واحد' },
              { icon: '📅', en: 'Scheduling', ar: 'الجدولة', desc_en: 'Set automatic on/off times', desc_ar: 'اضبط أوقات التشغيل والإيقاف التلقائي' },
              { icon: '🌡️', en: 'Intensity Control', ar: 'التحكم في الشدة', desc_en: 'Adjust fragrance intensity remotely', desc_ar: 'اضبط شدة العطر عن بُعد' },
              { icon: '📊', en: 'Usage Analytics', ar: 'تحليلات الاستخدام', desc_en: 'Track consumption and performance', desc_ar: 'تتبع الاستهلاك والأداء' },
            ].map(f => (
              <div key={f.icon} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <div style={{ color: '#C9A84C', fontWeight: 600, marginBottom: '0.5rem' }}>{isRtl ? f.ar : f.en}</div>
                <div style={{ color: '#9A9080', fontSize: '0.82rem' }}>{isRtl ? f.desc_ar : f.desc_en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
