/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        uni: {
          primary: '#8B1E28', // Маргулан Бордовый
          secondary: '#1A2942', // Строгий синий
          accent: '#D4AF37', // Золотой (для акцентов)
          gray: '#F3F4F6',
        }
      },
      fontFamily: {
        // Убедись, что подключил шрифты в index.html или используй стандартные
        serif: ['Times New Roman', 'Playfair Display', 'serif'], 
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}