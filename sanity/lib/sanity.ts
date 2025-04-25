// src/lib/sanity.ts
import { createClient } from "@sanity/client";

export const sanity = createClient({
	projectId: "p6imf0ec",
	dataset: "production",
	apiVersion: "2023-10-10",
	useCdn: false,
	token: process.env.SANITY_READ_TOKEN,
});
