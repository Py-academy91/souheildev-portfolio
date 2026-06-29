import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage.jsx';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative py-8 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-tech-accent to-tech-accent2 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text font-mono">
              SouheilDev
            </span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} SouheilDev. {t('footer.rights')}
          </p>

          {/* Built with */}
          <p className="text-gray-500 text-sm flex items-center gap-1">
            {t('footer.built')} <Heart className="w-4 h-4 text-tech-accent3" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
