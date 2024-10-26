/** @format */
import { IoClose } from "react-icons/io5";

import { useState } from "react";

const FAQ = () => {
	const faqData = [
		{
			id: 1,
			question:
				"Lorem ipsum järejodade nit ditt. Ber. Plarade dinul. Rul. Niskap ?",
			answer:
				"Lorem ipsum gilt knånde. Operativ suprarar. Prest vara queropolska legga...",
		},
		{
			id: 2,
			question:
				"Lorem ipsum järejodade nit ditt. Ber. Plarade dinul. Rul. Niskap ?",
			answer:
				"Lorem ipsum gilt knånde. Operativ suprarar. Prest vara queropolska legga...",
		},
		{
			id: 3,
			question:
				"Lorem ipsum järejodade nit ditt. Ber. Plarade dinul. Rul. Niskap ?",
			answer:
				"Lorem ipsum gilt knånde. Operativ suprarar. Prest vara queropolska legga...",
		},
		{
			id: 4,
			question:
				"Lorem ipsum järejodade nit ditt. Ber. Plarade dinul. Rul. Niskap ?",
			answer:
				"Lorem ipsum gilt knånde. Operativ suprarar. Prest vara queropolska legga...",
		},
		{
			id: 5,
			question:
				"Lorem ipsum järejodade nit ditt. Ber. Plarade dinul. Rul. Niskap ?",
			answer:
				"Lorem ipsum gilt knånde. Operativ suprarar. Prest vara queropolska legga...",
		},
		{
			id: 6,
			question:
				"Lorem ipsum järejodade nit ditt. Ber. Plarade dinul. Rul. Niskap ?",
			answer:
				"Lorem ipsum gilt knånde. Operativ suprarar. Prest vara queropolska legga...",
		},
	];

	const [
		activeIndex,
		setActiveIndex,
	] = useState(null);

	const toggleFAQ = (
		index: any,
	) => {
		setActiveIndex(
			activeIndex ===
				index
				? null
				: index,
		);
	};

	return (
		<div className="bg-black py-16 px-[200px]">
			{/* Section Header */}
			<div className="text-center mb-12">
				<div className="flex justify-center items-center text-[25px] gap-3">
					<div className=" border-t-4 rounded-[2px] border-gray-500 w-[200px]"></div>
					<h2 className="text-lg text-gray-400 uppercase ">
						FAQs
					</h2>
					<div className="border-t-4 rounded border-gray-500 w-[200px]"></div>
				</div>

				<h1 className="text-white max-w-[500px] m-auto text-[60px] leading-normal font-bold">
					Frequently
					Asked Questions
				</h1>
			</div>

			{/* FAQ Accordion */}
			<div className="max-w-3xl mx-auto">
				{faqData.map(
					(
						faq,
						index,
					) => (
						<div
							key={faq.id}
							className="border-b border-gray-600"
						>
							{/* Question Section */}
							<button
								onClick={() =>
									toggleFAQ(
										index,
									)
								}
								className={`w-full text-left py-4 px-4 flex justify-between items-center ${
									activeIndex ===
									index
										? "bg-yellow-500 text-black"
										: "bg-dark text-white"
								} transition-all duration-300`}
							>
								<span>
									{
										faq.question
									}
								</span>
								<span>
									{activeIndex ===
									index ? (
										<IoClose
											size={23}
											className="hover:bg-red-600"
										/>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={
													2
												}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									)}
								</span>
							</button>

							{activeIndex ===
								index && (
								<div className="p-4 bg-gray-900 text-white">
									{
										faq.answer
									}
								</div>
							)}
						</div>
					),
				)}
			</div>
		</div>
	);
};

export default FAQ;
