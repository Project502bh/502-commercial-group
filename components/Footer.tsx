import Link from 'next/link';
import Image from 'next/image';
import { translations } from '@/lib/data';
import { useLang } from '@/lib/LangContext';

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang];
  const isRtl = lang === 'ar';

  return (
    <footer dir={isRtl ? 'rtl' : 'ltr'} style={{ background: 'var(--navy-2)', borderTop: '1px solid rgba(0,230,247,0.1)', marginTop: '0' }}>
      {/* Top glow line */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #00E6F7, transparent)', opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Image src="/logo.svg" alt="502 Commercial Group" width={42} height={42} style={{ objectFit: 'contain' }} unoptimized />
              <div>
                <div style={{ fontFamily: 'var(--font-orbitron), monospace', fontWeight: 900, fontSize: '0.95rem', color: '#FFFFFF', letterSpacing: '0.06em', lineHeight: 1.1 }}>
                  502 <span style={{ color: '#00E6F7' }}>COMMERCIAL</span>
                </div>
                <div style={{ fontFamily: 'var(--font-orbitron), monospace', fontSize: '0.55rem', color: '#4A7A8A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>GROUP</div>
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontSize: '0.72rem', color: '#4A7A8A', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              {t.footer.distributor}
            </div>
            <div style={{ color: '#3A5A6A', fontSize: '0.72rem', lineHeight: 1.6 }}>
              Powered by Guangdong Amos<br />Intelligent Equipment Co., Ltd.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#00E6F7', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {lang === 'ar' ? 'روابط سريعة' : 'Navigation'}
            </div>
            {[
              { en: 'Smart Diffusers', ar: 'أجهزة التعطير', href: '/diffusers' },
              { en: 'Fragrance Library', ar: 'مكتبة العطور', href: '/fragrances' },
              { en: 'Lifestyle & Gifts', ar: 'منتجات الأفراد', href: '/lifestyle' },
              { en: 'Contact Us', ar: 'تواصل معنا', href: '/contact' },
            ].map(l => (
              <div key={l.href} style={{ marginBottom: '0.5rem' }}>
                <Link href={l.href} style={{ color: '#7AAFC0', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00E6F7')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#7AAFC0')}
                >
                  {isRtl ? l.ar : l.en}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#00E6F7', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {lang === 'ar' ? 'تواصل معنا' : 'Contact'}
            </div>
            <div style={{ color: '#7AAFC0', fontSize: '0.82rem', lineHeight: 2 }}>
              <div>📧 info@502group.bh</div>
              <div>📞 +973 33080502</div>
              <div>🌐 www.502group.bh</div>
            </div>
          </div>

          {/* Amos */}
          <div>
            <div style={{ fontFamily: 'var(--font-orbitron), monospace', color: '#00E6F7', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Amos Aroma
            </div>
            <div style={{ color: '#7AAFC0', fontSize: '0.82rem', lineHeight: 2 }}>
              <div>www.amosaroma.com</div>
              <div>Guangzhou, China</div>
            </div>
            <div style={{ marginTop: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(0,230,247,0.07)', border: '1px solid rgba(0,230,247,0.2)', borderRadius: '0.25rem', padding: '0.3rem 0.75rem', fontSize: '0.65rem', color: '#00E6F7', fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.06em' }}>
              ◆ IoT CERTIFIED
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(0,230,247,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ color: '#3A5A6A', fontSize: '0.75rem', fontFamily: 'var(--font-montserrat), sans-serif' }}>
            © 2026 502 Commercial Group. {t.footer.rights}
          </span>
          <span style={{ color: '#3A5A6A', fontSize: '0.75rem', fontFamily: 'var(--font-orbitron), monospace', letterSpacing: '0.08em' }}>
            {lang === 'ar' ? 'مملكة البحرين' : 'KINGDOM OF BAHRAIN'}
          </span>
        </div>
      </div>
    </footer>
  );
}
