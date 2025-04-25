"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
	return (
		<section id="about" className="py-20 px-6 bg-white">
			<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10">
				{/* Image section */}
				<div className="md:w-1/2">
					<Image
						src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1744353073/5_f51qel.jpg"
						alt="About Influencers Club"
						width={600}
						height={400}
						className="shadow-md "
					/>
				</div>

				{/* Text content */}
				<div className="md:w-1/2 text-center md:text-left">
					<h2 className="text-4xl font-bold text-gray-800 mb-4">
						About Influencers Club
					</h2>
					<p className="text-lg text-gray-600 mb-6">
						We&apos;re a community where creators and brands work together to
						make meaningful connections and grow.
					</p>

					<ul className="space-y-4 text-left">
						<li className="flex items-start gap-3 text-gray-700">
							<FaArrowRight className="text-red-500 mt-1" />
							<span>Partner with top brands and influencers.</span>
						</li>
						<li className="flex items-start gap-3 text-gray-700">
							<FaArrowRight className="text-red-500 mt-1" />
							<span>Get access to exclusive campaigns and events.</span>
						</li>
						<li className="flex items-start gap-3 text-gray-700">
							<FaArrowRight className="text-red-500 mt-1" />
							<span>Grow your visibility and revenue.</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
