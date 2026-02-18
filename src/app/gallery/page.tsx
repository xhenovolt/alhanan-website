"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: string;
}

export default function GalleryPage() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const galleryImages: GalleryItem[] = [
    // Featured/Hero Images
    {
      src: "/Alhanan/Alhanan compound.jpeg",
      alt: "Al Hanan Education Centre compound with school buildings and mosque dome",
      title: "School Compound",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Alhanan Admin block.jpeg",
      alt: "Al Hanan Education Centre Admin block building showcasing school infrastructure",
      title: "Administration Block",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Alhanan class bloack Ultra wide.jpeg",
      alt: "Al Hanan Education Centre Ultra wide classroom block with modern facilities",
      title: "Classroom Block",
      category: "Academic Spaces"
    },
    {
      src: "/Alhanan/Alhanan Nursary classes.jpeg",
      alt: "Al Hanan Education Centre Nursery classroom facilities for early childhood education",
      title: "Nursery Classes",
      category: "Academic Spaces"
    },
    // Aerial Views
    {
      src: "/Alhanan/ArialView01.JPG",
      alt: "Aerial view of Al Hanan compound - overview 1",
      title: "Aerial View 1",
      category: "Facilities"
    },
    {
      src: "/Alhanan/ArialView02.JPG",
      alt: "Aerial view of Al Hanan compound - overview 2",
      title: "Aerial View 2",
      category: "Facilities"
    },
    {
      src: "/Alhanan/ArialView03.JPG",
      alt: "Aerial view of Al Hanan compound - overview 3",
      title: "Aerial View 3",
      category: "Facilities"
    },
    {
      src: "/Alhanan/ArialView04.JPG",
      alt: "Aerial view of Al Hanan compound - overview 4",
      title: "Aerial View 4",
      category: "Facilities"
    },
    {
      src: "/Alhanan/ArialView1.JPG",
      alt: "Aerial view of Al Hanan compound - landscape 1",
      title: "Aerial Landscape 1",
      category: "Facilities"
    },
    {
      src: "/Alhanan/ArialView2.JPG",
      alt: "Aerial view of Al Hanan compound - landscape 2",
      title: "Aerial Landscape 2",
      category: "Facilities"
    },
    {
      src: "/Alhanan/ArialView3.JPG",
      alt: "Aerial view of Al Hanan compound - landscape 3",
      title: "Aerial Landscape 3",
      category: "Facilities"
    },
    {
      src: "/Alhanan/ArialView4.JPG",
      alt: "Aerial view of Al Hanan compound - landscape 4",
      title: "Aerial Landscape 4",
      category: "Facilities"
    },
    // Boys Dormitory
    {
      src: "/Alhanan/BoysDormitory1.JPG",
      alt: "Boys dormitory facility at Al Hanan - view 1",
      title: "Boys Dormitory 1",
      category: "Facilities"
    },
    {
      src: "/Alhanan/BoysDormitory2.JPG",
      alt: "Boys dormitory facility at Al Hanan - view 2",
      title: "Boys Dormitory 2",
      category: "Facilities"
    },
    {
      src: "/Alhanan/BoysDormitory3.JPG",
      alt: "Boys dormitory facility at Al Hanan - view 3",
      title: "Boys Dormitory 3",
      category: "Facilities"
    },
    // Breaktime Activities
    {
      src: "/Alhanan/Breaktime1.JPG",
      alt: "Learners during breaktime at Al Hanan - activity 1",
      title: "Breaktime Activity 1",
      category: "Activities & Student Life"
    },
    {
      src: "/Alhanan/Breaktime2.JPG",
      alt: "Learners during breaktime at Al Hanan - activity 2",
      title: "Breaktime Activity 2",
      category: "Activities & Student Life"
    },
    {
      src: "/Alhanan/Breaktime3.JPG",
      alt: "Learners during breaktime at Al Hanan - activity 3",
      title: "Breaktime Activity 3",
      category: "Activities & Student Life"
    },
    {
      src: "/Alhanan/Breaktime4.JPG",
      alt: "Learners during breaktime at Al Hanan - activity 4",
      title: "Breaktime Activity 4",
      category: "Activities & Student Life"
    },
    {
      src: "/Alhanan/Breaktime5.JPG",
      alt: "Learners during breaktime at Al Hanan - activity 5",
      title: "Breaktime Activity 5",
      category: "Activities & Student Life"
    },
    {
      src: "/Alhanan/Breaktime6.JPG",
      alt: "Learners during breaktime at Al Hanan - activity 6",
      title: "Breaktime Activity 6",
      category: "Activities & Student Life"
    },
    {
      src: "/Alhanan/Breaktime7.JPG",
      alt: "Learners during breaktime at Al Hanan - activity 7",
      title: "Breaktime Activity 7",
      category: "Activities & Student Life"
    },
    {
      src: "/Alhanan/Breaktime8.JPG",
      alt: "Learners during breaktime at Al Hanan - activity 8",
      title: "Breaktime Activity 8",
      category: "Activities & Student Life"
    },
    {
      src: "/Alhanan/Breaktime9.JPG",
      alt: "Learners during breaktime at Al Hanan - activity 9",
      title: "Breaktime Activity 9",
      category: "Activities & Student Life"
    },
    // Classroom Activities
    {
      src: "/Alhanan/Classtime1.JPG",
      alt: "Classroom activities at Al Hanan - session 1",
      title: "Class Activity 1",
      category: "Academic Spaces"
    },
    {
      src: "/Alhanan/Classtime2.JPG",
      alt: "Classroom activities at Al Hanan - session 2",
      title: "Class Activity 2",
      category: "Academic Spaces"
    },
    {
      src: "/Alhanan/Classtime3.JPG",
      alt: "Classroom activities at Al Hanan - session 3",
      title: "Class Activity 3",
      category: "Academic Spaces"
    },
    {
      src: "/Alhanan/Classtime4.JPG",
      alt: "Classroom activities at Al Hanan - session 4",
      title: "Class Activity 4",
      category: "Academic Spaces"
    },
    {
      src: "/Alhanan/Classtime5.JPG",
      alt: "Classroom activities at Al Hanan - session 5",
      title: "Class Activity 5",
      category: "Academic Spaces"
    },
    {
      src: "/Alhanan/Classtime6.JPG",
      alt: "Classroom activities at Al Hanan - session 6",
      title: "Class Activity 6",
      category: "Academic Spaces"
    },
    // Class Blocks Infrastructure
    {
      src: "/Alhanan/ClassBlock.JPG",
      alt: "Class block building at Al Hanan - main structure",
      title: "Class Block Main",
      category: "Academic Spaces"
    },
    {
      src: "/Alhanan/ClassBlock1.JPG",
      alt: "Class block building at Al Hanan - view 1",
      title: "Class Block 1",
      category: "Academic Spaces"
    },
    {
      src: "/Alhanan/ClassBlock2.JPG",
      alt: "Class block building at Al Hanan - view 2",
      title: "Class Block 2",
      category: "Academic Spaces"
    },
    {
      src: "/Alhanan/ClassBlock3.JPG",
      alt: "Class block building at Al Hanan - view 3",
      title: "Class Block 3",
      category: "Academic Spaces"
    },
    // Compound Views
    {
      src: "/Alhanan/Compound1.JPG",
      alt: "Al Hanan compound overview - perspective 1",
      title: "Compound View 1",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Compound2.JPG",
      alt: "Al Hanan compound overview - perspective 2",
      title: "Compound View 2",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Compound3.JPG",
      alt: "Al Hanan compound overview - perspective 3",
      title: "Compound View 3",
      category: "Facilities"
    },
    {
      src: "/Alhanan/CompoundGroundView01.JPG",
      alt: "Al Hanan compound ground view - angle 1",
      title: "Ground View 1",
      category: "Facilities"
    },
    {
      src: "/Alhanan/CompoundGroundView02.JPG",
      alt: "Al Hanan compound ground view - angle 2",
      title: "Ground View 2",
      category: "Facilities"
    },
    {
      src: "/Alhanan/CompoundGroundView03.JPG",
      alt: "Al Hanan compound ground view - angle 3",
      title: "Ground View 3",
      category: "Facilities"
    },
    {
      src: "/Alhanan/CompoundGroundView04.JPG",
      alt: "Al Hanan compound ground view - angle 4",
      title: "Ground View 4",
      category: "Facilities"
    },
    {
      src: "/Alhanan/CompoundGroundView05.JPG",
      alt: "Al Hanan compound ground view - angle 5",
      title: "Ground View 5",
      category: "Facilities"
    },
    {
      src: "/Alhanan/CompoundGroundView06.JPG",
      alt: "Al Hanan compound ground view - angle 6",
      title: "Ground View 6",
      category: "Facilities"
    },
    {
      src: "/Alhanan/CompoundGroundView07.JPG",
      alt: "Al Hanan compound ground view - angle 7",
      title: "Ground View 7",
      category: "Facilities"
    },
    {
      src: "/Alhanan/CompoundGroundView08.JPG",
      alt: "Al Hanan compound ground view - angle 8",
      title: "Ground View 8",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Compund1.JPG",
      alt: "Al Hanan compound additional view 1",
      title: "Compound Additional 1",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Compund2.JPG",
      alt: "Al Hanan compound additional view 2",
      title: "Compound Additional 2",
      category: "Facilities"
    },
    // Nursery Blocks
    {
      src: "/Alhanan/NursaryBlock1.JPG",
      alt: "Nursery block facility at Al Hanan - view 1",
      title: "Nursery Block 1",
      category: "Academic Spaces"
    },
    {
      src: "/Alhanan/NursaryBlock2.JPG",
      alt: "Nursery block facility at Al Hanan - view 2",
      title: "Nursery Block 2",
      category: "Academic Spaces"
    },
    {
      src: "/Alhanan/NursaryBlock4.JPG",
      alt: "Nursery block facility at Al Hanan - view 3",
      title: "Nursery Block 3",
      category: "Academic Spaces"
    },
    // Orientation Events
    {
      src: "/Alhanan/Orientation1.JPG",
      alt: "Orientation event at Al Hanan - session 1",
      title: "Orientation 1",
      category: "School Events"
    },
    {
      src: "/Alhanan/Orientation2.JPG",
      alt: "Orientation event at Al Hanan - session 2",
      title: "Orientation 2",
      category: "School Events"
    },
    {
      src: "/Alhanan/Orientation3.JPG",
      alt: "Orientation event at Al Hanan - session 3",
      title: "Orientation 3",
      category: "School Events"
    },
    {
      src: "/Alhanan/Orientation4.JPG",
      alt: "Orientation event at Al Hanan - session 4",
      title: "Orientation 4",
      category: "School Events"
    },
    {
      src: "/Alhanan/Orientation5.JPG",
      alt: "Orientation event at Al Hanan - session 5",
      title: "Orientation 5",
      category: "School Events"
    },
    {
      src: "/Alhanan/Orientation6.JPG",
      alt: "Orientation event at Al Hanan - session 6",
      title: "Orientation 6",
      category: "School Events"
    },
    {
      src: "/Alhanan/Orientations1.JPG",
      alt: "Orientation event at Al Hanan - group 1",
      title: "Orientation Group 1",
      category: "School Events"
    },
    {
      src: "/Alhanan/Orientations2.JPG",
      alt: "Orientation event at Al Hanan - group 2",
      title: "Orientation Group 2",
      category: "School Events"
    },
    {
      src: "/Alhanan/Orientations3.JPG",
      alt: "Orientation event at Al Hanan - group 3",
      title: "Orientation Group 3",
      category: "School Events"
    },
    {
      src: "/Alhanan/Orientations4.JPG",
      alt: "Orientation event at Al Hanan - group 4",
      title: "Orientation Group 4",
      category: "School Events"
    },
    // Secondary Facilities
    {
      src: "/Alhanan/Secondary1.JPG",
      alt: "Secondary facilities at Al Hanan - view 1",
      title: "Secondary Facilities 1",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Secondary2.JPG",
      alt: "Secondary facilities at Al Hanan - view 2",
      title: "Secondary Facilities 2",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Secondary3.JPG",
      alt: "Secondary facilities at Al Hanan - view 3",
      title: "Secondary Facilities 3",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Secondary4.JPG",
      alt: "Secondary facilities at Al Hanan - view 4",
      title: "Secondary Facilities 4",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Secondary5.JPG",
      alt: "Secondary facilities at Al Hanan - view 5",
      title: "Secondary Facilities 5",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Secondary6.JPG",
      alt: "Secondary facilities at Al Hanan - view 6",
      title: "Secondary Facilities 6",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Secondary7.JPG",
      alt: "Secondary facilities at Al Hanan - view 7",
      title: "Secondary Facilities 7",
      category: "Facilities"
    },
    {
      src: "/Alhanan/Secondary8.JPG",
      alt: "Secondary facilities at Al Hanan - view 8",
      title: "Secondary Facilities 8",
      category: "Facilities"
    },
    // Additional Images
    {
      src: "/Alhanan/DSC_0162~2.JPG",
      alt: "Al Hanan school moment - snapshot 1",
      title: "School Moment 1",
      category: "Community Moments"
    },
    {
      src: "/Alhanan/DSC_0163~2.JPG",
      alt: "Al Hanan school moment - snapshot 2",
      title: "School Moment 2",
      category: "Community Moments"
    },
    {
      src: "/Alhanan/DSC_0208~2.JPG",
      alt: "Al Hanan school moment - snapshot 3",
      title: "School Moment 3",
      category: "Community Moments"
    },
    {
      src: "/Alhanan/DSC_0209~2.JPG",
      alt: "Al Hanan school moment - snapshot 4",
      title: "School Moment 4",
      category: "Community Moments"
    },
    {
      src: "/Alhanan/DSC_0217.JPG",
      alt: "Al Hanan school moment - snapshot 5",
      title: "School Moment 5",
      category: "Community Moments"
    },
    {
      src: "/Alhanan/Latrines.JPG",
      alt: "Sanitation facilities at Al Hanan - safety and hygiene infrastructure",
      title: "Sanitation Facilities",
      category: "Facilities"
    },
  ];

  const categories = [
    { id: "all", label: "All Gallery" },
    { id: "Facilities", label: "Facilities & Infrastructure" },
    { id: "Academic Spaces", label: "Academic Spaces" },
    { id: "Activities & Student Life", label: "Activities & Student Life" },
    { id: "School Events", label: "School Events" },
    { id: "Community Moments", label: "Community Moments" },
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              {t("gallery.heading")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("gallery.description")}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-emerald-600 text-white shadow-lg scale-105"
                    : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid - Thumbnail Style Like Google Photos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 mb-12">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, idx) => (
                <motion.div
                  key={`${activeCategory}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(idx)}
                  className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer aspect-square bg-gray-300 dark:bg-gray-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-115"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Overlay - View Fullscreen */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/30 backdrop-blur rounded-full p-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Tooltip - Show on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-semibold truncate">{image.title}</p>
                    <p className="text-white/70 text-xs truncate">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Gallery Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 border border-emerald-200 dark:border-emerald-700/50 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t("gallery.morePhotosTitle")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t("gallery.morePhotosDesc")}
            </p>
            <a href="/location" className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
              {t("gallery.scheduleVisit")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 z-60 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Left Arrow */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-6 z-60 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 z-60 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center"
            >
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={95}
              />
            </motion.div>

            {/* Image Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-6 left-6 right-6 text-white z-60 bg-black/40 backdrop-blur rounded-lg p-4 max-w-md"
            >
              <h3 className="text-lg font-bold mb-1">{filteredImages[selectedImage].title}</h3>
              <p className="text-emerald-300 text-sm">{filteredImages[selectedImage].category}</p>
              <p className="text-white/70 text-xs mt-2">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
