// import React, { useState } from "react";

// function Modal({ clickedImage }) {
//     const [click, setClick] = useState(null);
//     // console.log(clickedImage.path);
//     const clickHandler = (e) => {
//         console.log("i am prininting target", e.target);
//         e.target.classList.remove("display-block");
//     };
//     console.log(clickedImage);
//     return (
//         <>
//             <div
//                 onClick={clickHandler}
//                 className={`display-overlay ${
//                     clickedImage ? "display-block" : ""
//                 }`}
//             >
//                 {/* <img src={clickedImage.path} alt="" /> */}
//                 <picture>
//                     <img src={clickedImage.path} alt="" />
//                     <span className="close-btn">X</span>
//                 </picture>
//             </div>
//         </>
//     );
// }

// export default Modal;

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
