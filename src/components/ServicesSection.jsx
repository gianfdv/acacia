import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
      <div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center px-6 mt-10">
              Services
          </h1>
          <p className="text-sm sm:text-base text-center mt-4 max-w-3xl mx-auto px-6">
          We create unforgettable wedding experiences, crafting every detail with passion and elegance. Our commitment is to turn your dream into a unique and personalized celebration.
          </p>
          
          <div className="mt-5 flex flex-wrap justify-center px-7">
        {/* Servicio 1 */}
        <Link to="/wedding-planning-and-design" className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-6 rounded-xl flex flex-col items-center text-center">
            <h1 className="text-2xl font-semibold mb-2 hover:text-[#0b3425]">Wedding Planning & Design</h1>
            <img className="w-full h-80 object-cover rounded-lg" src="https://res.cloudinary.com/dxvkewdcn/image/upload/q_auto,f_auto,w_1000/albums/erica-austin/image49.jpg" />
          </div>
        </Link>

        {/* Servicio 2 */}
        <Link to="/destination-wedding" className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-6 rounded-xl flex flex-col items-center text-center">
            <h1 className="text-2xl font-semibold mb-2 hover:text-[#0b3425]">Destination Wedding Experience</h1>
            <img className="w-full h-80 object-cover rounded-lg" src="https://res.cloudinary.com/dxvkewdcn/image/upload/q_auto,f_auto,w_1000/albums/laura-arvidas/image8.jpg" />
          </div>
        </Link>

        {/* Servicio 3 */}
        <Link to="/elopements" className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-6 rounded-xl flex flex-col items-center text-center">
            <h1 className="text-2xl font-semibold mb-2 hover:text-[#0b3425]">Elopements</h1>
            <img className="w-full h-80 object-cover rounded-lg" src="https://res.cloudinary.com/dxvkewdcn/image/upload/q_auto,f_auto,w_1000/albums/felicity-peter/image33.jpg" />
          </div>
        </Link>

      </div>
      </div>
    );
  };

export default ServicesSection