import { Facebook, Twitter } from "./Icons";

type Props = {
    slug: string
}

export default function SharePost({slug}: Props) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xl font-medium">Share Post</span>
      <div className="flex gap-3">
        <a
          className="text-gray-600"
          rel="noopener"
          href={`http://twitter.com/share?url=${process.env.NEXT_PUBLIC_URL}/${slug}`}
        >
          <Twitter />
        </a>
        <a
          className="text-gray-600"
          rel="noopener"
          href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_URL}/${slug}`}
        >
          <Facebook />
        </a>
      </div>
    </div>
  );
}
