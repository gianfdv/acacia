import { useState, useEffect } from "react";

// Import images and sort them numerically
const images = Object.keys(import.meta.glob("../assets/carousel-pictures/*.{png,jpg,jpeg,svg}", { eager: true }))
  .sort((a, b) => {
    const numA = parseInt(a.match(/image(\d+)/)?.[1] || "0", 10);
    const numB = parseInt(b.match(/image(\d+)/)?.[1] || "0", 10);
    return numA - numB;
  })
  .map((path) => import.meta.glob("../assets/carousel-pictures/*.{png,jpg,jpeg,svg}", { eager: true })[path].default);

const CarouselSection = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [currentImages, setCurrentImages] = useState([images[0], images[1], images[2]]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Preload images to avoid rendering issues
  useEffect(() => {
    images.forEach((img) => {
      const imgObj = new Image();
      imgObj.src = img;
    });
  }, []);

  // Update images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 3) % images.length;
      setCurrentIndex(newIndex);
      setCurrentImages([
        images[newIndex],
        images[(newIndex + 1) % images.length],
        images[(newIndex + 2) % images.length],
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="mt-20 flex flex-col items-center px-5">
      {/* Desktop View */}
      {!isMobileView && (
        <div className="flex justify-center w-full h-[400px]">
          {currentImages.map((img, idx) => (
            <img key={idx} src={img} className="rounded-lg w-full h-full object-cover mx-5 my-2" />
          ))}
        </div>
      )}

      {/* Mobile View */}
      {isMobileView && (
        <div className="flex justify-center w-full h-[150px] space-x-2">
          {currentImages.map((img, idx) => (
            <img key={idx} src={img} className="rounded-lg w-1/3 h-full object-cover" />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselSection;