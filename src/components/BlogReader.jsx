import React from "react";

function BlogReader({ setShowBlog, contents }) {
    const mainHeading = contents.mainHeading;
    const intro = contents.intro;
    const paragraphs = contents.paragraphs;
    console.log(paragraphs);
    return (
        <div className="blog-page">
            <div className="blog-page_wrapper">
                <h1 className="blog-title">{mainHeading}</h1>
                <p className="intro-para">{intro}</p>
                {paragraphs.map((para, i) => (
                    <div key={i} className="blog-container">
                        <h3>{para.contentHeading}</h3>
                        <p>{para.content}</p>
                    </div>
                ))}
                <button
                    onClick={() => setShowBlog(false)}
                    className="close-btn"
                >
                    Return
                </button>
            </div>
        </div>
    );
}

export default BlogReader;
