import Link from "next/link";

export default function Intro() {
	return (
		<section className="flex items-center justify-center h-[calc(100vh_-_128px)]">
			<div className="max-w-xl flex flex-col w-full">
				<div className="self-center mb-10">
					<p className="text-4xl text-firefly-100 text-center md:text-left font-geist_mono">Lukas Jaronis</p>
					<p className="text-sm text-firefly-400 text-center md:text-left font-geist_mono">full-stacker with 5+ yoe</p>
				</div>
				<p className="text-center md:indent-10">Working on serverless services both for pleasure and educative means,
					where I aim to provide self-hosted <i>templates</i> with the bells and whistles needed for any product.
				</p>
				<p className="pt-2 text-center md:indent-10">Currently focusing on <Link href="/projects" className="underline underline-offset-4 font-black hover:text-firefly-100">Gate</Link> which enables owners to create keys and verify them based on constraints they need.</p>
			</div>
		</section>
	);
}
