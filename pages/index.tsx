import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>GitHub Search Lite</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-darker-navy">
        <Navbar />
      </main>
    </div>
  );
};

export default Home;
