/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        awfd: {
          primary: '#1e3a8a',   // Azul escuro (baseado na logo)
          secondary: '#3b82f6', // Azul mais claro
          light: '#eff6ff',     // Fundo quase branco azulado
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use uma fonte moderna
      }
    },
  },
  plugins: [],
}