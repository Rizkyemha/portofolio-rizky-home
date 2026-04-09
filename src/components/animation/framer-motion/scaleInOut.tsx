import { motion } from "framer-motion";
import { scaleInOutVariants, type ScaleInOutType } from "./variants";
import { JSX } from "react";

interface scaleInOutProps {
	TagName?: keyof JSX.IntrinsicElements;
	children: React.ReactNode;
	className?: string;
	direction?: ScaleInOutType;
	duration?: number;
	onScroll?: boolean;
}

const scaleInOut: React.FC<scaleInOutProps> = ({
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
			variants={scaleInOutVariants(direction)}
			initial='hidden'
			exit='hidden'
			transition={{ duration: duration, ease: "easeInOut" }}
			{...animationTriggerProps}>
			{children}
		</MotionComponent>
	);
};

export { scaleInOut };
