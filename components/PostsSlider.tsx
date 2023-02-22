import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { getUrl } from "@/lib/sanity-client";
import type { Post } from "@/lib/types";

type Props = {
  posts: Post[];
};

export default function PostsSlider({ posts }: Props) {
  return (
    <Slider
      {...{
        dots: true,
        infinite: true,
        speed: 500,
      }}
    >
      {posts.map((post) => (
        <li className="rounded-xl">
          <div className="grid md:grid-cols-2 gap-3">
            <div className="relative w-full h-64">
              <Image
                alt={post.title}
                src={getUrl(post.image).width(1280).width(720).url()}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-4xl line-clamp-2">{post.title}</h3>
              <p className="text-neutral-600 line-clamp-3">{post.teaser}</p>
              <p className="text-sm text-neutral-800">
                {post.date.slice(0, 10)}
              </p>
            </div>
          </div>
        </li>
      ))}
    </Slider>
  );
}
