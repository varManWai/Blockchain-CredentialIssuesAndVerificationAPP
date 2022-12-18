import AllCertificate from "../../../components/Certificates/all_certificate"

import CertificateModel from "../../../models/certificate";
import connectMongo from '../../../utils/connectMongo';


import { getSession, useSession } from "next-auth/react";

export default function Certificates({ Certificates }) {

  const { data: session, status } = useSession();




  return (
    <div>
      {console.log(session)}
      <AllCertificate Certificates={Certificates} path="certificates" />
    </div>
  )
}

export const getServerSideProps = async (context) => {

  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/educator_acc/login',
        permanent: false
      }
    }
  }



  try {
    // console.log("CONNECTING TO MONGO");
    await connectMongo();
    // console.log("CONNECTED TO MONGO");

    // console.log("FETCHING DOCUMENTS");
    const Certificates = await CertificateModel.find();
    // console.log("FETCHED DOCUMENTS");



    return {
      props: {
        Certificates: JSON.parse(JSON.stringify(Certificates)),
        Session: session,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
}