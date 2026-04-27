import type { LangText, TagCode } from '../types/menu'

export interface TagDef {
  code: TagCode
  icon: string
  label: LangText
  bgClass: string
  textClass: string
}

export const TAGS: Record<TagCode, TagDef> = {
  R: {
    code: 'R',
    icon: '⭐',
    label: { zh: '本店推薦', en: 'Recommended', ja: 'おすすめ', ko: '추천' },
    bgClass: 'bg-gold-200',
    textClass: 'text-gold-dark',
  },
  '1': {
    code: '1',
    icon: '🌶️',
    label: { zh: '小辣', en: 'Mild Spicy', ja: '少し辛い', ko: '약간 매운' },
    bgClass: 'bg-spicy-bg',
    textClass: 'text-spicy-text',
  },
  '2': {
    code: '2',
    icon: '🌶️🌶️',
    label: { zh: '中辣', en: 'Medium Spicy', ja: '中辛', ko: '보통 매운' },
    bgClass: 'bg-spicy-bg',
    textClass: 'text-spicy-text',
  },
  '3': {
    code: '3',
    icon: '🔥',
    label: { zh: '大辣', en: 'Very Spicy', ja: '激辛', ko: '매우 매운' },
    bgClass: 'bg-spicy-bg',
    textClass: 'text-spicy-text',
  },
  P: {
    code: 'P',
    icon: '🐷',
    label: { zh: '含豬肉', en: 'Contains Pork', ja: '豚肉入り', ko: '돼지고기 포함' },
    bgClass: 'bg-meat-bg',
    textClass: 'text-meat-text',
  },
  B: {
    code: 'B',
    icon: '🐂',
    label: { zh: '含牛肉', en: 'Contains Beef', ja: '牛肉入り', ko: '소고기 포함' },
    bgClass: 'bg-meat-bg',
    textClass: 'text-meat-text',
  },
  L: {
    code: 'L',
    icon: '🐑',
    label: { zh: '含羊肉', en: 'Contains Lamb', ja: 'ラム入り', ko: '양고기 포함' },
    bgClass: 'bg-meat-bg',
    textClass: 'text-meat-text',
  },
  V: {
    code: 'V',
    icon: '🥬',
    label: { zh: '素食', en: 'Vegetarian', ja: 'ベジタリアン', ko: '채식' },
    bgClass: 'bg-veg-bg',
    textClass: 'text-veg-text',
  },
  H: {
    code: 'H',
    icon: '☪️',
    label: { zh: '清真認證', en: 'Halal Certified', ja: 'ハラール認証', ko: '할랄 인증' },
    bgClass: 'bg-veg-bg',
    textClass: 'text-veg-text',
  },
}
