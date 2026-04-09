import type { AppProps } from "next/app";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "@/styles/globals.css";
import { spaceGrotesk } from "@/assets/fonts";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`${spaceGrotesk.className}`}>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}
