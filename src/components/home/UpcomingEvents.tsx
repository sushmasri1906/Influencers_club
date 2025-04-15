"use client";

import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const events = [
	{
		title: "Influencer Meet-up",
		description:
			"Join us for an exclusive meet-up with top influencers in the industry. Share insights, build connections, and be part of the creator movement.",
		date: "20th June, 2025",
		location: "Mumbai, India",
	},
	{
		title: "Brand Collaboration Event",
		description:
			"A unique networking opportunity for brands and influencers to build meaningful partnerships. Collaborate on campaigns that align with your vision.",
		date: "10th July, 2025",
		location: "Bangalore, India",
	},
	{
		title: "Social Media Masterclass",
		description:
			"Level up your content game! Learn growth hacks, algorithms, and branding strategies from industry pros and successful influencers.",
		date: "25th July, 2025",
		location: "Delhi, India",
	},
];

const UpcomingEvents = () => {
	return (
		<section className="py-20 bg-gradient-to-b from-gray-100 to-white">
			<h2 className="text-4xl font-bold text-center text-gray-800">
				📅 Upcoming Events
			</h2>
			<p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mt-4">
				Stay ahead of the curve by participating in our events tailored for
				influencers and brands. Learn, connect, and grow together.
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 mt-12">
				{events.map((event, index) => (
					<div
						key={index}
						className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-200">
						<h3 className="text-2xl font-semibold text-gray-800">
							{event.title}
						</h3>
						<p className="mt-3 text-gray-600 text-sm leading-relaxed">
							{event.description}
						</p>

						<div className="mt-4 flex items-center gap-2 text-red-500">
							<FaCalendarAlt />
							<span className="text-sm text-gray-700">{event.date}</span>
						</div>
						<div className="mt-1 flex items-center gap-2 text-blue-500">
							<FaMapMarkerAlt />
							<span className="text-sm text-gray-700">{event.location}</span>
						</div>

						<div className="mt-6">
							<button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 text-sm transition">
								Register Now
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default UpcomingEvents;
