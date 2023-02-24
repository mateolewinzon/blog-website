import { MDXRemoteSerializeResult } from "next-mdx-remote/dist";

export type Heading = { title: string; id: string; rank: number };

export type Post = {
  _id: string;
  title: string;
  date: string;
  slug: string;
  content: MDXRemoteSerializeResult & {
    headings: Heading[];
  };
  teaser: string;
  image: string;
  category: string;
};

export type Category = {
  name: string;
};
