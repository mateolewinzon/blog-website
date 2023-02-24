import { getUrl } from "@/lib/sanity-client";
import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  post: Post;
  isSmallPreview?: boolean;
};

export default function PostCard({ post, isSmallPreview = false }: Props) {
  return (
    <Link href={`/${post.slug}`}>
      <div className="flex flex-col gap-4 rounded-lg">
        <Image
          alt={post.title}
          src={getUrl(post.image).width(1600).height(900).url()}
          height={900}
          width={1600}
          className="rounded-xl shadow-sm"
        />
        <div className="flex flex-col gap-3">
          <h4
            className={twMerge(
              "font-bold text-xl line-clamp-2",
              isSmallPreview && "text-base font-normal"
            )}
          >
            {post.title}
          </h4>
          {!isSmallPreview && (
            <>
              <p className="text-gray-700 text-base line-clamp-3">
                {post.teaser}
              </p>
              <p className="text-sm text-gray-900 font-medium">
                {post.date.slice(0, 10)}
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
