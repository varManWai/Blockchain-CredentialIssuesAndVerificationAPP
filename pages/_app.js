import "../styles/globals.css";
import Final_Layout from "../components/Layout/final_layout";
import { useRouter } from "next/router";

// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import "antd/dist/antd.css";
import { useLayoutEffect } from "react";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }) {

  const path = useRouter();

  let criteria;
  let footer = true;

  if (path.pathname.includes("/educator_acc") ||
    path.pathname.includes("/student_acc")) {
    criteria = "none";
    footer = false;
  } else if (path.pathname.includes("/educator")) {
    criteria = "educator";
  } else if (
    path.pathname.includes("/student")
  ) {
    criteria = "student";
  } else {
    criteria = "visitor";
  }



  return (
    <>
      <SessionProvider>
        <Final_Layout criteria={criteria} footer={footer}>
          <Component {...pageProps} />
        </Final_Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
