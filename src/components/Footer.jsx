import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  // Get the current year
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year on mount (useEffect to ensure it's set correctly)
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-10 py-10 bg-[#0b3425] text-white">
      <div className="flex flex-col justify-center items-center">
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-7 mb-4">
          <a href="https://www.instagram.com/acaciabelapraia" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-gray-400" />
          </a>
          <a href="https://www.facebook.com/acaciabelapraia/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl hover:text-gray-400" />
          </a>
          <a href="https://wa.me/+50689895999" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-3xl hover:text-gray-400" />
          </a>
        </div>

        {/* Location Text with Icon */}
        <div className="flex items-center space-x-2 mb-4">
          <FaMapMarkerAlt className="text-xl" />
          <p className="text-sm">Jacó, Puntarenas. Costa Rica</p>
        </div>

        {/* Date */}
        <div>
          <p className="text-xs">© {currentYear} Acacia. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;