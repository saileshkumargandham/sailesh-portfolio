// import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Github } from 'lucide-react';
import ParticleRing from './ParticleRing';
import { motion } from 'framer-motion';

interface ProjectDetailsProps {
  project: {
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    keyfeatures: {
        feature: string;
        featuredesc: string;
    }[];
    steps: {
        title: string;
        description: string;
        image: string;
      }[];
    link: string;
    githubLink?: string;
  };
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-indigo-100">
      <ParticleRing />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <div className="relative z-10 text-center space-y-8 px-4">
          <h1 className="text-5xl font-bold text-black tracking-tight animate-fade-in drop-shadow-lg">
            {project.title}
          </h1>
          <p className="text-2xl text-black/90 max-w-3xl mx-auto animate-fade-in delay-200 drop-shadow-lg">
            {project.description}
          </p>
          <div className="flex justify-center gap-6 animate-fade-in delay-300">
            {/* <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <Play size={20} />
              Live Demo
            </a> */}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-blue-200 text-black px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                <Github size={20} />
                View Source
              </a>
            )}
          </div>
        </div>

      </section>

      {/* Navigation Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50`}>
        <div className="backdrop-blur-md bg-white/40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <button
                onClick={onClose}
                className="text-black hover:text-indigo-300 transition-colors flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to Portfolio
              </button>
              <div className="flex gap-4">
                <button
                  onClick={onPrev}
                  className="p-2 text-black hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Previous project"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={onNext}
                  className="p-2 text-black hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Next project"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
            {project.longDescription}
            </p>
          </div>

          {/* Tech Stack - Horizontal Scroll */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
            <div className="relative">
              <div className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="flex gap-4" style={{ paddingLeft: '1px' }}>
                  {project.technologies.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="flex-shrink-0 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-100"
                    >
                      <span className="text-blue-600 whitespace-nowrap">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-white pointer-events-none" />
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.keyfeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-2">{feature.feature}</h3>
                  <p className="text-gray-600">
                    {feature.featuredesc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Development Process - New UI */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Development Process</h2>
            <div className="space-y-12">
              {project.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                        <div className="p-6">
                          <span className="text-white/80 text-sm">Step {index + 1}</span>
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProjectDetails;