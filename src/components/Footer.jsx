import React from "react";
import "boxicons";

function Footer(props) {
    return (
        <div className="footer-container">
            <footer>
                <img
                    className="footer-image"
                    src="assets/Portfolio-228.jpg"
                    alt=""
                    srcset=""
                />
                <div className="footer_content">
                    <img
                        className="star-pic"
                        src="assets/star-pic.png"
                        alt=""
                    />
                    <h1 className="thanks">Thanks </h1>
                    <h3>a lot again for visiting...</h3>
                </div>
                <div className="footer_social-container">
                    <span className="social">
                        <a
                            className="social_link"
                            href="https://www.instagram.com/a1clickswithbrij"
                            target="_blank"
                        >
                            <box-icon
                                className="instagram"
                                type="logo"
                                name="instagram"
                                size="md"
                                border="circle"
                                color="white"
                            ></box-icon>
                        </a>
                    </span>
                    <span className="social">
                        <a
                            className="social_link"
                            href="https://in.pinterest.com/brijshyam51maurya/"
                            target="_blank"
                        >
                            <box-icon
                                className="pinterest"
                                type="logo"
                                name="pinterest"
                                size="md"
                                border="circle"
                                color="white"
                            ></box-icon>
                        </a>
                    </span>
                    <span className="social">
                        <a
                            className="social_link"
                            href="https://brijshyam.netlify.app/#"
                            target="_blank"
                        >
                            <box-icon
                                className="twitter"
                                type="logo"
                                name="twitter"
                                size="md"
                                border="circle"
                                color="white"
                            ></box-icon>
                        </a>
                    </span>
                    <span className="social">
                        <a
                            className="social_link"
                            href="mailto:brijshyam51maurya@outlook.com"
                            target="_blank"
                        >
                            <box-icon
                                className="envelope"
                                name="envelope"
                                size="md"
                                border="circle"
                                color="white"
                            ></box-icon>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
