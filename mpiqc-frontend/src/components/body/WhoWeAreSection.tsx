import "../../app/globals.css";
import { WhoWeAreSectionData } from "@/types/sanityTypes";
import { PortableImageFirstMagazine } from "../reusable/magazines";

export default function WhoAreWe({
	data,
	language,
}: {
	data: WhoWeAreSectionData | null;
	language: "en" | "fr";
}) {
	const magazineContent = data?.magazineContent;

	return (
		<section
			id="who-we-are"
			className="flex items-center mt-24 lg:nt-0 justify-center mx-12 md:mx-0 lg:mx-0"
		>
			{magazineContent && PortableImageFirstMagazine(magazineContent, language)}
		</section>
	);
}
