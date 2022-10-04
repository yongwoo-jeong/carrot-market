import "../styles/globals.css";
import type { AppProps } from "next/app";

function myApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto w-full max-w-xl">
      <Component {...pageProps} />
    </div>
  );
}

export default myApp;
