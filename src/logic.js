function createNewBoard(n) {
    let grid = Array(n).fill().map(() => (
        Array(n).fill().map(() => (
            { sprite: [0, 0, 0, 0], leakage: [0, 0, 0, 0] }
        ))
    ));

    grid.forEach((row, i) => {
        row.forEach((cell, j) => {
            cell.i = i;
            cell.j = j;
            if (j < row.length - 1) {
                cell.sprite[1] = Math.round(Math.random());
                row[j+1].sprite[3] = cell.sprite[1];
            }
            if (i < grid.length - 1) {
                cell.sprite[2] = Math.round(Math.random());
                grid[i+1][j].sprite[0] = cell.sprite[2];
            }
            let rotation = Math.round(Math.random() * 3);
            for (let i = 0; i < rotation; i++) {
                cell.sprite = rotateCell(cell.sprite);
            }
        })
    });

    return updateLeakage(grid);
}

function rotateCell(sprite) {
    let rotated = [sprite[3], sprite[0], sprite[1], sprite[2]];
    return rotated;
}

function updateLeakage(grid) {
    let updated = [...grid];

    updated.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (cell.sprite[0] === 1) {
                if (grid[i-1]) {
                    if (grid[i-1][j].sprite[2] === 1) {
                        cell.leakage[0] = 0;
                    } else {
                        cell.leakage[0] = 1;
                    }
                } else {
                    cell.leakage[0] = 1;
                }
            } else {
                cell.leakage[0] = 0;
            }
            if (cell.sprite[1] === 1) {
                if (row[j+1]) {
                    if (row[j+1].sprite[3] === 1) {
                        cell.leakage[1] = 0;
                    } else {
                        cell.leakage[1] = 1;
                    }
                } else {
                    cell.leakage[1] = 1;
                }
            } else {
                cell.leakage[1] = 0;
            }
            if (cell.sprite[2] === 1) {
                if (grid[i+1]) {
                    if (grid[i+1][j].sprite[0] === 1) {
                        cell.leakage[2] = 0;
                    } else {
                        cell.leakage[2] = 1;
                    }
                } else {
                    cell.leakage[2] = 1;
                }
            } else {
                cell.leakage[2] = 0;
            }
            if (cell.sprite[3] === 1) {
                if (row[j-1]) {
                    if (row[j-1].sprite[1] === 1) {
                        cell.leakage[3] = 0;
                    } else {
                        cell.leakage[3] = 1;
                    }
                } else {
                    cell.leakage[3] = 1;
                }
            } else {
                cell.leakage[3] = 0;
            }
        })
    });

    return updated;
}

function isVictory(grid) {
    let victory = true;

    grid.forEach(row => {
        row.forEach(cell => {
            if (cell.leakage.join('') !== '0000') {
                victory = false
            }
        })
    });

    return victory;
}

export { createNewBoard, rotateCell, updateLeakage, isVictory };
