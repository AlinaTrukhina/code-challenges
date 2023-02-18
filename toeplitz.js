// Prompt
// A Toeplitz Matrix is one where the values on every diagonal are the same: 
// Given a 2d matrix (multidimensional array), return true if the input is a Toeplitz matrix and false otherwise.

// Example of a valid Toeplitz matrix:

//     1 2 3 4
//     5 1 2 3
//     6 5 1 2
//     7 6 5 1

function isToeplitz(m) {
    /* your code here */
    if (m.length == 0 || m[0].length == 0) {
        return false;
    } else {
        for (let i = 0; i < m.length; i++) {
            let compVal = m[0][i];
            for (let j=0; j+i < m.length; j++) {
                console.log('compval: ', compVal);
                console.log('to : ', m[j][j+i], j);
                if (m[j][j+i] !== compVal) {
                    return false;
                }
            }
        }
        for (let i = 1; i < m.length; i++) {
            let compVal = m[i][0];
            for (let j=1; j+i < m.length; j++) {
                // console.log('compval: ', compVal);
                // console.log('to : ', m[j+i][j], j);
                if (m[j+i][j] !== compVal) {
                    return false;
                }
            }
        }
    }
    return true;
}

// let m = [[1 ,2, 3, 4], [5, 1, 2, 3], [6, 5, 1, 2], [7, 6, 5, 1]];

// console.log(isToeplitz(m));
let m = [[]];
console.log(m[0]);

module.exports = isToeplitz;