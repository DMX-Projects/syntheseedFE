// src/App.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductSection from "./components/ProductSection";
import CareersSection from "./components/CareersSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import UnlockInnovationSection from "./components/UnlockInnovationSection";
import CareerDetail from "./pages/CareerDetail";
import AllCareersPage from "./pages/AllCareersPage";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Always scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Handle scroll target (like "contact")
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const targetElement = document.querySelector(`#${targetId}`);

      if (targetElement) {
        setTimeout(() => {
          const headerOffset = 120; // space below navbar
          const elementPosition =
            targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 700);
      }
    }
  }, [location.pathname, location.state]);

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      {/* Fixed Navbar */}
      <Header />

      {/* 👇 Add top padding so content doesn't hide behind header */}
      <main className="flex-1 pt-24 md:pt-28 bg-transparent">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <ProductSection />
                <FeaturesSection />
                <ProcessSection />
                <div className="bg-[#f5fbfc]">
                  <CareersSection />
                  <ContactSection />
                  <BlogSection />
                  <UnlockInnovationSection />
                </div>
              </>
            }
          />
          <Route path="/careers/all" element={<AllCareersPage />} />
          <Route path="/careers/:id" element={<CareerDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
