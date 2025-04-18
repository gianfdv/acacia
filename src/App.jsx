import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Galleries from './pages/Galleries';
import AlbumPage from './pages/AlbumPage';
import Contact from './pages/Contact';
import Design from './pages/Design';
import Destination from './pages/Destination';
import Elopements from './pages/Elopements';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/galleries" element={<Galleries/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/album/:albumName" element={<AlbumPage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/wedding-planning-and-design" element={<Design />} />
        <Route path="/destination-wedding" element={<Destination />} />
        <Route path="/elopements" element={<Elopements />} />
      </Routes>
    </Router>
  );
};

export default App;
