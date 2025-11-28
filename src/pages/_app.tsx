import * as React from "react";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Layout } from "@/components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export type NextPageWithLayout<
  P = Record<string, never>,
  IP = P,
> = React.FC<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const defaultGetLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultGetLayout;

  return (
    <div className={poppins.variable}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
