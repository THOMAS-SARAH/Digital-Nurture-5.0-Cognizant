import React from "react";

function BlogDetails() {

  const blogs = [
    {
      id: 1,
      title: "Introduction to React",
      writer: "Sarah"
    },
    {
      id: 2,
      title: "Understanding JSX",
      writer: "John"
    },
    {
      id: 3,
      title: "React Hooks",
      writer: "David"
    }
  ];

  return (
    <div className="card">

      <h3>Blog Details</h3>

      <ul>

        {blogs.map(blog => (

          <li key={blog.id}>
            <b>{blog.title}</b> - {blog.writer}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default BlogDetails;