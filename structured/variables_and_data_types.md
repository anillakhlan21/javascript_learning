# Variables and data types

 In JavaScript, variables are used to store values that can be used and manipulated later in your code. Data types are the various types of values that can be stored in variables. Here's an overview of variables and data types in JavaScript:

# Variables:

To declare a variable, you can use var, let, or const keywords.
## var: This keyword was used to declare variables in older versions of JavaScript (ES5 and below). Variables declared with var have function scope and are hoisted to the top of their scope, which can lead to unexpected behavior.

## let: This keyword was introduced in ES6 (ECMAScript 2015) and should be used to declare variables that can change their value over time. Variables declared with let have block scope and are not hoisted.

## const: This keyword was also introduced in ES6 and should be used to declare variables with values that won't change. They are constants. Like let, const also has block scope and is not hoisted.

# Data types:

## Number: Represents numeric values, including integers and floating-point numbers. There's no distinction between integers and floats in JavaScript.

## String: Represents a sequence of characters. Strings can be created using single quotes ('), double quotes ("), or backticks (`).

## Boolean: Represents a true or false value.

## Null: Represents the intentional absence of any value. It's used to indicate that a variable should have no value.

## Undefined: Represents a variable that has been declared but has not been assigned a value yet.

## Object: Represents a collection of key-value pairs, where keys are strings, and values can be any data type. Objects are used to store complex data structures and can also include functions (methods).

## Symbol: Represents a unique and immutable value. Symbols are mainly used as unique property keys for objects.


> Remember that when working with variables and data types, it's a best practice to use const when the value won't change and let when the value can change. Avoid using var, as it can lead to unexpected behavior.