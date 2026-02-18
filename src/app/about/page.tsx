"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, BookOpen, Users, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutPage() {
	const { t } = useLanguage();

	const values = [
		{
			icon: <Heart className="w-8 h-8" />,
			title: t("features.islamicExcellence.title"),
			description: t("features.islamicExcellence.description"),
		},
		{
			icon: <BookOpen className="w-8 h-8" />,
			title: t("features.academicMastery.title"),
			description: t("features.academicMastery.description"),
		},
		{
			icon: <Users className="w-8 h-8" />,
			title: t("features.holisticDevelopment.title"),
			description: t("features.holisticDevelopment.description"),
		},
		{
			icon: <Sparkles className="w-8 h-8" />,
			title: "Innovation in Education",
			description: "Futuristic approaches combined with traditional Islamic values create a unique learning environment.",
		}
	];

	const characteristics = [
		t("about.learnersDifferent.characteristic1"),
		t("about.learnersDifferent.characteristic2"),
		t("about.learnersDifferent.characteristic3"),
		t("about.learnersDifferent.characteristic4"),
		t("about.learnersDifferent.characteristic5"),
		t("about.learnersDifferent.characteristic6"),
		t("about.learnersDifferent.characteristic7"),
		t("about.learnersDifferent.characteristic8"),
		t("about.learnersDifferent.characteristic9"),
	];

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
						className="text-center mb-12"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
							{t("about.hero.title")}
						</h1>
						<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							{t("about.hero.subtitle")}
						</p>
					</motion.div>
				</div>
			</section>

			{/* Our Story */}
			<section className="py-12 md:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
								{t("about.ourStory.title")}
							</h2>
							<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
								{t("about.ourStory.paragraph1")}
							</p>
							<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
								{t("about.ourStory.paragraph2")}
							</p>
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
								{t("about.ourStory.paragraph3")}
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="relative"
						>
							<div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
								<Image
									src="/Alhanan/Alhanan Admin block.jpeg"
									alt={t("about.ourStory.imageAlt")}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
									quality={85}
								/>
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/80 to-transparent p-6">
									<p className="text-white font-semibold text-lg">{t("about.ourStory.established")}</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="py-12 md:py-20 bg-white/50 dark:bg-gray-800/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="bg-white/80 dark:bg-gray-700/80 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-700"
						>
							<Target className="w-12 h-12 text-emerald-600 mb-4" />
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								{t("about.missionTitle")}
							</h3>
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
								{t("about.missionText")}
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="bg-white/80 dark:bg-gray-700/80 rounded-2xl p-8 border border-blue-200 dark:border-blue-700"
						>
							<Eye className="w-12 h-12 text-blue-600 mb-4" />
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								{t("about.visionTitle")}
							</h3>
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
								{t("about.visionText")}
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Our Values */}
			<section className="py-12 md:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							{t("about.coreValues.title")}
						</h2>
						<p className="text-gray-600 dark:text-gray-300">
							{t("about.coreValues.description")}
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{values.map((value, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 hover:shadow-lg transition-all"
							>
								<div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
									{value.icon}
								</div>
								<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
									{value.title}
								</h3>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									{value.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Institutional Highlights Photo Gallery */}
			<section className="py-12 md:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Excellence in Every Detail
						</h2>
						<p className="text-gray-600 dark:text-gray-300">
							From world-class facilities to disciplined learning environments
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg group"
						>
							<Image
								src="/Alhanan/CompoundGroundView01.JPG"
								alt="Al Hanan Education Centre campus overview"
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-500"
								sizes="(max-width: 768px) 100vw, 33vw"
								quality={85}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<h3 className="font-bold">Modern Infrastructure</h3>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg group"
						>
							<Image
								src="/Alhanan/Classtime3.JPG"
								alt="Al Hanan classroom excellence and structured learning environment"
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-500"
								sizes="(max-width: 768px) 100vw, 33vw"
								quality={85}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<h3 className="font-bold">Academic Excellence</h3>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg group"
						>
							<Image
								src="/Alhanan/Orientation2.JPG"
								alt="Al Hanan orientation and student engagement programs"
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-500"
								sizes="(max-width: 768px) 100vw, 33vw"
								quality={85}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<h3 className="font-bold">Holistic Development</h3>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
							className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg group"
						>
							<Image
								src="/Alhanan/NursaryBlock1.JPG"
								alt="Al Hanan nursery facilities providing early childhood care"
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-500"
								sizes="(max-width: 768px) 100vw, 33vw"
								quality={85}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<h3 className="font-bold">Nurturing Care</h3>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
							className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg group"
						>
							<Image
								src="/Alhanan/Breaktime6.JPG"
								alt="Al Hanan student wellness and extracurricular activities"
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-500"
								sizes="(max-width: 768px) 100vw, 33vw"
								quality={85}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<h3 className="font-bold">Student Wellness</h3>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.5 }}
							className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg group"
						>
							<Image
								src="/Alhanan/Secondary2.JPG"
								alt="Al Hanan secondary school facilities and upper-level learning spaces"
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-500"
								sizes="(max-width: 768px) 100vw, 33vw"
								quality={85}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
								<h3 className="font-bold">Advanced Facilities</h3>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Why Al Hanan Learners Are Different */}
			<section className="py-12 md:py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-500">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							{t("about.learnersDifferent.title")}
						</h2>
						<p className="text-white/90 text-lg">
							{t("about.learnersDifferent.subtitle")}
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{characteristics.map((characteristic, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.05 }}
								className="flex items-center gap-3 text-white"
							>
								<CheckCircle className="w-6 h-6 flex-shrink-0" />
								<span>{characteristic}</span>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-12 md:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 text-center border border-emerald-200 dark:border-emerald-700/50"
					>
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
							{t("about.cta.title")}
						</h2>
						<p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
							{t("about.cta.description")}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a href="/admissions" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
								{t("about.cta.applyButton")}
								<ArrowRight className="w-5 h-5" />
							</a>
							<a href="/location" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition">
								{t("about.cta.visitButton")}
							</a>
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
