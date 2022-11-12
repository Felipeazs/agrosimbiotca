/** @type {import('tailwindcss').Config} */
const defaultFonts = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './pulbic/**/*.html',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: ['Josefin Sans', 'sans-serif']
        }
    }
}
