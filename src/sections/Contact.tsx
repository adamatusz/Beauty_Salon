import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
				id='contact'
				className='w-full h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-center bg-themeBgFromLogos'>
				<section 
					data-aos='zoom-in' 
					className="pb-5 flex flex-col items-center justify-center w-full h-[50hv] p-4 lg:p-0">
					<div className="flex flex-col items-center w-full"> 
						<p className="text-4xl lg:text-5xl font-bold py-4 text-gray-400 text-center">Mapa dojazdu</p> 
						<div className="relative w-full max-w-2xl" style={{ paddingTop: '75%' }}>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.1086929122425!2d19.434361976224622!3d50.494934784160215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471723bc78965d6f%3A0x1a0648c583dc93ed!2sZaparkowa%2058A%2C%2042-400%20Zawiercie!5e0!3m2!1spl!2spl!4v1754122661955!5m2!1spl!2spl"
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="absolute top-0 left-0 w-full h-full border-0"
							></iframe>
						</div>
					</div>
				</section>
			
				<div
					id='form-box'
					className='p-16 flex flex-col justify-center items-center gap-12 w-full h-[700px]'>
					<h1
						data-aos='zoom-in'
						data-aos-delay='200'
						className='text-themerose400 text-6xl font-bold text-center'>
						Kontakt
					</h1>
					<div
						data-aos='zoom-out'
						data-aos-delay='400'
						id='form'
						className='w-full flex flex-col justify-center items-center gap-4'>
						<input
							type='text'
							placeholder='Podaj swoje imię i nazwisko'
							className='w-80 p-3 text-gray-600 font-semibold border-collapse'
						/>
						<input
							type='email'
							placeholder='Podaj swój aktywny email'
							className='w-80 p-3 text-gray-600 font-semibold border-collapse'
						/>
						<textarea
							name=''
							id=''
							cols={30}
							rows={5}
							placeholder='Napisz wiadomość'
							className='w-80 p-3'></textarea>
						<input
							type='submit'
							value='POTWIERDŹ'
							className='bg-themerose400 hover:bg-[#bf9198] cursor-pointer w-80 font-semibold text-lg text-gray-500 hover:text-gray-300 p-3 rounded-xl'
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
