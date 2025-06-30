import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-grey text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-xl shadow-md">
                <img
                  src="/images/logo.png"
                  alt="BlueBiz Logo"
                  className="h-20 object-contain"
                />
              </div>
            </div>

            <p className="text-light-grey text-sm">
              Empowering coastal youth through business support, financial literacy, and skills training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light-grey hover:text-teal transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-light-grey hover:text-teal transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-light-grey hover:text-teal transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-light-grey hover:text-teal transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-light-grey hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light-grey hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-light-grey hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/finance" className="text-light-grey hover:text-white transition-colors">
                  Access to Finance
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-light-grey hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-light-grey hover:text-white transition-colors">
                  Resource Center
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-light-grey hover:text-white transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-light-grey hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-grey hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                <div className="text-light-grey text-sm">
                  <a 
                    href="https://maps.app.goo.gl/4oumYtivP4vCXwW88" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors group flex items-start"
                  >
                    <span>
                      Coastal Counties, Kenya<br />
                      Mombasa, Kilifi, Kwale, Lamu
                    </span>
                    <ExternalLink className="w-3 h-3 ml-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-teal" />
                <a 
                  href="tel:+254706815605" 
                  className="text-light-grey text-sm hover:text-white transition-colors"
                >
                  +254 706 815605
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-teal" />
                <a 
                  href="mailto:jmuchai@tns.org" 
                  className="text-light-grey text-sm hover:text-white transition-colors"
                >
                  jmuchai@tns.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-light-grey/20 mt-8 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4">Our Partners</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <div className="text-light-grey">TechnoServe</div>
              <div className="text-light-grey">Mastercard Foundation</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-light-grey/20 pt-8 text-center">
          <p className="text-light-grey text-sm">
            © {currentYear} BlueBiz Kenya. All rights reserved. A TechnoServe initiative in partnership with Mastercard Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;