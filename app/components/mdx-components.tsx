"use client";

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { cn } from "../lib/cn";
import { CodeBlock } from "./code-block";
import { Container } from "./container";

const components = {
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<h3
			className={cn(
				"leading-7 [&:not(:first-child)]:mt-6 font-geist_mono text-ice-cold-400 text-3xl",
				className,
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<h3
			className={cn(
				"leading-7 [&:not(:first-child)]:mt-6 font-geist_mono text-ice-cold-400 text-2xl",
				className,
			)}
			{...props}
		/>
	),
	h5: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<h3
			className={cn(
				"leading-7 [&:not(:first-child)]:mt-6 font-geist_mono text-ice-cold-400 text-xl",
				className,
			)}
			{...props}
		/>
	),
	h6: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<h3
			className={cn(
				"leading-7 [&:not(:first-child)]:mt-6 font-geist_mono text-ice-cold-400 text-lg",
				className,
			)}
			{...props}
		/>
	),
	p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
	),
	a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
		<a className={cn("font-medium underline underline-offset-4", className)} {...props} />
	),
	ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
		<ul className={cn("my-2 ml-6 list-disc", className)} {...props} />
	),
	ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
		<ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
	),
	li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<li className={cn("mt-2", className)} {...props} />
	),
	hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
		<hr className="my-4 md:my-8" {...props} />
	),
	img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img className={cn("rounded-md", className)} alt={alt} {...props} />
	),
	pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
		return (
			<pre
				className={cn(
					"max-h-[650px] grid overflow-x-auto scrollbar-thin rounded-lg border-ice-cold-900 border-1",
					className,
				)}
				{...props}
			/>
		);
	},
	code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<code
			className={cn("relative min-w-full p-2 rounded font-geist_mono text-sm", className)}
			{...props}
		/>
	),
	Image,
	Container: ({ className, ...props }: React.ComponentProps<typeof Container>) => (
		<Container className={cn(className, "gap-4 flex-wrap")} {...props} />
	),
	CodeBlock: ({ ...props }) => <CodeBlock {...props} />,
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return <Component components={components} />;
}
