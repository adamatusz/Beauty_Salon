import footimg from "../assets/images/footer-img.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa6";
import "aos/dist/aos.css";

const Footer = () => {
	return (
		<>
			<footer
				className='w-full py-10 flex justify-start items-center border-[10px] border-themerose400'
				style={{
					backgroundImage: `url(${footimg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div
					className='w-full md:w-[70%] lg:w-[60%] xl:w-[50%] px-4 md:px-0 md:ml-10
                            flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6'>
					<section className='flex flex-col gap-4 items-center md:items-start text-center md:text-left'>
						<h3 className='text-2xl font-semibold text-gray-800'>
							Znajdź nas:
						</h3>
						<div className='flex gap-4 text-5xl'>
							<a
								href='https://www.facebook.com/profile.php?id=100094649514995&ref=_xav_ig_profile_page_web#'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 hover:text-blue-800 transition-colors duration-300'
								aria-label='Facebook'>
								<FaFacebook />
							</a>
							<a
								href='https://www.instagram.com/amkosmetologia'
								target='_blank'
								rel='noopener noreferrer'
								className='text-pink-600 hover:text-pink-800 transition-colors duration-300'
								aria-label='Instagram'>
								<FaInstagram />
							</a>
						</div>
					</section>

					<section className='w-full md:w-auto py-6 text-sm text-gray-600 text-center md:text-center'>
						<p className=''>
							&copy; {new Date().getFullYear()} AM Kosmetologia. Wszelkie prawa
							zastrzeżone.
						</p>
						<div className='mt-2 cursor-pointer'>
							Ikony zabiegów stworzone przez{" "}
							<a
								href='https://www.flaticon.com/free-icons/pedicure'
								title='pedicure icons'
								className='text-blue-600 hover:underline'>
								VectorPortal - Flaticon
							</a>
							<a
								href='https://www.flaticon.com/free-icons/manicure'
								title='manicure icons'
								className='text-blue-600 hover:underline'>
								, Freepik - Flaticon
							</a>
							<a
								href='https://www.flaticon.com/free-icons/hair-removal'
								title='hair removal icons'
								className='text-blue-600 hover:underline'>
								, <br />
								Vector Stall - Flaticon
							</a>
						</div>
					</section>
				</div>
			</footer>
			<div
				data-aos='slide-right'
				data-aos-delay='200'
				id='icon-box'
				className='p-4 bg-themerose400 rounded-full cursor-pointer fixed lg:bottom-12 bottom-6 right-6 lg:right-6'>
				<Link to='hero' spy={true} offset={-100} smooth={true}>
					<FaArrowUp className='size-8 text-themeBgFromLogos' />
				</Link>
			</div>
		</>
	);
};

export default Footer;
