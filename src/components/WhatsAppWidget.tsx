import React, { useState } from 'react';
import { MessageCircle, X, Phone, MapPin, Clock, Zap } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const openWhatsApp = () => {
    const phoneNumber = "254706815605";
    const message = "Hello! I'm interested in learning more about BlueBiz Program programs. Can you help me get started?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed left-4 bottom-4 z-50 pointer-events-none">
      {/* Widget Container */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen
            ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
            : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-80 mb-4 overflow-hidden backdrop-blur-lg bg-white/95">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-primary-orange via-secondary-gold to-yellow p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22white%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M20 20c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            <div className="flex items-center justify-between relative">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse-slow">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">BlueBiz Program</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow rounded-full animate-pulse"></div>
                    <p className="text-sm text-white/90">We're online now!</p>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleWidget}
                className="p-2 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Zap className="w-5 h-5 text-primary-orange animate-pulse" />
                <h4 className="font-bold text-gray-800">Get Instant Support</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Have questions about our programs? Need help with your application? Chat with us on WhatsApp for immediate assistance!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-sm text-gray-600 group">
                <div className="w-8 h-8 bg-primary-orange/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-orange/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary-orange" />
                </div>
                <span className="font-medium">+254 706 815605</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 group">
                <div className="w-8 h-8 bg-primary-orange/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-orange/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary-orange" />
                </div>
                <span className="font-medium">Fidel Odinga Road | Texas Building 4th Floor Nyali, Mombasa, Kenya</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 group">
                <div className="w-8 h-8 bg-primary-orange/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-orange/20 transition-colors">
                  <Clock className="w-4 h-4 text-primary-orange" />
                </div>
                <span className="font-medium">Mon-Fri: 8AM-5PM</span>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <button
              onClick={openWhatsApp}
              className="w-full bg-gradient-to-r from-teal to-program-green text-white py-4 px-6 rounded-2xl font-bold hover:from-program-green hover:to-teal transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <MessageCircle className="w-6 h-6 animate-bounce" />
              <span className="text-lg">Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={toggleWidget}
        className={`pointer-events-auto relative w-16 h-16 bg-gradient-to-r from-primary-orange to-secondary-gold text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group overflow-hidden ${
          isOpen ? 'rotate-0' : 'hover:scale-110 animate-pulse-glow'
        }`}
      >
        <div className="absolute inset-0 rounded-full bg-primary-orange animate-ping opacity-75"></div>
        <div className="absolute inset-1 rounded-full bg-secondary-gold animate-ping opacity-50 animation-delay-200"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-orange via-secondary-gold to-yellow rounded-full"></div>
        <div className="relative z-10">
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform animate-bounce-gentle" />
          )}
        </div>
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
