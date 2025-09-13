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

		// --- Helper Functions untuk Animasi ---
		const showElement = () => {
			// Hapus timer yang ada agar tidak bentrok
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			gsap.to(element, { y: "0%", duration: 0.3, ease: "power2.out" });
		};

		const startHideTimer = () => {
			// Hapus timer sebelumnya untuk memulai yang baru
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			timeoutRef.current = setTimeout(() => {
				gsap.to(element, {
					y: "-100%",
					duration: 0.5, // Durasi 5 detik terlalu lama, 0.5s lebih baik
					ease: "power2.in",
				});
			}, 500); // Delay 5 detik terlalu lama, 500ms lebih ideal
		};

		// Atur posisi awal elemen (tersembunyi)
		gsap.set(element, { y: "-100%" });

		// --- Event Handlers ---
		const handleScroll = () => {
			showElement();
			startHideTimer();
		};

		const handleMouseEnter = () => {
			// Saat mouse masuk, batalkan timer untuk menyembunyikan elemen
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};

		const handleMouseLeave = () => {
			// Saat mouse keluar, mulai lagi timer untuk menyembunyikan
			startHideTimer();
		};

		// --- Menambahkan Event Listeners ---
		window.addEventListener("scroll", handleScroll, { passive: true });
		element.addEventListener("mouseenter", handleMouseEnter);
		element.addEventListener("mouseleave", handleMouseLeave);

		// --- Cleanup Function ---
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
