function addByX(x) {
	let step = x;
  function add(start){
    //console.log('addByX', start + step)
    return start + step;
  }
	return add;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5
// console.log(addbyTwo(3))