import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  useCdn: false,
  dataset: "production",
  projectId: "shryonlo",
  apiVersion: "2025-08-25",
});

export const builder = imageUrlBuilder(client);
