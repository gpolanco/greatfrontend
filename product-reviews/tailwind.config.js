/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        neutral: {
          50: "rgb(250, 250, 250 / <alpha-value>)",
          200: "rgb(230, 230, 230 / <alpha-value>)",
          400: "rgb(163, 163, 163 / <alpha-value>)",
          900: "rgb(23, 23, 23 / <alpha-value>)",
          600: "rgb(82, 82, 82 / <alpha-value>)",
        },
        yellow: {
          300: "rgb(253, 224, 71 / <alpha-value>)",
          400: "rgb(250, 204, 21 / <alpha-value>)",
          500: "rgb(234, 179, 8 / <alpha-value>)",
        },
        green: {
          500: "rgb(34, 197, 94 / <alpha-value>)",
          600: "22, 163, 74 / <alpha-value>)",
        },
        red: {
          600: "220, 38, 38 / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
