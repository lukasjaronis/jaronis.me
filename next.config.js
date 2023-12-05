/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
