/** @format */
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar =
	() => {
		const [
			isOpen,
			setIsOpen,
		] =
			useState(false);

		const toggleMenu =
			() => {
				setIsOpen(
					!isOpen,
				);
			};
		return (
			<nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50">
				<div className=" flex px-3 justify-between items-center bg-black text-white lg:py-[10px] lg:px-[100px] z-50 py-3 sticky">
					<div className="text-2xl font-bold">
						<Link to="/"></Link>
						RoyalesHub
					</div>

					<div className="lg:hidden">
						<button
							onClick={
								toggleMenu
							}
							className="text-white focus:outline-none"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								{isOpen ? (
									<></>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>

					<ul className="hidden lg:flex gap-[24px]  ">
						<Link to="/">
							<li className=" hover:text-yellow-400 cursor-pointer">
								Home
							</li>
						</Link>
						<Link to="/about-us">
							<li className="cursor-pointer hover:text-yellow-400">
								About Us
							</li>
						</Link>
						<Link to="/services">
							<li className="hover:text-yellow-400 cursor-pointer">
								Services
							</li>
						</Link>
						<Link to="/portfolio">
							<li className="hover:text-yellow-400 cursor-pointer">
								Portfolio
							</li>
						</Link>
						<Link to="/blog">
							<li className="hover:text-yellow-400 cursor-pointer">
								Blog
							</li>
						</Link>
					</ul>

					{/* Mobile View Menu */}
					{isOpen && (
						<div
							className={`fixed inset-0 bg-yellow-400 bg-opacity-50 backdrop-blur-md ${
								isOpen
									? "translate-x-0"
									: "translate-x-full"
							} transform transition-transform duration-300 ease-in-out lg:hidden `}
							style={{
								width:
									"65vw",
							}}
						>
							<button
								onClick={
									toggleMenu
								}
								className="absolute top-5 right-4 text-white text-4xl focus:outline-none z-10 cursor-pointer"
							>
								&times;
							</button>
							<ul className=" relative flex flex-col p-6 lg:hidden gap-[24px]  ">
								<Link to="/">
									<li
										className=" hover:bg-yellow-400 cursor-pointer w-[90%] hover:bg-opacity-50 p-2"
										onClick={
											toggleMenu
										}
									>
										Home
									</li>
								</Link>
								<Link to="/about-us">
									<li
										className=" hover:bg-yellow-400 cursor-pointer w-[90%] hover:bg-opacity-50 p-2"
										onClick={
											toggleMenu
										}
									>
										About Us
									</li>
								</Link>
								<Link to="/services">
									<li
										className=" hover:bg-yellow-400 cursor-pointer w-[90%] hover:bg-opacity-50 p-2"
										onClick={
											toggleMenu
										}
									>
										Services
									</li>
								</Link>
								<Link to="/portfolio">
									<li
										className=" hover:bg-yellow-400 cursor-pointer w-[90%] hover:bg-opacity-50 p-2"
										onClick={
											toggleMenu
										}
									>
										Portfolio
									</li>
								</Link>
								<Link to="/blog">
									<li
										className=" hover:bg-yellow-400 cursor-pointer w-[90%] hover:bg-opacity-50 p-2"
										onClick={
											toggleMenu
										}
									>
										Blog
									</li>
								</Link>
							</ul>
						</div>
					)}

					<button className="hidden lg:block bg-yellow-400 px-[10px] py-[5px] rounded-lg hover:bg-yellow-500">
						Contact Us
					</button>
				</div>
			</nav>
		);
	};

export default Navbar;
