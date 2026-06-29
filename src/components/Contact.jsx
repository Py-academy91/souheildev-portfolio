import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Youtube, 
  Calendar, 
  Send,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage.jsx';

const Contact = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:contact@souheildev.com?subject=Contact depuis SouheilDev&body=Nom: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
  };

  const contactLinks = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'contact@souheildev.com',
      href: 'mailto:contact@souheildev.com',
      color: 'from-tech-accent to-cyan-500',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'Souheil Bouhadja',
      href: 'https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BgJ55P5nHSOycIeCxMMgKrQ%3D%3D',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'Py-academy91',
      href: 'https://github.com/Py-academy91',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Youtube,
      label: t('contact.youtube'),
      value: 'Chaines YouTube',
      href: '#',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t('contact.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-accent to-tech-accent2 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cartes de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="group flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm">{link.label}</p>
                  <p className="text-white font-medium">{link.value}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-tech-accent transition-colors" />
              </motion.a>
            ))}

            {/* Carte rendez-vous Brevo */}
            <motion.a
              href="https://meet.brevo.com/souheildevbrevo/entretien-travail"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-tech-accent/20 to-tech-accent2/20 border border-tech-accent/30 hover:border-tech-accent/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tech-accent to-tech-accent2 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-tech-accent text-sm font-medium">{t('contact.meeting')}</p>
                <p className="text-white">{t('contact.meetingDesc')}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-tech-accent" />
            </motion.a>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 space-y-4"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t('contact.form.name')}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-tech-accent/50 transition-colors"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t('contact.form.email')}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-tech-accent/50 transition-colors"
                placeholder="votre@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t('contact.form.message')}</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-tech-accent/50 transition-colors resize-none"
                placeholder="Votre message..."
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-tech-accent to-tech-accent2 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-tech-accent/25 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              {t('contact.form.send')}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
