import { useState } from 'react';
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
  Sparkles,
  Award,
  Globe
} from 'lucide-react';

const ResourceCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', count: 45 },
    { id: 'business-planning', name: 'Business Planning', count: 12 },
    { id: 'financial-literacy', name: 'Financial Literacy', count: 8 },
    { id: 'marketing', name: 'Marketing & Sales', count: 10 },
    { id: 'funding', name: 'Access to Finance', count: 7 },
    { id: 'skills-training', name: 'Skills Training', count: 8 }
  ];

  const resourceTypes = [
    { id: 'all', name: 'All Types', icon: <Globe className="w-4 h-4" /> },
    { id: 'guide', name: 'Guides', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'template', name: 'Templates', icon: <FileText className="w-4 h-4" /> },
    { id: 'video', name: 'Videos', icon: <Video className="w-4 h-4" /> },
    { id: 'webinar', name: 'Webinars', icon: <Users className="w-4 h-4" /> }
  ];

  const featuredResources = [
    {
      id: 1,
      title: "International Waste Picker's Day",
      description: "This event is dedicated to recognising and advocating for waste pickers' rights, dignity, and contributions —informal workers who collect, sort, and recycle waste materials.",
      category: "business-planning",
      type: "template",
      downloadCount: 2847,
      rating: 4.9,
      duration: "Date: 1st March",
      level: "Beginner",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/AdobeStock_205900651.jpeg/:/cr=t:0%25,l:16.8%25,w:66.41%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:33",
      featured: true
    },
    {
      id: 2,
      title: "International Women's Day",
      description: "This event honors the social, economic, cultural, and political achievements of women while advocating for gender equality and women's rights worldwide.",
      category: "financial-literacy",
      type: "guide",
      downloadCount: 1923,
      rating: 4.8,
      duration: "Date: 8th March",
      level: "Intermediate",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/White%20Minimalist%20International%20Women's%20Day%20Ins.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:33",
      featured: true
    },
    {
      id: 3,
      title: "Global Recycling Day",
      description: "This global initiative highlights the importance of recycling in conserving natural resources and combating climate change. It promotes the concept of recyclables, encouraging individuals, businesses, and governments to adopt sustainable waste management practices.",
      category: "marketing",
      type: "video",
      downloadCount: 3156,
      rating: 4.9,
      duration: " Date: 18th March",
      level: "Intermediate",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Irene_Mureithi_generate_an_image_that_shows_a_.png/:/cr=t:10.14%25,l:0%25,w:100%25,h:79.72%25/rs=w:365,h:365,cg:true/qt=q:33",
      featured: true
    }
  ];

  const allResources = [
    ...featuredResources,
    {
      id: 4,
      title: "Funding Application Checklist",
      description: "Essential checklist to ensure your funding applications are complete and compelling.",
      category: "funding",
      type: "template",
      downloadCount: 1456,
      rating: 4.7,
      duration: "15 min read",
      level: "Beginner",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
    },
    {
      id: 5,
      title: "Customer Service Excellence Training",
      description: "Build exceptional customer service skills that drive customer loyalty and business growth.",
      category: "skills-training",
      type: "webinar",
      downloadCount: 987,
      rating: 4.6,
      duration: "1.5 hours",
      level: "Beginner",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      id: 6,
      title: "Market Research Template",
      description: "Comprehensive template for conducting market research and understanding your target customers.",
      category: "business-planning",
      type: "template",
      downloadCount: 2134,
      rating: 4.8,
      duration: "25 min read",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
    },
    {
      id: 7,
      title: "Blue Economy Opportunities Guide",
      description: "Explore opportunities in Kenya's blue economy including fisheries, tourism, and renewable energy.",
      category: "business-planning",
      type: "guide",
      downloadCount: 1789,
      rating: 4.9,
      duration: "40 min read",
      level: "Advanced",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
    },
    {
      id: 8,
      title: "Social Media Marketing Templates",
      description: "Ready-to-use social media templates for Facebook, Instagram, and WhatsApp Business.",
      category: "marketing",
      type: "template",
      downloadCount: 2567,
      rating: 4.7,
      duration: "20 min setup",
      level: "Beginner",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    }
  ];

  const filteredResources = allResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green/10 text-green';
      case 'Intermediate': return 'bg-yellow/10 text-accent';
      case 'Advanced': return 'bg-accent/10 text-accent';
      default: return 'bg-light-grey text-dark-grey';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return <BookOpen className="w-4 h-4" />;
      case 'template': return <FileText className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      case 'webinar': return <Users className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <div className="pt-20">
      {/* Modern Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange via-secondary-gold to-yellow">
          <div className="absolute inset-0 bg-[url('https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/1000091544.jpg/:/cr=t:0%25,l:3.31%25,w:93.38%25,h:100%25/rs=w:1240,h:620,cg:true/qt=q:33')] bg-cover bg-center opacity-20"></div>
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
              Free Resources Available
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Resource <span className="bg-gradient-to-r from-teal to-program-green bg-clip-text text-transparent">Center</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Access our comprehensive library of business resources, templates, guides, and training materials designed specifically for coastal entrepreneurs.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pb-16">
              {[
                { number: "45+", label: "Resources" },
                { number: "15K+", label: "Downloads" },
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
                placeholder="Search resources..."
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
              {resourceTypes.map(type => (
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

      {/* Featured Resources */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Featured Resources
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Most Popular Resources</h2>
            <p className="text-xl text-dark-grey/70">Our top-rated and most downloaded resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={resource.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-light-grey/50 overflow-hidden">
                  {/* Resource Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-2 py-1 bg-white/90 text-primary-orange rounded-full text-xs font-medium">
                        {getTypeIcon(resource.type)}
                        <span className="ml-1 capitalize">{resource.type}</span>
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 bg-yellow/90 text-dark-grey rounded-full text-xs font-medium">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {resource.duration}
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {resource.downloadCount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(resource.level)}`}>
                        {resource.level}
                      </span>
                      <div className="flex items-center text-yellow">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium text-dark-grey">{resource.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-dark-grey/70 text-sm mb-6 leading-relaxed">{resource.description}</p>

                    <div className="flex items-center justify-between">
                      <button className="flex items-center px-4 py-2 bg-primary-orange text-white rounded-xl hover:bg-secondary-gold transition-colors text-sm font-medium">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                      <button className="flex items-center px-4 py-2 bg-light-grey text-dark-grey rounded-xl hover:bg-primary-orange/10 hover:text-primary-orange transition-colors text-sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4 mr-2" />
              All Resources
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Complete Resource Library</h2>
            <p className="text-xl text-dark-grey/70">
              {filteredResources.length} resources found
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <div key={resource.id} className="group">
                <div className="bg-gradient-to-br from-light-grey to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-light-grey/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-primary-orange/10 rounded-xl flex items-center justify-center text-primary-orange">
                        {getTypeIcon(resource.type)}
                      </div>
                      <div>
                        <div className="text-xs text-dark-grey/60 capitalize">{resource.type}</div>
                        <div className="text-xs text-dark-grey/60">{resource.duration}</div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(resource.level)}`}>
                      {resource.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-dark-grey/70 text-sm mb-4 leading-relaxed">{resource.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-yellow">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium text-dark-grey">{resource.rating}</span>
                    </div>
                    <div className="flex items-center text-dark-grey/60 text-sm">
                      <Download className="w-4 h-4 mr-1" />
                      {resource.downloadCount.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 flex items-center justify-center px-4 py-2 bg-primary-orange text-white rounded-xl hover:bg-secondary-gold transition-colors text-sm font-medium">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 bg-light-grey text-dark-grey rounded-xl hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-light-grey rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-dark-grey/50" />
              </div>
              <h3 className="text-xl font-semibold text-dark-grey mb-2">No resources found</h3>
              <p className="text-dark-grey/70">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              Browse by Category
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Explore Resource Categories</h2>
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
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-dark-grey/70 text-sm mb-4">
                    {category.count} resources available
                  </p>
                  <div className="flex items-center text-primary-orange text-sm font-medium">
                    <span>Explore Category</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
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
            Need More Support?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Take Action?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            These resources are just the beginning. Join BlueBiz Kenya for personalized mentorship, funding opportunities, and hands-on support.
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
              <span>Get Personal Support</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceCenter;