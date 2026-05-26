'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { translations, fragrances, fragranceFamilies, concentrations, type Lang } from '@/lib/data';

const familyIcons: Record<string, string> = {
  Citrus: '🍋', Floral: '🌸', 'Fresh Woody': '🌿', 'Fresh Fruity': '🍑', 'Oriental Woody': '🪵',
  'Oriental Floral': '🌺', Woody: '🌲', Aquatic: '🌊', 'Floral Fruity': '🌷',
};

export default function FragrancesPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [family, setFamily] = useState('All');
  const [concentration, setConcentration] = useState('All');
  const [hotelOnly, setHotelOnly] = useState(false);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<number | null>(null);
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const filtered = useMemo(() => {
    return fragrances.filter(f => {
      if (family !== 'All' && f.family !== family) return false;
      if (concentration !== 'All' && f.concentration !== concentration) return false;
      if (hotelOnly && !f.hotelInspired) return false;
      if (search && !f.nameEn.toLowerCase().includes(search.toLowerCase()) && !f.profile.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [family, concentration, hotelOnly, search]);

  const concClass = (c: string) => c === 'Light' ? 'light' : c === 'Strong' ? 'strong' : c === 'Economy' ? 'economy' : 'low';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} activePage="fragrances" />

      {/* Header */}
      <section className="hero-bg" style={{ padding: '4rem 0 3rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9A9080', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#9A9080' }}>{isRtl ? 'الرئيسية' : 'Home'}</Link>
            <span>/</span>
            <span style={{ color: '#C9A84C' }}>{t.nav.fragrances}</span>
          </div>
          <h1 className="section-title">{t.fragrances.title}</h1>
          <div className="divider" />
          <p style={{ color: '#9A9080', fontSize: '1rem', maxWidth: '640px', lineHeight: 1.7 }}>{t.fragrances.subtitle}</p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: '2rem 0', background: '#0D0D0D', borderBottom: '1px solid rgba(201,168,76,0.1)', position: 'sticky', top: '64px', zIndex: 40 }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Search */}
            <input
              type="text"
              placeholder={isRtl ? 'ابحث عن عطر...' : 'Search fragrance...'}
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '200px', padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
            />

            {/* Family */}
            <select value={family} onChange={e => setFamily(e.target.value)} style={{ width: 'auto', padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}>
              {fragranceFamilies.map(f => (
                <option key={f} value={f}>{f === 'All' ? (isRtl ? 'كل العائلات' : 'All Families') : f}</option>
              ))}
            </select>

            {/* Concentration */}
            <select value={concentration} onChange={e => setConcentration(e.target.value)} style={{ width: 'auto', padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}>
              {concentrations.map(c => (
                <option key={c} value={c}>{c === 'All' ? (isRtl ? 'كل التركيزات' : 'All Concentrations') : c}</option>
              ))}
            </select>

            {/* Hotel only */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: '#9A9080', fontSize: '0.85rem', userSelect: 'none' }}>
              <input type="checkbox" checked={hotelOnly} onChange={e => setHotelOnly(e.target.checked)}
                style={{ width: 'auto', accentColor: '#C9A84C' }} />
              {isRtl ? 'مستوحى من الفنادق' : 'Hotel Inspired'}
            </label>

            <span style={{ color: '#9A9080', fontSize: '0.8rem', marginInlineStart: 'auto' }}>
              {filtered.length} {isRtl ? 'عطر' : 'fragrances'}
            </span>
          </div>
        </div>
      </section>

      {/* Family quick-filter chips */}
      <section style={{ padding: '1.25rem 0', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
            {fragranceFamilies.map(f => (
              <button key={f} onClick={() => setFamily(f)}
                style={{
                  padding: '0.3rem 0.85rem',
                  borderRadius: '999px',
                  border: '1px solid',
                  borderColor: family === f ? '#C9A84C' : 'rgba(201,168,76,0.2)',
                  background: family === f ? 'rgba(201,168,76,0.15)' : 'transparent',
                  color: family === f ? '#C9A84C' : '#9A9080',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                }}>
                {familyIcons[f] || '✦'} {f === 'All' ? (isRtl ? 'الكل' : 'All') : f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fragrances Grid */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#9A9080', padding: '5rem 0' }}>
              {isRtl ? 'لا توجد عطور تطابق البحث' : 'No fragrances match your filters'}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.25rem' }}>
              {filtered.map(f => (
                <div key={f.id} className="card" style={{ padding: '1.5rem', cursor: 'pointer' }}
                  onClick={() => setExpanded(expanded === f.id ? null : f.id)}>
                  {/* Header row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: '#E8E0D0', fontWeight: 700, fontSize: '1rem' }}>{f.nameEn}</div>
                      <div style={{ color: '#9A9080', fontSize: '0.72rem', marginTop: '0.2rem' }}>
                        {familyIcons[f.family] || '✦'} {f.profile}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                      <span className={`tag tag-${concClass(f.concentration)}`}>{f.concentration}</span>
                      {f.hotelInspired && <span style={{ fontSize: '0.65rem', color: '#C9A84C' }}>🏨</span>}
                    </div>
                  </div>

                  {/* Top notes preview */}
                  <div style={{ marginBottom: '0.75rem' }}>
                    {f.topNotes.split(', ').slice(0, 4).map(n => (
                      <span key={n} className="note-pill">{n}</span>
                    ))}
                  </div>

                  {/* Inspiration */}
                  <p style={{ color: '#706860', fontSize: '0.77rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                    {expanded === f.id ? f.inspiration : f.inspiration.slice(0, 80) + '…'}
                  </p>

                  {/* Expanded details */}
                  {expanded === f.id && (
                    <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '1rem' }}>
                      <div style={{ marginBottom: '0.75rem' }}>
                        <div style={{ color: '#C9A84C', fontSize: '0.72rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                          ▲ {t.fragrances.topNotes}
                        </div>
                        <div>{f.topNotes.split(', ').map(n => <span key={n} className="note-pill">{n}</span>)}</div>
                      </div>
                      <div style={{ marginBottom: '0.75rem' }}>
                        <div style={{ color: '#C9A84C', fontSize: '0.72rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                          ◆ {t.fragrances.middleNotes}
                        </div>
                        <div>{f.middleNotes.split(', ').map(n => <span key={n} className="note-pill">{n}</span>)}</div>
                      </div>
                      <div style={{ marginBottom: '0.75rem' }}>
                        <div style={{ color: '#C9A84C', fontSize: '0.72rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                          ▼ {t.fragrances.baseNotes}
                        </div>
                        <div>{f.baseNotes.split(', ').map(n => <span key={n} className="note-pill">{n}</span>)}</div>
                      </div>
                      <div style={{ color: '#9A9080', fontSize: '0.7rem', marginTop: '0.5rem' }}>
                        Code: <span style={{ color: '#C9A84C' }}>{f.code}</span>
                      </div>
                      <Link href="/contact" className="btn-gold" style={{ display: 'block', textAlign: 'center', marginTop: '1rem', padding: '0.5rem' }}
                        onClick={e => e.stopPropagation()}>
                        {isRtl ? 'طلب عينة' : 'Request Sample'}
                      </Link>
                    </div>
                  )}

                  <div style={{ color: '#C9A84C', fontSize: '0.72rem', textAlign: 'center', marginTop: '0.5rem' }}>
                    {expanded === f.id ? (isRtl ? '▲ إخفاء' : '▲ Close') : (isRtl ? '▼ التفاصيل' : '▼ Details')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
