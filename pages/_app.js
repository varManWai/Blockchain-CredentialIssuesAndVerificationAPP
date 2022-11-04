import '../styles/globals.css'
import Layout from '../components/Layout/layout';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {


  const GetContent = () => {
    const path = useRouter();

    let criteria;
    let footer = true;

    if (path.pathname.includes('/student')) {
      criteria = "student";
      footer = false;
    }
    else if (path.pathname.includes('/educator')) {
      criteria = "educator";
      footer = false;
    }
    else if (path.pathname.includes('/acc_educator') || path.pathname.includes('/acc_student')) {
      criteria = "none";
      footer = false;
    } else {
      criteria = "visitor";
      footer = true;
    }

    console.log(criteria);

    return (
      <Layout criteria={criteria} footer={footer}>
        <Component {...pageProps} />
      </Layout>
    )
  }


  return (
    <>
      <GetContent />
    </>
  )
}

export default MyApp
