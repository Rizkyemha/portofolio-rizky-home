import { Pickaxe, Library, House, Contact } from "lucide-react";

export const publicRoutes = [
	{
		name: "Projects",
		href: "/projects",
		icon: <Pickaxe className='aspect-square sm:hidden' size={25} />,
	},
	{
		name: "Blogs",
		href: "/blogs",
		icon: <Library className='aspect-square sm:hidden' size={25} />,
	},
	{
		name: "Contact",
		href: "/contact",
		icon: <Contact className='aspect-square sm:hidden' size={25} />,
	},
	{
		name: "Home",
		href: "/",
		icon: <House className='aspect-square sm:hidden' size={25} />,
	},
];
