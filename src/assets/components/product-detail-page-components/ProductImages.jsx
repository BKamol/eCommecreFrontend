import React from 'react';
import { useState } from 'react';

const ProductImages = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    console.log(images);
    
    return (
      <div className="flex flex-1 flex-col lg:flex-row lg:gap-4 lg:w-1/2">
        <div className="hidden lg:flex flex-col gap-2">
          {images.map((img, index) => (
            <button 
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-[100px] h-auto border-2 rounded-3xl overflow-hidden transition-all ${selectedImage === index ? 'border-black' : 'border-transparent'}`}
            >
              <img 
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-[100px] h-auto object-cover"
              />
            </button>
          ))}
        </div>

        <div className="mb-4 w-full h-auto">
          <img 
            src={images[selectedImage]} 
            alt={`Product view ${selectedImage + 1}`}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="flex lg:hidden gap-2">
          {images.map((img, index) => (
            <button 
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-1/3 h-30 border-2 rounded-3xl overflow-hidden transition-all ${selectedImage === index ? 'border-black' : 'border-transparent'}`}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    );
};

export default ProductImages;
