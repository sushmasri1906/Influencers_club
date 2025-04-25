"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { sanity } from "../../../sanity/lib/sanity"
import { urlFor } from "../../../sanity/lib/sanity-utils"
import { Influencer } from "../../../sanity/types/influencertype"

const categories = ["All", "Fashion", "Tech", "Travel", "Fitness"];

export default function InfluencersPage() {
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("All");
	const [influencers, setInfluencers] = useState<Influencer[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await sanity.fetch(`*[_type == "influencer"]`);
			setInfluencers(data);
		};
		fetchData();
	}, []);

	const filteredInfluencers = influencers.filter((influencer) => {
		const matchesSearch = influencer.name
			.toLowerCase()
			.includes(search.toLowerCase());
		const matchesCategory =
			category === "All" || influencer.category === category;
		return matchesSearch && matchesCategory;
	});

	return (
		<main className="max-w-6xl mx-auto px-4 py-10">
			<h1 className="text-3xl font-bold my-6 text-center text-red-600">
				Meet Our Influencers
			</h1>

			{/* Search Bar */}
			<motion.div
				className="mb-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}>
				<input
					type="text"
					placeholder="Search by name..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
				/>
			</motion.div>

			{/* Category Filters */}
			<div className="flex flex-wrap gap-3 mb-8">
				{categories.map((cat) => (
					<motion.button
						key={cat}
						onClick={() => setCategory(cat)}
						className={`px-4 py-2 rounded-full border ${
							category === cat
								? "bg-red-600 text-white"
								: "bg-white text-gray-700 border-gray-300"
						} hover:bg-red-500 hover:text-white transition`}
						whileHover={{ scale: 1.05 }}>
						{cat}
					</motion.button>
				))}
			</div>

			{/* Influencer Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{filteredInfluencers.map((influencer) => (
					<motion.div
						key={influencer._id}
						className="bg-red-200 shadow-md rounded-xl overflow-hidden text-center p-5 hover:shadow-lg transition"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}>
						{/* Image */}
						<div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
							<Image
								src={urlFor(influencer.image).url()}
								alt={influencer.name}
								fill
								className="object-cover"
							/>
						</div>

						{/* Name + Info */}
						<h3 className="text-lg font-bold text-gray-800">
							{influencer.name}
						</h3>
						<p className="text-sm text-gray-500 mb-1">{influencer.tagline}</p>
						<p className="text-sm text-red-600">{influencer.handle}</p>
						<p className="text-sm text-gray-500">{influencer.followers}</p>

						{/* Social Links */}
						<div className="flex justify-center gap-4 mt-3 text-xl">
							{influencer.social.instagram && (
								<Link
									href={influencer.social.instagram}
									target="_blank"
									className="text-pink-500 hover:scale-110 transition">
									<FaInstagram />
								</Link>
							)}
							{influencer.social.twitter && (
								<Link
									href={influencer.social.twitter}
									target="_blank"
									className="text-blue-400 hover:scale-110 transition">
									<FaTwitter />
								</Link>
							)}
							{influencer.social.youtube && (
								<Link
									href={influencer.social.youtube}
									target="_blank"
									className="text-red-500 hover:scale-110 transition">
									<FaYoutube />
								</Link>
							)}
							{influencer.social.facebook && (
								<Link
									href={influencer.social.facebook}
									target="_blank"
									className="text-blue-600 hover:scale-110 transition">
									<FaFacebookF />
								</Link>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</main>
	);
}