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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Laboriosam iste quos, veritatis atque odio
                        exercitationem fugit quisquam voluptatibus quas itaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sed aspernatur voluptatibus alias sint error vitae
                        ipsum pariatur facere non maxime! Quis excepturi fugit
                        nobis dolorem temporibus eos molestias ea aperiam.
                    </p>
                </Parallax>
            </div>
            <div className="landing-body_welcome-heroes">
                <Parallax
                    scale={[0.2, 1.7]}
                    translateY={[-5, 70, "easeInOutCubic"]}
                >
                    <img
                        src="/src/assets/Portfolio-65.jpg"
                        alt=""
                        className="welcome-hero1"
                    />
                </Parallax>
                <Parallax scale={[0.2, 1.2]} speed={10} y={[50]}>
                    <img
                        src="/src/assets/Portfolio-1.jpg"
                        alt=""
                        className="welcome-hero2"
                    />
                </Parallax>
            </div>
        </div>
    );
}

export default LandingBody;
