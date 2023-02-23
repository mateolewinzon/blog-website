import { GetStaticProps } from "next";
import Container from "@/components/Container";
import PostsCarousel from "@/components/PostsSlider";
import PostList from "@/components/PostsList";
import { client } from "@/lib/sanity";
import { GET_CATEGORIES, GET_POSTS } from "@/lib/queries";
import styles from "styles/Home.module.css";
import type { Category, Post } from "@/lib/types";

type Props = {
  posts: Post[];
  categories: Category[];
};

export default function Home({ posts, categories }: Props) {
  return (
    <Container>
      <div className={styles["bg-radial-red-cyan"]}>
        <div className="mx-auto p-4 my-5 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <section className="py-4 mt-14">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-4xl">Our blog</h1>
              <h2 className="text-grey">
                Stay up to date with the latest stories and commentary brought
                to you by Binance, the world's leading blockchain and crypto
                ecosystem.
              </h2>
            </div>
          </section>
          <section className="py-4">
            <PostsCarousel posts={posts} />
          </section>
          <section className="py-4">
            <PostList posts={posts} categories={categories} />
          </section>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = await client.fetch(GET_POSTS);
  const categories: Category[] = await client.fetch(GET_CATEGORIES);

  return {
    props: {
      posts,
      categories,
    },
  };
};
