import { motion } from 'framer-motion';
import html from '../asset/html-5.png';
import css from '../asset/css-3.png';
import js from '../asset/js.png';
import php from '../asset/php.png';
import laravel from '../asset/image.png';
import react from '../asset/physics.png';
import tail from '../asset/tailwind-removebg-preview.png';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: html },
    { name: 'CSS', icon: css },
    { name: 'Tailwind', icon: tail },
    { name: 'JavaScript', icon: js },
    { name: 'PHP', icon: php },
    { name: 'Laravel', icon: laravel },
    { name: 'React js', icon: react },
  ];

  return (
    <section id="skills" className="py-24 relative bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-10 left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-16 w-56 h-56 bg-sky-400/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="w-12 h-[2px] bg-blue-400" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400/80 mb-1">
              Tech Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
          </div>
        </motion.div>

        <motion.p
          className="text-zinc-400 max-w-2xl mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          A curated stack that allows me to build fast, scalable and visually polished web
          applications from scratch — from pixel-perfect interfaces to robust backends.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.07, delayChildren: 0.1 },
            },
          }}
        >
          {skills.map(({ name, icon }) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              <div className="group relative">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-400/0 via-blue-400/10 to-sky-400/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />

                <div className="relative p-6 md:p-7 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800/70 group-hover:border-blue-400/60 transition-all duration-500 text-center shadow-[0_18px_45px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(96,165,250,0.25)]">
                  <motion.img
                    src={icon}
                    alt={name}
                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 4 }}
                  />
                  <p className="text-sm md:text-base text-zinc-300 group-hover:text-blue-400 transition-colors font-medium">
                    {name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;