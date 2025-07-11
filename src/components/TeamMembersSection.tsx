import React from 'react';
import { 
  Mail, 
  Target,
  MapPin,
  Award,
  Users,
  Star
} from 'lucide-react';
import { Link } from "react-router-dom";
const teamMembers = [
  {
    name: "Biasha Oundo",
    position: "Enterprise Development Advisor",
    location: "Mombasa, Kenya",
    email: "boundo@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Biasha%20Photo%202.jpg/:/cr=t:0%25,l:1.3%25,w:97.4%25,h:100%25/rs=w:388,h:388,cg:true",
    bio: "Biasha is an experienced enterprise development advisor with a passion for empowering youth entrepreneurs.",
    expertise: ["Business Development", "Financial Literacy", "Youth Empowerment", "Program Management"],
    specialty: "Strategic Leadership",
    color: "primary-orange"
  },
  {
    name: "Bonnie Irungu",
    position: "Monitoring and Evaluation Manager",
    location: "Mombasa, Kenya",
    email: "birungu@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/1000292152.jpg/:/cr=t:29.89%25,l:0%25,w:100%25,h:46.25%25/rs=w:388,h:388,cg:true",
    bio: "Bonnie leads the monitoring and evaluation efforts, ensuring that program impact is measured and reported effectively.",
    expertise: ["Data Analysis", "Impact Assessment", "Program Evaluation", "Reporting"],
    specialty: "Investment Strategy",
    color: "teal"
  },
  {
    name: "David Kimani",
    position: "Project Finance Specialist",
    location: "Mombasa, Kenya",
    email: "dkimani@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/image%20(1).png/:/cr=t:0%25,l:0%25,w:100%25,h:89.98%25/rs=w:388,h:388,cg:true",
    bio: "David manages the financial aspects of the BlueBiz program, ensuring transparency and accountability in fund utilization.",
    expertise: ["Financial Management", "Budgeting", "Accounting", "Compliance"],
    specialty: "Market Expansion",
    color: "program-green"
  },
  {
    name: "Edwina Mwebi",
    position: "Enterprise Development Advisor",
    location: "Mombasa, Kenya",
    email: "emwebi@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/20240722_133755_remastered.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:75%25/rs=w:388,h:388,cg:true",
    bio: "Edwina is dedicated to providing hands-on support to youth entrepreneurs, helping them develop sustainable business models and access markets.",
    expertise: ["Business Strategy", "Market Access", "Entrepreneurial Training", "Mentorship"],
    specialty: "Financial Planning",
    color: "secondary-gold"
  },
  {
    name: "Emmaculate Muthoni",
    position: "Communications Advisor",
    location: "Mombasa, Kenya",
    email: "ekivindyo@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/WhatsApp%20Image%202024-11-04%20at%2016.26.59-8227e0e.jpeg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:388,h:388,cg:true",
    bio: "Emmaculate manages communications and outreach for the BlueBiz program, ensuring that success stories and program updates reach a wide audience.",
    expertise: ["Public Relations", "Content Creation", "Social Media Management", "Event Planning"],
    specialty: "Community Engagement",
    color: "accent"
  },
  {
    name: "Irene Mureithi",
    position: "Financial Literacy Specialist",
    location: "Mombasa, Kenya",
    email: "imureithi@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Irene%202%20(1).JPG/:/cr=t:1.71%25,l:39.24%25,w:41.67%25,h:62.49%25/rs=w:388,h:388,cg:true,m",
    bio: "Irene is passionate about improving financial literacy among youth entrepreneurs, helping them make informed financial decisions.",
    expertise: ["Financial Education", "Budgeting", "Savings", "Investment"],
    specialty: "Digital Innovation",
    color: "yellow"
  },
  {
    name: "Joshua Kisundi",
    position: "Program Driver",
    location: "Mombasa, Kenya",
    email: "jkisundi@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/12D_4085.JPG/:/cr=t:3.58%25,l:37.52%25,w:35.09%25,h:52.63%25/rs=w:388,h:388,cg:true,m",
    bio: "Joshua is dedicated to ensuring the smooth operation of the BlueBiz program, providing logistical support and coordination.",
    expertise: ["Logistics Management", "Transportation", "Event Coordination", "Administrative Support"],
    specialty: "Driving",
    color: "program-green"
  },
  {
    name: "Julius Kiiru",
    position: "Office Assistant",
    location: "Mombasa, Kenya",
    email: "jkiiru@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/12D_4143.JPG/:/cr=t:0%25,l:25.36%25,w:66.68%25,h:100%25/rs=w:388,h:388,cg:true",
    bio: "Julius provides essential administrative support to the BlueBiz team, ensuring that operations run smoothly and efficiently.",
    expertise: ["Administrative Support", "Office Management", "Customer Service", "Data Entry"],
    specialty: "Assistant",
    color: "program-green"
  },
  {
    name: "Kelvin Muturi",
    position: "Enterprise Development Advisor",
    location: "Mombasa, Kenya",
    email: "kmuturi@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Kelvin2.JPG/:/cr=t:0%25,l:16.66%25,w:66.68%25,h:100%25/rs=w:388,h:388,cg:true",
    bio: "Kelvin is an enterprise development advisor focused on helping youth entrepreneurs build sustainable businesses and access markets.",
    expertise: ["Business Development", "Market Access", "Entrepreneurial Training", "Mentorship"],
    specialty: "Business Growth",
    color: "primary-orange"
  },
  {
    name: "Milton Kitsao",
    position: "Youth Advisory Council Member",
    location: "Mombasa, Kenya",
    email: "yactechnoserve@gmail.com",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/12D_4033%20(1).JPG/:/cr=t:7.79%25,l:40.57%25,w:38.77%25,h:58.14%25/rs=w:388,h:388,cg:true,m",
    bio: "Milton is a member of the Youth Advisory Council, providing insights and feedback to improve the BlueBiz program's impact on youth entrepreneurs.",
    expertise: ["Youth Engagement", "Program Feedback", "Community Outreach", "Advocacy"],
    specialty: "Youth Leadership",
    color: "teal"
  },
  {
    name: "Nancy Nyale",
    position: "Program Intern",
    location: "Mombasa, Kenya",
    email: "nnyale@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Nancy%20image.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:66.64%25/rs=w:388,h:388,cg:true",
    bio: "Nancy is a program intern supporting the BlueBiz team in various initiatives aimed at empowering youth entrepreneurs.",
    expertise: ["Program Support", "Research", "Community Engagement", "Event Coordination"],
    specialty: "Youth Engagement",
    color: "yellow"
  },
  {
    name: "Nicholas Koigu",
    position: "Enterprise Finance Advisor",
    location: "Mombasa, Kenya",
    email: "nkoigu@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/unnamed.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:388,cg:true",
    bio: "Nicholas specializes in enterprise finance, helping youth entrepreneurs access funding and manage their finances effectively.",
    expertise: ["Financial Management", "Access to Finance", "Investment Readiness", "Business Planning"],
    specialty: "Finance Advisory",
    color: "program-green"
  },
  {
    name: "Joanne Muchai",
    position: "Market Systems Development & Partnerships Manager",
    location: "Mombasa, Kenya",
    email: "jmuchai@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Joanne%20Muchai_Headshot_C.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:388,cg:true/qt=q:33",
    bio: "Joanne is the Market Systems Development & Partnerships Manager, responsible for building strategic partnerships and ensuring sustainable collaboration with investors and development partners.",
    expertise: ["Partnership Development", "Stakeholder Management", "Business Development", "Grant Writing"],
    specialty: "Partnerships & Markets",
    color: "secondary-gold"
  },
  {
    name: "Richard Ndiri",
    position: "Enterprise Financial Advisor",
    location: "Mombasa, Kenya",
    email: "rndiri@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/20250204_135235%20(1).jpg/:/cr=t:18.66%25,l:0%25,w:100%25,h:46.21%25/rs=w:388,h:388,cg:true/qt=q:33",
    bio: "Richard is an Enterprise Financial Advisor focused on helping youth entrepreneurs manage their finances and access funding opportunities.",
    expertise: ["Financial Management", "Access to Finance", "Investment Readiness", "Business Planning"],
    specialty: "Enterprise Finance",
    color: "green"
  },
  {
    name: "Shifeya Mussa",
    position: "Program Administrator",
    location: "Mombasa, Kenya",
    email: "smussa@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/20250204_134921.jpg/:/cr=t:26.75%25,l:0%25,w:100%25,h:46.09%25/rs=w:388,h:388,cg:true/qt=q:33",
    bio: "Shifeya is a Program Administrator dedicated to supporting the implementation of programs aimed at empowering youth entrepreneurs.",
    expertise: ["Program Coordination", "Administrative Support", "Data Management", "Monitoring & Evaluation"],
    specialty: "Program Admin",
    color: "teal"
  },
  {
    name: "Staicy Tumaini",
    position: "Program Intern",
    location: "Mombasa, Kenya",
    email: "stumaini@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/20250204_135052.jpg/:/cr=t:18.66%25,l:0%25,w:100%25,h:46.21%25/rs=w:388,h:388,cg:true/qt=q:33",
    bio: "Staicy is a Program Intern assisting in various program implementation tasks and gaining hands-on experience in youth entrepreneurship support.",
    expertise: ["Program Support", "Research Assistance", "Data Entry", "Event Coordination"],
    specialty: "Research & Support",
    color: "yellow"
  },
  {
    name: "Wangari Theuri",
    position: "Senior Program Manager",
    location: "Mombasa, Kenya",
    email: "wtheuri@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/Wangari%20Bio%20Photo.jpg/:/cr=t:16.68%25,l:0%25,w:100%25,h:66.64%25/rs=w:388,h:388,cg:true/qt=q:33",
    bio: "Wangari is a Senior Program Manager with extensive experience in managing youth empowerment programs and driving strategic initiatives.",
    expertise: ["Program Management", "Strategic Planning", "Monitoring & Evaluation", "Capacity Building"],
    specialty: "Strategic Programs",
    color: "primary-orange"
  },
  {
    name: "Winnie Mutuku",
    position: "Youth and Gender Coordinator",
    location: "Mombasa, Kenya",
    email: "wmutuku@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/WhatsApp%20Image%202024-11-18%20at%205.08.56%20PM.jpeg/:/cr=t:1.91%25,l:0%25,w:100%25,h:96.19%25/rs=w:388,h:388,cg:true/qt=q:33",
    bio: "Winnie is a Youth and Gender Coordinator with a passion for promoting gender equality and empowering young women.",
    expertise: ["Gender Equality", "Youth Empowerment", "Advocacy", "Community Engagement"],
    specialty: "Gender & Inclusion",
    color: "accent"
  },
  {
    name: "James Mwanjau",
    position: "Sub Award & Enterprise Development Manager",
    location: "Mombasa, Kenya",
    email: "jmwanjau@tns.org",
    image: "https://img1.wsimg.com/isteam/ip/cb352b53-95ef-4471-8478-4e6f1dbaa243/James.jpg/:/cr=t:1.1%25,l:0%25,w:100%25,h:72.56%25/rs=w:388,h:388,cg:true",
    bio: "James is a Sub Award & Enterprise Development Manager with a focus on enhancing youth entrepreneurship and access to finance.",
    expertise: ["Enterprise Development", "Financial Inclusion", "Youth Empowerment", "Capacity Building"],
    specialty: "Enterprise Strategy",
    color: "secondary-gold"
  }
];

 

const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  const colorClasses = {
    'primary-orange': {
      bg: 'bg-primary-orange',
      text: 'text-primary-orange',
      border: 'border-primary-orange/20',
      hover: 'hover:border-primary-orange/40'
    },
    'teal': {
      bg: 'bg-teal',
      text: 'text-teal',
      border: 'border-teal/20',
      hover: 'hover:border-teal/40'
    },
    'program-green': {
      bg: 'bg-program-green',
      text: 'text-program-green',
      border: 'border-program-green/20',
      hover: 'hover:border-program-green/40'
    },
    'secondary-gold': {
      bg: 'bg-secondary-gold',
      text: 'text-secondary-gold',
      border: 'border-secondary-gold/20',
      hover: 'hover:border-secondary-gold/40'
    },
    'accent': {
      bg: 'bg-accent',
      text: 'text-accent',
      border: 'border-accent/20',
      hover: 'hover:border-accent/40'
    },
    'yellow': {
      bg: 'bg-yellow',
      text: 'text-yellow',
      border: 'border-yellow/20',
      hover: 'hover:border-yellow/40'
    }
  };

//   const colors = colorClasses[member.color as keyof typeof colorClasses];

  const colors = colorClasses[member.color as keyof typeof colorClasses] || {
  bg: 'bg-gray-100',
  text: 'text-gray-600',
  border: 'border-gray-200',
  hover: 'hover:border-gray-300'
};


  return (
    <div 
      className={`
        group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 
        transform hover:-translate-y-3 border-2 ${colors.border} ${colors.hover}
        overflow-hidden animate-slide-up
      `}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Profile Image Section */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/80 via-dark-grey/20 to-transparent"></div>
        
        {/* Floating Badge */}
        {/* <div className="absolute top-4 right-4">
          <div className={`${colors.bg} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
            <Star className="w-3 h-3 inline mr-1" />
            Expert
          </div>
        </div> */}
        
        {/* Location Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center text-white text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <MapPin className="w-3 h-3 mr-1" />
            {member.location}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        {/* Name and Position */}
        <div className="mb-6">
          <h3 className={`text-2xl font-bold text-dark-grey mb-2 group-hover:${colors.text} transition-colors duration-300`}>
            {member.name}
          </h3>
          <p className={`${colors.text} font-semibold text-lg mb-3`}>
            {member.position}
          </p>
          
          {/* Specialty */}
          {/* <div className="flex items-center gap-2 mb-4">
            <Award className={`w-4 h-4 ${colors.text}`} />
            <span className="text-dark-grey/70 text-sm">{member.specialty}</span>
          </div> */}
        </div>

        {/* Contact Section */}
        <div className="flex items-center justify-between pt-6 border-t border-light-grey">
          <a 
            href={`mailto:${member.email}`}
            className={`
              flex items-center gap-3 ${colors.bg} text-white px-6 py-3 rounded-xl
              font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg
              group-hover:shadow-xl
            `}
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </a>
          
          {/* Status Indicator */}
          {/* <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-program-green rounded-full animate-pulse"></div>
            <span className="text-sm text-dark-grey/60">Available</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const TeamMembersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-light-grey to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Core Team
          </div>
          
          <h2 className="text-5xl font-bold text-dark-grey mb-6">
            Meet Our <span className="text-primary-orange">Team</span>
          </h2>
          
          <p className="text-xl text-dark-grey/70 max-w-3xl mx-auto leading-relaxed">
            Experienced professionals dedicated to your entrepreneurial success. 
            Our diverse team brings together expertise from across Africa to support your business journey.
          </p>
        </div>
 

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.email} member={member} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-white rounded-3xl p-8 shadow-xl border border-primary-orange/10">
            <div className="p-4 bg-primary-orange rounded-2xl">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-dark-grey mb-2">Ready to Connect?</h3>
              <p className="text-dark-grey/70">Reach out to any team member for personalized support.</p>
            </div>
             
             <Link
                          to="/contact"
                          className="bg-primary-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-orange/90 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          <span>Contact Team</span>
                        </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;