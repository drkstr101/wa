module.exports = {
  theme: {
    extend: {
      letterSpacing: {},
      lineHeight: {},
      fontSize: {},
      boxShadow: {},
      typography: {},
      colors: {
        bluemoon: {
          DEFAULT: '#1C4F82',
          50: '#74ABE1',
          100: '#64A1DE',
          200: '#428CD6',
          300: '#2A78C5',
          400: '#2363A4',
          500: '#1C4F82',
          600: '#123354',
          700: '#081726',
          800: '#000000',
          900: '#000000'
        },
        shark: {
          DEFAULT: '#23282F',
          50: '#738297',
          100: '#69788D',
          200: '#576475',
          300: '#46505E',
          400: '#343C46',
          500: '#23282F',
          600: '#0B0D0F',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        },
        alto: {
          DEFAULT: '#D4D4D4',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FDFDFD',
          400: '#E8E8E8',
          500: '#D4D4D4',
          600: '#B8B8B8',
          700: '#9C9C9C',
          800: '#808080',
          900: '#646464'
        }
      },
      spacing: {},
      fontFamily: {}
    }
  },
  variants: {
    extend: {}
  },
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=corporate]'],
          accent: '#04BFBF'
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=business]'],
          accent: '#04BFBF'
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui')
  ]
};
