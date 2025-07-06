import React from 'react';
import { Download, BookOpen, Star, Globe } from 'lucide-react';

interface ModuleCardProps {
  module: {
    id: number;
    title: string;
    description: string;
    downloadUrl: string;
    format: string;
    fileSize: string;
    language: string;
    category: string;
    level: string;
    rating: number;
    downloadCount: number;
  };
  index: number;
  getLevelColor: (level: string) => string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index, getLevelColor }) => {
  const handleDownload = () => {
    window.open(module.downloadUrl, '_blank');
  };

  return (
    <div 
      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-light-grey/50 overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-orange/10 rounded-xl flex items-center justify-center text-primary-orange">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-dark-grey/60 uppercase tracking-wide font-medium">Training Module</div>
              <div className="text-xs text-dark-grey/60 flex items-center mt-1">
                <Globe className="w-3 h-3 mr-1" />
                {module.language}
              </div>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(module.level)}`}>
            {module.level}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors duration-300">
          {module.title}
        </h3>
        
        <p className="text-dark-grey/70 text-sm mb-4 leading-relaxed">
          {module.description}
        </p>

        {/* Stats */}
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

        {/* Download Button */}
        <button 
          onClick={handleDownload}
          className="w-full flex items-center justify-center px-4 py-3 bg-primary-orange text-white rounded-xl hover:bg-secondary-gold transition-all duration-300 font-medium group-hover:shadow-lg"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Module
        </button>

        {/* File Info */}
        <div className="mt-3 pt-3 border-t border-light-grey flex items-center justify-between text-xs text-dark-grey/60">
          <span className="font-medium">{module.format}</span>
          <span>{module.fileSize}</span>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;