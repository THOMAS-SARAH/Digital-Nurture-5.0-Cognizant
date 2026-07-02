# Experiment: Exploring ES6 Features in React

## Aim

To understand and implement the major features of **ECMAScript 6 (ES6)** in a React application, including **let**, **const**, **arrow functions**, **classes**, **destructuring**, **map()**, and **array merging**.

---

# Theory

## Introduction to ES6

**ECMAScript 6 (ES6)**, also known as **ECMAScript 2015**, is a major update to JavaScript. It introduced several new features that make JavaScript code more readable, concise, and efficient. React applications heavily rely on ES6 features because they simplify component development and improve code maintainability.

---

## Features of ES6

Some important features introduced in ES6 are:

* `let` and `const` keywords
* Arrow Functions (`=>`)
* Classes
* Class Inheritance
* Template Literals
* Destructuring Assignment
* Spread and Rest Operators
* Modules (Import/Export)
* Map and Set Collections
* Array methods like `map()`, `filter()`, `find()`, etc.

These features help developers write cleaner and more organized code.

---

## JavaScript `let`

The `let` keyword is used to declare variables that have **block scope**.

### Syntax

```javascript
let score = 90;
```

### Characteristics

* Block scoped.
* Can be reassigned.
* Cannot be redeclared within the same block.
* Preferred over `var` for variables whose values may change.

### Example

```javascript
let runs = 80;
runs = 95;
console.log(runs);
```

---

## Difference Between `var` and `let`

| var                                    | let                                    |
| -------------------------------------- | -------------------------------------- |
| Function scoped                        | Block scoped                           |
| Can be redeclared                      | Cannot be redeclared in the same scope |
| Hoisted and initialized with undefined | Hoisted but not initialized            |
| Older way of declaring variables       | Modern ES6 approach                    |

### Example

```javascript
var a = 10;
var a = 20;     // Allowed

let b = 10;
let b = 20;     // Error
```

---

## JavaScript `const`

The `const` keyword is used to declare constants.

### Syntax

```javascript
const PI = 3.14;
```

### Characteristics

* Block scoped.
* Cannot be reassigned.
* Must be initialized while declaring.
* Suitable for values that should remain constant.

### Example

```javascript
const country = "India";
```

---

## ES6 Classes

Classes provide a cleaner syntax for creating objects and implementing Object-Oriented Programming (OOP).

### Syntax

```javascript
class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}
```

### Advantages

* Better readability
* Supports constructors
* Easier inheritance
* Reusable code

---

## ES6 Class Inheritance

Inheritance allows one class to acquire the properties and methods of another class using the `extends` keyword.

### Example

```javascript
class Player {
    display() {
        console.log("Player Details");
    }
}

class Batsman extends Player {
}

const obj = new Batsman();
obj.display();
```

### Benefits

* Code reusability
* Reduces duplication
* Easier maintenance

---

## Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

### Syntax

```javascript
const add = (a, b) => a + b;
```

### Example

```javascript
const square = num => num * num;

console.log(square(5));
```

### Advantages

* Shorter syntax
* Improves readability
* Automatically binds `this`
* Commonly used with React components and array methods

---

## `map()` Method

The `map()` method creates a new array by applying a function to every element of an existing array.

### Syntax

```javascript
array.map(function(element){
    // return value
});
```

### Example

```javascript
const scores = [50, 70, 90];

const updated = scores.map(score => score + 10);

console.log(updated);
```

**Output**

```
60
80
100
```

### Uses

* Displaying lists in React
* Transforming array elements
* Rendering components dynamically

---

## `filter()` Method

The `filter()` method returns only those elements that satisfy a given condition.

### Example

```javascript
const scores = [45, 75, 60, 90];

const qualified = scores.filter(score => score >= 70);

console.log(qualified);
```

**Output**

```
75
90
```

In this experiment, `filter()` is used to display players whose scores are below 70.

---

## Destructuring Assignment

Destructuring is an ES6 feature that extracts values from arrays or objects into separate variables.

### Array Destructuring

```javascript
const players = ["Virat", "Rohit", "Gill", "Rahul"];

const [p1, p2, p3, p4] = players;
```

### Benefits

* Cleaner code
* Easy extraction of values
* Improves readability

---

## Spread (Merge) Operator

The spread operator (`...`) is used to merge arrays or copy array elements.

### Syntax

```javascript
const merged = [...array1, ...array2];
```

### Example

```javascript
const T20 = ["Virat", "Rohit"];
const Ranji = ["Pujara", "Rahane"];

const players = [...T20, ...Ranji];

console.log(players);
```

### Output

```
Virat
Rohit
Pujara
Rahane
```

---

## Set

A `Set` is a collection that stores only unique values.

### Example

```javascript
const numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(10);

console.log(numbers);
```

### Output

```
10
20
```

### Features

* Stores unique elements
* Removes duplicates automatically
* Supports add(), delete(), has(), and clear() methods

---

## Map

A `Map` stores data in key-value pairs.

Unlike objects, keys in a Map can be of any data type.

### Example

```javascript
const player = new Map();

player.set("Name", "Virat");
player.set("Score", 95);

console.log(player.get("Name"));
```

### Output

```
Virat
```

### Features

* Stores key-value pairs
* Maintains insertion order
* Allows any type of key
* Useful for efficient data storage and retrieval

---

# Application in This Lab

In this experiment, ES6 features are implemented as follows:

* `map()` is used to display the list of cricket players.
* Arrow functions are used with `map()` and `filter()`.
* `filter()` selects players whose scores are below 70.
* Destructuring separates odd and even team players.
* Spread operator merges T20 and Ranji Trophy player arrays.
* Conditional rendering (`if-else`) displays different React components based on a flag variable.

---

# Advantages of ES6

* Cleaner and shorter syntax
* Improved readability
* Better support for Object-Oriented Programming
* Efficient handling of arrays and objects
* Simplifies React development
* Encourages modular and maintainable code

---

# Conclusion

ES6 introduces powerful features that simplify JavaScript programming and form the foundation of modern React development. In this experiment, concepts such as **let**, **const**, **arrow functions**, **map()**, **filter()**, **destructuring**, **spread operator**, **Set**, and **Map** are applied to build a React application that displays and manipulates cricket player information efficiently.

