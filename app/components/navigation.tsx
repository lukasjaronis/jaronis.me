"use client";

import {
  TriangleLeftIcon,
  TriangleUpIcon,
  TriangleRightIcon,
  KeyboardIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { cn } from "../lib/cn";
import { useRouter, usePathname } from "next/navigation";

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
    }, 500);

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

  return (
    <div className="fixed inset-x-0 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-full backdrop-blur-sm h-32">
      <div className="absolute bottom-5 left-10">
        <span className="font-geist_mono text-ice-cold-500">
          {pathname.charAt(0).toUpperCase() + pathname.slice(1)}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div
          className={`relative border-1 border-blueberg-800 rounded-lg w-10 h-10 flex items-center justify-center ${
            isTrigger("ArrowUp") && "scale-[.9]"
          }`}
        >
          <TriangleUpIcon
            className={cn(
              "h-6 w-6 text-ice-cold-100",
              triggeredNav === "ArrowUp" && "text-ice-cold-500 scale-[.9]"
            )}
          />
          {isTrigger("ArrowUp") && (
            <span className="absolute bottom-10 right-1/2 translate-x-1/2 text-ice-cold-400 scale-[.9">
              Intro
            </span>
          )}
        </div>
        <div className="flex">
          <div
            className={`relative border-1 border-blueberg-800 rounded-lg w-10 h-10 flex items-center justify-center ${
              isTrigger("ArrowLeft") && "scale-[.9]"
            }`}
          >
            <TriangleLeftIcon
              className={cn(
                "h-6 w-6 text-ice-cold-100",
                triggeredNav === "ArrowLeft" && "text-ice-cold-500 scale-[.9]"
              )}
            />
            {isTrigger("ArrowLeft") && (
              <span className="absolute top-1/2 -translate-y-1/2 right-10 text-ice-cold-400 scale-[.9]">
                Work
              </span>
            )}
          </div>
          <div className=" w-10 h-10 flex items-center justify-center">
            <KeyboardIcon className="h-6 w-6 text-ice-cold-900" />
          </div>
          <div
            className={`relative border-1 border-blueberg-800 rounded-lg w-10 h-10 flex items-center justify-center ${
              isTrigger("ArrowRight") && "scale-[.9]"
            }`}
          >
            <TriangleRightIcon
              className={cn(
                "h-6 w-6 text-ice-cold-100",
                triggeredNav === "ArrowRight" && "text-ice-cold-500"
              )}
            />
            {isTrigger("ArrowRight") && (
              <span className="absolute top-1/2 -translate-y-1/2 left-10 text-ice-cold-400 scale-[.9]">
                Projects
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
