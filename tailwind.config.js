/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ED712E',
      },
      backgroundImage: {
        'bgColor': 'linear-gradient(167.96deg, #F4623A 0%, #FC8C41 100%)',
        // "slideImage": "url('/src/assets/img/image3.png')" 
      },
      screens: {
        'xs': '320px',   
        'sm': '640px',   
        'md': '768px',  
        'lg': '1024px',  
        'xl': '1280px',  
        '2xl': '1536px',
      },
      fontFamily: {
        'primary': 'Open Sans, sans-serif',
      }
    },
  },
  plugins: [],
}

