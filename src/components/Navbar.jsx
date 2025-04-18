import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur lg">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0 ml-2">
                    <Link to="/" className="h-35 w-35">
                        <img className="h-35 w-35" src={logo} alt="logo" />
                    </Link>
                </div>
                <ul className="hidden lg:flex space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className="hover:text-[#0b3425]">{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center mr-2">
                    <Link to="/contact-us" className="bg-[#0b3425] text-white py-2 px-3 rounded-md">
                        Contact Us
                    </Link>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/>: <Menu/>}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="right-0 bg-neutral -mt-5 w-full flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item,index) => (
                            <li key={index} className="py-4">
                                <a href={item.href} className="hover:text-[#0b3425]">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                    <Link to="/contact-us" className="bg-[#0b3425] text-white py-2 px-3 rounded-md">
                        Contact Us
                    </Link>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar;