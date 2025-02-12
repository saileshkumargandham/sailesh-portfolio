import React from 'react';
import { 
   Code, Code2, Database, 
    GitPullRequest, 
  Layers, Laptop, Server, 
  Cloud, HardDrive, 
  CloudLightning, FileCode, 
  Box 
} from 'lucide-react';

interface SkillCardProps {
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const getIcon = () => {
    const icons = {
      "Angular": Server,
      "HTML": Code,
      "CSS": Layers,
      "Git": GitPullRequest,
      "Java": FileCode,
      "MySQL": Database,
      "TypeScript": Code2,
      "Spring": Cloud,
      "React": Laptop,
      "Node.js": FileCode,
      "Python": Box,
      "AWS": CloudLightning,
      "PostgreSQL": HardDrive,
    };

    const IconComponent = icons[skill as keyof typeof icons] || Code2;
    return <IconComponent className="mb-2 text-indigo-400" size={24} />;
  };

  return (
    <div className="bg-white/5 p-6 rounded-lg text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
      {getIcon()}
      <span className="group-hover:text-indigo-400 transition-colors">{skill}</span>
    </div>
  );
};

export default SkillCard;