export function greet(name) {
  return `Hello, ${name}!`;
}

export const pi = 3.141592;

export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}

// You can also use default exports for a single main export per module:
const pi = 3.141592;

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

export default {
  pi,
  square,
  cube
};

function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  module.exports = greet;

  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
    }
    
    module.exports = {
    add,
    subtract,
    };
    
    // Alternatively, you can attach the functions directly to the exports object:
    // exports.add = add;
    // exports.subtract = subtract;
    
// counter.js
let count = 0;

function increment() {
  count++;
  console.log(`Count: ${count}`);
}

module.exports = increment;
    
