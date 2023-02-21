import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <section className="bg-gradient-to-r from-light-blue to-light-violet flex justify-center py-4 h-[200px] mt-20 w-full items-center">
        <div className="sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl w-full px-4">
          <h1 className="font-bold text-xl">Our blog</h1>
          <h2 className="text-sm">
            Stay up to date with the latest stories and commentary brought to
            you by Binance, the world's leading blockchain and crypto ecosystem.
          </h2>
        </div>
      </section>
    </Container>
  );
}
