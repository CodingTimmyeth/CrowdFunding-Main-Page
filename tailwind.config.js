/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        // Primary
        moderateCyan: 'hsl(176, 50%, 47%)',
        darkCyan: 'hsl(176, 72%, 28%)',
        black: 'hsl(0, 0%, 0%)',
        darkGrey: 'hsl(0, 0%, 48%)',
      },
      fontFamily: {
        Commissioner: "'Commissioner', serif"
      }
    },
  },
  plugins: [],
}
