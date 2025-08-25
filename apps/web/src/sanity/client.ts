import { createClient } from "next-sanity";
import * as process from "node:process";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  useCdn: false,
  projectId: "shryonlo",
  apiVersion: "2025-08-25",
  dataset: process.env.NODE_ENV === "development" ? "dev" : "production",
});

export const builder = imageUrlBuilder(client);
