import React from "react";

function Modal({ clickedImage }) {
    const clickHandler = (event) => {
        if (event.target.classList.contains("close-btn")) {
            // clicked on the close button, remove the display-block class from the grand-parent div
            event.currentTarget.classList.remove("display-block");
        } else {
            // clicked on the overlay, do nothing
        }
    };

    return (
        <div
            onClick={clickHandler}
            className={`display-overlay ${clickedImage ? "display-block" : ""}`}
        >
            {clickedImage && (
                <picture>
                    <img src={clickedImage.path} alt="" />
                    <span className="close-btn">X</span>
                </picture>
            )}
        </div>
    );
}

export default Modal;
