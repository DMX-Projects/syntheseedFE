import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import FeaturesSection from './components/FeaturesSection';
import ProductSection from './components/ProductSection';
import CareersSection from './components/CareersSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import UnlockInnovationSection from './components/UnlockInnovationSection';

function App() {
  return (
    <div className="min-h-screen">
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
    </div>
  );
}

export default App;
