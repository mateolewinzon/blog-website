import Head from "next/head";
import { twMerge } from "tailwind-merge";
import { Inter } from "@next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] ,variable: '--font-inter',});

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <>
      <Head>
        <title>Blog website</title>
        <meta
          name="description"
          content="Stay up to date and hear from our experts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={twMerge(inter.variable, "font-sans" )}>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
