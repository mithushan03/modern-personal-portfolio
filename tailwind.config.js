/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#080710",
        panel: "#11101c",
        line: "rgba(255,255,255,0.12)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(236, 72, 153, 0.24)",
        "glow-sm": "0 0 24px rgba(168, 85, 247, 0.18)"
      }
    }
  },
  plugins: []
};
