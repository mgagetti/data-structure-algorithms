const unorderedList = [3,5,1,4];
const sum = 9;

const hasSumElements = (list, sum) => {
    const seenElements = new Set();

    for (const element of list) {
        const remainingValue = sum - element;
        if (remainingValue > 0 && seenElements.has(remainingValue)) return true;
        seenElements.add(element);
    }

    return false;
}

console.log(String(hasSumElements(unorderedList, sum)));

// Best case scenario
// O(n) * O(1) = O(n)

// Worst case scenario
// O(n^2)