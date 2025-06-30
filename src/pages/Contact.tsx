import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader, Send, Sparkles, MessageCircle, Users, Globe, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Locations",
      details: [
        "Mombasa Office: Nyali Bridge Plaza",
        "Kilifi Office: Bofa Road",
        "Kwale Office: Ukunda Town",
        "Lamu Office: Lamu Town Center"
      ],
      color: "from-teal to-program-green",
      link: "https://maps.app.goo.gl/4oumYtivP4vCXwW88"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: [
        "Main Office: +254 706 815605",
        "Kilifi: +254 700 123 457",
        "Kwale: +254 700 123 458",
        "Lamu: +254 700 123 459"
      ],
      color: "from-green to-program-green",
      link: "tel:+254706815605"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: [
        "General: jmuchai@tns.org",
        "Support: support@bluebizkenya.org",
        "Partnerships: rndiri@tns.org",
        "Challenge Fund: nkoigu@tns.org"
      ],
      color: "from-primary-orange to-secondary-gold",
      link: "mailto:jmuchai@tns.org"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
        "Emergency: 24/7 Online Support"
      ],
      color: "from-accent to-yellow"
    }
  ];

  const faqItems = [
    {
      question: "Who can join BlueBiz Kenya?",
      answer: "Young entrepreneurs aged 18-35 living in Kenya's coastal counties (Mombasa, Kilifi, Kwale, Lamu, Taita-Taveta, and Tana River) who are interested in starting or growing a business."
    },
    {
      question: "Is there a cost to join BlueBiz Kenya?",
      answer: "No, joining BlueBiz Kenya is completely free. All our programs, workshops, and mentorship sessions are provided at no cost to participants."
    },
    {
      question: "How long does the application process take?",
      answer: "We review applications within 48 hours and will contact you for a welcome call within one week of your application."
    },
    {
      question: "What types of businesses do you support?",
      answer: "We support businesses across all sectors, with special focus on blue economy industries like fisheries, tourism, renewable energy, and coastal agriculture."
    },
    {
      question: "Do you provide funding directly?",
      answer: "We don't provide direct funding, but we connect you with investors, lenders, and grant opportunities. We also help you prepare strong applications and pitches."
    }
  ];

  return (
    <div className="pt-20">
      {/* Modern Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange via-secondary-gold to-yellow">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-grey/50 to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-teal/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-program-green/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-green/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              <MessageCircle className="w-4 h-4 mr-2 text-teal" />
              We're Here to Help
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Contact <span className="bg-gradient-to-r from-teal to-program-green bg-clip-text text-transparent">Us</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Get in touch with BlueBiz Kenya. We're here to support your entrepreneurial journey and answer any questions you may have.
            </p>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "24/7", label: "Support" },
                { number: "4", label: "Locations" },
                { number: "<24h", label: "Response" },
                { number: "Free", label: "Consultation" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modern Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Multiple Locations
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Get In Touch</h2>
            <p className="text-xl text-dark-grey/70">Multiple ways to reach us across Kenya's coastal region</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-light-grey/50">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark-grey mb-4 group-hover:text-primary-orange transition-colors">{info.title}</h3>
                  <ul className="space-y-3">
                    {info.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-dark-grey/70 leading-relaxed">
                        {info.link && detailIndex === 0 ? (
                          <a 
                            href={info.link} 
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="hover:text-primary-orange transition-colors flex items-center group"
                          >
                            {detail}
                            {info.link.startsWith('http') && (
                              <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </a>
                        ) : (
                          detail
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Find Us
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Our Locations</h2>
            <p className="text-xl text-dark-grey/70">Visit us at any of our coastal offices</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-dark-grey mb-6">Visit Our Offices</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-light-grey to-white rounded-xl border border-light-grey/50 shadow-lg">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-grey mb-2">Main Office - Mombasa</h4>
                    <p className="text-dark-grey/70 text-sm mb-3">Nyali Bridge Plaza, Mombasa County</p>
                    <a 
                      href="https://maps.app.goo.gl/4oumYtivP4vCXwW88"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-orange hover:text-secondary-gold transition-colors text-sm font-medium"
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      View on Google Maps
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Kilifi Office", address: "Bofa Road, Kilifi" },
                    { name: "Kwale Office", address: "Ukunda Town, Kwale" },
                    { name: "Lamu Office", address: "Lamu Town Center" },
                    { name: "Regional Coverage", address: "Taita-Taveta & Tana River" }
                  ].map((office, index) => (
                    <div key={index} className="p-4 bg-light-grey rounded-xl">
                      <h5 className="font-semibold text-dark-grey mb-1">{office.name}</h5>
                      <p className="text-dark-grey/70 text-sm">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-light-grey to-white rounded-2xl p-6 shadow-xl border border-light-grey/50">
                {/* Embedded Google Map */}
                <div className="aspect-video rounded-xl overflow-hidden mb-6 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8234567890123!2d39.6666667!3d-4.0333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDInMDAuMCJTIDM5wrAzOSc2MC4wIkU!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BlueBiz Kenya Locations"
                    className="rounded-xl"
                  ></iframe>
                </div>

                {/* Map Controls */}
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-dark-grey mb-2">Interactive Map</h4>
                  <p className="text-dark-grey/70 mb-4">Explore our locations or open in Google Maps for directions</p>
                  <a 
                    href="https://maps.app.goo.gl/4oumYtivP4vCXwW88"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-teal text-white font-semibold rounded-xl hover:bg-program-green transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Open Google Maps
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-white rounded-lg border border-light-grey/50">
                    <div className="text-lg font-bold text-primary-orange">6</div>
                    <div className="text-xs text-dark-grey/70">Counties Served</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-light-grey/50">
                    <div className="text-lg font-bold text-teal">4</div>
                    <div className="text-xs text-dark-grey/70">Office Locations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Send Us a Message</h2>
            <p className="text-lg text-dark-grey/70">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>

          {/* Status Messages */}
          {submitStatus.message && (
            <div className={`mb-8 p-6 rounded-2xl flex items-center border ${
              submitStatus.type === 'success' 
                ? 'bg-green/10 text-program-green border-green/20' 
                : 'bg-accent/10 text-accent border-accent/20'
            }`}>
              {submitStatus.type === 'success' ? (
                <CheckCircle className="h-6 w-6 mr-3" />
              ) : (
                <AlertCircle className="h-6 w-6 mr-3" />
              )}
              <span className="font-medium">{submitStatus.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 space-y-6 border border-light-grey/50 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-grey mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-grey mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-dark-grey mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
                placeholder="What is this message about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-grey mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white resize-none"
                placeholder="Please provide details about your inquiry..."
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-primary-orange text-white py-4 px-6 rounded-xl font-semibold hover:from-primary-orange hover:to-secondary-gold focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Common Questions
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-dark-grey/70">Quick answers to common questions about BlueBiz Kenya</p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-light-grey to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-light-grey/50">
                <h3 className="text-lg font-semibold text-dark-grey mb-4 flex items-start">
                  <div className="w-6 h-6 bg-primary-orange/10 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary-orange text-sm font-bold">Q</span>
                  </div>
                  {faq.question}
                </h3>
                <p className="text-dark-grey/70 leading-relaxed ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-primary-orange via-secondary-gold to-yellow text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/50 to-secondary-gold/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Emergency Support Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            For urgent matters or time-sensitive opportunities, contact our emergency support line.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+254706815605"
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-xl group"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Call Now: +254 706 815605
            </a>
            <a
              href="mailto:jmuchai@tns.org"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-orange transition-all duration-300 group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              jmuchai@tns.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;