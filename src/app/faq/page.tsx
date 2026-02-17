"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Search, HelpCircle, MessageCircle, Phone } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function FAQPage() {
	const { t } = useLanguage();

	const faqs = [
		{
			category: t("faq.services.title"),
			questions: [
				{
					q: t("faq.services.q1"),
					a: t("faq.services.a1"),
				},
				{
					q: t("faq.services.q2"),
					a: t("faq.services.a2"),
				},
				{
					q: t("faq.services.q3"),
					a: t("faq.services.a3"),
				},
			],
		},
		{
			category: t("faq.process.title"),
			questions: [
				{
					q: t("faq.process.q1"),
					a: t("faq.process.a1"),
				},
				{
					q: t("faq.process.q2"),
					a: t("faq.process.a2"),
				},
				{
					q: t("faq.process.q3"),
					a: t("faq.process.a3"),
				},
			],
		},
		{
			category: t("faq.support.title"),
			questions: [
				{
					q: t("faq.support.q1"),
					a: t("faq.support.a1"),
				},
				{
					q: t("faq.support.q2"),
					a: t("faq.support.a2"),
				},
				{
					q: t("faq.support.q3"),
					a: t("faq.support.a3"),
				},
			],
		},
		{
			category: t("faq.fees.title"),
			questions: [
				{
					q: t("faq.fees.q1"),
					a: t("faq.fees.a1"),
				},
				{
					q: t("faq.fees.q2"),
					a: t("faq.fees.a2"),
				},
				{
					q: t("faq.fees.q3"),
					a: t("faq.fees.a3"),
				},
			],
		},
	];
	const [openQuestion, setOpenQuestion] = useState<string | null>(null);
	const [searchTerm, setSearchTerm] = useState("");
	const allText = t("faq.allCategory");
	const [activeCategory, setActiveCategory] = useState(allText);

	const categories = [allText, ...Array.from(new Set(faqs.map((faq) => faq.category)))];

	const filteredFaqs = faqs.filter(
		(faq) =>
			(activeCategory === allText || faq.category === activeCategory) &&
			(searchTerm === "" ||
				faq.questions.some(
					(q) => q.q.toLowerCase().includes(searchTerm.toLowerCase()) || q.a.toLowerCase().includes(searchTerm.toLowerCase())
				))
	);

	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
			<Navbar />

			{/* Hero Section */}
			<section className="pt-32 pb-16">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center max-w-4xl mx-auto"
					>
						<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
						{t("faq.heroTitle")}
					</h1>
					<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
						{t("faq.heroDescription")}
						</p>
					</motion.div>
				</div>
			</section>

			<div className="max-w-5xl mx-auto px-6 pb-16">
				{/* Search and Filter */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-12"
				>
					<div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
						<div className="relative mb-6">
							<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
							<input
								type="text"
							placeholder={t("faq.searchPlaceholder")}
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
							/>
						</div>

						<div className="flex flex-wrap gap-3">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
										activeCategory === category
											? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
											: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
									}`}
								>
									{category}
								</button>
							))}
						</div>
					</div>
				</motion.section>

				{/* FAQ Content */}
				<section className="space-y-8">
					{filteredFaqs.map((faqCategory, categoryIndex) => (
						<motion.div
							key={faqCategory.category}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: categoryIndex * 0.1 }}
							className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50"
						>
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
								<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
									<HelpCircle className="w-5 h-5 text-white" />
								</div>
								{faqCategory.category}
							</h2>

							<div className="space-y-4">
								{faqCategory.questions
									.filter(
										(q) =>
											searchTerm === "" ||
											q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
											q.a.toLowerCase().includes(searchTerm.toLowerCase())
									)
									.map((faq, index) => {
										const questionId = `${faqCategory.category}-${index}`;
										const isOpen = openQuestion === questionId;

										return (
											<motion.div
												key={index}
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												viewport={{ once: true }}
												transition={{ delay: index * 0.05 }}
												className="border border-gray-200 dark:border-gray-600 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
											>
												<button
													onClick={() => setOpenQuestion(isOpen ? null : questionId)}
													className="w-full text-left p-6 flex justify-between items-center bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-700/70 transition-colors duration-300"
												>
													<span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.q}</span>
													<div className="flex-shrink-0">{isOpen ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-blue-600" />}</div>
												</button>

												<motion.div
													initial={false}
													animate={{ height: isOpen ? "auto" : 0 }}
													transition={{ duration: 0.3 }}
													className="overflow-hidden"
												>
													<div className="p-6 pt-0 bg-white/30 dark:bg-gray-800/30">
														<p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.a}</p>
													</div>
												</motion.div>
											</motion.div>
										);
									})}
							</div>
						</motion.div>
					))}
				</section>

				{/* Contact Section */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mt-16"
				>
					<div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">{t("faq.stillHaveQuestions")}</h2>
						<p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
							{t("faq.stillHaveQuestionsDesc")}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.a
								href="/contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
							>
								<MessageCircle className="w-5 h-5" />
								{t("faq.sendMessage")}
							</motion.a>
							<motion.a
								href="tel:+256741341483"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
							>
								<Phone className="w-5 h-5" />
								{t("faq.callNow")}
							</motion.a>
						</div>
					</div>
				</motion.section>
			</div>

			<Footer />
		</main>
	);
}
