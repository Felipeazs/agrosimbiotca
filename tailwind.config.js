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
            container: {
                margin: '300px 0',
                center: true
            },
            fontFamily: ['Josefin Sans', 'sans-serif'],
            fontSize: {
                '4rem': '4rem'
            },
            spacing:{
                '28rem': '28rem'
            },
            backgroundImage: {
                background_hero: 'url(../public/images/background_hero.webp)',
                background_image1: 'url(../public/images/background_image1.webp)'
            },
            margin: {
                700: '700px'
            }
        }
    },
    plugins: []
}
