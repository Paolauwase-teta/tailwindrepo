/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeblack: "#ccc",
        themepurple: "#502ec3"
      },
    },
  },
  plugins: [],
};

