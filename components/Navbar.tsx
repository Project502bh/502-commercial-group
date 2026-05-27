'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { translations } from '@/lib/data';
import { useLang } from '@/lib/LangContext';

interface NavbarProps {
  activePage?: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  const { lang, setLang } = useLang();
  const t = translations[lang];
  const [open, setOpen] = useState(false);
  const isRtl = lang === 'ar';

  const links = [
    { key: 'home',    href: '/' },
    { key: 'about',   href: '/about' },
    { key: 'brands',  href: '/brands' },
    { key: 'contact', href: '/contact' },
  ] as const;

  return (
    <nav style={{
      background: 'rgba(10,21,32,0.97)',
      borderBottom: '1px solid rgba(0,230,247,0.12)',
      backdropFilter: 'blur(16px)',
    }} className="sticky top-0 z-50">
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #00E6F7, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16" dir={isRtl ? 'rtl' : 'ltr'}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <Image
              src="/logo.svg"
              alt="502 Commercial Group"
              width={44}
              height={44}
              style={{ objectFit: 'contain' }}
              unoptimized
              priority
            />
            <div>
              <div style={{
                fontFamily: 'var(--font-orbitron), monospace',
                fontWeight: 800,
                fontSize: '0.95rem',
                color: '#FFFFFF',
                letterSpacing: '0.06em',
                lineHeight: 1.1,
              }}>
                502 <span style={{ color: '#00E6F7' }}>COMMERCIAL</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-montserrat), sans-serif',
                color: '#7AAFC0',
                fontSize: '0.58rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>
                {isRtl ? 'مجموعة تجارية · البحرين' : 'COMMERCIAL GROUP · BAHRAIN'}
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <Link key={l.key} href={l.href}
                style={{
                  fontFamily: 'var(--font-montserrat), sans-serif',
                  color: activePage === l.key ? '#00E6F7' : '#7AAFC0',
                  fontSize: '0.78rem',
                  fontWeight: activePage === l.key ? 600 : 400,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                  borderBottom: activePage === l.key ? '1px solid #00E6F7' : '1px solid transparent',
                  paddingBottom: '2px',
                }}
                onMouseEnter={e => { if (activePage !== l.key) (e.currentTarget as HTMLElement).style.color = '#E8F6FF'; }}
                onMouseLeave={e => { if (activePage !== l.key) (e.currentTarget as HTMLElement).style.color = '#7AAFC0'; }}
              >
                {t.nav[l.key]}
              </Link>
            ))}
          </div>

          {/* Lang toggle + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} style={{
              border: '1px solid rgba(0,230,247,0.4)',
              color: '#00E6F7',
              padding: '0.3rem 0.85rem',
              borderRadius: '0.25rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              cursor: 'pointer',
              background: 'rgba(0,230,247,0.06)',
              fontFamily: 'var(--font-orbitron), monospace',
              letterSpacing: '0.06em',
              transition: 'all 0.2s',
            }}>
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <button className="md:hidden" onClick={() => setOpen(!open)} style={{
              color: '#00E6F7', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem',
            }}>
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(10,21,32,0.98)', borderTop: '1px solid rgba(0,230,247,0.1)', padding: '0.5rem 1.5rem 1rem' }}>
          {links.map(l => (
            <Link key={l.key} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block',
              padding: '0.85rem 0',
              borderBottom: '1px solid rgba(0,230,247,0.08)',
              color: activePage === l.key ? '#00E6F7' : '#7AAFC0',
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontSize: '0.9rem',
              fontWeight: activePage === l.key ? 600 : 500,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}>
              {t.nav[l.key]}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
