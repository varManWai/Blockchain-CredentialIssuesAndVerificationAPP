import "../styles/globals.css";
import Final_Layout from "../components/Layout/final_layout";
import { useRouter } from "next/router";

// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {


  const GetContent = () => {
    const path = useRouter();

    let criteria;
    let footer = true;

    if (path.pathname.includes("/educator_acc") ||
      path.pathname.includes("/student_acc")) {
      criteria = "none";
      footer = false;
    } else if (path.pathname.includes("/educator")) {
      criteria = "educator";
      footer = false;
    } else if (
      path.pathname.includes("/student")
    ) {
      criteria = "student";
      footer = false;
    } else {
      criteria = "visitor";
      footer = true;
    }

    return (
      // <GoogleReCaptchaProvider
      //   reCaptchaKey="6LeqefIiAAAAAApQ-nnRCB3gnMG4VYMzkK0BTPFO"
      //   scriptProps={{
      //     async: false,
      //     defer: false,
      //     appendTo: "head",
      //     nonce: undefined,
      //   }}
      // >
      <Final_Layout criteria={criteria} footer={footer}>
        <Component {...pageProps} />
      </Final_Layout>
      // </GoogleReCaptchaProvider>
    );
  };

  return (
    <>
      <GetContent />
    </>
  );
}

export default MyApp;
