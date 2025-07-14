import React from "react";
import { Link } from "react-router-dom";
import InvestorTypesSection from "../components/InvestorTypesSection";

import {
  Users,
  Building,
  Banknote,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Sparkles,
  Target,
  Zap,
  Mail,
} from "lucide-react";

const Finance = () => {
  const investorTypes = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Angel Investors & Venture Capital",
      description:
        "Connect with individual investors and VC firms who specialize in early-stage businesses and have experience in the coastal and blue economy sectors.",
      features: [
        "Seed funding from $5,000 - $50,000",
        "Mentorship and business guidance",
        "Network access and connections",
        "Industry expertise and advice",
      ],
      color: "from-teal to-program-green",
      suitable: "Early-stage startups with high growth potential",
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Microfinance & Community Lending",
      description:
        "Access smaller loans from microfinance institutions and community-based financial organizations that understand local business needs.",
      features: [
        "Loans from $500 - $10,000",
        "Flexible repayment terms",
        "Local market understanding",
        "Community support networks",
      ],
      color: "from-green to-program-green",
      suitable: "Small businesses and established entrepreneurs",
    },
    {
      icon: <Banknote className="h-12 w-12" />,
      title: "Government Grants & Programs",
      description:
        "Take advantage of government initiatives, grants, and programs specifically designed to support youth entrepreneurship and coastal development.",
      features: [
        "Non-repayable grants up to $25,000",
        "Special youth entrepreneur programs",
        "Blue economy initiatives",
        "Skills development funding",
      ],
      color: "from-primary-orange to-secondary-gold",
      suitable: "Innovative projects with social impact",
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Crowdfunding Platforms",
      description:
        "Leverage online platforms to raise funds from multiple small investors who believe in your business concept and social impact.",
      features: [
        "Campaign-based funding",
        "Marketing and exposure benefits",
        "Community building opportunities",
        "No equity dilution required",
      ],
      color: "from-accent to-yellow",
      suitable: "Consumer products and social enterprises",
    },
  ];

  const fundingProcess = [
    {
      step: 1,
      title: "Business Assessment",
      description:
        "We evaluate your business plan, financial projections, and funding needs to determine the best financing options.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      step: 2,
      title: "Investor Matching",
      description:
        "Connect with pre-vetted investors and lenders who align with your business sector and funding requirements.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      step: 3,
      title: "Pitch Preparation",
      description:
        "Receive coaching and support to create compelling pitch presentations and business proposals.",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      step: 4,
      title: "Application Support",
      description:
        "Get assistance with loan applications, grant proposals, and investor presentations.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      step: 5,
      title: "Funding Success",
      description:
        "Secure funding and receive ongoing support to ensure successful utilization of the capital.",
      icon: <Zap className="h-6 w-6" />,
    },
  ];

  const successStories = [
    {
      name: "Ocean Fresh Seafood",
      founder: "David Mwangi",
      funding: "$15,000",
      type: "Microfinance",
      result: "Expanded to 3 locations, employs 15 people",
      growth: "300%",
    },
    {
      name: "Coastal Crafts Co.",
      founder: "Amina Hassan",
      funding: "$8,000",
      type: "Angel Investment",
      result: "Export to 5 countries, online platform",
      growth: "250%",
    },
    {
      name: "Pwani Solar Solutions",
      founder: "James Ochieng",
      funding: "$20,000",
      type: "Government Grant",
      result: "100+ solar installations completed",
      growth: "400%",
    },
  ];

  return (
    <div className="pt-20">
      {/* Modern Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange via-secondary-gold to-yellow">
          <div className="absolute inset-0 bg-[url('/images/TNS_BLUE_BIZ_.JPG')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-grey/50 to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-green/20 rounded-full blur-xl animate-float"></div>
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-teal/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-program-green/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Access to{" "}
              <span className="bg-gradient-to-r from-green to-teal bg-clip-text text-transparent">
                Finance
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Unlock funding opportunities tailored for coastal businesses and
              the blue economy. Connect with investors, lenders, and grant
              providers who understand your market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://sites.google.com/tns.org/bahariboostchallengefund/application-forms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-primary-orange text-white font-semibold rounded-xl hover:from-primary-orange hover:to-secondary-gold transition-all duration-300 transform hover:scale-105 shadow-xl group"
              >
                <span>Bahari Boost Challenge Fund</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Modern Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Investor Types */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <InvestorTypesSection />
      </section>
      {/* 
      <div className="min-h-screen bg-white">
      <InvestorTypesSection />
    </div> */}

      {/* Funding Process */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-4">How We Help You Secure Funding</h2>
            <p className="text-xl text-dark-grey/70 max-w-3xl mx-auto">
              Our systematic approach ensures you're well-prepared and connected with the right funding sources.
            </p>
          </div>

          <div className="relative">
         
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-orange/20 via-secondary-gold/20 to-accent/20"></div>

            <div className="space-y-12">
              {fundingProcess.map((process, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:w-1/2">
                    <div className={`bg-gradient-to-br from-light-grey to-white rounded-2xl p-8 border border-light-grey/50 hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center mb-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-gold text-white rounded-2xl flex items-center justify-center font-bold mr-4">
                          {process.step}
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary-orange mr-4 shadow-sm">
                          {process.icon}
                        </div>
                        <h3 className="text-xl font-bold text-dark-grey">{process.title}</h3>
                      </div>
                      <p className="text-dark-grey/70 leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                  
                   
                  <div className="hidden md:block w-6 h-6 bg-gradient-to-br from-primary-orange to-secondary-gold rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1 md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-green/10 text-green rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-4">Funding Success Stories</h2>
            <p className="text-xl text-dark-grey/70">Real businesses that secured funding through BlueBiz Kenya</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-light-grey/50">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green to-program-green bg-clip-text text-transparent">{story.funding}</div>
                    <div className="flex items-center text-green bg-green/10 px-3 py-1 rounded-full">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm font-semibold">{story.growth}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-dark-grey mb-2 group-hover:text-primary-orange transition-colors">{story.name}</h3>
                  <div className="text-sm text-dark-grey/70 mb-2">Founded by {story.founder}</div>
                  <div className="inline-flex items-center px-2 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-xs font-medium mb-4">{story.type}</div>
                  
                  <p className="text-sm text-dark-grey/70 mb-6 leading-relaxed">{story.result}</p>
                  
                  <div className="flex items-center text-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-4">
              Why Choose BlueBiz for Funding?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Trusted Network",
                description:
                  "Access to pre-vetted, reputable investors and lenders with proven track records.",
                color: "from-teal to-program-green",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Guidance",
                description:
                  "Receive personalized support from experienced mentors throughout the funding process.",
                color: "from-primary-orange to-secondary-gold",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Faster Process",
                description:
                  "Streamlined application processes and faster decision times through our network.",
                color: "from-accent to-yellow",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-dark-grey/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-orange via-secondary-gold to-yellow text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/50 to-secondary-gold/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Funding?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join BlueBiz Kenya and get connected with the right funding sources
            for your business. Our expert team will guide you through every step
            of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://sites.google.com/tns.org/bahariboostchallengefund/application-forms"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-primary-orange text-white font-semibold rounded-xl hover:from-primary-orange hover:to-secondary-gold transition-all duration-300 transform hover:scale-105 shadow-xl group"
            >
              <span>Bahari Boost Challenge Fund</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:df33ef38-476d-4fe5-8d1e-97fcb798ba6d"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-orange transition-all duration-300 group"
            >
              <span>Partnership Opportunities</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Finance;
