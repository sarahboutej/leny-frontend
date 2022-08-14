/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'futura': ["Futura"],
      },
      colors: {
        'leny-blue-900': '#0E1D44',
        'leny-blue-800': '#112C61',
        'leny-blue-700': '#1C3571',
        'leny-blue-600': '#008E9D',
        'leny-cyan-500': '#3E8C9B',
        'leny-cyan-400': '#009EB5',
        'leny-gray-800': '#6D7078',
        'leny-gray-700': '#6C7079',
        'leny-gray-600': '#848790',
        'leny-gray-500': '#B7BAC3',
        'leny-gray-400': '#CFD1D8',
        'leny-light-gray': '#F7F8FA',
        'leny-red-600': '#AC2318',
        'transparent': '#ffffff00',
      },
      backgroundImage: {
        'login-image': "url('../images/login_bg.jpg')",
        'contact-banner': "url('../images/contactus_banner.jpg')",
        'dark-login-image': "url('../images/dark_login_bg.jpg')",
        'login-sm': "url('../images/login_bg_sm.jpg')",
        'card': "url('../images/card-bg.png')",
        'search': "url('../images/search-bg.jpg')",
        'smb': "url('../images/search-mobile.jpg')",
      },
      fontSize: {
        '7xl': '7rem',
        'h1xl': '2.5rem',
        'h2xl': '2rem',
        'subtitle': '1.25rem',
        'xxs': '0.625rem'
      },
      height: {
        'video5' : '25.063rem',
      },
      minHeight: {
        'search': '49.5rem',
        'notif': '35rem'
      },
      borderRadius: {
        'search-card': '2.4rem',
        'search-card-mobile': '3.2rem',
      },
      screens: {
        'small': '460px',
      },
    },
  },
  plugins: [require("daisyui")],
}
