"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, BookOpen, Users, GraduationCap } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ClasstimePage() {
  const { t } = useLanguage();

  const classLevels = [
    {
      id: "nursery",
      name: t("classtime.nursery.title"),
      description: t("classtime.nursery.description"),
      image: "/Alhanan/Classtime/Nursary ClassAlhanan.jpeg",
      age: t("classtime.nursery.age"),
      students: t("classtime.nursery.students")
    },
    {
      id: "primary1",
      name: t("classtime.primaryOne.title"),
      description: t("classtime.primaryOne.description"),
      image: "/Alhanan/Classtime/PrimaryOne.jpeg",
      age: t("classtime.primaryOne.age"),
      students: t("classtime.primaryOne.students")
    },
    {
      id: "primary2",
      name: t("classtime.primaryTwo.title"),
      description: t("classtime.primaryTwo.description"),
      image: "/Alhanan/Classtime/PrimaryTwo.jpeg",
      age: t("classtime.primaryTwo.age"),
      students: t("classtime.primaryTwo.students")
    },
    {
      id: "primary3",
      name: t("classtime.primaryThree.title"),
      description: t("classtime.primaryThree.description"),
      image: "/Alhanan/Classtime/PrimaryThree.jpeg",
      age: t("classtime.primaryThree.age"),
      students: t("classtime.primaryThree.students")
    },
    {
      id: "primary4",
      name: t("classtime.primaryFour.title"),
      description: t("classtime.primaryFour.description"),
      image: "/Alhanan/Classtime/PrimaryFour.jpeg",
      age: t("classtime.primaryFour.age"),
      students: t("classtime.primaryFour.students")
    },
    {
      id: "primary5",
      name: t("classtime.primaryFive.title"),
      description: t("classtime.primaryFive.description"),
      image: "/Alhanan/Classtime/PrimaryFive.jpeg",
      age: t("classtime.primaryFive.age"),
      students: t("classtime.primaryFive.students")
    },
    {
      id: "primary6",
      name: t("classtime.primarySix.title"),
      description: t("classtime.primarySix.description"),
      image: "/Alhanan/Classtime/PrimarySixx.jpeg",
      age: t("classtime.primarySix.age"),
      students: t("classtime.primarySix.students")
    },
    {
      id: "primary7",
      name: t("classtime.primarySeven.title"),
      description: t("classtime.primarySeven.description"),
      image: "/Alhanan/Classtime/PrimarySeven.jpeg",
      age: t("classtime.primarySeven.age"),
      students: t("classtime.primarySeven.students")
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
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
              <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-300 font-semibold">
                {t("classtime.badge")}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              {t("classtime.heading")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("classtime.description")}
            </p>
          </motion.div>

          {/* Class Schedule Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-16 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{t("classtime.stats.subjects")}</h3>
                <p className="text-emerald-100">{t("classtime.stats.subjectsDesc")}</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{t("classtime.stats.dailyHours")}</h3>
                <p className="text-emerald-100">{t("classtime.stats.dailyHoursDesc")}</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{t("classtime.stats.hifdh")}</h3>
                <p className="text-emerald-100">{t("classtime.stats.hifdhDesc")}</p>
              </div>
            </div>
          </motion.div>

          {/* Class Levels Grid */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("classtime.ourClasses")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("classtime.ourClassesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {classLevels.map((classItem, idx) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Class Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={classItem.image}
                    alt={`${classItem.name} classroom at Al Hanan Education Centre`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{classItem.name}</h3>
                  </div>
                </div>

                {/* Class Info */}
                <div className="p-5">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {classItem.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-gray-500 dark:text-gray-400">
                        {classItem.students}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-500 dark:text-gray-400">
                        {classItem.age}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t("classtime.cta.title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                {t("classtime.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/admissions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {t("classtime.cta.apply")}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-700 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 rounded-xl font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-300"
                >
                  {t("classtime.cta.contact")}
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
