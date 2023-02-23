import { getUrl } from "@/lib/sanity-client";
import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  console.log(getUrl(post.image));
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
          <h4 className="font-bold text-xl line-clamp-2">{post.title}</h4>
          <p className="text-sm text-neutral-600 line-clamp-3">{post.teaser}</p>
          <p className="text-sm text-neutral-800">{post.date.slice(0, 10)}</p>
        </div>
      </div>
    </Link>
  );
}
