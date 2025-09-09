import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "shryonlo",
  apiVersion: "2025-08-25",
  useCdn: process.env.NODE_ENV === "production",
  dataset: process.env.NODE_ENV === "production" ? "production" : "development",
});

export const builder = imageUrlBuilder(client);
