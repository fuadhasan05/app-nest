import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useLoaderData } from "react-router";

const Blogs = () => {
  // Set dynamic title
  useEffect(() => {
    document.title = "Blogs | AppNest";
  }, []);

  const blogs = useLoaderData(); 
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null); 

  const handleReadMore = (index) => {
    setExpandedBlogIndex(index === expandedBlogIndex ? null : index); 
  };

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="pb-20 px-2 md:px-10">
        {/* Page Heading */}
        <div className="text-center mb-10 bg-white rounded-xl p-10">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-700">
            Our Latest Blogs
          </h1>
          <p className="text-gray-500 mt-3">
            Stay updated with the latest Apps tips, insights, and news from our
            experts.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Content */}
              <div className="p-6">
                <img
                  className="h-20 w-20 rounded-xl p-2 mb-4"
                  src={blog.thumbnail}
                  alt=""
                />
                <p className="text-sm text-blue-500 mb-4">{blog.excerpt}</p>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                  {blog.title}
                </h2>
                <span className="inline-block text-sm font-medium text-[#FFA000] bg-orange-50 px-3 py-1 rounded-full border border-orange-200 mb-4">
                  {blog.category}
                </span>
                <p className="text-gray-600 text-sm mb-4">
                  {expandedBlogIndex === index
                    ? blog.content
                    : `${blog.content.substring(0, 100)}...`}{" "}
                  {/* Truncated content */}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Published: {blog.date}
                </p>
                <button
                  onClick={() => handleReadMore(index)}
                  className="text-blue-500 font-normal md:font-medium hover:underline cursor-pointer"
                >
                  {expandedBlogIndex === index ? "Show Less" : "Read More →"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-15">
          <Link to="/">
            <button className="px-8 py-2 btn btn-primary rounded hover:bg-blue-700 cursor-pointer">
              Browse Apps
            </button>
          </Link>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Blogs;
