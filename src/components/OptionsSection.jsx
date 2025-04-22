import pic1 from "../assets/pic1.jpg";
import { Link } from 'react-router-dom';

const OptionsSection = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-center px-7">
        <Link to="/services" className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-6 rounded-xl flex flex-col sm:flex-row items-center text-center">
                <img className="sm:w-1/2 h-36 object-cover rounded-lg" src={pic1}/>
                <h1 className="sm:w-1/2 p-2 text-3xl hover:text-[#0b3425]">Our services</h1>
            </div>
        </Link>
        <Link to="/about-us" className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-6 rounded-xl flex flex-col sm:flex-row items-center text-center">
                <img className="sm:w-1/2 h-36 object-cover rounded-lg" src="https://res.cloudinary.com/dxvkewdcn/image/upload/q_auto,f_auto,w_1000/albums/erica-austin/image49.jpg"/>
                <h1 className="sm:w-1/2 p-2 text-3xl hover:text-[#0b3425]">Meet our team</h1>
            </div>
        </Link>
        <Link to="/contact-us" className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-6 rounded-xl flex flex-col sm:flex-row items-center text-center">
                <img className="sm:w-1/2 h-36 object-cover rounded-lg" src="https://res.cloudinary.com/dxvkewdcn/image/upload/q_auto,f_auto,w_1000/albums/samantha-michael/image2.jpg"/>
                <h1 className="sm:w-1/2 p-2 text-3xl hover:text-[#0b3425]">Contact us</h1>
            </div>
        </Link>
    </div>
  )
}

export default OptionsSection