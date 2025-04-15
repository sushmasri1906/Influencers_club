import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-200 text-gray-700 py-10 mt-4">
			<div className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
				{/* Logo / About */}
				<div className="text-center md:text-left">
					<h3 className="text-2xl font-bold text-red-500">Influencers Club</h3>
					<p className="mt-2 text-sm text-gray-600 max-w-sm">
						Connecting top influencers and brands for powerful collaborations
						and lasting impact. Join the movement and grow together.
					</p>
				</div>

				{/* Navigation Links */}
				<div className="text-center">
					<h4 className="text-lg font-semibold mb-2">Quick Links</h4>
					<div className="space-y-1">
						<Link href="/about" className="block hover:text-red-500 transition">
							About
						</Link>
						<Link
							href="/contact"
							className="block hover:text-red-500 transition">
							Contact
						</Link>
						<Link
							href="/join/influencer"
							className="block hover:text-red-500 transition">
							Join as Influencer
						</Link>
						<Link
							href="/join/brand"
							className="block hover:text-red-500 transition">
							Join as Brand
						</Link>
					</div>
				</div>

				{/* Social Media */}
				<div className="text-center md:text-right">
					<h4 className="text-lg font-semibold mb-2">Follow Us</h4>
					<div className="flex justify-center md:justify-end gap-4 text-red-500 text-xl mt-2">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer">
							<FaFacebookF />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer">
							<FaTwitter />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer">
							<FaInstagram />
						</a>
					</div>
				</div>
			</div>

			{/* Bottom copyright */}
			<div className="text-center text-sm text-gray-500 mt-10">
				&copy; {new Date().getFullYear()} Influencers Club. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
