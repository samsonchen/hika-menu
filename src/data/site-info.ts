import type { Category, Lang, LangText } from '../types/menu'

export const STORE: {
  name: LangText
  address: LangText
  phone: string
  imageEmoji: string
  imageCaption: LangText
  timeLimit: LangText
  minSpend: LangText
} = {
  name: {
    zh: '嗨咖驛站 Hika',
    en: 'Hika Station',
    ja: 'ハイカ駅',
    ko: 'Hika 스테이션',
  },
  address: {
    zh: '花蓮縣豐濱鄉豐濱村永豐 14 號',
    en: 'No. 14, Yongfeng, Fengbin, Hualien County',
    ja: '花蓮県豊浜郷豊浜村永豊14号',
    ko: '화롄현 펑빈향 펑빈촌 융펑 14호',
  },
  phone: '03-8791988',
  imageEmoji: '🌊  🐟',
  imageCaption: {
    zh: '東海岸鮮魚',
    en: 'East Coast Fresh Catch',
    ja: '東海岸の新鮮魚',
    ko: '동해안 신선한 해산물',
  },
  timeLimit: {
    zh: '⏱  用餐限時 90 分鐘',
    en: '⏱  90 min dining limit',
    ja: '⏱  食事時間 90 分',
    ko: '⏱  90분 식사 제한',
  },
  minSpend: {
    zh: '💰  每人低消 NT$300',
    en: '💰  Min. NT$300 per person',
    ja: '💰  1人 NT$300 以上',
    ko: '💰  1인 최소 NT$300',
  },
}

export const CATEGORY_LABELS: Record<Category, LangText> = {
  seafood: { zh: '海鮮類', en: 'Seafood', ja: '海鮮料理', ko: '해산물' },
  saltbaked: { zh: '鹽烤類', en: 'Salt-Baked', ja: '塩焼き', ko: '소금구이' },
  soup: { zh: '湯品類', en: 'Soups', ja: 'スープ', ko: '국·탕' },
  vegetable: { zh: '蔬菜類', en: 'Vegetables', ja: '野菜料理', ko: '채소요리' },
  ricedish: { zh: '下飯類', en: 'Pairs with Rice', ja: 'ご飯のおかず', ko: '밥반찬' },
  friedfood: { zh: '炸物類', en: 'Deep-Fried', ja: '揚げ物', ko: '튀김' },
  limited: { zh: '每日限量', en: 'Limited Daily', ja: '本日限定', ko: '오늘의 한정' },
}

export const CATEGORY_ORDER: Category[] = [
  'seafood',
  'saltbaked',
  'soup',
  'vegetable',
  'ricedish',
  'friedfood',
  'limited',
]

export const UI_TEXT: Record<
  'specs' | 'description' | 'note' | 'marketPrice' | 'closeLabel' | 'bowl' | 'cup' | 'pot' | 'large' | 'small',
  LangText
> = {
  specs: { zh: '規格', en: 'Specs', ja: '規格', ko: '규격' },
  description: { zh: '說明', en: 'Description', ja: '説明', ko: '설명' },
  note: { zh: '備註', en: 'Note', ja: '備考', ko: '비고' },
  marketPrice: { zh: '時價', en: 'Market Price', ja: '時価', ko: '시가' },
  closeLabel: { zh: '關閉', en: 'Close', ja: '閉じる', ko: '닫기' },
  bowl: { zh: '一碗', en: '1 bowl', ja: '1杯', ko: '한 그릇' },
  cup: { zh: '杯', en: 'Cup', ja: 'カップ', ko: '컵' },
  pot: { zh: '壺', en: 'Pot', ja: 'ポット', ko: '주전자' },
  large: { zh: '大', en: 'Large', ja: '大', ko: '대' },
  small: { zh: '小', en: 'Small', ja: 'Small', ko: '소' },
}

export const LANG_OPTIONS: Array<{ code: Lang; label: string; fontClass: string }> = [
  { code: 'zh', label: '中文', fontClass: 'font-zh' },
  { code: 'en', label: 'EN', fontClass: 'font-sans' },
  { code: 'ja', label: '日本語', fontClass: 'font-ja' },
  { code: 'ko', label: '한국어', fontClass: 'font-ko' },
]
