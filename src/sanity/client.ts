import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "3bimsx99",
  dataset: "production",
  apiVersion: "2024-04-16",
  useCdn: false,
});

// Get a pre-configured url-builder from your sanity client
export const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source) {
  return builder.image(source);
}
