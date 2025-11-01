import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductSection from "./components/ProductSection";
import CareersSection from "./components/CareersSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import UnlockInnovationSection from "./components/UnlockInnovationSection";

import AllBlogsPage from "./pages/AllBlogsPage";
import BlogDetail from "./pages/BlogDetail";

const HomePage = () => (
  <>
    <Header />
    <HeroSection />
    <AboutSection />
    <ProductSection />
    <FeaturesSection />
    <ProcessSection />
    <CareersSection />
    <BlogSection />
    <UnlockInnovationSection />
    <ContactSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<AllBlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
