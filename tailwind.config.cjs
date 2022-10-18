/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        'pink' : 'var(--pink)' ,
        'light-blue' : 'var(--light-blue)' ,  
        'very-dark-cyan' : 'var(--very-dark-cyan)' ,  
      }),
      boxShadowColor: theme => ({
        'light-pink' : 'var(--light-pink)' ,
      }),
      textColor: theme => ({
        'light-pink' : 'var(--light-pink)' ,
        'very-dark-cyan' : 'var(--very-dark-cyan)' ,        
      }),
      borderColor : theme => ({
        'light-pink' : 'var(--light-pink)' ,
      }),
      fontFamily: theme => ({
        'open-sans': ['Open Sans', 'sans-serif'] ,
        'poppins': ['Poppins', 'sans-serif'] ,
      }),
    },
  },
  plugins: [],
}
