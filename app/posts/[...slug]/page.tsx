import '../../mdx.css'

import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Mdx } from "@/app/components/mdx-components"
import { allPosts } from "@/.contentlayer/generated/index.mjs"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="p-10 flex flex-col items-center pb-[155px]">
      <h1 className="mb-2 text-ice-cold-400 font-geist_mono">{post.title}</h1>
      <div className="max-w-2xl">
        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}