import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CTAButton {
  text: string;
  href: string;
  icon: LucideIcon;
  variant: 'primary' | 'secondary';
}

interface CallToActionProps {
  badge?: {
    icon: LucideIcon;
    text: string;
  };
  title: string;
  subtitle: string;
  buttons: CTAButton[];
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  badge, 
  title, 
  subtitle, 
  buttons, 
  className = "" 
}) => {
  return (
    <section className={`py-20 bg-gradient-to-r from-primary-orange via-secondary-gold to-yellow text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/50 to-secondary-gold/50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
            <badge.icon className="w-4 h-4 mr-2" />
            {badge.text}
          </div>
        )}
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`
                inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl group
                ${button.variant === 'primary' 
                  ? 'bg-white text-primary-orange hover:bg-light-grey' 
                  : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-orange'
                }
              `}
            >
              <button.icon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>{button.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;