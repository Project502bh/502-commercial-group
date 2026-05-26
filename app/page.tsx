'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { translations, group502, brands, type Lang } from '@/lib/data';

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('ar');
  const t = translations[lang];
  const isRtl = lang === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} activePage="home" />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero-bg" style={{ padding: '7rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.04 }} />
        <div className="max-w-7xl mx-auto px-6" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,230,247,0.08)', border: '1px solid rgba(0,230,247,0.25)', borderRadius: '999px', padding: '0.35rem 1rem', marginBottom: '1.75rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00E6F7', display: 'inline-block' }} className="pulse-cyan" />
              <span style={{ color: '#00E6F7', fontSize: '0.72rem', fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.1em' }}>
                {isRtl ? 'مجموعة 502 التجارية' : '502 COMMERCIAL GROUP'}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-orbitron), monospace', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              {isRtl ? (
                <>نهندس المستقبل<br /><span className="glow-text">ونمكّن العلامات</span></>
              ) : (
                <>Engineering the Future,<br /><span className="glow-text">Empowering Brands</span></>
              )}
            </h1>

            <p style={{ color: '#7AAFC0', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '600px' }}>
              {isRtl
                ? 'كيان استثماري وإداري متميز — نبني منظومة متكاملة تحتضن العلامات التجارية الواعدة وتحولها إلى رواد الصناعة.'
                : 'A premier investment and management entity — building an integrated ecosystem that transforms promising brands into industry leaders.'}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/brands" className="btn-cyan" style={{ textDecoration: 'none' }}>
                {isRtl ? 'استكشف علاماتنا' : 'Explore Our Brands'}
              </Link>
              <Link href="/about" className="btn-outline" style={{ textDecoration: 'none' }}>
                {isRtl ? 'من نحن' : 'About Us'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Snapshot ───────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--navy-2)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#00E6F7', fontFamily: 'var(--font-orbitron), monospace', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {isRtl ? 'من نحن' : 'About Us'}
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.25rem', fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                {isRtl ? 'المحرك الاستراتيجي للعلامات الواعدة' : 'The Strategic Engine for Promising Brands'}
              </h2>
              <div className="divider" style={{ marginBottom: '1.25rem' }} />
              <p style={{ color: '#7AAFC0', lineHeight: 1.85, fontSize: '0.92rem' }}>
                {isRtl ? group502.aboutAr : group502.aboutEn}
              </p>
              <Link href="/about" className="btn-outline" style={{ display: 'inline-block', marginTop: '1.75rem', textDecoration: 'none' }}>
                {isRtl ? 'اقرأ المزيد' : 'Read More'}
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { num: '502', label: isRtl ? 'المجموعة التجارية' : 'Commercial Group', sub: isRtl ? 'البحرين' : 'Bahrain' },
                { num: '64+', label: isRtl ? 'عطراً مميزاً' : 'Signature Scents', sub: isRtl ? 'Amos Aroma' : 'Amos Aroma' },
                { num: '8', label: isRtl ? 'موزعاً ذكياً' : 'Smart Diffusers', sub: isRtl ? 'طرازاً' : 'Models' },
                { num: '5000', label: isRtl ? 'متر مربع' : 'Square Meters', sub: isRtl ? 'أقصى تغطية' : 'Max Coverage' },
              ].map(s => (
                <div key={s.num} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-orbitron), monospace', fontSize: '1.8rem', fontWeight: 900, color: '#00E6F7', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 600, marginTop: '0.4rem' }}>{s.label}</div>
                  <div style={{ color: '#4A7A8A', fontSize: '0.65rem', marginTop: '0.2rem' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ─────────────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">{isRtl ? 'رؤيتنا ومهمتنا' : 'Vision & Mission'}</h2>
            <div className="divider" style={{ margin: '0.75rem auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #00E6F7, transparent)' }} />
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔭</div>
              <div style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#00E6F7', fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                {isRtl ? 'رؤيتنا' : 'Vision'}
              </div>
              <p style={{ color: '#7AAFC0', lineHeight: 1.8, fontSize: '0.9rem' }}>
                {isRtl ? group502.visionAr : group502.visionEn}
              </p>
            </div>
            <div className="card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
              <div style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#C9A84C', fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                {isRtl ? 'مهمتنا' : 'Mission'}
              </div>
              <p style={{ color: '#7AAFC0', lineHeight: 1.8, fontSize: '0.9rem' }}>
                {isRtl ? group502.missionAr : group502.missionEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--navy-2)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">{isRtl ? 'قيمنا الجوهرية' : 'Core Values'}</h2>
            <div className="divider" style={{ margin: '0.75rem auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {group502.values.map(v => (
              <div key={v.en} className="card" style={{ padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '0.85rem' }}>{v.icon}</div>
                <div style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#00E6F7', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.6rem', letterSpacing: '0.04em' }}>
                  {isRtl ? v.ar : v.en}
                </div>
                <p style={{ color: '#7AAFC0', fontSize: '0.82rem', lineHeight: 1.7 }}>
                  {isRtl ? v.descAr : v.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brands Portfolio Preview ─────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">{isRtl ? 'محفظة علاماتنا' : 'Our Brand Portfolio'}</h2>
            <div className="divider" style={{ margin: '0.75rem auto' }} />
            <p style={{ color: '#7AAFC0', fontSize: '0.92rem', marginTop: '0.75rem' }}>
              {isRtl ? 'علامات تجارية مختارة بعناية لتلبية احتياجات السوق البحريني' : 'Carefully curated brands meeting the needs of the Bahraini market'}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {brands.map(b => (
              b.active ? (
                <Link key={b.id} href={`/brands/${b.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s', height: '100%' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${b.color}, transparent)` }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div style={{ fontFamily: 'var(--font-orbitron), monospace', fontSize: '1.1rem', fontWeight: 900, color: '#FFFFFF' }}>{b.name}</div>
                      <span style={{ background: 'rgba(0,230,247,0.1)', border: '1px solid rgba(0,230,247,0.3)', borderRadius: '999px', padding: '0.2rem 0.65rem', fontSize: '0.6rem', color: '#00E6F7', fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.08em' }}>
                        {isRtl ? 'نشط' : 'ACTIVE'}
                      </span>
                    </div>
                    <div style={{ color: b.color, fontSize: '0.75rem', marginBottom: '0.85rem', fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.04em' }}>
                      {isRtl ? b.taglineAr : b.taglineEn}
                    </div>
                    <p style={{ color: '#7AAFC0', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                      {isRtl ? b.descAr : b.descEn}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                      {b.tags.map(tag => (
                        <span key={tag} className="tag tag-cyan" style={{ fontSize: '0.6rem' }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ color: '#00E6F7', fontSize: '0.78rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      {isRtl ? 'استكشف ←' : '→ Explore Brand'}
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={b.id} className="card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden', opacity: 0.45, height: '100%' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${b.color}, transparent)` }} />
                  <div style={{ fontFamily: 'var(--font-orbitron), monospace', fontSize: '1.1rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.5rem' }}>{b.name}</div>
                  <div style={{ color: '#4A7A8A', fontSize: '0.75rem', fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.08em' }}>
                    {isRtl ? b.taglineAr : b.taglineEn}
                  </div>
                </div>
              )
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/brands" className="btn-cyan" style={{ textDecoration: 'none' }}>
              {isRtl ? 'جميع العلامات التجارية' : 'View All Brands'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, rgba(0,230,247,0.06) 0%, rgba(37,70,99,0.3) 100%)', borderTop: '1px solid rgba(0,230,247,0.1)', borderBottom: '1px solid rgba(0,230,247,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#FFFFFF', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
            {isRtl ? 'هل أنت مستعد للشراكة معنا؟' : 'Ready to Partner with Us?'}
          </h2>
          <p style={{ color: '#7AAFC0', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
            {isRtl ? 'تواصل معنا لاستكشاف فرص التعاون وتمثيل علاماتنا في السوق.' : 'Get in touch to explore partnership and representation opportunities.'}
          </p>
          <Link href="/contact" className="btn-cyan" style={{ textDecoration: 'none' }}>
            {isRtl ? 'تواصل معنا' : 'Contact Us'}
          </Link>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
