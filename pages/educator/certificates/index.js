import AllCertificate from "../../../components/Certificates/all_certificate"

import CertificateModel from "../../../models/certificate";
import connectMongo from '../../../utils/connectMongo';

export default function Certificates({Certificates}) {
    return (
        <div>
            <AllCertificate Certificates={Certificates}/>
        </div>
    )
}

export const getServerSideProps = async () => {

  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("FETCHING DOCUMENTS");
    const Certificates = await CertificateModel.find();
    console.log("FETCHED DOCUMENTS");



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