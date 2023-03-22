import { greet } from './utils.js';
import { pi, square, cube } from './utils.js';
import utils from './utils.js';
const greet = require('./utils');
const { add, subtract } = require('./utils');
const counter1 = require('./utils');

console.log(greet('John')); // Output: Hello, John!

console.log('pi:', pi);
console.log('square of 4:', square(4));
console.log('cube of 3:', cube(3));

// Output:
// pi: 3.141592
// square of 4: 16
// cube of 3: 27

// When using default exports, you can import the module without using curly braces:
console.log('pi:', utils.pi);
console.log('square of 4:', utils.square(4));
console.log('cube of 3:', utils.cube(3));



greet('John'); // Output: Hello, John!



console.log(add(10, 5)); // Output: 15
console.log(subtract(10, 5)); // Output: 5

// Alternatively, you can import the object and use the functions as properties:
// const math = require('./math');
// console.log(math.add(10, 5)); // Output: 15
// console.log(math.subtract(10, 5)); // Output: 5



counter1(); // Output: Count: 