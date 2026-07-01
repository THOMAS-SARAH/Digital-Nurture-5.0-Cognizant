# My First React Application

## Project Title

**My First React Application**

## Objective

This project demonstrates the basic setup of a React application using **Create React App**. The application displays a simple heading:

> **Welcome to the first session of React**

It is designed as an introductory hands-on exercise to understand the React development environment.

---

## Learning Objectives

* Understand the concept of Single Page Applications (SPA).
* Learn the basics of React.
* Set up a React development environment.
* Create a React application using `create-react-app`.
* Run a React application locally.
* Display content using JSX.

---

## Prerequisites

Before running this project, ensure the following are installed:

* Node.js
* npm (comes with Node.js)
* Visual Studio Code (recommended)

---

## Technologies Used

* React
* JavaScript (ES6)
* JSX
* HTML
* CSS
* Node.js
* npm

---

## Project Structure

```
myfirstreact/
│── node_modules/
│── public/
│── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── ...
│── package.json
│── package-lock.json
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project folder

```bash
cd myfirstreact
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the React application

```bash
npm start
```

---

## Output

Open your browser and visit:

```
http://localhost:3000
```

The application displays:

```
Welcome to the first session of React
```

---

## App.js

```javascript
function App() {
  return (
    <div>
      <h1>Welcome to the first session of React</h1>
    </div>
  );
}

export default App;
```

---

## Features

* Simple React application
* Uses functional components
* Displays a heading using JSX
* Easy to understand for beginners
* Built using Create React App

---

## Commands Used

Create a React project:

```bash
npx create-react-app myfirstreact
```

Move into the project directory:

```bash
cd myfirstreact
```

Start the development server:

```bash
npm start
```

---

## Expected Result

The React development server starts successfully, and the browser displays the message:

**Welcome to the first session of React**

---

## Conclusion

This project introduces the fundamentals of React by creating and running a basic React application. It demonstrates how to set up the React environment, use Create React App, write a functional component, and render content on the browser. This serves as the foundation for developing more advanced React applications in the future.

