import Head from "next/head";
import { Inter } from "next/font/google";
import homeStyles from "@/styles/Home.module.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Ekip Kalir&apos;s Portfolio Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={homeStyles.container}>
        <div className={homeStyles.imageContainer}>
          <Image
            src="/images/home-background.jpg"
            layout="fill"
            objectFit="cover"
            alt="home-background"
          />
        </div>
        <h5 className={homeStyles.h5}>Welcome to my personal page.</h5>
        <p className={homeStyles.p}>
          This is my personal portfolio page. Having a system engineer
          background, I am coming from the jungle of computer nerds compared to
          computer science coders. I love to learn new things and improve my
          skills.
        </p>
        <p className="">
          <small className={homeStyles.small}>Last updated 3 mins ago</small>
        </p>
      </div>
    </>
  );
};

export default HomePage;
