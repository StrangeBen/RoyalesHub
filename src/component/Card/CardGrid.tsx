/** @format */

import { Key } from "react";
import Card from "./Card";
import cardData from "./CardData";

const CardGrid =
	() => {
		return (
			<div className=" mt-11  flex justify-center items-center">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-6">
					{cardData.map(
						(
							card: {
								icon:
									| string
									| undefined;
								title:
									| string
									| undefined;
								description:
									| string
									| undefined;
							},
							index:
								| Key
								| null
								| undefined,
						) => (
							<Card
								key={index}
								icon={
									card.icon
								}
								title={
									card.title
								}
								description={
									card.description
								}
							/>
						),
					)}
				</div>
			</div>
		);
	};

export default CardGrid;
