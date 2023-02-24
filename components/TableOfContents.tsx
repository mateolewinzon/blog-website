import Link from "next/link";
import { Arrow } from "./Icons";
import type { Heading } from "@/lib/types";

type Props = {
  headings: Heading[];
};

export default function TableOfContnets({ headings }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <ul>
        {headings.map((heading, key) => (
          <Link key={key} href={`#${heading.id}`}>
            <li
              style={{
                textIndent: heading.rank > 2 ? 2.5 ** heading.rank : 0,
              }}
              className={`text-gray-500 hover:text-gray-800`}
            >
              <Arrow /> {heading.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
