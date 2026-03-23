"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Users, Globe, Star, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
import { useLanguage } from "../i18n/LanguageContext";

export default function HomePage() {
	const { t } = useLanguage();
	
	const features = [
		{
			icon: <Zap className="w-8 h-8" />,
			title: t("features.quranMemorization.title"),
			description: t("features.quranMemorization.description"),
		},
		{
			icon: <Shield className="w-8 h-8" />,
			title: t("features.islamicExcellence.title"),
			description: t("features.islamicExcellence.description"),
		},
		{
			icon: <Users className="w-8 h-8" />,
			title: t("features.holisticDevelopment.title"),
			description: t("features.holisticDevelopment.description"),
		},
		{
			icon: <Globe className="w-8 h-8" />,
			title: t("features.academicMastery.title"),
			description: t("features.academicMastery.description"),
		},
	];

	const testimonials = [
		{
			name: t("testimonials.aminaHassan.name"),
			role: t("testimonials.aminaHassan.role"),
			text: t("testimonials.aminaHassan.text"),
			rating: 5,
		},
		{
			name: t("testimonials.drMuhammad.name"),
			role: t("testimonials.drMuhammad.role"),
			text: t("testimonials.drMuhammad.text"),
			rating: 5,
		},
		{
			name: t("testimonials.zainab.name"),
			role: t("testimonials.zainab.role"),
			text: t("testimonials.zainab.text"),
			rating: 5,
		},
		{
			name: "Sheikh Abdirahman Ali",
			role: "Islamic Scholar",
			text: "A school that combines rigorous academic excellence with Qur'anic mastery—this is what African Islamic education should be.",
			rating: 5,
		},
		{
			name: "James Lwanga",
			role: "Guardian, Al Hanan Learner",
			text: "The holistic development approach ensures my ward is not just passing exams, but becoming a leader of character.",
			rating: 5,
		},
		{
			name: "Fatima Mayanja",
			role: "Parent of Hafiz Graduate",
			text: "Seeing my child complete the Qur'an memorization while maintaining academic excellence is a dream come true.",
			rating: 5,
		},
		{
			name: "Prof. Nakajjugo",
			role: "Ministry of Education Official",
			text: "Al Hanan exemplifies what registered, innovative schools should look like in Uganda—excellence in faith and academics.",
			rating: 5,
		},
		{
			name: "Ibrahim Musoke",
			role: "Parent & Business Owner",
			text: "The values and discipline instilled at Al Hanan will shape my children for life. It's a premium investment in their future.",
			rating: 5,
		},
		{
			name: "Halima Nakato",
			role: "Primary Seven Graduate, Al Hanan",
			text: "I'm proud to have memorized the Qur'an and excelled in my academics. Al Hanan changed my life.",
			rating: 5,
		},
		{
			name: "Karim Hassan",
			role: "Parent & Education Advocate",
			text: "In a world of ordinary schools, Al Hanan stands out. The teaching staff are among the most proficient in the country.",
			rating: 5,
		},
	];

	const solutions = [
		{
			title: t("academics.quranProgram"),
			description: t("homepage.solutions.quran.description"),
			features: [
				t("homepage.solutions.quran.feature1"),
				t("homepage.solutions.quran.feature2"),
				t("homepage.solutions.quran.feature3"),
			],
		},
		{
			title: t("academics.islamicStudiesProgram"),
			description: t("homepage.solutions.islamic.description"),
			features: [
				t("homepage.solutions.islamic.feature1"),
				t("homepage.solutions.islamic.feature2"),
				t("homepage.solutions.islamic.feature3"),
			],
		},
		{
			title: t("academics.primaryEducationProgram"),
			description: t("homepage.solutions.primary.description"),
			features: [
				t("homepage.solutions.primary.feature1"),
				t("homepage.solutions.primary.feature2"),
				t("homepage.solutions.primary.feature3"),
			],
		},
	];
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
			<Navbar />
			
			{/* Hero Section */}
			<section className="pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden relative">
				{/* Hero Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/Alhanan/Alhanan compound.jpeg"
						alt={t("homepage.heroImageAlt")}
						fill
						priority
						className="object-cover"
						sizes="100vw"
						quality={85}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/60 to-blue-900/60" />
				</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<div className="mb-6">
								<p className="text-emerald-300 text-lg font-semibold mb-3">{t("homepage.foundation.foundedBy")}</p>
								<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
									{t("hero.heading")}
								</h1>
								<p className="text-emerald-200 text-xl font-semibold italic mb-6">{t("hero.subheading")}</p>
							</div>
							<p className="text-lg sm:text-xl lg:text-lg text-white/85 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
								{t("hero.description")}
							</p>
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full sm:w-auto"
								>
									<Link
										href="/admissions"
										className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
									>
										{t("hero.ctaButton")}
										<ArrowRight className="w-5 h-5" />
									</Link>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full sm:w-auto"
								>
									<Link
										href="#why-al-hanan"
										className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-emerald-900 transition-all duration-300"
									>
										{t("hero.ctaSecondary")}
									</Link>
								</motion.div>
							</div>
						</motion.div>
						
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative"
						>
							<div className="relative z-10 bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-gray-700/50">
								<div className="grid grid-cols-2 gap-4 mb-6">
									<div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-2xl text-center">
										<div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">2019</div>
										<div className="text-sm text-emerald-700 dark:text-emerald-300">{t("homepage.founded")}</div>
									</div>
									<div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl text-center">
										<div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
										<div className="text-sm text-blue-700 dark:text-blue-300">{t("homepage.registered")}</div>
									</div>
								</div>
								<div className="flex items-center gap-2 mb-4">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
									))}
									<span className="text-white ml-2">{t("homepage.trustedByFamilies")}</span>
								</div>
								<p className="text-white/90 italic">
									&quot;{t("homepage.quote")}&quot;
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

		{/* Credibility & Institutional Markers */}
		<section className="py-12 md:py-16 border-y border-emerald-100 dark:border-emerald-900/30 bg-white/50 dark:bg-gray-800/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
							2019
						</div>
						<p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-semibold">
							Founded with Vision
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="text-center"
					>
						<div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
							500+
						</div>
						<p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-semibold">
							Learners Served
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-center"
					>
						<div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-2">
							100%
						</div>
						<p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-semibold">
							Registered Ministry
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="text-center"
					>
						<div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
							319+
						</div>
						<p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-semibold">
							Average PLE Distinction
						</p>
					</motion.div>
				</div>
			</div>
		</section>

		{/* Features Section */}
		<section className="py-12 sm:py-16 md:py-20" id="why-al-hanan">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
						{t("homepage.whyTitle")}
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						{t("homepage.whyDescription")}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.05, y: -10 }}
								className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50 text-center hover:shadow-3xl transition-all duration-500"
							>
								<div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
									{feature.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
									{feature.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
									{feature.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

		{/* Our Foundation Section */}
		<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<div className="mb-8">
							<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
								{t("homepage.foundation.title")}
							</h2>
							<p className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-6">
								{t("homepage.foundation.subtitle")}
							</p>
						</div>
						<p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
							<span className="font-semibold text-emerald-700 dark:text-emerald-300">
								{t("homepage.foundation.foundedBy")}
							</span>
						</p>
						<p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
							{t("homepage.foundation.paragraph1")}
						</p>
						<p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
							{t("homepage.foundation.paragraph2")}
						</p>
						<div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
							<p className="text-emerald-700 dark:text-emerald-400 font-bold mb-4">{t("homepage.foundation.coreValues")}</p>
							<ul className="space-y-3">
								{[
									t("homepage.foundation.value1"),
									t("homepage.foundation.value2"),
									t("homepage.foundation.value3"),
									t("homepage.foundation.value4"),
									t("homepage.foundation.value5"),
								].map((value, idx) => (
									<li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
										<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
										<span>{value}</span>
									</li>
								))}
							</ul>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src="/Alhanan/new/Mosque.JPG"
								alt="Al Hanan Mosque - Faith-centered learning environment"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
								quality={85}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>

		{/* Balanced Education Approach Section */}
		<section className="py-12 sm:py-16 md:py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
						{t("homepage.educationModel.title")}
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
						{t("homepage.educationModel.subtitle")}
					</p>
					<p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
						{t("homepage.educationModel.intro")}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{[
						{
							icon: <Users className="w-8 h-8" />,
							title: t("homepage.educationModel.pillar1.title"),
							description: t("homepage.educationModel.pillar1.description"),
						},
						{
							icon: <Globe className="w-8 h-8" />,
							title: t("homepage.educationModel.pillar2.title"),
							description: t("homepage.educationModel.pillar2.description"),
						},
						{
							icon: <Shield className="w-8 h-8" />,
							title: t("homepage.educationModel.pillar3.title"),
							description: t("homepage.educationModel.pillar3.description"),
						},
						{
							icon: <Star className="w-8 h-8" />,
							title: t("homepage.educationModel.pillar4.title"),
							description: t("homepage.educationModel.pillar4.description"),
						},
					].map((pillar, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ scale: 1.05, y: -10 }}
							className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-2xl p-6 shadow-lg border border-emerald-100 dark:border-emerald-800 hover:shadow-xl transition-all duration-300"
						>
							<div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-4">
								{pillar.icon}
							</div>
							<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
								{pillar.title}
							</h3>
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
								{pillar.description}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
				>
					<p className="text-xl md:text-2xl font-bold leading-relaxed">
						{t("homepage.educationModel.difference")}
					</p>
				</motion.div>
			</div>
		</section>

		{/* Student Life & Activities Showcase */}
		<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
						Life at Al Hanan
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						More than academics—our learners develop as complete individuals through comprehensive Qur'anic training, rigorous academics, Islamic studies, and character formation
					</p>
				</motion.div>

				{/* Qur'an Learning - Featured */}
				<div className="mb-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl group"
					>
						<Image
							src="/Alhanan/new/Primary4.JPG"
							alt="Students engaged in Qur'an memorization and learning"
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-500"
							sizes="100vw"
							quality={85}
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 via-emerald-900/40 to-transparent" />
						<div className="absolute inset-0 flex items-center">
							<div className="max-w-2xl p-6 sm:p-8 md:p-12 text-white">
								<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
									✨ Qur'an Memorization Journey
								</h3>
								<p className="text-base sm:text-lg text-white/90">
									Every learner at Al Hanan embarks on a sacred journey to memorize the entire Holy Qur'an. Daily structured sessions, expert guidance, and unwavering commitment ensure success by Primary Seven graduation.
								</p>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Six Key Areas of Life at Al Hanan */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					{[
						{
							image: "/Alhanan/new/Primary21.JPG",
							title: "📖 Islamic Studies",
							description: "Theology, jurisprudence, and Islamic history integrated into daily learning",
							color: "from-emerald-500 to-emerald-600"
						},
						{
							image: "/Alhanan/new/Primary22.JPG",
							title: "🎓 Academic Excellence",
							description: "Rigorous English, Arabic, Mathematics, and Science delivered with precision",
							color: "from-blue-500 to-blue-600"
						},
						{
							image: "/Alhanan/new/Primary31.JPG",
							title: "⚽ Sports & Development",
							description: "Physical education and sporting activities for holistic growth",
							color: "from-cyan-500 to-cyan-600"
						},
						{
							image: "/Alhanan/new/Primary32.JPG",
							title: "🎨 Arts & Culture",
							description: "Creative expression celebrating Islamic and African heritage",
							color: "from-purple-500 to-purple-600"
						},
						{
							image: "/Alhanan/new/AdminBlock1.JPG",
							title: "🏛️ World-Class Facilities",
							description: "Modern classrooms, mosque, administration, and learning spaces",
							color: "from-yellow-500 to-yellow-600"
						},
						{
							image: "/Alhanan/new/PlayTime1.JPG",
							title: "👥 Community & Discipline",
							description: "Structured activities building leadership, teamwork, and Islamic values",
							color: "from-pink-500 to-pink-600"
						},
					].map((item, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.08 }}
							whileHover={{ y: -10 }}
							className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
						>
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-500"
								sizes="(max-width: 768px) 100vw, 33vw"
								quality={85}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent group-hover:from-gray-900/95 transition-all duration-300" />
							<div className="absolute bottom-0 left-0 right-0 p-4">
								<h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
								<p className="text-white/80 text-sm">{item.description}</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Daily Schedule / Holistic Experience */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100 dark:border-emerald-900"
				>
					<h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
						A Day at Al Hanan
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{ time: "7:30 AM", activity: "Arrival & Morning Qur'an", icon: "📖" },
							{ time: "9:00 AM", activity: "Core Academic Classes", icon: "🎓" },
							{ time: "12:30 PM", activity: "Midday Prayers & Nutrition", icon: "🙏" },
							{ time: "1:30 PM", activity: "Islamic Studies & Activities", icon: "📚" },
						].map((slot, idx) => (
							<div key={idx} className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
								<div className="text-3xl mb-2">{slot.icon}</div>
								<div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">{slot.time}</div>
								<div className="text-gray-700 dark:text-gray-300 text-sm">{slot.activity}</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
				</div>
			</div>
		</section>

		{/* Solutions Showcase */}
		<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-500">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
						{t("homepage.ourPrograms")}
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
						{t("homepage.programsDescription")}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
						{solutions.map((solution, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.02, y: -5 }}
								className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500"
							>
								<h3 className="text-2xl font-bold text-white mb-4">
									{solution.title}
								</h3>
								<p className="text-white/80 mb-6 leading-relaxed">
									{solution.description}
								</p>
								<ul className="space-y-3 mb-6">
									{solution.features.map((feature, idx) => (
										<li key={idx} className="flex items-center gap-3 text-white/90">
											<CheckCircle className="w-5 h-5 text-green-400" />
											{feature}
										</li>
									))}
								</ul>
								<Link
									href="/academics"
									className="inline-flex items-center text-white hover:text-emerald-300 transition-colors duration-300 gap-2"
								>
									{t("homepage.exploreProgram")}
									<ArrowRight className="w-4 h-4" />
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<TeamSection />

		{/* Trust Signals & Accreditation Section */}
		<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
						🏆 Trusted, Recognized, Excellent
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						Al Hanan is officially registered with the Ministry of Education and holds high standards in Islamic education and academic excellence.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-emerald-200 dark:border-emerald-700/50"
					>
						<div className="text-4xl mb-4">✅</div>
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ministry Registered</h3>
						<p className="text-gray-600 dark:text-gray-300">
							100% fully registered and recognized by the Ministry of Education and Sports, Uganda. Operating with full compliance to national educational standards.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-blue-200 dark:border-blue-700/50"
					>
						<div className="text-4xl mb-4">📚</div>
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Expert Staff</h3>
						<p className="text-gray-600 dark:text-gray-300">
							Qualified educators with diploma-level minimum qualifications. Specialized Qur'anic teachers with proven track records in memorization coaching.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-cyan-200 dark:border-cyan-700/50"
					>
						<div className="text-4xl mb-4">🎯</div>
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Proven Results</h3>
						<p className="text-gray-600 dark:text-gray-300">
							Average PLE scores of 319+ at distinction level. 100% of learners complete Qur'anic memorization by Primary Seven. 100% secondary school transition.
						</p>
					</motion.div>
				</div>

				{/* Success by the Numbers */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
				>
					<h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Al Hanan by the Numbers</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold mb-2">2019</div>
							<div className="text-white/80">Founded with Vision</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
							<div className="text-white/80">Learners Served</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
							<div className="text-white/80">Ministry Registered</div>
						</div>
						<div className="text-center">
							<div className="text-3xl md:text-4xl font-bold mb-2">319+</div>
							<div className="text-white/80">PLE Distinction Average</div>
						</div>
					</div>
				</motion.div>

				{/* Program Standards */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg"
				>
					<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Our Standards & Commitments</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
								<CheckCircle className="w-5 h-5" /> Academic Excellence
							</h4>
							<ul className="space-y-2 text-gray-600 dark:text-gray-300">
								<li>✓ Maximum 35 learners per class</li>
								<li>✓ Daily assessments and monthly evaluations</li>
								<li>✓ Weekly parent progress updates</li>
								<li>✓ National curriculum + enrichment</li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
								<CheckCircle className="w-5 h-5" /> Qur'anic Excellence
							</h4>
							<ul className="space-y-2 text-gray-600 dark:text-gray-300">
								<li>✓ Minimum 2 hours daily Qur'an study</li>
								<li>✓ Expert Qur'anic teacher guidance</li>
								<li>✓ Full Hifdh completion by Primary Seven</li>
								<li>✓ Structured memorization curriculum</li>
							</ul>
						</div>
					</div>
				</motion.div>
			</div>
		</section>

		{/* CTA Section */}
		<section className="py-12 sm:py-16 md:py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20 dark:border-gray-700/50 text-center"
				>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
						{t("homepage.ctaHeading")}
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
						{t("homepage.ctaDescription")}
					</p>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto"
						>
							<Link
								href="/admissions"
								className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
							>
								{t("nav.applyNow")}
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto"
						>
							<Link
								href="/location"
								className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
							>
								{t("homepage.visitUsToday")}
							</Link>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>			
		
		<Footer />
		</main>
	);
}
