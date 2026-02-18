"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Heart, BookOpen, Users, Lock, Sparkles, CheckCircle, Award, Headphones, Home } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function WelfarePage() {
  const { t } = useLanguage();
  const [expandedTab, setExpandedTab] = useState("supervision");

  const welfareAreas = [
    {
      id: "supervision",
      title: t("welfare.supervisoryStructure.title"),
      subtitle: t("welfare.supervisoryStructure.subtitle"),
      icon: <Shield className="w-8 h-8" />,
      color: "blue",
      points: [
        t("welfare.supervisoryStructure.point1"),
        t("welfare.supervisoryStructure.point2"),
        t("welfare.supervisoryStructure.point3"),
        t("welfare.supervisoryStructure.point4"),
        t("welfare.supervisoryStructure.point5"),
        t("welfare.supervisoryStructure.point6"),
      ]
    },
    {
      id: "discipline",
      title: t("welfare.disciplineFramework.title"),
      subtitle: t("welfare.disciplineFramework.subtitle"),
      icon: <Award className="w-8 h-8" />,
      color: "emerald",
      description: t("welfare.disciplineFramework.description"),
      points: [
        t("welfare.disciplineFramework.principle1"),
        t("welfare.disciplineFramework.principle2"),
        t("welfare.disciplineFramework.principle3"),
        t("welfare.disciplineFramework.principle4"),
        t("welfare.disciplineFramework.principle5"),
        t("welfare.disciplineFramework.principle6"),
      ]
    },
    {
      id: "spiritual",
      title: t("welfare.spiritualDevelopment.title"),
      subtitle: t("welfare.spiritualDevelopment.subtitle"),
      icon: <Heart className="w-8 h-8" />,
      color: "purple",
      points: [
        t("welfare.spiritualDevelopment.component1"),
        t("welfare.spiritualDevelopment.component2"),
        t("welfare.spiritualDevelopment.component3"),
        t("welfare.spiritualDevelopment.component4"),
        t("welfare.spiritualDevelopment.component5"),
        t("welfare.spiritualDevelopment.component6"),
      ]
    },
    {
      id: "safety",
      title: t("welfare.safetyProtocols.title"),
      subtitle: t("welfare.safetyProtocols.subtitle"),
      icon: <Lock className="w-8 h-8" />,
      color: "red",
      points: [
        t("welfare.safetyProtocols.security1"),
        t("welfare.safetyProtocols.security2"),
        t("welfare.safetyProtocols.security3"),
        t("welfare.safetyProtocols.security4"),
        t("welfare.safetyProtocols.security5"),
        t("welfare.safetyProtocols.security6"),
      ]
    },
    {
      id: "environment",
      title: t("welfare.conduciveEnvironment.title"),
      subtitle: t("welfare.conduciveEnvironment.subtitle"),
      icon: <Home className="w-8 h-8" />,
      color: "green",
      points: [
        t("welfare.conduciveEnvironment.feature1"),
        t("welfare.conduciveEnvironment.feature2"),
        t("welfare.conduciveEnvironment.feature3"),
        t("welfare.conduciveEnvironment.feature4"),
        t("welfare.conduciveEnvironment.feature5"),
        t("welfare.conduciveEnvironment.feature6"),
      ]
    },
    {
      id: "moral",
      title: t("welfare.moralFormation.title"),
      subtitle: t("welfare.moralFormation.subtitle"),
      icon: <Sparkles className="w-8 h-8" />,
      color: "amber",
      points: [
        t("welfare.moralFormation.formation1"),
        t("welfare.moralFormation.formation2"),
        t("welfare.moralFormation.formation3"),
        t("welfare.moralFormation.formation4"),
        t("welfare.moralFormation.formation5"),
        t("welfare.moralFormation.formation6"),
      ]
    },
    {
      id: "parental",
      title: t("welfare.parentalSupport.title"),
      subtitle: t("welfare.parentalSupport.subtitle"),
      icon: <Users className="w-8 h-8" />,
      color: "cyan",
      points: [
        t("welfare.parentalSupport.support1"),
        t("welfare.parentalSupport.support2"),
        t("welfare.parentalSupport.support3"),
        t("welfare.parentalSupport.support4"),
        t("welfare.parentalSupport.support5"),
        t("welfare.parentalSupport.support6"),
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "from-blue-600 to-cyan-600 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50",
      emerald: "from-emerald-600 to-green-600 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/50",
      purple: "from-purple-600 to-pink-600 text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700/50",
      red: "from-red-600 to-rose-600 text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50",
      green: "from-green-600 to-emerald-600 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50",
      amber: "from-amber-600 to-orange-600 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50",
      cyan: "from-cyan-600 to-blue-600 text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-700/50",
    };
    return colors[color] || colors.emerald;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              {t("welfare.heading")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              {t("welfare.tagline")}
            </p>
            <p className="text-base text-emerald-700 dark:text-emerald-400 font-semibold max-w-2xl mx-auto">
              Comprehensive systems ensuring your child thrives physically, emotionally, spiritually, and intellectually
            </p>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-16"
          >
            <Image
              src="/Alhanan/Alhanan compound.jpeg"
              alt="Al Hanan Education Centre compound with safe, conducive learning environment"
              fill
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
          </motion.div>

          {/* Welfare Areas Section */}
          <div className="space-y-8">
            {welfareAreas.map((area, idx) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div
                  onClick={() => setExpandedTab(area.id)}
                  className={`cursor-pointer rounded-2xl p-6 md:p-8 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 hover:shadow-lg`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0 bg-gradient-to-br ${
                      expandedTab === area.id 
                        ? (area.color === "blue" ? "from-blue-600 to-cyan-600" :
                           area.color === "emerald" ? "from-emerald-600 to-green-600" :
                           area.color === "purple" ? "from-purple-600 to-pink-600" :
                           area.color === "red" ? "from-red-600 to-rose-600" :
                           area.color === "green" ? "from-green-600 to-emerald-600" :
                           area.color === "amber" ? "from-amber-600 to-orange-600" :
                           "from-cyan-600 to-blue-600")
                        : "from-gray-400 to-gray-500"
                    }`}>
                      {area.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {area.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 font-semibold">{area.subtitle}</p>
                      {area.description && (
                        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{area.description}</p>
                      )}
                    </div>
                  </div>

                  {/* Expandable Points */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={expandedTab === area.id ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {area.points.map((point, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={`flex items-start gap-3 p-4 rounded-lg ${getColorClasses(area.color)}`}
                          >
                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <p>{point}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              We Eliminate Parental Fear
            </h2>
            <p className="text-lg text-emerald-50 mb-8 text-center max-w-2xl mx-auto">
              Our comprehensive welfare framework is designed so parents never worry about their child's security, development, spiritual growth, or emotional wellbeing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur text-center">
                <Headphones className="w-8 h-8 mx-auto mb-4 text-emerald-200" />
                <h3 className="text-xl font-bold mb-2">Always Accessible</h3>
                <p className="text-emerald-50">Open communication channels for parent concerns and updates</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur text-center">
                <Shield className="w-8 h-8 mx-auto mb-4 text-emerald-200" />
                <h3 className="text-xl font-bold mb-2">Fully Protected</h3>
                <p className="text-emerald-50">24/7 supervision and security protocols aligned with national standards</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur text-center">
                <Heart className="w-8 h-8 mx-auto mb-4 text-emerald-200" />
                <h3 className="text-xl font-bold mb-2">Holistically Nurtured</h3>
                <p className="text-emerald-50">Development across academic, spiritual, emotional, and physical domains</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}