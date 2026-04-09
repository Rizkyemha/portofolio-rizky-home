import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function useFadeInStagger(scopeRef: React.RefObject<HTMLDivElement>) {
	useGSAP(
		() => {
			gsap.from(".fade-in", {
				opacity: 0,
				y: 100,
				ease: "power3.out",
				stagger: 0.2,
				scrollTrigger: {
					trigger: scopeRef.current,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play reverse play reverse",
				},
			});
		},
		{ scope: scopeRef }
	);
}

export function useDownInScroll(scopeRef: React.RefObject<HTMLElement>) {
	const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

	React.useEffect(() => {
		const element = scopeRef.current;
		if (!element) return;

		const showElement = () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			gsap.to(element, { y: "0%", duration: 0.3, ease: "power2.out" });
		};

		const startHideTimer = () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			timeoutRef.current = setTimeout(() => {
				gsap.to(element, {
					y: "-100%",
					duration: 0.5,
					ease: "power2.in",
				});
			}, 500);
		};

		gsap.set(element, { y: "-100%" });

		const handleScroll = () => {
			showElement();
			startHideTimer();
		};

		const handleMouseEnter = () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};

		const handleMouseLeave = () => {
			startHideTimer();
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		element.addEventListener("mouseenter", handleMouseEnter);
		element.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			element.removeEventListener("mouseenter", handleMouseEnter);
			element.removeEventListener("mouseleave", handleMouseLeave);
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [scopeRef]);
}
