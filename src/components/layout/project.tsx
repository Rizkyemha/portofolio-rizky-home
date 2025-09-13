import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { type Project as ProjectProps, type Blog as BlogProps } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface Props extends ProjectProps, BlogProps {
	className?: string;
	py?: boolean;
	pt?: boolean;
	pb?: boolean;
	px?: boolean;
	pl?: boolean;
	pr?: boolean;
}

export const Project = ({
	className = "",
	py = true,
	pt = true,
	pb = true,
	px = true,
	pl = true,
	pr = true,
	...props
}: Props) => {
	return (
		<Link href={`/${props.type}/${props.slug}`}>
			<div className='fade-in group overflow-hidden relative min-w-fit h-fit rounded-xl hover:cursor-pointer'>
				<div
					className={cn(
						!px && "px-0",
						!pl && "pl-0",
						!pr && "pr-0",
						"min-w-fit relative"
					)}>
					<div className='flex items-center justify-center aspect-square md:aspect-video bg-primary'>
						<Image
							width={712}
							height={400}
							src={props.coverImage}
							alt={props.title}
							className='w-full h-full object-cover scale-100 group-hover:scale-110 group-hover:blur-sm group-hover:brightness-50 transition-all duration-300 ease-in-out '
						/>
					</div>
				</div>
				<div className='absolute inset-x-0 inset-y-[70%] bottom-5 text-center bg-primary/50 flex items-center justify-center scale-100 group-hover:scale-0 transition-all duration-300 ease-in-out'>
					<p>{props.title}</p>
				</div>
				<Card
					className={cn(
						"absolute scale-0 inset-y-2 inset-x-2 backdrop-blur-md group-hover:scale-100 transition-all duration-300 ease-in-out",
						!py && "py-0",
						!pt && "pt-0",
						!pb && "pb-0",
						className
					)}>
					<CardContent className='w-full aspect-auto flex flex-col space-y-4'>
						<div className='flex flex-col space-y-2'>
							<CardTitle>{props.title}</CardTitle>
							<p className='text-sm'>{props.date}</p>
						</div>
						<CardDescription className='bg-transparent line-clamp-3'>
							{props.excerpt}
						</CardDescription>
						<div className='space-x-1'>
							{props.tags.slice(0, 4).map((tag) => (
								<Badge variant='default' key={tag}>
									{tag}
								</Badge>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</Link>
	);
};
