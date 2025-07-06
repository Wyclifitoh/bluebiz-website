import React from 'react';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
  };
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/60 via-transparent to-transparent"></div>
        
        {/* Date Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-primary-orange text-white px-3 py-2 rounded-xl font-semibold text-sm shadow-lg">
            <Calendar className="w-4 h-4 inline mr-2" />
            {event.date}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors duration-300">
          {event.title}
        </h3>
        <p className="text-dark-grey/70 leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;