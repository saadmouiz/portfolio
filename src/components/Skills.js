import html from '../asset/html-5.png'
import css from '../asset/css-3.png'
import js from '../asset/js.png'
import php from '../asset/php.png'
import laravel from '../asset/image.png'
import react from '../asset/physics.png'
import tail from '../asset/tailwind-removebg-preview.png'

const Skills = () => {
    const skills = [
      { name: "HTML5", icon: html },
      { name: "CSS", icon: css },
      { name: "Tailwind" , icon: tail},
      { name: "JavaScript", icon: js },
      { name: "PHP", icon: php },
      { name: "Laravel", icon: laravel },
      { name : "React js" , icon: react}
    ];
  
    return (
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-lime-400"></span>
            Technical Skills
          </h2>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map(({ name, icon }) => (
              <div key={name} className="group">
                <div className="p-8 rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-lime-400/50 transition-all duration-500 text-center">
                  <img 
                    src={icon} 
                    alt={name} 
                    className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-zinc-400 group-hover:text-lime-400 transition-colors">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Skills;