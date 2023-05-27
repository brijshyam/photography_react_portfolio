import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function TopHead() {
    const [showMenu, setShowMenu] = useState(false);
    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    const navigateTo = useNavigate();

    const handleContactUsClick = (e) => {
        e.preventDefault();
        navigateTo("/form");
    };
    const handleHomeClick = (e) => {
        e.preventDefault();
        navigateTo("/");
    };
    const handleFrozenMomentsClick = (e) => {
        e.preventDefault();
        navigateTo("/moments");
    };
    const handleBlogClick = (e) => {
        e.preventDefault();
        navigateTo("/blogs");
    };

    return (
        <div className="head_container">
            <div className="head__logo">
                <img src="/src/assets/logo.svg" alt="Logo" srcSet="" />
            </div>
            <div className="head__thanks">
                <p>Thank you soooooo much</p>
            </div>
            <div
                className={`head__menu-button ${showMenu ? "open" : ""}`}
                onClick={toggleMenu}
            >
                <span
                    className={`head__menu-button__burger ${
                        showMenu ? "open" : ""
                    }`}
                ></span>
            </div>
            <nav className={`nav ${showMenu ? "open" : ""}`}>
                <ul className={`menu-nav ${showMenu ? "open" : ""}`}>
                    <li className={`menu-nav_item ${showMenu ? "open" : ""}`}>
                        <a
                            href=""
                            className="menu-nav_link"
                            onClick={handleHomeClick}
                        >
                            Home
                        </a>
                    </li>
                    <li className={`menu-nav_item ${showMenu ? "open" : ""}`}>
                        <a
                            href=""
                            className="blink-it menu-nav_link"
                            onClick={handleContactUsClick}
                        >
                            <p className="wrap-icon-and-link">
                                <span>Book Us Now</span>
                                <span className="book-us-emoji">
                                    <img
                                        className="emoji-img"
                                        src="/src/assets/emoji-smile-red.svg"
                                        alt=""
                                    />
                                </span>
                            </p>
                        </a>
                    </li>
                    <li className={`menu-nav_item ${showMenu ? "open" : ""}`}>
                        <a
                            href=""
                            className="menu-nav_link"
                            onClick={handleFrozenMomentsClick}
                        >
                            Frozen Moments
                        </a>
                    </li>
                    <li className={`menu-nav_item ${showMenu ? "open" : ""}`}>
                        <a
                            href=""
                            className="menu-nav_link"
                            onClick={handleBlogClick}
                        >
                            Blogs
                        </a>
                    </li>
                    <li className={`menu-nav_item ${showMenu ? "open" : ""}`}>
                        <a href="" className="menu-nav_link">
                            <p className="wrap-icon-and-link">
                                <img
                                    className="wa-icon"
                                    src="/src/assets/whatsapp.svg"
                                    alt="WhatsApp"
                                />{" "}
                                <span>Reach Out</span>
                            </p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TopHead;
