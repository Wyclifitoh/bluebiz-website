import React from 'react';
import { 
  Users, 
  PiggyBank, 
  Building2, 
  Shield, 
  Heart, 
  TrendingUp,
  ArrowRight,
  Target,
  Handshake
} from 'lucide-react';

const investorTypes = [
  {
    title: "Family and Friends",
    description: "This is often the first port of call for many small businesses seeking investment. Family and friends who believe in your business idea and trust your capabilities may be willing to provide financial support. This type of investment can be informal and flexible, with terms negotiated directly between the parties involved.",
    details: "",
    icon: Users,
    color: "bg-primary-orange",
    bgColor: "bg-primary-orange/5",
    borderColor: "border-primary-orange/20",
    textColor: "text-primary-orange"
  },
  {
    title: "Chamas & Community Savings Groups",
    description: "Chamas and Community Savings Groups offer a readily available and accessible financial resource for small business owners. The shared fund is used to provide loans or financial assistance to members, often with flexible terms and conditions compared to formal institutions. This flexibility makes them a good option for those with limited credit history. ",
    details: "",
    icon: PiggyBank,
    color: "bg-teal",
    bgColor: "bg-teal/5",
    borderColor: "border-teal/20",
    textColor: "text-teal"
  },
  {
    title: "Microfinance Institutions (MFIs)",
    description: " MFIs specialize in microloans, which are small loans specifically designed to boost your small business. They also offer financial literacy programs and training sessions to help you manage your money and grow your business. Many MFIs are all about community development and social empowerment, making them attractive to investors who want to make a positive impact while earning a return.",
    details: "",
    icon: Building2,
    color: "bg-secondary-gold",
    bgColor: "bg-secondary-gold/5",
    borderColor: "border-secondary-gold/20",
    textColor: "text-secondary-gold"
  },
  {
    title: "Government Programs",
    description: " Government programs offer financial aid like grants, loans, and subsidies. Plus, they hook you up with resources and training to level up your business skills. These programs are especially helpful for marginalized groups like youth, women, and local fishing communities.",
    details: "",
    icon: Shield,
    color: "bg-program-green",
    bgColor: "bg-program-green/5",
    borderColor: "border-program-green/20",
    textColor: "text-program-green"
  },
  {
    title: "NGOs & Development Partners",
    description: " NGOs and Development Partners are organisations that are all about helping the community. They're super into supporting things like sustainable fishing practices, women's groups, fish farming, and youth-led businesses. The best part is, they often give out grants, which is basically free money that you don't have to pay back. ",
    details: "",
    icon: Heart,
    color: "bg-accent",
    bgColor: "bg-accent/5",
    borderColor: "border-accent/20",
    textColor: "text-accent"
  },
  {
    title: "Angel Investors",
    description: " Angel Investors are individuals with a high net worth who provide financial backing to small startups and early-stage businesses, typically in exchange for ownership equity or convertible debt. They are considered high-risk investors as they invest in ventures that may not have a proven track record.",
    details: "",
    icon: TrendingUp,
    color: "bg-yellow",
    bgColor: "bg-yellow/5",
    borderColor: "border-yellow/20",
    textColor: "text-yellow"
  }
];

const InvestorCard = ({ investor, index }: { investor: typeof investorTypes[0]; index: number }) => {
  const IconComponent = investor.icon;
  
  return (
    <div 
      className={`
        group relative overflow-hidden rounded-2xl ${investor.bgColor} ${investor.borderColor}
        border-2 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]
        hover:shadow-xl hover:shadow-black/10 animate-slide-up bg-white/50
      `}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-8">
        <div className="flex items-start gap-6 mb-6">
          <div className={`
            flex-shrink-0 p-4 rounded-2xl ${investor.color}
            shadow-lg group-hover:shadow-xl transition-all duration-300
            group-hover:scale-110 animate-float
          `}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          
          <div className="flex-1">
            <h3 className={`text-2xl font-bold text-dark-grey mb-3 group-hover:${investor.textColor} transition-colors duration-300`}>
              {investor.title}
            </h3>
            <p className="text-dark-grey/80 leading-relaxed">
              {investor.description}
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-dark-grey/70 leading-relaxed">
            {investor.details}
          </p>
        </div>
        
        {/* <div className="flex items-center justify-between">
          <div className={`flex items-center gap-2 ${investor.textColor} font-semibold group-hover:gap-4 transition-all duration-300`}>
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-program-green" />
            <span className="text-sm text-dark-grey/60">Perfect Match</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const InvestorTypesSection = () => {
  return (
    <section className="py-20 bg-light-grey/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-primary-orange rounded-2xl shadow-lg animate-bounce-in">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-dark-grey animate-fade-in">
              Types of <span className="text-primary-orange">Investors</span>
            </h2>
          </div>
          
          <p className="text-xl text-dark-grey/80 max-w-3xl mx-auto leading-relaxed mb-12 animate-slide-up">
            Discover the perfect funding partner for your business journey. From family support to angel investors, 
            each type offers unique advantages to help your venture thrive.
          </p>
          
          <div className="flex items-center justify-center gap-8 animate-fade-in">
            <div className="flex items-center gap-2">
              <Handshake className="w-5 h-5 text-primary-orange" />
              <span className="text-dark-grey/70">Trusted Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-program-green" />
              <span className="text-dark-grey/70">Perfect Match</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-teal" />
              <span className="text-dark-grey/70">Growth Focused</span>
            </div>
          </div>
        </div>
        
        {/* Investor Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {investorTypes.map((investor, index) => (
            <InvestorCard key={investor.title} investor={investor} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-8 shadow-xl border border-primary-orange/10">
            <div className="p-3 bg-primary-orange rounded-xl">
              <Handshake className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-dark-grey mb-2">Ready to Connect?</h3>
              <p className="text-dark-grey/70">Find the perfect investor match for your business needs.</p>
            </div>
            
            <button className="bg-primary-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-orange/90 transition-all duration-300 hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorTypesSection;