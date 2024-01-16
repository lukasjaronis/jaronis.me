const config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"900": "900px",
			},
		},
		extend: {
			fontFamily: {
				geist_sans: ["var(--font-geist-sans)"],
				geist_mono: ["var(--font-geist-mono)"],
			},
			borderWidth: {
				1: "1px",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				grey01: "hsl(var(--grey01))",
				grey02: "hsl(var(--grey02))",
				grey03: "hsl(var(--grey03))",
				grey04: "hsl(var(--grey04))",
				accent: "hsl(var(--accent))",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
export default config;
