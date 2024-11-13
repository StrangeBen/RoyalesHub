/** @format */
import { Link } from "react-router-dom";

const HeroSection =
	() => {
		return (
			<div className="relative  h-[550px] lg:h-full w-full text-center ">
				<img
					src="/images/banner-bg.jpg"
					alt="slide-images"
					className="h-full object-cover w-full "
				/>
				<div className="absolute inset-0 bg-black/70"></div>

				<div className="absolute inset-0 flex flex-col items-center justify-center lg:mt-[150px] px-3">
					<h2 className="text-white text-xl lg:text-[20px]">
						Welcome to{" "}
						<span className="text-yellow-400">
							RoyalesHub
						</span>
					</h2>
					<h1 className="text-white lg:text-7xl font-bold lg:leading-[100px] lg:px-[120px] my-6 lg:mb-6">
						Crafting
						Digital
						Experiences
						that Inspire
					</h1>
					<p className="text-white text-1xl lg:text-[20px] lg:leading-8 lg:px-[240px]">
						At RoyalesHub,
						we take your
						ideas and turn
						them into
						innovative
						digital
						solutions that
						not only
						capture
						attention but
						drive real
						results. Let
						us help you
						redefine your
						brand’s
						digital
						presence.
					</p>
					<div className="flex  gap-4 lg:gap-12 items-center justify-center mt-[80px] lg:mt-32">
						<button className="bg-yellow-400 hover:bg-yellow-500 px-[40px] py-[8px] rounded-lg text-white">
							Hire Us
						</button>
						<Link to="/portfolio">
							<button className="bg-yellow-400 hover:bg-yellow-500 px-[15px] py-[8px] rounded-lg text-white">
								View
								Portfolio
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	};

export default HeroSection;
