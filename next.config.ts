// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
		],
		domains: ["randomuser.me"],
	},
};

module.exports = nextConfig;
