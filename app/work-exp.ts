type Experience = {
	name: string;
	description: string;
	link?: string;
	role: string;
	date: string;
};

export const experiences: Experience[] = [
	{
		name: "Byt",
		description:
			"A chain-agnostic NFT marketplace at its core and a full service web3 launchpad.",
		link: "https://byt.io/launchpad",
		role: "Full Stack Engineer",
		date: "12.2021 - 09.2023 (1.75yrs)",
	},
	{
		name: "Ideafire",
		description:
			"Ideafire is where Youtube, TikTok, X (Twitter), Instagram and more all come together as one so you can discover and create things that define who you are and what you intend to do.",
		link: "https://www.youtube.com/watch?v=UUiRVTEBJaU",
		role: "Full Stack Engineer",
		date: "09.2019 - 12.2021 (2.25 yrs)",
	},
];