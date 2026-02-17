"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function FloatingLanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      type="button"
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-no-translate="true"
      className="fixed top-4 right-4 z-[60] px-3 py-2 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold text-sm shadow-lg"
      aria-label="Toggle language"
    >
      {language === "en" ? "العربية" : "EN"}
    </motion.button>
  );
}
