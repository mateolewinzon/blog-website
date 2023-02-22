import Container from "@/components/Container";
import styles from "styles/Home.module.css";
import { GetStaticProps } from "next";
import { client } from "@/lib/sanity";
import { GET_POSTS } from "@/lib/queries";
import { Post } from "@/lib/types";
import PostCard from "@/components/PostCard";
import PostsCarousel from "@/components/PostsSlider";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <Container>
      <div className={styles["bg-radial-red-cyan"]}>
        <section className="flex justify-center py-4 mt-20 w-full items-center">
          <div className="flex flex-col gap-1 w-full px-4 py-6 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
            <h1 className="font-bold text-4xl">Our blog</h1>
            <h2 className="text-grey">
              Stay up to date with the latest stories and commentary brought to
              you by Binance, the world's leading blockchain and crypto
              ecosystem.
            </h2>
          </div>
        </section>
        <section className="mx-auto p-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <PostsCarousel posts={posts} />
        </section>
        <section className="mx-auto p-4 my-5 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard post={post} />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = await client.fetch(GET_POSTS);

  return {
    props: {
      posts,
    },
  };
};
