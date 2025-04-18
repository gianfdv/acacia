import detailsImg from "../assets/details.jpg";
import { FaInstagram} from "react-icons/fa";

const DesignSection = () => {
  return (
    <div className="mt-10 px-4 flex flex-wrap justify-center">
        <div className="w-full lg:w-3/5 flex flex-col justify-center items-center text-justify">
    <h1 className="text-4xl leading-tight">
      Wedding Planning & Design
    </h1>
    <h2 className="max-w-xl mt-4">
    Let Acacia be your trusted partner in bringing your dream wedding to life in Costa Rica.
    <br/><br/>
    We specialize in full-service planning and design, taking care of every detail—from logistics and vendor coordination to styling and execution—so you can enjoy a seamless and stress-free experience.
    <br/><br/>
    Whether you envision an intimate beach ceremony or a grand celebration surrounded by nature, Acacia transforms your vision into a beautifully orchestrated event. With us, you won’t just plan a wedding—you’ll create unforgettable memories with elegance, ease, and joy.
    <br/><br/>
    Mariana is the heart behind our weddings — a passionate planner who has spent the last 13 years bringing love stories to life, especially through unforgettable destination weddings. With deep roots in the hospitality industry, she specializes in creating seamless, magical experiences for couples dreaming of saying “I do” in breathtaking locations.
    <br/><br/>
    Her goal is simple: to take the stress off your shoulders so you can soak in every beautiful moment. From the first call to the last dance, Mariana becomes more than your planner — she’s your confidant, your calm in the chaos, and your biggest cheerleader. If you’re envisioning a wedding that blends adventure, emotion, and peace of mind, Mariana is here to make it all happen — no matter where in the world your love takes you.
    <br/><br/>
    </h2>
    <h2 className="flex items-center gap-2">
  Explore Mariana's recent weddings
  <a 
    href="https://www.instagram.com/weddingsbymariana" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram className="text-2xl hover:text-[#0b3425] transition-colors duration-300" />
  </a>
</h2>
  </div>
  <div className="p-2 w-full lg:w-2/5 flex justify-center lg:justify-start items-center">
    <img 
      className="h-[700px] rounded-lg" 
      src={detailsImg} 
      alt="Wedding Details" 
    />
  </div>
</div>
  )
}

export default DesignSection