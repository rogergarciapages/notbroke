/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007F5F",
        secondary: "#1C3D5A",
        accent: "#FF7F3F",
        gold: "#FFC107",
        gray: "#6B7280",
      },
    },
  },
  plugins: [],
};
