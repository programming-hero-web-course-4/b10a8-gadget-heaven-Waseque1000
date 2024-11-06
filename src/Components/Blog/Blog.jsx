import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogPosts = useLoaderData();
  console.log(blogPosts);
  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Programming History Blog
      </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <button className="text-blue-500 font-semibold hover:underline">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
