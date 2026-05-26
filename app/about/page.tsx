'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { translations, group502, type Lang } from '@/lib/data';

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>('en');
  const t = translations[lang];
  const isRtl = lang === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} activePage="about" />

      {/* Header */}
      <section className="hero-bg" style={{ padding: '4rem 0 3rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#7AAFC0', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#7AAFC0', textDecoration: 'none' }}>{isRtl ? 'الرئيسية' : 'Home'}</Link>
            <span>/</span>
            <span style={{ color: '#00E6F7' }}>{t.nav.about}</span>
          </div>
          <h1 className="section-title">{isRtl ? 'من نحن' : 'About Us'}</h1>
          <div className="divider" />
          <p style={{ color: '#7AAFC0', fontSize: '1rem', maxWidth: '650px', lineHeight: 1.75, marginTop: '1rem' }}>
            {isRtl
              ? 'مجموعة 502 التجارية — المحرك الأساسي والمحفز الاستراتيجي للعلامات التجارية الواعدة في البحرين.'
              : '502 Commercial Group — the core engine and strategic catalyst for promising brands in Bahrain.'}
          </p>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ color: '#00E6F7', fontFamily: 'var(--font-orbitron), monospace', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {isRtl ? 'هويتنا' : 'Who We Are'}
              </div>
              <h2 style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>
                {isRtl ? 'نبني منظومة متكاملة للنجاح' : 'Building an Integrated Ecosystem for Success'}
              </h2>
              <div className="divider" style={{ marginBottom: '1.25rem' }} />
              <p style={{ color: '#7AAFC0', lineHeight: 1.85, fontSize: '0.93rem' }}>
                {isRtl ? group502.aboutAr : group502.aboutEn}
              </p>
            </div>

            {/* Tagline card */}
            <div className="card" style={{ padding: '2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #00E6F7, transparent)' }} />
              <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>◈</div>
              <div style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#00E6F7', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 900, lineHeight: 1.5, marginBottom: '1rem' }}>
                {isRtl ? group502.taglineAr : group502.taglineEn}
              </div>
              <div style={{ color: '#4A7A8A', fontSize: '0.75rem', fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.1em' }}>
                {isRtl ? 'مجموعة 502 التجارية · البحرين' : '502 COMMERCIAL GROUP · BAHRAIN'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '5rem 0', background: 'var(--navy-2)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">{isRtl ? 'رؤيتنا ومهمتنا' : 'Vision & Mission'}</h2>
            <div className="divider" style={{ margin: '0.75rem auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #00E6F7, transparent)' }} />
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔭</div>
              <div style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#00E6F7', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                {isRtl ? 'رؤيتنا' : 'Our Vision'}
              </div>
              <p style={{ color: '#7AAFC0', lineHeight: 1.85, fontSize: '0.92rem' }}>
                {isRtl ? group502.visionAr : group502.visionEn}
              </p>
            </div>
            <div className="card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
              <div style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#C9A84C', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                {isRtl ? 'مهمتنا' : 'Our Mission'}
              </div>
              <p style={{ color: '#7AAFC0', lineHeight: 1.85, fontSize: '0.92rem' }}>
                {isRtl ? group502.missionAr : group502.missionEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">{isRtl ? 'قيمنا الجوهرية' : 'Core Values'}</h2>
            <div className="divider" style={{ margin: '0.75rem auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {group502.values.map((v, i) => (
              <div key={v.en} className="card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #00E6F7, transparent)', opacity: 0.6 }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'rgba(0,230,247,0.08)', border: '1px solid rgba(0,230,247,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                    {v.icon}
                  </div>
                  <div style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#00E6F7', fontSize: '0.8rem', fontWeight: 700 }}>
                    {isRtl ? v.ar : v.en}
                  </div>
                </div>
                <p style={{ color: '#7AAFC0', fontSize: '0.85rem', lineHeight: 1.75 }}>
                  {isRtl ? v.descAr : v.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0', background: 'var(--navy-2)', borderTop: '1px solid rgba(0,230,247,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            {isRtl ? 'مهتم بعلاماتنا التجارية؟' : 'Interested in Our Brands?'}
          </h2>
          <p style={{ color: '#7AAFC0', marginBottom: '1.75rem', fontSize: '0.92rem' }}>
            {isRtl ? 'اكتشف محفظتنا أو تواصل معنا للاستفسار.' : 'Discover our portfolio or reach out for inquiries.'}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/brands" className="btn-cyan" style={{ textDecoration: 'none' }}>
              {isRtl ? 'استكشف علاماتنا' : 'Explore Brands'}
            </Link>
            <Link href="/contact" className="btn-outline" style={{ textDecoration: 'none' }}>
              {isRtl ? 'تواصل معنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
