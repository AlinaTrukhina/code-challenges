const compose = (...funs) => x => {
  
    let i = 0;
    do {
      x = funs[i](x);
      i++;
    } while (i < funs.length);
  
    return x;
  
};
  
console.log(compose(
x => x - 1,
x => x * 2,
x => x + ' s'
)(10));

console.log(compose(
arg => arg.reduce((a, b) => a + b),
x => x * x
)([-7, 1, 8]));

console.log(compose(10));

module.exports = compose;