import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Target, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage.jsx';

const About = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const cards = [
    { icon: Target, title: t('about.looking'), content: t('about.position'), highlight: true },
    { icon: Briefcase, title: t('about.contract'), content: 'CDI / CDD / Freelance — Full Remote' },
    { icon: GraduationCap, title: t('about.experience'), content: t('about.experienceText') },
    { icon: User, title: t('about.background'), content: t('about.backgroundText') },
  ];

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('about.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-accent to-tech-accent2 mx-auto rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          {t('about.description')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`p-6 rounded-2xl ${card.highlight ? 'bg-gradient-to-br from-tech-accent/20 to-tech-accent2/20 border border-tech-accent/30' : 'glass'} transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.highlight ? 'bg-tech-accent/20 text-tech-accent' : 'bg-white/5 text-gray-400'}`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-2 ${card.highlight ? 'text-tech-accent' : 'text-white'}`}>{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{card.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {['Full Remote', 'MERN Stack', 'React', 'Node.js', 'MongoDB', 'TypeScript'].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full glass text-sm text-tech-accent border border-tech-accent/20">{tag}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;