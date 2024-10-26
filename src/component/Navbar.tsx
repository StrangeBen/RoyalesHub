/** @format */
import { Link } from "react-router-dom";

const Navbar =
	() => {
		return (
			<main>
				<div className="flex justify-between bg-black text-white py-[10px] px-[100px] ">
					<h2>
						RoyalesHub
					</h2>
					<div>
						<ul className="flex gap-[24px]  ">
							<li className=" hover:text-yellow-400 cursor-pointer">
								<Link to="/">
									Home
								</Link>
							</li>
							<li className="cursor-pointer hover:text-yellow-400">
								<Link to="/about-us">
									About Us
								</Link>
							</li>
							<li className="hover:text-yellow-400 cursor-pointer">
								<Link to="/services">
									Services
								</Link>
							</li>
							<li className="hover:text-yellow-400 cursor-pointer">
								<Link to="/portfolio">
									Portfolio
								</Link>
							</li>
							<li className="hover:text-yellow-400 cursor-pointer">
								<Link to="/blog">
									Blog
								</Link>
							</li>
						</ul>
					</div>
					<button className="bg-yellow-400 px-[10px] py-[5px] rounded-lg hover:bg-yellow-500">
						Contact Us
					</button>
				</div>
			</main>
		);
	};

export default Navbar;
