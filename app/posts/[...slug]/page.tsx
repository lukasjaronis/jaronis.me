import "../../mdx.css";

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Mdx } from "@/app/components/mdx-components";
import { allPosts } from "@/.contentlayer/generated/index.mjs";

interface PostProps {
	params: {
		slug: string[];
	};
}

async function getPostFromParams(params: PostProps["params"]) {
	const slug = params?.slug?.join("/");
	const post = allPosts.find((post) => post.slugAsParams === slug);

	if (!post) {
		null;
	}

	return post;
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
	const post = await getPostFromParams(params);

	if (!post) {
		return {};
	}

	return {
		title: post.title,
	};
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
	return allPosts.map((post) => ({
		slug: post.slugAsParams.split("/"),
	}));
}

export default async function PostPage({ params }: PostProps) {
	const post = await getPostFromParams(params);

	if (!post) {
		notFound();
	}

	return (
		<article className="container py-10">
			<h1 className="mb-2 font-geist_mono">{post.title}</h1>
			<Mdx code={post.body.code} />
		</article>
	);
}
