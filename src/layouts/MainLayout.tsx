import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Persistent Navigation */}
      <Navigation />

      {/* Page Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
