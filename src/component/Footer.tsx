/** @format */

import { Link } from "react-router-dom";

const Footer =
	() => {
		return (
			<footer className="bg-black text-white py-16 px-[100px]">
				<div className="max-w-[1000px] mx-auto grid grid-cols md:grid-cols-4 gap-8">
					{/* Logo and Description */}
					<div>
						<div className="flex items-center mb-4">
							{/* Replace this with your logo */}
							<img
								src="https://via.placeholder.com/50"
								alt="Market Play Logo"
								className="w-10 h-10"
							/>
							<span className="ml-2 text-xl font-bold">
								Royales
								<span className="text-yellow-500">
									Hub
								</span>
							</span>
						</div>
						<p className="text-gray-400">
							Lorem ipsum
							betalvårdt
							tilingatill
							Pyst lådon
							samopreOmnis
							jektig då
							lämligen
							makroreskLorem
							ipsum
							betalvårdt
							tilingatill.
						</p>
						<div className="flex space-x-4 mt-4">
							<a
								href="#"
								className="text-white hover:text-gray-400"
							>
								<i className="fab fa-twitter"></i>{" "}
								{/* FontAwesome Icon */}
							</a>
							<a
								href="#"
								className="text-white hover:text-gray-400"
							>
								<i className="fab fa-linkedin"></i>{" "}
								{/* FontAwesome Icon */}
							</a>
							<a
								href="#"
								className="text-white hover:text-gray-400"
							>
								<i className="fab fa-instagram"></i>{" "}
								{/* FontAwesome Icon */}
							</a>
						</div>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-xl font-semibold mb-4 text-yellow-500">
							Our Services
						</h3>
						<ul className="flex flex-col gap-2">
							<Link to="/services">
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-yellow-500"
									>
										Graphic
										Design
									</a>
								</li>
							</Link>
							<Link to="/services">
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-yellow-500"
									>
										Web Design
										and
										Development
									</a>
								</li>
							</Link>
							<Link to="/services">
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-yellow-500"
									>
										Editing
									</a>
								</li>
							</Link>
							<Link to="/services">
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-yellow-500"
									>
										Digital
										Marketing
									</a>
								</li>
							</Link>
						</ul>
					</div>

					{/* Contact Information */}
					<div>
						<h3 className="text-xl font-semibold mb-4 text-yellow-500">
							Contact
							Information
						</h3>
						<ul className="space-y-2">
							<li className="text-gray-400">
								RoyalesHubinfo@gmail.com
							</li>
							<li className="text-gray-400">
								08181104140
							</li>
							<li className="text-gray-400">
								@copyright
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-4 text-yellow-500">
							Subscribe To
							News
						</h3>
						<div className="relative mb-6">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 16"
								>
									<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
									<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
								</svg>
							</div>
							<input
								type="text"
								id="input-group-1"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  "
								placeholder="Enter Your Email"
							/>
						</div>
						<button className="bg-yellow-400 hover:bg-yellow-500 px-[10px] py-[8px] rounded-lg text-sm text-white w-full">
							Subscribe
						</button>
					</div>
				</div>
			</footer>
		);
	};

export default Footer;
