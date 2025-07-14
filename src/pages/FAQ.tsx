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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // const categories = [
  //   { id: 'all', name: 'All Questions', count: 25 },
  //   { id: 'general', name: 'General Information', count: 6 },
  //   { id: 'joining', name: 'Joining BlueBiz', count: 5 },
  //   { id: 'training', name: 'Training & Resources', count: 4 },
  //   { id: 'funding', name: 'Access to Finance', count: 4 },
  //   { id: 'business', name: 'Business Support', count: 3 },
  //   { id: 'technical', name: 'Technical Support', count: 3 }
  // ];

  const faqs = [
    {
      id: 1,
      question: 'What does BlueBiz aim to achieve?',
      answer: ' BlueBiz seeks to empower youth and entrepreneurship in the blue economy by equipping them with the relevant skills, resources, and support to innovate sustainable businesses. This would be an economic venture in ocean-related sectors such as aquaculture, tourism, marine technology, and environmental conservation.'
    },
    {
      id: 2,
      question: 'Who can be part of the program for BlueBiz?',
      answer: ' We welcome applications by young entrepreneurs aged between 18 to 35, small-scale business owners, and innovators who want to create positive social impacts or economic or environmental impacts within the blue economy. We encourage participants from all different blue economy sectors and invite applicants with innovative solutions that respond to the challenges of ocean sustainability.'
    },
    {
      id: 3,
      question: 'What type of training does BlueBiz offer?',
      answer: 'BlueBiz gives holistic training in the basics of entrepreneurship, financial management, marketing, and digital skills, adapted to the needs of the blue economy. Other important aspects that our program covers are soft skills such as leadership, networking and communication, all put together in a well-rounded toolkit.'
    },
    {
      id: 4,
      question: 'How does BlueBiz support participants in developing their businesses?',
      answer: 'BlueBiz offers entrepreneurship training, technical training, mentorship provided by sector experts, funding opportunities, and networking events. We connect participants with potential investors and market actors from the blue economy to help them grow and establish viable business models.'
    },
    {
      id: 5, 
      question: 'Does BlueBiz have any networking opportunities?',
      answer: 'Yes, networking is a very important aspect of the program. BlueBiz organizes events and links participants to value chain actors, industry professionals, and other entrepreneurs. Such a network supports the participants in getting a feel for the market and developing relationships that can be helpful to grow business.'
    },
    {
      id: 6,
      question: 'What is unique about the BlueBiz approach?',
      answer: 'BlueBiz links entrepreneurship training with a focus on sustainability and the blue economy. Other business programs differ from the intent of BlueBiz in that it aims at the creation of businesses that balance profitability with environmental responsibility to have a positive impact both on local communities and marine ecosystems.'
    }, 
    {
      id: 7,
      question: 'Is there a fee of any sort to participate in the BlueBiz program?',
      answer: 'There are no participation costs to BlueBiz participants since they are fully sponsored by the partner organizations that ensure blue economy innovation is catalyzed through the program. Participants can have funding, resources, and training without necessarily having to pay for the same.'
    },
    {
      id: 8,
      question: 'What are the expected outcomes for participants?',
      answer: 'By the end of the program, participants are likely to have an improved foundation in entrepreneurship, a better-defined business model, and a well-defined actionable growth plan. They shall equally have wider networks in the blue economy, with an understanding of how to scale their ventures sustainably.'
    },
   
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });


  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* Modern Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange via-secondary-gold to-yellow">
          <div className="absolute inset-0 bg-[url('/images/g2.jpg')] bg-cover bg-center opacity-20"></div>
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
            {/* <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              <HelpCircle className="w-4 h-4 mr-2 text-teal" />
              Get Your Questions Answered
            </div> */}

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-teal to-program-green bg-clip-text text-transparent">Questions</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about BlueBiz Kenya, our programs, and how we can help you succeed as an entrepreneur.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
              {[
                { number: "5+", label: "FAQs" },
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
            {/* <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select> */}
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