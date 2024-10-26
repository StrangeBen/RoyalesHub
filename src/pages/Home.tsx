/** @format */

import NavBar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import OurServices from "../component/OurServices";
import WhoWeAre from "../component/WhoWeAre";
import OurPortfolio from "../component/OurPortfolio";
import FAQ from "../component/FAQ";
import LatestNews from "../component/LatestNews";
import Footer from "../component/Footer";

const Home = () => {
	return (
		<>
			<NavBar />
			<HeroSection />
			<WhoWeAre />
			<OurServices />
			<OurPortfolio />
			<FAQ />
			<LatestNews />
			<Footer />
		</>
	);
};

export default Home;
