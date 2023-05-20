import React, { useEffect, useState } from "react";
import Images from "../json-data/images.json";
import Modal from "./Modal";

function GalleryGrid(props) {
    const [pic, setPic] = useState([]);
    // const [clickedImage, setClickedImage]= useState([]);

    /* useEffect(() => {
        const list = fetch("https://picsum.photos/v2/list?page=2&limit=20");
        list.then((response) => response.json())
            .then((pic) =>
                pic.map((item) => ({
                    ...item,
                    clicked: false, // add new property to track clicked state
                }))
            )
            .then((pic) => setPic(pic))
            .catch((error) => console.log(error));
    }, []); */

    useEffect(() => {
        // console.log(Images);
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
