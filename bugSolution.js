function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Or throw a custom error: throw new Error('Input cannot be null or undefined');
  }
  return x.length; 
}

console.log(foo(null)); // 0
console.log(foo([1, 2, 3])); // 3
console.log(foo(undefined)); // 0