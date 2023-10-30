const arr = '[{()}]';
const constraints = '[]{}()';
const correspondingClosingMap = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
]);

function checkBalance(strSymbols) {
    if (strSymbols.length === 0) return true;

    const leftElem = strSymbols.shift();
    const rightElem = strSymbols.pop();

    if (!constraints.includes(leftElem) || !constraints.includes(rightElem)) {
        return false;
    }

    const correspondingClosing = correspondingClosingMap.get(leftElem);

    if (correspondingClosing !== rightElem) {
        return false;
    }

    return checkBalance(strSymbols);
}

function isBalanced(strSymbols) {
    const arrChar = Array.from(strSymbols);
    if (arrChar.length === 0) return true;

    const leftElem = arrChar.shift();
    const rightElem = arrChar.pop();

    if (!constraints.includes(leftElem) || !constraints.includes(rightElem)) {
        return false;
    }

    const correspondingClosing = correspondingClosingMap.get(leftElem);

    if (correspondingClosing !== rightElem) {
        return false;
    }

    return isBalanced(arrChar);
}

console.log(isBalanced(arr));