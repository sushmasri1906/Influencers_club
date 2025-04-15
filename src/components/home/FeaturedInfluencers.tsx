"use client";

import Image from "next/image";
import { FaTwitter, FaYoutube } from "react-icons/fa";

const influencers = [
	{
		name: "Rahul Dev",
		role: "Fitness & Health Expert",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1728044830/66fbd7ac8b663ce6b698945b/66fbd7ac8b663ce6b698945bFri%20Oct%2004%202024%2012:27:08%20GMT%2B0000%20%28Coordinated%20Universal%20Time%29.jpg",
		tag: "@rahulmoves",
		followers: "200K Subscribers",
		icon: <FaYoutube />,
	},
	{
		name: "Simran Jain",
		role: "Tech & Gadgets Enthusiast",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1727766044/66fad37404d7eb187fd34595/66fad37404d7eb187fd34595Tue%20Oct%2001%202024%2007:00:42%20GMT%2B0000%20%28Coordinated%20Universal%20Time%29.jpg",
		tag: "@simtechtalks",
		followers: "90K Followers",
		icon: <FaTwitter />,
	},
];

const FeaturedInfluencers = () => {
	return (
		<section className="py-20 bg-gradient-to-b from-white to-gray-100">
			<h2 className="text-4xl font-bold text-center text-gray-800">
				🌟 Featured Influencers
			</h2>
			<p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mt-4">
				Get inspired by our most influential creators who are making a
				difference across fashion, fitness, and tech. These voices define trends
				and build powerful brand narratives.
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 mt-12">
				{influencers.map((influencer, index) => (
					<div
						key={index}
						className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-200 hover:border-red-300">
						<div className="flex justify-center">
							<Image
								src={influencer.image}
								alt={influencer.name}
								width={128}
								height={128}
								className="rounded-full object-cover border-4 border-white shadow-lg"
							/>
						</div>
						<h3 className="mt-5 text-2xl font-semibold text-gray-800">
							{influencer.name}
						</h3>
						<p className="text-sm text-red-500 font-medium mt-1">
							{influencer.role}
						</p>

						<div className="mt-3 flex justify-center items-center gap-2 text-red-500 text-xl">
							{influencer.icon}
							<span className="text-gray-600 text-sm">{influencer.tag}</span>
						</div>
						<p className="text-gray-500 text-sm mt-1">{influencer.followers}</p>

						<div className="mt-4">
							<button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 text-sm">
								View Profile
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeaturedInfluencers;
