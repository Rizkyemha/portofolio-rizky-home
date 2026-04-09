import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetClose,
	SheetDescription,
	SheetHeader,
	SheetFooter,
	SheetTitle,
} from "@/components/ui/sheet";

import { ScrollArea } from "@/components/ui/scroll-area";

import { type Project } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface QuickPreviewProps extends Project {
	className?: string;
	children: React.ReactNode;
}

export const QuickPreview = ({
	className = "",
	children,
	...props
}: QuickPreviewProps) => {
	return (
		<Sheet>
			<SheetTrigger className={className}>{children}</SheetTrigger>
			<SheetContent
				className='m-auto max-h-[800px] max-w-[1500px] inset-8 border-y overflow-hidden rounded-lg'
				side='bottom'>
				<div className='h-full grid md:grid-cols-2 gap-2'>
					<div className='h-full aspect-square md:aspect-auto overflow-hidden'>
						<Image
							width={712}
							height={712}
							src='/images/blogs/kenapa-kita-susah-mengingat-hal-baru.png'
							alt='#'
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='max-h-full grid grid-rows-[auto_1fr_auto] min-h-0 gap-2.5 md:gap-5 p-2.5 md:pb-5'>
						<SheetHeader className='hidden md:block pt-0'> </SheetHeader>
						<SheetTitle className='text-2xl'>
							Website Perusahaan PT Jaya Abadi
						</SheetTitle>
						<ScrollArea className='min-h-0 text-sm text-foreground/50'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloribus veniam quam doloremque explicabo eaque nostrum
							beatae culpa illo nemo. Eveniet repellendus eum id
							molestias ex labore doloribus tenetur alias reprehenderit!
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloribus veniam quam doloremque explicabo eaque nostrum
							beatae culpa illo nemo. Eveniet repellendus eum id
							molestias ex labore doloribus tenetur alias reprehenderit!
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloribus veniam quam doloremque explicabo eaque nostrum
							beatae culpa illo nemo. Eveniet repellendus eum id
							molestias ex labore doloribus tenetur alias reprehenderit!
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloribus veniam quam doloremque explicabo eaque nostrum
							beatae culpa illo nemo. Eveniet repellendus eum id
							molestias ex labore doloribus tenetur alias reprehenderit!
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloribus veniam quam doloremque explicabo eaque nostrum
							beatae culpa illo nemo. Eveniet repellendus eum id
							molestias ex labore doloribus tenetur alias reprehenderit!
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloribus veniam quam doloremque explicabo eaque nostrum
							beatae culpa illo nemo. Eveniet repellendus eum id
							molestias ex labore doloribus tenetur alias reprehenderit!
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloribus veniam quam doloremque explicabo eaque nostrum
							beatae culpa illo nemo. Eveniet repellendus eum id
							molestias ex labore doloribus tenetur alias reprehenderit!
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloribus veniam quam doloremque explicabo eaque nostrum
							beatae culpa illo nemo. Eveniet repellendus eum id
							molestias ex labore doloribus tenetur alias reprehenderit!
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloribus veniam quam doloremque explicabo eaque nostrum
							beatae culpa illo nemo. Eveniet repellendus eum id
							molestias ex labore doloribus tenetur alias reprehenderit!
						</ScrollArea>
						<SheetClose className='mt-auto border-y border-dashed w-fit place-self-end py-2 px-4'>
							<Link
								className='flex justify-center items-center'
								href={`/${props.type}/${props.slug}`}>
								Baca lebih banyak <ArrowRight size={25} />
							</Link>
						</SheetClose>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

interface QuickPreview2Props {
	children: React.ReactNode;
}

export const QuickPreview2 = ({ children }: QuickPreview2Props) => {
	return (
		<Dialog>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete
						your account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
