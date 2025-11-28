import * as React from "react";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Flame of Hope | Home</title>
        <meta name="description" content="Flame of Hope Web Application" />
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Welcome to Flame of Hope
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Your application is ready to go. Start building amazing features!
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
