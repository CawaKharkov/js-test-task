/**
 * Create array wit only uniq values
 * @param {String} stringFirst - first string
 * @param {String} stringSecond - second string
 * @return {String[]} - Array with only unique items
 */
const makeStringArray = (stringFirst: string, stringSecond: string): Array<string> =>
    [...new Set(stringFirst + stringSecond)];
/**
 * Test case one. Make array with two different strings, sort and join to string
 */
let a = "xyaabbbccccdefww",
    b = "xxxxyyyyabklmopq";
console.info(makeStringArray(a, b).sort().join());

/**
 * Test case two. Make array with only one string, sort and join to string
 */
a = "abcdefghijklmnopqrstuvwxyz";
console.info(makeStringArray(a, a).sort().join());
