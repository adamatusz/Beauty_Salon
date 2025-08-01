import { useEffect } from "react";
import gal1 from "../assets/images/gal-clean-face-01.jpg";
import gal2 from "../assets/images/gal-lamina-01.jpg";
import gal3 from "../assets/images/gal-lips-01.jpg";
import gal4 from "../assets/images/gal-lips-02.jpg";
import gal5 from "../assets/images/gal-mani-01.jpg";
import gal6 from "../assets/images/gal-mani-pedi-01.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
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
			<section id='gallery' className='w-full flex flex-col md:px-20 px-10 h-fit pb-[300px] py-20 justify-center items-center gap-16 bg-themeBgFromLogos -mb-[200px]'>
				<h1 className='text-6xl text-themerose400 font-bold text-center'>
					Doświadczenie najlepszym wyborem
					<br />
					<br /> dla wszystkich Nas
				</h1>

				<div className='w-full flex flex-col justify-center items-center'>
					<div className='lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 justify-center justify-items-center items-center gap-10 md:-mb[540px]'>
						<img
							data-aos='zoom-out'
							data-aos-delay='200'
							src={gal1}
							alt='clean face after and before treatment'
							className='rounded-xl w-[400px] h-[300px] object-position-center object-cover'
						/>
						<img
							data-aos='zoom-out'
							data-aos-delay='200'
							src={gal2}
							alt='clean face after and before treatment'
							className='rounded-xl w-[400px] h-[300px]'
						/>
						<img
							data-aos='zoom-out'
							data-aos-delay='200'
							src={gal3}
							alt='clean face after and before treatment object-cover'
							className='rounded-xl w-[400px] h-[300px]'
						/>
						<img
							data-aos='zoom-out'
							data-aos-delay='200'
							src={gal4}
							alt='clean face after and before treatment'
							className='rounded-xl w-[400px] h-[300px]'
						/>
						<img
							data-aos='zoom-out'
							data-aos-delay='200'
							src={gal5}
							alt='clean face after and before treatment'
							className='rounded-xl w-[400px] h-[300px]'
						/>
						<img
							data-aos='zoom-out'
							data-aos-delay='200'
							src={gal6}
							alt='clean face after and before treatment'
							className='rounded-xl w-[400px] h-[300px]'
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Gallery;
