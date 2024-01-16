import Link from "next/link";
import { projects } from "./projects";
import { experiences } from "./work-exp";
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { XIcon } from "./icons/x";

export default function RootPage() {
  return (
    <section className="py-5 container">
      <div className="flex flex-row items-center gap-3 pb-5">
        <Link href="https://twitter.com/yebuntu" target="_blank" className="transition-all rounded-full p-1 hover:bg-grey04">
          <XIcon className="h-3 w-3" />
        </Link>
        <Link href="https://github.com/lukasjaronis" target="_blank" className="transition-all rounded-full p-1 hover:bg-grey04">
          <GitHubLogoIcon className="h-4 w-4" />
        </Link>
        <Link href="https://www.linkedin.com/in/lukasjaronis/" target="_blank" className="transition-all rounded-full p-1 hover:bg-grey04">
          <LinkedInLogoIcon className="h-4 w-4" />
        </Link>
        <Link href="mailto:jaronislukas@gmail.com" target="_blank" className="transition-all rounded-full p-1 hover:bg-grey04">
          <EnvelopeClosedIcon className="h-4 w-4" />
        </Link>
      </div>
      <div>
        <h1 className="text-2xl">Lukas Jaronis</h1>
        <p className="text-sm text-grey02">Just a dev doing dev things</p>
      </div>
      <div className="h-[1px] w-full bg-grey04 my-5" />
      <div className="space-y-5">
        {projects.map((project, idx) => (
          <div key={project.name}>
            <div className="flex items-center gap-2">
              <h3>{project.name}</h3>
              {idx == 0 && (
                <span className="text-accent text-xs font-geist_mono">
                  (current)
                </span>
              )}
              {project.demo && (
                <Link href={project.demo} passHref target="_blank" className="text-xs font-geist_mono underline underline-offset-2">
                  demo
                </Link>
              )}
              {project.link && (
                <Link href={project.link} passHref target="_blank" className="text-xs font-geist_mono underline underline-offset-2">
                  link
                </Link>
              )}
            </div>
            <p className="text-sm text-grey02">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="h-[1px] w-full bg-grey04 my-5" />
      <div className="space-y-5">
        {experiences.map((exp) => (
          <div key={exp.name}>
            <div className="flex items-center gap-2">
              <h3>{exp.name}</h3>
              {exp.link && (
                <Link href={exp.link} passHref target="_blank" className="text-xs font-geist_mono underline underline-offset-2">
                  link
                </Link>
              )}
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-sm text-accent">{exp.role}</p>
              <p className="text-xs text-grey02/80">{exp.date}</p>
            </div>
            <p className="text-sm text-grey02">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
