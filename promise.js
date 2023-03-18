const myPromise = new Promise((resolve, reject) => {
  // Perform some asynchronous operation here
  // If the operation is successful, call resolve(value)
  // If the operation fails, call reject(error)
});


/*
Once you have a Promise, you can use the then() method to handle the successful 
completion of the operation, or the catch() method to handle any errors that occurred 
during the operation. You can also use the finally() method to perform some cleanup tasks 
that should be executed regardless of whether the operation succeeded or failed.
Here's an example of how you can use a Promise:
*/

myPromise
  .then((value) => {
    // Handle the successful completion of the operation
  })
  .catch((error) => {
    // Handle any errors that occurred during the operation
  })
  .finally(() => {
    // Perform some cleanup tasks
  });

const cart = ['shoes', 'kurta', 'jeans','frock', 'IPhone','Bag','Sandal','tops'];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   });
// });

createOrder(cart)
.then(function (orderId){
    return proceedToPayment(orderId);
})
.then(function (paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function (orderSummary){
    return updateWalletBalance(orderSummary)
})
