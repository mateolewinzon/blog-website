import { Post } from "@/lib/types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Arrow, Facebook, Twitter } from "./Icons";
import PostCard from "./PostCard";
import SharePost from "./SharePost";
import TableOfContnets from "./TableOfContents";

type Props = {
  post: Post;
  relatedPosts: Post[];
};

export default function BlogSidebar({ post, relatedPosts }: Props) {
  return (
    <div className="flex flex-col not-prose gap-3">
      <SharePost slug={post.slug} />
      <TableOfContnets headings={post.content.headings} />
      <div className="flex flex-col gap-5">
        <span className="text-xl font-medium">Related Posts</span>
        <div className="flex flex-col gap-8">
          {relatedPosts.map((post, key) => (
            <PostCard key={key} post={post} isSmallPreview={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
