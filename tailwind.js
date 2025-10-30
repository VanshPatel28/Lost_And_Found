/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette for modern theme
        'soft-blue': '#4A90E2', 
        'soft-yellow': '#F5A623',
        'light-blue': '#ECF4FF', // Used for the Hero background
      },
    },
  },
  plugins: [],
}