/** @format */

import { Link } from "react-router-dom";

const LatestNews =
	() => {
		const newsItems =
			[
				{
					id: 1,
					title:
						"Lorem ipsum dolor sit amet consectetur. Lacus lobortis lorem facilisis in vel.",
					date:
						"23 October 2023",
					author:
						"Admin",
					excerpt:
						"Lorem ipsum dolor sit amet consectetur. Pretium ut lacus pellentesque diam massa pretium arcu. Consequat egestas mattis velit ac proin...Lorem ipsum dolor sit amet consectetur. Lacus lobortis lorem facilisis in vel.",
					image:
						"images/blog-header.jpg", // Placeholder image
				},
				{
					id: 2,
					title:
						"Lorem ipsum dolor sit amet consectetur. Lacus lobortis lorem facilisis in vel.",
					date:
						"23 October 2023",
					author:
						"Admin",
				},
				{
					id: 3,
					title:
						"Lorem ipsum dolor sit amet consectetur. Lacus lobortis lorem facilisis in vel.",
					date:
						"23 October 2023",
					author:
						"Admin",
				},
				{
					id: 4,
					title:
						"Lorem ipsum dolor sit amet consectetur. Lacus lobortis lorem facilisis in vel.",
					date:
						"23 October 2023",
					author:
						"Admin",
				},
				{
					id: 5,
					title:
						"Lorem ipsum dolor sit amet consectetur. Lacus lobortis lorem facilisis in vel.",
					date:
						"23 October 2023",
					author:
						"Admin",
				},
			];

		return (
			<div className="py-16 px-8">
				{/* Section Header */}

				<div className="text-center mb-8">
					<div className="flex justify-center items-center text-[25px] gap-3">
						<div className="border-t-4 rounded-[2px] border-gray-500 w-[200px]"></div>
						<h2 className="text-black uppercase text-sm ">
							Latest News
						</h2>
						<div className="border-t-4 rounded-[2px] border-gray-500 w-[200px]"></div>
					</div>

					<h1 className="max-w-[500px] m-auto text-[50px] leading-normal  font-bold">
						Checkout Our
						Latest News
					</h1>
				</div>

				{/* News Container */}
				<div className="flex flex-col md:flex-row gap-8">
					{/* Main News Item (Left Section) */}
					<div className="md:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
						<img
							src={
								newsItems[0]
									.image
							}
							alt="Main News"
							className="w-full h-64 object-cover"
						/>
						<div className="p-6">
							<div className="text-gray-500 text-sm">
								<span>
									By{" "}
									{
										newsItems[0]
											.author
									}
								</span>{" "}
								&nbsp;|&nbsp;{" "}
								<span>
									{
										newsItems[0]
											.date
									}
								</span>
							</div>
							<h2 className="text-2xl font-bold my-2">
								{
									newsItems[0]
										.title
								}
							</h2>
							<p className="text-gray-700">
								{
									newsItems[0]
										.excerpt
								}
							</p>
							<Link to="/blog">
								<button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-lg">
									Read More
									&gt;
								</button>
							</Link>
						</div>
					</div>

					{/* Additional News Items (Right Section) */}
					<div className="md:w-1/3 space-y-4">
						{newsItems
							.slice(1)
							.map(
								(item) => (
									<div
										key={
											item.id
										}
										className="bg-white shadow-lg p-4 rounded-lg"
									>
										<div className="text-gray-500 text-sm">
											<span>
												By{" "}
												{
													item.author
												}
											</span>{" "}
											&nbsp;|&nbsp;{" "}
											<span>
												{
													item.date
												}
											</span>
										</div>
										<h2 className="text-lg font-bold my-1">
											{
												item.title
											}
										</h2>
										<Link to="/blog">
											<button className="mt-4 text-yellow-400 font-bold hover:text-yellow-500">
												Read
												More...{" "}
											</button>
										</Link>
									</div>
								),
							)}
					</div>
				</div>
			</div>
		);
	};

export default LatestNews;
