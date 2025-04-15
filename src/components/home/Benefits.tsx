"use client";

import { FaUserPlus, FaBullhorn, FaHandsHelping } from "react-icons/fa";

const Benefits = () => {
	return (
		<section className="py-20 bg-gray-100 text-center">
			<h2 className="text-4xl font-bold text-gray-800 mb-4">Why Join Us?</h2>
			<p className="text-lg text-gray-600 max-w-2xl mx-auto">
				Join a thriving network of creators and brands. Whether you&apos;re here to
				earn, connect, or grow — we&apos;ve got you covered.
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 mt-12">
				{/* Referral Program */}
				<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
					<div className="flex justify-center text-red-500 mb-4 text-4xl">
						<FaUserPlus />
					</div>
					<h3 className="text-2xl font-semibold text-gray-800">
						Referral Program
					</h3>
					<p className="mt-3 text-gray-600">
						Invite friends and fellow influencers. Earn exclusive rewards and
						bonuses for every successful referral — it&apos;s a win-win!
					</p>
				</div>

				{/* Visibility Boost */}
				<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
					<div className="flex justify-center text-red-500 mb-4 text-4xl">
						<FaBullhorn />
					</div>
					<h3 className="text-2xl font-semibold text-gray-800">
						Increased Visibility
					</h3>
					<p className="mt-3 text-gray-600">
						Showcase your brand to a wide audience. Get discovered by top brands
						and elevate your personal brand with our spotlight features.
					</p>
				</div>

				{/* Collaboration Network */}
				<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
					<div className="flex justify-center text-red-500 mb-4 text-4xl">
						<FaHandsHelping />
					</div>
					<h3 className="text-2xl font-semibold text-gray-800">
						Collaboration Network
					</h3>
					<p className="mt-3 text-gray-600">
						Connect and collaborate with like-minded creators and premium
						brands. Build meaningful partnerships that last.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
