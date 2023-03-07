/* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  // After thinking it through, uncomment the following line to check your guess!
  // testMe(); // what order should these log out? Howdy or Partnah first?
  
  
  /* CHALLENGE 2 */
  
  
  function delayedGreet() {
    // ADD CODE HERE
    function sayWelcome(){
        console.log('welcome');
      }
    
    setTimeout(sayWelcome, 3000);
  }
  // Uncomment the following line to check your work!
  // delayedGreet(); // should log (after 3 seconds): welcome
  
  
  /* CHALLENGE 3 */
  
  function helloGoodbye() {
    // ADD CODE HERE
    function goodbye(){
      console.log('goodbye');
    }
    
    console.log('hello');
    setTimeout(goodbye, 2000);
  }
  // Uncomment the following line to check your work!
  // helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
  
  
  /* CHALLENGE 4 */
  
  function brokenRecord() {
    // ADD CODE HERE
    function hiAgain(){console.log('hi again');}
    // let i = 1;
    // do {
    //   setTimeout(hiAgain, i*1000);
    //   i++;
    // } while (i < 1000)
    const br = setInterval(hiAgain, 1000);
  }
  // Uncomment the following line to check your work!
  // brokenRecord(); // should log (every second): hi again
  
  
  /* CHALLENGE 5 */
  
  function limitedRepeat() {
    // ADD CODE HERE
    let counter = 0;
    const newInterval = setInterval(() => {
      console.log('hi for now');
      counter++;
      if (counter > 4) {clearInterval(newInterval)}}, 
    1000)
    
    
  }
  // Uncomment the following line to check your work!
  // limitedRepeat(); // should log (every second, for 5 seconds): hi for now
  
  
  /* CHALLENGE 6 */
  
  function everyXsecsForYsecs(func, interval, duration) {
    // ADD CODE HERE
    let counter = 1;
    const exec = setInterval(()=> {
      if (counter*1000 >= duration*1000){
        clearInterval(exec);
      }
      func();
      counter++;
    }, interval*1000)
  }
  // Uncomment the following lines to check your work!
  function theEnd() {
    console.log('This is the end!');
  }
  // everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  
  
  /* CHALLENGE 7 */
  
  function delayCounter(target, wait) {
       let counter = 1;
    function newFunc(){
      const timeLogger = setInterval(() => {
        if (counter >= target){
          clearInterval(timeLogger);
        }
        console.log(counter);
        counter++;
      }, wait);
    }
    return newFunc;
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const countLogger = delayCounter(3, 1000)
  // countLogger();
  // After 1 second, log 1
  // After 2 seconds, log 2
  // After 3 seconds, log 3
  
  /* CHALLENGE 8 */
  
  function promised (val) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(val)
      }, 2000)
    })
        
    return promise;
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  const createPromise = promised('wait for it...');
  createPromise.then((val) => console.log(val)); 
  // will log "wait for it..." to the console after 2 seconds