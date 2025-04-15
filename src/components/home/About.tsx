"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

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
						className="shadow-md"
					/>
				</div>

				{/* Text content */}
				<div className="md:w-1/2 text-center md:text-left">
					<h2 className="text-4xl font-bold text-gray-800 mb-4">
						About <span className="text-red-500">Influencers Club</span>
					</h2>
					<p className="text-lg text-gray-600 mb-6">
						We are a vibrant community built for creators and brands to thrive
						together. Whether you&apos;re a rising content star or a brand
						hunting for authentic partnerships — we make the magic happen.
					</p>

					<ul className="space-y-3 text-left">
						<li className="flex items-start gap-2 text-gray-700">
							<FaCheckCircle className="text-red-500 mt-1" />
							<span>
								Connect with top-tier brands & influencers from diverse niches
							</span>
						</li>
						<li className="flex items-start gap-2 text-gray-700">
							<FaCheckCircle className="text-red-500 mt-1" />
							<span>
								Get exclusive access to campaigns, events, and collaboration
								tools
							</span>
						</li>
						<li className="flex items-start gap-2 text-gray-700">
							<FaCheckCircle className="text-red-500 mt-1" />
							<span>
								Boost your reach, reputation, and revenue — all in one place
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
