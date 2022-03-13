module.exports = {
  theme: {
    extend: {
      letterSpacing: {},
      lineHeight: {},
      fontSize: {},
      boxShadow: {},
      typography: {},
      colors: {},
      spacing: {},
      fontFamily: {},
    },
  },
  variants: {
    extend: {},
  },
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    // themes: ['light', 'dark', 'business', 'luxury'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    // prefix: 'wa',
    darkTheme: 'business',
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
