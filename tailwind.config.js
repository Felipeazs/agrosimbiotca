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
            spacing: {
                '28rem': '28rem'
            },
            backgroundImage: {
                background_hero: 'url(../public/images/background_hero.webp)',
                background_image1: 'url(../public/images/background_image1.webp)'
            },
            color: {
                primary: 'rgba(63, 61, 86, 0.5)',
            },
            borderColor: {
                primary: 'rgba(63, 61, 86, 0.5)',
            },
            backgroundColor: {
                primary: '#000000',
                secondary: 'rgba(49, 20, 54, 0.5)',
                tertiary: 'rgb(108, 99, 255)',
                quaternary: 'rgb(63, 61, 86)',
                fifth: 'rgb(49, 20, 54)',
                sixth: '#1E293B',
            },
            margin: {
                700: '700px'
            }
        }
    },
    plugins: []
}
