// components/Hero.jsx
import img from '../asset/back1.png';
import git from '../asset/github.png';
import whatsappIcon from '../asset/whatsapp.png';
import linkedin from '../asset/linkedin.png';

const Hero = () => {
  const stats = [
    { value: "1+", label: "Years of Experience" },
    { value: "7+", label: "Projects Completed" },
    { value: "5+", label: "Happy Clients" }
  ];

  const socialLinks = [
    { icon: git, url: "https://github.com/saadmouiz", alt: "GitHub" },
    { icon: whatsappIcon, url: "https://wa.me/212669970285", alt: "WhatsApp" },
    { icon: linkedin, url: "mailto:saadmouiz15@gmail.com", alt: "Email" }
  ];

  return (
    <section id='home' className="min-h-screen w-full bg-zinc-900 relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
                Creative
                <span className="text-lime-400 glow"> Developer</span>
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Turning ideas into reality through code and creativity. 
                Full-stack developer focused on crafting clean & user-friendly experiences.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map(({ value, label }) => (
                <div key={label} className="p-4 bg-zinc-800/50 rounded-xl backdrop-blur-md">
                  <h3 className="text-3xl font-bold text-lime-400 mb-1">{value}</h3>
                  <p className="text-zinc-400">{label}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon, url, alt }) => (
                <a
                  key={alt}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-zinc-800/50 rounded-full hover:bg-lime-400/20 transition-all duration-300"
                >
                  <img src={icon} alt={alt} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-lime-400 opacity-30 blur-3xl rounded-full"></div>
            <img
              src={img}
              alt="SAAD"
              className="relative z-10 w-[80%] float-animation custom-shape"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
