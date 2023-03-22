// Example: Creating a Promise

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Operation succeeded');
    // reject('Operation failed');
  }, 1000);
});

/**
   * In this example, we create a Promise that simulates an asynchronous operation using 
   * setTimeout. After one second, the Promise is fulfilled with the value 'Operation 
   * succeeded'. If we uncomment the reject line, the Promise would be rejected with the 
   * value 'Operation failed'.
   * 
   * To handle the result of a Promise, you can use the .then() method for fulfilled promises 
     and the .catch() method for rejected promises:
   */
myPromise
  .then((result) => {
    console.log('Fulfilled:', result);
  })
  .catch((error) => {
    console.log('Rejected:', error);
  });

//  Example: Using async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchData();
/**
 * In this example, we declare an async function called fetchData that fetches data 
 * from an API using the fetch function, which returns a Promise. We use the await keyword 
 * to wait for the fetch Promise to be resolved, and then we wait for the response.json() 
 * Promise to be resolved. The await keyword can only be used inside an async function.

 * We also use a try-catch block to handle errors. If any of the awaited Promises are 
 * rejected, the code inside the catch block will be executed.

 * Here's a comparison of Promise chaining and async/await:
 */

//  Promise chaining:
function fetchData() {
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => {
      console.log('Data:', data);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}
//   Async/await:
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.log('Error:', error);
  }
}
fetchData();
/**
 * As you can see, the async/await version is more concise and easier to read compared 
 * to the Promise chaining version. It allows you to write asynchronous code that looks 
 * more like synchronous code, making it simpler to understand and maintain.

 * In conclusion, Promises and async/await are important concepts in JavaScript for handling 
 * asynchronous operations. They provide a clean and readable way to work with operations 
 * that take time to complete, like fetching data from an API or reading a file. By using 
 * these concepts effectively, you can write more maintainable and efficient code.

 */
