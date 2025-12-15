import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Seo from "./components/Seo";
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
import CareerDetail from "./pages/CareerDetail";
import AllCareersPage from "./pages/AllCareersPage";

import AllBlogsPage from "./pages/AllBlogsPage";
import BlogDetail from "./pages/BlogDetail";
import ComingSoonPage from "./pages/ComingSoonPage";

const HomePage = () => (
  <>
    {/* Example SEO usage for the homepage */}
    {/* Seo component sets title, description, open graph tags and optional JSON-LD */}
    <Seo
      title="Home"
      description="Syntheseed — Product engineering & digital transformation. We build modern web and mobile products that scale."
      canonical="https://syntheseed.com/"
      openGraph={{
        title: 'Syntheseed',
        description: 'Product engineering & digital transformation. We build modern web and mobile products that scale.',
        image: '/assets/og-image.png',
        url: 'https://syntheseed.com/',
      }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Syntheseed',
        url: 'https://syntheseed.com/',
        logo: 'https://syntheseed.com/assets/og-image.png',
      }}
    />

    <Header />
    <HeroSection />
    <AboutSection />
    <ProductSection />
    <FeaturesSection />
    <ProcessSection />

    <CareersSection />
    <ContactSection />
    <BlogSection />
    <UnlockInnovationSection />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/coming-soon" element={<ComingSoonPage />} />
      <Route path="/blogs" element={<AllBlogsPage />} />
      <Route path="/blogs/:slug" element={<BlogDetail />} />
      <Route path="/careers/all" element={<AllCareersPage />} />
      <Route path="/careers/:id" element={<CareerDetail />} />
    </Routes>
  );
}

export default App;
