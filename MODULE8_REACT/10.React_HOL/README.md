# React JSX – Theory

## 1. JSX (JavaScript XML)

JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript. It makes React code more readable and easier to write. JSX is not understood directly by browsers; it is transpiled into JavaScript using Babel.

### Advantages of JSX

* Easier to read and write.
* Improves code readability.
* Allows embedding JavaScript expressions.
* Helps create dynamic user interfaces.
* Prevents code injection through automatic escaping.

---

## 2. ECMAScript (ES6)

ECMAScript is the standard specification of JavaScript. React primarily uses ES6 and later versions because they provide modern features that simplify development.

### Common ES6 Features Used in React

* `let` and `const`
* Arrow functions
* Template literals
* Destructuring
* Spread operator
* Modules (`import` and `export`)
* Classes

---

## 3. React.createElement()

`React.createElement()` is a React method used to create React elements. Every JSX expression is converted into `React.createElement()` calls by Babel before execution.

### Syntax

```javascript
React.createElement(type, props, children);
```

### Parameters

* **type:** HTML element or React component.
* **props:** Attributes or properties of the element.
* **children:** Content or nested elements.

---

## 4. Creating React Nodes with JSX

React nodes can be created using JSX by writing HTML-like syntax inside JavaScript. JSX provides a simple and declarative way to define the structure of the user interface. It supports nesting of elements and component composition.

---

## 5. Rendering JSX to the DOM

JSX is rendered to the browser using ReactDOM. The `render()` method displays the React elements inside a specified root DOM element. React updates only the changed parts of the page using the Virtual DOM, making rendering efficient.

---

## 6. JavaScript Expressions in JSX

JSX allows JavaScript expressions to be embedded inside curly braces `{}`. These expressions can include variables, function calls, arithmetic operations, object properties, and conditional expressions. Statements such as `if` or loops cannot be written directly inside JSX.

---

## 7. Inline CSS in JSX

Inline CSS in JSX is applied using the `style` attribute. Unlike HTML, the `style` attribute accepts a JavaScript object, and CSS property names are written in camelCase.

### Features

* Uses JavaScript object notation.
* CSS properties are written in camelCase (e.g., `backgroundColor`, `fontSize`).
* Supports dynamic and conditional styling.
* Useful for applying styles directly to React elements.
