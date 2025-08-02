import React from 'react';

const blogs = [
  { id: 1, title: "React Hooks Guide", author: "Tejas P" },
  { id: 2, title: "Async JS Explained", author: "Karthik K" }
];

const BlogDetails = () => (
  <div>
    <h3>Blogs</h3>
    {blogs.length > 0 ? (
      blogs.map(blog => (
        <p key={blog.id}>
          📘 <strong>{blog.title}</strong> by {blog.author}
        </p>
      ))
    ) : (
      <p>No blogs found</p>
    )}
  </div>
);

export default BlogDetails;
