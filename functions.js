// Named Function

/* 
* Named Function:

* A named function is a function that has a name and can be called using that name. 
    Here's an example:

*   In this example, we've defined a function named addNumbers that takes two parameters x and 
    y and returns their sum. We then call the addNumbers function with the arguments 2 and 3 and 
    log the result to the console.
 */
function addNumbers(x, y) {
  return x + y;
}

console.log(addNumbers(2, 3)); // Output: 5

/* 
* Anonymous Function:
* An anonymous function is a function that does not have a name and is often used as a 
     callback function or as an argument to another function. Here's an example:
* In this example, we're using the map method on an array of numbers to create a new array of 
    doubled numbers. We've passed an anonymous function as an argument to the map method, which 
    takes each number in the original array and multiplies it by 2 to create the new array.
*/
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

/* 
* Arrow Function
* An arrow function is a shorthand syntax for creating a function, introduced in ES6. It uses 
    the => arrow syntax instead of the function keyword. Here's an example:
* In this example, we're using an arrow function to define the addNumbers function. 
    The arrow function takes two parameters x and y and returns their sum. We then call the 
    addNumbers function with the arguments 2 and 3 and log the result to the console.
*/
const addNumbers = (x, y) => {
  return x + y;
};

console.log(addNumbers(2, 3)); // Output: 5

/* 
* Immediately Invoked Function Expression (IIFE):

* An Immediately Invoked Function Expression (IIFE) is a function that is defined and called 
    immediately without being assigned to a variable. Here's an example:
* In this example, we're defining an anonymous function and immediately calling it using the 
    parentheses (). The function simply logs the string 'Hello, world!' to the console.
*/
(function () {
  console.log('Hello, world!');
})();

/* 
* Generator Function
* A generator function is a special type of function that can be paused and resumed, allowing 
    for the creation of iterators. Here's an example:

* In this example, we've defined a generator function named fibonacci that generates the 
    Fibonacci sequence. We create an iterator fib from the generator function, and then call 
    next on the iterator to get each value in the sequence.
  */
function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next]; // [1,2]
  }
}

const fib = fibonacci();


console.log(fib.next().value); // Output: 0
console.log(fib.next().value); // Output: 1
console.log(fib.next().value); // Output: 1
console.log(fib.next().value); // Output: 2
console.log(fib.next().value); // Output: 3


/*
Recursive Function 
*/
function facto(num){
  if(num==1){
    return 1;
  }else{
    return num* facto(num-1); // 5 * facto(4) => 5* 4* 3* 2* 1;
  }
}

facto(5); // 5*4*3*2*1


/*
Higher-order Function:
* A higher-order function is a function that takes another function as an argument or 
    returns a function as its result. Here's an example:
* In this example, we've defined a higher-order function named multiplyBy that takes a factor 
    argument and returns a function that multiplies its argument by the factor. We then call 
    multiplyBy with the argument 2 to get a new function multiplyBy2, which we call with the 
    argument 5 to get the result 10.
*/
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const multiplyBy2 = multiplyBy(2);
/*
const multiplyBy2 = function(number){
  return number* 2;
}
*/
console.log(multiplyBy2(5)); 
