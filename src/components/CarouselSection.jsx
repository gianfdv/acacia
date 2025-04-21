import { useState, useEffect } from "react";

const TOTAL_IMAGES = 18;

const CarouselSection = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate optimized Cloudinary URLs
  const generateImageUrl = (index) =>
    `https://res.cloudinary.com/dxvkewdcn/image/upload/w_1000,q_auto,f_auto/carousel/carImage${index + 1}.jpg`;

  // Preload Cloudinary images
  useEffect(() => {
    for (let i = 0; i < TOTAL_IMAGES; i++) {
      const img = new Image();
      img.src = generateImageUrl(i);
    }
  }, []);

  // Initialize images
  useEffect(() => {
    setCurrentImages([
      generateImageUrl(currentIndex % TOTAL_IMAGES),
      generateImageUrl((currentIndex + 1) % TOTAL_IMAGES),
      generateImageUrl((currentIndex + 2) % TOTAL_IMAGES),
    ]);
  }, [currentIndex]);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % TOTAL_IMAGES);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-20 flex flex-col items-center px-5">
      {!isMobileView && (
        <div className="flex justify-center w-full h-[400px]">
          {currentImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="rounded-lg w-full h-full object-cover mx-5 my-2"
              alt={`carousel ${idx}`}
              loading="lazy"
            />
          ))}
        </div>
      )}

      {isMobileView && (
        <div className="flex justify-center w-full h-[150px] space-x-2">
          {currentImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="rounded-lg w-1/3 h-full object-cover"
              alt={`carousel ${idx}`}
              loading="lazy"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselSection;
