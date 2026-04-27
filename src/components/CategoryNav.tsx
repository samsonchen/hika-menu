import { useEffect, useRef, useState } from 'react'
import { CATEGORY_LABELS, CATEGORY_ORDER } from '../data/site-info'
import { useLanguage } from '../hooks/useLanguage'
import type { Category } from '../types/menu'

export function CategoryNav() {
  const { lang } = useLanguage()
  const [active, setActive] = useState<Category>(CATEGORY_ORDER[0])
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sections = CATEGORY_ORDER.map((c) => document.getElementById(`section-${c}`)).filter(
      (el): el is HTMLElement => !!el,
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          const id = visible.target.id.replace('section-', '') as Category
          setActive(id)
        }
      },
      { rootMargin: '-120px 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (c: Category) => {
    setActive(c)
    const el = document.getElementById(`section-${c}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      ref={tabsRef}
      className="no-scrollbar flex items-end gap-6 overflow-x-auto border-b border-line bg-white px-4"
      role="tablist"
      aria-label="Menu categories"
    >
      {CATEGORY_ORDER.map((c) => {
        const isActive = c === active
        return (
          <button
            key={c}
            role="tab"
            aria-selected={isActive}
            onClick={() => handleClick(c)}
            className="flex shrink-0 flex-col items-center gap-2 pt-3.5"
          >
            <span
              className={`whitespace-nowrap text-sm transition-colors ${
                isActive ? 'font-bold text-ink' : 'font-medium text-ink-muted'
              }`}
            >
              {CATEGORY_LABELS[c][lang]}
            </span>
            <span
              className={`block h-[3px] w-full rounded-t-sm transition-colors ${
                isActive ? 'bg-gold' : 'bg-transparent'
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
