import React from "react";
import { Link } from "react-router-dom";
import {
  Waves,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-grey text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          {/* Company Info */}
          <div className="space-y-4 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-xl shadow-md">
                <img
                  src="/images/tns-logo.png"
                  alt="BlueBiz Logo"
                  className="h-20 object-contain"
                />
              </div>
            </div>

            <p className="text-light-grey text-sm">
              BlueBiz Program a TechnoServe initiative in partnership with
              the Mastercard Foundation, is designed to support micro, small,
              and medium-sized enterprises (MSMEs) in the Blue Economy sector
              across five coastal counties in Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-light-grey hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-light-grey hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-light-grey hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/finance"
                  className="text-light-grey hover:text-white transition-colors"
                >
                  Access to Finance
                </Link>
              </li>
              <li>
                <Link
                  to="/join"
                  className="text-light-grey hover:text-white transition-colors"
                >
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
                <Link
                  to="/resources"
                  className="text-light-grey hover:text-white transition-colors"
                >
                  Resource Center
                </Link>
              </li>
              <li>
                <Link
                  to="/guides"
                  className="text-light-grey hover:text-white transition-colors"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-light-grey hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-light-grey hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>

            <div className="space-y-3">
              {/* Location */}
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/4oumYtivP4vCXwW88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-grey text-sm hover:text-white transition-colors group"
                >
                  <span className="block">Mombasa, Kilifi, Kwale, Lamu</span>
                  <ExternalLink className="w-3 h-3 ml-1 mt-1 inline opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-teal flex-shrink-0" />
                <a
                  href="tel:+254706815605"
                  className="text-light-grey text-sm hover:text-white transition-colors"
                >
                  +254 706 815605
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-teal flex-shrink-0" />
                <a
                  href="mailto:info@tns.org"
                  className="text-light-grey text-sm hover:text-white transition-colors"
                >
                  info@tns.org
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/TechnoServe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey hover:text-teal transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@technoserve?si=e5DhUe4XlX4z4ydt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey hover:text-teal transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/bluebiz_ke?igsh=MTBzejc0ZnpjeXA3bQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey hover:text-teal transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/technoserve/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey hover:text-teal transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-light-grey/20 mt-8 pt-8">
          <div className="text-center mb-6">
            {/* <h4 className="text-lg font-semibold mb-4">Our Partners</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <div className="text-light-grey">TechnoServe</div>
              <div className="text-light-grey">Mastercard Foundation</div>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-grey/20 pt-8 text-center">
          <p className="text-light-grey text-sm">
            © {currentYear} BlueBiz Kenya. All rights reserved. A TechnoServe
            initiative in partnership with Mastercard Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
