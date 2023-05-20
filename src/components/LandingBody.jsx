import React from "react";

function LandingBody() {
    return (
        <div className="landing-body">
            <div className="landing-body_welcome-text">
                <span className="star"></span>
                <h1 className="header_main">Moments</h1>
                <span className="header_pre">ensnare with Brij</span>
                <p className="landing-body_description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam iste quos, veritatis atque odio exercitationem
                    fugit quisquam voluptatibus quas itaque? Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Sed aspernatur
                    voluptatibus alias sint error vitae ipsum pariatur facere
                    non maxime! Quis excepturi fugit nobis dolorem temporibus
                    eos molestias ea aperiam.
                </p>
            </div>
            <div className="landing-body_welcome-heroes">
                <img
                    src="/src/assets/Portfolio-65.jpg"
                    alt=""
                    className="welcome-hero1"
                />
                <img
                    src="/src/assets/Portfolio-1.jpg"
                    alt=""
                    className="welcome-hero2"
                />
            </div>
        </div>
    );
}

export default LandingBody;
