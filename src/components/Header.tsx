import { STORE } from '../data/site-info'
import { useLanguage } from '../hooks/useLanguage'

const HERO_SRC = `${import.meta.env.BASE_URL}images/hika.jpg`

export function Header() {
  const { lang } = useLanguage()
  return (
    <header className="bg-white">
      <div className="relative h-[180px] w-full overflow-hidden bg-gold-400">
        <img
          src={HERO_SRC}
          alt={STORE.imageCaption[lang]}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="flex flex-col gap-2.5 px-4 pt-5 pb-4">
        <h1 className="text-[28px] font-extrabold leading-tight text-gold">
          {STORE.name[lang]}
        </h1>
        <p className="text-xs text-ink-muted">{STORE.address[lang]} · TEL {STORE.phone}</p>
      </div>
    </header>
  )
}
