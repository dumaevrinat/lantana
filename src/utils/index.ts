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