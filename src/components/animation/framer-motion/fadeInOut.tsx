import { motion } from "framer-motion";
import { fadeInOutVariants, type FadeInOutType } from "./variants";
import { JSX } from "react";

interface FadeInOutProps {
	TagName?: keyof JSX.IntrinsicElements;
	children: React.ReactNode;
	className?: string;
	direction?: FadeInOutType;
	duration?: number;
	onScroll?: boolean;
}

const FadeInOut: React.FC<FadeInOutProps> = ({
	children,
	TagName = "div",
	className = "",
	direction = "up",
	duration = 0.4,
	/**
	 * Jika true, animasi akan berjalan saat elemen masuk ke viewport.
	 * Jika false, animasi akan berjalan saat komponen dimuat.
	 * @default false
	 */
	onScroll = false,
}) => {
	const MotionComponent = motion(TagName);

	let animationTriggerProps = {};

	if (onScroll) {
		animationTriggerProps = {
			whileInView: "visible",
			viewport: { once: false, amount: 0.2 },
		};
	} else {
		animationTriggerProps = {
			animate: "visible",
		};
	}

	return (
		<MotionComponent
			key={direction}
			className={className}
			variants={fadeInOutVariants(direction)}
			initial='hidden'
			exit={{ opacity: 0, scale: 0.8, transition: { duration: 0 } }}
			transition={{ duration: duration, ease: "easeInOut" }}
			{...animationTriggerProps}>
			{children}
		</MotionComponent>
	);
};

export { FadeInOut };
