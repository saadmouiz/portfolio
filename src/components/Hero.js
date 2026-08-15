// components/Hero.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import img from '../asset/back1.png';

const Hero = () => {
  const stats = [
    { value: '1+', label: 'Years of Experience' },
    { value: '7+', label: 'Projects Completed' },
    { value: '5+', label: 'Happy Clients' },
  ];

  const socialLinks = [
    { Icon: FaGithub, url: 'https://github.com/saadmouiz', alt: 'GitHub' },
    { Icon: FaWhatsapp, url: 'https://wa.me/212669970285', alt: 'WhatsApp' },
    { Icon: FaEnvelope, url: 'mailto:saadmouiz15@gmail.com', alt: 'Email' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-zinc-900 relative overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4">
                Computer Engineering Student
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
                Creative
                <span className="text-blue-400 glow block md:inline">
                  {' '}
                  Engineer
                </span>
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                Computer engineering student focused on building modern, responsive web
                applications with clean architecture and smooth user experiences.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-4 bg-zinc-800/50 rounded-xl backdrop-blur-md border border-zinc-700/60 hover:border-blue-400/60 transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold text-blue-400 mb-1">
                    {value}
                  </h3>
                  <p className="text-zinc-400 text-sm">{label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {socialLinks.map(({ Icon, url, alt }, index) => (
                <motion.a
                  key={alt}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-zinc-800/60 rounded-full hover:bg-blue-400/20 transition-all duration-300"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Icon aria-label={alt} className="w-5 h-5 text-blue-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-blue-400/40 opacity-30 blur-3xl rounded-full" />
            <motion.img
              src={img}
              alt="SAAD"
              className="relative z-10 w-[80%] max-w-md float-animation custom-shape rounded-[2.5rem] border border-blue-400/40 shadow-[0_0_40px_rgba(96,165,250,0.3)]"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
