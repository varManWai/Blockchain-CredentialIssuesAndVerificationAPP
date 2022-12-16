import AllCertificate from "../../../components/Certificates/all_certificate"

import CertificateModel from "../../../models/certificate";
import connectMongo from '../../../utils/connectMongo';


import { useSession } from "next-auth/react";

export default function Certificates({Certificates}) {

  // const [session, loading] = useSession();

  // console.log(session);
  // console.log(loading);


    return (
        <div>
            <AllCertificate Certificates={Certificates} path="certificates"/>
        </div>
    )
}

export const getServerSideProps = async () => {

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
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
}