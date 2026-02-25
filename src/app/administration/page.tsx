"use client";
import React from "react";
import { motion } from "framer-motion";
import { Crown, Users, Award, BookOpen, Shield, Star } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AdministrationPage() {
  const { t } = useLanguage();

  const leadershipTeam = [
    {
      id: "headteacher",
      name: t("administration.leadership.headteacher.name"),
      role: t("administration.leadership.headteacher.role"),
      bio: t("administration.leadership.headteacher.bio"),
      image: null,
      specialty: [
        t("administration.leadership.headteacher.specialty1"),
        t("administration.leadership.headteacher.specialty2"),
        t("administration.leadership.headteacher.specialty3")
      ]
    },
    {
      id: "director",
      name: t("administration.leadership.director.name"),
      role: t("administration.leadership.director.role"),
      bio: t("administration.leadership.director.bio"),
      image: null,
      specialty: [
        t("administration.leadership.director.specialty1"),
        t("administration.leadership.director.specialty2"),
        t("administration.leadership.director.specialty3")
      ]
    },
    {
      id: "dos",
      name: t("administration.leadership.dos.name"),
      role: t("administration.leadership.dos.role"),
      bio: t("administration.leadership.dos.bio"),
      image: null,
      specialty: [
        t("administration.leadership.dos.specialty1"),
        t("administration.leadership.dos.specialty2"),
        t("administration.leadership.dos.specialty3")
      ]
    },
    {
      id: "dosLower",
      name: t("administration.leadership.dosLower.name"),
      role: t("administration.leadership.dosLower.role"),
      bio: t("administration.leadership.dosLower.bio"),
      image: null,
      specialty: [
        t("administration.leadership.dosLower.specialty1"),
        t("administration.leadership.dosLower.specialty2"),
        t("administration.leadership.dosLower.specialty3")
      ]
    }
  ];

  const prefectPositions = [
    {
      id: "headPrefect",
      title: t("administration.prefects.headPrefect.title"),
      description: t("administration.prefects.headPrefect.description"),
      icon: Crown,
      color: "amber"
    },
    {
      id: "deputyPrefect",
      title: t("administration.prefects.deputyPrefect.title"),
      description: t("administration.prefects.deputyPrefect.description"),
      icon: Star,
      color: "blue"
    },
    {
      id: "academicPrefect",
      title: t("administration.prefects.academicPrefect.title"),
      description: t("administration.prefects.academicPrefect.description"),
      icon: BookOpen,
      color: "emerald"
    },
    {
      id: "disciplinePrefect",
      title: t("administration.prefects.disciplinePrefect.title"),
      description: t("administration.prefects.disciplinePrefect.description"),
      icon: Shield,
      color: "red"
    },
    {
      id: "welfarePrefect",
      title: t("administration.prefects.welfarePrefect.title"),
      description: t("administration.prefects.welfarePrefect.description"),
      icon: Users,
      color: "purple"
    },
    {
      id: "sportsPrefect",
      title: t("administration.prefects.sportsPrefect.title"),
      description: t("administration.prefects.sportsPrefect.description"),
      icon: Award,
      color: "cyan"
    }
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
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full mb-6">
              <Crown className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span className="text-amber-700 dark:text-amber-300 font-semibold">
                {t("administration.badge")}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
              {t("administration.heading")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("administration.description")}
            </p>
          </motion.div>

          {/* Leadership Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t("administration.leadership.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("administration.leadership.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leadershipTeam.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {member.bio}
                      </p>
                      
                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2">
                        {member.specialty.map((spec, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Prefect System Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-12 shadow-xl">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t("administration.prefects.title")}
                </h2>
                <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
                  {t("administration.prefects.subtitle")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prefectPositions.map((position, idx) => {
                const IconComponent = position.icon;
                const colorClasses = {
                  amber: "from-amber-500 to-orange-500",
                  blue: "from-blue-500 to-cyan-500",
                  emerald: "from-emerald-500 to-teal-500",
                  red: "from-red-500 to-pink-500",
                  purple: "from-purple-500 to-indigo-500",
                  cyan: "from-cyan-500 to-blue-500"
                };
                
                return (
                  <motion.div
                    key={position.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses[position.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center text-white mb-4`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {position.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Join Leadership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t("administration.cta.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                {t("administration.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/admissions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {t("administration.cta.enroll")}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-700 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 rounded-xl font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-300"
                >
                  {t("administration.cta.contact")}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
