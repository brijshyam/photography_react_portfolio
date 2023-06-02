import React from "react";
import { Parallax } from "react-scroll-parallax";

function LandingBody() {
    return (
        <div className="landing-body">
            <div className="landing-body_welcome-text">
                <span className="star"></span>
                <h1 className="header_main">Moments</h1>
                <span className="header_pre">ensnare with Brij</span>
                <Parallax speed={-15}>
                    <p className="landing-body_description">
                        <span className="welcome-user">
                            Welcome to our wedding photography portfolio!
                        </span>{" "}
                        We specialize in capturing the magic and beauty of your
                        special day, providing you with high-quality images that
                        will preserve your memories for a lifetime. Our unique
                        approach and attention to detail ensure that every pose
                        is carefully crafted, resulting in stunning,
                        unforgettable photographs. We pride ourselves on
                        delivering a professional and friendly experience,
                        making you feel comfortable and at ease throughout the
                        entire process. Trust us to capture your love story with
                        artistic precision and create photographs that truly
                        reflect your unique personalities. Let's embark on this
                        incredible journey together!
                    </p>
                </Parallax>
            </div>
            <div className="landing-body_welcome-heroes">
                <Parallax
                    scale={[0.2, 1.7]}
                    translateY={[0, 0, "easeInOutCubic"]}
                >
                    <img
                        src="https://res.cloudinary.com/drdlkuxin/image/upload/v1685693441/photography-portfolio/f1pyze8cm9q5rxvowtbm.jpg"
                        alt=""
                        className="welcome-hero1"
                    />
                </Parallax>
                <Parallax
                    scale={[0.2, 1.5]}
                    y={[50]}
                    translateY={[-5, 0, "easeInOutCubic"]}
                >
                    <img
                        src="https://res.cloudinary.com/drdlkuxin/image/upload/v1685693445/photography-portfolio/iu3f8pgam1wselahhvrz.jpg"
                        alt=""
                        className="welcome-hero2"
                    />
                </Parallax>
            </div>
        </div>
    );
}

export default LandingBody;
