import React, { createContext, useContext, useState } from 'react';
import fr from '../translations/fr.jsx';
import en from '../translations/en.jsx';
import ar from '../translations/ar.jsx';

const LanguageContext = createContext();
const translations = { fr, en, ar };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) { value = value?.[k]; }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}