import "../styles/globals.css";
import Layout from "../components/Layout/layout";
import { useRouter } from "next/router";

// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  const GetContent = () => {
    const path = useRouter();

    let criteria;
    let footer = true;

    if (path.pathname.includes("/student")) {
      criteria = "student";
      footer = false;
    } else if (path.pathname.includes("/educator")) {
      criteria = "educator";
      footer = false;
    } else if (
      path.pathname.includes("/acc_educator") ||
      path.pathname.includes("/acc_student")
    ) {
      criteria = "none";
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
      <Layout criteria={criteria} footer={footer}>
        <Component {...pageProps} />
      </Layout>
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
