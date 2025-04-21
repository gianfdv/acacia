import { useState, useEffect } from "react";

const DynamicImage = ({ albumFolder, title }) => {
  const [src, setSrc] = useState(null);
  const [blurSrc, setBlurSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fullRes = `https://res.cloudinary.com/dxvkewdcn/image/upload/w_800,q_auto,f_auto/albums/${albumFolder}/image1.jpg`;
    const tinyBlur = `https://res.cloudinary.com/dxvkewdcn/image/upload/w_20,q_1,f_auto/albums/${albumFolder}/image1.jpg`;

    const img = new Image();
    img.src = fullRes;

    img.onload = () => {
      setBlurSrc(tinyBlur);
      setSrc(fullRes);
    };

    img.onerror = () => {
      setSrc("/placeholder.jpg");
      setBlurSrc("/placeholder.jpg");
    };
  }, [albumFolder]);

  return (
    <div className="sm:w-1/2 h-[300px] overflow-hidden rounded-lg relative">
      {blurSrc && (
        <img
          src={blurSrc}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-cover blur-lg scale-110 transition-opacity duration-300 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
      {src && (
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      )}
    </div>
  );
};
