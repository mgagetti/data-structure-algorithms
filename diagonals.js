/*
Given a matrix n^2, print all possible diagonal from top right to left.

Input:
    3 5 8 1
    1 4 6 2
    0 2 7 3
    1 2 3 4

Expected Output:
    3 => [[0,0]]
    5 1 => [[0,1], [1,0]]
    8 4 0 => [[0,2], [1,1], [2,0]]
    1 6 2 1 => [[0,3], [1,2], [2,1], [3,0]]
    2 7 2 => [[1,3], [2,2], [3,1]]
    3 3 => [[2,3], [3,2]]
    4 => [[3,3]]
*/

/** Observed Pattern
 * Row increases
 * Col decreases 
*/

const matrix = [
    [3, 5, 8, 1],
    [1, 4, 6, 2],
    [0, 2, 7, 3],
    [1, 2, 3, 4],
];

// O(log n)
function printSingleDiagonal(matrix, startRow, startCol) {
    console.log(`Start printing from: Row ${startRow} and Col ${startCol}`);
    
    let row = startRow;
    let col = startCol;

    while (row < matrix.length && col >= 0) {
        console.log(matrix[row][col]);
        row++;
        col--;
    }
}

// O(n log n) + O((n-1) * log n)
function printDiagonals(matrix) {
    for (let colIndex = 0; colIndex < matrix.length; colIndex++) { // O(n)
        printSingleDiagonal(matrix, 0, colIndex);  // O(log n)
    }

    for (let rowIndex = 1; rowIndex < matrix.length; rowIndex++) { // O(n-1)
        printSingleDiagonal(matrix, rowIndex, matrix[rowIndex].length - 1); // O(log n)
    }
}

printDiagonals(matrix);

/*
 Time complexity: O(n log n) + O((n-1) * log n)
 */
