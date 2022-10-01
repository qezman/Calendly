module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#99c3ff',
          100: '#80b5ff',
          200: '#66a6ff',
          300: '#4d97ff',
          400: '#3388ff',
          500: '#1a79ff',
          600: '#006bff',
          700: '#0060e6',
          800: '#0055cc',
          900: '#004ab3',
        },
      }
    },
    screens: {
      "xs": "500px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1560px"
    },
  },
  plugins: [],
}
