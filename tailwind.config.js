const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html'
    ],
    darkMode: false,
    theme: {
        colors: {
            black: '#121212',
            white: '#FFFFFF',
            gray: colors.trueGray
        },
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'hover'],
            scale: ['active', 'hover'],
            boxShadow: ['active'],
        },
    },
    plugins: [],
}
