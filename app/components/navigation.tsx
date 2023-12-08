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
import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { XIcon } from "../icons/x";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { cn } from "../lib/cn";

type KeyEvents = "ArrowLeft" | "ArrowRight" | "ArrowUp" | undefined;
type Pages = "intro" | "projects" | "work";

export const Navigation = () => {
	/**
	 * To solve tab crashes, we have to lock in one key at a time and then reset it after route change.
	 */
	const currentLockedKey = useRef<KeyEvents>(undefined)
	const [isInitial, setIsInitial] = useState(true);
	const [heldKey, setHeldKey] = useState<KeyEvents>(undefined)


	const pathname = usePathname().replace("/", "") as Pages;
	const isContent = pathname.includes("posts/");
	const router = useRouter();

	const onKeyEvent = (key: Exclude<KeyEvents, "undefined">) =>
	heldKey === key || isInitial;

	useEffect(() => {
		const registeredLeftNav = registerNav("ArrowLeft", "work");
		const registeredRightNav = registerNav("ArrowRight", "projects");
		const registeredUpNav = registerNav("ArrowUp", "intro");

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
		key: Exclude<KeyEvents, "undefined">,
		page?: Pages,
	) => {
		/**
		 * onKeyUp triggers a route change
		 */
		const onKeyUp = (event: KeyboardEvent) => {
			if (event.key === key) {
				// check if locked key is the same as the incoming key event
				if (currentLockedKey.current === event.key) {
					if (page) {
						if (page !== window.location.pathname.replace('/', '')) {
							router.replace("/" + page);
							// reset locked key
							currentLockedKey.current = undefined
						}
					}
				}
			}
		};

		/**
		 * onKeydown triggers a route request
		 */
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === key) {
				event.preventDefault();

				// Immediately reset initial 
				if (isInitial) {
					setIsInitial(false);
				}


				setHeldKey(key)

				// Lock in the key
				currentLockedKey.current = key
			}
		};

		document.addEventListener("keyup", onKeyUp);
		document.addEventListener("keydown", onKeyDown);
		return {
			unregister: () => {
				document.removeEventListener("keyup", onKeyUp);
				document.removeEventListener("keydown", onKeyDown);
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
					animate={onKeyEvent("ArrowLeft") ? "toggled" : "visible"}
					className={cn(
						"group relative w-full h-full flex items-center justify-center"
					)}
					onClick={() => router.replace("/work")}
				>
					<TriangleLeftIcon className={cn('h-6 w-6 text-ice-cold-100', !isInitial && pathname === "work" && "group-disabled:opacity-5",)} />
					<AnimatePresence>
						{onKeyEvent("ArrowLeft") && (
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
					animate={onKeyEvent("ArrowUp") ? "toggled" : "visible"}
					className={cn(
						"group relative w-full h-full flex items-center justify-center border-x-1 border-firefly-950"
					)}
					onClick={() => router.replace("/intro")}
				>
					<TriangleUpIcon className={cn('h-6 w-6 text-ice-cold-100', !isInitial && pathname === "intro" && "group-disabled:opacity-5",)} />
					<AnimatePresence>
						{onKeyEvent("ArrowUp") && (
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
					animate={onKeyEvent("ArrowRight") ? "toggled" : "visible"}
					className={cn(
						"group relative w-full h-full flex items-center justify-center"
					)}
					onClick={() => router.replace("/projects")}
				>
					<TriangleRightIcon className={cn('h-6 w-6 text-ice-cold-100', !isInitial && pathname === "projects" && "group-disabled:opacity-5",)} />
					<AnimatePresence>
						{onKeyEvent("ArrowRight") && (
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
