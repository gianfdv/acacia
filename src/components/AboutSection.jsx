
const AboutSection = () => {
  return (
    <div className="mt-20 flex flex-wrap justify-center">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl leading-tight">
          "Details are the difference<br/>between a good event<br/>and<br/>a great one"
        </h1>
      </div>
      <div className="p-2 w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
        <img 
          className="h-[400px] rounded-lg" src="https://res.cloudinary.com/dxvkewdcn/image/upload/q_auto,f_auto,w_1000/albums/lital-marty/image19.jpg"/>
      </div>
    </div>
  );
}

export default AboutSection;