/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#F8FAFC',
        card: '#FFFFFF',
        ink: {
          900: '#0F172A',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
        },
        civic: {
          indigo: '#1E3A8A',
          'indigo-dark': '#172554',
          'indigo-light': '#1E40AF',
          emerald: '#10B981',
          'emerald-bg': '#ECFDF5',
          'emerald-border': '#A7F3D0',
          'emerald-text': '#065F46',
          amber: '#F59E0B',
          'amber-bg': '#FFFBEB',
          'amber-border': '#FDE68A',
          'amber-text': '#92400E',
          crimson: '#EF4444',
          'crimson-bg': '#FEF2F2',
          'crimson-border': '#FECACA',
          'crimson-text': '#991B1B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        card: '0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px -1px rgba(15, 23, 42, 0.08)',
      }
    },
  },
  plugins: [],
}
