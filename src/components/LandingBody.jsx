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
                    scale={[0.5, 1.7]}
                    translateY={[-5, 70, "easeInOutCubic"]}
                >
                    <img
                        src="assets/Portfolio-65.jpg"
                        alt=""
                        className="welcome-hero1"
                    />
                </Parallax>
                <Parallax
                    easing={[1, -0.75, 0.5, 1.34]}
                    translateX={[0, 100]}
                    y={-40}
                >
                    <img
                        src="assets/Portfolio-1.jpg"
                        alt=""
                        className="welcome-hero2"
                    />
                </Parallax>
            </div>
        </div>
    );
}

export default LandingBody;
