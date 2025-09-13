import Head from "next/head";
import type { NextPage } from "next";
import Image from "next/image";
import { Hero } from "@/components/layout/hero";
import Link from "next/link";
import SpaceShuttle3DAnimatedIcon from "@/assets/images/SpaceShuttle3DAnimatedIcon.png";
import { Project as ProjectCard } from "@/components/layout/project";
import { type Project, type Blog } from "@/types";
import { ArrowRight } from "lucide-react";
import { getProjects, getBlogs } from "@/lib/api";

interface HomePageProps {
	title: string;
	projects: Project[];
	blogs: Blog[];
}

export async function getStaticProps() {
	const projects = await getProjects();
	const blogs = await getBlogs();

	console.log(projects);

	return {
		props: {
			title: "Rizky Mahendra | Front-End Developer & Web Portfolio",
			projects,
			blogs,
		},
	};
}

const HomePage: NextPage<HomePageProps> = ({ title, projects, blogs }) => {
	return (
		<>
			<Head>
				{/* --- TAG UTAMA & WAJIB --- */}
				<title>{title}</title>
				<meta
					name='description'
					content='Jelajahi portofolio Rizky Mahendra, seorang Front-End Developer yang bersemangat dalam menciptakan antarmuka web yang fungsional dan menarik. Lihat studi kasus, proyek, dan wawasan terbaru.'
				/>
				<meta
					name='keywords'
					content='Rizky Mahendra, front-end developer, web developer, portofolio, javascript, react, next.js, pengembang web, fresh graduate, Indonesia'
				/>
				<meta name='author' content='Rizky Mahendra' />
				<link
					rel='canonical'
					href='https://www.nama-domain-anda.com'
				/>{" "}
				{/* GANTI DENGAN DOMAIN ANDA */}
				{/* --- VIEWPORT & FAVICON (Sudah Benar) --- */}
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
				{/* --- OPEN GRAPH TAGS (Untuk Facebook, LinkedIn, dll) --- */}
				<meta
					property='og:title'
					content='Rizky Mahendra | Portofolio Front-End Developer'
				/>
				<meta
					property='og:description'
					content='Portofolio seorang Front-End Developer yang bersemangat dalam menciptakan antarmuka web yang fungsional dan menarik.'
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://www.nama-domain-anda.com'
				/>{" "}
				{/* GANTI DENGAN DOMAIN ANDA */}
				<meta
					property='og:image'
					content='https://www.nama-domain-anda.com/og-image.png'
				/>{" "}
				{/* GANTI DENGAN URL GAMBAR PREVIEW ANDA */}
				<meta property='og:site_name' content='Rizky Mahendra Portofolio' />
				{/* --- TWITTER CARD TAGS (Untuk Twitter) --- */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:title'
					content='Rizky Mahendra | Portofolio Front-End Developer'
				/>
				<meta
					name='twitter:description'
					content='Portofolio seorang Front-End Developer yang bersemangat dalam menciptakan antarmuka web yang fungsional dan menarik.'
				/>
				<meta
					name='twitter:image'
					content='https://www.nama-domain-anda.com/og-image.png'
				/>{" "}
				{/* GANTI DENGAN URL GAMBAR PREVIEW ANDA */}
				<meta name='twitter:creator' content='@akunTwitterAnda' />{" "}
				{/* GANTI DENGAN USERNAME TWITTER ANDA (Opsional) */}
				{/* --- SCHEMA.ORG (JSON-LD untuk Google Rich Snippets) --- */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: `
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
          "@type": "Person",
          "name": "Rizky Mahendra",
          "alternateName": "Rizky",
          "jobTitle": "Front-End Developer",
          "url": "https://www.nama-domain-anda.com",
          "image": "https://www.nama-domain-anda.com/foto-profil.jpg",
          "knowsAbout": ["JavaScript", "React", "Next.js", "Front-End Development", "Web Development", "UI/UX Design"],
          "sameAs": [
            "https://www.linkedin.com/in/akun-linkedin-anda",
            "https://github.com/akun-github-anda",
            "https://twitter.com/akun-twitter-anda"
          ]
        }
      }
    `,
					}}
				/>
			</Head>
			<div className='flex flex-col space-y-11 md:space-y-16 lg:space-y-20 xl:space-y-24'>
				<Hero
					root
					header='Hello'
					description='Selamat datang di kapalku. Disini kamu dapat mengenalku lebih
						dalam dengan melihat perjalanan belajarku dan project yang aku
						kerjakan.'
					cta='Scroll ke bawah untuk mulai menjelajah !'
				/>
				<div className='mx-auto max-w-[888px] h-screen max-h-[1200px] grid grid-cols-1 grid-rows-auto sm:grid-cols-2 content-center justify-items-center align-items-center gap-4 px-4 md:px-8'>
					<h1 className='text-2xl font-bold sm:justify-self-end'>
						Hi, Aku Rizky Mahendra
					</h1>
					<p className='font-light text-center sm:text-justify'>
						Aku adalah seorang{" "}
						<Link
							href='https://en.wikipedia.org/wiki/Front-end_web_development'
							className='underline font-bold'>
							Front-End Developer
						</Link>{" "}
						fresh graduate dengan keahlian di JavaScript. Sebagai seorang
						self-learner, aku terus belajar secara mandiri untuk
						mengembangkan kemampuan dalam menciptakan antarmuka web yang
						menarik, responsif, dan fungsional.
					</p>
					<div className='relative w-[200px] h-[220px] sm:h-auto sm:w-[250px] max-h-[250px] rows-start-2 row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-4'>
						<Image
							className='absolute bottom-0 bg-transparent rounded-full w-full h-auto animate-bounce'
							src={SpaceShuttle3DAnimatedIcon}
							alt='planet'
						/>
					</div>
					<button className='sm:justify-self-start border border-dashed px-4 py-2 rounded-full mt-2'>
						touch me{" "}
						<span className='iniline-block animate-pulse'>👊</span>
					</button>
				</div>
				<div className='max-w-full md:max-w-[888px] xl:max-w-[1200px] 2xl:max-w-full content px-4 md:px-8 mx-auto space-y-6'>
					<div className='w-full space-y-4'>
						<div className='relative'>
							<h3 className='text-2xl md:text-3xl font-bold [text-shadow:0_0_3px_#93c5fd,0_0_5px_#60a5fa,0_0_10px_#3b82f6]'>
								Proyek Terbaru
							</h3>
							<Link className='hover:cursor-pointer' href='/projects'>
								<div className='absolute inset-y-0 right-0 flex items-center justify-center space-x-2 border-y border-dashed px-4'>
									<p className='hidden md:block'>Lihat Semua Proyek</p>
									<ArrowRight size={25} />
								</div>
							</Link>
						</div>
						<p className='font-light md:w-[60%]'>
							Berikut adalah beberapa proyek pilihan yang menunjukkan
							bagaimana saya mengubah ide kompleks menjadi produk digital
							yang fungsional dan menarik secara visual.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{projects.map((project, index) => (
							<ProjectCard
								className={index === 0 ? "md:col-span-2" : ""}
								{...project}
								key={index}
								px={false}
							/>
						))}
					</div>
				</div>
				<div className='max-w-full md:max-w-[888px] xl:max-w-[1200px] 2xl:max-w-full content px-4 md:px-8 mx-auto space-y-6'>
					<div className='w-full space-y-4'>
						<div className='relative'>
							<h3 className='md:w-[50%] text-2xl md:text-3xl font-bold [text-shadow:0_0_3px_#93c5fd,0_0_5px_#60a5fa,0_0_10px_#3b82f6]'>
								Artikel Terbaru
							</h3>
							<Link className='hover:cursor-pointer' href='/blogs'>
								<div className='absolute inset-y-0 right-0 flex items-center justify-center space-x-2 border-y border-dashed px-4'>
									<p className='hidden md:block'>
										Lihat Semua Artikel
									</p>
									<ArrowRight size={25} />
								</div>
							</Link>
						</div>
						<p className='font-light md:w-[60%]'>
							Di sini saya membagikan proses desain, studi kasus
							mendalam, dan wawasan praktis seputar persimpangan antara
							teknologi dan kreativitas untuk menciptakan produk digital
							yang luar biasa.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{blogs.map((project, index) => (
							<ProjectCard
								className={index === 0 ? "md:col-span-2" : ""}
								{...project}
								key={index}
								px={false}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
