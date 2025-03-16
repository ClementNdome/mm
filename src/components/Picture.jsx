import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { picture, picture1, picture2, picture3, picture4 } from '../assets';
import { Link } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';

const images = [picture, picture1, picture2, picture3, picture4];

function Picture() {
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const allImagesLoaded = loadedImages === images.length;

  return (
    <SectionWrapper>
      <Link to="/card">
        <p className="absolute text-4xl font-bold text-customBlue inset-0 flex justify-center items-center text-center transform rotate-6 cursor-pointer">
          Damn gorgeous girl😘❤️😍.. she's aging fine like wine! :
        </p>
      </Link>
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Loading images...</p>
        </div>
      )}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full ${allImagesLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            zIndex: images.length - index,
            willChange: 'transform, opacity',
          }}
          initial={{
            scale: 1,
            rotate: Math.random() * 20 - 10,
          }}
          whileDrag={{
            scale: 1.02,
            rotate: Math.random() * 10 - 5,
          }}
          drag
        >
          <img
            src={image}
            alt={`Image ${index + 1} of a gorgeous girl`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onLoad={handleImageLoad}
            onError={(e) => {
              e.target.src = 'path-to-fallback-image.webp'; // Fallback image
            }}
            loading="lazy"
          />
        </motion.div>
      ))}
    </SectionWrapper>
  );
}

export default React.memo(Picture);