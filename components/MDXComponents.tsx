import NextImage from "next/image";

const Anchor = (props: React.HTMLProps<HTMLAnchorElement>) => (
  <a target="_blank" rel="noopener" {...props}>
    {props.children}
  </a>
);

const Image = (props: React.HTMLProps<HTMLImageElement>) => (
  <NextImage
    height={900}
    width={1600}
    alt={props.alt!}
    src={props.src!}
    className="shadow-md"
  />
);

const components = {
  a: Anchor,
  img: Image
};

export default components;
