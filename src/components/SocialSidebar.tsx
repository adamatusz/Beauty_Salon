import { FaFacebook, FaInstagram } from "react-icons/fa";

// Nie potrzebujemy już importu pliku CSS!

const SocialSidebar = () => {
	return (
		<div
			className='
        hidden md:flex flex-col gap-2 /* Ukryty na mobilkach (poniżej 768px), widoczny na większych ekranach jako flex-column z odstępem */
        fixed top-1/2 -translate-y-1/2 right-0 /* Pozycjonowanie: na środku, po prawej */
        p-2 /* Wewnętrzny padding kontenera */
        bg-themeBgFromLogos/60 backdrop-blur-sm /* Półprzezroczyste tło z efektem rozmycia */
        shadow-lg /* Cień */
        rounded-l-lg /* Zaokrąglone lewe rogi */
        z-50 /* Wysoki z-index, aby być na wierzchu */
      '>
			<a
				href='https://www.facebook.com/profile.php?id=100094649514995'
				target='_blank'
				rel='noopener noreferrer'
				aria-label='Przejdź do naszego Facebooka'
				className='
          p-2 /* Padding samej ikonki */
          text-gray-400 hover:text-blue-600 
          transition-colors duration-300 
        '>
				<FaFacebook size={28} />{" "}
				{/* Możemy kontrolować rozmiar ikonki przez props `size` */}
			</a>
			<a
				href='https://www.instagram.com/amkosmetologia'
				target='_blank'
				rel='noopener noreferrer'
				aria-label='Przejdź do naszego Instagrama'
				className='
          p-2 /* Padding samej ikonki */
          text-gray-400 hover:text-pink-600 /* Kolor startowy i po najechaniu (IG) */
          transition-colors duration-300 /* Płynna zmiana koloru */
        '>
				<FaInstagram size={28} />{" "}
				{/* Ustawiamy ten sam rozmiar dla spójności */}
			</a>
		</div>
	);
};

export default SocialSidebar;
