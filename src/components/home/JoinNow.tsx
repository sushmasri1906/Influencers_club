import Link from "next/link";

const JoinNow = () => {
	return (
		<section
			id="join"
			className="py-20 px-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white text-center">
			<h2 className="text-4xl font-bold mb-4">
				Join the Influencers Club Today
			</h2>
			<p className="text-lg max-w-2xl mx-auto">
				Whether you&apos;re a creator ready to shine or a brand seeking
				meaningful collaborations, we have the perfect space for you to grow and
				thrive together.
			</p>

			<div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
				<Link
					href="/join/influencer"
					className="bg-white text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-md hover:shadow-lg animate-pulse hover:animate-none">
					Join as Influencer
				</Link>

				<Link
					href="/join/brand"
					className="bg-white text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-md hover:shadow-lg animate-pulse hover:animate-none">
					Join as Brand
				</Link>
			</div>

			<p className="mt-6 text-sm opacity-90">
				Be part of a thriving ecosystem where creativity meets opportunity.
			</p>
		</section>
	);
};

export default JoinNow;
