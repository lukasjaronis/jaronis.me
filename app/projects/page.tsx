import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Project = {
  name: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    name: "Gate",
    description:
      "A Cloudflare worker service for creating and verifying API keys with optional constraints such as limited usage and or rate limiting. Powered by the Cache API and Durable Objects.",
    link: "https://github.com/lukasjaronis/cloud",
  },
  {
    name: 'Portfolio',
    description: 'This website.',
    link: 'https://github.com/lukasjaronis/jaronis.me'
  },
  {
    name: 'NFT Contract',
    description: 'Implemented and deployed an Ethereum ERC-721 contract that uses bit shifting to create on-chain pseudo-randomness for NFT characteristic generation.',
  }
];

export default function Projects() {
  return (
    <section className="flex items-start justify-center">
      <div className="max-w-md">
        <ul className="flex flex-col gap-10">
          {projects.map((project, index) => {
            return (
              <li key={index}>
                <div className="flex items-center space-x-2">
                  {project.link && (
                      <Link href={project.link} passHref target="_blank">
                      <ExternalLinkIcon />
                    </Link>
                  )}
                  <h4 className="font-geist_mono text-ice-cold-500">{project.name}</h4>
                </div>
                <p className="text-blueberg-400">{project.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
