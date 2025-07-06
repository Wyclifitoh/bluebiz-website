import React from 'react';
import { Play, Clock, Users, Star, Eye } from 'lucide-react';

interface VideoCardProps {
  video: {
    id: number;
    title: string;
    description: string;
    videoId: string;
    thumbnail: string;
    duration: string;
    category: string;
    level: string;
    rating: number;
    viewCount: number;
    chapters?: string[];
  };
  index: number;
  onPlay: () => void;
  getLevelColor: (level: string) => string;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, index, onPlay, getLevelColor }) => {
  return (
    <div 
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-light-grey/50 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Video Thumbnail */}
      <div className="relative h-56 overflow-hidden cursor-pointer" onClick={onPlay}>
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/60 via-transparent to-transparent"></div>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center text-accent hover:bg-white transition-colors group-hover:scale-110 shadow-xl">
            <Play className="w-10 h-10 ml-1" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 bg-dark-grey/80 text-white px-3 py-1 rounded-full text-sm font-medium">
          <Clock className="w-3 h-3 inline mr-1" />
          {video.duration}
        </div>

        {/* Level Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(video.level)}`}>
            {video.level}
          </span>
        </div>

        {/* View Count */}
        <div className="absolute bottom-4 left-4 text-white text-sm flex items-center">
          <Eye className="w-4 h-4 mr-1" />
          {video.viewCount.toLocaleString()} views
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-yellow">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-medium text-dark-grey">{video.rating}</span>
          </div>
          <div className="text-xs text-dark-grey/60 uppercase tracking-wide font-medium">
            Video Tutorial
          </div>
        </div>

        <h3 className="text-xl font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors duration-300">
          {video.title}
        </h3>
        
        <p className="text-dark-grey/70 text-sm mb-4 leading-relaxed line-clamp-3">
          {video.description}
        </p>

        {/* Video Chapters Preview */}
        {video.chapters && (
          <div className="mb-4">
            <div className="text-xs font-semibold text-dark-grey mb-2">What You'll Learn:</div>
            <ul className="space-y-1">
              {video.chapters.slice(0, 3).map((chapter, chapterIndex) => (
                <li key={chapterIndex} className="text-xs text-dark-grey/70 flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary-orange rounded-full mr-2 flex-shrink-0"></div>
                  {chapter}
                </li>
              ))}
              {video.chapters.length > 3 && (
                <li className="text-xs text-primary-orange">
                  +{video.chapters.length - 3} more topics
                </li>
              )}
            </ul>
          </div>
        )}

        <button 
          onClick={onPlay}
          className="w-full flex items-center justify-center px-4 py-3 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all duration-300 font-medium group-hover:shadow-lg"
        >
          <Play className="w-4 h-4 mr-2" />
          Watch Video
        </button>
      </div>
    </div>
  );
};

export default VideoCard;