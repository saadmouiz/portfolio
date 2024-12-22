import React from 'react';
import back from '../asset/back1.png'

const About = () => {
  const experiences = [
    {
      title: "Frontend Development",
      description: "Specialized in creating responsive and interactive web applications.",
      icon: "🎨",
      techs: ["React.js", "TailwindCSS", "JavaScript"]
    },
    {
      title: "Backend Development",
      description: "Building robust and scalable server-side applications.",
      icon: "⚙️",
      techs: [ "PHP", "Laravel", "MySQL"]
    }
  ];

  return (
    <section id='about' className="min-h-screen w-full bg-gradient-to-b from-zinc-950 to-zinc-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="inline-block text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500 mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-green-500 mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Transforming ideas into digital reality with clean code and modern design
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Column - Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img 
                src={back} 
                alt="SAAD" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-white mb-2">
                  <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                  <span>Available for freelance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">
                Creative <span className="text-lime-400">Developer</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                A passionate Full Stack Developer based in Casablanca, Morocco. 
                Specializing in building exceptional digital experiences that are both functional and visually appealing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Experience", value: "1+ Years" },
                { label: "Completed", value: "7+ Projects" },
                { label: "Location", value: "Casablanca" },
                { label: "Age", value: "20 Years" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50"
                >
                  <p className="text-zinc-400 text-sm mb-1">{item.label}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-lime-400 to-green-500 text-black font-medium rounded-xl hover:opacity-90 transition-opacity"
              >
                Let's Work Together
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-lime-400/50 text-lime-400 rounded-xl hover:bg-lime-400/10 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-16">
          <h2 className="text-3xl font-bold text-white text-center">What I <span className="text-lime-400">Do</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-700/50 hover:border-lime-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{exp.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>
                  <p className="text-zinc-400 mb-6">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-16">My <span className="text-lime-400">Skills</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Web Development", value: 90, icon: "💻" },
              { name: "UI/UX Design", value: 75, icon: "🎨" },
              { name: "Backend Development", value: 80, icon: "⚙️" },
              { name: "Database Management", value: 70, icon: "🗄️" },
              { name: "Problem Solving", value: 80, icon: "🧩" },
              { name: "Version Control", value: 80, icon: "📊" }
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50 hover:border-lime-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">{skill.name}</h3>
                    <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-lime-400 to-green-500 transition-all duration-500"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-lime-400 font-medium">{skill.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// Ajoutez ces keyframes dans votre fichier CSS global ou dans le style tag
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(styleSheet);