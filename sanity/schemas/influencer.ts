// schemas/influencer.ts
export default {
	name: "influencer",
	title: "Influencer",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "role",
			title: "Role",
			type: "string",
		},
		{
			name: "tag",
			title: "Tag",
			type: "string",
		},
		{
			name: "followers",
			title: "Followers",
			type: "string",
		},
		{
			name: "social",
			title: "Social Links",
			type: "object",
			fields: [
				{
					name: "instagram",
					title: "Instagram",
					type: "url",
				},
				{
					name: "twitter",
					title: "Twitter",
					type: "url",
				},
				{
					name: "facebook",
					title: "Facebook",
					type: "url",
				},
				{
					name: "youtube",
					title: "YouTube",
					type: "url",
				},
			],
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true, // Enables cropping and focusing
			},
		},
	],
};
