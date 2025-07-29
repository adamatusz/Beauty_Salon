import { useEffect } from "react";
import whyimg from "../assets/images/images_beauty/home-6-9-1930x550.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChoose = () => {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 800,
			easing: "ease-in-out",
			delay: 100,
		});
	}, []);

	return (
		<section
			id='about'
			className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center'
			style={{ backgroundImage: `url(${whyimg})` }}>
			<div
				data-aos='zoom-in'
				className='flex flex-col justify-center items-center gap-10 bg-themeBgFromLogos p-10 rounded-xl md:w-[40%] w-full'>
				<h1 className='text-themerose400 text-4xl font-bold'>GODZINY PRACY</h1>
				<div className='flex flex-col justify-center items-center gap-4'>
					<p className='text-xl text-gray-400 font-lg '>
						PONIEDZIAŁEK od 10.00 do 18.00
					</p>
					<p className='text-xl text-gray-400 font-lg '>
						WTOREK od 12.00 do 20.00
					</p>
					<p className='text-xl text-gray-400 font-lg '>
						ŚRODA od 12.00 do 20.00
					</p>
					<p className='text-xl text-gray-400 font-lg '>
						CZWARTEK od 10.00 do 18.00
					</p>
					<p className='text-xl text-gray-400 font-lg '>
						PIĄTEK od 10.00 do 18.00
					</p>
					<p className='text-xl text-gray-400 font-lg '>
						SOBOTA od 10.00 do 14.00
					</p>
					<p className='text-xl text-gray-400 font-lg '>NIEDZIELA ZAMKNIĘTE</p>
				</div>
				<button className='px-10 py-10 rounded-xl border-2 border-themerose400 text-gray-400 font-semibold text-lg hover:bg-themerose400 hover:text-white mt-6'>
					ZAMÓW WIZYTĘ
				</button>
			</div>
			<div
				data-aos='slide-up'
				data-aos-delay='200'
				className='md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit'>
				<h1 className='text-6xl text-gray-400 font-bold text-center'>
					DLACZEGO MY
				</h1>
				<p className='text-2xl font-semibold text-gray-400 md:text-start text-center'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, nemo.
				</p>
				<div
					id='icon-list'
					className='flex flex-col justify-center items-start gap-4'>
					<div id='icon-box' className='flex justify-center items-center gap-3'>
						<FaAngleDoubleRight className='text-gray-400 size-6' />
						<h1 className='text-xl text-gray-400 font-semibold'>
							Zawsze miło, zawsze przyjemnie
						</h1>
					</div>
					<div id='icon-box' className='flex justify-center items-center gap-3'>
						<FaAngleDoubleRight className='text-gray-400 size-6' />
						<h1 className='text-xl text-gray-400 font-semibold'>
							Zawsze miło, zawsze przyjemnie
						</h1>
					</div>
					<div id='icon-box' className='flex justify-center items-center gap-3'>
						<FaAngleDoubleRight className='text-gray-400 size-6' />
						<h1 className='text-xl text-gray-400 font-semibold'>
							Zawsze miło, zawsze przyjemnie
						</h1>
					</div>
					<div id='icon-box' className='flex justify-center items-center gap-3'>
						<FaAngleDoubleRight className='text-gray-400 size-6' />
						<h1 className='text-xl text-gray-400 font-semibold'>
							Zawsze miło, zawsze przyjemnie
						</h1>
					</div>
					<div id='icon-box' className='flex justify-center items-center gap-3'>
						<FaAngleDoubleRight className='text-gray-400 size-6' />
						<h1 className='text-xl text-gray-400 font-semibold'>
							Zawsze miło, zawsze przyjemnie
						</h1>
					</div>
					<button className='text-gray-400 px-10 py-4 border-2 border-themerose400 rounded-xl hover:bg-themerose400 hover:text-white font-semibold'>
						ZAMÓW TERAZ
					</button>
				</div>
			</div>
		</section>
	);
};

export default WhyChoose;
