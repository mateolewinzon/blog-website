import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkToc from "remark-toc";
import rehypeExtractHeadings from "./extractHeadings";
import type { Heading } from "./types";

export async function mdxToHtml(mdx: any) {
  const headings: Heading[] = [];

  const mdxSource = await serialize(mdx, {
    mdxOptions: {
      remarkPlugins: [remarkToc],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
        [rehypeExtractHeadings, { rank: 2, headings }],
      ],
    },
  });
  
  return {...mdxSource, headings};
}
