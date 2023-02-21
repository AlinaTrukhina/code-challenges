const comp = (...funs) => x => {
  
    let i = 0;
    do {
      x = funs[i](x);
      i++;
    } while (i < funs.length);
  
    return x;
  
  }
  
console.log(comp(
x => x - 1,
x => x * 2,
x => x + ' s'
)(10));

console.log(comp(
arg => arg.reduce((a, b) => a + b),
x => x * x
)([-7, 1, 8]));