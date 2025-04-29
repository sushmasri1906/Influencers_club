import { defineField, defineType } from "sanity";

export const influncerSchema = defineType({
	name: "influncer",
	type: "document",
	title: "Influncer",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Influencer Name",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "image",
			type: "image",
			title: "profile image",
			validation: (rule) => rule.required(),
		}),
	],
});
