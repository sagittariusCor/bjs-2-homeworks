function parseCount(value) {
    const parsed = Number.parseFloat(value);
    if (isNaN(parsed)) {
        throw new Error('Невалидное значение');
    }
    return parsed;
}

function validateCount(value) {
    try {
        const result = parseCount(value);
        return result;
    }
    catch(error) {
        return error;
    }
}
