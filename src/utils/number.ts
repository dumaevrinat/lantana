export const toPrecision = (value: number, precision: number) => {
    const scaleFactor = 10 ** precision
    
    return Math.round(value * scaleFactor) / scaleFactor
}