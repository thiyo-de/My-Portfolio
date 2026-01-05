import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import { PageLoader } from "@/components/PageLoader";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Persistent Navigation */}
      <Navigation />

      {/* Page Content */}
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
