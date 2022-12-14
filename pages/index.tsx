import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../components/NavBar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import UserInfo from '../components/UserInfo/UserInfo';

const Home: NextPage = (user) => {
  return (
    <div className="">
      <Head>
        <title>Github User Search Lite II</title>
        <meta
          name="description"
          content="A simple Github User Search app built with Next.js, TypeScript, TailwindCSS, and GraphQL"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-start h-screen duration-300 bg-white-one dark:bg-darker-navy md:justify-center">
        <div className="flex flex-col w-full gap-2 p-6 md:max-w-[573px] lg:max-w-[730px]">
          <Navbar />
          <SearchBar />
          <UserInfo />
        </div>
      </main>
    </div>
  );
};

export default Home;
