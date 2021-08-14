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
            animation: {
                'bounce-1': 'bounce 350ms ease-in-out 1',
            },
            keyframes: {
                bounce: {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
                    },

                    '50%': {
                        transform: 'translateY(-15%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
                    },
                },

            }
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
            width: ['hover', 'group-hover'],
            maxWidth: ['hover', 'group-hover'],
            flexGrow: ['hover', 'group-hover']
        },
    },
    plugins: [],
}
