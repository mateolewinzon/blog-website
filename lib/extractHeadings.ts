import { hasProperty } from "hast-util-has-property";
import { headingRank } from "hast-util-heading-rank";
import { toString } from "hast-util-to-string";
import { visit } from "unist-util-visit";
import { Root } from "hast";

/**
 * This is a plugin for next-mdx-remote
 *
 * idea taken from https://github.com/hashicorp/next-mdx-remote/issues/231
 *
 * Extracts headings from a unified tree.
 *
 * To be used *AFTER* the `rehype-slug` plugin.
 */

type ExtractHeadingsConfig = {
  targetRank: number;
  headings: { title: string; id: string; rank: number }[];
};

export default function rehypeExtractHeadings({
  targetRank = 2,
  headings,
}: ExtractHeadingsConfig) {
  return (tree: Root) => {
    visit(tree, "element", function (node) {
      const rank = headingRank(node)!;

      if (rank >= targetRank && hasProperty(node, "id")) {
        headings.push({
          title: toString(node),
          id: node.properties!.id!.toString(),
          rank,
        });
      }
    });
  };
}
