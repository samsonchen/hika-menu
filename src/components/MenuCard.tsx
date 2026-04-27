import { UI_TEXT } from '../data/site-info'
import { useLanguage } from '../hooks/useLanguage'
import type { MenuItem } from '../types/menu'
import { TagBadge } from './TagBadge'

interface Props {
  item: MenuItem
  onOpen: (item: MenuItem) => void
}

const IMG_BASE = `${import.meta.env.BASE_URL}images/`

export function MenuCard({ item, onOpen }: Props) {
  const { lang } = useLanguage()
  const priceText = formatPriceLine(item, lang)

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="flex w-full items-center gap-3 rounded-2xl bg-white p-3.5 text-left shadow-card transition-transform active:scale-[0.99]"
    >
      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gold-200">
        {item.image ? (
          <img
            src={`${IMG_BASE}${item.image}`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-[42px] leading-none" aria-hidden>
            {item.emoji}
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <h3 className="truncate text-base font-bold text-ink">{item.names[lang]}</h3>
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <TagBadge key={t} code={t} />
            ))}
          </div>
        )}
        <div className="text-sm font-semibold text-gold">{priceText}</div>
      </div>
    </button>
  )
}

function formatPriceLine(item: MenuItem, lang: 'zh' | 'en' | 'ja' | 'ko'): string {
  return item.price
    .map((p) => {
      const valueText = p.value === 'market' ? UI_TEXT.marketPrice[lang] : `NT$${p.value}`
      if (!p.label) return valueText
      return `${p.label[lang]} · ${valueText}`
    })
    .join('   ')
}
