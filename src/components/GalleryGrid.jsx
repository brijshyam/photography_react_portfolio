import React, { useEffect, useState } from "react";
import Images from "../json-data/images.json";
import Modal from "./Modal";

function GalleryGrid(props) {
    const [pic, setPic] = useState([]);

    useEffect(() => {
        const updatedImages = Images.map((image) => ({
            ...image,
            clicked: false,
        }));
        setPic(updatedImages);
        console.log(updatedImages);
    }, [Images]);

    const clickHandler = (id) => {
        setPic((prevPic) =>
            prevPic.map((item) =>
                item.id === id ? { ...item, clicked: !item.clicked } : item
            )
        );
    };

    return (
        <>
            <div className="grid_container">
                {/* implicit return method as does not has return method  */}
                {pic.map((pic) => (
                    <div
                        key={pic.id}
                        className={`grid-item ${
                            pic.clicked ? "click-state" : ""
                        }`}
                        onClick={() => clickHandler(pic.id)}
                    >
                        <img className={`grid-item_image`} src={pic.path} />
                    </div>
                ))}
            </div>
            {pic.map((pic) => pic.clicked && <Modal clickedImage={pic} />)}
        </>
    );
}

export default GalleryGrid;
