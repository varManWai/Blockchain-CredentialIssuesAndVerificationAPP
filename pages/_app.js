import "../styles/globals.css";
import EducatorLayout from "../components/Layout/layout";
import { useRouter } from "next/router";
import Head from "next/head";

// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import "antd/dist/antd.css";
import { useLayoutEffect } from "react";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }) {

  return (
    <>
      <SessionProvider session={pageProps.session}>
      <Head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="Certificate, badge, blockchain" />
          <meta name="author" content="Lai & Ho" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>CredBLOCK</title>
          <meta
            name="description"
            content="A Application for the credential issues and verification"
          />
          <link rel="icon" href="/images/ico.svg" />
        </Head>
        <EducatorLayout>
          <Component {...pageProps} />
        </EducatorLayout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
