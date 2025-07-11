import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Target, 
  Heart, 
  Lightbulb,
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Waves,
  Globe,
  Zap,
  Award,
  Sparkles,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const slides = [
    {
      id: 1,
      title: "Empowering Kenya's Coastal Youth",
      subtitle: "to Build Thriving Businesses",
      description: "Join BlueBiz Kenya and unlock your entrepreneurial potential with business support, financial literacy, and skills training designed for the blue economy.",
      ctaText: "Join Us Today",
      ctaLink: "/join",
      secondaryCtaText: "Learn More",
      secondaryCtaLink: "/about",
      backgroundImage: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
      gradient: "from-primary-orange via-secondary-gold to-yellow"
    },
    {
      id: 2,
      title: "Access Funding Opportunities",
      subtitle: "for Your Blue Economy Business",
      description: "Connect with investors, lenders, and grant providers who understand the coastal market. Get the capital you need to grow your business.",
      ctaText: "Explore Funding",
      ctaLink: "/finance",
      secondaryCtaText: "View Success Stories",
      secondaryCtaLink: "/about",
      backgroundImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      gradient: "from-teal via-program-green to-green"
    },
    {
      id: 3,
      title: "Master Essential Business Skills",
      subtitle: "with Expert Training & Mentorship",
      description: "Access comprehensive training modules, video tutorials, and one-on-one mentorship to accelerate your entrepreneurial journey.",
      ctaText: "Start Learning",
      ctaLink: "/guides",
      secondaryCtaText: "Meet Our Team",
      secondaryCtaLink: "/team",
      backgroundImage: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      gradient: "from-accent via-primary-orange to-secondary-gold"
    }
  ];

  const testimonials = [
    {
      name: "Amina Hassan",
      business: "Coastal Crafts",
      location: "Mombasa",
      quote: "BlueBiz helped me transform my small craft business into a thriving enterprise. The mentorship and financial support were game-changers.",
      rating: 5
    },
    {
      name: "David Mwangi",
      business: "Ocean Fresh Seafood",
      location: "Kilifi",
      quote: "Through BlueBiz, I learned proper business planning and secured funding to expand my seafood business. Now I employ 15 people!",
      rating: 5
    },
    {
      name: "Fatuma Ali",
      business: "Pwani Fashion",
      location: "Lamu",
      quote: "The digital marketing training opened new markets for my fashion designs. My online sales have increased by 300%.",
      rating: 5
    }
  ];

  const businessStages = [
    {
      title: "Start Your Biz",
      description: "Turn your ideas into reality with comprehensive business planning support and startup guidance.",
      icon: <Zap className="h-8 w-8" />,
      color: "from-program-green to-program-green",
      features: ["Business Plan Development", "Market Research", "Legal Registration", "Initial Funding Guidance"]
    },
    {
      title: "Grow Your Biz",
      description: "Scale your existing business with advanced strategies and operational support.",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-primary-orange to-primary-orange",
      features: ["Growth Strategy", "Marketing & Sales", "Team Building", "Operations Optimization", "Financial Management"]
    },
    {
      title: "Scale Your Biz",
      description: "Expand to new markets and achieve sustainable long-term growth.",
      icon: <Award className="h-8 w-8" />,
      color: "from-program-green to-program-green",
      features: ["Market Expansion", "Investment Ready", "Strategic Partnerships", "Impact Measurement", "Sustainability Practices"]
    }
  ];

  const featuredFAQs = [
    {
      id: 1,
      question: 'Who can join BlueBiz Kenya?',
      answer: 'Young entrepreneurs aged 18-35 living in Kenya\'s coastal counties (Mombasa, Kilifi, Kwale, Lamu, Taita-Taveta, and Tana River) who are interested in starting or growing a business.'
    },
    {
      id: 2,
      question: 'Is there a cost to join BlueBiz Kenya?',
      answer: 'No, joining BlueBiz Kenya is completely free. All our programs, workshops, mentorship sessions, and resources are provided at no cost to participants.'
    },
    {
      id: 3,
      question: 'How long does the application process take?',
      answer: 'We review applications within 48 hours and will contact you for a welcome call within one week of your application.'
    },
    {
      id: 4,
      question: 'Do you provide direct funding to businesses?',
      answer: 'We don\'t provide direct funding, but we connect you with investors, lenders, and grant opportunities. We also help you prepare strong applications and develop compelling pitches.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(slideTimer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Slider Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slider Container */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}>
                <div className="absolute inset-0 bg-dark-grey/20"></div>
                <div className={`absolute inset-0 bg-[url('${slide.backgroundImage}')] bg-cover bg-center opacity-30`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Slide Content */}
            <div className="transition-all duration-500">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {slides[currentSlide].title} <span className="text-yellow">{slides[currentSlide].subtitle}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={slides[currentSlide].ctaLink}
                  className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  {slides[currentSlide].ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to={slides[currentSlide].secondaryCtaLink}
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  {slides[currentSlide].secondaryCtaText}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Animated Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20" viewBox="0 0 1440 120" fill="none">
            <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Business Journey Cards */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              Your Business Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Three Steps to Success
            </h2>
            <p className="text-xl text-dark-grey/80 max-w-3xl mx-auto">
              Whether you're starting fresh, growing an existing business, or ready to scale, we support you at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessStages.map((stage, index) => (
              <Link
                key={index}
                to="/guides"
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-light-grey/50 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${stage.color}`}></div>
                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stage.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {stage.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-dark-grey mb-4 group-hover:text-primary-orange transition-colors">
                      {stage.title}
                    </h3>
                    {/* <p className="text-dark-grey/70 mb-6 leading-relaxed">{stage.description}</p>
                    <ul className="space-y-2 mb-6">
                      {stage.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex text-sm text-dark-grey/70">
                          <CheckCircle className="h-4 w-4 text-program-green mr-2" />
                          {feature}
                        </li>

                        
                      ))}
                    </ul> */}
                    {/* <div className="inline-flex items-center text-primary-orange hover:text-secondary-gold font-semibold group-hover:translate-x-2 transition-all duration-300">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Economy Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-program-green/20 rounded-2xl blur-3xl"></div>
              <img 
                src="/images/g9.jpg" 
                alt="Blue Economy"
                className="relative rounded-2xl shadow-2xl"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-light-grey/50">
                <div className="flex items-center space-x-2">
                  <Waves className="w-5 h-5 text-teal" />
                  <div>
                    <div className="text-sm font-semibold text-dark-grey">Blue Economy</div>
                    <div className="text-xs text-dark-grey/60">Sustainable Ocean Use</div>
                  </div>
                </div>
              </div> */}
            </div>
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
                <Globe className="w-4 h-4 mr-2" />
                Blue Economy Deep Dive
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6">
                Defining Blue Economy
              </h2>
              <p className="text-lg text-dark-grey/70 mb-6 leading-relaxed">
                BlueBiz focuses on the Blue Economy, which, according to the World Bank, is simply defined as the sustainable use of ocean resources for economic growth, improved livelihoods, and jobs while preserving the health of the ocean ecosystem.
              </p>
              <h3 className="text-xl font-bold text-dark-grey mb-4">Defining Value Chains</h3>
              <p className="text-lg text-dark-grey/70 mb-8 leading-relaxed">
                In Blue Economy, value chains refer to the whole series of activities that are connected to one another to convert ocean-based assets to final products and services for end-use. Everything from raw material extraction to processing, packaging, distribution, and consumption falls under it.
              </p>
              <p className="text-lg text-dark-grey/70 mb-8 leading-relaxed">
                Supporting activities like recycling and waste management are also incorporated. A key concern of the Blue Economy is that these value chains must be carried out sustainably and efficiently, driving economic growth without damaging marine ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Center Preview */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-program-green/10 text-program-green rounded-full text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                Resource Center
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6">
                Specialized Value Chains
              </h2>
              <p className="text-lg text-dark-grey/70 mb-8 leading-relaxed">
                BlueBiz focuses on specific value chains which include: mariculture, aquaculture, plastic waste management, mangrove restoration and apiculture, coconut value addition, ecotourism and land-based farming - cashew nuts, cassava and coconuts.
              </p>
              {/* <Link
                to="/resources"
                className="inline-flex items-center  px-6 py-3 bg-program-green text-white font-semibold rounded-lg hover:bg-teal transition-all duration-300 transform hover:scale-105"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link> */}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-program-green/20 to-teal/20 rounded-2xl blur-3xl"></div>
              <img 
                src="/images/Mangrove-Restoration-20250514.jpeg" 
                alt="Resource Center"
                className="relative rounded-2xl shadow-2xl"
              />
              {/* <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-light-grey/50">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-program-green" />
                  <div>
                    <div className="text-sm font-semibold text-dark-grey">45+ Resources</div>
                    <div className="text-xs text-dark-grey/60">Free Access</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Training Modules Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <Play className="w-4 h-4 mr-2" />
              Training Excellence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Access Our Training Modules
            </h2>
            <p className="text-xl text-dark-grey/70 max-w-3xl mx-auto mb-8">
              Most successful entrepreneurs have a strong learning culture. They always seek ways to grow their businesses and are always learning. You could grow your business as well and become a great example in your community. Interact with our modules below.
            </p>
            <Link
              to="/guides"
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              BlueBiz Modules
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Entrepreneur Era Section */}
      <section className="py-20 bg-gradient-to-r from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/20 to-secondary-gold/20 rounded-2xl blur-3xl"></div>
              <img 
                src="/images/DSC_4977.JPG" 
                alt="Entrepreneur Era"
                className="relative rounded-2xl shadow-2xl"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-light-grey/50">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-primary-orange" />
                  <div>
                    <div className="text-sm font-semibold text-dark-grey">2,500+ Entrepreneurs</div>
                    <div className="text-xs text-dark-grey/60">Empowered</div>
                  </div>
                </div>
              </div> */}
            </div>
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
                <Lightbulb className="w-4 h-4 mr-2" />
                Dive Into Your Entrepreneur Era
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6">
                Let's Launch your Business
              </h2>
              <p className="text-lg text-dark-grey/70 mb-6 leading-relaxed">
                Are you looking forward to starting or growing your business but lack the right skills and tools? Worry no more! BlueBiz program is here to help you embrace your entrepreneurship era. Here, we will guide you to grow and boost your income.
              </p>
              <h3 className="text-xl font-bold text-dark-grey mb-4">The Program</h3>
              <p className="text-lg text-dark-grey/70 mb-8 leading-relaxed">
                At BlueBiz, we offer a variety of services to help businesses and organizations succeed. From offering training and connecting you to the right mentors to offering financial advice, we have the expertise to help you achieve your goals.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-primary-orange text-white font-semibold rounded-lg hover:bg-secondary-gold transition-all duration-300 transform hover:scale-105"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4 mr-2" />
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-dark-grey/70 max-w-3xl mx-auto">
              Quick answers to the most common questions about BlueBiz Kenya and our programs.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {featuredFAQs.map((faq, index) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-light-grey/50 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-light-grey/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-dark-grey pr-4">{faq.question}</span>
                  {openFAQ === faq.id ? (
                    <ChevronDown className="w-6 h-6 text-primary-orange flex-shrink-0 rotate-180 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-dark-grey/50 flex-shrink-0 transition-transform duration-300" />
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

          <div className="text-center">
            <Link
              to="/faq"
              className="inline-flex items-center px-6 py-3 bg-teal text-white font-semibold rounded-lg hover:bg-program-green transition-all duration-300 transform hover:scale-105"
            >
              View All FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BlueBiz Pillars Preview */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-4">
              Built on Strong Foundations
            </h2>
            <p className="text-xl text-dark-grey/70 max-w-3xl mx-auto">
              Our four pillars guide everything we do, ensuring comprehensive support for your entrepreneurial journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Business Development",
                description: "Comprehensive support from idea to market success"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Financial Literacy",
                description: "Essential money management and investment skills"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Skills Training",
                description: "Technical and soft skills for business success"
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Innovation Hub",
                description: "Fostering creativity and technological advancement"
              }
            ].map((pillar, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 rounded-full bg-light-grey text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all duration-300 transform group-hover:scale-110 mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark-grey mb-2">{pillar.title}</h3>
                <p className="text-dark-grey/70 text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-primary-orange text-white font-semibold rounded-lg hover:bg-secondary-gold transition-all duration-300 transform hover:scale-105"
            >
              Discover Our Approach
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section> */}

      {/* Access to Finance Preview */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-grey mb-6">
                Unlock Access to Finance
              </h2>
              <p className="text-lg text-dark-grey/70 mb-8">
                Connect with investors, lenders, and funding opportunities specifically designed for coastal businesses and the blue economy.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Angel Investors & Venture Capital",
                  "Microfinance & Community Lending",
                  "Government Grants & Programs",
                  "Crowdfunding Platforms"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green mr-3" />
                    <span className="text-dark-grey/80">{item}</span>
                  </div>
                ))}
              </div>
              {/* <Link
                to="/finance"
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
              >
                Explore Funding Options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link> */}
            </div>
            <div className="relative">
              <img 
                src="/images/CopyofDSC_0045.jpg" 
                alt="Business meeting"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-primary-orange">500+</div>
                <div className="text-sm text-dark-grey/70">Businesses Funded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-grey text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-light-grey">Hear from entrepreneurs who transformed their lives through BlueBiz Kenya</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-light-grey/10 rounded-xl p-8 md:p-12">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow fill-current" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-center mb-8 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-yellow">{testimonials[currentTestimonial].name}</div>
                <div className="text-light-grey">{testimonials[currentTestimonial].business}</div>
                <div className="text-light-grey/70 text-sm">{testimonials[currentTestimonial].location}</div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-accent hover:bg-accent/90 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-accent hover:bg-accent/90 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-accent' : 'bg-light-grey/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-orange to-secondary-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of young entrepreneurs who are building successful businesses with BlueBiz Kenya. Your journey to success starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-orange font-semibold rounded-lg hover:bg-light-grey transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join BlueBiz Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-orange transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;