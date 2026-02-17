"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  const footerLinks = {
    [t("footer.quickLinks")]: [
      { name: t("nav.about"), href: "/about" },
      { name: t("nav.academics"), href: "/academics" },
      { name: t("nav.admissions"), href: "/admissions" },
      { name: t("footer.contact"), href: "/location" }
    ],
    [t("footer.programs")]: [
      { name: t("nav.quranMemorization"), href: "/academics#quran" },
      { name: t("nav.islamicStudies"), href: "/academics#islamic" },
      { name: t("nav.primaryEducation"), href: "/academics#primary" },
      { name: t("nav.schoolLife"), href: "/school-life" }
    ],
    [t("footer.resources")]: [
      { name: t("nav.gallery"), href: "/gallery" },
      { name: t("footer.testimonials"), href: "/testimonials" },
      { name: t("faq.pageTitle"), href: "/faq" },
      { name: t("blog.pageTitle"), href: "/blog" }
    ],
    [t("footer.legal")]: [
      { name: t("footer.privacyPolicy"), href: "/privacy-policy" },
      { name: t("footer.termsOfService"), href: "/terms-of-service" },
      { name: t("footer.cookiePolicy"), href: "/cookie-policy" },
      { name: t("footer.sitemap"), href: "/sitemap" }
    ]
  };

  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-white/20 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {t("footer.schoolName")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t("footer.schoolDescription")}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-600 dark:text-gray-300">{t("footer.addressLine1")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{t("footer.addressLine2")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">0°35'21.5"N 33°30'03.7"E</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <a href="tel:+256745726350" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition-colors">
                    +256 707 153 422
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <a href="mailto:info@alhanan.ug" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition-colors">
                    info@alhanan.ug
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-500 rounded-2xl p-8 mb-12"
          >
          <div className="text-center text-white">
            <h4 className="text-2xl font-bold mb-4">{t("footer.stayConnected")}</h4>
            <p className="mb-6 opacity-90">
              {t("footer.subscribeDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                {t("footer.subscribe")}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0 text-sm">
            <span className="block">
              © {new Date().getFullYear()} {t("footer.schoolName")}. {t("footer.registrationLine")}
            </span>
            <span className="block mt-1 text-xs text-gray-500 dark:text-gray-500 italic">
              {t("footer.designedByPrefix")}{" "}
              <a
                href="https://xhenvolt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                Xhenvolt
              </a>
            </span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {/*
              { name: "LinkedIn", href: "#", icon: "linkedin" },
              { name: "Twitter", href: "#", icon: "twitter" },
              { name: "Facebook", href: "#", icon: "facebook" },
              { name: "Instagram", href: "#", icon: "instagram" }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label={social.name}
              >
                <div className="w-5 h-5 bg-current" />
              </motion.a>
            ))}
            */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
