/** @format */

import CardGrid from "./Card/CardGrid";

const OurServices =
	() => {
		return (
			<div className="flex  p-[100px] gap-28 bg-black">
				<div className="w-[45%]">
					<h2 className="text-white text-[15px] font-semibold">
						What We Are{" "}
						<span className="text-yellow-500">
							Offering
						</span>
					</h2>
					<div className="my-4 border-t-4 border-yellow-500 w-[200px]"></div>
					<h1 className="text-5xl font-semibold leading-[65px] text-white">
						<span className="text-yellow-500">
							Services{" "}
						</span>
						We Can Offer
						You !
					</h1>
					<p className="py-[40px] text-white">
						Lorem, ipsum
						dolor sit amet
						consectetur
						adipisicing
						elit. Repellat
						magnam, sequi
						error quos
						eveniet atque!
						Facere quidem
						at placeat
						quasi quia
						dignissimos
						vitae maiores
						laborum iusto
						sapiente
						laboriosam
						temporibus
						maxime
						architecto
						nulla corporis
						harum, impedit
						voluptatum
						exercitationem
						mollitia
						labore omnis
						consequatur
						porro
						doloremque
						repudiandae?
						Architecto
						alias libero
						pariatur
						cupiditate
						tempore
						aspernatur
						molestiae sed
						nostrum
						dolorum. Dicta
						voluptate sint
						quis autem,
						hic aspernatur
						accusamus a,
						debitis dolor
						quam
						voluptatibus
						ipsam enim
						veniam quos
						mollitia
						facere
						corrupti
						facilis,
						cupiditate
						repudiandae?
						Vel,
						perspiciatis
						corporis optio
						non numquam
						reprehenderit?
					</p>
					<button className="bg-yellow-400 hover:bg-yellow-500 px-[40px] py-[8px] rounded-lg text-white">
						Hire Us
					</button>
				</div>
				<div className="w-[50%]">
					<CardGrid />
				</div>
			</div>
		);
	};

export default OurServices;
