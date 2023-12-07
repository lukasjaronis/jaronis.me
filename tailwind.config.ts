const config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				geist_sans: ["var(--font-geist-sans)"],
				geist_mono: ["var(--font-geist-mono)"],
			},
			borderWidth: {
				1: "1px",
			},
			colors: {
				firefly: {
					"50": "#f2f8f9",
					"100": "#dfedee",
					"200": "#c2dddf",
					"300": "#97c5c9",
					"400": "#66a3aa",
					"500": "#4a8890",
					"600": "#40717a",
					"700": "#395c65",
					"800": "#354e55",
					"900": "#2f434a",
					"950": "#162226",
				},
				"ice-cold": {
					"50": "#effefa",
					"100": "#c0ffee",
					"200": "#91fee3",
					"300": "#52f6d3",
					"400": "#1fe2bf",
					"500": "#06c6a6",
					"600": "#029f88",
					"700": "#067f6e",
					"800": "#0a655a",
					"900": "#0e534a",
					"950": "#00332e",
				},
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
export default config;
