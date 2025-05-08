import React from "react";
import img1 from "../images/image3.png";
import img2 from "../images/image2.png";
import img3 from "../images/image1.png";
import img4 from '../images/image4.png';
import img5 from '../images/image5.png';
import img6 from '../images/img6.png';

const ProjectCard = ({ project }) => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-lime-500 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 p-12">
        {/* Description Section */}
        <div className="space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-sm">
            {project.type}
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">
                {project.title}
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="relative px-4 py-2 bg-zinc-800 rounded-lg text-zinc-400 hover:text-lime-400 transition-colors">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-6">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View demo of ${project.title}`}
                className="flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors group/link"
              >
                <span>View Project</span>
                <svg
                  className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${project.title}`}
                className="flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors group/link"
              >
                <span>Source Code</span>
                <svg
                  className="w-5 h-5 transform group-hover/link:rotate-45 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative group/image">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsShowcase = () => {
  const projects = [
    {
      type: "Web Application",
      title: "inscription aiais",
      description: "A Laravel-based web platform for managing candidate applications with file uploads, admin review, and automated archiving of accepted submissions.",
      technologies: ["Laravel", "Tailwind"],
      image: img6,
      demoLink: "https://inscription.aiais.org/",
      
    }
    ,
    {
      type: "Featured Project",
      title: "E-commerce (Mizo Shop)",
      description: "An advanced e-commerce platform with modern UI and responsive design.",
      technologies: ["React Js", "CSS"],
      image: img1,
      demoLink: "https://e-commerce-mizo-shop.vercel.app/",
      codeLink: "https://github.com/saadmouiz/E-commerce-Mizo-Shop-",
    },
    {
      type: "Web Application",
      title: "Restaurant Menu",
      description: "Interactive restaurant menu with real-time ordering features.",
      technologies: ["React Js", "CSS"],
      image: img2,
      
      codeLink: "https://github.com/saadmouiz/menu-restaurant",
    },

    {
      type: "E-Commerce",
      title: "E-commerce Site",
      description: "A modern e-commerce platform with secure checkout and tracking features.",
      technologies: ["React", "CSS"],
      image: img3,
     
    },
    {
      type: "E-Commerce",
      title: "IndorePlants (Site)",
      description: "A modern e-commerce ",
      technologies: ["React", "Tailwind"],
      image: img5,
     
    },
    {
      type: "Web Application",
      title: "FETCH MOVIES",
      description: "A web application where I test fetching and displaying movie data dynamically from an external API.",
      technologies: ["React Js","API Integration", "CSS"],
      image: img4, 
      demoLink: "https://project-movies.vercel.app/",
      codeLink: "https://github.com/saadmouiz/Project-Movies",
    },
  ];

  return (
    <section id="projects" className="min-h-screen w-full bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-lime-400 mb-12">Featured Projects</h2>
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
