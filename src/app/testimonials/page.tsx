"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, ArrowRight, Heart, Trophy } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const testimonials = [
	{
		name: "Fatima Mayanja",
		role: "Parent of Hafiz Graduate",
		relationship: "Mother",
		text: "Seeing my child complete the Qur'an memorization while maintaining excellent academic performance is a dream come true. Al Hanan didn't just teach my son academics—they shaped his character, instilled discipline, and created a hafiz. The holistic approach to education is remarkable. My son is confident, grounded in Islamic values, and prepared for excellence.",
		rating: 5,
		achievement: "Son completed Qur'an memorization with 95% academic average",
		location: "Kampala, Uganda",
	},
	{
		name: "Sheikh Abdirahman Ali",
		role: "Islamic Scholar & Community Leader",
		relationship: "Educational Partner",
		text: "A school that combines rigorous academic excellence with Qur'anic mastery—this is what African Islamic education should be. Al Hanan exemplifies the integration of faith and learning that our communities desperately need. The leadership, discipline, and spiritual grounding evident in their learners is exceptional.",
		rating: 5,
		achievement: "Endorsed as model Islamic educational institution",
		location: "Eastern Uganda Region",
	},
	{
		name: "James Lwanga",
		role: "Guardian, Al Hanan Learner",
		relationship: "Father",
		text: "The holistic development approach ensures my ward is not just passing exams, but becoming a leader of character. From academic excellence to moral formation, from physical fitness to spiritual growth—every aspect is attended to. Al Hanan doesn't just educate; they transform young people into responsible Islamic leaders.",
		rating: 5,
		achievement: "Ward progressed from P.4 to P.7 with consistent excellence",
		location: "Jinja, Uganda",
	},
	{
		name: "Prof. Nakajjugo",
		role: "Ministry of Education Official",
		relationship: "Government Partner",
		text: "Al Hanan exemplifies what registered, innovative schools should look like in Uganda. Their commitment to excellence in both faith and academics, their rigorous discipline frameworks, and their structured welfare system set them apart. They are a model institution that other schools should emulate.",
		rating: 5,
		achievement: "Recognized as exemplary registered school",
		location: "Uganda Ministry of Education",
	},
	{
		name: "Ibrahim Musoke",
		role: "Parent & Business Owner",
		relationship: "Father of 2 Al Hanan Learners",
		text: "The values and discipline instilled at Al Hanan will shape my children for life. It's a premium investment in their future. Beyond the academic results—which are outstanding—I'm impressed by how the school develops discipline, respect, Islamic values, and leadership. My children are thriving.",
		rating: 5,
		achievement: "Both children excelling academically and spiritually",
		location: "Iganga, Uganda",
	},
	{
		name: "Halima Nakato",
		role: "Primary Seven Graduate, Al Hanan",
		relationship: "Student",
		text: "I'm proud to have memorized the Qur'an and excelled in my academics at the same time. Al Hanan gave me the structure, support, and environment to achieve my goals. The teachers care about your development as a whole person, not just grades. This school changed my life and prepared me for secondary education with confidence.",
		rating: 5,
		achievement: "Completed Qur'an memorization, scored 319+/400 in PLE",
		location: "Al Hanan, Iganga",
	},
];

// Featured success story
const featuredStory = {
	name: "Karim Hassan",
	role: "Parent & Education Advocate",
	text: "In a world of ordinary schools, Al Hanan stands out. The teaching staff are among the most proficient in the country. They don't compromise on standards. Every learner receives individual attention, and the Islamic environment is authentic yet welcoming. My child has grown exponentially—academically, spiritually, and socially.",
	rating: 5,
	achievement: "Outstanding institutional quality & results",
	location: "Soroti, Uganda",
	satisfaction: "Highly Satisfied",
	impact: "Family now advocates for Al Hanan in their community"
};

const stats = [
	{ number: "500+", label: "Learners Served Successfully" },
	{ number: "100%", label: "Registered with Ministry" },
	{ number: "319+", label: "Average PLE Distinction" },
	{ number: "8+", label: "Years of Excellence" },
];

export default function TestimonialsPage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
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
					<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
						Voices of Al Hanan
					</h1>
					<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
						Real stories from parents, students, scholars, and educational partners who have experienced the transformative power of Al Hanan Education Centre.
						</p>
					</motion.div>
				</div>
			</section>

			<div className="max-w-7xl mx-auto px-6 pb-16">
				{/* Happiest Client Spotlight */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="text-center mb-12">
					<div className="inline-flex items-center gap-3 bg-emerald-100 dark:bg-emerald-900/30 px-6 py-3 rounded-full mb-4">
						<Trophy className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
						<span className="font-bold text-emerald-800 dark:text-emerald-300">Featured Success Story</span>
						<Heart className="w-6 h-6 text-red-500 fill-current" />
					</div>
					<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
						A Transformation Story
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						How Al Hanan is changing lives and building future leaders
						</p>
					</div>

					<div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-3xl p-12 border-2 border-emerald-200 dark:border-emerald-700/50 shadow-2xl">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
							<div className="lg:col-span-2">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
										KH
									</div>
									<div>
										<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
											{featuredStory.name}
										</h3>
										<p className="text-gray-600 dark:text-gray-400 text-lg">
											{featuredStory.role}
										</p>
										<p className="text-emerald-600 dark:text-emerald-400 font-medium">
											Education Advocate & Proud Parent
										</p>
										<p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1 mt-1">
											📍 {featuredStory.location}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-2 mb-6">
								{[...Array(featuredStory.rating)].map((_, i) => (
									<Star
										key={i}
										className="w-8 h-8 text-yellow-400 fill-current"
									/>
								))}
								<span className="ml-2 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
									{featuredStory.satisfaction}
							</span>
								<Quote className="absolute -top-2 -left-2 w-10 h-10 text-emerald-300 dark:text-emerald-600" />
								<blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic pl-8">
									&quot;{featuredStory.text}&quot;
						</blockquote>
									<div className="flex items-center gap-2 mb-2">
										<CheckCircle className="w-5 h-5 text-green-500" />
										<span className="font-medium text-gray-900 dark:text-white">
										{featuredStory.achievement}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Heart className="w-5 h-5 text-red-500" />
									<span className="text-gray-600 dark:text-gray-300">
										Impact: {featuredStory.impact}
										</span>
									</div>
								</div>
							</div>

							<div className="text-center">
								<div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl">
									<div className="text-6xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">
										100%
									</div>
									<div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
										Satisfaction Rate
									</div>
									<div className="text-gray-600 dark:text-gray-300 mb-6">
										Our most satisfied client!
									</div>
									<div className="space-y-3">
										<div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3">
											<div className="text-green-800 dark:text-green-300 font-semibold">500+</div>
											<div className="text-green-600 dark:text-green-400 text-sm">Members Served</div>
										</div>
										<div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
											<div className="text-blue-800 dark:text-blue-300 font-semibold">Zero</div>
											<div className="text-blue-600 dark:text-blue-400 text-sm">System Downtime</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.section>

				{/* Stats Section */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="text-center"
							>
								<div className={`text-4xl md:text-5xl font-bold mb-2 ${
									stat.label === "Wekesa's Satisfaction" 
										? "text-yellow-600 dark:text-yellow-400" 
										: stat.label === "Months in Business"
										? "text-green-600 dark:text-green-400"
										: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
								}`}>
									{stat.number}
								</div>
								<div className="text-gray-600 dark:text-gray-300 font-medium">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Other Testimonials */}
				<section className="mb-20">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							More Success Stories
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Every client matters to us - here are more stories of transformation
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.02, y: -5 }}
								className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500"
							>
								<div className="flex items-center gap-2 mb-6">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-5 h-5 text-yellow-400 fill-current"
										/>
									))}
								</div>

								<div className="relative mb-8">
									<Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200 dark:text-blue-800" />
									<p className="text-gray-700 dark:text-gray-300 leading-relaxed italic pl-6 text-lg">
										&quot;{testimonial.text}&quot;
									</p>
								</div>

								<div className="flex items-start gap-4 mb-6">
									<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
										{testimonial.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</div>
									<div className="flex-1">
										<h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">
											{testimonial.name}
										</h3>
										<p className="text-gray-600 dark:text-gray-400 mb-1">
											{testimonial.role}
										</p>
										<p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
											{testimonial.relationship}
										</p>
										<p className="text-sm text-gray-500 dark:text-gray-500">
											📍 {testimonial.location}
										</p>
									</div>
								</div>

								<div className="pt-4 border-t border-gray-200 dark:border-gray-600">
									<div className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-emerald-500" />
									<span className="text-sm font-medium text-gray-600 dark:text-gray-400">
										{testimonial.achievement}
										</span>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Featured Testimonial Quote */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
						<div className="text-center max-w-4xl mx-auto">
							<Quote className="w-16 h-16 text-white/30 mx-auto mb-6" />
							<blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
								&ldquo;Xhenvolt Uganda doesn&apos;t just deliver software - they deliver
								solutions that understand our unique challenges in East Africa.
								Their team took time to understand our cultural and operational
								needs, resulting in systems that truly work for our context.&rdquo;
							</blockquote>
							<div className="flex items-center justify-center gap-4">
								<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
									WM
								</div>
								<div className="text-left">
									<div className="text-xl font-semibold">Wekesa Muhammad</div>
									<div className="text-white/80">
										Chairperson, Bumwena Scrap SACCO - Our Happiest Client!
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.section>

				{/* Industry Focus */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
							Trusted Across Industries
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							From schools to SACCOs, hospitals to construction companies - delivering excellence since June 2025.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{[
							{ sector: "Education", projects: "12+", icon: "🎓" },
							{ sector: "Healthcare", projects: "6+", icon: "🏥" },
							{ sector: "Finance/SACCOs", projects: "7+", icon: "🏦" },
							{ sector: "Others", projects: "3+", icon: "🏢" },
						].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="text-center bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 backdrop-blur-sm"
							>
								<div className="text-4xl mb-4">{item.icon}</div>
								<div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
									{item.projects}
								</div>
								<div className="text-gray-700 dark:text-gray-300 font-medium">
									{item.sector}
								</div>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* CTA Section */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/50 text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
							Ready to Join the Al Hanan Family?
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
							Invest in your child&apos;s future with excellence in academics, discipline, Islamic values, and holistic development. Let&apos;s create together a generation of confident, principled leaders.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.a
								href="/admissions"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
							>
								Apply Now
								<ArrowRight className="w-5 h-5" />
							</motion.a>
							<motion.a
								href="/location"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-transparent border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
							>
								Schedule a Visit
							</motion.a>
						</div>
					</div>
				</motion.section>
			</div>

			<Footer />
		</main>
	);
}
	