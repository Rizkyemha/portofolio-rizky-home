import Nav from "@/components/layout/nav";
import React from "react";
import { useDownInScroll } from "@/components/animation";

export default function Header() {
	const ref = React.useRef<HTMLDivElement>(null);

	useDownInScroll(ref as React.RefObject<HTMLDivElement>);

	return (
		<header
			ref={ref}
			className='fixed inset-x-0 top-0 z-50 flex flex-wrap items-center justify-between py-4 px-4 sm:px-6 gap-4 border-b border-border/20 bg-background/80 backdrop-blur-[3px]'>
			<h1 className='text-center text-2xl grow sm:text-left'>
				/ rizkyemha.dev /
			</h1>
			<Nav />
		</header>
	);
}
