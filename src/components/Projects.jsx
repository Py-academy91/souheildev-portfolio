import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ShoppingCart, Stethoscope, Globe, Brain, Map, BarChart3 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage.jsx';

const Projects = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    { id: 'vendaly', icon: ShoppingCart, gradient: 'from-tech-accent to-cyan-500', status: t('projects.vendaly.status'), statusColor: 'bg-amber-500/20 text-amber-400', link: '#', github: 'https://github.com/Py-academy91' },
    { id: 'infinity', icon: Stethoscope, gradient: 'from-emerald-500 to-teal-500', status: t('projects.infinity.status'), statusColor: 'bg-tech-success/20 text-tech-success', link: 'https://infinityclinic.net', github: 'https://github.com/Py-academy91' },
    { id: 'souheildev', icon: Globe, gradient: 'from-tech-accent2 to-violet-500', status: t('projects.souheildev.status'), statusColor: 'bg-tech-success/20 text-tech-success', link: 'https://souheildev.com', github: 'https://github.com/Py-academy91' },
    { id: 'neurotask', icon: Brain, gradient: 'from-tech-accent3 to-pink-500', status: t('projects.neurotask.status'), statusColor: 'bg-tech-success/20 text-tech-success', link: '#', github: 'https://github.com/Py-academy91' },
    { id: 'geoexplorer', icon: Map, gradient: 'from-orange-500 to-red-500', status: t('projects.geoexplorer.status'), statusColor: 'bg-tech-success/20 text-tech-success', link: '#', github: 'https://github.com/Py-academy91' },
    { id: 'dataviz', icon: BarChart3, gradient: 'from-blue-500 to-indigo-500', status: t('projects.dataviz.status'), statusColor: 'bg-tech-success/20 text-tech-success', link: '#', github: 'https://github.com/Py-academy91' },
  ];

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t('projects.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-accent to-tech-accent2 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative glass rounded-2xl overflow-hidden hover:border-tech-accent/30 transition-all duration-500"
            >
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>{project.status}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-accent transition-colors">{t(`projects.${project.id}.title`)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{t(`projects.${project.id}.desc`)}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {t(`projects.${project.id}.tags`).map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-400 border border-white/5">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a href={project.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-tech-accent/10 text-tech-accent text-sm font-medium hover:bg-tech-accent/20 transition-colors">
                    <ExternalLink className="w-4 h-4" />{t('projects.viewProject')}
                  </motion.a>
                  <motion.a href={project.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg glass text-gray-400 text-sm hover:text-white transition-colors">
                    <Github className="w-4 h-4" />{t('projects.viewCode')}
                  </motion.a>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-tech-accent/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;