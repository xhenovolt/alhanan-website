"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Heart, Zap, Award, TrendingUp, Users, CheckCircle, Target } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AcademicsPage() {
  const { t } = useLanguage();
  const [expandedProgram, setExpandedProgram] = useState<string>("lower");

  const progressionLevels = [
    {
      id: "nursery",
      level: t("academics.academicProgression.nursery.title"),
      badge: t("academics.academicProgression.nursery.badge"),
      color: "emerald",
      outcomes: [
        t("academics.academicProgression.nursery.outcomes.0"),
        t("academics.academicProgression.nursery.outcomes.1"),
        t("academics.academicProgression.nursery.outcomes.2"),
        t("academics.academicProgression.nursery.outcomes.3"),
      ]
    },
    {
      id: "lower",
      level: t("academics.academicProgression.lowerPrimary.title"),
      badge: t("academics.academicProgression.lowerPrimary.badge"),
      color: "blue",
      outcomes: [
        t("academics.academicProgression.lowerPrimary.outcomes.0"),
        t("academics.academicProgression.lowerPrimary.outcomes.1"),
        t("academics.academicProgression.lowerPrimary.outcomes.2"),
        t("academics.academicProgression.lowerPrimary.outcomes.3"),
      ]
    },
    {
      id: "upper",
      level: t("academics.academicProgression.upperPrimary.title"),
      badge: t("academics.academicProgression.upperPrimary.badge"),
      color: "purple",
      outcomes: [
        t("academics.academicProgression.upperPrimary.outcomes.0"),
        t("academics.academicProgression.upperPrimary.outcomes.1"),
        t("academics.academicProgression.upperPrimary.outcomes.2"),
        t("academics.academicProgression.upperPrimary.outcomes.3"),
      ]
    },
    {
      id: "primary7",
      level: t("academics.academicProgression.primarySeven.title"),
      badge: t("academics.academicProgression.primarySeven.badge"),
      color: "amber",
      outcomes: [
        t("academics.academicProgression.primarySeven.outcomes.0"),
        t("academics.academicProgression.primarySeven.outcomes.1"),
        t("academics.academicProgression.primarySeven.outcomes.2"),
        t("academics.academicProgression.primarySeven.outcomes.3"),
      ]
    }
  ];

  const graduationOutcomes = [
    { icon: <Award className="w-6 h-6" />, text: t("academics.graduationOutcomes.outcome1") },
    { icon: <TrendingUp className="w-6 h-6" />, text: t("academics.graduationOutcomes.outcome2") },
    { icon: <Users className="w-6 h-6" />, text: t("academics.graduationOutcomes.outcome3") },
    { icon: <Target className="w-6 h-6" />, text: t("academics.graduationOutcomes.outcome4") },
    { icon: <BookOpen className="w-6 h-6" />, text: t("academics.graduationOutcomes.outcome5") },
    { icon: <Heart className="w-6 h-6" />, text: t("academics.graduationOutcomes.outcome6") },
  ];

  const academicStandards = [
    t("academics.academicStandards.metric1"),
    t("academics.academicStandards.metric2"),
    t("academics.academicStandards.metric3"),
    t("academics.academicStandards.metric4"),
    t("academics.academicStandards.metric5"),
    t("academics.academicStandards.metric6"),
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
      <Navbar />
      
      {/* Main Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              {t("academics.heading")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              {t("academics.description")}
            </p>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 font-semibold">
              {t("academics.academicProgression.subtitle")}
            </p>
          </motion.div>

          {/* Academic Facilities Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-16"
          >
            <Image
              src="/Alhanan/Alhanan class bloack Ultra wide.jpeg"
              alt="Al Hanan Education Centre classroom block showcasing modern academic facilities"
              fill
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("academics.facilitiesTitle")}</h2>
              <p className="text-white/90">{t("academics.facilitiesSubtitle")}</p>
            </div>
          </motion.div>

          {/* Academic Progression Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t("academics.academicProgression.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("academics.academicProgression.subtitle")}
              </p>
            </div>

            {/* Progression Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {progressionLevels.map((level, idx) => (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setExpandedProgram(level.id)}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 ${
                    expandedProgram === level.id
                      ? `bg-${level.color}-50 dark:bg-${level.color}-900/30 border-${level.color}-300`
                      : "bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-${level.color}-600 to-blue-600 text-white`}>
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{level.level}</h3>
                  <p className={`text-sm font-semibold text-${level.color}-600 dark:text-${level.color}-400 mb-3`}>
                    {level.badge}
                  </p>
                  {expandedProgram === level.id && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      {level.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className={`w-4 h-4 text-${level.color}-600 flex-shrink-0 mt-0.5`} />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Graduation Outcomes Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-16 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t("academics.graduationOutcomes.title")}</h2>
            <p className="text-center text-emerald-50 mb-8 text-lg">{t("academics.graduationOutcomes.subtitle")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {graduationOutcomes.map((outcome, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-4 bg-white/10 rounded-xl p-4 backdrop-blur"
                >
                  <div className="text-emerald-200 flex-shrink-0">{outcome.icon}</div>
                  <p className="text-white leading-relaxed">{outcome.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic Standards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              {t("academics.academicStandards.title")}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Non-negotiable commitment to excellence at every level
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {academicStandards.map((standard, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-700/50"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 dark:text-gray-300">{standard}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Academic Programs - Enhanced */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Qur'an Memorization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 border border-emerald-200 dark:border-emerald-700/50"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {t("academics.quran.title")}
                  </h2>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                    {t("academics.quran.badge")}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t("academics.quran.description")}
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  t("academics.quran.feature1"),
                  t("academics.quran.feature2"),
                  t("academics.quran.feature3"),
                  t("academics.quran.feature4"),
                  t("academics.quran.feature5")
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Islamic Studies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-700/50"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Heart className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {t("academics.islamic.title")}
                  </h2>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                    {t("academics.islamic.badge")}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t("academics.islamic.description")}
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  t("academics.islamic.feature1"),
                  t("academics.islamic.feature2"),
                  t("academics.islamic.feature3"),
                  t("academics.islamic.feature4"),
                  t("academics.islamic.feature5")
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Primary Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 border border-cyan-200 dark:border-cyan-700/50"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {t("academics.primary.title")}
                  </h2>
                  <p className="text-cyan-600 dark:text-cyan-400 font-semibold mt-1">
                    {t("academics.primary.badge")}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t("academics.primary.description")}
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {[
                  t("academics.primary.feature1"),
                  t("academics.primary.feature2"),
                  t("academics.primary.feature3"),
                  t("academics.primary.feature4"),
                  t("academics.primary.feature5")
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-cyan-600 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
