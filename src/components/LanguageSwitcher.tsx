import { LANG_OPTIONS } from '../data/site-info'
import { useLanguage } from '../hooks/useLanguage'

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="flex items-center gap-2 border-b border-line bg-white/95 px-4 py-2.5 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      {LANG_OPTIONS.map((opt) => {
        const active = opt.code === lang
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLang(opt.code)}
            className={`rounded-full px-3.5 py-1.5 text-[13px] transition-colors ${
              active
                ? 'bg-gold font-semibold text-white'
                : 'font-medium text-ink hover:bg-gold-100'
            } ${opt.fontClass}`}
            aria-pressed={active}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
