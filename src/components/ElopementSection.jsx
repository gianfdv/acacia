import detailsImg from "../assets/details.jpg";

const ElopementsSection = () => {
  return (
      <div className="mt-10 px-4 flex flex-wrap justify-center">
          <div className="w-full lg:w-3/5 flex flex-col justify-center items-center text-justify">
      <h1 className="text-4xl leading-tight">
        Elopements
      </h1>
      <h2 className="max-w-xl mt-4">
      Elopements are deeply personal celebrations — intimate, meaningful, and deserving of the same care and attention as any grand affair. Whether you dream of saying “I do” barefoot in the jungle, on a secluded beach at sunset, beside a waterfall, or atop a mountaintop with breathtaking views, Acacia is here to bring your vision to life.
      <br/><br/>
      Our elopement services in Costa Rica are designed for celebrations of 10 guests or fewer, offering a truly bespoke experience. From finding the perfect hidden gem venue to crafting thoughtful timelines, floorplans, and securing the most talented local vendors — caterers, photographers, stylists, entertainers, and yes, even surprise fireworks — we curate every detail with love, creativity, and soul.
      </h2>
    </div>
    <div className="p-2 w-full lg:w-2/5 flex justify-center lg:justify-start items-center">
      <img 
        className="h-[400px] rounded-lg" 
        src="https://res.cloudinary.com/dxvkewdcn/image/upload/q_auto,f_auto,w_1000/albums/kelsey-gerald/image13.jpg" 
        alt="Wedding Details" 
      />
    </div>
  </div>
    )
}

export default ElopementsSection