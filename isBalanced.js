const arr = '[{()}}';
const constraints = '[]{}()';
const correspondingClosingMap = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
]);

function isBalanced(strSymbols) {
    let leftIndex = 0;
    let rightIndex = strSymbols.length - 1;

    while (leftIndex < rightIndex) {
        const leftElem = strSymbols[leftIndex];
        const rightElem = strSymbols[rightIndex];

        if (!constraints.includes(leftElem) || !constraints.includes(rightElem)) {
            return false;
        }

        const correspondingClosing = correspondingClosingMap.get(leftElem);

        if (correspondingClosing !== rightElem) {
            return false;
        }

        leftIndex++;
        rightIndex--;
    }

    return true;
}

console.log(isBalanced(arr));