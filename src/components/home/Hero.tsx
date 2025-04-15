"use client";
import Link from "next/link";
import { FaUsers, FaHandshake, FaChartLine } from "react-icons/fa";

const Hero = () => {
	return (
		<section className="relative bg-red-600 text-white min-h-[80vh] px-6 overflow-hidden flex items-center justify-center">
			{/* Background image overlay */}
			<div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0" />

			<div className="relative z-10 max-w-4xl mx-auto text-center">
				<h1 className="text-4xl md:text-5xl font-bold leading-tight">
					Welcome to <span className="text-white">Influencers Club</span>
				</h1>
				<p className="mt-4 text-lg md:text-xl text-gray-100">
					Your gateway to meaningful collaborations, visibility, and brand
					growth.
				</p>

				{/* Feature icons */}
				<div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
					<div className="flex items-center gap-3 text-white">
						<FaUsers className="text-2xl" />
						<span>10K+ Active Influencers</span>
					</div>
					<div className="flex items-center gap-3 text-white">
						<FaHandshake className="text-2xl" />
						<span>100+ Brand Partnerships</span>
					</div>
					<div className="flex items-center gap-3 text-white">
						<FaChartLine className="text-2xl" />
						<span>Unlimited Growth Potential</span>
					</div>
				</div>

				{/* CTA Buttons */}
				<div className="mt-10">
					<Link
						href="#join"
						className="inline-block bg-white text-red-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition duration-300 mr-4">
						Join Now
					</Link>
					<Link
						href="#about"
						className="inline-block border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-red-500 transition duration-300">
						Learn More
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
