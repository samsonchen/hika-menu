/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A744',
          dark: '#8B6914',
          50: '#FFFCF5',
          100: '#FFF8E5',
          200: '#F5EDD5',
          300: '#F0E5C8',
          400: '#E8DDB5',
        },
        ink: {
          DEFAULT: '#2B2620',
          soft: '#3D3528',
          muted: '#7A7166',
          subtle: '#A39580',
        },
        line: '#E8E2D5',
        canvas: '#FAFAF7',
        spicy: { bg: '#FCE4E4', text: '#B23A3A' },
        veg: { bg: '#E5F0DD', text: '#4A6B3A' },
        meat: { bg: '#F0EAE0', text: '#6B5D45' },
      },
      fontFamily: {
        zh: ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
        ja: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
        ko: ['"Noto Sans KR"', 'system-ui', 'sans-serif'],
        sans: ['Inter', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.06)',
        modal: '0 -8px 24px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
