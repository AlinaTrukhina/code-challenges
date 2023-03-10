/*
Given a 2D rectangular matrix, return all of the values in a single, 
linear array in spiral order. Start at (0, 0) and first include everything in the first row. 
Then down the last column, back the last row (in reverse), 
and finally up the first column before turning right and continuing into the interior of the matrix.
*/

let matrix = [[1, 2, 3, 4,], [ 5, 6, 7, 8], [9,10,11,12], [13,14,15,16]];
let arr1 = [1, 2, 3, 4,];

function spiralTraversal(matrix) {
    /* your code here */
    let dir = 0;
    let newArr = [];
    // outer loop to go around the matrix
    let i = 0;
    while(matrix.length > 0) {
    // inner loop 
    // get into 1st array, for loop through the row forwards 
        if (dir == 0) {
            // let topR = matrix[0];
            // let topRlength = matrix[0].length;
            for (let j = 0; j < matrix[0].length; j++) {
                let newVal = matrix[0].splice(j, 1);
                newArr.push(newVal[0]);
                j--;
            }
            matrix.shift();
            dir++;
        }
        // for loop through the columns down
        if (dir == 1) {
            for(let col = 0; col < matrix.length; col++){
                newVal = matrix[col].splice(matrix[col].length-1,1);
                newArr.push(newVal[0]);
            }
            dir++;
        }
        // for loop through the row backwards 
        if (dir == 2) {
            for (let k = matrix[matrix.length - 1].length -1; k >= 0; k--) {
                let newVal = matrix[matrix.length - 1].splice(k, 1);
                newArr.push(newVal[0]);
            }
            matrix.pop();
            dir++;
        }
        // for loop through the columns up
        if (dir == 3) {
            for(let col = matrix.length-1; col >= 0; col--){
                newVal = matrix[col].splice(matrix[0],1);
                newArr.push(newVal[0]);
            }
            dir = 0;
        }
        
        i++;
    }
    return newArr;
}

console.log(spiralTraversal(matrix));

// console.log(arr1.splice(0,1));
// console.log(arr1);

module.exports = spiralTraversal;