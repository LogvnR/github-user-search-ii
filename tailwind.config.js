/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      SpaceMono: ['Space Mono', 'monospace'],
    },
    extend: {
      colors: {
        'git-blue': '#0079ff',
        'light-grey': '#697c9a',
        'light-navy': '#4b6a9b',
        'dark-grey': '#2b3442',
        'white-one': '#f6f8ff',
        'white-two': '#fefefe',
        'darker-navy': '#141d2f',
        'dark-navy': '#1e2a47',
      },
    },
  },
  plugins: [],
};
