# Modules and imports/exports

## Modules in JavaScript allow you to organize your code into separate, reusable pieces that can be easily imported and used in other parts of your application. They help to maintain a clean and modular codebase, which makes it easier to develop, maintain, and scale your applications.

There are two primary ways to work with modules in JavaScript:

1. ES6 (ECMAScript 2015) Modules
2. CommonJS Modules (used mainly in Node.js)

We'll discuss both methods and provide examples for each.

# 1. ES6 Modules
ES6 Modules are the standard module system in modern JavaScript. They use the import and export keywords to define dependencies and expose functionality to other modules.

# Example:
Assume you have the following file structure:
src/
  |- utils.js
  |- main.js

In utils.js, we have a utility function that we want to export.


# 2.CommonJS Modules (Node.js)
CommonJS Modules are a module system used primarily in Node.js for managing and organizing code in separate files. This module system allows for better code organization, easier debugging, and simplified dependency management.

A CommonJS module is a self-contained piece of code that can export functionality, like functions or objects, for other modules to use. Other modules can then import this functionality and use it in their code.

## Exporting a module
To export a module in CommonJS, you use the module.exports object. You can assign a function, an object, or any other data type to module.exports.

## Importing a module
To import a module in CommonJS, you use the require() function, which returns the exported value from the target module.

## Exporting multiple values
You can also export multiple values from a module. To do this, you can assign an object to module.exports or attach properties directly to exports.

## Module caching
Node.js caches the exported values of a module when it's first imported. This means that if you import the same module multiple times, you'll get the same exported values.






