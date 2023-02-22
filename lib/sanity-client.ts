import createImageUrlBuilder from "@sanity/image-url";
import config from "./sanity-config";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const imageBuilder = createImageUrlBuilder(config);

export const getUrl = (source: SanityImageSource) =>
  imageBuilder.image(source).auto("format").fit("max");
