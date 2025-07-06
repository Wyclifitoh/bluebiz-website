import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Waves, Sparkles, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Access to Finance', href: '/finance' },
    { name: 'Our Team', href: '/team' }, 
    { 
      name: 'Resources', 
      href: '/resources',
      dropdown: [
        { name: 'Resource Center', href: '/resources' },
        { name: 'Guides', href: '/guides' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  // Determine header style based on page and scroll state
  const getHeaderStyle = () => {
    if (isHomePage) {
      // Homepage: transparent when not scrolled, white when scrolled
      return isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-light-grey/50' 
        : 'bg-transparent';
    } else {
      // Other pages: always white background
      return 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-light-grey/50';
    }
  };

  const getTextColor = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white';
    }
    return 'text-dark-grey';
  };

  const getNavItemStyle = (isActive: boolean) => {
    const baseStyle = 'relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group';
    
    if (isHomePage && !isScrolled) {
      // Homepage not scrolled - white text
      return `${baseStyle} ${
        isActive
          ? 'text-white bg-white/20 backdrop-blur-sm'
          : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
      }`;
    } else {
      // Other pages or homepage scrolled - dark text
      return `${baseStyle} ${
        isActive
          ? 'text-primary-orange bg-light-grey shadow-sm'
          : 'text-dark-grey hover:text-primary-orange hover:bg-light-grey'
      }`;
    }
  };

  const getMobileButtonStyle = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white hover:bg-white/10';
    }
    return 'text-dark-grey hover:bg-light-grey hover:text-primary-orange';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderStyle()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block group">
              {isHomePage && !isScrolled ? (
                // Homepage not scrolled - logo with white background container
                <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20 group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                  <img
                    src="/images/tns-logo.png"
                    alt="BlueBiz Kenya Logo"
                    className="h-10 sm:h-12 object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                // Other pages or homepage scrolled - regular logo
                <div className="group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/tns-logo.png"
                    alt="BlueBiz Kenya Logo"
                    className="h-10 sm:h-12 md:h-14 object-contain"
                  />
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <button
                      className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        location.pathname === item.href || item.dropdown.some(sub => location.pathname === sub.href)
                          ? isHomePage && !isScrolled
                            ? 'text-white bg-white/20 backdrop-blur-sm'
                            : 'text-primary-orange bg-light-grey shadow-sm'
                          : isHomePage && !isScrolled
                            ? 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                            : 'text-dark-grey hover:text-primary-orange hover:bg-light-grey'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isResourcesOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-light-grey/50 py-2 transition-all duration-200 ${
                      isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-dark-grey hover:text-primary-orange hover:bg-light-grey transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={getNavItemStyle(location.pathname === item.href)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {location.pathname === item.href && (
                      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                        isHomePage && !isScrolled
                          ? 'bg-gradient-to-r from-white/20 to-teal/20 border border-white/30'
                          : 'bg-gradient-to-r from-primary-orange/10 to-secondary-gold/10 border border-primary-orange/20'
                      }`}></div>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/join"
              className="relative inline-flex items-center px-6 py-3 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-primary-orange to-secondary-gold hover:from-secondary-gold hover:to-yellow transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Join Now</span>
              <div className="relative z-10 ml-2 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 ${getMobileButtonStyle()}`}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-2'
              }`}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl mt-4 p-6 shadow-2xl border border-light-grey/50">
            <div className="space-y-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-sm font-medium text-dark-grey/70 mb-2">{item.name}</div>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ml-4 ${
                            location.pathname === subItem.href
                              ? 'text-primary-orange bg-light-grey shadow-sm border border-primary-orange/20'
                              : 'text-dark-grey hover:text-primary-orange hover:bg-light-grey'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        location.pathname === item.href
                          ? 'text-primary-orange bg-light-grey shadow-sm border border-primary-orange/20'
                          : 'text-dark-grey hover:text-primary-orange hover:bg-light-grey'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-light-grey">
                <Link
                  to="/join"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-4 py-3 text-center text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-primary-orange to-secondary-gold hover:from-secondary-gold hover:to-yellow transition-all duration-300 shadow-lg"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;