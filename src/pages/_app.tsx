import * as React from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export type NextPageWithLayout<
  P = Record<string, never>,
  IP = P,
> = React.FC<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}
