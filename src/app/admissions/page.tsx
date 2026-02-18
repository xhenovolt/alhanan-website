"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Phone, Mail, FileText, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AdmissionsPage() {
  const { t } = useLanguage();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    learnerName: "",
    dateOfBirth: "",
    gender: "",
    currentClass: "",
    previousSchool: "",
    parentName: "",
    relationship: "",
    phoneNumber: "",
    emailAddress: "",
    residentialAddress: "",
    district: "",
    applicationStatement: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const validateForm = () => {
    const required = ["learnerName", "dateOfBirth", "gender", "currentClass", "parentName", "relationship", "phoneNumber", "emailAddress", "residentialAddress", "district"];
    for (let field of required) {
      if (!formData[field as keyof typeof formData]) {
        return false;
      }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setError(t("admissions.onlineForm.errorRequired") || "Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setTimeout(() => {
        setShowForm(false);
        setFormData({
          learnerName: "",
          dateOfBirth: "",
          gender: "",
          currentClass: "",
          previousSchool: "",
          parentName: "",
          relationship: "",
          phoneNumber: "",
          emailAddress: "",
          residentialAddress: "",
          district: "",
          applicationStatement: "",
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
      <Navbar />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t("admissions.heading")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("admissions.description")}
            </p>
          </motion.div>

          {/* Facilities Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Facilities & Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Compound */}
              <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Alhanan/Compound1.JPG"
                  alt="Al Hanan Education Centre compound overview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">Modern Campus</h3>
                  <p className="text-sm text-white/80">Safe, spacious learning environment</p>
                </div>
              </div>
              {/* Academic Block */}
              <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Alhanan/ClassBlock1.JPG"
                  alt="Al Hanan Education Centre classroom facilities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">Academic Excellence</h3>
                  <p className="text-sm text-white/80">Well-equipped learning spaces</p>
                </div>
              </div>
              {/* Dormitory */}
              <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Alhanan/BoysDormitory1.JPG"
                  alt="Al Hanan Education Centre dormitory facilities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">Residential Care</h3>
                  <p className="text-sm text-white/80">Comfortable, supervised accommodation</p>
                </div>
              </div>
              {/* Activities */}
              <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Alhanan/Breaktime1.JPG"
                  alt="Al Hanan students engaged in recreational activities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">Student Life</h3>
                  <p className="text-sm text-white/80">Holistic development through activities</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Admissions Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "1",
                title: t("admissions.stepTitle1"),
                description: t("admissions.stepDescription1")
              },
              {
                step: "2",
                title: t("admissions.stepTitle2"),
                description: t("admissions.stepDescription2")
              },
              {
                step: "3",
                title: t("admissions.stepTitle3"),
                description: t("admissions.stepDescription3")
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-700/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Requirements Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 md:p-12 border border-emerald-200 dark:border-emerald-700/50 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t("admissions.requirements")}
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                t("admissions.requirement1"),
                t("admissions.requirement2"),
                t("admissions.requirement3"),
                t("admissions.requirement4"),
                t("admissions.requirement5")
              ].map((req, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{req}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+256707153422" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
                <Phone className="w-5 h-5" />
                {t("admissions.callUs")}
              </a>
              <a href="mailto:info@alhanan.ug" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                <Mail className="w-5 h-5" />
                {t("admissions.emailUs")}
              </a>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                <FileText className="w-5 h-5" />
                {t("admissions.onlineForm.submitForm")}
              </button>
            </div>
          </motion.div>

          {/* Online Application Form Modal */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => !isLoading && !submitted && setShowForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 max-w-2xl w-full my-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {t("admissions.onlineForm.successMessage")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We'll review your application and contact you within 48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {t("admissions.onlineForm.title")}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {t("admissions.onlineForm.subtitle")}
                    </p>

                    {error && (
                      <div className="mb-6 flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg p-4">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-red-700 dark:text-red-400">{error}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Learner Section */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                          {t("admissions.onlineForm.learnerSection")}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="learnerName"
                            placeholder={t("admissions.onlineForm.fullName")}
                            value={formData.learnerName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="">{t("admissions.onlineForm.gender")} *</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                          <select
                            name="currentClass"
                            value={formData.currentClass}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="">{t("admissions.onlineForm.classPlaceholder")} *</option>
                            <option value="nursery">Nursery</option>
                            <option value="class1">Class 1</option>
                            <option value="class2">Class 2</option>
                            <option value="class3">Class 3</option>
                            <option value="class4">Class 4</option>
                            <option value="class5">Class 5</option>
                            <option value="class6">Class 6</option>
                            <option value="class7">Class 7</option>
                          </select>
                          <input
                            type="text"
                            name="previousSchool"
                            placeholder={t("admissions.onlineForm.previousSchool")}
                            value={formData.previousSchool}
                            onChange={handleInputChange}
                            className="w-full md:col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                      </div>

                      {/* Parent Section */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                          {t("admissions.onlineForm.parentSection")}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="parentName"
                            placeholder={t("admissions.onlineForm.parentGuardian")}
                            value={formData.parentName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                          <select
                            name="relationship"
                            value={formData.relationship}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="">{t("admissions.onlineForm.relationship")} *</option>
                            <option value="parent">Parent</option>
                            <option value="guardian">Guardian</option>
                            <option value="grandparent">Grandparent</option>
                          </select>
                          <input
                            type="tel"
                            name="phoneNumber"
                            placeholder={t("admissions.onlineForm.phoneNumber")}
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                          <input
                            type="email"
                            name="emailAddress"
                            placeholder={t("admissions.onlineForm.emailAddress")}
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                          <input
                            type="text"
                            name="residentialAddress"
                            placeholder={t("admissions.onlineForm.residentialAddress")}
                            value={formData.residentialAddress}
                            onChange={handleInputChange}
                            className="w-full md:col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                          <select
                            name="district"
                            value={formData.district}
                            onChange={handleInputChange}
                            className="w-full md:col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="">{t("admissions.onlineForm.district")} *</option>
                            <option value="iganga">Iganga</option>
                            <option value="jinja">Jinja</option>
                            <option value="mayuge">Mayuge</option>
                            <option value="kamuli">Kamuli</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Application Details */}
                      <div>
                        <textarea
                          name="applicationStatement"
                          placeholder={t("admissions.onlineForm.applicantStatement")}
                          value={formData.applicationStatement}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                      </div>

                      {/* Submit Buttons */}
                      <div className="flex gap-4">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? t("admissions.onlineForm.submitting") : t("admissions.onlineForm.submitForm")}
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="flex-1 px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-400 transition"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
