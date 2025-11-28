/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#3ba993",
          secondary: "#194761",
          white: "#ffffff",
          black: "#001f2e",
          "light-bg": "#f0f0f0",
          ash: "#757575",
          red: "#c80808",
        },
      },
    },
  },
  plugins: [],
};
