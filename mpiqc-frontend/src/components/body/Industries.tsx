import "../../app/globals.css";

const industries = [
	{
		heading: "Something clever here about the company",
		description:
			"Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.",

		image: {
			src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
			alt: "Hero section demo image showing interface components",
		},
	},
	{
		heading: "Something clever here about the company",
		description:
			"Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.",

		image: {
			src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
			alt: "Hero section demo image showing interface components",
		},
	},
	{
		heading: "Something clever here about the company",
		description:
			"Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.",

		image: {
			src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
			alt: "Hero section demo image showing interface components",
		},
	},
	{
		heading: "Something clever here about the company",
		description:
			"Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.",

		image: {
			src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
			alt: "Hero section demo image showing interface components",
		},
	},
];

interface ImageInterface {
	src: string;
	alt: string;
}

interface Industry {
	heading: string;
	description: string;
	image: ImageInterface;
}

const imageFirstMagazine = (industry: Industry) => {
	return (
		<>
			<img
				src={industry.image.src}
				alt={industry.image.alt}
				className="max-h-96 w-full h-full rounded-md object-cover"
			/>
			<div className="flex flex-col items-center text-center lg:items-start lg:text-left h-full">
				<h3>Who We Are</h3>
				<h2 className="my-6">{industry.heading}</h2>
				<p className="mb-8 max-w-xl text-muted-foreground">
					{industry.description}
				</p>
			</div>
		</>
	);
};

const textFirstMagazine = (industry: Industry) => {
	return (
		<>
			<div className="flex flex-col items-center text-center lg:items-start lg:text-left h-full">
				<h3>Who We Are</h3>
				<h2 className="my-6">{industry.heading}</h2>
				<p className="mb-8 max-w-xl text-muted-foreground">
					{industry.description}
				</p>
			</div>
			<img
				src={industry.image.src}
				alt={industry.image.alt}
				className="max-h-96 w-full h-full rounded-md object-cover"
			/>
		</>
	);
};

const renderIndustry = (industry: Industry, index: number) => {
	const isOdd = index % 2 !== 0;
	return (
		<div
			key={`${industry?.heading}_` + index}
			className="grid items-stretch gap-36 mx-24 my-20 lg:grid-cols-2 h-full"
		>
			{isOdd ? textFirstMagazine(industry) : imageFirstMagazine(industry)}
		</div>
	);
};

export default async function Industries() {
	return (
		<section
			id="industries"
			className=" p-6 flex items-center"
		>
			<div className="flex flex-col">
				{industries.map((industry, index) => renderIndustry(industry, index))}
			</div>
		</section>
	);
}
