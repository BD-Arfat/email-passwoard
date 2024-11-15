/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Ensure to include this if using Vite
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // DaisyUI প্লাগিন যোগ করা হয়েছে কিনা চেক করুন
};
