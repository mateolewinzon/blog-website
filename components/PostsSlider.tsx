import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { getUrl } from "@/lib/sanity-client";
import type { Post } from "@/lib/types";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  posts: Post[];
};

// Couldn't get Next/link to distinguish between drag and click

export default function PostsSlider({ posts }: Props) {
  const [isClick, setIsClick] = useState(false);
  const router = useRouter();

  useEffect(() => {
    posts.forEach((post) => router.prefetch(`/${post.slug}`));
  }, [posts, router]);

  return (
    <Slider
      {...{
        dots: true,
        infinite: true,
        arrows: false,
      }}
    >
      {posts.map((post, key) => (
        <li key={key}>
          <a
            draggable={false}
            onMouseDown={() => setIsClick(true)}
            onMouseMove={() => setIsClick(false)}
            onClick={() => isClick && router.push(`/${post.slug}`)}
            className='cursor-pointer'
          >
            <div className="grid md:grid-cols-2 gap-3">
              <div className="relative w-full h-64">
                <Image
                  alt={post.title}
                  src={getUrl(post.image).width(1280).width(720).url()}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-4xl line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 text-lg line-clamp-3">{post.teaser}</p>
                <p className="text-sm text-gray-900 font-medium">
                  {post.date.slice(0, 10)}
                </p>
              </div>
            </div>
          </a>
        </li>
      ))}
    </Slider>
  );
}
