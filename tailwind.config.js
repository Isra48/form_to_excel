/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Usa "class" para activar el modo oscuro mediante una clase
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Rutas de tu proyecto
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1F2937',
          input: '#374151',
          text: '#F9FAFB',
          button: '#2563EB',
          border: '#4B5563',
        },
        light: {
          bg: '#F9FAFB',
          input: '#FFFFFF',
          text: '#111827',
          button: '#3B82F6',
          border: '#D1D5DB',
        },
      },
    },
  },
  plugins: [],
};
