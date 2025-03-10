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
					<h1 className='font-bold font-display w-fit text-6xl cursor-default tracking-tight hover:tracking-wide transition-[letter-spacing] timing-spring'>
						eleanes
					</h1>
				</Section>
				<Section className='flex w-full max-w-lg mx-auto p-2'>
					<div className='flex-1 w-full bg-gray-3 p-6 py-10 rounded flex flex-col gap-4'>
						<div className='flex font-medium font-display text-2xl'>Hello, World!</div>
						<div className='flex'>
							Get started by editing&nbsp;
							<span className='p-1 rounded bg-gray-5 -translate-y-1'>
								<code>app/page.tsx</code>
							</span>
							.
						</div>
						<div className='flex'>
							<ul className='list-disc *:[li]:ml-6 *:[li]:pb-3'>
								You have several tools installed already.
								<li>Taiwind v4</li>
								<li>
									Dark Mode (<ThemeDisplay />)
								</li>
								<li>
									A custom{" "}
									<span className='p-1 rounded bg-gray-5 -translate-y-1'>
										<code>@/app/theme.css</code>
									</span>
									.
								</li>
								<li>
									A{" "}
									<span className='p-1 rounded bg-gray-5 -translate-y-1'>
										<code>@/lib/</code>
									</span>{" "}
									directory with a useful files.
								</li>
								<li>
									A collection of commonly used{" "}
									<span className='p-1 rounded bg-gray-5 -translate-y-1'>
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
				<Section className='px-2 flex items-center justify-center mb-8'>
					<Link
						className='button flex items-center gap-1.5 text-gray-9 pointer-events-none'
						href={"/"}>
						(Coming Soon) Read the Docs <BsArrowRight className='size-[1em] inline mt-0.5' />
					</Link>
				</Section>
				<Section className='p-0 border-t pt-5 mt-auto grid pl grid-cols-1 place-items-center'>
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
