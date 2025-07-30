import { useEffect } from "react";
import contactimg from "../assets/images/contactimg2.jpg";
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
				<div
					data-aos='zoom-in'
					id='img-box'
					className='w-full bg-cover bg-center h-[700px]'
					style={{ backgroundImage: `url(${contactimg})` }}></div>
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
