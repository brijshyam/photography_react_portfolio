import React, { useEffect, useState } from "react";
import quotes from "../json-data/quotes.json";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

function SectionTwo() {
    const navigateTo = useNavigate();
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);
    const [showQuote, setShowQuote] = useState(false);
    const [animateQuote, setAnimateQuote] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentIndex = quotes.indexOf(currentQuote);
            setCurrentQuote(quotes[(currentIndex + 1) % quotes.length]);
            setShowQuote(false);
            setAnimateQuote(true);
            setTimeout(() => {
                setShowQuote(true);
            }, 10);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentQuote]);

    useEffect(() => {
        setShowQuote(true);
    }, [currentQuote]);

    const handleEmmersiveClick = () => {
        navigateTo("/moments");
    };
    return (
        <Parallax speed={-90} translateY={10}>
            <div className="section-two">
                <p className="section-two_welcome2">
                    Dear Visitor, are you ready to take a tour of little virtual
                    gallary? Please click below to enter into an emmersive view
                    of virtual gallary...
                </p>
                <div className="btn-wrapper">
                    <span className="btn-description"></span>
                    <button
                        className="btn_entrance"
                        onClick={handleEmmersiveClick}
                    >
                        Emmersive-View
                    </button>
                    <div className="discuss-container">
                        <p className="curiosity-para">
                            Got something you are unsure about ?
                        </p>
                        <a
                            href="https://wa.me/919648244670"
                            className="btn_discuss-now"
                        >
                            Click to Discuss
                        </a>
                    </div>
                </div>
                <div className="letter-container">
                    <span className="letter B">B</span>
                    <span className="letter E">E</span>
                    <span className="letter A">A</span>
                    <span className="letter U">U</span>
                    <span className="letter T">T</span>
                    <span className="letter Y">Y</span>
                    <span className="letter N">N</span>
                    <span className="letter D">D</span>
                    <span className="letter R">R</span>
                    <span className="letter Aagain">A</span>
                    <Parallax translateX={-50}>
                        <span className="skew-image1 "></span>
                    </Parallax>
                    <span className="skew-image2"></span>
                    <span className="skew-image3"></span>
                    <span className="skew-image4"></span>
                </div>
                <div className="section-two_bottom-container">
                    <div className="quote-container">
                        {showQuote && (
                            <p
                                className={`quote1 ${
                                    animateQuote
                                        ? "animate-enter"
                                        : "animate-exit"
                                }`}
                                onAnimationEnd={() => setAnimateQuote(false)}
                            >
                                {currentQuote.quote}
                            </p>
                        )}
                    </div>

                    <div className="image-container">
                        <img
                            src="/src/assets/Portfolio-219.jpg"
                            alt=""
                            srcset=""
                        />
                    </div>
                </div>
            </div>
        </Parallax>
    );
}

export default SectionTwo;
