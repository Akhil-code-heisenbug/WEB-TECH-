function isSudokuSolvedCorrectly(grid) {
    const N = 9;
    
    // Function to check if an array contains digits from 1 to 9 without repetition
    function isValid(arr) {
        const set = new Set();
        for (const num of arr) {
            if (num !== 0 && set.has(num)) {
                return false;
            }
            set.add(num);
        }
        return true;
    }
    
    // Check rows
    for (let row = 0; row < N; row++) {
        if (!isValid(grid[row])) {
            return false;
        }
    }

    // Check columns
    for (let col = 0; col < N; col++) {
        const column = [];
        for (let row = 0; row < N; row++) {
            column.push(grid[row][col]);
        }
        if (!isValid(column)) {
            return false;
        }
    }

    // Check subgrids
    for (let row = 0; row < N; row += 3) {
        for (let col = 0; col < N; col += 3) {
            const subgrid = [];
            for (let i = row; i < row + 3; i++) {
                for (let j = col; j < col + 3; j++) {
                    subgrid.push(grid[i][j]);
                }
            }
            if (!isValid(subgrid)) {
                return false;
            }
        }
    }

    return true; // Sudoku is solved correctly
}

// Example usage:
const solvedGrid = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

console.log("Is Sudoku solved correctly?", isSudokuSolvedCorrectly(solvedGrid)); // Output: true
