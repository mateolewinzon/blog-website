export default function Header() {
  return (
    <header className="z-30 bg-white bg-opacity-80 shadow fixed top-0 left-0 w-full backdrop-blur-lg">
      <div className="flex h-20 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 mx-auto w-full items-center">
        <span className="font-black text-2xl lg:text-3xl">Blogcat</span>
      </div>
    </header>
  );
}
