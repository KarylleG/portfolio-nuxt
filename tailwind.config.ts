import daisyui from 'daisyui'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          base: '#2B2B2B',
          surface: '#404040',
          muted: '#5A5A5A',
          hover: '#7D7D7D',
          text: '#E0E0E0'
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: '#7D7D7D',
          'primary-content': '#E0E0E0',
          secondary: '#404040',
          'secondary-content': '#E0E0E0',
          accent: '#E0E0E0',
          'accent-content': '#2B2B2B',
          neutral: '#2B2B2B',
          'neutral-content': '#E0E0E0',
          'base-100': '#2B2B2B',
          'base-200': '#404040',
          'base-300': '#5A5A5A',
          'base-content': '#E0E0E0'
        }
      }
    ],
    darkTheme: 'portfolio'
  }
}
