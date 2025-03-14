/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6ee7b7',
          DEFAULT: '#10b981',
          dark: '#059669',
        },
        secondary: {
          light: '#93c5fd',
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        danger: '#ef4444',
        warning: '#f59e0b',
        dark: '#1f2937',
      },
      boxShadow: {
        'custom': '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'inner-highlight': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        'gradient-light': 'linear-gradient(120deg, #f0f9ff 0%, #e0f2fe 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      },
    },
  },
  plugins: [],
}