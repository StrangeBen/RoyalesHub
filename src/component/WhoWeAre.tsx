/** @format */

import { Link } from "react-router-dom";

const WhoWeAre =
	() => {
		return (
			<div className=" text-center w-[100%] lg:py-[100px] lg:px-[180px] bg-white flex flex-col lg:flex-row lg:gap-32 my-6 lg:m-0">
				<div>
					<img
						src="/images/why-choose-us-img.jpg"
						alt="why-choose-us"
						width={400}
						height={300}
						className="border-2 rounded-sm lg:border-yellow-500 hidden lg:block"
					/>
				</div>
				<div className="text-black w-full p-4 lg:p-0 lg:w-[70%]">
					<h2 className=" text-2xl lg:text-lg">
						About Us
					</h2>
					<p className=" text-5xl lg:text-[51px] py-3">
						Why Choose{" "}
						<span className="text-yellow-500">
							Us
						</span>
						?
					</p>
					<p className="text-xl p-5 lg:text-[16px] lg:pb-5">
						Lorem ipsum
						dolor sit amet
						consectetur,
						adipisicing
						elit. Quasi
						eum adipisci
						laborum
						excepturi
						voluptas
						numquam
						tempora
						expedita, rem
						natus ab magni
						illum quo
						quos, corporis
						quaerat
						praesentium
						illo totam
						possimus ea
						commodi
						doloribus
						minima vero
						quia ipsum.
						Est commodi
						placeat
						nesciunt
						explicabo
						temporibus,
						modi
						aspernatur!
					</p>
					<Link to="/about-us">
						<button
							className="bg-yellow-400 lg:px-[10px] px-[12px]
						 lg:py-[8px] py-[10px] rounded-lg text-xl lg:text-sm text-white hover:bg-yellow-500 mt-4 lg:mb-0"
						>
							Read More...
						</button>
					</Link>
				</div>
			</div>
		);
	};

export default WhoWeAre;
