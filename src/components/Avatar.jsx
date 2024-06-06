import React, { useContext, useState } from 'react';
import { UserContext } from "../utils/useContext.js";

const Avatar = ({ size,onLeftClick }) => {
    const { images } = useContext(UserContext);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClick = () => {
        if (onLeftClick) {
            onLeftClick();
        }
        }
    const handleContextMenu = (event) => {
        event.preventDefault();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <img
            className={`user-avatar ${size || ""}`}
            src={images[currentImageIndex]}
            alt={'avatar'}
            onClick={handleClick}
            onContextMenu={handleContextMenu}
        />
    );
};

export default Avatar;
