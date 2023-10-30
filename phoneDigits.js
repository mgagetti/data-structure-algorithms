const map = new Map([
    ['0', [' ']],
    ['1', null],
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
    ['*', ['*', '+']],
    ['#', ['#']],
]);

/**
 * @param {string} digits Combined digts (phone number)
 * @return {string[]} Returns an array with all possible letter combinations for a given set of digits (phone number).
 */
 const letterCombinations = (digits) => {
    if (digits.length === 1) return map.get(digits);

    const [digit, ...otherDigits] = digits;
    const digitLetters = map.get(digit);
    const otherDigitsCombinations = letterCombinations(otherDigits.join(''));

    if (!digitLetters?.length || !otherDigitsCombinations?.length) return digitLetters || otherDigitsCombinations;

    return digitLetters.flatMap(digitLetter => otherDigitsCombinations.map(otherDigitCombination => digitLetter.concat(otherDigitCombination)));
};

console.time('Letter Combinations');
const result = letterCombinations('257');
console.timeEnd('Letter Combinations');

console.log(result);