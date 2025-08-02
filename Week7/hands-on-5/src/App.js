import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [activeComponent, setActiveComponent] = useState("books");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Blogger App</h1>
      <div>
        <button onClick={() => setActiveComponent("books")}>Show Books</button>
        <button onClick={() => setActiveComponent("blogs")}>Show Blogs</button>
        <button onClick={() => setActiveComponent("courses")}>Show Courses</button>
      </div>

      <hr />

      {/* Conditional Rendering - Multiple ways */}
      {activeComponent === "books" && <BookDetails />}
      {activeComponent === "blogs" ? <BlogDetails /> : null}
      <CourseDetails show={activeComponent === "courses"} />
    </div>
  );
}

export default App;
