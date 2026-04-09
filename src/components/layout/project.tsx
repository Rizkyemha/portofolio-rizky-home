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
import { Search } from "lucide-react";
import { QuickPreview, QuickPreview2 } from "@/components/layout/quickPreview";

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
			<div className='group overflow-hidden relative min-w-fit h-fit rounded-xl hover:cursor-pointer'>
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
					<CardContent className='w-full h-full flex flex-col space-y-4'>
						<div className='flex flex-col space-y-2'>
							<CardTitle>{props.title}</CardTitle>
							<p className='text-sm'>{props.date}</p>
						</div>
						<CardDescription className='bg-transparent line-clamp-3'>
							{props.excerpt}
						</CardDescription>
						<div className='space-x-1 mt-auto'>
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

interface ContentProps extends ProjectProps, BlogProps {
	className?: string;
}

export const ContentCard = ({ className = "", ...props }: ContentProps) => {
	return (
		<Card className={cn("group/card w-full aspect-auto", className)}>
			<CardContent className='w-full h-full flex flex-col space-y-4'>
				<div
					className={cn(
						"relative flex items-center rounded-lg overflow-hidden aspect-square md:aspect-video bg-primary"
					)}>
					<Image
						width={712}
						height={400}
						src={props.coverImage}
						alt={props.title}
						className='w-full h-full object-cover scale-100 group-hover/card:scale-110 group-hover/card:brightness-50 transition-all duration-300 ease-in-out '
					/>
					<QuickPreview
						className='absolute top-[1rem] right-[1rem] md:-top-[4rem] md:group-hover/card:top-[1rem] md:group-hover/card:right-[1rem] h-fit p-2.5 rounded-full bg-background text-foreground md:group-hover/card:bg-foreground md:group-hover/card:text-background transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-105'
						{...props}>
						<Search className='aspect-square' size={25} />
					</QuickPreview>
				</div>
				<div className='flex flex-col space-y-2 self-start'>
					<CardTitle>{props.title}</CardTitle>
					<p className='text-sm text-left'>{props.date}</p>
				</div>
				<CardDescription className='bg-transparent line-clamp-3 self-start text-left'>
					{props.excerpt}
				</CardDescription>
				<div className='space-x-1 self-start mt-auto'>
					{props.tags.slice(0, 4).map((tag) => (
						<Badge variant='default' key={tag}>
							{tag}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
};
