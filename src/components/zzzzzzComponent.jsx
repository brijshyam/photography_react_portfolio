/* import React, { useState, useEffect } from "react";
import imageData from "./imageData.json";
import "./ImageGrid.css";

const ImageGrid = () => {
    const [dynamicImageIndex, setDynamicImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDynamicImageIndex(
                (dynamicImageIndex + 1) %
                    imageData.filter((img) => img.isDynamic).length
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [dynamicImageIndex]);

    const renderImage = (image) => {
        const imgOrientation =
            image.orientation === "portrait" ? "portrait" : "landscape";
        const isDynamic = image.isDynamic;
        const imgSrc = isDynamic
            ? imageData.filter((img) => img.isDynamic)[dynamicImageIndex].src
            : image.src;
        return (
            <div key={image.id} className={`image-grid-item ${imgOrientation}`}>
                <img src={imgSrc} alt={image.name} />
            </div>
        );
    };

    return (
        <div className="image-grid">
            {imageData.map((image) => renderImage(image))}
        </div>
    );
};

export default ImageGrid; */

/* you can certainly build two separate components for static and dynamic images and render them separately in the image grid component. You can also set the position of images in the grid based on their orientation. */

/* import React, { useState, useEffect } from "react";
import imageData from "./imageData.json";
import "./ImageGrid.css";

const StaticImage = ({ image }) => {
    const [spanColumns, setSpanColumns] = useState(2);
    const [spanRows, setSpanRows] = useState(3);

    useEffect(() => {
        if (image.orientation === "landscape") {
            setSpanColumns(4);
            setSpanRows(3);
        } else {
            setSpanColumns(2);
            setSpanRows(3);
        }
    }, [image]);

    return (
        <div
            className={`image-grid-item ${
                image.orientation === "portrait" ? "portrait" : "landscape"
            }`}
            style={{
                gridColumnEnd: `span ${spanColumns}`,
                gridRowEnd: `span ${spanRows}`,
            }}
        >
            <img src={image.src} alt={image.name} />
        </div>
    );
};

const DynamicImage = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, images]);

    return (
        <div className="image-grid-item dynamic">
            <img
                src={images[currentIndex].src}
                alt={images[currentIndex].name}
            />
        </div>
    );
};

const ImageGrid = () => {
    const staticImages = imageData.filter((image) => !image.isDynamic);
    const dynamicImages = imageData.filter((image) => image.isDynamic);

    return (
        <div className="image-grid">
            {staticImages.map((image) => (
                <StaticImage key={image.id} image={image} />
            ))}
            {dynamicImages.length > 0 && (
                <DynamicImage images={dynamicImages} />
            )}
        </div>
    );
};

export default ImageGrid;
 */

/* In this implementation, we assume that all dynamic images are in landscape orientation. This is because we're using the StaticImage component to handle the orientation of static images, and it wouldn't make sense to have dynamic images change orientation while static images don't.

If you need to support dynamic images in portrait orientation as well, you could add an orientation property to the dynamic images in your imageData JSON file, and use that to set the appropriate CSS classes and grid item spans in the DynamicImage component. */

const DynamicImage = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isPortrait = images[currentIndex].orientation === "portrait";

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, images]);

    return (
        <div
            className={`image-grid-item dynamic ${
                isPortrait ? "portrait" : "landscape"
            }`}
            style={{
                gridColumnEnd: `span ${isPortrait ? 2 : 4}`,
                gridRowEnd: `span ${isPortrait ? 3 : 4}`,
            }}
        >
            <img
                src={images[currentIndex].src}
                alt={images[currentIndex].name}
            />
        </div>
    );
};

// npm install express body-parser mongoose axios

// JSON data is given below
[
    { id: 1, name: "Image 1", src: "image1.jpg", orientation: "landscape" },
    { id: 2, name: "Image 2", src: "image2.jpg", orientation: "portrait" },
    { id: 3, name: "Image 3", src: "image3.jpg", orientation: "landscape" },
];

// below we parsing the above json data
const jsonData =
    '[{"id":1,"name":"Image 1","src":"image1.jpg","orientation":"landscape"},{"id":2,"name":"Image 2","src":"image2.jpg","orientation":"portrait"},{"id":3,"name":"Image 3","src":"image3.jpg","orientation":"landscape"}]';
const data = JSON.parse(jsonData);

// TO CONVERT ALL THE IMAGES IN  A FILE
/* const fs = require("fs");
const path = require("path");

const directoryPath = "/path/to/your/images/folder"; // replace with your directory path
const images = [];

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }

    // filter files to only include images
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const imageFiles = files.filter((file) =>
        imageExtensions.includes(path.extname(file).toLowerCase())
    );

    // create an array of objects with information about each image
    imageFiles.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);
        const sizeInBytes = stats.size;
        const sizeInKB = Math.round((sizeInBytes / 1024) * 100) / 100;
        images.push({
            name: file,
            path: filePath,
            size: sizeInKB,
        });
    });

    // write array of images to a JSON file
    const json = JSON.stringify(images, null, 2);
    fs.writeFileSync("images.json", json);
});
 */
