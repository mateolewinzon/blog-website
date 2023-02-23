import { MDXRemote } from "next-mdx-remote";
import BlogLayout from "@/components/BlogLayout";
import { mdxToHtml } from "@/lib/mdx";
import { client } from "@/lib/sanity";
import { GET_POST, GET_SLUGS } from "@/lib/queries";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { Post } from "@/lib/types";

type Props = {
  post: Post
};

export default function BlogPost({ post }: Props) {
  return (
      <BlogLayout post={post}>
        <MDXRemote {...post.content} />
      </BlogLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: Post = await client.fetch(GET_POST, { slug: params?.slug });
  const html = await mdxToHtml(post.content);

  if (!post.content) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: {
        ...post,
        content: html,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { slug: string }[] = await client.fetch(GET_SLUGS);

  return {
    paths: paths.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
};
