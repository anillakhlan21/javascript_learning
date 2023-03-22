# Promises and async/await are concepts in JavaScript used to handle asynchronous operations. They allow you to write cleaner and more readable code when dealing with operations that take time to complete, such as fetching data from a server or reading a file.

# 1. Promises
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is in one of three states:

Pending: The initial state; neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the resulting value is available.
Rejected: The operation failed, and an error reason is available.

# 2. async/await
The async/await syntax is a more recent addition to JavaScript (introduced in ES2017) that provides a more readable way to work with Promises. It makes asynchronous code look and behave more like synchronous code.

To use async/await, you need to declare a function with the async keyword, which allows you to use the await keyword inside the function to pause the execution until a Promise is resolved or rejected.