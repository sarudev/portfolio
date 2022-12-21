/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        JetBrainsMono: 'JetBrains Mono, monospace',
        'system-ui': 'system-ui, Ubuntu, Droid Sans, sans-serif'
      },
      boxShadow: {
        line: '0px 5px #282828, 0px -5px #282828'
      }
    }
  },
  plugins: []
}
