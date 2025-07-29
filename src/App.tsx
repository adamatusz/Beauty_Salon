import Header from "./components/Header";
import Hero from "./sections/Hero";
import WhyChoose from "./sections/WhyChoose";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

// Main App component that composes all sections and components
// This is the entry point of the application
// It renders the header, hero section, why choose section, pricing, services, gallery, testimonial, contact, and footer
// Each section is imported from its respective file and rendered in the order specified
// The App component is exported as the default export of this module
// This allows it to be imported and used in other parts of the application
// The use of React fragments (<></>) allows grouping of multiple elements without adding extra nodes to the DOM
// This is useful for maintaining a clean structure in the rendered output
// The App component serves as the main layout of the application, providing a cohesive user experience
// It can be further enhanced with styles, state management, and other features as needed

export const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<WhyChoose />
			<Pricing />
			<Services />
			<Gallery />
			<Testimonial />
			<Contact />
			<Footer />
		</>
	);
};
export default App;
