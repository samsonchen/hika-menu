// ═══════════════════════════════════════════════════════════════════════════
//  菜單原始資料 — 餐廳業者在此編輯
//
//  欄位說明：
//    category  分類（對應 Canva 章節）：
//                'seafood'    生猛海鮮類
//                'saltbaked'  鹽烤類
//                'soup'       湯品類
//                'vegetable'  蔬菜類
//                'ricedish'   下飯類（含白飯）
//                'friedfood'  炸物類
//                'limited'    每日限量
//    name      品項中文名稱
//    options   價格選項，字串陣列：
//                不分規格 → ['270']
//                分規格   → ['烤雞腿 270', '牛肉 340', '蔬食 250']
//                分大小   → ['大 510', '小 270']
//                分杯壺   → ['杯 70', '壺 160']
//                時價     → ['時價']
//    tags      標記代碼陣列（見標記對照表），無標記填 []
//    image     圖片檔名（放在 public/images/ 資料夾），尚無圖片填 null
//    emoji     無圖片時顯示的替代圖示
//    note      中文備註，不需要時填 ''
//
//  ★ 新增品項時，只要複製一個 { } 區塊，改掉內容即可
// ═══════════════════════════════════════════════════════════════════════════

import type { Category, TagCode } from '../types/menu'

export interface MenuRawItem {
  category: Category
  name: string
  options: string[]
  tags: TagCode[]
  image: string | null
  emoji: string
  note: string
}

export const menuRaw: MenuRawItem[] = [
  // ── 生猛海鮮類 ────────────────────────────────────────────────
  { category: 'seafood', name: '東岸綜合生魚片', options: ['大 650', '小 300'], tags: ['R'], image: 'sashimi.jpg', emoji: '🐟', note: '本日漁獲依季節變化，如遇缺貨將由師傅推薦同等級魚種替代。' },
  { category: 'seafood', name: '川燙蝦', options: ['大 (15支) 450', '小 (7支) 250'], tags: ['R'], image: 'shrimp.jpg', emoji: '🦐', note: '' },
  { category: 'seafood', name: '川燙透抽', options: ['380'], tags: [], image: 'blanchedSquid.jpg', emoji: '🦑', note: '' },
  { category: 'seafood', name: '塔香旗魚腹', options: ['380'], tags: [], image: 'basilMarlin.jpg', emoji: '🐟', note: '' },
  { category: 'seafood', name: '魚蛋沙拉', options: ['300'], tags: [], image: 'fishRoeSalad.jpg', emoji: '🥗', note: '' },
  { category: 'seafood', name: '塔香蛤蜊', options: ['280'], tags: [], image: 'basilClams.jpg', emoji: '🦪', note: '' },
  { category: 'seafood', name: '醬爆 / 宮保 魚肚', options: ['280'], tags: ['1'], image: 'fishBelly.jpg', emoji: '🐟', note: '' },
  { category: 'seafood', name: '鮮魚料理', options: ['時價'], tags: ['R'], image: 'freshFish.jpg', emoji: '🐟', note: '依當日漁獲提供，請洽師傅推薦。' },

  // ── 鹽烤類 ────────────────────────────────────────────────────
  { category: 'saltbaked', name: '鹽焗透抽', options: ['450'], tags: ['R'], image: 'saltSquid.jpg', emoji: '🦑', note: '' },
  { category: 'saltbaked', name: '鹽焗白蝦', options: ['450'], tags: ['R'], image: 'saltShrimp.jpg', emoji: '🦐', note: '' },

  // ── 湯品類 ────────────────────────────────────────────────────
  { category: 'soup', name: '東岸綜合鮮魚湯', options: ['大 380', '小 280'], tags: [], image: 'fishSoup.jpg', emoji: '🍲', note: '' },

  // ── 蔬菜類 ────────────────────────────────────────────────────
  { category: 'vegetable', name: '野菜拼盤 (冷)', options: ['280'], tags: [], image: 'wildVeg.jpg', emoji: '🥗', note: '' },
  { category: 'vegetable', name: '涼筍沙拉 (冷)', options: ['150'], tags: ['V'], image: 'bambooSalad.jpg', emoji: '🎋', note: '' },
  { category: 'vegetable', name: '季節時蔬', options: ['時價'], tags: ['A'], image: 'seasonalVeg.jpg', emoji: '🥬', note: '' },

  // ── 下飯類 ────────────────────────────────────────────────────
  { category: 'ricedish', name: '野筍五花肉', options: ['260'], tags: ['P'], image: 'bambooPork.jpg', emoji: '🥓', note: '' },
  { category: 'ricedish', name: '嗨咖鹹豬肉', options: ['280'], tags: ['R', 'P'], image: 'hikaSaltedPork.jpg', emoji: '🥩', note: '' },
  { category: 'ricedish', name: '醬燒山豬肉', options: ['280'], tags: ['P'], image: 'braisedBoar.jpg', emoji: '🍖', note: '' },
  { category: 'ricedish', name: '白飯 (花東米)', options: ['1碗 20'], tags: ['V'], image: 'rice.jpg', emoji: '🍚', note: '使用花東縱谷產的池上米。' },

  // ── 炸物類 ────────────────────────────────────────────────────
  { category: 'friedfood', name: '蚵仔酥', options: ['300'], tags: [], image: 'friedOysters.jpg', emoji: '🦪', note: '' },
  { category: 'friedfood', name: '手工花枝蝦排', options: ['350'], tags: ['R'], image: 'squidShrimpCake.jpg', emoji: '🍤', note: '' },
  { category: 'friedfood', name: '椒鹽小卷', options: ['380'], tags: ['1'], image: 'babySquid.jpg', emoji: '🦑', note: '' },

  // ── 每日限量 ──────────────────────────────────────────────────
  { category: 'limited', name: '原味野生龍蝦', options: ['時價'], tags: ['R'], image: 'lobster.jpg', emoji: '🦞', note: '今日限量 — 數量有限，售完為止。' },
  { category: 'limited', name: '蒜蓉野生龍蝦', options: ['時價'], tags: ['R'], image: 'lobsterGarlic.jpg', emoji: '🦞', note: '今日限量 — 數量有限，售完為止。' },
]
