import View_Certificate from "../../../components/Credentials/viewCredential"

import CertificateModel from "../../../models/certificate";
import connectMongo from '../../../utils/connectMongo';
import GroupModel from "../../../models/group";
import { getSession } from "next-auth/react";

export default function viewCertificate({ CertificateData, GroupData }) {
  return (
    <div>
      <View_Certificate Certificate={CertificateData} CredentialType="certificate" GroupData={GroupData} />
    </div>
  )
}

export const getServerSideProps = async (context) => {

  const { id } = context.query;

  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/educator/login",
        permanent: false,
      },
    };
  }

  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("FETCHING DOCUMENTS");
    const Certificate = await CertificateModel.findById(id);
    console.log("FETCHED DOCUMENTS");

    console.log(Certificate);

    const Group = await GroupModel.findById(Certificate.groupID);

    console.log(Group);

    return {
      props: {
        CertificateData: JSON.parse(JSON.stringify(Certificate)),
        GroupData: JSON.parse(JSON.stringify(Group)),
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
}