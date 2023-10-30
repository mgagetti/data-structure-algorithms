// Pig Banks

/* assumptions
 => Cannot break same pig bank twice
 => Pig bank might be empty
 => There's no dulicated pig banks values 
 => Will only break 2 pig banks
*/

const banks = [...Array(10).keys()].map(x => x++);
const cost = 10;
const brokenBanks = [];

banks.forEach(bankA => {
    brokenBanks.push(bankA);
    const expectedBankB = cost - bankA;

    if (brokenBanks.indexOf(expectedBankB) >= 0) console.log(bankA, expectedBankB);
})

// Volume of lakes
const heights = [4, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2];

let maxToLeft = 0;
let trappedWater = 0;

const getMaxToRight = (currIndex) => Math.max(...heights.slice(currIndex, heights.length));

heights.forEach((height, index) => {
    maxToLeft = Math.max(maxToLeft, (heights[index - 1] || 0));
    const maxToRight = getMaxToRight(index, height);

    if (maxToLeft > height && maxToRight > height) {
        trappedWater += Math.min(maxToLeft, maxToRight) - height;
    }

    console.log(maxToLeft, height, maxToRight, trappedWater);
})