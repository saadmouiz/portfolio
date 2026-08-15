import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../images/image3.png';
import img5 from '../images/image5.png';
import img6 from '../images/img6.png';
import img8 from '../images/aiaa.png';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delay: index * 0.12,
    },
  }),
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="relative group"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />

    <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-800/80">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 p-8 md:p-10 lg:p-12">
        {/* Description Section */}
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs md:text-sm">
            {project.type}
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                {project.title}
              </span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="relative px-4 py-1.5 bg-zinc-800 rounded-lg text-xs md:text-sm text-zinc-300 hover:text-blue-400 hover:bg-zinc-700/80 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View demo of ${project.title}`}
                className="flex items-center gap-2 text-zinc-200 hover:text-blue-400 transition-colors group/link text-sm md:text-base"
              >
                <span>View Project</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transform group-hover/link:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${project.title}`}
                className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors group/link text-sm md:text-base"
              >
                <span>Source Code</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transform group-hover/link:rotate-45 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative group/image">
          <div className="relative rounded-xl overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700"
              whileHover={{ scale: 1.04 }}
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectsShowcase = () => {
  const projects = [
    {
      type: 'Web Application',
      title: 'Site de l’association Al Amal',
      description:
        'Développement d’un site web professionnel et responsive pour l’Association Initiative Al Amal, avec un espace d’administration permettant la gestion des contenus, bénéficiaires, partenaires et archives.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Tailwind CSS', 'JavaScript'],
      image: img8,
      demoLink: 'https://aiais.org/',
    },
    {
      type: 'Web Application',
      title: 'inscription aiais',
      description:
        'A Laravel-based web platform for managing candidate applications with file uploads, admin review, and automated archiving of accepted submissions.',
      technologies: ['Laravel', 'Tailwind'],
      image: img6,
      demoLink: 'https://inscription.aiais.org/',
    },
    {
      type: 'Featured Project',
      title: 'E-commerce (Mizo Shop)',
      description: 'An advanced e-commerce platform with modern UI and responsive design.',
      technologies: ['React Js', 'CSS'],
      image: img1,
      demoLink: 'https://e-commerce-mizo-shop.vercel.app/',
      codeLink: 'https://github.com/saadmouiz/E-commerce-Mizo-Shop-',
    },
    
    
    {
      type: 'E-Commerce',
      title: 'IndorePlants (Site)',
      description: 'A modern e-commerce storefront for indoor plants with a clean visual identity.',
      technologies: ['React', 'Tailwind'],
      image: img5,
    },
 
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute inset-x-0 top-10 h-32 bg-gradient-to-r from-blue-400/10 via-transparent to-indigo-400/10 blur-3xl pointer-events-none" />

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400/80 mb-3">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of client and personal projects that showcase my focus on clean
            experiences, performance and maintainable code.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
