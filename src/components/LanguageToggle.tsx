'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <button
        className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-semibold text-sm"
        aria-label="Toggle language"
      >
        {language === 'en' ? 'العربية' : 'EN'}
      </button>

      {/* Dropdown menu */}
      <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <button
          onClick={() => setLanguage('en')}
          className={`w-full px-4 py-2 text-left text-sm transition-colors ${
            language === 'en'
              ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-semibold'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          } rounded-t-xl`}
        >
          {t('common.english')}
        </button>
        <button
          onClick={() => setLanguage('ar')}
          className={`w-full px-4 py-2 text-left text-sm transition-colors ${
            language === 'ar'
              ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-semibold'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          } rounded-b-xl`}
        >
          {t('common.arabic')}
        </button>
      </div>
    </motion.div>
  );
}
