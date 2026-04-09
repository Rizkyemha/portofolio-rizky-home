import Nav from "@/components/layout/nav";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer>
			<div className='container mx-auto px-6 py-12'>
				<div className='hidden rounded-lg bg-slate-700 p-8 md:flex-row'>
					<div className='text-center md:text-left'>
						<h3 className='text-2xl font-bold'>
							Dapatkan Update Terbaru
						</h3>
						<p className='mt-2 text-slate-300'>
							Berlangganan newsletter kami untuk info dan promo
							eksklusif.
						</p>
					</div>
					<form className='mt-6 flex w-full max-w-sm flex-col md:mt-0 md:flex-row md:space-x-2'>
						<input
							type='email'
							placeholder='Masukkan email Anda'
							className='w-full rounded-md border-slate-500 bg-slate-800 px-4 py-2 text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
						/>
						<button className='mt-4 w-full rounded-md bg-blue-600 px-6 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 md:mt-0 md:w-auto'>
							Langganan
						</button>
					</form>
				</div>

				<hr className='my-10 border-foreground/20' />

				<div className='flex flex-col items-center justify-between sm:flex-row'>
					<h2 className='text-center text-2xl sm:text-left'>
						/ rizkyemha.dev /
					</h2>
					<div className='my-4 flex space-x-6 text-sm text-slate-300 sm:my-0'>
						<Nav />
					</div>
					<p className='text-sm text-slate-400'>
						&copy; {year} rizkyemha.dev
					</p>
				</div>
			</div>
		</footer>
	);
}
