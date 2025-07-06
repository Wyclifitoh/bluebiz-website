import React, { useState } from 'react';
import { 
  BookOpen, 
  Download, 
  FileText, 
  Video, 
  Users, 
  Target, 
  Search,
  Filter,
  ExternalLink,
  Clock,
  Star,
  Calendar,
  Play,
  Sparkles,
  Award,
  Globe,
  Headphones,
  X,
  CheckCircle,
  TrendingUp,
  Rocket,
  BarChart3,
  GraduationCap,
  FileDown
} from 'lucide-react';

import SectionHeader from '../components/ui/SectionHeader';
import CallToAction from '../components/ui/CallToAction';
import VideoCard from '../components/ui/VideoCard';
import ModuleCard from '../components/ui/ModuleCard';
import DownloadCard from '../components/ui/DownloadCard';

 
const Guides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Content', count: 25 },
    { id: 'starting', name: 'Starting Business', count: 8 },
    { id: 'growing', name: 'Growing Business', count: 6 },
    { id: 'scaling', name: 'Scaling Business', count: 5 },
    { id: 'training', name: 'Training Modules', count: 6 }
  ];

  // Video Content
  const videoGuides = [
    {
      id: 1,
      title: "How To Register A Company In Kenya",
      description: "Hey Oceanpreneur! Let's get your dream business sailing smoothly through Kenya's registration process. Start by choosing a catchy, available name (check on eCitizen) that reflects your marine mission.",
      videoId: "rYpOYOw1pOc",
      thumbnail: "https://img.youtube.com/vi/rYpOYOw1pOc/maxresdefault.jpg",
      duration: "15:30",
      category: "starting",
      level: "Beginner",
      rating: 4.8,
      viewCount: 12500,
      chapters: [
        "Choosing Your Business Name",
        "Business Structure Selection", 
        "eCitizen Registration Process",
        "Special Blue Economy Licenses",
        "Opening Business Bank Account"
      ]
    },
    {
      id: 2,
      title: "Discover the Right Customers for Your Online Business",
      description: "Finding Your Perfect Customers in Kenya's Blue Economy. As a Blue Economy entrepreneur, your success starts with knowing exactly who needs your product or service.",
      videoId: "Lq2BNvjWzgA",
      thumbnail: "https://img.youtube.com/vi/Lq2BNvjWzgA/maxresdefault.jpg",
      duration: "22:45",
      category: "growing",
      level: "Intermediate",
      rating: 4.9,
      viewCount: 8900,
      chapters: [
        "Identifying Your Perfect Customer",
        "Market Research Techniques",
        "Finding Customers Online & Offline",
        "Building Customer Relationships",
        "Using Data to Understand Demand"
      ]
    }
  ];

  // Training Modules
  const trainingModules = [
    {
      id: 1,
      title: "Introduction to TechnoServe and the BlueBiz Program",
      description: "Complete introduction to the BlueBiz program and TechnoServe's mission in supporting coastal entrepreneurs.",
      downloadUrl: "https://img1.wsimg.com/blobby/go/cb352b53-95ef-4471-8478-4e6f1dbaa243/downloads/e7b94f63-58a7-4ec9-bb08-b239e8c94233/Module%200_%20Introduction%20to%20TechnoServe%20and%20the.docx?ver=1747830947847",
      format: "DOCX",
      fileSize: "2.1 MB",
      language: "English",
      category: "training",
      level: "Beginner",
      rating: 4.7,
      downloadCount: 3200
    },
    {
      id: 2,
      title: "Unlock Your Potential by Building Soft Skills",
      description: "Develop essential soft skills including communication, leadership, and problem-solving for business success.",
      downloadUrl: "https://img1.wsimg.com/blobby/go/cb352b53-95ef-4471-8478-4e6f1dbaa243/downloads/9f8c5bed-1b93-4035-b3da-494335a727f4/ENG%20-%20Module%201_%20Unlock%20your%20potential%20by%20buil.docx?ver=1747830947847",
      format: "DOCX",
      fileSize: "1.8 MB",
      language: "English",
      category: "training",
      level: "Beginner",
      rating: 4.6,
      downloadCount: 2800
    },
    {
      id: 3,
      title: "Introduction to Blue Economy",
      description: "Comprehensive guide to understanding the Blue Economy and opportunities in coastal Kenya.",
      downloadUrl: "https://img1.wsimg.com/blobby/go/cb352b53-95ef-4471-8478-4e6f1dbaa243/downloads/7ac30d0c-d17e-4855-abda-fc8af45c7616/ENG%20-%20Module%202%20-%20Introduction%20to%20Blue%20Economy.docx?ver=1747830947847",
      format: "DOCX",
      fileSize: "2.5 MB",
      language: "English",
      category: "training",
      level: "Intermediate",
      rating: 4.9,
      downloadCount: 4100
    },
    {
      id: 4,
      title: "Knowing My Business Model",
      description: "Learn to identify, develop, and refine your business model for sustainable growth.",
      downloadUrl: "https://img1.wsimg.com/blobby/go/cb352b53-95ef-4471-8478-4e6f1dbaa243/downloads/6a632052-50b5-4e7c-93ad-40770a68d1d7/ENG%20-%20Module%203%20-%20Knowing%20My%20Business%20Model.do.docx?ver=1747830947847",
      format: "DOCX",
      fileSize: "2.0 MB",
      language: "English",
      category: "training",
      level: "Intermediate",
      rating: 4.8,
      downloadCount: 3600
    },
    {
      id: 5,
      title: "Understanding Finances",
      description: "Master financial management, budgeting, and financial planning for your business.",
      downloadUrl: "https://img1.wsimg.com/blobby/go/cb352b53-95ef-4471-8478-4e6f1dbaa243/downloads/a7061410-70f6-4cf4-9d5a-48ef75c7e6b1/Module%204%20-%20Understanding%20Finances%20(Final%20Vers.docx?ver=1747830947847",
      format: "DOCX",
      fileSize: "2.3 MB",
      language: "English",
      category: "training",
      level: "Intermediate",
      rating: 4.7,
      downloadCount: 3900
    },
    {
      id: 6,
      title: "How Can I Sell More",
      description: "Advanced sales strategies and techniques to increase revenue and customer acquisition.",
      downloadUrl: "https://img1.wsimg.com/blobby/go/cb352b53-95ef-4471-8478-4e6f1dbaa243/downloads/482ea255-5cec-432c-81c5-506a8880d52a/Bluebiz%20Module%205%20-%20How%20Can%20I%20Sell%20More.docx?ver=1747830947847",
      format: "DOCX",
      fileSize: "1.9 MB",
      language: "English",
      category: "training",
      level: "Advanced",
      rating: 4.8,
      downloadCount: 2700
    }
  ];

  // Business Tools & Templates
  const businessTools = [
    {
      id: 1,
      title: "Daily Cash Flow Template",
      description: "Track your daily income and expenses with this comprehensive Excel template designed for Blue Economy businesses.",
      downloadUrl: "https://img1.wsimg.com/blobby/go/cb352b53-95ef-4471-8478-4e6f1dbaa243/downloads/4406a3b8-3a54-4170-82c7-783761d87685/Daily%20Cash%20Flow%20Template%20(1).xlsx?ver=1747830947827",
      format: "XLSX",
      fileSize: "156 KB",
      category: "scaling",
      type: "template",
      level: "Beginner",
      rating: 4.6,
      downloadCount: 5200
    },
    {
      id: 2,
      title: "Business Growth Plan Template",
      description: "Strategic planning template to help you map out your business growth journey with actionable steps.",
      downloadUrl: "https://img1.wsimg.com/blobby/go/cb352b53-95ef-4471-8478-4e6f1dbaa243/downloads/f669a9d4-6d98-4ba3-b8e4-e6883c22cfc1/Simple_Business_Growth_Plan_Bahari_Bites.docx?ver=1747830947827",
      format: "DOCX",
      fileSize: "890 KB",
      category: "scaling",
      type: "template",
      level: "Intermediate",
      rating: 4.7,
      downloadCount: 3800
    },
    {
      id: 3,
      title: "BlueBiz Participants Workbook",
      description: "Complete workbook with exercises, worksheets, and practical activities for BlueBiz program participants.",
      downloadUrl: "https://img1.wsimg.com/blobby/go/cb352b53-95ef-4471-8478-4e6f1dbaa243/downloads/92a254e6-52b8-4faa-bc95-1debf0be633e/BlueBiz%20Participants%20Workbook.docx?ver=1747830947847",
      format: "DOCX",
      fileSize: "3.2 MB",
      category: "training",
      type: "workbook",
      level: "All Levels",
      rating: 4.9,
      downloadCount: 4600
    }
  ];

  const openVideoModal = (video: any) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-program-green/10 text-program-green';
      case 'Intermediate': return 'bg-secondary-gold/10 text-secondary-gold';
      case 'Advanced': return 'bg-accent/10 text-accent';
      default: return 'bg-teal/10 text-teal';
    }
  };

  const filteredContent = [...videoGuides, ...trainingModules, ...businessTools].filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });


return (
    <div className="pt-20">
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-light-grey">
              <h3 className="text-xl font-bold text-dark-grey">{selectedVideo.title}</h3>
              <button
                onClick={closeVideoModal}
                className="p-2 hover:bg-light-grey rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-dark-grey" />
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <p className="text-dark-grey/70 mb-4">{selectedVideo.description}</p>
              {selectedVideo.chapters && (
                <div>
                  <h4 className="font-semibold text-dark-grey mb-2">Video Chapters:</h4>
                  <ul className="space-y-1">
                    {selectedVideo.chapters.map((chapter: string, index: number) => (
                      <li key={index} className="text-sm text-dark-grey/70 flex items-center">
                        <Play className="w-3 h-3 mr-2 text-accent" />
                        {chapter}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modern Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange via-secondary-gold to-yellow">
          <div className="absolute inset-0 bg-[url('/images/g11.jpg')] bg-cover bg-center opacity-20"></div>
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
              <GraduationCap className="w-4 h-4 mr-2 text-teal" />
              Complete Learning Library
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Training <span className="bg-gradient-to-r from-teal to-program-green bg-clip-text text-transparent">Guides</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Master your entrepreneurial journey with our comprehensive collection of video tutorials, training modules, and business tools designed for coastal Kenya's Blue Economy.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "25+", label: "Resources" },
                { number: "50K+", label: "Downloads" },
                { number: "4.8", label: "Avg Rating" },
                { number: "Free", label: "Access" }
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

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b border-light-grey/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-grey/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search training content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-light-grey rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 bg-white"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-dark-grey/50" />
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
        </div>
      </section>

      {/* Video Guides Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ icon: Video, text: "Video Learning" }}
            title="Video Training Guides"
            subtitle="Step-by-step video tutorials covering everything from business registration to customer acquisition in Kenya's Blue Economy."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videoGuides.map((video, index) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                index={index} 
                onPlay={() => openVideoModal(video)}
                getLevelColor={getLevelColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules Section */}
      <section className="py-20 bg-light-grey/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ icon: BookOpen, text: "Training Modules" }}
            title="Comprehensive Training Modules"
            subtitle="Download detailed training materials covering essential business skills, available in both English and Swahili."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingModules.map((module, index) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                index={index}
                getLevelColor={getLevelColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Business Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ icon: FileDown, text: "Business Tools" }}
            title="Essential Business Tools & Templates"
            subtitle="Ready-to-use templates and tools to help you plan, track, and grow your business effectively."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessTools.map((tool, index) => (
              <DownloadCard 
                key={tool.id} 
                item={tool} 
                index={index}
                getLevelColor={getLevelColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ icon: TrendingUp, text: "Learning Path" }}
            title="Scaling a Business"
            subtitle="Follow our structured learning path designed specifically for Blue Economy entrepreneurs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                
              {
                step: "01", 
                title: "Growth Plan",
                description: "Do you have future plans to grow your business but lack the right prompts to do so? Below is a workbook that will enable you critically think through the process of growing your business ",
                icon: TrendingUp,
                color: "teal"
              },
              {
                step: "02",
                title: "Investor Plan",
                description: "Have you applied for the challenge fund? If you are a BlueBiz participant and your business is registered, you can competitively apply for a challenge fund by following the link below. ",
                icon: BarChart3,
                color: "program-green"
              },
              {
                step: "03",
                title: "Record keeping",
                description: "Do you keep records for your business, and do you use them to calculate profits and make decisions? Below is a template that will help you track profit or loss for your business",
                icon: Award,
                color: "secondary-gold"
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-light-grey/50 group">
                  <div className={`w-12 h-12 bg-${phase.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className={`text-3xl font-bold text-${phase.color} mb-2`}>{phase.step}</div>
                  <h3 className="text-xl font-bold text-dark-grey mb-3">{phase.title}</h3>
                  <p className="text-dark-grey/70 text-sm leading-relaxed">{phase.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-light-grey"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        badge={{ icon: Sparkles, text: "Ready to Start Learning?" }}
        title="Transform Your Business Knowledge"
        subtitle="Access our complete training library and accelerate your entrepreneurial journey with expert-designed content and hands-on support."
        buttons={[
          {
            text: "Join BlueBiz Kenya",
            href: "/join",
            icon: Users,
            variant: "primary"
          },
          {
            text: "Get Personal Training",
            href: "/contact",
            icon: Award,
            variant: "secondary"
          }
        ]}
      />
    </div>
  );
};

export default Guides;