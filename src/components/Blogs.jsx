import React, { useEffect } from "react";
import TopHead from "./TopHead";
import blogs from "../json-data/blogs.json";
import Footer from "./Footer";

function Blogs() {
    return (
        <>
            <TopHead />
            <div className="blogs-container">
                {blogs.map((blog) => (
                    <div key={blog.key} className="blog-card">
                        <img
                            src={blog.image}
                            alt=""
                            className="blog-card_image"
                        />
                        <h2 className="blog-card_header">{blog.heading}</h2>
                        <span className="blog-card_reading-time">
                            {blog.readingTime} mins read.
                        </span>
                        <p className="blog-card_content">{blog.snippet}</p>
                        <a className="blog-card_read-more-btn">Read More...</a>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Blogs;
