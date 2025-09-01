import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  dataset: "production",
  projectId: "shryonlo",
  apiVersion: "2025-08-25",
  useCdn: process.env.NODE_ENV === "production",
});

export const builder = imageUrlBuilder(client);
