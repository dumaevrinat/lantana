const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html'
    ],
    darkMode: 'media',
    theme: {
        colors: {
            transparent: 'transparent',
            black: colors.black,
            white: colors.white,
            gray: { ...colors.trueGray }
        },
        extend: {
            borderColor: {
                DEFAULT: colors.black
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            },
            animation: {
                'bounce-1': 'bounce 350ms ease-in-out 1',
                'fadein': 'fadein 350ms ease-in-out 1'
            },
            keyframes: {
                bounce: {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
                    },

                    '50%': {
                        transform: 'translateY(-10%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
                    },
                },
                fadein: {
                    '0%': {
                        opacity: '0',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
                    },
                    '90%': {
                        opacity: '1',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
                    }
                }
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
            maxHeight: ['hover', 'group-hover'],
            gap: ['hover', 'group-hover'],
            flexGrow: ['hover', 'group-hover'],
            rotate: ['active', 'group-hover'],
            translate: ['active', 'group-hover']
        },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            const newUtilities = {
                '.tap-highlight-transparent': {
                    '-webkit-tap-highlight-color': 'transparent'
                },
                '.no-scrollbar': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none'
                },
                '.no-scrollbar::-webkit-scrollbar': {
                    display: 'none'
                },
                '.flex-basis-1': {
                    'flex-basis': '1px'
                },
                '.flex-basis-44': {
                    'flex-basis': '11rem'
                },
                '.content-stretch': {
                    'align-content': 'stretch'
                }
            }

            addUtilities(newUtilities, ['responsive', 'hover'])
        })
    ]
}
