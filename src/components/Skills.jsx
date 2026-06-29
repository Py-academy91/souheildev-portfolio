import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Database, Wrench, Layers, FileCode, Palette, GitBranch, Container, Cloud, Flame, BookOpen } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage.jsx';

const Skills = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skillCategories = [
    {
      title: t('skills.frontend'), icon: Layers, color: 'from-tech-accent to-cyan-600',
      skills: [
        { name: 'React.js', level: 90, icon: Code2 },
        { name: 'JavaScript (ES6+)', level: 92, icon: FileCode },
        { name: 'TypeScript', level: 80, icon: FileCode },
        { name: 'HTML5 / CSS3', level: 95, icon: Palette },
        { name: 'Tailwind CSS', level: 88, icon: Palette },
        { name: 'Framer Motion', level: 85, icon: Layers },
      ],
    },
    {
      title: t('skills.backend'), icon: Server, color: 'from-tech-accent2 to-violet-600',
      skills: [
        { name: 'Node.js', level: 88, icon: Server },
        { name: 'Express.js', level: 90, icon: Server },
        { name: 'Python / Flask', level: 65, icon: Flame },
        { name: 'REST API Design', level: 92, icon: Code2 },
        { name: 'JWT / Auth', level: 85, icon: Code2 },
        { name: 'Socket.io', level: 80, icon: Server },
      ],
    },
    {
      title: t('skills.database'), icon: Database, color: 'from-tech-accent3 to-pink-600',
      skills: [
        { name: 'MongoDB', level: 88, icon: Database },
        { name: 'Mongoose', level: 85, icon: Database },
        { name: 'SQL (Scrimba)', level: 70, icon: Database },
        { name: 'Redis (basics)', level: 60, icon: Database },
        { name: 'Firebase', level: 75, icon: Cloud },
      ],
    },
    {
      title: t('skills.tools'), icon: Wrench, color: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'Git / GitHub', level: 90, icon: GitBranch },
        { name: 'Docker', level: 70, icon: Container },
        { name: 'Vercel / Render', level: 85, icon: Cloud },
        { name: 'Postman', level: 88, icon: Wrench },
        { name: 'VS Code', level: 95, icon: Code2 },
      ],
    },
    {
      title: t('skills.learning'), icon: BookOpen, color: 'from-amber-500 to-orange-600',
      skills: [
        { name: 'Python Flask (Scrimba VM)', level: 65, icon: Flame },
        { name: 'Pyodide (WebAssembly)', level: 60, icon: Code2 },
        { name: 'WebRTC', level: 70, icon: Server },
        { name: 'WebSockets avances', level: 75, icon: Server },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-accent to-tech-accent2 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-tech-accent font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 rounded-2xl glass border border-tech-accent/20 text-center"
        >
          <p className="text-gray-400">
            <span className="text-tech-accent font-semibold">Projet en cours :</span> Vendaly — Plateforme e-commerce mondiale avec architecture MERN scalable, paiement multi-pays, et auto-apprentissage Python integre via Pyodide + Docker
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;