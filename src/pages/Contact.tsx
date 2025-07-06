import React, { useState } from 'react';
import { 
  MessageCircle, 
  Globe, 
  MapPin, 
  Send, 
  Users, 
  Sparkles,
  CheckCircle,
  AlertCircle,
  Loader,
  ExternalLink,
  Phone,
  Mail,
  Building2,
  Clock,
  Star,
  Target
} from 'lucide-react';

import SectionHeader from '../components/ui/SectionHeader';
import CallToAction from '../components/ui/CallToAction';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({
    type: null,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
   
    {
      title: "Program Support",
      icon: <Users className="w-6 h-6" />,
      details: [
        "Enterprise Development",
        "+254 700 123456",
        "support@bluebizkenya.org"
      ],
      color: "from-teal to-program-green"
    },
    {
      title: "Partnership Inquiries",
      icon: <Globe className="w-6 h-6" />,
      details: [
        "Business Partnerships",
        "+254 700 789012",
        "partnerships@bluebizkenya.org"
      ],
      color: "from-program-green to-accent"
    },
    {
      title: "Emergency Support",
      icon: <Phone className="w-6 h-6" />,
      details: [
        "24/7 Urgent Matters",
        "+254 706 815605",
        "emergency@bluebizkenya.org"
      ],
      color: "from-accent to-yellow"
    },
     {
      title: "Main Office",
      icon: <Building2 className="w-6 h-6" />,
      details: [
        "Nyali Bridge Plaza, Mombasa",
        "+254 706 815605",
        "jmuchai@tns.org"
      ],
      color: "from-primary-orange to-secondary-gold",
      link: "https://maps.app.goo.gl/4oumYtivP4vCXwW88"
    }
  ];

  // Coastal counties with value chains
  const coastalCounties = [
    {
      name: "Mombasa",
      position: { top: "45%", left: "85%" },
      valueChains: ["Tourism", "Fisheries", "Port Services"],
      color: "primary-orange",
      office: true
    },
    {
      name: "Kilifi",
      position: { top: "35%", left: "82%" },
      valueChains: ["Tourism", "Agriculture", "Fisheries"],
      color: "teal",
      office: true
    },
    {
      name: "Kwale",
      position: { top: "55%", left: "80%" },
      valueChains: ["Mining", "Tourism", "Agriculture"],
      color: "program-green",
      office: true
    },
    {
      name: "Lamu",
      position: { top: "25%", left: "88%" },
      valueChains: ["Tourism", "Fisheries", "Culture"],
      color: "secondary-gold",
      office: true
    },
    {
      name: "Tana River",
      position: { top: "30%", left: "75%" },
      valueChains: ["Agriculture", "Livestock", "Fisheries"],
      color: "accent",
      office: false
    },
    {
      name: "Taita-Taveta",
      position: { top: "60%", left: "75%" },
      valueChains: ["Agriculture", "Tourism", "Mining"],
      color: "yellow",
      office: false
    }
  ];

  const faqItems = [
    {
      question: "How can I join the BlueBiz program?",
      answer: "You can apply through our online application form or visit any of our coastal offices. We accept applications year-round and conduct regular cohort selections."
    },
    {
      question: "What support does BlueBiz provide to entrepreneurs?",
      answer: "We offer business training, mentorship, access to finance, market linkages, and ongoing technical support to help you grow your Blue Economy business."
    },
    {
      question: "Which counties does BlueBiz serve?",
      answer: "We serve six coastal counties: Mombasa, Kilifi, Kwale, Lamu, Tana River, and Taita-Taveta, with offices in the first four counties."
    },
    {
      question: "Is there a cost to participate in BlueBiz programs?",
      answer: "No, all BlueBiz training programs, mentorship, and support services are provided free of charge to qualifying entrepreneurs."
    }
  ];

  return (
    <div className="pt-20">
      {/* Modern Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange via-secondary-gold to-yellow">
          <div className="absolute inset-0 bg-[url('/images/g6.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-grey/50 to-transparent"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-teal/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-program-green/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              <MessageCircle className="w-4 h-4 mr-2 text-teal" />
              We're Here to Help
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Contact <span className="bg-gradient-to-r from-teal to-program-green bg-clip-text text-transparent">Us</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Get in touch with BlueBiz Kenya. We're here to support your entrepreneurial journey across Kenya's coastal region.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "24/7", label: "Support" },
                { number: "6", label: "Counties" },
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

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ icon: Phone, text: "Get In Touch" }}
            title="Contact Information"
            subtitle="Multiple ways to reach us across Kenya's coastal region"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-light-grey/50">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {info.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-dark-grey mb-4 group-hover:text-primary-orange transition-colors">
                    {info.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="text-sm text-dark-grey/70">{info.details[0]}</div>
                    <div className="text-sm font-medium text-primary-orange">{info.details[1]}</div>
                    <div className="text-sm text-teal">{info.details[2]}</div>
                  </div>

                  {info.link && (
                    <a 
                      href={info.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-dark-grey/60 hover:text-primary-orange transition-colors mt-3"
                    >
                      View Location
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-light-grey/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ icon: MapPin, text: "Interactive Map" }}
            title="Kenya's Coastal Region"
            subtitle="Explore our presence across the coastal counties and discover the value chains we support in each region"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Interactive Kenya Map */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-light-grey/50">
                <h3 className="text-xl font-bold text-dark-grey mb-4 text-center">Coastal Counties Coverage</h3>
                
                {/* Simplified Kenya Map */}
                <div className="relative w-full h-96 bg-gradient-to-br from-teal/10 to-program-green/10 rounded-xl overflow-hidden">
                  {/* Kenya outline - simplified coastal focus */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                    {/* Simplified Kenya coastal outline */}
                    <path
                      d="M280 50 L350 80 L370 120 L360 160 L340 200 L320 240 L300 260 L280 250 L260 230 L250 200 L240 170 L250 140 L260 110 L270 80 Z"
                      fill="rgba(79, 205, 176, 0.1)"
                      stroke="rgba(79, 205, 176, 0.3)"
                      strokeWidth="2"
                    />
                    {/* Ocean area */}
                    <path
                      d="M350 80 L400 100 L400 300 L300 300 L320 240 L340 200 L360 160 L370 120 Z"
                      fill="rgba(79, 205, 176, 0.05)"
                    />
                  </svg>

                  {/* County markers */}
                  {coastalCounties.map((county, index) => (
                    <div
                      key={county.name}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                      style={{ top: county.position.top, left: county.position.left }}
                    >
                      {/* County marker */}
                      <div className={`w-4 h-4 bg-${county.color} rounded-full shadow-lg group-hover:scale-150 transition-all duration-300 animate-pulse`}></div>
                      
                      {/* Office indicator */}
                      {county.office && (
                        <div className={`absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full`}></div>
                      )}

                      {/* Tooltip */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <div className="bg-white rounded-lg shadow-xl p-3 min-w-48 border border-light-grey/50">
                          <h4 className="font-bold text-dark-grey mb-2">{county.name} County</h4>
                          <div className="text-xs text-dark-grey/70 mb-2">
                            {county.office ? '🏢 Office Location' : '📍 Service Area'}
                          </div>
                          <div className="text-xs">
                            <div className="font-medium text-dark-grey mb-1">Value Chains:</div>
                            {county.valueChains.map((chain, i) => (
                              <div key={i} className={`inline-block px-2 py-1 bg-${county.color}/10 text-${county.color} rounded-full text-xs mr-1 mb-1`}>
                                {chain}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Legend */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                    <span className="text-xs text-dark-grey/70">Office Location</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-teal rounded-full"></div>
                    <span className="text-xs text-dark-grey/70">Service Area</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-xs text-dark-grey/70">Main Office</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-1 bg-program-green/30"></div>
                    <span className="text-xs text-dark-grey/70">Coastal Region</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations & Google Map */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-dark-grey mb-6">Visit Our Offices</h3>
                
                {/* Main Office Highlight */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-primary-orange/20 mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark-grey mb-2">Main Office - Mombasa</h4>
                      <p className="text-dark-grey/70 text-sm mb-3">Nyali Bridge Plaza, Mombasa County</p>
                      <div className="flex flex-col space-y-1 text-sm">
                        <div className="flex items-center text-primary-orange">
                          <Phone className="w-4 h-4 mr-2" />
                          +254 706 815605
                        </div>
                        <div className="flex items-center text-teal">
                          <Mail className="w-4 h-4 mr-2" />
                          jmuchai@tns.org
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Offices */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Kilifi Office", address: "Bofa Road, Kilifi", color: "teal" },
                    { name: "Kwale Office", address: "Ukunda Town, Kwale", color: "program-green" },
                    { name: "Lamu Office", address: "Lamu Town Center", color: "secondary-gold" }
                  ].map((office, index) => (
                    <div key={index} className={`p-4 bg-${office.color}/5 border border-${office.color}/20 rounded-xl`}>
                      <h5 className={`font-semibold text-${office.color} mb-1`}>{office.name}</h5>
                      <p className="text-dark-grey/70 text-sm">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-light-grey/50">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8234567890123!2d39.6666667!3d-4.0333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDInMDAuMCJTIDM5wrAzOSc2MC4wIkU!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BlueBiz Kenya Locations"
                    className="rounded-lg"
                  ></iframe>
                </div>
                
                <div className="text-center">
                  <a 
                    href="https://maps.app.goo.gl/4oumYtivP4vCXwW88"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-teal text-white font-semibold rounded-xl hover:bg-program-green transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Open in Google Maps
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ icon: Send, text: "Send Message" }}
            title="Send Us a Message"
            subtitle="Fill out the form below and we'll get back to you within 24 hours"
          />

          {/* Status Messages */}
          {submitStatus.message && (
            <div className={`mb-8 p-6 rounded-2xl flex items-center border ${
              submitStatus.type === 'success' 
                ? 'bg-program-green/10 text-program-green border-program-green/20' 
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
      <section className="py-20 bg-light-grey/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ icon: Users, text: "Common Questions" }}
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about BlueBiz Kenya"
          />

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-light-grey/50">
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

      {/* Emergency Contact CTA */}
      <CallToAction
        badge={{ icon: Sparkles, text: "Emergency Support Available" }}
        title="Need Immediate Assistance?"
        subtitle="For urgent matters or time-sensitive opportunities, contact our emergency support line available 24/7."
        buttons={[
          {
            text: "Call Now: +254 706 815605",
            href: "tel:+254706815605",
            icon: Phone,
            variant: "primary"
          },
          {
            text: "Email: jmuchai@tns.org",
            href: "mailto:jmuchai@tns.org",
            icon: Mail,
            variant: "secondary"
          }
        ]}
      />
    </div>
  );
};

export default ContactPage;