import { useEffect, useRef, useState } from 'react'
import { UI_TEXT } from '../data/site-info'
import { useLanguage } from '../hooks/useLanguage'
import type { MenuItem } from '../types/menu'
import { TagBadge } from './TagBadge'

interface Props {
  item: MenuItem | null
  onClose: () => void
}

const IMG_BASE = `${import.meta.env.BASE_URL}images/`
const MIN_ZOOM = 1
const MAX_ZOOM = 4

export function ItemDetailModal({ item, onClose }: Props) {
  const { lang } = useLanguage()
  const sheetRef = useRef<HTMLDivElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const [zoom, setZoom] = useState(1)
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map())
  const startDist = useRef(0)
  const startZoom = useRef(1)

  useEffect(() => {
    if (!item) return
    const prevOverflow = document.body.style.overflow
    const prevScrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    setZoom(1)
    return () => {
      document.body.style.overflow = prevOverflow
      window.scrollTo(0, prevScrollY)
    }
  }, [item])

  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [item, onClose])

  if (!item) return null

  const onPointerDown = (e: React.PointerEvent) => {
    if (!item.image) return
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.current.size === 2) {
      const [a, b] = Array.from(pointers.current.values())
      startDist.current = Math.hypot(a.x - b.x, a.y - b.y)
      startZoom.current = zoom
    }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.current.size === 2 && startDist.current > 0) {
      const [a, b] = Array.from(pointers.current.values())
      const dist = Math.hypot(a.x - b.x, a.y - b.y)
      const next = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, startZoom.current * (dist / startDist.current)))
      setZoom(next)
    }
  }
  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) startDist.current = 0
  }
  const onDoubleTap = () => setZoom((z) => (z > 1.2 ? 1 : 2))

  const showDesc = Object.values(item.desc).some((v) => v.trim() !== '')
  const showNote = Object.values(item.note).some((v) => v.trim() !== '')

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.names[lang]}
      className="hika-overlay fixed inset-0 z-50 flex flex-col bg-black/70"
      onClick={onClose}
    >
      <div className="flex-1" />
      <div
        ref={sheetRef}
        className="hika-sheet relative flex max-h-[calc(100vh-3.5rem)] w-full flex-col overflow-y-auto rounded-t-3xl bg-white shadow-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={imageWrapRef}
          className="relative flex h-[280px] w-full shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-gold-200 to-gold"
          style={{ touchAction: 'none' }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onDoubleClick={onDoubleTap}
        >
          {item.image ? (
            <img
              src={`${IMG_BASE}${item.image}`}
              alt={item.names[lang]}
              className="h-full w-full select-none object-cover transition-transform duration-150 ease-out"
              style={{ transform: `scale(${zoom})` }}
              draggable={false}
            />
          ) : (
            <span className="text-[128px] leading-none" aria-hidden>
              {item.emoji}
            </span>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label={UI_TEXT.closeLabel[lang]}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-base font-semibold text-ink shadow-sm backdrop-blur"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-[18px] px-5 pb-8 pt-6">
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <TagBadge key={t} code={t} size="md" />
              ))}
            </div>
          )}

          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-extrabold leading-tight text-ink">{item.names[lang]}</h2>
            {lang !== 'en' && (
              <p className="text-[13px] font-medium text-ink-subtle">{item.names.en}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 rounded-2xl border border-gold-300 bg-gold-50 p-4">
            <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-ink-subtle">
              {UI_TEXT.specs[lang]}
            </div>
            <PriceList item={item} />
          </div>

          {showDesc && (
            <section className="flex flex-col gap-2">
              <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-ink-subtle">
                {UI_TEXT.description[lang]}
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">{item.desc[lang]}</p>
            </section>
          )}

          {showNote && (
            <div className="flex items-start gap-2 rounded-xl bg-gold-100 p-3 text-[12px] leading-relaxed text-[#7A6A2B]">
              <span aria-hidden>💡</span>
              <span>
                <span className="mr-1 font-semibold">{UI_TEXT.note[lang]}：</span>
                {item.note[lang]}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function PriceList({ item }: { item: MenuItem }) {
  const { lang } = useLanguage()
  const rows = item.price
  if (rows.length === 1 && !rows[0].label) {
    const v = rows[0].value
    return (
      <div className="text-2xl font-extrabold text-gold">
        {v === 'market' ? UI_TEXT.marketPrice[lang] : `NT$${v}`}
      </div>
    )
  }
  return (
    <div className="flex flex-col">
      {rows.map((r, i) => (
        <div key={i}>
          <div className="flex items-center justify-between py-1.5">
            <span className="text-sm font-medium text-ink">{r.label?.[lang] ?? ''}</span>
            <span className="text-base font-bold text-gold">
              {r.value === 'market' ? UI_TEXT.marketPrice[lang] : `NT$${r.value}`}
            </span>
          </div>
          {i < rows.length - 1 && <div className="h-px bg-gold-300" />}
        </div>
      ))}
    </div>
  )
}
