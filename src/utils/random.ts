export const generateVerificationCode = (): string => {
    const generateNumber = () => {
        return Math.round(Math.random() * 9)
    }
    return Array
        .from('12345')
        .map(generateNumber)
        .join('')
}
