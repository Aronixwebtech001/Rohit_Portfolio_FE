/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1E2E36",
          dark: "#0F1B21",
        },
        slate: {
          DEFAULT: "#4C6169",
        },
        teal: {
          DEFAULT: "#189AAE",
          dark: "#127886",
        },
        cream: "#F7F8F8",
        card: "#EDF0F0",
        accent: "#E8623D",
        gold: "#F5A623",
        muted: "#5B6B72",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
