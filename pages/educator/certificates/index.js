import AllCertificate from "../../../components/Credentials/allCredentials";

import CertificateModel from "../../../models/certificate";
import connectMongo from "../../../utils/connectMongo";
import GroupModel from "../../../models/group";

import { getSession, useSession } from "next-auth/react";
import Certificate_Educator from "../../../models/certificate_educator";
import Educator from "../../../models/educator";
import { Types } from "mongoose";

export default function Certificates({ Certificates, groupsArr }) {
  return (
    <div>
      <AllCertificate
        Certificates={Certificates}
        path="certificates"
        groupsArr={groupsArr}
      />
    </div>
  );
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

  // console.log(session.user.email);

  try {
    await connectMongo();

    const { _id } = await Educator.findOne({ email: session.user.email });
    // console.log(_id);

    const groups = await GroupModel.find({ educatorID: _id });

    const groupsArr = [];
    const groupsSelection = await groups.map(async (group) => {
      groupsArr.push({
        value: group._id,
        label: group.groupName,
      });
    });

    const certArr = await Certificate_Educator.find({ educatorID: _id });

    const tempCertificate = await CertificateModel.find().distinct("address");

    const temp = new Map();

    const certificates = await certArr.map(async (certID) => {
      const certificate = await CertificateModel.findById({
        _id: certID.certificateID,
      });

      if (!temp.get(certificate.address)) {
        // console.log("running");
        temp.set(certificate.address, certificate._id);
      }

      return certificate;
    });

    const certificatesData = await Promise.all(certificates).then((values) => {
      return values;
    });

    const finalCert = [];

    await temp.forEach(async (value, key) => {
      // console.log(key);
      let objectKey = Types.ObjectId(value);
      const cert = await CertificateModel.findById(objectKey);

      finalCert.push(cert);
    });

    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
      props: {
        Certificates: JSON.parse(JSON.stringify(finalCert)),
        groupsArr: JSON.parse(JSON.stringify(groupsArr)),
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
};
