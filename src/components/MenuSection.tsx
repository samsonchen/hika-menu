import { CATEGORY_LABELS } from '../data/site-info'
import { useLanguage } from '../hooks/useLanguage'
import type { Category, MenuItem } from '../types/menu'
import { MenuCard } from './MenuCard'

interface Props {
  category: Category
  items: MenuItem[]
  onOpen: (item: MenuItem) => void
}

export function MenuSection({ category, items, onOpen }: Props) {
  const { lang } = useLanguage()
  if (items.length === 0) return null
  return (
    <section
      id={`section-${category}`}
      className="scroll-smooth-anchor flex flex-col gap-3.5"
      aria-labelledby={`heading-${category}`}
    >
      <header className="flex items-center gap-3 px-1">
        <span className="h-5 w-1 rounded-full bg-gold" aria-hidden />
        <h2 id={`heading-${category}`} className="text-lg font-bold tracking-wide text-ink">
          {CATEGORY_LABELS[category][lang]}
        </h2>
        <span className="text-xs font-medium text-ink-subtle">{items.length}</span>
      </header>
      <div className="flex flex-col gap-3">
        {items.map((it) => (
          <MenuCard key={it.id} item={it} onOpen={onOpen} />
        ))}
      </div>
    </section>
  )
}
