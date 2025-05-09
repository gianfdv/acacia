import detailsImg from "../assets/details.jpg";
import marianaImg from "../assets/mariana.jpeg";
import { FaInstagram, FaFacebook, FaWhatsapp} from "react-icons/fa";

const TeamSection = () => {
  return (
    <div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center px-6 mt-10">
            Acacia Flowers & Events
        </h1>
        <p className="text-sm sm:text-base text-center mt-4 max-w-3xl mx-auto px-6">
        We are a passionate team dedicated to creating unforgettable floral designs and event experiences. Our mission is to bring elegance and beauty to every special moment.
        </p>
        
        <div className="mt-5 flex flex-wrap justify-center px-7">

        <div className="w-full sm:w-1/2 lg:w-1/2 p-2">
            <div className="p-6 rounded-xl flex flex-col sm:flex-row items-center text-center">
            <img className="sm:w-1/2 h-80 object-cover rounded-lg" src={detailsImg} />
            <div className="sm:w-1/2 flex flex-col items-center">
                <h1 className="p-2 text-3xl">Yesenia Víquez</h1>
                <p className="text-sm text-justify p-3">Co-founder of Acacia Flowers & Events and Lawyer by profession, known for her creativity and dedication to outstanding service. She ensures that every client receives exceptional attention by identifying and understanding their individual preferences. Her personalized approach reflects a genuine commitment to excellence and client satisfaction.</p>
            </div>
            </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/2 p-2">
            <div className="p-6 rounded-xl flex flex-col sm:flex-row items-center text-center">
            <img className="sm:w-1/2 h-80 object-cover rounded-lg" src={detailsImg} />
            <div className="sm:w-1/2 flex flex-col items-center">
                <h1 className="p-2 text-3xl">Esteban Elizondo</h1>
                <p className="text-sm text-justify p-3">Co-founder of Acacia Flowers & Events and our Floral Designer with over 25 years of experience. Passionate about his art, he's known for bringing each client's vision to life through unique and beautiful floral creations. His career reflects a deep commitment to excellence and artistic sensibility in every design.</p>
            </div>
            </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/2 p-2">
            <div className="p-6 rounded-xl flex flex-col sm:flex-row items-center text-center">
            <div className="sm:w-1/2 flex flex-col items-center">
                <h1 className="p-2 text-3xl">Gianfranco D'Arsie</h1>
                <p className="text-sm text-justify p-3">Is the practical, detail-driven force behind every wedding. From shaping ideas in planning meetings to overseeing every setup on-site — even from the top of a ladder or inside a pool — he ensures your vision comes to life. His hands-on approach and calm leadership make each celebration seamless and stress-free.</p>
            </div>
            <img className="sm:w-1/2 h-80 object-cover rounded-lg" src={detailsImg} />
            </div>
        </div>
        
        <div className="w-full sm:w-1/2 lg:w-1/2 p-2">
            <div className="p-6 rounded-xl flex flex-col sm:flex-row items-center text-center">
            <div className="sm:w-1/2 flex flex-col items-center">
                <h1 className="p-2 text-3xl">Mariana Carmona</h1>
                <p className="text-sm text-justify p-3">Our Wedding Planner has over 13 years of experience bringing love stories to life. She specializes in creating seamless, magical experiences for couples dreaming of saying “I do” in breathtaking locations. With a personalized approach and an eye for detail, she ensures every moment is unforgettable—from the first look to the last dance.</p>
                
                <div className="flex flex-row gap-4 mt-4">
  <a 
    href="https://www.instagram.com/weddingsbymariana" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram className="text-2xl hover:text-[#0b3425] transition-colors duration-300" />
  </a>
  <a 
    href="https://www.facebook.com/marianaweddingsandevents/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaFacebook className="text-2xl hover:text-[#0b3425] transition-colors duration-300" />
  </a>
  <a 
    href="https://wa.me/+50684905692" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaWhatsapp className="text-2xl hover:text-[#0b3425] transition-colors duration-300" />
  </a>
</div>

            </div>
            <img className="sm:w-1/2 h-80 object-cover rounded-lg" src={marianaImg} />
            </div>
        </div>

        </div>
    </div>
  );
};

export default TeamSection;