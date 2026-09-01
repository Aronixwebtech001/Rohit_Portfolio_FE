/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1C323A",
          dark: "#0F1B21",
          light: "#2a4b56",
        },
        accent: {
          DEFAULT: "#485E68",
          dark: "#3A4B53",
        },
        "hero-bg": "#C9D3D8",
        "bg-light": "#F9FBFB",
        cream: "#F9FBFB",
        card: "#EDF0F0",
        gold: "#D4A643",
        muted: "#4A5568",
        "text-muted": "#64748b",
        "slate-custom": "#4A5568",
      },
      fontFamily: {
        serif: ["Forum", "serif"],
        sans: ["Outfit", "sans-serif"],
      },
      maxWidth: {
        content: "1400px",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-left": {
          from: { opacity: "0", transform: "translateX(-50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-right": {
          from: { opacity: "0", transform: "translateX(50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "fade-scale": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "text-fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(212, 166, 67, 0.4)" },
          "70%": { boxShadow: "0 0 0 15px rgba(212, 166, 67, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(212, 166, 67, 0)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-left": "fade-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-right": "fade-right 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-scale": "fade-scale 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "text-fade-up": "text-fade-up 0.8s ease forwards",
        pulse: "pulse 2s infinite",
        shake: "shake 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
