import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { Lang } from '../types/menu'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  fontClass: string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'hika-menu.lang'
const FONT_CLASS: Record<Lang, string> = {
  zh: 'font-zh',
  en: 'font-sans',
  ja: 'font-ja',
  ko: 'font-ko',
}

function detectInitial(): Lang {
  if (typeof window === 'undefined') return 'zh'
  const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null
  if (saved && ['zh', 'en', 'ja', 'ko'].includes(saved)) return saved
  const nav = window.navigator.language.toLowerCase()
  if (nav.startsWith('ja')) return 'ja'
  if (nav.startsWith('ko')) return 'ko'
  if (nav.startsWith('zh')) return 'zh'
  if (nav.startsWith('en')) return 'en'
  return 'zh'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitial)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* private mode / quota */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang =
      lang === 'zh' ? 'zh-Hant' : lang === 'ja' ? 'ja' : lang === 'ko' ? 'ko' : 'en'
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, fontClass: FONT_CLASS[lang] }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
