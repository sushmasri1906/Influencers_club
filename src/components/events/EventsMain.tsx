import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// Sample events data (replace with actual data)
const allEvents = [
	{
		title: "Influencer Meet-up",
		description:
			"Join us for an exclusive meet-up with top influencers in the industry. Share insights, build connections, and be part of the creator movement.",
		date: "2025-06-20",
		location: "Mumbai, India",
		phoneNumber: "+91 9160666649",
		price: "₹2999",
		offerPrice: "₹1499",
	},
	{
		title: "Brand Collaboration Event",
		description:
			"A unique networking opportunity for brands and influencers to build meaningful partnerships. Collaborate on campaigns that align with your vision.",
		date: "2025-07-10",
		location: "Bangalore, India",
		phoneNumber: "+91 9160666649",
		price: "₹3999",
		offerPrice: "₹1999",
	},
	{
		title: "Social Media Masterclass",
		description:
			"Level up your content game! Learn growth hacks, algorithms, and branding strategies from industry pros and successful influencers.",
		date: "2025-07-25",
		location: "Delhi, India",
		phoneNumber: "+91 9160666649",
		price: "₹4999",
		offerPrice: "₹2499",
	},
	{
		title: "Past Influencer Meet-up",
		description:
			"A recap of our exclusive meet-up with top influencers. Learn from past sessions and connect with fellow creators.",
		date: "2023-06-15",
		location: "Hyderabad, India",
		phoneNumber: "+91 9160666649",
		price: "₹1999",
		offerPrice: "₹999",
	},
];

// 🔁 Reusable component for event sections
const EventSection: React.FC<{ title: string; events: { title: string; description: string; date: string; location: string; phoneNumber: string; price: string; offerPrice: string; }[] }> = ({ title, events }) => (
	<section className="mt-12">
		<h3 className="text-3xl font-semibold text-gray-800 text-center">
			{title}
		</h3>
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 mt-8">
			{events.length > 0 ? (
				events.map((event, index) => (
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

						<div className="mt-4 text-center">
							<p className="text-sm text-gray-500">
								Price:{" "}
								<span className="line-through text-red-400 mr-2">
									{event.price}
								</span>
								<span className="text-green-600 font-semibold">
									{event.offerPrice}
								</span>
							</p>
						</div>

						<div className="mt-4 text-center">
							<p className="text-sm text-gray-500">
								Call to join:{" "}
								<a
									href={`tel:${event.phoneNumber}`}
									className="text-blue-600 font-medium hover:text-blue-800">
									{event.phoneNumber}
								</a>
							</p>
						</div>
					</div>
				))
			) : (
				<p className="text-center text-gray-500 mt-8">No events.</p>
			)}
		</div>
	</section>
);

const EventsMain = () => {
	const currentDate = new Date();

	const upcomingEvents = allEvents.filter(
		(event) => new Date(event.date) > currentDate
	);

	const finishedEvents = allEvents.filter(
		(event) => new Date(event.date) <= currentDate
	);

	return (
		<section className="py-20 bg-gradient-to-b from-gray-100 to-white">
			<h2 className="text-4xl font-bold text-center text-gray-800">
				📅 Events
			</h2>
			<p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mt-4">
				Stay ahead of the curve by participating in our events tailored for
				influencers and brands. Learn, connect, and grow together.
			</p>

			<EventSection title="Upcoming Events" events={upcomingEvents} />
			<EventSection title="Finished Events" events={finishedEvents} />
		</section>
	);
};

export default EventsMain;
