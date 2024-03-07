### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  1. Callbacks can be passed as an argument to another function that is invoked after the asynchronous operation is completed. Can result in 'callback hell'.
  2. Promises represent the eventual completion or failure of an asynchronous operation. They provide a more structured way to handle asynchronous code compared to callbacks.
  3. Async/Await makes asynchronous code look and behave more like synchronous code. It allows you to write asynchronous code that looks synchronous, making it easier to read and understand.

- What is a Promise?
  A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. A promise is always in one of three states: Pending, Fulfilled, or Rejected. You can attach callbacks to a Promise using .then() and .catch() for handling the result.

- What are the differences between an async function and a regular function?
  1. Return Value Handling: A regular function that returns a Promise will return the Promise object itself rather than the result of the Promise.
  2. Error Handling: If an error occurs within a regular function, it will not be caught by the Promise chain unless explicitly handled. Async functions implicitly return a Promise so if an error occurs it will be caught and the Promise will be rejected.
  3. Syntax and Code Structure: Async functions allow the use of the 'await' keyword within their body. The 'await' keyword can pause the execution of the async function until the Promise is resolved or rejected, and then resume execution.
  4. Execution Context: Async functions run in a different execution context compared to regular functions. The code before the first 'await' expression runs synchronously, and the code after each 'await' expression runs in a .then() callback, forming a promise chain.

- What is the difference between Node.js and Express.js?
  Node.js is a runtime environment that allows JavaScript to be executed on the server side. Express.js is a web framework built on top of Node.js that simplifies the process of building web applications.

- What is the error-first callback pattern?
  The error-first callback pattern is a convention in Node.js for handling asynchronous operations. The pattern allows for consistent error handling across different asynchronous operations. Asynchronous operations by nature are expected to have errors more often because they rely on outside sources, so handling the errors is very important.

- What is middleware?
  Middleware refers to functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. Middleware functions can perform a variety of tasks, including executing code, modifying the request and response objects, ending the request-response cycle, or calling the next middleware in the stack. 

- What does the `next` function do?
  It is used to control the flow of middleware execution and error handling within an Express application.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  1. Performance: The code sequentially awaits each API call rather than making the requests in parallel. This code could be restructured to use Promise.all() to define an array.
  2. Error Handling: There is no error handling. The function body could be wrapped in a try/catch to make debugging easier.
  3. Readability: The function name 'getUsers' might be misleading since it only fetches data for specific users. A function name like 'getTargetUsers' or 'getSpecificUsers' could improve readability. Also, using more descriptive variable names for the API calls like 'elieUser' vs 'elie' could clarify the purpose of the variable.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
