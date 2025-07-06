import React from 'react';
import { Play, Clock } from 'lucide-react';

interface PodcastCardProps {
  podcast: {
    id: number;
    title: string;
    series: string;
    date: string;
    duration: string;
    description: string;
  };
  index: number;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast, index }) => {
    const handlePlayClick = () => {
    window.open('https://creators.spotify.com/pod/profile/pwani-ya-wajanjez/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6">
        <div className="flex items-start gap-6">
          {/* Play Button */}
          <button 
            onClick={handlePlayClick}
            className="flex-shrink-0 w-16 h-16 bg-primary-orange rounded-2xl flex items-center justify-center hover:bg-secondary-gold transition-all duration-300 group-hover:scale-110 shadow-lg"
          >
            <Play className="w-6 h-6 text-white ml-1" />
          </button>
          
          
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-primary-orange font-semibold bg-primary-orange/10 px-3 py-1 rounded-full">
                {podcast.series}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors duration-300">
              {podcast.title}
            </h3>
            
            <p className="text-dark-grey/70 leading-relaxed mb-4">
              {podcast.description}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-dark-grey/60">
              <span>Posted {podcast.date}</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{podcast.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;