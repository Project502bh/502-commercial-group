'use client';
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Lang } from './data';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  // Restore from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang502') as Lang | null;
      if (saved === 'en' || saved === 'ar') setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('lang502', l); } catch {}
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
