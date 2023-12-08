import Link from "next/link";

export default function Intro() {
	return (
		<section className="flex items-center justify-center h-[calc(100vh_-_128px)]">
			<div className="max-w-xl flex flex-col w-full">
				<div className="self-center mb-10">
					<p className="text-4xl text-firefly-100 text-center md:text-left font-geist_mono">Lukas Jaronis</p>
					<p className="text-sm text-firefly-400 text-center md:text-left font-geist_mono">full-stacker with 5+ yoe</p>
				</div>
				<p className="md:indent-10">Finishing up <Link href="/projects" className="underline underline-offset-4 font-black hover:text-firefly-100">Gate</Link> which is the 'genesis' service for a 1-click serverless service incubator which
					aims to provide products ownership of services they need, but much more affordable and flexible towards their own scopes.
				</p>
			</div>
		</section>
	);
}
