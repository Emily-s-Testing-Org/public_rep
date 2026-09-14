export const add = (a, b) => {
    if (!a || !b) {
        throw new Error('Values cannot be null or zero');
    }
    
    return a + b
}
