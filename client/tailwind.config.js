/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    boxShadow: {
      playerCard: "0px -1px 10px 0px #FFBD70",
      "FormShadow": " 0px 0px 7px 1px rgba(9, 21, 74, 0.60)"
    },
    placeholderColor: {
      "inputText": "#f0ff",
    },

    extend: {
      backgroundImage: {
        "logoGradient": " linear-gradient(246.75deg, #FF636E 39.2%, #FFBC71 97.91%)",
        "circleLinearGradient":
          "radial-gradient(50% 50% at 50% 50%, #8401B2 0%, rgba(134, 0, 182, 0) 100%)",
        "circleBlueLinearGradient":
          "radial-gradient(50% 50.00% at 50% 50.00%, #2251EE 0%, rgba(34, 81, 238, 0.00) 100%)",
        "viratCard": "/public/home screen/virat.png",
        "dhoniCard": "/public/home screen/dhoni.png",
        "FormColor": "linear-gradient(314deg, rgba(6, 16, 56, 0.60) 0%, rgba(9, 21, 74, 0.60) 100%)",
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },

      colors: {
        "homeBlackBg": "#08010D",
        "bgBtn": " #1C51FE",
        "textWhite": "#FFFFFF",
        "primaryOrange": "#FF636E",
        "bgGrey": "#464646",
        "textGreen": "#00DE24",
        "purpleBg": "#1B0828",
        "waitListInput": "#0D1345",
        "cardsBg": "rgba(36, 41, 68, 0.80)",
        "borderLine": '#FF636E80',
        "inputText": "rgba(85, 100, 166, 1)",

      },
      screens: {
        "2xsm": "320px",
        xsm: "360px",
        sm: "480px",
        md: "740px",
        lg: "976px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1990px",
        recentEvents: "542px",
      },
      borderRadius: {
        'btn': '2.35rem',
        'playerCard': "2rem"
      },
      fontFamily: {
        // 'Dancing-script': 
      },
    },
  },
  plugins: [import('tailwindcss'), import('autoprefixer')],
}

