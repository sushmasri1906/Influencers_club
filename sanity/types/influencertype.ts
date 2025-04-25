export interface Influencer {
	_id: string;
	name: string;
	handle: string;
	followers: string;
	tagline: string;
	category: string;
	image: any;
	social: {
		instagram?: string;
		twitter?: string;
		youtube?: string;
		facebook?: string;
	};
}
