// Example 1: Basic closure
function outer() {
    const outerVar = 'I am in the outer function';
  
    function inner() {
      console.log(outerVar);
    }
  
    return inner;
  }
  
  const innerFunc = outer();
  innerFunc(); // Output: 'I am in the outer function'

  /**
   * In this example, the inner function has access to the outerVar variable even after the 
   * outer function has finished executing. When we call innerFunc(), it still prints the value 
   * of outerVar.
   */

//   Example 2: Closure with a counter
  function createCounter() {
    let count = 0;
  
    function counter() {
      count++;
      console.log(count);
    }
  
    return counter;
  }
  
  const myCounter = createCounter();
  
  myCounter(); // Output: 1
  myCounter(); // Output: 2
  myCounter(); // Output: 3

  /**
   * In this example, the counter function has access to the count variable from its 
   * containing createCounter function. Each time myCounter() is called, it increments the 
   * count variable and logs the new value. The closure allows the counter function to maintain 
   * its state even between different calls.
   */

//   Example 3: Closure with function arguments
function createMultiplier(factor) {
    function multiplier(value) {
      return value * factor;
    }
  
    return multiplier;
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log(double(5)); // Output: 10
  console.log(triple(5)); // Output: 15

  /**
   * In this example, the multiplier function has access to the factor variable from its 
   * containing createMultiplier function. When we create the double and triple functions, 
   * they remember the values of factor (2 and 3, respectively) and use them to multiply the 
   * input values.
   */