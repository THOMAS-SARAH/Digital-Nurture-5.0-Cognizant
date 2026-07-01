THEORY
1. React Components

A React Component is an independent, reusable piece of code that represents a part of the user interface (UI). Components allow developers to divide the UI into smaller, manageable pieces that can be reused throughout an application. Each component can have its own logic, state, and appearance.

Advantages of Components:

Reusable code
Easier maintenance
Better code organization
Faster development
Improved readability
2. Difference Between React Components and JavaScript Functions
React Components	JavaScript Functions
Used to build user interfaces	Used to perform specific tasks or calculations
Returns JSX (HTML-like syntax)	Returns any JavaScript value
Can manage state and lifecycle (Class Components)	Cannot manage React state by themselves
Reusable UI elements	Reusable logic or operations
Rendered by React	Executed by JavaScript
3. Types of React Components

React components are mainly of two types:

a) Functional Components
Created using JavaScript functions.
Simpler and easier to write.
Return JSX directly.
Can use Hooks to manage state and lifecycle.
Preferred in modern React development.

Example:

function Home() {
    return <h1>Welcome</h1>;
}
b) Class Components
Created using ES6 classes.
Extend React.Component.
Include a render() method.
Can maintain state and lifecycle methods.
Used in older React applications.

Example:

class Home extends React.Component {
    render() {
        return <h1>Welcome</h1>;
    }
}
4. Class Component

A Class Component is a React component created using an ES6 class. It extends the React.Component class and must contain a render() method that returns JSX.

Features:

Supports state management.
Uses lifecycle methods.
More suitable for complex applications.
Requires the render() method.
5. Functional Component

A Functional Component is a simple JavaScript function that returns JSX. It is the recommended approach in modern React because it is concise, easy to understand, and supports Hooks for state and lifecycle management.

Features:

Simple syntax.
Better performance.
Easier to test.
Uses React Hooks.
Preferred over Class Components in new projects.
6. Component Constructor

A Constructor is a special method in a Class Component that is executed automatically when the component is created. It is used to initialize the component's state and bind methods.

Syntax:

constructor(props) {
    super(props);
    this.state = {};
}

Purpose of Constructor:

Initialize state.
Access props.
Bind event handler methods.
Perform initial setup.
7. render() Function

The render() function is a mandatory method in every React Class Component. It returns the JSX that should be displayed on the screen.

Whenever the component's state or props change, the render() method is called again to update the user interface.

Example:

render() {
    return (
        <h1>Welcome to Student Management Portal</h1>
    );
}
8. Creating Multiple Components

React allows developers to create multiple components and combine them to build a complete application. Each component performs a specific task and can be reused whenever required.

In this experiment:

Home Component displays the Home page message.
About Component displays the About page message.
Contact Component displays the Contact page message.

All these components are imported into App.js and rendered together.

9. Rendering Components

Rendering is the process of displaying a React component on the browser.

A component is rendered by importing it into another component and using its tag.

Example:

import Home from './Components/Home';

function App() {
    return (
        <div>
            <Home />
        </div>
    );
}
Conclusion

This experiment demonstrates the fundamentals of React Components by creating multiple Class Components and rendering them in a single application. It provides an understanding of component-based architecture, constructors, the render() method, and component reusability, which are essential concepts for developing scalable React applications.
