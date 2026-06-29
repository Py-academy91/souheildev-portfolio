import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Youtube, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage.jsx';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-72 h-72 rounded-full border border-tech-accent/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full border border-tech-accent2/10"
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-tech-success animate-pulse" />
          <span className="text-sm text-gray-300">{t('hero.status')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-gray-400 text-2xl md:text-3xl font-normal block mb-2">{t('hero.greeting')}</span>
          <span className="gradient-text">{t('hero.name')}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-16 md:h-20 flex items-center justify-center mb-6"
        >
          <TypeAnimation
            sequence={['Full Stack MERN Developer', 2000, 'React & Node.js Expert', 2000, 'Real-time Applications', 2000, 'AI-Enhanced Development', 2000]}
            wrapper="span"
            speed={50}
            className="text-2xl md:text-4xl font-mono text-tech-accent"
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-tech-accent to-tech-accent2 text-white font-semibold text-lg hover:shadow-xl hover:shadow-tech-accent/25 transition-all duration-300"
          >
            {t('hero.cta')}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl glass text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
          >
            {t('hero.cta2')}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/Py-academy91', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BgJ55P5nHSOycIeCxMMgKrQ%3D%3D', label: 'LinkedIn' },
            { icon: Youtube, href: '#', label: 'YouTube' },
            { icon: Mail, href: 'mailto:contact@souheildev.com', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-tech-accent hover:border-tech-accent/30 transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-gray-500" />
      </motion.div>
    </section>
  );
};

export default Hero;