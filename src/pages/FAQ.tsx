import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Users, 
  Target, 
  BookOpen, 
  TrendingUp,
  Sparkles,
  Globe,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: 'all', name: 'All Questions', count: 25 },
    { id: 'general', name: 'General Information', count: 6 },
    { id: 'joining', name: 'Joining BlueBiz', count: 5 },
    { id: 'training', name: 'Training & Resources', count: 4 },
    { id: 'funding', name: 'Access to Finance', count: 4 },
    { id: 'business', name: 'Business Support', count: 3 },
    { id: 'technical', name: 'Technical Support', count: 3 }
  ];

  const faqs = [
    // General Information
    {
      id: 1,
      category: 'general',
      question: 'What is BlueBiz Kenya?',
      answer: 'BlueBiz Kenya is a comprehensive youth entrepreneurship program implemented by TechnoServe in partnership with the Mastercard Foundation. We focus on empowering young people aged 18-35 in Kenya\'s coastal counties to start and grow sustainable businesses that contribute to economic development and job creation.',
      featured: true
    },
    {
      id: 2,
      category: 'general',
      question: 'Which counties does BlueBiz Kenya serve?',
      answer: 'BlueBiz Kenya operates in six coastal counties: Mombasa, Kilifi, Kwale, Lamu, Taita-Taveta, and Tana River. We have local offices and representatives in each county to provide personalized support to entrepreneurs.',
      featured: true
    },
    {
      id: 3,
      category: 'general',
      question: 'What is the Blue Economy focus?',
      answer: 'The Blue Economy refers to the sustainable use of ocean resources for economic growth, improved livelihoods, and jobs while preserving ocean ecosystem health. BlueBiz focuses on value chains including mariculture, aquaculture, plastic waste management, mangrove restoration, ecotourism, and coastal agriculture.',
      featured: false
    },
    {
      id: 4,
      category: 'general',
      question: 'Who are BlueBiz Kenya\'s partners?',
      answer: 'BlueBiz Kenya is implemented by TechnoServe in partnership with the Mastercard Foundation. We also work with local financial institutions, government agencies, and private sector partners to provide comprehensive support to entrepreneurs.',
      featured: false
    },
    {
      id: 5,
      category: 'general',
      question: 'How long has BlueBiz Kenya been operating?',
      answer: 'BlueBiz Kenya launched in 2019 and has been operating for over 5 years. During this time, we have empowered over 2,500 young entrepreneurs and supported the launch of 500+ businesses across the coastal region.',
      featured: false
    },
    {
      id: 6,
      category: 'general',
      question: 'What makes BlueBiz Kenya different from other programs?',
      answer: 'BlueBiz Kenya offers a holistic approach combining business development, financial literacy, skills training, and innovation support. Our focus on the blue economy, coastal-specific challenges, and comprehensive ecosystem approach sets us apart from other entrepreneurship programs.',
      featured: false
    },

    // Joining BlueBiz
    {
      id: 7,
      category: 'joining',
      question: 'Who can join BlueBiz Kenya?',
      answer: 'Young entrepreneurs aged 18-35 living in Kenya\'s coastal counties (Mombasa, Kilifi, Kwale, Lamu, Taita-Taveta, and Tana River) who are interested in starting or growing a business. We welcome entrepreneurs at all stages, from those with just an idea to those with established businesses.',
      featured: true
    },
    {
      id: 8,
      category: 'joining',
      question: 'Is there a cost to join BlueBiz Kenya?',
      answer: 'No, joining BlueBiz Kenya is completely free. All our programs, workshops, mentorship sessions, and resources are provided at no cost to participants. This is made possible through the generous support of our partners.',
      featured: true
    },
    {
      id: 9,
      category: 'joining',
      question: 'How do I apply to join BlueBiz Kenya?',
      answer: 'You can apply by filling out our online registration form on the "Join Us" page. The application takes about 10-15 minutes to complete and asks about your personal information, business stage, and areas of interest.',
      featured: false
    },
    {
      id: 10,
      category: 'joining',
      question: 'How long does the application process take?',
      answer: 'We review applications within 48 hours and will contact you for a welcome call within one week of your application. The entire onboarding process typically takes 1-2 weeks from application to program participation.',
      featured: true
    },
    {
      id: 11,
      category: 'joining',
      question: 'What happens after I join?',
      answer: 'After joining, you\'ll receive a welcome call to discuss your goals and match you with appropriate programs. You\'ll then have access to training modules, mentorship sessions, networking events, and funding opportunities based on your needs and business stage.',
      featured: false
    },

    // Training & Resources
    {
      id: 12,
      category: 'training',
      question: 'What types of training do you offer?',
      answer: 'We offer comprehensive training including business plan development, financial literacy, digital marketing, customer service, leadership skills, and blue economy-specific training. Training is delivered through workshops, online modules, video content, and one-on-one mentorship.',
      featured: false
    },
    {
      id: 13,
      category: 'training',
      question: 'Are the training materials available online?',
      answer: 'Yes, all our training materials are available online through our Resource Center and Guides pages. You can download PDF modules, watch video tutorials, and access interactive content 24/7 from any device.',
      featured: false
    },
    {
      id: 14,
      category: 'training',
      question: 'Do you provide certificates for completed training?',
      answer: 'Yes, we provide certificates of completion for our training modules and workshops. These certificates can be valuable for your professional development and when applying for funding or partnerships.',
      featured: false
    },
    {
      id: 15,
      category: 'training',
      question: 'Can I access training if I\'m not physically in the coastal counties?',
      answer: 'While our primary focus is on coastal counties, many of our online resources and virtual training sessions are accessible from anywhere. However, in-person workshops, mentorship, and some specialized support are limited to our target counties.',
      featured: false
    },

    // Access to Finance
    {
      id: 16,
      category: 'funding',
      question: 'Do you provide direct funding to businesses?',
      answer: 'We don\'t provide direct funding, but we connect you with investors, lenders, and grant opportunities. We also help you prepare strong applications, develop compelling pitches, and navigate the funding landscape through our Challenge Fund and partnership network.',
      featured: true
    },
    {
      id: 17,
      category: 'funding',
      question: 'What is the BlueBiz Challenge Fund?',
      answer: 'The BlueBiz Challenge Fund is a competitive grant program that provides funding to promising entrepreneurs with innovative business ideas. Grants range from $1,000 to $25,000 depending on the business stage and potential impact.',
      featured: false
    },
    {
      id: 18,
      category: 'funding',
      question: 'What types of funding sources do you connect entrepreneurs with?',
      answer: 'We connect entrepreneurs with various funding sources including angel investors, venture capital firms, microfinance institutions, government grants, crowdfunding platforms, and development finance institutions that focus on youth and coastal development.',
      featured: false
    },
    {
      id: 19,
      category: 'funding',
      question: 'How do you help with funding applications?',
      answer: 'We provide comprehensive support including business plan review, financial projection development, pitch deck creation, application writing assistance, and mock interview sessions. Our team has extensive experience with various funding sources and requirements.',
      featured: false
    },

    // Business Support
    {
      id: 20,
      category: 'business',
      question: 'What types of businesses do you support?',
      answer: 'We support businesses across all sectors, with special focus on blue economy industries like fisheries, tourism, renewable energy, and coastal agriculture. We also support technology startups, manufacturing, services, and social enterprises.',
      featured: false
    },
    {
      id: 21,
      category: 'business',
      question: 'Do you provide ongoing mentorship?',
      answer: 'Yes, we provide ongoing mentorship through our network of experienced entrepreneurs, industry experts, and business professionals. Mentorship can be one-on-one or group-based, depending on your needs and preferences.',
      featured: false
    },
    {
      id: 22,
      category: 'business',
      question: 'Can you help with business registration and legal requirements?',
      answer: 'Yes, we provide guidance on business registration, licensing, tax requirements, and other legal aspects of starting and running a business in Kenya. We also connect you with legal professionals when specialized advice is needed.',
      featured: false
    },

    // Technical Support
    {
      id: 23,
      category: 'technical',
      question: 'How can I contact BlueBiz Kenya for support?',
      answer: 'You can contact us through multiple channels: email (jmuchai@tns.org), phone (+254 706 815605), our contact form, WhatsApp widget on our website, or visit our offices in Mombasa, Kilifi, Kwale, or Lamu.',
      featured: false
    },
    {
      id: 24,
      category: 'technical',
      question: 'What if I have technical issues with the website or online resources?',
      answer: 'For technical issues, you can use our chatbot widget for immediate assistance, contact our support team via email, or call our technical support line. We typically respond to technical issues within 24 hours.',
      featured: false
    },
    {
      id: 25,
      category: 'technical',
      question: 'Do you have mobile apps for accessing BlueBiz resources?',
      answer: 'Currently, all our resources are accessible through our mobile-optimized website. We are developing a mobile app that will be launched in 2024 to provide easier access to training materials and community features.',
      featured: false
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredFAQs = faqs.filter(faq => faq.featured);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

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
              <HelpCircle className="w-4 h-4 mr-2 text-teal" />
              Get Your Questions Answered
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-teal to-program-green bg-clip-text text-transparent">Questions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about BlueBiz Kenya, our programs, and how we can help you succeed as an entrepreneur.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "25+", label: "FAQs" },
                { number: "6", label: "Categories" },
                { number: "<24h", label: "Response Time" },
                { number: "24/7", label: "Support" }
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

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-light-grey/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-grey/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Featured FAQs */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Most Asked Questions
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Popular FAQs</h2>
            <p className="text-xl text-dark-grey/70">Quick answers to our most frequently asked questions</p>
          </div>

          <div className="space-y-4">
            {featuredFAQs.map((faq, index) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-light-grey/50 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-light-grey/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-dark-grey pr-4">{faq.question}</span>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-6 h-6 text-primary-orange flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-dark-grey/50 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === faq.id && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-light-grey pt-4">
                      <p className="text-dark-grey/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Complete FAQ Library
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">All Questions & Answers</h2>
            <p className="text-xl text-dark-grey/70">
              {filteredFAQs.length} questions found
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>

          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-light-grey rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-dark-grey/50" />
              </div>
              <h3 className="text-xl font-semibold text-dark-grey mb-2">No questions found</h3>
              <p className="text-dark-grey/70">Try adjusting your search terms or category filter</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={faq.id} className="bg-gradient-to-br from-light-grey to-white rounded-2xl shadow-lg border border-light-grey/50 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <HelpCircle className="w-4 h-4 text-primary-orange" />
                      </div>
                      <span className="text-lg font-semibold text-dark-grey">{faq.question}</span>
                    </div>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-6 h-6 text-primary-orange flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-dark-grey/50 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-light-grey pt-4 ml-12">
                        <p className="text-dark-grey/70 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              Browse by Category
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">FAQ Categories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(1).map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="group text-left"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-light-grey/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-gold rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-dark-grey/70 text-sm mb-4">
                    {category.count} questions available
                  </p>
                  <div className="flex items-center text-primary-orange text-sm font-medium">
                    <span>View Questions</span>
                    <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-primary-orange via-secondary-gold to-yellow text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/50 to-secondary-gold/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Can't find the answer you're looking for? Our team is here to help you with any questions about BlueBiz Kenya and our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-orange font-semibold rounded-xl hover:bg-light-grey transition-all duration-300 transform hover:scale-105 shadow-xl group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Contact Us</span>
            </Link>
            <a
              href="tel:+254706815605"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-orange transition-all duration-300 group"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;