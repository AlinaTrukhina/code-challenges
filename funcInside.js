/* create a function addByX that returns a function that will add an input by x. 
*/
function addByX(x) {
    // console.log(x);
    
    function adder (num){
      
      return num+x;
    }
    return adder;
}

const generatedFunc = addByX(2);
const addByTwo = addByX(2);

console.log(generatedFunc(3));
console.log(addByTwo(2));
console.log(addByTwo(3));
console.log(addByTwo(4));


// function once(func) {
//     let counter = 0;
//     let result;
//       function runCallback(){
//       if (counter === 0) {
//         counter ++;
//         const result = func();
//         return result;
//       } else {
//         return result;
//       }
//     }
//     return runCallback;
//   }
  
function once(func) {
  let output;
  function runCallback(num) {
    if (output > 0) {
      // console.log(cb(2))
      return output;
    }
    output = func(num);
    return output;
  }

  return runCallback;
}

// /*** Uncomment these to check your work! ***/

// addByTwo(4);
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));

// console.log(addByX(2));
// console.log(addbyTwo(1));