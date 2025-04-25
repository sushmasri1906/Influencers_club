"use client";

import { FaCheckCircle } from "react-icons/fa";

const benefitsData = {
	core: [
		{
			title: "Zero Cost, Maximum Impact",
			desc: "Join the community without any fees and gain high-value connections.",
		},
		{
			title: "Weekly Networking Meets",
			desc: "Connect with professionals and peers every week to exchange ideas.",
		},
		{
			title: "Quality Referrals",
			desc: "Receive genuine referrals from trusted professionals within the club.",
		},
		{
			title: "Knowledge Sharing",
			desc: "Learn from experiences across industries through collaborative sharing.",
		},
		{
			title: "Mentorship & Collaboration",
			desc: "Access support from experienced mentors and creative collaborators.",
		},
		{
			title: "Local to Global Reach",
			desc: "Showcase your brand worldwide through pitch clubs and global connects.",
		},
	],
	bonus: [
		{
			title: "Speaking Opportunities",
			desc: "Take the stage at panels and workshops to share your story.",
		},
		{
			title: "Recognition & Awards",
			desc: "Earn monthly recognition for your contributions and achievements.",
		},
		{
			title: "Digital Visibility",
			desc: "Boost your presence through social media highlights and PR.",
		},
		{
			title: "Upskilling Programs",
			desc: "Grow faster with access to training sessions and EduTech platforms.",
		},
	],
};

const Benefits = () => {
	return (
		<section className="py-20 bg-gradient-to-b from-gray-50 to-white text-center">
			<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
				Why Influencers Club?
			</h2>
			<p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 px-4">
				Whether you&apos;re an emerging creator or an established influencer,
				Influencers Club offers exclusive opportunities to elevate your brand,
				collaborate with top companies, and grow your reach in a supportive,
				vibrant community.
			</p>

			<div className="flex flex-col md:flex-row justify-center items-stretch gap-10 px-4">
				{/* Core Benefits */}
				<div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-[1.02] w-full max-w-lg text-left space-y-6">
					<h4 className="text-2xl font-semibold text-gray-800 border-b pb-2 border-gray-400">
						Core Benefits
					</h4>
					<ul className="space-y-5 text-gray-700">
						{benefitsData.core.map((item, index) => (
							<li key={index} className="flex items-start gap-3 leading-tight">
								<FaCheckCircle className="text-red-600 w-4 h-4 shrink-0 mt-1" />
								<div>
									<h3 className="font-semibold text-gray-800">{item.title}</h3>
									<h3 className="text-md text-gray-600">{item.desc}</h3>
								</div>
							</li>
						))}
					</ul>
				</div>

				{/* Bonus Highlights */}
				<div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-[1.02] w-full max-w-lg text-left space-y-6">
					<h4 className="text-2xl font-semibold text-gray-800 border-b pb-2 border-gray-400">
						Bonus Highlights
					</h4>
					<ul className="space-y-5 text-gray-700">
						{benefitsData.bonus.map((item, index) => (
							<li key={index} className="flex items-start gap-3 leading-tight">
								<FaCheckCircle className="text-red-600 w-4 h-4 shrink-0 mt-1" />
								<div>
									<h3 className="font-semibold text-gray-800">{item.title}</h3>
									<h3 className="text-md text-gray-600">{item.desc}</h3>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
