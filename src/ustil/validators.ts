export const required = (value: string): string | undefined => {
    if(value) return undefined
    return `Field is required`
}

export const maxLengthCreator = (maxLength: number): (value: string) => string | undefined  => (value: string) => {
    if(value && value.length > maxLength) return `Max message length ${maxLength} symbols`
    return undefined
}