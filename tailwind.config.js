/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
    colors: {
      themerose400: '#EDB2BA',
      themeBgFromLogos: '#F5F4ED',
      themeBgFromFooterImg: '#F1EDEE',
    }
   },
  },
  plugins: [],
}

