import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact-Page";
import Footer from "@/components/Footer";

const Contact_Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Contact_Page;
