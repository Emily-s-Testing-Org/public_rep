const calculate = (a, b) => {
    if (!a || !b) {
    raise new Error('Values cannot be null or zero');
    }
    
    return a + b
}
