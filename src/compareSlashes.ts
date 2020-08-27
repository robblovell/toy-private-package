export const compareSlashes = (a, b) => {
    const aslashes = a.match(/\//g).length
    const bslashes = b.match(/\//g).length
    if (aslashes < bslashes) {
        return -1;
    }
    if (aslashes > bslashes) {
        return 1;
    }
    return 0
}
