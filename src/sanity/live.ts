// @ts-ignore
import { defineLive } from "astro-sanity";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: "vX" }),
});
