import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Loader, Users, Target, BookOpen, TrendingUp, Sparkles, Award, Shield } from 'lucide-react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    county: '',
    businessStage: '',
    businessType: '',
    interests: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const counties = [
    'Mombasa',
    'Kilifi',
    'Kwale',
    'Lamu',
    'Taita-Taveta',
    'Tana River'
  ];

  const businessStages = [
    'Idea Stage - I have a business idea',
    'Planning Stage - Working on business plan',
    'Early Stage - Just started (0-2 years)',
    'Growth Stage - Established business (2+ years)',
    'Scaling Stage - Looking to expand'
  ];

  const businessTypes = [
    'Agriculture & Fisheries',
    'Tourism & Hospitality',
    'Manufacturing & Crafts',
    'Technology & Digital Services',
    'Trade & Commerce',
    'Transport & Logistics',
    'Food & Beverage',
    'Renewable Energy',
    'Other'
  ];

  const interestOptions = [
    'Business Development',
    'Financial Literacy',
    'Skills Training',
    'Access to Finance',
    'Mentorship',
    'Networking',
    'Digital Marketing',
    'Export Opportunities'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:3001/api/join', {
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
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          county: '',
          businessStage: '',
          businessType: '',
          interests: []
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
              Start Your Journey Today
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Join <span className="bg-gradient-to-r from-yellow to-green bg-clip-text text-transparent">BlueBiz</span> Kenya
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards transforming your entrepreneurial dreams into reality. Join our community of successful coastal entrepreneurs.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "2,500+", label: "Members" },
                { number: "500+", label: "Businesses" },
                { number: "4", label: "Counties" },
                { number: "Free", label: "To Join" }
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4 mr-2" />
              Member Benefits
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Why Join BlueBiz Kenya?</h2>
            <p className="text-xl text-dark-grey/70">Unlock exclusive benefits and opportunities for your business growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Mentorship",
                description: "Get guidance from successful entrepreneurs and industry experts",
                color: "from-teal to-program-green"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Business Support",
                description: "Comprehensive business development and planning assistance",
                color: "from-primary-orange to-secondary-gold"
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Skills Training",
                description: "Access to workshops, courses, and certification programs",
                color: "from-green to-program-green"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Funding Access",
                description: "Connect with investors, lenders, and grant opportunities",
                color: "from-accent to-yellow"
              }
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-light-grey/50">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">{benefit.title}</h3>
                  <p className="text-dark-grey/70 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Secure Registration
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Complete Your Registration</h2>
            <p className="text-lg text-dark-grey/70">Fill out the form below to join our community of entrepreneurs</p>
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

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-light-grey to-white rounded-2xl p-8 space-y-8 border border-light-grey/50">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-dark-grey mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary-orange/10 rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-primary-orange" />
                </div>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-dark-grey mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-dark-grey mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
                    placeholder="Enter your last name"
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
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-grey mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="county" className="block text-sm font-medium text-dark-grey mb-2">
                County *
              </label>
              <select
                id="county"
                name="county"
                required
                value={formData.county}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
              >
                <option value="">Select your county</option>
                {counties.map(county => (
                  <option key={county} value={county}>{county}</option>
                ))}
              </select>
            </div>

            {/* Business Information */}
            <div>
              <h3 className="text-xl font-semibold text-dark-grey mb-6 flex items-center">
                <div className="w-8 h-8 bg-green/10 rounded-lg flex items-center justify-center mr-3">
                  <Target className="w-4 h-4 text-green" />
                </div>
                Business Information
              </h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="businessStage" className="block text-sm font-medium text-dark-grey mb-2">
                    Business Stage *
                  </label>
                  <select
                    id="businessStage"
                    name="businessStage"
                    required
                    value={formData.businessStage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
                  >
                    <option value="">Select your business stage</option>
                    {businessStages.map(stage => (
                      <option key={stage} value={stage}>{stage}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-dark-grey mb-2">
                    Business Type/Industry
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
                  >
                    <option value="">Select your business type</option>
                    {businessTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-xl font-semibold text-dark-grey mb-4 flex items-center">
                <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center mr-3">
                  <BookOpen className="w-4 h-4 text-teal" />
                </div>
                Areas of Interest
              </h3>
              <p className="text-sm text-dark-grey/70 mb-6">Select all that apply to you:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interestOptions.map(interest => (
                  <label key={interest} className="flex items-center p-3 bg-white rounded-xl border border-light-grey hover:border-primary-orange transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="mr-3 h-4 w-4 text-primary-orange focus:ring-primary-orange border-light-grey rounded"
                    />
                    <span className="text-sm text-dark-grey font-medium">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-primary-orange text-white py-4 px-6 rounded-xl font-semibold hover:from-primary-orange hover:to-secondary-gold focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-2" />
                    Join BlueBiz Kenya
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-dark-grey/60 text-center leading-relaxed">
              By submitting this form, you agree to receive communications from BlueBiz Kenya about programs, events, and opportunities. Your information is secure and will never be shared with third parties.
            </p>
          </form>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Next Steps
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">What Happens Next?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Application Review",
                description: "Our team will review your application within 48 hours and verify your information.",
                icon: <Shield className="h-6 w-6" />,
                color: "from-teal to-program-green"
              },
              {
                step: 2,
                title: "Welcome Call",
                description: "You'll receive a welcome call to discuss your goals and match you with appropriate programs.",
                icon: <Users className="h-6 w-6" />,
                color: "from-primary-orange to-secondary-gold"
              },
              {
                step: 3,
                title: "Start Your Journey",
                description: "Begin participating in workshops, mentorship sessions, and networking events immediately.",
                icon: <Sparkles className="h-6 w-6" />,
                color: "from-accent to-yellow"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {step.step}
                  </div>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">{step.title}</h3>
                <p className="text-dark-grey/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;