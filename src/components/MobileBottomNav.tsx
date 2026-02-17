"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, BookOpen, UserCheck, Mail, MoreHorizontal, X, Globe } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function MobileBottomNav() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Primary navigation items for bottom bar (4 items)
  const primaryNavItems = [
    { 
      icon: Home, 
      label: t("nav.home"), 
      href: "/",
      name: "home"
    },
    { 
      icon: BookOpen, 
      label: t("nav.academics"), 
      href: "/academics",
      name: "academics"
    },
    { 
      icon: UserCheck, 
      label: t("nav.admissions"), 
      href: "/admissions",
      name: "admissions"
    },
    { 
      icon: Mail, 
      label: t("nav.contact"), 
      href: "/contact",
      name: "contact"
    },
  ];

  // Secondary navigation items for drawer (More menu)
  const secondaryNavItems = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.schoolLife"), href: "/school-life" },
    { label: t("nav.gallery"), href: "/gallery" },
    { label: t("nav.location"), href: "/location" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.faq"), href: "/faq" },
    { label: t("nav.caseStudies"), href: "/case-studies" },
    { label: t("nav.testimonials"), href: "/testimonials" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.privacyPolicy"), href: "/privacy-policy" },
    { label: t("nav.termsOfService"), href: "/terms-of-service" },
    { label: t("nav.newsletter"), href: "/newsletter" },
  ];

  const handleNavClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Bottom Navigation Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 lg:hidden"
      >
        <div className="flex items-center justify-between px-2 py-3">
          {/* Primary Navigation Items */}
          {primaryNavItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="flex flex-col items-center py-2 px-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 flex-1 group"
                title={item.label}
              >
                <IconComponent className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-medium truncate">{item.label}</span>
              </Link>
            );
          })}

          {/* More Button - Opens Drawer */}
          <motion.button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center py-2 px-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 flex-1"
            title="More options"
          >
            <MoreHorizontal className="w-6 h-6 mb-1 hover:scale-110 transition-transform duration-300" />
            <span className="text-xs font-medium">More</span>
          </motion.button>

          {/* Language Switcher - In bottom nav */}
          <motion.button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center py-2 px-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 flex-1"
            data-no-translate="true"
            title="Toggle language"
          >
            <Globe className="w-6 h-6 mb-1 hover:scale-110 transition-transform duration-300" />
            <span className="text-xs font-medium">{language === "en" ? "ع" : "EN"}</span>
          </motion.button>
        </div>
      </motion.div>

      {/* More Drawer - Slides from bottom */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/40 z-30 lg:hidden"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[35] bg-white dark:bg-gray-900 rounded-t-3xl shadow-2xl max-h-[70vh] overflow-y-auto lg:hidden"
            >
              {/* Drawer Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {t("nav.moreOptions") || "More Options"}
                </h3>
                <motion.button
                  onClick={() => setIsDrawerOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </motion.button>
              </div>

              {/* Drawer Content - Secondary Links */}
              <div className="px-4 py-6 space-y-1">
                {secondaryNavItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-all duration-300 font-medium text-sm"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Spacing for safe area */}
              <div className="h-8" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
