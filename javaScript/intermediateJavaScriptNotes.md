# Modules
## Runtime Environment
A **Runtime Environment** is where the program will run such as a browser or Node
**Front end applications** are created for and executed in a browser
**Node runtime environment** enables full stack applications using only JavaScript, which used to be a front-end only language.
## Implementing modules
**Node** uses module.exports and require() syntax
- require() accepts string as argument
  - Provides file path
  - Can extract specific examples
    - Example
\```javascript
      const { celsiusToFahrenheit } = require('./converters.js');
      
      const celsiusInput = process.argv[2]; 
      const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
      
      console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);
      ```
**ES6** uses import and export syntax

# Asynch
**Asynchronous actions** are actions we can wait on while moving on to other tasks
**Javascript is non blocking** so it uses an event-loop to efficiently execute other tasks while it waits for the completion of asynch tasks
**async... await** allows us to write asynchronous code that reads similarly to traditional
**Syntactic sugar** doesn't introduce new functionality but introduces new syntax using promises and generators
Wrap asynchronous logic inside a function prepended with the async keyword and then invoke the function
Example with function declarations
```javascript
async function myFunc() {
  // Function body here
};
 
myFunc();
```
```javascript
Example with function expressions
const myFunc = async () => {
  // Function body here
};
 
myFunc();
```
**Three ways an async function will return**
- Nothing returned from function --> Return promise with unresolved value of undefined
- Non-promise value returned from the function --> Return promise resolved to that value
- Promise returned from function --> Return that promise

