import { useState } from 'react';

const Carousel = () => {
    const images = [
        'public/carousel1.jpg',
        'public/carousel2.jpg',
        'public/carousel3.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="relative  w-full ">
            {/* Carousel Images */}
            <div className="relative overflow-hidden rounded-lg">
                <img
                    src={images[currentIndex]}
                    alt={`carousel-image-${currentIndex}`}
                    className="w-full h-72 object-cover"
                />
            </div>

            {/* Carousel Navigation */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
                <button
                    onClick={prevImage}
                    className="text-white text-3xl  bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextImage}
                    className="text-white text-3xl  bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                >
                    &#10095;
                </button>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-black'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
