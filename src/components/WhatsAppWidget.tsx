import React, { useState } from 'react';
import { MessageCircle, X, Phone, Mail, MapPin, Clock } from 'lucide-react';

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
    <div className="fixed left-4 bottom-4 z-50">
      {/* Widget Container */}
      <div className={`transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 mb-4 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-program-green">BlueBiz Program Support</h3>
                  <p className="text-xs text-program-green">We're here to help!</p>
                </div>
              </div>
              <button
                onClick={toggleWidget}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Get Instant Support</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Have questions about our programs? Need help with your application? Chat with us on WhatsApp for immediate assistance!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                <span>+254 706 815605</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                <span>jmuchai@tns.org</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                <span>Coastal Counties, Program</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                <span>Mon-Fri: 8AM-5PM</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={openWhatsApp}
              className="w-full bg-program-green text-white py-3 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </button>

            {/* Quick Actions */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="text-xs bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors font-medium">
                Program Info
              </button>
              <button className="text-xs bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors font-medium">
                Application Help
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleWidget}
        className={`w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'rotate-0' : 'hover:scale-110'
        }`}
        style={{ backgroundColor: isOpen ? '#059669' : '#059669' }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;