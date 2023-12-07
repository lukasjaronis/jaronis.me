const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	redirects() {
		return [
			{
				source: "/",
				destination: "/intro",
				permanent: true,
			},
		];
	},
};

module.exports = withContentlayer(nextConfig);
