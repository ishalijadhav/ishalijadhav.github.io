module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg))",
        fg: "rgb(var(--fg))",
        accent: "rgb(var(--accent))",
        accentSoft: "rgb(var(--accent-soft))",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
