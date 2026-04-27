import { TAGS } from '../data/tags'
import { useLanguage } from '../hooks/useLanguage'
import type { TagCode } from '../types/menu'

interface Props {
  code: TagCode
  size?: 'sm' | 'md'
}

export function TagBadge({ code, size = 'sm' }: Props) {
  const { lang } = useLanguage()
  const tag = TAGS[code]
  const padding = size === 'md' ? 'px-2.5 py-1' : 'px-1.5 py-0.5'
  const text = size === 'md' ? 'text-xs' : 'text-[11px]'
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md font-semibold ${padding} ${text} ${tag.bgClass} ${tag.textClass}`}
    >
      <span aria-hidden>{tag.icon}</span>
      <span>{tag.label[lang]}</span>
    </span>
  )
}
