import { useEffect } from "react";
import heroimg from "../assets/images/wetransfer/image00002.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import syringe from "../assets/images/syringe.png";
import manicure from "../assets/images/manicure.png";
import pedicure from "../assets/images/pedicure.png";
import laserimg from "../assets/images/laser.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
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
				id='hero'
				className='w-full md:px-[120] px-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-themeBgFromLogos'>
				<div
					id='content-box'
					className='flex flex-col justify-center items-start gap-10'>
					<h1
						data-aos='zoom-in'
						className='text-2xl text-themerose400 font-semibold'>
						WITAMY W
					</h1>
					<h1
						data-aos='zoom-in'
						className='text-6xl text-themerose400 font-bold'>
						Kosmetologia Agnieszka-Mićka Matuszczyk
					</h1>
					<div
						data-aos='slide-up'
						id='icon-list'
						className='flex flex-col justify-center items-start gap-6'>
						<div
							id='icon-box'
							className='flex justify-center items-center gap-3'>
							<FaLocationDot className='size-6 text-themerose400' />
							<h1 className='text-xl text-gray-400 font-semibold'>
								ul. Zaparkowa 58A, 42-400 Zawiercie
							</h1>
						</div>
						<div
							id='icon-box'
							className='flex justify-center items-center gap-3'>
							<MdOutlinePhoneAndroid className='size-6 text-themerose400' />
							<h1 className='text-xl text-gray-400 font-semibold'>
								+48 533 846 775
							</h1>
						</div>
						<div
							id='icon-box'
							className='flex justify-center items-center gap-3'>
							<MdEmail className='size-6 text-themerose400' />
							<h1 className='text-xl text-gray-400 font-semibold'>
								agnieszka@amkosmetologia.pl
							</h1>
						</div>
						<div
							id='icon-box'
							className='flex justify-center items-center gap-3'>
							<FaHeadphones className='size-6 text-themerose400' />
							<h1 className='text-xl text-gray-400 font-semibold'>
								customer@amkosmetologia.pl
							</h1>
						</div>
					</div>
					<button
						data-aos='zoom-in'
						className='px-10 py-4 rounded-xl border-2 border-themerose400 text-gray-400 font-semibold text-lg hover:bg-themerose400 hover:text-white'>
						Booksy
					</button>
				</div>
				<div data-aos='zoom-in' id='image-box' className='md:w-[50%] w-full'>
					<img
						src={heroimg}
						alt='women with close left eye'
						className='rounded-xl w-full md:h-[1250px] h-[900px] object-cover'
					/>
				</div>
			</section>
			<section className='grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120px] px-10 py-10 gap-10 bg-themeBgFromLogos'>
				<div
					data-aod='zoom-in'
					data-aos-delay='200'
					className='flex flex-col justify-center items-center gap-4'>
					<img
						src={syringe}
						alt='syringe icon'
						className='size-20 transform hover:scale-110 transition-transform duration-300 cursor-pointer'
					/>
					<h1 className='text-2xl text-gray-400 font-semibold'>
						Zabiegi na Twarz i Ciało
					</h1>
					<button className='px-10 py-4 border-themerose400 rounded-xl text-gray-400 text-lg font-semibold text-md border-2 hover:bg-themerose400 hover:text-white cursor-pointer'>
						WIĘCEJ
					</button>
				</div>
				<div
					data-aod='zoom-in'
					data-aos-delay='200'
					className='flex flex-col justify-center items-center gap-4'>
					<img
						src={manicure}
						alt='syringe icon'
						className='size-20 transform hover:scale-110 transition-transform duration-300 cursor-pointer'
					/>
					<h1 className='text-2xl text-gray-400 font-semibold'>Manicure</h1>
					<button className='px-10 py-4 border-themerose400 rounded-xl text-gray-400 text-lg font-semibold text-md border-2 hover:bg-themerose400 hover:text-white cursor-pointer'>
						WIĘCEJ
					</button>
				</div>
				<div
					data-aod='zoom-in'
					data-aos-delay='200'
					className='flex flex-col justify-center items-center gap-4'>
					<img
						src={pedicure}
						alt='syringe icon'
						className='size-20 transform hover:scale-110 transition-transform duration-300 cursor-pointer'
					/>
					<h1 className='text-2xl text-gray-400 font-semibold'>Pedicure</h1>
					<button className='px-10 py-4 border-themerose400 rounded-xl text-gray-400 text-lg font-semibold text-md border-2 hover:bg-themerose400 hover:text-white cursor-pointer'>
						WIĘCEJ
					</button>
				</div>
				<div
					data-aod='zoom-in'
					data-aos-delay='200'
					className='flex flex-col justify-center items-center gap-4'>
					<img
						src={laserimg}
						alt='syringe icon'
						className='size-20 transform hover:scale-110 transition-transform duration-300 cursor-pointer'
					/>
					<h1 className='text-2xl text-gray-400 font-semibold'>
						Depilacja Laserowa
					</h1>
					<button className='px-10 py-4 border-themerose400 rounded-xl text-gray-400 text-lg font-semibold text-md border-2 hover:bg-themerose400 hover:text-white cursor-pointer'>
						WIĘCEJ
					</button>
				</div>
			</section>
		</>
	);
};

export default Hero;
