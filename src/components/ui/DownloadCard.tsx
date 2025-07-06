import React from 'react';
import { Download, FileText, Star, ExternalLink } from 'lucide-react';

interface DownloadCardProps {
  item: {
    id: number;
    title: string;
    description: string;
    downloadUrl: string;
    format: string;
    fileSize: string;
    category: string;
    type: string;
    level: string;
    rating: number;
    downloadCount: number;
  };
  index: number;
  getLevelColor: (level: string) => string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ item, index, getLevelColor }) => {
  const handleDownload = () => {
    window.open(item.downloadUrl, '_blank');
  };

  const getTypeIcon = () => {
    switch (item.type) {
      case 'template': return '📊';
      case 'workbook': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = () => {
    switch (item.type) {
      case 'template': return 'bg-teal/10 text-teal';
      case 'workbook': return 'bg-program-green/10 text-program-green';
      default: return 'bg-secondary-gold/10 text-secondary-gold';
    }
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
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${getTypeColor()}`}>
              {getTypeIcon()}
            </div>
            <div>
              <div className="text-xs text-dark-grey/60 uppercase tracking-wide font-medium capitalize">
                {item.type}
              </div>
              <div className="text-xs text-dark-grey/60 mt-1">
                Business Tool
              </div>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(item.level)}`}>
            {item.level}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors duration-300">
          {item.title}
        </h3>
        
        <p className="text-dark-grey/70 text-sm mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-yellow">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-medium text-dark-grey">{item.rating}</span>
          </div>
          <div className="flex items-center text-dark-grey/60 text-sm">
            <Download className="w-4 h-4 mr-1" />
            {item.downloadCount.toLocaleString()}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button 
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center px-4 py-3 bg-primary-orange text-white rounded-xl hover:bg-secondary-gold transition-all duration-300 font-medium group-hover:shadow-lg"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-light-grey text-dark-grey rounded-xl hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* File Info */}
        <div className="mt-3 pt-3 border-t border-light-grey flex items-center justify-between text-xs text-dark-grey/60">
          <span className="font-medium">{item.format}</span>
          <span>{item.fileSize}</span>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;