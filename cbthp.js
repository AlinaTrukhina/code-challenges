// spread operator takes the functions and puts them in an array

// syntax for function: 
// const functionName => (...args - functions) => params to put in function => {}

/*
Meanwhile if you get bored, you can try to adapt this solution to return 
an async function if and only if one of its arguments is an async function
*/

const compose = (...funs) => x => {
  const AsyncFunction = (async () => {}).constructor;
  let isAsync = false;
  for (let i = 0; i < funs.length; i++) {
    if  (funs[i] instanceof AsyncFunction == true) {
      isAsync = true;
    }
  }
    let i = 0;
    do {
      console.log((funs[i]))
      if (isAsync){
        async function newFun(x){await funs[i](x)} 
        x = newFun(x)
      } else {
        x = funs[i](x); 
      }  
      i++;
    } while (i < funs.length);
  
    return x;
  
};

function isAsync2(fun) {
  const AsyncFunction = (async () => {}).constructor;
  return fun instanceof AsyncFunction;
}

// console.log(isAsync2(firstFun))
  
// console.log(compose(
// x => x - 1,
// x => x * 2,
// x => x + ' s'
// )(10));

// console.log(compose(
// arg => arg.reduce((a, b) => a + b),
// x => x * x
// )([-7, 1, 8]));

console.log(compose(
  firstFun,
  secondFun,
  thirdFun
  )(10));

async function firstFun(x) {
  return x - 1;
}

function secondFun(x) {
  // x = firstFun(x);
  return x * 2;
}

function thirdFun(x) {
  // x = secondFun(x);
  return `${x} + s`;
}

module.exports = compose;