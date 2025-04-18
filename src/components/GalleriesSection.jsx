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
                <DynamicImage
                  albumFolder={album.folder}
                  title={album.title}
                  coverImage={album.coverImage}
                />
                <h1 className="sm:w-1/2 p-2 text-3xl">{album.title}</h1>
              </>
            ) : (
              <>
                <h1 className="sm:w-1/2 p-2 text-3xl hover:text-[#0b3425]">{album.title}</h1>
                <DynamicImage
                  albumFolder={album.folder}
                  title={album.title}
                  coverImage={album.coverImage}
                />
              </>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

const DynamicImage = ({ albumFolder, title, coverImage }) => {
  const src = `https://res.cloudinary.com/dxvkewdcn/image/upload/albums/${albumFolder}/${coverImage}?v=1`;

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
