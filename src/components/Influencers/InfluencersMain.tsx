"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { client } from "../../../studio/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type Influencer = {
	_id: string;
	name: string;
	tagline: string;
	handle: string;
	followers: string;
	category: string;
	image: { asset: { url: string } };
	social: {
		instagram?: string;
		twitter?: string;
		facebook?: string;
		youtube?: string;
	};
};

type InfluencersPageProps = {
	influencers: Influencer[];
};

const InfluencersPage = ({ influencers }: InfluencersPageProps) => {
	const [search, setSearch] = useState<string>("");
	const [category, setCategory] = useState<string>("All");
	const categories = ["All", "Fashion", "Tech", "Food", "Travel"];

	// Ensure influencers are available before filtering
	const filteredInfluencers = influencers?.filter((influencer) => {
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

			<div className="flex flex-wrap gap-2 mb-6">
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

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{filteredInfluencers?.map((influencer) => (
					<motion.div
						key={influencer._id}
						className="bg-red-200 shadow-md rounded-xl overflow-hidden text-center p-5 hover:shadow-lg transition"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}>
						{/* Image */}
						<div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
							<Image
								src={influencer.image.asset.url}
								alt={influencer.name}
								width={100}
								height={100}
								className="object-cover"
							/>
						</div>

						<h3 className="text-lg font-bold text-gray-800">
							{influencer.name}
						</h3>
						<p className="text-sm text-gray-500 mb-1">{influencer.tagline}</p>
						<p className="text-sm text-red-600">{influencer.handle}</p>
						<p className="text-sm text-gray-500">{influencer.followers}</p>

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
};

export default InfluencersPage;

export async function getStaticProps() {
	const query = `
	  *[_type == "influencer"]{
		_id,
		name,
		tagline,
		handle,
		followers,
		category,
		image {
		  asset -> {
			url
		  }
		},
		social {
		  instagram,
		  twitter,
		  facebook,
		  youtube
		}
	  }
	`;

	const influencers = await client.fetch(query);

	return {
		props: {
			influencers,
		},
		revalidate: 60,
	};
}
