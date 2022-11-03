import '../styles/globals.css'
import Layout from '../components/Layout/layout';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {

   const GetContent = () => {
    const path = useRouter();

    const layout = [
      { path: '/student', criteria: "student", footer: false },
      { path: '/educator', criteria: "educator", footer: false },
      { path: '/acc_student', criteria: "none", footer: false },
      { path: '/acc_educator', criteria: "none", footer: false }
    ]

    layout.map(val => {
      if (path.pathname.includes(val.path)) {
        return (
          <Layout criteria={val.criteria} footer={val.footer}>
            <Component {...pageProps} />
          </Layout>
        )
      }
    })

    //  else if (path.pathname.includes('/educator')) {
    // return (
    //   <Layout criteria="educator" footer={false}>
    //     <Component {...pageProps} />
    //   </Layout>
    // )
    // }

    return (
      <Layout criteria="Visitor" footer={true}>
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
