import chroma, { Color } from 'chroma-js'

export const isValidHex = (hex: string) => {
    if (hex.substring(0, 1) === '#') {
        hex = hex.substring(1)
    }

    switch (hex.length) {
        case 3:
            return /^[0-9A-F]{3}$/i.test(hex)
        case 6:
            return /^[0-9A-F]{6}$/i.test(hex)
        case 8:
            return /^[0-9A-F]{8}$/i.test(hex)
        default:
            return false
    }
}

export const formatHexString = (string: string) => {
    return string
        .replace(/[^0-9A-F]/ig, '')
        .substring(0, 6)
}

export const colorToPercentageHsl = (color: Color) => {
    const [h, s, l] = color.hsl()

    return [
        Math.round(isNaN(h) ? 0 : h),
        Math.round(s * 100),
        Math.round(l * 100)
    ]
}

export const percentageHslToColor = (h: number, s: number, l: number) => {
    return chroma.hsl(h, s / 100, l / 100)
}

export const isLightColor = (color: Color, threshold: number = 0.5) => {
    return color.luminance() > threshold
}