/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "logoGradient": " linear-gradient(246.75deg, #FF636E 39.2%, #FFBC71 97.91%)",
        "circleLinearGradient":
          "radial-gradient(50% 50% at 50% 50%, #8401B2 0%, rgba(134, 0, 182, 0) 100%)"
      },
      screens: {
        xsm: "360px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1990px",
        recentEvents: "542px",
      },
      colors: {

        "homeBlackBg": "#08010D",
        "bgBtn": " #1C51FE",
        "textWhite": "#FFFFFF",
        "textOrange": "#FF636E",
        "bgGrey": "#464646",
        "textGreen": "#00DE24"

      },
      borderRadius: {
        'btn': '2.35rem',
      }
    },
  },
  plugins: [import('tailwindcss'), import('autoprefixer')],
}

