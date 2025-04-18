import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const AlbumPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AlbumPage;