import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Newspaper, Download, ArrowRight, Calendar, Clock } from 'lucide-react';
import { stories } from '../data/stories';

const Stories = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blog' | 'newsletter'>('all');

  const filtered = activeFilter === 'all' ? stories : stories.filter(s => s.type === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary-orange via-secondary-gold to-yellow">
        <div className="absolute inset-0 bg-dark-grey/30"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
            <BookOpen className="w-4 h-4 mr-2" />
            Stories & Insights
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Impact Stories &amp; <span className="text-yellow">Newsletters</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Real stories from coastal entrepreneurs transforming their communities, plus our quarterly BlueBiz Wave newsletters.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {[
              { key: 'all', label: 'All', count: stories.length },
              { key: 'blog', label: 'Impact Stories', count: stories.filter(s => s.type === 'blog').length },
              { key: 'newsletter', label: 'Newsletters', count: stories.filter(s => s.type === 'newsletter').length },
            ].map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key as any)}
                className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeFilter === key
                    ? 'bg-primary-orange text-white shadow-lg scale-105'
                    : 'bg-light-grey text-dark-grey hover:bg-primary-orange/10 hover:text-primary-orange'
                }`}
              >
                {label} <span className="ml-1 opacity-70">({count})</span>
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((story, index) => (
              <div
                key={story.slug}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-light-grey/50 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Cover Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      story.type === 'newsletter'
                        ? 'bg-teal text-white'
                        : 'bg-primary-orange text-white'
                    }`}>
                      {story.category}
                    </span>
                  </div>
                  {story.type === 'newsletter' && (
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-xl">
                        <Newspaper className="w-5 h-5 text-teal" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-dark-grey/60 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{story.date}</span>
                    {story.readTime && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{story.readTime}</span>}
                  </div>
                  <h3 className="text-lg font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors duration-300 line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-dark-grey/70 text-sm leading-relaxed mb-5 line-clamp-3">
                    {story.excerpt}
                  </p>

                  {story.type === 'newsletter' ? (
                    <a
                      href={story.downloadUrl}
                      download
                      className="flex items-center justify-center w-full px-4 py-3 bg-teal text-white rounded-xl font-medium hover:bg-program-green transition-all duration-300 group/btn"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                      Download PDF
                    </a>
                  ) : (
                    <Link
                      to={`/stories/${story.slug}`}
                      className="flex items-center justify-center w-full px-4 py-3 bg-primary-orange text-white rounded-xl font-medium hover:bg-secondary-gold transition-all duration-300 group/btn"
                    >
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
