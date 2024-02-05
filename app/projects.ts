export type Project = {
  name: string;
  description: string;
  demo?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Abunchaparts",
    description:
      "A marketplace publishing & inventory web app designed for my fathers auto-part scrapping business. The first integration is eBay but is made to be flexible to add other marketplaces. Being built with NextJS, Cloudflare Workers (API), Planetscale, and DrizzleORM. Will have a proper demo out in less than a week.",
  },
  {
    name: "Cforty",
    description:
      "An intended self-hosting link shortner with superpowers (tbd on the powers). Being build on Cloudflare Workers. ",
    link: "https://brrr.ing/🥶",
  },
  {
    name: "Gate",
    description:
      "An intended self-hosting API for creating and verifying API keys with optional constraints such as limited usage and or rate limiting. Built on Cloudflare workers.",
    link: "https://github.com/lukasjaronis/jaronis.me",
  },
  {
    name: "Spaced Start Club (nft project)",
    description:
      "Implemented and deployed an Ethereum ERC-721 contract + UI + cloud deployment.",
    link: "/posts/ssc",
  },
];
