import React from 'react';
// import { Briefcase } from 'lucide-react';

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  description: string;
  image: string;
}

const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-indigo-600/30" />

      {items.map((item, index) => (
        <div key={index} className={`relative flex items-center mb-8 ${
          index % 2 === 0 ? 'md:flex-row-reverse' : ''
        }`}>
          {/* Timeline Content */}
          <div className="flex-1 md:w-1/2">
            <div className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ml-8 md:ml-0 md:mr-8">
              <h3 className="text-xl ml-3 font-semibold text-indigo-400">{item.role}</h3>
              <p className="text-black-400 ml-3">{item.company} | {item.period}</p>
              <p className="mt-2 ml-3 text-black-300">{item.description}</p>
            </div>
          </div>

          {/* Timeline Icon */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg border-4 border-black">
            {/* <Briefcase size={20} className="text-white" /> */}
            <img
              src={item.image} // Replace with your image URL
              alt="Timeline Icon"
              className="w-10 h-10 object-contain" // Adjust size here
            />
          </div>

          {/* Empty Space for Timeline Balance */}
          <div className="flex-1 hidden md:block" />
        </div>
      ))}
    </div>
  );
};

export default Timeline;