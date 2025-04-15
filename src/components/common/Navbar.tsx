"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
			<div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="text-xl font-bold text-red-500">
					Influencers Club
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-6 text-sm">
					<Link
						href="/"
						className="text-gray-700 hover:text-red-500 transition">
						Home
					</Link>
					<Link
						href="/influencers"
						className="text-gray-700 hover:text-red-500 transition">
						Influencers
					</Link>
					<Link
						href="/events"
						className="text-gray-700 hover:text-red-500 transition">
						Events
					</Link>
					<Link
						href="/gallery"
						className="text-gray-700 hover:text-red-500 transition">
						Gallery
					</Link>
					<Link
						href="/about"
						className="text-gray-700 hover:text-red-500 transition">
						About
					</Link>
					<Link
						href="/contact"
						className="text-gray-700 hover:text-red-500 transition">
						Contact
					</Link>
					<Link
						href="/join/influencer"
						className="text-red-500 border border-red-500 rounded-full px-4 py-1 hover:bg-red-500 hover:text-white transition font-medium">
						Join Now
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-red-500 text-2xl">
						{isOpen ? <HiX /> : <HiMenu />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-white px-4 pb-4 space-y-2 text-sm shadow-md">
					<Link href="/" className="block text-gray-700 hover:text-red-500">
						Home
					</Link>
					<Link
						href="/influencers"
						className="block text-gray-700 hover:text-red-500">
						Influencers
					</Link>
					<Link
						href="/events"
						className="block text-gray-700 hover:text-red-500">
						Events
					</Link>
					<Link
						href="/gallery"
						className="block text-gray-700 hover:text-red-500">
						Gallery
					</Link>
					<Link
						href="/about"
						className="block text-gray-700 hover:text-red-500">
						About
					</Link>
					<Link
						href="/contact"
						className="block text-gray-700 hover:text-red-500">
						Contact
					</Link>
					<Link
						href="/join/influencer"
						className="block text-red-500 font-medium border border-red-500 rounded-full text-center py-1 hover:bg-red-500 hover:text-white transition">
						Join Now
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
