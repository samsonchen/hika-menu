export type Lang = 'zh' | 'en' | 'ja' | 'ko'

export type Category =
  | 'seafood'
  | 'saltbaked'
  | 'soup'
  | 'vegetable'
  | 'ricedish'
  | 'friedfood'
  | 'limited'

export type TagCode = 'R' | '1' | '2' | '3' | 'P' | 'B' | 'L' | 'V' | 'H'

export type LangText = Record<Lang, string>

export type PriceValue = number | 'market'

export interface PriceOption {
  label: LangText | null
  value: PriceValue
}

export interface MenuItem {
  id: string
  category: Category
  names: LangText
  price: PriceOption[]
  image: string | null
  emoji: string
  tags: TagCode[]
  desc: LangText
  note: LangText
}
