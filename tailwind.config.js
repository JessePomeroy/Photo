/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        // You can add custom colors, fonts, etc. here
        colors: {
          // Example custom colors
          'primary': '#1a1a1a',
          'secondary': '#4a4a4a'
        },
        fontFamily: {
          // Example custom fonts
          'sans': ['Inter', 'system-ui', 'sans-serif']
        }
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography')
    ]
  };