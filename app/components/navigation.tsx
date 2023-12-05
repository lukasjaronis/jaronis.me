"use client";

import {
  TriangleLeftIcon,
  TriangleUpIcon,
  TriangleRightIcon,
  KeyboardIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { XIcon } from "../icons/x";
import { Variants, motion } from "framer-motion";

export const Navigation = () => {
  const [isInitial, setIsInitial] = useState(true);
  const pathname = usePathname().replace("/", "");
  const router = useRouter();

  const [triggeredNav, setTriggeredNav] = useState<
    "ArrowLeft" | "ArrowRight" | "ArrowUp" | undefined
  >(undefined);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (!body) return;

    let timer: ReturnType<typeof setTimeout>;

    const registeredLeftNav = registerNav(body, "ArrowLeft", "work");
    const registeredRightNav = registerNav(body, "ArrowRight", "projects");
    const registeredUpNav = registerNav(body, "ArrowUp", "intro");

    timer = setTimeout(() => {
      setIsInitial(false);
    }, 1000);

    return () => {
      registeredLeftNav.unregister();
      registeredRightNav.unregister();
      registeredUpNav.unregister();
      clearTimeout(timer);
    };
  }, []);

  const registerNav = (
    body: HTMLBodyElement,
    key: "ArrowLeft" | "ArrowRight" | "ArrowUp",
    location?: "intro" | "projects" | "work"
  ) => {
    const toggleUp = (event: KeyboardEvent) => {
      if (event.key === key) {
        setTriggeredNav(undefined);

        if (location) {
          router.replace("/" + location);
        }
      }
    };

    const toggleDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        event.preventDefault();

        if (isInitial) {
          setIsInitial(false)
        }

        setTriggeredNav(key);
      }
    };

    body.addEventListener("keyup", toggleUp);
    body.addEventListener("keydown", toggleDown);
    return {
      unregister: () => {
        body.removeEventListener("keyup", toggleUp);
        body.removeEventListener("keydown", toggleDown);
      },
    };
  };

  const isTrigger = (trigger: "ArrowLeft" | "ArrowRight" | "ArrowUp") => {
    if (triggeredNav === trigger || isInitial) {
      return true;
    }

    return false;
  };

  const variants: Variants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
    toggled: { scale: 0.9 }
  }

  return (
    <div className="fixed inset-x-0 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-full backdrop-blur-sm h-32">
      <div className="absolute bottom-5 left-10">
        <span className="font-geist_mono text-ice-cold-500">
          {pathname.charAt(0).toUpperCase() + pathname.slice(1)}
        </span>
      </div>
      <div className="absolute bottom-5 right-10 flex flex-col items-center gap-4">
        <Link href="https://twitter.com/yebuntu" target="_blank">
          <XIcon className="h-3 w-3 text-ice-cold-500" />
        </Link>
        <Link href="https://github.com/lukasjaronis" target="_blank">
          <GitHubLogoIcon className="h-4 w-4 text-ice-cold-500" />
        </Link>
        <Link href="https://www.linkedin.com/in/lukasjaronis/" target="_blank">
          <LinkedInLogoIcon className="h-4 w-4 text-ice-cold-500" />
        </Link>
        <Link href="mailto:jaronislukas@gmail.com" target="_blank">
          <EnvelopeClosedIcon className="h-4 w-4 text-ice-cold-500" />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <motion.div
          initial='hidden'
          variants={variants}
          animate={isTrigger("ArrowUp") ? 'toggled' : 'visible'}
          className="relative border-1 border-blueberg-800 rounded-lg w-10 h-10 flex items-center justify-center"
        >
          <TriangleUpIcon
            className='h-6 w-6 text-ice-cold-100'
          />
          {isTrigger("ArrowUp") && (
            <span className="absolute bottom-12 right-1/2 translate-x-1/2 text-ice-cold-400">
              Intro
            </span>
          )}
        </motion.div>
        <div className="flex">
          <motion.div
              initial='hidden'
              variants={variants}
              animate={isTrigger("ArrowLeft") ? 'toggled' : 'visible'}
            className="relative border-1 border-blueberg-800 rounded-lg w-10 h-10 flex items-center justify-center"
          >
            <TriangleLeftIcon
              className="h-6 w-6 text-ice-cold-100"
            />
            {isTrigger("ArrowLeft") && (
              <span className="absolute top-1/2 -translate-y-1/2 right-12 text-ice-cold-400">
                Work
              </span>
            )}
          </motion.div>
          <motion.div
              initial='hidden'
              variants={variants}
              animate='visible'
            className="w-10 h-10 flex items-center justify-center"
          >
            <KeyboardIcon className="h-6 w-6 text-ice-cold-900" />
          </motion.div>
          <motion.div
           initial='hidden'
           variants={variants}
           animate={isTrigger("ArrowRight") ? 'toggled' : 'visible'}
            className="relative border-1 border-blueberg-800 rounded-lg w-10 h-10 flex items-center justify-center"
          >
            <TriangleRightIcon
              className="h-6 w-6 text-ice-cold-100"
            />
            {isTrigger("ArrowRight") && (
              <span className="absolute top-1/2 -translate-y-1/2 left-12 text-ice-cold-400">
                Projects
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
