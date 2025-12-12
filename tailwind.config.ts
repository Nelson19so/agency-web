/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#243c5a", // Adds a new color named 'custom-blue'
        primary: "#5c6ac4", // Adds a 'primary' color
        // You can also add shades
        secondary: {
          100: "#ff9c3c",
          500: "#ee7600",
          // ...
        },
      },
    },
  },
  plugins: [],
};
