import React from 'react';

const CourseDetails = ({ show }) => {
  if (!show) return null; // prevents rendering

  const courses = ["React", "Node.js", "GraphQL"];

  return (
    <div>
      <h3>Courses</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
