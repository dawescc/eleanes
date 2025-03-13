import { ThemeDisplay } from "@/components/theme-switch-example";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
	return (
		<div className='grow @container flex flex-col p-2 md:p-0'>
			<div className='flex-1 w-full max-w-lg mx-auto flex flex-col py-20'>
				<Section className='pt-0 flex items-center gap-4 mb-8'>
					<Image
						src={"/eleanes.svg"}
						alt={"Eleanes Logo"}
						width={500}
						height={500}
						className='size-18 dark:invert'
					/>
					<h1 className='font-bold font-display w-fit text-title-large cursor-default tracking-tight hover:tracking-wide transition-[letter-spacing] timing-spring'>
						eleanes
					</h1>
				</Section>
				<Section className='flex w-full max-w-lg mx-auto p-2 text-body'>
					<div className='flex-1 w-full bg-gray-3 p-6 py-10 rounded flex flex-col gap-4'>
						<div className='flex font-medium font-display text-title-1'>Hello, World!</div>
						<div className='flex items-baseline'>
							Get started by editing&nbsp;
							<span className='p-1 py-3 rounded bg-gray-5 font-mono text-caption-1 h-[1lh] inline-flex items-center w-fit'>
								<code>app/page.tsx</code>
							</span>
							.
						</div>
						<div className='flex items-baseline'>
							<ul className='list-disc *:[li]:ml-6 *:[li]:pb-3'>
								You have several tools installed already.
								<li>Taiwind v4</li>
								<li>
									Dark Mode (<ThemeDisplay />)
								</li>
								<li>
									A custom{" "}
									<span className='p-1 py-3 rounded bg-gray-5 font-mono text-caption-1 h-[1lh] inline-flex items-center w-fit'>
										<code>@/app/theme.css</code>
									</span>
									.
								</li>
								<li>
									A{" "}
									<span className='p-1 py-3 rounded bg-gray-5 font-mono text-caption-1 h-[1lh] inline-flex items-center w-fit'>
										<code>@/lib/</code>
									</span>{" "}
									directory with a useful files.
								</li>
								<li>
									A collection of commonly used{" "}
									<span className='p-1 py-3 rounded bg-gray-5 font-mono text-caption-1 h-[1lh] inline-flex items-center w-fit'>
										<code>@/hooks/</code>
									</span>
									.
								</li>
								<li>Vercel Analytics.</li>
								<li>Vercel Speed-Insights.</li>
							</ul>
						</div>
					</div>
				</Section>
				<Section className='px-2 flex items-center justify-center mb-8 text-body'>
					<Link
						className='button text-callout flex items-center gap-1.5 text-gray-9 pointer-events-none'
						href={"/"}>
						(Coming Soon) Read the Docs <BsArrowRight className='size-[1em] inline mt-0.5' />
					</Link>
				</Section>
				<Section className='p-0 border-t pt-5 mt-auto grid pl grid-cols-1 place-items-center text-body'>
					<Image
						src={"/eleanes.svg"}
						alt={"Eleanes Logo"}
						width={500}
						height={500}
						className='size-8 dark:invert opacity-40'
					/>
					<span className='text-xs text-gray-9 mt-4'>2025</span>
				</Section>
			</div>
		</div>
	);
}

const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <div className={cn("py-5", className)}>{children}</div>;
};
