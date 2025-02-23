/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["EB Garamond", "serif"], // For headings
        sans: ["Lora", "sans-serif"], // For body text
      },
    },
  },
  plugins: [],
};
