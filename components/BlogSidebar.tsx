import { Post } from "@/lib/types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Facebook, Twitter } from "./Icons";

type Props = {
  post: Post;
};

export default function BlogSidebar({ post }: Props) {
  return (
    <div className="flex flex-col not-prose">
      <div className="flex flex-col">
        <span className="text-xl font-medium">Share Post</span>
        <div className="flex gap-3 my-3">
          <a
            className="text-neutral-600"
            rel="noopener"
            href={`http://twitter.com/share?url=${process.env.NEXT_PUBLIC_URL}/${post.slug}`}
          >
            <Twitter />
          </a>
          <a
            className="text-neutral-600"
            rel="noopener"
            href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_URL}/${post.slug}`}
          >
            <Facebook />
          </a>
        </div>
        <div className="flex flex-col gap-1 my-4">
          <ul>
            {post.content.headings.map((heading, key) => (
              <Link key={key} href={`#${heading.id}`}>
                <li
                  style={{
                    textIndent: heading.rank > 2 ? 2.5 ** heading.rank : 0,
                  }}
                  className={`text-neutral-500 font-medium hover:text-neutral-800`}
                >
                  • {heading.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
