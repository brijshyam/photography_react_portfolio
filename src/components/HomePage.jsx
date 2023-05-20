import React from "react";
import Footer from "./Footer";
import LandingBody from "./LandingBody";
import SectionTwo from "./SectionTwo";
import TopHead from "./TopHead";

function HomePage(props) {
    return (
        <div className="landing_page">
            <header>
                <TopHead />
            </header>
            <main>
                <LandingBody />
                <SectionTwo />
                <Footer />
            </main>
        </div>
    );
}

export default HomePage;
