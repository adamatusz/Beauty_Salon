import { useEffect } from "react";
import serviceimg from "../assets/images/images_beauty/home-6-11-1930x779.jpg";
import servicesimg from "../assets/images/service-hydro-facial.jpg";
import service1 from "../assets/images/service-4-1-570x570.jpg";
import service2 from "../assets/images/service-6-17-370x300.jpg";
import service3 from "../assets/images/service-pedicure.jpg";
import service4 from "../assets/images/service-depilation.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
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
				id='services'
				className='w-full flex flex-col md:px-20 px-10 md:py-20 py-10 justify-center items-center gap-16 bg-cover bg-center md:flex-row '
				style={{ backgroundImage: `url(${serviceimg})` }}>
				<div className='flex flex-col justify-center items-center gap-4'>
					<h1
						data-aos='zoom-in'
						className='text-6xl text-gray-400 font-bold text-center'>
						Usługi
					</h1>
					<p
						data-aos='zoom-in'
						className='text-xl text-themerose400 text-center'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
						consectetur!
					</p>
				</div>
				<div className='w-[90%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6'>
					<div id='image-box'>
						<img
							data-aos='zoom-in'
							data-aos-delay='200'
							src={servicesimg}
							alt=''
						/>
					</div>
					<div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-8'>
						<div
							data-aos='zoom-out'
							data-aos-delay='200'
							className='bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
							<img
								src={service1}
								alt=''
								className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer'
							/>
							<h1 className='text-gray-400 font-bold'>Manicure</h1>
						</div>
						<div
							data-aos='zoom-out'
							data-aos-delay='200'
							className='bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
							<img
								src={service2}
								alt=''
								className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer'
							/>
							<h1 className='text-gray-400 font-bold'>Zabiegi Twarzy i Ciała</h1>
						</div>
						<div
							data-aos='zoom-out'
							data-aos-delay='200'
							className='bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
							<img
								src={service3}
								alt=''
								className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer'
							/>
							<h1 className='text-gray-400 font-bold'>Pedicure</h1>
						</div>
						<div
							data-aos='zoom-out'
							data-aos-delay='200'
							className='bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
							<img
								src={service4}
								alt=''
								className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer'
							/>
							<h1 className='text-gray-400 font-bold'>Depilacja laserowa</h1>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
