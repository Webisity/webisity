module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      colors: {
          'pearl-aqua': '#7ACFC4',
          'caribbean-green': '#00BA96',
          'palatinate-blue': '#2F4BD6',
          'jet': '#343434',
          'auro-metal-saurus':'#6b7280',
        },
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
