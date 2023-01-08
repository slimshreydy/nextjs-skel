import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/tailwind.css";

function TemplateApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>Nextjs Skeleton App</title>
      </Head>

      <div className="min-h-screen bg-black">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default TemplateApp;
