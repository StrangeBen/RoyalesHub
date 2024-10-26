/** @format */

const Card = ({
	icon = "any",
	title = "string",
	description = "string",
}) => {
	return (
		<div className="relative bg-white rounded-lg flex flex-col items-center text-center border">
			<div className="bg-yellow-500 rounded-full p-4 my-6  absolute top-[-65px] border-4 border-black ">
				<img
					src={icon}
					alt={title}
					className="h-12 w-12"
				/>
			</div>
			<div className="py-[60px] px-2">
				<h3 className="text-lg font-bold text-black mb-2 ">
					{title}
				</h3>
				<p className="text-gray-500">
					{description}
				</p>
			</div>
		</div>
	);
};

export default Card;
