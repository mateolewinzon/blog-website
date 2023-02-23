import Head from "next/head";
import Image from "next/image";
import { getUrl } from "@/lib/sanity-client";
import { Post } from "@/lib/types";
import BlogSidebar from "./BlogSidebar";
import Container from "./Container";

type Props = {
  post: Post;
  children: React.ReactNode;
};

export default function BlogLayout({ post, children }: Props) {
  const imageUrl = getUrl(post.image).height(900).width(1600).url();

  return (
    <Container>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.teaser} />
        <meta name="og:description" content={post.teaser} />
        <meta name="og:image" content={imageUrl} />
      </Head>
      <div className="bg-radial-red-cyan">
        <div className="prose flex gap-4 mx-auto p-4 mt-20 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <div className="flex-auto w-2/3">
            <h1 className="my-5">{post.title}</h1>
            <Image alt={post.title} height={900} width={1600} src={imageUrl} />
            {children}
          </div>
          <div className="my-5 hidden md:inline flex-auto w-1/3">
            <BlogSidebar post={post} />
          </div>
        </div>
      </div>
    </Container>
  );
}
