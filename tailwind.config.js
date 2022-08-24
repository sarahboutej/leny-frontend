/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      important: true,
      container: {
        screens: {
          'xs' : '640px',
          'sm' : '778px',
          'md' : '992px',
          'lg' : '1024px',
          '2xl': '1280px',
        },
        padding: {
          DEFAULT: '1rem',
          'xs' : '1.5<rem',
          '2xl' : '8.5rem'
        }
      },
      fontFamily: {
        'futura': ["Futura"],
        'futura-ptlight': ["futura_ptlight"],
        'futura-ptmedium': ["futura_ptmedium"],
        'futura-ptbook' : ["futura_ptbook"],
        'futura-ptdemi' : ["futura_ptdemi"]
      },
      colors: {
        'leny-blue-900': '#0E1D44',
        'leny-blue-800': '#112C61',
        'leny-blue-700': '#1C3571',
        'leny-blue-600': '#008E9D',
        'leny-blue-500': '#182C5E',
        'leny-cyan-500': '#3E8C9B',
        'leny-cyan-400': '#009EB5',
        'leny-gray-800': '#6D7078',
        'leny-gray-700': '#6C7079',
        'leny-gray-600': '#848790',
        'leny-gray-500': '#B7BAC3',
        'leny-gray-400': '#CFD1D8',
        'leny-gray-300': '#CED1D9',
        'leny-gray-200': '#B6BAC4',
        'leny-light-gray': '#F7F8FA',
        'leny-red-600': '#AC2318',
        'transparent': '#ffffff00',
        'accent': '#B6BAC4'
      },
      backgroundImage: {
        'login-image': "url('../images/login_bg.jpg')",
        'contact-banner': "url('../images/contactus_banner.jpg')",
        'dark-login-image': "url('../images/dark_login_bg.jpg')",
        'login-sm': "url('../images/login_bg_sm.jpg')",
        'card': "url('../images/card-bg.png')",
        'search': "url('../images/search-bg.jpg')",
        'smb': "url('../images/search-mobile.jpg')",
        'check': "url('../images/check.svg')",
        'radio-check': "url('../images/radio-check.svg')",
        'agent-msg': "url('../images/agent_message_bg.svg')",
        'user-msg': "url('../images/user_msg_bg.svg')"
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
        '30' : '7.5rem',
        '18' : '4.25rem'
      },
      width: {
        '75' : '18.75rem',
        '86' : '22.813rem',
        '72' : '4.5rem',
        '84'   : '20.375rem',
        '22' : '5.375rem',
        '23' : '5.75rem',
        '30' : '7.5rem',
        '13' : '3.313rem',
        '15' : '3.75rem'
      },
      margin: {
        '4.5' : '1.125rem',
        '13' : '3.313rem'
      },
      padding: {
        '15' : '3.75rem'
      },
      spacing: {
        '4.5' : '1.125rem'
      },
      minHeight: {
        'search': '49.5rem',
        'notif': '35rem'
      },
      borderRadius: {
        'search-card': '2.4rem',
        'search-card-mobile': '3.2rem',
        '2.5': '0.625rem',
        '4.5': '1.125rem'
      },
      screens: {
        'small': '460px',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translate3d(100%, 0, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        }
      },
      animation: {
        slideIn: 'slideInRight 1.5s',
      },
      boxShadow: {
        'search-window': '1.4em 0 rgba(255,255,255,1), 2.8em 0 rgba(255,255,255,1), 4.2em 0 rgba(255,255,255,1)'
      }
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar'), require('@tailwindcss/line-clamp'), require("@tailwindcss/forms"),require('tw-elements/dist/plugin')],
}
