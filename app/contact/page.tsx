'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { translations, type Lang } from '@/lib/data';

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const infoItems = [
    { icon: '📧', en: 'Email', ar: 'البريد الإلكتروني', val: 'info@502group.bh' },
    { icon: '📞', en: 'Phone', ar: 'الهاتف', val: '+973 XXXX XXXX' },
    { icon: '🌐', en: 'Website', ar: 'الموقع', val: 'www.502group.bh' },
    { icon: '🏢', en: 'Location', ar: 'الموقع', val: isRtl ? 'مملكة البحرين' : 'Kingdom of Bahrain' },
  ];

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} activePage="contact" />

      {/* Header */}
      <section className="hero-bg" style={{ padding: '4rem 0 3rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9A9080', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#9A9080' }}>{isRtl ? 'الرئيسية' : 'Home'}</Link>
            <span>/</span>
            <span style={{ color: '#C9A84C' }}>{t.nav.contact}</span>
          </div>
          <h1 className="section-title">{t.contact.title}</h1>
          <div className="divider" />
          <p style={{ color: '#9A9080', fontSize: '1rem', maxWidth: '560px', lineHeight: 1.7 }}>{t.contact.subtitle}</p>
        </div>
      </section>

      <section style={{ padding: '3rem 0 5rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }}>

            {/* Left: Info */}
            <div>
              {/* Contact details */}
              <div style={{ marginBottom: '2.5rem' }}>
                {infoItems.map(item => (
                  <div key={item.icon} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ color: '#9A9080', fontSize: '0.72rem', marginBottom: '0.2rem' }}>{isRtl ? item.ar : item.en}</div>
                      <div style={{ color: '#E8E0D0', fontSize: '0.9rem' }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Amos card */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ color: '#C9A84C', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  Guangdong Amos Intelligent Equipment
                </div>
                <div style={{ color: '#9A9080', fontSize: '0.8rem', lineHeight: 1.7 }}>
                  <div>📞 +86 020 29073393</div>
                  <div>📠 +86 020 31234206</div>
                  <div>🌐 www.amosaroma.com</div>
                  <div style={{ marginTop: '0.5rem' }}>Guangzhou, Guangdong, China</div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'rgba(37,211,102,0.06)', border: '1px solid rgba(37,211,102,0.2)', borderRadius: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💬</div>
                <div style={{ color: '#E8E0D0', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
                  {isRtl ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                </div>
                <div style={{ color: '#9A9080', fontSize: '0.8rem' }}>+973 XXXX XXXX</div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {sent ? (
                <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ color: '#C9A84C', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    {isRtl ? 'تم الإرسال بنجاح!' : 'Message Sent!'}
                  </h3>
                  <p style={{ color: '#9A9080', marginBottom: '1.5rem' }}>
                    {isRtl ? 'سنتواصل معك خلال 24 ساعة.' : 'We\'ll get back to you within 24 hours.'}
                  </p>
                  <button onClick={() => setSent(false)} className="btn-outline">
                    {isRtl ? 'إرسال رسالة أخرى' : 'Send Another'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ color: '#9A9080', fontSize: '0.8rem', display: 'block', marginBottom: '0.35rem' }}>{t.contact.name}</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder={isRtl ? 'الاسم الكامل' : 'Full Name'} />
                    </div>
                    <div>
                      <label style={{ color: '#9A9080', fontSize: '0.8rem', display: 'block', marginBottom: '0.35rem' }}>{t.contact.phone}</label>
                      <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+973 XXXX XXXX" />
                    </div>
                  </div>

                  <div>
                    <label style={{ color: '#9A9080', fontSize: '0.8rem', display: 'block', marginBottom: '0.35rem' }}>{t.contact.email}</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="email@example.com" />
                  </div>

                  <div>
                    <label style={{ color: '#9A9080', fontSize: '0.8rem', display: 'block', marginBottom: '0.35rem' }}>{t.contact.type}</label>
                    <select required value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                      <option value="">{isRtl ? 'اختر نوع الاستفسار' : 'Select inquiry type'}</option>
                      {t.contact.typeOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={{ color: '#9A9080', fontSize: '0.8rem', display: 'block', marginBottom: '0.35rem' }}>{t.contact.message}</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder={isRtl ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                    />
                  </div>

                  <button type="submit" className="btn-gold" style={{ width: '100%', textAlign: 'center' }}>
                    {t.contact.send}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
