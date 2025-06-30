import React from 'react';
import { Mail, Linkedin, MapPin, Award, Users, Target, Sparkles, Globe } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Biasha Oundo",
      position: "Enterprise Development Advisor",
      location: "Mombasa, Kenya",
      email: "boundo@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Biasha%20Photo%202.jpg/:/cr=t:0%25,l:1.3%25,w:97.4%25,h:100%25/rs=w:388,h:388,cg:true",
      bio: "Biasha is an experienced enterprise development advisor with a passion for empowering youth entrepreneurs.",
      expertise: ["Business Development", "Financial Literacy", "Youth Empowerment", "Program Management"],
      achievements: ["Led 50+ successful business workshops", "Trained 1,000+ youth entrepreneurs", "Increased business survival rate by 30%"]
    },
    {
      name: "Bonnie Irungu",
      position: "Monitoring and Evaluation Manager",
      location: "Mombasa, Kenya",
      email: "birungu@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/1000292152.jpg/:/cr=t:29.89%25,l:0%25,w:100%25,h:46.25%25/rs=w:388,h:388,cg:true",
      bio: "Bonnie leads the monitoring and evaluation efforts, ensuring that program impact is measured and reported effectively.",
      expertise: ["Data Analysis", "Impact Assessment", "Program Evaluation", "Reporting"],
      achievements: ["Developed comprehensive M&E framework", "Increased data accuracy by 40%", "Produced 10+ impact reports"]
    },
    {
      name: "David Kimani",
      position: "Project Finance Specialist",
      location: "Mombasa, Kenya",
      email: "dkimani@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/image%20(1).png/:/cr=t:0%25,l:0%25,w:100%25,h:89.98%25/rs=w:388,h:388,cg:true",
      bio: "David manages the financial aspects of the BlueBiz program, ensuring transparency and accountability in fund utilization.",
      expertise: ["Financial Management", "Budgeting", "Accounting", "Compliance"],
      achievements: ["Streamlined financial processes", "Reduced costs by 20%", "Ensured 100% compliance with donor requirements"]
    },
    {
      name: "Edwina Mwebi",
      position: "Enterprise Development Advisor",
      location: "Mombasa, Kenya",
      email: "emwebi@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/20240722_133755_remastered.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:75%25/rs=w:388,h:388,cg:true",
      bio: "Edwina is dedicated to providing hands-on support to youth entrepreneurs, helping them develop sustainable business models and access markets.",
      expertise: ["Business Strategy", "Market Access", "Entrepreneurial Training", "Mentorship"],
      achievements: ["Guided 100+ startups", "Increased market access by 50%", "Developed 20+ business plans"]
    },
    {
      name: "Emmaculate Muthoni",
      position: "Communications Advisor ",
      location: "Mombasa, Kenya",
      email: "ekivindyo@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/WhatsApp%20Image%202024-11-04%20at%2016.26.59-8227e0e.jpeg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:388,h:388,cg:true",
      bio: "Emmaculate manages communications and outreach for the BlueBiz program, ensuring that success stories and program updates reach a wide audience.",
      expertise: ["Public Relations", "Content Creation", "Social Media Management", "Event Planning"],
      achievements: ["Developed comprehensive communication strategy", "Increased social media engagement by 300%", "Organized 10+ successful events"]
    },
    {
      name: "Irene Mureithi",
      position: "Financial Literacy Specialist",
      location: "Mombasa, Kenya",
      email: "imureithi@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Irene%202%20(1).JPG/:/cr=t:1.71%25,l:39.24%25,w:41.67%25,h:62.49%25/rs=w:388,h:388,cg:true,m",
      bio: "Irene is passionate about improving financial literacy among youth entrepreneurs, helping them make informed financial decisions.",
      expertise: ["Financial Education", "Budgeting", "Savings", "Investment"],
      achievements: ["Trained 500+ youth on financial literacy", "Increased savings rates by 25%", "Developed financial education materials"]
    },
    {
      name: "Joshua Kisundi",
      position: "Program Driver",
      location: "Mombasa, Kenya",
      email: "jkisundi@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/12D_4085.JPG/:/cr=t:3.58%25,l:37.52%25,w:35.09%25,h:52.63%25/rs=w:388,h:388,cg:true,m",
      bio: "Joshua is dedicated to ensuring the smooth operation of the BlueBiz program, providing logistical support and coordination.",
      expertise: ["Logistics Management", "Transportation", "Event Coordination", "Administrative Support"],
      achievements: ["Streamlined transportation processes", "Coordinated 10+ successful events", "Improved program efficiency by 30%"]
    },
    {
      name: "Julius Kiiru",
      position: "Office Assistant",
      location: "Mombasa, Kenya",
      email: "jkiiru@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/12D_4143.JPG/:/cr=t:0%25,l:25.36%25,w:66.68%25,h:100%25/rs=w:388,h:388,cg:true",
      bio: "Julius provides essential administrative support to the BlueBiz team, ensuring that operations run smoothly and efficiently.",
      expertise: ["Administrative Support", "Office Management", "Customer Service", "Data Entry"],
      achievements: ["Improved office organization", "Streamlined administrative processes", "Provided exceptional customer service"]
    },
    {
      name: "Kelvin Muturi",
      position: "Enterprise Development Advisor",
      location: "Mombasa, Kenya",
      email: "kmuturi@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Kelvin2.JPG/:/cr=t:0%25,l:16.66%25,w:66.68%25,h:100%25/rs=w:388,h:388,cg:true",
      bio: "Kelvin is an enterprise development advisor focused on helping youth entrepreneurs build sustainable businesses and access markets.",
      expertise: ["Business Development", "Market Access", "Entrepreneurial Training", "Mentorship"],
      achievements: ["Guided 200+ startups", "Increased market access by 60%", "Developed 30+ business plans"]
    },
    {
      name: "Milton Kitsao",
      position: "Youth Advisory Council Member",
      location: "Mombasa, Kenya",
      email: "yactechnoserve@gmail.com",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/12D_4033%20(1).JPG/:/cr=t:7.79%25,l:40.57%25,w:38.77%25,h:58.14%25/rs=w:388,h:388,cg:true,m",
      bio: "Milton is a member of the Youth Advisory Council, providing insights and feedback to improve the BlueBiz program's impact on youth entrepreneurs.",
      expertise: ["Youth Engagement", "Program Feedback", "Community Outreach", "Advocacy"],
      achievements: ["Provided valuable feedback on program design", "Increased youth engagement by 40%", "Advocated for youth-friendly policies"]
    },
    {
      name: "Nancy Nyale",
      position: "Program Intern",
      location: "Mombasa, Kenya",
      email: "nnyale@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Nancy%20image.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:66.64%25/rs=w:388,h:388,cg:true",
      bio: "Nancy is a program intern supporting the BlueBiz team in various initiatives aimed at empowering youth entrepreneurs.",
      expertise: ["Program Support", "Research", "Community Engagement", "Event Coordination"],
      achievements: ["Assisted in organizing 5+ events", "Conducted research on youth entrepreneurship", "Provided support to program team"]
    },
    {
      name: "Nicholas Koigu",
      position: "Enterprise Finance Advisor",
      location: "Mombasa, Kenya",
      email: "nkoigu@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/unnamed.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:388,cg:true",
      bio: "Nicholas specializes in enterprise finance, helping youth entrepreneurs access funding and manage their finances effectively.",
      expertise: ["Financial Management", "Access to Finance", "Investment Readiness", "Business Planning"],
      achievements: ["Secured funding for 50+ startups", "Increased financial literacy among youth by 70%", "Developed investment readiness programs"]
    },
    {
      name: "Joanne Muchai",
      position: "Market Systems Development & Partnerships Manager",
      location: "Mombasa, Kenya",
      email: "jmuchai@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Joanne%20Muchai_Headshot_C.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:388,cg:true/qt=q:33",
      bio: "Joanne is the Market Systems Development & Partnerships Manager, responsible for building strategic partnerships and ensuring sustainable collaboration with investors and development partners.",
      expertise: ["Partnership Development", "Stakeholder Management", "Business Development", "Grant Writing"],
      achievements: ["Built 30+ partnerships", "Raised $1.5M+ funding", "Expanded to 4 counties"]
    },
    {
      name: "Richard Ndiri",
      position: "Enterprise Financial Advisor",
      location: "Mombasa, Kenya",
      email: "rndiri@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/20250204_135235%20(1).jpg/:/cr=t:18.66%25,l:0%25,w:100%25,h:46.21%25/rs=w:388,h:388,cg:true/qt=q:33",
      bio: "Richard is an Enterprise Financial Advisor focused on helping youth entrepreneurs manage their finances and access funding opportunities.",
      expertise: ["Financial Management", "Access to Finance", "Investment Readiness", "Business Planning"],
      achievements: ["Secured funding for 100+ startups", "Increased financial literacy among youth by 80%", "Developed investment readiness programs"]
    },
    {
      name: "Shifeya Mussa",
      position: "Program Administrator",
      location: "Mombasa, Kenya",
      email: "smussa@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/20250204_134921.jpg/:/cr=t:26.75%25,l:0%25,w:100%25,h:46.09%25/rs=w:388,h:388,cg:true/qt=q:33",
      bio: "Shifeya is a Program Administrator dedicated to supporting the implementation of programs aimed at empowering youth entrepreneurs.",
      expertise: ["Program Coordination", "Administrative Support", "Data Management", "Monitoring & Evaluation"],
      achievements: ["Streamlined program operations", "Improved data collection processes", "Enhanced reporting mechanisms"]
    },
    {
      name: "Staicy Tumaini",
      position: "Program Intern",
      location: "Mombasa, Kenya",
      email: "stumaini@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/20250204_135052.jpg/:/cr=t:18.66%25,l:0%25,w:100%25,h:46.21%25/rs=w:388,h:388,cg:true/qt=q:33",
      bio: "Staicy is a Program Intern assisting in various program implementation tasks and gaining hands-on experience in youth entrepreneurship support.",
      expertise: ["Program Support", "Research Assistance", "Data Entry", "Event Coordination"],
      achievements: ["Assisted in organizing 5+ youth workshops", "Contributed to program research and documentation", "Gained practical experience in program management"]
    },
    {
      name: "Wangari Theuri",
      position: "Senior Program Manager",
      location: "Mombasa, Kenya",
      email: "wtheuri@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Wangari%20Bio%20Photo.jpg/:/cr=t:16.68%25,l:0%25,w:100%25,h:66.64%25/rs=w:388,h:388,cg:true/qt=q:33",
      bio: "Wangari is a Senior Program Manager with extensive experience in managing youth empowerment programs and driving strategic initiatives.",
      expertise: ["Program Management", "Strategic Planning", "Monitoring & Evaluation", "Capacity Building"],
      achievements: ["Led 10+ successful youth programs", "Increased program reach by 150%", "Developed training materials for youth entrepreneurs"]
    },
    {
      name: "Winnie Mutuku",
      position: "Youth and Gender Coordinator",
      location: "Mombasa, Kenya",
      email: "wmutuku@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/WhatsApp%20Image%202024-11-18%20at%205.08.56%20PM.jpeg/:/cr=t:1.91%25,l:0%25,w:100%25,h:96.19%25/rs=w:388,h:388,cg:true/qt=q:33",
      bio: "Winnie is a Youth and Gender Coordinator with a passion for promoting gender equality and empowering young women.",
      expertise: ["Gender Equality", "Youth Empowerment", "Advocacy", "Community Engagement"],
      achievements: ["Implemented gender-sensitive programs", "Increased female participation in youth initiatives", "Advocated for policy changes to support young women"]
    },
    {
      name: "James Mwanjau",
      position: "Sub Award & Enterprise Development Manager",
      location: "Mombasa, Kenya",
      email: "jmwanjau@tns.org",
      image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/James.jpg/:/cr=t:1.1%25,l:0%25,w:100%25,h:72.56%25/rs=w:388,h:388,cg:true",
      bio: "James is a Sub Award & Enterprise Development Manager with a focus on enhancing youth entrepreneurship and access to finance.",
      expertise: ["Enterprise Development", "Financial Inclusion", "Youth Empowerment", "Capacity Building"],
      achievements: ["Managed 5+ sub-awards for youth programs", "Increased access to finance for 100+ youth entrepreneurs", "Developed training modules for business skills"]
    }



  ];

  const advisors = [
    {
      name: "Dr. Sarah Kiprotich",
      position: "Senior Advisor - TechnoServe",
      expertise: "Agricultural Value Chains & Rural Development"
    },
    {
      name: "Michael Wanjiku",
      position: "Program Advisor - Mastercard Foundation",
      expertise: "Youth Employment & Financial Inclusion"
    },
    {
      name: "Prof. Grace Wamue",
      position: "Academic Advisor - University of Nairobi",
      expertise: "Entrepreneurship Education & Research"
    }
  ];

  return (
    <div className="pt-20">
      {/* Modern Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange via-secondary-gold to-yellow">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg')] bg-cover bg-center opacity-20"></div>
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
              <Users className="w-4 h-4 mr-2 text-teal" />
              Meet Our Experts
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Our <span className="bg-gradient-to-r from-teal to-program-green bg-clip-text text-transparent">Team</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Meet the dedicated professionals driving BlueBiz Kenya's mission to empower coastal youth entrepreneurs across Kenya.
            </p>

            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "6", label: "Team Members" },
                { number: "15+", label: "Years Experience" },
                { number: "4", label: "Counties Covered" },
                { number: "2,500+", label: "Lives Impacted" }
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

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              Core Team
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Meet Our Team</h2>
            <p className="text-xl text-dark-grey/70">Experienced professionals dedicated to your entrepreneurial success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-light-grey/50 overflow-hidden">
                  {/* Profile Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {member.location}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-grey mb-1 group-hover:text-primary-orange transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary-orange font-medium mb-3">{member.position}</p>
                    <p className="text-dark-grey/70 text-sm mb-4 leading-relaxed">{member.bio}</p>

                    {/* Expertise Tags */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-dark-grey mb-2">Expertise:</div>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-light-grey text-dark-grey text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                        {member.expertise.length > 2 && (
                          <span className="px-2 py-1 bg-primary-orange/10 text-primary-orange text-xs rounded-full">
                            +{member.expertise.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-dark-grey mb-2">Key Achievements:</div>
                      <ul className="space-y-1">
                        {member.achievements.slice(0, 2).map((achievement, achIndex) => (
                          <li key={achIndex} className="text-xs text-dark-grey/70 flex items-center">
                            <Award className="w-3 h-3 mr-2 text-green flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center justify-between pt-4 border-t border-light-grey">
                      <a 
                        href={`mailto:${member.email}`}
                        className="flex items-center text-primary-orange hover:text-secondary-gold transition-colors text-sm"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </a>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-light-grey rounded-full flex items-center justify-center hover:bg-primary-orange hover:text-white transition-colors cursor-pointer">
                          <Linkedin className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-white hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Advisory Board
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">Strategic Advisors</h2>
            <p className="text-xl text-dark-grey/70">Expert guidance from industry leaders and academic institutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-light-grey to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-light-grey/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-gold rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-grey mb-2 group-hover:text-primary-orange transition-colors">
                    {advisor.name}
                  </h3>
                  <p className="text-primary-orange font-medium mb-3 text-sm">{advisor.position}</p>
                  <p className="text-dark-grey/70 text-sm">{advisor.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gradient-to-br from-light-grey to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Values
            </div>
            <h2 className="text-4xl font-bold text-dark-grey mb-4">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Youth-Centered",
                description: "Every decision we make prioritizes the needs and aspirations of coastal youth entrepreneurs.",
                color: "from-teal to-program-green"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Results-Driven",
                description: "We measure success by the tangible impact we create in the lives of young entrepreneurs.",
                color: "from-primary-orange to-secondary-gold"
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Collaborative",
                description: "We believe in the power of partnerships and community-driven solutions for sustainable change.",
                color: "from-accent to-yellow"
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-grey mb-3 group-hover:text-primary-orange transition-colors">{value.title}</h3>
                <p className="text-dark-grey/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-orange via-secondary-gold to-yellow text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/50 to-secondary-gold/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to Join Our Mission?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            We're always looking for passionate individuals who share our commitment to empowering coastal youth entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:jmuchai@tns.org"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-orange font-semibold rounded-xl hover:bg-light-grey transition-all duration-300 transform hover:scale-105 shadow-xl group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Career Opportunities</span>
            </a>
            <a
              href="mailto:rndiri@tns.org"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-orange transition-all duration-300 group"
            >
              <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Partnership Inquiries</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;