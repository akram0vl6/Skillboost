export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ваши пути
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        base: "var(--color-base)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
      },
    },
  },
  plugins: [],
};
