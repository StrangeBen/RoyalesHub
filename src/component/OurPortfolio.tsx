/** @format */

import { useState } from "react";

const OurPortfolio =
	() => {
		const [
			hoveredCardIndex,
			setHoveredCardIndex,
		] = useState<
			number | null
		>(null);
		const projects = [
			{
				id: 1,
				category:
					"Graphic Design",
				image:
					"images/graphicdesign-banner.jpg",
			},
			{
				id: 2,
				category:
					"Web Dev/Design",
				image:
					"images/web-design-project.png",
			},
			{
				id: 3,
				category:
					"Editing",
				image:
					"images/editing.jpg",
			},
			{
				id: 4,
				category:
					"Digital Marketing",
				image:
					"images/digital-marketing.jpg",
			},
		];

		const [
			activeCategory,
			setActiveCategory,
		] =
			useState("All");

		const filteredProjects =
			activeCategory ===
			"All"
				? projects
				: projects.filter(
						(project) =>
							project.category ===
							activeCategory,
				  );

		return (
			<div className="bg-white py-16 px-8">
				{/* Section Header */}
				<div className="text-center mb-12">
					<div className="flex justify-center items-center text-[25px] gap-3 ">
						<div className="my-4 border-t-4 border-yellow-500 rounded w-[120px]"></div>
						<h2 className="text-[15px] font-semibold text-black">
							Our Portfolio
						</h2>
						<div className="my-4 border-t-4 border-yellow-500 rounded w-[120px]"></div>
					</div>

					<h1 className="text-[65px] leading-[85px] max-w-[600px] w-full m-auto font-bold">
						<span className="text-yellow-500">
							Projects
						</span>{" "}
						We Have
						Completed
					</h1>
				</div>

				<div className="flex justify-center space-x-4 mb-10">
					{[
						"All",
						"Graphic Design",
						"Web Dev/Design",
						"Editing",
						"Digital Marketing",
					].map(
						(
							category,
						) => (
							<button
								key={
									category
								}
								onClick={() =>
									setActiveCategory(
										category,
									)
								}
								className={`${
									activeCategory ===
									category
										? "bg-yellow-400 text-white"
										: "bg-gray-100"
								} py-2 px-4 rounded-md font-medium hover:bg-yellow-300 transition`}
							>
								{category}
							</button>
						),
					)}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Add read more button to link to portfolio page */}
					{filteredProjects.map(
						(
							project,
							index,
						) => (
							<div
								key={
									project.id
								}
								className="relative border border-yellow-500  rounded-lg overflow-hidden"
								onMouseEnter={() =>
									setHoveredCardIndex(
										index,
									)
								}
								onMouseLeave={() =>
									setHoveredCardIndex(
										null,
									)
								}
							>
								<img
									src={
										project.image
									}
									alt={
										project.category
									}
									className="w-full   h-[250px] object-cover rounded-lg"
								/>
								<div
									className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300  ${
										hoveredCardIndex ===
										index
											? "opacity-100"
											: "opacity-0"
									}`}
								>
									<button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500">
										Visit Now
									</button>
								</div>
							</div>
						),
					)}
				</div>
			</div>
		);
	};

export default OurPortfolio;
