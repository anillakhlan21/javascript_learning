// Example 1: Basic try-catch
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  } catch (error) {
    console.log('Error:', error.message);
  }
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Error: Division by zero is not allowed
/**
 * In this example, we have a divide function that checks if the divisor is zero.
 * If it is, we throw a custom error using the throw statement with a new instance of
 * the Error object and a custom error message. If an error is thrown, the catch block
 * catches the error and logs the error message. If there is no error, the division result
 * is returned.
 */

//   Example 2: try-catch with JSON.parse
function parseJSON(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    console.log('Parsed data:', data);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

const validJSON = '{"key": "value"}';
const invalidJSON = '{"key": "value",}';

parseJSON(validJSON); // Output: Parsed data: { key: 'value' }
parseJSON(invalidJSON); // Output: Error: Unexpected token } in JSON at position 18
/**
 * In this example, we have a parseJSON function that attempts to parse a JSON string using
 * JSON.parse(). If the JSON string is invalid, JSON.parse() will throw an error, which is
 * caught by the catch block. The error message is then logged to the console.
 * */

// Example 3: try-catch-finally
/**
 * You can also use the finally statement to define a block of code that will be executed
 * regardless of whether an exception was thrown or not.
 */
function greet(name) {
  try {
    if (!name) {
      throw new Error('Name is required');
    }
    console.log(`Hello, ${name}!`);
  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    console.log('Greet function execution finished.');
  }
}

greet('John'); // Output: Hello, John! / Greet function execution finished.
greet(); // Output: Error: Name is required / Greet function execution finished.
/**
 * In this example, we have a `greet` function that checks if the `name` parameter is provided. 
 * If it's not, we throw a custom error using the `throw` statement with a new instance of the
 *  `Error` object and a custom error message. If an error is thrown, the `catch` block catches 
 * the error and logs the error message. The `finally` block is executed in both cases 
 * (error or no error), and it logs a message to indicate that the `greet` function execution 
 * is finished.
 * 
 * In conclusion, error handling with `try`, `catch`, and `throw` allows you to manage 
 * exceptions in your code gracefully, providing a better user experience and making your 
 * application more robust. By handling errors effectively, you can ensure that your application 
 * continues to function correctly even in the face of unexpected situations.
 */