import { useMemo, useState } from 'react'
import { CategoryNav } from './components/CategoryNav'
import { Header } from './components/Header'
import { ItemDetailModal } from './components/ItemDetailModal'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { MenuSection } from './components/MenuSection'
import { menuItems } from './data/menu-i18n'
import { CATEGORY_ORDER } from './data/site-info'
import { LanguageProvider, useLanguage } from './hooks/useLanguage'
import type { Category, MenuItem } from './types/menu'

function MenuApp() {
  const [active, setActive] = useState<MenuItem | null>(null)
  const { fontClass } = useLanguage()

  const grouped = useMemo(() => {
    const map = Object.fromEntries(CATEGORY_ORDER.map((c) => [c, [] as MenuItem[]])) as Record<
      Category,
      MenuItem[]
    >
    for (const it of menuItems) map[it.category].push(it)
    return map
  }, [])

  return (
    <div className={`mx-auto flex min-h-screen max-w-[440px] flex-col bg-canvas ${fontClass}`}>
      <Header />
      <div className="sticky top-0 z-30">
        <LanguageSwitcher />
        <CategoryNav />
      </div>
      <main className="flex flex-col gap-6 px-4 pb-12 pt-6">
        {CATEGORY_ORDER.map((cat) => (
          <MenuSection key={cat} category={cat} items={grouped[cat]} onOpen={setActive} />
        ))}
      </main>
      <ItemDetailModal item={active} onClose={() => setActive(null)} />
    </div>
  )
}

export function App() {
  return (
    <LanguageProvider>
      <MenuApp />
    </LanguageProvider>
  )
}
