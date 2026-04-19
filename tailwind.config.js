/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      colors: {
        brand: {
          red: "#C62828",
          redDark: "#8B0000",
          saffron: "#F4C430",
          saffronDark: "#D4A420",
          cream: "#FBF7F0",
          creamDark: "#EDE8DC",
          obsidian: "#0F2A44",
          obsidianLight: "#1a3a58",
        },
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='0.042'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
