import { useState } from "react";
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
  Calendar,
  Play,
  Sparkles,
  Award,
  Globe,
  Headphones,
} from "lucide-react";

import SectionHeader from "../components/ui/SectionHeader";
import EventCard from "../components/ui/EventCard";
import PodcastCard from "../components/ui/PodcastCard";
import CallToAction from "../components/ui/CallToAction";

const ResourceCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const events = [
    {
      id: 1,
      title: "International Waste Picker's Day",
      date: "1st March",
      description:
        "This event is dedicated to recognising and advocating for waste pickers' rights, dignity, and contributions —informal workers who collect, sort, and recycle waste materials.",
      image:
        "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/AdobeStock_205900651.jpeg/:/cr=t:0%25,l:16.8%25,w:66.41%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:33",
    },
    {
      id: 2,
      title: "International Women's Day",
      date: "8th March",
      description:
        "This event honors the social, economic, cultural, and political achievements of women while advocating for gender equality and women's rights worldwide.",
      image:
        "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/White%20Minimalist%20International%20Women's%20Day%20Ins.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:33",
    },
    {
      id: 3,
      title: "Global Recycling Day",
      date: "18th March",
      description:
        "This global initiative highlights the importance of recycling in conserving natural resources and combating climate change. It promotes the concept of recyclables, encouraging individuals, businesses, and governments to adopt sustainable waste management practices.",
      image:
        "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Irene_Mureithi_generate_an_image_that_shows_a_.png/:/cr=t:10.14%25,l:0%25,w:100%25,h:79.72%25/rs=w:365,h:365,cg:true/qt=q:33",
    },
    {
      id: 4,
      title: "World Aquatic Animal Day",
      date: "3rd April",
      description:
        "Raises awareness about the importance of aquatic animals in marine ecosystems and sustainable fisheries. ",
      image:
        "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Turquoise%20Hand%20Drawn%20Marine%20Circle%20Sticker%20wit.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:29",
    },
    {
      id: 5,
      title: "World Environment Day",
      date: "5th June",
      description:
        "World Environment Day is celebrated annually on June 5 and serves as a global platform for encouraging awareness and action to protect the environment. ",
      image:
        "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/World%20Environment%20Day%20(1).png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:29",
    },
    {
      id: 6,
      title: "World Ocean's Day",
      date: "8th June",
      description:
        "The event features discussions with scientists, experts, and influencers dedicated to ocean health alongside activities like beach clean-ups organized by various groups.",
      image:
        "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/world%20oceans%20day%20social%20media%20template%20(1).png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:29",
    },
    {
      id: 7,
      title: "International Youth Day",
      date: "12th August",
      description:
        "This annual event, established by the United Nations, aims to raise awareness about the issues affecting youth and to celebrate their contributions to society. ",
      image:
        "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Cream%20Orange%20Brown%20Abstract%20Minimalist%20Simple%20.png/:/cr=t:0%25,l:8.09%25,w:83.83%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:29",
    },
    {
      id: 7,
      title: "World Tourism Day",
      date: "27th September",
      description:
        "World Tourism Day is celebrated annually to highlight the importance of tourism and its social, cultural, political, and economic contributions globally. ",
      image:
        "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/World%20Tourism%20Day%20-%20Instagram%20Post%20%20(3).png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:29",
    },
    {
      id: 7,
      title: "World Fisheries Day",
      date: "21st November",
      description:
        "Each year, the world observes World Fisheries Day to raise awareness of the critical need for sustainable fisheries management and the crucial role of small-scale fishers in contributing to food security and livelihoods for millions of people worldwide. ",
      image:
        "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/99021e6d-fc7d-4e8a-903f-fdd58f864ff1.jpg/:/cr=t:0%25,l:16.66%25,w:66.68%25,h:100%25/rs=w:365,h:365,cg:true/qt=q:29",
    },
  ];

  const podcasts = [
    {
      id: 1,
      title:
        "Navigating Your First Steps as a Young Entrepreneur in the Blue Economy",
      series: "PWANI YA WAJANJEZ",
      date: "February 11, 2025",
      duration: "00:12:40",
      description:
        "Deep dive into the Blue Economy and learn ways you can tap into available resources to grow your business. Explore sustainable resource use and technology in businesses.",
    },
    {
      id: 2,
      title: "BlueBiz Cohort I Participant Journey",
      series: "PWANI YA WAJANJEZ",
      date: "November 13, 2024",
      duration: "00:12:12",
      description:
        "Esther and Maureen, business owners and beneficiaries of the BlueBiz Program Cohort I, share their business overview and journey.",
    },
    {
      id: 3,
      title: "Introduction to BlueBiz",
      series: "Teaser",
      date: "November 13, 2024",
      duration: "00:11:32",
      description:
        "Overview of BlueBiz and its objectives in the lives of young entrepreneurs within the Blue Economy.",
    },
  ];

    const handlePodcastPlayClick = () => {
    window.open('https://creators.spotify.com/pod/profile/pwani-ya-wajanjez/', '_blank', 'noopener,noreferrer');
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
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-program-green/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-green/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              <BookOpen className="w-4 h-4 mr-2 text-teal" />
              Free Resources Available
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Resource{" "}
              <span className="bg-gradient-to-r from-teal to-program-green bg-clip-text text-transparent">
                Center
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Access our comprehensive library of business resources, templates,
              guides, and training materials designed specifically for coastal
              entrepreneurs.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pb-16">
              {[
                { number: "45+", label: "Resources" },
                { number: "1K+", label: "Downloads" },
                { number: "4.8", label: "Avg Rating" },
                { number: "Free", label: "Access" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modern Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ icon: Calendar, text: "Events & Activities" }}
            title="Past and Upcoming Events"
            subtitle="Join us in celebrating important milestones and participating in community-driven initiatives that support sustainable development and entrepreneurship."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-20 bg-light-grey/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ icon: Headphones, text: "Audio Content" }}
            title="Pwani Ya Wajanjez Podcast"
            subtitle="Listen to inspiring stories, expert insights, and practical advice from successful entrepreneurs in Kenya's coastal region."
          />

          {/* About Podcast - Enhanced Layout */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-primary-orange/10">
            <div className="lg:flex">
              {/* Image Section */}
              <div className="lg:w-1/3 h-64 lg:h-auto">
                <img
                  src="https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/42437004/42437004-1731502105400-db4a491e3fcf7.jpg"
                  alt="Pwani Ya Wajanjez Podcast"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <button 
                    onClick={handlePodcastPlayClick}
                    className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-gold rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    <Headphones className="w-8 h-8 text-white" />
                  </button>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-dark-grey">
                      About Pwani Ya Wajanjez
                    </h3>
                    <p className="text-primary-orange font-semibold">
                      Coastal Entrepreneurs Podcast
                    </p>
                  </div>
                </div>

                <p className="text-dark-grey/80 leading-relaxed text-lg mb-6">
                  The Pwani Ya Wajanjez podcast is dedicated to equipping young
                  entrepreneurs in Kenya's coastal counties with the insights
                  and tools they need to transform challenges in the Blue
                  Economy sector into opportunities and build sustainable
                  businesses that drive local prosperity. <br />In each episode, the
                  podcast will share practical advice, real-life success
                  stories, and expert insights specifically tailored to the
                  unique needs of coastal enterprises, addressing barriers to
                  entrepreneurship while fostering an environment of support and
                  growth
                </p>

                {/* <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full">
                    <Play className="w-4 h-4 text-primary-orange" />
                    <span className="text-sm font-medium text-primary-orange">
                      Weekly Episodes
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-teal/10 px-4 py-2 rounded-full">
                    <Users className="w-4 h-4 text-teal" />
                    <span className="text-sm font-medium text-teal">
                      Expert Interviews
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-program-green/10 px-4 py-2 rounded-full">
                    <Target className="w-4 h-4 text-program-green" />
                    <span className="text-sm font-medium text-program-green">
                      Practical Tips
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Podcast Episodes */}
          <div className="space-y-6">
            {podcasts.map((podcast, index) => (
              <PodcastCard key={podcast.id} podcast={podcast} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call for Partnerships */}
      <section id="call-for-partnership" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-orange via-secondary-gold to-yellow rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Partnership Opportunity
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Call for Partnerships
              </h2>
              <h3 className="text-xl lg:text-2xl mb-6 opacity-90">
                Expression of Interest: Exciting Opportunity for Local
                Organizations!
              </h3>

              <p className="mb-6 leading-relaxed text-lg opacity-90">
                TechnoServe calls for Expressions of Interest (EOI) from local
                organizations in Mombasa, Kwale, Kilifi, Tana River, and Lamu
                counties to join the BlueBiz Program.
              </p>

              <p className="mb-8 leading-relaxed opacity-90">
                We seek partners with a proven track record of working with
                MSMEs in the blue economy and empowering youth, especially
                women, through sustainable practices.
              </p>

              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:df33ef38-476d-4fe5-8d1e-97fcb798ba6d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-orange font-semibold rounded-2xl hover:bg-light-grey transition-all duration-300 transform hover:scale-105 shadow-xl group"
              >
                <span>Learn More and Apply</span>
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        badge={{ icon: Sparkles, text: "Need More Support?" }}
        title="Ready to Take Action?"
        subtitle="These resources are just the beginning. Join BlueBiz Kenya for personalized mentorship, funding opportunities, and hands-on support."
        buttons={[
          {
            text: "Join BlueBiz Kenya",
            href: "/join",
            icon: Users,
            variant: "primary",
          },
          {
            text: "Get Personal Support",
            href: "/contact",
            icon: Award,
            variant: "secondary",
          },
        ]}
      />
    </div>
  );
};

export default ResourceCenter;
