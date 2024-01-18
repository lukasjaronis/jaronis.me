export type Project = {
  name: string;
  description: string;
  demo?: string;
  link?: string
};

export const projects: Project[] = [
  {
    name: "Abunchaparts",
    description:
      "A native app to streamline the eBay listing process for my dads autopart scrapping business. Being built with the Tauri framework (Vite + React), Cloudflare Worker API (Hono framework), and Planetscale.",
    demo: "https://youtu.be/DTw5lMCN8DY"
  },
  {
    name: 'Cforty',
    description: "An intended self-hosting link shortner with superpowers (tbd on the powers). Being build on Cloudflare Workers. "
  },
  {
    name: "Gate",
    description:
      "An intended self-hosting API for creating and verifying API keys with optional constraints such as limited usage and or rate limiting. Built on Cloudflare workers.",
    link: "https://github.com/lukasjaronis/jaronis.me"
  },
  {
    name: "Spaced Start Club (nft project)",
    description: "Implemented and deployed an Ethereum ERC-721 contract + UI + cloud deployment.",
    link: "/posts/ssc",
  },
];
