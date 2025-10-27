import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../../assets/logo.png';
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Product', href: '#product' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-50">
      <div className="px-3 sm:px-4">
        <div
          className={`mx-auto max-w-7xl rounded-xl transition-all duration-300 ${isScrolled
            ? 'backdrop-blur-lg bg-black/35 shadow-lg border-b border-white/10 py-5'
            : 'backdrop-blur-xl bg-black/30 shadow-md py-5'
          } px-4 sm:px-6`}
          style={{ WebkitBackdropFilter: 'blur(16px)' }}
        >
          <div className="flex items-center justify-between w-full gap-3">
          <div className="flex items-center space-x-2 min-w-0">
            <img src={logo} alt="Syntheseed Logo" className="w-10 h-10 object-contain" />
            <span
              className={`text-xl font-bold truncate ${theme === 'dark' ? 'text-white' : 'text-[rgb(var(--header-text))]'
                }`}
            >
              Syntheseed
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-7 md:ml-12">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-200 hover:text-cyan-400 transition font-medium px-1 py-1"
                tabIndex={0}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {/* Login Button: strong cyan gradient */}
            <a
              href="https://app.syntheseed.com/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-7 py-2 bg-cyan-500 to-cyan-700 rounded-lg text-white font-semibold shadow-md hover:bg-cyan-600 hover:shadow-cyan-600/40 transition-all duration-200 hover:scale-105 focus:outline-cyan-400"
              style={{ minWidth: 108, textAlign: 'center' }}
            >
              Login/Register
            </a>
            {/* Theme Switch */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-cyan-500/20 transition"
              aria-label="Toggle theme"
              tabIndex={0}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-white" />
              ) : (
                <Sun className="w-5 h-5 text-white" />
              )}
            </button>
            {/* Mobile Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-cyan-500/20 transition"
              aria-label="Toggle menu"
              tabIndex={0}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-3 bg-black/35 backdrop-blur-xl rounded-xl p-4 animate-fade-in border border-white/15 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left py-3 px-4 text-gray-100 hover:text-cyan-400 hover:bg-white/10 rounded-lg font-medium transition-all"
                tabIndex={0}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-3 flex gap-3">
              <a
                href="https://app.syntheseed.com/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white rounded-lg font-semibold shadow hover:bg-cyan-600 hover:shadow-cyan-600/40 transition-all hover:scale-105"
              >
                Login/Register
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
