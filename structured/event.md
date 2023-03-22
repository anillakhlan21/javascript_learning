Event handling refers to the process of managing and responding to various events triggered by user interactions or system occurrences, such as clicking a button, hovering over an element, or receiving data from an API. Event handling is a critical aspect of creating interactive and responsive applications.

In JavaScript, events are handled using event listeners, which are functions that are called when a specific event occurs on a particular element.

Here's a detailed explanation of event handling in JavaScript, along with examples:

# Select an element: First, you need to select the DOM (Document Object Model) element that you want to attach the event listener to. This can be done using various methods, such as document.getElementById(), document.querySelector(), or document.querySelectorAll().

`const button = document.querySelector('button');`

# Create an event listener function: Create a function that will be executed when the event is triggered. This function will receive an event object, which contains information about the event, such as the target element, the event type, and any additional data.

`function handleClick(event) {
  console.log('Button clicked:', event.target);
}`

# Attach the event listener: Attach the event listener to the selected element using the addEventListener() method. This method takes two arguments: the event type and the event listener function.

`button.addEventListener('click', handleClick);`

