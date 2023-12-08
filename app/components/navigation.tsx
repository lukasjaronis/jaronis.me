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
import { AnimatePresence, Variants, motion } from "framer-motion";
import { cn } from "../lib/cn";

type TriggerNav = "ArrowLeft" | "ArrowRight" | "ArrowUp" | undefined;
type Pages = "intro" | "projects" | "work";

// TODO fix key events causing tab crash :)

export const Navigation = () => {
	const [isInitial, setIsInitial] = useState(true);
	const pathname = usePathname().replace("/", "") as Pages;
	const isContent = pathname.includes("posts/");
	const router = useRouter();

	const [triggeredNav, setTriggeredNav] = useState<TriggerNav>(undefined);
	const onTriggerDown = (trigger: Exclude<TriggerNav, "undefined">) =>
		triggeredNav === trigger || isInitial;

	useEffect(() => {
		const body = document.getElementsByTagName("body")[0];

		if (!body) return;

		const registeredLeftNav = registerNav(body, "ArrowLeft", "work");
		const registeredRightNav = registerNav(body, "ArrowRight", "projects");
		const registeredUpNav = registerNav(body, "ArrowUp", "intro");

		return () => {
			registeredLeftNav.unregister();
			registeredRightNav.unregister();
			registeredUpNav.unregister();
		};
	}, []);

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>;

		timer = setTimeout(() => {
			setIsInitial(false);
		}, 1500);

		return () => {
			clearTimeout(timer);
		}
	}, [])

	const registerNav = (
		body: HTMLBodyElement,
		key: Exclude<TriggerNav, "undefined">,
		page?: Pages,
	) => {
		const toggleUp = (event: KeyboardEvent) => {
			if (event.key === key) {
				setTriggeredNav(undefined);

				if (page) {
					if (page !== window.location.pathname.replace('/', '')) {
						router.replace("/" + page);
					}
				}
			}
		};

		const toggleDown = (event: KeyboardEvent) => {
			if (event.key === key) {
				event.preventDefault();

				if (isInitial) {
					setIsInitial(false);
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

	const variants: Variants = {
		hidden: {
			scale: 0,
		},
		visible: {
			scale: 1,
		},
		toggled: { scale: 0.85 },
	};

	return (
		<div className="fixed inset-x-0 bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center w-full backdrop-blur-sm h-36">
			{!isContent && (
				<div className="absolute bottom-2 left-1/2 -translate-x-1/2">
					<span className="font-geist_mono text-ice-cold-500">
						{pathname.charAt(0).toUpperCase() + pathname.slice(1)}
					</span>
				</div>
			)}
			<div className="absolute bottom-5 right-5 flex flex-col items-center gap-4">
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
			<div className="absolute bottom-5 left-5 flex flex-col items-center gap-4">
				<KeyboardIcon className="h-6 w-6 text-ice-cold-500 animate-pulse" />
			</div>
			<motion.div className={cn('relative mb-10 flex flex-row justify-between bg-firefly-900 w-full max-w-[125px] h-10 rounded-md')}>
				<motion.button
					disabled={pathname === "work"}
					initial="hidden"
					variants={variants}
					animate={onTriggerDown("ArrowLeft") ? "toggled" : "visible"}
					className={cn(
						"group relative w-full h-full flex items-center justify-center"
					)}
					onClick={() => router.replace("/work")}
				>
					<TriangleLeftIcon className={cn('h-6 w-6 text-ice-cold-100', !isInitial && pathname === "work" && "group-disabled:opacity-5",)} />
					<AnimatePresence>
						{onTriggerDown("ArrowLeft") && (
							<motion.span
								exit={{ opacity: 0 }}
								className={cn(
									"absolute top-1/2 -translate-y-1/2 right-12 text-ice-cold-400",
									!isInitial && "group-disabled:hidden",
								)}
							>
								Work
							</motion.span>
						)}
					</AnimatePresence>
				</motion.button>
				<motion.button
					disabled={pathname === "intro"}
					initial="hidden"
					variants={variants}
					animate={onTriggerDown("ArrowUp") ? "toggled" : "visible"}
					className={cn(
						"group relative w-full h-full flex items-center justify-center border-x-1 border-firefly-950"
					)}
					onClick={() => router.replace("/intro")}
				>
					<TriangleUpIcon className={cn('h-6 w-6 text-ice-cold-100', !isInitial && pathname === "intro" && "group-disabled:opacity-5",)} />
					<AnimatePresence>
						{onTriggerDown("ArrowUp") && (
							<motion.span
								exit={{ opacity: 0 }}
								className={cn(
									"absolute bottom-12 right-1/2 translate-x-1/2 text-ice-cold-400",
									!isInitial && "group-disabled:hidden",
								)}
							>
								Intro
							</motion.span>
						)}
					</AnimatePresence>
				</motion.button>
				<motion.button
					disabled={pathname === "projects"}
					initial="hidden"
					variants={variants}
					animate={onTriggerDown("ArrowRight") ? "toggled" : "visible"}
					className={cn(
						"group relative w-full h-full flex items-center justify-center"
					)}
					onClick={() => router.replace("/projects")}
				>
					<TriangleRightIcon className={cn('h-6 w-6 text-ice-cold-100', !isInitial && pathname === "projects" && "group-disabled:opacity-5",)} />
					<AnimatePresence>
						{onTriggerDown("ArrowRight") && (
							<motion.span
								exit={{ opacity: 0 }}
								className={cn(
									"absolute top-1/2 -translate-y-1/2 left-12 text-ice-cold-400",
									!isInitial && "group-disabled:hidden",
								)}
							>
								Projects
							</motion.span>
						)}
					</AnimatePresence>
				</motion.button>
			</motion.div>
		</div>
	);
};
