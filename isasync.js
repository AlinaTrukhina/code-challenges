function isAsync(fun) {
   return fun[Symbol.toStringTag];
}

function isAsync2(fun) {
    const AsyncFunction = (async () => {}).constructor;
    return fun instanceof AsyncFunction;
}

async function myFunction() {
    return "Hello";
}

console.log(isAsync(myFunction));
console.log(isAsync2(myFunction))