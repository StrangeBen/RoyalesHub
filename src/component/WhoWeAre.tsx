/** @format */

const WhoWeAre =
	() => {
		return (
			<div className="py-[100px] px-[200px] bg-white flex  gap-32">
				<div>
					<img
						src="/images/why-choose-us-img.jpg"
						alt="why-choose-us"
						width={400}
						height={300}
						className="border-2 rounded-sm border-yellow-500"
					/>
				</div>
				<div className="text-black w-[60%]">
					<h2 className="text-lg">
						About Us
					</h2>
					<p className="text-4xl py-3">
						Why Choose{" "}
						<span className="text-yellow-500">
							Us
						</span>
						?
					</p>
					<p className="pb-5">
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
					<button className="bg-yellow-400 px-[10px] py-[8px] rounded-lg text-sm text-white hover:bg-yellow-500">
						Read More...
					</button>
				</div>
			</div>
		);
	};

export default WhoWeAre;
