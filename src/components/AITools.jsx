import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Bot, 
  Code, 
  Paintbrush, 
  Video, 
  MessageSquare, 
  Wand2,
  Sparkles,
  Zap
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage.jsx';

const AITools = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const aiCategories = [
    {
      title: t('aiTools.coding'),
      icon: Code,
      color: 'from-tech-accent to-cyan-600',
      tools: [
        { name: 'Claude Code', desc: 'Assistant coding avance', icon: Bot },
        { name: 'Codex (OpenAI)', desc: 'Generation de code', icon: Code },
        { name: 'ChatGPT', desc: 'Programmation & debug', icon: MessageSquare },
        { name: 'Kimi', desc: 'Analyse de code long', icon: Zap },
        { name: 'DeepSeek', desc: 'Coding & reasoning', icon: Sparkles },
      ],
    },
    {
      title: t('aiTools.design'),
      icon: Paintbrush,
      color: 'from-tech-accent3 to-pink-600',
      tools: [
        { name: 'Claude Design', desc: 'UI/UX & design system', icon: Paintbrush },
        { name: 'Pi', desc: 'Brainstorming creatif', icon: Wand2 },
      ],
    },
    {
      title: t('aiTools.video'),
      icon: Video,
      color: 'from-tech-accent2 to-violet-600',
      tools: [
        { name: 'Claude Remotion', desc: 'Generation video programmatic', icon: Video },
      ],
    },
    {
      title: t('aiTools.general'),
      icon: MessageSquare,
      color: 'from-emerald-500 to-teal-600',
      tools: [
        { name: 'Claude', desc: 'Assistant generaliste', icon: Bot },
        { name: 'ChatGPT', desc: 'Recherche & analyse', icon: MessageSquare },
        { name: 'Kimi', desc: 'Traitement long contexte', icon: Zap },
        { name: 'DeepSeek', desc: 'Raisonnement avance', icon: Sparkles },
      ],
    },
  ];

  return (
    <section id="tools" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('aiTools.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t('aiTools.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-accent to-tech-accent2 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Grille des categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              {/* En-tete de categorie */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              {/* Liste des outils */}
              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + catIndex * 0.1 + toolIndex * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center opacity-80`}>
                      <tool.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{tool.name}</p>
                      <p className="text-gray-500 text-xs">{tool.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITools;
