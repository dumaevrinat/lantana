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
            borderColor: {
                DEFAULT: '#121212'
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                'auto': 'auto auto'
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'hover', 'group-focus'],
            margin: ['first', 'last'],
            textColor: ['active', 'focus-within'],
            scale: ['active', 'hover', 'group-hover'],
            boxShadow: ['active'],
            borderColor: ['active'],
            borderWidth: ['hover'],
            visibility: ['hover', 'group-hover', 'group-focus'],
            flexGrow: ['hover'],
            display: ['hover', 'group-hover'],
            height: ['hover', 'group-hover']
        },
    },
    plugins: [],
}
