import { MDXRemoteSerializeResult } from "next-mdx-remote/dist";

export type Post = {
  title: string;
  date: string;
  slug: string;
  content: MDXRemoteSerializeResult & {
    headings: { title: string; id: string; rank: number }[];
  };
  teaser: string;
  image: string;
  category: string;
};

export type Category = {
  name: string;
};
