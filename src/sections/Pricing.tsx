import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 800,
			easing: "ease-in-out",
			delay: 100,
		});
	}, []);

	return (
		<>
			<section
				id='pricing'
				className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-24  bg-themeBgFromLogos'>
				<h1
					data-aos='zoom-in'
					className='text-6xl font-bold text-themerose400 text-center'>
					Cennik
				</h1>
				<div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-20 w-[85%]'>
					<div
						data-aos='zoom-in'
						data-aos-delay='200'
						className='flex items-center justify-between gap-6 border-b-2 border-themerose400 pb-10'>
						<h1 className='text-3xl text-gray-400 font-bold'>Manicure</h1>
						<h1 className='text-themerose400 text-4xl font-bold'>200.00PLN</h1>
					</div>
					<div
						data-aos='zoom-in'
						data-aos-delay='200'
						className='flex items-center justify-between gap-6 border-b-2 border-themerose400 pb-10'>
						<h1 className='text-3xl text-gray-400 font-bold'>Manicure</h1>
						<h1 className='text-themerose400 text-4xl font-bold'>200.00PLN</h1>
					</div>
					<div
						data-aos='zoom-in'
						data-aos-delay='200'
						className='flex items-center justify-between gap-6 border-b-2 border-themerose400 pb-10'>
						<h1 className='text-3xl text-gray-400 font-bold'>Manicure</h1>
						<h1 className='text-themerose400 text-4xl font-bold'>200.00PLN</h1>
					</div>
					<div
						data-aos='zoom-in'
						data-aos-delay='200'
						className='flex items-center justify-between gap-6 border-b-2 border-themerose400 pb-10'>
						<h1 className='text-3xl text-gray-400 font-bold'>Manicure</h1>
						<h1 className='text-themerose400 text-4xl font-bold'>200.00PLN</h1>
					</div>
					<div
						data-aos='zoom-in'
						data-aos-delay='200'
						className='flex items-center justify-between gap-6 border-b-2 border-themerose400 pb-10'>
						<h1 className='text-3xl text-gray-400 font-bold'>Manicure</h1>
						<h1 className='text-themerose400 text-4xl font-bold'>200.00PLN</h1>
					</div>
					<div
						data-aos='zoom-in'
						data-aos-delay='200'
						className='flex items-center justify-between gap-6 border-b-2 border-themerose400 pb-10'>
						<h1 className='text-3xl text-gray-400 font-bold'>Manicure</h1>
						<h1 className='text-themerose400 text-4xl font-bold'>200.00PLN</h1>
					</div>
					<div
						data-aos='zoom-in'
						data-aos-delay='200'
						className='flex items-center justify-between gap-6 border-b-2 border-themerose400 pb-10'>
						<h1 className='text-3xl text-gray-400 font-bold'>Manicure</h1>
						<h1 className='text-themerose400 text-4xl font-bold'>200.00PLN</h1>
					</div>
					<div
						data-aos='zoom-in'
						data-aos-delay='200'
						className='flex items-center justify-between gap-6 border-b-2 border-themerose400 pb-10'>
						<h1 className='text-3xl text-gray-400 font-bold'>Manicure</h1>
						<h1 className='text-themerose400 text-4xl font-bold'>200.00PLN</h1>
					</div>
				</div>
			</section>
		</>
	);
};

export default Pricing;
