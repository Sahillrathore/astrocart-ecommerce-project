/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EDECEC"
      },
      screens: {
        // 'xxs': '300px',
        // 'xs': '475px',
        'xs': {'min': '500px', 'max': '640px'},
        'xxs': {'min': '380px', 'max': '500px'},
        'xmin': {'min': '0px', 'max': '380px'},
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}

