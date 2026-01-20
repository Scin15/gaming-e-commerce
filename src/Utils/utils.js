
const getSubstrings = (str, minLength) => {

    const substrings = [];
    const normalized = str.toLowerCase();

    for (let i = 0; i <= normalized.length - minLength; i++) {

        substrings.push(normalized.slice(i, i + minLength));

    }

    return substrings;
}

export {
    getSubstrings,
}