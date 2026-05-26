'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { translations, brands, type Lang } from '@/lib/data';

export default function BrandsPage() {
  const [lang, setLang] = useState<Lang>('en');
  const t = translations[lang];
  const isRtl = lang === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} activePage="brands" />

      {/* Header */}
      <section className="hero-bg" style={{ padding: '4rem 0 3rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#7AAFC0', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#7AAFC0', textDecoration: 'none' }}>{isRtl ? 'الرئيسية' : 'Home'}</Link>
            <span>/</span>
            <span style={{ color: '#00E6F7' }}>{t.nav.brands}</span>
          </div>
          <h1 className="section-title">{isRtl ? 'محفظة علاماتنا التجارية' : 'Our Brand Portfolio'}</h1>
          <div className="divider" />
          <p style={{ color: '#7AAFC0', fontSize: '1rem', maxWidth: '600px', lineHeight: 1.75, marginTop: '1rem' }}>
            {isRtl
              ? 'علامات تجارية متميزة تحت مظلة مجموعة 502 التجارية — كل علامة تمثل التزامنا بالجودة والابتكار.'
              : 'Distinct brands under the 502 Commercial Group umbrella — each representing our commitment to quality and innovation.'}
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {brands.map(b => (
              b.active ? (
                <Link key={b.id} href={`/brands/${b.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${b.color}, transparent)` }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-orbitron), monospace', fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.3rem' }}>
                          {b.name}
                        </div>
                        <div style={{ color: b.color, fontSize: '0.75rem', fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.06em' }}>
                          {isRtl ? b.taglineAr : b.taglineEn}
                        </div>
                      </div>
                      <span style={{ background: 'rgba(0,230,247,0.1)', border: '1px solid rgba(0,230,247,0.3)', borderRadius: '999px', padding: '0.25rem 0.75rem', fontSize: '0.58rem', color: '#00E6F7', fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                        ◆ {isRtl ? 'نشط' : 'LIVE'}
                      </span>
                    </div>

                    <p style={{ color: '#7AAFC0', fontSize: '0.85rem', lineHeight: 1.75, marginBottom: '1.5rem', flexGrow: 1 }}>
                      {isRtl ? b.descAr : b.descEn}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                      {b.tags.map(tag => (
                        <span key={tag} className="tag tag-cyan" style={{ fontSize: '0.62rem' }}>{tag}</span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#00E6F7', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.04em' }}>
                      <span>{isRtl ? 'استكشف العلامة' : 'Explore Brand'}</span>
                      <span>{isRtl ? '←' : '→'}</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={b.id} className="card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden', opacity: 0.4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${b.color}, transparent)` }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div style={{ fontFamily: 'var(--font-orbitron), monospace', fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF' }}>{b.name}</div>
                    <span style={{ background: 'rgba(74,122,138,0.1)', border: '1px solid rgba(74,122,138,0.3)', borderRadius: '999px', padding: '0.25rem 0.75rem', fontSize: '0.58rem', color: '#4A7A8A', fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.1em' }}>
                      {isRtl ? 'قريباً' : 'SOON'}
                    </span>
                  </div>
                  <p style={{ color: '#4A7A8A', fontSize: '0.85rem', lineHeight: 1.75, flexGrow: 1 }}>
                    {isRtl ? b.descAr : b.descEn}
                  </p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section style={{ padding: '4rem 0', background: 'var(--navy-2)', borderTop: '1px solid rgba(0,230,247,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            {isRtl ? 'هل تريد أن تكون ضمن محفظتنا؟' : 'Want to Join Our Portfolio?'}
          </h2>
          <p style={{ color: '#7AAFC0', marginBottom: '1.75rem', fontSize: '0.92rem' }}>
            {isRtl ? 'نحن دائماً نبحث عن علامات تجارية واعدة للانضمام إلى منظومة مجموعة 502.' : 'We are always looking for promising brands to join the 502 Commercial Group ecosystem.'}
          </p>
          <Link href="/contact" className="btn-cyan" style={{ textDecoration: 'none' }}>
            {isRtl ? 'تواصل معنا' : 'Get in Touch'}
          </Link>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
