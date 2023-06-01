import React, { useState } from "react";
import TopHead from "./TopHead";
import blogs from "../json-data/blogs.json";
import Footer from "./Footer";
import BlogReader from "./BlogReader";

function Blogs() {
    const [showBlog, setShowBlog] = useState(false);
    const [blogContent, setBlogContent] = useState({});

    const readMoreHandler = (mainHeading, introPara, content) => {
        setShowBlog(true);
        setBlogContent({
            mainHeading: mainHeading,
            intro: introPara,
            paragraphs: content,
        });
    };
    if (showBlog)
        return <BlogReader contents={blogContent} setShowBlog={setShowBlog} />;
    else
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
                            <h2 className="blog-card_header">
                                {blog.mainHeading}
                            </h2>
                            <span className="blog-card_reading-time">
                                {blog.readingTime} mins read.
                            </span>
                            <p className="blog-card_content">{blog.snippet}</p>
                            <p
                                onClick={() =>
                                    readMoreHandler(
                                        blog.mainHeading,
                                        blog.introPara,
                                        blog.mainContent
                                    )
                                }
                                className="blog-card_read-more-btn"
                            >
                                Read More...
                            </p>
                        </div>
                    ))}
                </div>
                <Footer />
            </>
        );
}

export default Blogs;
