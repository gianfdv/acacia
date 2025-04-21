import { albums } from "../constants";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const GalleriesSection = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-center px-7">
      {albums.map((album, index) => (
        <Link to={album.link} key={index} className="w-full sm:w-1/2 lg:w-1/2 p-2">
          <div className="p-6 rounded-xl flex flex-col sm:flex-row items-center text-center">
            {Math.floor(index / 2) % 2 === 0 ? (
              <>
                <DynamicImage albumFolder={album.folder} title={album.title} />
                <h1 className="sm:w-1/2 p-2 text-3xl">{album.title}</h1>
              </>
            ) : (
              <>
                <h1 className="sm:w-1/2 p-2 text-3xl hover:text-[#0b3425]">{album.title}</h1>
                <DynamicImage albumFolder={album.folder} title={album.title} />
              </>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

const DynamicImage = ({ albumFolder, title }) => {
  const [src, setSrc] = useState("");
  const extensions = ["jpg", "jpeg", "png"];

  useEffect(() => {
    let index = 0;

    const tryNext = () => {
      if (index >= extensions.length) {
        setSrc("/placeholder.jpg"); // fallback if no valid image
        return;
      }

      // ✅ Added Cloudinary transformation for faster images
      const cloudSrc = `https://res.cloudinary.com/dxvkewdcn/image/upload/w_800,q_auto,f_auto/albums/${albumFolder}/image1.${extensions[index]}`;
      const img = new Image();
      img.src = cloudSrc;

      img.onload = () => setSrc(cloudSrc);
      img.onerror = () => {
        index++;
        tryNext();
      };
    };

    tryNext();
  }, [albumFolder]);

  return (
    <img
      className="sm:w-1/2 h-[300px] object-cover rounded-lg"
      src={src}
      alt={title}
      loading="lazy"
    />
  );
};

export default GalleriesSection;