/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "image.tmdb.org",
				port: "",
				pathname: "/t/p/**",
			},
			{
				protocol: "https",
				hostname: "image.dummyjson.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
