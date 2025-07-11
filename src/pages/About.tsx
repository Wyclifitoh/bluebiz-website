import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Handshake,
  Award,
  Globe,
  TrendingUp,
  Sparkles,
  Camera,
  MapPin,
  Waves,
  Briefcase,
  GraduationCap,
  DollarSign,
  Network,
  ChevronRight,
  ChevronLeft,
  Play
} from "lucide-react";
import GoogleMapsHeatmap from '../components/GoogleMapsHeatmap';

const pillars = [
  {
    title: "Skills Development",
    description: `The Skills Development pillar aims to empower young entrepreneurs in Kenya's coastal communities by increasing their business acumen and technical skills relevant to the Blue Economy. It targets training in several areas: business management, finance, marketing, and value addition.  <br> <br>  Main events include workshops and in-person and digital training, which provide participants with basic skills for establishing and developing their enterprises. The initiative also covers enhancing individual potential, sustainable usage of ocean resources, and creating economic opportunities for young people.`,
    image: "/images/pillars/skills.jpg",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    step: 1,
  },
  {
    title: "Access to Finances",
    description: `This pillar ensures improved financial inclusion among young entrepreneurs in Kenya's coastal communities. The objective is to offer them improved means to access financial services, including various loan products and grants required in initiating and scaling up enterprises within the Blue Economy bracket. <br> <br>  These activities focus on facilitating contact between young entrepreneurs and financial institutions, training in financial literacy and business management, and competitively applying for the Challenge Fund for innovative business ideas.`,
    image: "/images/pillars/finance.jpg",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    step: 2,
  },
  {
    title: "Access to Networks and Market Linkages",
    description: `This pillar focuses on creating opportunities for young entrepreneurs in coastal counties to access vital networks and markets. It aims to enhance the visibility and reach of the businesses of young entrepreneurs involved in the blue economy through partnerships and collaborations. <br> <br> Key activities that will be pursued under this pillar are events such as networking, workshops, and trade fairs that bring entrepreneurs together with industry players and potential buyers. The program also aims to make provisions for mentorship matching and access to information on market situations that would aid young business owners in understanding how to pass through the market channels.`,
    image: "/images/pillars/networks.jpg",
    icon: Network,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    step: 3,
  },
  {
    title: "Leadership and Mentorship",
    description: `The Leadership and Mentorship aspect of the BlueBiz program has been structured to ensure that young entrepreneurs in Kenyan coastal communities develop leadership skills in all aspects, coupled with essential mentorship support. The main aim of this is to ensure that the youth are instilled with ownership and responsibility for their business ventures. <br> <br>  Major activities entail setting up a Youth Advisory Council, which addresses the voices of the young people to ensure that they are represented in the design of the programs and decision-making activities, hence encouraging active participation. <br> <br> The program enables young people to have opportunities for mentorship, where experienced business leaders guide them through certain difficulties and advise them on strategies that would help their enterprises.`,
    image: "/images/pillars/mentorship.jpg",
    icon: Users,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    step: 4,
  },
];

const partners = [
  {
    name: "Kwale County",
    image: "/images/partners/kwale-recycling.jpg",
    description: "Government Partner",
  },
  {
    name: "Coastal Development Authority",
    image: "/images/partners/partner-2.jpg",
    description: "Development Partner",
  },
  {
    name: "KWETU Training Centre",
    image: "/images/partners/partner-3.jpg",
    description: "Training Partner",
  },
  {
    name: "Lamu Youth Network",
    image: "/images/partners/partner-4.jpg",
    description: "Youth Partner",
  },
  {
    name: "COBEC",
    image: "/images/partners/partner-5.jpg",
    description: "Technology Partner",
  },
  {
    name: "Mastercard Foundation",
    image: "/images/partners/partner-6.png",
    description: "Mastercard Foundation",
  },
  {
    name: "Big Ship",
    image: "/images/partners/partner-7.jpg",
    description: "Big Ship",
  },
  {
    name: "Kipini",
    image: "/images/partners/partner-8.jpg",
    description: "Kipini",
  },
  {
    name: "Ustadi",
    image: "/images/partners/partner-9.jpg",
    description: "Ustadi",
  },
  {
    name: "Action Life",
    image: "/images/partners/partner-10.jpg",
    description: "Action Life",
  },
  {
    name: "Pamoja Pwani Network",
    image: "/images/partners/partner-11.jpg",
    description: "Pamoja Pwani Network",
  },
];

const galleryMoments = [
  {
    id: 1,
    title: "Skills Development Workshop",
    description: "Young entrepreneurs learning business management and financial literacy skills in our comprehensive training program.",
    image: "/images/about-bluebiz.JPG",
    category: "Training",
    date: "March 2024"
  }, 
  {
    id: 2,
    title: "Networking Event",
    description: "Entrepreneurs connecting with industry leaders and potential partners at our quarterly networking summit.",
    image: "/images/g2.jpg",
    category: "Networking",
    date: "February 2024"
  },
  {
    id: 3,
    title: "Mentorship Session",
    description: "One-on-one mentorship sessions connecting experienced business leaders with young coastal entrepreneurs.",
    image: "/images/g3.jpg",
    category: "Mentorship",
    date: "January 2024"
  },
  {
    id: 4,
    title: "Financial Literacy Training",
    description: "Comprehensive financial education program helping entrepreneurs understand banking, loans, and investment strategies.",
    image: "/images/g4.jpg",
    category: "Finance",
    date: "April 2024"
  },
  {
    id: 5,
    title: "Blue Economy Innovation Lab",
    description: "Hands-on innovation sessions where entrepreneurs develop sustainable solutions for coastal challenges.",
    image: "/images/g5.jpg",
    category: "Innovation",
    date: "May 2024"
  },
  {
    id: 6,
    title: "Youth Advisory Council Meeting",
    description: "Young leaders participating in program design and decision-making through our Youth Advisory Council.",
    image: "/images/g6.jpg",
    category: "Leadership",
    date: "March 2024"
  },
  {
    id: 7,
    title: "Market Linkage Fair",
    description: "Entrepreneurs showcasing their products and connecting with buyers at our coastal market linkage fair.",
    image: "/images/g7.jpg",
    category: "Markets",
    date: "June 2024"
  },
  {
    id: 8,
    title: "Digital Skills Workshop",
    description: "Technology training sessions helping entrepreneurs leverage digital tools for business growth.",
    image: "/images/g8.jpg",
    category: "Technology",
    date: "April 2024"
  },
  {
    id: 9,
    title: "Digital Skills Workshop",
    description: "Technology training sessions helping entrepreneurs leverage digital tools for business growth.",
    image: "/images/g9.jpg",
    category: "Technology",
    date: "April 2024"
  },
  {
    id: 10,
    title: "Digital Skills Workshop",
    description: "Technology training sessions helping entrepreneurs leverage digital tools for business growth.",
    image: "/images/g10.jpg",
    category: "Technology",
    date: "April 2024"
  },
  {
    id: 11,
    title: "Digital Skills Workshop",
    description: "Technology training sessions helping entrepreneurs leverage digital tools for business growth.",
    image: "/images/g11.jpg",
    category: "Technology",
    date: "April 2024"
  },
  {
    id: 12,
    title: "Skills Development Workshop",
    description: "Young entrepreneurs learning business management and financial literacy skills in our comprehensive training program.",
    image: "/images/g1.jpg",
    category: "Training",
    date: "March 2024"
  },
  {
    id: 13,
    title: "Skills Development Workshop",
    description: "Young entrepreneurs learning business management and financial literacy skills in our comprehensive training program.",
    image: "/images/CopyofDSC_0045.jpg",
    category: "Training",
    date: "March 2024"
  },
  {
    id: 14,
    title: "Skills Development Workshop",
    description: "Young entrepreneurs learning business management and financial literacy skills in our comprehensive training program.",
    image: "/images/DSC_4977.JPG",
    category: "Training",
    date: "March 2024"
  },
  {
    id: 15,
    title: "Skills Development Workshop",
    description: "Young entrepreneurs learning business management and financial literacy skills in our comprehensive training program.",
    image: "/images/DSC_5017.JPG",
    category: "Training",
    date: "March 2024"
  },
  {
    id: 16,
    title: "Skills Development Workshop",
    description: "Young entrepreneurs learning business management and financial literacy skills in our comprehensive training program.",
    image: "/images/Eco-tourism.jpeg",
    category: "Training",
    date: "March 2024"
  },
  {
    id: 17,
    title: "Skills Development Workshop",
    description: "Young entrepreneurs learning business management and financial literacy skills in our comprehensive training program.",
    image: "/images/Environment-Conservation.jpg",
    category: "Training",
    date: "March 2024"
  },
  {
    id: 18,
    title: "Skills Development Workshop",
    description: "Young entrepreneurs learning business management and financial literacy skills in our comprehensive training program.",
    image: "/images/IMG-202505014-WA0018.jpg",
    category: "Training",
    date: "March 2024"
  },
  {
    id: 19,
    title: "Skills Development Workshop",
    description: "Young entrepreneurs learning business management and financial literacy skills in our comprehensive training program.",
    image: "/images/IMG-202505014-WA0019.jpg",
    category: "Training",
    date: "March 2024"
  },
];

 const stats = [
    {
      number: "2,500+",
      label: "Youth Empowered",
      icon: <Users className="h-8 w-8" />,
    },
    {
      number: "500+",
      label: "Businesses Launched",
      icon: <TrendingUp className="h-8 w-8" />,
    },
    {
      number: "6",
      label: "Coastal Counties",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      number: "50+",
      label: "Training Programs",
      icon: <Award className="h-8 w-8" />,
    },
  ];

  const timeline = [
    {
      year: "2019",
      title: "Program Launch",
      description:
        "BlueBiz Kenya launched as a TechnoServe initiative with support from Mastercard Foundation, focusing on coastal youth entrepreneurship.",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Adapted to COVID-19 challenges by launching digital training programs and virtual mentorship sessions.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      year: "2021",
      title: "Expansion Phase",
      description:
        "Extended operations to all six coastal counties and launched the Challenge Fund for promising entrepreneurs.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      year: "2022",
      title: "Blue Economy Focus",
      description:
        "Specialized programs for blue economy sectors including fisheries, marine tourism, and renewable energy.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description:
        "Established innovation hubs in major coastal towns to foster technology adoption and creative solutions.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      year: "2024",
      title: "Sustainable Growth",
      description:
        "Achieved 500+ business launches with 85% survival rate, establishing BlueBiz as a leading youth development program.",
      icon: <Award className="h-6 w-6" />,
    },
  ];

const impactAreas = [
  {
    title: "Mombasa County",
    description: "Urban entrepreneurship and technology startups driving digital innovation in Kenya's coastal hub",
    businesses: 150,
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    focus: "Tech & Innovation",
    growth: "+25%"
  },
  {
    title: "Kilifi County",
    description: "Tourism and hospitality ventures creating sustainable coastal experiences and cultural preservation",
    businesses: 120,
    icon: MapPin,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    focus: "Tourism & Culture",
    growth: "+18%"
  },
  {
    title: "Kwale County",
    description: "Agriculture and fisheries development promoting food security and sustainable marine practices",
    businesses: 95,
    icon: Waves,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    focus: "Agri & Marine",
    growth: "+22%"
  },
  {
    title: "Lamu County",
    description: "Cultural tourism and traditional crafts preserving heritage while creating economic opportunities",
    businesses: 80,
    icon: Heart,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    focus: "Heritage & Crafts",
    growth: "+15%"
  },
  {
    title: "Taita-Taveta County",
    description: "Eco-tourism and conservation initiatives balancing environmental protection with economic growth",
    businesses: 35,
    icon: Globe,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    focus: "Eco-Tourism",
    growth: "+30%"
  },
  {
    title: "Tana River County",
    description: "Renewable energy and sustainable agriculture projects powering rural development and innovation",
    businesses: 20,
    icon: Lightbulb,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    focus: "Clean Energy",
    growth: "+40%"
  },
];



const About = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMoment, setSelectedMoment] = useState(galleryMoments[0]);
  const [isImageLoading, setIsImageLoading] = useState(false); 
  const [hoveredCounty, setHoveredCounty] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

    const handleMomentSelect = (moment: typeof galleryMoments[0]) => {
    if (moment.id !== selectedMoment.id) {
      setIsImageLoading(true);
      setTimeout(() => {
        setSelectedMoment(moment);
        setIsImageLoading(false);
      }, 300);
    }
  };

  const handlePrevMoment = () => {
    const currentIndex = galleryMoments.findIndex(m => m.id === selectedMoment.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryMoments.length - 1;
    handleMomentSelect(galleryMoments[prevIndex]);
  };

  const handleNextMoment = () => {
    const currentIndex = galleryMoments.findIndex(m => m.id === selectedMoment.id);
    const nextIndex = currentIndex < galleryMoments.length - 1 ? currentIndex + 1 : 0;
    handleMomentSelect(galleryMoments[nextIndex]);
  };


 

  return (
    <div className="pt-20">
      {/* Modern Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange via-secondary-gold to-yellow">
          <div className="absolute inset-0 bg-[url('/images/about-bluebiz.JPG')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-grey/50 to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float"></div>
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-teal/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-program-green/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-green/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            {/* <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 mr-2 text-yellow" />
              TechnoServe × Mastercard Foundation
            </div> */}

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-yellow to-green bg-clip-text text-transparent">
                BlueBiz
              </span>{" "}
              Kenya
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Empowering coastal youth to build thriving businesses through
              comprehensive support, skills training, and access to
              opportunities in Kenya's blue economy.
            </p>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pb-16">
              {stats.slice(0, 4).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
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

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/20 to-secondary-gold/20 blur-3xl pointer-events-none"></div>
              <img
                src="/images/about-bluebiz.JPG"
                alt="Young entrepreneurs working together"
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4 mr-2" />
                Who We Are
              </div>
              <h2 className="text-4xl font-bold text-dark-grey mb-6">
                BlueBiz Overview
              </h2>
              <p className="text-lg text-dark-grey/70 mb-8">
                BlueBiz implemented by TechnoServe in partnership with the
                Mastercard Foundation, is designed to support micro, small, and
                medium-sized enterprises (MSMEs) in the Blue Economy sector
                across five coastal counties in Kenya. <br />
                <br /> It aims to build resilience for the future by focusing on
                Mombasa, Kilifi, Lamu, Tana River, and Kwale counties.
              </p>
              <div className="relative z-20 space-y-4">
                <Link
                  to="/team"
                  className="inline-flex items-center px-6 py-3 bg-primary-orange text-white font-semibold rounded-xl hover:bg-secondary-gold transition-all duration-300 transform hover:scale-105 shadow-xl group"
                >
                  <span>Meet The Team</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <div className="text-center pt-16 pb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
            <Lightbulb className="w-4 h-4 mr-2" />
            Our Foundation
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            The BlueBiz{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Pillars
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Our comprehensive approach is built on four foundational pillars
            that ensure holistic support for every entrepreneur.
          </p>
        </div>

        {/* Progress Indicator */}
        {/* <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex justify-center items-center space-x-4 mb-8">
          {pillars.map((_, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  index <= activeStep
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-110'
                    : 'bg-white text-slate-400 border-2 border-slate-200'
                }`}
                onClick={() => handleStepClick(index)}
              >
                {index < activeStep ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span className="font-bold">{index + 1}</span>
                )}
              </div>
              {index < pillars.length - 1 && (
                <div className={`w-16 h-1 mx-2 rounded-full transition-all duration-500 ${
                  index < activeStep ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-slate-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div> */}

        {/* Pillars Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="relative">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              const isUpcoming = index > activeStep;

              return (
                <div
                  key={index}
                  className={`relative mb-16 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Step Connection Line */}
                  {index < pillars.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-slate-200 to-slate-300 hidden lg:block" />
                  )}

                  {/* Pillar Card */}
                  <div
                    className={`relative bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl ${
                      isActive ? "ring-4 ring-blue-500/20 scale-105" : ""
                    } ${isCompleted ? "border-2 border-green-200" : ""}`}
                    onClick={() => handleStepClick(index)}
                  >
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        pillar.color
                      } opacity-0 transition-opacity duration-300 ${
                        isActive ? "opacity-5" : ""
                      }`}
                    />

                    <div className="relative z-10 p-8 lg:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Content */}
                        <div
                          className={`${
                            index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                          }`}
                        >
                          <div className="flex items-center mb-6">
                            <div
                              className={`p-4 rounded-2xl bg-gradient-to-r ${pillar.color} text-white shadow-lg mr-4`}
                            >
                              <Icon className="w-8 h-8" />
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm font-bold text-slate-700 mr-2">
                                PILLAR {pillar.step}
                              </span>
                              <ArrowRight className="w-4 h-4 text-slate-400" />
                            </div>
                          </div>

                          <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                            {pillar.title}
                          </h3>

                          <div
                            className="text-lg text-slate-600 leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: pillar.description,
                            }}
                          />
                        </div>

                        {/* Image */}
                        <div
                          className={`${
                            index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                          }`}
                        >
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                            <img
                              src={pillar.image}
                              alt={pillar.title}
                              className="relative rounded-2xl w-full h-[300px] lg:h-[400px] object-cover shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-3xl transition-all duration-300 ${
                        isActive
                          ? "shadow-2xl shadow-blue-500/10"
                          : "shadow-none"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BlueBiz Moments Gallery */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-grey mb-4">Counties We Serve</h2>
            <p className="text-lg text-dark-grey/70">Tailored support for each county's unique opportunities and challenges, creating sustainable economic growth across Kenya's coastal region</p>
          </div>
          <GoogleMapsHeatmap />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal to-pink-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <Camera className="w-4 h-4 mr-2" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Walk through <span className="text-transparent bg-clip-text bg-teal to-pink-600">BlueBiz Moments</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the inspiring stories and transformative moments from our programs across Kenya's coastal communities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Image Display */}
            <div className="lg:col-span-2">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group">
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevMoment}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:opacity-100 opacity-0"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-700" />
                </button>
                <button
                  onClick={handleNextMoment}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:opacity-100 opacity-0"
                >
                  <ChevronRight className="w-6 h-6 text-slate-700" />
                </button>

                {/* Main Image */}
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <div className={`absolute inset-0 bg-slate-200 animate-pulse transition-opacity duration-300 ${
                    isImageLoading ? 'opacity-100' : 'opacity-0'
                  }`} />
                  <img
                    src={selectedMoment.image}
                    alt={selectedMoment.title}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                      isImageLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={() => setIsImageLoading(false)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Play Button Overlay */}
                  {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                      <Play className="w-12 h-12 text-white ml-1" />
                    </div>
                  </div> */}
                </div>

                {/* Image Info Overlay */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center mb-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mr-3">
                      {selectedMoment.category}
                    </span>
                    <span className="text-sm opacity-80">{selectedMoment.date}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3">{selectedMoment.title}</h3>
                  <p className="text-lg opacity-90 leading-relaxed">{selectedMoment.description}</p>
                </div> */}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Program Highlights</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 max-h-[500px] overflow-y-auto custom-scrollbar">
                {galleryMoments.map((moment) => (
                  <div
                    key={moment.id}
                    onClick={() => handleMomentSelect(moment)}
                    className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg group ${
                      selectedMoment.id === moment.id 
                        ? 'ring-4 ring-purple-500/30 shadow-xl scale-105' 
                        : 'hover:scale-105'
                    }`}
                  >
                    <div className="relative h-24 lg:h-32">
                      <img
                        src={moment.image}
                        alt={moment.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Selection Indicator */}
                      {selectedMoment.id === moment.id && (
                        <div className="absolute top-2 right-2 bg-purple-500 rounded-full p-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
{/*                     
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <div className="flex items-center mb-1">
                        <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mr-2">
                          {moment.category}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm leading-tight">{moment.title}</h4>
                    </div> */}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="text-slate-600 font-medium text-sm">Training Sessions</div>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
              <div className="text-slate-600 font-medium text-sm">Networking Events</div>
            </div>
            <div className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="text-3xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-slate-600 font-medium text-sm">Mentorship Hours</div>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">80+</div>
              <div className="text-slate-600 font-medium text-sm">Success Stories</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-100 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <Handshake className="w-4 h-4 mr-2" />
              Strategic Partnership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Partners
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Working together to create lasting impact across coastal Kenya
            </p>
          </div>

          {/* Auto-sliding Partners Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm p-8 shadow-xl">
            <div className="flex animate-slide-left">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-40 mx-4 group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                    {/* Partner Image */}
                    <div className="relative h-24 overflow-hidden">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-contain bg-white p-2 transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Partner Info */}
                    <div className="p-3">
                      {/* <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 text-center">
                        {partner.name}
                      </h3>
                      <p className="text-slate-600 text-xs text-center">
                        {partner.description}
                      </p> */}

                      {/* Hover Indicator */}
                      <div className="mt-2 h-0.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500 w-0 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-40 mx-4 group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                    {/* Partner Image */}
                    <div className="relative h-24 overflow-hidden">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-contain bg-white p-2 transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Partner Info */}
                    <div className="p-3">
                      <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300 text-center">
                        {partner.name}
                      </h3>
                      <p className="text-slate-600 text-xs text-center">
                        {partner.description}
                      </p>

                      {/* Hover Indicator */}
                      <div className="mt-2 h-0.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500 w-0 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                7+
              </div>
              <div className="text-slate-600 font-medium">
                Strategic Partners
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-3" />
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl font-bold text-emerald-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-slate-600 font-medium">
                Collaborative Projects
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mt-3" />
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl font-bold text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                1000+
              </div>
              <div className="text-slate-600 font-medium">
                Entrepreneurs Supported
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-accent via-primary-orange to-secondary-gold text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-primary-orange/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join the BlueBiz Kenya community and transform your entrepreneurial
            dreams into reality with our comprehensive support system.
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

      <style>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide-left {
          animation: slide-left 30s linear infinite;
        }
        
        .animate-slide-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default About;
