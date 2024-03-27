/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {screens:{
      xs:"540px"
    },
  backgroundImage:{
    'red':"url('./src/assets/chou.png')",
  'full':"url('./src/assets/peakpx.png')"}},
  },
  plugins: [],
}

