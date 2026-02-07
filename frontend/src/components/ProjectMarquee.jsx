import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: "AI Image Gen", stack: "Python, React", color: "bg-blue-100 dark:bg-blue-900" },
  { id: 2, title: "Portfolio V1", stack: "HTML, CSS", color: "bg-pink-100 dark:bg-pink-900" },
  { id: 3, title: "E-Commerce", stack: "MERN Stack", color: "bg-purple-100 dark:bg-purple-900" },
  { id: 4, title: "Task Manager", stack: "Java Spring", color: "bg-green-100 dark:bg-green-900" },
];

const ProjectMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-accent/5 mt-10">
      {/* Marquee Wrapper */}
      <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused]">
        {/* Sonsuz döngü için diziyi 3 kere kopyalıyoruz */}
        {[...projects, ...projects, ...projects].map((project, index) => (
          <Link 
            key={index} 
            to="/projects"
            className={`w-72 h-44 rounded-2xl p-6 flex flex-col justify-center items-center shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white/30 backdrop-blur-sm ${project.color} bg-opacity-40`}
          >
            <h3 className="text-xl font-bold text-accent mb-2 text-center">{project.title}</h3>
            <span className="text-xs font-semibold uppercase tracking-wider bg-white/50 px-3 py-1 rounded-full">
              {project.stack}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectMarquee;