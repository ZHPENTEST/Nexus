module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        soft: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0f172a',
        },
        brand: '#6366f1', // Indigo-500
      },
      animation: {
        'slow-drift': 'drift 8s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}