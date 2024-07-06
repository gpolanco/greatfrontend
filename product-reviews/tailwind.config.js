/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          200: "#E5E7EB",
          400: "#A3A3A3 ",
          50: "#FAFAFA",
          600: "#525252",
          900: "#171717",
        },
        yellow: {
          300: "#FDE047",
          400: "#FACC15",
          500: "#EAB308",
        },
        green: {
          500: "#22C55E",
          600: "#16A34A",
        },
        red: {
          600: "#DC2626",
        },
      },
    },
  },
  plugins: [],
};
