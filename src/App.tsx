import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, FileTextIcon } from 'lucide-react';
import ParticleRing from './components/ParticleRing';
import Section from './components/Section';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import SkillCard from './components/SkillCard';
import google from '../src/images/g.jpg';
import infosys from '../src/images/infosys.png';
import mcr from '../src/images/mcr.png';
import vehicle1 from '../src/images/New folder/vehicle1.png';
import vehicle2 from '../src/images/New folder/vehicle2.png';
import vehicle3 from '../src/images/New folder/vehicle3.png';
import vehicle4 from '../src/images/New folder/vehicle4.png';
import vehicle5 from '../src/images/New folder/vehicle5.jpg';
import port1 from '../src/images/New folder/port1.png';
import port2 from '../src/images/New folder/port2.jpg';
import port3 from '../src/images/New folder/port3.png';
import sanketa1 from '../src/images/New folder/sanketa1.png';
import sanketa2 from '../src/images/New folder/sanketa2.png';
import sanketa3 from '../src/images/New folder/sanketa3.png';
import portfolio1 from '../src/images/New folder/portfolio1.png';
import portfolio2 from '../src/images/New folder/portfolio2.png';
import portfolio3 from '../src/images/New folder/portfolio3.png';
import portfolio4 from '../src/images/New folder/portfolio4.png';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleMailto = (event: React.FormEvent) => {
    event.preventDefault();
    const mailtoLink = `mailto:saileshgandhamofficial@gmail.com?subject=New Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      role: "Digital Specialist Enginner-L1",
      company: "Infosys Ltd",
      period: "Aug, 2021 - Present",
      description: "As a Digital Specialist Engineer at Infosys, I leverage expertise in ReactJS, HTML, CSS, and Bootstrap to develop high-performance web applications. My experience includes spearheading chatbot interface development, optimizing e-commerce platforms, and leading database migrations. I prioritize user experience, resulting in increased customer satisfaction and improved site performance metrics.  Proficient in version control (GitHub) and collaborative development, I consistently deliver efficient and scalable solutions.",
      image: `${infosys}`,
    },
    {
      role: "Google cloud ready facilitator",
      company: "Google",
      period: "Apr, 2021 - Jun, 2021",
      description: "As a Google Cloud Ready Facilitator intern, I immersed myself in the Google Cloud Platform (GCP), achieving Milestone 3 and demonstrating my proficiency by completing 24 quests and earning 12 skill badges.  This hands-on experience provided a solid foundation in cloud computing principles and practical application development on GCP.",
      image: `${google}`,
    },
    {
      role: "Full Stack Developer Intern",
      company: "Mcr Web Solutions",
      period: "Nov, 2019 - Nov, 2019",
      description: "During my internship, I developed a dynamic school website using PHP and MySQL. This project allowed me to apply my full-stack development skills, including front-end technologies like HTML5, CSS, Bootstrap, and JavaScript, as well as back-end development with PHP and database integration using MySQL.  This experience provided valuable insights into creating and managing a data-driven web application.",
      image: `${mcr}`,
    }
  ];

  const skills = [
    // "Angular",
    "HTML",
    "CSS",
    "Git",
    // "Java",
    "MySQL",
    "TypeScript",
    // "Spring",
    "React",
    "Node.js",
    "Python",
    "AWS",
    // "PostgreSQL",
  ];

  const projects = [


    {
      title: "Personal Portfolio Website",
      description: "This React, Vite, and TypeScript portfolio website offers a modern, fast, and responsive platform to explore projects, skills, and experience through an optimized and interactive UI.",
      longDescription: "This Personal Portfolio Website is an interactive, visually appealing platform designed to showcase my professional background, skills, and achievements. The primary objective of this project is to provide potential employers, clients, and collaborators with an accessible and engaging way to explore my work and capabilities. Built with React, Vite, and TypeScript, the website offers a sleek, fast, and user-friendly experience. Its clean design and smooth navigation ensure visitors can easily explore different sections, such as my professional journey, key projects, and contact information. The site is fully responsive, adapting seamlessly to desktop, tablet, and mobile devices.",
      technologies: ["React", "Vite", "TypeScript" , "Css"],
      keyfeatures: [
        {
          feature: "Interactive Home Page",
          featuredesc: " A dynamic introduction with a brief bio and engaging animations to capture the visitor’s attention."
        },
        {
          feature: "About Me Section",
          featuredesc: "A detailed overview of my professional background, skills, and career highlights."
        },
        {
          feature: "Projects Showcase",
          featuredesc: "A display of key projects with descriptions, technologies used, and links to demos or repositories."
        },
        {
          feature: "Contact Form",
          featuredesc: "A simple form for visitors to send messages or inquiries directly to me."
        },
        {
          feature: "Responsive Design",
          featuredesc: "The website adapts seamlessly across all devices, providing a smooth experience on desktop, tablet, and mobile."
        },
        {
          feature: "Smooth Navigation and Animations",
          featuredesc: "Easy navigation with smooth scrolling and animated transitions for an interactive, engaging user experience."
        }
      ],
      steps: [
        {
          title: "Environment Setup & Project Structure",
          description: "I began by setting up the development environment using Vite for fast builds and TypeScript for type safety. I organized the project into reusable components, such as Header, About, Projects, Contact, and Footer. This modular approach helped maintain clean code and made future changes easier. I also installed dependencies like react-router-dom for routing and TailwindCSS for styling, while planning the layout with wireframes.",
          image: `${portfolio1}`
        },
        {
          title: "Component Development & Routing",
          description: "Next, I focused on building the individual components for each section of the site. The Header includes navigation links, while About and Projects feature content about my background and work. The Contact section allows visitors to send messages via a form. I used react-router-dom to handle routing, making it easy for users to navigate between sections and enhancing user experience with smooth scrolling.",
          image: `${portfolio2}`
        },
        {
          title: "Animations, Testing & Optimization",
          description: "To make the website engaging, I added subtle animations using CSS and framer-motion to key elements such as project cards and transitions. I also performed unit testing on individual components and tested the website’s performance, optimizing assets, compressing images, and ensuring it loaded quickly. Finally, I tested the responsiveness of the site across various devices to ensure it looked great on all screen sizes.",
          image: `${portfolio3}`
        },
        {
          title: "Deployment",
          description: "Once development and testing were complete, I built the production version of the website using npm run build and deployed it on GitHub Pages. This made my portfolio live and easily accessible for potential employers or collaborators to explore.",
          image: `${portfolio4}`
        }
      ],
      link: "https://github.com/saileshkumargandham",
      githubLink: "https://github.com/saileshkumargandham"
    },


    {
      title: "SANKETA2K20 College Fest Website ",
      description: "Developed a Website For Sagi Rama Krishnam Raju Engineering College internal Fest Sanketa 2k20. its A National level Technical Symposium organized by Department of Mechanical Engineering of SRKR Engineering college.",
      longDescription: "Sanketa 2k20 was a national-level technical symposium organized by the Mechanical Engineering Department of SRKR Engineering College.  This 11th edition, held in February 2020, provided a platform for tech enthusiasts to showcase their skills, with this project using HTML, CSS, JavaScript, and Bootstrap for development and successful deployment.",
      technologies: ["Html", "Css", "JavaScript", "Bootstrap"],
      keyfeatures: [
        {
          feature: "About Event",
          featuredesc: "Dates, location, and a brief overview of the symposium's purpose (technical presentations, competitions, etc.)."
        },
        {
          feature: "Workshop Details",
          featuredesc: "List of workshops offered and a concise description of what they covered."
        },
        {
          feature: "Sponsors Details",
          featuredesc: "Details of sponsors who supported the event."
        }
      ],
      steps: [
        {
          title: "Front-End Development",
          description: "The website's user interface was built using HTML for structure, CSS for styling, JavaScript for interactivity, and Bootstrap for responsive design. This combination ensured a visually appealing and user-friendly experience across different devices.",
          image: `${sanketa1}`
        },
        {
          title: "Testing",
          description: "Functional and Usability Testing:  We rigorously tested all website features, including navigation, forms, and interactive elements, to ensure they functioned correctly and were easy to use.  This combined approach focused on both the technical functionality and the user experience, guaranteeing a smooth and intuitive experience for visitors.",
          image:`${sanketa2}`
        },
        {
          title: "Deployment",
          description: "The developed website was successfully deployed, making it accessible online. While the specific deployment method isn't stated, it implies the website was hosted on a web server, allowing users to access it via the internet.",
          image: `${sanketa3}`
        }
      ],
      link: "https://saileshkumargandham.github.io/sanketa2k20/index.html",
      githubLink: "https://saileshkumargandham.github.io/sanketa2k20/index.html"
    },

  
    {
      title: "Player Intake Approach Using Classification TechniquesECHNIQUES",
      description: "This project uses machine learning to help IPL teams pick the best players. It analyzes past performance to predict player value, guiding teams on who to bid on and how much to spend.",
      longDescription: "This project develops a machine learning model to assist IPL franchises in player selection.  By analyzing historical performance data like runs, wickets, and age, it predicts a buy type for each player, indicating their value and suitability.  Using algorithms like Decision Trees and Random Forest, the model helps franchises strategize their bidding process and build competitive teams.  This data-driven approach aims to optimize spending and improve player acquisition during auctions.",
      technologies: ["Python 3.+", "NumPy", "Pandas", "MySQL", "Matplotlib", "Plotly" , "Seaborn"],
      keyfeatures: [
        {
          feature: "Focus on IPL Player Intake",
          featuredesc: "The project specifically targets the Indian Premier League (IPL) player selection process, aiming to improve how franchises acquire players.  It moves beyond general cricket player analysis to address the unique dynamics of IPL auctions and team building."
        },
        {
          feature: "Data-Driven Player Evaluation",
          featuredesc: "The core of the project is a machine learning model that analyzes historical player performance data.  This data-driven approach aims to replace traditional, potentially biased, evaluation methods with objective, quantifiable metrics."
        },
        {
          feature: "Buy Type Prediction",
          featuredesc: "The model predicts a buy type for each player, categorizing them for franchise bidding strategies. This output provides actionable insights for teams, going beyond simple performance rankings to suggest optimal acquisition strategies."
        },
        {
          feature: "Key Performance Features",
          featuredesc: "The model uses runs scored, wickets taken, and age as primary features for player evaluation. These metrics are fundamental to cricket performance and provide a basis for comparing players across different roles."
        },
        {
          feature: "Data Collection and Preprocessing",
          featuredesc: "The project employs various machine learning classification algorithms, including Decision Trees, Random Forest, Naive Bayes, and XGBoost.  This allows for comparison of model performance and selection of the most accurate and effective algorithm for player buy type prediction."
        },
      ],
      steps: [
        {
          title: "Environment Setup & System Design",
          description: "Gather historical IPL player data, including runs, wickets, age, and any other relevant features. Clean and preprocess this data, handling missing values and ensuring data quality for model training.",
          image: `${vehicle1}`
        },
        {
          title: "Feature Engineering",
          description: "Engineer new features from the raw data, such as player type (batsman, bowler, all-rounder) and a composite performance rating. These engineered features can improve model accuracy and provide more nuanced player representation.",
          image: `${vehicle2}`
        },
        {
          title: "Model Selection and Training",
          description: "Choose appropriate classification algorithms (Decision Tree, Random Forest, XGBoost, etc.) and train them on the prepared dataset. Evaluate model performance using metrics like accuracy, precision, recall, and F1-score to select the best-performing model.",
          image: `${vehicle3}`
        },
        {
          title: "Buy Type Definition and Prediction",
          description: "Define the buy type categories (e.g., Must Buy, Value Pick, Potential Player) based on player performance and franchise needs. Use the trained model to predict the buy type for each player, providing actionable insights for franchises",
          image: `${vehicle4}`
        },
        {
          title: "Evaluation and Refinement",
          description: "Evaluate the model's predictions against real-world outcomes or expert opinions. Refine the model iteratively, adjusting features, algorithms, or buy type definitions to improve its accuracy and effectiveness in real-world IPL player selection scenarios.",
          image: `${vehicle5}`
        }
      ],
      link: "https://drive.google.com/file/d/10P1HGqSDn6iwTff952sIHSh3jMv1srOx/view?usp=sharing",
      githubLink: "https://drive.google.com/file/d/10P1HGqSDn6iwTff952sIHSh3jMv1srOx/view?usp=sharing"
    },

    {
      title: "Portfolio",
      description: "This personal portfolio website was built using a combination of front-end web technologies",
      longDescription: "This project involved the development of a personal portfolio website to showcase skills and projects.  The site was constructed using front-end web technologies, including HTML for structuring the content, CSS for styling, JavaScript for interactive elements, and Bootstrap for responsive design and layout. The goal was to create a visually appealing and user-friendly platform to present a professional profile online.",
      technologies: ["Html", "Css", "JavaScript", "Bootstrap"],
      keyfeatures: [
        {
          feature: "About",
          featuredesc: "A personal introduction providing background information, career goals, and contact details (email, LinkedIn, GitHub, etc.).  This section helps visitors connect with you on a personal level and facilitates further communication."
        },
        {
          feature: "Skill Showcase",
          featuredesc: "A dedicated section highlighting key technical proficiencies, such as programming languages, frameworks, tools, and other relevant skills.  This could include visual representations like progress bars or tag clouds to emphasize expertise."
        },
        {
          feature: "Experience Timeline",
          featuredesc: "A chronological presentation of work history, internships, or relevant projects, detailing roles, responsibilities, and accomplishments. This section provides context and demonstrates practical application of skills."
        }
      ],
      steps: [
        {
          title: "Design and Planning",
          description: "This initial phase involves outlining the website's structure, creating wireframes or mockups, and deciding on the visual design and user experience.  It's where you define the content, layout, and overall look and feel of the portfolio.",
          image: `${port1}`
        },
        {
          title: "Development",
          description: "This is the core coding phase where HTML, CSS, JavaScript, and potentially other frameworks or libraries are used to build the website.  This involves writing the code, implementing the design, and adding interactive elements.",
          image: `${port2}`
        },
        {
          title: "Testing and Deployment",
          description: "Before launch, the website undergoes thorough testing to ensure functionality, responsiveness, and cross-browser compatibility.  Once tested, the website is deployed to a web server, making it accessible online.",
          image: `${port3}`
        }
      ],
      link: "https://saileshkumargandham.github.io/portfolio/",
      githubLink: "https://saileshkumargandham.github.io/portfolio/"
    },
    
    
  ];


  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const handleNextProject = () => {
    setSelectedProject((prev) => 
      prev === null ? 0 : prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevProject = () => {
    setSelectedProject((prev) => 
      prev === null ? projects.length - 1 : prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
      <div className="text-gray-800 min-h-screen">
        <ParticleRing />
        <Navbar />

              {/* Hero Section */}
              <section className="min-h-screen flex items-center justify-center relative">
                <div className="text-center space-y-6 p-4 fade-in">
                  <h1 className="text-6xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
                      Sailesh Gandham
                    </span>
                  </h1>
                  <p className="text-2xl text-gray-700">Front End Developer</p>
                  <div className="flex justify-center gap-6">
                    <a href="https://github.com/saileshkumargandham" target="Blank" className="hover:text-indigo-600 transition-colors">
                      <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/saileshkumargandham/" target="Blank" className="hover:text-indigo-600 transition-colors">
                      <Linkedin size={24} />
                    </a>
                    <a href="mailto:saileshgandhamofficial@gmail.com" target="Blank" className="hover:text-indigo-600 transition-colors">
                      <Mail size={24} />
                    </a>
                    <a href="https://drive.google.com/file/d/1CF2WwIZtxXFH24mHYtyaSOyr7_KKxRED/view?usp=drive_link" target="Blank" className="hover:text-indigo-600 transition-colors" >                      <FileTextIcon size={24} />
                    </a>
                  </div>
                </div>
                <button
                  onClick={scrollToNext}
                  className="absolute bottom-10 animate-bounce hover:text-indigo-600 transition-colors"
                >
                  <ChevronDown size={32} />
                </button>
              </section>

              {/* About Section */}
              <Section id="about" title="About Me">
                <div className="max-w-3xl mx-auto text-gray-700 space-y-6 fade-in">
                  <p>
                  As a Digital Specialist Engineer with over 4.2+ years of experience, I specialize in web development and cloud solutions, delivering high-impact results for leading global brands. At Infosys, I spearheaded the development of an interactive chatbot interface for Polo Ralph Lauren, boosting user engagement by 30%. I’ve led multiple projects where I streamlined front-end processes, achieving up to 40% faster load times and increasing customer satisfaction through intuitive designs               
                  </p>
                  
                  <p>Academically, I hold a BTech in Information Technology from Jawaharlal Nehru Technological University and am pursuing an MBA in HR from Andhra University. My technical acumen is complemented by certifications like Infosys Certified Front-End Web Developer and Microsoft Certified Azure Fundamentals, reinforcing my ability to drive innovation in both front-end and cloud architecture. </p>
                    <p>With a strong foundation in React.js, HTML, CSS, AWS Redshift, and MySQL, I have consistently delivered scalable, high-performance solutions. As an AWS Certified Solutions Architect - Associate, I bring a deep understanding of cloud integration, helping clients migrate and optimize their infrastructure seamlessly.

                    </p>

                </div>
              </Section>

              {/* Education and Certifications Section */}
              <Section id="education" title="Qualifications & Certifications">
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 fade-in">

                  {/* Education Section */}
                  <div>
                    <h3 className="text-2xl font-semibold" style={{ color: '#818cf8' }}>Education</h3>
                    <ul className="mt-4 space-y-2">
                      <li>
                        <p className="font-medium">Master of Business Administration in Human Resources</p>
                        <p className="text-sm">Andhra University</p>
                        <p>Jan 2024 – Dec 2025</p>
                      </li>
                      <li>
                        <p className="font-medium">Bachelor of Technology in Information Technology</p>
                        <p className="text-sm">SRKR Engineering College</p>
                        <p>Aug 2017 – May 2021</p>
                      </li>
                    </ul>
                  </div>

                  {/* Certifications Section */}
                  <div>
                    <h3 className="text-2xl font-semibold" style={{ color: '#818cf8' }}>Certifications</h3>
                    <ul className="mt-4 space-y-2">
                      <li>
                        <p className="font-medium">Infosys Certified Front End Web Developer.</p>
                        <p className="font-medium">Infosys Certified React Web Developer.</p>
                        <p className="font-medium">Aws Certified Cloud Practitioner</p>
                        <p className="font-medium">Aws Certified Cloud Solutions Architect -Associate</p>
                        <p className="font-medium">Microsoft Certified Azure Fundamentals</p>
                        <p className="font-medium">Google Techincal Support Fundamentals</p>
                      </li>
                    </ul>
                  </div>

                </div>
              </Section>


              {/* Experience Section */}
              <Section id="experience" title="Experience">
                <Timeline items={experiences} />
              </Section>

              {/* Skills Section */}
              <Section id="skills" title="Skills">
                <div className="max-w-4xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-6 fade-in">
                  {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                  ))}
                </div>
              </Section>

              {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer fade-in"
              onClick={() => handleProjectClick(index)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Project Details Modal */}
      {selectedProject !== null && (
        <ProjectDetails
          project={projects[selectedProject]}
          onClose={handleCloseProject}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}

              {/* Contact Section */}
              <Section id="contact" title="Get in Touch">
                <div className="max-w-xl mx-auto fade-in">
                  <form onSubmit={handleMailto} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg bg-white/80 focus:bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg bg-white/80 focus:bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg bg-white/80 focus:bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </Section>

        {/* Footer */}
        <footer className="py-6 text-center text-gray-600 border-t border-gray-200">
          <p>© {new Date().getFullYear()} Sailesh Kumar Gandham. All rights reserved.</p>
        </footer>
      </div>
  );
}

export default App;
