/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screen:{
      'sm':'576px',
      'md':'768px',
      'lg':'992px',
      'xl':'1280px'
    },
    
    extend: {
      colors:{
        'primary':'#53B9A5'
      },

      container:{
        'center':true,
         padding:'1rem',
         wc:'406px'
      }

     
    },


  },
  plugins: [],
}

