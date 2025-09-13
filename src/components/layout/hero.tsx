"use client";

import { ChevronDown } from "lucide-react";
import { useFadeInStagger } from "@/components/animation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Github, Globe } from "lucide-react";

import React from "react";

interface Props {
	root?: boolean;
	children?: React.ReactNode;
	header: string;
	description?: string;
	cta?: string;
}

export const Hero = ({
	root = false,
	header,
	description,
	cta,
	children,
}: Props) => {
	const containerRef = React.useRef<HTMLDivElement>(null);

	useFadeInStagger(containerRef as React.RefObject<HTMLDivElement>);

	return (
		<div ref={containerRef} className='relative w-full h-[100vh]'>
			<div className='relative flex z-[2] flex-col gap-4 items-center justify-center h-full px-4'>
				{!root ? (
					<h1 className='fade-in my-4 font-thin text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl [text-shadow:0_0_3px_#93c5fd,0_0_5px_#60a5fa,0_0_10px_#3b82f6]'>
						{header}
					</h1>
				) : (
					<h1 className='fade-in text-6xl font-thin text-center [text-shadow:0_0_3px_#93c5fd,0_0_5px_#60a5fa,0_0_10px_#3b82f6]'>
						HALLO <span className='inline-block animate-bounce'>🚀</span>{" "}
						VISITER
					</h1>
				)}
				{description && (
					<p className='fade-in font-light text-center sm:text-xl pb-4 lg:w-2/3'>
						{description}
					</p>
				)}
				{cta && (
					<>
						<p className='fade-in font-medium text-center text-sm sm:text-xl'>
							{cta}
						</p>
						<ChevronDown size={32} className='fade-in animate-bounce' />
					</>
				)}
				{children}
			</div>
			<div className='absolute inset-x-0 inset-y-0 object-cover z-[1] bg-background/50 backdrop-blur-sm'></div>
		</div>
	);
};

interface HeroContantProps {
	coverImage: string;
	title: string;
	date: string;
	tags: string[];
	repo?: string;
	url?: string;
}

export const HeroContent = ({
	coverImage = "",
	title,
	date,
	tags,
	repo = "",
	url = "",
}: HeroContantProps) => {
	const containerRef = React.useRef<HTMLDivElement>(null);

	useFadeInStagger(containerRef as React.RefObject<HTMLDivElement>);

	return (
		<div
			ref={containerRef}
			className='relative aspect-auto h-[100vh] w-full sm:aspect-video'>
			<div
				className={cn(
					"relative flex flex-col gap-4 items-center justify-center h-full px-4",
					coverImage !== "" ? "bg-black/70 backdrop-blur-[2px]" : ""
				)}>
				<p className='blog-card'>{date}</p>
				<h1 className='text-center m-0'>{title}</h1>
				<div className='flex flex-wrap justify-center items-center gap-4'>
					{tags?.map((tag) => (
						<span
							key={tag}
							className='bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-1 rounded dark:bg-slate-950 dark:text-gray-100'>
							{tag}
						</span>
					))}
				</div>
				<div className='flex flex-wrap gap-4'>
					{repo && (
						<div className='flex gap-2 items-center justify-center'>
							<a href={repo} target='_blank'>
								<Github
									className='aspect-square p-2 dark:bg-slate-950 dark:text-gray-100 rounded-full'
									size={30}
								/>
							</a>
							<a href={repo} target='_blank'>
								Repositori
							</a>
						</div>
					)}
					{url && (
						<div className='flex gap-2 items-center justify-center'>
							<a href={url} target='_blank'>
								<Globe
									className='aspect-square p-2 dark:bg-slate-950 dark:text-gray-100 rounded-full'
									size={30}
								/>
							</a>
							<a href={url} target='_blank'>
								Website
							</a>
						</div>
					)}
				</div>
			</div>
			{coverImage !== "" ? (
				<Image
					width={500}
					height={500}
					priority={true}
					src={coverImage}
					alt={`Cover image for ${title}`}
					className='shadow-lg absolute top-0 left-0 w-full h-full object-cover z-[-1]'
				/>
			) : (
				<div className='shadow-lg absolute top-0 left-0 w-full h-full object-cover z-[-1]'></div>
			)}
		</div>
	);
};
