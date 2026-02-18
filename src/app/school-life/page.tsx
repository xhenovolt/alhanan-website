"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function SchoolLifePage() {
  const { t } = useLanguage();

  const activities = [
    {
      title: t("schoolLife.activity1.title"),
      description: t("schoolLife.activity1.description"),
      color: "from-emerald-600 to-green-600"
    },
    {
      title: t("schoolLife.activity2.title"),
      description: t("schoolLife.activity2.description"),
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: t("schoolLife.activity3.title"),
      description: t("schoolLife.activity3.description"),
      color: "from-purple-600 to-pink-600"
    },
    {
      title: t("schoolLife.activity4.title"),
      description: t("schoolLife.activity4.description"),
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: t("schoolLife.activity5.title"),
      description: t("schoolLife.activity5.description"),
      color: "from-red-600 to-pink-600"
    },
    {
      title: t("schoolLife.activity6.title"),
      description: t("schoolLife.activity6.description"),
      color: "from-indigo-600 to-blue-600"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
      <Navbar />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t("schoolLife.heading")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("schoolLife.description")}
            </p>
          </motion.div>

          {/* School Facilities Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Nursery Block */}
              <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Alhanan/Alhanan Nursary classes.jpeg"
                  alt="Al Hanan Education Centre Nursery classroom facilities for early childhood education"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{t("common.nurseryTitle")}</h2>
                  <p className="text-white/90">{t("schoolLife.nurseryDesc")}</p>
                </div>
              </div>
              {/* Classroom Block */}
              <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Alhanan/Classtime1.JPG"
                  alt="Al Hanan classroom activities and academic engagement"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Academic Excellence</h2>
                  <p className="text-white/90">Interactive learning and scholarly engagement</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Student Activities Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Student Activities & Moments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg group"
                >
                  <Image
                    src={`/Alhanan/Breaktime${idx}.JPG`}
                    alt={`Al Hanan student activities during breaktime - moment ${idx}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Video Section - Abdul Swabur's Friday Sermon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-emerald-900/30 rounded-3xl p-6 md:p-10 border border-emerald-200 dark:border-emerald-700/50"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {t("schoolLife.learnersInAction")}
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t("schoolLife.showcasingTalent")}
              </p>
            </div>

            <div className="relative w-full max-w-4xl mx-auto group">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-emerald-100 dark:ring-emerald-900/50 transition-all duration-300 group-hover:shadow-emerald-500/20 group-hover:ring-emerald-200 dark:group-hover:ring-emerald-700/50">
                <iframe
                  src="https://www.youtube.com/embed/3XWboqG0E3Y"
                  title="Abdul Swabur delivering a Friday sermon at Al Hanan Education Centre"
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  aria-label="Video of Abdul Swabur delivering a Friday sermon at Al Hanan Education Centre"
                />
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 italic bg-white/60 dark:bg-gray-800/60 rounded-xl py-3 px-6 inline-block">
                "Abdul Swabur delivering a Friday sermon at Al Hanan Education Centre."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${activity.color} rounded-2xl p-8 text-white shadow-lg`}
              >
                <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                <p className="opacity-90">{activity.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-12 border border-emerald-200 dark:border-emerald-700/50"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t("schoolLife.valuesTitle")}
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {[
                t("schoolLife.value1"),
                t("schoolLife.value2"),
                t("schoolLife.value3"),
                t("schoolLife.value4"),
                t("schoolLife.value5"),
                t("schoolLife.value6")
              ].map((value, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✦</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
