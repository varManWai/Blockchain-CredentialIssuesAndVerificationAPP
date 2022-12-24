import AllCertificate from "../../../components/Credentials/allCredentials"

import CertificateModel from "../../../models/certificate";
import connectMongo from '../../../utils/connectMongo';

import { getSession, useSession } from "next-auth/react";
import Certificate_Educator from "../../../models/certificate_educator";
import Educator from "../../../models/educator";

export default function Certificates({ Certificates }) {
  return (
    <div>
      <AllCertificate Certificates={Certificates} path="certificates" />
    </div>
  )
}

export const getServerSideProps = async (context) => {

  const session = await getSession({ req: context.req });

    if (!session) {
      return {
        redirect: {
          destination: "/educator/login",
          permanent: false,
        },
      };
    }

  console.log(session.user.email);

  try {
    // console.log("CONNECTING TO MONGO");
    await connectMongo();
    // console.log("CONNECTED TO MONGO");

    // console.log("FETCHING DOCUMENTS");

    const { _id } = await Educator.findOne({ email: session.user.email });
    console.log(_id);

    const certArr = await Certificate_Educator.find({ educatorID: _id });
    console.log(certArr);

    const certificates = await certArr.map(async (certID) => {
      const certificate = await CertificateModel.findById({
        _id: certID.certificateID,
      });
      return certificate;
    });
    // console.log("FETCHED DOCUMENTS");

    console.log("---------------------------------------");
    // console.log(certificates);

    const certificatesData = await Promise.all(certificates).then((values) => {
      return values;
    });

    return {
      props: {
        Certificates: JSON.parse(JSON.stringify(certificatesData)),
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
}