import React, { useState } from 'react';
import "@/components/ImageGallery.scss";

const ImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };
    return (
        <div>
        <div className="gallery">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} onClick={() => handleImageClick(image)}/>
            ))}
        </div>
        {selectedImage && (
            <div className="modal" onClick={handleCloseModal}>
                <img src={selectedImage} alt="Selected" className="modal-image" />
            </div>
            
        )
        }
        </div>
    );
};

export default ImageGallery;