import { useParams } from "react-router-dom";
import { albums } from "../constants"; 
import { useState, useEffect } from "react";

const Album = () => {
  const { albumName } = useParams();
  const album = albums.find(a => a.link === `/album/${albumName}`);

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    if (!album || !album.count) return;

    const list = Array.from({ length: album.count }, (_, i) => {
      return `https://res.cloudinary.com/dxvkewdcn/image/upload/albums/${albumName}/image${i + 1}.jpg`;
    });

    setImageList(list);
  }, [albumName, album]);

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
        {imageList.map((src, index) => (
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
