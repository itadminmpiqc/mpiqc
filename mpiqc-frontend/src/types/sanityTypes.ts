import { type SanityDocument } from "next-sanity";

interface LocalizedText {
	en: string;
	fr: string;
}

// content structure
export interface MagazineContent {
	header: LocalizedText;
	paragraph: LocalizedText;
	subHeader: LocalizedText;
	image?: string;
	_id: string;
}
export interface Service {
	description: LocalizedText;
	service: LocalizedText;
}

interface Certification {
	certificationImage: string;
	alt: string;
}

export interface Location {
	address: LocalizedText;
	city: LocalizedText;
	email: string;
	phoneNumbers: Array<string>;
	_key: string;
}

interface TeamMember {
	header: LocalizedText;
	paragraph: LocalizedText;
	subHeader: LocalizedText;
}

export interface Navigation extends SanityDocument {
	title: string;
	logo: {
		alt: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
	navigationCategories: LocalizedText[];
}

export interface CategoryInterface {
	en: string;
	fr: string;
}

export interface DropdownItems {
	en: string;
	fr: string;
	enRoute: string;
	frRoute: string;
}

// Section Interfaces
export interface WelcomeSectionData {
	header: LocalizedText;
	paragraph: LocalizedText;
	title: string;
}

export interface WhoWeAreSectionData {
	magazineContent: MagazineContent;
}

export interface OurCapabilitiesSectionData {
	header: LocalizedText;
	subHeader: LocalizedText;
	services: Service[];
}

export interface CertificationSectionData {
	header: LocalizedText;
	description: LocalizedText;
	title: LocalizedText;
	certifications: Certification[];
}

export interface LocationSectionData {
	description: LocalizedText;
	globalLocations: Location[];
	header: LocalizedText;
	subHeader: LocalizedText;
}

export interface IndustriesSectionData {
	industriesContent: MagazineContent;
}

export interface WhyUsSectionData {
	magazineContent: MagazineContent;
}

export interface MeetTheTeamSectionData {
	header: LocalizedText;
	globalLocations: TeamMember[];
}

export interface ContactUsSectionData {
	paragraph: LocalizedText;
	header: LocalizedText;
	subHeader: LocalizedText;
}
