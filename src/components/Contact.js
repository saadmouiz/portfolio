import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  const contactInfo = [
    {
      Icon: HiOutlineMail,
      title: 'Email',
      value: 'saadmouiz15@gmail.com',
      link: 'mailto:saadmouiz15@gmail.com',
    },
    {
      Icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '+212 669 970 285',
      link: 'https://wa.me/212669970285',
    },
  ];

  const socialLinks = [
    { Icon: FaGithub, url: 'https://github.com/saadmouiz', alt: 'GitHub' },
    {
      Icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/saad-mouiz-381359269/',
      alt: 'LinkedIn',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative bg-gradient-to-b from-zinc-950 to-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-blue-500/20 opacity-10 blur-3xl -z-10" />

          <div className="bg-zinc-900/70 rounded-3xl backdrop-blur-2xl border border-zinc-700/60 p-8 md:p-10 lg:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.7)]">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400/80 mb-3">
                Let&apos;s talk
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Create Something Amazing
              </h2>
              <p className="text-zinc-400">
                Have a project in mind? Let&apos;s discuss how we can work together to bring
                your ideas to life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-12">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                {contactInfo.map(({ Icon, title, value, link: contactLink }) => (
                  <div key={title} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-400/30">
                      <Icon aria-label={title} className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-zinc-400 text-xs md:text-sm mb-1">{title}</p>
                      <a
                        href={contactLink}
                        className="text-white hover:text-blue-400 transition-colors text-sm md:text-base"
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="flex gap-4">
                  {socialLinks.map(({ Icon, url, alt }) => (
                    <motion.a
                      key={alt}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 md:w-12 md:h-12 bg-blue-500/10 rounded-xl flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 border border-blue-400/20"
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon aria-label={alt} className="w-5 h-5 text-blue-300" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col justify-center gap-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <motion.a
                  href="mailto:saadmouiz15@gmail.com"
                  className="gradient-border px-8 py-4 rounded-xl text-white text-center flex items-center justify-center gap-3 bg-zinc-900/80"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <HiOutlineMail aria-label="Email" className="w-5 h-5 text-blue-300" />
                  <span>Send me an email</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/212669970285"
                  className="bg-blue-500 px-8 py-4 rounded-xl text-black text-center hover:bg-blue-600 transition-colors flex items-center justify-center gap-3 shadow-[0_18px_40px_rgba(59,130,246,0.4)]"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaWhatsapp aria-label="WhatsApp" className="w-5 h-5 text-blue-900" />
                  <span>Message on WhatsApp</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;