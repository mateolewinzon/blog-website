import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Category, Post } from "@/lib/types";
import PostCard from "@/components/PostCard";

type Props = {
  categories: Category[];
  posts: Post[];
};

export default function PostList({ categories, posts }: Props) {
  const [category, setCategory] = useState<string>("");

  return (
    <>
      <div className="flex my-2 gap-2">
        {categories.map((c, key) => (
          <button
            key={key}
            onClick={() =>
              setCategory((current) => (current === c.name ? "" : c.name))
            }
            className={twMerge(
              "p-4 rounded-full text-gray-500 font-medium hover:text-gray-600",
              c.name === category && "text-gray-900"
            )}
          >
            {c.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {posts
          .filter((post) => category === "" || post.category === category)
          .map((post, key) => (
            <PostCard key={key} post={post} />
          ))}
      </div>
    </>
  );
}
