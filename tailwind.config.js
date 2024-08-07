/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*"
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1180px'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xsm:'480px',
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1180px'
      },
    },
    extend: {
      colors:{
        "primary":"#172755",
        "secendary":"#7587BB",
        "dark_blue":"#172755",
        "medium_dark_blue":"#465B95",
        "dark_pink":"#EF2A82",
        "full_light":"#F8F9FF",
        "nevi_blue":"#11214E",
        "footer_border":"#2A407C",
        "dark_pink":"#EF2A82"

      },
      padding:{
        "50px":"50px",
        "11px":"11px",
        "52px":"52px",
        "100px":"100px",
        "272px":"272px",
        "70px":"70px",
        "111px":"111px",
        "114px":"114px"
      },
      lineHeight:{
        "18px":"18px",
        "60px":"60px",
        "22px":"22px",
        "46px":"46px",
        "30px":"30px"
      },
      borderRadius:{
        "68px":"68px",
        "30px":"30px"
      },
      margin:
      {
        "74px":"74px",
        "50px":"50px",
        "26px":"26px",
        "15px":"15px",
        "30px":"30px",
        "130px":"130px",
        "120px":"120px",
        "152px":"152px",
        "10px":"10px",
        "70px":"70px"
      },
      fontSize:{
        "50px":"50px",
        "40px":"40px"
      },
      width:{
        "60px":"60px",
        "10px":"10px"
      },
      height:{
        "60px":"60px"
      }
    },
  },
  plugins: [],
}

