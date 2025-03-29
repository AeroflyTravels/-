import { useState } from "react";
import thailand from "../assets/img/thailand.jpg";

const Gallery = () => {
  const images = [
    thailand,
    thailand,
    thailand,
  ]; // Replace with actual image URLs

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  const nextImage = () => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#2a9df4] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Gallery</h1>
      </div>
      
      <div className="max-w-6xl mx-auto py-16 px-6">
        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index}`}
              className="w-full h-auto rounded-lg cursor-pointer shadow-md transition-transform transform hover:scale-105"
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

        {/* Lightbox (Modal) */}
        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <button
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-lg font-bold"
              onClick={closeLightbox}
            >
              ✕
            </button>
            {currentIndex !== null && currentIndex > 0 && (
              <button
                className="absolute left-4 bg-white text-black px-3 py-2 rounded-full text-lg font-bold"
                onClick={prevImage}
              >
                ←
              </button>
            )}
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full rounded-lg"
            />
            {currentIndex !== null && currentIndex < images.length - 1 && (
              <button
                className="absolute right-4 bg-white text-black px-3 py-2 rounded-full text-lg font-bold"
                onClick={nextImage}
              >
                →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
