const Footer = () => {
	return (
		<footer className='w-full bg-themeBgFromLogos py-6 text-center text-sm text-gray-600'>
			<p>
				&copy; {new Date().getFullYear()} AM Kosmetologia. Wszelkie prawa
				zastrzeżone.
			</p>
			<p className='mt-2'>
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
					className='text-blue-600 hover:underline"'>
					, Freepik - Flaticon
				</a>				<a
					href='https://www.flaticon.com/free-icons/hair-removal'          
					title='hair removal icons'
					className='text-blue-600 hover:underline"'>, Vector Stall - Flaticon
				</a>
			</p>
			{/* Dodaj linki do innych ikon, jeśli używasz ikon od różnych twórców */}
			{/* Jeśli używasz wielu ikon od tego samego autora, możesz zgrupować linki */}
		</footer>
	);
};

export default Footer;
