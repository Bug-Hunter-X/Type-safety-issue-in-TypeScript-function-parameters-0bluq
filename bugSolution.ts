function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

let result = add(5, 10); // Correct usage
console.log(result); // Outputs 15

//Example of error handling
try {
  let result2 = add(5, '10');
  console.log(result2);
} catch (error) {
  console.error(error.message); //Outputs 'Both parameters must be numbers'
}
