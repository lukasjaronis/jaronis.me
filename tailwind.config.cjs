/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        geist_sans: ['var(--font-geist-sans)'],
        geist_mono: ['var(--font-geist-mono)'],
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        blueberg: {
          DEFAULT: "#13151A",
          50: "#C6CBD6",
          100: "#BBC0CD",
          200: "#A3AABC",
          300: "#8C94AB",
          400: "#747F99",
          500: "#616B84",
          600: "#4F586D",
          700: "#3E4555",
          800: "#2D323D",
          900: "#1C1F26",
          950: "#13151A",
        },
        'ice-cold': {
          '50': '#effefa',
          '100': '#c0ffee',
          '200': '#91fee3',
          '300': '#52f6d3',
          '400': '#1fe2bf',
          '500': '#06c6a6',
          '600': '#029f88',
          '700': '#067f6e',
          '800': '#0a655a',
          '900': '#0e534a',
          '950': '#00332e',
      },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
