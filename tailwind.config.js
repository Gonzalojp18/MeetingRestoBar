/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Incluye solo tus archivos de origen
    "./public/index.html", // Incluye solo tu archivo HTML principal si es necesario
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

