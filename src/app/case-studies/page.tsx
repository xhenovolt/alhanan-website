"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const caseStudies = [
	{
		title: "Academic Excellence Journey",
		student: "Ahmed Hassan - Primary 7 Graduate",
		challenge:
			"Balancing Qur'an memorization with rigorous academic demands while developing leadership qualities.",
		approach:
			"Structured curriculum integrating Islamic studies, comprehensive academics, and character development through our 4-level progression system.",
		results:
			"Completed Qur'an memorization, secured 321/400 PLE score with distinction, and developed into confident community leader.",
		impact: "Admitted to top-tier secondary institution with scholarship"
	},
	{
		title: "Holistic Student Transformation",
		student: "Zainab Nakato - Upper Primary Learner",
		challenge:
			"Shy, introverted learner struggling with confidence and academic engagement.",
		approach:
			"Our welfare framework emphasizing supervision, discipline, spiritual development, and safe environment created space for growth.",
		results:
			"Now a confident class leader, excelling academically with 85% average, and actively participating in school activities and mosque programs.",
		impact: "Parents report profound transformation in character and confidence"
	},
	{
		title: "Institutional Excellence Recognition",
		institution: "Al Hanan Education Centre",
		challenge:
			"Establishing and scaling a world-class Islamic educational institution in rural Uganda.",
		approach:
			"Founded 2017 with vision of integrating Qur'anic memorization, academic rigor, Islamic values, and holistic development across all levels (Nursery to P.7).",
		results:
			"100% registered with Ministry of Education, 500+ learners served, 319+ average PLE distinction, recognized as model institution by government and scholars.",
		impact: "Transformed 500+ lives and influenced educational approach across region"
	},
	{
		title: "Family & Community Impact",
		family: "Hassan Family - Three Children at Al Hanan",
		challenge:
			"Parents seeking premium Islamic education with strong academic foundation for their children.",
		approach:
			"Comprehensive enrollment from Primary 3 through Primary 7, leveraging full academic progression and welfare frameworks.",
		results:
			"All three children excelling academically and spiritually, demonstrating discipline and Islamic values, becoming role models in community.",
		impact: "Family now advocates for Al Hanan, influencing 10+ other enrollment decisions"
	},
];

export default function CaseStudiesPage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
			<Navbar />
			<div className="pt-24 md:pt-32 max-w-5xl mx-auto px-6">
				{/* Headline */}
				<section className="text-center mb-12">
					<motion.h1
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4"
					>
						Success Stories
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="text-lg md:text-xl text-gray-700 dark:text-gray-200"
					>
						How Al Hanan Transforms Lives & Communities
					</motion.p>
				</section>
				{/* Introduction */}
				<section className="mb-12 text-center">
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto"
					>
						At Al Hanan Education Centre, we transform young lives through <b>academic excellence, Islamic values, and holistic development</b>. Explore our success stories to see how we&apos;ve impacted learners, families, and communities.
					</motion.p>
				</section>
				{/* Featured Case Studies */}
				<section className="mb-16">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{caseStudies.map((cs, i) => (
							<motion.div
								key={cs.title}
								whileHover={{
									scale: 1.03,
									boxShadow: "0 8px 32px rgba(59,130,246,0.10)",
								}}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col gap-3 group cursor-pointer border border-transparent hover:border-blue-400"
							>
								<h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 group-hover:text-yellow-400 transition-colors mb-2">
									{cs.title}
								</h3>
								<div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
									<b>{"student" in cs ? "Student:" : "institution" in cs ? "Institution:" : "Family:"}</b> {"student" in cs ? cs.student : "institution" in cs ? cs.institution : cs.family}
								</div>
								<div className="mb-1">
									<b>Challenge:</b>{" "}
									<span className="text-gray-700 dark:text-gray-200">
										{cs.challenge}
									</span>
								</div>
								<div className="mb-1">
									<b>Approach:</b>{" "}
									<span className="text-gray-700 dark:text-gray-200">
										{cs.approach}
									</span>
								</div>
								<div>
									<b>Results:</b>{" "}
									<span className="text-gray-700 dark:text-gray-200">
										{cs.results}
									</span>
								</div>
							</motion.div>
						))}
					</div>
				</section>
				{/* Call-to-Action Banner */}
				<section className="mb-16">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="bg-blue-700 dark:bg-blue-800 rounded-xl shadow p-12 flex flex-col items-center text-center text-white"
					>
						<h2 className="text-2xl md:text-3xl font-bold mb-4">
							Interested in Similar Results?
						</h2>
						<p className="mb-8">
							Let Xhenvolt Uganda build tailored solutions that solve your
							business challenges and drive growth.
						</p>
						<div className="flex gap-4">
							<Link
								href="/contact"
								className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold shadow hover:bg-yellow-300 transition-colors"
							>
								Contact Us
							</Link>
							<Link
								href="/contact"
								className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold shadow hover:bg-blue-100 transition-colors"
							>
								Request a Demo
							</Link>
						</div>
					</motion.div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
