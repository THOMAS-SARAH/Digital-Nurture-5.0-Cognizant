import React from "react";
import "./App.css";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {

  // Method 1 : if...else using Element Variable
  let component;
  const choice = "book";

  if (choice === "book") {
    component = <BookDetails />;
  } else if (choice === "blog") {
    component = <BlogDetails />;
  } else {
    component = <CourseDetails />;
  }

  // Method 2 : Logical &&
  const showBlog = true;

  // Method 3 : Ternary Operator
  const showCourse = true;

  return (
    <div className="container">

      <h1>Blogger Application</h1>

      <h2>Method 1 : if...else</h2>
      {component}

      <hr />

      <h2>Method 2 : Logical AND (&&)</h2>
      {showBlog && <BlogDetails />}

      <hr />

      <h2>Method 3 : Ternary Operator</h2>
      {showCourse ? <CourseDetails /> : <BookDetails />}

      <hr />

      <h2>Method 4 : Render Multiple Components</h2>

      <BookDetails />
      <BlogDetails />
      <CourseDetails />

    </div>
  );
}

export default App;