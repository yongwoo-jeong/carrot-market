module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    darkMode: "media", // class
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
