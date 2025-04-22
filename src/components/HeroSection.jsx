const HeroSection = () => {
    return (
      <div className="flex flex-col mt-5 items-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center">
          Beautiful weddings in
        </h1>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center mt-3">
          Costa Rica!
        </h1>
        <div className="flex mt-0 justify-center w-full h-[480px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-full h-full object-cover mx-2 my-2"
          >
            <source
              src="https://res.cloudinary.com/dxvkewdcn/video/upload/q_80,f_auto,w_1920/hero/video2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  