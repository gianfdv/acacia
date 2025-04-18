import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CarouselSection from '../components/CarouselSection';
import AboutSection from '../components/AboutSection';
import OptionsSection from '../components/OptionsSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-5 px-6'>
        <HeroSection/>
      </div>
      <CarouselSection />
      <AboutSection />
      <OptionsSection />
      <Footer />
    </>
  );
};

export default HomePage;