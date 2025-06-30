import React, { useState } from 'react';
import { 
  BookOpen, 
  Download, 
  Play, 
  Clock, 
  Users, 
  TrendingUp, 
  Target, 
  Search,
  Filter,
  ExternalLink,
  Star,
  Sparkles,
  Award,
  Globe,
  FileText,
  Video,
  CheckCircle,
  ArrowRight,
  X
} from 'lucide-react';

// Type definitions
interface BaseContent {
  id: number;
  title: string;
  description: string;
  category: string;
  type: string;
  rating: number;
  duration: string;
  level: string;
  featured?: boolean;
}

interface TrainingModule extends BaseContent {
  type: 'module';
  downloadCount: number;
  image: string;
  downloadUrl: string;
  modules: string[];
  fileSize: string;
  format: string;
}

interface VideoTraining extends BaseContent {
  type: 'video';
  viewCount: number;
  thumbnail: string;
  videoId: string;
  chapters: string[];
}

interface Guide extends BaseContent {
  type: 'guide';
  downloadCount: number;
  image: string;
  downloadUrl: string;
  fileSize: string;
  format: string;
}

type ContentItem = TrainingModule | VideoTraining | Guide;

interface Category {
  id: string;
  name: string;
  count: number;
}

interface ContentType {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const Guides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoTraining | null>(null);

  const categories: Category[] = [
    { id: 'all', name: 'All Content', count: 25 },
    { id: 'business-planning', name: 'Business Planning', count: 8 },
    { id: 'financial-literacy', name: 'Financial Literacy', count: 6 },
    { id: 'marketing', name: 'Marketing & Sales', count: 5 },
    { id: 'skills-training', name: 'Skills Training', count: 4 },
    { id: 'blue-economy', name: 'Blue Economy', count: 2 }
  ];

  const contentTypes: ContentType[] = [
    { id: 'all', name: 'All Types', icon: <Globe className="w-4 h-4" /> },
    { id: 'module', name: 'Training Modules', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'video', name: 'Video Training', icon: <Video className="w-4 h-4" /> },
    { id: 'guide', name: 'Guides', icon: <FileText className="w-4 h-4" /> }
  ];

  const trainingModules: TrainingModule[] = [
    {
      id: 1,
      title: "Business Plan Development Module",
      description: "Comprehensive training module covering all aspects of creating a professional business plan that attracts investors and guides business growth.",
      category: "business-planning",
      type: "module",
      downloadCount: 3247,
      rating: 4.9,
      duration: "2-3 hours",
      level: "Beginner",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      featured: true,
      downloadUrl: "#",
      modules: [
        "Executive Summary Writing",
        "Market Analysis & Research",
        "Financial Projections",
        "Marketing Strategy",
        "Operations Plan"
      ],
      fileSize: "2.5 MB",
      format: "PDF"
    },
    {
      id: 2,
      title: "Financial Management for Entrepreneurs",
      description: "Master essential financial management skills including budgeting, cash flow management, and financial planning for sustainable business growth.",
      category: "financial-literacy",
      type: "module",
      downloadCount: 2156,
      rating: 4.8,
      duration: "3-4 hours",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      featured: true,
      downloadUrl: "#",
      modules: [
        "Financial Planning Basics",
        "Cash Flow Management",
        "Budgeting & Forecasting",
        "Investment Planning",
        "Risk Management"
      ],
      fileSize: "3.1 MB",
      format: "PDF"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      description: "Complete digital marketing training covering social media marketing, content creation, SEO, and online advertising strategies for coastal businesses.",
      category: "marketing",
      type: "module",
      downloadCount: 2890,
      rating: 4.9,
      duration: "4-5 hours",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      featured: true,
      downloadUrl: "#",
      modules: [
        "Social Media Strategy",
        "Content Marketing",
        "Search Engine Optimization",
        "Online Advertising",
        "Analytics & Measurement"
      ],
      fileSize: "4.2 MB",
      format: "PDF"
    },
    {
      id: 4,
      title: "Blue Economy Opportunities",
      description: "Explore business opportunities in Kenya's blue economy including fisheries, marine tourism, renewable energy, and sustainable coastal development.",
      category: "blue-economy",
      type: "module",
      downloadCount: 1567,
      rating: 4.7,
      duration: "2-3 hours",
      level: "Advanced",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      downloadUrl: "#",
      modules: [
        "Understanding Blue Economy",
        "Fisheries & Aquaculture",
        "Marine Tourism",
        "Renewable Energy",
        "Sustainable Practices"
      ],
      fileSize: "2.8 MB",
      format: "PDF"
    },
    {
      id: 5,
      title: "Customer Service Excellence",
      description: "Build exceptional customer service skills that drive customer loyalty, repeat business, and positive word-of-mouth marketing.",
      category: "skills-training",
      type: "module",
      downloadCount: 1234,
      rating: 4.6,
      duration: "1-2 hours",
      level: "Beginner",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      downloadUrl: "#",
      modules: [
        "Customer Service Fundamentals",
        "Communication Skills",
        "Handling Complaints",
        "Building Relationships",
        "Service Recovery"
      ],
      fileSize: "1.9 MB",
      format: "PDF"
    },
    {
      id: 6,
      title: "Leadership & Team Management",
      description: "Develop essential leadership skills for managing teams, making decisions, and driving organizational growth in your business.",
      category: "skills-training",
      type: "module",
      downloadCount: 987,
      rating: 4.5,
      duration: "3-4 hours",
      level: "Advanced",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      downloadUrl: "#",
      modules: [
        "Leadership Fundamentals",
        "Team Building",
        "Decision Making",
        "Conflict Resolution",
        "Performance Management"
      ],
      fileSize: "3.5 MB",
      format: "PDF"
    }
  ];

  const videoTrainings: VideoTraining[] = [
    {
      id: 7,
      title: "How To Register A Company In Kenya",
      description: "Step-by-step video guide on registering a business in Kenya, covering legal requirements, documentation, and registration processes tailored for coastal entrepreneurs.",
      category: "business-planning",
      type: "video",
      viewCount: 15420,
      rating: 4.9,
      duration: "5 minutes",
      level: "Intermediate",
      thumbnail: "data:image/jpeg;base64,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",
      videoId: "cEr8XCnoSVY",
      featured: true,
      chapters: [
        "Understanding Business Structures",
        "Required Documents",
        "Filing Process",
        "Post-Registration Steps",
        "Common Mistakes to Avoid"
      ]
    },
    {
      id: 8,
      title: "Discover the right customers for your online business!",
      description: "Learn how to identify and target the right customers for your online business in coastal Kenya, with practical tips and strategies.",
      category: "financial-literacy",
      type: "video",
      viewCount: 12350,
      rating: 4.8,
      duration: "3 minutes",
      level: "Intermediate",
      thumbnail: "https://cdn.shopify.com/s/files/1/0070/7032/articles/how-to-attract-customers-to-online-store_09846b7d-957d-4d32-8505-4138a096c67c.png?v=1745525878",
      videoId: "Lq2BNvjWzgA",
      featured: true,
      chapters: [
        "Creating Budgets",
        "Cash Flow Forecasting",
        "Financial Statements",
        "Investment Planning",
        "Risk Assessment"
      ]
    },
    {
      id: 9,
      title: "Social Media Marketing for Coastal Businesses",
      description: "Master social media marketing with practical tips for Facebook, Instagram, WhatsApp Business, and other platforms popular in coastal Kenya.",
      category: "marketing",
      type: "video",
      viewCount: 18750,
      rating: 4.9,
      duration: "52 minutes",
      level: "Beginner",
      thumbnail: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      videoId: "dQw4w9WgXcQ",
      chapters: [
        "Platform Selection",
        "Content Creation",
        "Audience Engagement",
        "Advertising Basics",
        "Performance Tracking"
      ]
    },
    {
      id: 10,
      title: "Blue Economy Success Stories",
      description: "Inspiring video documentary featuring successful blue economy entrepreneurs from Kenya's coastal region sharing their journeys and lessons learned.",
      category: "blue-economy",
      type: "video",
      viewCount: 9870,
      rating: 4.7,
      duration: "28 minutes",
      level: "All Levels",
      thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      videoId: "dQw4w9WgXcQ",
      chapters: [
        "Fisheries Innovation",
        "Tourism Ventures",
        "Renewable Energy",
        "Sustainable Practices",
        "Lessons Learned"
      ]
    },
    {
      id: 11,
      title: "Customer Service Training Workshop",
      description: "Interactive video workshop on delivering exceptional customer service, featuring role-playing scenarios and practical exercises.",
      category: "skills-training",
      type: "video",
      viewCount: 7650,
      rating: 4.6,
      duration: "35 minutes",
      level: "Beginner",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      videoId: "dQw4w9WgXcQ",
      chapters: [
        "Service Standards",
        "Communication Techniques",
        "Problem Resolution",
        "Customer Retention",
        "Service Excellence"
      ]
    }
  ];

  const guides: Guide[] = [
    {
      id: 12,
      title: "Complete Entrepreneur's Handbook",
      description: "Comprehensive guide covering all aspects of entrepreneurship from ideation to scaling, specifically tailored for coastal Kenya's business environment.",
      category: "business-planning",
      type: "guide",
      downloadCount: 5420,
      rating: 4.9,
      duration: "60 min read",
      level: "All Levels",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      downloadUrl: "#",
      fileSize: "5.2 MB",
      format: "PDF"
    },
    {
      id: 13,
      title: "Access to Finance Guide",
      description: "Step-by-step guide to accessing various funding sources including banks, microfinance, investors, and government programs.",
      category: "financial-literacy",
      type: "guide",
      downloadCount: 3890,
      rating: 4.8,
      duration: "45 min read",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      downloadUrl: "#",
      fileSize: "3.8 MB",
      format: "PDF"
    }
  ];

  const allContent: ContentItem[] = [...trainingModules, ...videoTrainings, ...guides];

  const filteredContent = allContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredContent = allContent.filter(item => item.featured);

  const getLevelColor = (level: string): string => {
    switch (level) {
      case 'Beginner': return 'bg-green/10 text-green';
      case 'Intermediate': return 'bg-yellow/10 text-accent';
      case 'Advanced': return 'bg-accent/10 text-accent';
      case 'All Levels': return 'bg-teal/10 text-teal';
      default: return 'bg-light-grey text-dark-grey';
    }
  };

  const getTypeIcon = (type: string): React.ReactNode => {
    switch (type) {
      case 'module': return <BookOpen className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      case 'guide': return <FileText className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string): string => {
    switch (type) {
      case 'module': return 'bg-primary-orange/10 text-primary-orange';
      case 'video': return 'bg-accent/10 text-accent';
      case 'guide': return 'bg-teal/10 text-teal';
      default: return 'bg-light-grey text-dark-grey';
    }
  };

  const openVideoModal = (video: VideoTraining) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const getContentImage = (content: ContentItem): string => {
    if (content.type === 'video') {
      return (content as VideoTraining).thumbnail;
    }
    return (content as TrainingModule | Guide).image;
  };

  const getContentCount = (content: ContentItem): number => {
    if (content.type === 'video') {
      return (content as VideoTraining).viewCount;
    }
    return (content as TrainingModule | Guide).downloadCount;
  };

  const getContentCountLabel = (content: ContentItem): string => {
    return content.type === 'video' ? 'views' : 'downloads';
  };

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
                    {selectedVideo.chapters.map((chapter, index) => (
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
              <BookOpen className="w-4 h-4 mr-2 text-teal" />
              Training Modules & Video Content
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Training <span className="bg-gradient-to-r from-teal to-program-green bg-clip-text text-transparent">Guides</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Access comprehensive training modules, video tutorials, and downloadable guides designed to accelerate your entrepreneurial journey in coastal Kenya.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "25+", label: "Training Resources" },
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

        {/* Modern Wave Divider */}
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
            {/* Search */}
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

            {/* Category Filter */}
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

            {/* Type Filter */}
            <div className="flex space-x-2">
              {contentTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedType === type.id
                      ? 'bg-primary-orange text-white shadow-lg'
                      : 'bg-light-grey text-dark-grey hover:bg-primary-orange/10 hover:text-primary-orange'
                  }`}
                >
                  {type.icon}
                  <span className="ml-2 hidden sm:inline">{type.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Featured Training
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Most Popular Training Content</h2>
            <p className="text-xl text-dark-grey/70">Our top-rated training modules and video content</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={content.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-light-grey/50 overflow-hidden">
                  {/* Content Image/Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={getContentImage(content)} 
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/50 to-transparent"></div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-2 py-1 bg-white/90 rounded-full text-xs font-medium ${getTypeColor(content.type)}`}>
                        {getTypeIcon(content.type)}
                        <span className="ml-1 capitalize">{content.type}</span>
                      </span>
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 bg-yellow/90 text-dark-grey rounded-full text-xs font-medium">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>

                    {/* Play Button for Videos */}
                    {content.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button 
                          onClick={() => openVideoModal(content as VideoTraining)}
                          className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-primary-orange hover:bg-white transition-colors group-hover:scale-110"
                        >
                          <Play className="w-8 h-8 ml-1" />
                        </button>
                      </div>
                    )}

                    {/* Duration/Stats */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {content.duration}
                        </div>
                        <div className="flex items-center">
                          {content.type === 'video' ? (
                            <>
                              <Users className="w-4 h-4 mr-1" />
                              {getContentCount(content).toLocaleString()}
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4 mr-1" />
                              {getContentCount(content).toLocaleString()}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(content.level)}`}>
                        {content.level}
                      </span>
                      <div className="flex items-center text-yellow">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium text-dark-grey">{content.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-dark-grey/70 text-sm mb-4 leading-relaxed">{content.description}</p>

                    {/* Modules/Chapters Preview */}
                    {((content.type === 'module' && (content as TrainingModule).modules) || 
                      (content.type === 'video' && (content as VideoTraining).chapters)) && (
                      <div className="mb-4">
                        <div className="text-xs font-semibold text-dark-grey mb-2">
                          {content.type === 'video' ? 'Chapters:' : 'Modules:'}
                        </div>
                        <ul className="space-y-1">
                          {(content.type === 'module' 
                            ? (content as TrainingModule).modules 
                            : (content as VideoTraining).chapters
                          )?.slice(0, 3).map((item, itemIndex) => (
                            <li key={itemIndex} className="text-xs text-dark-grey/70 flex items-center">
                              <CheckCircle className="w-3 h-3 mr-2 text-green flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                          {(content.type === 'module' 
                            ? (content as TrainingModule).modules 
                            : (content as VideoTraining).chapters
                          )?.length > 3 && (
                            <li className="text-xs text-primary-orange">
                              +{(content.type === 'module' 
                                ? (content as TrainingModule).modules 
                                : (content as VideoTraining).chapters
                              ).length - 3} more
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      {content.type === 'video' ? (
                        <button 
                          onClick={() => openVideoModal(content as VideoTraining)}
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-accent text-white rounded-xl hover:bg-accent/90 transition-colors text-sm font-medium"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Watch Video
                        </button>
                      ) : (
                        <button className="flex-1 flex items-center justify-center px-4 py-2 bg-primary-orange text-white rounded-xl hover:bg-secondary-gold transition-colors text-sm font-medium">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </button>
                      )}
                      <button className="flex items-center justify-center px-4 py-2 bg-light-grey text-dark-grey rounded-xl hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>

                    {/* File Info for Downloadable Content */}
                    {content.type !== 'video' && (content as TrainingModule | Guide).fileSize && (
                      <div className="mt-3 pt-3 border-t border-light-grey flex items-center justify-between text-xs text-dark-grey/60">
                        <span>{(content as TrainingModule | Guide).format}</span>
                        <span>{(content as TrainingModule | Guide).fileSize}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Training Modules
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Downloadable Training Modules</h2>
            <p className="text-xl text-dark-grey/70">Comprehensive PDF modules for self-paced learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingModules.map((module, index) => (
              <div key={module.id} className="group">
                <div className="bg-gradient-to-br from-light-grey to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-light-grey/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-primary-orange/10 rounded-xl flex items-center justify-center text-primary-orange">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-dark-grey/60">Training Module</div>
                        <div className="text-xs text-dark-grey/60">{module.duration}</div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(module.level)}`}>
                      {module.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-dark-grey/70 text-sm mb-4 leading-relaxed">{module.description}</p>

                  {/* Module Contents */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-dark-grey mb-2">Module Contents:</div>
                    <ul className="space-y-1">
                      {module.modules.slice(0, 3).map((item, itemIndex) => (
                        <li key={itemIndex} className="text-xs text-dark-grey/70 flex items-center">
                          <div className="w-4 h-4 bg-green/10 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                            <span className="text-green text-xs font-bold">{itemIndex + 1}</span>
                          </div>
                          {item}
                        </li>
                      ))}
                      {module.modules.length > 3 && (
                        <li className="text-xs text-primary-orange ml-6">
                          +{module.modules.length - 3} more modules
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-yellow">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium text-dark-grey">{module.rating}</span>
                    </div>
                    <div className="flex items-center text-dark-grey/60 text-sm">
                      <Download className="w-4 h-4 mr-1" />
                      {module.downloadCount.toLocaleString()}
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center px-4 py-3 bg-primary-orange text-white rounded-xl hover:bg-secondary-gold transition-colors font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Download Module
                  </button>

                  <div className="mt-3 pt-3 border-t border-light-grey flex items-center justify-between text-xs text-dark-grey/60">
                    <span>{module.format}</span>
                    <span>{module.fileSize}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Training Section */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
              <Video className="w-4 h-4 mr-2" />
              Video Training
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Video Training Series</h2>
            <p className="text-xl text-dark-grey/70">Interactive video content with inline playback</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTrainings.map((video, index) => (
              <div key={video.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-light-grey/50 overflow-hidden">
                  {/* Video Thumbnail */}
                  <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => openVideoModal(video)}>
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/50 to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center text-accent hover:bg-white transition-colors group-hover:scale-110">
                        <Play className="w-10 h-10 ml-1" />
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-4 right-4 bg-dark-grey/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>

                    {/* View Count */}
                    <div className="absolute bottom-4 left-4 text-white text-sm">
                      <Users className="w-4 h-4 inline mr-1" />
                      {video.viewCount.toLocaleString()} views
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(video.level)}`}>
                        {video.level}
                      </span>
                      <div className="flex items-center text-yellow">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium text-dark-grey">{video.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-dark-grey/70 text-sm mb-4 leading-relaxed">{video.description}</p>

                    {/* Video Chapters */}
                    {video.chapters && (
                      <div className="mb-4">
                        <div className="text-xs font-semibold text-dark-grey mb-2">Video Chapters:</div>
                        <ul className="space-y-1">
                          {video.chapters.slice(0, 3).map((chapter, chapterIndex) => (
                            <li key={chapterIndex} className="text-xs text-dark-grey/70 flex items-center">
                              <Play className="w-3 h-3 mr-2 text-accent flex-shrink-0" />
                              {chapter}
                            </li>
                          ))}
                          {video.chapters.length > 3 && (
                            <li className="text-xs text-primary-orange ml-5">
                              +{video.chapters.length - 3} more chapters
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    <button 
                      onClick={() => openVideoModal(video)}
                      className="w-full flex items-center justify-center px-4 py-3 bg-accent text-white rounded-xl hover:bg-accent/90 transition-colors font-medium"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Content Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4 mr-2" />
              All Training Content
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Complete Training Library</h2>
            <p className="text-xl text-dark-grey/70">
              {filteredContent.length} resources found
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>

          {filteredContent.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-light-grey rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-dark-grey/50" />
              </div>
              <h3 className="text-xl font-semibold text-dark-grey mb-2">No content found</h3>
              <p className="text-dark-grey/70">Try adjusting your search terms or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.map((content, index) => (
                <div key={content.id} className="group">
                  <div className="bg-gradient-to-br from-light-grey to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-light-grey/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getTypeColor(content.type)}`}>
                          {getTypeIcon(content.type)}
                        </div>
                        <div>
                          <div className="text-xs text-dark-grey/60 capitalize">{content.type}</div>
                          <div className="text-xs text-dark-grey/60">{content.duration}</div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(content.level)}`}>
                        {content.level}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-dark-grey/70 text-sm mb-4 leading-relaxed">{content.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-yellow">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium text-dark-grey">{content.rating}</span>
                      </div>
                      <div className="flex items-center text-dark-grey/60 text-sm">
                        {content.type === 'video' ? (
                          <>
                            <Users className="w-4 h-4 mr-1" />
                            {getContentCount(content).toLocaleString()}
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-1" />
                            {getContentCount(content).toLocaleString()}
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      {content.type === 'video' ? (
                        <button 
                          onClick={() => openVideoModal(content as VideoTraining)}
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-accent text-white rounded-xl hover:bg-accent/90 transition-colors text-sm font-medium"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Watch
                        </button>
                      ) : (
                        <button className="flex-1 flex items-center justify-center px-4 py-2 bg-primary-orange text-white rounded-xl hover:bg-secondary-gold transition-colors text-sm font-medium">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </button>
                      )}
                      <button className="flex items-center justify-center px-4 py-2 bg-light-grey text-dark-grey rounded-xl hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>

                    {content.type !== 'video' && (content as TrainingModule | Guide).fileSize && (
                      <div className="mt-3 pt-3 border-t border-light-grey flex items-center justify-between text-xs text-dark-grey/60">
                        <span>{(content as TrainingModule | Guide).format}</span>
                        <span>{(content as TrainingModule | Guide).fileSize}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-orange via-secondary-gold to-yellow text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/50 to-secondary-gold/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Ready to Start Learning?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Business Knowledge</h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Access our complete training library and accelerate your entrepreneurial journey with expert-designed content and hands-on support.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/join"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-orange font-semibold rounded-xl hover:bg-light-grey transition-all duration-300 transform hover:scale-105 shadow-xl group"
            >
              <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Join BlueBiz Kenya</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-orange transition-all duration-300 group"
            >
              <Award className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Get Personal Training</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guides;