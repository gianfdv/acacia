import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ElopementSection from "../components/ElopementSection";

const Elopements = () => {
    return (
      <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <ElopementSection />
          </main>
          <Footer />
      </div>  
      );
}

export default Elopements