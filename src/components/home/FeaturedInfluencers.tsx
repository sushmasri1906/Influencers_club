"use client";

import Image from "next/image";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

const influencers = [
	{
		name: "Rahul Dev",
		role: "Fitness & Health Expert",
		image: "https://randomuser.me/api/portraits/men/76.jpg",
		tag: "@rahulmoves",
		followers: "200K Subscribers",
		icon: <FaYoutube />,
		social: {
			instagram: "https://instagram.com/rahulmoves",
			twitter: "https://twitter.com/rahulmoves",
			facebook: "https://facebook.com/rahulmoves",
			youtube: "https://youtube.com/rahulmoves",
		},
	},
	{
		name: "Simran Jain",
		role: "Tech & Gadgets Enthusiast",
		image: "https://randomuser.me/api/portraits/men/77.jpg",
		tag: "@simtechtalks",
		followers: "90K Followers",
		icon: <FaTwitter />,
		social: {
			instagram: "https://instagram.com/simtechtalks",
			twitter: "https://twitter.com/simtechtalks",
			facebook: "https://facebook.com/simtechtalks",
			youtube: "https://youtube.com/simtechtalks",
		},
	},
	{
		name: "Alicia Lee",
		role: "Fashion & Beauty Blogger",
		image: "https://randomuser.me/api/portraits/men/78.jpg",
		tag: "@aliciafashion",
		followers: "300K Followers",
		icon: <FaInstagram />,
		social: {
			instagram: "https://instagram.com/aliciafashion",
			twitter: "https://twitter.com/aliciafashion",
			facebook: "https://facebook.com/aliciafashion",
			youtube: "https://youtube.com/aliciafashion",
		},
	},
	{
		name: "John Doe",
		role: "Travel Vlogger",
		image: "https://randomuser.me/api/portraits/men/79.jpg",
		tag: "@johnexplores",
		followers: "150K Followers",
		icon: <FaYoutube />,
		social: {
			instagram: "https://instagram.com/johnexplores",
			twitter: "https://twitter.com/johnexplores",
			facebook: "https://facebook.com/johnexplores",
			youtube: "https://youtube.com/johnexplores",
		},
	},
	{
		name: "Nina Patel",
		role: "Food & Recipe Influencer",
		image: "https://randomuser.me/api/portraits/men/80.jpg",
		tag: "@ninakitchen",
		followers: "500K Followers",
		icon: <FaInstagram />,
		social: {
			instagram: "https://instagram.com/ninakitchen",
			twitter: "https://twitter.com/ninakitchen",
			facebook: "https://facebook.com/ninakitchen",
			youtube: "https://youtube.com/ninakitchen",
		},
	},
];

const FeaturedInfluencers = () => {
	return (
		<section className="py-16 bg-gradient-to-b from-white to-gray-100">
			<h2 className="text-3xl font-bold text-center text-gray-800">
				🌟 Featured Influencers
			</h2>
			<p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mt-4">
				Get inspired by our most influential creators who are making a
				difference across fashion, fitness, and tech. These voices define trends
				and build powerful brand narratives.
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 mt-12">
				{influencers.map((influencer, index) => (
					<div
						key={index}
						className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 text-center border border-gray-200 hover:border-red-300">
						<div className="flex justify-center">
							<Image
								src={influencer.image}
								alt={influencer.name}
								width={100}
								height={100}
								className="rounded-full object-cover border-4 border-white shadow-md"
							/>
						</div>
						<h3 className="mt-4 text-xl font-semibold text-gray-800">
							{influencer.name}
						</h3>
						<p className="text-sm text-red-500 font-medium mt-1">
							{influencer.role}
						</p>

						<div className="mt-3 flex justify-center items-center gap-2 text-red-500 text-lg">
							{influencer.icon}
							<span className="text-gray-600 text-sm">{influencer.tag}</span>
						</div>
						<p className="text-gray-500 text-sm mt-1">{influencer.followers}</p>

						{/* Social Media Links */}
						<div className="mt-4 flex justify-center gap-3 text-xl">
							{influencer.social.instagram && (
								<a
									href={influencer.social.instagram}
									target="_blank"
									className="text-pink-500 hover:scale-110 transition">
									<FaInstagram />
								</a>
							)}
							{influencer.social.twitter && (
								<a
									href={influencer.social.twitter}
									target="_blank"
									className="text-blue-400 hover:scale-110 transition">
									<FaTwitter />
								</a>
							)}
							{influencer.social.youtube && (
								<a
									href={influencer.social.youtube}
									target="_blank"
									className="text-red-500 hover:scale-110 transition">
									<FaYoutube />
								</a>
							)}
							{influencer.social.facebook && (
								<a
									href={influencer.social.facebook}
									target="_blank"
									className="text-blue-600 hover:scale-110 transition">
									<FaFacebookF />
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeaturedInfluencers;
