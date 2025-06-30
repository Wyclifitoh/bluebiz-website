import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Users, Lightbulb, ArrowRight, CheckCircle, Award, Globe, TrendingUp, Sparkles, Star, MapPin, Calendar, Briefcase } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Target className="h-12 w-12" />,
      title: "Business Development",
      description: "We provide comprehensive support from business idea conception to market success, including business plan development, market research, and strategic planning.",
      features: ["Business Plan Creation", "Market Analysis", "Strategic Planning", "Mentorship Programs"]
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Financial Literacy",
      description: "Essential money management skills, budgeting, investment planning, and understanding financial products to make informed business decisions.",
      features: ["Money Management", "Investment Planning", "Credit Understanding", "Financial Planning"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Skills Training",
      description: "Technical and soft skills development including digital marketing, leadership, customer service, and industry-specific expertise.",
      features: ["Digital Marketing", "Leadership Development", "Customer Service", "Technical Skills"]
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Innovation Hub",
      description: "Fostering creativity, technological advancement, and innovative solutions for coastal and blue economy challenges.",
      features: ["Innovation Workshops", "Technology Training", "Creative Problem Solving", "Blue Economy Solutions"]
    }
  ];

  const stats = [
    { number: "2,500+", label: "Youth Empowered", icon: <Users className="h-8 w-8" /> },
    { number: "500+", label: "Businesses Launched", icon: <TrendingUp className="h-8 w-8" /> },
    { number: "6", label: "Coastal Counties", icon: <Globe className="h-8 w-8" /> },
    { number: "50+", label: "Training Programs", icon: <Award className="h-8 w-8" /> }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Program Launch",
      description: "BlueBiz Kenya launched as a TechnoServe initiative with support from Mastercard Foundation, focusing on coastal youth entrepreneurship.",
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Adapted to COVID-19 challenges by launching digital training programs and virtual mentorship sessions.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      year: "2021",
      title: "Expansion Phase",
      description: "Extended operations to all six coastal counties and launched the Challenge Fund for promising entrepreneurs.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      year: "2022",
      title: "Blue Economy Focus",
      description: "Specialized programs for blue economy sectors including fisheries, marine tourism, and renewable energy.",
      icon: <Target className="h-6 w-6" />
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Established innovation hubs in major coastal towns to foster technology adoption and creative solutions.",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      year: "2024",
      title: "Sustainable Growth",
      description: "Achieved 500+ business launches with 85% survival rate, establishing BlueBiz as a leading youth development program.",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const impactAreas = [
    {
      title: "Mombasa County",
      description: "Urban entrepreneurship and technology startups",
      businesses: 150,
      focus: "Tech & Services",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Kilifi County",
      description: "Tourism and hospitality ventures",
      businesses: 120,
      focus: "Tourism & Hospitality",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: "Kwale County",
      description: "Agriculture and fisheries development",
      businesses: 95,
      focus: "Agriculture & Fisheries",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Lamu County",
      description: "Cultural tourism and crafts",
      businesses: 80,
      focus: "Cultural Tourism",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Taita-Taveta County",
      description: "Eco-tourism and conservation",
      businesses: 35,
      focus: "Eco-Tourism",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Tana River County",
      description: "Renewable energy and agriculture",
      businesses: 20,
      focus: "Renewable Energy",
      icon: <Lightbulb className="h-6 w-6" />
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
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-teal/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-program-green/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-green/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 mr-2 text-yellow" />
              TechnoServe × Mastercard Foundation
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              About <span className="bg-gradient-to-r from-yellow to-green bg-clip-text text-transparent">BlueBiz</span> Kenya
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Empowering coastal youth to build thriving businesses through comprehensive support, skills training, and access to opportunities in Kenya's blue economy.
            </p>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pb-16">
              {stats.slice(0, 4).map((stat, index) => (
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

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-4xl font-bold text-dark-grey mb-6">Transforming Coastal Communities</h2>
              <p className="text-lg text-dark-grey/70 mb-8">
                BlueBiz Kenya is a comprehensive youth entrepreneurship program implemented by TechnoServe in partnership with the Mastercard Foundation. We focus on empowering young people aged 18-35 in Kenya's coastal counties to start and grow sustainable businesses that contribute to economic development and job creation.
              </p>
              <div className="space-y-4">
                {[
                  "Empower 2,500+ coastal youth entrepreneurs",
                  "Foster sustainable blue economy businesses",
                  "Provide comprehensive business support ecosystem",
                  "Create lasting economic opportunities and jobs",
                  "Build resilient coastal communities"
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="flex-shrink-0 w-6 h-6 bg-green/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-green/20 transition-colors">
                      <CheckCircle className="h-4 w-4 text-green" />
                    </div>
                    <span className="text-dark-grey/80 group-hover:text-dark-grey transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/20 to-secondary-gold/20 rounded-2xl blur-3xl"></div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
                alt="Young entrepreneurs working together"
                className="relative rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-light-grey/50">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow" />
                  <div>
                    <div className="text-sm font-semibold text-dark-grey">85% Success Rate</div>
                    <div className="text-xs text-dark-grey/60">Business survival after 2 years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Our Journey
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">BlueBiz Kenya Timeline</h2>
            <p className="text-xl text-dark-grey/70">Five years of empowering coastal youth entrepreneurs</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-orange/20 via-secondary-gold/20 to-accent/20"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:w-1/2">
                    <div className={`bg-white rounded-2xl p-8 border border-light-grey/50 hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-gold text-white rounded-2xl flex items-center justify-center font-bold mr-4">
                          {item.year}
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary-orange mr-4 shadow-sm">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-dark-grey">{item.title}</h3>
                      </div>
                      <p className="text-dark-grey/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block w-6 h-6 bg-gradient-to-br from-primary-orange to-secondary-gold rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1 md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Regional Impact
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Coastal Counties We Serve</h2>
            <p className="text-xl text-dark-grey/70">Tailored support for each county's unique opportunities and challenges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-light-grey to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-light-grey/50">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-gold rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-orange">{area.businesses}</div>
                      <div className="text-xs text-dark-grey/60">Businesses</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-dark-grey/70 mb-4 leading-relaxed">{area.description}</p>
                  
                  <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium">
                    {area.focus}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Our Impact
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Measurable Results</h2>
            <p className="text-xl text-dark-grey/70">Demonstrating our commitment to youth empowerment across coastal Kenya</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-light-grey/50">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-teal to-program-green text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-dark-grey mb-2 group-hover:text-primary-orange transition-colors">{stat.number}</div>
                  <div className="text-dark-grey/70 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BlueBiz Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4 mr-2" />
              Our Foundation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-4">The BlueBiz Pillars</h2>
            <p className="text-xl text-dark-grey/70 max-w-3xl mx-auto">
              Our comprehensive approach is built on four foundational pillars that ensure holistic support for every entrepreneur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-light-grey to-white rounded-2xl p-8 hover:from-white hover:to-light-grey transition-all duration-300 border border-light-grey/50 hover:border-primary-orange/20 hover:shadow-xl">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-orange to-secondary-gold text-white group-hover:scale-110 transition-transform duration-300">
                        {pillar.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">{pillar.title}</h3>
                      <p className="text-dark-grey/70 mb-6 leading-relaxed">{pillar.description}</p>
                      <ul className="space-y-3">
                        {pillar.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-dark-grey/70">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary-orange to-secondary-gold rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Strategic Partnership
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Our Partners</h2>
            <p className="text-xl text-dark-grey/70">Working together to create lasting impact across coastal Kenya</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-light-grey/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green to-program-green rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-grey">TechnoServe</h3>
              </div>
              <p className="text-dark-grey/70 mb-6 leading-relaxed">
                A leading international NGO that works with enterprising people in the developing world to build competitive farms, businesses, and industries. With over 50 years of experience, TechnoServe has helped millions of people lift themselves out of poverty.
              </p>
              <div className="space-y-3">
                {[
                  "50+ years of global experience",
                  "30+ countries served worldwide",
                  "Business development expertise",
                  "Agricultural value chain specialists"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm text-dark-grey/70">
                    <CheckCircle className="h-4 w-4 text-green mr-3" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-light-grey/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-yellow rounded-xl flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-grey">Mastercard Foundation</h3>
              </div>
              <p className="text-dark-grey/70 mb-6 leading-relaxed">
                A foundation working to advance learning and promote financial inclusion to enable young people in Africa and Indigenous youth in Canada to access dignified and fulfilling work. The Foundation invests in education, financial services, and agriculture.
              </p>
              <div className="space-y-3">
                {[
                  "Focus on youth empowerment in Africa",
                  "Financial inclusion advocacy",
                  "Education and skills development",
                  "Sustainable economic opportunities"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm text-dark-grey/70">
                    <CheckCircle className="h-4 w-4 text-green mr-3" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-accent via-primary-orange to-secondary-gold text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-primary-orange/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join the BlueBiz Kenya community and transform your entrepreneurial dreams into reality with our comprehensive support system.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/join"
              className="inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-xl hover:bg-light-grey transition-all duration-300 transform hover:scale-105 shadow-xl group"
            >
              <span>Join Us Now</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/finance"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-accent transition-all duration-300 group"
            >
              <span>Explore Funding</span>
              <TrendingUp className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;