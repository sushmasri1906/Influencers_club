import { type SchemaTypeDefinition } from "sanity";
import { influncerSchema } from "./influencer";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [influncerSchema],
};
