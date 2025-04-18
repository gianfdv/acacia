import { useParams } from "react-router-dom";
import { albums } from "../constants"; 
import { useState, useEffect } from "react";

const Album = () => {
  const { albumName } = useParams();
  const album = albums.find(a => a.link === `/album/${albumName}`);

  const [imageCount, setImageCount] = useState(0);
  const [existingImages, setExistingImages] = useState([]);

  // Supported image extensions
  const extensions = ["jpg", "jpeg", "png"];

  // Dynamically determine existing images
  useEffect(() => {
    let foundImages = [];
  
    for (let i = 1; i <= 100; i++) {
      let found = false;
  
      for (const ext of extensions) {
        const cloudSrc = `https://res.cloudinary.com/dxvkewdcn/image/upload/albums/${albumName}/image${i}.${ext}`;
        const img = new Image();
  
        img.src = cloudSrc;
        img.onload = () => {
          if (!found) {
            foundImages.push(cloudSrc);
            setExistingImages([...foundImages]);
            setImageCount(foundImages.length);
            found = true;
          }
        };
      }
    }
  }, [albumName]);

  return (
    <div className="container mx-auto mt-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-0.5">{album?.title.replace("-", " & ")}</h1>
      {album?.note && <p className="text-center text-lg text-black mb-1">{album.note}</p>}
      
      {/* Photographer Info */}
      {album?.photographer && (
        <p className="text-center text-xs text-neutral-900 mb-6">
          Photos by{" "}
          {album.photographer.instagram ? (
            <a 
              href={album.photographer.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 font-semibold hover:underline"
            >
              {album.photographer.name}
            </a>
          ) : (
            <strong>{album.photographer.name}</strong>
          )}
        </p>
      )}

      {/* Image Gallery */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {existingImages.map((src, index) => (
          <LazyImage key={index} src={src} alt={`Photo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

// Lazy Loading Image Component (Keeps Layout)
const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
      setLoaded(true);
    };
  }, [src]);

  return (
    <div
      className="mb-4 w-full rounded-lg overflow-hidden bg-gray-200"
      style={{ aspectRatio: dimensions.width / dimensions.height || 1 }}
    >
      {loaded && (
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-500 opacity-100"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default Album;