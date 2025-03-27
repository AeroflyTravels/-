import React, { useState, useEffect } from "react";

const Gallery = () => {
  // Manually added gallery images
  const images = [
    "https://source.unsplash.com/random/400x300",
    "https://source.unsplash.com/random/401x500",
    "https://source.unsplash.com/random/402x400",
    "https://source.unsplash.com/random/403x350",
    "https://source.unsplash.com/random/404x450",
    "https://source.unsplash.com/random/405x550",
  ];

  // Lightbox state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Open lightbox
  const openLightbox = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  // Navigate next image
  const nextImage = () => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Navigate previous image
  const prevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle keyboard events (Escape, Arrow Keys)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>

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
          <button
            className="absolute left-4 bg-white text-black px-3 py-2 rounded-full text-lg font-bold"
            onClick={prevImage}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-lg"
          />
          <button
            className="absolute right-4 bg-white text-black px-3 py-2 rounded-full text-lg font-bold"
            onClick={nextImage}
            disabled={currentIndex === images.length - 1}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
