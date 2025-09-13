"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { publicRoutes } from "@/src/routes";
import { cn } from "@/src/lib/utils";

export default function Nav() {
	const pathname = usePathname();

	return (
		<div className='flex gap-4 flex-wrap'>
			{publicRoutes.map((route, index) => (
				<Link
					key={index}
					className={cn(
						pathname === route.href
							? "!text-accent-foreground font-semibold bg-accent"
							: "font-extralight border border-dashed sm:border-transparent hover:border-foreground sm:hover:border-dashed box-border",
						"grow sm:shrink py-2 px-6 aspect-auto text-center rounded-3xl flex items-center justify-center gap-2"
					)}
					aria-label={`navigation to ${route.name} page`}
					href={route.href}
					style={{
						pointerEvents: pathname === route.href ? "none" : "auto",
						cursor: pathname === route.href ? "default" : "pointer",
					}}>
					{route.icon}
					<p className='hidden sm:block'>{route.name}</p>
				</Link>
			))}
		</div>
	);
}
