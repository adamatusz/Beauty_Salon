import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const closeMenu = () => {
		setIsMenuOpen(false);
	};
	const navItems = [
		{ name: "hero", to: "Witaj" },
		{ name: "about", to: "O Nas" },
		{ name: "services", to: "Usługi" },
		{ name: "gallery", to: "Galeria" },
		{ name: "testimonial", to: "Opinie" },
		{ name: "pricing", to: "Cennik" },
		{ name: "contact", to: "Kontact" },
	];
	return (
		<>
			<nav className='flex justify-between items-center gap-4 bg-themerose400 lg:px-10 px-4 py-6 sticky top-0 z-30 border-[8px] border-themeBgFromLogos rounded-3xl'>
				<div id='logo'>
					<h1 className='text-themeBgFromFooterImg font-bold text-5xl italic'>
						Salon <span className='text-gray-400'>Piękności</span>
					</h1>
				</div>
				<ul className='lg:flex justify-center items-center gap-6 hidden'>
					{navItems.map(({ name, to }) => (
						<Link
							key={name}
							className='text-themeBgFromFooterImg uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-gray-400 hover:text-themeBgFromLogos text-2xl'
							to={name}
							spy={true}
							smooth={true}
							offset={-100}>
							{to}
						</Link>
					))}
				</ul>
				{/* mobile menu */}
				<div
					className='flex justify-center items-center lg:hidden'
					onClick={toggleMenu}>
					<div>
						{isMenuOpen ? (
							<FaXmark className='text-2xl text-themeBgFromFooterImg cursor-pointer' />
						) : (
							<FaBars className='text-2xl text-themeBgFromFooterImg cursor-pointer' />
						)}
					</div>
					<div
						className={`${
							isMenuOpen ? "flex" : "hidden"
						} w-full h-fit absolute p-4 top-[80px] left-[0]`}>
						<ul className='flex flex-col justify-center items-center gap-2 w-full'>
							{navItems.map(({ name, to }) => (
								<Link
									key={name}
									className='text-gray-400 uppercase font-semibold cursor-pointer p-3 rounded-xl hover:bg-themerose400 hover:text-themeBgFromLogos text-end'
									to={name}
									spy={true}
									smooth={true}
									offset={-100}>
									{to}
									</Link>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
