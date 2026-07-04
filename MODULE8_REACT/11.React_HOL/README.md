# Experiment: Event Handling in React

## 1. React Events

React Events are actions or occurrences that happen in the browser and can be detected by React components. Events allow applications to respond to user interactions such as clicking a button, typing in a textbox, submitting a form, or moving the mouse.

Common React events include:

* `onClick`
* `onChange`
* `onSubmit`
* `onMouseOver`
* `onKeyDown`
* `onFocus`
* `onBlur`

### Example

```jsx
function App() {
  return (
    <button onClick={() => alert("Button Clicked!")}>
      Click Me
    </button>
  );
}
```

---

# 2. Event Handlers

An **Event Handler** is a JavaScript function that executes whenever a specific event occurs.

### Ways to define event handlers

### Method 1: Named Function

```jsx
function handleClick() {
    alert("Button Clicked");
}

<button onClick={handleClick}>Click</button>
```

### Method 2: Arrow Function

```jsx
<button onClick={() => alert("Clicked")}>
    Click
</button>
```

### Method 3: Passing Arguments

```jsx
function greet(name) {
    alert("Welcome " + name);
}

<button onClick={() => greet("Sarah")}>
    Welcome
</button>
```

---

# 3. Synthetic Event

React provides a **SyntheticEvent**, which is a wrapper around the browser's native event.

It behaves similarly to the native DOM event but works consistently across all browsers.

### Advantages

* Cross-browser compatibility
* Improved performance
* Same interface for all browsers
* Prevents browser inconsistencies

### Example

```jsx
function handleClick(event) {
    console.log(event.type);
}

<button onClick={handleClick}>
    Click
</button>
```

Here,

* `event` is a SyntheticEvent.
* `event.type` returns `"click"`.

---

# 4. React Event Naming Convention

React follows **camelCase** naming for events instead of lowercase HTML events.

| HTML        | React         |
| ----------- | ------------- |
| onclick     | onClick       |
| onchange    | onChange      |
| onsubmit    | onSubmit      |
| ondblclick  | onDoubleClick |
| onmouseover | onMouseOver   |
| onkeydown   | onKeyDown     |
| onfocus     | onFocus       |
| onblur      | onBlur        |

### HTML Example

```html
<button onclick="myFunction()">
```

### React Example

```jsx
<button onClick={myFunction}>
```

---

# 5. Using the `this` Keyword

In **Class Components**, `this` refers to the current component instance.

It is used to:

* Access state
* Call methods
* Update state using `this.setState()`

### Example

```jsx
class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <button onClick={this.increment}>
                Increment
            </button>
        );
    }
}
```

> In Functional Components, `this` is **not used**. Hooks such as `useState()` replace the need for `this`.

---

# 6. Invoking Multiple Methods

A single event can execute multiple functions.

### Example

```jsx
function increment() {
    console.log("Counter Increased");
}

function sayHello() {
    console.log("Hello User");
}

<button
onClick={()=>{
    increment();
    sayHello();
}}>
Increment
</button>
```

Both functions execute when the button is clicked.

---

# 7. Passing Arguments to Event Handlers

Arguments can be passed using an arrow function.

### Example

```jsx
function welcome(name) {
    alert("Welcome " + name);
}

<button onClick={() => welcome("Sarah")}>
Say Welcome
</button>
```

---

# 8. Click Event

The **Click Event** occurs when a user clicks a button, image, or any clickable element.

### Syntax

```jsx
<button onClick={handleClick}>
```

### Example

```jsx
function handleClick() {
    alert("Button Clicked");
}

<button onClick={handleClick}>
Click Me
</button>
```

---

# 9. Form Event Handling

React handles forms through controlled components.

### Important Form Events

| Event    | Purpose                          |
| -------- | -------------------------------- |
| onChange | Triggered when input changes     |
| onSubmit | Triggered when form is submitted |
| onFocus  | Triggered when input gets focus  |
| onBlur   | Triggered when input loses focus |

### Example

```jsx
function handleSubmit(event) {
    event.preventDefault();
    alert("Form Submitted");
}

<form onSubmit={handleSubmit}>
    <button type="submit">
        Submit
    </button>
</form>
```

---

# 10. Counter Example

A counter application demonstrates event handling using buttons.

Operations:

* Increment
* Decrement
* Display current value

Each button invokes its corresponding event handler to update the state.

---

# 11. Currency Converter

A Currency Converter converts one currency into another based on a conversion rate.

In this experiment:

* User enters amount in Indian Rupees (INR).
* Clicking the **Convert** button triggers the `handleSubmit()` function.
* The amount is converted into Euros using a predefined conversion rate.
* The converted value is displayed on the screen.

---

# Key Points

* React uses **camelCase** for event names.
* Event handlers are JavaScript functions executed when events occur.
* React provides **SyntheticEvent** for cross-browser compatibility.
* Multiple methods can be called within a single event handler.
* Arguments are passed using arrow functions.
* `this` is mainly used in class components to access state and methods.
* `onClick`, `onChange`, and `onSubmit` are the most commonly used React events.
* Forms are handled using event handlers like `onSubmit()` and `onChange()`.
* Event handling enables interactive applications such as counters, welcome messages, and currency converters.

