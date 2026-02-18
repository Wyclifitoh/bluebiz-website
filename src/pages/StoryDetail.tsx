import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Download, Newspaper } from 'lucide-react';
import { stories } from '../data/stories';

const StoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const story = stories.find(s => s.slug === slug);

  if (!story) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark-grey mb-4">Story Not Found</h1>
          <Link to="/stories" className="text-primary-orange hover:underline">← Back to Stories & Insights</Link>
        </div>
      </div>
    );
  }

  // For newsletters, redirect to download
  if (story.type === 'newsletter') {
    return (
      <div className="pt-20 min-h-screen bg-light-grey flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Newspaper className="w-10 h-10 text-teal" />
          </div>
          <span className="px-3 py-1 bg-teal/10 text-teal rounded-full text-xs font-semibold">Newsletter</span>
          <h1 className="text-2xl font-bold text-dark-grey mt-4 mb-3">{story.title}</h1>
          <p className="text-dark-grey/70 mb-8 leading-relaxed">{story.excerpt}</p>
          <a
            href={story.downloadUrl}
            download
            className="inline-flex items-center px-8 py-4 bg-teal text-white rounded-xl font-semibold hover:bg-program-green transition-all duration-300 shadow-lg mb-4 w-full justify-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </a>
          <button
            onClick={() => navigate('/stories')}
            className="flex items-center justify-center w-full px-6 py-3 border border-light-grey text-dark-grey rounded-xl hover:bg-light-grey transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Stories & Insights
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img src={story.coverImage} alt={story.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/80 via-dark-grey/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="px-3 py-1 bg-primary-orange text-white rounded-full text-xs font-semibold mb-4 inline-block">{story.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{story.title}</h1>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-dark-grey/60 mb-8 pb-8 border-b border-light-grey">
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{story.date}</span>
          {story.readTime && <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{story.readTime}</span>}
          {story.author && <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{story.author}</span>}
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-dark-grey prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-dark-grey/80 prose-p:leading-relaxed prose-p:mb-5
            prose-strong:text-dark-grey prose-strong:font-semibold
            prose-blockquote:border-l-4 prose-blockquote:border-primary-orange
            prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-dark-grey/70
            prose-blockquote:bg-light-grey/50 prose-blockquote:py-4 prose-blockquote:rounded-r-xl"
          dangerouslySetInnerHTML={{ __html: story.content || '' }}
        />

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-light-grey">
          <Link
            to="/stories"
            className="inline-flex items-center text-primary-orange font-medium hover:text-secondary-gold transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Stories & Insights
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
