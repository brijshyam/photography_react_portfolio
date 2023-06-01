import React from "react";
import tick from "/assets/green-tick.gif";
import { useNavigate } from "react-router-dom";

function DetailsSentConfirmation({ formData }) {
    const navigateTo = useNavigate();
    return (
        <div className="confirm-container">
            <div className="message-wrapper">
                <h3>Your details sent successfully!</h3>
                <img className="tick" src={tick} alt="Green Tick " />
                <p className="form-details">
                    Details submitted by you are :
                    <span className="detail-item">
                        Name: {`${formData.name} `}
                    </span>
                    <span className="detail-item">
                        Email: {`${formData.email} `}
                    </span>
                    <span className="detail-item">
                        Phone: {`${formData.phone} `}
                    </span>
                    <span className="detail-item">
                        Message: {`${formData.message}`}
                    </span>
                </p>
                <p className="thanks-para">
                    Thanks for contacting!!! <br />
                    Hang on, We will get back to you soon.
                </p>
                <button
                    onClick={() => navigateTo("/")}
                    className="keep-exploring-btn"
                >
                    Keep Exploring
                </button>
            </div>
        </div>
    );
}

export default DetailsSentConfirmation;
