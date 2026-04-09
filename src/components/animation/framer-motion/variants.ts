import { type Variants } from "framer-motion";

const fadeInOutUp: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
	},
};

const fadeInOutDown: Variants = {
	hidden: { opacity: 0, y: -40 },
	visible: {
		opacity: 1,
		y: 0,
	},
};

const fadeInOutLeft: Variants = {
	hidden: { opacity: 0, x: -40 },
	visible: {
		opacity: 1,
		x: 0,
	},
};

const fadeInOutRight: Variants = {
	hidden: { opacity: 0, x: 40 },
	visible: {
		opacity: 1,
		x: 0,
	},
};

type FadeInOutType = "up" | "down" | "left" | "right";

const fadeInOutVariants = (direction: FadeInOutType): Variants => {
	switch (direction) {
		case "up":
			return fadeInOutUp;
		case "down":
			return fadeInOutDown;
		case "left":
			return fadeInOutLeft;
		case "right":
			return fadeInOutRight;
	}
};

export { fadeInOutVariants };
export type { FadeInOutType };

const scaleUp: Variants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
	},
};

const scaleDown: Variants = {
	hidden: { opacity: 0, scale: 1.2 },
	visible: {
		opacity: 1,
		scale: 1,
	},
};

type ScaleInOutType = "up" | "down";

const scaleInOutVariants = (direction: ScaleInOutType): Variants => {
	switch (direction) {
		case "up":
			return scaleUp;
		case "down":
			return scaleDown;
	}
};

export { scaleInOutVariants };
export type { ScaleInOutType };
