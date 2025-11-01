import { Linkedin, Instagram, Mail } from 'lucide-react';
import logo from '../../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer navigation categories with links
  const footerNav = {
    Company: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'How it Works', href: '#process' },
     
    ],
    Services: [
        { label: 'Product', href: '#product' },
      { label: 'Careers', href: '#careers' },
    ],
    Resources: [
      { label: 'Blog', href: '#blogs' },
       { label: 'Contact', href: '#contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookie' },
      { label: 'Security', href: '#security' },
    ],
  };

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[rgb(var(--header-bg))] pt-20 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Syntheseed Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-[rgb(var(--header-text))]">Syntheseed</span>
            </div>
            <p className="text-[rgb(var(--header-text))]/70 mb-6 leading-relaxed">
              Empowering businesses with innovative technology solutions that drive growth and transformation.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Instagram, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-lg bg-[rgb(var(--header-text))]/10 hover:bg-cyan-500/20 transition-all duration-300 flex items-center justify-center"
                  aria-label="Social link"
                >
                  <Icon className="w-5 h-5 text-[rgb(var(--header-text))]/70 hover:text-cyan-500" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links - now 4 columns */}
          {Object.entries(footerNav).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[rgb(var(--header-text))] font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollToSection(href)}
                      className="text-[rgb(var(--header-text))]/70 hover:text-cyan-500 transition-colors duration-300"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgb(var(--header-text))]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[rgb(var(--header-text))]/70 text-sm">
              {currentYear} Syntheseed. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy', 'Terms', 'Sitemap'].map(item => (
                <button
                  key={item}
                  className="text-[rgb(var(--header-text))]/70 hover:text-cyan-500 text-sm transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
