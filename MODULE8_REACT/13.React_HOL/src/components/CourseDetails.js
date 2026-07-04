import React from "react";

function CourseDetails() {

  const courses = [
    {
      id: 1,
      name: "React",
      duration: "6 Weeks"
    },
    {
      id: 2,
      name: "Node.js",
      duration: "5 Weeks"
    },
    {
      id: 3,
      name: "MongoDB",
      duration: "4 Weeks"
    }
  ];

  return (
    <div className="card">

      <h3>Course Details</h3>

      <ol>

        {courses.map(course => (

          <li key={course.id}>
            {course.name} - {course.duration}
          </li>

        ))}

      </ol>

    </div>
  );
}

export default CourseDetails;