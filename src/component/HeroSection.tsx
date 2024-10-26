/** @format */
import { Link } from "react-router-dom";

const HeroSection =
	() => {
		return (
			<div className="relative h-full w-full text-center">
				<img
					src="/images/banner-bg.jpg"
					alt="slide-images"
					className="h-full object-cover w-full overflow-hidden "
				/>
				<div className="absolute inset-0 bg-black/70"></div>

				<div className="absolute inset-0 flex flex-col items-center justify-center mt-[150px]">
					<h2 className="text-white text-[20px]">
						Welcome to{" "}
						<span className="text-yellow-400">
							RoyalesHub
						</span>
					</h2>
					<h1 className="text-white text-7xl font-bold leading-[100px] px-[120px] mb-6">
						Crafting
						Digital
						Experiences
						that Inspire
					</h1>
					<p className="text-white text-[22px] leading-8 px-[240px]">
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
					<div className="flex gap-12 items-center justify-center mt-32">
						<button className="bg-yellow-400 hover:bg-yellow-500 px-[40px] py-[8px] rounded-lg text-white">
							Hire Us
						</button>
						<button className="bg-yellow-400 hover:bg-yellow-500 px-[15px] py-[8px] rounded-lg text-white">
							<Link to="/portfolio">
								View
								Portfolio
							</Link>
						</button>
					</div>
				</div>
			</div>
		);
	};

export default HeroSection;
